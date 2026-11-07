registerUnit({
  id: "u03",
  title: "Le présent des verbes en -er",
  objectif: "Say what you do regularly: where you live and work, what you speak, eat and like.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "A regular <em>-er</em> verb is built from two parts. The stem is the infinitive minus <em>-er</em> ({fr:parler} gives <em>parl-</em>), and the ending is chosen by the subject’s person and number. About nine French verbs in ten work this way, including the ones the language keeps inventing ({fr:googler}, {fr:liker})." },
    { table: {
        head: ["sujet", "à l’écrit", "à l’oral"],
        kinds: ["fr", "fr", "ipa"],
        rows: [
          ["je", "parl{s:e}", "/paʁl/"],
          ["tu", "parl{s:es}", "/paʁl/"],
          ["il, elle, on", "parl{s:e}", "/paʁl/"],
          ["nous", "parl{e:ons}", "/paʁlɔ̃/"],
          ["vous", "parl{e:ez}", "/paʁle/"],
          ["ils, elles", "parl{s:ent}", "/paʁl/"]
        ] },
      marge: "4 personnes,<br>1 seul son" },
    { p: "Spelling keeps all six endings; speech has dropped four of them. Written French has five different forms here, spoken French only three, so in conversation the subject pronoun does the work the ending no longer does. This is one reason French, unlike Spanish or Italian, never drops its subject pronouns." },
    { p: "Two spelling adjustments keep the sound of the stem stable before <em>-ons</em>: {fr:manger} keeps an <em>e</em> ({fr:nous mangeons}) so the <em>g</em> stays soft /ʒ/, and {fr:commencer} takes a cedilla ({fr:nous commençons}) so the <em>c</em> stays /s/." }
  ],

  oral: [
    { label: "élision", html: "{fr:je} + {fr:aime} becomes {fr:j’aime}, and {fr:je} + {fr:habite} becomes {fr:j’habite}: before a vowel or a silent <em>h</em>, <em>je</em> loses its <em>e</em>, in writing as well as in speech." },
    { label: "liaison", html: "{fr:nous‿aimons} {ipa:/nu{e:z}ɛmɔ̃/}, {fr:ils‿écoutent} {ipa:/il{e:z}ekut/}: the silent <em>s</em> of the pronoun is pronounced as <em>z</em> when the verb starts with a vowel. It also tells {fr:il écoute} {ipa:/ilekut/} apart from {fr:ils‿écoutent} {ipa:/ilzekut/}: the liaison is the only plural you can hear." },
    { label: "ancrage", html: "The <em>-s</em> in English <em>she speaks</em> is the last audible piece of an ending system English mostly lost. French went halfway: the endings survive on paper, but most of them went quiet. German kept them audible (<em>ich spiele, du spielst, er spielt</em>)." }
  ],

  exemples: [
    { fr: "Je travaill{s:e} dans {m:un laboratoire}.", en: "I work in a laboratory." },
    { fr: "Tu parl{s:es} français ?", en: "Do you speak French?" },
    { fr: "Elle habit{s:e} près de {f:la gare}.", en: "She lives near the station." },
    { fr: "Nous mange{e:ons} à midi.", en: "We eat at noon.", note: "le e garde<br>le g doux" },
    { fr: "Ils‿écout{s:ent} {f:la radio} {m:le soir}.", en: "They listen to the radio in the evening." },
    { fr: "Vous cherch{e:ez} {f:la clé} ?", en: "Are you looking for the key?" },
    { fr: "On aim{s:e} beaucoup {m:le cinéma}.", en: "We really like the cinema." },
    { fr: "J’étudi{s:e} {f:la biologie} à {f:l’université}.", en: "I study biology at the university." }
  ],

  pieges: [
    { label: "piège", html: "{fr:ils parlent} is pronounced {ipa:/ilpaʁl/}, exactly like {fr:il parle}. Never pronounce the <em>-ent</em> of a verb." },
    { label: "piège", html: "French has no <em>-ing</em> tense: {fr:je parle} means <em>I speak</em>, <em>I am speaking</em> and <em>I do speak</em>. One present tense covers all three." },
    { label: "piège", html: "Some English verbs need a preposition that French does not: {fr:écouter la radio} (listen <em>to</em>), {fr:chercher la clé} (look <em>for</em>), {fr:regarder la télé} (look <em>at</em>, watch)." },
    { label: "faux ami", html: "{fr:rester} means <em>to stay</em>, not <em>to rest</em>." }
  ],

  exercices: [
    { titre: "Formes", seance: 2, items: [
      { t: "form", sujet: "nous", verbe: "parler", a: "parlons", note: "nous → -ons" },
      { t: "form", sujet: "vous", verbe: "habiter", a: "habitez", note: "vous → -ez" },
      { t: "form", sujet: "ils", verbe: "travailler", a: "travaillent", note: "ils → -ent, muet" },
      { t: "form", sujet: "tu", verbe: "aimer", a: "aimes", note: "tu → -es, muet" },
      { t: "form", sujet: "nous", verbe: "manger", a: "mangeons", note: "mange + ons", why: "The e keeps the g soft /ʒ/ before o." },
      { t: "form", sujet: "nous", verbe: "commencer", a: "commençons", note: "c → ç devant o", why: "The cedilla keeps the c soft /s/ before o." },
      { t: "cloze", q: "Vous ___ la clé ?", hint: "chercher", a: "cherchez" },
      { t: "cloze", q: "Ils ___ le café.", hint: "aimer", a: "aiment", note: "ils → -ent, muet" },
      { t: "cloze", q: "Elle ___ à Lyon.", hint: "habiter", a: "habite" },
      { t: "choose", q: "Ils ___ français.", options: ["parle", "parles", "parlent"], a: "parlent", why: "All three sound the same, /paʁl/. Only the spelling shows the subject." }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "dictee", a: "Nous écoutons la radio le soir." },
      { t: "dictee", a: "Tu travailles à Paris ?" },
      { t: "ecoute", say: "Ils aiment le thé.", options: ["Il aime le thé.", "Ils aiment le thé."], a: "Ils aiment le thé.", why: "The liaison /z/ in {fr:ils‿aiment} is the only audible sign of the plural." },
      { t: "translate", q: "We speak French.", a: ["Nous parlons français.", "On parle français."], why: "In speech, {fr:on parle} is the usual way to say <em>we speak</em>." },
      { t: "translate", q: "She lives near the station.", a: ["Elle habite près de la gare."] },
      { t: "translate", q: "Do you work here? (formal)", a: ["Vous travaillez ici ?", "Est-ce que vous travaillez ici ?", "Travaillez-vous ici ?"] },
      { t: "spot", q: "Ils parle anglais.", a: ["Ils parlent anglais.", "Il parle anglais."], note: "ils → -ent" },
      { t: "spot", q: "Je aime la musique.", a: ["J’aime la musique."], note: "je + voyelle → j’" },
      { t: "transform", q: "Je regarde la télé.", consigne: "Avec nous", a: ["Nous regardons la télé."] },
      { t: "transform", q: "Il mange une pomme.", consigne: "Au pluriel : ils", a: ["Ils mangent une pomme."], why: "{fr:mangent} needs no extra e: the ending starts with e already." }
    ] }
  ],

  lecture: {
    phrases: [
      { fr: "Léa habit{s:e} à Lyon.", en: "Léa lives in Lyon." },
      { fr: "Elle travaill{s:e} dans {f:une librairie} près de {f:la gare}.", en: "She works in a bookshop near the station." },
      { fr: "{m:Le matin}, elle prépar{s:e} {m:un café} et elle écout{s:e} {f:la radio}.", en: "In the morning, she makes a coffee and listens to the radio." },
      { fr: "{m:Le soir}, elle retrouv{s:e} {m:des amis} et ils parl{s:ent} de livres.", en: "In the evening, she meets up with friends and they talk about books." },
      { fr: "{m:Le samedi}, ils dîn{s:ent} chez Léa et ils regard{s:ent} {f:la télé}.", en: "On Saturdays, they have dinner at Léa’s and watch TV." }
    ],
    notes: [
      { label: "faux ami", html: "{fr:une librairie} is a bookshop. A library is {fr:une bibliothèque}." },
      { label: "le samedi", html: "With {fr:le}, a day means every week: {fr:le samedi}, on Saturdays." }
    ]
  },

  vocabulaire: [
    { fr: "parler", en: "to speak, to talk" },
    { fr: "travailler", en: "to work" },
    { fr: "habiter", en: "to live (somewhere)" },
    { fr: "aimer", en: "to like, to love" },
    { fr: "manger", en: "to eat" },
    { fr: "écouter", en: "to listen to" },
    { fr: "regarder", en: "to watch, to look at" },
    { fr: "chercher", en: "to look for" },
    { fr: "préparer", en: "to prepare, to make" },
    { fr: "étudier", en: "to study" },
    { fr: "rester", en: "to stay" },
    { fr: "commencer", en: "to begin" },
    { fr: "{f:la gare}", en: "(train) station" },
    { fr: "{f:la clé}", en: "key" },
    { fr: "{m:le matin}", en: "morning" },
    { fr: "{m:le soir}", en: "evening" },
    { fr: "{f:une librairie}", en: "bookshop" }
  ],

  lexique: [
    ["aiment", "aimer", "verbe en -er", "", "présent : ils, elles", "like, love", "The -ent is silent: ils‿aiment /ilzɛm/.", "/ɛm/"],
    ["mange", "manger", "verbe en -er", "", "présent : je, il, elle, on", "eat, eats", "", "/mɑ̃ʒ/"],
    ["mangent", "manger", "verbe en -er", "", "présent : ils, elles", "eat", "No extra e: the ending starts with e already.", "/mɑ̃ʒ/"],
    ["pomme", "une pomme", "nom", "f", "", "apple", "une pomme de terre: a potato.", "/pɔm/"],
    ["regarde", "regarder", "verbe en -er", "", "présent : je, il, elle, on", "watch, look at", "", "/ʁəɡaʁd/"],
    ["parle", "parler", "verbe en -er", "", "présent : je, il, elle, on", "speak, speaks", "", "/paʁl/"],
    ["parles", "parler", "verbe en -er", "", "présent : tu", "speak", "The -es is silent: /paʁl/.", "/paʁl/"],
    ["parlons", "parler", "verbe en -er", "", "présent : nous", "speak", "-ons is heard: /paʁlɔ̃/.", "/paʁlɔ̃/"],
    ["parlez", "parler", "verbe en -er", "", "présent : vous", "speak", "-ez is heard: /paʁle/.", "/paʁle/"],
    ["googler", "googler", "verbe en -er", "", "infinitif", "to google", "New verbs enter French as -er verbs.", "/ɡuɡle/"],
    ["liker", "liker", "verbe en -er", "", "infinitif", "to like (a post)", "Anglicism. aimer is the general verb.", "/lajke/"],
    ["manger", "manger", "verbe en -er", "", "infinitif", "to eat", "", "/mɑ̃ʒe/"],
    ["mangeons", "manger", "verbe en -er", "", "présent : nous", "eat", "The e keeps the g soft /ʒ/ before o: mangeons, not mangons.", "/mɑ̃ʒɔ̃/"],
    ["commencer", "commencer", "verbe en -er", "", "infinitif", "to begin, to start", "", "/kɔmɑ̃se/"],
    ["commençons", "commencer", "verbe en -er", "", "présent : nous", "begin, start", "The cedilla keeps the c soft /s/ before o.", "/kɔmɑ̃sɔ̃/"],
    ["personnes", "une personne", "nom", "f", "pluriel", "persons, people", "Here: grammatical persons (je, tu, il...).", "/pɛʁsɔn/"],
    ["seul", "seul", "adjectif", "m", "masculin singulier", "single, only, alone", "un seul son: a single sound.", "/sœl/"],
    ["son", "le son", "nom", "m", "", "sound", "Also the possessive his, her (unit 7): son livre.", "/sɔ̃/"],
    ["aimer", "aimer", "verbe en -er", "", "infinitif", "to like, to love", "", "/eme/"],
    ["aime", "aimer", "verbe en -er", "", "présent : je, il, elle, on", "like, love; likes, loves", "With people, aimer means to love; aimer bien means to like.", "/ɛm/"],
    ["aimons", "aimer", "verbe en -er", "", "présent : nous", "like, love", "", "/emɔ̃/"],
    ["habiter", "habiter", "verbe en -er", "", "infinitif", "to live (somewhere)", "habiter à Lyon, habiter près de la gare.", "/abite/"],
    ["habite", "habiter", "verbe en -er", "", "présent : je, il, elle, on", "live, lives", "The h is silent, so je becomes j’: j’habite.", "/abit/"],
    ["écouter", "écouter", "verbe en -er", "", "infinitif", "to listen to", "", "/ekute/"],
    ["écoute", "écouter", "verbe en -er", "", "présent : je, il, elle, on", "listen to, listens to", "", "/ekut/"],
    ["écoutent", "écouter", "verbe en -er", "", "présent : ils, elles", "listen to", "No preposition: écouter la radio, listen to the radio.", "/ekut/"],
    ["travaille", "travailler", "verbe en -er", "", "présent : je, il, elle, on", "work, works", "", "/tʁavaj/"],
    ["laboratoire", "un laboratoire", "nom", "m", "", "laboratory", "Spoken: le labo.", "/labɔʁatwaʁ/"],
    ["midi", "midi", "nom", "m", "", "noon, midday", "le Midi: the south of France.", "/midi/"],
    ["radio", "la radio", "nom", "f", "", "radio", "", "/ʁadjo/"],
    ["soir", "le soir", "nom", "m", "", "evening", "le soir, with no preposition: in the evening, every evening.", "/swaʁ/"],
    ["matin", "le matin", "nom", "m", "", "morning", "le matin: in the morning, every morning.", "/matɛ̃/"],
    ["chercher", "chercher", "verbe en -er", "", "infinitif", "to look for", "", "/ʃɛʁʃe/"],
    ["cherchez", "chercher", "verbe en -er", "", "présent : vous", "look for", "No preposition: chercher la clé, look for the key.", "/ʃɛʁʃe/"],
    ["clé", "une clé", "nom", "f", "", "key", "Also spelled clef, same pronunciation /kle/.", "/kle/"],
    ["cinéma", "le cinéma", "nom", "m", "", "cinema, the movies", "Masculine despite the -a.", "/sinema/"],
    ["étudier", "étudier", "verbe en -er", "", "infinitif", "to study", "", "/etydje/"],
    ["étudie", "étudier", "verbe en -er", "", "présent : je, il, elle, on", "study, studies", "", "/etydi/"],
    ["biologie", "la biologie", "nom", "f", "", "biology", "Sciences in -logie are feminine.", "/bjɔlɔʒi/"],
    ["garde", "garder", "verbe en -er", "", "présent : je, il, elle, on", "keeps", "", "/ɡaʁd/"],
    ["doux", "doux", "adjectif", "m", "masculin singulier", "soft, gentle", "A soft g sounds /ʒ/, as in mangeons.", "/du/"],
    ["rester", "rester", "verbe en -er", "", "infinitif", "to stay", "Faux ami: to rest is se reposer.", "/ʁɛste/"],
    ["regarder", "regarder", "verbe en -er", "", "infinitif", "to watch, to look at", "No preposition: regarder la télé.", "/ʁəɡaʁde/"],
    ["regardent", "regarder", "verbe en -er", "", "présent : ils, elles", "watch, look at", "", "/ʁəɡaʁd/"],
    ["télé", "la télé", "nom", "f", "", "TV", "Short for la télévision.", "/tele/"],
    ["librairie", "une librairie", "nom", "f", "", "bookshop", "Faux ami: a library is une bibliothèque.", "/libʁɛʁi/"],
    ["bibliothèque", "une bibliothèque", "nom", "f", "", "library; bookcase", "", "/biblijɔtɛk/"],
    ["préparer", "préparer", "verbe en -er", "", "infinitif", "to prepare", "", "/pʁepaʁe/"],
    ["prépare", "préparer", "verbe en -er", "", "présent : je, il, elle, on", "prepares, makes", "préparer un café: make a coffee.", "/pʁepaʁ/"],
    ["retrouve", "retrouver", "verbe en -er", "", "présent : je, il, elle, on", "meets up with", "Literally re- + trouver, to find again.", "/ʁətʁuv/"],
    ["dînent", "dîner", "verbe en -er", "", "présent : ils, elles", "have dinner", "le dîner: dinner.", "/din/"],
    ["film", "un film", "nom", "m", "", "film, movie", "", "/film/"]
  ]
});
