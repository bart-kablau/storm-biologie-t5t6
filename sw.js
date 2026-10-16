/* =====================================================================
   sw.js: service worker voor de offline-modus van een oefen-app.
   Wordt bij deploy naar de app-root gekopieerd (tools/oefen-engine/offline.mjs).

   De SW downloadt zelf niets: dat doet de pagina (window.caches, zie het
   offline-scherm in index.html). De SW serveert alleen wat er al ligt.

   Caches (per app, want alle apps delen de origin bart-kablau.github.io):
     <scope>|meta        één item "__state": {build, media:{"video/x.mp4":"<hash>"}}
     <scope>|app|<build> html/js/css/fonts/speelles van één build
     <scope>|media       mp4/m4a, sleutel = url zonder query; versie staat in meta

   Regels:
   - version.json, offline.json, sw.js en alles met ?dl=1 (de pagina die een
     nieuwe versie downloadt): altijd netwerk, nooit uit de cache.
   - media in de cache: uit de cache, met Range-antwoorden (Safari speelt een
     video alleen af met 206-antwoorden).
   - app-bestanden: uit de cache van state.build als die er is, anders netwerk.
   - niets offline: de SW bemoeit zich nergens mee (gedrag zoals zonder SW).
   ===================================================================== */
const SCOPE = new URL(self.registration.scope).pathname;
const META = SCOPE + '|meta';
const MEDIA = SCOPE + '|media';
const APP = b => SCOPE + '|app|' + b;
const NOOIT = ['version.json', 'offline.json', 'sw.js'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

async function staat() {
  try {
    const r = await (await caches.open(META)).match('__state');
    return r ? await r.json() : null;
  } catch (e) { return null; }
}

/* sleutel: absolute url zonder query; een map wordt map/index.html */
function sleutel(url) {
  const u = new URL(url); u.search = ''; u.hash = '';
  if (u.pathname.endsWith('/')) u.pathname += 'index.html';
  return u.href;
}

async function mediaAntwoord(req, resp) {
  const blob = await resp.blob();
  const type = resp.headers.get('Content-Type') || 'video/mp4';
  const range = req.headers.get('Range');
  if (!range) {
    return new Response(blob, { status: 200, headers: { 'Content-Type': type, 'Content-Length': String(blob.size), 'Accept-Ranges': 'bytes' } });
  }
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  let start = m && m[1] !== '' ? parseInt(m[1], 10) : 0;
  let eind = m && m[2] !== '' ? parseInt(m[2], 10) : blob.size - 1;
  if (m && m[1] === '' && m[2] !== '') { start = Math.max(0, blob.size - parseInt(m[2], 10)); eind = blob.size - 1; }
  eind = Math.min(eind, blob.size - 1);
  if (start >= blob.size || start > eind) {
    return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + blob.size } });
  }
  return new Response(blob.slice(start, eind + 1, type), {
    status: 206,
    headers: { 'Content-Type': type, 'Content-Length': String(eind - start + 1), 'Content-Range': `bytes ${start}-${eind}/${blob.size}`, 'Accept-Ranges': 'bytes' },
  });
}

async function beantwoord(req) {
  const key = sleutel(req.url);
  const pad = new URL(key).pathname;
  const st = await staat();
  if (st && st.media) {
    const rel = pad.slice(SCOPE.length);
    if (st.media[rel]) {
      const r = await (await caches.open(MEDIA)).match(key);
      if (r) return mediaAntwoord(req, r);
    }
  }
  if (st && st.build) {
    const r = await (await caches.open(APP(st.build))).match(key);
    if (r) return r;
  }
  return fetch(req);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin || !u.pathname.startsWith(SCOPE)) return;
  if (NOOIT.includes(u.pathname.slice(SCOPE.length))) return;
  if (u.searchParams.has('dl')) return;   // de pagina downloadt een nieuwe versie: altijd netwerk
  e.respondWith(beantwoord(req));
});
