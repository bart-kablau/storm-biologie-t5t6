'use strict';
/* =========================================================================
   SPEELLES Biologie Thema 5 & 6 (havo 2, BVJ MAX 8.2)
   Inhoud van dit hoofdstuk. De engine (engine.js) en de biologie-bouwstenen
   (biologie/teken.js, biologie/vis.js) komen uit tools/speelles-engine via sync.mjs.
   Bron (leidend): ../../02-verwerkt/brontekst.md (thema 6) en brontekst-thema5.md.
   Vet in de begrippenlijst = letterlijk kennen: daarvoor de gatentekst per les.
   Bundel-id's = onderwerpen in de oefen-app en de films.
   ========================================================================= */

/* meerkeuze-helper: Q(vraag, goed, [[fout, uitleg, valkuil?]], waarom, klein?, beeld?) */
const Q = (vraag, goed, fouten, w, klein, beeld) => ({ t: 'mc', vraag, klein, beeld, w, opties: [{ t: goed, goed: true }, ...fouten.map(([t, fout, mis]) => ({ t, fout, mis }))] });
const toon = (tekst, visual, p, extra = {}) => ({ t: 'toon', tekst, visual, p, ...extra });
const uitleg = (tekst, groot) => ({ t: 'toon', tekst, groot, wacht: false });
const beeldSvg = (inhoud, vb = '0 0 200 120') => `<svg viewBox="${vb}" aria-hidden="true">${inhoud}</svg>`;
const spiegel = (svg, x, y, s) => `<g transform="translate(${x} ${y}) scale(${-s} ${s})">${svg}</g>`;
const KORAAL = `<path d="M50 92 C48 70 36 60 30 40 M50 92 C52 70 62 56 70 34 M50 80 C44 66 52 50 50 26 M38 62 C30 58 24 52 22 44 M62 60 C70 56 76 50 80 42" stroke="#F07A5A" stroke-width="7" fill="none" stroke-linecap="round"/>` +
  [[30, 40], [70, 34], [50, 26], [22, 44], [80, 42], [44, 60], [58, 52]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#6FCF7A"/>`).join('');

/* ---------- valkuilen (misvattingen), E = ecologie, G = erfelijkheid ---------- */
const VALKUILEN = {
  E1: ['Biotoop = alles in het gebied', 'biotoop = de konijnen, het gras én het weer'],
  E2: ['Populatie van verschillende soorten', 'vossen en konijnen samen = één populatie'],
  E3: ['Dood = abiotisch', 'een dood blad hoort bij de levenloze natuur'],
  E4: ['Levensgemeenschap met levenloze dingen', 'levensgemeenschap = dieren, planten én de bodem'],
  E5: ['Consument 1e orde = 1e schakel', 'de alg is consument van de 1e orde'],
  E6: ['Pijl verkeerd om', 'alg → watervlo: de alg eet de watervlo'],
  E7: ['Keten begint niet bij een plant', 'de zon is de eerste schakel'],
  E8: ['Gif verdunt in de keten', 'het laatste dier heeft het minste gif'],
  E9: ['Biomassa = massa', 'biomassa = het gewicht van het dier'],
  E10: ['Afvaleter = reducent', 'een regenworm is een reducent'],
  E11: ['Rotten is nutteloos', 'rotten is alleen vies'],
  E12: ['Plastic verdwijnt vanzelf', 'plastic lost op in zee'],
  E13: ['Plant eet aarde', 'een boom haalt zijn hout uit de bodem'],
  E14: ['Alleen dieren maken CO₂', 'planten verbranden geen voedsel'],
  E15: ['Evenwicht = alles blijft gelijk', 'in evenwicht blijven er altijd 200 konijnen'],
  E16: ['Teleologie: het dier doet het vóór de natuur', 'de vos eet konijnen om de natuur in balans te houden'],
  E17: ['Evenwicht gaat over één soort', 'evenwicht = één populatie'],
  E18: ['Territorium tegen andere soorten', 'een territorium verdedig je tegen roofdieren'],
  E19: ['Rangorde = altijd vechten', 'in een rangorde is altijd ruzie'],
  E20: ['Samenwerking tussen verschillende soorten', 'vos en uil werken samen'],
  E21: ['Commensalisme = allebei voordeel', 'alg op schors helpt de boom'],
  E22: ['Roofdier = parasiet', 'de vos is een parasiet van het konijn'],
  E23: ['Gastheer heeft het voordeel', 'de teek is de gastheer'],
  G1: ['Gen groter dan chromosoom', 'een gen bestaat uit chromosomen'],
  G2: ['Niet elke cel heeft al het DNA', 'een huidcel heeft alleen het DNA voor huid'],
  G3: ['DNA buiten de celkern', 'chromosomen zwemmen in je bloed'],
  G4: ['Dochtercel = vrouwelijk', 'een jongen heeft geen dochtercellen'],
  G5: ['Celdeling halveert', 'bij celdeling krijgt elke cel de helft'],
  G6: ['Genotype = fenotype', 'wat je ziet is precies je DNA'],
  G7: ['Fenotype = alleen wat je ziet', 'je bloedgroep hoort niet bij je fenotype'],
  G8: ['Verworven eigenschappen erf je', 'een litteken geef je door aan je kind'],
  G9: ['Jongen erft van papa, meisje van mama', 'een jongen krijgt zijn X van zijn vader'],
  G10: ['Geslachtscel heeft ook paren', 'een eicel heeft 23 paren'],
  G11: ['Vrouw heeft XY', 'XY is een meisje'],
  G12: ['Meiose = gewone celdeling', 'een zaadcel heeft ook 46 chromosomen'],
  G13: ['Ongeslachtelijk geeft variatie', 'een stekje is anders dan de moederplant'],
  G14: ['Basen koppelen willekeurig', 'A past bij G'],
  G15: ['Allel = gen voor iets anders', 'allelen gaan over verschillende eigenschappen'],
  G16: ['Mutatie is altijd zichtbaar of slecht', 'gemuteerd = mutant = monster'],
  G17: ['Mutatie in een lichaamscel erf je', 'zonnebrand-mutatie krijgen je kinderen'],
  G18: ['Tumor = altijd kanker', 'elk gezwel is kanker'],
  G19: ['Uitzaaiing = tumor wordt groter', 'uitzaaien is groeien'],
};

/* ---------- bazen (elk is één denkfout) ---------- */
const BAAS = {
  biotoop: monster({ lijf: 'blob', kleur: '#9CCB6B', kleur2: '#3E7A2A', ogen: 1, extra: '<path d="M30 92 l6 -14 l6 14 M78 96 l5 -12 l5 12" fill="#6E4520"/>' }),
  pijlen: monster({ lijf: 'kever', kleur: '#7CC8EE', kleur2: '#1E5A86', ogen: 2, extra: '<path d="M20 20 l14 0 l-5 -5 M34 20 l-5 5" stroke="#EA580C" stroke-width="3" fill="none"/>' }),
  verdunner: monster({ lijf: 'spook', kleur: '#E9D3F0', kleur2: '#7A2E8A', ogen: 2 }),
  plastic: monster({ lijf: 'spook', kleur: '#CFEFFF', kleur2: '#2F7FB8', ogen: 2, extra: '<rect x="50" y="78" width="20" height="12" rx="3" fill="#EA580C" opacity=".85"/>' }),
  aarde: monster({ lijf: 'plant', kleur: '#B6E35A', kleur2: '#4E8A1A', ogen: 2 }),
  draak: monster({ lijf: 'draak', kleur: '#F49A6A', kleur2: '#9A2E1A', ogen: 1, hoorns: false, vleugels: true }),
  ruzie: monster({ lijf: 'blob', kleur: '#F7A6A0', kleur2: '#B9363A', ogen: 2, hoorns: true }),
  klit: monster({ lijf: 'kever', kleur: '#8A5240', kleur2: '#3A1E14', ogen: 2 }),
  snipper: monster({ lijf: 'cel', kleur: '#FFE2C8', kleur2: '#D98A5A', ogen: 2, extra: '<path d="M40 92 l8 -6 l6 8 l8 -8" stroke="#8E5BB0" stroke-width="3" fill="none"/>' }),
  dochter: monster({ lijf: 'cel', kleur: '#F7C6DA', kleur2: '#B9487A', ogen: 2, extra: '<path d="M50 14 C56 6 64 6 70 14 C64 12 56 12 50 14Z" fill="#B9487A"/><circle cx="60" cy="12" r="4" fill="#F4B740"/>' }),
  erver: monster({ lijf: 'blob', kleur: '#D7B4EA', kleur2: '#5E2750', ogen: 2, extra: '<path d="M26 70 l10 4 M24 78 l12 0" stroke="#fff" stroke-width="3"/>' }),
  papa: monster({ lijf: 'blob', kleur: '#9CC7E0', kleur2: '#1E5A86', ogen: 2, extra: '<path d="M40 74 C46 70 54 70 60 74 C66 70 74 70 80 74" stroke="#3D1B33" stroke-width="5" fill="none" stroke-linecap="round"/>' }),
  verdubbelaar: monster({ lijf: 'cel', kleur: '#FFE27A', kleur2: '#C98A10', ogen: 2, hoorns: true }),
  rits: monster({ lijf: 'kever', kleur: '#F4B740', kleur2: '#8A5A00', ogen: 2, extra: '<path d="M44 96 h8 v-6 h8 v6 h8" stroke="#2F7FB8" stroke-width="3" fill="none"/>' }),
  mutant: monster({ lijf: 'cel', kleur: '#B7E07A', kleur2: '#4E8A1A', ogen: 3 }),
  remloos: monster({ lijf: 'cel', kleur: '#F59AA8', kleur2: '#A33A55', ogen: 1, extra: '<circle cx="34" cy="96" r="9" fill="url(#g-tumor)" stroke="#A33A55"/><circle cx="88" cy="98" r="7" fill="url(#g-tumor)" stroke="#A33A55"/>' }),
};

/* ---------- scènes voor 'koppel' (200 x 120) ---------- */
const lucht = `<rect width="200" height="120" rx="14" style="fill:var(--scene-lucht2)"/><path d="M0 92 C60 84 140 98 200 88 V120 H0Z" fill="url(#g-grond)"/>`;
const GEDRAG = {
  samenwerking: lucht + plaats(ORG.wolf(), 4, 36, .62) + plaats(ORG.wolf(), 54, 50, .58) + plaats(ORG.konijn(), 138, 60, .45) + `<path d="M120 76 h-10 M122 84 h-14" stroke="#9A8A94" stroke-width="2" stroke-linecap="round"/>`,
  territorium: lucht + `<path d="M10 40 C60 36 90 44 130 40" stroke="#6E4520" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="80" cy="56" r="48" fill="none" stroke="#EA580C" stroke-width="2" stroke-dasharray="6 5"/>` + plaats(ORG.roodborst(), 52, 2, .45) + `<text x="104" y="16" font-size="16" fill="#5E2750">♪ ♫</text>` + plaats(ORG.roodborst(), 150, 70, .32) + `<path d="M148 66 L176 54" stroke="#EA580C" stroke-width="2" stroke-dasharray="3 3"/>`,
  rangorde: lucht + plaats(ORG.kip(), 6, 36, .6) + `<path d="M36 34 l6 -10 l6 8 l6 -10 l6 10 l6 -8 l2 12Z" fill="#F4B740" stroke="#C98A10"/>` + plaats(ORG.kip(), 80, 52, .48) + plaats(ORG.kip(), 140, 60, .42) +
    [[30, 106, '1'], [104, 112, '2'], [160, 112, '3']].map(([x, y, n]) => `<circle cx="${x}" cy="${y - 4}" r="8" fill="#5E2750"/><text x="${x}" y="${y}" text-anchor="middle" font-size="11" fill="#fff">${n}</text>`).join(''),
  paarvorming: `<rect width="200" height="120" rx="14" style="fill:var(--scene-lucht2)"/><path d="M0 80 C60 74 140 86 200 78 V120 H0Z" fill="url(#g-water)" opacity=".55"/>` + plaats(ORG.zwaan(), 10, 22, .62) + spiegel(ORG.zwaan(), 190, 22, .62) + plaats(ORG.zwaan(), 84, 66, .26) + `<path d="M100 26 C94 18 84 22 90 30 L100 40 L110 30 C116 22 106 18 100 26Z" fill="#E0323A"/>`,
  concurrentie: lucht + plaats(ORG.muis(), 80, 66, .4) + plaats(ORG.vos(), 2, 40, .58) + spiegel(ORG.roofvogel(), 196, 2, .5) + `<path d="M62 80 L80 84 M142 44 L118 70" stroke="#EA580C" stroke-width="2.5" stroke-dasharray="4 3"/>`,
};

/* =========================================================================
   THEMA 6: ECOLOGIE (expeditie omhoog)
   ========================================================================= */
const T6 = [
  { id: 'niveaus', titel: 'Van één konijn tot de aarde', sub: 'Basisstof 1 · niveaus, biotisch en abiotisch', bol: svgStr(ORG.konijn()), orgs: ['konijn', 'gras'],
    stappen: [
      toon('Hoi Storm! Ik ben <b>Kiki</b>, jouw gids op deze expeditie. We beginnen bij één konijn en nemen de lift omhoog, tot de hele aarde. Druk op <b>elke verdieping</b>.', 'zoomlift', { start: 0, verdiepingen: [
        { naam: 'Individu', scene: 'individu', def: '<b>Eén organisme</b>, oftewel één levend wezen. Dit ene konijn.' },
        { naam: 'Populatie', scene: 'populatie', def: '<b>Een groep organismen van dezelfde soort die in één gebied samenleven.</b> Alleen konijnen, alleen in dit gebied.' },
        { naam: 'Levens­gemeenschap', scene: 'levensgemeenschap', def: '<b>Meerdere populaties van verschillende soorten die samenleven in één bepaald gebied.</b> Alles wat leeft in dit stukje bos.' },
        { naam: 'Ecosysteem', scene: 'ecosysteem', def: '<b>In één gebied vormen de levensgemeenschap en de biotoop samen een eenheid.</b> Levend én levenloos: ook zon, regen, wind en bodem.' },
        { naam: 'Biosfeer', scene: 'biosfeer', def: '<b>Alle ecosystemen op de wereld samen: het deel op, in of rond de aarde waar leven mogelijk is.</b>' },
      ], na: 'Elke verdieping kijkt een stapje verder in het <b>milieu</b> (de leefomgeving) van het konijn. Zoom gerust nog even op en neer.' }, { hint: 'Bezoek alle vijf de verdiepingen.' }),
      toon('Nu het lastigste woord: <b>biotoop</b>. Veel mensen denken dat dat het hele gebied is. Zet de lagen aan en uit en kijk goed.', 'lagenfilter', { lagen: [
        { id: 'levend', naam: 'Alleen levend', toon: ['levend'], uitleg: 'Alles wat leeft, plus wat ooit leefde (het dode blad) = de <b>levensgemeenschap</b>.<small>Invloeden hiervan heten biotische factoren.</small>' },
        { id: 'levenloos', naam: 'Alleen levenloos', toon: ['levenloos'], uitleg: 'Zon, regen, wind, temperatuur, steen, water = de <b>biotoop</b>.<small>Biotoop: alle abiotische factoren samen in één bepaald gebied.</small>' },
        { id: 'alles', naam: 'Alles samen', toon: ['levend', 'levenloos'], uitleg: 'Levensgemeenschap + biotoop = <b>ecosysteem</b>.' },
      ], na: 'Onthoud: in de <b>biotoop</b> staat <b>niets</b> wat leeft. Alleen het levenloze.' }, { hint: 'Probeer alle drie de knoppen.' }),
      toon('Sorteer: is dit een <b>biotische</b> of een <b>abiotische</b> factor voor het konijn? Tik op de goede bak (of sleep de kaart).', 'sorteer', {
        bakken: [{ id: 'bio', naam: 'Biotisch', sub: 'levende (en dode) natuur' }, { id: 'abio', naam: 'Abiotisch', sub: 'levenloze natuur' }],
        kaarten: [
          { t: 'Een vos die jaagt', org: 'vos', bak: 'bio', w: 'Een ander organisme: biotisch.', fout: 'Een vos leeft: hij hoort bij de levende natuur.' },
          { t: 'Veel regen', org: 'wolk', bak: 'abio', w: 'Weer is levenloos: abiotisch.', fout: 'Regen leeft niet. Weersomstandigheden zijn abiotisch.' },
          { t: 'Een dood blad', org: 'doodblad', bak: 'bio', w: 'Dood, maar het kwam van een levende boom: het hoort bij het levende (en dode) deel.', fout: 'Lastige! Dood is niet hetzelfde als levenloos. Het blad kwam van een levende boom, dus het is biotisch.', mis: 'E3' },
          { t: 'De temperatuur', org: 'thermometer', bak: 'abio', w: 'Levenloos: abiotisch.', fout: 'Temperatuur leeft niet: abiotisch.' },
          { t: 'Een ziekteverwekker', org: 'bacterie', bak: 'bio', w: 'Bacteriën leven: biotisch.', fout: 'Een ziekteverwekker is een organisme, bijvoorbeeld een bacterie. Biotisch.' },
          { t: 'Een zandige bodem', org: 'bodem', bak: 'abio', w: 'De bodem is levenloos: abiotisch.', fout: 'Zand leeft niet. De bodem is een abiotische factor.' },
          { t: 'Gras om te eten', org: 'gras', bak: 'bio', w: 'Gras leeft: biotisch.', fout: 'Gras is een plant, en planten leven.' },
          { t: 'Harde wind', org: 'wind', bak: 'abio', w: 'Wind is weer: abiotisch.', fout: 'Wind leeft niet.' },
        ], na: 'Biotisch = invloed van de <b>levende</b> natuur. Abiotisch = invloed van de <b>levenloze</b> natuur.' }),
      { t: 'snap', id: 'n-biotoop', vraag: 'Snap je het verschil tussen <b>biotoop</b>, <b>levensgemeenschap</b> en <b>ecosysteem</b>?',
        bewijs: [[Q('Wat hoort bij de biotoop van een weiland?', 'De hoeveelheid regen en zon', [['De koeien en het gras', 'Koeien en gras leven: die horen bij de levensgemeenschap. In de biotoop staat alleen het levenloze.', 'E1'], ['Alles wat in het weiland is', 'Dat is het ecosysteem: levensgemeenschap + biotoop samen.', 'E1'], ['Alle koeien samen', 'Dat is een populatie: één soort in één gebied.', 'E2']], 'Biotoop = alle abiotische factoren samen in één gebied.')],
          [Q('Een sloot met kikkers, waterplanten, slakken, het water en de modder. Hoe heet dit allemaal samen?', 'Een ecosysteem', [['Een biotoop', 'Kikkers en planten leven. De biotoop is alleen het water, de modder en het weer.', 'E1'], ['Een levensgemeenschap', 'Die bestaat alleen uit wat leeft. Het water en de modder doen hier ook mee.', 'E4'], ['Een populatie', 'Een populatie is één soort.', 'E2']], 'Levend + levenloos samen in één gebied = ecosysteem.')]],
        anders: [[toon('Andere manier: we gaan naar een <b>sloot</b>. Sorteer alles in de levensgemeenschap of in de biotoop.', 'sorteer', { bakken: [{ id: 'lg', naam: 'Levensgemeenschap', sub: 'alles wat leeft' }, { id: 'bt', naam: 'Biotoop', sub: 'alles wat levenloos is' }], kaarten: [
          { t: 'Kikker', bak: 'lg', w: 'Leeft.', fout: 'Een kikker leeft, dus levensgemeenschap.', mis: 'E1' }, { t: 'Modder', org: 'bodem', bak: 'bt', w: 'Levenloos.', fout: 'Modder leeft niet: biotoop.', mis: 'E4' },
          { t: 'Waterplant', org: 'gras', bak: 'lg', w: 'Leeft.', fout: 'Een plant leeft.', mis: 'E1' }, { t: 'Zonlicht', org: 'zon', bak: 'bt', w: 'Levenloos.', fout: 'Licht leeft niet.', mis: 'E4' },
          { t: 'Alg', org: 'alg', bak: 'lg', w: 'Leeft.', fout: 'Algen leven.', mis: 'E1' }, { t: 'Watertemperatuur', org: 'thermometer', bak: 'bt', w: 'Levenloos.', fout: 'Temperatuur leeft niet.', mis: 'E4' }],
          na: 'Beide bakken samen? Dat is het <b>ecosysteem</b> van de sloot.' })],
          [toon('Nog een manier: maak de definitie zelf af. Dit stuk is vetgedrukt in je lijst.', 'gatentekst', { term: 'Biotoop', zin: 'Alle [abiotische] factoren samen in één bepaald [gebied].', extra: ['biotische', 'organismen', 'land'], fout: { biotische: 'Biotisch is levend. In de biotoop zit juist alleen het levenloze.', organismen: 'Organismen leven. De biotoop is het levenloze deel.' }, mis: { biotische: 'E1', organismen: 'E1' } })]],
        dieper: [uitleg('Waarom al die niveaus? Op elk niveau stel je een andere vraag. <b>Individu</b>: hoe komt dit konijn de winter door? <b>Populatie</b>: hoeveel konijnen zijn er dit jaar? <b>Levensgemeenschap</b>: wie eet wie? <b>Ecosysteem</b>: wat doet een droge zomer met alles? <b>Biosfeer</b>: wat doet opwarming met de hele aarde? Ecologie onderzoekt al die <b>relaties</b> tussen organismen en hun milieu.', 'individu → populatie → levensgemeenschap<br>→ ecosysteem → biosfeer<small>Elke stap: een stukje verder in het milieu.</small>')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Populatie', zin: 'Een groep organismen van dezelfde [soort] die in één [gebied] samenleven.', extra: ['familie', 'land', 'kleur'], fout: { familie: 'Een familie is te klein. Het gaat om álle organismen van die soort in dat gebied.', land: 'Een land is geen goed woord hier: het gaat om één gebied. Wilde zwijnen in Duitsland en in Spanje zijn twee populaties.', kleur: 'Het gaat om dezelfde soort, niet dezelfde kleur.' } }),
      { t: 'baas', naam: 'De Alles-Biotoop', beeld: BAAS.biotoop, hp: 5, denkfout: 'De biotoop is alles in het gebied, ook de dieren en planten.', tekst: 'De Alles-Biotoop stopt alles in de biotoop, zelfs de konijnen. Laat zien dat jij de niveaus kent. Fout kost jou niks.',
        pool: [
          Q('Wat is de biotoop van een bos?', 'Alle abiotische factoren in dat bos samen', [['Alle dieren en planten in het bos', 'Dat is de levensgemeenschap.', 'E1'], ['Alles in het bos', 'Dat is het ecosysteem.', 'E1'], ['Eén boom', 'Eén boom is een individu.']], 'Biotoop = alleen het levenloze.'),
          Q('Alle merels in het Vondelpark. Wat is dat?', 'Een populatie', [['Een levensgemeenschap', 'Een levensgemeenschap heeft meerdere soorten.', 'E2'], ['Een ecosysteem', 'Daar hoort ook het levenloze bij.'], ['Een individu', 'Een individu is één merel.']], 'Eén soort, één gebied.'),
          Q('Is een dode boomstam biotisch of abiotisch?', 'Biotisch', [['Abiotisch, want hij is dood', 'Dood is niet hetzelfde als levenloos. Hij kwam van een levend organisme.', 'E3']], 'Het levende (en dode) deel van het milieu is biotisch.'),
          Q('Wat is een abiotische factor voor een vis?', 'De temperatuur van het water', [['De reiger die hem vangt', 'Een reiger leeft: biotisch.'], ['De algen die hij eet', 'Algen leven: biotisch.'], ['Een parasiet op zijn huid', 'Een parasiet leeft: biotisch.']], 'Abiotisch = levenloos.'),
          Q('Levensgemeenschap + biotoop = ...', 'ecosysteem', [['biosfeer', 'De biosfeer is alle ecosystemen op aarde samen.'], ['populatie', 'Een populatie is één soort.', 'E2'], ['milieu', 'Milieu is de leefomgeving van een organisme.']], 'Samen vormen ze één eenheid: het ecosysteem.'),
          Q('Wat hoort bij de levensgemeenschap van een meer?', 'De vissen, algen en waterplanten', [['Het water en de stenen', 'Die leven niet: biotoop.', 'E4'], ['Alles, ook het water', 'Dat is het ecosysteem.', 'E4'], ['Alleen de vissen', 'Ook de planten en algen horen erbij.']], 'Levensgemeenschap = alle populaties die er samenleven.'),
          Q('Wat is ecologie?', 'Onderzoek naar de relaties tussen organismen en hun milieu', [['De leer van het milieu goed houden', 'Dat is milieubescherming. Ecologie onderzoekt relaties.'], ['Onderzoek naar liefdesrelaties bij dieren', 'Relatie betekent hier: met elkaar te maken hebben, zoals eten en gegeten worden.'], ['Het tellen van dieren', 'Tellen hoort er soms bij, maar het gaat om relaties.']], 'Wetenschap binnen de biologie die de relaties tussen organismen en hun milieu onderzoekt.'),
          Q('Alle ecosystemen op aarde samen heet ...', 'de biosfeer', [['de biotoop', 'De biotoop is het levenloze in één gebied.', 'E1'], ['het milieu', 'Het milieu is de leefomgeving van één organisme.'], ['de levensgemeenschap', 'Die is van één gebied.']], 'Het deel op, in of rond de aarde waar leven mogelijk is.'),
        ] },
    ] },

  { id: 'voedselketen', titel: 'Wie eet wie?', sub: 'Basisstof 1 en 2 · voedselketen en voedselweb', bol: svgStr(ORG.watervlo()), orgs: ['alg', 'watervlo'],
    stappen: [
      toon('Even proberen, fout mag: tik de schakels van deze <b>sloot</b> in de goede volgorde. Wie wordt door wie gegeten?', 'ketting', { pijl: 'wordt gegeten door', eerste: 'Wat is de eerste schakel?', items: [
        { id: 'alg', naam: 'Alg', org: 'alg', label: 'producent', waarom: 'De alg maakt zelf voedsel met zonlicht (fotosynthese). Een voedselketen begint <b>altijd</b> met een plant.', mis: 'E7' },
        { id: 'vlo', naam: 'Watervlo', org: 'watervlo', label: 'consument 1e orde', waarom: 'De watervlo eet algen. Hij kan pas komen als er algen zijn.' },
        { id: 'baars', naam: 'Baars', org: 'baars', label: 'consument 2e orde', waarom: 'De baars eet watervlooien, dus hij komt na de watervlo.' },
        { id: 'snoek', naam: 'Snoek', org: 'snoek', label: 'consument 3e orde', waarom: 'De snoek eet baarzen: hij is de laatste schakel.' },
      ], na: 'Vier <b>schakels</b>. De pijl betekent: "wordt gegeten door". De <b>tweede</b> schakel is de consument van de <b>eerste</b> orde.' }),
      toon('In het echt eet bijna elk dier meer dan één ding. Dan lopen ketens door elkaar: een <b>voedselweb</b>. Tik op minstens drie soorten.', 'voedselweb', { min: 3,
        soorten: [{ id: 'gras', org: 'gras', naam: 'gras', x: 70, y: 212 }, { id: 'boom', org: 'boom', naam: 'eik', x: 250, y: 212 }, { id: 'konijn', org: 'konijn', naam: 'konijn', x: 38, y: 124 }, { id: 'muis', org: 'muis', naam: 'muis', x: 128, y: 136 },
          { id: 'rups', org: 'rups', naam: 'rups', x: 214, y: 132 }, { id: 'rb', org: 'roodborst', naam: 'roodborst', x: 284, y: 112 }, { id: 'vos', org: 'vos', naam: 'vos', x: 84, y: 40 }, { id: 'buizerd', org: 'roofvogel', naam: 'buizerd', x: 222, y: 40 }],
        eten: [['gras', 'konijn'], ['gras', 'muis'], ['boom', 'muis'], ['boom', 'rups'], ['rups', 'rb'], ['konijn', 'vos'], ['muis', 'vos'], ['muis', 'buizerd'], ['rb', 'buizerd'], ['konijn', 'buizerd']],
        na: 'Zie je het? De muis wordt door twee soorten gegeten en eet zelf ook twee dingen. <b>Voedselweb = het geheel van voedselrelaties in een ecosysteem.</b> Er staan alleen levende organismen in.' }, { hint: 'Tik op minstens drie soorten.' }),
      { t: 'snap', id: 'v-orde', vraag: 'Snap je wat een <b>consument van de eerste orde</b> is, en welke kant de pijl op wijst?',
        bewijs: [[Q('Keten: gras → konijn → vos. Wie is de consument van de eerste orde?', 'Het konijn', [['Het gras', 'Gras maakt zelf voedsel: het is de producent, de 1e schakel.', 'E5'], ['De vos', 'De vos eet de consument van de 1e orde: hij is van de 2e orde.', 'E5'], ['De zon', 'De zon is geen organisme en dus geen schakel.', 'E7']], 'Consument 1e orde = eet de planten = de 2e schakel.'),
            Q('Wat betekent de pijl in alg → watervlo?', 'De alg wordt gegeten door de watervlo', [['De alg eet de watervlo', 'Andersom: de pijl wijst naar wie eet.', 'E6'], ['De watervlo maakt de alg', 'Algen maken zichzelf, met zonlicht.'], ['De alg is groter dan de watervlo', 'De pijl zegt niets over grootte.']], 'Pijl = "wordt gegeten door".')],
          [Q('Blad → rups → koolmees → sperwer. Wie is de consument van de tweede orde?', 'De koolmees', [['De rups', 'De rups eet de plant: 1e orde.', 'E5'], ['Het blad', 'Het blad is de producent.', 'E5'], ['De sperwer', 'De sperwer eet de koolmees: 3e orde.']], 'Producent, dan 1e orde, dan 2e orde.'),
            Q('Waarmee begint een voedselketen altijd?', 'Met een plant (een producent)', [['Met de zon', 'De zon levert energie, maar is geen organisme.', 'E7'], ['Met een planteneter', 'Een planteneter moet iets eten: er komt dus eerst een plant.', 'E7'], ['Met het kleinste dier', 'Klein of groot maakt niet uit. De eerste schakel is een plant.', 'E7']], 'Alleen planten maken zelf voedsel.')]],
        anders: [[toon('Andere keten, zelfde regel. Tik ze in volgorde.', 'ketting', { pijl: 'wordt gegeten door', items: [
          { id: 'gras', naam: 'Gras', org: 'gras', label: 'producent (1e schakel)', waarom: 'Gras maakt zelf voedsel: het begint de keten.', mis: 'E7' },
          { id: 'konijn', naam: 'Konijn', org: 'konijn', label: 'consument 1e orde (2e schakel)', waarom: 'Het konijn eet het gras: het is de eerste die iets eet.', mis: 'E5' },
          { id: 'vos', naam: 'Vos', org: 'vos', label: 'consument 2e orde (3e schakel)', waarom: 'De vos eet het konijn.' }], na: 'Tel de <b>consumenten</b> vanaf de eerste die eet. De plant telt niet mee als consument.' })],
          [toon('Nog een manier: sorteer op <b>orde</b>. Kijk wat het dier eet.', 'sorteer', { bakken: [{ id: 'p', naam: 'Producent' }, { id: 'c1', naam: 'Consument 1e orde', sub: 'eet planten' }, { id: 'c2', naam: 'Consument 2e orde', sub: 'eet 1e orde' }], kaarten: [
            { t: 'Gras', org: 'gras', bak: 'p', w: 'Maakt zelf voedsel.', fout: 'Gras eet niets: het maakt zelf voedsel.', mis: 'E5' },
            { t: 'Konijn (eet gras)', org: 'konijn', bak: 'c1', w: 'Eet een plant.', fout: 'Het konijn eet gras: dat is de eerste orde.', mis: 'E5' },
            { t: 'Vos (eet konijn)', org: 'vos', bak: 'c2', w: 'Eet een consument van de 1e orde.', fout: 'De vos eet het konijn, en het konijn is 1e orde.' },
            { t: 'Alg', org: 'alg', bak: 'p', w: 'Maakt zelf voedsel.', fout: 'Algen maken zelf voedsel: producent.', mis: 'E5' },
            { t: 'Watervlo (eet algen)', org: 'watervlo', bak: 'c1', w: 'Eet een plant.', fout: 'De watervlo eet algen: 1e orde.' },
            { t: 'Baars (eet watervlooien)', org: 'baars', bak: 'c2', w: 'Eet een consument van de 1e orde.', fout: 'De watervlo is 1e orde, dus de baars is 2e orde.' }] })]],
        dieper: [uitleg('Waarom begint het altijd met een plant? Alleen planten (en algen) kunnen met zonlicht zelf <b>energierijke stoffen</b> maken: fotosynthese. Elk dier eet uiteindelijk iets wat ooit door een plant gemaakt is. Daarom is de plant de <b>producent</b> en zijn alle dieren erna <b>consumenten</b>: planteneters, alleseters of vleeseters.', 'plant → planteneter → vleeseter<small>producent → consument 1e orde → consument 2e orde</small>')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Voedselketen', zin: 'Een reeks [soorten] waarbij elke soort een [voedselbron] is voor de volgende soort.', extra: ['dieren', 'vijand', 'planten'], fout: { dieren: 'Er staan ook planten in een keten. Het juiste woord is breder.', vijand: 'Het gaat erom dat de één voedsel is voor de ander.', planten: 'Alleen de eerste schakel is een plant.' } }),
      { t: 'baas', naam: 'De Pijlendraaier', beeld: BAAS.pijlen, hp: 5, denkfout: 'De pijl wijst naar wie er gegeten wordt, en de eerste schakel is een consument.', tekst: 'De Pijlendraaier draait alle pijlen om en telt de ordes verkeerd. Zet hem recht.',
        pool: [
          Q('Gras → sprinkhaan → kikker → reiger. Wat is de kikker?', 'Consument van de 2e orde', [['Consument van de 3e orde', 'De kikker is de 3e schakel, maar de 2e consument.', 'E5'], ['Producent', 'Een kikker maakt geen eigen voedsel.'], ['Consument van de 1e orde', 'De sprinkhaan eet het gras: die is 1e orde.', 'E5']], 'Tel de consumenten: sprinkhaan 1, kikker 2.'),
          Q('Welke pijl klopt?', 'muis → uil', [['uil → muis', 'De pijl wijst naar wie eet. De uil eet de muis.', 'E6'], ['muis → gras', 'De muis eet het gras: gras → muis.', 'E6']], 'Pijl = "wordt gegeten door".'),
          Q('Wat is altijd de eerste schakel?', 'Een plant', [['De zon', 'De zon is geen organisme.', 'E7'], ['Een planteneter', 'Die moet eerst iets eten.', 'E7'], ['Een bacterie', 'Ook geen begin: die breekt juist af.']], 'Producent = plant.'),
          Q('Hoe heet elke voedselbron in een voedselketen?', 'Een schakel', [['Een pijl', 'De pijl zit tussen de schakels.'], ['Een orde', 'Orde gebruik je voor consumenten.'], ['Een web', 'Een web is meerdere ketens samen.']], 'Elke voedselbron = een schakel.'),
          Q('Wat staat er nooit in een voedselweb?', 'Water', [['Een plant', 'Planten staan er juist in.'], ['Een vleeseter', 'Vleeseters staan er ook in.'], ['Een alleseter', 'Ook alleseters staan erin.']], 'In een voedselweb staan alleen levende organismen.'),
          Q('Een consument van de eerste orde kan géén ... zijn.', 'vleeseter', [['planteneter', 'Een planteneter eet planten: precies 1e orde.'], ['alleseter', 'Een alleseter kan planten eten: dan is hij 1e orde.']], 'De 1e orde eet planten.'),
          Q('Waarom heet een plant een producent?', 'Hij maakt zelf voedsel met fotosynthese', [['Hij wordt het eerst opgegeten', 'Dat is een gevolg, niet de reden.'], ['Hij is het grootst', 'Grootte doet niet mee.'], ['Hij produceert zuurstof voor dieren', 'Dat klopt wel, maar producent gaat over voedsel maken.']], 'Produceren = maken: energierijke stoffen.'),
        ] },
    ] },

  { id: 'accumulatie', titel: 'Gif stapelt op', sub: 'Basisstof 1 · biomassa, giftig, accumulatie', bol: svgStr(ORG.snoek()), orgs: ['baars', 'snoek'],
    stappen: [
      toon('In een sloot komt een beetje <b>gif</b>. Algen nemen het op en raken het niet meer kwijt. Wat gebeurt er verderop in de keten? Eerst voorspellen!', 'ophoping', { per: 10, mis: 'E8', keten: [
        { org: 'alg', naam: 'Alg', meer: 'algen' }, { org: 'watervlo', naam: 'Watervlo', meer: 'watervlooien' }, { org: 'baars', naam: 'Baars', meer: 'baarzen' }, { org: 'snoek', naam: 'Snoek', meer: 'snoeken' }],
        na: '<b>Accumulatie: de ophoping van (giftige) stoffen in dieren die aan het einde van een voedselketen staan.</b>' }, { hint: 'Voorspel eerst, laat ze daarna eten.' }),
      toon('Nog een woord met "massa". Een snoek weegt bijvoorbeeld 2000 gram. Maar hoeveel daarvan is <b>energierijke stof</b>?', 'biomassa', { org: 'snoek', naam: 'Snoek', massa: 2000, delen: [
        { id: 'water', naam: 'Water', pct: 70, energie: false, kleur: '#9ED8F5', knop: 'Haal het water eruit' },
        { id: 'bot', naam: 'Botten', pct: 10, energie: false, kleur: '#E3DCD6', knop: 'Haal de botten eruit' },
        { id: 'en', naam: 'Energierijk', pct: 20, energie: true, kleur: '#F4B740' }],
        na: '<b>Biomassa: de totale hoeveelheid energierijke stoffen van een organisme of groep organismen.</b> Altijd lager dan de massa.' }, { hint: 'Haal weg wat geen energierijke stof is.' }),
      { t: 'snap', id: 'a-ophoping', vraag: 'Snap je waarom het <b>laatste dier</b> in de keten het meeste gif heeft?',
        bewijs: [[Q('In een meer zit een beetje gif. Wie heeft na een tijd het meeste gif in zijn lijf?', 'De visarend die de vissen eet', [['De waterplanten, die zitten er het dichtst bij', 'Planten nemen het op, maar elk dier verderop krijgt het gif van héél veel prooien tegelijk.', 'E8'], ['Iedereen evenveel', 'Het gif wordt niet eerlijk verdeeld: het stapelt op.', 'E8'], ['De kleine visjes', 'Die eten algen met gif, maar de visarend eet heel veel visjes.', 'E8']], 'Accumulatie: hoe verder in de keten, hoe meer.'),
            Q('Wat is biomassa?', 'De totale hoeveelheid energierijke stoffen van een organisme', [['Het totale gewicht van een organisme', 'Dat is de massa. Daar zitten ook water en botten in.', 'E9'], ['Alle planten in een gebied', 'Biomassa kan van elk organisme zijn, ook van een dier.'], ['De hoeveelheid gif in een dier', 'Dat is iets anders.']], 'Energierijke stoffen: waar een organisme van groeit en beweegt.')],
          [Q('Waarom komt het meeste gif bij de snoek terecht?', 'Hij eet veel baarzen, die het gif ook niet kwijt konden', [['Snoeken maken zelf gif', 'Nee, het gif komt van buiten, via de keten.'], ['Het gif zwemt naar de grootste vis', 'Gif zwemt niet. Het komt binnen via het eten.', 'E8'], ['Snoeken drinken meer water', 'Het gif komt hier via de prooien binnen.', 'E8']], 'Elke stap: veel prooien, dus veel gif bij elkaar.'),
            Q('De biomassa van een vis is ... dan zijn massa.', 'altijd lager', [['precies even groot', 'In een vis zitten ook water en botten.', 'E9'], ['altijd hoger', 'Biomassa is een deel van de massa, dus nooit meer.', 'E9']], 'Water en botten tellen niet mee.')]],
        anders: [[toon('Andere getallen: nu eet elk dier er <b>5</b>. Voorspel en laat eten.', 'ophoping', { per: 5, mis: 'E8', keten: [{ org: 'gras', naam: 'Gras', meer: 'grasplantjes' }, { org: 'rups', naam: 'Rups', meer: 'rupsen' }, { org: 'roodborst', naam: 'Roodborst', meer: 'roodborsten' }, { org: 'roofvogel', naam: 'Sperwer', meer: 'sperwers' }], na: 'Ook met 5 per stap: het laatste dier heeft het <b>meeste</b>. Het gif verdunt niet, het stapelt.' })],
          [toon('Nog een manier: maak de definitie zelf af.', 'gatentekst', { term: 'Accumulatie', zin: 'De [ophoping] van (giftige) stoffen in dieren die aan het [einde] van een voedselketen staan.', extra: ['verdunning', 'begin', 'afbraak'], fout: { verdunning: 'Het wordt juist méér, niet minder.', begin: 'Aan het begin staat de plant, met het minste gif.', afbraak: 'Het gif wordt niet afgebroken: daarom hoopt het op.' }, mis: { verdunning: 'E8', begin: 'E8' } })]],
        dieper: [uitleg('Waarom raakt een dier het gif niet kwijt? <b>Planten raken bepaalde giftige stoffen niet kwijt.</b> Die komen via planteneters in dieren terecht, en die raken ze óók niet kwijt. Elke eter verzamelt het gif van al zijn prooien. Daarom vind je bij roofvogels en grote roofvissen soms veel gif, terwijl er in het water maar heel weinig zat.', '1 → 10 → 100 → 1000<small>alg → watervlo → baars → snoek</small>')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Biomassa', zin: 'De totale hoeveelheid [energierijke] stoffen van een organisme of van een groep organismen.', extra: ['giftige', 'zware', 'alle'], fout: { giftige: 'Dat is accumulatie. Biomassa gaat over voedsel-stoffen.', zware: 'Het gaat niet om zwaar: water en botten zijn ook zwaar, maar tellen niet mee.', alle: 'Dan zou het de massa zijn. Alleen de energierijke stoffen tellen.' }, mis: { alle: 'E9' } }),
      { t: 'baas', naam: 'De Verdunner', beeld: BAAS.verdunner, hp: 5, denkfout: 'Gif wordt onderweg steeds minder, en biomassa is gewoon het gewicht.', tekst: 'De Verdunner denkt dat gif verdwijnt als je verder in de keten komt. Laat hem zien hoe het echt zit.',
        pool: [
          Q('Wie heeft het meeste gif? alg → slak → eend → vos', 'De vos', [['De alg', 'De alg staat aan het begin: het minste.', 'E8'], ['Allemaal evenveel', 'Het stapelt op.', 'E8'], ['De slak', 'De slak eet algen, maar de vos eet veel eenden die veel slakken aten.', 'E8']], 'Het einde van de keten.'),
          Q('Biomassa is ...', 'de hoeveelheid energierijke stoffen', [['het gewicht met water en botten', 'Dat is de massa.', 'E9'], ['de hoeveelheid gif', 'Nee.'], ['het aantal dieren', 'Dat is populatiegrootte.']], 'In grammen of kilogrammen.'),
          Q('Waarom accumuleert gif?', 'Elk dier eet veel prooien en raakt het gif niet kwijt', [['Gif groeit vanzelf aan', 'Gif groeit niet. Het wordt opgestapeld.'], ['Het laatste dier maakt het gif', 'Nee, het komt via het voedsel.'], ['Gif zakt naar de bodem', 'Dat helpt het laatste dier juist niet.', 'E8']], 'Ophoping via het eten.'),
          Q('Wat zijn energierijke stoffen?', 'Stoffen in voedsel waar je van groeit en kunt bewegen', [['Water en zout', 'Die zitten in voedsel, maar geven geen energie.', 'E9'], ['Botten', 'Botten zijn geen energierijke stof.', 'E9'], ['Zuurstof', 'Zuurstof is geen voedsel.']], 'Daar bestaat biomassa uit.'),
          Q('Wat betekent giftig?', 'Schadelijk voor organismen', [['Afbreekbaar', 'Dat is iets anders.'], ['Energierijk', 'Nee.'], ['Onzichtbaar', 'Gif kan zichtbaar of onzichtbaar zijn.']], 'Giftig: stoffen die schadelijk zijn voor organismen.'),
          Q('Een koe weegt 600 kg. Wat klopt over haar biomassa?', 'Die is minder dan 600 kg', [['Die is precies 600 kg', 'Water en botten tellen niet mee.', 'E9'], ['Die is meer dan 600 kg', 'Kan niet: het is een deel van de massa.', 'E9']], 'Biomassa < massa.'),
        ] },
    ] },

  { id: 'opruimploeg', titel: 'De opruimploeg', sub: 'Basisstof 2 · afvaleters, reducenten, afbreekbaar', bol: svgStr(ORG.paddenstoel()), orgs: ['regenworm', 'paddenstoel'],
    stappen: [
      toon('Elk najaar vallen er miljarden bladeren. Waarom ligt het bos dan niet vol? Tik de stappen van de <b>opruimploeg</b> in volgorde.', 'ketting', { ring: true, pijl: 'daarna', terug: 'en weer nieuwe bladeren', items: [
        { id: 'blad', naam: 'Een blad valt af en gaat dood', org: 'doodblad', waarom: 'Het begint met dode resten: een blad, een dode muis, uitwerpselen.' },
        { id: 'worm', naam: 'Afvaleters eten de dode resten', org: 'regenworm', label: 'afvaleter: regenworm, pissebed', waarom: 'Afvaleters, zoals regenwormen en pissebedden, eten de dode resten en maken er kleine stukjes en uitwerpselen van.', mis: 'E10' },
        { id: 'red', naam: 'Reducenten breken het nóg verder af', org: 'paddenstoel', label: 'reducent: schimmel of bacterie', waarom: 'Schimmels en bacteriën breken de uitwerpselen en resten van de afvaleters nóg verder af. Dat komt pas na de afvaleters.', mis: 'E10' },
        { id: 'min', naam: 'Nuttige stoffen in de bodem', org: 'mineralen', waarom: 'Wat overblijft zijn nuttige stoffen die planten uit de bodem kunnen opnemen.', mis: 'E11' },
        { id: 'boom', naam: 'De boom neemt ze op en groeit', org: 'boom', waarom: 'De plant gebruikt die stoffen om te groeien, en maakt nieuwe bladeren.' },
      ], na: '"Rotten" is dus juist <b>nuttig werk</b>: zonder reducenten zouden planten geen nieuwe stoffen krijgen.' }),
      toon('Wat kan de opruimploeg aan? Sorteer: <b>biologisch afbreekbaar</b> of niet?', 'sorteer', { bakken: [{ id: 'ja', naam: 'Biologisch afbreekbaar', sub: 'reducenten kunnen het' }, { id: 'nee', naam: 'Niet-biologisch afbreekbaar', sub: 'levenloos materiaal' }], kaarten: [
        { t: 'Bananenschil', bak: 'ja', w: 'Plantaardig: reducenten breken het af.', fout: 'Een bananenschil komt van een plant. Reducenten kunnen dat afbreken.' },
        { t: 'Plastic fles', org: 'plasticfles', bak: 'nee', w: 'Plastic is levenloos materiaal: reducenten kunnen er niets mee.', fout: 'Plastic kunnen reducenten niet afbreken. Het verdwijnt niet vanzelf.', mis: 'E12' },
        { t: 'Glazen pot', bak: 'nee', w: 'Glas is levenloos materiaal.', fout: 'Glas is levenloos: niet-biologisch afbreekbaar.' },
        { t: 'Papieren zak', bak: 'ja', w: 'Papier is van hout gemaakt: plantaardig.', fout: 'Papier is gemaakt van hout, dus van een plant. Afbreekbaar.' },
        { t: 'Blikje', bak: 'nee', w: 'Metaal is levenloos materiaal.', fout: 'Metaal kunnen reducenten niet afbreken.' },
        { t: 'Appelklokhuis', bak: 'ja', w: 'Plantaardig: afbreekbaar.', fout: 'Een klokhuis komt van een plant.' },
        { t: 'Chipszak', bak: 'nee', w: 'Plastic en metaal: niet afbreekbaar.', fout: 'Een chipszak is van plastic. Niet afbreekbaar.', mis: 'E12' },
        { t: 'Dode muis', org: 'muis', bak: 'ja', w: 'Dierlijk materiaal: afvaleters en reducenten ruimen het op.', fout: 'Dierlijk materiaal kunnen reducenten afbreken.' },
      ] }),
      { t: 'snap', id: 'o-red', vraag: 'Snap je het verschil tussen een <b>afvaleter</b> en een <b>reducent</b>?',
        bewijs: [[Q('Een regenworm eet dode bladeren. Wat is hij?', 'Een afvaleter', [['Een reducent', 'Reducenten zijn bacteriën en schimmels. Een regenworm is een dier.', 'E10'], ['Een producent', 'Hij maakt geen voedsel met zonlicht.'], ['Een consument van de eerste orde', 'Hij eet dode resten, geen levende planten.']], 'Afvaleters: dieren die dode resten eten.'),
            Q('Waarom is "rotten" nuttig?', 'Reducenten maken er stoffen van die planten weer gebruiken', [['Het is niet nuttig, het stinkt alleen', 'Het stinkt soms, maar zonder rotten krijgen planten geen nieuwe stoffen.', 'E11'], ['Zo verdwijnt alles voorgoed', 'Het verdwijnt niet: het wordt omgezet in nuttige stoffen.', 'E11'], ['Zo wordt het bos schoon voor mensen', 'Het gaat om de stoffen voor planten.']], 'Reduceren = minder maken, en er nuttige stoffen van maken.')],
          [Q('Welke is een reducent?', 'Een schimmel', [['Een pissebed', 'Een pissebed is een dier dat dode resten eet: een afvaleter.', 'E10'], ['Een regenworm', 'Een regenworm is een afvaleter.', 'E10'], ['Een konijn', 'Een konijn eet levende planten.']], 'Reducenten: bacteriën en schimmels.'),
            Q('Waarom drijft er na jaren nog plastic in zee?', 'Reducenten kunnen plastic niet afbreken', [['Het lost na een paar weken op in zout water', 'Plastic lost niet op. Het wordt hooguit kleiner.', 'E12'], ['Vissen eten het op en dan is het weg', 'Het zit dan in de vissen, en via accumulatie komt het verder in de keten.', 'E12'], ['Er zijn geen bacteriën in zee', 'Die zijn er wel, maar ze kunnen plastic niet afbreken.']], 'Niet-biologisch afbreekbaar = levenloos materiaal.')]],
        anders: [[toon('Andere manier: sorteer de opruimploeg zelf. Kijk: is het een <b>dier</b>, of een <b>schimmel of bacterie</b>?', 'sorteer', { bakken: [{ id: 'af', naam: 'Afvaleter', sub: 'dier, eet dode resten' }, { id: 're', naam: 'Reducent', sub: 'bacterie of schimmel' }], kaarten: [
          { t: 'Regenworm', org: 'regenworm', bak: 'af', w: 'Een dier.', fout: 'Een regenworm is een dier: afvaleter.', mis: 'E10' }, { t: 'Schimmeldraden', org: 'paddenstoel', bak: 're', w: 'Een schimmel.', fout: 'Een schimmel is een reducent.', mis: 'E10' },
          { t: 'Pissebed', org: 'pissebed', bak: 'af', w: 'Een dier.', fout: 'Een pissebed is een dier: afvaleter.', mis: 'E10' }, { t: 'Bacteriën in de grond', org: 'bacterie', bak: 're', w: 'Bacteriën zijn reducenten.', fout: 'Bacteriën zijn reducenten.', mis: 'E10' },
          { t: 'Miljoenpoot', bak: 'af', w: 'Een dier.', fout: 'Een miljoenpoot is een dier.' }, { t: 'Paddenstoel', org: 'paddenstoel', bak: 're', w: 'Een paddenstoel is een schimmel.', fout: 'Een paddenstoel is het deel van een schimmel dat je ziet: reducent.' }] })],
          [toon('Nog een manier: maak de definitie af.', 'gatentekst', { term: 'Reducenten', zin: '[Bacteriën] en [schimmels] die de uitwerpselen en andere resten van de [afvaleters] nóg verder afbreken.', extra: ['wormen', 'planten', 'insecten'], fout: { wormen: 'Wormen zijn afvaleters, geen reducenten.', insecten: 'Insecten zijn afvaleters.', planten: 'Planten zijn producenten.' }, mis: { wormen: 'E10', insecten: 'E10' } })]],
        dieper: [uitleg('Wat gebeurt er met plastic in zee? Golven en zon maken het steeds kleiner, maar het verdwijnt niet: het is <b>niet-biologisch afbreekbaar</b>. Zo ontstaat <b>plasticsoep: drijvende eilanden van plasticafval in oceanen</b>. Vissen, schildpadden en vogels eten het op, en via accumulatie komt het ook bij dieren op het land terecht. Verbranden kan wel, maar daarbij komen schadelijke stoffen vrij en het kost energie.', beeldSvg(plaats(ORG.schildpad(), 20, 10, 1) + plaats(ORG.plasticfles(), 110, 10, 1), '0 0 220 120'))] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Afvaleters', zin: '[Dieren] die [dode] resten van planten en dieren eten.', extra: ['bacteriën', 'levende', 'stenen'], fout: { 'bacteriën': 'Bacteriën zijn reducenten. Afvaleters zijn dieren.', levende: 'Levende planten eten: dat doen planteneters.', stenen: 'Stenen zijn geen resten van planten of dieren.' }, mis: { 'bacteriën': 'E10' } }),
      { t: 'baas', naam: 'Het Plasticspook', beeld: BAAS.plastic, hp: 5, denkfout: 'Plastic verdwijnt vanzelf, en rotten is alleen maar vies.', tekst: 'Het Plasticspook zweeft al jaren in zee en denkt dat hij vanzelf verdwijnt. Verjaag hem.',
        pool: [
          Q('Wat doen reducenten?', 'Resten nóg verder afbreken tot nuttige stoffen voor planten', [['Dode dieren opeten', 'Dat doen afvaleters, de dieren van de opruimploeg.', 'E10'], ['Voedsel maken met zonlicht', 'Dat doen producenten.'], ['Gif ophopen', 'Dat is accumulatie.']], 'Reduceren = minder maken.'),
          Q('Welk afval is biologisch afbreekbaar?', 'Een houten ijsstokje', [['Een plastic rietje', 'Plastic is niet afbreekbaar.', 'E12'], ['Een glazen knikker', 'Glas is levenloos materiaal.'], ['Een blikje', 'Metaal is levenloos materiaal.']], 'Hout is plantaardig.'),
          Q('Wat is plasticsoep?', 'Drijvende eilanden van plasticafval in oceanen', [['Soep in een plastic bakje', 'Grapje. Het gaat om afval in zee.'], ['Plastic dat in zee oplost', 'Plastic lost niet op.', 'E12'], ['Afval dat reducenten afbreken', 'Plastic kunnen reducenten juist niet afbreken.', 'E12']], 'Plastic verdwijnt niet.'),
          Q('Een pissebed is een ...', 'afvaleter', [['reducent', 'Een pissebed is een dier: afvaleter.', 'E10'], ['producent', 'Hij maakt geen voedsel.'], ['parasiet', 'Hij eet dode resten.']], 'Dieren die dode resten eten.'),
          Q('Wat gebeurt er met plastic dat een vis inslikt?', 'Het kan via accumulatie verder in de voedselketen komen', [['Het wordt verteerd en is dan weg', 'Plastic is niet afbreekbaar, ook niet in een vis.', 'E12'], ['De vis maakt er energie van', 'Plastic is geen voedsel.'], ['Het wordt een nuttige stof voor planten', 'Dat kan alleen met afbreekbaar materiaal.', 'E11']], 'Zo komt het ook bij dieren op het land.'),
          Q('Waarom is rotten nuttig?', 'Er komen stoffen vrij die planten weer opnemen', [['Het is niet nuttig', 'Zonder rotten raakt de bodem leeg.', 'E11'], ['Het houdt dieren weg', 'Nee.'], ['Het maakt plastic kleiner', 'Rotten werkt niet op plastic.', 'E12']], 'Rotten = reducenten aan het werk.'),
          Q('Wat is het nadeel van plastic verbranden?', 'Er komen schadelijke stoffen vrij en het kost energie', [['Er komt niks vrij', 'Wel: schadelijke stoffen.'], ['Het wordt dan biologisch afbreekbaar', 'Nee.'], ['Er is geen nadeel', 'Er zijn wel nadelen.']], 'Daarom liever minder plastic.'),
        ] },
    ] },

  { id: 'kringlopen', titel: 'Rondjes', sub: 'Basisstof 2 · kringloop van koolstof en water', bol: svgStr(ORG.boom()), orgs: ['boom', 'bacterie'],
    stappen: [
      toon('Een vraag waar 400 jaar geleden een onderzoeker over nadacht. Hij plantte een wilgje in een pot aarde en wachtte vijf jaar. <b>Voorspel</b>: wat gebeurt er met de aarde?', 'voorspelproef', {
        vraag: 'De boom is veel zwaarder geworden. Waar komt dat vandaan?',
        keuzes: [{ t: 'De aarde is veel lichter: de boom at hem op', goed: false, mis: 'E13' }, { t: 'De aarde is bijna even zwaar', goed: true }],
        voorKop: 'Begin', naKop: 'Na 5 jaar', voor: [['Wilg', '2,3 kg', 'boom'], ['Aarde', '90,7 kg', 'bodem']], na: [['Wilg', '76,7 kg', 'boom'], ['Aarde', '90,6 kg', 'bodem']],
        uitleg: 'De boom werd 74 kilo zwaarder, de aarde maar 0,1 kilo lichter. Het hout komt dus <b>niet</b> uit de aarde. De koolstof komt uit <b>koolstofdioxide in de lucht</b>! (Proef van Van Helmont, rond 1640.)' }),
      toon('Volg nu één stukje <b>koolstof</b> op zijn rondje. Tik de stappen in volgorde.', 'ketting', { ring: true, pijl: 'daarna', terug: 'de plant gebruikt de CO₂ weer', items: [
        { id: 'co2', naam: 'Koolstof zit in CO₂ in de lucht', org: 'co2', waarom: 'Koolstof zit in koolstofdioxide (CO₂) in de lucht. Daar begint dit rondje.' },
        { id: 'plant', naam: 'De plant maakt er glucose van', org: 'gras', label: 'fotosynthese', waarom: 'De plant neemt CO₂ uit de lucht op en maakt er met zonlicht energierijke stoffen van, zoals glucose. Uit de lucht, niet uit de aarde.', mis: 'E13' },
        { id: 'konijn', naam: 'Het konijn eet de plant', org: 'konijn', waarom: 'De koolstof zit nu in de energierijke stoffen van de plant. Het konijn eet ze en groeit ervan.' },
        { id: 'vos', naam: 'De vos eet het konijn', org: 'vos', waarom: 'De koolstof gaat door naar de volgende consument.' },
        { id: 'adem', naam: 'Verbranding: CO₂ terug in de lucht', org: 'co2', label: 'dieren én planten doen dit', waarom: 'Dieren en planten gebruiken een deel van hun voedsel als energie (verbranding). Daarbij komt weer CO₂ vrij.', mis: 'E14' },
      ], na: 'Een <b>kringloop</b>: de stof wordt steeds doorgegeven en komt terug. Gaat een dier dood, dan brengen afvaleters en reducenten de stoffen terug.' }),
      toon('Ook <b>water</b> gaat rond. Tik de stappen in volgorde.', 'ketting', { ring: true, pijl: 'daarna', terug: 'en de kringloop begint opnieuw', items: [
        { id: 'damp', naam: 'Water uit de zee verdampt', org: 'zon', waarom: 'De zon verwarmt de zee: water verdampt. Hier begint het.' },
        { id: 'wolk', naam: 'Hoog in de lucht: kleine druppels (wolken)', org: 'wolk', waarom: 'Hoog in de lucht koelt de waterdamp af tot kleine druppels: wolken.' },
        { id: 'regen', naam: 'Het gaat regenen', org: 'druppel', waarom: 'Worden de druppels te zwaar, dan valt het als regen.' },
        { id: 'terug', naam: 'Water komt terug op aarde en in zee', org: 'bodem', waarom: 'Via de grond en rivieren komt het water weer in zee.' },
      ], na: 'De <b>kringloop van water</b>. Bij jouw zwemles zwem je dus misschien in water dat ooit een wolk boven Australië was.' }),
      { t: 'snap', id: 'k-koolstof', vraag: 'Snap je waar de koolstof in een plant <b>vandaan</b> komt, en hoe hij weer teruggaat?',
        bewijs: [[Q('Een eik weegt 1000 kilo. Waar komt de koolstof in het hout vandaan?', 'Uit koolstofdioxide in de lucht', [['Uit de aarde, die heeft hij opgegeten', 'De aarde wordt bijna niet lichter. Uit de bodem haalt een plant water en nuttige stoffen; de koolstof komt uit de lucht.', 'E13'], ['Uit het water dat hij opneemt', 'In water zit geen koolstof.', 'E13'], ['Uit de zon', 'De zon levert de energie, niet de stof.']], 'Fotosynthese: CO₂ uit de lucht wordt glucose.'),
            Q('Maken planten ook koolstofdioxide?', 'Ja, ook planten verbranden een deel van hun voedsel', [['Nee, alleen dieren', 'Ook planten gebruiken voedsel als energie, en daarbij komt CO₂ vrij.', 'E14'], ['Nee, planten nemen CO₂ alleen op', 'Ze nemen meer op dan ze maken, maar ze maken het ook.', 'E14']], 'Dieren én planten verbranden voedsel.')],
          [Q('Wat gebeurt er met de koolstof als een konijn een plant opeet?', 'Hij zit dan in de energierijke stoffen van het konijn', [['Hij verdwijnt', 'In een kringloop verdwijnt niets: het wordt doorgegeven.'], ['Hij gaat meteen de bodem in', 'Eerst zit hij in het konijn.'], ['Hij wordt water', 'Koolstof blijft koolstof.']], 'De stof gaat naar de volgende schakel.'),
            Q('Hoe komt water van de zee in de wolken?', 'Het verdampt', [['De wind blaast het omhoog', 'Het water verdampt door de warmte van de zon.'], ['Planten pompen het omhoog', 'Het water in de zee verdampt.'], ['Vissen spuiten het eruit', 'Grapje. Het verdampt.']], 'Verdampen → wolken → regen → terug.')]],
        anders: [[toon('Andere manier: sorteer wat een plant <b>waar</b> vandaan haalt.', 'sorteer', { bakken: [{ id: 'lucht', naam: 'Uit de lucht' }, { id: 'bodem', naam: 'Uit de bodem' }, { id: 'zelf', naam: 'Maakt hij zelf' }], kaarten: [
          { t: 'Koolstofdioxide', org: 'co2', bak: 'lucht', w: 'CO₂ komt uit de lucht, via de bladeren.', fout: 'CO₂ is een gas in de lucht.', mis: 'E13' },
          { t: 'Water', org: 'druppel', bak: 'bodem', w: 'Via de wortels.', fout: 'Water neemt de plant op met de wortels.' },
          { t: 'Nuttige stoffen (mineralen)', org: 'mineralen', bak: 'bodem', w: 'Die maakten de reducenten.', fout: 'Mineralen zitten in de bodem.' },
          { t: 'Glucose (suiker)', org: 'glucose', bak: 'zelf', w: 'Gemaakt met fotosynthese.', fout: 'Glucose maakt de plant zelf, met zonlicht. Daarom heet hij producent.', mis: 'E13' }] })],
          [toon('Nog een rondje, nu met de <b>opruimploeg</b> erbij.', 'ketting', { ring: true, pijl: 'daarna', terug: 'en de plant gebruikt het weer', items: [
            { id: 'p', naam: 'De plant maakt energierijke stoffen', org: 'gras', waarom: 'Uit CO₂ en water, met zonlicht.', mis: 'E13' },
            { id: 'd', naam: 'De plant gaat dood', org: 'doodblad', waarom: 'De stoffen zitten nog in de dode plant.' },
            { id: 'a', naam: 'Afvaleters en reducenten breken hem af', org: 'paddenstoel', waarom: 'Zij gebruiken de stoffen en geven CO₂ en mineralen af.' },
            { id: 'c', naam: 'CO₂ in de lucht, mineralen in de bodem', org: 'co2', waarom: 'Zo is alles weer klaar voor een nieuwe plant.' }] })]],
        dieper: [uitleg('<b>Planten zijn producenten omdat zij door middel van fotosynthese voedsel (energierijke stoffen) kunnen maken voor alle andere organismen.</b> Ze maken het uit CO₂ en water, met de energie van de zon. Uit de bodem halen ze alleen water en een beetje mineralen. Een eik van honderd jaar is dus eigenlijk vooral... lucht.', 'CO₂ + water + zonlicht → glucose<small>fotosynthese: de plant maakt zelf voedsel</small>')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Producenten', zin: 'Planten zijn producenten omdat zij door middel van [fotosynthese] voedsel kunnen [maken] voor alle andere organismen.', extra: ['aarde eten', 'verbranding', 'vinden'], fout: { 'aarde eten': 'Planten eten geen aarde: ze maken zelf voedsel.', verbranding: 'Bij verbranding gebruik je voedsel. Bij fotosynthese maak je het.', vinden: 'Ze vinden het niet, ze maken (produceren) het.' }, mis: { 'aarde eten': 'E13' } }),
      { t: 'baas', naam: 'De Aarde-eter', beeld: BAAS.aarde, hp: 5, denkfout: 'Een plant eet aarde, daar komt al dat hout vandaan.', tekst: 'De Aarde-eter schrokt hele bergen grond naar binnen en denkt dat planten dat ook doen. Versla hem met de kringloop.',
        pool: [
          Q('Waar komt de koolstof in een tomaat vandaan?', 'Uit CO₂ in de lucht', [['Uit de potgrond', 'De grond levert water en mineralen, geen koolstof.', 'E13'], ['Uit het gietwater', 'Water bevat geen koolstof.', 'E13'], ['Uit de zon', 'De zon levert energie.']], 'Fotosynthese.'),
          Q('Wie maken koolstofdioxide bij verbranding?', 'Dieren én planten', [['Alleen dieren', 'Ook planten verbranden voedsel.', 'E14'], ['Alleen planten', 'Dieren ook.'], ['Niemand, het komt uit de zee', 'Het komt vrij bij verbranding.']], 'Allebei gebruiken voedsel als energie.'),
          Q('Wat is een kringloop?', 'Een stof wordt steeds doorgegeven en komt weer terug', [['Een stof wordt opgebruikt tot hij weg is', 'In een kringloop verdwijnt niets.'], ['Een rondje hardlopen', 'Grapje.'], ['Een voedselketen', 'Een keten loopt van plant naar laatste dier; een kringloop gaat rond.']], 'Rondjes, net als de waterkringloop.'),
          Q('Wat haalt een plant uit de bodem?', 'Water en mineralen', [['Zijn voedsel', 'Voedsel maakt hij zelf.', 'E13'], ['Koolstof', 'Koolstof komt uit de lucht.', 'E13'], ['Glucose', 'Glucose maakt hij zelf.', 'E13']], 'De rest maakt hij zelf.'),
          Q('Wat is de volgorde bij water?', 'verdampen → wolken → regen', [['regen → verdampen → wolken', 'Eerst moet het water in de lucht komen.'], ['wolken → verdampen → regen', 'Eerst verdampen, dan pas wolken.']], 'Kringloop van water.'),
          Q('Hoe komt koolstof uit een dode boom terug in de lucht?', 'Afvaleters en reducenten breken hem af en geven CO₂ af', [['Hij blijft altijd in het hout', 'De opruimploeg breekt het hout af.', 'E11'], ['De boom ademt na zijn dood uit', 'Een dode boom doet niets meer.'], ['Via de regen', 'Niet via regen.']], 'De opruimploeg sluit de kringloop.'),
          Q('Waarom heet een plant een producent?', 'Hij maakt zelf voedsel met fotosynthese', [['Hij haalt voedsel uit de aarde', 'Dat is de denkfout van de Aarde-eter.', 'E13'], ['Hij is het eerst in een keten', 'Dat klopt, maar dat is niet waarom hij zo heet.'], ['Hij maakt aarde', 'Nee.']], 'Produceren = maken.'),
        ] },
    ] },

  { id: 'evenwicht', titel: 'Op en neer', sub: 'Basisstof 3 · populatiegrootte, biologisch evenwicht', bol: svgStr(ORG.vos()), orgs: ['vos'],
    stappen: [
      toon('Een weiland met <b>vossen</b> en <b>konijnen</b>. Stel de schuifjes in en speel 40 jaar af. Daarna nog een keer met iets anders.', 'populatiesim', { min: 2, na: 'Zie je de golven? Dat is <b>biologisch evenwicht</b>: de populaties schommelen om een bepaalde waarde.' }, { hint: 'Speel minstens twee keer af, met een andere instelling.' }),
      { t: 'snap', id: 'e-evenwicht', vraag: 'Snap je wat <b>biologisch evenwicht</b> is, en <b>waarom</b> de aantallen op en neer gaan?',
        bewijs: [[Q('Wat klopt bij biologisch evenwicht?', 'De aantallen schommelen om een bepaalde waarde', [['De aantallen blijven precies gelijk', 'Ze gaan juist op en neer, maar wel rond dezelfde waarde.', 'E15'], ['Er zijn evenveel vossen als konijnen', 'Nee, er zijn veel meer konijnen dan vossen.', 'E15'], ['Het gaat over één soort', 'Het gaat altijd om meerdere soorten die elkaar beïnvloeden.', 'E17']], 'Schommelen om een bepaalde waarde.'),
            Q('Na een paar jaar met veel vossen zijn er minder vossen. Waarom?', 'Er zijn minder konijnen, dus minder voedsel: minder jongen overleven', [['De vossen stoppen met jagen om de konijnen te sparen', 'Een vos plant niets voor de natuur. Elke vos eet zoveel hij kan. Er komen minder vossen omdat er minder voedsel is.', 'E16'], ['De vossen weten dat er evenwicht moet zijn', 'Een vos weet niets van evenwicht. Het ontstaat vanzelf, door voedsel en honger.', 'E16'], ['Vossen leven maar één jaar', 'Dat is niet waar, en het verklaart de golf niet.']], 'Oorzaak en gevolg op het niveau van de populatie.')],
          [Q('Een boer schiet alle vossen. Wat gebeurt er met de konijnen?', 'Ze worden veel talrijker, tot het voedsel de grens wordt', [['Er verandert niets', 'De vossen hielden het aantal konijnen klein.'], ['Ze sterven uit', 'Ze krijgen juist minder vijanden.'], ['Ze blijven op hun evenwichtswaarde', 'Zonder vossen is er geen schommeling meer rond die waarde.', 'E15']], 'Probeer het in de simulatie met "alle vossen weg".'),
            Q('Waarom eet een vos konijnen?', 'Omdat hij honger heeft en energie nodig heeft', [['Om de natuur in balans te houden', 'Dat is de denkfout van de Teleologie-draak: het dier doet het niet "om" de natuur. Het evenwicht is een gevolg, geen doel.', 'E16'], ['Zodat het gras niet op raakt', 'Een vos denkt niet aan het gras.', 'E16'], ['Omdat er anders te veel konijnen komen', 'Dat is een gevolg, niet de reden van de vos.', 'E16']], 'Elk dier probeert te overleven en jongen te krijgen.')]],
        anders: [[toon('Andere manier: de golf als <b>ketting van oorzaak en gevolg</b>. Tik de stappen in volgorde.', 'ketting', { ring: true, pijl: 'daardoor', terug: 'en zo verder', eerste: 'Begin bij: veel konijnen', items: [
          { id: 'k1', naam: 'Veel konijnen', org: 'konijn', waarom: 'We beginnen bij veel konijnen.' },
          { id: 'v1', naam: 'Vossen hebben veel voedsel', org: 'vos', waarom: 'Met veel konijnen hebben vossen veel te eten.' },
          { id: 'v2', naam: 'Meer vossen (meer jongen overleven)', org: 'vos', waarom: 'Goed gevoede vossen krijgen meer jongen die het halen.', mis: 'E16' },
          { id: 'k2', naam: 'Meer konijnen opgegeten: minder konijnen', org: 'konijn', waarom: 'Meer vossen eten meer konijnen.' },
          { id: 'v3', naam: 'Vossen krijgen honger: minder vossen', org: 'vos', waarom: 'Minder konijnen betekent minder voedsel voor de vossen. Niet omdat ze sparen, maar door honger.', mis: 'E16' },
          { id: 'k3', naam: 'Konijnen kunnen weer groeien', org: 'gras', waarom: 'Met minder vossen overleven meer konijnen.' }] })],
          [toon('Nog eens zelf spelen. Kijk nu vooral wat er gebeurt als je <b>alle vossen weghaalt</b>.', 'populatiesim', { min: 2, schuif: ['vossen', 'gras'] })]],
        dieper: [uitleg('Waarom zeggen we liever niet "de vos houdt de konijnen in toom"? Dat klinkt alsof de vos een plan heeft. Elk dier probeert alleen te <b>overleven</b> en <b>jongen</b> te krijgen. Het evenwicht is wat er dan vanzelf uitkomt: een gevolg, geen doel. Zo verklaar je op het niveau van de <b>populatie</b>. En het gaat altijd om <b>meerdere soorten</b> die invloed op elkaar hebben.', 'veel prooi → veel jagers → weinig prooi → weinig jagers<small>en weer opnieuw: schommelen om een waarde</small>')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Biologisch evenwicht', zin: 'Toestand van een [ecosysteem], waarbij de grootte van de populaties van soorten [schommelen] om een bepaalde [waarde].', extra: ['gelijk blijven', 'organisme', 'tijd'], fout: { 'gelijk blijven': 'Ze blijven juist niet gelijk: ze gaan op en neer.', organisme: 'Het gaat over een heel ecosysteem met meerdere soorten.', tijd: 'Het gaat om een bepaalde waarde (aantal).' }, mis: { 'gelijk blijven': 'E15', organisme: 'E17' } }),
      { t: 'baas', naam: 'De Teleologie-draak', beeld: BAAS.draak, hp: 5, denkfout: 'Dieren doen dingen óm de natuur in balans te houden.', tekst: 'De Teleologie-draak denkt dat elk dier een plan heeft voor de natuur. Hij is alleen te verslaan met oorzaak en gevolg in de populatie.',
        pool: [
          Q('Waarom worden er na een strenge winter minder uilen geboren?', 'Er zijn minder muizen, dus minder voedsel voor jongen', [['De uilen willen de muizen sparen', 'Uilen plannen niets voor de muizen.', 'E16'], ['De uilen houden de natuur in balans', 'Dat is een gevolg, geen doel van de uil.', 'E16'], ['De winter maakt uilen bang', 'Het gaat om voedsel.']], 'Voedsel bepaalt hoeveel jongen het halen.'),
          Q('Wat is populatiegrootte?', 'Het aantal organismen van dezelfde soort in één gebied', [['Hoe groot één dier is', 'Het gaat om het aantal.'], ['Het aantal soorten in een gebied', 'Dat gaat over de levensgemeenschap.', 'E17'], ['De biomassa van een soort', 'Biomassa is iets anders.']], 'Aantal, één soort, één gebied.'),
          Q('Een ecosysteem in evenwicht. Wat zie je in een grafiek?', 'Lijnen die op en neer gaan rond een waarde', [['Twee rechte lijnen', 'Dan zou alles gelijk blijven.', 'E15'], ['Een lijn die steeds stijgt', 'Dan is er geen evenwicht.'], ['Eén lijn van één soort', 'Evenwicht gaat over meerdere soorten.', 'E17']], 'Schommelen.'),
          Q('Waarom hebben roofdieren scherpe tanden?', 'Dieren met scherpe tanden konden beter jagen en kregen meer jongen', [['Zodat ze de natuur in balans kunnen houden', 'Dat is weer de draak: geen plan voor de natuur.', 'E16'], ['Omdat ze die nodig hadden en ze toen kregen', 'Je krijgt niet wat je nodig hebt. Wie toevallig betere tanden had, overleefde vaker.', 'E16'], ['Omdat ze veel vlees aten en de tanden daardoor scherper werden', 'Wat je doet, verandert je DNA niet.', 'G8']], 'Een verklaring met de populatie, niet met een doel.'),
          Q('Er komen veel meer konijnen. Wat gebeurt er daarna met de vossen?', 'Die nemen toe, want ze hebben meer voedsel', [['Die nemen af', 'Meer prooi betekent juist meer voedsel.'], ['Die blijven gelijk', 'Ze reageren op het voedsel.', 'E15'], ['Die gaan op zoek naar ander werk', 'Grapje.']], 'Meer voedsel → meer jongen overleven.'),
          Q('Biologisch evenwicht gaat over ...', 'meerdere soorten die invloed op elkaar hebben', [['één soort', 'Dan is er niemand om mee te schommelen.', 'E17'], ['één organisme', 'Dat is het niveau individu.', 'E17'], ['alleen planten', 'Ook dieren.']], 'Bijvoorbeeld vossen en konijnen.'),
        ] },
    ] },

  { id: 'groepsgedrag', titel: 'Samenleven in de groep', sub: 'Basisstof 3 · concurrentie, samenwerking, rangorde, territorium, paarvorming', bol: svgStr(ORG.wolf()), orgs: ['wolf', 'roodborst'],
    stappen: [
      toon('Vijf soorten gedrag. Kijk naar elk plaatje en kies het goede begrip.', 'koppel', { labels: ['Concurrentie', 'Samenwerking', 'Rangorde', 'Territorium', 'Paarvorming'], items: [
        { beeld: GEDRAG.samenwerking, alt: 'twee wolven jagen samen op een konijn', tekst: 'Twee wolven uit dezelfde roedel jagen samen op een konijn.', goed: 'Samenwerking', w: '<b>Individuen binnen een populatie bundelen hun vaardigheden om een gemeenschappelijk doel te bereiken.</b> Net als bij voetbal: samen scoren.', fout: { Concurrentie: 'Concurrentie is tussen soorten die hetzelfde willen. Deze wolven werken juist samen.', Rangorde: 'Een rangorde gaat over wie de baas is. Hier doen ze iets samen.', Territorium: 'Ze verdedigen hier geen gebied.', Paarvorming: 'Ze zorgen niet samen voor jongen.' }, mis: 'E20' },
        { beeld: GEDRAG.territorium, alt: 'een roodborst zingt en jaagt een andere roodborst weg', tekst: 'Een roodborst zingt op zijn tak. Een andere roodborst moet weg.', goed: 'Territorium', w: '<b>Een leefgebied dat verdedigd wordt tegen anderen, meestal soortgenoten.</b>', fout: { Concurrentie: 'Concurrentie is tussen verschillende soorten. Hier gaat het om twee roodborsten en een verdedigd gebied.', Rangorde: 'Bij een rangorde leven ze samen in een groep. Hier wordt de ander juist weggejaagd.', Samenwerking: 'Ze werken niet samen.', Paarvorming: 'Het gaat hier om het gebied, niet om een partner.' }, mis: 'E18' },
        { beeld: GEDRAG.rangorde, alt: 'drie kippen, één met een kroon', tekst: 'In het kippenhok weet elke kip wie er vóór haar mag eten.', goed: 'Rangorde', w: '<b>Dieren weten hun plaats in de groep: één dier is de baas, daar luistert de rest naar.</b> Daardoor is er zelden gedoe.', fout: { Territorium: 'Ze verdedigen geen gebied tegen elkaar: ze leven samen.', Concurrentie: 'Het zijn allemaal kippen, één soort.', Samenwerking: 'Ze bundelen hier niets: het gaat om wie de baas is.', Paarvorming: 'Het gaat niet om een paar.' }, mis: 'E19' },
        { beeld: GEDRAG.paarvorming, alt: 'twee zwanen met een jong', tekst: 'Twee zwanen blijven bij elkaar en zorgen samen voor hun jong.', goed: 'Paarvorming', w: '<b>Het vormen van een paar (man en vrouw) om voor nakomelingen te zorgen.</b>', fout: { Samenwerking: 'Bijna! Maar een man en vrouw die samen voor jongen zorgen heet paarvorming.', Territorium: 'Het gaat hier om het paar en hun jong.', Rangorde: 'Er is geen baas en volger.', Concurrentie: 'Ze strijden niet.' } },
        { beeld: GEDRAG.concurrentie, alt: 'een vos en een buizerd willen dezelfde muis', tekst: 'Een vos en een buizerd willen allebei dezelfde muis.', goed: 'Concurrentie', w: '<b>Een relatie tussen soorten die gericht is op competitie</b>: ze willen hetzelfde voedsel.', fout: { Samenwerking: 'Ze werken niet samen, ze willen allebei de muis. En het zijn twee soorten.', Territorium: 'Ze verdedigen geen gebied tegen soortgenoten.', Rangorde: 'Er is geen groep met een baas.', Paarvorming: 'Een vos en een buizerd vormen geen paar.' }, mis: 'E20' },
      ], na: 'Vier van de vijf gaan over dieren van <b>dezelfde soort</b>. Concurrentie gaat in je boek over <b>verschillende soorten</b>.' }),
      { t: 'snap', id: 'g-gedrag', vraag: 'Snap je het verschil tussen <b>territorium</b>, <b>rangorde</b> en <b>concurrentie</b>?',
        bewijs: [[Q('Een merel jaagt elke andere merel uit zijn tuin weg. Wat is dit?', 'Territorium', [['Rangorde', 'Bij een rangorde leven ze samen in een groep. Hier wordt de ander weggejaagd.', 'E19'], ['Concurrentie', 'Concurrentie is tussen verschillende soorten. Hier gaat het om soortgenoten en een verdedigd gebied.', 'E18'], ['Samenwerking', 'Er wordt niet samengewerkt.']], 'Een verdedigd leefgebied, tegen soortgenoten.'),
            Q('Waarom is er in een groep met een rangorde zelden ruzie?', 'Iedereen weet zijn plaats, dus er hoeft niet steeds gevochten te worden', [['Omdat de baas iedereen elke dag aanvalt', 'Dan zou er juist veel ruzie zijn.', 'E19'], ['Omdat ze allemaal even sterk zijn', 'Er is juist een verschil: één is de baas.'], ['Omdat ze elkaar niet zien', 'Ze leven juist samen.']], 'Plaats weten = rust.')],
          [Q('Een vos en een uil jagen allebei op muizen in hetzelfde veld. Wat is dit?', 'Concurrentie', [['Samenwerking', 'Ze jagen niet samen, en het zijn twee soorten.', 'E20'], ['Territorium', 'Een territorium verdedig je meestal tegen soortgenoten.', 'E18'], ['Symbiose', 'Symbiose is langdurig samenleven, niet strijden om dezelfde prooi.']], 'Twee soorten, hetzelfde voedsel.'),
            Q('Een voetbalteam speelt de bal over om samen te scoren. Welk dierengedrag lijkt daarop?', 'Samenwerking', [['Rangorde', 'Een aanvoerder is er wel, maar overspelen om te scoren is samenwerken.'], ['Concurrentie', 'Concurrentie is juist tegen elkaar.'], ['Territorium', 'Je eigen helft verdedigen lijkt erop, maar overspelen om te scoren is samenwerking.']], 'Vaardigheden bundelen voor een gemeenschappelijk doel.')]],
        anders: [[toon('Andere manier: sorteer op <b>wie met wie</b>. Binnen één soort, of tussen soorten?', 'sorteer', { bakken: [{ id: 'binnen', naam: 'Binnen één soort' }, { id: 'tussen', naam: 'Tussen soorten' }], kaarten: [
          { t: 'Samenwerking', bak: 'binnen', w: 'Individuen binnen een populatie.', fout: 'Samenwerking is binnen een populatie: dezelfde soort.', mis: 'E20' },
          { t: 'Rangorde', bak: 'binnen', w: 'Plaats in de eigen groep.', fout: 'Een rangorde is in de eigen groep.' },
          { t: 'Territorium', bak: 'binnen', w: 'Meestal tegen soortgenoten.', fout: 'Een territorium verdedig je meestal tegen soortgenoten.', mis: 'E18' },
          { t: 'Paarvorming', bak: 'binnen', w: 'Een man en vrouw van dezelfde soort.', fout: 'Een paar is van dezelfde soort.' },
          { t: 'Concurrentie', bak: 'tussen', w: 'In je boek: een relatie tussen soorten.', fout: 'Concurrentie staat in je boek als relatie tussen soorten.' }] })],
          [toon('Nog een manier: maak de definitie af.', 'gatentekst', { term: 'Territorium', zin: 'Een leefgebied dat [verdedigd] wordt tegen anderen, meestal [soortgenoten].', extra: ['gedeeld', 'roofdieren', 'planten'], fout: { gedeeld: 'Het wordt juist niet gedeeld.', roofdieren: 'Meestal tegen dieren van de eigen soort.', planten: 'Planten verdedigen geen territorium.' }, mis: { roofdieren: 'E18' } })]],
        dieper: [uitleg('Waarom al die moeite? Een <b>territorium</b> zorgt voor genoeg voedsel en een plek voor een nest. Een <b>rangorde</b> voorkomt dat er steeds gevochten wordt: vechten kost energie en kan pijn doen. <b>Paarvorming</b> helpt jongen te overleven. Elk gedrag helpt bij overleven of voortplanten. Dat is een verklaring, geen plan van het dier.', '')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Rangorde', zin: 'Dieren weten hun [plaats] in de groep: één dier is de [baas], daar luistert de rest naar.', extra: ['ruzie', 'vijand', 'jongste'], fout: { ruzie: 'Door een rangorde is er juist zelden gedoe.', vijand: 'Het gaat om de eigen groep.', jongste: 'Het gaat om de baas.' }, mis: { ruzie: 'E19' } }),
      { t: 'baas', naam: 'De Ruziezoeker', beeld: BAAS.ruzie, hp: 5, denkfout: 'Een rangorde betekent altijd vechten, en elk gedrag is ruzie.', tekst: 'De Ruziezoeker ziet overal gevechten, ook waar dieren rustig samenleven. Laat hem het verschil zien.',
        pool: [
          Q('Leeuwinnen omsingelen samen een zebra. Wat is dit?', 'Samenwerking', [['Concurrentie', 'Ze strijden niet tegen elkaar.', 'E19'], ['Rangorde', 'Het gaat om samen jagen.'], ['Territorium', 'Ze verdedigen geen gebied.']], 'Samen een doel.'),
          Q('Wat is concurrentie?', 'Een relatie tussen soorten die strijden om hetzelfde', [['Samen jagen', 'Dat is samenwerking.'], ['Een paar vormen', 'Dat is paarvorming.'], ['De baas zijn in de groep', 'Dat is rangorde.']], 'Bijvoorbeeld hetzelfde voedsel of gebied.'),
          Q('Wat is paarvorming?', 'Een man en vrouw vormen een paar om voor jongen te zorgen', [['Twee soorten leven samen', 'Dat is symbiose.'], ['Twee dieren vechten om een gebied', 'Dat is territorium.', 'E19'], ['Twee dieren jagen samen', 'Dat is samenwerking.']], 'Om voor nakomelingen te zorgen.'),
          Q('Een wolf buigt zijn kop als de leider langsloopt. Wat zie je?', 'Rangorde', [['Ruzie', 'Juist geen ruzie: hij laat zien dat hij zijn plaats kent.', 'E19'], ['Territorium', 'Ze leven samen in een roedel.'], ['Concurrentie', 'Het is één soort, in één groep.']], 'Plaats weten in de groep.'),
          Q('Waartegen verdedigt een dier zijn territorium meestal?', 'Tegen soortgenoten', [['Tegen roofdieren', 'Meestal tegen dieren van de eigen soort.', 'E18'], ['Tegen planten', 'Nee.'], ['Tegen het weer', 'Nee.']], 'Soortgenoten zoeken hetzelfde.'),
          Q('Waarom helpt een territorium?', 'Voedsel zoeken, nestbouw en paring gaan beter', [['Zodat het dier meer kan vechten', 'Het gaat om rust en ruimte.', 'E19'], ['Om de natuur in balans te houden', 'Weer zo\'n doel-verklaring.', 'E16'], ['Het helpt niet', 'Het helpt wel.']], 'Levensfuncties gaan beter.'),
        ] },
    ] },

  { id: 'symbiose', titel: 'Samen of tegen', sub: 'Basisstof 3 · symbiose, mutualisme, commensalisme, parasitisme', bol: svgStr(ORG.korstmos()), orgs: ['korstmos', 'teek'],
    stappen: [
      toon('<b>Symbiose: een langdurige samenlevingsvorm tussen twee verschillende soorten.</b> Stel per duo zelf in: heeft elke soort er <b>voordeel</b>, <b>niets</b> of <b>nadeel</b> van?', 'symbiometer', { duos: [
        { a: 'Schimmel', b: 'Alg', orgA: 'paddenstoel', orgB: 'alg', A: '+', B: '+', tekst: 'Samen vormen ze een korstmos.', w: 'De schimmel geeft beschutting en water, de alg maakt voedsel. Allebei voordeel.', fout: { A: 'De schimmel krijgt voedsel van de alg: voordeel.', B: 'De alg krijgt beschutting en water: voordeel.' }, mis: 'E21' },
        { a: 'Alg', b: 'Boom', orgA: 'alg', orgB: 'boom', A: '+', B: '0', tekst: 'Algen groeien op de schors van een boom.', w: 'De alg heeft een plek, de boom merkt er niets van.', fout: { A: 'De alg krijgt een plek om te groeien: voordeel.', B: 'De boom heeft er geen last van en ook geen voordeel: niets.' }, mis: 'E21' },
        { a: 'Teek', b: 'Hond', orgA: 'teek', orgB: 'hond', A: '+', B: '-', tekst: 'Een teek zuigt bloed bij een hond.', w: 'De teek is de <b>parasiet</b>, de hond de <b>gastheer</b>.', fout: { A: 'De teek krijgt bloed: voordeel.', B: 'De hond verliest bloed en kan ziek worden: nadeel.' }, mis: 'E23' },
        { a: 'Koraal', b: 'Alg', orgA: KORAAL, orgB: 'alg', A: '+', B: '+', tekst: 'Duiken in Australië: in koraal wonen piepkleine algen.', w: 'De alg woont veilig in het koraal, het koraal krijgt voedsel van de alg.', fout: { A: 'Het koraal krijgt voedsel van de alg: voordeel.', B: 'De alg woont veilig: voordeel.' } },
      ], na: '++ = <b>mutualisme</b> · + 0 = <b>commensalisme</b> · + − = <b>parasitisme</b>' }),
      toon('Sorteer de duo\'s in de goede bak.', 'sorteer', { bakken: [{ id: 'mut', naam: 'Mutualisme', sub: '+ en +' }, { id: 'com', naam: 'Commensalisme', sub: '+ en 0' }, { id: 'par', naam: 'Parasitisme', sub: '+ en −' }], kaarten: [
        { t: 'Luis op je hoofd', org: 'luis', bak: 'par', w: 'De luis drinkt bloed, jij krijgt jeuk.', fout: 'De luis heeft voordeel en jij nadeel: parasitisme.' },
        { t: 'Korstmos: schimmel en alg', org: 'korstmos', bak: 'mut', w: 'Allebei voordeel.', fout: 'Schimmel en alg hebben allebei voordeel.' },
        { t: 'Lintworm in de darm', org: 'lintworm', bak: 'par', w: 'De lintworm eet mee, de gastheer heeft nadeel.', fout: 'Een lintworm is een parasiet.' },
        { t: 'Algen op schors', org: 'alg', bak: 'com', w: 'De boom heeft er geen last of voordeel van.', fout: 'De boom merkt er niets van: commensalisme.', mis: 'E21' },
        { t: 'Teek op een ree', org: 'teek', bak: 'par', w: 'De teek is de parasiet, de ree de gastheer.', fout: 'De teek zuigt bloed: parasitisme.' },
        { t: 'Koraal en algen', bak: 'mut', w: 'Allebei voordeel.', fout: 'Koraal en algen helpen elkaar.' },
      ] }),
      { t: 'snap', id: 's-vorm', vraag: 'Snap je hoe je <b>mutualisme</b>, <b>commensalisme</b> en <b>parasitisme</b> uit elkaar houdt?',
        bewijs: [[Q('Een alg groeit op de schors van een boom. De boom merkt er niets van. Welke vorm?', 'Commensalisme', [['Mutualisme', 'Dan zou de boom er ook voordeel van hebben.', 'E21'], ['Parasitisme', 'Dan zou de boom er nadeel van hebben.'], ['Concurrentie', 'Ze strijden niet om hetzelfde.']], 'Eén voordeel, de ander niets.'),
            Q('Bij een teek op een hond: wie is de gastheer?', 'De hond', [['De teek', 'De teek heeft voordeel: hij is de parasiet. De gastheer is wie nadeel heeft.', 'E23'], ['Allebei', 'Er is één parasiet en één gastheer.'], ['Geen van beide', 'De hond is de gastheer.']], 'Gastheer = heeft nadeel.')],
          [Q('Een vos eet een konijn op. Is dat parasitisme?', 'Nee, dat is eten en gegeten worden, geen langdurig samenleven', [['Ja, want de vos heeft voordeel en het konijn nadeel', 'Bij symbiose leven ze langdurig samen. Een vos die een konijn opeet, leeft er niet mee samen.', 'E22'], ['Ja, de vos is de gastheer', 'Dat klopt niet: er is geen gastheer bij jagen.', 'E23'], ['Nee, het is mutualisme', 'Het konijn heeft geen voordeel.']], 'Symbiose = langdurig samenleven.'),
            Q('Welke tekens passen bij mutualisme?', '+ en +', [['+ en 0', 'Dat is commensalisme.', 'E21'], ['+ en −', 'Dat is parasitisme.'], ['− en −', 'Dat bestaat bij symbiose niet.']], 'Beide soorten voordeel.')]],
        anders: [[toon('Andere duo\'s, zelfde meters. Stel ze in.', 'symbiometer', { duos: [
          { a: 'Luis', b: 'Mens', orgA: 'luis', orgB: 'mens', A: '+', B: '-', tekst: 'Een luis in je haar.', w: 'Parasiet: de luis. Gastheer: de mens.', mis: 'E23' },
          { a: 'Mos', b: 'Boom', orgA: 'gras', orgB: 'boom', A: '+', B: '0', tekst: 'Mos op een boomstam.', w: 'Het mos heeft een plek, de boom merkt er niets van.', mis: 'E21' },
          { a: 'Lintworm', b: 'Hond', orgA: 'lintworm', orgB: 'hond', A: '+', B: '-', tekst: 'Een lintworm in de darm van een hond.', w: 'De lintworm eet mee: parasitisme.' }] })],
          [toon('Nog een manier: maak de definitie af.', 'gatentekst', { term: 'Parasitisme', zin: 'Eén soort heeft [voordeel] en de andere soort heeft wel [nadeel] van het samenleven.', extra: ['niets', 'plezier'], fout: { niets: 'Als de ander niets merkt, is het commensalisme.', plezier: 'Het gaat om voordeel en nadeel.' }, mis: { niets: 'E21' } })]],
        dieper: [uitleg('Waarom doodt een parasiet zijn gastheer meestal niet? Hij leeft van hem. Gaat de gastheer dood, dan verliest de parasiet zijn huis en zijn voedsel. Daarom is parasitisme <b>langdurig</b>, en dat is het verschil met een roofdier dat zijn prooi in één keer opeet. <b>Bij parasitisme noem je de soort die voordeel heeft de parasiet, en de soort die nadeel heeft de gastheer.</b>', '+ + mutualisme · + 0 commensalisme · + − parasitisme')] },
      { t: 'baas', naam: 'De Klit', beeld: BAAS.klit, hp: 5, denkfout: 'Wie samenleeft, heeft er altijd allebei voordeel van. En een roofdier is ook een parasiet.', tekst: 'De Klit plakt aan iedereen vast en zegt dat het voor allebei goed is. Ontmasker hem.',
        pool: [
          Q('Wat is symbiose?', 'Een langdurige samenlevingsvorm tussen twee verschillende soorten', [['Eén keer samen jagen', 'Symbiose is langdurig.'], ['Samenleven binnen één soort', 'Het gaat om twee verschillende soorten.', 'E20'], ['Een roofdier en zijn prooi', 'Dat is een voedselrelatie.', 'E22']], 'Langdurig, twee soorten.'),
          Q('Een vogel bouwt een nest in een boom. De boom merkt er niets van. Als dit symbiose is, welke vorm?', 'Commensalisme', [['Mutualisme', 'De boom heeft er geen voordeel van.', 'E21'], ['Parasitisme', 'De boom heeft er geen nadeel van.']], '+ en 0.'),
          Q('Een lintworm leeft in een mens. Wie is de parasiet?', 'De lintworm', [['De mens', 'De mens heeft nadeel: hij is de gastheer.', 'E23'], ['Allebei', 'De parasiet is degene met voordeel.']], 'Parasiet = voordeel.'),
          Q('Schimmel en alg in een korstmos hebben allebei voordeel. Welke vorm?', 'Mutualisme', [['Commensalisme', 'Daar heeft één soort niets.', 'E21'], ['Parasitisme', 'Niemand heeft nadeel.'], ['Concurrentie', 'Ze strijden niet.']], '+ en +.'),
          Q('Is een vos een parasiet van het konijn?', 'Nee, hij is een roofdier', [['Ja, de vos heeft voordeel', 'Een vos leeft niet langdurig met het konijn samen.', 'E22'], ['Ja, het konijn is de gastheer', 'Geen gastheer: het konijn wordt gewoon opgegeten.', 'E22']], 'Parasitisme is langdurig samenleven.'),
          Q('Bij commensalisme heeft de tweede soort ...', 'geen voordeel en geen nadeel', [['ook voordeel', 'Dat is mutualisme.', 'E21'], ['nadeel', 'Dat is parasitisme.']], '+ en 0.'),
        ] },
    ] },
];

/* =========================================================================
   THEMA 5: ERFELIJKHEID (expeditie naar binnen)
   ========================================================================= */
const T5 = [
  { id: 'cel-dna', titel: 'Naar binnen: van jou tot DNA', sub: 'Basisstof 1 · lichaamscel, chromosoom, gen, DNA', bol: svgStr(ORG.cel()), orgs: ['cel', 'chromosoom'],
    stappen: [
      toon('Nieuwe expeditie! Dezelfde lift, maar nu gaan we <b>naar binnen</b>: van jou tot het allerkleinste stukje. Bezoek elke verdieping.', 'zoomlift', { start: 6, verdiepingen: [
        { naam: 'Basen', scene: 'basen', def: '<b>De stof DNA is opgebouwd uit de basen A, T, C en G.</b> Altijd in paren: A met T, C met G.' },
        { naam: 'Gen', scene: 'gen', def: '<b>Stukjes DNA (een stukje van een chromosoom) die samen de informatie bevatten voor één eigenschap.</b>' },
        { naam: 'Chromosoom', scene: 'chromosoom', def: '<b>Een lange dunne draad in de celkern die bestaat uit de stof DNA en bevat erfelijke informatie.</b> Op elk chromosoom liggen heel veel genen.' },
        { naam: 'Celkern', scene: 'celkern', def: 'Hier liggen de chromosomen, <b>altijd</b> in de celkern. Elke celkern bevat <b>alle</b> chromosomen: al jouw erfelijke informatie.' },
        { naam: 'Cel', scene: 'cel', def: 'Een <b>lichaamscel: cel die onderdeel is van het lichaam van een organisme</b> (en dus geen geslachtscel).' },
        { naam: 'Orgaan', scene: 'orgaan', def: 'Je <b>huid</b> is een orgaan, gemaakt van heel veel cellen. (Niveau tussen cel en organisme.)' },
        { naam: 'Organisme', scene: 'organisme', def: '<b>Jij</b>: één organisme, een individu. Hier stapten we in de vorige expeditie in.' },
      ], na: 'Jojo! Op elke verdieping hoort een ander woord. Een gen zit <b>op</b> een chromosoom, en een chromosoom zit <b>in</b> de celkern.' }, { hint: 'Bezoek alle zeven de verdiepingen.' }),
      toon('Zet ze in volgorde van <b>groot naar klein</b>. Elk ding bevat het volgende.', 'ketting', { pijl: 'bevat', items: [
        { id: 'org', naam: 'Organisme (jij)', org: 'mens', waarom: 'Jij bent het grootst: je bent opgebouwd uit cellen.' },
        { id: 'cel', naam: 'Lichaamscel', org: 'cel', waarom: 'Een cel is een bouwsteen van je lichaam. In de cel zit de celkern.' },
        { id: 'kern', naam: 'Celkern', waarom: 'De celkern zit in de cel en bevat de chromosomen.' },
        { id: 'chrom', naam: 'Chromosoom', org: 'chromosoom', waarom: 'Een chromosoom is een lange draad DNA in de celkern. Er liggen veel genen op.', mis: 'G1' },
        { id: 'gen', naam: 'Gen', waarom: 'Een gen is een <b>stukje</b> van een chromosoom: kleiner dus.', mis: 'G1' },
        { id: 'base', naam: 'Base (A, T, C of G)', org: 'dna', waarom: 'Basen zijn de kleinste bouwstenen van DNA. Een gen bestaat uit een rij basen.' },
      ], na: 'Organisme → cel → celkern → chromosoom → gen → base.' }),
      { t: 'snap', id: 'c-kern', vraag: 'Snap je wat er in <b>elke</b> celkern zit, en wat groter is: een gen of een chromosoom?',
        bewijs: [[Q('Wat zit er in de celkern van een huidcel?', 'Alle chromosomen: al jouw erfelijke informatie', [['Alleen de informatie voor huid', 'Elke celkern bevat alle chromosomen. Een huidcel gebruikt maar een deel, maar heeft alles.', 'G2'], ['Geen DNA, dat zit in je bloed', 'DNA zit in de celkern.', 'G3'], ['De helft van je chromosomen', 'De helft zit alleen in geslachtscellen.', 'G10']], 'Elke cel(kern) bevat alle chromosomen.'),
            Q('Wat is groter?', 'Een chromosoom, er liggen veel genen op', [['Een gen, er zitten veel chromosomen in', 'Andersom: een gen is een stukje van een chromosoom.', 'G1'], ['Ze zijn even groot', 'Op één chromosoom liggen heel veel genen.', 'G1'], ['Een base', 'Een base is het kleinste.']], 'Chromosoom > gen > base.')],
          [Q('Waar liggen de chromosomen?', 'Altijd in de celkern', [['Los in de cel', 'Ze liggen altijd in de celkern.', 'G3'], ['In het bloed', 'In de celkern van je cellen.', 'G3'], ['Alleen in je hersenen', 'In bijna elke cel van je lichaam.', 'G2']], 'Chromosomen liggen altijd in de celkern.'),
            Q('Wat is een gen?', 'Een stukje DNA met de informatie voor één eigenschap', [['Een draad met al je informatie', 'Dat is een chromosoom.', 'G1'], ['Een eiwit', 'Een eiwit wordt gemaakt met de informatie uit een gen.'], ['Een hele cel', 'Een gen is veel kleiner.']], 'Gen = stukje chromosoom = één eigenschap.')]],
        anders: [[toon('Andere manier: een <b>bibliotheek</b>. Zet ze van groot naar klein.', 'ketting', { pijl: 'bevat', items: [
          { id: 'bib', naam: 'Bibliotheek = celkern', waarom: 'De celkern is de bibliotheek: daar staat alle informatie.' },
          { id: 'boek', naam: 'Boek = chromosoom', waarom: 'Elk boek is een chromosoom: één lange tekst vol informatie.', mis: 'G1' },
          { id: 'recept', naam: 'Recept in het boek = gen', waarom: 'Eén recept in het boek is een gen: de informatie voor één eigenschap.', mis: 'G1' },
          { id: 'letter', naam: 'Letters = basen', waarom: 'Het recept is geschreven met letters: A, T, C en G.' }], na: 'En <b>elke</b> cel heeft de hele bibliotheek, ook al leest een huidcel maar een paar recepten.' })],
          [toon('Nog eens de lift, nu alleen het binnenste deel.', 'zoomlift', { start: 3, min: 4, verdiepingen: [
            { naam: 'Basen', scene: 'basen', def: 'A, T, C en G: de letters.' }, { naam: 'Gen', scene: 'gen', def: 'Een stukje van een chromosoom: één eigenschap.' },
            { naam: 'Chromosoom', scene: 'chromosoom', def: 'Lange dunne draad DNA met heel veel genen.' }, { naam: 'Celkern', scene: 'celkern', def: 'Alle chromosomen, in elke cel.' }] })]],
        dieper: [uitleg('Hoe past zoveel DNA in één celkern? De draden zijn heel dun en liggen los opgerold. Pas als een cel gaat <b>delen</b>, rollen ze zich strak op tot de X-vormen die je op plaatjes ziet. Chromosomen zijn dus geen korte staafjes, maar <b>lange dunne draden</b>.', beeldSvg(SCENE.celkern(), '0 0 320 200'))] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Chromosoom', zin: 'Een lange dunne [draad] in de [celkern] die bestaat uit de stof [DNA] en bevat erfelijke informatie van een organisme.', extra: ['staafje', 'bloed', 'eiwit'], fout: { staafje: 'Een chromosoom is een lange dunne draad. Alleen bij het delen rolt hij zich op.', bloed: 'Chromosomen liggen in de celkern.', eiwit: 'Chromosomen bestaan uit DNA.' }, mis: { bloed: 'G3' } }),
      { t: 'baas', naam: 'De Snippersnoeper', beeld: BAAS.snipper, hp: 5, denkfout: 'Een huidcel heeft alleen het DNA voor huid, en een gen is groter dan een chromosoom.', tekst: 'De Snippersnoeper knipt het DNA in snippers en geeft elke cel maar een stukje. Laat zien dat elke cel alles heeft.',
        pool: [
          Q('Heeft een spiercel de informatie voor je oogkleur?', 'Ja, elke celkern heeft alle chromosomen', [['Nee, alleen oogcellen', 'Elke celkern bevat alle erfelijke informatie.', 'G2'], ['Nee, dat zit in je bloed', 'In de celkern.', 'G3']], 'Alle chromosomen in elke celkern.'),
          Q('Een gen is ...', 'een stukje van een chromosoom', [['een groep chromosomen', 'Andersom.', 'G1'], ['een cel', 'Veel kleiner.'], ['een base', 'Een gen bestaat uit veel basen.']], 'Stukje DNA voor één eigenschap.'),
          Q('Waaruit bestaat een chromosoom?', 'Uit DNA', [['Uit eiwitten', 'De stof van een chromosoom is DNA.'], ['Uit cellen', 'Een chromosoom zit in een cel.', 'G1'], ['Uit bloed', 'Nee.', 'G3']], 'DNA: de stof waar chromosomen uit bestaan.'),
          Q('Wat is DNA?', 'De stof waar chromosomen uit bestaan, met de informatie voor erfelijke eigenschappen', [['Een soort cel', 'Het is een stof.'], ['Een eigenschap, zoals oogkleur', 'De informatie voor eigenschappen zit erin.'], ['Een orgaan', 'Nee.']], 'Vetgedrukt in je lijst.'),
          Q('Wat is een lichaamscel?', 'Een cel die onderdeel is van het lichaam, geen geslachtscel', [['Een eicel', 'Een eicel is een geslachtscel.'], ['Een cel in je buik', 'Lichaam betekent je hele lichaam.'], ['Alleen een huidcel', 'Alle cellen van je lichaam die geen geslachtscel zijn.']], 'Ook planten hebben lichaamscellen.'),
          Q('Wat is de goede volgorde van groot naar klein?', 'celkern → chromosoom → gen → base', [['celkern → gen → chromosoom → base', 'Een gen zit op een chromosoom.', 'G1'], ['chromosoom → celkern → gen → base', 'Het chromosoom zit in de celkern.', 'G3'], ['base → gen → chromosoom → celkern', 'Dat is van klein naar groot.']], 'Jojo naar binnen.'),
        ] },
    ] },

  { id: 'celdeling', titel: 'Kopiëren en delen', sub: 'Basisstof 1 · celdeling en dochtercellen', bol: svgStr(ORG.cel()), orgs: ['huidcel'],
    stappen: [
      toon('Je schaaft je knie bij voetbal. Nieuwe huidcellen moeten het gat dichten. Help deze cel <b>delen</b>. Probeer gerust eerst meteen te delen.', 'celdeling', { modus: 'deling', paren: 2, misHelft: 'G5', na: 'Eerst <b>kopiëren</b>, dan <b>delen</b>: twee precies dezelfde dochtercellen.' }, { hint: 'Deel de cel zo dat beide dochtercellen alles hebben.' }),
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Celdeling', zin: 'Bij celdeling ontstaan uit één [lichaamscel], twee [dezelfde] nieuwe cellen.', extra: ['geslachtscel', 'verschillende', 'vrouwelijke'], fout: { geslachtscel: 'Celdeling begint met een lichaamscel.', verschillende: 'De dochtercellen zijn juist precies hetzelfde.', vrouwelijke: 'Dochtercel heeft niets met vrouwelijk te maken.' }, mis: { vrouwelijke: 'G4', verschillende: 'G5' } }),
      { t: 'snap', id: 'd-kopie', vraag: 'Snap je waarom alle chromosomen eerst <b>gekopieerd</b> worden, en wat een <b>dochtercel</b> is?',
        bewijs: [[Q('Een lichaamscel met 46 chromosomen deelt. Hoeveel heeft elke dochtercel?', '46', [['23', 'De helft hoort bij geslachtscellen. Bij celdeling wordt eerst alles gekopieerd.', 'G5'], ['92', 'Na het kopiëren zijn het er even 92, maar die worden verdeeld: 46 en 46.'], ['0, die zijn op', 'Ze worden juist gekopieerd.']], 'Kopiëren, dan verdelen: 46 en 46.'),
            Q('Een jongen schaaft zijn knie. Zijn huidcellen delen. Hoe heten de nieuwe cellen?', 'Dochtercellen', [['Zooncellen, want hij is een jongen', 'Dochtercel heeft niets met man of vrouw te maken. Bij iedereen heten ze dochtercellen.', 'G4'], ['Geslachtscellen', 'Die ontstaan alleen bij meiose.'], ['Moedercellen', 'De cel die deelt is de moedercel; wat eruit komt zijn dochtercellen.']], 'Bij ieder organisme, jong of oud, man of vrouw.')],
          [Q('Hoe verschillen de twee dochtercellen van elkaar?', 'Niet: ze hebben precies dezelfde chromosomen', [['De ene is mannelijk, de andere vrouwelijk', 'Dochtercellen hebben niets met geslacht te maken.', 'G4'], ['Elk heeft de helft van de chromosomen', 'Dan zou er informatie missen.', 'G5'], ['De ene is ouder', 'Ze zijn even oud en precies hetzelfde.']], 'Twee dezelfde nieuwe cellen.'),
            Q('Waarom moet een cel eerst alle chromosomen kopiëren?', 'Anders krijgt elke dochtercel maar de helft van de informatie', [['Om meer chromosomen te krijgen dan eerst', 'Na de deling heeft elke cel er weer precies evenveel als eerst.', 'G5'], ['Om er een geslachtscel van te maken', 'Bij geslachtscellen (meiose) wordt juist niet gekopieerd.'], ['Dat hoeft niet', 'Probeer het maar in de cel: dan mist de helft.', 'G5']], 'Elke dochtercel moet alles hebben.')]],
        anders: [[toon('Andere manier: tik de stappen van een celdeling in volgorde.', 'ketting', { pijl: 'daarna', items: [
          { id: 'a', naam: 'Eén lichaamscel met al zijn chromosomen', org: 'cel', waarom: 'We beginnen met één lichaamscel.' },
          { id: 'b', naam: 'Alle chromosomen worden gekopieerd', waarom: 'Eerst kopiëren: anders is er niet genoeg voor twee cellen.', mis: 'G5' },
          { id: 'c', naam: 'De kopieën gaan naar twee kanten', waarom: 'Elk origineel en zijn kopie gaan uit elkaar.' },
          { id: 'd', naam: 'Twee dochtercellen, precies hetzelfde', org: 'cel', waarom: 'Twee nieuwe cellen met exact dezelfde chromosomen.', mis: 'G4' }] })],
          [toon('Nog eens zelf, nu met <b>drie</b> paren.', 'celdeling', { modus: 'deling', paren: 3, misHelft: 'G5' })]],
        dieper: [uitleg('Waarom heet het <b>dochter</b>cel? Biologen noemen de cel die deelt de moedercel, en wat eruit komt de dochtercellen. Het is gewoon een woord voor "wat eruit voortkomt". Ook in een jongen, een kat of een eikenboom heten ze zo. En dochtercellen kunnen later zelf weer delen.', 'moedercel → 2 dochtercellen<small>bij iedereen, jongen of meisje, jong of oud</small>')] },
      { t: 'baas', naam: 'De Dochter-dwaling', beeld: BAAS.dochter, hp: 5, denkfout: 'Dochtercellen zijn vrouwelijk, en bij celdeling halveert alles.', tekst: 'De Dochter-dwaling denkt dat een jongen geen dochtercellen heeft. Zet hem recht.',
        pool: [
          Q('Heeft je opa dochtercellen?', 'Ja, bij iedereen heten nieuwe cellen uit een celdeling zo', [['Nee, alleen meisjes', 'Dochtercel heeft niets met geslacht te maken.', 'G4'], ['Nee, alleen kinderen', 'Ook bij oude mensen delen cellen.']], 'Jong of oud, man of vrouw.'),
          Q('Een cel met 8 chromosomen deelt (celdeling). Hoeveel heeft elke dochtercel?', '8', [['4', 'Halveren gebeurt bij meiose.', 'G5'], ['16', 'Eerst 16 door kopiëren, dan verdeeld.']], 'Exact dezelfde chromosomen.'),
          Q('Wat ontstaat er bij celdeling?', 'Twee dezelfde nieuwe cellen', [['Twee geslachtscellen', 'Dat is meiose.'], ['Een jongen en een meisje', 'Grapje. Het gaat om cellen.', 'G4'], ['Twee verschillende cellen', 'Ze zijn precies hetzelfde.', 'G5']], 'Uit één lichaamscel.'),
          Q('Wat gebeurt er vóór een cel deelt?', 'Alle chromosomen worden gekopieerd', [['De helft van de chromosomen verdwijnt', 'Er verdwijnt niets.', 'G5'], ['De cel wordt vrouwelijk', 'Nee.', 'G4'], ['Niets', 'Er moet eerst gekopieerd worden.']], 'Daarom hebben beide dochtercellen alles.'),
          Q('Kunnen dochtercellen zelf ook weer delen?', 'Ja', [['Nee, alleen de moedercel', 'Dochtercellen kunnen later zelf ook weer delen.']], 'Zo groei je en herstelt een wondje.'),
          Q('Waarom is celdeling nodig?', 'Om te groeien en wondjes te herstellen', [['Om geslachtscellen te maken', 'Daarvoor is meiose.'], ['Om vrouwelijke cellen te maken', 'Nee.', 'G4']], 'Nieuwe lichaamscellen.'),
        ] },
    ] },

  { id: 'genotype-fenotype', titel: 'Recept en cake', sub: 'Basisstof 1 · genotype en fenotype', bol: svgStr(ORG.mens()), orgs: ['mens'],
    stappen: [
      toon('Je <b>genotype</b> is als een recept, je <b>fenotype</b> is de cake die eruit komt. Maar de oven doet ook mee! Probeer het.', 'receptcake', { na: 'Recept = <b>genotype</b> (al je DNA). Cake = <b>fenotype</b> (al je eigenschappen). De oven = de omgeving.' }, { hint: 'Probeer minstens drie combinaties.' }),
      toon('Dit is een keeper zoals jij. Welke eigenschappen zijn <b>erfelijk</b> (ze staan in het genotype) en welke <b>niet</b> (alleen fenotype)?', 'sorteer', { bakken: [{ id: 'erf', naam: 'Erfelijk', sub: 'in genotype én fenotype' }, { id: 'niet', naam: 'Niet erfelijk', sub: 'alleen fenotype' }], kaarten: [
        { t: 'Bruine ogen', bak: 'erf', w: 'Oogkleur staat in je DNA.', fout: 'Oogkleur erf je van je ouders: het staat in je genotype.' },
        { t: 'Bloedgroep', bak: 'erf', w: 'Erfelijk, en het hoort bij je fenotype, ook al zie je het niet.', fout: 'Je bloedgroep erf je. Hij hoort ook bij je fenotype, al zie je hem niet.', mis: 'G7' },
        { t: 'Litteken van een sliding', bak: 'niet', w: 'Dat kwam door wat er gebeurde: niet in je DNA.', fout: 'Een litteken krijg je door een val. Het staat niet in je DNA, dus je kinderen krijgen het niet.', mis: 'G8' },
        { t: 'Goed kunnen duiken', bak: 'niet', w: 'Geleerd door oefenen.', fout: 'Duiken heb je geleerd. Dat staat niet in je DNA.', mis: 'G8' },
        { t: 'Geverfd haar', bak: 'niet', w: 'De omgeving (verf!) deed dit.', fout: 'Verf zit niet in je DNA.' },
        { t: 'Rood haar van nature', bak: 'erf', w: 'Natuurlijke haarkleur is erfelijk.', fout: 'Je natuurlijke haarkleur staat in je DNA.' },
        { t: 'Sterke beenspieren door training', bak: 'niet', w: 'Training verandert je fenotype, niet je genotype.', fout: 'Trainen verandert je DNA niet. Je kinderen krijgen geen sterkere benen omdat jij traint.', mis: 'G8' },
        { t: 'Nederlands kunnen spreken', bak: 'niet', w: 'Geleerd.', fout: 'Een taal leer je: niet erfelijk.' },
      ], na: '<b>Alles</b> hierboven hoort bij je <b>fenotype</b>. Alleen de erfelijke dingen staan óók in je <b>genotype</b>.' }),
      { t: 'snap', id: 'gf-verschil', vraag: 'Snap je het verschil tussen <b>genotype</b> en <b>fenotype</b>?',
        bewijs: [[Q('Wat is je fenotype?', 'Al je eigenschappen, ook de niet-erfelijke en de onzichtbare', [['Alleen wat je aan de buitenkant ziet', 'Ook je bloedgroep hoort erbij, al zie je die niet.', 'G7'], ['Al je genen samen', 'Dat is je genotype.', 'G6'], ['Alleen je erfelijke eigenschappen', 'Ook een litteken of een geleerde vaardigheid hoort bij je fenotype.', 'G6']], 'Fenotype: alle eigenschappen van een organisme.'),
            Q('Een voetballer traint zijn benen heel sterk. Krijgen zijn kinderen daardoor sterkere benen?', 'Nee, trainen verandert zijn DNA niet', [['Ja, het komt dan in zijn genen', 'Trainen verandert je fenotype, niet je genotype.', 'G8'], ['Ja, maar alleen zijn zonen', 'Ook dat niet: het staat niet in zijn DNA.', 'G9'], ['Alleen als hij heel lang traint', 'Hoe lang ook, het DNA verandert er niet door.', 'G8']], 'Verworven eigenschappen erf je niet.')],
          [Q('Wat is je genotype?', 'Alle informatie voor je erfelijke eigenschappen samen', [['Alles wat je aan iemand kunt zien', 'Dat is een deel van het fenotype.', 'G7'], ['Je geslacht', 'Dat is maar één eigenschap.'], ['Eén gen', 'Het genotype is al je genen samen.']], 'Al je DNA, al je chromosomen, al je genen samen.'),
            Q('Een eeneiige tweeling heeft hetzelfde genotype. Hebben ze ook precies hetzelfde fenotype?', 'Nee, een litteken of kapsel kan bijvoorbeeld verschillen', [['Ja, genotype en fenotype zijn hetzelfde', 'De omgeving doet ook mee.', 'G6'], ['Ja, alles is erfelijk', 'Niet alles is erfelijk.', 'G8'], ['Nee, hun DNA is anders', 'Bij een eeneiige tweeling is het DNA juist hetzelfde.']], 'Zelfde recept, andere oven.')]],
        anders: [[toon('Andere manier: sorteer de <b>woorden</b>. Hoort het bij genotype of bij fenotype?', 'sorteer', { bakken: [{ id: 'g', naam: 'Genotype', sub: 'de informatie' }, { id: 'f', naam: 'Fenotype', sub: 'de eigenschappen' }], kaarten: [
          { t: 'Al je DNA', bak: 'g', w: 'De informatie zelf.', fout: 'DNA is de informatie: genotype.', mis: 'G6' }, { t: 'Je bloedgroep', bak: 'f', w: 'Een eigenschap, ook al zie je hem niet.', fout: 'Een bloedgroep is een eigenschap: fenotype.', mis: 'G7' },
          { t: 'Al je genen samen', bak: 'g', w: 'De informatie.', fout: 'Genen zijn informatie: genotype.', mis: 'G6' }, { t: 'Een geleerde vaardigheid', bak: 'f', w: 'Een eigenschap, niet erfelijk.', fout: 'Een vaardigheid is een eigenschap.' },
          { t: 'Al je chromosomen', bak: 'g', w: 'De informatie.', fout: 'Chromosomen dragen de informatie.' }, { t: 'Je oogkleur', bak: 'f', w: 'Een eigenschap (en erfelijk).', fout: 'Oogkleur is een eigenschap die je ziet.' }] })],
          [toon('Nog een manier: maak de twee definities af.', 'gatentekst', { term: 'Genotype en fenotype', zin: 'Genotype: alle [informatie] voor je erfelijke eigenschappen samen. Fenotype: alle [eigenschappen] van een organisme.', extra: ['zichtbare', 'cellen'], fout: { zichtbare: 'Het fenotype is meer dan alleen wat je ziet.', cellen: 'Het gaat om informatie en eigenschappen.' }, mis: { zichtbare: 'G7' } })]],
        dieper: [uitleg('Je fenotype ontstaat uit je <b>genotype</b> én je <b>omgeving</b>. Je genen geven bijvoorbeeld aanleg om lang te worden, maar met weinig eten groei je minder. Wat jij leert of meemaakt, verandert je DNA niet: daarom geef je een litteken of getrainde spieren niet door. Een verbrande cake verandert het recept niet.', 'genotype + omgeving → fenotype')] },
      { t: 'baas', naam: 'De Alles-Erver', beeld: BAAS.erver, hp: 5, denkfout: 'Alles wat je bent, erf je. Ook een litteken of wat je hebt geleerd.', tekst: 'De Alles-Erver denkt dat je je kapsel en je zwemdiploma aan je kinderen doorgeeft. Versla hem.',
        pool: [
          Q('Iemand heeft een tatoeage. Krijgt haar kind die ook?', 'Nee, een tatoeage staat niet in haar DNA', [['Ja, het hoort bij haar fenotype', 'Het hoort bij haar fenotype, maar niet bij haar genotype. Alleen het genotype geef je door.', 'G8'], ['Alleen als het een meisje is', 'Nee.', 'G9']], 'Alleen erfelijke eigenschappen geef je door.'),
          Q('Hoort je bloedgroep bij je fenotype?', 'Ja, ook onzichtbare eigenschappen horen erbij', [['Nee, je kunt hem niet zien', 'Fenotype is meer dan zichtbaar.', 'G7']], 'Alle eigenschappen.'),
          Q('Wat is een fenotype?', 'Alle eigenschappen van een organisme', [['Alle genen van een organisme', 'Dat is het genotype.', 'G6'], ['Alleen de zichtbare eigenschappen', 'Ook onzichtbare.', 'G7'], ['Alleen de erfelijke eigenschappen', 'Ook niet-erfelijke.', 'G6']], 'Vetgedrukt in je lijst.'),
          Q('Wat bepaalt je fenotype?', 'Je genotype en je omgeving samen', [['Alleen je genotype', 'De omgeving doet ook mee.', 'G6'], ['Alleen je omgeving', 'Je genen doen ook mee.']], 'Recept + oven.'),
          Q('Iemand leert vier talen. Kunnen haar kinderen dan vanzelf vier talen?', 'Nee, wat je leert erf je niet', [['Ja, het zit dan in haar genen', 'Leren verandert je DNA niet.', 'G8']], 'Verworven eigenschappen erf je niet.'),
          Q('Wat is genotype?', 'Al je DNA, al je chromosomen, al je genen samen', [['Hoe je eruitziet', 'Dat is (een deel van) je fenotype.', 'G6'], ['Je persoonlijkheid', 'Nee.']], 'De informatie in één celkern.'),
        ] },
    ] },

  { id: 'chromosomenparen', titel: 'Alles dubbel', sub: 'Basisstof 2 · paren, geslachtschromosomen, geslachtscellen', bol: svgStr(ORG.chromosoom()), orgs: ['zaadcel', 'eicel'],
    stappen: [
      toon('In een lichaamscel liggen de chromosomen in <b>paren</b>: één van je moeder, één van je vader. Zoek de paren in deze (kleine) cel van een jongen.', 'paren', { geslacht: 'XY', na: 'Lichaamscel: <b>paren</b>, altijd een even aantal. Geslachtscel: <b>enkelvoudig</b>.' }, { hint: 'Zoek alle paren, en schakel daarna tussen lichaamscel en geslachtscel.' }),
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Geslachtschromosomen', zin: 'De chromosomen van een organisme die het [geslacht] bepalen. Een vrouw heeft [XX], een man [XY].', extra: ['YY', 'oogkleur', 'YX'], fout: { YY: 'YY bestaat niet: een moeder heeft geen Y om door te geven.', oogkleur: 'Oogkleur is een andere eigenschap.', YX: 'Dat is hetzelfde als XY. Hier staat de vrouw: die heeft twee X-en.' }, mis: { YX: 'G11' } }),
      { t: 'snap', id: 'p-paren', vraag: 'Snap je hoe chromosomen in <b>paren</b> zitten, en wat een <b>geslachtscel</b> krijgt?',
        bewijs: [[Q('Een jongen heeft het geslachtspaar XY. Van wie kreeg hij de X?', 'Van zijn moeder', [['Van zijn vader, jongens erven van papa', 'Zijn moeder heeft alleen X-en: hij moet de X wel van haar hebben. Van zijn vader kreeg hij de Y.', 'G9'], ['Van allebei een stukje', 'Hij kreeg één hele X, van zijn moeder.'], ['Die maakte hij zelf', 'Chromosomen krijg je van je ouders.']], 'Van elk paar één van moeder, één van vader.'),
            Q('Hoeveel chromosomen heeft een eicel van een mens?', '23, van elk paar één', [['46, net als een lichaamscel', 'Geslachtscellen hebben de helft: enkelvoudig.', 'G10'], ['23 paren', 'Geen paren: van elk paar maar één.', 'G10'], ['92', 'Veel te veel.']], 'Geslachtscel = enkelvoudig.')],
          [Q('Welke geslachtschromosomen heeft een vrouw?', 'XX', [['XY', 'Dat is een man.', 'G11'], ['YY', 'Bestaat niet.'], ['Alleen een X', 'In een lichaamscel heeft ze er twee.']], 'Vrouw XX, man XY.'),
            Q('Een lichaamscel van een kat heeft 38 chromosomen. Hoeveel paren is dat?', '19 paren', [['38 paren', '38 chromosomen in paren van twee: 19 paren.'], ['76 paren', 'Veel te veel.'], ['19 losse chromosomen', 'In een lichaamscel liggen ze in paren: 19 paren = 38.', 'G10']], 'Altijd een even aantal in een lichaamscel.')]],
        anders: [[toon('Andere manier: sorteer. Hoort het bij een <b>lichaamscel</b> of een <b>geslachtscel</b>?', 'sorteer', { bakken: [{ id: 'l', naam: 'Lichaamscel' }, { id: 'g', naam: 'Geslachtscel' }], kaarten: [
          { t: 'Chromosomen in paren', bak: 'l', w: 'Altijd paren.', fout: 'Paren horen bij lichaamscellen.', mis: 'G10' }, { t: 'Enkelvoudige chromosomen', bak: 'g', w: 'Van elk paar één.', fout: 'Enkelvoudig hoort bij geslachtscellen.', mis: 'G10' },
          { t: 'Altijd een even aantal', bak: 'l', w: 'Paren = even.', fout: 'Paren geven altijd een even aantal.' }, { t: 'Kan een oneven aantal zijn', bak: 'g', w: 'Enkelvoudig kan oneven zijn (23).', fout: 'Bij enkelvoudig kan het oneven zijn.' },
          { t: 'Eicel', org: 'eicel', bak: 'g', w: 'Geslachtscel van een vrouw.', fout: 'Een eicel is een geslachtscel.' }, { t: 'Stuifmeelkorrel', org: 'stuifmeel', bak: 'g', w: 'Geslachtscel van een plant (mannelijk).', fout: 'Stuifmeel is een geslachtscel van een plant.' },
          { t: 'Huidcel', org: 'cel', bak: 'l', w: 'Lichaamscel.', fout: 'Een huidcel is een lichaamscel.' }, { t: 'Zaadcel', org: 'zaadcel', bak: 'g', w: 'Geslachtscel van een man.', fout: 'Een zaadcel is een geslachtscel.' }] })],
          [toon('Nog een manier: maak de definitie af.', 'gatentekst', { term: 'Geslachtscellen', zin: 'Bij dieren: [eicellen] (vrouw) en [zaadcellen] (man). Bij planten: eicellen en [stuifmeelkorrels].', extra: ['dochtercellen', 'huidcellen'], fout: { dochtercellen: 'Dochtercellen ontstaan bij gewone celdeling.', huidcellen: 'Huidcellen zijn lichaamscellen.' }, mis: { dochtercellen: 'G4' } })]],
        dieper: [uitleg('Op beide chromosomen van een paar liggen <b>dezelfde genen</b>, op dezelfde plek. Daarom heb je elke eigenschap <b>dubbel</b>: bijvoorbeeld op het ene chromosoom de variant voor blauwe ogen en op het andere die voor bruine. Die varianten heten <b>allelen</b>. En de Y van een jongen komt altijd van zijn vader: een moeder heeft geen Y.', 'mens: 23 paren = 46<small>eicel of zaadcel: 23 (enkelvoudig)</small>')] },
      { t: 'baas', naam: 'De Papa-kloon', beeld: BAAS.papa, hp: 5, denkfout: 'Een jongen erft alles van zijn vader, een meisje alles van haar moeder.', tekst: 'De Papa-kloon denkt dat zoons kopieën van hun vader zijn. Laat hem de paren zien.',
        pool: [
          Q('Van wie krijgt een meisje haar chromosomen?', 'Van elk paar één van haar moeder en één van haar vader', [['Allemaal van haar moeder', 'Ze krijgt van allebei de helft.', 'G9'], ['Alleen de X van haar moeder', 'Ze krijgt ook een X van haar vader.', 'G9']], 'Iedereen krijgt van beide ouders.'),
          Q('Welke ouder bepaalt of een baby een jongen wordt?', 'De vader: zijn zaadcel brengt een X of een Y', [['De moeder', 'Een moeder geeft altijd een X.', 'G9'], ['Allebei evenveel', 'De moeder geeft altijd X; de vader geeft X of Y.']], 'Y van vader = jongen.'),
          Q('Een man heeft geslachtschromosomen ...', 'XY', [['XX', 'Dat is een vrouw.', 'G11'], ['YY', 'Bestaat niet.']], 'Het 23e paar.'),
          Q('Hoeveel chromosomen heeft een zaadcel van een mens?', '23', [['46', 'Een geslachtscel heeft de helft.', 'G10'], ['23 paren', 'Enkelvoudig: geen paren.', 'G10']], 'Enkelvoudig.'),
          Q('Wat zijn geslachtschromosomen?', 'De chromosomen die het geslacht bepalen', [['Chromosomen die alleen in geslachtscellen zitten', 'Ze zitten in elke cel, ook in lichaamscellen.'], ['De chromosomen van je vader', 'Nee.', 'G9']], 'Bij de mens het 23e paar.'),
          Q('Waarom is het aantal chromosomen in een lichaamscel altijd even?', 'Ze liggen in paren', [['Toeval', 'Paren van twee geven altijd een even aantal.'], ['Omdat er 46 zijn', 'Ook bij andere soorten is het even, door de paren.']], 'Paren.'),
        ] },
    ] },

  { id: 'meiose', titel: 'Halveren voor de baby', sub: 'Basisstof 2 · meiose, variatie in genotype', bol: svgStr(ORG.stuifmeel()), orgs: ['stuifmeel'],
    stappen: [
      toon('Geslachtscellen worden gemaakt met een <b>speciale celdeling</b>: meiose. Hier worden de paren <b>verdeeld</b>. Doe maar.', 'celdeling', { modus: 'meiose', paren: 2, na: 'Twee geslachtscellen, elk met de <b>helft</b>: van elk paar één.' }, { hint: 'Verdeel de paren.' }),
      toon('Waarom halveren? Bekijk wat er bij elke <b>bevruchting</b> gebeurt, met en zonder meiose.', 'telling', { n: 46, na: 'Meiose zorgt dat het aantal chromosomen per generatie <b>gelijk</b> blijft.' }, { hint: 'Tik drie keer op "Volgende generatie".' }),
      { t: 'snap', id: 'm-helft', vraag: 'Snap je het verschil tussen gewone <b>celdeling</b> en <b>meiose</b>?',
        bewijs: [[Q('Wat gebeurt er bij meiose?', 'De chromosomenparen worden verdeeld over twee cellen', [['Alle chromosomen worden gekopieerd en elke cel krijgt ze allemaal', 'Dat is gewone celdeling.', 'G12'], ['De cel krijgt er chromosomen bij', 'Er gaan er juist de helft in elke cel.'], ['Er ontstaan lichaamscellen', 'Bij meiose ontstaan geslachtscellen.', 'G12']], 'Paren verdelen: elk de helft.'),
            Q('Waarom heeft een geslachtscel de helft van de chromosomen?', 'Bij de bevruchting komen eicel en zaadcel samen: dan is het weer het hele aantal', [['Omdat geslachtscellen kleiner zijn', 'Het gaat om het aantal chromosomen, niet om de grootte.'], ['Dat klopt niet, ze hebben er ook 46', 'Dan zou een baby er 92 hebben.', 'G12'], ['Zodat een kind alleen op zijn moeder lijkt', 'Een kind krijgt van allebei de helft.', 'G9']], '23 + 23 = 46.')],
          [Q('Een tulp maakt nieuwe tulpen met bollen. Hoe zijn die nieuwe tulpen?', 'Precies hetzelfde genotype als de moederplant', [['Elk een ander genotype', 'Dat krijg je bij geslachtelijke voortplanting. Bollen ontstaan door gewone celdeling.', 'G13'], ['De helft van de chromosomen', 'Het zijn hele planten met alle chromosomen.', 'G12'], ['Een mengsel van twee ouders', 'Er is maar één ouder.', 'G13']], 'Ongeslachtelijk = zelfde genotype.'),
            Q('Een lichaamscel van een hond heeft 78 chromosomen. Hoeveel heeft een zaadcel van die hond?', '39', [['78', 'Een geslachtscel heeft de helft.', 'G12'], ['156', 'Veel te veel.'], ['39 paren', 'Van elk paar één: 39 losse chromosomen.', 'G10']], 'De helft, enkelvoudig.')]],
        anders: [[toon('Andere manier: sorteer. Hoort het bij <b>gewone celdeling</b> of bij <b>meiose</b>?', 'sorteer', { bakken: [{ id: 'cd', naam: 'Celdeling' }, { id: 'me', naam: 'Meiose' }], kaarten: [
          { t: 'Twee dezelfde dochtercellen', bak: 'cd', w: 'Celdeling.', fout: 'Twee dezelfde cellen: gewone celdeling.' }, { t: 'Er ontstaan geslachtscellen', bak: 'me', w: 'Meiose.', fout: 'Geslachtscellen maak je met meiose.', mis: 'G12' },
          { t: 'Eerst worden alle chromosomen gekopieerd', bak: 'cd', w: 'Celdeling.', fout: 'Kopiëren hoort bij gewone celdeling.', mis: 'G12' }, { t: 'De paren worden verdeeld', bak: 'me', w: 'Meiose.', fout: 'Paren verdelen is meiose.', mis: 'G12' },
          { t: 'Een wondje herstellen', bak: 'cd', w: 'Nieuwe huidcellen.', fout: 'Een wondje herstel je met gewone celdeling.' }, { t: 'Stuifmeel maken', org: 'stuifmeel', bak: 'me', w: 'Geslachtscellen van een plant.', fout: 'Stuifmeel is een geslachtscel: meiose.' },
          { t: 'Een stekje laten groeien', bak: 'cd', w: 'Ongeslachtelijk: gewone celdeling, zelfde genotype.', fout: 'Een stek groeit met gewone celdeling.', mis: 'G13' }] })],
          [toon('Nog eens zelf, nu met <b>drie</b> paren. Kijk welk chromosoom van elk paar waar terechtkomt.', 'celdeling', { modus: 'meiose', paren: 3 })]],
        dieper: [uitleg('Waarom lijken broers en zussen niet precies op elkaar? Bij meiose is het steeds <b>toeval</b> welk chromosoom van elk paar in een geslachtscel komt. Een mens heeft 23 paren: dan zijn er 2 × 2 × 2 ... (23 keer) = meer dan <b>8 miljoen</b> verschillende eicellen of zaadcellen mogelijk. Daarom heeft elk kind een ander genotype, behalve een eeneiige tweeling. Bij ongeslachtelijke voortplanting (stekken, bollen, knollen) is er geen meiose: alle nakomelingen hebben precies het genotype van de moederplant.', '2<sup>23</sup> = 8 388 608')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Meiose', zin: 'Een speciale celdeling waarbij de [chromosomenparen] [verdeeld] worden over de twee dochtercellen.', extra: ['gekopieerd', 'basen', 'organen'], fout: { gekopieerd: 'Bij meiose worden de paren verdeeld, niet eerst gekopieerd (zo staat het in je lijst).', basen: 'Het gaat om hele chromosomen.', organen: 'Het gaat om chromosomen in een cel.' }, mis: { gekopieerd: 'G12' } }),
      { t: 'baas', naam: 'De Verdubbelaar', beeld: BAAS.verdubbelaar, hp: 5, denkfout: 'Geslachtscellen hebben net zoveel chromosomen als lichaamscellen.', tekst: 'De Verdubbelaar wil dat elke baby twee keer zoveel chromosomen krijgt als zijn ouders. Hou hem tegen.',
        pool: [
          Q('Wat ontstaat er bij meiose?', '2 geslachtscellen met elk de helft van de chromosomen', [['2 lichaamscellen met alle chromosomen', 'Dat is gewone celdeling.', 'G12'], ['1 cel met dubbel zoveel', 'Nee.']], 'Vetgedrukt in je lijst.'),
          Q('Eicel 23 + zaadcel 23 = ...', '46', [['23', 'Ze komen samen: 23 + 23.'], ['92', 'Dat zou gebeuren zonder meiose.', 'G12']], 'Bevruchting.'),
          Q('Een aardbeiplant maakt uitlopers met nieuwe plantjes. Hun genotype is ...', 'hetzelfde als de moederplant', [['steeds anders', 'Ongeslachtelijk: geen meiose, geen variatie.', 'G13'], ['de helft van de moederplant', 'Het zijn hele planten.', 'G12']], 'Gewone celdeling.'),
          Q('Waarom krijgen broers en zussen een ander genotype?', 'Bij meiose komt steeds een andere mix van chromosomen in de geslachtscel', [['Omdat ze een andere opvoeding krijgen', 'Opvoeding verandert je DNA niet.', 'G8'], ['Omdat jongens van papa erven', 'Iedereen erft van allebei.', 'G9']], 'Toeval bij meiose.'),
          Q('Een cel met 10 chromosomen doet meiose. Hoeveel krijgt elke geslachtscel?', '5', [['10', 'De helft.', 'G12'], ['20', 'Veel te veel.']], 'Van elk paar één.'),
          Q('Wie hebben precies hetzelfde genotype?', 'Een eeneiige tweeling', [['Broer en zus', 'Die hebben elk een ander genotype.', 'G13'], ['Moeder en dochter', 'Een dochter heeft de helft van moeder en de helft van vader.', 'G9']], 'Behalve eeneiige tweelingen: allemaal verschillend.'),
        ] },
    ] },

  { id: 'dna-code', titel: 'De DNA-rits', sub: 'Basisstof 3 · basen, basenpaar, eiwitten, allelen', bol: svgStr(ORG.dna()), orgs: ['dna'],
    stappen: [
      toon('DNA lijkt op een gedraaide <b>trap</b>, of een rits. Maak de rits dicht: welke base past bij welke?', 'basenrits', { streng: 'ATGCCGTA', mis: 'G14', na: '<b>A en T</b> horen altijd bij elkaar, <b>C en G</b> ook. Dat is een <b>basenpaar</b>.' }, { hint: 'Maak de hele rits dicht.' }),
      toon('Wat dóet die code? Zet de stappen van <b>gen</b> tot <b>eigenschap</b> in volgorde.', 'ketting', { pijl: 'daardoor', items: [
        { id: 'gen', naam: 'Een gen: een rij basen (de code)', org: 'dna', waarom: 'Het begint met de code: de volgorde van A, T, C en G in een gen.' },
        { id: 'lees', naam: 'De cel leest de code', waarom: 'De cel gebruikt de code als een recept.' },
        { id: 'eiwit', naam: 'De cel maakt een eiwit', waarom: 'Met die code maakt de cel precies één eiwit.' },
        { id: 'eig', naam: 'Het eiwit regelt een eigenschap, zoals kleur', org: 'konijn', waarom: '<b>Eiwitten zijn stoffen die de kleur, vorm en werking van je lichaam regelen.</b>' },
      ], na: 'Gen → eiwit → eigenschap. Ieder gen bevat de informatie voor het eiwit dat die eigenschap regelt.' }),
      { t: 'snap', id: 'dna-paar', vraag: 'Snap je hoe de <b>basen</b> aan elkaar vastzitten, en wat een <b>allel</b> is?',
        bewijs: [[Q('Op de ene kant van een stukje DNA staat A C G. Wat staat er tegenover?', 'T G C', [['A C G', 'Tegenover A staat altijd T, tegenover C altijd G.', 'G14'], ['G T A', 'A past bij T, niet bij G.', 'G14'], ['C A T', 'A past bij T, C bij G, G bij C.', 'G14']], 'A-T en C-G.'),
            Q('Wat is een allel?', 'De informatie in een gen, bijvoorbeeld de variant voor blauwe ogen', [['Een ander woord voor chromosoom', 'Een chromosoom heeft heel veel genen.'], ['Een gen voor een andere eigenschap', 'Allelen gaan over dezelfde eigenschap: varianten van één gen.', 'G15'], ['Een base', 'Een allel bestaat uit veel basen.']], 'Genvariant = allel.')],
          [Q('Welke basen vormen samen een basenpaar?', 'C en G', [['A en G', 'A past alleen bij T.', 'G14'], ['C en T', 'C past alleen bij G.', 'G14'], ['A en C', 'A past alleen bij T.', 'G14']], 'A-T en C-G.'),
            Q('Wat is een allelenpaar?', 'De twee allelen van één gen', [['Twee genen voor verschillende eigenschappen', 'Het gaat over dezelfde eigenschap.', 'G15'], ['Twee chromosomen', 'Een paar chromosomen draagt wel de allelen, maar het allelenpaar zijn de twee allelen.'], ['Een eicel en een zaadcel', 'Nee.']], 'Twee dezelfde of twee verschillende.')]],
        anders: [[toon('Andere streng. Maak deze rits dicht.', 'basenrits', { streng: 'GGCATTAC', mis: 'G14' })],
          [toon('Nog een manier: maak de definitie af.', 'gatentekst', { term: 'Allel', zin: 'De [informatie] in een [gen] noem je genvariant of allel. Van elke eigenschap heb je er [2].', extra: ['chromosoom', '1', '46'], fout: { chromosoom: 'Een allel is de informatie in één gen, niet een heel chromosoom.', '1': 'Je hebt elke eigenschap dubbel: twee allelen.', '46': 'Dat is het aantal chromosomen.' }, mis: { chromosoom: 'G15' } })]],
        dieper: [uitleg('Waarom past A alleen bij T? De basen hebben een vorm die precies op hun partner past, als puzzelstukjes. Daardoor kan een cel DNA <b>kopiëren</b>: de rits gaat open en bij elke kant komen de passende basen erbij. Zo krijg je twee precies dezelfde trappen. Dat gebeurt bij het kopiëren vóór de celdeling. Van veel eigenschappen bestaan veel allelen (blauwe, bruine, grijze, groene ogen), maar jij hebt er altijd <b>twee</b>: twee dezelfde of twee verschillende.', 'A–T · C–G')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Eiwitten', zin: 'Stoffen in je lichaam die de [kleur], [vorm] en [werking] van je lichaam regelen.', extra: ['geur', 'DNA'], fout: { geur: 'Niet in je lijst. Het zijn kleur, vorm en werking.', DNA: 'DNA bevat de code. Eiwitten worden met die code gemaakt.' } }),
      { t: 'baas', naam: 'De Ritsbreker', beeld: BAAS.rits, hp: 5, denkfout: 'Basen plakken willekeurig aan elkaar, en allelen gaan over verschillende eigenschappen.', tekst: 'De Ritsbreker plakt elke base aan elke andere. Repareer zijn rits.',
        pool: [
          Q('Tegenover T staat altijd ...', 'A', [['G', 'T hoort bij A.', 'G14'], ['C', 'C hoort bij G.', 'G14'], ['T', 'T hoort bij A.', 'G14']], 'A-T.'),
          Q('Uit welke basen bestaat DNA?', 'A, T, C en G', [['A, B, C en D', 'Grapje. A, T, C en G.'], ['X en Y', 'Dat zijn geslachtschromosomen.']], 'Vier basen.'),
          Q('Iemand heeft 2× het allel voor blauwe ogen. Kan hij bruine ogen hebben?', 'Nee', [['Ja, als zijn ouders bruine ogen hebben', 'Hij heeft alleen de informatie voor blauw.', 'G15']], 'Twee keer blauw = blauw.'),
          Q('Wat regelt een eiwit?', 'Kleur, vorm en werking van je lichaam', [['Hoeveel chromosomen je hebt', 'Nee.'], ['Alleen je spieren', 'Ook bijvoorbeeld je kleur.']], 'Vetgedrukt in je lijst.'),
          Q('Waar ligt de code om een eiwit te maken?', 'In je DNA, in een gen', [['In je bloed', 'In je DNA.', 'G3'], ['In je eten', 'In je DNA.']], 'Gen → eiwit.'),
          Q('Twee allelen van een gen gaan over ...', 'dezelfde eigenschap', [['twee verschillende eigenschappen', 'Allelen zijn varianten van één gen.', 'G15']], 'Bijvoorbeeld oogkleur.'),
          Q('Stukje DNA: T T G C. Wat staat ertegenover?', 'A A C G', [['T T G C', 'Tegenover T staat A.', 'G14'], ['G G T A', 'T past bij A.', 'G14']], 'A-T, C-G.'),
        ] },
    ] },

  { id: 'mutatie', titel: 'Eén letter anders', sub: 'Basisstof 3 · mutatie, mutant, albino, mutagene invloeden', bol: svgStr(ORG.konijn({ albino: true })), orgs: ['albino'],
    stappen: [
      toon('Dit is het gen voor <b>melanine</b>: de kleurstof voor haar, ogen en huid. Verander één base en kijk wat er gebeurt.', 'mutatielab', { na: 'Een <b>mutatie</b> is een plotselinge verandering van het genotype. <b>Waar</b> hij zit, maakt het verschil.' }, { hint: 'Verander een base en probeer daarna allebei de plekken.' }),
      toon('Wat geeft een grotere kans op mutaties? Sorteer.', 'sorteer', { bakken: [{ id: 'm', naam: 'Mutagene invloed', sub: 'meer kans op mutaties' }, { id: 'n', naam: 'Geen mutagene invloed' }], kaarten: [
        { t: 'Roken', bak: 'm', w: 'Rook beschadigt cellen.', fout: 'Roken geeft een grotere kans op mutaties.' },
        { t: 'Felle zon zonder insmeren', org: 'zon', bak: 'm', w: 'Uv-straling kan huidcellen beschadigen.', fout: 'Uv-straling uit de zon is mutageen.' },
        { t: 'Röntgenstraling', bak: 'm', w: 'Straling kan DNA beschadigen.', fout: 'Röntgenstraling is mutageen. Daarom krijg je bij de tandarts een loodschort.' },
        { t: 'Asbest', bak: 'm', w: 'Asbest is mutageen.', fout: 'Asbest staat in je lijst als mutagene invloed.' },
        { t: 'Radioactieve straling', bak: 'm', w: 'Straling beschadigt cellen.', fout: 'Radioactieve straling is mutageen.' },
        { t: 'Water drinken', org: 'druppel', bak: 'n', w: 'Gewoon gezond.', fout: 'Water drinken geeft geen mutaties.' },
        { t: 'Voetballen', bak: 'n', w: 'Geen mutaties door sport.', fout: 'Sporten beschadigt je DNA niet.' },
        { t: 'Broccoli eten', bak: 'n', w: 'Geen mutagene invloed.', fout: 'Groente eten geeft geen mutaties.' },
      ], na: '<b>Mutagene invloeden: invloeden van buitenaf die een verhoogde kans geven op mutaties in je cellen.</b>' }),
      { t: 'snap', id: 'mu-waar', vraag: 'Snap je wanneer een mutatie wel en niet <b>doorgegeven</b> wordt, en wat een <b>mutant</b> is?',
        bewijs: [[Q('Iemand krijgt door de zon een mutatie in één huidcel. Krijgen haar kinderen die mutatie?', 'Nee, alleen een mutatie in een geslachtscel kan naar een kind', [['Ja, mutaties erf je altijd', 'Alleen als het in de eicel of zaadcel van de bevruchting zit, zit het in het kind.', 'G17'], ['Ja, maar alleen haar dochters', 'Nee, en geslacht heeft er niets mee te maken.', 'G9'], ['Alleen als het een albino-mutatie is', 'Het gaat om de plek: lichaamscel of geslachtscel.', 'G17']], 'Lichaamscel: niet doorgegeven.'),
            Q('Wat is een mutant?', 'Een organisme waarbij de mutatie te zien is in het fenotype', [['Elk organisme met een gemuteerd allel', 'Gemuteerd: een allel is veranderd. Mutant: je ziet het in het fenotype.', 'G16'], ['Een monster uit een film', 'In de biologie is een mutant gewoon een organisme met een zichtbare mutatie.', 'G16'], ['Een cel die te veel deelt', 'Dat is een tumor.']], 'Zichtbaar in het fenotype.')],
          [Q('Een konijn is albino. Waar zat de mutatie?', 'In de eicel of zaadcel waaruit het konijn ontstond', [['In één huidcel van het konijn', 'Dan zou maar één cel geen kleur maken. Hier is het hele konijn wit: de mutatie zit in alle cellen.', 'G17'], ['In het gras dat het at', 'Eten verandert je DNA niet.', 'G8'], ['Nergens, het is geverfd', 'Grapje.']], 'Albino: geen melanine in het hele lichaam.'),
            Q('Is een mutatie altijd slecht en altijd te zien?', 'Nee, vaak merk je er niets van: het hangt af van waar hij zit', [['Ja, altijd', 'In één lichaamscel is het meestal geen probleem: de cellen eromheen werken prima.', 'G16'], ['Ja, je wordt er altijd een mutant van', 'Mutant ben je pas als je het in het fenotype ziet.', 'G16']], 'Gevolgen hangen af van waar.')]],
        anders: [[toon('Probeer het lab nog een keer. Verander nu een <b>andere</b> base.', 'mutatielab', {})],
          [toon('Andere manier: tik de ketting van oorzaak en gevolg in volgorde.', 'ketting', { pijl: 'daardoor', items: [
            { id: 'a', naam: 'Eén base verandert (mutatie)', org: 'dna', waarom: 'Het begint met een veranderde base: A, T, C of G.' },
            { id: 'b', naam: 'De code in het gen is anders', waarom: 'De volgorde van de basen is de code. Die klopt nu niet meer.' },
            { id: 'c', naam: 'Het eiwit wordt niet goed gemaakt', waarom: 'Met een foute code wordt het eiwit verkeerd gemaakt.' },
            { id: 'd', naam: 'De eigenschap wordt minder goed geregeld', waarom: 'Het eiwit regelt de eigenschap. Werkt het niet, dan gaat het mis.' },
            { id: 'e', naam: 'Bijvoorbeeld: geen melanine (albino)', org: ORG.konijn({ albino: true }), waarom: 'Zat het in de eicel of zaadcel, dan zie je het in het hele dier.', mis: 'G17' }] })]],
        dieper: [uitleg('Is een mutatie altijd slecht? Nee. Vaak merk je er niets van: één cel tussen miljarden andere, of een verandering op een plek die weinig uitmaakt. <b>Hoeveel gevolgen het heeft, hangt af van wáár</b> de mutatie zit. Gemuteerd (een allel is veranderd) is dus niet hetzelfde als mutant (je ziet het in het fenotype). <b>Albino: een organisme met albinisme kan geen melanine aanmaken voor haren, ogen en huid.</b>', beeldSvg(plaats(ORG.konijn(), 10, 10, 1) + plaats(ORG.konijn({ albino: true }), 110, 10, 1), '0 0 220 120'))] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Mutatie', zin: 'Een plotselinge [verandering] van het [genotype].', extra: ['fenotype', 'ziekte', 'cel'], fout: { fenotype: 'Een mutatie verandert eerst het DNA: het genotype. Of je het in het fenotype ziet, hangt ervan af.', ziekte: 'Een mutatie is een verandering, niet altijd een ziekte.', cel: 'Het gaat om de verandering van het genotype.' }, mis: { fenotype: 'G16', ziekte: 'G16' } }),
      { t: 'baas', naam: 'Het Mutantenmonster', beeld: BAAS.mutant, hp: 5, denkfout: 'Een mutatie is altijd slecht en altijd te zien. En je geeft hem altijd door.', tekst: 'Het Mutantenmonster denkt dat elke mutatie van je een monster maakt. Laat zien hoe het echt zit.',
        pool: [
          Q('Wat is gemuteerd?', 'Een allel dat veranderd is', [['Een organisme dat er raar uitziet', 'Dat is een mutant, en dan alleen als je het in het fenotype ziet.', 'G16'], ['Een tumor', 'Nee.']], 'Eén of meer basen veranderd.'),
          Q('Een mutatie in een zaadcel die een eicel bevrucht. Waar zit de mutatie dan in het kind?', 'In alle cellen', [['In één cel', 'Alle cellen komen uit die ene bevruchte eicel.', 'G17'], ['Nergens', 'Hij wordt doorgegeven.']], 'Daarom kan het kind een mutant zijn.'),
          Q('Welke is een mutagene invloed?', 'Uv-straling van de zon', [['Zwemmen', 'Nee.'], ['Fruit eten', 'Nee.']], 'Roken, uv, röntgen, radioactieve straling, asbest.'),
          Q('Waarom maakt een albino geen melanine?', 'Het allel voor melanine is gemuteerd', [['Het eet te weinig wortels', 'Eten verandert je DNA niet.', 'G8'], ['Het zit te veel binnen', 'Het ligt aan het DNA.']], 'Mutatie in de eicel of zaadcel.'),
          Q('Is een mutatie in één huidcel een probleem?', 'Meestal niet: de cellen eromheen werken prima', [['Ja, altijd', 'In één lichaamscel is het meestal geen probleem.', 'G16'], ['Ja, je kinderen krijgen het', 'Een lichaamscel geef je niet door.', 'G17']], 'Hangt af van waar.'),
          Q('Wat verandert er bij een mutatie?', 'Eén of meer basen in het DNA', [['Je hele uiterlijk', 'Soms zie je er niets van.', 'G16'], ['Het aantal chromosomen verdubbelt', 'Nee.']], 'De code verandert.'),
        ] },
    ] },

  { id: 'tumor', titel: 'De rem op celdeling', sub: 'Basisstof 3 · tumor, kwaadaardig, kanker, uitzaaiing', bol: svgStr(ORG.remgen()), orgs: ['remgen'],
    stappen: [
      toon('Cellen delen alleen als het nodig is. Maak eerst een wondje, en zet daarna de <b>rem</b> uit.', 'weefsel', { na: 'Een gezonde cel deelt alleen als het nodig is. Een cel zonder rem deelt <b>ongeremd</b>.' }, { hint: 'Doe allebei: wondje en rem uit.' }),
      toon('Sorteer: past dit bij een <b>goedaardige</b> of een <b>kwaadaardige</b> tumor?', 'sorteer', { bakken: [{ id: 'g', naam: 'Goedaardig' }, { id: 'k', naam: 'Kwaadaardig' }], kaarten: [
        { t: 'Groeit snel', bak: 'k', w: 'Kwaadaardig groeit snel.', fout: 'Snel groeien hoort bij kwaadaardig.' },
        { t: 'Verstoort de werking van het orgaan', bak: 'k', w: 'Dat maakt hem kwaadaardig.', fout: 'Verstoren van bouw en werking: kwaadaardig.', mis: 'G18' },
        { t: 'Zit vooral in de weg', bak: 'g', w: 'Goedaardig: verstoort de werking niet.', fout: 'Alleen in de weg zitten, zonder de werking te verstoren: goedaardig.', mis: 'G18' },
        { t: 'Vaak makkelijk te verwijderen', bak: 'g', w: 'Goedaardig.', fout: 'Goedaardige tumoren zijn vaak makkelijk te verwijderen.' },
        { t: 'Kan uitzaaien via bloed of lymfe', bak: 'k', w: 'Uitzaaiing hoort bij kwaadaardig.', fout: 'Uitzaaien doet een kwaadaardige tumor.', mis: 'G19' },
        { t: 'Heet ook kanker', bak: 'k', w: 'Kanker = een kwaadaardige tumor.', fout: 'Kanker is een kwaadaardige tumor.', mis: 'G18' },
      ] }),
      { t: 'snap', id: 't-rem', vraag: 'Snap je wat een <b>tumor</b> is, en wanneer het <b>kanker</b> heet?',
        bewijs: [[Q('Wat is een tumor?', 'Een cel die zich ongeremd deelt, omdat het gen voor celdeling gemuteerd is', [['Altijd kanker', 'Alleen een kwaadaardige tumor is kanker. Er zijn ook goedaardige.', 'G18'], ['Een besmetting met bacteriën', 'Een tumor komt door een mutatie in je eigen cel.'], ['Een cel die te snel doodgaat', 'Hij deelt juist te veel.']], 'Ander woord: gezwel.'),
            Q('Wat is een uitzaaiing?', 'Cellen van een kwaadaardige tumor komen via bloed of lymfe ergens anders terecht', [['De tumor wordt groter', 'Groter worden is groeien. Uitzaaien is: cellen reizen naar een ander orgaan.', 'G19'], ['Een goedaardige tumor', 'Uitzaaien hoort bij kwaadaardig.', 'G18'], ['Een gezonde cel die deelt', 'Nee.']], 'Via bloed of lymfe naar een ander orgaan.')],
          [Q('Normaal deelt een huidcel ...', 'alleen als het nodig is, bijvoorbeeld na een wondje', [['altijd door, zo snel als het kan', 'Dat doet een tumorcel. Gezonde cellen hebben een rem.'], ['nooit', 'Dan zou een wondje nooit dichtgaan.'], ['alleen \'s nachts', 'Het gaat om nodig of niet nodig.']], 'Deling met een rem.'),
            Q('Een tumor zit in de weg, maar verstoort de werking van het orgaan niet. Wat voor tumor is dit?', 'Goedaardig', [['Kwaadaardig', 'Kwaadaardig verstoort de bouw en werking van het weefsel.', 'G18'], ['Een uitzaaiing', 'Er reizen geen cellen naar een ander orgaan.', 'G19'], ['Kanker', 'Kanker = een kwaadaardige tumor.', 'G18']], 'Goedaardig verstoort de werking niet.')]],
        anders: [[toon('Probeer het weefsel nog een keer, rustig.', 'weefsel', {})],
          [toon('Andere manier: tik de ketting van oorzaak en gevolg in volgorde.', 'ketting', { pijl: 'daardoor', items: [
            { id: 'a', naam: 'Mutatie in het gen dat de celdeling regelt', org: 'remgen', waarom: 'Het begint met een mutatie, precies in het gen voor de rem.' },
            { id: 'b', naam: 'De cel deelt ongeremd', waarom: 'Zonder rem blijft de cel delen, ook als het niet nodig is.' },
            { id: 'c', naam: 'Er ontstaat een tumor (gezwel)', waarom: 'Al die nieuwe cellen samen vormen een tumor.', mis: 'G18' },
            { id: 'd', naam: 'Verstoort hij het weefsel: kwaadaardig (kanker)', waarom: 'Alleen als hij de bouw en werking verstoort, is hij kwaadaardig.', mis: 'G18' },
            { id: 'e', naam: 'Cellen via bloed of lymfe elders: uitzaaiing', waarom: 'Pas als cellen naar een ander orgaan reizen, heet het uitzaaiing.', mis: 'G19' }] })]],
        dieper: [uitleg('Hoe hangt dit samen met de vorige les? Een mutagene invloed, zoals uv-straling, kan een mutatie geven in een huidcel. Meestal is dat geen probleem. Maar raakt toevallig het gen voor celdeling beschadigd, dan kan er een tumor ontstaan. Daarom: insmeren in de felle zon en niet roken. Goedaardige tumoren zijn vaak makkelijk te verwijderen.', 'mutatie in het rem-gen → ongeremd delen → tumor')] },
      toon('Vetgedrukt = uit je hoofd. Maak deze af.', 'gatentekst', { term: 'Tumor', zin: 'Een cel die zich [ongeremd] gaat delen omdat het allel dat de [celdeling] regelt gemuteerd is. Een ander woord voor tumor is [gezwel].', extra: ['langzaam', 'kanker', 'kleur'], fout: { langzaam: 'Een tumorcel deelt juist zonder rem.', kanker: 'Kanker is alleen een kwaadaardige tumor. Het andere woord voor tumor is gezwel.', kleur: 'Het gaat om het allel voor celdeling.' }, mis: { kanker: 'G18' } }),
      { t: 'baas', naam: 'De Remloze', beeld: BAAS.remloos, hp: 5, denkfout: 'Elke tumor is kanker, en uitzaaien is gewoon groter worden.', tekst: 'De Remloze deelt maar door en zegt dat elk gezwel kanker is. Zet de rem erop met de goede woorden.',
        pool: [
          Q('Is elke tumor kanker?', 'Nee, alleen een kwaadaardige tumor', [['Ja', 'Er zijn ook goedaardige tumoren.', 'G18']], 'Kanker = kwaadaardige tumor.'),
          Q('Wat is kwaadaardig?', 'Een tumor die snel groeit en de bouw en werking van het weefsel verstoort', [['Een tumor die in de weg zit', 'Dat kan ook goedaardig zijn.', 'G18'], ['Elke tumor', 'Nee.', 'G18']], 'Vetgedrukt in je lijst.'),
          Q('Hoe komen tumorcellen bij een uitzaaiing ergens anders?', 'Via het bloed of de lymfe', [['De tumor groeit er langzaam naartoe', 'Uitzaaien gaat via bloed of lymfe.', 'G19'], ['Via de lucht', 'Nee.']], 'Naar een ander orgaan.'),
          Q('Waarom deelt een tumorcel ongeremd?', 'Het allel dat de celdeling regelt is gemuteerd', [['Hij heeft te veel gegeten', 'Het ligt aan de mutatie.', 'G8'], ['Hij is besmet met een virus', 'In je lijst: een mutatie in het gen voor celdeling.']], 'De rem is kapot.'),
          Q('Wanneer deelt een gezonde cel?', 'Alleen als het nodig is', [['Altijd', 'Dan zou je overal tumoren krijgen.'], ['Nooit', 'Dan heel een wondje niet.']], 'Bijvoorbeeld na een wondje.'),
          Q('Een ander woord voor tumor is ...', 'gezwel', [['kanker', 'Kanker is alleen de kwaadaardige.', 'G18'], ['uitzaaiing', 'Dat is iets anders.', 'G19']], 'Gezwel.'),
          Q('Wat is kanker?', 'Een kwaadaardige tumor', [['Elke tumor', 'Alleen de kwaadaardige.', 'G18'], ['Een uitzaaiing', 'Uitzaaiing is cellen die reizen.', 'G19']], 'Vetgedrukt in je lijst.'),
        ] },
    ] },
];

/* ---------- organisme-album (de signatuur: expeditie door de niveaus) ---------- */
function svgStr(markup) { return `<svg viewBox="0 0 100 100" aria-hidden="true">${markup}</svg>`; }
const ORGANISMEN = {
  konijn: { naam: 'Konijn', svg: ORG.konijn(), sub: 'Individu, populatie, prooi van de vos.', waar: 'Van één konijn tot de aarde' },
  gras: { naam: 'Gras', svg: ORG.gras(), sub: 'Producent: maakt zelf voedsel.', waar: 'Van één konijn tot de aarde' },
  alg: { naam: 'Alg', svg: ORG.alg(), sub: 'Producent in de sloot.', waar: 'Wie eet wie?' },
  watervlo: { naam: 'Watervlo', svg: ORG.watervlo(), sub: 'Consument van de 1e orde.', waar: 'Wie eet wie?' },
  baars: { naam: 'Baars', svg: ORG.baars(), sub: 'Consument van de 2e orde.', waar: 'Gif stapelt op' },
  snoek: { naam: 'Snoek', svg: ORG.snoek(), sub: 'Eind van de keten: het meeste gif.', waar: 'Gif stapelt op' },
  regenworm: { naam: 'Regenworm', svg: ORG.regenworm(), sub: 'Afvaleter.', waar: 'De opruimploeg' },
  paddenstoel: { naam: 'Schimmel', svg: ORG.paddenstoel(), sub: 'Reducent.', waar: 'De opruimploeg' },
  boom: { naam: 'Eik', svg: ORG.boom(), sub: 'Vooral gemaakt van lucht (CO₂).', waar: 'Rondjes' },
  bacterie: { naam: 'Bacterie', svg: ORG.bacterie(), sub: 'Reducent, maakt rondjes rond.', waar: 'Rondjes' },
  vos: { naam: 'Vos', svg: ORG.vos(), sub: 'Schommelt mee met de konijnen.', waar: 'Op en neer' },
  wolf: { naam: 'Wolf', svg: ORG.wolf(), sub: 'Samenwerking en rangorde.', waar: 'Samenleven in de groep' },
  roodborst: { naam: 'Roodborst', svg: ORG.roodborst(), sub: 'Verdedigt zijn territorium.', waar: 'Samenleven in de groep' },
  korstmos: { naam: 'Korstmos', svg: ORG.korstmos(), sub: 'Mutualisme: schimmel + alg.', waar: 'Samen of tegen' },
  teek: { naam: 'Teek', svg: ORG.teek(), sub: 'Parasiet.', waar: 'Samen of tegen' },
  cel: { naam: 'Lichaamscel', svg: ORG.cel(), sub: 'Elke kern: alle chromosomen.', waar: 'Naar binnen' },
  chromosoom: { naam: 'Chromosoom', svg: ORG.chromosoom(), sub: 'Lange dunne draad DNA.', waar: 'Naar binnen' },
  huidcel: { naam: 'Dochtercellen', svg: `<g transform="translate(0 20) scale(.55)">${ORG.cel()}</g><g transform="translate(46 20) scale(.55)">${ORG.cel()}</g>`, sub: 'Twee dezelfde cellen.', waar: 'Kopiëren en delen' },
  mens: { naam: 'Keeper', svg: ORG.mens(), sub: 'Genotype + omgeving = fenotype.', waar: 'Recept en cake' },
  zaadcel: { naam: 'Zaadcel', svg: ORG.zaadcel(), sub: 'Geslachtscel, enkelvoudig.', waar: 'Alles dubbel' },
  eicel: { naam: 'Eicel', svg: ORG.eicel(), sub: 'Geslachtscel, enkelvoudig.', waar: 'Alles dubbel' },
  stuifmeel: { naam: 'Stuifmeelkorrel', svg: ORG.stuifmeel(), sub: 'Geslachtscel van een plant.', waar: 'Halveren voor de baby' },
  dna: { naam: 'DNA', svg: ORG.dna(), sub: 'A-T en C-G.', waar: 'De DNA-rits' },
  albino: { naam: 'Albino-konijn', svg: ORG.konijn({ albino: true }), sub: 'Mutant: geen melanine.', waar: 'Eén letter anders' },
  remgen: { naam: 'Rem-gen', svg: ORG.remgen(), sub: 'Regelt de celdeling.', waar: 'De rem op celdeling' },
};

/* ---------- de grote niveauladder (inzichtkaart) ---------- */
const LADDER = [
  ['Biosfeer', 'Alle ecosystemen op aarde samen.', SCENE.biosfeer, '0 0 320 200'], ['Ecosysteem', 'Levensgemeenschap + biotoop.', SCENE.ecosysteem, '0 0 320 200'],
  ['Levensgemeenschap', 'Meerdere populaties, verschillende soorten.', SCENE.levensgemeenschap, '0 0 320 200'], ['Populatie', 'Eén soort in één gebied.', SCENE.populatie, '0 0 320 200'],
  ['Individu = organisme', 'Hier kruisen de twee expedities.', () => ORG.mens(), '0 0 100 100', true], ['Orgaan', 'Bijvoorbeeld je huid.', SCENE.orgaan, '0 0 320 200'],
  ['Cel', 'Lichaamscel of geslachtscel.', () => ORG.cel(), '0 0 100 100'], ['Celkern', 'Bevat alle chromosomen.', SCENE.celkern, '0 0 320 200'],
  ['Chromosoom', 'Lange dunne draad DNA.', () => ORG.chromosoom(), '0 0 100 100'], ['Gen', 'Info voor één eigenschap.', SCENE.gen, '0 0 320 200'], ['Base', 'A, T, C en G.', SCENE.basen, '0 0 320 200'],
];

/* ---------- gids en merk ---------- */
const AARDE = `<circle cx="50" cy="50" r="46" fill="url(#g-aarde)"/><path d="M22 34 C32 24 46 28 48 38 C50 48 38 52 32 60 C26 66 16 60 16 50 C16 42 18 38 22 34Z M60 24 C74 22 88 34 84 48 C80 60 68 56 64 66 C60 76 70 86 62 90 C54 92 50 80 54 70 C58 60 52 52 56 42 C58 34 56 28 60 24Z" fill="#6FBF4A"/><ellipse cx="34" cy="26" rx="14" ry="6" fill="#fff" opacity=".3"/>`;
const KIKI = `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="70" rx="36" ry="25" fill="url(#g-alg)"/><circle cx="31" cy="46" r="15" fill="#7FD68A"/><circle cx="69" cy="46" r="15" fill="#7FD68A"/>` +
  `<circle cx="31" cy="46" r="10" fill="#fff"/><circle cx="69" cy="46" r="10" fill="#fff"/><circle cx="33" cy="48" r="5" fill="#2B1726"/><circle cx="71" cy="48" r="5" fill="#2B1726"/><circle cx="35" cy="46" r="1.8" fill="#fff"/><circle cx="73" cy="46" r="1.8" fill="#fff"/>` +
  `<path d="M34 74 C42 82 58 82 66 74" stroke="#1E7A45" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="24" cy="68" rx="6" ry="3.5" fill="#F7A6A0" opacity=".7"/><ellipse cx="76" cy="68" rx="6" ry="3.5" fill="#F7A6A0" opacity=".7"/>` +
  `<path d="M22 32 C22 14 78 14 78 32Z" fill="#D9B070"/><rect x="12" y="30" width="76" height="7" rx="3.5" fill="#B48A4A"/><rect x="22" y="26" width="56" height="5" fill="#7A3A16"/></svg>`;
const MERK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 C5 9 11 4 20 4 C20 13 15 19 5 19Z" fill="#fff"/><path d="M5.5 18.5 L14 10" stroke="#EA580C" stroke-width="1.6" stroke-linecap="round"/></svg>`;

/* ---------- niveau-strook op de kaart (signatuur: ontgrendelde niveaus) ---------- */
function ladderStrook(S) {
  const t6 = !!S.sterren.niveaus, t5 = !!S.sterren['cel-dna'], b = !!S.sterren['dna-code'];
  const nv = [['biosfeer', t6], ['ecosysteem', t6], ['levensgem.', t6], ['populatie', t6], ['individu', t6 || t5], ['cel', t5], ['celkern', t5], ['chromosoom', t5], ['gen', t5], ['base', b || t5]];
  return h('div', { class: 'ladderstrook', 'aria-label': 'Ontgrendelde niveaus' }, nv.map(([n, aan]) => h('span', { class: aan ? 'aan' : '' }, n)));
}

/* =========================================================================
   START
   ========================================================================= */
bioDefs();
const extraStijl = document.createElement('style');
extraStijl.textContent = `.ladderstrook{display:flex;flex-wrap:wrap;gap:5px;margin:4px 0 6px}.ladderstrook span{font-size:12px;font-weight:800;padding:4px 9px;border-radius:99px;border:1.5px dashed var(--line);color:var(--ink-soft)}.ladderstrook span.aan{border-style:solid;border-color:var(--gold);background:var(--gold-tint);color:var(--plum-deep)}`;
document.head.append(extraStijl);

Speelles.start({
  key: 'storm_bio_t56_speelles_v1',
  titel: 'Biologie Speelles',
  merk: 'Biologie T5 & 6', merkIcoon: MERK, gids: KIKI,
  hallo: { titel: 'Hoi Storm! Twee expedities, één lift.', tekst: 'Omhoog naar de hele aarde (thema 6) en naar binnen tot één letter DNA (thema 5). Elke uitleg stopt bij één vraag.' },
  niveaus: [[0, 'Sporenzoeker'], [80, 'Veldbioloog'], [200, 'Voedselweb-wever'], [350, 'Kringloop-kenner'], [520, 'Celkern-duiker'], [720, 'DNA-lezer'], [950, 'Expeditieleider']],
  valkuilen: VALKUILEN,
  organismen: ORGANISMEN,
  albumNaam: 'Expeditie-album', albumIcoon: svgStr(ORG.korstmos()),
  albumTekst: 'Elk gebied dat je haalt, levert nieuwe kaarten op: organismen uit thema 6 en ontdekkingen uit de cel in thema 5.',
  kaartBoven: ladderStrook,
  expedities: [
    { id: 't6', titel: 'Omhoog: Ecologie', sub: 'Thema 6 · van één konijn tot de hele aarde', bol: svgStr(AARDE), lessen: T6 },
    { id: 't5', titel: 'Naar binnen: Erfelijkheid', sub: 'Thema 5 · van jezelf tot één base', bol: svgStr(ORG.dna()), lessen: T5 },
  ],
  inzicht: [{ id: 'ladder', titel: 'De grote niveauladder', icoon: svgStr(ORG.chromosoom()), dicht: 'Haal "Van één konijn" en "Naar binnen"',
    tekst: 'Van de hele aarde tot één base. Jojo: elk begrip hoort bij één niveau, en je slaat er geen over.',
    open: S => !!(S.sterren.niveaus && S.sterren['cel-dna']),
    bouw: (s) => s.append(h('div', { class: 'inzicht' }, LADDER.map(([n, d, f, vb, mid]) => h('div', { class: 'tree' + (mid ? ' mid' : '') }, h('div', { html: `<svg viewBox="${vb}" aria-hidden="true">${f()}</svg>` }), h('div', {}, h('b', {}, n), h('span', {}, d)))))) }],
  terug: { href: '../', label: 'Oefen-app', sub: 'Alle begrippen oefenen' },
  spreekFilter: s => s.replace(/CO₂/g, 'C O twee').replace(/−/g, 'min'),
});
