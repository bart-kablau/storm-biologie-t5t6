/* content.js: Biologie, Thema 5 "Erfelijkheid" + Thema 6 "Ecologie en duurzaamheid" (havo 2, BVJ MAX).
   Vak-app op de canonieke oefen-engine (tools/oefen-engine). begripVak.
   Bron (leidend): 02-verwerkt/brontekst.md (T6, 41 begrippen) en brontekst-thema5.md (T5, 28 begrippen).
   16 onderwerpen (8 per thema). De id's zijn ook de film-id's: video/<id>.mp4 hoort bij het onderwerp
   met hetzelfde id (uitlegknop) en staat in de Films-tegel (VAK.films). */

window.VAK = {
  id: "biologie_t56",
  store: "storm_biologie_t56_v1",
  titel: "Biologie met Storm: Thema 5 & 6",
  brand: "Biologie met Storm",
  badge: "BIO",
  mascotEmoji: "🐸",
  doelLabel: "begrip",
  spiekTitel: "Biologie Thema 5 & 6: erfelijkheid en ecologie",
  wiskunde: false,
  begripVak: true,
  spraak: { vraagLang: "nl-NL", antwoordLang: "nl-NL" },
  matching: { stripInfinitief: false, accentTolerant: true, lidwoordTolerant: false },
  masteryHits: 2,
  stapelGrootte: 6,
  proefPerOnderwerp: 1,
  tegels: ["leerstof", "begrippen", "proeftoets", "spiekblad"],
  tegelProef: { em: "📝", h: "Proeftoets", p: "Thema 5 en 6 door elkaar, zoals op de toets" },
  proefTitel: "Proeftoets T5 & T6",
  films: [
    {
      "id": "niveaus",
      "titel": "T6 · Zoom door de niveaus",
      "emoji": "🔭",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "voedselketen",
      "titel": "T6 · Wie eet wie?",
      "emoji": "🐟",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "accumulatie",
      "titel": "T6 · Gif stapelt op",
      "emoji": "☠️",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "opruimploeg",
      "titel": "T6 · De opruimploeg",
      "emoji": "🍂",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "kringlopen",
      "titel": "T6 · Rondjes in de natuur",
      "emoji": "🔄",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "evenwicht",
      "titel": "T6 · Op en neer",
      "emoji": "⚖️",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "groepsgedrag",
      "titel": "T6 · Leven in de groep",
      "emoji": "🐺",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "symbiose",
      "titel": "T6 · Samen of tegen",
      "emoji": "🤝",
      "thema": "Thema 6 · Ecologie en duurzaamheid"
    },
    {
      "id": "cel-dna",
      "titel": "T5 · De bibliotheek in je cel",
      "emoji": "📚",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "celdeling",
      "titel": "T5 · Eén wordt twee",
      "emoji": "🧫",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "genotype-fenotype",
      "titel": "T5 · Recept en cake",
      "emoji": "🎂",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "chromosomenparen",
      "titel": "T5 · Alles in paren",
      "emoji": "🧦",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "meiose",
      "titel": "T5 · Helft van papa, helft van mama",
      "emoji": "✂️",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "dna-code",
      "titel": "T5 · De lettercode A-T-C-G",
      "emoji": "🧬",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "mutatie",
      "titel": "T5 · Een foutje in de code",
      "emoji": "⚠️",
      "thema": "Thema 5 · Erfelijkheid"
    },
    {
      "id": "tumor",
      "titel": "T5 · Als delen niet stopt",
      "emoji": "🔬",
      "thema": "Thema 5 · Erfelijkheid"
    }
  ]
};

window.LEERSTOF = [
  {
    "id": "niveaus",
    "emoji": "🔭",
    "titel": "T6 · Zoom door de niveaus",
    "kort": "Ecologie bekijkt organismen en hun milieu op steeds grotere niveaus: individu, populatie, levensgemeenschap, ecosysteem (levensgemeenschap + biotoop) en biosfeer.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Denk aan de sloot naast het voetbalveld. Een kikker zwemt erin, eet muggen en zit in het zonnetje. Alles om die kikker heen is zijn <b>milieu</b>: <b>de leefomgeving van een organisme</b>. Milieu betekent dus niet alleen 'iets wat vervuild raakt'. <b>Ecologie</b> is <b>de wetenschap binnen de biologie die de relaties tussen organismen en hun milieu onderzoekt</b>. Een relatie is hier geen verkering: het betekent alleen dat ze met elkaar te maken hebben, bijvoorbeeld de één eet de ander.",
          "Wat invloed heeft op de kikker splits je in twee. <b>Biotische factoren</b> zijn <b>invloeden van de levende natuur</b>: muggen, een reiger, andere kikkers, ziekteverwekkers, en ook dode resten van planten en dieren. <b>Abiotische factoren</b> zijn <b>invloeden van de levenloze natuur</b>: temperatuur, water, bodem, wind en licht.",
          "Nu zoom je uit. <b>Individu</b>: <b>één organisme</b>. <b>Populatie</b>: <b>een groep organismen van dezelfde soort die in één gebied samenleven</b>. <b>Levensgemeenschap</b>: <b>meerdere populaties van verschillende soorten die samenleven in één bepaald gebied</b>.",
          "De <b>biotoop</b> is <b>alle abiotische factoren samen in één bepaald gebied</b>: alles wat levenloos is. Levensgemeenschap + biotoop samen vormen een <b>ecosysteem</b>. En de <b>biosfeer</b> is <b>alle ecosystemen op de wereld samen: het deel op, in of rond de aarde waar leven mogelijk is</b>."
        ],
        "regel": "Van klein naar groot: individu, populatie, levensgemeenschap, ecosysteem (= levensgemeenschap + biotoop), biosfeer.",
        "voorbeelden": [
          {
            "en": "één kikker → alle kikkers in de sloot → alle organismen in de sloot",
            "nl": "individu → populatie → levensgemeenschap",
            "let": "<b>let op</b>: een populatie is één soort, een levensgemeenschap zijn meerdere soorten."
          },
          {
            "en": "zon, water, bodem, temperatuur",
            "nl": "allemaal levenloos: dat is de biotoop van de sloot",
            "let": "<b>let op</b>: biotoop is in deze les dus niet 'het huisje van één dier', maar al het levenloze in een gebied."
          },
          {
            "en": "levensgemeenschap + biotoop = ecosysteem",
            "nl": "het levende en het levenloze samen",
            "let": "<b>let op</b>: de biosfeer is alle ecosystemen op aarde samen."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "De leefomgeving van een organisme heet zijn ___.",
            "a": "milieu",
            "soepel": true,
            "w": "Milieu is de leefomgeving van een organisme: alles om hem heen.",
            "meer": "Je hoort 'milieu' vaak bij vervuiling, maar in biologie is het gewoon de omgeving, ook als er niks mis is."
          },
          {
            "t": "mc",
            "q": "Wat onderzoek je bij <b>ecologie</b>?",
            "o": [
              "alleen hoe vervuild de natuur is",
              "de relaties tussen organismen en hun milieu",
              "hoe dieren verliefd worden op een partner",
              "hoe één cel van binnen werkt"
            ],
            "a": "de relaties tussen organismen en hun milieu",
            "w": "Ecologie is de wetenschap binnen de biologie die de relaties tussen organismen en hun milieu onderzoekt.",
            "meer": "Eco = huis/omgeving, logie = wetenschap. De omgeving van een organisme bestuderen dus.",
            "fout": {
              "alleen hoe vervuild de natuur is": "Vervuiling kan erbij horen, maar ecologie gaat over álle relaties, ook gewoon wie wie eet.",
              "hoe dieren verliefd worden op een partner": "Een 'relatie' in de ecologie is geen liefdesrelatie: het betekent alleen dat organismen met elkaar te maken hebben.",
              "hoe één cel van binnen werkt": "Dat is celbiologie. Ecologie kijkt juist naar buiten: het organisme en zijn omgeving."
            }
          },
          {
            "t": "gap",
            "q": "Invloeden op een organisme van de levenloze natuur heten ___ factoren.",
            "a": "abiotische|abiotisch",
            "soepel": true,
            "w": "Abiotisch = van de levenloze natuur, zoals weer, bodem en water.",
            "meer": "'a' betekent 'niet'. A-biotisch = niet-levend. Net als a-typisch = niet typisch."
          },
          {
            "t": "mc",
            "q": "Wat zijn <b>biotische factoren</b>?",
            "o": [
              "invloeden van het weer",
              "invloeden van de levende natuur",
              "invloeden van de bodem en het water",
              "alleen de dieren die een organisme opeten"
            ],
            "a": "invloeden van de levende natuur",
            "w": "Biotische factoren zijn invloeden op een organisme van de levende natuur (het levende en dode deel van het milieu).",
            "meer": "Bio = leven. Prooi, roofdier, partner, soortgenoot, ziekteverwekker: allemaal biotisch.",
            "fout": {
              "invloeden van het weer": "Het weer leeft niet. Dat is een abiotische factor.",
              "invloeden van de bodem en het water": "Bodem en water zijn levenloos, dus abiotisch.",
              "alleen de dieren die een organisme opeten": "Roofdieren horen erbij, maar ook prooien, partners, soortgenoten en ziekteverwekkers. Het is veel breder."
            }
          },
          {
            "t": "mc",
            "q": "Welke is een <b>biotische</b> factor voor een eekhoorn?",
            "o": [
              "de temperatuur in de winter",
              "regen",
              "een havik die op hem jaagt",
              "de hardheid van de bodem"
            ],
            "a": "een havik die op hem jaagt",
            "w": "De havik is een levend organisme, dus een biotische factor.",
            "meer": "Vraag jezelf: leeft het, of komt het van iets wat leefde? Dan is het biotisch.",
            "fout": {
              "de temperatuur in de winter": "Temperatuur leeft niet: abiotisch.",
              "regen": "Regen is water uit de lucht, levenloos: abiotisch.",
              "de hardheid van de bodem": "De bodem zelf is hier levenloos: abiotisch."
            }
          },
          {
            "t": "gap",
            "q": "Eén organisme, oftewel één levend wezen, noem je een ___.",
            "a": "individu",
            "soepel": true,
            "w": "Een individu is één organisme.",
            "meer": "Jij bent een individu. Jouw voetbalteam is een groep individuen."
          },
          {
            "t": "gap",
            "q": "Een populatie is een groep organismen van dezelfde ___ die in één gebied samenleven.",
            "a": "soort|soorten",
            "soepel": true,
            "w": "Populatie = dezelfde soort, in één gebied.",
            "meer": "Twee voorwaarden: zelfde soort én zelfde gebied. Mist er één, dan is het geen populatie."
          },
          {
            "t": "mc",
            "q": "Hoe heet het als <b>meerdere populaties van verschillende soorten</b> samenleven in één gebied?",
            "o": [
              "populatie",
              "biotoop",
              "biosfeer",
              "levensgemeenschap"
            ],
            "a": "levensgemeenschap",
            "w": "Een levensgemeenschap bestaat uit meerdere populaties van verschillende soorten in één gebied.",
            "meer": "Denk aan 'gemeenschap': iedereen die samen in een dorp woont, niet alleen jouw familie.",
            "fout": {
              "populatie": "Een populatie is maar één soort. Hier gaat het om verschillende soorten.",
              "biotoop": "De biotoop is alleen het levenloze deel. Populaties leven juist.",
              "biosfeer": "De biosfeer is alle ecosystemen op aarde samen, veel groter dan één gebied."
            }
          },
          {
            "t": "mc",
            "q": "Wat is een <b>biotoop</b>?",
            "o": [
              "alle planten en dieren samen in één gebied",
              "alle abiotische factoren samen in één gebied",
              "het holletje of het nest waar één dier in woont",
              "alle ecosystemen op de hele aarde samen"
            ],
            "a": "alle abiotische factoren samen in één gebied",
            "w": "De biotoop is alle abiotische (levenloze) factoren samen in één bepaald gebied.",
            "meer": "Wind, schaduw, zon, temperatuur, regen, bodem, water: dat is de biotoop.",
            "fout": {
              "alle planten en dieren samen in één gebied": "Dat is de levensgemeenschap. Planten en dieren leven; de biotoop is juist het levenloze.",
              "het holletje of het nest waar één dier in woont": "Zo gebruiken mensen het woord soms in gewone taal, maar in deze les is de biotoop al het levenloze in een gebied.",
              "alle ecosystemen op de hele aarde samen": "Dat is de biosfeer."
            }
          },
          {
            "t": "gap",
            "q": "Levensgemeenschap + biotoop in één gebied vormen samen een ___.",
            "a": "ecosysteem|ecosystemen",
            "soepel": true,
            "w": "In één gebied vormen de levensgemeenschap en de biotoop samen een eenheid: het ecosysteem.",
            "meer": "In een ecosysteem kijk je naar alles: biotisch en abiotisch, levend en levenloos."
          },
          {
            "t": "mc",
            "q": "Wat is de <b>biosfeer</b>?",
            "o": [
              "de lucht rond de aarde",
              "één heel groot ecosysteem, zoals een oerwoud",
              "alle ecosystemen op de wereld samen",
              "alle dieren op aarde, zonder planten"
            ],
            "a": "alle ecosystemen op de wereld samen",
            "w": "De biosfeer is alle ecosystemen op de wereld samen: het deel op, in of rond de aarde waar leven mogelijk is.",
            "meer": "Bio = leven, sfeer = bol. De 'levensbol' rond de aarde.",
            "fout": {
              "de lucht rond de aarde": "Lucht alleen is levenloos. De biosfeer is alles waar leven mogelijk is, met alle ecosystemen.",
              "één heel groot ecosysteem, zoals een oerwoud": "Een oerwoud is één ecosysteem. De biosfeer is ze allemaal samen.",
              "alle dieren op aarde, zonder planten": "Planten horen er net zo goed bij, en ook het levenloze deel."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Neem een weiland. Eén koe is een <b>individu</b>. Alle koeien samen zijn een <b>populatie</b>. Koeien, gras, mollen, regenwormen en bacteriën samen zijn de <b>levensgemeenschap</b>. Zon, regen, bodem en temperatuur zijn de <b>biotoop</b>. Alles samen is het <b>ecosysteem</b> 'weiland'.",
          "Denkfout 1: 'zelfde soort = zelfde populatie'. Nee: wilde zwijnen in Duitsland en wilde zwijnen van dezelfde soort in Spanje zijn twee populaties, want ze leven niet in hetzelfde gebied.",
          "Denkfout 2: 'een dood blad leeft niet, dus het is abiotisch'. Nee: het biotische deel van het milieu is het levende <b>én het dode</b> deel. Een dood blad, een dode boom of een dode vis komt van een organisme en is dus biotisch. Abiotisch is wat nooit geleefd heeft: water, licht, steen, wind."
        ],
        "regel": "Stel steeds twee vragen: hoeveel soorten (één = populatie, meer = levensgemeenschap) en levend/dood of levenloos (biotisch of abiotisch)?",
        "voorbeelden": [
          {
            "en": "alle meeuwen op het strand van Scheveningen",
            "nl": "één soort, één gebied: populatie",
            "let": "<b>let op</b>: meeuwen op Texel zijn een andere populatie."
          },
          {
            "en": "dode bladeren op de bosbodem",
            "nl": "biotisch: ze komen van een levend organisme",
            "let": "<b>let op</b>: dood is niet hetzelfde als levenloos."
          },
          {
            "en": "koeien + gras + regen + bodem",
            "nl": "levend en levenloos samen: ecosysteem",
            "let": "<b>let op</b>: zonder regen en bodem was het alleen een levensgemeenschap."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Alle meerkoeten in de vijver in het park. Welk niveau is dat?",
            "o": [
              "individu",
              "populatie",
              "levensgemeenschap",
              "ecosysteem"
            ],
            "a": "populatie",
            "w": "Eén soort (meerkoet) in één gebied (de vijver): een populatie.",
            "meer": "Check: één soort? ja. Eén gebied? ja. Dan populatie.",
            "fout": {
              "individu": "Een individu is één meerkoet. Hier gaat het om alle meerkoeten.",
              "levensgemeenschap": "Daarvoor heb je meerdere soorten nodig. Hier is het alleen de meerkoet.",
              "ecosysteem": "In een ecosysteem tellen ook andere soorten en het levenloze mee, zoals water en licht."
            }
          },
          {
            "t": "mc",
            "q": "Kroos, watervlooien, kikkers, slakken en stekelbaarsjes in één sloot. Welk niveau is dat?",
            "o": [
              "populatie",
              "biotoop",
              "levensgemeenschap",
              "biosfeer"
            ],
            "a": "levensgemeenschap",
            "w": "Meerdere populaties van verschillende soorten in één gebied: een levensgemeenschap.",
            "meer": "Alleen levende dingen genoemd, en meerdere soorten: levensgemeenschap.",
            "fout": {
              "populatie": "Een populatie is één soort. Hier staan vijf verschillende soorten.",
              "biotoop": "De biotoop is het levenloze deel. Kikkers en slakken leven.",
              "biosfeer": "De biosfeer is alle ecosystemen op aarde samen, niet één sloot."
            }
          },
          {
            "t": "mc",
            "q": "Een berg <b>dode bladeren</b> op de bosbodem. Wat voor factor is dat voor een pissebed?",
            "o": [
              "abiotisch, want de bladeren leven niet meer",
              "biotisch",
              "geen van beide, het is afval"
            ],
            "a": "biotisch",
            "w": "Dode resten van planten en dieren horen bij het biotische deel van het milieu.",
            "meer": "Dood is iets anders dan levenloos. Levenloos = heeft nooit geleefd (water, steen, licht).",
            "fout": {
              "abiotisch, want de bladeren leven niet meer": "Dat is de bekende denkfout. Biotisch is het levende én dode deel. De bladeren kwamen van een boom.",
              "geen van beide, het is afval": "Voor de pissebed is het juist voedsel. En alles in het milieu is óf biotisch óf abiotisch."
            }
          },
          {
            "t": "mc",
            "q": "Welke van deze hoort bij de <b>biotoop</b> van een duinpan?",
            "o": [
              "de konijnen in hun holen",
              "de hoeveelheid wind",
              "het helmgras op de helling",
              "een dode meeuw in het zand"
            ],
            "a": "de hoeveelheid wind",
            "w": "Wind is levenloos, dus een abiotische factor. De biotoop is alle abiotische factoren samen.",
            "meer": "Biotoop = het levenloze decor. Alles wat leeft of leefde, hoort er niet bij.",
            "fout": {
              "de konijnen in hun holen": "Konijnen leven: ze horen bij de levensgemeenschap, niet bij de biotoop.",
              "het helmgras op de helling": "Helmgras is een plant, dus levend. Dat is levensgemeenschap.",
              "een dode meeuw in het zand": "Dood maar wel van een organisme: biotisch. De biotoop is alleen het levenloze."
            }
          },
          {
            "t": "mc",
            "q": "Wilde zwijnen op de Veluwe en wilde zwijnen van dezelfde soort in Spanje. Zijn ze één populatie?",
            "o": [
              "ja, het is dezelfde soort",
              "nee, ze leven niet in hetzelfde gebied",
              "nee, want Spaanse zwijnen zijn een andere soort",
              "ja, want het zijn allemaal zwijnen in Europa"
            ],
            "a": "nee, ze leven niet in hetzelfde gebied",
            "w": "Een populatie is dezelfde soort in één gebied. De Veluwe en Spanje zijn twee gebieden, dus twee populaties.",
            "meer": "Net als twee voetbalclubs: dezelfde sport, maar niet hetzelfde team.",
            "fout": {
              "ja, het is dezelfde soort": "Zelfde soort is maar de helft. Ze moeten ook in hetzelfde gebied samenleven.",
              "nee, want Spaanse zwijnen zijn een andere soort": "In de vraag staat juist dat het dezelfde soort is. Het verschil zit in het gebied.",
              "ja, want het zijn allemaal zwijnen in Europa": "Europa is veel te groot. Deze zwijnen leven niet samen, ze komen elkaar nooit tegen."
            }
          },
          {
            "t": "mc",
            "q": "Storm onderzoekt of kikkers vaker kwaken als het warmer is. Wat is de temperatuur voor de kikker?",
            "o": [
              "een biotische factor",
              "een abiotische factor",
              "een populatie"
            ],
            "a": "een abiotische factor",
            "w": "Temperatuur is een invloed van de levenloze natuur: abiotisch.",
            "meer": "En wat Storm hier doet, de relatie tussen organisme en milieu onderzoeken, is ecologie.",
            "fout": {
              "een biotische factor": "Temperatuur leeft niet en komt niet van een organisme. Dus niet biotisch.",
              "een populatie": "Een populatie is een groep organismen van één soort. Temperatuur is geen organisme."
            }
          },
          {
            "t": "gap",
            "q": "Een bacterie die een kikker ziek maakt, is voor die kikker een ___ factor.",
            "a": "biotische|biotisch",
            "soepel": true,
            "w": "Een ziekteverwekker is een levend organisme, dus een biotische factor.",
            "meer": "Klein of onzichtbaar maakt niet uit: als het leeft, is het biotisch."
          },
          {
            "t": "mc",
            "q": "Welke is <b>GEEN</b> abiotische factor in een bos?",
            "o": [
              "de hoeveelheid schaduw onder de bomen",
              "de temperatuur",
              "de schimmels op een boomstronk",
              "hoe nat de bodem na regen is"
            ],
            "a": "de schimmels op een boomstronk",
            "w": "Schimmels zijn levende organismen, dus biotisch. De rest is levenloos.",
            "meer": "Bij 'GEEN' zoek je de vreemde eend: hier het enige dat leeft.",
            "fout": {
              "de hoeveelheid schaduw onder de bomen": "Schaduw is licht dat ontbreekt: levenloos, dus wél abiotisch.",
              "de temperatuur": "Temperatuur is levenloos: wél abiotisch.",
              "hoe nat de bodem na regen is": "Water en bodem zijn levenloos: wél abiotisch."
            }
          },
          {
            "t": "mc",
            "q": "Je bekijkt alle koeien, het gras, de regenwormen, de bodem, de regen en de zon in één weiland. Naar welk niveau kijk je?",
            "o": [
              "levensgemeenschap",
              "biotoop",
              "ecosysteem",
              "biosfeer"
            ],
            "a": "ecosysteem",
            "w": "Je kijkt naar het levende (levensgemeenschap) én het levenloze (biotoop) samen: dat is een ecosysteem.",
            "meer": "Levend + levenloos in één gebied = ecosysteem.",
            "fout": {
              "levensgemeenschap": "Dan zou je alleen naar het levende kijken. Bodem, regen en zon zijn levenloos.",
              "biotoop": "Dan zou je alleen naar het levenloze kijken. Koeien en gras leven.",
              "biosfeer": "De biosfeer is alle ecosystemen op aarde samen, niet één weiland."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: welk niveau is 'alle stekelbaarsjes in één sloot'?",
            "stappen": [
              {
                "toon": "Stap 1: één of meer organismen?",
                "uitleg": "Meer: 'alle stekelbaarsjes'. Dus geen individu."
              },
              {
                "toon": "Stap 2: één soort of meerdere?",
                "uitleg": "Eén soort: alleen stekelbaarsjes. Dus geen levensgemeenschap."
              },
              {
                "toon": "Stap 3: in één gebied?",
                "uitleg": "Ja, in één sloot."
              },
              {
                "toon": "Conclusie: populatie",
                "uitleg": "Zelfde soort, één gebied."
              }
            ],
            "waarom": {
              "q": "Waarom is dit geen levensgemeenschap?",
              "o": [
                "omdat stekelbaarsjes klein zijn",
                "omdat er maar één soort is",
                "omdat er geen water bij genoemd wordt"
              ],
              "a": "omdat er maar één soort is"
            },
            "fout": {
              "omdat stekelbaarsjes klein zijn": "Grootte maakt niet uit. Een levensgemeenschap van mieren is net zo goed een levensgemeenschap.",
              "omdat er geen water bij genoemd wordt": "Water is levenloos en hoort nooit bij een levensgemeenschap. Het gaat om het aantal soorten."
            },
            "w": "Een levensgemeenschap vraagt meerdere soorten; hier is er maar één, dus het is een populatie.",
            "meer": "Werk altijd met dit stappenplan: aantal, soorten, gebied."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Vergelijk een ecosysteem met een toneelstuk. Het decor, het licht en de temperatuur in de zaal zijn de <b>biotoop</b>: alleen het levenloze. De spelers zijn de <b>levensgemeenschap</b>. Het hele toneelstuk, decor plus spelers, is het <b>ecosysteem</b>. Biotoop en ecosysteem zijn dus niet hetzelfde: de biotoop is een deel van het ecosysteem.",
          "Levend of dood maakt voor biotisch niets uit: een dode boomstam en een dode vis komen van organismen en zijn biotisch. Abiotisch is alleen wat nooit geleefd heeft. Dus: dood ≠ levenloos.",
          "Nog twee paren die mensen verwarren: een <b>populatie</b> is één soort, een <b>levensgemeenschap</b> zijn meerdere soorten. En een <b>ecosysteem</b> is één gebied, de <b>biosfeer</b> zijn alle ecosystemen op aarde samen."
        ],
        "regel": "Biotoop = alleen het levenloze; ecosysteem = biotoop + levensgemeenschap. Dood materiaal van organismen is biotisch.",
        "voorbeelden": [
          {
            "en": "temperatuur, licht en helderheid van een meer",
            "nl": "alleen levenloos: de biotoop",
            "let": "<b>let op</b>: voeg je de vissen en planten toe, dan heb je het ecosysteem."
          },
          {
            "en": "een dode boomstam",
            "nl": "biotisch, want hij heeft geleefd",
            "let": "<b>let op</b>: niet bij de biotoop, want die is alleen levenloos."
          },
          {
            "en": "ecosysteem is een deel van de biosfeer",
            "nl": "elk ecosysteem is een stukje van de biosfeer",
            "let": "<b>let op</b>: een groot ecosysteem (oerwoud) is nog steeds niet de biosfeer."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een <b>biotoop</b> en een <b>ecosysteem</b>?",
            "o": [
              "er is geen verschil, het zijn twee woorden voor hetzelfde",
              "biotoop = het levenloze; ecosysteem = biotoop + levensgemeenschap",
              "een ecosysteem is alleen het levende deel, een biotoop alleen het dode deel",
              "een biotoop is groter dan een ecosysteem"
            ],
            "a": "biotoop = het levenloze; ecosysteem = biotoop + levensgemeenschap",
            "w": "De biotoop is alle abiotische factoren; het ecosysteem is de biotoop samen met de levensgemeenschap.",
            "meer": "Toneelstuk: biotoop = decor, levensgemeenschap = spelers, ecosysteem = het hele stuk.",
            "fout": {
              "er is geen verschil, het zijn twee woorden voor hetzelfde": "Ze lijken op elkaar, maar in het ecosysteem zit ook al het levende. De biotoop heeft dat niet.",
              "een ecosysteem is alleen het levende deel, een biotoop alleen het dode deel": "Het levende deel heet levensgemeenschap. En dood materiaal is biotisch, dus het hoort niet bij de biotoop.",
              "een biotoop is groter dan een ecosysteem": "Omgekeerd: de biotoop is een onderdeel van het ecosysteem."
            }
          },
          {
            "t": "mc",
            "q": "Een onderzoeker meet in een meer alleen de temperatuur, de diepte, het licht en hoe helder het water is. Waar kijkt hij naar?",
            "o": [
              "het ecosysteem",
              "de levensgemeenschap",
              "de biotoop",
              "de biosfeer"
            ],
            "a": "de biotoop",
            "w": "Hij meet alleen levenloze factoren: samen is dat de biotoop.",
            "meer": "Zodra hij ook de vissen en planten telt, kijkt hij naar het ecosysteem.",
            "fout": {
              "het ecosysteem": "Voor het ecosysteem moet je ook de levensgemeenschap bekijken. Hij meet geen enkel organisme.",
              "de levensgemeenschap": "De levensgemeenschap zijn de organismen. Temperatuur en licht leven niet.",
              "de biosfeer": "De biosfeer is alle ecosystemen op aarde. Hij meet maar één meer, en alleen het levenloze."
            }
          },
          {
            "t": "mc",
            "q": "Een dode boomstam ligt in het bos. Waar hoort hij bij?",
            "o": [
              "bij de biotoop, want hij leeft niet meer",
              "bij het biotische deel van het milieu",
              "bij het abiotische deel, net als de bodem"
            ],
            "a": "bij het biotische deel van het milieu",
            "w": "Het biotische deel is het levende én dode deel van het milieu. De stam heeft geleefd.",
            "meer": "Dood ≠ levenloos. Een steen is levenloos, een dode boom is dood.",
            "fout": {
              "bij de biotoop, want hij leeft niet meer": "De biotoop is alleen het levenloze. Een dode boom is dood, maar niet levenloos: hij kwam van een organisme.",
              "bij het abiotische deel, net als de bodem": "De bodem heeft nooit geleefd, de boom wel. Daarom is de stam biotisch."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak klopt?",
            "o": [
              "Een biotoop bevat altijd een levensgemeenschap.",
              "Een populatie bevat meerdere soorten.",
              "Een ecosysteem bevat altijd een biotoop.",
              "Een individu bestaat uit meerdere populaties."
            ],
            "a": "Een ecosysteem bevat altijd een biotoop.",
            "w": "Een ecosysteem is levensgemeenschap + biotoop, dus de biotoop zit er altijd in.",
            "meer": "Andersom niet: de biotoop is alleen het levenloze, daar zit geen levensgemeenschap in.",
            "fout": {
              "Een biotoop bevat altijd een levensgemeenschap.": "Andersom. De biotoop is alleen het levenloze; de levensgemeenschap hoort er niet bij.",
              "Een populatie bevat meerdere soorten.": "Een populatie is juist één soort. Meerdere soorten = levensgemeenschap.",
              "Een individu bestaat uit meerdere populaties.": "Omgekeerd: een populatie bestaat uit meerdere individuen."
            }
          },
          {
            "t": "mc",
            "q": "Storm zegt: 'Een levensgemeenschap is gewoon een grote populatie.' Wat is er fout?",
            "o": [
              "een levensgemeenschap bevat ook de bodem en het weer",
              "een populatie is één soort, een levensgemeenschap meerdere",
              "een populatie is juist groter dan een levensgemeenschap",
              "er is niks fout, het is alleen een groter aantal dieren"
            ],
            "a": "een populatie is één soort, een levensgemeenschap meerdere",
            "w": "Het verschil zit niet in de grootte maar in het aantal soorten.",
            "meer": "Duizend mieren van één soort zijn nog steeds een populatie. Drie mieren, een mus en een paardenbloem zijn al meerdere soorten.",
            "fout": {
              "een levensgemeenschap bevat ook de bodem en het weer": "Bodem en weer zijn levenloos: dat is de biotoop. Een levensgemeenschap is alleen het levende.",
              "een populatie is juist groter dan een levensgemeenschap": "Een levensgemeenschap bestaat uit meerdere populaties, dus de populatie is een deel ervan.",
              "er is niks fout, het is alleen een groter aantal dieren": "Toch wel: 'groot' is het verschil niet. Het gaat om één soort tegen meerdere soorten."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een <b>ecosysteem</b> en de <b>biosfeer</b>?",
            "o": [
              "de biosfeer is alleen het levenloze deel van de aarde",
              "een ecosysteem is groter dan de biosfeer",
              "de biosfeer is alleen de lucht waar vogels vliegen",
              "de biosfeer is alle ecosystemen op aarde samen"
            ],
            "a": "de biosfeer is alle ecosystemen op aarde samen",
            "w": "Eén ecosysteem is één gebied; de biosfeer zijn alle ecosystemen op de wereld samen.",
            "meer": "Ecosysteem = één kamer, biosfeer = het hele huis.",
            "fout": {
              "de biosfeer is alleen het levenloze deel van de aarde": "Nee: de biosfeer is waar leven mogelijk is, met alle ecosystemen, dus levend én levenloos.",
              "een ecosysteem is groter dan de biosfeer": "Andersom: elk ecosysteem is een stukje van de biosfeer.",
              "de biosfeer is alleen de lucht waar vogels vliegen": "Het is het deel op, in of rond de aarde waar leven mogelijk is, dus ook land en water."
            }
          },
          {
            "t": "mc",
            "q": "In een aquarium zitten guppen, waterplanten, slakken, water, grind en een lamp. Wat hoort bij de <b>biotoop</b>?",
            "o": [
              "de guppen en de slakken die erin zwemmen",
              "het water, het grind en het licht van de lamp",
              "de waterplanten die op het grind groeien",
              "alles, want het is samen één bak"
            ],
            "a": "het water, het grind en het licht van de lamp",
            "w": "De biotoop is alles wat levenloos is: water, grind, licht.",
            "meer": "Het hele aquarium met alles erin is een (klein) ecosysteem.",
            "fout": {
              "de guppen en de slakken die erin zwemmen": "Die leven: ze horen bij de levensgemeenschap.",
              "de waterplanten die op het grind groeien": "Planten leven ook. Levensgemeenschap, geen biotoop.",
              "alles, want het is samen één bak": "Alles samen is het ecosysteem. De biotoop is alleen het levenloze deel."
            }
          },
          {
            "t": "mc",
            "q": "Een bioloog vergelijkt het ecosysteem 'heide' met het ecosysteem 'bos'. Wat moet hij in elk geval bekijken?",
            "o": [
              "alleen de planten en dieren in het gebied",
              "alleen de bodem, het licht en de regen",
              "de levensgemeenschap én de biotoop",
              "alleen de grootste dieren"
            ],
            "a": "de levensgemeenschap én de biotoop",
            "w": "Een ecosysteem is levensgemeenschap + biotoop. Wie ecosystemen vergelijkt, kijkt naar allebei.",
            "meer": "In een ecosysteem kijk je naar alle factoren: biotisch en abiotisch.",
            "fout": {
              "alleen de planten en dieren in het gebied": "Dan vergelijk je alleen de levensgemeenschappen. Het levenloze deel ontbreekt.",
              "alleen de bodem, het licht en de regen": "Dan vergelijk je alleen de biotopen. De organismen ontbreken.",
              "alleen de grootste dieren": "Ook kleine organismen, planten en het levenloze tellen mee."
            }
          },
          {
            "t": "gap",
            "q": "Dode resten van planten en dieren horen bij de ___ factoren.",
            "a": "biotische|biotisch",
            "soepel": true,
            "w": "Biotisch is het levende én dode deel van het milieu.",
            "meer": "Ezelsbrug: heeft het ooit geleefd? Dan biotisch."
          },
          {
            "t": "open",
            "q": "Leg uit waarom je een bos een <b>ecosysteem</b> noemt en niet alleen een levensgemeenschap.",
            "punten": 2,
            "modelantwoord": "Bij een bos kijk je niet alleen naar alle organismen (de levensgemeenschap), maar ook naar het levenloze deel zoals licht, regen en bodem (de biotoop). Levensgemeenschap en biotoop samen vormen het ecosysteem.",
            "sleutelwoorden": [
              {
                "moet": [
                  "levensgemeenschap"
                ],
                "syn": [
                  "organism",
                  "planten en dieren",
                  "levend"
                ]
              },
              {
                "moet": [
                  "biotoop"
                ],
                "syn": [
                  "abiotisch",
                  "levenlo",
                  "bodem",
                  "licht",
                  "regen"
                ]
              }
            ],
            "rubric": [
              "Noemt dat het levende deel (de levensgemeenschap) erbij hoort",
              "Noemt dat ook het levenloze deel (de biotoop / abiotische factoren) erbij hoort en dat die samen het ecosysteem vormen"
            ],
            "w": "Ecosysteem = levensgemeenschap + biotoop. Alleen de organismen is te weinig.",
            "meer": "Een bos zonder licht, regen en bodem bestaat niet: het levenloze hoort er gewoon bij."
          }
        ]
      }
    ]
  },
  {
    "id": "voedselketen",
    "emoji": "🐟",
    "titel": "T6 · Wie eet wie?",
    "kort": "Een voedselketen begint altijd met een plant (producent), daarna komen consumenten van de 1e, 2e en 3e orde; de pijl wijst naar wie eet, en alle ketens samen vormen een voedselweb.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "In de sloot eet een watervlo algen, een baars eet watervlooien en een snoek eet baarzen. Je schrijft: alg → watervlo → baars → snoek. Dat is een <b>voedselketen</b>: <b>een reeks soorten waarbij elke soort een voedselbron is voor de volgende soort</b>. <b>Elke voedselbron in een voedselketen noem je een schakel</b>: deze keten heeft 4 schakels.",
          "De pijl wijst <b>naar wie eet</b>: het voedsel gaat van de alg naar de watervlo. Denkfout: 'de pijl betekent eet'. Dan zou de alg de watervlo opeten, en dat kan niet. Lees de pijl als 'gaat naar' of 'wordt gegeten door'.",
          "De eerste schakel is altijd een plant, een <b>producent</b>: <b>planten zijn producenten omdat zij door middel van fotosynthese voedsel (= energierijke stoffen) kunnen maken voor alle andere organismen</b>. <b>Dieren eten (= consumeren) de energierijke stoffen van planten; daarom heten dieren consumenten</b>.",
          "<b>Consumenten van de eerste orde</b> zijn <b>de eerste consumenten in een voedselketen: de consumenten die de planten eten</b>. <b>Consumenten van de tweede orde</b> zijn <b>dieren die de consumenten van de eerste orde eten</b>, enzovoort. Veel ketens die door elkaar lopen vormen een <b>voedselweb</b>: <b>het geheel van voedselrelaties in een ecosysteem</b>."
        ],
        "regel": "Voedselketen: plant (producent) → consument 1e orde → consument 2e orde → ...; de pijl wijst naar wie eet.",
        "voorbeelden": [
          {
            "en": "alg → watervlo → baars → snoek",
            "nl": "4 schakels; de alg is de producent",
            "let": "<b>let op</b>: de pijl wijst naar wie eet, niet naar wie gegeten wordt."
          },
          {
            "en": "gras → konijn → vos",
            "nl": "konijn = 1e orde, vos = 2e orde",
            "let": "<b>let op</b>: de plant telt mee als schakel, maar niet als orde."
          },
          {
            "en": "voedselweb",
            "nl": "alle voedselketens in een ecosysteem samen",
            "let": "<b>let op</b>: ook een voedselweb begint bij planten."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Een voedselketen is een reeks soorten waarbij elke soort een ___ is voor de volgende soort.",
            "a": "voedselbron|voedselbronnen|voedsel",
            "soepel": true,
            "w": "Elke soort is voedselbron (voedsel) voor de volgende soort.",
            "meer": "Als een ketting: elke schakel hangt aan de vorige."
          },
          {
            "t": "mc",
            "q": "Hoe noem je elke voedselbron in een voedselketen?",
            "o": [
              "een producent",
              "een schakel",
              "een orde",
              "een voedselweb"
            ],
            "a": "een schakel",
            "w": "Elke voedselbron in een voedselketen noem je een schakel.",
            "meer": "Ketting → schakels. Voedselketen → schakels.",
            "fout": {
              "een producent": "Alleen de eerste schakel (de plant) is een producent. De andere schakels zijn consumenten.",
              "een orde": "Ordes gebruik je alleen voor consumenten. De plant heeft geen orde, maar is wel een schakel.",
              "een voedselweb": "Een voedselweb zijn alle ketens samen, niet één stukje van een keten."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel schakels heeft de keten gras → konijn → vos?",
            "o": [
              "2",
              "3",
              "4"
            ],
            "a": "3",
            "w": "Gras, konijn en vos: drie soorten, dus drie schakels.",
            "meer": "Tel de soorten, niet de pijlen. De plant telt ook mee.",
            "fout": {
              "2": "Dan tel je alleen de dieren of de pijlen. Het gras is ook een schakel.",
              "4": "Er staan maar drie soorten in. Pijlen zijn geen schakels."
            }
          },
          {
            "t": "mc",
            "q": "Waar wijst de pijl in een voedselketen naar?",
            "o": [
              "naar wie gegeten wordt",
              "naar het grootste dier",
              "naar wie eet",
              "naar de plant"
            ],
            "a": "naar wie eet",
            "w": "De pijl laat zien waar het voedsel naartoe gaat: naar wie eet.",
            "meer": "Check met gras → konijn: het voedsel (gras) gaat naar het konijn. Klopt.",
            "fout": {
              "naar wie gegeten wordt": "Dan zou bij gras → konijn het gras het konijn opeten. Draai het om: het voedsel gaat naar wie eet.",
              "naar het grootste dier": "Grootte doet er niet toe. De pijl volgt het voedsel.",
              "naar de plant": "De plant staat aan het begin. Pijlen wijzen juist van de plant af, naar de dieren die eten."
            }
          },
          {
            "t": "gap",
            "q": "Planten maken met ___ voedsel (energierijke stoffen) voor alle andere organismen.",
            "a": "fotosynthese",
            "soepel": true,
            "w": "Door fotosynthese maken planten zelf voedsel. Daarom heten ze producenten.",
            "meer": "Producent = maker. Een plant 'produceert' voedsel, net zoals een bakker brood."
          },
          {
            "t": "mc",
            "q": "Waarom heten planten <b>producenten</b>?",
            "o": [
              "ze worden als eerste opgegeten door alle andere organismen",
              "ze maken met fotosynthese voedsel voor alle andere organismen",
              "ze zijn het kleinst en staan daarom vooraan in de keten",
              "ze produceren afval voor de reducenten en afvaleters in de bodem"
            ],
            "a": "ze maken met fotosynthese voedsel voor alle andere organismen",
            "w": "Produceren = maken. Planten maken energierijke stoffen door fotosynthese.",
            "meer": "Dieren kunnen dat niet: zij moeten eten. Daarom begint elke keten met een plant.",
            "fout": {
              "ze worden als eerste opgegeten door alle andere organismen": "Ze staan wel vooraan, maar de naam gaat over maken, niet over opgegeten worden.",
              "ze zijn het kleinst en staan daarom vooraan in de keten": "Een eik is niet klein. Het gaat om voedsel maken, niet om grootte.",
              "ze produceren afval voor de reducenten en afvaleters in de bodem": "Het gaat om voedsel (energierijke stoffen) maken, niet om afval."
            }
          },
          {
            "t": "gap",
            "q": "Dieren eten (consumeren) de energierijke stoffen van planten; daarom heten dieren ___.",
            "a": "consumenten|consument",
            "soepel": true,
            "w": "Consumeren = opeten. Dieren eten, dus ze zijn consumenten.",
            "meer": "Producent maakt, consument eet. Net als in de supermarkt: de fabriek maakt, jij koopt en eet."
          },
          {
            "t": "mc",
            "q": "Wat is een <b>consument van de eerste orde</b>?",
            "o": [
              "een dier dat andere dieren eet",
              "de eerste schakel van de keten",
              "een consument die de planten eet",
              "het dier bovenaan de keten"
            ],
            "a": "een consument die de planten eet",
            "w": "Consumenten van de eerste orde zijn de eerste consumenten in een voedselketen: de consumenten die de planten eten.",
            "meer": "Het is de 2e schakel, want de plant is de 1e.",
            "fout": {
              "een dier dat andere dieren eet": "Dat is een consument van de 2e (of hogere) orde.",
              "de eerste schakel van de keten": "De eerste schakel is de plant, een producent. De 1e orde is de 2e schakel.",
              "het dier bovenaan de keten": "Bovenaan staat de hoogste orde. De 1e orde staat juist vlak na de plant."
            }
          },
          {
            "t": "gap",
            "q": "Dieren die de consumenten van de eerste orde eten, zijn consumenten van de ___ orde.",
            "a": "tweede|2e|2de|2",
            "soepel": true,
            "w": "Consumenten van de tweede orde eten consumenten van de eerste orde.",
            "meer": "En wie de 2e orde eet, is 3e orde, enzovoort."
          },
          {
            "t": "mc",
            "q": "Wat is een <b>voedselweb</b>?",
            "o": [
              "één heel lange voedselketen",
              "het geheel van voedselrelaties in een ecosysteem",
              "alle dieren in een gebied, zonder de planten",
              "het web van een spin vol prooien"
            ],
            "a": "het geheel van voedselrelaties in een ecosysteem",
            "w": "Een voedselweb (voedselnet) is het geheel van voedselrelaties in een ecosysteem: veel ketens door elkaar.",
            "meer": "Een soort wordt door meerdere soorten gegeten en eet zelf ook meerdere soorten. Zo ontstaat een web.",
            "fout": {
              "één heel lange voedselketen": "Een keten is één rijtje. Een web zijn veel rijtjes die elkaar kruisen.",
              "alle dieren in een gebied, zonder de planten": "Planten horen er juist bij: elke keten in het web begint met een plant.",
              "het web van een spin vol prooien": "Leuk bedacht, maar het 'web' slaat op de vele lijnen tussen wie wie eet."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Tel in twee rijtjes tegelijk. <b>Schakels</b> tel je vanaf de plant (plant = schakel 1). <b>Ordes</b> tel je alleen bij de consumenten. In alg → watervlo → baars → snoek: watervlo = schakel 2 = 1e orde, baars = schakel 3 = 2e orde, snoek = schakel 4 = <b>3e orde</b>. Ezelsbrug: orde = schakelnummer min 1.",
          "Denkfout: 'de 1e orde zijn altijd planteneters'. Bijna: het kunnen planteneters of alleseters zijn. Een mens die een appel eet is in appel → mens een consument van de 1e orde. Een vleeseter kan nooit 1e orde zijn, want die eet geen planten.",
          "Denkfout: 'het grootste dier staat bovenaan'. Niet de grootte telt, maar wie wie eet. Een olifant eet alleen planten: 1e orde. Een klein koolmeesje dat rupsen eet is 2e orde, dus hoger in zijn keten."
        ],
        "regel": "Orde = schakelnummer min 1. De 1e orde eet planten (planteneter of alleseter), nooit een vleeseter.",
        "voorbeelden": [
          {
            "en": "alg → watervlo → baars → snoek",
            "nl": "snoek = 4e schakel = consument van de 3e orde",
            "let": "<b>let op</b>: niet 4e orde, de alg is geen consument."
          },
          {
            "en": "appel → mens",
            "nl": "de mens is hier consument van de 1e orde",
            "let": "<b>let op</b>: een alleseter kan dus 1e orde zijn."
          },
          {
            "en": "gras → olifant",
            "nl": "olifant = 1e orde, hoe groot hij ook is",
            "let": "<b>let op</b>: grootte zegt niks over de orde."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In alg → watervlo → baars → snoek: welke orde is de <b>snoek</b>?",
            "o": [
              "consument van de 4e orde",
              "consument van de 3e orde",
              "consument van de 2e orde",
              "producent"
            ],
            "a": "consument van de 3e orde",
            "w": "De snoek is de 4e schakel, maar de alg is geen consument. Dus 4 min 1 = 3e orde.",
            "meer": "Watervlo 1e, baars 2e, snoek 3e orde.",
            "fout": {
              "consument van de 4e orde": "4 is zijn schakelnummer. Bij ordes tel je de alg (producent) niet mee.",
              "consument van de 2e orde": "Dat is de baars. De snoek eet de baars, dus hij zit één orde hoger.",
              "producent": "Producenten zijn planten die met fotosynthese voedsel maken. Een snoek eet andere vissen."
            }
          },
          {
            "t": "mc",
            "q": "In alg → watervlo → baars → snoek: welke soort is <b>consument van de 1e orde</b>?",
            "o": [
              "de alg",
              "de baars",
              "de watervlo"
            ],
            "a": "de watervlo",
            "w": "De watervlo eet de alg (een plant): hij is de eerste consument.",
            "meer": "1e orde = 2e schakel.",
            "fout": {
              "de alg": "De alg is een plant en maakt zelf voedsel: een producent, geen consument.",
              "de baars": "De baars eet watervlooien, geen planten. Hij is 2e orde."
            }
          },
          {
            "t": "mc",
            "q": "Welke voedselketen is goed opgeschreven?",
            "o": [
              "sperwer → lijster → slak → sla",
              "sla → slak → lijster → sperwer",
              "slak → sla → lijster → sperwer"
            ],
            "a": "sla → slak → lijster → sperwer",
            "w": "Hij begint met een plant en de pijlen wijzen naar wie eet.",
            "meer": "Check elke pijl: 'het voedsel gaat naar...'. Sla gaat naar de slak, slak naar de lijster, lijster naar de sperwer.",
            "fout": {
              "sperwer → lijster → slak → sla": "De pijlen staan omgekeerd: zo eet de sla de slak op. De pijl wijst naar wie eet.",
              "slak → sla → lijster → sperwer": "Een keten begint altijd met een plant, en de sla eet geen slakken."
            }
          },
          {
            "t": "mc",
            "q": "Storm eet een appel. Welke orde is Storm in de keten appel → Storm?",
            "o": [
              "consument van de 2e orde",
              "geen consument, want mensen zijn alleseters",
              "consument van de 1e orde",
              "producent"
            ],
            "a": "consument van de 1e orde",
            "w": "Storm eet hier een plant(deel): ze is de eerste consument, dus 1e orde.",
            "meer": "Een alleseter kan 1e orde zijn. Het hangt af van wat hij in díé keten eet.",
            "fout": {
              "consument van de 2e orde": "Dan zou Storm een dier eten dat planten eet. Een appel is een plantdeel.",
              "geen consument, want mensen zijn alleseters": "Alleseters zijn juist ook consumenten. Elk dier dat eet is een consument.",
              "producent": "Mensen kunnen geen fotosynthese doen. Alleen planten zijn producenten."
            }
          },
          {
            "t": "mc",
            "q": "Kan een vos die alleen vlees eet een consument van de <b>1e orde</b> zijn?",
            "o": [
              "ja, als hij het eerste dier is dat in de keten staat",
              "nee, de 1e orde eet planten en hij eet alleen vlees",
              "ja, want hij is groter en sterker dan een konijn"
            ],
            "a": "nee, de 1e orde eet planten en hij eet alleen vlees",
            "w": "Consumenten van de 1e orde eten planten. Een vleeseter eet dieren, dus is altijd 2e orde of hoger.",
            "meer": "1e orde = planteneters of alleseters, nooit vleeseters.",
            "fout": {
              "ja, als hij het eerste dier is dat in de keten staat": "Het eerste dier in een keten eet de plant. Een vleeseter eet geen planten, dus kan daar nooit staan.",
              "ja, want hij is groter en sterker dan een konijn": "Grootte doet niet mee. Wat hij eet, bepaalt de orde."
            }
          },
          {
            "t": "mc",
            "q": "Een olifant eet alleen planten. Een koolmees eet rupsen, en die rupsen eten bladeren. Wie staat <b>hoger</b> in zijn voedselketen?",
            "o": [
              "de olifant, want die is veel groter en sterker",
              "ze staan even hoog, want ze zijn allebei consument",
              "de koolmees, die is consument van de 2e orde"
            ],
            "a": "de koolmees, die is consument van de 2e orde",
            "w": "Blad → rups → koolmees: de mees is 2e orde. Gras → olifant: de olifant is 1e orde.",
            "meer": "Bekende denkfout: het grootste dier staat bovenaan. Niet waar, het gaat om wie wie eet.",
            "fout": {
              "de olifant, want die is veel groter en sterker": "Grootte zegt niks. De olifant eet planten, dus hij is maar 1e orde.",
              "ze staan even hoog, want ze zijn allebei consument": "De olifant eet planten (1e orde), de mees eet dieren die planten eten (2e orde)."
            }
          },
          {
            "t": "gap",
            "q": "In gras → konijn → vos is de vos een consument van de ___ orde.",
            "a": "tweede|2e|2de|2",
            "soepel": true,
            "w": "De vos is schakel 3, dus 3 min 1 = 2e orde.",
            "meer": "Het konijn eet het gras (1e orde), de vos eet het konijn (2e orde)."
          },
          {
            "t": "mc",
            "q": "Een merel eet bessen, rupsen én slakken. Waarom teken je dan liever een voedselweb dan één voedselketen?",
            "o": [
              "omdat een voedselweb alleen voor vogels bedoeld is",
              "omdat de merel in meerdere ketens tegelijk zit",
              "omdat in een voedselketen geen planten mogen staan"
            ],
            "a": "omdat de merel in meerdere ketens tegelijk zit",
            "w": "Een voedselweb laat alle voedselrelaties zien, ook als een soort meerdere dingen eet.",
            "meer": "Bessen → merel, rups → merel, slak → merel: drie ketens die samenkomen bij de merel.",
            "fout": {
              "omdat een voedselweb alleen voor vogels bedoeld is": "Een voedselweb is voor het hele ecosysteem, met alle soorten.",
              "omdat in een voedselketen geen planten mogen staan": "Een voedselketen begint juist áltijd met een plant."
            }
          },
          {
            "t": "mc",
            "q": "Wat hoort <b>NIET</b> in een voedselweb?",
            "o": [
              "een rups",
              "zonlicht",
              "een eik",
              "een buizerd"
            ],
            "a": "zonlicht",
            "w": "In een voedselweb staan, net als in een voedselketen, alleen levende organismen. Zonlicht leeft niet.",
            "meer": "Zonlicht is een abiotische factor: belangrijk voor de plant, maar geen schakel.",
            "fout": {
              "een rups": "Een rups is een levend dier dat planten eet: die hoort er wel in.",
              "een eik": "Een eik is een plant, een producent: die hoort er zeker in.",
              "een buizerd": "Een buizerd eet andere dieren: een consument, die hoort er wel in."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: welke orde is de reiger in kroos → slak → stekelbaars → reiger?",
            "stappen": [
              {
                "toon": "Stap 1: kroos = plant = producent",
                "uitleg": "De eerste schakel is altijd een plant. Die heeft geen orde."
              },
              {
                "toon": "Stap 2: slak = 1e orde",
                "uitleg": "De slak eet de plant."
              },
              {
                "toon": "Stap 3: stekelbaars = 2e orde",
                "uitleg": "Hij eet de 1e orde."
              },
              {
                "toon": "Stap 4: reiger = 3e orde",
                "uitleg": "Hij eet de 2e orde. Schakel 4, dus 4 min 1 = 3."
              }
            ],
            "waarom": {
              "q": "Waarom is de reiger 3e orde en niet 4e?",
              "o": [
                "omdat een reiger een vogel is",
                "omdat de plant geen consument is en dus niet meetelt bij de ordes",
                "omdat de reiger de grootste is"
              ],
              "a": "omdat de plant geen consument is en dus niet meetelt bij de ordes"
            },
            "fout": {
              "omdat een reiger een vogel is": "Of het een vogel, vis of zoogdier is, maakt niet uit. Het gaat om de plek in de keten.",
              "omdat de reiger de grootste is": "Grootte bepaalt de orde niet; wie wie eet wel."
            },
            "w": "Ordes tellen alleen consumenten; de plant (producent) telt niet mee.",
            "meer": "Orde = schakelnummer min 1."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Drie paren die je goed uit elkaar moet houden. <b>Schakel</b> (elke plek in de keten, plant telt mee) tegenover <b>orde</b> (alleen consumenten tellen). <b>Voedselketen</b> (één rijtje) tegenover <b>voedselweb</b> (alle rijtjes in een ecosysteem samen). <b>Producent</b> (maakt voedsel met fotosynthese) tegenover <b>consument</b> (eet het).",
          "De pijl betekent 'het voedsel gaat naar'. Draai je hem om, dan klopt er niets meer: dan eet de alg de snoek. Teken bij twijfel even met je vinger mee: het voedsel stroomt van de plant naar de eters.",
          "In een voedselweb kan één soort verschillende ordes hebben. Een mens die sla eet is 1e orde; dezelfde mens die kip eet (de kip at graan) is 2e orde. En omdat alles aan elkaar hangt, merkt de hele keten het als één schakel verdwijnt."
        ],
        "regel": "Elke keten begint bij de producent; de orde hangt af van de plek in díé keten, niet van het dier zelf.",
        "voorbeelden": [
          {
            "en": "sla → mens · graan → kip → mens",
            "nl": "de mens is 1e én 2e orde",
            "let": "<b>let op</b>: in een voedselweb kan één soort meerdere ordes hebben."
          },
          {
            "en": "5 schakels",
            "nl": "de laatste schakel is 4e orde",
            "let": "<b>let op</b>: altijd min 1, want de plant heeft geen orde."
          },
          {
            "en": "watervlooien weg",
            "nl": "baarzen hebben minder voedsel",
            "let": "<b>let op</b>: alle schakels hangen aan elkaar."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm tekent: snoek → baars → watervlo → alg. Wat is er mis?",
            "o": [
              "niets, zo mag het ook",
              "de alg mag niet in de keten, want die is geen dier",
              "de pijlen moeten naar wie eet wijzen",
              "de snoek moet in het midden staan, niet vooraan"
            ],
            "a": "de pijlen moeten naar wie eet wijzen",
            "w": "Zo staat er dat de snoek opgegeten wordt door de baars. De pijl wijst naar wie eet: alg → watervlo → baars → snoek.",
            "meer": "Dit is de bekendste fout bij voedselketens. Lees de pijl als 'gaat naar'.",
            "fout": {
              "niets, zo mag het ook": "Nee, de richting van de pijl betekent iets: het voedsel gaat naar wie eet. Omdraaien maakt het fout.",
              "de alg mag niet in de keten, want die is geen dier": "De alg is juist nodig: een keten begint altijd met een plant (producent).",
              "de snoek moet in het midden staan, niet vooraan": "De snoek eet de baars, dus hij staat aan het eind. Het probleem zit in de pijlen."
            }
          },
          {
            "t": "mc",
            "q": "Waarom begint een voedselketen <b>altijd</b> met een plant?",
            "o": [
              "planten kunnen niet weglopen en worden dus altijd eerst gegeten",
              "alleen planten maken zelf voedsel met fotosynthese",
              "planten zijn het kleinst",
              "omdat je een keten van links naar rechts leest"
            ],
            "a": "alleen planten maken zelf voedsel met fotosynthese",
            "w": "Planten zijn producenten: zij maken energierijke stoffen. Alle consumenten zijn daarvan afhankelijk.",
            "meer": "Zonder plant aan het begin heeft het eerste dier niets te eten.",
            "fout": {
              "planten kunnen niet weglopen en worden dus altijd eerst gegeten": "Het gaat er niet om wie makkelijk te vangen is, maar wie het voedsel maakt.",
              "planten zijn het kleinst": "Een boom is niet klein. Grootte doet er niet toe.",
              "omdat je een keten van links naar rechts leest": "De leesrichting is een afspraak; de reden is dat alleen planten zelf voedsel maken."
            }
          },
          {
            "t": "mc",
            "q": "Een mens eet sla en ook kip (de kip at graan). Welke orde heeft de mens?",
            "o": [
              "alleen 1e orde",
              "1e orde (bij de sla) én 2e orde (bij de kip)",
              "alleen 2e orde",
              "3e orde, want de mens staat altijd bovenaan"
            ],
            "a": "1e orde (bij de sla) én 2e orde (bij de kip)",
            "w": "Sla → mens: 1e orde. Graan → kip → mens: 2e orde. In een voedselweb kan één soort meerdere ordes hebben.",
            "meer": "De orde hoort bij de plek in een keten, niet bij het dier.",
            "fout": {
              "alleen 1e orde": "Dat klopt alleen voor de sla. Bij de kip eet de mens een dier dat planten at: 2e orde.",
              "alleen 2e orde": "Dat klopt alleen voor de kip. Bij de sla eet de mens een plant: 1e orde.",
              "3e orde, want de mens staat altijd bovenaan": "Je telt de schakels, en in deze ketens komt de mens niet verder dan de 2e orde."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een <b>schakel</b> en een <b>orde</b>?",
            "o": [
              "er is geen verschil, het zijn twee woorden voor hetzelfde",
              "bij ordes tel je de plant mee, bij schakels alleen de consumenten",
              "schakels zijn alleen de planten, ordes alleen de dieren",
              "bij schakels tel je de plant mee, bij ordes alleen de consumenten"
            ],
            "a": "bij schakels tel je de plant mee, bij ordes alleen de consumenten",
            "w": "Elke voedselbron is een schakel, ook de plant. Ordes zijn er alleen voor consumenten.",
            "meer": "Daarom: orde = schakel min 1.",
            "fout": {
              "er is geen verschil, het zijn twee woorden voor hetzelfde": "Er is wel verschil: de watervlo is schakel 2 maar 1e orde.",
              "bij ordes tel je de plant mee, bij schakels alleen de consumenten": "Precies andersom.",
              "schakels zijn alleen de planten, ordes alleen de dieren": "Dieren zijn ook schakels. Elke voedselbron in de keten is een schakel."
            }
          },
          {
            "t": "mc",
            "q": "Een voedselketen heeft 5 schakels. Welke orde heeft de laatste schakel?",
            "o": [
              "5e orde",
              "3e orde",
              "4e orde"
            ],
            "a": "4e orde",
            "w": "De eerste schakel is een plant zonder orde, dus 5 min 1 = 4e orde.",
            "meer": "Schrijf het uit: plant, 1e, 2e, 3e, 4e.",
            "fout": {
              "5e orde": "Dan tel je de plant mee als consument. Planten zijn producenten.",
              "3e orde": "Dan tel je er één te weinig. Plant, 1e, 2e, 3e, 4e: vijf schakels."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over een voedselweb klopt?",
            "o": [
              "in een voedselweb staan ook water en zonlicht",
              "één soort kan in meerdere voedselketens van het web zitten",
              "een voedselweb heeft geen producenten",
              "in een voedselweb eet elke soort maar één andere soort"
            ],
            "a": "één soort kan in meerdere voedselketens van het web zitten",
            "w": "Een soort wordt door meerdere soorten gegeten en eet zelf meerdere soorten. Daardoor lopen ketens door elkaar.",
            "meer": "Juist daarom heet het een web.",
            "fout": {
              "in een voedselweb staan ook water en zonlicht": "In een voedselweb staan alleen levende organismen. Water en licht zijn abiotisch.",
              "een voedselweb heeft geen producenten": "Elke keten in het web begint met een plant, dus er zijn altijd producenten.",
              "in een voedselweb eet elke soort maar één andere soort": "Dan had je losse ketens. Een web ontstaat juist doordat soorten meerdere dingen eten."
            }
          },
          {
            "t": "mc",
            "q": "In alg → watervlo → baars → snoek verdwijnen bijna alle watervlooien. Wat gebeurt er waarschijnlijk met de baarzen?",
            "o": [
              "niets, want baarzen eten zelf geen algen",
              "het gaat slechter: ze krijgen minder voedsel",
              "het gaat beter: ze krijgen juist meer voedsel",
              "niets, alleen de algen merken er iets van"
            ],
            "a": "het gaat slechter: ze krijgen minder voedsel",
            "w": "De watervlo is de voedselbron van de baars. Valt die weg, dan heeft de baars minder te eten.",
            "meer": "En daarna merkt de snoek het ook: er zijn minder baarzen te eten.",
            "fout": {
              "niets, want baarzen eten zelf geen algen": "Klopt dat ze geen algen eten, maar ze eten wél watervlooien. Die verdwijnen.",
              "het gaat beter: ze krijgen juist meer voedsel": "Hun voedsel (de watervlooien) verdwijnt. Dat is minder, niet meer.",
              "niets, alleen de algen merken er iets van": "De algen merken het (minder eters), maar de baars verliest zijn voedsel. Alle schakels hangen samen."
            }
          },
          {
            "t": "gap",
            "q": "Het geheel van voedselrelaties in een ecosysteem heet een ___.",
            "a": "voedselweb|voedselnet|voedselwebben",
            "soepel": true,
            "w": "Voedselweb (= voedselnet): alle voedselrelaties in een ecosysteem samen.",
            "meer": "Keten = één rijtje, web = alle rijtjes door elkaar."
          },
          {
            "t": "open",
            "q": "Leg uit waarom een <b>alleseter</b> wel consument van de eerste orde kan zijn, maar een <b>vleeseter</b> niet.",
            "punten": 2,
            "modelantwoord": "Een consument van de eerste orde eet planten. Een alleseter eet ook planten, dus kan op die plek staan. Een vleeseter eet alleen dieren en nooit planten, dus is altijd consument van de tweede orde of hoger.",
            "sleutelwoorden": [
              {
                "moet": [
                  "plant"
                ],
                "syn": [
                  "sla",
                  "appel",
                  "groente",
                  "fruit",
                  "gras"
                ]
              },
              {
                "moet": [
                  "vlees"
                ],
                "syn": [
                  "dier",
                  "geen plant",
                  "tweede",
                  "2e"
                ]
              }
            ],
            "rubric": [
              "Noemt dat de eerste orde planten eet en een alleseter ook planten eet",
              "Noemt dat een vleeseter alleen dieren eet en dus 2e orde of hoger is"
            ],
            "w": "De 1e orde eet planten. Alleseters doen dat ook, vleeseters niet.",
            "meer": "Kijk altijd naar wat een dier in die keten eet."
          }
        ]
      }
    ]
  },
  {
    "id": "accumulatie",
    "emoji": "☠️",
    "titel": "T6 · Gif stapelt op",
    "kort": "Biomassa is de hoeveelheid energierijke stoffen (altijd minder dan de massa); giftige stoffen hopen zich op in de dieren aan het einde van een voedselketen: accumulatie.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Stel: een vis weegt 1 kilo. Is dat allemaal 'voedsel' voor de reiger die hem eet? Nee: een flink deel is water en graat. <b>Biomassa</b> is <b>de totale hoeveelheid energierijke stoffen van een organisme of van een groep organismen</b>, in grammen of kilogrammen. Energierijke stoffen zijn stoffen in voedsel waar een organisme van groeit en van kan bewegen.",
          "Daarom is de biomassa <b>altijd lager</b> dan de massa (het totale gewicht): water en botten tellen niet mee. Denkfout: 'biomassa is gewoon het gewicht'. Nee, het is alleen het energierijke deel.",
          "<b>Giftig</b> zijn <b>stoffen die schadelijk zijn voor organismen</b>. <b>Accumulatie</b> is <b>de ophoping van (giftige) stoffen in dieren die aan het einde van een voedselketen staan</b>. Planten raken bepaalde giftige stoffen niet kwijt; via de planteneter komen ze in dieren die ze ook niet kwijt kunnen, en zo gaat het gif de keten door."
        ],
        "regel": "Biomassa < massa. Gif dat niemand kwijtraakt, hoopt op aan het einde van de voedselketen: accumulatie.",
        "voorbeelden": [
          {
            "en": "vis: massa 1 kg, biomassa minder",
            "nl": "water en graten tellen niet mee als energierijke stof",
            "let": "<b>let op</b>: biomassa is nooit groter dan de massa."
          },
          {
            "en": "alg → watervlo → baars → snoek",
            "nl": "de snoek krijgt het meeste gif",
            "let": "<b>let op</b>: het gif begint in de alg, maar hoopt op bij de snoek."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Biomassa is de totale hoeveelheid ___ stoffen van een organisme of groep organismen.",
            "a": "energierijke|energierijk",
            "soepel": true,
            "w": "Biomassa = de totale hoeveelheid energierijke stoffen.",
            "meer": "Energierijke stoffen zijn stoffen waar een organisme van groeit en van kan bewegen."
          },
          {
            "t": "mc",
            "q": "In welke eenheid geef je biomassa op?",
            "o": [
              "in liters of milliliters",
              "in graden Celsius",
              "in grammen of kilogrammen",
              "in aantallen dieren of planten"
            ],
            "a": "in grammen of kilogrammen",
            "w": "Biomassa is een hoeveelheid stof, dus je weegt het: grammen of kilogrammen.",
            "meer": "Het is net als massa een gewicht, maar alleen van het energierijke deel.",
            "fout": {
              "in liters of milliliters": "Liters is voor een volume, zoals water. Biomassa geef je op in gewicht.",
              "in graden Celsius": "Graden is voor temperatuur.",
              "in aantallen dieren of planten": "Dat is hoeveel dieren er zijn, niet hoeveel energierijke stof ze bevatten."
            }
          },
          {
            "t": "mc",
            "q": "Wat is <b>groter</b> bij een konijn?",
            "o": [
              "zijn biomassa",
              "zijn massa (totale gewicht)",
              "ze zijn altijd precies even groot"
            ],
            "a": "zijn massa (totale gewicht)",
            "w": "De biomassa is altijd lager dan de massa, want water en botten tellen niet mee.",
            "meer": "Massa = alles. Biomassa = alleen het energierijke deel.",
            "fout": {
              "zijn biomassa": "Biomassa is een deel van de massa, dus kan nooit groter zijn.",
              "ze zijn altijd precies even groot": "Dan zou een konijn geen botten en geen water hebben. Die tellen wel bij de massa, niet bij de biomassa."
            }
          },
          {
            "t": "mc",
            "q": "Welke stoffen tellen <b>NIET</b> mee in de biomassa?",
            "o": [
              "stoffen waar het dier van groeit",
              "water en botten",
              "stoffen waar het dier mee kan bewegen"
            ],
            "a": "water en botten",
            "w": "Water en botten zijn geen energierijke stoffen, dus ze tellen niet mee.",
            "meer": "Daarom is de biomassa altijd lager dan de massa.",
            "fout": {
              "stoffen waar het dier van groeit": "Dat zijn juist energierijke stoffen: die tellen wél mee.",
              "stoffen waar het dier mee kan bewegen": "Ook energierijke stoffen: die tellen wél mee."
            }
          },
          {
            "t": "gap",
            "q": "Stoffen die schadelijk zijn voor organismen noem je ___.",
            "a": "giftig|gif|giftige stoffen|giftige|gifstoffen",
            "soepel": true,
            "w": "Giftig = schadelijk voor organismen.",
            "meer": "Denk aan bestrijdingsmiddelen of zware metalen die in het water terechtkomen."
          },
          {
            "t": "mc",
            "q": "Wat is <b>accumulatie</b>?",
            "o": [
              "het verdwijnen van (giftige) stoffen in planten aan het begin van een voedselketen",
              "het verdunnen van (giftige) stoffen in het water rond dieren in een voedselketen",
              "de ophoping van (giftige) stoffen in dieren aan het einde van een voedselketen",
              "het maken van (giftige) stoffen door planten aan het begin van een voedselketen"
            ],
            "a": "de ophoping van (giftige) stoffen in dieren aan het einde van een voedselketen",
            "w": "Accumulatie = ophoping. Het gif stapelt op in de dieren aan het einde van de keten.",
            "meer": "Accu-mul-atie: denk aan een accu die vol loopt.",
            "fout": {
              "het verdwijnen van (giftige) stoffen in planten aan het begin van een voedselketen": "Planten raken bepaalde giftige stoffen juist níet kwijt.",
              "het verdunnen van (giftige) stoffen in het water rond dieren in een voedselketen": "Het tegendeel: het gif wordt juist geconcentreerd in dieren.",
              "het maken van (giftige) stoffen door planten aan het begin van een voedselketen": "Het gaat niet over gif maken, maar over gif dat zich ophoopt."
            }
          },
          {
            "t": "gap",
            "q": "De ophoping van giftige stoffen in dieren aan het einde van een voedselketen heet ___.",
            "a": "accumulatie",
            "soepel": true,
            "w": "Dat is accumulatie.",
            "meer": "Ophopen = opstapelen = accumuleren."
          },
          {
            "t": "mc",
            "q": "In een sloot met alg → watervlo → baars → snoek komt een gif dat dieren niet kwijtraken. Welk dier krijgt het meeste gif in zijn lijf?",
            "o": [
              "de alg",
              "de watervlo",
              "de snoek",
              "ze krijgen allemaal evenveel"
            ],
            "a": "de snoek",
            "w": "De snoek staat aan het einde van de keten: daar hoopt het gif op.",
            "meer": "Elke schakel geeft het gif door aan de volgende, en niemand raakt het kwijt.",
            "fout": {
              "de alg": "Bij de alg begint het gif, maar het hoopt pas op bij de dieren verderop.",
              "de watervlo": "De watervlo eet algen met gif, maar hij wordt zelf weer gegeten. Het gif gaat door.",
              "ze krijgen allemaal evenveel": "Dan zou er geen ophoping zijn. Accumulatie betekent juist dat het aan het einde het meest is."
            }
          },
          {
            "t": "mc",
            "q": "Wat doen planten met bepaalde giftige stoffen die ze opnemen?",
            "o": [
              "ze raken ze niet kwijt: het gif blijft erin",
              "ze ademen het gif via hun bladeren meteen weer uit",
              "ze maken er met fotosynthese nuttige stoffen van"
            ],
            "a": "ze raken ze niet kwijt: het gif blijft erin",
            "w": "Planten raken bepaalde giftige stoffen niet kwijt. Zo komen die stoffen bij de planteneter terecht.",
            "meer": "Daar begint de ophoping in de keten.",
            "fout": {
              "ze ademen het gif via hun bladeren meteen weer uit": "Dan zou het gif niet in de keten terechtkomen. Planten raken het juist niet kwijt.",
              "ze maken er met fotosynthese nuttige stoffen van": "Met fotosynthese maken planten glucose, maar het gif raken ze daarmee niet kwijt: het blijft in de plant."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Stel je voor: er komt een klein beetje gif op het gras. Een rups eet heel veel grassprietjes; al het gif van al die sprietjes zit nu in die ene rups, en hij raakt het niet kwijt. Een koolmees eet tientallen rupsen: het gif van al die rupsen samen zit nu in de mees. Een sperwer eet weer veel mezen...",
          "Zo wordt het gif bij elke schakel meer per dier. Het dier aan het einde krijgt het meeste. Denkfout: 'het gif wordt steeds minder, want het wordt over veel dieren verdeeld'. Het is andersom: het wordt opgestapeld, want niemand raakt het kwijt.",
          "Biomassa toepassen: twee dieren van hetzelfde gewicht kunnen een andere biomassa hebben. Het dier met meer water en botten heeft minder biomassa."
        ],
        "regel": "Hoe verder in de keten, hoe meer gif per dier: elk dier eet veel prooien en raakt het gif van al die prooien niet kwijt.",
        "voorbeelden": [
          {
            "en": "gras → rups → koolmees → sperwer",
            "nl": "de sperwer krijgt het meeste gif",
            "let": "<b>let op</b>: het gif wordt niet verdund, het stapelt op."
          },
          {
            "en": "2 kg dier met veel botten en water",
            "nl": "minder biomassa dan een 2 kg dier met weinig botten en water",
            "let": "<b>let op</b>: zelfde massa betekent niet zelfde biomassa."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Gras → konijn → vos. De boer spuit een gif dat dieren niet kwijtraken. Waar zit uiteindelijk het meeste gif <b>per dier</b>?",
            "o": [
              "in het gras",
              "in het konijn",
              "in de vos"
            ],
            "a": "in de vos",
            "w": "De vos staat aan het einde van de keten: daar hoopt het gif op.",
            "meer": "Elke vos eet veel konijnen, en elk konijn at veel gras.",
            "fout": {
              "in het gras": "Het gif begint bij het gras, maar het gaat door en stapelt op in de eters.",
              "in het konijn": "Het konijn heeft meer dan één grassprietje, maar de vos eet veel konijnen. Bij de vos zit dus meer."
            }
          },
          {
            "t": "mc",
            "q": "Waarom krijgt de vos zoveel gif binnen?",
            "o": [
              "hij drinkt het gif direct uit de sloot bij het gras",
              "hij eet veel konijnen en raakt hun gif niet kwijt",
              "het gif wordt in elke schakel een beetje afgebroken",
              "vossen maken zelf gif aan in hun lever"
            ],
            "a": "hij eet veel konijnen en raakt hun gif niet kwijt",
            "w": "Wordt de planteneter gegeten, dan krijgt dat dier het gif weer binnen. Zo stapelt het op.",
            "meer": "Twee dingen samen: veel prooien eten én het gif niet kwijtraken.",
            "fout": {
              "hij drinkt het gif direct uit de sloot bij het gras": "Het gif komt via de voedselketen binnen, niet via drinken.",
              "het gif wordt in elke schakel een beetje afgebroken": "Als het gif in elke schakel afgebroken werd, zou er niets ophopen. Het blijft juist zitten.",
              "vossen maken zelf gif aan in hun lever": "Vossen maken geen gif. Het komt van het gespoten gras."
            }
          },
          {
            "t": "mc",
            "q": "Een vis weegt 500 gram. Wat kan zijn <b>biomassa</b> zijn?",
            "o": [
              "500 gram",
              "700 gram",
              "150 gram"
            ],
            "a": "150 gram",
            "w": "De biomassa is altijd lager dan de massa. Alleen 150 gram is minder dan 500 gram.",
            "meer": "Water en graten (botten) tellen niet mee.",
            "fout": {
              "500 gram": "Dan zou de hele vis uit energierijke stoffen bestaan, zonder water of graten. Dat kan niet.",
              "700 gram": "Biomassa is een deel van de massa en kan nooit groter zijn dan het totale gewicht."
            }
          },
          {
            "t": "mc",
            "q": "Twee dieren wegen allebei 2 kg. Dier A bestaat voor een groter deel uit botten en water dan dier B. Welk dier heeft de grootste biomassa?",
            "o": [
              "dier A",
              "ze hebben dezelfde biomassa, want ze wegen evenveel",
              "dier B"
            ],
            "a": "dier B",
            "w": "Botten en water tellen niet mee. Dier B heeft daar minder van, dus meer energierijke stoffen.",
            "meer": "Zelfde massa ≠ zelfde biomassa.",
            "fout": {
              "dier A": "Dier A heeft juist meer botten en water, en die tellen niet mee in de biomassa.",
              "ze hebben dezelfde biomassa, want ze wegen evenveel": "Gewicht is massa. Biomassa hangt af van hoeveel energierijke stoffen erin zitten."
            }
          },
          {
            "t": "gap",
            "q": "De biomassa van een organisme is altijd ___ dan zijn massa.",
            "a": "lager|kleiner|minder",
            "soepel": true,
            "w": "Water en botten tellen wel mee in de massa, niet in de biomassa.",
            "meer": "Biomassa is een deel van het totale gewicht."
          },
          {
            "t": "mc",
            "q": "In een meer zit een beetje gif in het water. Waarom is dat gevaarlijker voor de visarend (eet vissen) dan voor de watervlooien?",
            "o": [
              "visarenden zijn zwakker en kunnen minder gif hebben",
              "hij staat aan het eind van de keten: daar hoopt gif op",
              "watervlooien kunnen helemaal niet vergiftigd worden",
              "de visarend drinkt elke dag veel meer water dan een watervlo"
            ],
            "a": "hij staat aan het eind van de keten: daar hoopt gif op",
            "w": "Accumulatie: aan het einde van de keten zit het meeste gif per dier.",
            "meer": "De visarend eet veel vissen, die elk veel kleinere diertjes aten.",
            "fout": {
              "visarenden zijn zwakker en kunnen minder gif hebben": "Het gaat niet om sterk of zwak, maar om hoeveel gif zich opstapelt.",
              "watervlooien kunnen helemaal niet vergiftigd worden": "Ze krijgen ook gif binnen, alleen minder per dier dan de visarend.",
              "de visarend drinkt elke dag veel meer water dan een watervlo": "Het gif komt vooral via het voedsel binnen, door de voedselketen."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak klopt?",
            "o": [
              "alleen het laatste dier van de keten krijgt gif binnen",
              "een planteneter krijgt gif binnen via zijn planten",
              "gif komt bij dieren alleen binnen via de lucht",
              "planten breken alle gif meteen af in hun bladeren"
            ],
            "a": "een planteneter krijgt gif binnen via zijn planten",
            "w": "Planten raken bepaalde giftige stoffen niet kwijt; via de planteneter komen ze in dieren terecht.",
            "meer": "Elke schakel krijgt gif, maar het laatste dier het meeste.",
            "fout": {
              "alleen het laatste dier van de keten krijgt gif binnen": "Iedere schakel krijgt gif binnen. Het laatste dier krijgt alleen het méeste.",
              "gif komt bij dieren alleen binnen via de lucht": "Bij accumulatie gaat het gif juist via het voedsel van schakel naar schakel.",
              "planten breken alle gif meteen af in hun bladeren": "Planten raken bepaalde giftige stoffen juist niet kwijt."
            }
          },
          {
            "t": "mc",
            "q": "Een roofvis eet veel kleinere vissen. Waarom kan er in een roofvis meer gif zitten dan in een klein visje dat algen eet?",
            "o": [
              "grote vissen zwemmen in vuiler en dieper water",
              "kleine vissen maken het gif zelf onschadelijk",
              "hij staat verder in de keten: daar hoopt gif op"
            ],
            "a": "hij staat verder in de keten: daar hoopt gif op",
            "w": "Hoe verder in de keten, hoe meer gif per dier.",
            "meer": "Daarom wordt soms gezegd dat je niet te vaak grote roofvis moet eten.",
            "fout": {
              "grote vissen zwemmen in vuiler en dieper water": "Ze kunnen in hetzelfde water zwemmen. Het verschil komt door hun plek in de keten.",
              "kleine vissen maken het gif zelf onschadelijk": "Dan zou het niet doorgegeven worden. Ze raken het juist niet kwijt."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt (vereenvoudigd) rekenvoorbeeld: elk algje bevat 1 deeltje gif. Een watervlo eet 100 algjes, een baars eet 100 watervlooien. Hoeveel gif zit er in één baars?",
            "stappen": [
              {
                "toon": "Stap 1: alg = 1 deeltje",
                "uitleg": "Het gif begint in de plant, die het niet kwijtraakt."
              },
              {
                "toon": "Stap 2: watervlo = 100 × 1 = 100 deeltjes",
                "uitleg": "Hij eet 100 algjes en raakt het gif ook niet kwijt."
              },
              {
                "toon": "Stap 3: baars = 100 × 100 = 10.000 deeltjes",
                "uitleg": "Hij eet 100 watervlooien met elk 100 deeltjes."
              }
            ],
            "waarom": {
              "q": "Waarom neemt het gif per dier zo snel toe?",
              "o": [
                "de baars maakt zelf extra gif",
                "elk dier eet veel prooien en raakt het gif van al die prooien niet kwijt",
                "het gif groeit vanzelf in het water"
              ],
              "a": "elk dier eet veel prooien en raakt het gif van al die prooien niet kwijt"
            },
            "fout": {
              "de baars maakt zelf extra gif": "Er komt geen nieuw gif bij. Het bestaande gif wordt alleen opgestapeld.",
              "het gif groeit vanzelf in het water": "Het gif groeit niet. Het hoopt op doordat dieren veel prooien eten."
            },
            "w": "Accumulatie: veel prooien eten + gif niet kwijtraken = ophoping.",
            "meer": "De getallen zijn verzonnen, maar het idee klopt: per schakel stapelt het op."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Accumulatie ontstaat door twee dingen samen. Eén: het gif blijft in het lichaam zitten; planten en dieren raken het niet kwijt. Twee: wordt een dier gegeten, dan krijgt de eter het gif weer binnen, en een eter eet meestal veel prooien. Daardoor stapelt het per schakel op.",
          "Een stof die een dier makkelijk weer kwijtraakt, hoopt dus niet op: er blijft niets zitten om door te geven. Zo kan een roofvogel veel gif bevatten terwijl je in het water bijna niks meet.",
          "Biomassa tegenover massa: massa is alles wat je op de weegschaal ziet; biomassa is alleen het energierijke deel, waar de eter van kan groeien en bewegen. Wil je weten hoeveel voedsel een dier oplevert, dan is biomassa de betere maat."
        ],
        "regel": "Accumulatie = gif niet kwijtraken + doorgeven via eten; daarom het meest aan het einde van de keten.",
        "voorbeelden": [
          {
            "en": "bijna geen gif in het water, veel gif in de roofvogel",
            "nl": "het gif is via de keten opgehoopt",
            "let": "<b>let op</b>: lage meting in water zegt niet dat de dieren veilig zijn."
          },
          {
            "en": "massa = weegschaal, biomassa = energierijk deel",
            "nl": "voor 'hoeveel voedsel' kijk je naar biomassa",
            "let": "<b>let op</b>: water en botten leveren geen energie."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Waarom hoopt gif zich vooral op aan het <b>einde</b> van de voedselketen?",
            "o": [
              "de dieren aan het einde zijn altijd het grootst",
              "elke schakel geeft het gif door en niemand raakt het kwijt",
              "het gif zakt naar beneden en blijft liggen bij de roofdieren",
              "aan het begin van de keten zit nooit gif"
            ],
            "a": "elke schakel geeft het gif door en niemand raakt het kwijt",
            "w": "Wordt een dier gegeten, dan krijgt de eter het gif weer binnen. Bij elke stap stapelt het op.",
            "meer": "Ophopen = gif niet kwijtraken + doorgeven via eten.",
            "fout": {
              "de dieren aan het einde zijn altijd het grootst": "Grootte is niet de reden (en is ook niet altijd zo). Het gaat om de plek in de keten.",
              "het gif zakt naar beneden en blijft liggen bij de roofdieren": "Gif 'zakt' niet naar roofdieren. Het komt bij ze via wat ze eten.",
              "aan het begin van de keten zit nooit gif": "Het gif begint juist bij de planten. Het hoopt alleen het meest op aan het einde."
            }
          },
          {
            "t": "mc",
            "q": "Storm zegt: 'Het gif wordt in de keten steeds meer verdeeld, dus de snoek krijgt maar een klein beetje.' Wat klopt?",
            "o": [
              "Goed: het gif wordt over steeds meer dieren verdeeld.",
              "Fout: de alg aan het begin krijgt per stuk het meeste.",
              "Fout: het gif hoopt op, de snoek krijgt het meeste."
            ],
            "a": "Fout: het gif hoopt op, de snoek krijgt het meeste.",
            "w": "Het gif wordt niet verdeeld maar verzameld: elk dier eet veel prooien en raakt het niet kwijt.",
            "meer": "Denk aan sparen: elke keer komt er iets bij en er gaat niets af.",
            "fout": {
              "Goed: het gif wordt over steeds meer dieren verdeeld.": "Dat is de bekende denkfout. De snoek eet veel baarzen; al hun gif komt samen in de snoek.",
              "Fout: de alg aan het begin krijgt per stuk het meeste.": "Bij de alg begint het, maar daar zit per organisme juist het minst."
            }
          },
          {
            "t": "mc",
            "q": "Waarom hoopt een stof die een dier heel makkelijk weer kwijtraakt <b>niet</b> op in de keten?",
            "o": [
              "hij blijft niet zitten, dus wordt niet doorgegeven",
              "omdat zo'n stof nooit giftig is voor dieren",
              "omdat zo'n stof alleen in planten zit, niet in dieren"
            ],
            "a": "hij blijft niet zitten, dus wordt niet doorgegeven",
            "w": "Accumulatie werkt alleen als het organisme de stof niet kwijtraakt.",
            "meer": "Niet kwijtraken is de sleutel. Zonder dat geen ophoping.",
            "fout": {
              "omdat zo'n stof nooit giftig is voor dieren": "Ook een giftige stof kan makkelijk kwijt te raken zijn. Giftig zijn is niet de reden.",
              "omdat zo'n stof alleen in planten zit, niet in dieren": "Het gaat om of het dier de stof kwijtraakt, niet om waar hij zit."
            }
          },
          {
            "t": "mc",
            "q": "Wat zegt de <b>biomassa</b> van een groep organismen?",
            "o": [
              "hoeveel organismen het zijn",
              "hoe zwaar ze zijn met water en botten erbij",
              "hoeveel gif erin zit",
              "hoeveel energierijke stoffen ze samen bevatten"
            ],
            "a": "hoeveel energierijke stoffen ze samen bevatten",
            "w": "Biomassa is de totale hoeveelheid energierijke stoffen van een organisme of een groep organismen.",
            "meer": "In grammen of kilogrammen.",
            "fout": {
              "hoeveel organismen het zijn": "Een aantal is iets anders dan een hoeveelheid stof.",
              "hoe zwaar ze zijn met water en botten erbij": "Dat is de massa. Bij biomassa tellen water en botten niet mee.",
              "hoeveel gif erin zit": "Biomassa gaat over energierijke stoffen, niet over gif."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is <b>biomassa</b> een betere maat dan massa als je wilt weten hoeveel voedsel een vis oplevert voor een reiger?",
            "o": [
              "biomassa telt alleen de energierijke stoffen",
              "biomassa is altijd groter dan massa, dus nauwkeuriger",
              "biomassa telt de graten en botten ook mee",
              "massa telt het water in de vis niet mee"
            ],
            "a": "biomassa telt alleen de energierijke stoffen",
            "w": "Van water en graten groeit de reiger niet. De biomassa laat zien hoeveel echt voedsel erin zit.",
            "meer": "Massa = weegschaal. Biomassa = bruikbaar voedsel.",
            "fout": {
              "biomassa is altijd groter dan massa, dus nauwkeuriger": "Andersom: biomassa is altijd lager dan massa.",
              "biomassa telt de graten en botten ook mee": "Graten (botten) tellen juist níet mee in de biomassa.",
              "massa telt het water in de vis niet mee": "Massa is het totale gewicht, dus water telt daar wél mee."
            }
          },
          {
            "t": "mc",
            "q": "Een bioloog vindt veel gif in een roofvogel, maar bijna niets in het water van zijn gebied. Hoe kan dat?",
            "o": [
              "de vogel heeft het gif zelf gemaakt",
              "de meting moet fout zijn: zonder veel gif in het water kan er geen gif in de vogel zitten",
              "het gif is via de voedselketen in de roofvogel opgehoopt"
            ],
            "a": "het gif is via de voedselketen in de roofvogel opgehoopt",
            "w": "Een klein beetje gif wordt per schakel opgestapeld. Aan het einde van de keten is het veel.",
            "meer": "Dit is precies waarom accumulatie zo gevaarlijk is: je ziet het pas bij de laatste dieren.",
            "fout": {
              "de vogel heeft het gif zelf gemaakt": "Dieren maken dit gif niet zelf; het komt van buiten en gaat via de keten.",
              "de meting moet fout zijn: zonder veel gif in het water kan er geen gif in de vogel zitten": "Juist een klein beetje gif kan door accumulatie veel worden in het laatste dier."
            }
          },
          {
            "t": "mc",
            "q": "Op het land: gras → sprinkhaan → kikker → ooievaar. Er komt gif op het gras. Welk dier krijgt het meeste gif, en welke orde is dat?",
            "o": [
              "de kikker, consument van de 2e orde",
              "de ooievaar, consument van de 3e orde",
              "de sprinkhaan, want die eet het gif direct",
              "de ooievaar, consument van de 4e orde"
            ],
            "a": "de ooievaar, consument van de 3e orde",
            "w": "De ooievaar staat aan het einde (schakel 4, dus 3e orde). Daar hoopt het gif op.",
            "meer": "Combineer: einde keten = meeste gif; orde = schakel min 1.",
            "fout": {
              "de kikker, consument van de 2e orde": "De orde klopt, maar de kikker wordt nog gegeten door de ooievaar. Het gif gaat door.",
              "de sprinkhaan, want die eet het gif direct": "Hij eet het als eerste, maar per dier krijgt het laatste dier het meeste.",
              "de ooievaar, consument van de 4e orde": "Goed dier, verkeerde orde. Schakel 4 is 3e orde: het gras telt niet mee."
            }
          },
          {
            "t": "gap",
            "q": "Planten raken bepaalde giftige stoffen niet ___, en geven ze zo door aan planteneters.",
            "a": "kwijt",
            "soepel": true,
            "w": "Omdat planten het gif niet kwijtraken, komt het via de planteneter in de keten.",
            "meer": "Niet kwijtraken is het begin van accumulatie."
          },
          {
            "t": "open",
            "q": "Het gif in een sloot begint bij de algen. Leg uit waarom een snoek toch méér gif bevat dan een watervlo. (alg → watervlo → baars → snoek)",
            "punten": 2,
            "modelantwoord": "De dieren raken het gif niet kwijt. Wordt een dier gegeten, dan krijgt de eter het gif weer binnen. De snoek eet veel baarzen, die elk veel watervlooien aten. Zo hoopt het gif zich op aan het einde van de keten (accumulatie).",
            "sleutelwoorden": [
              {
                "moet": [
                  "kwijt"
                ],
                "syn": [
                  "blijft",
                  "niet afgebroken",
                  "zit vast"
                ]
              },
              {
                "moet": [
                  "eet"
                ],
                "syn": [
                  "gegeten",
                  "prooi",
                  "veel",
                  "ophoop",
                  "accumul",
                  "stapel"
                ]
              }
            ],
            "rubric": [
              "Noemt dat de dieren het gif niet kwijtraken",
              "Noemt dat het gif via het eten wordt doorgegeven en zich zo aan het einde ophoopt"
            ],
            "w": "Niet kwijtraken + doorgeven via eten = ophoping aan het einde.",
            "meer": "Gebruik het woord accumulatie in je antwoord, dat ziet een docent graag."
          }
        ]
      }
    ]
  },
  {
    "id": "opruimploeg",
    "emoji": "🍂",
    "titel": "T6 · De opruimploeg",
    "kort": "Afvaleters (dieren) eten dode resten, reducenten (bacteriën en schimmels) breken de rest af tot nuttige stoffen voor planten; plastic is niet-biologisch afbreekbaar en blijft liggen, zoals in de plasticsoep.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Herfst: een dikke laag bladeren in het bos. Een jaar later is die laag bijna weg. Wie heeft opgeruimd? Eerst de <b>afvaleters</b>: <b>dieren die dode resten van planten en dieren eten</b>, zoals pissebedden, regenwormen en insecten in de bodem.",
          "Daarna de <b>reducenten</b>: <b>bacteriën en schimmels die de uitwerpselen en andere resten van de afvaleters nóg verder afbreken, reduceren (= minder maken)</b>. Ze maken er weer nuttige stoffen van die planten uit de bodem kunnen opnemen. Denkfout: 'rotten is vies en slecht'. Rotten en bederven is juist nuttig werk.",
          "Iets is <b>biologisch afbreekbaar</b> als <b>het afgebroken kan worden door reducenten</b>; reducenten kunnen plantaardig of dierlijk (dood) materiaal afbreken. Iets is <b>niet-biologisch afbreekbaar</b> als <b>het bestaat uit levenloze materialen</b>, zoals plastic, glas en metaal.",
          "<b>Plasticsoep</b> zijn <b>drijvende eilanden van plasticafval in oceanen</b>. Plastic verdwijnt niet vanzelf; het kan alleen 'verdwijnen' door het bijvoorbeeld te verbranden, en dan komen er schadelijke stoffen vrij en kost het energie."
        ],
        "regel": "Afvaleter (dier) eet dode resten → reducent (bacterie/schimmel) breekt verder af → nuttige stoffen voor planten. Plastic, glas en metaal kunnen reducenten niet afbreken.",
        "voorbeelden": [
          {
            "en": "pissebed eet een rottend blad",
            "nl": "afvaleter: een dier dat dode resten eet",
            "let": "<b>let op</b>: een afvaleter is altijd een dier."
          },
          {
            "en": "schimmel op een boomstronk",
            "nl": "reducent: breekt resten verder af",
            "let": "<b>let op</b>: reducenten zijn bacteriën en schimmels."
          },
          {
            "en": "bananenschil vs. glazen fles",
            "nl": "de schil is biologisch afbreekbaar, de fles niet",
            "let": "<b>let op</b>: glas is levenloos materiaal."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Dieren die dode resten van planten en dieren eten, heten ___.",
            "a": "afvaleters|afvaleter|afval-eters",
            "soepel": true,
            "w": "Afvaleters zijn dieren die dode resten eten.",
            "meer": "Bijvoorbeeld pissebedden, regenwormen en insecten in de bodem."
          },
          {
            "t": "mc",
            "q": "Welke organismen zijn <b>reducenten</b>?",
            "o": [
              "pissebedden en regenwormen",
              "bacteriën en schimmels",
              "planten",
              "roofdieren"
            ],
            "a": "bacteriën en schimmels",
            "w": "Reducenten zijn bacteriën en schimmels.",
            "meer": "Pissebedden en wormen zijn afvaleters: die komen eerst.",
            "fout": {
              "pissebedden en regenwormen": "Dat zijn afvaleters: dieren die dode resten eten. Reducenten zijn bacteriën en schimmels.",
              "planten": "Planten zijn producenten: ze maken voedsel, ze breken geen resten af.",
              "roofdieren": "Roofdieren eten levende prooien. Ze ruimen geen dode resten op."
            }
          },
          {
            "t": "gap",
            "q": "Reducenten breken resten nóg verder af. Reduceren betekent ___ maken.",
            "a": "minder|kleiner",
            "soepel": true,
            "w": "Reduceren = minder maken.",
            "meer": "Net als 'korting reduceert de prijs': die wordt minder."
          },
          {
            "t": "mc",
            "q": "Wat maken reducenten van dode resten?",
            "o": [
              "giftige stoffen die in de bodem blijven",
              "nuttige stoffen die planten opnemen",
              "plastic en ander levenloos materiaal",
              "niets, de resten verdwijnen gewoon"
            ],
            "a": "nuttige stoffen die planten opnemen",
            "w": "Reducenten maken van resten weer nuttige stoffen voor planten.",
            "meer": "Zo krijgen planten nieuwe stoffen, en begint alles opnieuw.",
            "fout": {
              "giftige stoffen die in de bodem blijven": "Juist niet: ze maken er nuttige stoffen van.",
              "plastic en ander levenloos materiaal": "Plastic is niet-biologisch, levenloos materiaal. Reducenten maken dat niet.",
              "niets, de resten verdwijnen gewoon": "Er verdwijnt niets: de resten worden omgezet in nuttige stoffen in de bodem."
            }
          },
          {
            "t": "mc",
            "q": "Wanneer is iets <b>biologisch afbreekbaar</b>?",
            "o": [
              "als het in de zon langzaam smelt",
              "als je het kunt verbranden tot as",
              "als reducenten het kunnen afbreken",
              "als het in water oplost en verdwijnt"
            ],
            "a": "als reducenten het kunnen afbreken",
            "w": "Biologisch afbreekbaar = afgebroken kunnen worden door reducenten.",
            "meer": "Bio = leven: levende organismen (bacteriën en schimmels) breken het af.",
            "fout": {
              "als het in de zon langzaam smelt": "Smelten is iets anders. Het gaat om afbraak door reducenten.",
              "als je het kunt verbranden tot as": "Plastic kun je ook verbranden en dat is níet biologisch afbreekbaar.",
              "als het in water oplost en verdwijnt": "Oplossen is geen afbraak door reducenten. Suiker lost op, glas niet, maar daar gaat de definitie niet over."
            }
          },
          {
            "t": "mc",
            "q": "Welk afval is <b>NIET</b> biologisch afbreekbaar?",
            "o": [
              "een bananenschil",
              "een dood blad",
              "een glazen fles",
              "een appelklokhuis"
            ],
            "a": "een glazen fles",
            "w": "Glas is een levenloos materiaal: reducenten kunnen het niet afbreken.",
            "meer": "Plastic, glas en metaal: niet-biologisch afbreekbaar.",
            "fout": {
              "een bananenschil": "Die is plantaardig: reducenten breken hem af.",
              "een dood blad": "Plantaardig materiaal: biologisch afbreekbaar.",
              "een appelklokhuis": "Ook plantaardig: reducenten kunnen het afbreken."
            }
          },
          {
            "t": "gap",
            "q": "Iets is niet-biologisch afbreekbaar als het bestaat uit ___ materialen, zoals plastic, glas en metaal.",
            "a": "levenloze|levenloos",
            "soepel": true,
            "w": "Niet-biologisch afbreekbaar = bestaat uit levenloze materialen.",
            "meer": "Reducenten kunnen alleen plantaardig of dierlijk materiaal afbreken."
          },
          {
            "t": "gap",
            "q": "Drijvende eilanden van plasticafval in oceanen noem je ___.",
            "a": "plasticsoep|plastic soep|plastic-soep",
            "soepel": true,
            "w": "Plasticsoep = drijvende eilanden van plasticafval in oceanen.",
            "meer": "Het verdwijnt niet, want plastic is niet-biologisch afbreekbaar."
          },
          {
            "t": "mc",
            "q": "Hoe kun je plastic laten 'verdwijnen'?",
            "o": [
              "reducenten in de bodem breken het binnen een jaar af",
              "verbranden, maar dan komen schadelijke stoffen vrij",
              "het lost na een paar jaar vanzelf op in zeewater",
              "afvaleters zoals regenwormen eten en verteren het"
            ],
            "a": "verbranden, maar dan komen schadelijke stoffen vrij",
            "w": "Plastic kan alleen 'verdwijnen' door het bijvoorbeeld te verbranden. Dan komen schadelijke stoffen vrij en kost het energie.",
            "meer": "Daarom is minder plastic gebruiken beter dan het achteraf opruimen.",
            "fout": {
              "reducenten in de bodem breken het binnen een jaar af": "Reducenten kunnen plastic helemaal niet afbreken: het is levenloos materiaal.",
              "het lost na een paar jaar vanzelf op in zeewater": "Plastic verdwijnt niet vanzelf. Daarom bestaat de plasticsoep.",
              "afvaleters zoals regenwormen eten en verteren het": "Afvaleters eten dode resten van planten en dieren. Plastic hoort daar niet bij."
            }
          },
          {
            "t": "mc",
            "q": "Is rotten nuttig?",
            "o": [
              "nee, rotten maakt alles vies en stinkend",
              "ja, het levert stoffen voor planten op",
              "nee, rotten is een ziekte van planten"
            ],
            "a": "ja, het levert stoffen voor planten op",
            "w": "Rotten en bederven is het werk van reducenten. Dat is nuttig: planten krijgen er nieuwe stoffen door.",
            "meer": "Zonder rotten zou het bos vol dode bladeren liggen.",
            "fout": {
              "nee, rotten maakt alles vies en stinkend": "Het ruikt misschien vies, maar het is nuttig werk: zo komen stoffen terug in de bodem.",
              "nee, rotten is een ziekte van planten": "Rotten gebeurt met dode resten. Het is opruimen, geen ziekte."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Volg een dood konijn in het bos. Aaskevers en vliegenlarven eten ervan: dat zijn <b>afvaleters</b>. Hun poep en de kleine restjes worden door bacteriën en schimmels verder afgebroken: de <b>reducenten</b>. Wat overblijft zijn nuttige stoffen in de bodem. Het gras neemt die op, en een ander konijn eet het gras.",
          "Afval sorteren: komt het van een plant of dier? Dan kunnen reducenten het aan: <b>biologisch afbreekbaar</b>. Ook een verpakking van plantaardig materiaal hoort daarbij. Is het levenloos materiaal, zoals plastic, glas of metaal? Dan <b>niet-biologisch afbreekbaar</b>.",
          "Denkfout: 'plastic verdwijnt vanzelf'. Nee: reducenten kunnen het niet afbreken, dus het blijft. Daardoor ontstaat de plasticsoep. Verbranden helpt ook niet echt: dan komen schadelijke stoffen vrij en het kost energie."
        ],
        "regel": "Heeft het geleefd (plant of dier)? Dan biologisch afbreekbaar. Levenloos materiaal (plastic, glas, metaal)? Dan niet.",
        "voorbeelden": [
          {
            "en": "dood konijn → aaskevers → bacteriën en schimmels → bodem → gras",
            "nl": "afvaleters eerst, reducenten daarna",
            "let": "<b>let op</b>: zo komen de stoffen terug bij de planten."
          },
          {
            "en": "papieren zak vs. plastic tas",
            "nl": "papier is plantaardig en afbreekbaar, plastic niet",
            "let": "<b>let op</b>: 'verpakking' kan dus allebei zijn."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een pissebed eet een rottend blad. Wat is de pissebed?",
            "o": [
              "een reducent",
              "een afvaleter",
              "een producent",
              "een consument van de 1e orde"
            ],
            "a": "een afvaleter",
            "w": "Een dier dat dode resten van planten of dieren eet, is een afvaleter.",
            "meer": "Afvaleter = dier. Reducent = bacterie of schimmel.",
            "fout": {
              "een reducent": "Reducenten zijn bacteriën en schimmels. Een pissebed is een dier.",
              "een producent": "Een producent maakt zelf voedsel met fotosynthese. Een pissebed eet.",
              "een consument van de 1e orde": "Die eet levende planten in een voedselketen. Wie dode resten eet, is een afvaleter."
            }
          },
          {
            "t": "mc",
            "q": "Een paddenstoel (een schimmel) groeit op een dode boomstam en breekt hem af. Wat is de paddenstoel?",
            "o": [
              "een afvaleter",
              "een producent",
              "een reducent"
            ],
            "a": "een reducent",
            "w": "Schimmels die resten afbreken zijn reducenten.",
            "meer": "Reducenten = bacteriën en schimmels.",
            "fout": {
              "een afvaleter": "Afvaleters zijn dieren. Een paddenstoel is een schimmel.",
              "een producent": "Een paddenstoel maakt geen voedsel met fotosynthese; hij breekt dood materiaal af."
            }
          },
          {
            "t": "mc",
            "q": "Wat mag op de composthoop, zodat reducenten het afbreken?",
            "o": [
              "een blikje",
              "aardappelschillen",
              "een plastic tasje",
              "een glazen potje"
            ],
            "a": "aardappelschillen",
            "w": "Aardappelschillen zijn plantaardig: biologisch afbreekbaar.",
            "meer": "Op de composthoop doen reducenten hun werk; er komt mooie aarde uit.",
            "fout": {
              "een blikje": "Metaal is levenloos materiaal: reducenten kunnen het niet afbreken.",
              "een plastic tasje": "Plastic is niet-biologisch afbreekbaar.",
              "een glazen potje": "Glas is levenloos: niet-biologisch afbreekbaar."
            }
          },
          {
            "t": "mc",
            "q": "Een bakje is gemaakt van plantaardig materiaal (zoals maïs). Is het biologisch afbreekbaar?",
            "o": [
              "nee, verpakkingen zijn nooit biologisch afbreekbaar",
              "ja, reducenten breken plantaardig materiaal af",
              "nee, alleen etensresten zijn biologisch afbreekbaar"
            ],
            "a": "ja, reducenten breken plantaardig materiaal af",
            "w": "Ook afval zoals een verpakking van plantaardig materiaal kan biologisch afbreekbaar zijn.",
            "meer": "Het gaat om het materiaal, niet om wat het is (verpakking of eten).",
            "fout": {
              "nee, verpakkingen zijn nooit biologisch afbreekbaar": "Een verpakking van plantaardig materiaal kan wel worden afgebroken. Het materiaal bepaalt het.",
              "nee, alleen etensresten zijn biologisch afbreekbaar": "Alle plantaardige of dierlijke materialen zijn afbreekbaar, ook als je het niet eet, zoals een dood blad."
            }
          },
          {
            "t": "mc",
            "q": "Wat gebeurt er als er in een bos <b>geen reducenten</b> meer zouden zijn?",
            "o": [
              "er gebeurt niets, want de afvaleters ruimen alles al op",
              "het bos wordt juist schoner, want er rot niets meer",
              "dode resten stapelen op en planten missen nieuwe stoffen"
            ],
            "a": "dode resten stapelen op en planten missen nieuwe stoffen",
            "w": "Reducenten maken van resten nuttige stoffen voor planten. Zonder hen stopt dat.",
            "meer": "Reducenten zijn de laatste stap van de opruimploeg.",
            "fout": {
              "er gebeurt niets, want de afvaleters ruimen alles al op": "Afvaleters laten uitwerpselen en resten achter. Die moeten reducenten nog verder afbreken.",
              "het bos wordt juist schoner, want er rot niets meer": "Andersom: dode resten worden niet meer helemaal afgebroken en blijven liggen."
            }
          },
          {
            "t": "gap",
            "q": "Bacteriën en schimmels die resten van afvaleters verder afbreken, heten ___.",
            "a": "reducenten|reducent",
            "soepel": true,
            "w": "Dat zijn reducenten.",
            "meer": "Reduceren = minder maken."
          },
          {
            "t": "mc",
            "q": "Storm vindt een plastic flesje op het strand. Ze denkt: 'Over een paar jaar is dat vanzelf weg.' Klopt dat?",
            "o": [
              "ja, de zee lost het in een paar jaar langzaam op",
              "nee, plastic is niet-biologisch afbreekbaar",
              "ja, bacteriën in het zand breken het vanzelf af"
            ],
            "a": "nee, plastic is niet-biologisch afbreekbaar",
            "w": "Plastic is levenloos materiaal: reducenten kunnen het niet afbreken, dus het blijft.",
            "meer": "Daarom drijven er hele eilanden plastic in de oceaan: de plasticsoep.",
            "fout": {
              "ja, de zee lost het in een paar jaar langzaam op": "Plastic lost niet op in zeewater. Daarom bestaat de plasticsoep.",
              "ja, bacteriën in het zand breken het vanzelf af": "Bacteriën (reducenten) kunnen alleen plantaardig of dierlijk materiaal afbreken, geen plastic."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is plastic verbranden ook geen goede oplossing?",
            "o": [
              "dan wordt het na een tijdje gewoon weer plastic",
              "er komen schadelijke stoffen vrij en het kost energie",
              "dan ontstaat er door de as nog meer plasticsoep in zee"
            ],
            "a": "er komen schadelijke stoffen vrij en het kost energie",
            "w": "Bij verbranden komen schadelijke stoffen vrij en het kost energie.",
            "meer": "Beter: minder plastic gebruiken en hergebruiken.",
            "fout": {
              "dan wordt het na een tijdje gewoon weer plastic": "Verbrand plastic is weg als plastic, maar er komen schadelijke stoffen bij vrij.",
              "dan ontstaat er door de as nog meer plasticsoep in zee": "Plasticsoep ontstaat door plastic in zee, niet door verbranden. Het probleem van verbranden is de schadelijke stoffen."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: volg een dood eikenblad op de bosbodem.",
            "stappen": [
              {
                "toon": "Stap 1: het blad valt",
                "uitleg": "Dood plantaardig materiaal: biologisch afbreekbaar."
              },
              {
                "toon": "Stap 2: een regenworm eet het",
                "uitleg": "Een dier dat dode resten eet: afvaleter."
              },
              {
                "toon": "Stap 3: bacteriën en schimmels breken de poep en restjes af",
                "uitleg": "Reducenten breken het nóg verder af."
              },
              {
                "toon": "Stap 4: nuttige stoffen in de bodem",
                "uitleg": "De eik neemt ze weer op met zijn wortels."
              }
            ],
            "waarom": {
              "q": "Waarom zijn reducenten nodig als er al afvaleters zijn?",
              "o": [
                "reducenten eten de afvaleters op",
                "afvaleters laten uitwerpselen en resten over die reducenten verder afbreken tot stoffen voor planten",
                "afvaleters kunnen alleen dierlijke resten eten"
              ],
              "a": "afvaleters laten uitwerpselen en resten over die reducenten verder afbreken tot stoffen voor planten"
            },
            "fout": {
              "reducenten eten de afvaleters op": "Reducenten breken resten en uitwerpselen af, ze jagen niet op afvaleters.",
              "afvaleters kunnen alleen dierlijke resten eten": "Afvaleters eten dode resten van planten én dieren, zoals de regenworm het blad."
            },
            "w": "Afvaleters doen het grove werk, reducenten maken het af tot stoffen voor planten.",
            "meer": "Eerst afvaleter, dan reducent, dan plant."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Afvaleter tegenover reducent. <b>Afvaleters</b> zijn <b>dieren</b> die dode resten <b>eten</b>: de grove opruimers, zoals een stofzuiger. <b>Reducenten</b> zijn <b>bacteriën en schimmels</b> die wat daarna overblijft, zoals de uitwerpselen van afvaleters, <b>nóg verder afbreken</b>: de fijne opruimers. Zij maken er stoffen van die planten weer opnemen.",
          "Plasticsoep en accumulatie samen: kleine zeedieren eten stukjes plastic, vissen eten die dieren, zeevogels en zeehonden eten de vissen. Omdat plastic niet biologisch afbreekbaar is, verdwijnt het niet. Via de voedselketen komt het bij de dieren aan het einde terecht, en zo ook op het land.",
          "Denkfout: 'schimmels en bacteriën zijn vies, weg ermee'. Zonder reducenten kregen planten geen nieuwe stoffen en lag alles vol dode resten. De opruimploeg is net zo belangrijk als de producenten."
        ],
        "regel": "Afvaleter = dier dat dode resten eet; reducent = bacterie/schimmel die het afmaakt. Plastic breekt niemand af, dus het gaat via eten de keten door.",
        "voorbeelden": [
          {
            "en": "regenworm + schimmel op een blad",
            "nl": "worm = afvaleter, schimmel = reducent",
            "let": "<b>let op</b>: dier of niet? Dat is het verschil."
          },
          {
            "en": "plastic → zeediertje → vis → zeevogel",
            "nl": "het plastic gaat via de keten verder",
            "let": "<b>let op</b>: zo komt het ook bij dieren op het land."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een <b>afvaleter</b> en een <b>reducent</b>?",
            "o": [
              "afvaleter = bacterie of schimmel; reducent = dier",
              "afvaleter = dier; reducent = bacterie of schimmel",
              "geen verschil: allebei eten ze dode resten op",
              "afvaleter eet levende planten; reducent eet dode"
            ],
            "a": "afvaleter = dier; reducent = bacterie of schimmel",
            "w": "Afvaleters zijn dieren; reducenten zijn bacteriën en schimmels die de resten van afvaleters nóg verder afbreken.",
            "meer": "Grove opruimer (afvaleter) tegenover fijne opruimer (reducent).",
            "fout": {
              "afvaleter = bacterie of schimmel; reducent = dier": "Precies omgekeerd.",
              "geen verschil: allebei eten ze dode resten op": "Ze ruimen allebei op, maar het zijn verschillende organismen en ze doen een andere stap.",
              "afvaleter eet levende planten; reducent eet dode": "Afvaleters eten juist dode resten. Wie levende planten eet, is een consument van de 1e orde."
            }
          },
          {
            "t": "mc",
            "q": "Welke volgorde past bij het opruimen van een dode vis op de bodem van een sloot?",
            "o": [
              "eerst reducenten, daarna afvaleters, dan nuttige stoffen voor planten",
              "eerst afvaleters, daarna reducenten, dan nuttige stoffen voor planten",
              "eerst planten, daarna afvaleters, dan reducenten in de bodem"
            ],
            "a": "eerst afvaleters, daarna reducenten, dan nuttige stoffen voor planten",
            "w": "Afvaleters eten de dode resten, reducenten breken hun uitwerpselen en restjes verder af, en planten nemen de stoffen op.",
            "meer": "Zo komen de stoffen weer terug bij het begin van de voedselketen.",
            "fout": {
              "eerst reducenten, daarna afvaleters, dan nuttige stoffen voor planten": "Omgedraaid: reducenten breken de resten van de afvaleters verder af, dus ze komen ná de afvaleters.",
              "eerst planten, daarna afvaleters, dan reducenten in de bodem": "De planten komen aan het eind: zij nemen de nuttige stoffen op die de reducenten maken."
            }
          },
          {
            "t": "mc",
            "q": "Hoe komt plastic uit de oceaan ook bij dieren op het <b>land</b> terecht?",
            "o": [
              "het waait als stof het land op en dieren ademen het in",
              "reducenten brengen het naar de bodem op het land",
              "via accumulatie: dieren eten het en worden zelf gegeten"
            ],
            "a": "via accumulatie: dieren eten het en worden zelf gegeten",
            "w": "Organismen eten het plastic op en via accumulatie komt het ook op land bij dieren terecht.",
            "meer": "Plastic breekt niet af, dus het gaat gewoon mee de keten door.",
            "fout": {
              "het waait als stof het land op en dieren ademen het in": "Het plastic gaat via eten verder: dieren eten het en worden zelf weer gegeten. Zo reist het de voedselketen door.",
              "reducenten brengen het naar de bodem op het land": "Reducenten kunnen plastic niet afbreken en vervoeren niets. Het gaat via eten."
            }
          },
          {
            "t": "mc",
            "q": "Welke dieren zullen bij plasticsoep het <b>meeste</b> plastic in hun lijf krijgen?",
            "o": [
              "kleine zeediertjes aan het begin van de voedselketen",
              "dieren aan het eind van de keten, zoals zeehonden",
              "algen, want die drijven tussen het plastic"
            ],
            "a": "dieren aan het eind van de keten, zoals zeehonden",
            "w": "Net als bij gif: wat niet afbreekt, hoopt op aan het einde van de keten.",
            "meer": "Plasticsoep + accumulatie = hoe hoger in de keten, hoe meer plastic per dier.",
            "fout": {
              "kleine zeediertjes aan het begin van de voedselketen": "Zij krijgen het als eersten, maar worden zelf gegeten. Het hoopt op bij de eters.",
              "algen, want die drijven tussen het plastic": "Algen zijn producenten; ze eten geen plastic. Het hoopt op bij dieren aan het einde."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is een plastic tas slechter voor het milieu dan een papieren zak, als hij in de natuur belandt?",
            "o": [
              "reducenten breken papier af, plastic niet",
              "plastic is zwaarder en zakt dieper de grond in",
              "een papieren zak is ook niet afbreekbaar, maar kleiner"
            ],
            "a": "reducenten breken papier af, plastic niet",
            "w": "Papier komt van bomen: biologisch afbreekbaar. Plastic is levenloos materiaal: blijft liggen.",
            "meer": "De vraag is steeds: kunnen reducenten het afbreken?",
            "fout": {
              "plastic is zwaarder en zakt dieper de grond in": "Gewicht maakt niet uit. Het gaat erom of reducenten het kunnen afbreken.",
              "een papieren zak is ook niet afbreekbaar, maar kleiner": "Papier is plantaardig en dus wél biologisch afbreekbaar."
            }
          },
          {
            "t": "mc",
            "q": "Storm zegt: 'Schimmels en bacteriën zijn vies, die kun je beter uit de natuur weghalen.' Wat is het beste tegenargument?",
            "o": [
              "ze zijn helemaal niet vies, want ze zijn piepklein",
              "zonder schimmels zijn er geen paddenstoelen om te eten",
              "zonder reducenten krijgen planten geen nieuwe stoffen"
            ],
            "a": "zonder reducenten krijgen planten geen nieuwe stoffen",
            "w": "Reducenten maken van resten nuttige stoffen voor planten. Rotten is nuttig werk.",
            "meer": "Bekende denkfout: reducenten zijn slecht. Ze zijn juist onmisbaar.",
            "fout": {
              "ze zijn helemaal niet vies, want ze zijn piepklein": "Klein of niet: het punt is wat ze dóen. Ze maken stoffen voor planten.",
              "zonder schimmels zijn er geen paddenstoelen om te eten": "Dat is een bijzaak voor mensen. Het echte argument is hun rol in het ecosysteem."
            }
          },
          {
            "t": "mc",
            "q": "Een regenworm en een schimmel werken allebei aan een dood blad. Wie doet wat?",
            "o": [
              "worm = reducent, schimmel = afvaleter",
              "worm = afvaleter, schimmel = reducent",
              "worm en schimmel zijn allebei producenten",
              "worm en schimmel zijn allebei afvaleters"
            ],
            "a": "worm = afvaleter, schimmel = reducent",
            "w": "Regenworm = dier = afvaleter. Schimmel = reducent.",
            "meer": "Vraag je af: is het een dier? Dan afvaleter. Bacterie of schimmel? Dan reducent.",
            "fout": {
              "worm = reducent, schimmel = afvaleter": "Omgedraaid. Reducenten zijn bacteriën en schimmels; de worm is een dier.",
              "worm en schimmel zijn allebei producenten": "Producenten maken voedsel met fotosynthese. Deze twee breken juist af.",
              "worm en schimmel zijn allebei afvaleters": "Afvaleters zijn dieren. Een schimmel is geen dier, maar een reducent."
            }
          },
          {
            "t": "gap",
            "q": "Plastic, glas en metaal kunnen niet door ___ worden afgebroken.",
            "a": "reducenten|reducent|bacteriën en schimmels|bacterien en schimmels",
            "soepel": true,
            "w": "Reducenten breken alleen plantaardig en dierlijk materiaal af, geen levenloze materialen.",
            "meer": "Daarom heet het niet-biologisch afbreekbaar."
          },
          {
            "t": "open",
            "q": "Leg uit waarom plasticsoep ook een probleem is voor dieren die nooit in zee zwemmen.",
            "punten": 2,
            "modelantwoord": "Plastic is niet-biologisch afbreekbaar, dus het verdwijnt niet. Zeedieren eten het en worden zelf gegeten. Via de voedselketen (accumulatie) komt het plastic zo ook bij dieren op het land terecht.",
            "sleutelwoorden": [
              {
                "moet": [
                  "afbreekba"
                ],
                "syn": [
                  "verdwijnt niet",
                  "blijft",
                  "reducent"
                ]
              },
              {
                "moet": [
                  "accumul"
                ],
                "syn": [
                  "voedselketen",
                  "gegeten",
                  "ophoop",
                  "eten"
                ]
              }
            ],
            "rubric": [
              "Noemt dat plastic niet (biologisch) afbreekbaar is en dus niet verdwijnt",
              "Noemt dat het via eten / de voedselketen (accumulatie) bij dieren op het land komt"
            ],
            "w": "Plastic breekt niet af en gaat via de voedselketen door, ook naar het land.",
            "meer": "Combineer twee begrippen: niet-biologisch afbreekbaar + accumulatie."
          }
        ]
      }
    ]
  },
  {
    "id": "kringlopen",
    "emoji": "🔄",
    "titel": "T6 · Rondjes in de natuur",
    "kort": "In een kringloop gaat een stof (zoals water of koolstof) steeds rond: van planten naar dieren, via afvaleters en reducenten terug in de bodem, en dan weer naar planten.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Denk aan een blad dat in de herfst van een boom valt. In het voorjaar is het weg. Waar is het gebleven? <b>Afvaleters</b> (zoals pissebedden en wormen) eten het, en <b>reducenten</b> (bacteriën en schimmels) breken de resten nog verder af tot nuttige stoffen in de bodem. De boom neemt die stoffen weer op. Het blad is dus niet echt verdwenen: de stoffen gaan rond.",
          "Dat heet een <b>kringloop</b>: een stof wordt steeds via organismen doorgegeven naar de volgende schakel, komt via afvaleters en reducenten weer in de aarde, en gaat dan weer via planten in dieren. Denkfout: 'een stof is op als hij gebruikt is'. Nee, in een kringloop wordt hij steeds opnieuw gebruikt.",
          "<b>Kringloop van water</b>: water uit zeeën en oceanen <b>verdampt</b>. Hoog in de lucht worden het kleine druppels (<b>wolken</b>) en gaat het <b>regenen</b>. Zo komt het water terug op aarde en in zee, en begint de kringloop opnieuw.",
          "<b>Kringloop van koolstof</b>: koolstof zit in <b>koolstofdioxide</b> in de lucht én in <b>energierijke stoffen</b> zoals glucose. Planten maken glucose bij <b>fotosynthese</b>. Dieren eten die stoffen en geven ze door. Dieren én planten gebruiken een deel als energie (<b>verbranding</b>); daarbij komt weer koolstofdioxide in de lucht."
        ],
        "regel": "In een kringloop gaat een stof steeds rond: plant, dier, afvaleters en reducenten, bodem, en weer plant.",
        "voorbeelden": [
          {
            "en": "zee → verdampen → wolken → regen → zee",
            "nl": "De kringloop van water. Hier betekent de pijl: 'en daarna'.",
            "let": "<b>let op</b>: wolken zijn kleine waterdruppels hoog in de lucht, geen rook."
          },
          {
            "en": "dood blad → pissebed → schimmels en bacteriën → bodem → boom",
            "nl": "Stoffen uit een dood blad komen via afvaleters en reducenten terug in de boom.",
            "let": "<b>let op</b>: rotten is juist nuttig werk, niet iets vies of slechts."
          },
          {
            "en": "koolstofdioxide → gras (glucose) → koe → koolstofdioxide",
            "nl": "De kringloop van koolstof in het kort.",
            "let": "<b>let op</b>: planten verbranden ook voedsel, niet alleen dieren."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat gebeurt er met een stof in een kringloop?",
            "o": [
              "Hij wordt één keer gebruikt en raakt dan op",
              "Hij gaat steeds rond en wordt opnieuw gebruikt",
              "Hij gaat alleen van dieren naar planten",
              "Hij zakt in de bodem en komt nooit meer terug"
            ],
            "a": "Hij gaat steeds rond en wordt opnieuw gebruikt",
            "w": "Een kringloop heeft geen eind: de stof komt via afvaleters en reducenten terug in de bodem en gaat dan weer naar planten en dieren.",
            "meer": "Kring = rondje. Denk aan een rotonde: je blijft rondjes rijden, je komt nergens 'aan het eind'.",
            "fout": {
              "Hij wordt één keer gebruikt en raakt dan op": "Dan zou het geen kringloop zijn. Een dood blad 'raakt niet op': reducenten maken er stoffen van die de boom weer gebruikt.",
              "Hij gaat alleen van dieren naar planten": "Het gaat juist alle kanten op: van planten naar dieren, en via afvaleters en reducenten weer terug naar planten.",
              "Hij zakt in de bodem en komt nooit meer terug": "Planten nemen de nuttige stoffen uit de bodem juist weer op. Zo gaat de kringloop door."
            }
          },
          {
            "t": "mc",
            "q": "Hoe komt water uit de zee hoog in de lucht?",
            "o": [
              "Het zakt eerst in de bodem",
              "Het bevriest en stijgt op",
              "Het verdampt",
              "Vissen blazen het uit"
            ],
            "a": "Het verdampt",
            "w": "Water uit zeeën en oceanen verdampt en gaat zo de lucht in.",
            "meer": "Je ziet het ook na het zwemmen: je natte badpak droogt in de zon op, het water is verdampt.",
            "fout": {
              "Het zakt eerst in de bodem": "Water dat in de bodem zakt, gaat naar beneden, niet de lucht in. Omhoog gaat het door te verdampen.",
              "Het bevriest en stijgt op": "IJs is zwaar en zakt juist. Water gaat de lucht in door te verdampen.",
              "Vissen blazen het uit": "Vissen blazen geen zee de lucht in. Het water verdampt door de warmte."
            }
          },
          {
            "t": "mc",
            "q": "Wat zijn wolken volgens je begrippenlijst?",
            "o": [
              "rook van fabrieken",
              "koolstofdioxide",
              "kleine waterdruppels hoog in de lucht",
              "stof dat van de grond is opgewaaid"
            ],
            "a": "kleine waterdruppels hoog in de lucht",
            "w": "Verdampt water vormt hoog in de lucht kleine druppels: dat zijn wolken. Daarna gaat het regenen.",
            "meer": "Volgorde om te onthouden: verdampen, wolken, regen. Zo komt het water terug op aarde en in zee.",
            "fout": {
              "rook van fabrieken": "Rook is iets anders. Wolken bestaan uit water, daarom kan het eruit regenen.",
              "koolstofdioxide": "Koolstofdioxide is een onzichtbaar gas uit de koolstofkringloop. Wolken horen bij de waterkringloop.",
              "stof dat van de grond is opgewaaid": "Uit stof kan het niet regenen. Wolken zijn waterdruppels."
            }
          },
          {
            "t": "gap",
            "q": "Water uit zeeën en oceanen ___ en komt zo hoog in de lucht.",
            "a": "verdampt|verdampen",
            "soepel": true,
            "w": "Verdampen is de stap waarmee water van de zee de lucht in gaat.",
            "meer": "Na het verdampen worden het wolken en daarna regen."
          },
          {
            "t": "gap",
            "q": "In de lucht zit koolstof in het gas ___.",
            "a": "koolstofdioxide|co2|kooldioxide",
            "soepel": true,
            "w": "Koolstof zit in koolstofdioxide in de lucht en in energierijke stoffen zoals glucose.",
            "meer": "Koolstof-di-oxide: er zit koolstof in, dat zegt de naam al."
          },
          {
            "t": "mc",
            "q": "Planten maken energierijke stoffen zoals glucose. Hoe heet dat proces?",
            "o": [
              "verbranding",
              "fotosynthese",
              "verdamping",
              "accumulatie"
            ],
            "a": "fotosynthese",
            "w": "Bij fotosynthese maken planten energierijke stoffen, zoals glucose. Daarom zijn ze producenten.",
            "meer": "Foto = licht, synthese = maken: met licht iets maken.",
            "fout": {
              "verbranding": "Bij verbranding wordt voedsel juist gebruikt als energie, en daarbij komt koolstofdioxide vrij. Dat is het omgekeerde.",
              "verdamping": "Verdamping hoort bij de waterkringloop: water gaat de lucht in. Daarbij wordt geen glucose gemaakt.",
              "accumulatie": "Accumulatie is de ophoping van giftige stoffen in dieren aan het eind van een voedselketen. Dat heeft niets met glucose maken te maken."
            }
          },
          {
            "t": "mc",
            "q": "Wat gebeurt er bij verbranding in een organisme?",
            "o": [
              "Het maakt met licht glucose uit koolstofdioxide in de lucht",
              "Het slaat al het voedsel op als biomassa om te groeien",
              "Het gebruikt voedsel als energie en maakt koolstofdioxide",
              "Het organisme vliegt in brand"
            ],
            "a": "Het gebruikt voedsel als energie en maakt koolstofdioxide",
            "w": "Dieren én planten gebruiken een deel van hun voedsel als energie. Daarbij maken ze koolstofdioxide, die in de lucht komt.",
            "meer": "Verbranding zonder vlammen: je lichaam 'verbrandt' je ontbijt als je traint.",
            "fout": {
              "Het maakt met licht glucose uit koolstofdioxide in de lucht": "Dat is fotosynthese. Verbranding is het omgekeerde: glucose gebruiken, koolstofdioxide maken.",
              "Het slaat al het voedsel op als biomassa om te groeien": "Opslaan is groeien. Bij verbranding wordt het voedsel juist gebruikt als energie.",
              "Het organisme vliegt in brand": "Er komt geen vuur aan te pas. Het woord betekent hier: voedsel gebruiken als energie."
            }
          },
          {
            "t": "mc",
            "q": "Welke organismen zorgen dat stoffen uit dode resten weer in de bodem komen?",
            "o": [
              "producenten",
              "afvaleters en reducenten",
              "consumenten van de tweede orde",
              "alleen regenwormen"
            ],
            "a": "afvaleters en reducenten",
            "w": "Afvaleters eten dode resten, reducenten breken de resten nog verder af tot nuttige stoffen voor planten.",
            "meer": "Zij zijn de opruimploeg van de kringloop: zonder hen blijft alles liggen.",
            "fout": {
              "producenten": "Producenten (planten) nemen de stoffen uit de bodem juist op. Afbreken doen afvaleters en reducenten.",
              "consumenten van de tweede orde": "Die eten levende consumenten van de eerste orde, geen dode resten.",
              "alleen regenwormen": "Regenwormen zijn afvaleters, maar niet de enige: ook bacteriën en schimmels (reducenten) doen mee."
            }
          },
          {
            "t": "gap",
            "q": "Bacteriën en schimmels die resten nog verder afbreken tot nuttige stoffen, heten ___.",
            "a": "reducenten|reducent",
            "soepel": true,
            "w": "Reducenten reduceren (= maken minder) de resten tot stoffen die planten weer opnemen.",
            "meer": "Reduceren = minder maken. Reducenten maken de resten kleiner en kleiner."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: volg één koolstofdeeltje dat in de lucht begint.",
            "stappen": [
              {
                "toon": "1. Het zit in koolstofdioxide in de lucht.",
                "uitleg": "Dat is één van de twee plekken waar koolstof zit."
              },
              {
                "toon": "2. Gras neemt het op en maakt er glucose van.",
                "uitleg": "Dat is fotosynthese: nu zit het in een energierijke stof."
              },
              {
                "toon": "3. Een koe eet het gras en groeit ervan.",
                "uitleg": "Zo gaat de koolstof door naar de volgende schakel."
              },
              {
                "toon": "4. De koe verbrandt een deel als energie.",
                "uitleg": "Daarbij maakt ze koolstofdioxide: het deeltje is terug in de lucht."
              }
            ],
            "waarom": {
              "q": "Waarom is dit een kringloop?",
              "o": [
                "Omdat de koe het gras opeet",
                "Omdat het deeltje terugkomt in de lucht en opnieuw gebruikt kan worden",
                "Omdat het deeltje voor altijd in de koe blijft"
              ],
              "a": "Omdat het deeltje terugkomt in de lucht en opnieuw gebruikt kan worden"
            },
            "fout": {
              "Omdat de koe het gras opeet": "Eten alleen is een voedselketen. Een kringloop wordt het pas als de stof weer terugkomt bij het begin.",
              "Omdat het deeltje voor altijd in de koe blijft": "Dan zou het juist geen kringloop zijn. Door verbranding komt het weer in de lucht."
            },
            "w": "Het deeltje maakt een rondje: lucht, plant, dier, lucht. Dat rondje is de kringloop.",
            "meer": "Een voedselketen is een rechte lijn, een kringloop is een rondje."
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bijt in een appel. De koolstof in die appel zat een paar maanden geleden nog als <b>koolstofdioxide</b> in de lucht. De appelboom heeft het met <b>fotosynthese</b> omgezet in glucose. Als jij straks gaat zwemmen, <b>verbrand</b> je een deel van die appel en adem je de koolstof weer uit als koolstofdioxide.",
          "Denkfout: 'alleen dieren maken koolstofdioxide, planten doen alleen fotosynthese'. Nee: <b>dieren én planten</b> verbranden een deel van hun voedsel. Planten doen dus allebei.",
          "Tweede denkfout: 'als een dier doodgaat, is de kringloop klaar'. Nee: <b>afvaleters</b> en <b>reducenten</b> breken het dode dier af, en de stoffen gaan via de bodem weer naar planten."
        ],
        "regel": "Fotosynthese haalt koolstofdioxide uit de lucht; verbranding (bij dieren én planten) zet het er weer in.",
        "voorbeelden": [
          {
            "en": "lucht → appelboom → appel → jij → lucht",
            "nl": "De koolstof in je appel zat eerst in de lucht en gaat via jouw verbranding terug.",
            "let": "<b>let op</b>: jij bent ook een schakel in de koolstofkringloop."
          },
          {
            "en": "plas op het veld → weg na een zonnige dag",
            "nl": "Het water is verdampt: een stukje van de waterkringloop.",
            "let": "<b>let op</b>: het water is niet verdwenen, het zit nu in de lucht."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een eik staat in de zon. Wat doet hij met koolstofdioxide uit de lucht?",
            "o": [
              "Hij slaat het op in de bodem",
              "Niets, alleen dieren gebruiken koolstofdioxide",
              "Hij maakt er glucose van",
              "Hij blaast het meteen weer uit zonder er iets mee te doen"
            ],
            "a": "Hij maakt er glucose van",
            "w": "Bij fotosynthese maakt een plant van koolstofdioxide energierijke stoffen, zoals glucose.",
            "meer": "Zo komt de koolstof uit de lucht in het voedsel terecht: de eerste stap van de koolstofkringloop.",
            "fout": {
              "Hij slaat het op in de bodem": "Een boom stopt geen gas in de grond. Hij maakt er met fotosynthese energierijke stoffen van.",
              "Niets, alleen dieren gebruiken koolstofdioxide": "Juist planten gebruiken koolstofdioxide, bij fotosynthese. Dieren maken het vooral.",
              "Hij blaast het meteen weer uit zonder er iets mee te doen": "De boom gebruikt het om glucose te maken; daar groeit hij van."
            }
          },
          {
            "t": "mc",
            "q": "Storm zwemt een paar baantjes. Haar spieren gebruiken energie uit haar ontbijt. Welk gas komt daarbij vrij?",
            "o": [
              "koolstofdioxide",
              "zuurstof",
              "glucose",
              "waterdamp uit de zee"
            ],
            "a": "koolstofdioxide",
            "w": "Bij verbranding wordt voedsel gebruikt als energie, en daarbij ontstaat koolstofdioxide.",
            "meer": "Zo zet jij met elke baan een stukje koolstof terug in de lucht, waar planten het weer gebruiken.",
            "fout": {
              "zuurstof": "Zuurstof heb je juist nodig bij verbranding. Wat er vrijkomt en in de lucht terechtkomt is koolstofdioxide.",
              "glucose": "Glucose is het voedsel dat verbrand wordt, geen gas dat vrijkomt.",
              "waterdamp uit de zee": "Water uit de zee hoort bij de waterkringloop. Bij verbranding in je spieren gaat het om koolstofdioxide."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over planten klopt?",
            "o": [
              "Planten doen alleen fotosynthese, ze maken nooit koolstofdioxide",
              "Planten halen glucose uit de bodem",
              "Planten verbranden ook voedsel en maken koolstofdioxide",
              "Planten eten afvaleters"
            ],
            "a": "Planten verbranden ook voedsel en maken koolstofdioxide",
            "w": "Dieren én planten gebruiken een deel van hun voedsel als energie (verbranding). Daarbij maken ze koolstofdioxide.",
            "meer": "Een plant groeit, en groeien kost energie. Die energie haalt de plant uit verbranding van zijn eigen glucose.",
            "fout": {
              "Planten doen alleen fotosynthese, ze maken nooit koolstofdioxide": "Dat is een bekende denkfout. Ook planten verbranden voedsel, en maken daarbij koolstofdioxide.",
              "Planten halen glucose uit de bodem": "Planten maken glucose zelf met fotosynthese. Uit de bodem halen ze nuttige stoffen die reducenten hebben gemaakt.",
              "Planten eten afvaleters": "Planten eten geen dieren. Ze maken hun eigen voedsel: ze zijn producenten."
            }
          },
          {
            "t": "mc",
            "q": "Een konijn sterft in het bos. Wat gebeurt er met de stoffen in zijn lichaam?",
            "o": [
              "Die blijven voor altijd in de grond zitten",
              "Die verdwijnen helemaal",
              "Die veranderen in regenwater",
              "Ze worden afgebroken en gaan weer rond"
            ],
            "a": "Ze worden afgebroken en gaan weer rond",
            "w": "Afvaleters eten de resten, reducenten maken er nuttige stoffen van die planten weer opnemen.",
            "meer": "Doodgaan is niet het eind van de kringloop, het is gewoon de volgende stap.",
            "fout": {
              "Die blijven voor altijd in de grond zitten": "Planten nemen de nuttige stoffen uit de bodem weer op, dus ze blijven niet liggen.",
              "Die verdwijnen helemaal": "Stoffen verdwijnen niet; ze worden afgebroken en weer gebruikt. Dat is precies wat een kringloop is.",
              "Die veranderen in regenwater": "Regen hoort bij de waterkringloop. Het lijk wordt afgebroken door afvaleters en reducenten."
            }
          },
          {
            "t": "mc",
            "q": "Op een warme dag droogt een plas op het voetbalveld op. Welk stuk van de waterkringloop zie je?",
            "o": [
              "regenen",
              "verdampen",
              "wolken vormen",
              "afbreken door reducenten"
            ],
            "a": "verdampen",
            "w": "Het water gaat de lucht in: het verdampt.",
            "meer": "Daarna wordt het hoog in de lucht een wolk, en ooit valt het weer als regen op het veld.",
            "fout": {
              "regenen": "Bij regenen komt er water bij. Hier gaat het water juist weg, de lucht in.",
              "wolken vormen": "Wolken vormen zich pas hoog in de lucht. Wat je op het veld ziet, is het verdampen.",
              "afbreken door reducenten": "Reducenten breken dode resten af, geen water. Water verdampt gewoon door de warmte."
            }
          },
          {
            "t": "mc",
            "q": "Welke volgorde past bij de kringloop van water? (De pijl betekent hier: 'en daarna'.)",
            "o": [
              "zee → regen → verdampen → wolken → zee",
              "wolken → zee → verdampen → regen → wolken",
              "zee → verdampen → wolken → regen → zee",
              "regen → wolken → zee → verdampen → regen"
            ],
            "a": "zee → verdampen → wolken → regen → zee",
            "w": "Water verdampt uit zee, wordt hoog in de lucht wolken, valt als regen en komt terug in zee.",
            "meer": "Ezelsbrug: V-W-R: Verdampen, Wolken, Regen.",
            "fout": {
              "zee → regen → verdampen → wolken → zee": "Uit de zee kan het niet meteen regenen. Eerst moet het water verdampen en wolken vormen.",
              "wolken → zee → verdampen → regen → wolken": "Uit wolken komt eerst regen. Het water springt niet zomaar van de wolk naar de zee.",
              "regen → wolken → zee → verdampen → regen": "Regen valt uit wolken, niet andersom. Na de regen komt het water op aarde en in zee."
            }
          },
          {
            "t": "gap",
            "q": "Planten maken glucose door ___.",
            "a": "fotosynthese",
            "soepel": true,
            "w": "Fotosynthese is de manier waarop planten energierijke stoffen maken.",
            "meer": "Daarom staat een plant altijd als eerste schakel in een voedselketen."
          },
          {
            "t": "gap",
            "q": "Dieren en planten gebruiken een deel van hun voedsel als energie. Dat heet ___.",
            "a": "verbranding|verbranden",
            "soepel": true,
            "w": "Bij verbranding wordt voedsel gebruikt als energie; daarbij komt koolstofdioxide vrij.",
            "meer": "Verbranding is het tegenovergestelde van fotosynthese."
          },
          {
            "t": "mc",
            "q": "Op welke twee plekken zit koolstof in de kringloop van koolstof?",
            "o": [
              "alleen in koolstofdioxide in de lucht",
              "in water uit de zee en in de wolken hoog in de lucht",
              "in plastic en in metaal",
              "in koolstofdioxide en in energierijke stoffen"
            ],
            "a": "in koolstofdioxide en in energierijke stoffen",
            "w": "Koolstof zit in koolstofdioxide in de lucht én in energierijke stoffen zoals glucose.",
            "meer": "Fotosynthese brengt koolstof van de lucht naar het voedsel; verbranding brengt het terug.",
            "fout": {
              "alleen in koolstofdioxide in de lucht": "Dat is maar de helft. Koolstof zit ook in energierijke stoffen zoals glucose, dus in planten en dieren.",
              "in water uit de zee en in de wolken hoog in de lucht": "Dat hoort bij de waterkringloop, niet bij de koolstofkringloop.",
              "in plastic en in metaal": "Die doen niet mee in de kringloop: ze zijn niet-biologisch afbreekbaar."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Stel je een bos voor zonder bacteriën en schimmels. Elk jaar valt er een dikke laag bladeren, en die blijft gewoon liggen. Na een paar jaar loop je tot je knieën in het blad, en de bomen krijgen steeds minder nuttige stoffen uit de bodem. De kringloop loopt vast.",
          "Twee paren die je goed uit elkaar moet houden: <b>afvaleter</b> (een dier dat dode resten eet) tegenover <b>reducent</b> (een bacterie of schimmel die de resten nóg verder afbreekt tot stoffen voor planten). En <b>fotosynthese</b> (koolstofdioxide uit de lucht halen en glucose maken) tegenover <b>verbranding</b> (glucose gebruiken als energie en koolstofdioxide maken).",
          "Niet alles doet mee. Plastic, glas en metaal zijn <b>niet-biologisch afbreekbaar</b>: reducenten kunnen ze niet afbreken, dus ze komen nooit terug in de kringloop."
        ],
        "regel": "Zonder reducenten stopt de kringloop: dode resten blijven liggen en planten krijgen geen nuttige stoffen terug.",
        "voorbeelden": [
          {
            "en": "fotosynthese ⇄ verbranding",
            "nl": "Fotosynthese haalt koolstofdioxide uit de lucht, verbranding zet het terug.",
            "let": "<b>let op</b>: planten doen allebei, dieren alleen verbranding."
          },
          {
            "en": "pissebed ≠ schimmel",
            "nl": "De pissebed is een afvaleter (dier), de schimmel een reducent.",
            "let": "<b>let op</b>: afvaleters eten, reducenten breken nog verder af."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Stel: in een bos verdwijnen alle bacteriën en schimmels. Wat gebeurt er op den duur?",
            "o": [
              "Er verandert niets, want de afvaleters ruimen alles in hun eentje op",
              "Er blijven dode resten liggen; planten krijgen minder voeding",
              "De bomen groeien juist sneller",
              "Het gaat meer regenen"
            ],
            "a": "Er blijven dode resten liggen; planten krijgen minder voeding",
            "w": "Reducenten maken van resten nuttige stoffen voor planten. Zonder hen loopt de kringloop vast.",
            "meer": "Reducenten zijn de laatste stap van de opruimploeg: zij maken het 'klaar' voor de plant.",
            "fout": {
              "Er verandert niets, want de afvaleters ruimen alles in hun eentje op": "Afvaleters eten de resten, maar hun uitwerpselen en resten moeten nog verder afgebroken worden. Dat kunnen alleen reducenten.",
              "De bomen groeien juist sneller": "Bomen hebben de nuttige stoffen nodig die reducenten maken. Zonder reducenten groeien ze juist slechter.",
              "Het gaat meer regenen": "Regen hoort bij de waterkringloop en hangt niet af van bacteriën en schimmels."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een afvaleter en een reducent?",
            "o": [
              "Er is geen verschil, het zijn twee woorden voor hetzelfde",
              "Afvaleter: dier dat dode resten eet. Reducent: bacterie of schimmel",
              "Een afvaleter is een schimmel of bacterie; een reducent is een dier",
              "Een afvaleter eet levende planten; een reducent eet levende dieren"
            ],
            "a": "Afvaleter: dier dat dode resten eet. Reducent: bacterie of schimmel",
            "w": "Afvaleters (dieren, zoals insecten in de bodem) eten dode resten; reducenten (bacteriën en schimmels) breken de resten van de afvaleters nog verder af.",
            "meer": "Eerst de grove hap (afvaleter), dan het fijne werk (reducent).",
            "fout": {
              "Er is geen verschil, het zijn twee woorden voor hetzelfde": "Ze doen allebei mee aan opruimen, maar het zijn andere organismen met een andere taak.",
              "Een afvaleter is een schimmel of bacterie; een reducent is een dier": "Precies omgedraaid: afvaleters zijn dieren, reducenten zijn bacteriën en schimmels.",
              "Een afvaleter eet levende planten; een reducent eet levende dieren": "Allebei werken ze met dode resten. Wie levende planten eet, is een planteneter."
            }
          },
          {
            "t": "mc",
            "q": "Welk proces haalt koolstof UIT de lucht?",
            "o": [
              "verbranding bij dieren",
              "verbranding bij planten",
              "fotosynthese bij planten",
              "afbreken door afvaleters"
            ],
            "a": "fotosynthese bij planten",
            "w": "Bij fotosynthese gebruiken planten koolstofdioxide uit de lucht om glucose te maken.",
            "meer": "Alleen fotosynthese haalt koolstof uit de lucht. Verbranding (bij dieren én planten) zet het er weer in.",
            "fout": {
              "verbranding bij dieren": "Verbranding zet koolstofdioxide juist IN de lucht, het haalt het er niet uit.",
              "verbranding bij planten": "Planten verbranden ook, maar daarbij maken ze koolstofdioxide. Uit de lucht halen gebeurt bij fotosynthese.",
              "afbreken door afvaleters": "Afvaleters eten dode resten in de bodem; ze halen geen koolstof uit de lucht."
            }
          },
          {
            "t": "mc",
            "q": "Er ligt een plastic flesje in het bos. Doet het mee in de kringloop?",
            "o": [
              "Nee, plastic is niet-biologisch afbreekbaar",
              "Ja, reducenten breken het na een tijdje af",
              "Ja, planten nemen het plastic op met hun wortels",
              "Ja, het verdampt net als water"
            ],
            "a": "Nee, plastic is niet-biologisch afbreekbaar",
            "w": "Reducenten kunnen alleen dood plantaardig of dierlijk materiaal afbreken. Plastic is levenloos materiaal en blijft liggen.",
            "meer": "Plastic verdwijnt niet vanzelf. Zo ontstaat ook de plasticsoep in de oceanen.",
            "fout": {
              "Ja, reducenten breken het na een tijdje af": "Dat is de denkfout 'plastic verdwijnt vanzelf'. Reducenten kunnen plastic niet afbreken.",
              "Ja, planten nemen het plastic op met hun wortels": "Planten nemen nuttige stoffen op die reducenten maken. Plastic wordt nooit zo'n stof.",
              "Ja, het verdampt net als water": "Plastic verdampt niet. Het blijft gewoon liggen."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is rotten juist nuttig in de kringloop?",
            "o": [
              "Omdat het stinkt, zodat dieren en mensen uit de buurt blijven",
              "Omdat er dan niets meer van de resten overblijft",
              "Omdat reducenten er stoffen van maken die planten weer opnemen",
              "Het is niet nuttig, rotten is altijd slecht"
            ],
            "a": "Omdat reducenten er stoffen van maken die planten weer opnemen",
            "w": "Bij rotten breken reducenten resten af tot nuttige stoffen. Zo krijgen planten weer voeding uit de bodem.",
            "meer": "Een composthoop in de tuin is een rot-fabriek: van groente-afval maken reducenten voedsel voor planten.",
            "fout": {
              "Omdat het stinkt, zodat dieren en mensen uit de buurt blijven": "De geur is niet het nut. Het nuttige is dat de stoffen terugkomen voor planten.",
              "Omdat er dan niets meer van de resten overblijft": "De stoffen verdwijnen niet; ze worden omgezet in nuttige stoffen die weer gebruikt worden.",
              "Het is niet nuttig, rotten is altijd slecht": "Voor je boterham is het jammer, maar in de natuur is rotten juist nuttig werk van reducenten."
            }
          },
          {
            "t": "mc",
            "q": "Je tekent de koolstofkringloop. Welke pijl teken je van 'konijn' naar 'lucht'?",
            "o": [
              "fotosynthese: het konijn maakt glucose uit lucht",
              "verdamping: het konijn zweet water uit",
              "accumulatie: het konijn hoopt koolstof op",
              "verbranding: het konijn maakt koolstofdioxide"
            ],
            "a": "verbranding: het konijn maakt koolstofdioxide",
            "w": "Het konijn gebruikt voedsel als energie (verbranding) en zet daarbij koolstofdioxide in de lucht.",
            "meer": "Van een dier naar de lucht is altijd verbranding; van de lucht naar een plant is fotosynthese.",
            "fout": {
              "fotosynthese: het konijn maakt glucose uit lucht": "Dieren kunnen geen fotosynthese doen. Alleen planten maken glucose.",
              "verdamping: het konijn zweet water uit": "Dat hoort bij water, niet bij koolstof.",
              "accumulatie: het konijn hoopt koolstof op": "Accumulatie gaat over giftige stoffen die zich ophopen. En dan zou de koolstof juist niet naar de lucht gaan."
            }
          },
          {
            "t": "mc",
            "q": "Wat hebben de kringloop van water en de kringloop van koolstof gemeen?",
            "o": [
              "In allebei raakt de stof na één rondje op",
              "In allebei wordt een stof steeds opnieuw gebruikt",
              "In allebei maken reducenten wolken",
              "In allebei zijn planten nodig om de stof te laten verdampen"
            ],
            "a": "In allebei wordt een stof steeds opnieuw gebruikt",
            "w": "Dat is wat een kringloop is: een stof gaat rond en komt terug.",
            "meer": "Bij water heet het rondje verdampen, wolken, regen. Bij koolstof fotosynthese, eten, verbranding.",
            "fout": {
              "In allebei raakt de stof na één rondje op": "Dan zou het geen kringloop zijn. De stof wordt steeds opnieuw gebruikt.",
              "In allebei maken reducenten wolken": "Reducenten breken dode resten af. Wolken ontstaan doordat verdampt water hoog in de lucht druppels vormt.",
              "In allebei zijn planten nodig om de stof te laten verdampen": "Water uit de zee verdampt zonder planten. En koolstof verdampt niet, het gaat via verbranding de lucht in."
            }
          },
          {
            "t": "gap",
            "q": "Fotosynthese haalt koolstofdioxide uit de lucht; ___ zet het er weer in.",
            "a": "verbranding|verbranden",
            "soepel": true,
            "w": "Bij verbranding gebruiken dieren en planten voedsel als energie en maken ze koolstofdioxide.",
            "meer": "Twee tegenpolen die samen het rondje maken."
          },
          {
            "t": "open",
            "q": "Leg uit hoe koolstof uit de lucht via gras en een koe weer in de lucht terechtkomt.",
            "punten": 2,
            "modelantwoord": "Het gras neemt koolstofdioxide uit de lucht op en maakt er bij fotosynthese glucose (een energierijke stof) van. De koe eet het gras en verbrandt een deel van die stoffen voor energie. Daarbij maakt ze koolstofdioxide, die weer in de lucht komt.",
            "sleutelwoorden": [
              {
                "moet": [
                  "fotosynthe"
                ],
                "syn": [
                  "glucose",
                  "energierijk"
                ]
              },
              {
                "moet": [
                  "verbrand"
                ],
                "syn": [
                  "energie",
                  "koolstofdioxide",
                  "co2"
                ]
              }
            ],
            "rubric": [
              "Het gras maakt met fotosynthese energierijke stoffen (glucose) uit koolstofdioxide.",
              "De koe verbrandt een deel van het voedsel en maakt daarbij koolstofdioxide, die in de lucht komt."
            ],
            "w": "Fotosynthese brengt koolstof van de lucht naar het gras; verbranding in de koe brengt het terug.",
            "meer": "Twee woorden zijn genoeg om dit te onthouden: fotosynthese heen, verbranding terug."
          }
        ]
      }
    ]
  },
  {
    "id": "evenwicht",
    "emoji": "⚖️",
    "titel": "T6 · Op en neer",
    "kort": "Populatiegrootte is het aantal organismen van één soort in een gebied; bij biologisch evenwicht schommelen de populaties van meerdere soorten om een bepaalde waarde.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Stel je een duingebied voor met konijnen en vossen. Tel je alle konijnen in dat gebied, dan heb je de <b>populatiegrootte</b> van de konijnen: <b>het aantal organismen van dezelfde soort die in één bepaald gebied samenleven</b>.",
          "Elk jaar is dat aantal anders: in een goed jaar meer konijnen, in een slecht jaar minder. Toch blijft het rond hetzelfde aantal. Dat heet <b>biologisch evenwicht</b>: <b>toestand van een ecosysteem, waarbij de grootte van de populaties van soorten schommelen om een bepaalde waarde</b>.",
          "Denkfout: 'evenwicht betekent dat de aantallen precies gelijk blijven'. Nee! Denk aan een schommel: die gaat steeds heen en weer rond hetzelfde punt. Op en neer hoort erbij. En het gaat <b>altijd om meerdere soorten</b>, want die hebben invloed op elkaar, zoals vossen en konijnen."
        ],
        "regel": "Biologisch evenwicht: de aantallen schommelen om een bepaalde waarde; ze staan niet stil.",
        "voorbeelden": [
          {
            "en": "200 → 240 → 180 → 220 → 190 konijnen",
            "nl": "Vijf jaar tellen in hetzelfde duin: het aantal gaat op en neer rond ongeveer 200.",
            "let": "<b>let op</b>: dit IS evenwicht, ook al is het aantal nooit precies hetzelfde."
          },
          {
            "en": "40 kikkers in één sloot",
            "nl": "Dat is een populatiegrootte: één soort, één gebied.",
            "let": "<b>let op</b>: kikkers en salamanders samen tellen is géén populatiegrootte, dat zijn twee soorten."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Populatiegrootte is het ___ organismen van dezelfde soort die in één bepaald gebied samenleven.",
            "a": "aantal",
            "soepel": true,
            "w": "Populatiegrootte is een getal: hoeveel er zijn van één soort in één gebied.",
            "meer": "Grootte gaat hier over het aantal, niet over hoe groot de dieren zelf zijn."
          },
          {
            "t": "mc",
            "q": "Wat is populatiegrootte?",
            "o": [
              "hoe groot en zwaar de dieren in een gebied zijn",
              "het aantal organismen van dezelfde soort in één bepaald gebied",
              "het aantal verschillende soorten planten en dieren in één gebied",
              "de oppervlakte van het gebied waar een soort leeft"
            ],
            "a": "het aantal organismen van dezelfde soort in één bepaald gebied",
            "w": "Je telt hoeveel organismen van één soort er in één gebied samenleven.",
            "meer": "Populatie = groep van één soort in één gebied. Populatiegrootte = hoeveel dat er zijn.",
            "fout": {
              "hoe groot en zwaar de dieren in een gebied zijn": "Het woord 'grootte' gaat hier over het aantal dieren, niet over hun lengte of gewicht.",
              "het aantal verschillende soorten planten en dieren in één gebied": "Populatiegrootte gaat over één soort. Je telt de dieren, niet de soorten.",
              "de oppervlakte van het gebied waar een soort leeft": "Het gaat niet om hoe groot het gebied is, maar om hoeveel organismen erin leven."
            }
          },
          {
            "t": "mc",
            "q": "Je wilt de populatiegrootte van de mussen in Veghel weten. Wat tel je?",
            "o": [
              "alle vogels in Veghel",
              "alle mussen in Nederland",
              "alle mussen in Veghel",
              "alle nesten van alle vogels in Veghel"
            ],
            "a": "alle mussen in Veghel",
            "w": "Eén soort (mussen) in één gebied (Veghel).",
            "meer": "Check altijd twee dingen: dezelfde soort? hetzelfde gebied?",
            "fout": {
              "alle vogels in Veghel": "Dan tel je ook merels, duiven en meeuwen mee. Populatiegrootte gaat over één soort.",
              "alle mussen in Nederland": "Dat is een veel groter gebied. De mussen in Veghel zijn een eigen populatie.",
              "alle nesten van alle vogels in Veghel": "Nesten zijn geen organismen, en het gaat om één soort."
            }
          },
          {
            "t": "gap",
            "q": "Bij biologisch evenwicht ___ de grootte van de populaties om een bepaalde waarde.",
            "a": "schommelt|schommelen",
            "soepel": true,
            "w": "Schommelen: een beetje omhoog, een beetje omlaag, maar steeds rond hetzelfde getal.",
            "meer": "Denk aan een schommel: heen en weer, maar altijd rond hetzelfde punt."
          },
          {
            "t": "mc",
            "q": "Wat betekent biologisch evenwicht?",
            "o": [
              "De aantallen van alle soorten blijven precies gelijk",
              "Er zijn van elke soort evenveel organismen",
              "De populaties schommelen om een bepaalde waarde",
              "Er worden geen dieren meer geboren en er gaan er geen dood"
            ],
            "a": "De populaties schommelen om een bepaalde waarde",
            "w": "Bij evenwicht gaan de aantallen op en neer, maar steeds rond hetzelfde getal.",
            "meer": "Evenwicht in de natuur is beweeglijk, zoals een fietser die steeds een beetje bijstuurt.",
            "fout": {
              "De aantallen van alle soorten blijven precies gelijk": "Dit is de bekendste denkfout. In de natuur staan aantallen nooit stil; ze schommelen.",
              "Er zijn van elke soort evenveel organismen": "Er zijn bijna altijd veel meer konijnen dan vossen. Evenwicht betekent niet 'evenveel'.",
              "Er worden geen dieren meer geboren en er gaan er geen dood": "Er worden steeds dieren geboren en er gaan er steeds dood. Daardoor schommelt het aantal."
            }
          },
          {
            "t": "mc",
            "q": "Gaat biologisch evenwicht over één soort of over meer soorten?",
            "o": [
              "altijd over één soort tegelijk",
              "alleen over planten in een gebied",
              "alleen over de roofdieren bovenaan",
              "altijd over meerdere soorten"
            ],
            "a": "altijd over meerdere soorten",
            "w": "Soorten hebben invloed op elkaar, bijvoorbeeld vossen en konijnen. Daarom gaat het altijd om meerdere soorten.",
            "meer": "Je kunt de konijnen niet los zien van de vossen: als de één verandert, verandert de ander mee.",
            "fout": {
              "altijd over één soort tegelijk": "Eén soort tellen is populatiegrootte. Evenwicht gaat over meerdere soorten die elkaar beïnvloeden.",
              "alleen over planten in een gebied": "Het gaat over alle soorten in een ecosysteem, ook dieren, zoals vossen en konijnen.",
              "alleen over de roofdieren bovenaan": "Ook prooidieren, planten en andere soorten doen mee."
            }
          },
          {
            "t": "mc",
            "q": "Biologisch evenwicht is een toestand van een ...",
            "o": [
              "individu",
              "populatie",
              "ecosysteem",
              "cel"
            ],
            "a": "ecosysteem",
            "w": "Het gaat over alle populaties samen in een gebied, dus over het ecosysteem.",
            "meer": "Ecosysteem = levensgemeenschap + biotoop. Evenwicht gaat over hoe de populaties daarin samen schommelen.",
            "fout": {
              "individu": "Eén dier kan niet schommelen in aantal. Evenwicht gaat over aantallen van meerdere soorten.",
              "populatie": "Een populatie is één soort. Evenwicht gaat over meerdere populaties samen.",
              "cel": "Een cel is veel te klein: het gaat om aantallen organismen in een gebied."
            }
          },
          {
            "t": "gap",
            "q": "Biologisch evenwicht is een toestand van een ___.",
            "a": "ecosysteem|ecosystemen",
            "soepel": true,
            "w": "Evenwicht gaat over alle soorten in een gebied samen: het ecosysteem.",
            "meer": "Bijvoorbeeld een duin, een bos of een sloot."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: vossen en konijnen in een duin.",
            "stappen": [
              {
                "toon": "1. Er zijn veel konijnen.",
                "uitleg": "De vossen hebben veel voedsel en krijgen meer jongen."
              },
              {
                "toon": "2. Er komen meer vossen.",
                "uitleg": "Meer vossen eten meer konijnen."
              },
              {
                "toon": "3. Het aantal konijnen daalt.",
                "uitleg": "Nu hebben de vossen minder voedsel."
              },
              {
                "toon": "4. Het aantal vossen daalt.",
                "uitleg": "Met minder vossen kunnen de konijnen weer toenemen. En het begint opnieuw."
              }
            ],
            "waarom": {
              "q": "Waarom blijven de aantallen niet steeds stijgen?",
              "o": [
                "Omdat de vossen ooit allemaal uitsterven",
                "Omdat de soorten invloed op elkaar hebben",
                "Omdat konijnen geen jongen meer krijgen bij 200 stuks"
              ],
              "a": "Omdat de soorten invloed op elkaar hebben"
            },
            "fout": {
              "Omdat de vossen ooit allemaal uitsterven": "Dan zouden de konijnen juist blijven stijgen. De vossen nemen af en weer toe, ze sterven niet uit.",
              "Omdat konijnen geen jongen meer krijgen bij 200 stuks": "Er is geen vast getal waarbij konijnen stoppen. Het zijn de vossen (en het voedsel) die het aantal remmen."
            },
            "w": "Meer konijnen geeft meer vossen, en meer vossen geeft minder konijnen. Zo schommelen ze allebei.",
            "meer": "Zo zie je waarom evenwicht altijd over meerdere soorten gaat."
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bij een sloot naast het voetbalveld tel je 30 kikkers, 12 salamanders en 200 watervlooien. De populatiegrootte van de kikkers is 30, niet 242: je telt alleen <b>één soort</b> in <b>één gebied</b>.",
          "Om te zien of er evenwicht is, kijk je een paar jaar naar de aantallen. Gaan ze op en neer rond hetzelfde getal? Dan is er <b>evenwicht</b>. Dalen of stijgen ze steeds verder? Dan niet.",
          "Hoe het werkt bij vossen en konijnen: meer konijnen betekent meer voedsel voor de vossen, dus later meer vossen. Meer vossen eten meer konijnen, dus daarna minder konijnen. En dan krijgen de vossen het weer moeilijk."
        ],
        "regel": "Kijk naar meerdere jaren: schommelt het rond één waarde, dan is er evenwicht; daalt of stijgt het steeds, dan niet.",
        "voorbeelden": [
          {
            "en": "100, 115, 95, 110, 98 reeën",
            "nl": "Op en neer rond ongeveer 100: evenwicht.",
            "let": "<b>let op</b>: precies gelijk hoeft dus niet."
          },
          {
            "en": "100, 80, 60, 40, 20 reeën",
            "nl": "Steeds minder: geen evenwicht.",
            "let": "<b>let op</b>: hier is iets mis in het ecosysteem."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In een sloot tel je 30 kikkers, 12 salamanders en 200 watervlooien. Wat is de populatiegrootte van de kikkers?",
            "o": [
              "242",
              "30",
              "42",
              "3 soorten"
            ],
            "a": "30",
            "w": "Populatiegrootte = het aantal van één soort in één gebied. Kikkers: 30.",
            "meer": "Alleen de soort waar de vraag over gaat telt mee.",
            "fout": {
              "42": "Dan tel je kikkers en salamanders samen. Dat zijn twee verschillende soorten.",
              "242": "Dan tel je alle soorten bij elkaar op. Dat is geen populatiegrootte, maar (een deel van) de levensgemeenschap.",
              "3 soorten": "Populatiegrootte is een aantal organismen van één soort, niet een aantal soorten."
            }
          },
          {
            "t": "mc",
            "q": "Welke reeks laat het best biologisch evenwicht zien? (aantal reeën in een bos, 5 jaar)",
            "o": [
              "100, 100, 100, 100, 100",
              "100, 80, 60, 40, 20",
              "100, 115, 95, 110, 98",
              "100, 150, 220, 330, 500"
            ],
            "a": "100, 115, 95, 110, 98",
            "w": "Het aantal schommelt op en neer rond ongeveer 100. Dat is evenwicht.",
            "meer": "Evenwicht = schommelen om een waarde. Niet stilstaan, niet weglopen.",
            "fout": {
              "100, 100, 100, 100, 100": "Precies gelijk blijven gebeurt in de natuur niet. Evenwicht betekent juist schommelen.",
              "100, 80, 60, 40, 20": "Het aantal daalt steeds verder. Er is geen waarde waar het omheen schommelt.",
              "100, 150, 220, 330, 500": "Het aantal stijgt steeds verder. Dat is geen schommelen meer."
            }
          },
          {
            "t": "mc",
            "q": "In een duin zijn ineens heel veel konijnen. Wat verwacht je daarna bij de vossen?",
            "o": [
              "Het aantal vossen neemt af, want konijnen verdringen ze",
              "Het aantal vossen neemt toe, want ze hebben meer voedsel",
              "Er verandert niets, want vossen hebben niets met konijnen te maken",
              "De vossen gaan gras eten"
            ],
            "a": "Het aantal vossen neemt toe, want ze hebben meer voedsel",
            "w": "Meer prooi betekent meer voedsel, dus de vossen kunnen meer jongen grootbrengen.",
            "meer": "De vossen volgen de konijnen: eerst gaan de konijnen omhoog, daarna de vossen.",
            "fout": {
              "Het aantal vossen neemt af, want konijnen verdringen ze": "Meer konijnen is meer eten voor vossen. Dat helpt de vossen juist.",
              "Er verandert niets, want vossen hebben niets met konijnen te maken": "Soorten hebben invloed op elkaar. Meer voedsel verandert ook de vossenpopulatie.",
              "De vossen gaan gras eten": "Vossen eten geen gras; ze eten konijnen. En met meer konijnen is dat juist makkelijker."
            }
          },
          {
            "t": "mc",
            "q": "Er zijn heel veel vossen in het duin. Wat gebeurt er daarna met de konijnen?",
            "o": [
              "Ze nemen toe",
              "Ze blijven precies gelijk, want er is evenwicht",
              "Ze gaan vossen opeten",
              "Ze nemen af, want er worden er meer opgegeten"
            ],
            "a": "Ze nemen af, want er worden er meer opgegeten",
            "w": "Meer vossen eten meer konijnen, dus het aantal konijnen daalt.",
            "meer": "Daarna hebben de vossen minder voedsel en daalt hun aantal ook weer.",
            "fout": {
              "Ze nemen toe": "Meer vossen betekent meer jagers. Dan worden er juist meer konijnen opgegeten.",
              "Ze blijven precies gelijk, want er is evenwicht": "Soorten beïnvloeden elkaar. Met meer vossen verandert het aantal konijnen zeker.",
              "Ze gaan vossen opeten": "Konijnen zijn planteneters, ze eten geen vossen."
            }
          },
          {
            "t": "mc",
            "q": "Een jager schiet bijna alle vossen in een gebied dood. Wat gebeurt er waarschijnlijk eerst met de konijnen?",
            "o": [
              "Ze nemen sterk toe",
              "Ze sterven ook uit",
              "Er verandert niets",
              "Ze nemen af"
            ],
            "a": "Ze nemen sterk toe",
            "w": "Er zijn bijna geen vossen meer die konijnen eten, dus het aantal konijnen groeit hard.",
            "meer": "Zo zie je dat de vossen het aantal konijnen 'remmen'. Haal je de rem weg, dan schiet het omhoog.",
            "fout": {
              "Ze sterven ook uit": "De konijnen hebben de vossen niet nodig om te leven. Zonder vossen worden er juist minder opgegeten.",
              "Er verandert niets": "Vossen en konijnen hebben invloed op elkaar. Zonder vossen verandert er veel voor de konijnen.",
              "Ze nemen af": "Er zijn minder jagers, dus minder konijnen worden opgegeten. Ze nemen juist toe."
            }
          },
          {
            "t": "mc",
            "q": "Iemand zegt: 'Het aantal meeuwen op het strand schommelt elk jaar, dus is er géén evenwicht.' Klopt dat?",
            "o": [
              "Ja, bij evenwicht blijven de aantallen gelijk",
              "Ja, evenwicht kan alleen bij planten",
              "Nee, schommelen hoort juist bij evenwicht",
              "Nee, want meeuwen tellen niet mee"
            ],
            "a": "Nee, schommelen hoort juist bij evenwicht",
            "w": "Evenwicht betekent dat aantallen schommelen om een waarde. Schommelen is dus geen teken dat het mis is.",
            "meer": "Pas als het aantal steeds verder daalt of stijgt, is het evenwicht verstoord.",
            "fout": {
              "Ja, bij evenwicht blijven de aantallen gelijk": "Dat is precies de denkfout. In de natuur schommelen aantallen altijd een beetje.",
              "Ja, evenwicht kan alleen bij planten": "Evenwicht geldt voor alle soorten in een ecosysteem, ook voor vogels.",
              "Nee, want meeuwen tellen niet mee": "Meeuwen horen gewoon bij het ecosysteem en tellen dus wel mee."
            }
          },
          {
            "t": "mc",
            "q": "Welke van deze is GEEN populatiegrootte?",
            "o": [
              "het aantal karpers in één vijver",
              "het aantal dieren in één weiland",
              "het aantal eiken in één bos",
              "het aantal merels in één park"
            ],
            "a": "het aantal dieren in één weiland",
            "w": "'Dieren' zijn allerlei soorten bij elkaar. Populatiegrootte gaat over één soort.",
            "meer": "Let op het woord: karpers, eiken en merels zijn één soort; 'dieren' niet.",
            "fout": {
              "het aantal karpers in één vijver": "Eén soort (karper), één gebied (vijver): dat is wel een populatiegrootte.",
              "het aantal eiken in één bos": "Ook planten hebben een populatiegrootte: één soort (eik) in één gebied.",
              "het aantal merels in één park": "Eén soort (merel), één gebied (park): wel een populatiegrootte."
            }
          },
          {
            "t": "gap",
            "q": "Het aantal organismen van dezelfde soort in één bepaald gebied heet de ___.",
            "a": "populatiegrootte",
            "soepel": true,
            "w": "Populatiegrootte: hoeveel organismen van één soort er in een gebied samenleven.",
            "meer": "Populatie (de groep) + grootte (het aantal)."
          },
          {
            "t": "mc",
            "q": "Waarom gaat biologisch evenwicht altijd over meerdere soorten?",
            "o": [
              "Omdat één soort altijd uitsterft",
              "Omdat soorten invloed op elkaar hebben",
              "Omdat je anders niets kunt tellen",
              "Omdat elke soort precies even groot moet zijn"
            ],
            "a": "Omdat soorten invloed op elkaar hebben",
            "w": "Het aantal vossen hangt af van de konijnen, en andersom. Daarom bekijk je ze samen.",
            "meer": "Het is een wip: gaat de één omhoog, dan beweegt de ander mee.",
            "fout": {
              "Omdat één soort altijd uitsterft": "Bij evenwicht sterft er juist geen soort uit; de aantallen schommelen.",
              "Omdat je anders niets kunt tellen": "Je kunt prima één soort tellen; dat is populatiegrootte. Evenwicht gaat over hoe soorten elkaar beïnvloeden.",
              "Omdat elke soort precies even groot moet zijn": "Soorten hoeven niet even groot te zijn. Er zijn bijna altijd meer prooidieren dan roofdieren."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Een ziekte doodt bijna alle konijnen in een duin. De vossen hebben dan opeens weinig te eten, en ook hun aantal daalt. Het evenwicht is <b>verstoord</b>. Evenwicht is dus geen garantie: het kan uit balans raken.",
          "Verwarbare paren: <b>populatie</b> (de groep zelf: alle konijnen in het duin) tegenover <b>populatiegrootte</b> (hoeveel het er zijn: 200). En <b>evenwicht</b> (schommelen rond een waarde) tegenover <b>evenveel</b>: in een duin met evenwicht zijn er gewoon veel meer konijnen dan vossen.",
          "Eén jaar wat meer of minder zegt nog niets. Pas als je over meerdere jaren ziet dat het aantal steeds verder wegloopt, is het evenwicht verstoord."
        ],
        "regel": "Evenwicht is niet 'evenveel' en niet 'stilstaan', maar schommelen rond een waarde; een grote verandering kan het verstoren.",
        "voorbeelden": [
          {
            "en": "populatie ≠ populatiegrootte",
            "nl": "De konijnen in het duin zijn de populatie; 200 is de populatiegrootte.",
            "let": "<b>let op</b>: de één is een groep, de ander een getal."
          },
          {
            "en": "300, 150, 60, 10 hazen",
            "nl": "Steeds minder: het evenwicht is verstoord.",
            "let": "<b>let op</b>: vergelijk altijd meerdere jaren."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In een duin met biologisch evenwicht leven vossen en konijnen. Welke uitspraak klopt?",
            "o": [
              "Er zijn evenveel vossen als konijnen",
              "Het aantal vossen en het aantal konijnen staat stil",
              "Allebei schommelen ze rond een eigen waarde",
              "Er zijn altijd meer vossen dan konijnen"
            ],
            "a": "Allebei schommelen ze rond een eigen waarde",
            "w": "Elke populatie schommelt rond zijn eigen waarde, bijvoorbeeld konijnen rond 200 en vossen rond 10.",
            "meer": "Evenwicht is niet 'evenveel'. Het woord gaat over de balans, niet over gelijke aantallen.",
            "fout": {
              "Er zijn evenveel vossen als konijnen": "Evenwicht betekent niet evenveel. Er zijn juist veel meer konijnen nodig om de vossen te voeden.",
              "Het aantal vossen en het aantal konijnen staat stil": "Bij evenwicht schommelen de aantallen; ze staan nooit stil.",
              "Er zijn altijd meer vossen dan konijnen": "Dan zouden de vossen veel te weinig voedsel hebben. Meestal zijn er veel meer prooidieren dan roofdieren."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een populatie en de populatiegrootte?",
            "o": [
              "Populatie is de groep; populatiegrootte is het aantal",
              "Er is geen verschil, het zijn twee woorden voor hetzelfde",
              "Een populatie is één dier; populatiegrootte is de groep",
              "Populatiegrootte gaat over meerdere soorten, populatie over één"
            ],
            "a": "Populatie is de groep; populatiegrootte is het aantal",
            "w": "De populatie is de groep organismen van één soort in een gebied; de populatiegrootte is het aantal.",
            "meer": "Je voetbalteam is de groep; 'we zijn met 15' is de grootte.",
            "fout": {
              "Er is geen verschil, het zijn twee woorden voor hetzelfde": "Het lijkt op elkaar, maar de één is een groep en de ander een getal.",
              "Een populatie is één dier; populatiegrootte is de groep": "Eén dier is een individu. Een populatie is al een groep.",
              "Populatiegrootte gaat over meerdere soorten, populatie over één": "Allebei gaan over één soort. Meerdere soorten samen is een levensgemeenschap."
            }
          },
          {
            "t": "mc",
            "q": "Een ziekte doodt bijna alle konijnen in een duin. Wat gebeurt er daarna waarschijnlijk met de vossen?",
            "o": [
              "Ze nemen toe",
              "Ze nemen af, want ze hebben minder voedsel",
              "Niets, het evenwicht zorgt er wel voor dat alles hetzelfde blijft",
              "Ze gaan voortaan gras eten"
            ],
            "a": "Ze nemen af, want ze hebben minder voedsel",
            "w": "De vossen eten konijnen. Met bijna geen konijnen hebben ze te weinig voedsel en daalt hun aantal.",
            "meer": "Een verandering bij de ene soort werkt door bij de andere: daarom gaat evenwicht over meerdere soorten.",
            "fout": {
              "Ze nemen toe": "Minder prooi is minder voedsel. Dat maakt het voor vossen juist moeilijker.",
              "Niets, het evenwicht zorgt er wel voor dat alles hetzelfde blijft": "Evenwicht is geen garantie. Een grote verandering, zoals een ziekte, kan het verstoren.",
              "Ze gaan voortaan gras eten": "Vossen schakelen niet over op gras. Ze krijgen gewoon minder te eten."
            }
          },
          {
            "t": "mc",
            "q": "Een boer zegt: 'Er zijn dit jaar wat meer muizen dan vorig jaar. Het evenwicht is weg!' Wat vind jij?",
            "o": [
              "Hij heeft gelijk, het aantal moet precies gelijk blijven",
              "Hij heeft gelijk, evenwicht gaat over één soort",
              "Niet per se: één jaar meer muizen kan gewoon schommelen zijn",
              "Evenwicht bestaat alleen in de zee"
            ],
            "a": "Niet per se: één jaar meer muizen kan gewoon schommelen zijn",
            "w": "Op en neer hoort bij evenwicht. Je moet meerdere jaren bekijken om te zien of het echt wegloopt.",
            "meer": "Eén wedstrijd verliezen betekent ook niet dat je team slecht is. Kijk naar het hele seizoen.",
            "fout": {
              "Hij heeft gelijk, het aantal moet precies gelijk blijven": "Dat is de denkfout: evenwicht betekent schommelen, niet stilstaan.",
              "Hij heeft gelijk, evenwicht gaat over één soort": "Evenwicht gaat juist over meerdere soorten. En één jaar meer muizen zegt nog niets.",
              "Evenwicht bestaat alleen in de zee": "Evenwicht geldt voor elk ecosysteem: een weiland, een bos, een sloot of de zee."
            }
          },
          {
            "t": "mc",
            "q": "Welke volgorde klopt bij vossen en konijnen? (De pijl betekent hier: 'en daarna'.)",
            "o": [
              "veel konijnen → minder vossen → meer konijnen → meer vossen",
              "veel vossen → meer konijnen → meer vossen → minder konijnen",
              "minder konijnen → meer vossen → meer konijnen → minder vossen",
              "veel konijnen → meer vossen → minder konijnen → minder vossen"
            ],
            "a": "veel konijnen → meer vossen → minder konijnen → minder vossen",
            "w": "Veel voedsel geeft meer vossen; meer vossen eten meer konijnen; minder konijnen geeft weer minder vossen.",
            "meer": "De vossen lopen steeds een stapje achter de konijnen aan.",
            "fout": {
              "veel konijnen → minder vossen → meer konijnen → meer vossen": "Bij veel konijnen hebben de vossen juist meer voedsel, dus komen er meer vossen, niet minder.",
              "veel vossen → meer konijnen → meer vossen → minder konijnen": "Veel vossen eten veel konijnen op. Dan komen er juist minder konijnen.",
              "minder konijnen → meer vossen → meer konijnen → minder vossen": "Bij minder konijnen hebben de vossen minder voedsel, dus komen er niet meer vossen."
            }
          },
          {
            "t": "mc",
            "q": "Welke situatie laat GEEN biologisch evenwicht zien? (aantallen in vier jaar)",
            "o": [
              "reeën: 80, 95, 85, 90",
              "muizen: 500, 620, 480, 560",
              "hazen: 300, 150, 60, 10",
              "uilen: 6, 8, 7, 6"
            ],
            "a": "hazen: 300, 150, 60, 10",
            "w": "Bij de hazen daalt het aantal steeds verder; er is geen waarde waar het omheen schommelt.",
            "meer": "Schommelen = op en neer. Steeds verder omlaag = verstoord.",
            "fout": {
              "reeën: 80, 95, 85, 90": "Dit gaat op en neer rond ongeveer 87. Dat is evenwicht.",
              "muizen: 500, 620, 480, 560": "Grote sprongen, maar steeds rond ongeveer 540. Ook dat is schommelen.",
              "uilen: 6, 8, 7, 6": "Kleine aantallen, maar ze schommelen netjes rond 7. Dat is evenwicht."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is het aantal konijnen bij evenwicht nooit elk jaar precies hetzelfde?",
            "o": [
              "Omdat je nooit alle konijnen in een duin precies kunt tellen",
              "Omdat geboorte en sterfte elk jaar anders zijn",
              "Omdat er dan geen vossen meer zijn",
              "Omdat evenwicht alleen bij planten geldt"
            ],
            "a": "Omdat geboorte en sterfte elk jaar anders zijn",
            "w": "Geboorte en sterfte (bijvoorbeeld door vossen) verschillen elk jaar. Daardoor schommelt het aantal.",
            "meer": "Een warm voorjaar, een strenge winter, een jaar met veel vossen: elk jaar is anders.",
            "fout": {
              "Omdat je nooit alle konijnen in een duin precies kunt tellen": "Ook als je perfect telt, verschilt het aantal per jaar. Het schommelen is echt.",
              "Omdat er dan geen vossen meer zijn": "Bij evenwicht zijn er gewoon vossen. Juist die zorgen mee voor het op en neer.",
              "Omdat evenwicht alleen bij planten geldt": "Evenwicht geldt voor alle soorten in het ecosysteem, ook konijnen."
            }
          },
          {
            "t": "gap",
            "q": "Biologisch evenwicht gaat altijd over ___ soorten.",
            "a": "meerdere|meer|verschillende",
            "soepel": true,
            "w": "Soorten hebben invloed op elkaar, dus je bekijkt ze samen.",
            "meer": "Eén soort tellen is populatiegrootte; meerdere soorten in balans is evenwicht."
          },
          {
            "t": "open",
            "q": "Leg uit waarom het aantal konijnen in een duin met vossen niet eindeloos blijft groeien.",
            "punten": 2,
            "modelantwoord": "Als er meer konijnen komen, hebben de vossen meer voedsel en komen er meer vossen. Die eten meer konijnen op, waardoor het aantal konijnen weer daalt. Zo schommelt het aantal konijnen om een bepaalde waarde.",
            "sleutelwoorden": [
              {
                "moet": [
                  "vos"
                ],
                "syn": [
                  "roofdier"
                ]
              },
              {
                "moet": [
                  "daal",
                  "minder",
                  "afne"
                ],
                "syn": [
                  "opgegeten",
                  "opeten"
                ]
              }
            ],
            "rubric": [
              "Meer konijnen leidt tot meer vossen (meer voedsel).",
              "Meer vossen eten meer konijnen, dus het aantal konijnen daalt weer (schommelt)."
            ],
            "w": "De vossen remmen de konijnen: hoe meer konijnen, hoe meer vossen, en die eten er weer meer op.",
            "meer": "Dit is de kern van biologisch evenwicht: soorten houden elkaar in toom."
          }
        ]
      }
    ]
  },
  {
    "id": "groepsgedrag",
    "emoji": "🐺",
    "titel": "T6 · Leven in de groep",
    "kort": "Dieren hebben met elkaar te maken via concurrentie (tussen soorten), samenwerking (binnen een populatie), rangorde, territorium en paarvorming.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Kijk naar je eigen voetbalteam: je werkt samen om te winnen, er is een aanvoerder naar wie de rest luistert, en jij verdedigt als keeper je eigen doel. Dieren doen zulke dingen ook.",
          "<b>Concurrentie</b>: <b>een relatie tussen soorten die gericht is op competitie/concurrentie</b>, bijvoorbeeld omdat ze hetzelfde voedsel eten of in hetzelfde gebied willen leven. <b>Samenwerking</b>: <b>wanneer de individuen binnen een populatie hun vaardigheden bundelen om een gemeenschappelijk doel te bereiken</b>, zoals wolven die samen jagen.",
          "<b>Rangorde</b>: <b>dieren weten hun plaats in de groep: één dier is de baas, daar luistert de rest naar</b>. <b>Territorium</b>: <b>een leefgebied dat verdedigd wordt tegen anderen, meestal soortgenoten</b>. <b>Paarvorming</b>: <b>het vormen van een paar (man en vrouw) om voor nakomelingen te zorgen</b>.",
          "Denkfout: 'een rangorde geeft veel ruzie'. Het is juist andersom: omdat iedereen zijn plaats weet, is er <b>zelden gedoe</b>."
        ],
        "regel": "Concurrentie: soorten tegen elkaar. Samenwerking: binnen een populatie samen. Rangorde: wie is de baas. Territorium: eigen gebied verdedigen. Paarvorming: man en vrouw zorgen samen voor jongen.",
        "voorbeelden": [
          {
            "en": "wolven jagen samen op een hert",
            "nl": "Samenwerking: individuen van één populatie bundelen hun krachten.",
            "let": "<b>let op</b>: samenwerking gaat binnen één populatie."
          },
          {
            "en": "kip A eet altijd als eerste",
            "nl": "Rangorde (bij kippen heet dat de pikorde).",
            "let": "<b>let op</b>: daardoor is er juist weinig gedoe."
          },
          {
            "en": "een merel jaagt andere merels uit zijn tuin",
            "nl": "Territorium: een gebied verdedigen tegen soortgenoten.",
            "let": "<b>let op</b>: meestal tegen dieren van dezelfde soort."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Concurrentie is een relatie tussen ___ die gericht is op competitie.",
            "a": "soorten|soort|verschillende soorten",
            "soepel": true,
            "w": "Volgens je begrippenlijst gaat concurrentie tussen soorten, bijvoorbeeld als ze hetzelfde voedsel eten.",
            "meer": "Concurrentie = tussen soorten. Samenwerking = binnen een populatie."
          },
          {
            "t": "gap",
            "q": "Een leefgebied dat verdedigd wordt tegen anderen, meestal soortgenoten, heet een ___.",
            "a": "territorium|territoria",
            "soepel": true,
            "w": "Een territorium is een eigen gebied dat het dier verdedigt.",
            "meer": "Als keeper verdedig jij je eigen doel: dat is jouw 'territorium'."
          },
          {
            "t": "gap",
            "q": "Het vormen van een paar (man en vrouw) om voor nakomelingen te zorgen heet ___.",
            "a": "paarvorming",
            "soepel": true,
            "w": "Bij paarvorming zorgen een mannetje en een vrouwtje samen voor hun jongen.",
            "meer": "Paar + vorming: een paar vormen."
          },
          {
            "t": "gap",
            "q": "Bij een ___ weten dieren hun plaats in de groep: één dier is de baas en de rest luistert.",
            "a": "rangorde|pikorde",
            "soepel": true,
            "w": "Rangorde: iedereen weet wie de baas is en wie waar staat.",
            "meer": "Rang = plaats, orde = volgorde: de volgorde van plaatsen in de groep."
          },
          {
            "t": "mc",
            "q": "Wat is samenwerking volgens je begrippenlijst?",
            "o": [
              "Twee verschillende soorten die hetzelfde voedsel willen hebben",
              "Een dier dat zijn gebied verdedigt",
              "Dieren van één populatie werken samen aan één doel",
              "Eén dier is de baas en de rest luistert"
            ],
            "a": "Dieren van één populatie werken samen aan één doel",
            "w": "Bij samenwerking helpen dieren van één populatie elkaar om samen iets te bereiken, zoals samen jagen.",
            "meer": "Net als een voetbalteam: ieder heeft een eigen taak, maar het doel is samen.",
            "fout": {
              "Twee verschillende soorten die hetzelfde voedsel willen hebben": "Dat is concurrentie: soorten die tegen elkaar strijden.",
              "Een dier dat zijn gebied verdedigt": "Dat is een territorium.",
              "Eén dier is de baas en de rest luistert": "Dat is rangorde."
            }
          },
          {
            "t": "mc",
            "q": "Wat betekent rangorde?",
            "o": [
              "Dieren staan op volgorde van grootte",
              "Dieren vechten de hele dag met elkaar om de beste plek",
              "Dieren weten hun plaats in de groep: één is de baas",
              "Het oudste dier eet altijd als eerste"
            ],
            "a": "Dieren weten hun plaats in de groep: één is de baas",
            "w": "Bij een rangorde weet elk dier zijn plaats; één dier is de baas en de rest luistert naar hem of haar.",
            "meer": "Bij kippen heet dit de pikorde.",
            "fout": {
              "Dieren staan op volgorde van grootte": "Het gaat niet om lengte of gewicht, maar om wie de baas is in de groep.",
              "Dieren vechten de hele dag met elkaar om de beste plek": "Juist niet: omdat iedereen zijn plaats weet, is er zelden gedoe.",
              "Het oudste dier eet altijd als eerste": "Het gaat niet om leeftijd, maar om de plaats in de groep. De baas hoeft niet de oudste te zijn."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het gevolg van een rangorde in een groep?",
            "o": [
              "Er is vaak ruzie",
              "Iedereen is evenveel de baas",
              "De groep valt uit elkaar",
              "Er is zelden gedoe"
            ],
            "a": "Er is zelden gedoe",
            "w": "Iedereen weet wie de baas is, dus er hoeft niet steeds gevochten te worden.",
            "meer": "Net als in een team met een duidelijke aanvoerder: dan is er minder discussie.",
            "fout": {
              "Er is vaak ruzie": "Dat is de denkfout. Een rangorde zorgt juist voor rust.",
              "Iedereen is evenveel de baas": "Bij een rangorde is er juist één baas; de rest weet zijn plaats.",
              "De groep valt uit elkaar": "Een rangorde houdt de groep juist rustig bij elkaar."
            }
          },
          {
            "t": "mc",
            "q": "Tegen wie verdedigt een dier zijn territorium meestal?",
            "o": [
              "tegen planten",
              "tegen soortgenoten",
              "tegen reducenten",
              "alleen tegen roofdieren"
            ],
            "a": "tegen soortgenoten",
            "w": "Een territorium wordt verdedigd tegen anderen, meestal dieren van dezelfde soort.",
            "meer": "Soortgenoten willen precies hetzelfde: hetzelfde voedsel, dezelfde nestplekken. Daarom zijn zij de grootste bedreiging.",
            "fout": {
              "tegen planten": "Planten komen een territorium niet 'binnenvallen'. Het gaat om andere dieren, meestal soortgenoten.",
              "tegen reducenten": "Bacteriën en schimmels kun je niet wegjagen. Een territorium verdedig je tegen soortgenoten.",
              "alleen tegen roofdieren": "Een merel jaagt vooral andere merels weg. Meestal gaat het om soortgenoten."
            }
          },
          {
            "t": "mc",
            "q": "Waarom heeft een dier een territorium?",
            "o": [
              "Om zoveel mogelijk andere soorten op te eten",
              "Zodat voedsel zoeken, nestbouw en paren beter lukken",
              "Zodat het dier nooit meer hoeft te verhuizen of te reizen",
              "Om de baas te worden over een groep soortgenoten"
            ],
            "a": "Zodat voedsel zoeken, nestbouw en paren beter lukken",
            "w": "In een eigen gebied kunnen levensfuncties als voedsel zoeken, nestbouw en paring beter uitgevoerd worden.",
            "meer": "Een eigen plek zonder concurrenten van je eigen soort: rust om te eten en jongen groot te brengen.",
            "fout": {
              "Om zoveel mogelijk andere soorten op te eten": "Een territorium gaat niet over andere soorten opeten, maar over een eigen leefgebied.",
              "Zodat het dier nooit meer hoeft te verhuizen of te reizen": "Daar gaat het niet om. Het gaat om ruimte voor voedsel, nest en paring.",
              "Om de baas te worden over een groep soortgenoten": "Baas zijn over een groep is rangorde. Een territorium gaat over een gebied."
            }
          },
          {
            "t": "mc",
            "q": "Waarvoor dient paarvorming?",
            "o": [
              "om samen op prooi te jagen",
              "om samen voor nakomelingen te zorgen",
              "om een andere soort weg te jagen",
              "om de baas van de groep te worden"
            ],
            "a": "om samen voor nakomelingen te zorgen",
            "w": "Bij paarvorming vormen een mannetje en een vrouwtje een paar om voor hun jongen te zorgen.",
            "meer": "Bij zwanen blijft het paar vaak jaren bij elkaar.",
            "fout": {
              "om samen op prooi te jagen": "Samen jagen binnen een populatie is samenwerking.",
              "om een andere soort weg te jagen": "Dat heeft niets met paarvorming te maken. Het gaat om samen jongen grootbrengen.",
              "om de baas van de groep te worden": "Baas worden hoort bij rangorde."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bij een nieuwe situatie stel je jezelf drie vragen. <b>1. Gaat het om één soort of om twee soorten?</b> Twee soorten die strijden om voedsel of ruimte: <b>concurrentie</b>.",
          "<b>2. Werken ze samen of zijn ze tegen elkaar?</b> Dieren van één populatie die samen een doel hebben: <b>samenwerking</b>.",
          "<b>3. Waar gaat het om?</b> Om wie de baas is: <b>rangorde</b>. Om een gebied: <b>territorium</b>. Om samen jongen grootbrengen: <b>paarvorming</b>."
        ],
        "regel": "Hoeveel soorten? Samen of tegen elkaar? En gaat het om de baas, een gebied of jongen?",
        "voorbeelden": [
          {
            "en": "leeuwen en hyena's jagen op dezelfde zebra's",
            "nl": "Twee soorten, zelfde voedsel: concurrentie.",
            "let": "<b>let op</b>: concurrentie = tussen soorten."
          },
          {
            "en": "mieren slepen samen een kever naar het nest",
            "nl": "Eén populatie, samen een doel: samenwerking.",
            "let": "<b>let op</b>: samen = binnen één populatie."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Leeuwen en hyena's jagen allebei op zebra's in hetzelfde gebied. Wat is dit?",
            "o": [
              "samenwerking",
              "concurrentie",
              "rangorde",
              "paarvorming"
            ],
            "a": "concurrentie",
            "w": "Twee soorten die hetzelfde voedsel willen: concurrentie.",
            "meer": "Elke zebra die de leeuw vangt, kan de hyena niet meer vangen.",
            "fout": {
              "samenwerking": "Ze jagen niet samen; ze zitten elkaar juist in de weg. En samenwerking is binnen één populatie.",
              "rangorde": "Rangorde gaat over wie de baas is binnen een groep, niet over twee soorten die hetzelfde voedsel willen.",
              "paarvorming": "Paarvorming is een mannetje en een vrouwtje die samen voor jongen zorgen."
            }
          },
          {
            "t": "mc",
            "q": "Een groep wolven omsingelt samen een hert. Wat is dit?",
            "o": [
              "concurrentie",
              "territorium",
              "samenwerking",
              "paarvorming"
            ],
            "a": "samenwerking",
            "w": "Wolven uit één roedel bundelen hun krachten om samen een prooi te vangen.",
            "meer": "Alleen krijgt een wolf een hert niet zo snel klein; samen wel.",
            "fout": {
              "concurrentie": "Ze werken niet tegen elkaar. En concurrentie is tussen soorten.",
              "territorium": "Het gaat hier om samen jagen, niet om een gebied verdedigen.",
              "paarvorming": "Het gaat om een hele groep die samen jaagt, niet om een paar dat jongen grootbrengt."
            }
          },
          {
            "t": "mc",
            "q": "Een merel zingt luid en jaagt andere merels uit zijn tuin. Wat is dit?",
            "o": [
              "territorium",
              "rangorde",
              "concurrentie",
              "samenwerking"
            ],
            "a": "territorium",
            "w": "De merel verdedigt een eigen gebied tegen soortgenoten.",
            "meer": "Zingen is voor veel vogels een manier om te laten horen: 'dit is van mij'.",
            "fout": {
              "rangorde": "Bij rangorde leven de dieren samen in een groep met een baas. Hier jaagt de merel de anderen juist weg.",
              "concurrentie": "Concurrentie is volgens je begrippenlijst tussen soorten. Hier gaat het om merels tegen merels, om een gebied.",
              "samenwerking": "De merel werkt niet samen met de andere merels, hij jaagt ze weg."
            }
          },
          {
            "t": "mc",
            "q": "Bij een groep kippen pikt kip A altijd als eerste van het voer; de andere kippen wachten. Wat is dit?",
            "o": [
              "paarvorming",
              "territorium",
              "concurrentie",
              "rangorde"
            ],
            "a": "rangorde",
            "w": "Kip A is de baas; de anderen weten hun plaats en wachten.",
            "meer": "Bij kippen heet de rangorde de pikorde.",
            "fout": {
              "paarvorming": "Het gaat niet om een paar dat jongen grootbrengt, maar om wie de baas is.",
              "territorium": "De kippen jagen elkaar niet uit een gebied; ze leven samen en weten wie eerst mag.",
              "concurrentie": "Concurrentie is tussen soorten. Dit zijn allemaal kippen in één groep met een baas."
            }
          },
          {
            "t": "mc",
            "q": "Twee zwanen blijven samen en broeden samen op hun eieren. Wat is dit?",
            "o": [
              "samenwerking",
              "paarvorming",
              "rangorde",
              "concurrentie"
            ],
            "a": "paarvorming",
            "w": "Een mannetje en een vrouwtje vormen een paar om voor hun nakomelingen te zorgen.",
            "meer": "Het woord 'paar' en 'eieren' zijn hier de hints.",
            "fout": {
              "samenwerking": "Ze werken wel samen, maar een man en vrouw die een paar vormen voor hun jongen heet paarvorming.",
              "rangorde": "Er is hier geen baas en geen groep, alleen een paar.",
              "concurrentie": "Ze strijden niet tegen elkaar, ze zorgen samen voor de eieren."
            }
          },
          {
            "t": "mc",
            "q": "Bladluizen en rupsen eten van dezelfde plant. Er is niet genoeg blad voor allebei. Wat is dit?",
            "o": [
              "concurrentie",
              "samenwerking",
              "territorium",
              "rangorde"
            ],
            "a": "concurrentie",
            "w": "Twee soorten die hetzelfde voedsel willen: concurrentie.",
            "meer": "Ook kleine beestjes kunnen concurrenten zijn. Het gaat om hetzelfde voedsel.",
            "fout": {
              "samenwerking": "Ze helpen elkaar niet; ze eten elkaars voedsel op. En het zijn twee soorten.",
              "territorium": "Niemand verdedigt hier een gebied. Ze eten gewoon van hetzelfde.",
              "rangorde": "Er is geen groep met een baas. Het zijn twee soorten die om voedsel strijden."
            }
          },
          {
            "t": "mc",
            "q": "Een wolf trekt zijn staart in en gaat opzij als de leider van de roedel komt eten. Wat is dit?",
            "o": [
              "territorium",
              "paarvorming",
              "rangorde",
              "concurrentie"
            ],
            "a": "rangorde",
            "w": "De wolf weet zijn plaats: de leider is de baas en mag eerst.",
            "meer": "Door zo te laten zien 'jij bent de baas', voorkomt de wolf een gevecht.",
            "fout": {
              "territorium": "Het gaat niet om een gebied verdedigen, maar om wie in de groep de baas is.",
              "paarvorming": "Er wordt geen paar gevormd; het gaat om de plaats in de groep.",
              "concurrentie": "Concurrentie is tussen soorten. Hier gaat het om twee wolven uit één roedel en wie de baas is."
            }
          },
          {
            "t": "gap",
            "q": "Leeuwen en hyena's die op dezelfde prooien jagen, zijn een voorbeeld van ___.",
            "a": "concurrentie",
            "soepel": true,
            "w": "Twee soorten die hetzelfde voedsel willen: concurrentie.",
            "meer": "Concurrent = tegenstander die hetzelfde wil."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: bijen van één bijenkorf. Sommige bijen halen voedsel, andere verdedigen de ingang. Samen houden ze het volk in leven.",
            "stappen": [
              {
                "toon": "1. Hoeveel soorten? Eén: honingbijen uit één korf.",
                "uitleg": "Dus geen concurrentie, want die gaat tussen soorten."
              },
              {
                "toon": "2. Samen of tegen elkaar? Samen.",
                "uitleg": "Elke bij doet een eigen taak."
              },
              {
                "toon": "3. Waarom? Voor een gemeenschappelijk doel: het volk in leven houden.",
                "uitleg": "Vaardigheden bundelen voor één doel: samenwerking."
              }
            ],
            "waarom": {
              "q": "Waarom is dit samenwerking en geen concurrentie?",
              "o": [
                "Omdat bijen geen voedsel eten",
                "Omdat het één populatie is die samen een doel heeft",
                "Omdat er geen baas is"
              ],
              "a": "Omdat het één populatie is die samen een doel heeft"
            },
            "fout": {
              "Omdat bijen geen voedsel eten": "Bijen eten wel (nectar en stuifmeel). Het verschil zit erin dat ze samen werken, niet tegen elkaar.",
              "Omdat er geen baas is": "Of er een baas is, zegt niets over samenwerking of concurrentie. Het gaat om: één populatie, samen een doel."
            },
            "w": "Eén populatie die vaardigheden bundelt voor een gezamenlijk doel is samenwerking.",
            "meer": "Stel steeds de vraag: één soort of twee? Samen of tegen?"
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Twee roodborstjes vechten om dezelfde tuin. Is dat concurrentie? Volgens je begrippenlijst niet: <b>concurrentie</b> is een relatie <b>tussen soorten</b>. Een gebied verdedigen tegen <b>soortgenoten</b> is <b>territorium</b>.",
          "Verwarbare paren: <b>concurrentie</b> (soorten tegen elkaar) tegenover <b>samenwerking</b> (één populatie samen). <b>Rangorde</b> (wie is de baas in de groep) tegenover <b>territorium</b> (welk gebied is van wie).",
          "Vaak zie je twee dingen tegelijk. Een roedel wolven heeft een rangorde én jaagt samen. Kijk dus goed naar elk stukje van de situatie."
        ],
        "regel": "Concurrentie = tussen soorten; territorium = meestal tegen soortgenoten; rangorde = de baas in de groep; samenwerking = één populatie, één doel.",
        "voorbeelden": [
          {
            "en": "roodborst tegen roodborst om een tuin",
            "nl": "Territorium: tegen soortgenoten.",
            "let": "<b>let op</b>: niet concurrentie, want dat is tussen soorten."
          },
          {
            "en": "roedel wolven: leider + samen jagen",
            "nl": "Rangorde én samenwerking tegelijk.",
            "let": "<b>let op</b>: één situatie kan twee soorten gedrag laten zien."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Twee roodborstjes vechten om dezelfde tuin. Waarom heet dit volgens je begrippenlijst territorium en geen concurrentie?",
            "o": [
              "Omdat roodborstjes nooit om voedsel vechten",
              "Omdat territorium alleen bij zoogdieren voorkomt, niet bij vogels",
              "Omdat concurrentie tussen soorten is, en dit soortgenoten zijn",
              "Omdat er geen baas is"
            ],
            "a": "Omdat concurrentie tussen soorten is, en dit soortgenoten zijn",
            "w": "Volgens je begrippenlijst is concurrentie een relatie tussen soorten. Een gebied verdedigen tegen soortgenoten is territorium.",
            "meer": "Check: dezelfde soort plus een gebied verdedigen = territorium.",
            "fout": {
              "Omdat roodborstjes nooit om voedsel vechten": "Of ze om voedsel vechten maakt hier niet uit. Het punt is: het zijn soortgenoten die om een gebied strijden.",
              "Omdat territorium alleen bij zoogdieren voorkomt, niet bij vogels": "Vogels hebben juist vaak een territorium, zoals de merel en het roodborstje.",
              "Omdat er geen baas is": "Een baas hoort bij rangorde. Dat zegt niets over het verschil tussen concurrentie en territorium."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het belangrijkste verschil tussen concurrentie en samenwerking?",
            "o": [
              "Concurrentie is altijd echt vechten, samenwerking is nooit vechten",
              "Concurrentie: soorten tegen elkaar; samenwerking: één populatie samen",
              "Er is geen verschil",
              "Samenwerking is tussen twee soorten, concurrentie binnen één soort"
            ],
            "a": "Concurrentie: soorten tegen elkaar; samenwerking: één populatie samen",
            "w": "Concurrentie gaat tussen soorten die hetzelfde willen; samenwerking gaat binnen een populatie die samen iets bereikt.",
            "meer": "Tegen elkaar (andere soort) of met elkaar (zelfde populatie).",
            "fout": {
              "Concurrentie is altijd echt vechten, samenwerking is nooit vechten": "Bij concurrentie hoeft er niet gevochten te worden; het kan ook gewoon gaan om hetzelfde voedsel eten.",
              "Er is geen verschil": "Ze zijn juist elkaars tegenpool: tegen elkaar versus met elkaar.",
              "Samenwerking is tussen twee soorten, concurrentie binnen één soort": "Precies omgedraaid. Samenwerking is binnen een populatie, concurrentie tussen soorten."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen rangorde en territorium?",
            "o": [
              "Rangorde gaat over een gebied; territorium over wie de baas is",
              "Ze betekenen hetzelfde",
              "Rangorde: wie de baas is; territorium: welk gebied van wie is",
              "Rangorde is tussen soorten, territorium binnen één nest"
            ],
            "a": "Rangorde: wie de baas is; territorium: welk gebied van wie is",
            "w": "Bij rangorde leven dieren samen en weten ze hun plaats; bij territorium houdt een dier anderen uit zijn gebied.",
            "meer": "Rangorde = WIE (de baas). Territorium = WAAR (het gebied).",
            "fout": {
              "Rangorde gaat over een gebied; territorium over wie de baas is": "Omgedraaid. Rangorde gaat over de baas, territorium over een gebied.",
              "Ze betekenen hetzelfde": "Bij rangorde leven de dieren samen in een groep; bij een territorium worden anderen juist weggejaagd.",
              "Rangorde is tussen soorten, territorium binnen één nest": "Rangorde is binnen een groep; en een territorium verdedig je meestal tegen soortgenoten, niet binnen een nest."
            }
          },
          {
            "t": "mc",
            "q": "Waarom zorgt een rangorde juist voor rust in de groep?",
            "o": [
              "Omdat de baas alle andere dieren wegjaagt",
              "Omdat alle dieren even sterk zijn",
              "Omdat er dan geen voedsel nodig is",
              "Omdat elk dier zijn plaats weet"
            ],
            "a": "Omdat elk dier zijn plaats weet",
            "w": "Als iedereen weet wie de baas is, hoeft er niet steeds gevochten te worden. Daardoor is er zelden gedoe.",
            "meer": "Eén keer duidelijk afspreken wie de baas is, scheelt elke dag ruzie.",
            "fout": {
              "Omdat de baas alle andere dieren wegjaagt": "Dan was er geen groep meer. Bij rangorde blijven de dieren juist samen.",
              "Omdat alle dieren even sterk zijn": "Juist niet: er is één baas. Het verschil in plaats zorgt voor de rust.",
              "Omdat er dan geen voedsel nodig is": "Dieren hebben altijd voedsel nodig. De rangorde bepaalt alleen wie eerst mag."
            }
          },
          {
            "t": "mc",
            "q": "Twee soorten vogels broeden allebei in holle bomen, en er zijn maar weinig holle bomen. Wat is dit?",
            "o": [
              "samenwerking, want ze broeden allebei",
              "concurrentie, want ze willen allebei dezelfde plek",
              "paarvorming, want ze broeden",
              "rangorde, want de sterkste soort wordt de baas van het bos"
            ],
            "a": "concurrentie, want ze willen allebei dezelfde plek",
            "w": "Twee soorten die in hetzelfde gebied (dezelfde holle bomen) willen leven: concurrentie.",
            "meer": "Concurrentie kan om voedsel gaan, maar ook om ruimte.",
            "fout": {
              "samenwerking, want ze broeden allebei": "Allebei hetzelfde doen is nog geen samenwerking. Ze zitten elkaar juist in de weg, en het zijn twee soorten.",
              "paarvorming, want ze broeden": "Elk paar broedt wel, maar de vraag gaat over de twee soorten die om dezelfde plek strijden.",
              "rangorde, want de sterkste soort wordt de baas van het bos": "Rangorde is binnen één groep, niet tussen twee soorten."
            }
          },
          {
            "t": "mc",
            "q": "In een groep chimpansees is één mannetje de baas, en samen jagen ze op kleine dieren. Welke twee soorten gedrag zie je?",
            "o": [
              "concurrentie en territorium",
              "paarvorming en concurrentie",
              "rangorde en samenwerking",
              "territorium en paarvorming"
            ],
            "a": "rangorde en samenwerking",
            "w": "Eén baas = rangorde. Samen jagen binnen de groep = samenwerking.",
            "meer": "Een situatie kan meerdere gedragingen tegelijk laten zien. Lees elk stukje apart.",
            "fout": {
              "concurrentie en territorium": "Er wordt geen andere soort bestreden en geen gebied verdedigd in deze beschrijving.",
              "paarvorming en concurrentie": "Er wordt geen paar gevormd, en concurrentie is tussen soorten.",
              "territorium en paarvorming": "Er wordt geen gebied verdedigd en geen paar gevormd. Het gaat om een baas en samen jagen."
            }
          },
          {
            "t": "mc",
            "q": "Waarom helpt een territorium bij de voortplanting?",
            "o": [
              "In een eigen gebied lukken nestbouw en paren beter",
              "In een territorium groeien dieren sneller",
              "In een territorium mogen nooit roofdieren of andere soorten komen",
              "Een territorium ligt altijd naast water"
            ],
            "a": "In een eigen gebied lukken nestbouw en paren beter",
            "w": "Een territorium zorgt dat levensfuncties als voedsel zoeken, nestbouw en paring beter uitgevoerd kunnen worden.",
            "meer": "Geen soortgenoten in je gebied betekent minder strijd om je nestplek en je partner.",
            "fout": {
              "In een territorium groeien dieren sneller": "Het gaat niet om sneller groeien, maar om rust voor voedsel zoeken, nestbouw en paring.",
              "In een territorium mogen nooit roofdieren of andere soorten komen": "Een territorium wordt meestal tegen soortgenoten verdedigd. Andere soorten kunnen er gewoon zijn.",
              "Een territorium ligt altijd naast water": "Een territorium kan overal liggen: een tuin, een stuk bos, een rif."
            }
          },
          {
            "t": "gap",
            "q": "Een territorium wordt meestal verdedigd tegen ___.",
            "a": "soortgenoten|soortgenoot|dezelfde soort",
            "soepel": true,
            "w": "Soortgenoten willen hetzelfde voedsel, dezelfde nestplekken en dezelfde partners.",
            "meer": "Merel tegen merel, roodborst tegen roodborst."
          },
          {
            "t": "open",
            "q": "Leg uit wat het verschil is tussen concurrentie en territorium. Gebruik de woorden 'soorten' en 'soortgenoten'.",
            "punten": 2,
            "modelantwoord": "Concurrentie is een relatie tussen soorten die hetzelfde willen, bijvoorbeeld hetzelfde voedsel of hetzelfde gebied. Een territorium is een leefgebied dat een dier verdedigt tegen anderen, meestal tegen soortgenoten.",
            "sleutelwoorden": [
              {
                "moet": [
                  "soorten"
                ],
                "syn": [
                  "verschillende soort",
                  "andere soort"
                ]
              },
              {
                "moet": [
                  "soortgeno"
                ],
                "syn": [
                  "dezelfde soort",
                  "eigen soort"
                ]
              }
            ],
            "rubric": [
              "Concurrentie gaat tussen (verschillende) soorten die hetzelfde willen.",
              "Een territorium is een gebied dat wordt verdedigd, meestal tegen soortgenoten."
            ],
            "w": "Het verschil zit in wie de tegenstander is: een andere soort (concurrentie) of meestal een soortgenoot (territorium).",
            "meer": "Leeuw tegen hyena = concurrentie. Merel tegen merel om een tuin = territorium."
          }
        ]
      }
    ]
  },
  {
    "id": "symbiose",
    "emoji": "🤝",
    "titel": "T6 · Samen of tegen",
    "kort": "Symbiose is een langdurige samenlevingsvorm van twee verschillende soorten: mutualisme (allebei voordeel), commensalisme (één voordeel, ander geen nadeel) of parasitisme (één voordeel, ander nadeel).",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Op een oude boom of steen zie je soms grijsgroene of gele vlekjes: <b>korstmos</b>. Dat is geen gewone plant, maar een <b>schimmel</b> en een <b>alg</b> die samenleven, en ze hebben er allebei voordeel van. Zo'n samenleven heet <b>symbiose</b>: <b>een langdurige samenlevingsvorm tussen twee verschillende soorten individuen</b>.",
          "Er zijn drie vormen. <b>Mutualisme</b>: <b>beide soorten hebben voordeel</b> (korstmos). <b>Commensalisme</b>: <b>één soort heeft voordeel en de andere géén nadeel (ook geen voordeel)</b> (algen op de schors van een boom). <b>Parasitisme</b>: <b>één soort heeft voordeel en de andere wel nadeel</b> (teken, lintwormen, luizen).",
          "Bij parasitisme heet de soort met voordeel de <b>parasiet</b> en de soort met nadeel de <b>gastheer</b>. Een teek is de parasiet, de hond de gastheer.",
          "Denkfout: 'symbiose is altijd voor allebei goed'. Nee, dat geldt alleen voor mutualisme. Nog een denkfout: 'een parasiet doodt zijn gastheer altijd'. Een teek op een hond leeft juist van een levende hond."
        ],
        "regel": "Mutualisme: allebei voordeel. Commensalisme: één voordeel, de ander merkt niets. Parasitisme: één voordeel, de ander nadeel.",
        "voorbeelden": [
          {
            "en": "korstmos = schimmel + alg",
            "nl": "Mutualisme: allebei voordeel.",
            "let": "<b>let op</b>: korstmos is dus eigenlijk twee organismen."
          },
          {
            "en": "algen op boomschors",
            "nl": "Commensalisme: de alg heeft een plek, de boom merkt er niets van.",
            "let": "<b>let op</b>: geen nadeel, maar ook geen voordeel voor de boom."
          },
          {
            "en": "teek op een hond",
            "nl": "Parasitisme: teek = parasiet, hond = gastheer.",
            "let": "<b>let op</b>: de hond gaat er niet dood aan, maar heeft wel nadeel."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Symbiose is een ___ samenlevingsvorm tussen twee verschillende soorten individuen.",
            "a": "langdurige|langdurig",
            "soepel": true,
            "w": "Symbiose duurt lang: de soorten leven echt samen, het is geen kort moment.",
            "meer": "Een vos die een konijn eet is dus geen symbiose: dat duurt maar even."
          },
          {
            "t": "gap",
            "q": "Bij ___ hebben beide soorten voordeel van het samenleven.",
            "a": "mutualisme",
            "soepel": true,
            "w": "Mutualisme: allebei voordeel, zoals de schimmel en de alg in korstmos.",
            "meer": "Mutueel betekent 'wederzijds': van twee kanten."
          },
          {
            "t": "gap",
            "q": "Eén soort heeft voordeel en de andere geen nadeel en ook geen voordeel. Dat heet ___.",
            "a": "commensalisme",
            "soepel": true,
            "w": "Commensalisme: één wint, de ander merkt er niets van.",
            "meer": "Voorbeeld: algen op de schors van een boom."
          },
          {
            "t": "gap",
            "q": "Bij parasitisme heet de soort die nadeel heeft de ___.",
            "a": "gastheer|gastheren",
            "soepel": true,
            "w": "De gastheer heeft nadeel; de parasiet heeft voordeel.",
            "meer": "Een 'gastheer' heeft een ongenode 'gast': de parasiet."
          },
          {
            "t": "mc",
            "q": "Wat is symbiose?",
            "o": [
              "Een kort gevecht tussen twee dieren",
              "Een groep van dezelfde soort die samen jaagt",
              "Een langdurige samenlevingsvorm tussen twee verschillende soorten",
              "Een samenleving waarbij beide soorten altijd voordeel hebben"
            ],
            "a": "Een langdurige samenlevingsvorm tussen twee verschillende soorten",
            "w": "Symbiose = langdurig samenleven van twee verschillende soorten.",
            "meer": "Sym = samen, bios = leven.",
            "fout": {
              "Een kort gevecht tussen twee dieren": "Symbiose duurt juist lang, en het is geen gevecht maar samenleven.",
              "Een groep van dezelfde soort die samen jaagt": "Dat is samenwerking binnen een populatie. Symbiose gaat over twee verschillende soorten.",
              "Een samenleving waarbij beide soorten altijd voordeel hebben": "Dat is maar één vorm (mutualisme). Bij parasitisme heeft één soort juist nadeel."
            }
          },
          {
            "t": "mc",
            "q": "Wat is parasitisme?",
            "o": [
              "Beide soorten hebben voordeel",
              "Eén soort heeft voordeel, de andere merkt er niets van",
              "Beide soorten hebben nadeel",
              "Eén soort heeft voordeel, de andere nadeel"
            ],
            "a": "Eén soort heeft voordeel, de andere nadeel",
            "w": "Bij parasitisme heeft de parasiet voordeel en de gastheer nadeel.",
            "meer": "Teek, lintworm, luis: allemaal parasieten.",
            "fout": {
              "Beide soorten hebben voordeel": "Dat is mutualisme.",
              "Eén soort heeft voordeel, de andere merkt er niets van": "Dat is commensalisme.",
              "Beide soorten hebben nadeel": "Dat is geen vorm van symbiose uit je lijst. Bij parasitisme heeft de parasiet juist voordeel."
            }
          },
          {
            "t": "mc",
            "q": "Een teek zuigt bloed bij een hond. Wie is de parasiet?",
            "o": [
              "de hond",
              "de teek",
              "allebei",
              "geen van beide"
            ],
            "a": "de teek",
            "w": "De teek heeft voordeel (voedsel), de hond nadeel. Dus de teek is de parasiet en de hond de gastheer.",
            "meer": "Parasiet = de profiteur. Gastheer = degene die betaalt.",
            "fout": {
              "de hond": "De hond heeft nadeel, dus hij is de gastheer.",
              "allebei": "Er is één parasiet (de teek) en één gastheer (de hond).",
              "geen van beide": "Dit is juist hét voorbeeld uit je begrippenlijst: de teek is de parasiet."
            }
          },
          {
            "t": "mc",
            "q": "Korstmos (een schimmel en een alg die samenleven) is een voorbeeld van ...",
            "o": [
              "parasitisme",
              "mutualisme",
              "commensalisme",
              "concurrentie"
            ],
            "a": "mutualisme",
            "w": "De schimmel en de alg hebben er allebei voordeel van: mutualisme.",
            "meer": "Korstmos is het voorbeeld van mutualisme uit je begrippenlijst.",
            "fout": {
              "parasitisme": "Bij parasitisme heeft één soort nadeel. In korstmos hebben ze allebei voordeel.",
              "commensalisme": "Bij commensalisme heeft maar één soort voordeel. In korstmos hebben ze het allebei.",
              "concurrentie": "Concurrentie is strijden om hetzelfde. In korstmos leven de soorten juist samen met voordeel."
            }
          },
          {
            "t": "mc",
            "q": "Algen groeien op de schors van een boom. De boom heeft er geen last van. Welke vorm van symbiose is dit?",
            "o": [
              "mutualisme",
              "parasitisme",
              "commensalisme"
            ],
            "a": "commensalisme",
            "w": "De alg heeft voordeel (een plek), de boom geen nadeel en geen voordeel: commensalisme.",
            "meer": "Dit is het voorbeeld van commensalisme uit je begrippenlijst.",
            "fout": {
              "mutualisme": "Dan zou de boom er ook voordeel van moeten hebben. Dat heeft hij niet.",
              "parasitisme": "Dan zou de boom nadeel moeten hebben. Hij heeft er geen last van."
            }
          },
          {
            "t": "mc",
            "q": "Uit welke twee organismen bestaat korstmos?",
            "o": [
              "een mos en een boom",
              "een bacterie en een worm",
              "een schimmel en een alg",
              "twee soorten mos"
            ],
            "a": "een schimmel en een alg",
            "w": "Korstmos is een schimmel en een alg die samenleven, met voordeel voor allebei.",
            "meer": "Ondanks de naam is korstmos dus geen gewoon mos.",
            "fout": {
              "een mos en een boom": "Korstmos groeit wel vaak op bomen, maar de boom hoort er niet bij. Het is een schimmel plus een alg.",
              "een bacterie en een worm": "Nee, korstmos bestaat uit een schimmel en een alg.",
              "twee soorten mos": "De naam zet je op het verkeerde been: korstmos is een schimmel en een alg."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bij een nieuw voorbeeld kijk je naar <b>allebei</b> de soorten. Stap 1: zijn het twee verschillende soorten die lang samenleven? Dan is het symbiose. Stap 2: wat heeft soort A eraan? Stap 3: wat heeft soort B eraan?",
          "Voordeel + voordeel = <b>mutualisme</b>. Voordeel + niets = <b>commensalisme</b>. Voordeel + nadeel = <b>parasitisme</b>; de soort met voordeel is dan de <b>parasiet</b>, de soort met nadeel de <b>gastheer</b>.",
          "Valkuil: een vos die een konijn eet is géén parasitisme. Dat is eten en gegeten worden, en het duurt maar even. Symbiose is <b>langdurig</b> samenleven."
        ],
        "regel": "Kijk naar wat béide soorten eraan hebben: voordeel, niets of nadeel.",
        "voorbeelden": [
          {
            "en": "poetsvisje eet parasieten van een grote vis",
            "nl": "Poetsvisje krijgt voedsel, de grote vis wordt schoon: mutualisme.",
            "let": "<b>let op</b>: kijk naar beide kanten."
          },
          {
            "en": "lintworm in de darm van een mens",
            "nl": "Lintworm voordeel, mens nadeel: parasitisme.",
            "let": "<b>let op</b>: lintworm = parasiet, mens = gastheer."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een poetsvisje eet parasieten van de huid van een grote vis. Het poetsvisje krijgt voedsel, de grote vis wordt schoongemaakt. Welke vorm is dit?",
            "o": [
              "parasitisme",
              "commensalisme",
              "mutualisme"
            ],
            "a": "mutualisme",
            "w": "Allebei hebben ze voordeel: het poetsvisje eten, de grote vis een schone huid.",
            "meer": "Een soort wasstraat in de zee, waar de schoonmaker betaald wordt met eten.",
            "fout": {
              "parasitisme": "Niemand heeft hier nadeel. De grote vis wordt juist geholpen.",
              "commensalisme": "Bij commensalisme heeft de tweede soort er niets aan. Hier heeft de grote vis wél voordeel."
            }
          },
          {
            "t": "mc",
            "q": "Een lintworm leeft in de darm van een mens en eet mee van het voedsel. De mens wordt er zwakker van. Welke vorm is dit?",
            "o": [
              "mutualisme",
              "parasitisme",
              "commensalisme"
            ],
            "a": "parasitisme",
            "w": "De lintworm heeft voordeel, de mens nadeel: parasitisme.",
            "meer": "De lintworm is de parasiet, de mens de gastheer.",
            "fout": {
              "mutualisme": "De mens heeft er geen voordeel van, alleen nadeel.",
              "commensalisme": "Bij commensalisme heeft de tweede soort geen nadeel. De mens wordt hier zwakker, dus wel nadeel."
            }
          },
          {
            "t": "mc",
            "q": "Een vogel bouwt zijn nest hoog in een grote boom. De vogel heeft een veilige plek; de boom merkt er niets van. Welke vorm is dit?",
            "o": [
              "commensalisme",
              "mutualisme",
              "parasitisme"
            ],
            "a": "commensalisme",
            "w": "De vogel heeft voordeel, de boom geen nadeel en geen voordeel: commensalisme.",
            "meer": "Net als de algen op boomschors: één heeft een plek, de ander merkt niets.",
            "fout": {
              "mutualisme": "De boom heeft er niets aan, dus niet allebei voordeel.",
              "parasitisme": "De boom heeft er geen last van, dus geen nadeel."
            }
          },
          {
            "t": "mc",
            "q": "Hoofdluizen leven in het haar van een kind en zuigen bloed. Wie is hier de gastheer?",
            "o": [
              "de luis",
              "het kind",
              "allebei",
              "het haar"
            ],
            "a": "het kind",
            "w": "Het kind heeft nadeel (jeuk, bloed kwijt), dus het kind is de gastheer. De luis is de parasiet.",
            "meer": "De gastheer is altijd degene die nadeel heeft.",
            "fout": {
              "de luis": "De luis heeft voordeel; dat maakt hem de parasiet, niet de gastheer.",
              "allebei": "Er is één parasiet (luis) en één gastheer (kind).",
              "het haar": "Haar is geen organisme, maar een deel van het kind. De gastheer is het kind zelf."
            }
          },
          {
            "t": "mc",
            "q": "Een zeepok (een klein schelpdiertje) zit vast op de huid van een walvis en vangt zo voedsel uit het water. De walvis heeft er geen last van en ook geen voordeel. Welke vorm is dit?",
            "o": [
              "mutualisme",
              "parasitisme",
              "commensalisme"
            ],
            "a": "commensalisme",
            "w": "De zeepok heeft voordeel, de walvis niets: commensalisme.",
            "meer": "Geen last + geen voordeel = de ander merkt niets = commensalisme.",
            "fout": {
              "mutualisme": "Dan moest de walvis er ook voordeel van hebben. Dat staat er niet.",
              "parasitisme": "De walvis heeft geen last, dus geen nadeel. De zeepok zuigt ook niets van de walvis."
            }
          },
          {
            "t": "mc",
            "q": "Een schimmel groeit om de wortels van een boom. De schimmel krijgt suikers van de boom, de boom krijgt via de schimmel extra water en voedingsstoffen. Welke vorm is dit?",
            "o": [
              "mutualisme",
              "commensalisme",
              "parasitisme"
            ],
            "a": "mutualisme",
            "w": "Allebei voordeel: de schimmel suikers, de boom water en voedingsstoffen.",
            "meer": "Net als bij korstmos werkt hier een schimmel samen met een andere soort.",
            "fout": {
              "commensalisme": "De boom krijgt er ook iets voor terug, dus niet 'één voordeel, de ander niets'.",
              "parasitisme": "De schimmel neemt suikers, maar de boom krijgt er water en voedingsstoffen voor terug. Er is dus geen nadeel."
            }
          },
          {
            "t": "mc",
            "q": "Een vos eet een konijn op. Is dit symbiose?",
            "o": [
              "Ja, parasitisme: de vos heeft voordeel, het konijn nadeel",
              "Ja, mutualisme",
              "Nee, dit is eten en gegeten worden, geen langdurig samenleven",
              "Ja, commensalisme"
            ],
            "a": "Nee, dit is eten en gegeten worden, geen langdurig samenleven",
            "w": "Symbiose is langdurig samenleven. Een vos die een konijn opeet is een voedselrelatie die maar even duurt.",
            "meer": "Een parasiet eet zijn gastheer niet in één keer op; hij leeft er lang op of in.",
            "fout": {
              "Ja, parasitisme: de vos heeft voordeel, het konijn nadeel": "Het klinkt als parasitisme, maar het duurt maar even en ze leven niet samen. Dat maakt het geen symbiose.",
              "Ja, mutualisme": "Het konijn heeft er zeker geen voordeel van. En het is geen samenleven.",
              "Ja, commensalisme": "Het konijn heeft wel degelijk nadeel. En het is geen langdurig samenleven."
            }
          },
          {
            "t": "mc",
            "q": "Wolven uit één roedel jagen samen. Is dit symbiose?",
            "o": [
              "Ja, mutualisme, want ze hebben allebei voordeel",
              "Nee, het is samenwerking binnen één soort",
              "Ja, commensalisme",
              "Ja, parasitisme"
            ],
            "a": "Nee, het is samenwerking binnen één soort",
            "w": "Symbiose is samenleven van twee verschillende soorten. Wolven van één roedel zijn dezelfde soort: dat is samenwerking.",
            "meer": "Eerste check bij symbiose: zijn het echt twee verschillende soorten?",
            "fout": {
              "Ja, mutualisme, want ze hebben allebei voordeel": "Ze hebben wel voordeel, maar het zijn allemaal wolven. Mutualisme is tussen twee verschillende soorten.",
              "Ja, commensalisme": "Commensalisme is een vorm van symbiose, en dat gaat over twee verschillende soorten.",
              "Ja, parasitisme": "Niemand heeft hier nadeel, en het is één soort."
            }
          },
          {
            "t": "gap",
            "q": "Een vlo zuigt bloed bij een kat. De vlo is de ___.",
            "a": "parasiet|parasieten",
            "soepel": true,
            "w": "De vlo heeft voordeel en de kat nadeel. Dus de vlo is de parasiet, de kat de gastheer.",
            "meer": "Parasiet = profiteur."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Bij symbiose draait alles om de <b>tweede</b> soort. De eerste soort heeft altijd voordeel. Wat heeft de ander? <b>Voordeel</b>: mutualisme. <b>Niets</b>: commensalisme. <b>Nadeel</b>: parasitisme.",
          "Denkfout 1: 'symbiose is altijd voor allebei goed'. Nee, alleen bij mutualisme. Bij parasitisme heeft de gastheer nadeel, en het is toch symbiose.",
          "Denkfout 2: 'een parasiet doodt zijn gastheer'. Niet per se: een teek kan weken op een hond zitten zonder dat de hond doodgaat. Nadeel betekent niet dood. Een dode gastheer is voor de parasiet bovendien geen voedselbron meer."
        ],
        "regel": "De eerste soort heeft altijd voordeel; de tweede bepaalt de vorm: voordeel (mutualisme), niets (commensalisme), nadeel (parasitisme).",
        "voorbeelden": [
          {
            "en": "mutualisme ↔ commensalisme",
            "nl": "Het verschil zit in de tweede soort: voordeel of niets.",
            "let": "<b>let op</b>: korstmos is mutualisme, algen op schors commensalisme."
          },
          {
            "en": "commensalisme ↔ parasitisme",
            "nl": "Het verschil zit in de tweede soort: niets of nadeel.",
            "let": "<b>let op</b>: nadeel hoeft niet de dood te zijn."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is het verschil tussen mutualisme en commensalisme?",
            "o": [
              "Bij mutualisme heeft één soort voordeel en de andere soort nadeel",
              "Mutualisme: allebei voordeel; commensalisme: één voordeel",
              "Bij commensalisme hebben allebei nadeel",
              "Er is geen verschil"
            ],
            "a": "Mutualisme: allebei voordeel; commensalisme: één voordeel",
            "w": "Het verschil zit in de tweede soort: bij mutualisme voordeel, bij commensalisme niets.",
            "meer": "Korstmos (allebei voordeel) tegenover algen op boomschors (boom merkt niets).",
            "fout": {
              "Bij mutualisme heeft één soort voordeel en de andere soort nadeel": "Bij mutualisme heeft niemand nadeel; allebei voordeel.",
              "Bij commensalisme hebben allebei nadeel": "Bij commensalisme heeft één soort voordeel en de ander niets, geen nadeel.",
              "Er is geen verschil": "Er is wel een verschil: bij mutualisme heeft de tweede soort voordeel, bij commensalisme niet."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het verschil tussen commensalisme en parasitisme?",
            "o": [
              "Alleen bij parasitisme heeft de andere soort nadeel",
              "Bij parasitisme hebben allebei voordeel",
              "Bij commensalisme gaat het om één soort",
              "Bij parasitisme leven de soorten maar heel kort samen"
            ],
            "a": "Alleen bij parasitisme heeft de andere soort nadeel",
            "w": "Bij allebei heeft één soort voordeel. Het verschil: de ander heeft niets (commensalisme) of nadeel (parasitisme).",
            "meer": "Algen op schors (boom merkt niets) tegenover teek op hond (hond heeft nadeel).",
            "fout": {
              "Bij parasitisme hebben allebei voordeel": "Dat is mutualisme. Bij parasitisme heeft de gastheer nadeel.",
              "Bij commensalisme gaat het om één soort": "Commensalisme is een vorm van symbiose, dus altijd twee verschillende soorten.",
              "Bij parasitisme leven de soorten maar heel kort samen": "Parasitisme is ook symbiose, dus juist langdurig samenleven."
            }
          },
          {
            "t": "mc",
            "q": "Iemand zegt: 'Symbiose betekent dat beide soorten er beter van worden.' Klopt dat?",
            "o": [
              "Ja, altijd",
              "Nee, bij symbiose heeft altijd één soort nadeel",
              "Ja, behalve bij korstmos",
              "Nee, dat geldt alleen voor mutualisme"
            ],
            "a": "Nee, dat geldt alleen voor mutualisme",
            "w": "Symbiose heeft drie vormen. Alleen bij mutualisme hebben allebei voordeel.",
            "meer": "Symbiose betekent 'samenleven', niet 'samen winnen'.",
            "fout": {
              "Ja, altijd": "Dat is de bekende denkfout. Bij parasitisme heeft de gastheer nadeel, en dat is ook symbiose.",
              "Nee, bij symbiose heeft altijd één soort nadeel": "Te ver doorgeslagen: bij mutualisme en commensalisme heeft niemand nadeel.",
              "Ja, behalve bij korstmos": "Korstmos is juist mutualisme, waar allebei voordeel hebben. De uitzonderingen zijn commensalisme en parasitisme."
            }
          },
          {
            "t": "mc",
            "q": "Een teek zit al dagen op een hond, en de hond leeft gewoon door. Is dit parasitisme?",
            "o": [
              "Nee, de hond gaat niet dood, dus het is commensalisme",
              "Nee, parasieten doden hun gastheer altijd",
              "Ja, de hond heeft nadeel, ook al gaat hij niet dood",
              "Nee, het is mutualisme"
            ],
            "a": "Ja, de hond heeft nadeel, ook al gaat hij niet dood",
            "w": "De hond verliest bloed en heeft er last van: nadeel. Daarvoor hoeft hij niet dood te gaan.",
            "meer": "Een dode gastheer is voor een parasiet geen voedselbron meer. Veel parasieten houden hun gastheer dus juist in leven.",
            "fout": {
              "Nee, de hond gaat niet dood, dus het is commensalisme": "Bij commensalisme heeft de ander géén nadeel. De hond verliest bloed, dat is wel nadeel.",
              "Nee, parasieten doden hun gastheer altijd": "Dat is een denkfout. Nadeel is niet hetzelfde als doodgaan.",
              "Nee, het is mutualisme": "De hond heeft er geen voordeel van, dus het is geen mutualisme."
            }
          },
          {
            "t": "mc",
            "q": "Stel: de algen op een boomschors gaan de boom ziek maken. Welke vorm van symbiose wordt het dan?",
            "o": [
              "mutualisme",
              "parasitisme",
              "commensalisme"
            ],
            "a": "parasitisme",
            "w": "De alg heeft voordeel en de boom krijgt nu nadeel: dat is parasitisme.",
            "meer": "Dezelfde twee soorten, maar een ander effect op de tweede soort, geeft een andere vorm.",
            "fout": {
              "mutualisme": "De boom heeft er geen voordeel van, alleen nadeel.",
              "commensalisme": "Commensalisme was het zolang de boom niets merkte. Nu heeft de boom nadeel, dus is het iets anders."
            }
          },
          {
            "t": "mc",
            "q": "In welke situatie is er GEEN symbiose?",
            "o": [
              "een schimmel en een alg die samen korstmos vormen",
              "twee mussen die samen een nest bouwen",
              "een teek op een hond",
              "algen op de schors van een boom"
            ],
            "a": "twee mussen die samen een nest bouwen",
            "w": "Twee mussen zijn dezelfde soort. Symbiose gaat over twee verschillende soorten.",
            "meer": "Mussen die samen een nest bouwen, dat lijkt meer op paarvorming.",
            "fout": {
              "een schimmel en een alg die samen korstmos vormen": "Twee verschillende soorten die lang samenleven: wel symbiose (mutualisme).",
              "een teek op een hond": "Twee verschillende soorten, langdurig: wel symbiose (parasitisme).",
              "algen op de schors van een boom": "Twee verschillende soorten, langdurig: wel symbiose (commensalisme)."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over een parasiet klopt?",
            "o": [
              "Een parasiet is altijd groter dan zijn gastheer",
              "Een parasiet doodt zijn gastheer altijd meteen",
              "Een parasiet en zijn gastheer zijn dezelfde soort",
              "Een parasiet heeft voordeel en de gastheer nadeel"
            ],
            "a": "Een parasiet heeft voordeel en de gastheer nadeel",
            "w": "Dat is de definitie: de soort met voordeel is de parasiet, de soort met nadeel de gastheer.",
            "meer": "Teek, lintworm, luis: allemaal klein, en allemaal leven ze op of in een veel grotere gastheer.",
            "fout": {
              "Een parasiet is altijd groter dan zijn gastheer": "Meestal is het juist andersom: een teek is veel kleiner dan een hond.",
              "Een parasiet doodt zijn gastheer altijd meteen": "Nee, een parasiet leeft juist lang op of in zijn gastheer. Nadeel is niet hetzelfde als dood.",
              "Een parasiet en zijn gastheer zijn dezelfde soort": "Parasitisme is symbiose, en dat is altijd tussen twee verschillende soorten."
            }
          },
          {
            "t": "gap",
            "q": "Bij commensalisme heeft de ene soort voordeel en de andere ___ nadeel.",
            "a": "geen",
            "soepel": true,
            "w": "Bij commensalisme heeft de tweede soort geen nadeel, en ook geen voordeel.",
            "meer": "Heeft de tweede soort wél nadeel, dan is het parasitisme."
          },
          {
            "t": "open",
            "q": "Leg uit waarom korstmos mutualisme is, maar algen op boomschors commensalisme.",
            "punten": 2,
            "modelantwoord": "In korstmos hebben de schimmel en de alg allebei voordeel van het samenleven, dus het is mutualisme. Bij algen op boomschors heeft de alg voordeel, maar de boom heeft geen nadeel en ook geen voordeel, dus het is commensalisme.",
            "sleutelwoorden": [
              {
                "moet": [
                  "allebei",
                  "beide",
                  "beiden"
                ],
                "syn": [
                  "twee kanten",
                  "wederzijds"
                ]
              },
              {
                "moet": [
                  "geen nadeel",
                  "geen voordeel",
                  "niets"
                ],
                "syn": [
                  "merkt niet",
                  "geen last"
                ]
              }
            ],
            "rubric": [
              "Korstmos: schimmel en alg hebben allebei voordeel (mutualisme).",
              "Algen op schors: de alg heeft voordeel, de boom geen nadeel en geen voordeel (commensalisme)."
            ],
            "w": "Het verschil zit in de tweede soort: de alg in korstmos heeft voordeel, de boom bij de algen op schors niet.",
            "meer": "Vraag bij elke symbiose: wat heeft de tweede soort eraan?"
          }
        ]
      }
    ]
  },
  {
    "id": "cel-dna",
    "emoji": "📚",
    "titel": "T5 · De bibliotheek in je cel",
    "kort": "In de celkern van elke lichaamscel liggen alle chromosomen: lange dunne draden van DNA, en een gen is een stukje DNA met informatie voor één eigenschap.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Stel je voor: elke cel in je lichaam heeft een kleine <b>bibliotheek</b>. Die bibliotheek is de <b>celkern</b>. Daarin staan de boeken: de <b>chromosomen</b>. In elk boek staan recepten: de <b>genen</b>. En het papier en de inkt waar de boeken van gemaakt zijn, is de stof <b>DNA</b>.",
          "Een <b>lichaamscel</b> is een <b>cel die onderdeel is van het lichaam van een organisme</b>: een huidcel, spiercel, botcel, maar ook een cel uit een blad van een plant. Eicellen en zaadcellen tellen niet mee: dat zijn geslachtscellen.",
          "Een <b>chromosoom</b> is <b>een lange dunne draad in de celkern die bestaat uit de stof DNA en bevat erfelijke informatie van een organisme</b>. <b>DNA</b> is <b>de stof waar chromosomen uit bestaan; hierin is de informatie opgeslagen voor erfelijke eigenschappen</b>. Een <b>gen</b> is <b>de stukjes DNA die samen de informatie bevatten voor één eigenschap van een organisme</b>.",
          "Denkfout: 'chromosomen zijn korte X-vormige staafjes'. Op plaatjes zie je ze vaak zo getekend, maar volgens de definitie is een chromosoom een <b>lange dunne draad</b>. En nog een denkfout: 'alleen sommige cellen hebben DNA'. Nee: <b>elke celkern bevat alle chromosomen</b>, dus alle erfelijke informatie."
        ],
        "regel": "Celkern (bibliotheek) → chromosoom (boek, een lange draad van DNA) → gen (recept voor één eigenschap).",
        "voorbeelden": [
          {
            "en": "celkern → chromosoom → gen",
            "nl": "bibliotheek → boek → recept: van groot naar klein.",
            "let": "<b>let op</b>: DNA is geen stap in het rijtje, het is de stof waar chromosomen (en dus ook genen) van gemaakt zijn."
          },
          {
            "en": "huidcel, spiercel, cel uit een tulpenblad",
            "nl": "Allemaal lichaamscellen: ze maken deel uit van het lichaam.",
            "let": "<b>let op</b>: ook planten hebben lichaamscellen. Een eicel of zaadcel is géén lichaamscel."
          },
          {
            "en": "lange dunne draad",
            "nl": "Zo staat een chromosoom in de definitie.",
            "let": "<b>let op</b>: het X-plaatje uit boeken is een getekende versie, geen kort staafje dat altijd zo is."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is een <b>chromosoom</b>?",
            "o": [
              "Een kort X-vormig staafje dat los tussen de cellen in je bloed zweeft",
              "Een lange dunne draad in de celkern, gemaakt van DNA",
              "Een klein stukje DNA met de informatie voor precies één eigenschap",
              "De stof waar alle erfelijke informatie in je lichaam uit bestaat"
            ],
            "a": "Een lange dunne draad in de celkern, gemaakt van DNA",
            "w": "Een chromosoom is een lange dunne draad in de celkern die bestaat uit DNA en erfelijke informatie bevat.",
            "meer": "Bibliotheek → boek: de celkern is de bibliotheek, een chromosoom is een boek.",
            "fout": {
              "Een kort X-vormig staafje dat los tussen de cellen in je bloed zweeft": "Chromosomen liggen altijd in de celkern, niet los in je bloed. En het is een lange dunne draad; het X-plaatje is alleen een tekening.",
              "Een klein stukje DNA met de informatie voor precies één eigenschap": "Dat is een gen. Een chromosoom is veel groter: het bevat meerdere genen.",
              "De stof waar alle erfelijke informatie in je lichaam uit bestaat": "Dat is DNA: de stof. Een chromosoom is de draad die uit die stof gemaakt is."
            }
          },
          {
            "t": "gap",
            "q": "Een chromosoom is een lange dunne draad in de ___ die bestaat uit de stof DNA.",
            "a": "celkern|kern|celkernen",
            "soepel": true,
            "w": "Chromosomen liggen altijd in de celkern.",
            "meer": "De celkern is de bibliotheek van de cel: daar staan alle boeken (chromosomen)."
          },
          {
            "t": "gap",
            "q": "DNA is de stof waar ___ uit bestaan.",
            "a": "chromosomen|chromosoom",
            "soepel": true,
            "w": "DNA is de stof waar chromosomen uit bestaan; daarin is de informatie voor erfelijke eigenschappen opgeslagen.",
            "meer": "DNA is het papier en de inkt; een chromosoom is het boek dat ervan gemaakt is."
          },
          {
            "t": "gap",
            "q": "Een gen is een stukje ___ dat de informatie bevat voor één eigenschap.",
            "a": "DNA|dna|chromosoom",
            "soepel": true,
            "w": "Een gen bestaat uit stukjes DNA, dus een gen is een stukje van een chromosoom.",
            "meer": "Boek → recept: een gen is één recept in het boek."
          },
          {
            "t": "mc",
            "q": "Wat is een <b>lichaamscel</b>?",
            "o": [
              "Een eicel of zaadcel",
              "Een cel die onderdeel is van het lichaam van een organisme",
              "Alleen een cel van een mens of dier, niet van een plant"
            ],
            "a": "Een cel die onderdeel is van het lichaam van een organisme",
            "w": "Dat is de definitie. Huidcellen, spiercellen en cellen in een blad zijn allemaal lichaamscellen.",
            "meer": "Alles wat geen geslachtscel is, is een lichaamscel.",
            "fout": {
              "Een eicel of zaadcel": "Eicellen en zaadcellen zijn juist géén lichaamscellen: dat zijn geslachtscellen.",
              "Alleen een cel van een mens of dier, niet van een plant": "Ook planten bestaan uit lichaamscellen, bijvoorbeeld de cellen in een blad of een wortel."
            }
          },
          {
            "t": "mc",
            "q": "Waar liggen de chromosomen in een cel?",
            "o": [
              "Los in het bloed",
              "Alleen in de geslachtsorganen",
              "In de celkern",
              "Tussen twee cellen in"
            ],
            "a": "In de celkern",
            "w": "Chromosomen liggen altijd in de celkern.",
            "meer": "Kern = bibliotheek. De boeken liggen niet op straat, maar in de bibliotheek.",
            "fout": {
              "Los in het bloed": "Chromosomen zweven niet los rond; ze liggen in de celkern van elke cel.",
              "Alleen in de geslachtsorganen": "Elke celkern, ook in je huid of je spieren, bevat alle chromosomen.",
              "Tussen twee cellen in": "Ze liggen binnen in de cel, in de kern. Tussen de cellen ligt geen erfelijke informatie."
            }
          },
          {
            "t": "mc",
            "q": "Wat is een <b>gen</b>?",
            "o": [
              "Alle informatie voor al je erfelijke eigenschappen samen",
              "Een hele chromosoomdraad die de informatie bevat voor één eigenschap",
              "Stukjes DNA die samen de informatie bevatten voor één eigenschap",
              "Een cel die de informatie voor één eigenschap doorgeeft"
            ],
            "a": "Stukjes DNA die samen de informatie bevatten voor één eigenschap",
            "w": "Een gen is een stukje van een chromosoom, met informatie voor één eigenschap.",
            "meer": "Eén gen = één recept, bijvoorbeeld het recept voor je oogkleur.",
            "fout": {
              "Alle informatie voor al je erfelijke eigenschappen samen": "Dat is het genotype: álle genen samen. Een gen gaat over één eigenschap.",
              "Een hele chromosoomdraad die de informatie bevat voor één eigenschap": "Een chromosoom bevat juist meerdere genen. Een gen is maar een stukje ervan.",
              "Een cel die de informatie voor één eigenschap doorgeeft": "Een gen is geen cel, maar een stukje DNA ín de celkern."
            }
          },
          {
            "t": "mc",
            "q": "In de vergelijking <b>bibliotheek → boek → recept</b>: wat is het <b>recept</b>?",
            "o": [
              "Het chromosoom",
              "Het gen",
              "De celkern"
            ],
            "a": "Het gen",
            "w": "Een gen is de informatie voor één eigenschap, net als één recept voor één gerecht.",
            "meer": "Bibliotheek = celkern, boek = chromosoom, recept = gen.",
            "fout": {
              "Het chromosoom": "Het chromosoom is het boek: daar staan veel recepten (genen) in.",
              "De celkern": "De celkern is de bibliotheek waar alle boeken staan."
            }
          },
          {
            "t": "gap",
            "q": "Elke ___ van een organisme bevat alle chromosomen.",
            "a": "celkern|cel|kern|lichaamscel",
            "soepel": true,
            "w": "Elke celkern bevat alle chromosomen, dus alle erfelijke informatie van dat organisme.",
            "meer": "Elke cel heeft een complete bibliotheek, niet maar een paar boeken."
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu toepassen. Neem een huidcel van je knie en een cel uit je oog. Ze doen heel ander werk, maar in de kern liggen precies <b>dezelfde chromosomen</b>: elke celkern bevat <b>alle</b> chromosomen.",
          "Hoe zit het in elkaar? <b>Celkern</b> (groot) → <b>chromosoom</b> → <b>gen</b> (klein). Elk chromosoom bevat <b>meerdere genen</b>, dus informatie over meerdere eigenschappen. En alles is gemaakt van de stof <b>DNA</b>.",
          "Een cel gebruikt niet alle informatie die ze heeft. Een levercel heeft ook het recept voor haar, maar gebruikt het niet. Net als jij: je hebt een heel kookboek thuis, maar je kookt maar een paar recepten."
        ],
        "regel": "Elke lichaamscel heeft alle chromosomen; een chromosoom bevat meerdere genen; alles is van DNA.",
        "voorbeelden": [
          {
            "en": "spiercel en wangcel van Storm",
            "nl": "Allebei dezelfde chromosomen in de kern.",
            "let": "<b>let op</b>: ander werk betekent níet andere chromosomen."
          },
          {
            "en": "1 chromosoom = veel genen",
            "nl": "Eén boek met heel veel recepten.",
            "let": "<b>let op</b>: niet één gen per chromosoom."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm vergelijkt een huidcel van haar knie met een cel uit haar oog. Wat geldt voor de chromosomen in de kern?",
            "o": [
              "De huidcel heeft alleen de huid-informatie",
              "Ze hebben allebei alle chromosomen, dezelfde",
              "De oogcel heeft meer chromosomen, want ogen zijn ingewikkelder",
              "Huidcellen hebben geen DNA"
            ],
            "a": "Ze hebben allebei alle chromosomen, dezelfde",
            "w": "Elke celkern bevat alle chromosomen van dat organisme.",
            "meer": "Elke cel heeft de hele bibliotheek; ze leest alleen andere boeken.",
            "fout": {
              "De huidcel heeft alleen de huid-informatie": "Een huidcel gebruikt alleen de huid-informatie, maar ze hééft alles. Elke celkern bevat alle chromosomen.",
              "De oogcel heeft meer chromosomen, want ogen zijn ingewikkelder": "Het aantal chromosomen is in elke lichaamscel van jou hetzelfde, hoe ingewikkeld het orgaan ook is.",
              "Huidcellen hebben geen DNA": "Elke celkern bevat DNA, want chromosomen zijn gemaakt van DNA en elke kern heeft alle chromosomen."
            }
          },
          {
            "t": "mc",
            "q": "Is een cel uit het blad van een tulp een lichaamscel?",
            "o": [
              "Nee, planten hebben geen lichaamscellen, alleen dieren",
              "Ja, het is een deel van het lichaam van de plant",
              "Alleen als de cel in de wortel of de stengel zit"
            ],
            "a": "Ja, het is een deel van het lichaam van de plant",
            "w": "Alle organismen, ook planten, bestaan uit lichaamscellen.",
            "meer": "Een blad is een deel van het plantenlichaam, dus de cellen erin zijn lichaamscellen.",
            "fout": {
              "Nee, planten hebben geen lichaamscellen, alleen dieren": "Ook planten bestaan uit lichaamscellen; alleen eicellen en stuifmeelkorrels zijn geslachtscellen.",
              "Alleen als de cel in de wortel of de stengel zit": "Wortel, stengel, blad: het zijn allemaal delen van het lichaam van de plant, dus allemaal lichaamscellen."
            }
          },
          {
            "t": "mc",
            "q": "Welke cel is <b>geen</b> lichaamscel?",
            "o": [
              "Een spiercel in je been",
              "Een zaadcel",
              "Een cel uit de wortel van een boom",
              "Een huidcel op je hand"
            ],
            "a": "Een zaadcel",
            "w": "Een zaadcel is een geslachtscel, geen lichaamscel.",
            "meer": "Eicellen en zaadcellen (bij planten: eicellen en stuifmeelkorrels) zijn geslachtscellen.",
            "fout": {
              "Een spiercel in je been": "Een spiercel is onderdeel van je lichaam, dus een lichaamscel.",
              "Een cel uit de wortel van een boom": "Ook een wortel is een deel van het lichaam van een plant: lichaamscel.",
              "Een huidcel op je hand": "Huid hoort bij je lichaam: dit is een lichaamscel."
            }
          },
          {
            "t": "mc",
            "q": "Iemand heeft uit een drinkfles gedronken. In het speeksel zitten een paar wangcellen. Zit daar DNA in?",
            "o": [
              "Nee, DNA zit alleen in bloed, niet in speeksel",
              "Nee, DNA zit alleen in eicellen en zaadcellen",
              "Ja, elke celkern bevat alle chromosomen"
            ],
            "a": "Ja, elke celkern bevat alle chromosomen",
            "w": "Elke celkern bevat alle chromosomen, dus ook een wangcel heeft al het DNA.",
            "meer": "Daarom kan de politie DNA vinden op een fles of een kauwgom.",
            "fout": {
              "Nee, DNA zit alleen in bloed, niet in speeksel": "DNA zit in de kern van elke cel, niet alleen in bloed. Een wangcel heeft ook een kern met alle chromosomen.",
              "Nee, DNA zit alleen in eicellen en zaadcellen": "Elke celkern heeft alle chromosomen, ook lichaamscellen zoals wangcellen."
            }
          },
          {
            "t": "mc",
            "q": "Welke volgorde gaat van <b>groot naar klein</b>?",
            "o": [
              "gen → chromosoom → celkern",
              "celkern → gen → chromosoom",
              "celkern → chromosoom → gen",
              "chromosoom → celkern → gen"
            ],
            "a": "celkern → chromosoom → gen",
            "w": "In de kern liggen de chromosomen, en elk chromosoom bevat meerdere genen.",
            "meer": "Bibliotheek → boek → recept.",
            "fout": {
              "gen → chromosoom → celkern": "Dit is precies omgekeerd: van klein naar groot.",
              "celkern → gen → chromosoom": "Een gen is een stukje van een chromosoom, dus een gen is kleiner dan een chromosoom.",
              "chromosoom → celkern → gen": "De chromosomen liggen ín de celkern, dus de celkern is groter."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel genen liggen er op één chromosoom?",
            "o": [
              "Precies één",
              "Meerdere",
              "Geen, een chromosoom is alleen DNA"
            ],
            "a": "Meerdere",
            "w": "Elk chromosoom bevat meerdere genen, dus informatie over meerdere eigenschappen.",
            "meer": "Eén boek, veel recepten.",
            "fout": {
              "Precies één": "Een chromosoom is een lange draad met veel genen erop, net als een boek met veel recepten.",
              "Geen, een chromosoom is alleen DNA": "Genen zíjn stukjes DNA. Het DNA van een chromosoom bestaat dus juist uit genen."
            }
          },
          {
            "t": "gap",
            "q": "Elk chromosoom bevat meerdere ___, dus informatie over meerdere eigenschappen.",
            "a": "genen|gen",
            "soepel": true,
            "w": "Een gen is een stukje van een chromosoom; er liggen er veel op één chromosoom.",
            "meer": "Recepten in een boek."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: heeft een levercel ook de informatie voor de kleur van je haar?",
            "stappen": [
              {
                "toon": "Stap 1: een levercel is een lichaamscel met een celkern.",
                "uitleg": "Lichaamscellen hebben een kern."
              },
              {
                "toon": "Stap 2: elke celkern bevat alle chromosomen.",
                "uitleg": "Dat staat in de definitie van chromosoom."
              },
              {
                "toon": "Stap 3: op die chromosomen ligt ook het gen voor haarkleur.",
                "uitleg": "Alle genen liggen op de chromosomen."
              },
              {
                "toon": "Conclusie: ja, de levercel heeft die informatie, maar gebruikt hem niet.",
                "uitleg": "Hebben is iets anders dan gebruiken."
              }
            ],
            "waarom": {
              "q": "Waarom heeft de levercel die informatie?",
              "o": [
                "Omdat elke celkern alle chromosomen bevat",
                "Omdat de lever haar maakt",
                "Omdat levercellen meer chromosomen hebben dan andere cellen"
              ],
              "a": "Omdat elke celkern alle chromosomen bevat"
            },
            "fout": {
              "Omdat de lever haar maakt": "De lever maakt geen haar. De cel heeft de informatie wel, maar gebruikt hem niet.",
              "Omdat levercellen meer chromosomen hebben dan andere cellen": "Alle lichaamscellen van jou hebben evenveel chromosomen: allemaal."
            },
            "w": "Elke celkern heeft de complete bibliotheek, ook de boeken die die cel niet leest.",
            "meer": "Een levercel leest de 'lever-recepten'; het haar-recept blijft dicht."
          },
          {
            "t": "mc",
            "q": "Welke uitspraak klopt?",
            "o": [
              "Een chromosoom is een stukje van een gen",
              "Een gen is een stukje van een chromosoom",
              "DNA is gemaakt van chromosomen",
              "Een gen is groter dan een celkern"
            ],
            "a": "Een gen is een stukje van een chromosoom",
            "w": "Genen zijn stukjes DNA op een chromosoom.",
            "meer": "Recept in een boek, niet een boek in een recept.",
            "fout": {
              "Een chromosoom is een stukje van een gen": "Omgekeerd: een chromosoom bevat meerdere genen.",
              "DNA is gemaakt van chromosomen": "Omgekeerd: chromosomen zijn gemaakt van de stof DNA.",
              "Een gen is groter dan een celkern": "Een gen ligt op een chromosoom ín de celkern, dus het is veel kleiner."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Op Goud zet je de begrippen naast elkaar. <b>DNA</b> is de <b>stof</b>. Een <b>chromosoom</b> is een <b>draad</b> van die stof. Een <b>gen</b> is een <b>stukje</b> van die draad, met informatie voor één eigenschap. Drie woorden, drie niveaus: stof, draad, stukje.",
          "Twee misvattingen om te kunnen weerleggen: 'chromosomen zijn korte X-jes' (nee, een lange dunne draad) en 'alleen sommige cellen hebben DNA' (nee, elke celkern bevat alle chromosomen). Een spiercel maakt geen speeksel, maar heeft de informatie ervoor wel.",
          "Gebruik de bibliotheek: elke cel heeft <b>dezelfde</b> bibliotheek, maar elke cel leest andere recepten."
        ],
        "regel": "DNA = stof, chromosoom = draad van DNA, gen = stukje van die draad voor één eigenschap; elke kern heeft alles.",
        "voorbeelden": [
          {
            "en": "stof → draad → stukje",
            "nl": "DNA → chromosoom → gen.",
            "let": "<b>let op</b>: DNA en chromosoom zijn geen synoniemen: de stof en wat ervan gemaakt is."
          },
          {
            "en": "Spiercel maakt geen speeksel",
            "nl": "Toch heeft ze het gen ervoor.",
            "let": "<b>let op</b>: niet gebruiken is iets anders dan niet hebben."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In het biologieboek zie je chromosomen getekend als korte X-jes. Storm concludeert: 'Een chromosoom is dus een kort X-vormig staafje.' Klopt dat?",
            "o": [
              "Ja, zo ziet een chromosoom er in elke cel altijd uit",
              "Nee, het is een lange dunne draad; het X-je is een vereenvoudiging",
              "Ja, maar alleen in geslachtscellen; anders is het een draad"
            ],
            "a": "Nee, het is een lange dunne draad; het X-je is een vereenvoudiging",
            "w": "Volgens de definitie is een chromosoom een lange dunne draad in de celkern.",
            "meer": "Een tekening is een hulpmiddel. Net als een tekening van een voetbalveld: in het echt is het veel groter.",
            "fout": {
              "Ja, zo ziet een chromosoom er in elke cel altijd uit": "De definitie zegt: een lange dunne draad. Het X-plaatje laat niet zien hoe ze er altijd uitzien.",
              "Ja, maar alleen in geslachtscellen; anders is het een draad": "Ook in geslachtscellen is een chromosoom een draad van DNA. Het verschil met lichaamscellen zit in het aantal, niet in de vorm."
            }
          },
          {
            "t": "mc",
            "q": "Een spiercel maakt nooit speeksel. Heeft een spiercel de informatie voor het maken van speeksel?",
            "o": [
              "Nee, die informatie zit alleen in speekselklieren",
              "Ja, want elke celkern bevat alle chromosomen",
              "Nee, spiercellen hebben alleen spier-genen",
              "Alleen als je veel praat"
            ],
            "a": "Ja, want elke celkern bevat alle chromosomen",
            "w": "Elke celkern bevat alle chromosomen, dus alle informatie. Een cel gebruikt alleen wat ze nodig heeft.",
            "meer": "Hebben ≠ gebruiken.",
            "fout": {
              "Nee, die informatie zit alleen in speekselklieren": "Dan zou niet elke celkern alle chromosomen hebben. Dat doet ze wel; de spiercel gebruikt die informatie alleen niet.",
              "Nee, spiercellen hebben alleen spier-genen": "Een spiercel gebruikt vooral spier-genen, maar heeft ze allemaal.",
              "Alleen als je veel praat": "Wat je doet, verandert niet welke chromosomen in een cel liggen."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over DNA, chromosoom en gen is <b>juist</b>?",
            "o": [
              "DNA en chromosoom zijn twee woorden voor hetzelfde",
              "Een gen is een stof; DNA is een stukje van een gen",
              "DNA is de stof, een chromosoom de draad, een gen een stukje",
              "Een chromosoom bevat de informatie voor één eigenschap"
            ],
            "a": "DNA is de stof, een chromosoom de draad, een gen een stukje",
            "w": "Stof → draad → stukje: DNA → chromosoom → gen.",
            "meer": "Papier en inkt → boek → recept.",
            "fout": {
              "DNA en chromosoom zijn twee woorden voor hetzelfde": "DNA is de stof; een chromosoom is de draad die ervan gemaakt is. Net als: papier is geen boek.",
              "Een gen is een stof; DNA is een stukje van een gen": "Andersom: DNA is de stof, en een gen bestaat uit stukjes DNA.",
              "Een chromosoom bevat de informatie voor één eigenschap": "Dat is een gen. Een chromosoom bevat meerdere genen, dus meerdere eigenschappen."
            }
          },
          {
            "t": "mc",
            "q": "In de huidcel van een mens zitten 46 chromosomen. Hoeveel chromosomen zitten er in een hersencel van diezelfde persoon?",
            "o": [
              "23",
              "46",
              "Minder, want hersencellen delen niet vaak",
              "Meer, want hersenen zijn ingewikkeld"
            ],
            "a": "46",
            "w": "Elke lichaamscel van hetzelfde organisme bevat alle chromosomen, dus evenveel.",
            "meer": "Dezelfde bibliotheek in elke cel.",
            "fout": {
              "23": "23 is het aantal in een geslachtscel (eicel of zaadcel). Een hersencel is een lichaamscel.",
              "Minder, want hersencellen delen niet vaak": "Hoe vaak een cel deelt, verandert het aantal chromosomen in de kern niet.",
              "Meer, want hersenen zijn ingewikkeld": "Een ingewikkeld orgaan heeft niet meer chromosomen; elke lichaamscel heeft er evenveel."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over de bibliotheek-vergelijking klopt <b>niet</b>?",
            "o": [
              "Elke cel heeft een eigen bibliotheek met andere boeken",
              "De celkern is de bibliotheek waarin alle boeken staan",
              "Een chromosoom is een boek uit die bibliotheek",
              "Een gen is één recept in zo'n boek"
            ],
            "a": "Elke cel heeft een eigen bibliotheek met andere boeken",
            "w": "Elke celkern bevat alle chromosomen: elke cel heeft dus dezelfde, complete bibliotheek.",
            "meer": "Wel leest elke cel andere boeken; daarom doet een spiercel iets anders dan een huidcel.",
            "fout": {
              "De celkern is de bibliotheek waarin alle boeken staan": "Deze klopt wel: in de kern liggen alle chromosomen. Je zocht de uitspraak die níet klopt.",
              "Een chromosoom is een boek uit die bibliotheek": "Deze klopt wel: een chromosoom is een draad vol informatie, een boek vol recepten.",
              "Een gen is één recept in zo'n boek": "Deze klopt wel: een gen is informatie voor één eigenschap, één recept."
            }
          },
          {
            "t": "mc",
            "q": "Waarom zeg je dat een gen 'een stukje van een chromosoom' is?",
            "o": [
              "Een gen bestaat uit stukjes DNA van dat chromosoom",
              "Omdat een gen een losse cel is die aan een chromosoom vastzit",
              "Omdat een chromosoom kleiner is dan een gen"
            ],
            "a": "Een gen bestaat uit stukjes DNA van dat chromosoom",
            "w": "Een chromosoom is een lange draad DNA; een gen is een stukje van die draad.",
            "meer": "Een recept is een paar bladzijden uit een boek.",
            "fout": {
              "Omdat een gen een losse cel is die aan een chromosoom vastzit": "Een gen is geen cel. Het is een stukje DNA, en dat ligt op het chromosoom in de kern.",
              "Omdat een chromosoom kleiner is dan een gen": "Andersom: een chromosoom bevat meerdere genen, dus het is groter."
            }
          },
          {
            "t": "mc",
            "q": "Welke vergelijking past het best bij <b>één gen</b>?",
            "o": [
              "De hele bibliotheek met boeken",
              "Eén recept in een kookboek",
              "Het hele kookboek met recepten"
            ],
            "a": "Eén recept in een kookboek",
            "w": "Een gen bevat de informatie voor één eigenschap, net als één recept voor één gerecht.",
            "meer": "Het hele kookboek is een chromosoom; de bibliotheek is de celkern.",
            "fout": {
              "De hele bibliotheek met boeken": "De bibliotheek is de celkern, met álle chromosomen en genen.",
              "Het hele kookboek met recepten": "Het kookboek is het chromosoom: daarin staan meerdere recepten (genen)."
            }
          },
          {
            "t": "gap",
            "q": "Een gen bevat de informatie voor één ___ van een organisme.",
            "a": "eigenschap|eigenschappen|kenmerk",
            "soepel": true,
            "w": "Eén gen gaat over één eigenschap, bijvoorbeeld je oogkleur.",
            "meer": "Eén recept voor één gerecht."
          },
          {
            "t": "open",
            "q": "Leg uit waarom een cel uit je teen ook de informatie voor je oogkleur bevat.",
            "punten": 2,
            "modelantwoord": "Een teencel is een lichaamscel met een celkern. Elke celkern bevat alle chromosomen, dus ook het gen voor oogkleur. De teencel gebruikt die informatie alleen niet.",
            "sleutelwoorden": [
              {
                "moet": [
                  "chromosom"
                ],
                "syn": [
                  "dna",
                  "gen"
                ]
              },
              {
                "moet": [
                  "alle"
                ],
                "syn": [
                  "elke",
                  "ieder",
                  "allemaal",
                  "compleet"
                ]
              }
            ],
            "rubric": [
              "Noemt dat elke celkern alle chromosomen (al het DNA) bevat",
              "Noemt dat de cel die informatie wel heeft, maar niet gebruikt (of: dat het gen voor oogkleur daar dus ook op ligt)"
            ],
            "w": "Elke celkern bevat alle chromosomen, dus alle genen, ook als de cel ze niet gebruikt.",
            "meer": "Elke cel heeft de complete bibliotheek."
          }
        ]
      }
    ]
  },
  {
    "id": "celdeling",
    "emoji": "🧫",
    "titel": "T5 · Eén wordt twee",
    "kort": "Bij celdeling ontstaan uit één lichaamscel twee dezelfde dochtercellen; daarom worden eerst alle chromosomen gekopieerd.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Je schaaft je knie bij het keepen. Een week later is het wondje dicht met nieuwe huid. Waar komen die nieuwe cellen vandaan? Uit <b>celdeling</b>.",
          "<b>Bij celdeling ontstaan uit één lichaamscel, twee dezelfde nieuwe cellen.</b> Die twee hebben exact dezelfde chromosomen. Daarom worden <b>eerst alle chromosomen gekopieerd</b>, en pas dan deelt de cel.",
          "<b>De twee cellen die ontstaan uit de celdeling van één lichaamscel, noem je dochtercellen.</b> Denkfout: 'dochtercellen zijn vrouwelijk'. Nee! Het is gewoon de naam. Bij elk organisme, jong of oud, man of vrouw, heten ze dochtercellen. En een dochtercel kan later zelf ook weer delen."
        ],
        "regel": "Celdeling: eerst alle chromosomen kopiëren, dan delen: uit één lichaamscel ontstaan twee dezelfde dochtercellen.",
        "voorbeelden": [
          {
            "en": "1 cel → kopiëren → 2 dochtercellen",
            "nl": "Twee cellen met exact dezelfde chromosomen.",
            "let": "<b>let op</b>: zonder kopiëren zou elke dochtercel maar de helft krijgen."
          },
          {
            "en": "dochtercellen in een jongen",
            "nl": "Heten ook dochtercellen.",
            "let": "<b>let op</b>: 'dochter' heeft hier niets met man of vrouw te maken."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is <b>celdeling</b>?",
            "o": [
              "Uit één lichaamscel ontstaan twee dezelfde nieuwe cellen",
              "Twee cellen smelten samen tot één cel",
              "Een cel gaat dood en wordt opgeruimd",
              "Uit één cel ontstaan twee cellen met elk de helft van de chromosomen"
            ],
            "a": "Uit één lichaamscel ontstaan twee dezelfde nieuwe cellen",
            "w": "Dat is de definitie van celdeling.",
            "meer": "Eén wordt twee, en de twee zijn hetzelfde.",
            "fout": {
              "Twee cellen smelten samen tot één cel": "Dat is het omgekeerde. Bij celdeling wordt één cel juist twee.",
              "Een cel gaat dood en wordt opgeruimd": "Bij celdeling komen er juist cellen bij.",
              "Uit één cel ontstaan twee cellen met elk de helft van de chromosomen": "Bij celdeling worden de chromosomen eerst gekopieerd, dus krijgt elke dochtercel alles. De helft krijgen gebeurt bij meiose."
            }
          },
          {
            "t": "gap",
            "q": "Bij celdeling ontstaan uit één lichaamscel ___ dezelfde nieuwe cellen.",
            "a": "twee|2",
            "soepel": true,
            "w": "Eén cel deelt in twee dezelfde cellen.",
            "meer": "Eén wordt twee."
          },
          {
            "t": "gap",
            "q": "De twee cellen die ontstaan uit de celdeling van één lichaamscel noem je ___.",
            "a": "dochtercellen|dochtercel",
            "soepel": true,
            "w": "Zo heten ze, bij elk organisme.",
            "meer": "Niets met meisjes te maken: het is gewoon de naam."
          },
          {
            "t": "mc",
            "q": "Wat gebeurt er <b>eerst</b> bij celdeling?",
            "o": [
              "De cel splitst in tweeën",
              "Alle chromosomen worden gekopieerd",
              "De helft van de chromosomen gaat weg"
            ],
            "a": "Alle chromosomen worden gekopieerd",
            "w": "Eerst kopiëren, zodat elke dochtercel exact dezelfde chromosomen krijgt.",
            "meer": "Net als een tekening die je eerst kopieert voordat je er een weggeeft.",
            "fout": {
              "De cel splitst in tweeën": "Als de cel meteen splitst, krijgt elke helft maar een deel van de chromosomen. Daarom eerst kopiëren.",
              "De helft van de chromosomen gaat weg": "Er gaat niets weg; er komt juist een kopie bij."
            }
          },
          {
            "t": "mc",
            "q": "Waarom heten de nieuwe cellen <b>dochter</b>cellen?",
            "o": [
              "Omdat ze vrouwelijk zijn, net als een dochter",
              "Omdat ze alleen bij meisjes en vrouwen ontstaan",
              "Het is alleen een naam, los van man of vrouw"
            ],
            "a": "Het is alleen een naam, los van man of vrouw",
            "w": "Bij ieder organisme, jong of oud, man of vrouw, heten ze dochtercellen.",
            "meer": "Ook in een jongen of een kater heten ze dochtercellen.",
            "fout": {
              "Omdat ze vrouwelijk zijn, net als een dochter": "Een cel uit celdeling is niet vrouwelijk of mannelijk. Ook bij een man heten ze dochtercellen.",
              "Omdat ze alleen bij meisjes en vrouwen ontstaan": "Celdeling gebeurt in elk organisme, dus ook bij jongens en mannen; ook daar heten ze dochtercellen."
            }
          },
          {
            "t": "mc",
            "q": "Wat geldt voor de chromosomen van de twee dochtercellen?",
            "o": [
              "Ze hebben exact dezelfde chromosomen",
              "De ene heeft meer dan de andere",
              "Ze hebben elk de helft van de moedercel",
              "Ze hebben andere chromosomen dan de cel waar ze uit kwamen"
            ],
            "a": "Ze hebben exact dezelfde chromosomen",
            "w": "Omdat alles eerst gekopieerd wordt, krijgen ze exact dezelfde chromosomen.",
            "meer": "Twee identieke kopieën.",
            "fout": {
              "De ene heeft meer dan de andere": "Het kopiëren zorgt ervoor dat ze precies evenveel en dezelfde krijgen.",
              "Ze hebben elk de helft van de moedercel": "Dan was er niet gekopieerd. Bij celdeling krijgt elke dochtercel de complete set.",
              "Ze hebben andere chromosomen dan de cel waar ze uit kwamen": "De chromosomen worden gekopieerd, niet veranderd. Ze zijn dus hetzelfde."
            }
          },
          {
            "t": "mc",
            "q": "Kan een dochtercel later zelf ook weer delen?",
            "o": [
              "Nee, een dochtercel kan zelf nooit meer delen",
              "Ja, die kunnen later ook weer delen",
              "Alleen in vrouwen, want het zijn dochtercellen"
            ],
            "a": "Ja, die kunnen later ook weer delen",
            "w": "Een dochtercel is een gewone lichaamscel en kan zelf weer delen.",
            "meer": "1 → 2 → 4 → 8: zo groei je.",
            "fout": {
              "Nee, een dochtercel kan zelf nooit meer delen": "Dochtercellen kunnen wel weer delen; zo komen er steeds meer cellen.",
              "Alleen in vrouwen, want het zijn dochtercellen": "Dochtercellen hebben niets met vrouwen te maken; in elk organisme kunnen ze weer delen."
            }
          },
          {
            "t": "gap",
            "q": "Vóór de celdeling worden alle chromosomen eerst ___.",
            "a": "gekopieerd|verdubbeld|gekopiëerd|gekopierd",
            "soepel": true,
            "w": "Kopiëren zorgt ervoor dat beide dochtercellen alle chromosomen krijgen.",
            "meer": "Eerst kopiëren, dan delen."
          },
          {
            "t": "mc",
            "q": "Welke cel deelt zich bij gewone celdeling?",
            "o": [
              "Een geslachtscel die versmelt",
              "Een lichaamscel",
              "Alleen een eicel"
            ],
            "a": "Een lichaamscel",
            "w": "Bij celdeling ontstaan uit één lichaamscel twee dezelfde cellen.",
            "meer": "Huidcellen, spiercellen, bladcellen: allemaal lichaamscellen die kunnen delen.",
            "fout": {
              "Een geslachtscel die versmelt": "Versmelten is samengaan, niet delen. Dat is bevruchting.",
              "Alleen een eicel": "De definitie gaat over een lichaamscel; een eicel is een geslachtscel."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Je bent ooit begonnen als één cel: een bevruchte eicel. Door celdeling, steeds weer, ben je nu een heel lichaam. Elke keer worden de chromosomen eerst gekopieerd, dus elke lichaamscel van jou heeft dezelfde chromosomen.",
          "Rekenvoorbeeld: een huidcel heeft 46 chromosomen. Eerst wordt alles gekopieerd. Dan deelt de cel. Elke dochtercel krijgt weer <b>46</b>. Niet 23! Zonder kopiëren zou elke dochtercel maar een deel krijgen.",
          "Celdeling gebeurt als je groeit, als een wondje dicht moet, en ook bij planten als ze groeien."
        ],
        "regel": "Aantal chromosomen vóór celdeling = aantal in elke dochtercel.",
        "voorbeelden": [
          {
            "en": "46 → kopiëren → delen → 46 + 46",
            "nl": "Elke dochtercel heeft weer 46.",
            "let": "<b>let op</b>: niet 23. Halveren hoort niet bij gewone celdeling."
          },
          {
            "en": "zonnebloem groeit 2 meter",
            "nl": "Door celdeling komen er steeds cellen bij.",
            "let": "<b>let op</b>: de cellen worden niet groter en groter; er komen er meer."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm schaaft haar knie bij het keepen. Hoe ontstaan de nieuwe huidcellen die het wondje dichtmaken?",
            "o": [
              "Door celdeling van huidcellen eromheen",
              "Ze komen vanuit het bloed naar het wondje",
              "Twee huidcellen smelten samen tot één nieuwe"
            ],
            "a": "Door celdeling van huidcellen eromheen",
            "w": "Huidcellen in de buurt delen en maken nieuwe huidcellen.",
            "meer": "Een cel deelt normaal alleen als het nodig is, zoals na een wondje.",
            "fout": {
              "Ze komen vanuit het bloed naar het wondje": "Nieuwe huidcellen ontstaan door celdeling van huidcellen, niet uit het bloed.",
              "Twee huidcellen smelten samen tot één nieuwe": "Samensmelten maakt van twee cellen één; je hebt er juist meer nodig. Dat doet celdeling."
            }
          },
          {
            "t": "mc",
            "q": "Bij een jongen van tien deelt een spiercel. Hoe heten de twee nieuwe cellen?",
            "o": [
              "Zooncellen",
              "Dochtercellen",
              "Mannelijke cellen",
              "Geslachtscellen"
            ],
            "a": "Dochtercellen",
            "w": "Bij elk organisme, man of vrouw, heten ze dochtercellen.",
            "meer": "Dochtercel is een naam, geen geslacht.",
            "fout": {
              "Zooncellen": "Dat woord bestaat niet. Ook bij jongens heten ze dochtercellen.",
              "Mannelijke cellen": "Na celdeling ontstaan gewone lichaamscellen, geen 'mannelijke' cellen; de naam is dochtercellen.",
              "Geslachtscellen": "Geslachtscellen zijn eicellen en zaadcellen. Een spiercel deelt in twee nieuwe spiercellen: dochtercellen."
            }
          },
          {
            "t": "mc",
            "q": "Een huidcel met 46 chromosomen deelt. Hoeveel chromosomen heeft <b>elke</b> dochtercel?",
            "o": [
              "23",
              "92",
              "46"
            ],
            "a": "46",
            "w": "De chromosomen zijn eerst gekopieerd, dus elke dochtercel krijgt weer alle 46.",
            "meer": "Bij celdeling blijft het aantal per cel gelijk.",
            "fout": {
              "23": "Dan zouden de chromosomen niet gekopieerd zijn. Bij celdeling worden ze eerst gekopieerd, dus elke dochtercel krijgt 46.",
              "92": "Na het kopiëren zijn er tijdelijk dubbel zoveel, maar die worden over twee cellen verdeeld: 46 elk."
            }
          },
          {
            "t": "mc",
            "q": "Stel dat een cel zou delen <b>zonder</b> eerst te kopiëren. Wat zou er misgaan?",
            "o": [
              "Niets, de dochtercellen zijn dan net zo goed",
              "De dochtercellen zouden niet alle chromosomen hebben",
              "De dochtercellen zouden juist twee keer zoveel chromosomen hebben"
            ],
            "a": "De dochtercellen zouden niet alle chromosomen hebben",
            "w": "Zonder kopie wordt de set verdeeld, en mist elke dochtercel een deel.",
            "meer": "Daarom staat in de definitie: eerst alle chromosomen kopiëren.",
            "fout": {
              "Niets, de dochtercellen zijn dan net zo goed": "Dan zouden ze geen exact dezelfde, complete set hebben. Kopiëren is nodig.",
              "De dochtercellen zouden juist twee keer zoveel chromosomen hebben": "Zonder kopie is er niets extra; je verdeelt dan wat er is, dus elke cel krijgt minder."
            }
          },
          {
            "t": "mc",
            "q": "Een zonnebloem groeit in een zomer van 10 cm naar 2 meter. Hoe komen er zoveel cellen bij?",
            "o": [
              "Door celdeling",
              "Doordat de bestaande cellen enorm groot worden",
              "Door zaadcellen uit stuifmeel"
            ],
            "a": "Door celdeling",
            "w": "Ook planten groeien doordat lichaamscellen delen.",
            "meer": "1 → 2 → 4 → 8 → ... cellen.",
            "fout": {
              "Doordat de bestaande cellen enorm groot worden": "Cellen kunnen niet eindeloos groeien; er komen er vooral méér bij door celdeling.",
              "Door zaadcellen uit stuifmeel": "Stuifmeel is voor voortplanting, niet voor groei van de plant zelf. Groei gaat via celdeling."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: een cel van een kat heeft 38 chromosomen en deelt. Hoeveel chromosomen heeft elke dochtercel?",
            "stappen": [
              {
                "toon": "Stap 1: de cel heeft 38 chromosomen.",
                "uitleg": "Dat is het beginaantal."
              },
              {
                "toon": "Stap 2: eerst worden alle 38 gekopieerd.",
                "uitleg": "Celdeling begint altijd met kopiëren."
              },
              {
                "toon": "Stap 3: de cel deelt; elke dochtercel krijgt een complete set.",
                "uitleg": "Exact dezelfde chromosomen."
              },
              {
                "toon": "Antwoord: elke dochtercel heeft 38 chromosomen.",
                "uitleg": "Evenveel als de cel waar ze uit kwamen."
              }
            ],
            "waarom": {
              "q": "Waarom krijgt elke dochtercel 38 en niet 19?",
              "o": [
                "Omdat de chromosomen eerst gekopieerd zijn",
                "Omdat katten altijd een even aantal hebben",
                "Omdat de ene dochtercel er 38 krijgt en de andere 0"
              ],
              "a": "Omdat de chromosomen eerst gekopieerd zijn"
            },
            "fout": {
              "Omdat katten altijd een even aantal hebben": "Even of oneven verklaart niet waarom er niet gehalveerd wordt. Het kopiëren vooraf doet dat.",
              "Omdat de ene dochtercel er 38 krijgt en de andere 0": "Beide dochtercellen krijgen exact dezelfde chromosomen, dus allebei 38."
            },
            "w": "Eerst kopiëren, dan delen: het aantal per cel blijft gelijk.",
            "meer": "Halveren hoort bij meiose, niet bij celdeling."
          },
          {
            "t": "gap",
            "q": "Een huidcel met 46 chromosomen deelt. Elke dochtercel heeft dan ___ chromosomen.",
            "a": "46|zesenveertig",
            "soepel": true,
            "w": "Door het kopiëren vooraf heeft elke dochtercel weer 46.",
            "meer": "Celdeling: aantal blijft gelijk."
          },
          {
            "t": "mc",
            "q": "Wat is de goede volgorde bij celdeling?",
            "o": [
              "delen → kopiëren → twee dochtercellen",
              "kopiëren → delen → twee dochtercellen",
              "twee dochtercellen → kopiëren → delen"
            ],
            "a": "kopiëren → delen → twee dochtercellen",
            "w": "Eerst de chromosomen kopiëren, dan deelt de cel, en dan heb je twee dochtercellen.",
            "meer": "Eerst kopiëren, dan pas weggeven.",
            "fout": {
              "delen → kopiëren → twee dochtercellen": "Als je eerst deelt, krijgt elke helft maar een deel. Kopiëren moet eerst.",
              "twee dochtercellen → kopiëren → delen": "De dochtercellen zijn het resultaat, dus die komen aan het eind."
            }
          },
          {
            "t": "mc",
            "q": "Je bent begonnen als één bevruchte eicel. Hoe ben je zo groot geworden?",
            "o": [
              "Door heel vaak celdeling",
              "Die ene cel is gewoon heel groot gegroeid",
              "Door steeds nieuwe chromosomen uit je eten"
            ],
            "a": "Door heel vaak celdeling",
            "w": "Al je lichaamscellen zijn door celdeling ontstaan uit die ene bevruchte eicel.",
            "meer": "Daarom heeft elke lichaamscel van jou dezelfde chromosomen.",
            "fout": {
              "Die ene cel is gewoon heel groot gegroeid": "Je bestaat uit heel veel cellen, niet uit één reuzencel. Die zijn ontstaan door celdeling.",
              "Door steeds nieuwe chromosomen uit je eten": "Eten levert bouwstoffen, maar je chromosomen worden bij elke celdeling gekopieerd, niet uit eten gehaald."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Op Goud zet je <b>celdeling</b> naast <b>meiose</b>. Bij celdeling worden de chromosomen <b>eerst gekopieerd</b>, en krijgen beide dochtercellen <b>exact dezelfde</b> chromosomen: evenveel als eerst. Bij meiose worden de chromosomenparen juist <b>verdeeld</b> (niet eerst gekopieerd), en krijgt elke nieuwe geslachtscel de <b>helft</b>.",
          "Vergelijk het met een tekening die je maakt: wil je dat je vriendin en jij allebei de hele tekening hebben, dan maak je eerst een kopie. Knip je hem doormidden, dan heeft ieder maar de helft. Celdeling = eerst kopiëren.",
          "En 'dochtercel' blijft gewoon een naam. Ook een dochtercel van een dochtercel heet een dochtercel."
        ],
        "regel": "Celdeling: kopiëren + delen = twee cellen met dezelfde, complete set. Meiose: verdelen = elk de helft.",
        "voorbeelden": [
          {
            "en": "celdeling: 46 → 46 + 46",
            "nl": "Eerst kopiëren, dan delen.",
            "let": "<b>let op</b>: zelfde aantal, zelfde chromosomen."
          },
          {
            "en": "meiose: 46 → 23 + 23",
            "nl": "Paren verdeeld, niet gekopieerd.",
            "let": "<b>let op</b>: zo ontstaan geslachtscellen, geen lichaamscellen."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Welke beschrijving hoort bij <b>gewone celdeling</b> en niet bij meiose?",
            "o": [
              "De chromosomenparen worden verdeeld over twee geslachtscellen",
              "Elke nieuwe cel krijgt de helft van de chromosomen",
              "Twee nieuwe cellen met precies dezelfde chromosomen"
            ],
            "a": "Twee nieuwe cellen met precies dezelfde chromosomen",
            "w": "Celdeling geeft twee dezelfde cellen met de complete set.",
            "meer": "Celdeling = kopie maken. Meiose = verdelen.",
            "fout": {
              "De chromosomenparen worden verdeeld over twee geslachtscellen": "Dat is meiose: daar ontstaan geslachtscellen. Celdeling maakt lichaamscellen.",
              "Elke nieuwe cel krijgt de helft van de chromosomen": "De helft krijgen hoort bij meiose. Bij celdeling wordt eerst gekopieerd, dus elke cel krijgt alles."
            }
          },
          {
            "t": "mc",
            "q": "Storm schrijft: 'Na celdeling heeft elke dochtercel de helft van de chromosomen.' Wat is er fout?",
            "o": [
              "Niets, dat klopt: de chromosomen worden eerlijk verdeeld",
              "Ze worden eerst gekopieerd: elke cel krijgt alles",
              "Het is precies twee keer zoveel, niet de helft",
              "Alleen de vrouwelijke dochtercel krijgt de helft"
            ],
            "a": "Ze worden eerst gekopieerd: elke cel krijgt alles",
            "w": "Door het kopiëren vooraf krijgen beide dochtercellen een complete set.",
            "meer": "Ze verwart celdeling met meiose.",
            "fout": {
              "Niets, dat klopt: de chromosomen worden eerlijk verdeeld": "De helft krijgen is meiose. Bij celdeling ontstaan twee dezelfde cellen, met evenveel chromosomen als eerst.",
              "Het is precies twee keer zoveel, niet de helft": "De kopieën worden verdeeld, dus elke dochtercel heeft evenveel als de oorspronkelijke cel, niet het dubbele.",
              "Alleen de vrouwelijke dochtercel krijgt de helft": "Dochtercellen zijn niet vrouwelijk; het is alleen een naam. En ze krijgen allebei alles."
            }
          },
          {
            "t": "mc",
            "q": "Welke vergelijking past het best bij celdeling?",
            "o": [
              "Je knipt een tekening doormidden en geeft de helft weg",
              "Je kopieert je tekening en geeft één kopie weg",
              "Je gooit je tekening weg en begint helemaal opnieuw"
            ],
            "a": "Je kopieert je tekening en geeft één kopie weg",
            "w": "Eerst kopiëren, dan verdelen: allebei een complete, gelijke versie.",
            "meer": "Doormidden knippen lijkt meer op meiose: ieder de helft.",
            "fout": {
              "Je knipt een tekening doormidden en geeft de helft weg": "Dan heeft ieder maar de helft. Bij celdeling krijgen beide cellen de hele set.",
              "Je gooit je tekening weg en begint helemaal opnieuw": "Bij celdeling gaat er niets verloren en wordt er niets nieuws verzonnen; er wordt gekopieerd."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is het belangrijk dat beide dochtercellen <b>exact dezelfde</b> chromosomen krijgen?",
            "o": [
              "Zodat elke cel in je lichaam alle erfelijke informatie heeft",
              "Zodat de ene cel een jongen en de andere een meisje wordt",
              "Zodat er nieuwe eigenschappen ontstaan"
            ],
            "a": "Zodat elke cel in je lichaam alle erfelijke informatie heeft",
            "w": "Daardoor heeft elke celkern alle chromosomen.",
            "meer": "Elke cel krijgt de complete bibliotheek mee.",
            "fout": {
              "Zodat de ene cel een jongen en de andere een meisje wordt": "Dochtercellen hebben niets met jongen of meisje te maken. Ze zijn hetzelfde.",
              "Zodat er nieuwe eigenschappen ontstaan": "Bij celdeling ontstaat juist niets nieuws: de dochtercellen zijn exact hetzelfde."
            }
          },
          {
            "t": "mc",
            "q": "Een dochtercel deelt zelf ook weer. Hoe heten de twee cellen die dan ontstaan?",
            "o": [
              "Kleindochtercellen",
              "Dochtercellen",
              "Geslachtscellen",
              "Moedercellen"
            ],
            "a": "Dochtercellen",
            "w": "De twee cellen uit de celdeling van één lichaamscel heten altijd dochtercellen.",
            "meer": "Elke keer dat een lichaamscel deelt, heten de nieuwe cellen dochtercellen.",
            "fout": {
              "Kleindochtercellen": "Grappig bedacht, maar de naam blijft gewoon dochtercellen.",
              "Geslachtscellen": "Geslachtscellen ontstaan door meiose. Gewone celdeling geeft lichaamscellen: dochtercellen.",
              "Moedercellen": "De cel die deelt kun je de moedercel noemen, maar de nieuwe cellen heten dochtercellen."
            }
          },
          {
            "t": "mc",
            "q": "Waarom hebben een levercel en een huidcel van jou dezelfde chromosomen?",
            "o": [
              "Omdat ze toevallig dezelfde ouders hebben",
              "Door celdeling uit één bevruchte eicel",
              "Omdat ze in je lichaam hetzelfde werk doen",
              "Omdat ze elk de helft van je chromosomen hebben"
            ],
            "a": "Door celdeling uit één bevruchte eicel",
            "w": "Bij elke celdeling wordt alles gekopieerd, dus alle cellen hebben dezelfde chromosomen als die eerste cel.",
            "meer": "Kopie van een kopie van een kopie: steeds hetzelfde.",
            "fout": {
              "Omdat ze toevallig dezelfde ouders hebben": "Cellen hebben geen ouders. Ze stammen allemaal via celdeling af van één bevruchte eicel.",
              "Omdat ze in je lichaam hetzelfde werk doen": "Lever en huid doen heel ander werk. Toch hebben ze dezelfde chromosomen, door celdeling.",
              "Omdat ze elk de helft van je chromosomen hebben": "Lichaamscellen hebben juist álle chromosomen. Alleen geslachtscellen hebben de helft."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over celdeling en meiose klopt?",
            "o": [
              "Bij allebei worden de chromosomen eerst gekopieerd",
              "Celdeling maakt geslachtscellen, meiose maakt lichaamscellen",
              "Celdeling: aantal blijft gelijk; meiose: aantal halveert"
            ],
            "a": "Celdeling: aantal blijft gelijk; meiose: aantal halveert",
            "w": "Celdeling: kopiëren, dus gelijk aantal. Meiose: paren verdelen, dus de helft.",
            "meer": "46 → 46 (celdeling) tegen 46 → 23 (meiose).",
            "fout": {
              "Bij allebei worden de chromosomen eerst gekopieerd": "Bij meiose worden de paren juist verdeeld, niet eerst gekopieerd.",
              "Celdeling maakt geslachtscellen, meiose maakt lichaamscellen": "Andersom: celdeling maakt lichaamscellen, meiose maakt geslachtscellen."
            }
          },
          {
            "t": "gap",
            "q": "Na celdeling hebben de twee dochtercellen exact ___ chromosomen.",
            "a": "dezelfde|gelijke|evenveel|hetzelfde",
            "soepel": true,
            "w": "Door het kopiëren vooraf zijn de chromosomen van beide dochtercellen gelijk.",
            "meer": "Twee dezelfde nieuwe cellen."
          },
          {
            "t": "open",
            "q": "Leg uit waarom de chromosomen gekopieerd moeten worden voordat een cel deelt.",
            "punten": 2,
            "modelantwoord": "De twee dochtercellen moeten exact dezelfde chromosomen hebben, allemaal. Als je niet eerst kopieert, krijgt elke dochtercel maar een deel van de chromosomen.",
            "sleutelwoorden": [
              {
                "moet": [
                  "dochtercel"
                ],
                "syn": [
                  "nieuwe cel",
                  "twee cellen",
                  "beide cellen"
                ]
              },
              {
                "moet": [
                  "dezelfde"
                ],
                "syn": [
                  "alle",
                  "allemaal",
                  "compleet",
                  "helft",
                  "deel",
                  "gelijk"
                ]
              }
            ],
            "rubric": [
              "Noemt dat beide dochtercellen alle (dezelfde) chromosomen moeten krijgen",
              "Noemt wat er anders misgaat: elke cel krijgt maar een deel / de helft"
            ],
            "w": "Kopiëren zorgt dat beide dochtercellen een complete, gelijke set krijgen.",
            "meer": "Eerst kopiëren, dan delen."
          }
        ]
      }
    ]
  },
  {
    "id": "genotype-fenotype",
    "emoji": "🎂",
    "titel": "T5 · Recept en cake",
    "kort": "Genotype = alle informatie voor je erfelijke eigenschappen samen (het recept); fenotype = al je eigenschappen, ook niet-erfelijke en onzichtbare (de cake).",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Denk aan een <b>recept</b> voor een cake en de <b>cake</b> zelf. Het recept staat op papier; de cake kun je zien, ruiken en proeven. Zo is het ook met jou.",
          "Het <b>genotype</b> is het recept: <b>alle informatie voor je erfelijke eigenschappen samen</b>. Dus al je DNA, al je chromosomen, al je genen samen, die in één celkern zitten.",
          "Het <b>fenotype</b> is de cake: <b>alle eigenschappen van een organisme</b>. Dus ook eigenschappen die níet erfelijk zijn (een litteken, je taal), en ook eigenschappen die je níet aan de buitenkant ziet (je bloedgroep).",
          "Denkfout: 'genotype en fenotype zijn hetzelfde'. Nee: het genotype is alleen de erfelijke informatie; het fenotype is alles wat je bent en hebt."
        ],
        "regel": "Genotype = alle erfelijke informatie samen (recept); fenotype = alle eigenschappen, erfelijk of niet, zichtbaar of niet (cake).",
        "voorbeelden": [
          {
            "en": "recept → cake",
            "nl": "genotype → fenotype",
            "let": "<b>let op</b>: aan de cake kan meer gebeuren dan in het recept staat (te heet gebakken, versiering)."
          },
          {
            "en": "bloedgroep",
            "nl": "Hoort bij je fenotype, ook al zie je hem niet.",
            "let": "<b>let op</b>: fenotype is niet alleen wat je ziet."
          },
          {
            "en": "litteken op je knie",
            "nl": "Fenotype, maar niet genotype.",
            "let": "<b>let op</b>: een litteken staat niet in je DNA."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Het genotype is alle informatie voor je ___ eigenschappen samen.",
            "a": "erfelijke|erfelijk",
            "soepel": true,
            "w": "Het genotype is alleen de erfelijke informatie: al je DNA samen.",
            "meer": "Genotype = het recept."
          },
          {
            "t": "gap",
            "q": "Het fenotype is alle ___ van een organisme.",
            "a": "eigenschappen|eigenschap|kenmerken",
            "soepel": true,
            "w": "Alle eigenschappen: erfelijk én niet-erfelijk, zichtbaar én onzichtbaar.",
            "meer": "Fenotype = de cake."
          },
          {
            "t": "mc",
            "q": "Wat is het <b>genotype</b>?",
            "o": [
              "Alle eigenschappen die je aan de buitenkant kunt zien",
              "Alle informatie voor je erfelijke eigenschappen samen",
              "Eén gen voor één eigenschap",
              "Alle eigenschappen van een organisme"
            ],
            "a": "Alle informatie voor je erfelijke eigenschappen samen",
            "w": "Al je DNA, al je chromosomen, al je genen samen: dat is je genotype.",
            "meer": "Geno = genen. Genotype = al je genen.",
            "fout": {
              "Alle eigenschappen die je aan de buitenkant kunt zien": "Eigenschappen die je kunt zien horen bij het fenotype, niet het genotype.",
              "Eén gen voor één eigenschap": "Dat is één gen. Het genotype is álle genen samen.",
              "Alle eigenschappen van een organisme": "Dat is het fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het <b>fenotype</b>?",
            "o": [
              "Alleen de eigenschappen die je kunt zien",
              "Alle eigenschappen van een organisme",
              "Alle informatie in je DNA",
              "Alleen de erfelijke eigenschappen"
            ],
            "a": "Alle eigenschappen van een organisme",
            "w": "Het fenotype is alles: erfelijk en niet-erfelijk, zichtbaar en onzichtbaar.",
            "meer": "De hele cake, ook de binnenkant.",
            "fout": {
              "Alleen de eigenschappen die je kunt zien": "Ook onzichtbare eigenschappen, zoals je bloedgroep, horen bij het fenotype.",
              "Alle informatie in je DNA": "Dat is het genotype, het recept.",
              "Alleen de erfelijke eigenschappen": "Ook niet-erfelijke eigenschappen, zoals een litteken, horen bij het fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Hoort een <b>niet-erfelijke</b> eigenschap bij het fenotype?",
            "o": [
              "Ja, het fenotype is álle eigenschappen",
              "Nee, het fenotype is alleen erfelijk",
              "Alleen als je het kunt zien"
            ],
            "a": "Ja, het fenotype is álle eigenschappen",
            "w": "Het fenotype bevat ook niet-erfelijke eigenschappen.",
            "meer": "Een litteken of je taal hoort bij je fenotype.",
            "fout": {
              "Nee, het fenotype is alleen erfelijk": "Alleen erfelijk is het genotype. Het fenotype is alles.",
              "Alleen als je het kunt zien": "Ook wat je niet ziet hoort erbij. Het fenotype is álle eigenschappen."
            }
          },
          {
            "t": "mc",
            "q": "In de vergelijking <b>recept → cake</b>: wat is de cake?",
            "o": [
              "Het genotype",
              "Het fenotype",
              "Een gen"
            ],
            "a": "Het fenotype",
            "w": "De cake is wat er echt is: al je eigenschappen. Dat is het fenotype.",
            "meer": "Het recept is het genotype.",
            "fout": {
              "Het genotype": "Het genotype is het recept: de informatie. De cake zelf is het fenotype.",
              "Een gen": "Een gen is één stukje van het recept, voor één eigenschap."
            }
          },
          {
            "t": "mc",
            "q": "Je bloedgroep kun je niet zien. Hoort hij bij je fenotype?",
            "o": [
              "Nee, het fenotype is alleen wat je aan de buitenkant ziet",
              "Ja, ook onzichtbare eigenschappen tellen mee",
              "Nee, bloedgroep hoort alleen bij het genotype"
            ],
            "a": "Ja, ook onzichtbare eigenschappen tellen mee",
            "w": "Het fenotype is alle eigenschappen, ook die je niet aan de buitenkant ziet.",
            "meer": "De binnenkant van de cake hoort ook bij de cake.",
            "fout": {
              "Nee, het fenotype is alleen wat je aan de buitenkant ziet": "Dat is de bekendste denkfout. Fenotype = álle eigenschappen, ook onzichtbare.",
              "Nee, bloedgroep hoort alleen bij het genotype": "De informatie voor je bloedgroep staat in je genotype, maar de bloedgroep zelf is een eigenschap: fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Waar ligt je genotype?",
            "o": [
              "Alleen in je geslachtsorganen: in eicellen of zaadcellen",
              "In je bloed: daar zwemmen al je genen en chromosomen",
              "In de celkern: al je DNA, chromosomen en genen samen"
            ],
            "a": "In de celkern: al je DNA, chromosomen en genen samen",
            "w": "Het genotype is alle erfelijke informatie die in één celkern zit.",
            "meer": "De hele bibliotheek in de kern.",
            "fout": {
              "Alleen in je geslachtsorganen: in eicellen of zaadcellen": "Elke celkern bevat alle chromosomen, dus het hele genotype.",
              "In je bloed: daar zwemmen al je genen en chromosomen": "Het genotype zit in de celkernen, niet los in het bloed."
            }
          },
          {
            "t": "gap",
            "q": "Ook eigenschappen die je niet aan de buitenkant kunt ___, horen bij het fenotype.",
            "a": "zien",
            "soepel": true,
            "w": "Fenotype = zichtbare én onzichtbare eigenschappen.",
            "meer": "Bijvoorbeeld je bloedgroep."
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu sorteren. Stel bij elke eigenschap twee vragen: <b>1. Is het een eigenschap van mij?</b> Dan hoort het bij het fenotype (bijna altijd ja). <b>2. Staat het in mijn DNA, is het erfelijk?</b> Alleen dan staat de informatie in het genotype.",
          "Een litteken van een val bij het keepen: fenotype ja, genotype nee. Nederlands spreken: fenotype ja, genotype nee (je hebt het geleerd). Bruine huid door de zon na een zomer zwemmen buiten: fenotype ja, genotype nee. Je natuurlijke oogkleur: fenotype ja, en de informatie staat in je genotype.",
          "Gespierde benen door voetbaltraining? Het fenotype verandert, je genotype niet. Je haar paars verven? Fenotype anders, genotype nog steeds 'bruin haar'."
        ],
        "regel": "Fenotype: is het een eigenschap van mij? Genotype: staat het in mijn DNA (erfelijk)?",
        "voorbeelden": [
          {
            "en": "litteken, taal, bruin door de zon",
            "nl": "Wel fenotype, niet genotype.",
            "let": "<b>let op</b>: wat je leert of oploopt, staat niet in je DNA."
          },
          {
            "en": "natuurlijke oogkleur",
            "nl": "Fenotype, en de informatie zit in je genotype.",
            "let": "<b>let op</b>: een erfelijke eigenschap hoort bij allebei."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm heeft een litteken op haar knie van een duik in het doel. Waar hoort dat litteken bij?",
            "o": [
              "Bij haar fenotype, maar niet bij haar genotype",
              "Bij haar genotype, want het zit op haar lichaam",
              "Bij allebei",
              "Bij geen van beide"
            ],
            "a": "Bij haar fenotype, maar niet bij haar genotype",
            "w": "Een litteken is een eigenschap (fenotype) maar staat niet in je DNA (geen genotype).",
            "meer": "Een deuk in de cake staat niet in het recept.",
            "fout": {
              "Bij haar genotype, want het zit op haar lichaam": "Op je lichaam zitten betekent fenotype. Het genotype is alleen erfelijke informatie, en een litteken is niet erfelijk.",
              "Bij allebei": "Het litteken staat niet in haar DNA; ze krijgt het niet door aan haar kinderen. Dus niet genotype.",
              "Bij geen van beide": "Het is wel een eigenschap van haar, en alle eigenschappen horen bij het fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Je spreekt Nederlands. Hoort dat bij je genotype?",
            "o": [
              "Ja, je ouders spreken ook Nederlands",
              "Nee, een taal leer je; het hoort wel bij je fenotype",
              "Ja, maar alleen als je in Nederland geboren bent"
            ],
            "a": "Nee, een taal leer je; het hoort wel bij je fenotype",
            "w": "Taal is aangeleerd, niet erfelijk. Het is wel een eigenschap van jou: fenotype.",
            "meer": "Een baby uit Nederland die in Japan opgroeit, spreekt Japans.",
            "fout": {
              "Ja, je ouders spreken ook Nederlands": "Je hebt het van je ouders geleerd, niet geërfd via je DNA. Het staat dus niet in je genotype.",
              "Ja, maar alleen als je in Nederland geboren bent": "Waar je geboren bent, verandert je DNA niet. Taal is altijd aangeleerd."
            }
          },
          {
            "t": "mc",
            "q": "Iemand verft haar bruine haar paars. Wat verandert er?",
            "o": [
              "Alleen het fenotype",
              "Alleen het genotype",
              "Allebei",
              "Niets"
            ],
            "a": "Alleen het fenotype",
            "w": "De haarkleur (eigenschap) is anders, maar in het DNA staat nog steeds 'bruin haar'.",
            "meer": "Versiering op de cake verandert het recept niet.",
            "fout": {
              "Alleen het genotype": "Verf komt niet in je DNA. Het genotype blijft gelijk.",
              "Allebei": "Het genotype verandert niet door verf; anders kregen je kinderen paars haar.",
              "Niets": "De haarkleur is wel anders, en haarkleur is een eigenschap: het fenotype verandert."
            }
          },
          {
            "t": "mc",
            "q": "Na een zomer veel buiten zwemmen is je huid bruiner. Wat is er veranderd?",
            "o": [
              "Je genotype, want je huid is anders",
              "Je fenotype, niet je genotype",
              "Niets, want huidkleur is erfelijk"
            ],
            "a": "Je fenotype, niet je genotype",
            "w": "Bruin worden door de zon is een invloed van buitenaf: het fenotype verandert, het DNA niet.",
            "meer": "Na de winter wordt je huid weer lichter: het recept was niet veranderd.",
            "fout": {
              "Je genotype, want je huid is anders": "Dat je huid er anders uitziet, is fenotype. De zon verandert je erfelijke informatie niet.",
              "Niets, want huidkleur is erfelijk": "Je natuurlijke huidkleur is erfelijk, maar bruin worden door de zon verandert je fenotype wel."
            }
          },
          {
            "t": "mc",
            "q": "Een voetballer heeft door jaren training sterke beenspieren. Hoe zit dat?",
            "o": [
              "De training heeft haar genotype veranderd",
              "Het fenotype is veranderd door training; het genotype niet",
              "Gespierdheid is helemaal niet erfelijk en hoort dus nergens bij"
            ],
            "a": "Het fenotype is veranderd door training; het genotype niet",
            "w": "Training verandert je lichaam (fenotype), maar niet je DNA.",
            "meer": "Erfelijke aanleg plus training samen bepalen hoe gespierd je bent.",
            "fout": {
              "De training heeft haar genotype veranderd": "Trainen verandert je DNA niet. Haar kinderen worden niet gespierd geboren door haar training.",
              "Gespierdheid is helemaal niet erfelijk en hoort dus nergens bij": "Gespierdheid is een eigenschap, dus fenotype. Het hoort dus zeker ergens bij."
            }
          },
          {
            "t": "mc",
            "q": "Welke eigenschap kun je <b>niet zien</b> en hoort toch bij het fenotype?",
            "o": [
              "Je haarkleur",
              "Je bloedgroep",
              "Je lengte",
              "Een tatoeage"
            ],
            "a": "Je bloedgroep",
            "w": "Je bloedgroep zie je niet aan de buitenkant, maar het is wel een eigenschap: fenotype.",
            "meer": "Fenotype = zichtbaar én onzichtbaar.",
            "fout": {
              "Je haarkleur": "Haarkleur hoort bij het fenotype, maar die kun je wél zien.",
              "Je lengte": "Lengte is fenotype, maar die zie je gewoon.",
              "Een tatoeage": "Een tatoeage hoort bij het fenotype, maar je ziet hem juist wel."
            }
          },
          {
            "t": "mc",
            "q": "Storm heeft van nature groene ogen. Waar hoort dat bij?",
            "o": [
              "Alleen bij haar genotype, want het is erfelijk",
              "Alleen bij haar fenotype, want je ziet het",
              "Fenotype, met de informatie in haar genotype"
            ],
            "a": "Fenotype, met de informatie in haar genotype",
            "w": "Oogkleur is een eigenschap (fenotype) én erfelijk, dus de informatie staat in het genotype.",
            "meer": "Erfelijke eigenschap: recept én cake.",
            "fout": {
              "Alleen bij haar genotype, want het is erfelijk": "Haar oogkleur is ook een eigenschap die je kunt zien, dus hoort hij ook bij het fenotype.",
              "Alleen bij haar fenotype, want je ziet het": "Een natuurlijke oogkleur is erfelijk: de informatie ervoor staat in haar DNA, dus in haar genotype."
            }
          },
          {
            "t": "gap",
            "q": "Een litteken hoort wel bij je ___, maar niet bij je genotype.",
            "a": "fenotype|fenotypen",
            "soepel": true,
            "w": "Een litteken is een eigenschap, maar niet erfelijk.",
            "meer": "Fenotype = alles; genotype = alleen erfelijk."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: hoort 'goed kunnen tekenen' bij genotype, fenotype of allebei?",
            "stappen": [
              {
                "toon": "Vraag 1: is het een eigenschap van jou? Ja.",
                "uitleg": "Dus het hoort bij je fenotype."
              },
              {
                "toon": "Vraag 2: staat het als kant-en-klare informatie in je DNA? Nee, je hebt het geoefend.",
                "uitleg": "Aangeleerde dingen staan niet in je genotype."
              },
              {
                "toon": "Conclusie: fenotype.",
                "uitleg": "Net als een taal of een litteken."
              }
            ],
            "waarom": {
              "q": "Waarom hoort goed tekenen bij het fenotype?",
              "o": [
                "Omdat het fenotype alle eigenschappen is, ook aangeleerde",
                "Omdat je het kunt zien en alles wat je ziet genotype is",
                "Omdat je het van je ouders erft"
              ],
              "a": "Omdat het fenotype alle eigenschappen is, ook aangeleerde"
            },
            "fout": {
              "Omdat je het kunt zien en alles wat je ziet genotype is": "Wat je ziet is fenotype, niet genotype. En het fenotype is ook wat je niet ziet.",
              "Omdat je het van je ouders erft": "Tekenen leer je door oefenen. Het fenotype bevat ook eigenschappen die je niet erft."
            },
            "w": "Twee vragen: is het een eigenschap (fenotype)? Staat het in mijn DNA (genotype)?",
            "meer": "Oefenen verandert de cake, niet het recept."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Op Goud zet je ze tegen elkaar. Het <b>genotype</b> is alleen de erfelijke informatie: het recept. Het <b>fenotype</b> is alles wat er uiteindelijk is: de cake. Twee bakkers met hetzelfde recept kunnen een andere cake bakken als de oven anders staat. Zo heeft een eeneiige tweeling hetzelfde genotype, maar kan de een een litteken hebben en de ander niet.",
          "Let op de richting: niet elke eigenschap in het fenotype staat in het genotype. Een litteken, taal, gespierdheid door training, bruin door de zon: wel fenotype, niet genotype.",
          "En onthoud: ook wat je niet ziet, zoals je bloedgroep, is fenotype."
        ],
        "regel": "Zelfde genotype ≠ zelfde fenotype: invloeden van buiten veranderen het fenotype, nooit het genotype.",
        "voorbeelden": [
          {
            "en": "eeneiige tweeling",
            "nl": "Zelfde genotype, toch verschillend fenotype.",
            "let": "<b>let op</b>: verschil komt door leefstijl en omgeving."
          },
          {
            "en": "zelfde recept, andere oven",
            "nl": "Andere cake.",
            "let": "<b>let op</b>: het recept zelf is niet veranderd."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een eeneiige tweeling heeft hetzelfde genotype. De een heeft een litteken en spreekt Frans, de ander niet. Wat klopt?",
            "o": [
              "Hun genotype is door het litteken anders geworden",
              "Hun genotype is hetzelfde, hun fenotype verschilt",
              "Ze hebben allebei hetzelfde fenotype, want het genotype is gelijk"
            ],
            "a": "Hun genotype is hetzelfde, hun fenotype verschilt",
            "w": "Het litteken en de taal zijn niet-erfelijke eigenschappen: alleen het fenotype verschilt.",
            "meer": "Zelfde recept, toch twee verschillende cakes.",
            "fout": {
              "Hun genotype is door het litteken anders geworden": "Een litteken verandert je DNA niet. Het genotype blijft hetzelfde.",
              "Ze hebben allebei hetzelfde fenotype, want het genotype is gelijk": "Het fenotype bevat ook niet-erfelijke eigenschappen. Die kunnen verschillen."
            }
          },
          {
            "t": "mc",
            "q": "Iemand zegt: 'Genotype en fenotype zijn eigenlijk hetzelfde.' Wat is het beste weerwoord?",
            "o": [
              "Klopt, het zijn twee woorden voor hetzelfde: je DNA",
              "Nee: genotype is erfelijke informatie, fenotype al je eigenschappen",
              "Nee: het genotype is wat je ziet, het fenotype is wat je niet ziet"
            ],
            "a": "Nee: genotype is erfelijke informatie, fenotype al je eigenschappen",
            "w": "Recept tegen cake: de informatie tegenover alles wat er echt is.",
            "meer": "Een litteken bewijst het: wel fenotype, niet genotype.",
            "fout": {
              "Klopt, het zijn twee woorden voor hetzelfde: je DNA": "Alleen het genotype is je DNA. Het fenotype zijn je eigenschappen.",
              "Nee: het genotype is wat je ziet, het fenotype is wat je niet ziet": "Het genotype is informatie in je DNA. Het fenotype is zichtbaar én onzichtbaar."
            }
          },
          {
            "t": "mc",
            "q": "Twee bakkers gebruiken precies hetzelfde recept. Bij de een staat de oven te heet en de cake is aangebrand. Waar lijkt dat op?",
            "o": [
              "Zelfde genotype, ander fenotype door invloed van buiten",
              "Ander genotype, zelfde fenotype door invloed van buiten",
              "Het recept (genotype) is veranderd door de hete oven"
            ],
            "a": "Zelfde genotype, ander fenotype door invloed van buiten",
            "w": "Het recept (genotype) is gelijk; de omgeving (oven) maakt de cake (fenotype) anders.",
            "meer": "Zon, training, een val: allemaal 'ovens'.",
            "fout": {
              "Ander genotype, zelfde fenotype door invloed van buiten": "Het recept is juist gelijk en de cakes zijn verschillend. Precies andersom.",
              "Het recept (genotype) is veranderd door de hete oven": "De oven verandert het papier met het recept niet. Zo verandert de zon je DNA niet."
            }
          },
          {
            "t": "mc",
            "q": "Kun je je genotype veranderen door elke dag te zwemmen?",
            "o": [
              "Ja, als je het maar lang genoeg elke dag volhoudt",
              "Nee, alleen je fenotype verandert",
              "Ja, maar alleen bij kinderen die nog groeien"
            ],
            "a": "Nee, alleen je fenotype verandert",
            "w": "Zwemmen verandert je lichaam (fenotype), niet je erfelijke informatie.",
            "meer": "Je kinderen krijgen jouw zwemconditie niet mee.",
            "fout": {
              "Ja, als je het maar lang genoeg elke dag volhoudt": "Hoe lang je ook traint, je DNA verandert er niet door.",
              "Ja, maar alleen bij kinderen die nog groeien": "Ook bij kinderen verandert training alleen het fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak is <b>juist</b>?",
            "o": [
              "Elke eigenschap in je fenotype staat in je genotype",
              "Je fenotype bevat alleen eigenschappen die je kunt zien",
              "Niet elke eigenschap in je fenotype staat in je genotype"
            ],
            "a": "Niet elke eigenschap in je fenotype staat in je genotype",
            "w": "Niet-erfelijke eigenschappen (litteken, taal) horen bij het fenotype maar staan niet in het genotype.",
            "meer": "Fenotype is groter dan genotype: alles tegen alleen het erfelijke.",
            "fout": {
              "Elke eigenschap in je fenotype staat in je genotype": "Een litteken is fenotype, maar staat niet in je DNA. Dus niet elke.",
              "Je fenotype bevat alleen eigenschappen die je kunt zien": "Ook onzichtbare eigenschappen, zoals je bloedgroep, horen bij het fenotype."
            }
          },
          {
            "t": "mc",
            "q": "Sam is van nature donker. Lisa is van nature licht, maar na de zomer bruin. Bij wie zit de bruine huidkleur in het genotype?",
            "o": [
              "Bij allebei",
              "Alleen bij Sam",
              "Alleen bij Lisa",
              "Bij geen van beiden"
            ],
            "a": "Alleen bij Sam",
            "w": "Sams huidkleur is erfelijk; Lisa is bruin door de zon, en dat staat niet in haar DNA.",
            "meer": "Beiden hebben een bruine huid in het fenotype, maar alleen bij Sam komt het uit het recept.",
            "fout": {
              "Bij allebei": "Lisa werd bruin door de zon. Dat verandert alleen haar fenotype, niet haar genotype.",
              "Alleen bij Lisa": "Lisa is van nature licht; haar genotype zegt 'licht'. Bij haar is het bruin alleen fenotype.",
              "Bij geen van beiden": "Sam is van nature donker: die informatie staat wel in zijn genotype."
            }
          },
          {
            "t": "mc",
            "q": "Iemand heeft bloedgroep A. Hoe zit dat?",
            "o": [
              "Het is geen fenotype, want je kunt je bloedgroep niet zien",
              "Bloedgroep is fenotype; de informatie staat in je genotype",
              "Het is alleen genotype, want het zit in je bloed"
            ],
            "a": "Bloedgroep is fenotype; de informatie staat in je genotype",
            "w": "Bloedgroep is erfelijk én een eigenschap: dus informatie in het genotype en eigenschap in het fenotype.",
            "meer": "Onzichtbaar betekent niet: geen fenotype.",
            "fout": {
              "Het is geen fenotype, want je kunt je bloedgroep niet zien": "Het fenotype bevat ook eigenschappen die je niet ziet.",
              "Het is alleen genotype, want het zit in je bloed": "Het genotype is informatie in je celkernen. De bloedgroep zelf is een eigenschap, dus fenotype."
            }
          },
          {
            "t": "gap",
            "q": "Een eigenschap die je krijgt door de zon, door training of door oefenen, is niet ___.",
            "a": "erfelijk|erfelijke",
            "soepel": true,
            "w": "Zulke eigenschappen horen bij het fenotype, niet bij het genotype.",
            "meer": "Het recept verandert er niet door."
          },
          {
            "t": "open",
            "q": "Leg met een voorbeeld uit wat het verschil is tussen genotype en fenotype.",
            "punten": 2,
            "modelantwoord": "Het genotype is alle informatie voor je erfelijke eigenschappen samen (je DNA). Het fenotype is al je eigenschappen, ook niet-erfelijke. Voorbeeld: een litteken hoort bij je fenotype, maar niet bij je genotype.",
            "sleutelwoorden": [
              {
                "moet": [
                  "erfelijk"
                ],
                "syn": [
                  "dna",
                  "genen",
                  "chromosom",
                  "informatie"
                ]
              },
              {
                "moet": [
                  "eigenschap"
                ],
                "syn": [
                  "litteken",
                  "taal",
                  "zon",
                  "training",
                  "bloedgroep",
                  "geverfd",
                  "verf"
                ]
              }
            ],
            "rubric": [
              "Genotype = erfelijke informatie (DNA); fenotype = alle eigenschappen, ook niet-erfelijke",
              "Geeft een passend voorbeeld van iets dat wel fenotype maar niet genotype is (of andersom goed uitgelegd)"
            ],
            "w": "Genotype is het recept, fenotype de cake.",
            "meer": "Een litteken is het makkelijkste voorbeeld."
          }
        ]
      }
    ]
  },
  {
    "id": "chromosomenparen",
    "emoji": "🧦",
    "titel": "T5 · Alles in paren",
    "kort": "In lichaamscellen liggen chromosomen in paren (mens: 46 = 23 paren), in geslachtscellen enkelvoudig (mens: 23); het 23e paar bepaalt het geslacht (XX of XY), en elk paar heeft één chromosoom van vader en één van moeder.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Denk aan je sokkenla: sokken horen in <b>paren</b>. Zo liggen chromosomen in een <b>lichaamscel</b> ook in paren, een 2-tal. Daarom is het aantal altijd <b>even</b>. Een mens heeft <b>46</b> chromosomen in een lichaamscel: <b>23 paren</b>.",
          "In <b>geslachtscellen</b> (eicellen en zaadcellen, bij planten eicellen en stuifmeelkorrels) liggen ze <b>enkelvoudig</b>: van elk paar maar één. Een menselijke geslachtscel heeft dus <b>23</b> chromosomen. Dat aantal kan oneven zijn.",
          "<b>Geslachtschromosomen</b> zijn <b>de chromosomen van een organisme die het geslacht bepalen van dat organisme</b>. Bij de mens is dat het <b>23e paar</b>. Er zijn twee soorten: X en Y. Een vrouw heeft <b>XX</b>, een man <b>XY</b>.",
          "Van elk paar komt <b>één chromosoom van je vader en één van je moeder</b>. Denkfout: 'jongens erven van papa, meisjes van mama'. Nee: iedereen krijgt de helft van vader en de helft van moeder."
        ],
        "regel": "Lichaamscel: paren (mens 46 = 23 paren). Geslachtscel: enkelvoudig (mens 23). 23e paar: XX = vrouw, XY = man.",
        "voorbeelden": [
          {
            "en": "46 = 23 paren",
            "nl": "Lichaamscel van een mens.",
            "let": "<b>let op</b>: 46 chromosomen, niet 46 paren."
          },
          {
            "en": "23 enkelvoudig",
            "nl": "Eicel of zaadcel van een mens.",
            "let": "<b>let op</b>: een oneven aantal kan alleen in een geslachtscel."
          },
          {
            "en": "XX / XY",
            "nl": "Vrouw / man.",
            "let": "<b>let op</b>: ook een man heeft een X."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Hoe liggen de chromosomen in een <b>lichaamscel</b>?",
            "o": [
              "Enkelvoudig, van elk maar één",
              "In paren",
              "In groepjes van drie"
            ],
            "a": "In paren",
            "w": "In lichaamscellen komen chromosomen altijd in paren voor, dus altijd een even aantal.",
            "meer": "Net als sokken in een la.",
            "fout": {
              "Enkelvoudig, van elk maar één": "Enkelvoudig is in geslachtscellen. In lichaamscellen liggen ze in paren.",
              "In groepjes van drie": "Een paar is een 2-tal. Chromosomen liggen in lichaamscellen per twee."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel chromosomen zitten er in een lichaamscel van een mens?",
            "o": [
              "23",
              "46",
              "92",
              "23 paren van elk 46"
            ],
            "a": "46",
            "w": "46 chromosomen, dat zijn 23 paren.",
            "meer": "46 : 2 = 23 paren.",
            "fout": {
              "23": "23 is het aantal in een geslachtscel. Een lichaamscel heeft paren: 46.",
              "92": "Dat is dubbel te veel. Een lichaamscel heeft 46 chromosomen.",
              "23 paren van elk 46": "Een paar is een 2-tal, dus 23 paren = 46 chromosomen."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel chromosomen zitten er in een eicel of zaadcel van een mens?",
            "o": [
              "46",
              "23",
              "2"
            ],
            "a": "23",
            "w": "In geslachtscellen liggen de chromosomen enkelvoudig: van elk paar één, dus 23.",
            "meer": "De helft van 46.",
            "fout": {
              "2": "Dan zou er maar één paar zijn. Een geslachtscel heeft van álle 23 paren er één.",
              "46": "46 is het aantal in een lichaamscel. Een geslachtscel heeft de helft."
            }
          },
          {
            "t": "gap",
            "q": "Geslachtschromosomen zijn de chromosomen die het ___ bepalen van een organisme.",
            "a": "geslacht|geslacht van een organisme",
            "soepel": true,
            "w": "Ze bepalen of het organisme mannelijk of vrouwelijk is.",
            "meer": "Bij de mens: X en Y."
          },
          {
            "t": "mc",
            "q": "Welk chromosomenpaar bepaalt bij de mens het geslacht?",
            "o": [
              "Het 1e paar",
              "Het 23e paar",
              "Alle paren samen",
              "Het 15e paar"
            ],
            "a": "Het 23e paar",
            "w": "Bij de mens bepaalt het 23e paar het geslacht.",
            "meer": "Het laatste paar: daar staat X of Y in plaats van een nummer.",
            "fout": {
              "Het 1e paar": "Het 1e paar bevat andere genen. Het geslacht wordt bepaald door het 23e paar.",
              "Alle paren samen": "Alleen één paar, het 23e, zijn de geslachtschromosomen.",
              "Het 15e paar": "Op paar 15 liggen andere genen; het geslacht hoort bij het 23e paar."
            }
          },
          {
            "t": "mc",
            "q": "Welke geslachtschromosomen heeft een <b>vrouw</b>?",
            "o": [
              "XY",
              "XX",
              "YY"
            ],
            "a": "XX",
            "w": "Een vrouw heeft XX, een man XY.",
            "meer": "Twee gelijke: XX.",
            "fout": {
              "XY": "XY hoort bij een man.",
              "YY": "YY bestaat niet bij de mens: er is altijd minstens één X."
            }
          },
          {
            "t": "gap",
            "q": "Een man heeft de geslachtschromosomen X en ___.",
            "a": "Y|y",
            "soepel": true,
            "w": "Een man heeft XY, een vrouw XX.",
            "meer": "Y = alleen bij mannen."
          },
          {
            "t": "mc",
            "q": "Van wie komen de twee chromosomen van een paar?",
            "o": [
              "Allebei van je moeder",
              "Één van je vader en één van je moeder",
              "Bij jongens van de vader, bij meisjes van de moeder"
            ],
            "a": "Één van je vader en één van je moeder",
            "w": "Van elk chromosomenpaar komt één chromosoom van je vader en één van je moeder.",
            "meer": "Iedereen krijgt 23 van papa en 23 van mama.",
            "fout": {
              "Allebei van je moeder": "Je vader levert ook chromosomen: van elk paar één.",
              "Bij jongens van de vader, bij meisjes van de moeder": "Dat is een bekende denkfout. Jongens én meisjes krijgen van elk paar één chromosoom van vader en één van moeder."
            }
          },
          {
            "t": "gap",
            "q": "In geslachtscellen liggen de chromosomen niet in paren, maar ___.",
            "a": "enkelvoudig|enkel|los",
            "soepel": true,
            "w": "Van elk paar zit er maar één in een geslachtscel.",
            "meer": "Eén sok van elk paar."
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Nu rekenen en toepassen. Een <b>even</b> aantal kan in een lichaamscel. Een <b>oneven</b> aantal kan alleen in een geslachtscel, want in een lichaamscel liggen ze altijd in paren.",
          "Lichaamscel → geslachtscel: <b>delen door 2</b>. Een hond heeft 78 chromosomen in een lichaamscel, dus 39 in een eicel of zaadcel. Bij een tomatenplant: 24 in een bladcel, 12 in een stuifmeelkorrel.",
          "<b>Varianten van een gen</b>: de twee chromosomen van een paar hebben dezelfde genen, dus informatie over dezelfde eigenschappen. Maar die informatie kan verschillen. Op het ene chromosoom 'blauwe ogen', op het andere 'bruine ogen'. Dat kan, omdat het ene chromosoom van je vader komt en het andere van je moeder."
        ],
        "regel": "Lichaamscel : 2 = geslachtscel. Oneven aantal? Dan is het een geslachtscel. Een paar = zelfde genen, soms andere varianten.",
        "voorbeelden": [
          {
            "en": "hond: 78 → 39",
            "nl": "Lichaamscel 78, geslachtscel 39.",
            "let": "<b>let op</b>: 39 is oneven, kan dus alleen in een geslachtscel."
          },
          {
            "en": "paar 15: blauw + bruin",
            "nl": "Hetzelfde gen (oogkleur), twee verschillende varianten.",
            "let": "<b>let op</b>: niet twee verschillende genen."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In een cel van een dier tel je 39 chromosomen. Wat voor cel is dit?",
            "o": [
              "Een lichaamscel",
              "Een geslachtscel",
              "Dat kun je niet weten"
            ],
            "a": "Een geslachtscel",
            "w": "39 is oneven. In lichaamscellen liggen chromosomen in paren (altijd even), dus dit moet een geslachtscel zijn.",
            "meer": "Oneven = enkelvoudig = geslachtscel.",
            "fout": {
              "Een lichaamscel": "Een lichaamscel heeft altijd een even aantal, want alles ligt in paren. 39 kan niet.",
              "Dat kun je niet weten": "Het oneven aantal verraadt het: alleen een geslachtscel kan oneven zijn."
            }
          },
          {
            "t": "mc",
            "q": "Een hond heeft 78 chromosomen in een lichaamscel. Hoeveel zitten er in een zaadcel van de hond?",
            "o": [
              "78",
              "156",
              "39",
              "38"
            ],
            "a": "39",
            "w": "Een geslachtscel heeft van elk paar één: 78 : 2 = 39.",
            "meer": "Lichaamscel : 2 = geslachtscel.",
            "fout": {
              "38": "Bijna, maar 78 : 2 = 39. Dat het oneven is, mag in een geslachtscel.",
              "78": "78 is het aantal in een lichaamscel. Een zaadcel heeft de helft.",
              "156": "Dat is verdubbelen. Een geslachtscel heeft juist de helft."
            }
          },
          {
            "t": "mc",
            "q": "Een kat heeft 38 chromosomen in een lichaamscel. Hoeveel chromosomen<b>paren</b> zijn dat?",
            "o": [
              "19",
              "38",
              "76"
            ],
            "a": "19",
            "w": "Een paar is een 2-tal: 38 : 2 = 19 paren.",
            "meer": "Tel de sokken, deel door twee: aantal paren.",
            "fout": {
              "38": "Dat is het aantal chromosomen, niet het aantal paren.",
              "76": "Je moet delen door twee, niet vermenigvuldigen."
            }
          },
          {
            "t": "mc",
            "q": "Bij een baby zijn de geslachtschromosomen XY. Wat is de baby?",
            "o": [
              "Een meisje",
              "Een jongen",
              "Dat bepaalt het 1e paar"
            ],
            "a": "Een jongen",
            "w": "XY = man, XX = vrouw.",
            "meer": "Y alleen bij jongens.",
            "fout": {
              "Een meisje": "Een meisje heeft XX. Met een Y is het een jongen.",
              "Dat bepaalt het 1e paar": "Het geslacht wordt bepaald door het 23e paar, de geslachtschromosomen."
            }
          },
          {
            "t": "mc",
            "q": "Op chromosoom 15 van Storms vader ligt de informatie 'blauwe ogen', op chromosoom 15 van haar moeder 'bruine ogen'. Wat heeft Storm op haar chromosomenpaar 15?",
            "o": [
              "Twee keer blauw",
              "Eén variant blauw en één variant bruin",
              "Alleen bruin, want meisjes erven van hun moeder",
              "Een nieuw gen voor groen"
            ],
            "a": "Eén variant blauw en één variant bruin",
            "w": "Van elk paar komt één chromosoom van vader en één van moeder, dus ze heeft beide varianten.",
            "meer": "Hetzelfde gen (oogkleur), twee varianten.",
            "fout": {
              "Twee keer blauw": "Ze krijgt één chromosoom 15 van haar moeder, en daarop staat bruin. Dus niet twee keer blauw.",
              "Alleen bruin, want meisjes erven van hun moeder": "Meisjes erven van allebei de ouders: van elk paar één chromosoom van vader en één van moeder.",
              "Een nieuw gen voor groen": "Er ontstaat geen nieuw gen; ze krijgt de varianten die haar ouders doorgeven."
            }
          },
          {
            "t": "mc",
            "q": "Wat geldt voor de twee chromosomen van een paar?",
            "o": [
              "Dezelfde genen, maar de informatie kan verschillen",
              "Ze hebben totaal andere genen, één set van elke ouder",
              "Ze zijn altijd precies gelijk, met dezelfde informatie"
            ],
            "a": "Dezelfde genen, maar de informatie kan verschillen",
            "w": "Beide gaan over dezelfde eigenschappen, maar kunnen een andere variant hebben (blauw of bruin).",
            "meer": "Twee sokken van hetzelfde model, maar misschien een andere kleur.",
            "fout": {
              "Ze hebben totaal andere genen, één set van elke ouder": "Een paar gaat over dezelfde eigenschappen: op beide liggen dezelfde genen.",
              "Ze zijn altijd precies gelijk, met dezelfde informatie": "De varianten kunnen verschillen, bijvoorbeeld blauw op het ene en bruin op het andere."
            }
          },
          {
            "t": "gap",
            "q": "Een paar is een set van ___ chromosomen.",
            "a": "twee|2",
            "soepel": true,
            "w": "Een paar is een 2-tal.",
            "meer": "Net als een paar sokken."
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: een tomatenplant heeft 24 chromosomen in een bladcel. Hoeveel zitten er in een stuifmeelkorrel?",
            "stappen": [
              {
                "toon": "Stap 1: een bladcel is een lichaamscel: 24 chromosomen in paren.",
                "uitleg": "24 : 2 = 12 paren."
              },
              {
                "toon": "Stap 2: een stuifmeelkorrel is een geslachtscel.",
                "uitleg": "Bij planten zijn eicellen en stuifmeelkorrels de geslachtscellen."
              },
              {
                "toon": "Stap 3: in een geslachtscel zit van elk paar één chromosoom.",
                "uitleg": "Enkelvoudig."
              },
              {
                "toon": "Antwoord: 12 chromosomen.",
                "uitleg": "De helft van 24."
              }
            ],
            "waarom": {
              "q": "Waarom heeft de stuifmeelkorrel 12 en niet 24?",
              "o": [
                "Omdat in een geslachtscel van elk paar maar één chromosoom zit",
                "Omdat planten minder chromosomen nodig hebben in stuifmeel",
                "Omdat stuifmeel een lichaamscel is"
              ],
              "a": "Omdat in een geslachtscel van elk paar maar één chromosoom zit"
            },
            "fout": {
              "Omdat planten minder chromosomen nodig hebben in stuifmeel": "Het gaat niet om 'nodig hebben': geslachtscellen hebben altijd van elk paar één, bij planten en dieren.",
              "Omdat stuifmeel een lichaamscel is": "Een stuifmeelkorrel is juist een geslachtscel (mannelijk). Daarom de helft."
            },
            "w": "Geslachtscel = enkelvoudig = de helft van de lichaamscel.",
            "meer": "Bij de mens: 46 → 23."
          },
          {
            "t": "mc",
            "q": "Welk aantal chromosomen kan <b>nooit</b> in een lichaamscel voorkomen?",
            "o": [
              "48",
              "21",
              "78",
              "46"
            ],
            "a": "21",
            "w": "21 is oneven. In een lichaamscel liggen chromosomen in paren, dus het aantal is altijd even.",
            "meer": "Oneven kan alleen in een geslachtscel.",
            "fout": {
              "46": "46 is even; dat heeft een mens in een lichaamscel.",
              "48": "48 is even (24 paren), dat kan in een lichaamscel.",
              "78": "78 is even (39 paren); een hond heeft dit in een lichaamscel."
            }
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Op Goud ontkracht je de grootste denkfout: 'jongens erven van papa, meisjes van mama'. Elke lichaamscel heeft 23 paren, en van <b>elk</b> paar komt één chromosoom van je vader en één van je moeder. Dat geldt voor jongens én meisjes. Iedereen: 23 van vader, 23 van moeder.",
          "Redeneer met de geslachtschromosomen. Een moeder is XX: zij kan alleen een <b>X</b> doorgeven. Een vader is XY: hij geeft een X <b>of</b> een Y. Een jongen (XY) heeft zijn Y dus van zijn vader en zijn X van zijn moeder. Een meisje (XX) heeft één X van vader en één X van moeder.",
          "Verwar niet: <b>verschillende genen</b> (oogkleur en haarkleur) en <b>verschillende varianten van één gen</b> (blauw en bruin voor oogkleur). Op een chromosomenpaar liggen dezelfde genen, maar mogelijk andere varianten."
        ],
        "regel": "Iedereen krijgt van elk paar één chromosoom van vader en één van moeder; een Y komt altijd van de vader.",
        "voorbeelden": [
          {
            "en": "jongen XY",
            "nl": "X van moeder, Y van vader.",
            "let": "<b>let op</b>: ook een jongen heeft een X van zijn moeder."
          },
          {
            "en": "blauw + bruin op paar 15",
            "nl": "Eén gen, twee varianten.",
            "let": "<b>let op</b>: niet twee genen."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Boris lijkt sprekend op zijn vader. Iemand zegt: 'Logisch, jongens erven alles van hun vader.' Wat klopt?",
            "o": [
              "Klopt, jongens krijgen alle chromosomen van hun vader",
              "Nee: van elk paar komt één chromosoom van elke ouder",
              "Klopt, behalve het 23e paar, dat komt van moeder",
              "Nee: jongens krijgen juist alles van hun moeder"
            ],
            "a": "Nee: van elk paar komt één chromosoom van elke ouder",
            "w": "Iedereen krijgt 23 chromosomen van vader en 23 van moeder, jongen of meisje.",
            "meer": "Op iemand lijken bewijst niet dat je alles van die ouder hebt.",
            "fout": {
              "Klopt, jongens krijgen alle chromosomen van hun vader": "Dan zou een jongen geen chromosomen van zijn moeder hebben. Van elk paar komt er één van moeder.",
              "Klopt, behalve het 23e paar, dat komt van moeder": "Ook bij paar 1 tot en met 22 komt er één van vader en één van moeder. Bij het 23e trouwens ook: X van moeder, Y van vader.",
              "Nee: jongens krijgen juist alles van hun moeder": "Ook andersom klopt het niet: van elk paar komt er één van elke ouder."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is het aantal chromosomen in een lichaamscel <b>altijd even</b>?",
            "o": [
              "Omdat de chromosomen in paren liggen",
              "Omdat even getallen beter delen",
              "Omdat de moeder er altijd twee keer zoveel geeft"
            ],
            "a": "Omdat de chromosomen in paren liggen",
            "w": "Een paar is een 2-tal; een aantal paren is dus altijd even.",
            "meer": "Sokken in paren: altijd een even aantal sokken.",
            "fout": {
              "Omdat even getallen beter delen": "Dat is geen reden. Het komt doordat chromosomen in lichaamscellen altijd per twee liggen.",
              "Omdat de moeder er altijd twee keer zoveel geeft": "Vader en moeder geven evenveel: van elk paar één."
            }
          },
          {
            "t": "mc",
            "q": "Een geslachtscel kan een oneven aantal chromosomen hebben, een lichaamscel niet. Waarom?",
            "o": [
              "Geslachtscel: enkelvoudig; lichaamscel: in paren",
              "Geslachtscellen zijn kapot en missen er eentje",
              "Lichaamscellen gooien er altijd eentje weg"
            ],
            "a": "Geslachtscel: enkelvoudig; lichaamscel: in paren",
            "w": "Paren geven altijd een even aantal; enkelvoudig kan ook oneven zijn.",
            "meer": "Hond: 78 (lichaamscel) en 39 (geslachtscel).",
            "fout": {
              "Geslachtscellen zijn kapot en missen er eentje": "Er is niets mis met een geslachtscel; hij heeft gewoon van elk paar één chromosoom.",
              "Lichaamscellen gooien er altijd eentje weg": "Er wordt niets weggegooid. Lichaamscellen hebben paren, dus altijd even."
            }
          },
          {
            "t": "mc",
            "q": "Van wie heeft een jongen zijn <b>Y</b>-chromosoom?",
            "o": [
              "Van zijn moeder",
              "Van zijn vader",
              "Van allebei een half"
            ],
            "a": "Van zijn vader",
            "w": "Een moeder is XX en heeft geen Y. Alleen de vader (XY) kan een Y doorgeven.",
            "meer": "Zijn X komt dus van zijn moeder.",
            "fout": {
              "Van zijn moeder": "Een moeder heeft XX, dus geen Y om door te geven.",
              "Van allebei een half": "Een chromosoom wordt niet doormidden gedeeld; hij krijgt de hele Y van zijn vader."
            }
          },
          {
            "t": "mc",
            "q": "Een meisje heeft XX. Waar komen die twee X'en vandaan?",
            "o": [
              "Allebei van haar moeder, want meisjes erven van mama",
              "Eén van haar vader en één van haar moeder",
              "Allebei van haar vader"
            ],
            "a": "Eén van haar vader en één van haar moeder",
            "w": "Van elk paar komt één chromosoom van vader en één van moeder, ook bij het 23e paar.",
            "meer": "Vader XY gaf hier zijn X, moeder XX gaf een X.",
            "fout": {
              "Allebei van haar moeder, want meisjes erven van mama": "Meisjes krijgen ook van hun vader chromosomen: van elk paar één, dus ook een X.",
              "Allebei van haar vader": "Een vader geeft maar één chromosoom van elk paar, en heeft maar één X."
            }
          },
          {
            "t": "mc",
            "q": "Op het ene chromosoom van paar 15 staat 'blauwe ogen', op het andere 'bruine ogen'. Zijn dat twee verschillende genen?",
            "o": [
              "Ja, blauw en bruin zijn twee verschillende genen",
              "Nee, het is één gen (oogkleur) in twee varianten",
              "Ja, één gen van vader en één ander gen van moeder"
            ],
            "a": "Nee, het is één gen (oogkleur) in twee varianten",
            "w": "De chromosomen van een paar hebben dezelfde genen; de informatie kan verschillen: varianten van een gen.",
            "meer": "Eén recept 'oogkleur', twee versies.",
            "fout": {
              "Ja, blauw en bruin zijn twee verschillende genen": "Blauw en bruin gaan over dezelfde eigenschap: dat is één gen met twee varianten.",
              "Ja, één gen van vader en één ander gen van moeder": "Vader en moeder geven hetzelfde gen (oogkleur) door, alleen soms in een andere variant."
            }
          },
          {
            "t": "mc",
            "q": "Iemand heeft op beide chromosomen van een paar de variant 'blauwe ogen'. Wat geldt?",
            "o": [
              "Beide hebben voor oogkleur dezelfde variant",
              "Er zit in dat paar maar één chromosoom voor oogkleur",
              "Die persoon heeft alleen chromosomen van één ouder"
            ],
            "a": "Beide hebben voor oogkleur dezelfde variant",
            "w": "De eigenschap kan op beide chromosomen hetzelfde zijn (2× blauw) of verschillend.",
            "meer": "Allebei de ouders gaven hier de variant 'blauw'.",
            "fout": {
              "Er zit in dat paar maar één chromosoom voor oogkleur": "Een paar heeft altijd twee chromosomen; ze hebben hier alleen dezelfde variant.",
              "Die persoon heeft alleen chromosomen van één ouder": "Van elk paar komt één van vader en één van moeder; ze gaven toevallig allebei 'blauw'."
            }
          },
          {
            "t": "gap",
            "q": "Bij een mens bepaalt het ___e chromosomenpaar het geslacht.",
            "a": "23|drieëntwintig|drieentwintig",
            "soepel": true,
            "w": "Het 23e paar zijn de geslachtschromosomen: XX of XY.",
            "meer": "Het laatste paar."
          },
          {
            "t": "open",
            "q": "Leg uit waarom je van elke erfelijke eigenschap twee keer informatie hebt, en van wie die komt.",
            "punten": 2,
            "modelantwoord": "In je lichaamscellen liggen de chromosomen in paren. Op beide chromosomen van een paar liggen dezelfde genen. Van elk paar komt één chromosoom van je vader en één van je moeder.",
            "sleutelwoorden": [
              {
                "moet": [
                  "paar",
                  "paren"
                ],
                "syn": [
                  "twee chromosomen",
                  "2 chromosomen"
                ]
              },
              {
                "moet": [
                  "vader"
                ],
                "syn": [
                  "papa",
                  "moeder",
                  "mama",
                  "ouder"
                ]
              }
            ],
            "rubric": [
              "Noemt dat chromosomen in lichaamscellen in paren liggen, met dezelfde genen op beide",
              "Noemt dat één chromosoom van elk paar van de vader komt en één van de moeder"
            ],
            "w": "Paren met dezelfde genen, één van elke ouder: dus twee keer informatie per eigenschap.",
            "meer": "Die twee kunnen dezelfde of verschillende varianten zijn."
          }
        ]
      }
    ]
  },
  {
    "id": "meiose",
    "emoji": "✂️",
    "titel": "T5 · Helft van papa, helft van mama",
    "kort": "Geslachtscellen (eicel, zaadcel, stuifmeelkorrel) hebben de helft van de chromosomen, enkelvoudig; ze ontstaan door meiose, een speciale celdeling waarbij de chromosomenparen verdeeld worden.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Stel je voor: jij krijgt van je vader een set voetbalkaarten en van je moeder ook een set. Als ze allebei hun <b>hele</b> verzameling gaven, zou jouw stapel steeds dubbel zo dik worden, elke generatie weer. Dat gebeurt bij mensen niet. Hoe kan dat? Omdat je ouders je allebei maar de <b>helft</b> geven.",
          "Die helft zit in de <b>geslachtscellen</b>. Bij dieren zijn dat de <b>eicellen</b> (vrouwelijk) en de <b>zaadcellen</b> (mannelijk). Bij planten zijn het de <b>eicellen</b> (in de stamper) en de <b>stuifmeelkorrels</b> (in de meeldraden). In een geslachtscel liggen de chromosomen niet in paren maar <b>enkelvoudig</b>: er zit maar de helft van het aantal chromosomen in.",
          "Geslachtscellen ontstaan door <b>meiose</b>: een <b>speciale celdeling waarbij de chromosomenparen verdeeld worden over de twee dochtercellen</b>. Zo ontstaan 2 geslachtscellen met ieder de helft van het aantal chromosomen.",
          "Denkfout: <i>meiose is gewoon celdeling</i>. Nee! Bij gewone celdeling krijgen beide dochtercellen <b>precies dezelfde</b> chromosomen als de moedercel. Bij meiose worden de paren juist <b>uit elkaar gehaald</b>."
        ],
        "regel": "Meiose is een speciale celdeling waarbij de chromosomenparen verdeeld worden over de twee dochtercellen; zo ontstaan geslachtscellen met de helft van de chromosomen.",
        "voorbeelden": [
          {
            "en": "lichaamscel: 23 paren · geslachtscel: 23 losse",
            "nl": "Een menselijke lichaamscel heeft 46 chromosomen in 23 paren; een eicel of zaadcel heeft er 23, enkelvoudig.",
            "let": "<b>let op</b>: enkelvoudig betekent niet in paren, het aantal kan dus oneven zijn."
          },
          {
            "en": "eicel + stuifmeelkorrel",
            "nl": "De geslachtscellen van een plant: de eicel zit in de stamper, de stuifmeelkorrel komt uit de meeldraad.",
            "let": "<b>let op</b>: bij planten heet de mannelijke geslachtscel stuifmeelkorrel, niet zaadcel."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Meiose is een speciale celdeling waarbij de ___ verdeeld worden over de twee dochtercellen.",
            "a": "chromosomenparen|chromosomen paren|chromosomenpaar|paren",
            "soepel": true,
            "w": "Bij meiose worden de chromosomenparen uit elkaar gehaald: van elk paar gaat er één naar de ene en één naar de andere dochtercel.",
            "meer": "Ezelsbrug: meiose = paren splitsen. Daarom krijgt elke geslachtscel de helft."
          },
          {
            "t": "mc",
            "q": "Wat zijn de geslachtscellen bij een <b>dier</b>?",
            "o": [
              "dochtercellen",
              "eicellen en stuifmeelkorrels",
              "eicellen en zaadcellen",
              "lichaamscellen en zaadcellen"
            ],
            "a": "eicellen en zaadcellen",
            "w": "Bij dieren maakt het vrouwtje eicellen en het mannetje zaadcellen.",
            "meer": "Bij planten heet de mannelijke geslachtscel stuifmeelkorrel; de vrouwelijke heet bij allebei eicel.",
            "fout": {
              "eicellen en stuifmeelkorrels": "Dat zijn de geslachtscellen van een plant. Een hond maakt geen stuifmeel.",
              "lichaamscellen en zaadcellen": "Een lichaamscel is juist géén geslachtscel; hij hoort bij het gewone lichaam.",
              "dochtercellen": "Dochtercel is gewoon de naam voor de twee cellen na een deling. Het zegt niets over geslachtscellen of over vrouwelijk."
            }
          },
          {
            "t": "mc",
            "q": "Wat zijn de geslachtscellen bij een <b>plant</b>?",
            "o": [
              "zaadcellen en eicellen",
              "eicellen en stuifmeelkorrels",
              "kroonbladeren en kelkbladeren",
              "bollen en knollen"
            ],
            "a": "eicellen en stuifmeelkorrels",
            "w": "Een plant maakt eicellen (in de stamper) en stuifmeelkorrels (in de meeldraden).",
            "meer": "Stuifmeel is het mannelijke deel, de stamper het vrouwelijke.",
            "fout": {
              "zaadcellen en eicellen": "Zaadcellen horen bij dieren. Bij planten is de mannelijke geslachtscel de stuifmeelkorrel.",
              "kroonbladeren en kelkbladeren": "Dat zijn delen van een bloem, geen cellen voor de voortplanting.",
              "bollen en knollen": "Daarmee plant een plant zich juist ongeslachtelijk voort, zonder geslachtscellen."
            }
          },
          {
            "t": "gap",
            "q": "In geslachtscellen liggen de chromosomen niet in paren, maar ___.",
            "a": "enkelvoudig|los|enkel",
            "soepel": true,
            "w": "In geslachtscellen zit van elk paar maar één chromosoom: enkelvoudig.",
            "meer": "Lichaamscel = paren (altijd even aantal). Geslachtscel = enkelvoudig (mag oneven zijn)."
          },
          {
            "t": "mc",
            "q": "Hoeveel chromosomen zitten er in een geslachtscel, vergeleken met een lichaamscel van hetzelfde organisme?",
            "o": [
              "de helft",
              "evenveel",
              "het dubbele",
              "geen enkele"
            ],
            "a": "de helft",
            "w": "Bij meiose worden de paren verdeeld, dus elke geslachtscel krijgt de helft.",
            "meer": "Mens: lichaamscel 46, geslachtscel 23. Bij de bevruchting komen 23 + 23 weer samen tot 46.",
            "fout": {
              "evenveel": "Dan zou een baby het dubbele krijgen (46 van mama + 46 van papa). Daarom zit er juist de helft in.",
              "het dubbele": "Andersom: een geslachtscel heeft minder, niet meer. Anders werd het aantal elke generatie groter.",
              "geen enkele": "Dan zou je niks van je ouders erven. Een geslachtscel heeft wel chromosomen, alleen de helft."
            }
          },
          {
            "t": "mc",
            "q": "Een menselijke lichaamscel heeft 46 chromosomen. Hoeveel chromosomen heeft een zaadcel?",
            "o": [
              "92",
              "23",
              "46",
              "2"
            ],
            "a": "23",
            "w": "Een zaadcel is een geslachtscel en heeft de helft: 23, enkelvoudig.",
            "meer": "Zaadcel 23 + eicel 23 = 46 in de bevruchte eicel.",
            "fout": {
              "2": "Dat is veel te weinig: het gaat om de helft van 46, niet om één paar.",
              "46": "46 is het aantal in een lichaamscel. Een geslachtscel heeft de helft.",
              "92": "Dat is het dubbele. Een geslachtscel heeft juist minder dan een lichaamscel."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel nieuwe cellen ontstaan er volgens je begrippenlijst bij meiose uit één cel?",
            "o": [
              "2",
              "1",
              "46"
            ],
            "a": "2",
            "w": "Volgens de begrippenlijst ontstaan er bij meiose 2 nieuwe geslachtscellen, met ieder de helft van de chromosomen.",
            "meer": "Net als bij gewone celdeling ontstaan er twee dochtercellen; het verschil zit in wát erin zit.",
            "fout": {
              "1": "Bij een deling wordt één cel altijd meer dan één cel.",
              "46": "46 is het aantal chromosomen in een lichaamscel, niet het aantal cellen."
            }
          },
          {
            "t": "gap",
            "q": "Bij planten heet de mannelijke geslachtscel de ___.",
            "a": "stuifmeelkorrel|stuifmeelkorrels|stuifmeel|pollenkorrel|pollen",
            "soepel": true,
            "w": "De stuifmeelkorrel komt uit de meeldraad en is de mannelijke geslachtscel van een plant.",
            "meer": "Meeldraad maakt stuifmeel (man), stamper heeft de eicel (vrouw)."
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over meiose klopt?",
            "o": [
              "Meiose gebeurt alleen bij vrouwen.",
              "Bij meiose ontstaan twee lichaamscellen die precies gelijk zijn.",
              "Meiose is gewoon een andere naam voor celdeling.",
              "Bij meiose ontstaan geslachtscellen met de helft van de chromosomen."
            ],
            "a": "Bij meiose ontstaan geslachtscellen met de helft van de chromosomen.",
            "w": "Meiose is de speciale deling die geslachtscellen maakt, met de helft van de chromosomen.",
            "meer": "Gewone celdeling maakt kopieën; meiose maakt halve sets.",
            "fout": {
              "Meiose is gewoon een andere naam voor celdeling.": "Bij gewone celdeling krijgen de dochtercellen dezelfde chromosomen. Bij meiose worden de paren gesplitst: dat is iets anders.",
              "Bij meiose ontstaan twee lichaamscellen die precies gelijk zijn.": "Dat is gewone celdeling. Meiose maakt geslachtscellen, en die zijn juist niet gelijk.",
              "Meiose gebeurt alleen bij vrouwen.": "Mannen maken ook geslachtscellen (zaadcellen), dus ook bij hen vindt meiose plaats. Planten doen het ook."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Kijk naar een tulpenbol. Plant je hem, dan groeit er een tulp die <b>precies</b> lijkt op de moederplant. Dat is <b>ongeslachtelijke voortplanting</b>: zonder eicel en stuifmeelkorrel. Ook <b>stekken</b> (een takje in water zetten), <b>bollen</b> en <b>knollen</b> (aardappel) horen erbij. De nieuwe plant ontstaat door <b>gewone celdeling</b>, dus heeft hij <b>exact hetzelfde genotype</b> als de moederplant. Bij mensen kan dit niet.",
          "Bij <b>geslachtelijke voortplanting</b> versmelt een eicel met een zaadcel (of bij planten met een stuifmeelkorrel). Bij meiose bepaalt het toeval welk chromosoom van elk paar in een geslachtscel terechtkomt. Daardoor krijgen <b>alle nakomelingen een verschillend genotype</b>. Jij en je broer of zus lijken op elkaar, maar zijn niet gelijk.",
          "Eén uitzondering: een <b>eeneiige tweeling</b>. Die groeit uit één bevruchte eicel en heeft dus hetzelfde genotype.",
          "Denkfout: <i>jongens erven van papa, meisjes van mama</i>. Fout: iedereen krijgt van elk chromosomenpaar er één van moeder en één van vader."
        ],
        "regel": "Geslachtelijk (eicel + zaadcel of stuifmeelkorrel) = elke nakomeling een ander genotype, behalve eeneiige tweelingen; ongeslachtelijk (stek, bol, knol) = exact hetzelfde genotype als de moeder.",
        "voorbeelden": [
          {
            "en": "stekje van oma's plant → precies dezelfde plant",
            "nl": "Het stekje groeit door gewone celdeling uit; zijn genotype is gelijk aan dat van de moederplant.",
            "let": "<b>let op</b>: geen eicel of stuifmeel nodig, dus ook geen meiose."
          },
          {
            "en": "broer en zus → verschillend genotype",
            "nl": "Elke zaadcel en eicel heeft door het toeval een andere mix van chromosomen.",
            "let": "<b>let op</b>: alleen een eeneiige tweeling heeft hetzelfde genotype."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm zet een takje van een vetplant in een potje en het groeit uit tot een nieuwe plant. Wat weet je over het genotype van die nieuwe plant?",
            "o": [
              "Precies gelijk aan de moederplant.",
              "Het is de helft van dat van de moederplant.",
              "Het is compleet nieuw en anders.",
              "Het is een mix van twee ouderplanten."
            ],
            "a": "Precies gelijk aan de moederplant.",
            "w": "Stekken is ongeslachtelijke voortplanting: de cellen ontstaan door gewone celdeling, dus het genotype blijft gelijk.",
            "meer": "Ongeslachtelijk = één ouder, kopie. Geslachtelijk = twee geslachtscellen, nieuwe mix.",
            "fout": {
              "Het is de helft van dat van de moederplant.": "De helft zit alleen in geslachtscellen. Een stek is gewoon een stuk plant met volledige lichaamscellen.",
              "Het is een mix van twee ouderplanten.": "Er is maar één ouder: de plant waar het takje vanaf komt. Er is geen bevruchting geweest.",
              "Het is compleet nieuw en anders.": "Een nieuw genotype ontstaat bij geslachtelijke voortplanting. Een stek groeit door gewone celdeling, dus is het een kopie."
            }
          },
          {
            "t": "mc",
            "q": "Welke van deze is <b>geslachtelijke</b> voortplanting?",
            "o": [
              "Een afgeknipt stekje dat in een glas water wortelt",
              "Een tulpenbol die je plant",
              "Een aardappelknol die in de schuur uitloopt",
              "Een bij brengt stuifmeel naar een andere bloem"
            ],
            "a": "Een bij brengt stuifmeel naar een andere bloem",
            "w": "Hier versmelt een stuifmeelkorrel met een eicel: dat is geslachtelijke voortplanting.",
            "meer": "Geslachtelijk herken je aan twee geslachtscellen die samenkomen.",
            "fout": {
              "Een aardappelknol die in de schuur uitloopt": "Een knol is ongeslachtelijk: er komen geen geslachtscellen aan te pas.",
              "Een tulpenbol die je plant": "Een bol is ongeslachtelijk: de nieuwe tulp is een kopie van de moederplant.",
              "Een afgeknipt stekje dat in een glas water wortelt": "Stekken is ongeslachtelijk: het takje groeit door gewone celdeling verder."
            }
          },
          {
            "t": "mc",
            "q": "Waarom hebben broers en zussen (geen tweeling) een verschillend genotype?",
            "o": [
              "Omdat ze in een ander jaar geboren zijn",
              "Omdat er bij hen een mutatie is opgetreden",
              "Omdat jongens alles van papa erven en meisjes van mama",
              "Door het toeval bij meiose"
            ],
            "a": "Door het toeval bij meiose",
            "w": "Bij meiose bepaalt het toeval welk chromosoom van elk paar in de geslachtscel komt. Elke geslachtscel is dus anders.",
            "meer": "Het is als twee keer schudden met dezelfde kaarten: je krijgt bijna nooit twee keer hetzelfde.",
            "fout": {
              "Omdat jongens alles van papa erven en meisjes van mama": "Iedereen krijgt van elk paar één chromosoom van moeder en één van vader, jongen of meisje.",
              "Omdat ze in een ander jaar geboren zijn": "Het geboortejaar verandert je genotype niet. Het verschil ontstaat al bij de geslachtscellen.",
              "Omdat er bij hen een mutatie is opgetreden": "Mutaties zijn zeldzaam. Het gewone verschil tussen broers en zussen komt door de verdeling bij meiose."
            }
          },
          {
            "t": "mc",
            "q": "Wie hebben hetzelfde genotype?",
            "o": [
              "Een moeder en haar dochter",
              "Een broer en een zus",
              "Een eeneiige tweeling",
              "Een twee-eiige tweeling"
            ],
            "a": "Een eeneiige tweeling",
            "w": "Een eeneiige tweeling groeit uit één bevruchte eicel, dus ze hebben hetzelfde genotype.",
            "meer": "Twee-eiig = twee eicellen + twee zaadcellen = twee verschillende genotypes.",
            "fout": {
              "Een twee-eiige tweeling": "Die ontstaan uit twee eicellen en twee zaadcellen: twee verschillende genotypes, net als gewone broers en zussen.",
              "Een moeder en haar dochter": "De dochter krijgt maar de helft van de chromosomen van haar moeder; de andere helft komt van de vader.",
              "Een broer en een zus": "Die komen uit verschillende eicellen en zaadcellen, dus hun genotype verschilt."
            }
          },
          {
            "t": "mc",
            "q": "Een cel van een hond heeft 78 chromosomen. Hoeveel chromosomen heeft een eicel van die hond?",
            "o": [
              "38",
              "39",
              "156",
              "78"
            ],
            "a": "39",
            "w": "Een eicel heeft de helft: 78 : 2 = 39.",
            "meer": "Een oneven aantal mag in een geslachtscel: de chromosomen liggen er enkelvoudig.",
            "fout": {
              "38": "Bijna! Maar de helft van 78 is precies 39. Denk je dat het even moet zijn? Nee, in een geslachtscel mag het oneven zijn.",
              "78": "Dat is het aantal in een lichaamscel. Een eicel is een geslachtscel en heeft de helft.",
              "156": "Dat is het dubbele. Een geslachtscel heeft juist de helft."
            }
          },
          {
            "t": "mc",
            "q": "Een geslachtscel van een plant heeft 7 chromosomen. Hoeveel chromosomen heeft een lichaamscel van die plant?",
            "o": [
              "7",
              "3,5",
              "14",
              "21"
            ],
            "a": "14",
            "w": "Een lichaamscel heeft paren, dus het dubbele van een geslachtscel: 2 × 7 = 14.",
            "meer": "Van geslachtscel naar lichaamscel: keer 2. Andersom: gedeeld door 2.",
            "fout": {
              "7": "7 is het aantal in een geslachtscel. Een lichaamscel heeft paren, dus twee keer zoveel.",
              "21": "Een lichaamscel heeft paren (2 × 7), geen drietallen.",
              "3,5": "Je kunt geen half chromosoom hebben. En een lichaamscel heeft juist méér dan een geslachtscel."
            }
          },
          {
            "t": "gap",
            "q": "Bij ongeslachtelijke voortplanting, zoals stekken, krijgen alle nakomelingen exact hetzelfde ___ als de moederplant.",
            "a": "genotype",
            "soepel": true,
            "w": "De nakomelingen ontstaan door gewone celdeling, dus hun erfelijke informatie is gelijk aan die van de moeder.",
            "meer": "Het fenotype kan wel iets verschillen, bijvoorbeeld door meer of minder zon. Het genotype niet."
          },
          {
            "t": "mc",
            "q": "Een man heeft in zijn lichaamscellen de geslachtschromosomen XY. Welke geslachtschromosomen kunnen in zijn zaadcellen zitten?",
            "o": [
              "X of Y",
              "geen geslachtschromosoom",
              "altijd XY",
              "alleen Y"
            ],
            "a": "X of Y",
            "w": "Bij meiose wordt het paar XY gesplitst: de ene zaadcel krijgt de X, de andere de Y.",
            "meer": "Zo bepaalt de zaadcel of het een jongen (XY) of meisje (XX) wordt.",
            "fout": {
              "altijd XY": "Dan zou het paar niet gesplitst zijn. In een geslachtscel liggen de chromosomen enkelvoudig.",
              "alleen Y": "Een zaadcel krijgt X of Y; ongeveer de helft krijgt een X.",
              "geen geslachtschromosoom": "Elke geslachtscel krijgt van elk paar één chromosoom, dus ook van het geslachtschromosomenpaar."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: een kat heeft 38 chromosomen in een lichaamscel. Hoeveel heeft een bevruchte eicel van een kat?",
            "stappen": [
              {
                "toon": "Lichaamscel: 38 chromosomen, dus 19 paren.",
                "uitleg": "In lichaamscellen liggen de chromosomen in paren."
              },
              {
                "toon": "Zaadcel en eicel: elk 19, enkelvoudig.",
                "uitleg": "Bij meiose worden de paren verdeeld, elke geslachtscel krijgt de helft."
              },
              {
                "toon": "Bevruchte eicel: 19 + 19 = 38.",
                "uitleg": "Bij de bevruchting komen de twee helften samen, en van elk paar komt er één van moeder en één van vader."
              }
            ],
            "waarom": {
              "q": "Waarom heeft de bevruchte eicel weer 38 chromosomen en niet 76?",
              "o": [
                "Omdat alleen de eicel chromosomen meebrengt",
                "Omdat de helft van de chromosomen bij de bevruchting verdwijnt",
                "Omdat de eicel en de zaadcel door meiose elk maar de helft hadden"
              ],
              "a": "Omdat de eicel en de zaadcel door meiose elk maar de helft hadden"
            },
            "fout": {
              "Omdat de helft van de chromosomen bij de bevruchting verdwijnt": "Er verdwijnt niets bij de bevruchting. De halvering gebeurt eerder, bij de meiose.",
              "Omdat alleen de eicel chromosomen meebrengt": "De zaadcel brengt ook chromosomen mee, anders zou het kitten niets van de vader erven."
            },
            "w": "Meiose halveert, bevruchting verdubbelt: zo blijft het aantal chromosomen per soort gelijk.",
            "meer": "Halveren en weer samenvoegen: 19 + 19 = 38, generatie na generatie."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Leg twee delingen naast elkaar. <b>Gewone celdeling</b>: een huidcel deelt bij een wondje. Uit één lichaamscel ontstaan <b>twee dezelfde</b> dochtercellen, met exact dezelfde chromosomen. Daarvoor worden alle chromosomen van tevoren gekopieerd.",
          "<b>Meiose</b>: bij het maken van eicellen en zaadcellen (of eicellen en stuifmeelkorrels bij een plant). De chromosomenparen worden <b>verdeeld</b> over de twee dochtercellen. Er ontstaan <b>geslachtscellen</b> met de <b>helft</b> van de chromosomen, enkelvoudig, en ze zijn niet gelijk aan elkaar.",
          "Daarom: groeien, wondjes herstellen en stekken gaat met <b>celdeling</b> (zelfde genotype). Geslachtscellen maken gaat met <b>meiose</b> (halve set, nieuwe mix bij de bevruchting)."
        ],
        "regel": "Celdeling: lichaamscel → 2 gelijke lichaamscellen met alle chromosomen. Meiose: paren verdeeld → 2 geslachtscellen met de helft, enkelvoudig.",
        "voorbeelden": [
          {
            "en": "schaafwond op je knie → celdeling",
            "nl": "Nieuwe huidcellen moeten precies hetzelfde zijn als de oude: gewone celdeling.",
            "let": "<b>let op</b>: hier ontstaan geen geslachtscellen."
          },
          {
            "en": "stuifmeel maken in een meeldraad → meiose",
            "nl": "Stuifmeelkorrels zijn geslachtscellen met de helft van de chromosomen.",
            "let": "<b>let op</b>: ook planten doen aan meiose."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Storm schaaft haar knie bij het keepen. Welke deling zorgt dat het wondje dichtgroeit?",
            "o": [
              "eerst meiose en dan bevruchting",
              "geen deling, de cellen groeien gewoon groter",
              "meiose, want er moeten nieuwe cellen komen",
              "gewone celdeling"
            ],
            "a": "gewone celdeling",
            "w": "Voor herstel zijn nieuwe huidcellen nodig die precies gelijk zijn aan de oude: gewone celdeling.",
            "meer": "Meiose maakt alleen geslachtscellen; die heb je niet nodig in je knie.",
            "fout": {
              "meiose, want er moeten nieuwe cellen komen": "Meiose maakt geslachtscellen met de helft van de chromosomen. Een huidcel met de helft zou niet goed werken.",
              "eerst meiose en dan bevruchting": "Bevruchting maakt een nieuw organisme, geen nieuwe huid. Je knie herstelt met gewone celdeling.",
              "geen deling, de cellen groeien gewoon groter": "Een wondje wordt gevuld met nieuwe cellen; die ontstaan door deling."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het belangrijkste verschil tussen de dochtercellen na celdeling en na meiose?",
            "o": [
              "Na celdeling zijn ze vrouwelijk, na meiose mannelijk.",
              "Er is geen verschil, alleen de naam.",
              "Na meiose zijn het lichaamscellen, na celdeling geslachtscellen.",
              "Na celdeling alle chromosomen, na meiose de helft."
            ],
            "a": "Na celdeling alle chromosomen, na meiose de helft.",
            "w": "Celdeling geeft twee gelijke cellen met alle chromosomen; meiose verdeelt de paren, dus de helft.",
            "meer": "Celdeling = kopie. Meiose = paren splitsen.",
            "fout": {
              "Na celdeling zijn ze vrouwelijk, na meiose mannelijk.": "Dochtercel heeft niets met vrouwelijk te maken. Zo heten de cellen na elke deling, ook bij mannen.",
              "Na meiose zijn het lichaamscellen, na celdeling geslachtscellen.": "Precies andersom: meiose maakt geslachtscellen, celdeling maakt lichaamscellen.",
              "Er is geen verschil, alleen de naam.": "Er is een groot verschil: bij meiose krijgt elke cel maar de helft van de chromosomen."
            }
          },
          {
            "t": "mc",
            "q": "Welke deling hoort bij het maken van een zaadcel?",
            "o": [
              "mutatie",
              "bevruchting",
              "gewone celdeling",
              "meiose"
            ],
            "a": "meiose",
            "w": "Een zaadcel is een geslachtscel en ontstaat door meiose.",
            "meer": "Elke geslachtscel (eicel, zaadcel, stuifmeelkorrel) ontstaat door meiose.",
            "fout": {
              "gewone celdeling": "Dan zou de zaadcel alle 46 chromosomen hebben. Een zaadcel heeft er 23.",
              "bevruchting": "Bevruchting is het samengaan van zaadcel en eicel, niet het maken van een zaadcel.",
              "mutatie": "Een mutatie is een verandering in het DNA, geen manier van delen."
            }
          },
          {
            "t": "mc",
            "q": "Stel dat geslachtscellen door <b>gewone celdeling</b> zouden ontstaan. Wat zou er dan met het aantal chromosomen gebeuren?",
            "o": [
              "Dat verdubbelt elke generatie.",
              "Dat maakt niet uit, want het aantal ligt toch vast.",
              "Dat blijft elke generatie gelijk.",
              "Dat wordt elke generatie kleiner."
            ],
            "a": "Dat verdubbelt elke generatie.",
            "w": "Eicel en zaadcel zouden dan elk het volle aantal hebben; samen het dubbele. Volgende generatie weer het dubbele.",
            "meer": "Daarom bestaat meiose: halveren voor de bevruchting houdt het aantal gelijk.",
            "fout": {
              "Dat blijft elke generatie gelijk.": "Dat lukt juist dankzij meiose. Met volle sets wordt het bij elke bevruchting dubbel.",
              "Dat wordt elke generatie kleiner.": "Gewone celdeling halveert niet; de cellen houden alle chromosomen. Dan wordt het meer, niet minder.",
              "Dat maakt niet uit, want het aantal ligt toch vast.": "Het aantal ligt vast doordát meiose halveert. Zonder meiose klopt het niet meer."
            }
          },
          {
            "t": "mc",
            "q": "Een kweker wil honderd planten die <b>precies</b> zo zijn als zijn mooiste plant. Wat kan hij het beste doen?",
            "o": [
              "Zaadjes van die plant zaaien",
              "Stuifmeel van die plant verzamelen",
              "Stekjes van die plant nemen",
              "Die plant laten bestuiven door een andere mooie plant"
            ],
            "a": "Stekjes van die plant nemen",
            "w": "Stekken is ongeslachtelijk: gewone celdeling, dus exact hetzelfde genotype.",
            "meer": "Zaad = geslachtelijk = verrassingspakket. Stek = kopie.",
            "fout": {
              "Zaadjes van die plant zaaien": "Zaad ontstaat geslachtelijk (eicel + stuifmeelkorrel), dus elke nieuwe plant krijgt een ander genotype.",
              "Die plant laten bestuiven door een andere mooie plant": "Dan meng je twee genotypes: de nakomelingen worden allemaal anders.",
              "Stuifmeel van die plant verzamelen": "Stuifmeelkorrels hebben maar de helft van de chromosomen. Daar groeit geen kopie uit."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak klopt?",
            "o": [
              "Geslachtscellen bevatten de chromosomen in paren.",
              "Bij meiose ontstaan twee gelijke dochtercellen.",
              "Bij celdeling ontstaan twee geslachtscellen.",
              "Een lichaamscel heeft een even aantal chromosomen."
            ],
            "a": "Een lichaamscel heeft een even aantal chromosomen.",
            "w": "In lichaamscellen liggen de chromosomen in paren, dus het aantal is altijd even.",
            "meer": "Geslachtscellen zijn enkelvoudig, dus daar mag het oneven zijn.",
            "fout": {
              "Geslachtscellen bevatten de chromosomen in paren.": "Andersom: in geslachtscellen liggen ze enkelvoudig. Paren zitten in lichaamscellen.",
              "Bij celdeling ontstaan twee geslachtscellen.": "Bij celdeling ontstaan twee lichaamscellen. Geslachtscellen ontstaan door meiose.",
              "Bij meiose ontstaan twee gelijke dochtercellen.": "Bij meiose worden de paren verdeeld; de twee cellen krijgen elk een andere helft."
            }
          },
          {
            "t": "gap",
            "q": "Bij gewone celdeling ontstaan uit één lichaamscel twee ___ nieuwe cellen.",
            "a": "dezelfde|gelijke|identieke",
            "soepel": true,
            "w": "Bij celdeling ontstaan uit één lichaamscel twee dezelfde nieuwe cellen, met exact dezelfde chromosomen.",
            "meer": "Dezelfde = kopie. Bij meiose zijn de dochtercellen juist niet gelijk."
          },
          {
            "t": "mc",
            "q": "Een stek van een plant en een zaailing (uit zaad) van dezelfde plant. Welke lijkt in genotype het meest op de moederplant?",
            "o": [
              "de stek",
              "allebei evenveel",
              "geen van beide",
              "de zaailing"
            ],
            "a": "de stek",
            "w": "De stek heeft exact hetzelfde genotype; de zaailing is een nieuwe mix van eicel en stuifmeelkorrel.",
            "meer": "Stek: celdeling. Zaad: meiose plus bevruchting.",
            "fout": {
              "de zaailing": "Een zaailing ontstaat uit zaad, dus uit geslachtscellen: het genotype is een nieuwe mix.",
              "allebei evenveel": "De stek is een exacte kopie, de zaailing niet. Dus niet evenveel.",
              "geen van beide": "De stek heeft juist exact hetzelfde genotype als de moederplant."
            }
          },
          {
            "t": "open",
            "q": "Leg uit waarom geslachtscellen door meiose moeten ontstaan en niet door gewone celdeling.",
            "punten": 2,
            "modelantwoord": "Bij meiose worden de chromosomenparen verdeeld, zodat een geslachtscel maar de helft van de chromosomen heeft. Bij de bevruchting komen eicel en zaadcel samen en is het aantal weer compleet. Met gewone celdeling zou het aantal chromosomen elke generatie verdubbelen.",
            "sleutelwoorden": [
              {
                "moet": [
                  "helft",
                  "halv"
                ],
                "syn": [
                  "enkelvoudig",
                  "23"
                ]
              },
              {
                "moet": [
                  "bevrucht",
                  "dubbel",
                  "verdubbel"
                ],
                "syn": [
                  "samen",
                  "versmelt",
                  "46"
                ]
              }
            ],
            "rubric": [
              "Noemt dat meiose de helft van de chromosomen (enkelvoudig) oplevert",
              "Legt uit dat bij de bevruchting het aantal weer klopt / anders zou verdubbelen"
            ],
            "w": "Meiose halveert, de bevruchting maakt het weer heel. Zo blijft het aantal per soort gelijk.",
            "meer": "23 + 23 = 46. Met 46 + 46 kreeg je 92, en dat klopt niet."
          }
        ]
      }
    ]
  },
  {
    "id": "dna-code",
    "emoji": "🧬",
    "titel": "T5 · De lettercode A-T-C-G",
    "kort": "DNA is opgebouwd uit de basen A, T, C en G, die in paren liggen (A-T en C-G); een gen bevat de code voor een eiwit, de informatie in een gen heet een allel, en je hebt er per gen twee: een allelenpaar.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Denk aan een bibliotheek. De <b>celkern</b> is de bibliotheek, elk <b>chromosoom</b> een boek, elk <b>gen</b> een recept in dat boek, en het recept is geschreven met letters. In DNA zijn dat maar vier letters: de <b>basen</b> A, T, C en G. <b>De stof DNA is opgebouwd uit de basen A, T, C en G.</b>",
          "Die basen liggen altijd in paren, als de treden van een <b>gedraaide trap</b>. Elk paar heet een <b>basenpaar</b>. Er zijn vaste maatjes: <b>A hoort bij T</b> en <b>C hoort bij G</b>. Nooit anders.",
          "Waar is die code voor? Voor <b>eiwitten</b>: <b>stoffen in je lichaam die de kleur, vorm en werking van je lichaam regelen.</b> Elk gen bevat de code voor een eiwit dat een eigenschap regelt.",
          "Denkfout: <i>DNA zit alleen in bepaalde cellen</i>. Nee: elke celkern bevat alle chromosomen, dus al je DNA."
        ],
        "regel": "DNA bestaat uit de basen A, T, C en G; A hoort altijd bij T en C altijd bij G; een gen bevat de code voor een eiwit.",
        "voorbeelden": [
          {
            "en": "A-T · C-G",
            "nl": "De vaste basenparen, als treden van een gedraaide trap.",
            "let": "<b>let op</b>: A en G horen nooit bij elkaar."
          },
          {
            "en": "celkern → chromosoom → gen → basen",
            "nl": "Bibliotheek → boek → recept → letters.",
            "let": "<b>let op</b>: het recept (gen) is de code voor een eiwit."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Uit welke basen is DNA opgebouwd?",
            "o": [
              "A, E, I en O",
              "A, B, C en D",
              "A, T, C en G",
              "X en Y"
            ],
            "a": "A, T, C en G",
            "w": "DNA is opgebouwd uit vier basen: A, T, C en G.",
            "meer": "De namen (adenine, thymine, cytosine, guanine) hoef je niet te kennen, alleen de letters.",
            "fout": {
              "A, B, C en D": "Het zijn wel letters, maar niet de eerste vier van het alfabet. Het zijn A, T, C en G.",
              "X en Y": "X en Y zijn geslachtschromosomen, geen basen.",
              "A, E, I en O": "Dat zijn klinkers. De basen in DNA zijn A, T, C en G."
            }
          },
          {
            "t": "gap",
            "q": "De stof DNA is opgebouwd uit de ___ A, T, C en G.",
            "a": "basen|base",
            "soepel": true,
            "w": "A, T, C en G heten de basen.",
            "meer": "Basen zijn de letters van de DNA-code."
          },
          {
            "t": "mc",
            "q": "Welke base hoort altijd bij A?",
            "o": [
              "A",
              "T",
              "G",
              "C"
            ],
            "a": "T",
            "w": "A en T zijn altijd aan elkaar gekoppeld.",
            "meer": "Ezelsbrug: de rechte letters A en T horen bij elkaar, de ronde letters C en G ook.",
            "fout": {
              "G": "G hoort bij C, niet bij A.",
              "C": "C hoort bij G, niet bij A.",
              "A": "Een base koppelt niet aan zichzelf. A hoort bij T."
            }
          },
          {
            "t": "gap",
            "q": "Eiwitten zijn stoffen in je lichaam die de kleur, vorm en ___ van je lichaam regelen.",
            "a": "werking",
            "soepel": true,
            "w": "Eiwitten regelen kleur, vorm en werking van je lichaam.",
            "meer": "Kleur (bv. melanine in je ogen), vorm en werking: de drie dingen die eiwitten regelen."
          },
          {
            "t": "mc",
            "q": "Wat bevat een gen?",
            "o": [
              "alle chromosomen",
              "een complete cel met celkern",
              "alleen de base A",
              "de code voor een eiwit"
            ],
            "a": "de code voor een eiwit",
            "w": "Elk gen bevat de informatie voor het eiwit dat een eigenschap regelt.",
            "meer": "Gen = recept, eiwit = het gerecht dat ervan gemaakt wordt.",
            "fout": {
              "een complete cel met celkern": "Andersom: de cel bevat de genen. Een gen is maar een stukje DNA.",
              "alle chromosomen": "Een gen is een klein stukje van één chromosoom, niet alle chromosomen.",
              "alleen de base A": "Een gen bestaat uit heel veel basen, van alle vier de soorten."
            }
          },
          {
            "t": "gap",
            "q": "De informatie in een gen noem je een genvariant of een ___.",
            "a": "allel|allelen",
            "soepel": true,
            "w": "Allel is een ander woord voor genvariant: de informatie in een gen.",
            "meer": "Gen = over welke eigenschap het gaat. Allel = welke variant (bv. blauw of bruin)."
          },
          {
            "t": "mc",
            "q": "Wat is een allelenpaar?",
            "o": [
              "de twee basen A en T",
              "een eiwit en een gen",
              "de twee geslachtschromosomen X en Y",
              "de twee allelen van een gen"
            ],
            "a": "de twee allelen van een gen",
            "w": "Je hebt van elk gen twee allelen, één op elk chromosoom van een paar. Samen heten ze het allelenpaar.",
            "meer": "Allelenpaar = de twee varianten die over dezelfde eigenschap gaan.",
            "fout": {
              "de twee basen A en T": "A en T samen is een basenpaar, geen allelenpaar.",
              "de twee geslachtschromosomen X en Y": "X en Y zijn geslachtschromosomen. Een allelenpaar gaat over twee allelen van één gen.",
              "een eiwit en een gen": "Het gen bevat de code voor het eiwit, maar samen zijn ze geen allelenpaar."
            }
          },
          {
            "t": "mc",
            "q": "Hoe ziet DNA met zijn basenparen eruit?",
            "o": [
              "als een bolletje",
              "als een X-vormig staafje",
              "als een gedraaide trap",
              "als een rechte stok"
            ],
            "a": "als een gedraaide trap",
            "w": "De basenparen zijn de treden van een gedraaide trap.",
            "meer": "De zijkanten van de trap houden de treden (basenparen) bij elkaar.",
            "fout": {
              "als een rechte stok": "De trap is gedraaid, niet recht.",
              "als een bolletje": "DNA is lang en dun. De basenparen vormen samen een gedraaide trap.",
              "als een X-vormig staafje": "Die X-vorm zie je alleen vlak voor een celdeling. Een chromosoom is meestal een lange dunne draad, en het DNA erin lijkt op een gedraaide trap."
            }
          },
          {
            "t": "mc",
            "q": "Hoeveel allelen heb jij van één gen?",
            "o": [
              "2",
              "1",
              "zoveel als er bestaan",
              "4"
            ],
            "a": "2",
            "w": "Je chromosomen liggen in paren, dus van elk gen heb je 2 allelen.",
            "meer": "Er kunnen wel veel verschillende allelen bestaan (blauw, bruin, groen), maar jij hebt er 2.",
            "fout": {
              "1": "Je hebt van elk chromosoom twee exemplaren, dus van elk gen ook twee allelen.",
              "4": "Je chromosomen liggen in paren, niet in viertallen. Je hebt er 2.",
              "zoveel als er bestaan": "Er bestaan er soms veel, maar jij hebt er maar 2: één van je moeder en één van je vader."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Als je één kant van de trap kent, weet je ook de andere kant. Staat er links een A, dan staat er rechts een T. Staat er links een C, dan rechts een G. Zo vul je een stukje DNA aan zoals je een puzzel afmaakt.",
          "De volgorde van de basen is de <b>code</b>. Een andere volgorde betekent een ander recept, dus een ander eiwit. Zo kan het ene allel bruine ogen geven en het andere blauwe.",
          "Je hebt per gen <b>2 allelen</b>: twee dezelfde (bv. 2× blauw) of twee verschillende (blauw en bruin). Heb je 2× het allel voor blauwe ogen, dan kun je geen bruine ogen hebben: dat recept heb je gewoon niet."
        ],
        "regel": "Basen aanvullen: A ↔ T, C ↔ G; een andere volgorde van basen = een ander allel = een ander eiwit.",
        "voorbeelden": [
          {
            "en": "A T T G C → T A A C G",
            "nl": "Elke base krijgt zijn vaste maatje aan de overkant.",
            "let": "<b>let op</b>: niet de volgorde omdraaien, maar per letter het maatje zoeken."
          },
          {
            "en": "2× allel blauw → blauwe ogen",
            "nl": "Zonder allel voor bruin kun je geen bruine ogen krijgen.",
            "let": "<b>let op</b>: allel = variant van het gen, niet het gen zelf."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Welke base hoort tegenover <b>G</b>?",
            "o": [
              "T",
              "G",
              "C",
              "A"
            ],
            "a": "C",
            "w": "C en G zijn altijd aan elkaar gekoppeld.",
            "meer": "A-T en C-G: die twee koppels onthouden is genoeg.",
            "fout": {
              "A": "A hoort bij T, niet bij G.",
              "T": "T hoort bij A, niet bij G.",
              "G": "Een base koppelt niet aan zichzelf. G hoort bij C."
            }
          },
          {
            "t": "mc",
            "q": "Eén kant van de trap is: <b>A C G T</b>. Wat staat er aan de overkant?",
            "o": [
              "T G C A",
              "G T A C",
              "T C G A",
              "A C G T"
            ],
            "a": "T G C A",
            "w": "Per letter het maatje: A→T, C→G, G→C, T→A. Dus T G C A.",
            "meer": "Werk letter voor letter, van links naar rechts.",
            "fout": {
              "A C G T": "Dat is dezelfde kant nog een keer. Aan de overkant staat bij elke base zijn maatje.",
              "T C G A": "A→T en T→A kloppen, maar C hoort bij G en G bij C. Jij liet C en G staan.",
              "G T A C": "Hier zijn de koppels door elkaar gehaald: A hoort bij T, niet bij G."
            }
          },
          {
            "t": "gap",
            "q": "Eén kant van een stukje DNA is <b>C C A</b>. De overkant is G G ___.",
            "a": "T|t",
            "soepel": true,
            "w": "A hoort bij T, dus de derde base aan de overkant is T.",
            "meer": "C→G, C→G, A→T: G G T."
          },
          {
            "t": "mc",
            "q": "Twee allelen voor oogkleur verschillen van elkaar. Waarin zit het verschil?",
            "o": [
              "in de volgorde van de basen",
              "in het soort cel",
              "in de vorm van de trap",
              "in het aantal chromosomen"
            ],
            "a": "in de volgorde van de basen",
            "w": "Een andere volgorde van basen is een andere code, dus een ander eiwit en een andere oogkleur.",
            "meer": "Net als letters: 'kat' en 'tak' hebben dezelfde letters, maar een andere volgorde geeft iets anders.",
            "fout": {
              "in het aantal chromosomen": "Iedereen heeft evenveel chromosomen. Het verschil zit in de code op dat ene stukje DNA.",
              "in het soort cel": "Elke celkern heeft dezelfde allelen. Het verschil zit in de basen zelf.",
              "in de vorm van de trap": "De trap heeft altijd dezelfde vorm. Het verschil zit in welke basen waar liggen."
            }
          },
          {
            "t": "mc",
            "q": "Sem heeft van het gen voor oogkleur 2× het allel voor blauwe ogen. Wat klopt?",
            "o": [
              "Hij heeft één gen voor blauw en één gen voor bruin.",
              "Hij heeft geen allelenpaar.",
              "Hij kan later toch bruine ogen krijgen.",
              "Hij heeft blauwe ogen; bruine ogen kan hij niet hebben."
            ],
            "a": "Hij heeft blauwe ogen; bruine ogen kan hij niet hebben.",
            "w": "Zonder allel voor bruin heeft hij de code voor bruine ogen niet.",
            "meer": "Twee dezelfde allelen = één variant, dubbel.",
            "fout": {
              "Hij kan later toch bruine ogen krijgen.": "Daarvoor zou hij een allel voor bruin moeten hebben. Dat heeft hij niet.",
              "Hij heeft één gen voor blauw en één gen voor bruin.": "Hij heeft twee allelen van hetzelfde gen, en allebei voor blauw.",
              "Hij heeft geen allelenpaar.": "Twee dezelfde allelen zijn ook een allelenpaar."
            }
          },
          {
            "t": "mc",
            "q": "In je ogen zit de kleurstof melanine. Wat regelt dat er melanine gemaakt wordt?",
            "o": [
              "de geslachtschromosomen",
              "eiwitten",
              "het licht van de zon",
              "de basen A en T alleen"
            ],
            "a": "eiwitten",
            "w": "Eiwitten regelen kleur, vorm en werking; de code daarvoor ligt in een gen.",
            "meer": "Gen (recept) → eiwit (kok) → melanine (kleur).",
            "fout": {
              "de basen A en T alleen": "Basen zijn de letters van de code, ze maken zelf geen kleurstof. En C en G horen er net zo goed bij.",
              "de geslachtschromosomen": "Die bepalen het geslacht. Oogkleur zit op andere chromosomen.",
              "het licht van de zon": "Zonlicht kan je huid bruiner maken, maar de code om melanine te maken zit in je genen."
            }
          },
          {
            "t": "mc",
            "q": "Welke van deze vier is een echt basenpaar?",
            "o": [
              "C-T",
              "A-G",
              "G-C",
              "T-T"
            ],
            "a": "G-C",
            "w": "G en C horen bij elkaar.",
            "meer": "Alleen A-T (of T-A) en C-G (of G-C) bestaan.",
            "fout": {
              "A-G": "A hoort bij T, niet bij G.",
              "C-T": "C hoort bij G, niet bij T.",
              "T-T": "Een base koppelt niet aan zichzelf. T hoort bij A."
            }
          },
          {
            "t": "mc",
            "q": "Storm heeft voor haarvorm een allel voor steil en een allel voor krullend haar. Hoe noem je die twee samen?",
            "o": [
              "een chromosomenpaar",
              "een allelenpaar",
              "twee genen",
              "een basenpaar"
            ],
            "a": "een allelenpaar",
            "w": "De twee allelen van één gen samen heten een allelenpaar.",
            "meer": "Twee verschillende allelen is ook gewoon een allelenpaar.",
            "fout": {
              "een basenpaar": "Een basenpaar is A-T of C-G: twee letters, geen twee allelen.",
              "een chromosomenpaar": "De allelen liggen op een chromosomenpaar, maar de twee allelen zelf heten een allelenpaar.",
              "twee genen": "Het is één gen (haarvorm) met twee varianten: twee allelen."
            }
          },
          {
            "t": "vb",
            "opgave": "Uitgewerkt voorbeeld: vul de overkant aan van <b>T A G G C</b>.",
            "stappen": [
              {
                "toon": "T → A",
                "uitleg": "T en A horen bij elkaar."
              },
              {
                "toon": "A → T",
                "uitleg": "A en T horen bij elkaar."
              },
              {
                "toon": "G → C, G → C",
                "uitleg": "G en C horen bij elkaar."
              },
              {
                "toon": "C → G. Antwoord: A T C C G",
                "uitleg": "C en G horen bij elkaar."
              }
            ],
            "waarom": {
              "q": "Waarom kun je de overkant altijd precies voorspellen?",
              "o": [
                "Omdat de overkant altijd hetzelfde is als de eerste kant",
                "Omdat je de letters gewoon omdraait",
                "Omdat A altijd met T en C altijd met G gekoppeld is"
              ],
              "a": "Omdat A altijd met T en C altijd met G gekoppeld is"
            },
            "fout": {
              "Omdat de overkant altijd hetzelfde is als de eerste kant": "Dan zou A tegenover A staan. Een base staat altijd tegenover zijn maatje.",
              "Omdat je de letters gewoon omdraait": "Omdraaien (achterstevoren lezen) geeft niet de overkant. Je zoekt per letter het maatje."
            },
            "w": "Vaste koppels A-T en C-G maken de overkant voorspelbaar.",
            "meer": "Handig: zo kan een cel een kant van de trap gebruiken om de andere kant terug te bouwen."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Twee woorden die vaak door elkaar lopen: <b>gen</b> en <b>allel</b>. Neem oogkleur. Het <b>gen</b> is de plek op het chromosoom die over oogkleur gaat: het hoofdstuk 'oogkleur'. Het <b>allel</b> is wat er in dat gen staat: de variant 'blauw' of 'bruin'.",
          "Iedereen heeft het gen voor oogkleur. Maar niet iedereen heeft dezelfde allelen. Jij hebt er 2 (een allelenpaar); in de hele bevolking bestaan er veel meer (blauw, bruin, grijs, groen).",
          "Nog een paar dat lijkt op elkaar: een <b>basenpaar</b> is A-T of C-G, twee letters naast elkaar op de trap. Een <b>allelenpaar</b> zijn twee hele varianten van een gen, elk van duizenden basen lang."
        ],
        "regel": "Gen = over welke eigenschap het gaat; allel = welke variant erin staat. Basenpaar = twee basen; allelenpaar = twee allelen van één gen.",
        "voorbeelden": [
          {
            "en": "gen: oogkleur · allelen: blauw, bruin",
            "nl": "Iedereen heeft het gen, maar de allelen verschillen.",
            "let": "<b>let op</b>: 'het gen voor blauwe ogen' is eigenlijk het allel voor blauw."
          },
          {
            "en": "basenpaar ≠ allelenpaar",
            "nl": "A-T is twee letters; een allelenpaar zijn twee hele recepten.",
            "let": "<b>let op</b>: niet verwarren door het woord 'paar'."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Wat is het verschil tussen een gen en een allel?",
            "o": [
              "Een allel is groter dan een chromosoom.",
              "Er is geen verschil, het zijn twee namen voor hetzelfde.",
              "Gen: over welke eigenschap; allel: welke variant erin staat.",
              "Een gen zit in lichaamscellen, een allel in geslachtscellen."
            ],
            "a": "Gen: over welke eigenschap; allel: welke variant erin staat.",
            "w": "Gen = het hoofdstuk oogkleur; allel = wat erin staat, bv. blauw.",
            "meer": "Iedereen heeft hetzelfde gen, maar niet dezelfde allelen.",
            "fout": {
              "Er is geen verschil, het zijn twee namen voor hetzelfde.": "Genvariant en allel zijn wel twee namen voor hetzelfde. Maar gen en allel niet: twee mensen hebben allebei het gen voor oogkleur, maar kunnen verschillende allelen hebben.",
              "Een allel is groter dan een chromosoom.": "Andersom: een chromosoom bevat veel genen, en een allel is de informatie in één gen.",
              "Een gen zit in lichaamscellen, een allel in geslachtscellen.": "Allebei zitten ze in elke cel. Een allel is gewoon de informatie in het gen."
            }
          },
          {
            "t": "mc",
            "q": "Storm en haar vriendin hebben allebei het gen voor oogkleur, maar Storm heeft bruine en haar vriendin blauwe ogen. Wat is er anders?",
            "o": [
              "Ze hebben andere basen: Storm heeft geen T.",
              "Storm heeft meer chromosomen.",
              "Ze hebben andere allelen voor oogkleur.",
              "Haar vriendin mist het gen voor oogkleur."
            ],
            "a": "Ze hebben andere allelen voor oogkleur.",
            "w": "Hetzelfde gen, maar een andere variant (allel): andere code, ander eiwit, andere kleur.",
            "meer": "Gen = vraag 'welke oogkleur?', allel = het antwoord.",
            "fout": {
              "Haar vriendin mist het gen voor oogkleur.": "Iedereen heeft het gen voor oogkleur, anders had ze helemaal geen oogkleur.",
              "Ze hebben andere basen: Storm heeft geen T.": "Iedereen heeft alle vier de basen. Het verschil zit in de volgorde op die plek.",
              "Storm heeft meer chromosomen.": "Alle mensen hebben evenveel chromosomen. Het verschil zit in het allel."
            }
          },
          {
            "t": "mc",
            "q": "Welk woordpaar is het juiste: een basenpaar bestaat uit ..., een allelenpaar bestaat uit ...",
            "o": [
              "twee genen / twee basen",
              "twee chromosomen / twee eiwitten",
              "twee allelen / twee basen",
              "twee basen / twee allelen"
            ],
            "a": "twee basen / twee allelen",
            "w": "Basenpaar = A-T of C-G. Allelenpaar = de twee varianten van één gen.",
            "meer": "Een allel is duizenden basenparen lang. Het verschil in grootte is enorm.",
            "fout": {
              "twee genen / twee basen": "Een basenpaar is juist twee basen, en een allelenpaar twee allelen. Hier staan ze verkeerd.",
              "twee chromosomen / twee eiwitten": "Een basenpaar is veel kleiner dan een chromosoom, en een allelenpaar is DNA, geen eiwit.",
              "twee allelen / twee basen": "Precies omgedraaid: basenpaar = twee basen, allelenpaar = twee allelen."
            }
          },
          {
            "t": "mc",
            "q": "Op het ene chromosoom van een paar staat op een bepaalde plek <b>A-T</b>, op het andere chromosoom op precies dezelfde plek <b>G-C</b>. Wat kun je zeggen?",
            "o": [
              "Dat is onmogelijk, beide chromosomen moeten gelijk zijn.",
              "De twee allelen van dat gen zijn verschillend.",
              "Het zijn twee verschillende genen.",
              "Een van de chromosomen is een geslachtschromosoom."
            ],
            "a": "De twee allelen van dat gen zijn verschillend.",
            "w": "Zelfde gen (zelfde plek), andere code: twee verschillende allelen.",
            "meer": "Twee dezelfde allelen: elke plek gelijk. Twee verschillende: ergens een andere base.",
            "fout": {
              "Dat is onmogelijk, beide chromosomen moeten gelijk zijn.": "Het ene chromosoom komt van je moeder, het andere van je vader. Ze mogen best een ander allel hebben.",
              "Het zijn twee verschillende genen.": "Het is dezelfde plek, dus hetzelfde gen. Alleen de variant (allel) verschilt.",
              "Een van de chromosomen is een geslachtschromosoom.": "Dat volgt er niet uit. Bij elk chromosomenpaar kunnen de allelen verschillen."
            }
          },
          {
            "t": "mc",
            "q": "Welke volgorde is goed, van groot naar klein?",
            "o": [
              "chromosoom → celkern → basen → gen",
              "basen → gen → chromosoom → celkern",
              "celkern → chromosoom → gen → basen",
              "gen → chromosoom → celkern → basen"
            ],
            "a": "celkern → chromosoom → gen → basen",
            "w": "Bibliotheek (celkern) → boek (chromosoom) → recept (gen) → letters (basen).",
            "meer": "Het allel is wat er in het recept staat: de variant.",
            "fout": {
              "gen → chromosoom → celkern → basen": "Een gen is een stukje van een chromosoom, dus kleiner. En de basen staan hier niet op de goede plek.",
              "basen → gen → chromosoom → celkern": "Dat is de goede volgorde, maar van klein naar groot. De vraag was van groot naar klein.",
              "chromosoom → celkern → basen → gen": "De chromosomen liggen ín de celkern, dus de celkern is groter."
            }
          },
          {
            "t": "mc",
            "q": "Waarom maakt een andere volgorde van basen een andere eigenschap?",
            "o": [
              "Omdat er dan een ander eiwit gemaakt wordt",
              "Dat doet het niet, de volgorde maakt niet uit",
              "Omdat er dan meer chromosomen ontstaan",
              "Omdat het chromosoom dan van vorm verandert"
            ],
            "a": "Omdat er dan een ander eiwit gemaakt wordt",
            "w": "De volgorde is de code voor een eiwit; een ander eiwit regelt de eigenschap anders.",
            "meer": "Basenvolgorde → eiwit → kleur, vorm of werking.",
            "fout": {
              "Omdat het chromosoom dan van vorm verandert": "Het chromosoom blijft een lange dunne draad. Het gaat om de code die erin staat.",
              "Omdat er dan meer chromosomen ontstaan": "Het aantal chromosomen verandert niet door de volgorde van de basen.",
              "Dat doet het niet, de volgorde maakt niet uit": "De volgorde is juist de code. Andere volgorde, ander recept."
            }
          },
          {
            "t": "gap",
            "q": "De twee allelen van een gen samen heten een ___.",
            "a": "allelenpaar|allelpaar|allelen paar",
            "soepel": true,
            "w": "Twee allelen van één gen vormen een allelenpaar.",
            "meer": "Niet te verwarren met basenpaar (A-T of C-G)."
          },
          {
            "t": "mc",
            "q": "Waar in jouw lichaam zit het gen voor oogkleur?",
            "o": [
              "alleen in de cellen van je ogen",
              "in (bijna) elke celkern",
              "alleen in je geslachtscellen",
              "in je bloed, niet in je cellen"
            ],
            "a": "in (bijna) elke celkern",
            "w": "Elke celkern bevat alle chromosomen, dus alle genen, ook die voor oogkleur.",
            "meer": "Een spiercel heeft het gen voor oogkleur ook, het staat daar alleen niet 'aan'.",
            "fout": {
              "alleen in de cellen van je ogen": "Elke celkern bevat al je erfelijke informatie, ook een huidcel van je knie.",
              "alleen in je geslachtscellen": "Geslachtscellen hebben de helft, maar lichaamscellen hebben juist alle genen.",
              "in je bloed, niet in je cellen": "Genen liggen op chromosomen, en die liggen altijd in de celkern."
            }
          },
          {
            "t": "open",
            "q": "Leg met het voorbeeld oogkleur uit wat het verschil is tussen een gen en een allel.",
            "punten": 2,
            "modelantwoord": "Het gen voor oogkleur is het stukje DNA dat over de eigenschap oogkleur gaat; iedereen heeft het. Een allel is de informatie in dat gen, de variant, bijvoorbeeld blauw of bruin. Je hebt er twee.",
            "sleutelwoorden": [
              {
                "moet": [
                  "eigenschap",
                  "oogkleur"
                ],
                "syn": [
                  "stukje dna",
                  "stuk dna"
                ]
              },
              {
                "moet": [
                  "variant",
                  "blauw",
                  "bruin"
                ],
                "syn": [
                  "versie",
                  "informatie"
                ]
              }
            ],
            "rubric": [
              "Gen = stukje DNA voor de eigenschap oogkleur",
              "Allel = de variant/informatie in dat gen, bv. blauw of bruin"
            ],
            "w": "Gen = de vraag (welke oogkleur), allel = het antwoord (blauw of bruin).",
            "meer": "Je hebt 2 allelen per gen; in de hele bevolking bestaan er vaak veel meer."
          }
        ]
      }
    ]
  },
  {
    "id": "mutatie",
    "emoji": "⚠️",
    "titel": "T5 · Een foutje in de code",
    "kort": "Een mutatie is een plotselinge verandering van het genotype (basen veranderd); een gemuteerd allel in een geslachtscel komt in alle cellen van het kind, en is hij zichtbaar in het fenotype, dan heet het organisme een mutant, zoals een albino.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Stel je een recept voor waarin één letter verandert: 'zout' wordt 'zoet'. Eén letter, en de cake smaakt heel anders. Zoiets kan ook in DNA gebeuren. Dat heet een <b>mutatie</b>: <b>een plotselinge verandering van het genotype.</b> Eén of meer basen (A, T, C, G) zijn veranderd, waardoor de code anders is en het eiwit niet goed meer gemaakt wordt.",
          "Is een allel veranderd, dan noem je het <b>gemuteerd</b>: <b>als een allel veranderd is.</b>",
          "Is de mutatie te zien aan de buitenkant (in het fenotype), dan heet het organisme een <b>mutant</b>: <b>een organisme waarbij de mutatie zichtbaar is in het fenotype.</b> Een bekend voorbeeld is een <b>albino</b>: <b>een organisme met albinisme kan geen melanine (pigment, kleurstof) aanmaken voor haren, ogen en huid.</b>",
          "Sommige dingen van buitenaf vergroten de kans op mutaties: <b>mutagene invloeden</b>, zoals roken, uv-straling (felle zon), radioactieve straling, röntgenstraling en asbest."
        ],
        "regel": "Mutatie = plotselinge verandering van het genotype (basen veranderd); gemuteerd = allel veranderd; mutant = mutatie zichtbaar in het fenotype.",
        "voorbeelden": [
          {
            "en": "…A T G C… → …A T C C…",
            "nl": "Eén base is veranderd: de code is anders, het eiwit wordt niet goed meer gemaakt.",
            "let": "<b>let op</b>: het gaat om het genotype, niet om een wondje of een ziekte die je oploopt."
          },
          {
            "en": "witte egel met rode ogen",
            "nl": "Een albino: kan geen melanine maken voor haar, ogen en huid.",
            "let": "<b>let op</b>: een albino is een mutant, want de mutatie is zichtbaar."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Een mutatie is een plotselinge verandering van het ___.",
            "a": "genotype",
            "soepel": true,
            "w": "Bij een mutatie verandert de erfelijke informatie zelf: het genotype.",
            "meer": "Niet het fenotype! Soms zie je er niets van."
          },
          {
            "t": "mc",
            "q": "Wat verandert er bij een mutatie in het DNA?",
            "o": [
              "Eén of meer basen zijn veranderd.",
              "De cel gaat dood.",
              "De cel krijgt er een chromosoom bij.",
              "Het DNA verdwijnt uit de celkern."
            ],
            "a": "Eén of meer basen zijn veranderd.",
            "w": "Bij een mutatie veranderen één of meer basen, waardoor de code anders is.",
            "meer": "Eén andere letter in het recept kan al een ander eiwit geven.",
            "fout": {
              "De cel krijgt er een chromosoom bij.": "Volgens je begrippenlijst gaat het om veranderde basen, niet om een extra chromosoom.",
              "De cel gaat dood.": "Meestal merk je er niets van: de cel blijft gewoon leven.",
              "Het DNA verdwijnt uit de celkern.": "Het DNA blijft er, alleen de code op één plek is veranderd."
            }
          },
          {
            "t": "gap",
            "q": "Een organisme waarbij de mutatie zichtbaar is in het fenotype, heet een ___.",
            "a": "mutant|mutanten",
            "soepel": true,
            "w": "Een mutant is een organisme waarbij je de mutatie in het fenotype kunt zien.",
            "meer": "Mutatie = de verandering. Mutant = het organisme waarbij je die verandering ziet."
          },
          {
            "t": "mc",
            "q": "Wanneer noem je een allel <b>gemuteerd</b>?",
            "o": [
              "als het heel sterk is",
              "als het van je moeder komt",
              "als het veranderd is",
              "als het in een geslachtscel zit"
            ],
            "a": "als het veranderd is",
            "w": "Gemuteerd betekent: veranderd, één of meer basen zijn anders.",
            "meer": "Mutatie = verandering, gemuteerd = veranderd.",
            "fout": {
              "als het van je moeder komt": "Van wie het komt maakt niet uit. Gemuteerd betekent dat het veranderd is.",
              "als het heel sterk is": "Sterk of zwak zegt niets over gemuteerd zijn.",
              "als het in een geslachtscel zit": "Een allel in een geslachtscel is meestal gewoon niet veranderd. Gemuteerd betekent veranderd."
            }
          },
          {
            "t": "mc",
            "q": "Wat kan een albino niet aanmaken?",
            "o": [
              "melanine",
              "eiwitten",
              "DNA",
              "bloed"
            ],
            "a": "melanine",
            "w": "Een albino kan geen melanine maken, de kleurstof voor haren, ogen en huid.",
            "meer": "Daarom zijn albino's heel licht van kleur.",
            "fout": {
              "eiwitten": "Een albino maakt wel eiwitten; alleen de route naar melanine werkt niet.",
              "bloed": "Een albino heeft gewoon bloed. Het gaat om de kleurstof melanine.",
              "DNA": "Een albino heeft gewoon DNA in elke cel; er is alleen een allel veranderd."
            }
          },
          {
            "t": "gap",
            "q": "Een albino kan geen ___ aanmaken voor haren, ogen en huid.",
            "a": "melanine|pigment|kleurstof",
            "soepel": true,
            "w": "Melanine is het pigment (de kleurstof) dat albino's niet kunnen maken.",
            "meer": "Melanine = pigment = kleurstof."
          },
          {
            "t": "mc",
            "q": "Welke van deze is een <b>mutagene invloed</b>?",
            "o": [
              "uv-straling",
              "zwemmen",
              "een appel eten",
              "water drinken"
            ],
            "a": "uv-straling",
            "w": "Uv-straling geeft een verhoogde kans op beschadiging van je cellen, dus op mutaties.",
            "meer": "Daarom smeer je je in als je bij felle zon gaat zwemmen.",
            "fout": {
              "water drinken": "Water drinken beschadigt je cellen niet.",
              "zwemmen": "Zwemmen zelf is geen mutagene invloed. De felle zon erbij kan dat wel zijn.",
              "een appel eten": "Een appel geeft geen verhoogde kans op mutaties."
            }
          },
          {
            "t": "mc",
            "q": "Wat zijn <b>mutagene invloeden</b>?",
            "o": [
              "eiwitten in je cellen die veranderde basen weer herstellen",
              "mutaties die je bij de bevruchting van je ouders erft",
              "organismen waarbij je een mutatie in het fenotype kunt zien",
              "invloeden van buitenaf die de kans op mutaties verhogen"
            ],
            "a": "invloeden van buitenaf die de kans op mutaties verhogen",
            "w": "Mutagene invloeden komen van buitenaf en vergroten de kans op beschadiging van je cellen, dus op mutaties.",
            "meer": "Voorbeelden: roken, uv-straling, radioactieve straling, röntgenstraling, asbest.",
            "fout": {
              "mutaties die je bij de bevruchting van je ouders erft": "Een mutagene invloed komt van buitenaf, niet van je ouders.",
              "eiwitten in je cellen die veranderde basen weer herstellen": "Mutagene invloeden veroorzaken juist mutaties, ze herstellen niets.",
              "organismen waarbij je een mutatie in het fenotype kunt zien": "Dat zijn mutanten, geen mutagene invloeden."
            }
          },
          {
            "t": "mc",
            "q": "Welke hoort <b>niet</b> in het rijtje mutagene invloeden?",
            "o": [
              "röntgenstraling",
              "asbest",
              "roken",
              "groente eten"
            ],
            "a": "groente eten",
            "w": "Groente eten geeft geen verhoogde kans op mutaties. De andere drie wel.",
            "meer": "Rijtje: roken, uv, radioactieve straling, röntgen, asbest.",
            "fout": {
              "roken": "Roken staat wel in het rijtje: de stoffen in rook kunnen je cellen beschadigen.",
              "asbest": "Asbest staat wel in het rijtje: inademen ervan geeft meer kans op mutaties.",
              "röntgenstraling": "Röntgenstraling staat wel in het rijtje. Daarom gaat de assistent even de kamer uit bij een foto."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Stel: in één huidcel op je arm verandert een base. Wat merk je ervan? Meestal niets. De cellen eromheen werken prima. Een gemuteerd allel in <b>één lichaamscel</b> is meestal geen probleem.",
          "Anders is het als de mutatie in een <b>geslachtscel</b> zit (een eicel of zaadcel) die bij een bevruchting betrokken is. Uit die bevruchte eicel groeit een nieuw organisme, en elke cel daarvan komt uit die ene cel. Dus zit de mutatie dan in <b>alle cellen</b> van het nieuwe organisme.",
          "Denkfout: <i>een mutatie in mijn huidcel krijgen mijn kinderen ook</i>. Nee! Je kinderen groeien uit een eicel en een zaadcel, niet uit je huidcel. Alleen mutaties in geslachtscellen kunnen naar je kinderen gaan.",
          "Hoeveel gevolgen een mutatie heeft, hangt af van <b>wáár</b> hij zit: in welk allel."
        ],
        "regel": "Mutatie in één lichaamscel: meestal geen probleem, niet erfelijk. Mutatie in een geslachtscel die bevrucht wordt: in alle cellen van het nieuwe organisme.",
        "voorbeelden": [
          {
            "en": "huidcel op je arm gemuteerd",
            "nl": "Eén cel tussen miljoenen gezonde cellen: je merkt er meestal niets van.",
            "let": "<b>let op</b>: je kinderen erven dit niet."
          },
          {
            "en": "eicel met gemuteerd allel voor melanine",
            "nl": "Na bevruchting zit de mutatie in elke cel van het kind: het kan albino zijn.",
            "let": "<b>let op</b>: zo ontstaat een mutant."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "In één cel van je huid ontstaat een mutatie. Wat gebeurt er meestal?",
            "o": [
              "Al je cellen krijgen de mutatie.",
              "Je kinderen krijgen de mutatie ook.",
              "Meestal merk je er niets van.",
              "Je hele huid verandert van kleur."
            ],
            "a": "Meestal merk je er niets van.",
            "w": "Eén gemuteerde lichaamscel valt niet op tussen al die gezonde cellen.",
            "meer": "Meestal heeft een mutatie geen gevolgen.",
            "fout": {
              "Je hele huid verandert van kleur.": "Het gaat om één cel. De rest van je huid heeft de mutatie niet.",
              "Al je cellen krijgen de mutatie.": "Je andere cellen komen niet uit die ene huidcel, dus die blijven onveranderd.",
              "Je kinderen krijgen de mutatie ook.": "Je kinderen groeien uit een eicel en zaadcel, niet uit je huidcel."
            }
          },
          {
            "t": "mc",
            "q": "In een zaadcel zit een gemuteerd allel. Die zaadcel bevrucht een eicel. Waar zit de mutatie bij het kind?",
            "o": [
              "alleen in de geslachtscellen van het kind",
              "alleen in één cel",
              "nergens, mutaties verdwijnen bij de bevruchting",
              "in alle cellen van het kind"
            ],
            "a": "in alle cellen van het kind",
            "w": "Alle cellen van het kind komen uit die ene bevruchte eicel, dus ze hebben allemaal de mutatie.",
            "meer": "Eén begincel → door celdeling alle cellen. Wat in de begincel zit, zit overal.",
            "fout": {
              "alleen in de geslachtscellen van het kind": "Het kind groeit door celdeling uit de bevruchte eicel, dus élke cel krijgt de mutatie mee.",
              "alleen in één cel": "Dat is zo bij een mutatie in een lichaamscel. Hier zat hij in de begincel van het hele kind.",
              "nergens, mutaties verdwijnen bij de bevruchting": "Bij de bevruchting verdwijnt er niets; het allel gaat gewoon mee."
            }
          },
          {
            "t": "mc",
            "q": "Storm heeft door de zon een mutatie in een huidcel op haar arm. Krijgen haar latere kinderen die mutatie?",
            "o": [
              "Nee, een huidcel geeft niets door.",
              "Alleen als het een kwaadaardige mutatie is.",
              "Ja, maar alleen haar dochters.",
              "Ja, alle mutaties zijn erfelijk."
            ],
            "a": "Nee, een huidcel geeft niets door.",
            "w": "Alleen mutaties in geslachtscellen kunnen naar een kind gaan. Een huidcel doet niet mee bij de bevruchting.",
            "meer": "Erfelijk betekent: via de eicel of zaadcel doorgegeven.",
            "fout": {
              "Ja, alle mutaties zijn erfelijk.": "Een mutatie in een lichaamscel blijft in jouw lichaam. Alleen die in een geslachtscel kan worden doorgegeven.",
              "Ja, maar alleen haar dochters.": "Meisjes erven niet alleen van mama. En een huidcel doet sowieso niet mee bij de bevruchting.",
              "Alleen als het een kwaadaardige mutatie is.": "Kwaadaardig is een woord voor tumoren. Het gaat erom of de mutatie in een geslachtscel zit."
            }
          },
          {
            "t": "mc",
            "q": "Een witte merel met rode ogen wordt gezien in het park. Hoe noem je zo'n vogel?",
            "o": [
              "een allelenpaar",
              "een albino (mutant)",
              "een mutagene invloed",
              "een tumor"
            ],
            "a": "een albino (mutant)",
            "w": "De mutatie is zichtbaar in het fenotype: geen melanine. Het is een albino, dus een mutant.",
            "meer": "Elke albino is een mutant; niet elke mutant is een albino.",
            "fout": {
              "een mutagene invloed": "Een mutagene invloed is iets van buitenaf, zoals uv. Een vogel is dat niet.",
              "een allelenpaar": "Een allelenpaar zijn de twee allelen van een gen, geen hele vogel.",
              "een tumor": "Een tumor is een cel die ongeremd deelt. Deze merel mist alleen kleurstof."
            }
          },
          {
            "t": "mc",
            "q": "Een hond heeft in al zijn cellen een gemuteerd allel, maar je ziet er niets van aan de hond. Is hij een mutant?",
            "o": [
              "Nee, want honden kunnen geen mutaties hebben.",
              "Nee, want je ziet het niet in zijn fenotype.",
              "Ja, want hij heeft een mutatie.",
              "Ja, maar alleen als hij jong is."
            ],
            "a": "Nee, want je ziet het niet in zijn fenotype.",
            "w": "Een mutant is een organisme waarbij de mutatie zichtbaar is in het fenotype. Hier zie je niets.",
            "meer": "De meeste mutaties zie je niet. Dan spreek je niet van een mutant.",
            "fout": {
              "Ja, want hij heeft een mutatie.": "Een mutatie hebben is niet genoeg: voor 'mutant' moet hij zichtbaar zijn in het fenotype.",
              "Ja, maar alleen als hij jong is.": "Leeftijd maakt niet uit. Het gaat om wel of niet zichtbaar.",
              "Nee, want honden kunnen geen mutaties hebben.": "Mutaties kunnen bij alle organismen voorkomen, ook bij honden."
            }
          },
          {
            "t": "mc",
            "q": "Een albino is geboren. Waar zat de mutatie oorspronkelijk?",
            "o": [
              "in de ogen van het kind na de geboorte",
              "in het eten van de moeder",
              "in een huidcel van de moeder",
              "in de eicel of de zaadcel"
            ],
            "a": "in de eicel of de zaadcel",
            "w": "De mutatie zat in een eicel of zaadcel, in het allel voor melanine. Daarom zit hij in alle cellen.",
            "meer": "Zichtbaar in het hele lichaam = al aanwezig in de begincel.",
            "fout": {
              "in een huidcel van de moeder": "Een huidcel van de moeder doet niet mee bij de bevruchting. Het moet een geslachtscel zijn.",
              "in de ogen van het kind na de geboorte": "Dan zat de mutatie maar in een paar cellen. Bij albinisme zit hij in alle cellen, van haar, ogen en huid.",
              "in het eten van de moeder": "Een mutatie is een verandering in het DNA, niet iets in eten."
            }
          },
          {
            "t": "gap",
            "q": "Een allel dat veranderd is, noem je ___.",
            "a": "gemuteerd",
            "soepel": true,
            "w": "Gemuteerd = veranderd.",
            "meer": "Gemuteerd allel → kan leiden tot een mutant als je het in het fenotype ziet."
          },
          {
            "t": "mc",
            "q": "Waarom zet je bij een röntgenfoto bij de tandarts soms een loodschort op?",
            "o": [
              "Om warm te blijven",
              "Omdat lood je tanden en kaak sterker maakt",
              "Omdat de foto zonder schort onscherp wordt en mislukt",
              "Omdat röntgenstraling een mutagene invloed is"
            ],
            "a": "Omdat röntgenstraling een mutagene invloed is",
            "w": "Röntgenstraling geeft meer kans op mutaties; het schort houdt straling tegen.",
            "meer": "Een keer een foto is weinig straling, maar minder is altijd beter.",
            "fout": {
              "Om warm te blijven": "Het schort beschermt tegen straling, niet tegen kou.",
              "Omdat lood je tanden en kaak sterker maakt": "Het schort raakt je tanden niet eens. Het beschermt de rest van je lichaam tegen straling.",
              "Omdat de foto zonder schort onscherp wordt en mislukt": "De foto lukt ook zonder schort. Het schort is er om je cellen te beschermen."
            }
          },
          {
            "t": "open",
            "q": "Leg uit waarom een mutatie in een geslachtscel grotere gevolgen kan hebben dan een mutatie in een lichaamscel.",
            "punten": 2,
            "modelantwoord": "Een mutatie in één lichaamscel zit maar in die ene cel; de cellen eromheen werken gewoon. Als een geslachtscel met een mutatie bij een bevruchting betrokken is, groeit het nieuwe organisme uit die cel, dus zit de mutatie in alle cellen van dat organisme.",
            "sleutelwoorden": [
              {
                "moet": [
                  "één cel",
                  "een cel",
                  "omheen",
                  "andere cellen"
                ],
                "syn": [
                  "alleen die cel"
                ]
              },
              {
                "moet": [
                  "alle cellen",
                  "elke cel",
                  "hele"
                ],
                "syn": [
                  "overal",
                  "nakomeling",
                  "kind"
                ]
              }
            ],
            "rubric": [
              "Lichaamscel: mutatie in maar één cel, rest werkt gewoon",
              "Geslachtscel: na bevruchting zit de mutatie in alle cellen van het nieuwe organisme"
            ],
            "w": "Eén cel tussen miljoenen valt weg; maar uit een bevruchte eicel groeit alles.",
            "meer": "Daarom kun je een albino herkennen aan het hele lichaam, niet aan één plekje."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Mutaties hebben een slechte naam. Maar de meeste mutaties zie je niet en hebben geen gevolgen. Of een mutatie veel uitmaakt, hangt af van <b>waar</b> hij zit, in welk allel.",
          "Let op de drie woorden: <b>mutatie</b> is de verandering zelf, <b>gemuteerd</b> zeg je van het allel dat veranderd is, en <b>mutant</b> is het organisme waarbij je het in het fenotype ziet.",
          "Mutagene invloeden (roken, uv, radioactieve straling, röntgen, asbest) maken mutaties <b>waarschijnlijker</b>, niet zeker. Een keer in de zon is niet meteen een mutatie, maar vaak en lang verbranden verhoogt de kans."
        ],
        "regel": "Mutatie = verandering; gemuteerd = het veranderde allel; mutant = zichtbaar in het fenotype. Niet elke mutatie is zichtbaar of erfelijk.",
        "voorbeelden": [
          {
            "en": "mutatie ≠ mutant",
            "nl": "Bijna iedereen heeft ergens wel een gemuteerde cel, maar bijna niemand is een mutant.",
            "let": "<b>let op</b>: mutant alleen als je het in het fenotype ziet."
          },
          {
            "en": "verbranden in de zon → meer kans, geen zekerheid",
            "nl": "Mutagene invloeden verhogen de kans op mutaties.",
            "let": "<b>let op</b>: kans, geen garantie."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Welke uitspraak over mutaties klopt?",
            "o": [
              "Mutaties komen alleen bij mensen voor.",
              "Elke mutatie is slecht.",
              "Meestal heeft een mutatie geen gevolgen.",
              "Elke mutatie zie je aan de buitenkant."
            ],
            "a": "Meestal heeft een mutatie geen gevolgen.",
            "w": "De meeste mutaties merk je niet; ze zitten in één cel of in een allel dat weinig uitmaakt.",
            "meer": "Hoeveel gevolgen hij heeft, hangt af van wáár hij zit.",
            "fout": {
              "Elke mutatie is slecht.": "De meeste mutaties hebben geen gevolgen. Slecht is dus zeker niet altijd.",
              "Elke mutatie zie je aan de buitenkant.": "De meeste zie je juist niet. Pas als je hem ziet, spreek je van een mutant.",
              "Mutaties komen alleen bij mensen voor.": "Denk aan de albino-egel of albinopinguïn: ook dieren (en planten) hebben mutaties."
            }
          },
          {
            "t": "mc",
            "q": "Kies het juiste rijtje: de verandering zelf · het veranderde allel · het organisme waarbij je het ziet.",
            "o": [
              "mutatie · mutant · gemuteerd",
              "mutant · mutatie · gemuteerd",
              "mutatie · gemuteerd · mutant",
              "gemuteerd · mutant · mutatie"
            ],
            "a": "mutatie · gemuteerd · mutant",
            "w": "Mutatie = verandering, gemuteerd = veranderd allel, mutant = organisme met zichtbare mutatie.",
            "meer": "Mutant eindigt op -ant zoals 'olifant': een heel dier.",
            "fout": {
              "mutant · mutatie · gemuteerd": "Een mutant is een organisme, niet de verandering zelf.",
              "gemuteerd · mutant · mutatie": "Gemuteerd zeg je van het allel, niet van de verandering. En mutatie is geen organisme.",
              "mutatie · mutant · gemuteerd": "De eerste klopt, maar mutant is het organisme (laatste), niet het allel."
            }
          },
          {
            "t": "mc",
            "q": "Twee mensen hebben allebei een gemuteerd allel in al hun cellen. Bij de één zie je niets, bij de ander wel. Wat verklaart dat het best?",
            "o": [
              "Het hangt af van in welk allel hij zit.",
              "Bij de één is de mutatie verdwenen.",
              "Mutaties zijn alleen zichtbaar bij kinderen.",
              "De ene persoon heeft geen DNA in zijn huid."
            ],
            "a": "Het hangt af van in welk allel hij zit.",
            "w": "Een mutatie in het allel voor melanine zie je; een mutatie in een allel dat weinig regelt, merk je niet.",
            "meer": "Zelfde soort fout, andere plek, ander gevolg.",
            "fout": {
              "Bij de één is de mutatie verdwenen.": "Een mutatie in al je cellen verdwijnt niet vanzelf.",
              "De ene persoon heeft geen DNA in zijn huid.": "Elke celkern bevat al het DNA, ook die in je huid.",
              "Mutaties zijn alleen zichtbaar bij kinderen.": "Een albino blijft ook als volwassene albino. Leeftijd is niet de verklaring."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is langdurig verbranden in de zon niet slim, ook al zie je meteen geen mutatie?",
            "o": [
              "Omdat je kinderen dan zeker albino worden",
              "Dat maakt niet uit, uv-straling doet niets met je cellen",
              "Omdat zon je geslachtschromosomen verandert",
              "Omdat uv-straling de kans op mutaties verhoogt"
            ],
            "a": "Omdat uv-straling de kans op mutaties verhoogt",
            "w": "Uv-straling is een mutagene invloed: meer kans op beschadiging en mutaties in je cellen.",
            "meer": "Insmeren en uit de felle middagzon blijven verkleint de kans.",
            "fout": {
              "Omdat je kinderen dan zeker albino worden": "Zon raakt je huidcellen, niet je eicellen of zaadcellen. En albino wordt je door een mutatie in een geslachtscel.",
              "Omdat zon je geslachtschromosomen verandert": "Uv werkt op je huid; je geslachtschromosomen hebben er niets speciaals mee te maken.",
              "Dat maakt niet uit, uv-straling doet niets met je cellen": "Uv-straling staat juist in het rijtje mutagene invloeden."
            }
          },
          {
            "t": "mc",
            "q": "Een mutagene invloed, zoals roken, betekent dat ...",
            "o": [
              "je zeker een mutatie krijgt",
              "alleen je longen DNA hebben",
              "je mutaties juist worden hersteld",
              "de kans op mutaties groter wordt"
            ],
            "a": "de kans op mutaties groter wordt",
            "w": "Mutagene invloeden geven een verhoogde kans op beschadiging, dus op mutaties. Geen zekerheid.",
            "meer": "Hoe vaker en langer, hoe groter de kans.",
            "fout": {
              "je zeker een mutatie krijgt": "Het gaat om een verhoogde kans, niet om zekerheid.",
              "je mutaties juist worden hersteld": "Andersom: het veroorzaakt eerder beschadiging.",
              "alleen je longen DNA hebben": "Elke celkern heeft DNA. Roken raakt vooral de cellen waar de rook langskomt."
            }
          },
          {
            "t": "mc",
            "q": "Welke uitspraak over albino's klopt?",
            "o": [
              "Een albino is ontstaan door te weinig zon.",
              "Albinisme ontstaat door een mutatie in één huidcel.",
              "Een albino heeft geen allelen voor huidkleur.",
              "Een albino is een mutant."
            ],
            "a": "Een albino is een mutant.",
            "w": "De mutatie (geen melanine) zie je aan haar, ogen en huid: dus een mutant.",
            "meer": "Elke albino is een mutant, maar niet elke mutant is een albino.",
            "fout": {
              "Een albino is ontstaan door te weinig zon.": "Albinisme komt door een gemuteerd allel uit de eicel of zaadcel, niet door weinig zon.",
              "Een albino heeft geen allelen voor huidkleur.": "Een albino heeft die allelen wel, maar het allel voor het aanmaken van melanine is gemuteerd, waardoor er geen melanine gemaakt wordt.",
              "Albinisme ontstaat door een mutatie in één huidcel.": "Dan zou maar één plekje licht zijn. Bij een albino zit de mutatie in alle cellen."
            }
          },
          {
            "t": "gap",
            "q": "Roken, uv-straling, röntgenstraling en asbest zijn ___ invloeden.",
            "a": "mutagene|mutagenen|mutageen",
            "soepel": true,
            "w": "Mutagene invloeden zijn invloeden van buitenaf die de kans op mutaties verhogen.",
            "meer": "Muta-geen: het 'geeft' mutaties (meer kans erop)."
          },
          {
            "t": "mc",
            "q": "Een mutatie ontstaat in een zaadcel, maar die zaadcel bevrucht nooit een eicel. Wat zijn de gevolgen voor een kind?",
            "o": [
              "Geen, die zaadcel deed niet mee.",
              "Alle broertjes en zusjes krijgen de mutatie.",
              "De vader wordt een mutant.",
              "Het kind wordt een mutant."
            ],
            "a": "Geen, die zaadcel deed niet mee.",
            "w": "Alleen een geslachtscel die bij een bevruchting betrokken is, geeft de mutatie door.",
            "meer": "Er worden heel veel zaadcellen gemaakt; maar één ervan bevrucht een eicel.",
            "fout": {
              "Het kind wordt een mutant.": "Die zaadcel heeft geen eicel bevrucht, dus er is geen kind uit gegroeid.",
              "Alle broertjes en zusjes krijgen de mutatie.": "Elke broer en zus komt uit een andere zaadcel. Deze zaadcel deed nergens aan mee.",
              "De vader wordt een mutant.": "Bij de vader zit de mutatie maar in één zaadcel; dat zie je niet aan zijn fenotype."
            }
          },
          {
            "t": "open",
            "q": "Sanne zegt: 'Elke mutatie is gevaarlijk en zie je altijd.' Leg uit waarom dat niet klopt.",
            "punten": 2,
            "modelantwoord": "De meeste mutaties hebben geen gevolgen, bijvoorbeeld als hij in één lichaamscel zit: de cellen eromheen werken gewoon. Je ziet een mutatie alleen als hij zichtbaar is in het fenotype (een mutant, zoals een albino); dat hangt af van in welk allel hij zit.",
            "sleutelwoorden": [
              {
                "moet": [
                  "geen gevolg",
                  "meestal",
                  "niets",
                  "lichaamscel"
                ],
                "syn": [
                  "één cel",
                  "een cel"
                ]
              },
              {
                "moet": [
                  "fenotype",
                  "zichtbaar",
                  "mutant",
                  "allel",
                  "waar"
                ],
                "syn": [
                  "albino",
                  "te zien"
                ]
              }
            ],
            "rubric": [
              "Noemt dat de meeste mutaties geen gevolgen hebben (bv. in één lichaamscel)",
              "Noemt dat je hem alleen ziet als hij in het fenotype zichtbaar is / het afhangt van welk allel"
            ],
            "w": "Meestal gebeurt er niets; zichtbaar wordt het pas bij een mutant.",
            "meer": "Mutatie ≠ mutant, en mutatie ≠ ziekte."
          }
        ]
      }
    ]
  },
  {
    "id": "tumor",
    "emoji": "🔬",
    "titel": "T5 · Als delen niet stopt",
    "kort": "Een tumor (gezwel) is een cel die zich ongeremd gaat delen omdat het allel dat de celdeling regelt gemuteerd is; een kwaadaardige tumor (kanker) groeit snel en verstoort het weefsel, en kan via bloed of lymfe uitzaaien.",
    "niveaus": [
      {
        "n": 1,
        "naam": "Brons",
        "uitleg": [
          "Als Storm haar knie schaaft, gaan de huidcellen rond het wondje delen tot het dicht is. Dan stoppen ze. Normaal deelt een cel <b>alleen als het nodig is</b>. Dat wordt geregeld door een gen.",
          "Is het allel dat de celdeling regelt <b>gemuteerd</b>, dan kan een cel niet meer stoppen met delen. Zo ontstaat een <b>tumor</b>: <b>een cel die zich ongeremd gaat delen omdat het allel (het gen) dat de celdeling regelt gemuteerd is. Een ander woord voor tumor is gezwel.</b>",
          "Er zijn twee soorten. Een <b>kwaadaardige</b> tumor is <b>een tumor die snel groeit en de bouw en werking van het weefsel (het orgaan) verstoort.</b> Een <b>goedaardige</b> tumor verstoort de werking niet; hij kan wel in de weg zitten, maar is vaak makkelijk weg te halen.",
          "<b>Kanker</b> is <b>een kwaadaardige tumor.</b> Denkfout: <i>elke tumor is kanker</i>. Nee! Alleen een kwaadaardige tumor heet kanker."
        ],
        "regel": "Tumor = cel die ongeremd deelt door een gemuteerd allel voor celdeling (= gezwel); kanker = kwaadaardige tumor.",
        "voorbeelden": [
          {
            "en": "wondje → delen → stoppen",
            "nl": "Normale celdeling: alleen als het nodig is.",
            "let": "<b>let op</b>: bij een tumor werkt die rem niet meer."
          },
          {
            "en": "tumor = gezwel",
            "nl": "Twee woorden voor hetzelfde.",
            "let": "<b>let op</b>: tumor is niet hetzelfde als kanker; alleen een kwaadaardige tumor is kanker."
          }
        ],
        "vragen": [
          {
            "t": "gap",
            "q": "Een ander woord voor tumor is ___.",
            "a": "gezwel|gezwellen",
            "soepel": true,
            "w": "Tumor en gezwel betekenen hetzelfde.",
            "meer": "Gezwel komt van 'zwellen': er groeit iets bij."
          },
          {
            "t": "mc",
            "q": "Wat is een tumor?",
            "o": [
              "een cel die zich ongeremd gaat delen",
              "een cel die zich helemaal niet meer kan delen",
              "een gewone wond die ontstoken is",
              "een virus dat in je bloed zit"
            ],
            "a": "een cel die zich ongeremd gaat delen",
            "w": "Een tumor is een cel die ongeremd deelt, omdat het allel dat de celdeling regelt gemuteerd is.",
            "meer": "Ongeremd = zonder rem: hij stopt niet als het genoeg is.",
            "fout": {
              "een cel die zich helemaal niet meer kan delen": "Precies andersom: een tumorcel deelt juist te veel.",
              "een gewone wond die ontstoken is": "Een ontsteking is iets anders. Een tumor ontstaat door een gemuteerd allel voor celdeling.",
              "een virus dat in je bloed zit": "Een tumor bestaat uit je eigen cellen die blijven delen, niet uit een virus."
            }
          },
          {
            "t": "gap",
            "q": "Een tumor ontstaat omdat het allel dat de ___ regelt gemuteerd is.",
            "a": "celdeling|deling|celdelingen",
            "soepel": true,
            "w": "Het allel dat de celdeling regelt is veranderd, dus de cel stopt niet meer met delen.",
            "meer": "Rem kapot → cel deelt maar door."
          },
          {
            "t": "mc",
            "q": "Wat is kanker?",
            "o": [
              "een mutagene invloed",
              "een goedaardige tumor",
              "een kwaadaardige tumor",
              "elke tumor"
            ],
            "a": "een kwaadaardige tumor",
            "w": "Kanker is een kwaadaardige tumor.",
            "meer": "Kwaadaardig = kanker. Goedaardig = geen kanker.",
            "fout": {
              "elke tumor": "Niet elke tumor is kanker: een goedaardige tumor is geen kanker.",
              "een goedaardige tumor": "Een goedaardige tumor verstoort de werking niet en is geen kanker.",
              "een mutagene invloed": "Een mutagene invloed (zoals roken) verhoogt de kans op mutaties. Het is zelf geen kanker."
            }
          },
          {
            "t": "gap",
            "q": "Kanker is een ___ tumor.",
            "a": "kwaadaardige|kwaadaardig",
            "soepel": true,
            "w": "Kanker = een kwaadaardige tumor.",
            "meer": "Kwaad-aardig: van de 'kwade' soort, die het weefsel verstoort."
          },
          {
            "t": "mc",
            "q": "Wat doet een <b>kwaadaardige</b> tumor?",
            "o": [
              "Hij maakt nieuwe geslachtscellen.",
              "Hij verdwijnt altijd vanzelf.",
              "Hij groeit langzaam en zit alleen in de weg.",
              "Hij groeit snel en verstoort het weefsel."
            ],
            "a": "Hij groeit snel en verstoort het weefsel.",
            "w": "Kwaadaardig = snel groeien en de bouw en werking van het weefsel (orgaan) verstoren.",
            "meer": "Dat verstoren is het verschil met een goedaardige tumor.",
            "fout": {
              "Hij groeit langzaam en zit alleen in de weg.": "Dat past bij een goedaardige tumor, niet bij een kwaadaardige.",
              "Hij verdwijnt altijd vanzelf.": "Een tumor bestaat uit cellen die blijven delen; die verdwijnen niet vanzelf.",
              "Hij maakt nieuwe geslachtscellen.": "Een tumor bestaat uit lichaamscellen die te veel delen, niet uit geslachtscellen."
            }
          },
          {
            "t": "mc",
            "q": "Wat is <b>uitzaaiing</b>?",
            "o": [
              "een mutatie in een geslachtscel die naar het kind gaat",
              "een goedaardige tumor die steeds groter en dikker wordt",
              "zaadjes die een plant met wind of dieren verspreidt",
              "kankercellen die via bloed of lymfe elders terechtkomen"
            ],
            "a": "kankercellen die via bloed of lymfe elders terechtkomen",
            "w": "Bij uitzaaiing reizen kankercellen via bloed of lymfe naar een ander deel van het lichaam en verstoren daar ook weefsel.",
            "meer": "Uitzaaien: als zaadjes die wegwaaien en ergens anders opnieuw groeien.",
            "fout": {
              "zaadjes die een plant met wind of dieren verspreidt": "Het woord lijkt erop, maar bij tumoren gaat het om kankercellen die zich verplaatsen.",
              "een goedaardige tumor die steeds groter en dikker wordt": "Uitzaaiing hoort bij een kwaadaardige tumor, en gaat over cellen die naar een andere plek gaan.",
              "een mutatie in een geslachtscel die naar het kind gaat": "Dat is iets anders: uitzaaiing gaat over kankercellen die zich door het lichaam verspreiden."
            }
          },
          {
            "t": "mc",
            "q": "Wanneer deelt een gezonde cel normaal gesproken?",
            "o": [
              "nooit",
              "altijd, zonder te stoppen",
              "alleen 's nachts",
              "alleen als het nodig is"
            ],
            "a": "alleen als het nodig is",
            "w": "Een gezonde cel deelt alleen als het nodig is, zoals om een wondje dicht te maken.",
            "meer": "Een tumorcel is een cel waarbij die 'alleen als het nodig is'-regel stuk is.",
            "fout": {
              "altijd, zonder te stoppen": "Dat is juist wat een tumorcel doet. Een gezonde cel stopt.",
              "nooit": "Dan zou je niet groeien en je wondjes nooit dichtgaan.",
              "alleen 's nachts": "Het hangt niet af van de tijd, maar of er nieuwe cellen nodig zijn."
            }
          },
          {
            "t": "mc",
            "q": "Hoe kunnen kankercellen in andere lichaamsdelen terechtkomen?",
            "o": [
              "via je haar",
              "via de lucht die je uitademt",
              "via het bloed of de lymfe",
              "dat kan niet, een tumor blijft altijd op één plek"
            ],
            "a": "via het bloed of de lymfe",
            "w": "Cellen van een kwaadaardige tumor kunnen in het bloed of de lymfe komen en zo elders terechtkomen.",
            "meer": "Bloed en lymfe stromen door het hele lichaam, als snelwegen.",
            "fout": {
              "via de lucht die je uitademt": "Kankercellen gaan niet via je adem. Ze reizen mee met bloed of lymfe.",
              "via je haar": "Haar is geen transportweg in je lichaam.",
              "dat kan niet, een tumor blijft altijd op één plek": "Bij een kwaadaardige tumor kan dat wel: dat heet uitzaaiing."
            }
          }
        ]
      },
      {
        "n": 2,
        "naam": "Zilver",
        "uitleg": [
          "Bij de huisarts hoor je soms: 'Het is een goedaardig gezwel, we halen het weg en klaar.' Dat klinkt rustiger, en dat klopt ook: een <b>goedaardige</b> tumor verstoort de werking van het weefsel niet. Hij kan wel in de weg zitten, maar is vaak makkelijk te verwijderen.",
          "Een <b>kwaadaardige</b> tumor (kanker) groeit snel en verstoort de bouw en werking van het orgaan. Cellen ervan kunnen in het bloed of de lymfe terechtkomen en elders verder groeien: <b>uitzaaiing</b>.",
          "Hoe begint het? Een mutatie in het allel dat de celdeling regelt. Mutagene invloeden zoals roken, uv-straling en asbest verhogen die kans. Dat is ook waarom insmeren bij felle zon slim is."
        ],
        "regel": "Goedaardig: verstoort de werking niet, vaak makkelijk weg. Kwaadaardig (kanker): groeit snel, verstoort het weefsel, kan uitzaaien via bloed of lymfe.",
        "voorbeelden": [
          {
            "en": "goedaardig bultje onder de huid",
            "nl": "Verstoort niets, kan in de weg zitten, vaak makkelijk weg te halen.",
            "let": "<b>let op</b>: is wel een tumor, maar geen kanker."
          },
          {
            "en": "longkanker en roken",
            "nl": "Roken is een mutagene invloed: meer kans op mutaties in het allel voor celdeling.",
            "let": "<b>let op</b>: meer kans, geen zekerheid."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Een arts vindt een bultje dat langzaam groeit en de werking van het weefsel niet verstoort. Wat is het?",
            "o": [
              "kanker",
              "een uitzaaiing",
              "een mutagene invloed",
              "een goedaardige tumor"
            ],
            "a": "een goedaardige tumor",
            "w": "Geen verstoring van de werking: goedaardig.",
            "meer": "Goedaardig = wel een tumor, geen kanker.",
            "fout": {
              "kanker": "Kanker is kwaadaardig: snel groeien en het weefsel verstoren. Dat doet dit bultje niet.",
              "een uitzaaiing": "Uitzaaiing hoort bij kwaadaardige tumoren, waarvan cellen elders opnieuw groeien.",
              "een mutagene invloed": "Een mutagene invloed komt van buitenaf, zoals roken. Een bultje is dat niet."
            }
          },
          {
            "t": "mc",
            "q": "Waarom verhoogt roken de kans op longkanker?",
            "o": [
              "Roken verhoogt de kans op mutaties.",
              "Roken verandert je geslachtschromosomen.",
              "Roken laat gezonde cellen sneller groeien.",
              "Rook bevat kankercellen die je inademt."
            ],
            "a": "Roken verhoogt de kans op mutaties.",
            "w": "Meer kans op mutaties betekent ook meer kans dat het allel voor celdeling gemuteerd raakt.",
            "meer": "Mutagene invloed → mutatie → ongeremd delen → tumor.",
            "fout": {
              "Roken laat gezonde cellen sneller groeien.": "Het probleem is niet sneller groeien van gezonde cellen, maar mutaties die de rem op celdeling kapotmaken.",
              "Rook bevat kankercellen die je inademt.": "Rook bevat geen kankercellen. Een tumor ontstaat uit je eigen cellen.",
              "Roken verandert je geslachtschromosomen.": "De geslachtschromosomen bepalen het geslacht. Roken verhoogt de kans op mutaties in je cellen."
            }
          },
          {
            "t": "mc",
            "q": "Iemand heeft kanker in de darm, en later vinden artsen ook kankercellen in de lever. Hoe heet dat?",
            "o": [
              "uitzaaiing",
              "een goedaardige tumor",
              "celdeling",
              "een mutatie"
            ],
            "a": "uitzaaiing",
            "w": "Kankercellen zijn via het bloed of de lymfe naar een ander orgaan gereisd: uitzaaiing.",
            "meer": "Uitzaaiing kan alleen bij een kwaadaardige tumor.",
            "fout": {
              "een mutatie": "Een mutatie is de verandering in het DNA aan het begin, niet het verplaatsen van cellen.",
              "een goedaardige tumor": "Goedaardige tumoren zaaien niet uit. Dit gaat om kanker die zich verspreidt.",
              "celdeling": "Celdeling is gewoon het delen van cellen. Het verplaatsen naar een ander orgaan heet uitzaaiing."
            }
          },
          {
            "t": "mc",
            "q": "Welke tumor is <b>kanker</b>?",
            "o": [
              "elke bult op je huid",
              "een gezwel dat makkelijk weg te halen is en niets verstoort",
              "een tumor die snel groeit en het orgaan verstoort",
              "een tumor die in de weg zit maar de werking niet verstoort"
            ],
            "a": "een tumor die snel groeit en het orgaan verstoort",
            "w": "Snel groeien en de werking verstoren: kwaadaardig, dus kanker.",
            "meer": "Kanker = kwaadaardige tumor.",
            "fout": {
              "een tumor die in de weg zit maar de werking niet verstoort": "Dat beschrijft een goedaardige tumor, en die is geen kanker.",
              "elke bult op je huid": "Niet elke bult is een tumor, en niet elke tumor is kanker.",
              "een gezwel dat makkelijk weg te halen is en niets verstoort": "Dat is een goedaardige tumor, geen kanker."
            }
          },
          {
            "t": "mc",
            "q": "Storm gaat zwemmen in de felle zomerzon. Waarom smeert ze zich in?",
            "o": [
              "Omdat uv-straling direct kanker is",
              "Om haar geslachtscellen te beschermen tegen de zon",
              "Om de kans op mutaties door uv-straling te verkleinen",
              "Om sneller bruin te worden"
            ],
            "a": "Om de kans op mutaties door uv-straling te verkleinen",
            "w": "Uv-straling is een mutagene invloed. Insmeren verkleint de kans op mutaties in je huidcellen.",
            "meer": "Een mutatie in het allel voor celdeling kan een tumor geven; minder uv is minder kans.",
            "fout": {
              "Omdat uv-straling direct kanker is": "Uv-straling is geen kanker; het verhoogt alleen de kans op mutaties.",
              "Om haar geslachtscellen te beschermen tegen de zon": "Uv-straling raakt vooral je huidcellen. Daarom smeer je je huid in.",
              "Om sneller bruin te worden": "Zonnebrand werkt juist tegen de straling; het gaat om bescherming."
            }
          },
          {
            "t": "mc",
            "q": "Waarom groeit een tumor steeds verder?",
            "o": [
              "Omdat de cellen water opnemen en opzwellen",
              "Omdat er steeds nieuwe virussen bij komen",
              "Omdat je te veel eet",
              "Omdat de cel zich ongeremd blijft delen"
            ],
            "a": "Omdat de cel zich ongeremd blijft delen",
            "w": "De rem op de celdeling is kapot, dus uit één cel worden er steeds meer.",
            "meer": "1 → 2 → 4 → 8 → ... zonder stoppen.",
            "fout": {
              "Omdat de cellen water opnemen en opzwellen": "Het woord gezwel klinkt zo, maar de groei komt door steeds nieuwe cellen.",
              "Omdat er steeds nieuwe virussen bij komen": "Een tumor bestaat uit je eigen cellen, niet uit virussen.",
              "Omdat je te veel eet": "Een tumor groeit door een gemuteerd allel voor celdeling, niet door eten."
            }
          },
          {
            "t": "gap",
            "q": "Een kwaadaardige tumor groeit snel en verstoort de bouw en ___ van het weefsel.",
            "a": "werking",
            "soepel": true,
            "w": "Kwaadaardig: de bouw en werking van het weefsel (orgaan) raken verstoord.",
            "meer": "Goedaardig verstoort de werking juist niet."
          },
          {
            "t": "mc",
            "q": "Kan een goedaardige tumor uitzaaien volgens je begrippenlijst?",
            "o": [
              "Ja, elke tumor zaait uit.",
              "Nee, uitzaaiing gaat over cellen van een kwaadaardige tumor.",
              "Nee, want een goedaardige tumor bestaat niet uit cellen.",
              "Ja, maar alleen via de lucht."
            ],
            "a": "Nee, uitzaaiing gaat over cellen van een kwaadaardige tumor.",
            "w": "In de definitie van uitzaaiing staat: cellen van een kwaadaardige tumor.",
            "meer": "Goedaardig = blijft op zijn plek en verstoort de werking niet.",
            "fout": {
              "Ja, elke tumor zaait uit.": "Uitzaaiing hoort bij kwaadaardige tumoren, niet bij elke tumor.",
              "Ja, maar alleen via de lucht.": "Uitzaaiing gaat via bloed of lymfe, nooit via de lucht. En het hoort bij kwaadaardige tumoren.",
              "Nee, want een goedaardige tumor bestaat niet uit cellen.": "Elke tumor bestaat uit cellen. Het verschil is dat goedaardige tumoren niet uitzaaien."
            }
          },
          {
            "t": "open",
            "q": "Leg in stappen uit hoe een tumor ontstaat, beginnend bij een mutagene invloed.",
            "punten": 2,
            "modelantwoord": "Een mutagene invloed (bv. roken of uv) verhoogt de kans op een mutatie. Als het allel dat de celdeling regelt gemuteerd raakt, gaat de cel zich ongeremd delen. Zo ontstaat een tumor (gezwel).",
            "sleutelwoorden": [
              {
                "moet": [
                  "mutatie",
                  "gemuteerd",
                  "muteer"
                ],
                "syn": [
                  "veranderd"
                ]
              },
              {
                "moet": [
                  "ongeremd",
                  "blijft delen",
                  "stopt niet"
                ],
                "syn": [
                  "te veel delen",
                  "maar door"
                ]
              }
            ],
            "rubric": [
              "Noemt een mutatie in het allel/gen dat de celdeling regelt",
              "Noemt dat de cel zich ongeremd gaat delen"
            ],
            "w": "Mutagene invloed → mutatie in allel voor celdeling → ongeremd delen → tumor.",
            "meer": "Elke stap is een kans, geen zekerheid."
          }
        ]
      },
      {
        "n": 3,
        "naam": "Goud",
        "uitleg": [
          "Zet goedaardig en kwaadaardig naast elkaar. Beide zijn een <b>tumor</b>: cellen die ongeremd delen door een gemuteerd allel. Het verschil zit in wat ze doen. <b>Goedaardig</b>: verstoort de werking van het weefsel niet, kan in de weg zitten, vaak makkelijk weg te halen. <b>Kwaadaardig</b>: groeit snel, verstoort de bouw en werking van het orgaan, en kan <b>uitzaaien</b> via bloed of lymfe.",
          "Dus: <b>elke kanker is een tumor, maar niet elke tumor is kanker.</b> Net zoals elke keeper een voetballer is, maar niet elke voetballer een keeper.",
          "En let op het verband met mutaties: een tumor begint met een mutatie in een <b>lichaamscel</b>. Daarom is een tumor iets van jouw lichaam, niet iets dat je via je eicellen of zaadcellen doorgeeft."
        ],
        "regel": "Tumor = ongeremd delende cel; goedaardig verstoort niet, kwaadaardig (kanker) groeit snel, verstoort en kan uitzaaien. Elke kanker is een tumor, niet elke tumor is kanker.",
        "voorbeelden": [
          {
            "en": "keeper ⊂ voetballer · kanker ⊂ tumor",
            "nl": "Kanker is een soort tumor, de kwaadaardige soort.",
            "let": "<b>let op</b>: tumor betekent niet automatisch kanker."
          },
          {
            "en": "goedaardig: in de weg · kwaadaardig: verstoort",
            "nl": "Het verschil zit in de werking van het weefsel.",
            "let": "<b>let op</b>: ook een goedaardige tumor bestaat uit ongeremd delende cellen."
          }
        ],
        "vragen": [
          {
            "t": "mc",
            "q": "Welke uitspraak klopt?",
            "o": [
              "Niet elke tumor is kanker.",
              "Een tumor is nooit gevaarlijk.",
              "Elke tumor is kanker.",
              "Kanker en tumor zijn precies hetzelfde."
            ],
            "a": "Niet elke tumor is kanker.",
            "w": "Kanker is een kwaadaardige tumor. Goedaardige tumoren zijn geen kanker.",
            "meer": "Zoals: elke keeper is een voetballer, maar niet elke voetballer is keeper.",
            "fout": {
              "Elke tumor is kanker.": "Een goedaardige tumor is geen kanker: hij verstoort de werking van het weefsel niet.",
              "Kanker en tumor zijn precies hetzelfde.": "Tumor en gezwel zijn hetzelfde. Kanker is alleen de kwaadaardige soort.",
              "Een tumor is nooit gevaarlijk.": "Een kwaadaardige tumor (kanker) is wel gevaarlijk: hij verstoort het weefsel."
            }
          },
          {
            "t": "mc",
            "q": "Wat hebben een goedaardige en een kwaadaardige tumor <b>gemeen</b>?",
            "o": [
              "Ze verstoren allebei de werking van het orgaan.",
              "Ze zaaien allebei uit.",
              "Ze bestaan allebei uit cellen die ongeremd delen.",
              "Ze zijn allebei kanker."
            ],
            "a": "Ze bestaan allebei uit cellen die ongeremd delen.",
            "w": "Elke tumor is een cel die ongeremd deelt door een gemuteerd allel voor celdeling.",
            "meer": "Het verschil zit in snelheid, verstoring en uitzaaiing.",
            "fout": {
              "Ze zaaien allebei uit.": "Uitzaaiing hoort bij kwaadaardige tumoren, niet bij goedaardige.",
              "Ze verstoren allebei de werking van het orgaan.": "Een goedaardige tumor verstoort de werking juist niet.",
              "Ze zijn allebei kanker.": "Alleen de kwaadaardige is kanker."
            }
          },
          {
            "t": "mc",
            "q": "Wat is het belangrijkste <b>verschil</b> tussen goedaardig en kwaadaardig?",
            "o": [
              "Kwaadaardig ontstaat in geslachtscellen, goedaardig in lichaamscellen.",
              "Goedaardig ontstaat zonder mutatie; kwaadaardig met.",
              "Goedaardig zit in planten, kwaadaardig in mensen.",
              "Kwaadaardig verstoort het weefsel, goedaardig niet."
            ],
            "a": "Kwaadaardig verstoort het weefsel, goedaardig niet.",
            "w": "Het verschil zit in hoe snel hij groeit en of hij het weefsel verstoort.",
            "meer": "Allebei: ongeremd delen. Alleen kwaadaardig: verstoren en uitzaaien.",
            "fout": {
              "Goedaardig ontstaat zonder mutatie; kwaadaardig met.": "Elke tumor ontstaat door een gemuteerd allel voor celdeling, ook een goedaardige.",
              "Goedaardig zit in planten, kwaadaardig in mensen.": "Beide soorten kunnen bij mensen voorkomen. Het verschil zit in wat ze met het weefsel doen.",
              "Kwaadaardig ontstaat in geslachtscellen, goedaardig in lichaamscellen.": "Allebei ontstaan in lichaamscellen. Het verschil is snelheid en verstoring."
            }
          },
          {
            "t": "mc",
            "q": "Een tumor in de long groeit snel en de long werkt minder goed. Later zijn er ook tumorcellen in de botten. Welke combinatie klopt?",
            "o": [
              "kwaadaardig, met uitzaaiing",
              "goedaardig, met uitzaaiing",
              "geen tumor, alleen een mutatie",
              "goedaardig, geen uitzaaiing"
            ],
            "a": "kwaadaardig, met uitzaaiing",
            "w": "Snel groeien en de werking verstoren is kwaadaardig; cellen elders is uitzaaiing.",
            "meer": "Kwaadaardig = kanker, en alleen kanker zaait uit.",
            "fout": {
              "goedaardig, geen uitzaaiing": "De long werkt minder goed en er zijn cellen elders: dat past niet bij goedaardig.",
              "goedaardig, met uitzaaiing": "Uitzaaiing gaat over cellen van een kwaadaardige tumor.",
              "geen tumor, alleen een mutatie": "Er groeien cellen ongeremd: dat is wel een tumor."
            }
          },
          {
            "t": "mc",
            "q": "Iemand heeft een tumor in de huid. Wordt die tumor doorgegeven aan zijn kinderen?",
            "o": [
              "Ja, maar alleen aan zonen.",
              "Nee, het zit in lichaamscellen.",
              "Ja, via uitzaaiing naar het kind.",
              "Ja, alle tumoren zijn erfelijk."
            ],
            "a": "Nee, het zit in lichaamscellen.",
            "w": "Alleen wat in een geslachtscel zit, kan naar een kind. Een huidtumor zit in lichaamscellen.",
            "meer": "Uitzaaiing gaat binnen het eigen lichaam, via bloed of lymfe.",
            "fout": {
              "Ja, alle tumoren zijn erfelijk.": "Een tumor ontstaat in lichaamscellen. Die doen niet mee bij de bevruchting.",
              "Ja, maar alleen aan zonen.": "Zonen erven niet alleen van hun vader. En een huidcel geeft niets door.",
              "Ja, via uitzaaiing naar het kind.": "Uitzaaiing gaat binnen het eigen lichaam, naar andere organen, niet naar een kind."
            }
          },
          {
            "t": "mc",
            "q": "Waarom is een goedaardige tumor meestal minder ernstig dan een kwaadaardige?",
            "o": [
              "Omdat hij de werking niet verstoort",
              "Omdat hij niet uit cellen bestaat",
              "Omdat hij niet door een mutatie ontstaat",
              "Omdat hij vanzelf verdwijnt"
            ],
            "a": "Omdat hij de werking niet verstoort",
            "w": "Goedaardig: geen verstoring van de werking, vaak makkelijk te verwijderen.",
            "meer": "Hij kan wel in de weg zitten, daarom haalt de arts hem soms toch weg.",
            "fout": {
              "Omdat hij niet uit cellen bestaat": "Elke tumor bestaat uit cellen die ongeremd delen.",
              "Omdat hij vanzelf verdwijnt": "Een tumor verdwijnt niet vanzelf; vaak wordt hij weggehaald.",
              "Omdat hij niet door een mutatie ontstaat": "Ook een goedaardige tumor ontstaat door een gemuteerd allel voor celdeling."
            }
          },
          {
            "t": "gap",
            "q": "Als cellen van een kwaadaardige tumor via het bloed of de lymfe in andere lichaamsdelen terechtkomen, heet dat ___.",
            "a": "uitzaaiing|uitzaaiingen|uitzaaien",
            "soepel": true,
            "w": "Dat is uitzaaiing: kankercellen verstoren dan ook elders weefsel.",
            "meer": "Alleen kwaadaardige tumoren zaaien uit."
          },
          {
            "t": "mc",
            "q": "Waarin verschilt een tumorcel van een huidcel die een wondje dichtmaakt?",
            "o": [
              "De tumorcel heeft geen DNA.",
              "De huidcel deelt niet, de tumorcel wel.",
              "Alleen de huidcel stopt op tijd.",
              "Er is geen verschil."
            ],
            "a": "Alleen de huidcel stopt op tijd.",
            "w": "Beide delen, maar de gezonde cel stopt als het genoeg is. De tumorcel deelt ongeremd.",
            "meer": "Het gaat niet om óf een cel deelt, maar of hij kan stoppen.",
            "fout": {
              "De huidcel deelt niet, de tumorcel wel.": "De huidcel deelt wel, anders zou het wondje niet dichtgaan. Hij stopt alleen op tijd.",
              "De tumorcel heeft geen DNA.": "Een tumorcel heeft wel DNA; alleen het allel voor celdeling is gemuteerd.",
              "Er is geen verschil.": "Het verschil is de rem: de tumorcel stopt niet meer."
            }
          },
          {
            "t": "open",
            "q": "Een klasgenoot zegt: 'Mijn oom heeft een tumor, dus hij heeft kanker.' Leg uit waarom dat niet per se klopt.",
            "punten": 2,
            "modelantwoord": "Een tumor kan goedaardig of kwaadaardig zijn. Alleen een kwaadaardige tumor, die snel groeit en de bouw en werking van het weefsel verstoort, heet kanker. Een goedaardige tumor verstoort de werking niet en is geen kanker.",
            "sleutelwoorden": [
              {
                "moet": [
                  "goedaardig"
                ],
                "syn": [
                  "goed aardig"
                ]
              },
              {
                "moet": [
                  "kwaadaardig",
                  "verstoor",
                  "verstoort"
                ],
                "syn": [
                  "kwaad aardig"
                ]
              }
            ],
            "rubric": [
              "Noemt dat er goedaardige en kwaadaardige tumoren zijn",
              "Noemt dat alleen een kwaadaardige tumor (die het weefsel verstoort) kanker is"
            ],
            "w": "Tumor is de grote groep, kanker is alleen de kwaadaardige soort.",
            "meer": "Niet elke voetballer is keeper; niet elke tumor is kanker."
          }
        ]
      }
    ]
  }
];

/* ============================ BEGRIPPEN (flashcards, [omschrijving, begrip, [ook goed]]) ============================
   Omschrijving = de vette definitie uit de begrippenlijst, letterlijk. Staat het begrip zelf in de
   definitie, dan is het vervangen door "…" (anders verklapt de kaart het antwoord). Begrippen zonder
   vet stuk (niveaus, kringlopen, chromosomenparen, varianten van een gen, variatie in genotype,
   basenpaar) hebben een korte omschrijving uit de niet-vette uitleg. 41 (T6) + 28 (T5) = 69. */
window.BEGRIPPEN = {
  "t6-bs1": {
    emoji: "🔭",
    titel: "T6 · Basisstof 1: Organismen en hun omgeving",
    items: [
      ["De leefomgeving van een organisme", "milieu"],
      ["Wetenschap binnen de biologie die de relaties tussen organismen en hun milieu (omgeving) onderzoekt", "ecologie"],
      ["Invloeden op een organisme van de levende natuur", "biotische factoren", ["biotische factor", "biotisch"]],
      ["Invloeden op een organisme van de levenloze natuur", "abiotische factoren", ["abiotische factor", "abiotisch"]],
      ["De stapjes waarop je in de ecologie kijkt: van één organisme steeds een stapje verder in zijn milieu (individu, populatie, levensgemeenschap, ecosysteem, biosfeer)", "niveaus", ["niveau", "ecologische niveaus"]],
      ["Eén organisme, oftewel één levend wezen", "individu"],
      ["Een groep organismen van dezelfde soort die in één gebied samenleven", "populatie"],
      ["Meerdere populaties van verschillende soorten die samenleven in één bepaald gebied", "levensgemeenschap"],
      ["Alle abiotische factoren samen in één bepaald gebied", "biotoop"],
      ["In één gebied vormen de levensgemeenschap en de biotoop samen een eenheid", "ecosysteem"],
      ["Alle ecosystemen op de wereld samen: het deel op, in of rond de aarde waar leven mogelijk is", "biosfeer"],
      ["Een reeks soorten waarbij elke soort een voedselbron is voor de volgende soort", "voedselketen"],
      ["Elke voedselbron in een voedselketen noem je een …", "schakel", ["schakels"]],
      ["Het geheel van voedselrelaties in een ecosysteem", "voedselweb", ["voedselnet"]],
      ["De totale hoeveelheid energierijke stoffen van een organisme of van een groep organismen", "biomassa"],
      ["Stoffen die schadelijk zijn voor organismen", "giftig", ["giftige stoffen", "gif", "gifstoffen"]],
      ["De ophoping van (giftige) stoffen in dieren die aan het einde van een voedselketen staan", "accumulatie"]
    ]
  },
  "t6-bs2": {
    emoji: "🐛",
    titel: "T6 · Basisstof 2: Voedselrelaties en kringlopen",
    items: [
      ["Planten zijn … omdat zij door middel van fotosynthese voedsel (= energierijke stoffen) kunnen maken (= produceren) voor alle andere organismen", "producenten", ["producent"]],
      ["Dieren eten (= consumeren) de energierijke stoffen van planten. Daarom noemen ze dieren \"…\"", "consumenten", ["consument"]],
      ["De eerste consumenten in een voedselketen; de consumenten die de planten eten", "consumenten van de eerste orde", ["consument van de eerste orde", "consumenten van de 1e orde", "consument van de 1e orde", "eerste orde", "1e orde"]],
      ["Dieren die de consumenten van de eerste orde eten", "consumenten van de tweede orde", ["consument van de tweede orde", "consumenten van de 2e orde", "consument van de 2e orde", "tweede orde", "2e orde"]],
      ["Dieren die dode resten van planten en dieren eten", "afvaleters", ["afvaleter"]],
      ["Bacteriën en schimmels die de uitwerpselen en andere resten van de afvaleters nóg verder afbreken, reduceren (= minder maken)", "reducenten", ["reducent"]],
      ["Een stof (bv. water of koolstof) wordt steeds via organismen doorgegeven, komt via afvaleters en reducenten weer in de aarde en dan weer via planten in dieren: rondje na rondje", "kringloop", ["kringloop van stoffen", "kringlopen"]],
      ["Water uit zeeën en oceanen verdampt, wordt hoog in de lucht wolken, regent terug op aarde en in zee, en dan begint het opnieuw", "kringloop van water", ["waterkringloop"]],
      ["Koolstofdioxide uit de lucht wordt bij fotosynthese energierijke stof in planten, gaat via eten naar dieren, en komt bij verbranding weer als koolstofdioxide in de lucht", "kringloop van koolstof", ["koolstofkringloop"]],
      ["Iets is … als het afgebroken kan worden door reducenten. Reducenten kunnen plantaardig of dierlijk materiaal (= dood materiaal) afbreken", "biologisch afbreekbaar"],
      ["Iets is … als het bestaat uit levenloze materialen (plastic, glas, metaal) en kan dus niet door reducenten afgebroken worden", "niet-biologisch afbreekbaar", ["niet-biologisch afbreekbaar afval", "niet biologisch afbreekbaar", "niet biologisch afbreekbaar afval"]],
      ["Drijvende eilanden van plasticafval in oceanen", "plasticsoep"]
    ]
  },
  "t6-bs3": {
    emoji: "🦊",
    titel: "T6 · Basisstof 3: Samenleven",
    items: [
      ["Het aantal organismen van dezelfde soort die in één bepaald gebied samenleven", "populatiegrootte"],
      ["Toestand van een ecosysteem, waarbij de grootte van de populaties van soorten schommelen om een bepaalde waarde", "biologisch evenwicht"],
      ["Een relatie tussen soorten die gericht is op competitie (wedijver)", "concurrentie"],
      ["Wanneer de individuen binnen een populatie hun vaardigheden bundelen om een gemeenschappelijk doel te bereiken", "samenwerking"],
      ["Een … bij dieren betekent dat dieren hun plaats weten in de groep: één dier is de baas, daar luistert de rest naar", "rangorde"],
      ["Een leefgebied dat verdedigd wordt tegen anderen, meestal soortgenoten", "territorium"],
      ["Het vormen van een paar (man en vrouw) om voor nakomelingen te zorgen", "paarvorming"],
      ["Een langdurige samenlevingsvorm tussen twee verschillende soorten individuen", "symbiose"],
      ["Een samenlevingsvorm waarbij beide soorten voordeel hebben van het samenleven", "mutualisme"],
      ["Een samenlevingsvorm waarbij één soort voordeel heeft en de andere soort géén nadeel (ook geen voordeel) heeft van het samenleven", "commensalisme"],
      ["Een samenlevingsvorm waarbij één soort voordeel heeft en de andere soort wel nadeel (en geen voordeel) heeft van het samenleven", "parasitisme"],
      ["Bij parasitisme noem je de soort die voordeel heeft de … en de soort die nadeel heeft noem je … (twee woorden)", "parasiet en gastheer", ["parasiet & gastheer", "parasiet, gastheer", "parasiet gastheer"]]
    ]
  },
  "t5-bs1": {
    emoji: "🧬",
    titel: "T5 · Basisstof 1: Genotype en fenotype",
    items: [
      ["Cel die onderdeel is van het lichaam van een organisme (en dus géén geslachtscel is)", "lichaamscellen", ["lichaamscel"]],
      ["Een lange dunne draad in de celkern die bestaat uit de stof DNA en bevat erfelijke informatie van een organisme", "chromosoom", ["chromosomen"]],
      ["De stof waar chromosomen uit bestaan; hierin is de informatie opgeslagen voor erfelijke eigenschappen", "DNA"],
      ["Bij … ontstaan uit één lichaamscel, twee dezelfde nieuwe cellen", "celdeling"],
      ["De twee cellen die ontstaan uit de celdeling van één lichaamscel, noem je …", "dochtercellen", ["dochtercel"]],
      ["De stukjes DNA (een stukje van een chromosoom dus) die samen de informatie bevatten voor één eigenschap van een organisme", "gen", ["genen"]],
      ["Alle informatie voor je erfelijke eigenschappen samen", "genotype"],
      ["Alle eigenschappen van een organisme (ook de niet-erfelijke)", "fenotype"]
    ]
  },
  "t5-bs2": {
    emoji: "👫",
    titel: "T5 · Basisstof 2: Chromosomen",
    items: [
      ["In lichaamscellen liggen de chromosomen altijd per twee (dus een even aantal); in geslachtscellen liggen ze los, één van elk paar", "chromosomenparen en enkelvoudige chromosomen", ["chromosomenparen", "chromosomenpaar", "chromosomenparen & enkelvoudige chromosomen", "paren en enkelvoudig"]],
      ["De chromosomen van een organisme die het geslacht bepalen van dat organisme", "geslachtschromosomen", ["geslachtschromosoom"]],
      ["Op de twee chromosomen van een paar kan de informatie voor dezelfde eigenschap verschillen (bv. blauwe ogen op het ene, bruine op het andere)", "varianten van een gen", ["variant van een gen", "genvarianten", "genvariant"]],
      ["Bij dieren: eicellen (vrouw) en zaadcellen (man); bij planten: eicellen en stuifmeelkorrels", "geslachtscellen", ["geslachtscel"]],
      ["Dit is een speciale celdeling waarbij de chromosomenparen verdeeld worden over de twee dochtercellen", "meiose"],
      ["Bij geslachtelijke voortplanting krijgen alle nakomelingen een verschillend genotype (behalve eeneiige tweelingen)", "variatie in genotype", ["variatie in genotypen", "variatie in genotypes"]]
    ]
  },
  "t5-bs3": {
    emoji: "🔤",
    titel: "T5 · Basisstof 3: Genen en allelen",
    items: [
      ["De stof DNA is opgebouwd uit de … A, T, C en G", "basen", ["base"]],
      ["In een chromosoom zitten A en T altijd aan elkaar gekoppeld, en C en G ook. Zo'n tweetal heet een …", "basenpaar", ["basenparen"]],
      ["Stoffen in je lichaam die de kleur, vorm en werking van je lichaam regelen", "eiwitten", ["eiwit"]],
      ["De informatie in een gen (ook wel genvariant genoemd)", "allel", ["allelen", "genvariant"]],
      ["De twee allelen van een gen", "allelenpaar"],
      ["Een plotselinge verandering van het genotype", "mutatie"],
      ["Als een allel veranderd is (één of meer basen)", "gemuteerd"],
      ["Een organisme waarbij de mutatie zichtbaar is in het fenotype", "mutant"],
      ["Een organisme met albinisme kan geen melanine (pigment, kleurstof) aanmaken voor haren, ogen en huid", "albino"],
      ["Invloeden van buitenaf die een verhoogde kans geven op beschadiging van je cellen, dus op één of meerdere mutaties in die cellen", "mutagene invloeden", ["mutagene invloed"]],
      ["Een cel die zich ongeremd gaat delen omdat het allel (het gen) dat de celdeling regelt gemuteerd is. Een ander woord is gezwel", "tumor", ["tumoren"]],
      ["Dit is een tumor die snel groeit en de bouw en werking van het weefsel (het orgaan) verstoort", "kwaadaardig", ["kwaadaardige tumor"]],
      ["Een kwaadaardige tumor", "kanker"],
      ["Als cellen van een kwaadaardige tumor terecht zijn gekomen in het bloed of lymfe en zo in andere lichaamsdelen terecht zijn gekomen", "uitzaaiing", ["uitzaaiingen"]]
    ]
  }
};

/* ============================ MIXVRAGEN (proeftoets: verwarbare paren over de onderwerpen heen) ============================ */
window.MIXVRAGEN = [
  { t: "mc", q: "Welk paar hoort bij elkaar?<br>\"Alles wat levenloos is in één gebied\" is de …, en \"alles wat leeft én levenloos is in dat gebied\" is het …",
    o: ["biotoop / ecosysteem", "ecosysteem / biotoop", "levensgemeenschap / biotoop", "biotoop / biosfeer"], a: "biotoop / ecosysteem",
    w: "Biotoop = alle abiotische factoren in één gebied. Ecosysteem = levensgemeenschap + biotoop.",
    meer: "Truc: in bio-<b>toop</b> zit geen leven; in eco-<b>systeem</b> zit alles samen in één systeem.",
    fout: { "ecosysteem / biotoop": "Precies andersom: het ecosysteem is het grote geheel (levend én levenloos), de biotoop alleen het levenloze deel.",
            "levensgemeenschap / biotoop": "De levensgemeenschap is juist het lévende deel (alle populaties samen), niet het levenloze.",
            "biotoop / biosfeer": "De biosfeer is álle ecosystemen van de aarde samen, niet één gebied." } },
  { t: "mc", q: "Bij welke deling ontstaan twee cellen met <b>precies dezelfde</b> chromosomen als de moedercel?",
    o: ["gewone celdeling", "meiose", "allebei de delingen", "geen van beide"], a: "gewone celdeling",
    w: "Bij celdeling worden eerst alle chromosomen gekopieerd: de twee dochtercellen zijn gelijk.",
    meer: "Meiose is de speciale deling voor geslachtscellen: de paren worden verdeeld, dus elke cel krijgt de helft.",
    fout: { "meiose": "Bij meiose worden de chromosomenparen juist verdeeld: elke geslachtscel krijgt maar de helft.",
            "allebei de delingen": "Alleen bij gewone celdeling zijn de dochtercellen gelijk; bij meiose krijgen ze de helft.",
            "geen van beide": "Gewone celdeling geeft wél twee identieke cellen: daarom worden de chromosomen eerst gekopieerd." } },
  { t: "mc", q: "Een korstmos is een schimmel en een alg die samenleven; ze hebben er <b>allebei</b> voordeel van. Welke vorm van symbiose is dat?",
    o: ["mutualisme", "commensalisme", "parasitisme", "concurrentie"], a: "mutualisme",
    w: "Beide soorten voordeel = mutualisme.",
    meer: "Mutualisme: <b>m</b>ooi voor allebei. Commensalisme: één voordeel, de ander merkt niks. Parasitisme: één voordeel, de ander nadeel.",
    fout: { "commensalisme": "Bij commensalisme heeft maar één soort voordeel; de ander heeft er geen voordeel én geen nadeel van.",
            "parasitisme": "Bij parasitisme heeft de ene soort voordeel en de andere nadeel. Hier hebben ze allebei voordeel.",
            "concurrentie": "Concurrentie is wedijveren om hetzelfde voedsel of gebied, geen samenleven waar je allebei beter van wordt." } },
  { t: "mc", q: "Je hebt van de oogkleur twee keer informatie: op het ene chromosoom \"blauw\", op het andere \"bruin\". Hoe heten \"blauw\" en \"bruin\" hier?",
    o: ["twee allelen van hetzelfde gen", "twee verschillende genen", "twee genotypes, één van elke ouder", "twee mutaties van het oogkleurgen"], a: "twee allelen van hetzelfde gen",
    w: "Het gen gaat over één eigenschap (oogkleur); de informatie die erin staat (blauw of bruin) is het allel.",
    meer: "Gen = het onderwerp (oogkleur). Allel = wat er over dat onderwerp staat (blauw, bruin). Samen vormen ze een allelenpaar.",
    fout: { "twee verschillende genen": "Het is één gen (oogkleur) dat op beide chromosomen van het paar ligt. Alleen de informatie verschilt: dat zijn de allelen.",
            "twee genotypes, één van elke ouder": "Je genotype is ál je erfelijke informatie samen. Je hebt er maar één.",
            "twee mutaties van het oogkleurgen": "Een mutatie is een plotselinge verandering van het genotype. Blauw en bruin zijn gewoon normale varianten." } },
  { t: "mc", q: "Storm heeft een litteken op haar knie van een sliding. Hoort dat litteken bij haar genotype, haar fenotype of allebei?",
    o: ["alleen fenotype", "alleen genotype", "allebei", "geen van beide"], a: "alleen fenotype",
    w: "Fenotype = álle eigenschappen, ook de niet-erfelijke. Een litteken staat niet in je DNA.",
    meer: "Recept en cake: het genotype is het recept, het fenotype is de cake. Een deuk in de cake staat niet in het recept.",
    fout: { "alleen genotype": "Het genotype is wat in je DNA staat. Een litteken krijg je door een val, dat staat nergens in je DNA.",
            "allebei": "Het litteken is wel een eigenschap (fenotype), maar niet erfelijk, dus niet in je genotype.",
            "geen van beide": "Het is wél een eigenschap van Storm, en alle eigenschappen samen zijn het fenotype." } },
  { t: "mc", q: "Een rups eet een blad, een koolmees eet de rups en een sperwer eet de koolmees. Wie is de consument van de <b>tweede</b> orde?",
    o: ["koolmees", "rups", "sperwer", "blad"], a: "koolmees",
    w: "Blad = producent, rups = 1e orde (eet de plant), koolmees = 2e orde (eet de 1e orde).",
    meer: "Tel de consumenten, niet de schakels: de plant telt niet mee als consument.",
    fout: { "rups": "De rups eet de plant: dat is de consument van de eerste orde.",
            "sperwer": "De sperwer eet de koolmees (2e orde), dus de sperwer is de derde orde.",
            "blad": "Het blad is de producent: planten maken zelf voedsel met fotosynthese en zijn geen consument." } },
  { t: "mc", q: "Een dode merel in het bos. Eerst knagen kevers en wormen eraan, daarna breken bacteriën en schimmels de resten verder af. Wie zijn de <b>reducenten</b>?",
    o: ["de bacteriën en schimmels", "de kevers en wormen", "allemaal", "niemand, een dood dier is afval"], a: "de bacteriën en schimmels",
    w: "Reducenten zijn bacteriën en schimmels die de resten van de afvaleters nog verder afbreken.",
    meer: "Eerst de afvaleters (dieren die dode resten eten), daarna de reducenten (bacteriën en schimmels). Zo komen de stoffen terug in de bodem voor planten.",
    fout: { "de kevers en wormen": "Kevers en wormen zijn dieren die dode resten eten: dat zijn afvaleters.",
            "allemaal": "Er zijn twee groepen: afvaleters (dieren) en reducenten (bacteriën en schimmels).",
            "niemand, een dood dier is afval": "Een dood dier wordt juist opgeruimd en wordt weer voedingsstof voor planten: dat is nuttig werk." } },
  { t: "mc", q: "Welke tumor noem je kanker?",
    o: ["een kwaadaardige tumor", "elke tumor", "een goedaardige tumor", "alleen een tumor die uitgezaaid is"], a: "een kwaadaardige tumor",
    w: "Kanker = een kwaadaardige tumor: hij groeit snel en verstoort de bouw en werking van het weefsel.",
    meer: "Niet elke tumor is kanker. Een goedaardige tumor verstoort de werking niet en is vaak makkelijk weg te halen.",
    fout: { "elke tumor": "Er zijn ook goedaardige tumoren; die zijn geen kanker.",
            "een goedaardige tumor": "Een goedaardige tumor verstoort de werking van het weefsel niet: dat is juist geen kanker.",
            "alleen een tumor die uitgezaaid is": "Een kwaadaardige tumor is al kanker, ook als hij (nog) niet is uitgezaaid." } },
  { t: "mc", q: "In een sloot leven 40 snoeken. Op welk niveau kijk je als je het over \"de 40 snoeken\" hebt?",
    o: ["populatie", "individu", "levensgemeenschap", "ecosysteem"], a: "populatie",
    w: "Een groep organismen van dezelfde soort in één gebied = een populatie.",
    meer: "Eén snoek = individu. Alle snoeken = populatie. Snoeken + baarzen + watervlooien + algen = levensgemeenschap.",
    fout: { "individu": "Een individu is één organisme. Dit zijn er 40.",
            "levensgemeenschap": "Een levensgemeenschap bestaat uit meerdere soorten. Hier gaat het alleen om snoeken.",
            "ecosysteem": "In een ecosysteem tel je ook de andere soorten én de levenloze factoren mee." } },
  { t: "mc", q: "Iemand verbrandt in de zomer flink op het strand. Waarom is dat ook voor later niet slim?",
    o: ["uv is een mutagene invloed: meer kans op mutaties", "zonlicht verandert je genotype in al je cellen tegelijk", "je kinderen krijgen daardoor later een donkerdere huid", "uv-straling maakt de chromosomen in je huidcellen korter"], a: "uv is een mutagene invloed: meer kans op mutaties",
    w: "uv-straling geeft een verhoogde kans op beschadiging van cellen, dus op mutaties. Daarom insmeren.",
    meer: "Een mutatie in een huidcel blijft in die huid; je geeft hem niet door aan je kinderen. Maar zo'n mutatie kan wel de celdeling ontregelen (tumor).",
    fout: { "zonlicht verandert je genotype in al je cellen tegelijk": "Uv raakt alleen de cellen waar het op schijnt (je huid), niet al je cellen.",
            "je kinderen krijgen daardoor later een donkerdere huid": "Bruin worden is fenotype en wordt niet doorgegeven. Een mutatie in een huidcel ook niet.",
            "uv-straling maakt de chromosomen in je huidcellen korter": "Uv kan basen in het DNA beschadigen (een mutatie), maar maakt chromosomen niet korter." } },
  { t: "mc", q: "Konijnen en hazen eten in hetzelfde weiland hetzelfde gras. Wat voor relatie is dat?",
    o: ["concurrentie", "samenwerking", "mutualisme", "parasitisme"], a: "concurrentie",
    w: "Twee soorten die hetzelfde voedsel willen, zijn elkaars concurrenten.",
    meer: "Concurrentie: wedijveren om voedsel of ruimte. Samenwerking: binnen één populatie samen een doel halen.",
    fout: { "samenwerking": "Samenwerking is binnen één populatie, met een gemeenschappelijk doel. Deze twee soorten zitten elkaar juist in de weg.",
            "mutualisme": "Bij mutualisme hebben beide soorten voordeel van elkaar. Hier pakken ze elkaars voedsel af.",
            "parasitisme": "Een parasiet leeft op of in een gastheer. Konijn en haas leven niet op elkaar." } },
  { t: "mc", q: "Een aardappelplant maakt knollen, en uit elke knol groeit een nieuwe plant. Hoe zit het met hun genotype?",
    o: ["precies gelijk aan de moederplant", "elke nieuwe plant is anders dan de moederplant", "de helft is gelijk aan de moederplant", "dat is bij elke knol weer toeval"], a: "precies gelijk aan de moederplant",
    w: "Knollen zijn ongeslachtelijke voortplanting: de nieuwe planten ontstaan door gewone celdeling, dus hetzelfde genotype.",
    meer: "Variatie in genotype krijg je alleen bij geslachtelijke voortplanting (eicel + zaadcel of stuifmeelkorrel).",
    fout: { "elke nieuwe plant is anders dan de moederplant": "Dat geldt voor geslachtelijke voortplanting. Bij knollen komt er geen geslachtscel aan te pas.",
            "de helft is gelijk aan de moederplant": "\"De helft van elk\" hoort bij geslachtelijke voortplanting (helft van vader, helft van moeder). Hier is er maar één ouder.",
            "dat is bij elke knol weer toeval": "Toeval speelt bij meiose (welk chromosoom van een paar). Bij knollen is er geen meiose, alleen gewone celdeling." } },
  { t: "mc", q: "Welke base hoort in een basenpaar altijd tegenover <b>C</b>?",
    o: ["G", "A", "T", "C"], a: "G",
    w: "C en G horen altijd bij elkaar; A en T ook.",
    meer: "Keepers-truc: A-T = Aanval-Tegenaanval, C-G = Corner-Goal.",
    fout: { "A": "A hoort altijd bij T, niet bij C.", "T": "T hoort altijd bij A, niet bij C.", "C": "Een base koppelt niet aan zichzelf: C hoort bij G." } },
  { t: "mc", q: "Een sloot ligt naast een akker waar gif tegen insecten is gespoten. Bij welk dier vind je straks de <b>meeste</b> gif per kilo?",
    o: ["de reiger die vissen eet", "de algen in de sloot", "de watervlooien", "evenveel bij alle dieren"], a: "de reiger die vissen eet",
    w: "Accumulatie: het gif hoopt zich op in de dieren aan het einde van de voedselketen.",
    meer: "Elk dier eet heel veel van de schakel ervoor en raakt het gif niet kwijt. Bovenaan de keten stapelt het zich dus het hoogst op.",
    fout: { "de algen in de sloot": "Algen nemen het gif als eerste op, maar daarna wordt het bij elke schakel meer per dier.",
            "de watervlooien": "Watervlooien zitten vooraan in de keten. Wie bovenaan staat, eet veel watervlo-eters en verzamelt hun gif.",
            "evenveel bij alle dieren": "Juist niet: het gif stapelt zich op naar het einde van de keten. Dat heet accumulatie." } }
];

/* ============================ AANMOEDIGING (door de engine gebruikt bij feedback) ============================ */
window.AANMOEDIGING = {
  goed: ["Goed zo, Storm! 🌟", "Gehouden! 🧤", "Top, helemaal goed!", "Knap gedaan! 🐸", "Yes, die zit! ⭐", "Lekker bezig, Storm!", "Strak gekeept! 🧤"],
  bijna: ["Bijna! Kijk even mee.", "Net niet, geen probleem. Zo leer je het juist.", "Oei, bijna goed.", "Dat is een lastige, hè? Lees de uitleg even.", "Ook de beste keeper laat er weleens eentje door. 💛"],
  levelup: ["Wauw, niveau omhoog! 🏅", "Je snapt het, nu mag het moeilijker! 🚀", "Knap! Op naar het volgende niveau!", "Zo, die ligt erin! Volgend niveau. ⚽"],
  leveldown: ["Geeft niks, we oefenen dit rustig nog een keer. 💛", "Even een stapje terug, dan zit het straks vast.", "Geen stress, we pakken het samen opnieuw.", "Net als baantjes zwemmen: eerst rustig, dan sneller. 🏊"],
  stapelklaar: ["Stapel gehaald! 🎉 Op naar de volgende.", "Alle begrippen gekend, top!", "Yes, stapeltje af! ⭐", "Die stapel zit erin, Storm! 🧤"]
};
