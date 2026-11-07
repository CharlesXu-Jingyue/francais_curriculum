registerUnit({
  id: "f1",
  title: "Les sons et l’orthographe",
  objectif: "Read a French word aloud from its spelling, and hear which letters are silent.",
  legend: ["end", "mute"],

  systeme: [
    { p: "French spelling is old: the pronunciation moved on and the letters stayed. The result is not chaos but a fairly regular map from letter groups to sounds. Read in groups, not letter by letter, and you can pronounce almost any word you meet, even one you have never seen." },
    { p: "Final consonants are usually silent. Four are usually heard: <em>c, r, f, l</em> (think of English <em>careful</em>). The big exception is the <em>-er</em> ending of verbs (and of many nouns and adjectives), where the <em>r</em> is silent." },
    { table: {
        head: ["mot", "à l’oral", "note"],
        kinds: ["fr", "ipa", "en"],
        rows: [
          ["peti{s:t}", "/pəti/", "t silent"],
          ["deu{s:x}", "/dø/", "x silent"],
          ["Pari{s:s}", "/paʁi/", "s silent"],
          ["ave{e:c}", "/avɛk/", "c heard"],
          ["bonjou{e:r}", "/bɔ̃ʒuʁ/", "r heard"],
          ["neu{e:f}", "/nœf/", "f heard"],
          ["avri{e:l}", "/avʁil/", "l heard"],
          ["parle{s:r}", "/paʁle/", "-er of a verb: r silent"]
        ] },
      marge: "c, r, f, l :<br>on les entend" },
    { p: "A final <em>e</em> without an accent is silent too, but it changes what comes before it: the consonant in front of it is now heard. {fr:petit} {ipa:/pəti/} becomes {fr:petite} {ipa:/pətit/}. You will meet this again as the sound of the feminine." },
    { p: "Some vowel letters work in pairs or threes and stand for a single sound:" },
    { table: {
        head: ["lettres", "son", "exemples"],
        kinds: ["en", "ipa", "fr"],
        rows: [
          ["ou", "/u/", "v{e:ou}{s:s}, n{e:ou}{s:s}"],
          ["oi", "/wa/", "m{e:oi}, tr{e:oi}{s:s}"],
          ["au, eau", "/o/", "{e:au}ssi, b{e:eau}"],
          ["ai, ei", "/ɛ/", "m{e:ai}{s:s}, n{e:ei}g{s:e}"],
          ["eu", "/ø/, /œ/", "d{e:eu}{s:x}, {s:h}{e:eu}r{s:e}"]
        ] } },
    { p: "When a vowel is followed by <em>n</em> or <em>m</em> in the same syllable, the two letters fuse into one nasal vowel: air flows through the nose, and the <em>n</em> itself is not pronounced." },
    { table: {
        head: ["lettres", "son", "exemples"],
        kinds: ["en", "ipa", "fr"],
        rows: [
          ["an, am, en, em", "/ɑ̃/", "{e:en}f{e:an}{s:t}"],
          ["on, om", "/ɔ̃/", "b{e:on}, n{e:om}"],
          ["in, im, ain, ein", "/ɛ̃/", "v{e:in}, p{e:ain}"],
          ["un, um", "/œ̃/", "{e:un}, parf{e:um}"]
        ] },
      marge: "4 voyelles<br>nasales" },
    { p: "The nasal vowel disappears as soon as a vowel follows the <em>n</em> or <em>m</em>, or the consonant is doubled: the vowel turns oral and the <em>n</em> is heard. {fr:bon} {ipa:/bɔ̃/}, {fr:bonne} {ipa:/bɔn/}; {fr:américain} {ipa:/ameʁikɛ̃/}, {fr:américaine} {ipa:/ameʁikɛn/}. Many Parisians now say {fr:un} with the vowel of {fr:vin}, so you will often hear three nasal vowels rather than four." },
    { p: "Accents are part of the spelling, not decoration. On <em>e</em> they change the sound, and the cedilla makes <em>ç</em> sound /s/ before <em>a</em>, <em>o</em>, <em>u</em>. On other letters they mostly tell apart words that would otherwise look alike: {fr:a} (has) and {fr:à} (at, to), {fr:ou} (or) and {fr:où} (where) sound the same." },
    { table: {
        head: ["accent", "son", "exemples"],
        kinds: ["en", "ipa", "fr"],
        rows: [
          ["é (aigu)", "/e/", "caf{e:é}, {e:é}t{e:é}"],
          ["è (grave)", "/ɛ/", "m{e:è}r{s:e}, tr{e:è}{s:s}"],
          ["ê (circonflexe)", "/ɛ/", "f{e:ê}t{s:e}, {e:ê}t{s:es}"],
          ["ç (cédille)", "/s/", "{e:ç}a, fran{e:ç}ai{s:s}"],
          ["à, ù (grave)", "/a/, /u/", "a, à; ou, où"]
        ] } }
  ],

  oral: [
    { label: "liaison", html: "A silent final consonant can come back before a vowel: {fr:vous} {ipa:/vu/}, but {fr:vous‿êtes} {ipa:/vu{e:z}ɛt/}. An <em>s</em> or <em>x</em> comes back as /z/. Liaison is required in some places and forbidden in others; each unit points out the ones it uses." },
    { label: "élision", html: "Small words ending in a vowel lose it before another vowel, and an apostrophe marks the gap: {fr:le} + {fr:ami} gives {fr:l’ami}, {fr:je} + {fr:ai} gives {fr:j’ai}." },
    { label: "enchaînement", html: "A final consonant that is always pronounced runs into the vowel of the next word: {fr:avec elle} {ipa:/a.vɛ.kɛl/}, {fr:il est} {ipa:/i.lɛ/}. Spoken French is a chain of syllables, not a row of words, which is why word boundaries are hard to hear at first." },
    { label: "ancrage", html: "English kept many <em>s</em> letters that French dropped, and the circumflex marks the spot: {fr:forêt} forest, {fr:hôpital} hospital, {fr:fête} feast. When you see <em>ê</em> or <em>ô</em>, try adding an <em>s</em>." }
  ],

  exemples: [
    { fr: "Bonjou{e:r} !", en: "Hello! Good morning!" },
    { fr: "Merci beaucou{s:p}.", en: "Thank you very much." },
    { fr: "S’il vou{s:s} plaî{s:t}.", en: "Please." },
    { fr: "Au revoi{e:r} !", en: "Goodbye!" },
    { fr: "Pardon, excuse{s:z}-moi.", en: "Sorry, excuse me." },
    { fr: "Un caf{e:é}, s’il vous plaî{s:t}.", en: "A coffee, please." },
    { fr: "B{e:onn}{s:e} journé{s:e} !", en: "Have a good day!", note: "bon ≠ bonne" },
    { fr: "Le p{e:ain} e{s:st} trè{s:s} b{e:on}.", en: "The bread is very good." },
    { fr: "À bientô{s:t} !", en: "See you soon!" }
  ],

  pieges: [
    { label: "piège", html: "The verb ending <em>-ent</em> is silent ({fr:ils parlent} {ipa:/ilpaʁl/}), but in nouns and adverbs <em>-ent</em> is the nasal vowel /ɑ̃/: {fr:le vent} {ipa:/vɑ̃/}, {fr:souvent} {ipa:/suvɑ̃/}, {fr:un client} {ipa:/klijɑ̃/}." },
    { label: "piège", html: "The letter <em>h</em> is never pronounced. Most words behave as if they began with a vowel ({fr:l’homme}, {fr:l’heure}); a few, marked <em>h aspiré</em> in dictionaries, block elision and liaison ({fr:le héros}, {fr:les haricots} with no /z/)." },
    { label: "piège", html: "<em>qu</em> is /k/ in almost every word, and the <em>u</em> is not pronounced: {fr:qui} {ipa:/ki/}, {fr:quatre} {ipa:/katʁ/}." },
    { label: "piège", html: "Between two vowels a single <em>s</em> is /z/ and a double <em>ss</em> is /s/: {fr:poison} {ipa:/pwazɔ̃/} (poison), {fr:poisson} {ipa:/pwasɔ̃/} (fish)." },
    { label: "piège", html: "<em>ill</em> after a vowel or in <em>-ille</em> usually sounds /j/: {fr:travailler} {ipa:/tʁavaje/}, {fr:fille} {ipa:/fij/}. A few common words keep the /l/: {fr:ville} {ipa:/vil/}, {fr:mille} {ipa:/mil/}." }
  ],

  exercices: [
    { titre: "Lettres et sons", seance: 2, items: [
      { t: "choose", q: "Le t final dans « petit »", options: ["muet", "prononcé"], a: "muet", why: "Final consonants are usually silent: /pəti/. (muet: silent; prononcé: pronounced.)" },
      { t: "choose", q: "Le c final dans « avec »", options: ["muet", "prononcé"], a: "prononcé", why: "c is one of the careful consonants: /avɛk/." },
      { t: "choose", q: "Le r final dans « parler »", options: ["muet", "prononcé"], a: "muet", why: "In the -er ending of a verb the r is silent: /paʁle/." },
      { t: "choose", q: "Le r final dans « bonjour »", options: ["muet", "prononcé"], a: "prononcé", why: "Here the final r is heard: /bɔ̃ʒuʁ/. It is silent mainly in -er endings, as in {fr:parler}." },
      { t: "choose", q: "Le s final dans « trois »", options: ["muet", "prononcé"], a: "muet", why: "/tʁwa/." },
      { t: "choose", q: "Le f final dans « neuf »", options: ["muet", "prononcé"], a: "prononcé", why: "f is one of the careful consonants: /nœf/." },
      { t: "choose", q: "« garçon » : le ç se dit", options: ["/s/", "/k/"], a: "/s/", why: "The cedilla makes c soft before a, o, u: /ɡaʁsɔ̃/." },
      { t: "choose", q: "« poisson » : le ss se dit", options: ["/s/", "/z/"], a: "/s/", why: "Double ss is /s/. A single s between vowels is /z/, as in {fr:poison}." },
      { t: "sort", q: "Voyelle nasale ou pas ?", bins: ["nasale", "pas nasale"], items: [["bon", 0], ["bonne", 1], ["pain", 0], ["plaine", 1], ["américain", 0], ["américaine", 1]], why: "A vowel after the n, or a double n, cancels the nasal vowel." },
      { t: "sort", q: "Quel son ?", bins: ["/u/", "/wa/", "/o/"], items: [["vous", 0], ["moi", 1], ["beau", 2], ["trois", 1], ["jour", 0], ["aussi", 2]] }
    ] },
    { titre: "Écoute", seance: 3, items: [
      { t: "ecoute", say: "vin", options: ["vin", "vent", "vont"], a: "vin", why: "Three nasal vowels: {fr:vin} /vɛ̃/, {fr:vent} /vɑ̃/, vont /vɔ̃/." },
      { t: "ecoute", say: "vent", options: ["vin", "vent", "vont"], a: "vent", why: "-ent in a noun is the nasal /ɑ̃/: /vɑ̃/." },
      { t: "ecoute", say: "tout", options: ["tu", "tout"], a: "tout", why: "ou spells /u/; a single u spells /y/, lips rounded as for /u/ but tongue forward as for /i/." },
      { t: "ecoute", say: "dessous", options: ["dessus", "dessous"], a: "dessous", why: "dessus /dəsy/ means above, dessous /dəsu/ below." },
      { t: "ecoute", say: "bonne", options: ["bon", "bonne"], a: "bonne", why: "The double n cancels the nasal: /bɔn/." },
      { t: "ecoute", say: "deux", options: ["deux", "doux"], a: "deux", why: "eu is /ø/, ou is /u/." },
      { t: "dictee", a: "Merci beaucoup." },
      { t: "dictee", a: "Au revoir." },
      { t: "dictee", a: "S’il vous plaît." },
      { t: "dictee", a: "À bientôt !" }
    ] }
  ],

  lecture: {
    dialogue: true,
    phrases: [
      { fr: "Paul : Bonjour, Claire ! Ça va ?", en: "Paul: Hello, Claire! How are you?" },
      { fr: "Claire : Trè{s:s} bien, merci. Et toi ?", en: "Claire: Very well, thanks. And you?" },
      { fr: "Paul : Ça va, merci.", en: "Paul: Fine, thanks." },
      { fr: "Claire : Paul, voilà Léa.", en: "Claire: Paul, this is Léa." },
      { fr: "Léa : Enchanté{s:e} ! Je m’appelle Léa Martin.", en: "Léa: Pleased to meet you! My name is Léa Martin." },
      { fr: "Paul : Enchanté, Léa. Moi, c’est Paul.", en: "Paul: Pleased to meet you, Léa. I’m Paul." },
      { fr: "Claire : Bon, on y va ? À bientô{s:t}, Paul !", en: "Claire: Right, shall we go? See you soon, Paul!" },
      { fr: "Paul : Au revoir, bonne journée !", en: "Paul: Goodbye, have a good day!" }
    ],
    notes: [
      { label: "élision", html: "{fr:je m’appelle}: {fr:me} + {fr:appelle}, literally <em>I call myself</em>. It is how you give your name." },
      { label: "enchanté", html: "A woman writes {fr:enchantée}, with an extra <em>e</em>. It sounds the same." }
    ]
  },

  vocabulaire: [
    { fr: "bonjour", en: "hello, good morning" },
    { fr: "bonsoir", en: "good evening" },
    { fr: "salut", en: "hi; bye (informal)" },
    { fr: "merci", en: "thank you" },
    { fr: "s’il vous plaît", en: "please (formal)" },
    { fr: "s’il te plaît", en: "please (to a friend)" },
    { fr: "de rien", en: "you’re welcome" },
    { fr: "pardon", en: "sorry; pardon?" },
    { fr: "excusez-moi", en: "excuse me" },
    { fr: "au revoir", en: "goodbye" },
    { fr: "à bientôt", en: "see you soon" },
    { fr: "bonne journée", en: "have a good day" },
    { fr: "enchanté, enchantée", en: "pleased to meet you" },
    { fr: "ça va ?", en: "how are you? how’s it going?" },
    { fr: "madame", en: "madam; Mrs" },
    { fr: "monsieur", en: "sir; Mr" }
  ],

  lexique: [
    ["dit", "dire", "verbe irrégulier", "", "présent : il, elle, on", "says", "se dire: to be said. ç se dit /s/: ç is pronounced /s/.", "/di/"],
    ["se", "se", "pronom réfléchi", "", "3e personne", "oneself, itself", "se dit: is said. Reflexive verbs come in unit 13.", "/sə/"],
    ["garçon", "un garçon", "nom", "m", "", "boy", "The cedilla keeps the c soft before o.", "/ɡaʁsɔ̃/"],
    ["petit", "petit", "adjectif", "m", "masculin singulier", "small, little", "/pəti/: the t is silent.", "/pəti/"],
    ["petite", "petit", "adjectif", "f", "féminin singulier", "small, little", "The final e makes the t heard: /pətit/.", "/pətit/"],
    ["deux", "deux", "nombre", "", "", "two", "Liaison before a vowel: deux‿amis /døzami/.", "/dø/"],
    ["trois", "trois", "nombre", "", "", "three", "The s is silent: /tʁwa/.", "/tʁwa/"],
    ["quatre", "quatre", "nombre", "", "", "four", "/katʁ/.", "/katʁ/"],
    ["neuf", "neuf", "nombre", "", "", "nine", "Also an adjective, new. The f becomes /v/ in neuf‿ans /nœvɑ̃/.", "/nœf/"],
    ["mille", "mille", "nombre", "", "", "thousand", "Never takes an s: deux mille.", "/mil/"],
    ["paris", "Paris", "nom de ville", "", "", "Paris", "The final s is silent: /paʁi/.", "/paʁi/"],
    ["parler", "parler", "verbe en -er", "", "infinitif", "to speak, to talk", "The r of -er is silent: /paʁle/.", "/paʁle/"],
    ["parlent", "parler", "verbe en -er", "", "présent : ils, elles", "speak, talk", "The -ent is silent: /paʁl/.", "/paʁl/"],
    ["travailler", "travailler", "verbe en -er", "", "infinitif", "to work", "ill after a vowel is /j/: /tʁavaje/.", "/tʁavaje/"],
    ["entend", "entendre", "verbe", "", "présent : il, elle, on", "hears", "on les entend: we hear them.", "/ɑ̃tɑ̃/"],
    ["voyelles", "une voyelle", "nom", "f", "pluriel", "vowels", "", "/vwajɛl/"],
    ["nasales", "nasal", "adjectif", "f", "féminin pluriel", "nasal", "", "/nazal/"],
    ["beau", "beau", "adjectif", "m", "masculin singulier", "beautiful, handsome", "eau is /o/: /bo/.", "/bo/"],
    ["neige", "la neige", "nom", "f", "", "snow", "ei is /ɛ/: /nɛʒ/.", "/nɛʒ/"],
    ["heure", "une heure", "nom", "f", "", "hour; time", "The h is silent: l’heure /lœʁ/.", "/œʁ/"],
    ["enfant", "un enfant", "nom", "m", "", "child", "Two nasal vowels, final t silent: /ɑ̃fɑ̃/.", "/ɑ̃fɑ̃/"],
    ["bon", "bon", "adjectif", "m", "masculin singulier", "good", "Nasal vowel: /bɔ̃/. Also Bon ! Right, well.", "/bɔ̃/"],
    ["bonne", "bon", "adjectif", "f", "féminin singulier", "good", "Double n: not nasal, /bɔn/.", "/bɔn/"],
    ["nom", "le nom", "nom", "m", "", "name; noun", "The m is not heard: /nɔ̃/.", "/nɔ̃/"],
    ["vin", "le vin", "nom", "m", "", "wine", "/vɛ̃/.", "/vɛ̃/"],
    ["pain", "le pain", "nom", "m", "", "bread", "ain is /ɛ̃/: /pɛ̃/.", "/pɛ̃/"],
    ["parfum", "le parfum", "nom", "m", "", "perfume; flavour", "/paʁfœ̃/, often /paʁfɛ̃/ in Paris.", "/paʁfœ̃/"],
    ["américain", "américain", "adjectif", "m", "masculin singulier", "American", "Nasal at the end: /ameʁikɛ̃/.", "/ameʁikɛ̃/"],
    ["américaine", "américain", "adjectif", "f", "féminin singulier", "American", "The e after n cancels the nasal: /ameʁikɛn/.", "/ameʁikɛn/"],
    ["café", "un café", "nom", "m", "", "coffee; café", "", "/kafe/"],
    ["été", "l’été", "nom", "m", "", "summer", "Also the past participle of être, been.", "/ete/"],
    ["mère", "la mère", "nom", "f", "", "mother", "", "/mɛʁ/"],
    ["fête", "la fête", "nom", "f", "", "party; holiday", "The circumflex marks a lost s: English feast.", "/fɛt/"],
    ["français", "français, française", "nom ou adjectif", "m", "", "French (the language; the nationality)", "le français: the language. Il est français: he is French (adjective, no capital). un Français: a Frenchman. The cedilla keeps the c soft: /fʁɑ̃sɛ/.", "/fʁɑ̃sɛ/"],
    ["forêt", "la forêt", "nom", "f", "", "forest", "The circumflex marks a lost s.", "/fɔʁɛ/"],
    ["hôpital", "l’hôpital", "nom", "m", "", "hospital", "The circumflex marks a lost s, and the h is silent.", "/ɔpital/"],
    ["enchaînement", "l’enchaînement", "nom", "m", "", "linking", "A pronounced final consonant runs into the next vowel.", "/ɑ̃ʃɛnmɑ̃/"],
    ["vent", "le vent", "nom", "m", "", "wind", "-ent is /ɑ̃/ in nouns: /vɑ̃/.", "/vɑ̃/"],
    ["souvent", "souvent", "adverbe", "", "", "often", "-ent is /ɑ̃/ here: /suvɑ̃/.", "/suvɑ̃/"],
    ["client", "un client", "nom", "m", "", "customer, client", "/klijɑ̃/.", "/klijɑ̃/"],
    ["homme", "un homme", "nom", "m", "", "man", "h muet: l’homme, les‿hommes /lezɔm/.", "/ɔm/"],
    ["héros", "un héros", "nom", "m", "", "hero", "h aspiré: le héros, and les héros with no liaison.", "/eʁo/"],
    ["haricots", "un haricot", "nom", "m", "pluriel", "beans", "h aspiré: les haricots /le aʁiko/, no liaison.", "/aʁiko/"],
    ["fille", "une fille", "nom", "f", "", "girl; daughter", "/fij/.", "/fij/"],
    ["ville", "une ville", "nom", "f", "", "town, city", "An exception: the l is heard, /vil/.", "/vil/"],
    ["poison", "le poison", "nom", "m", "", "poison", "Single s between vowels: /z/.", "/pwazɔ̃/"],
    ["poisson", "le poisson", "nom", "m", "", "fish", "Double ss: /s/.", "/pwasɔ̃/"],
    ["bonjour", "bonjour", "interjection", "", "", "hello, good morning", "Literally good day. Used until early evening.", "/bɔ̃ʒuʁ/"],
    ["bonsoir", "bonsoir", "interjection", "", "", "good evening", "From early evening on.", "/bɔ̃swaʁ/"],
    ["salut", "salut", "interjection", "", "", "hi; bye", "Informal, between friends. The t is silent.", "/saly/"],
    ["merci", "merci", "interjection", "", "", "thank you", "merci beaucoup: thank you very much.", "/mɛʁsi/"],
    ["beaucoup", "beaucoup", "adverbe", "", "", "a lot, very much", "The p is silent: /boku/.", "/boku/"],
    ["s'", "si", "conjonction", "", "élidé devant il", "if", "s’il vous plaît: literally, if it pleases you.", "/s/"],
    ["plaît", "plaire", "verbe irrégulier", "", "présent : il, elle, on", "pleases", "s’il vous plaît: please.", "/plɛ/"],
    ["te", "te", "pronom", "", "", "you, yourself", "s’il te plaît: please, to someone you call tu.", "/tə/"],
    ["revoir", "revoir", "verbe", "", "infinitif", "to see again", "au revoir: goodbye, literally until seeing again.", "/ʁəvwaʁ/"],
    ["pardon", "pardon", "interjection", "", "", "sorry; excuse me", "Pardon ? also asks someone to repeat.", "/paʁdɔ̃/"],
    ["excusez-moi", "s’excuser", "verbe", "", "impératif : vous", "excuse me", "To someone you call tu: excuse-moi.", "/ɛkskyzemwa/"],
    ["bientôt", "bientôt", "adverbe", "", "", "soon", "à bientôt: see you soon.", "/bjɛ̃to/"],
    ["rien", "rien", "pronom", "", "", "nothing", "de rien: you’re welcome, literally of nothing.", "/ʁjɛ̃/"],
    ["journée", "une journée", "nom", "f", "", "day (its length)", "bonne journée: have a good day.", "/ʒuʁne/"],
    ["enchanté", "enchanté", "adjectif", "m", "masculin singulier", "pleased to meet you", "Said by a man. A woman writes enchantée; same sound.", "/ɑ̃ʃɑ̃te/"],
    ["enchantée", "enchanté", "adjectif", "f", "féminin singulier", "pleased to meet you", "Said by a woman. Same sound as enchanté.", "/ɑ̃ʃɑ̃te/"],
    ["madame", "madame", "nom", "f", "", "madam; Mrs", "Bonjour, madame: the polite greeting to a woman.", "/madam/"],
    ["monsieur", "monsieur", "nom", "m", "", "sir; Mr", "Pronounced /məsjø/: no nasal vowel, and the r is silent.", "/məsjø/"],
    ["va", "aller", "verbe irrégulier", "", "présent : il, elle, on", "goes", "ça va: I’m fine, or how are you? on y va: let’s go.", "/va/"],
    ["m'", "me", "pronom", "", "élidé devant une voyelle", "me, myself", "je m’appelle: I call myself, my name is.", "/m/"],
    ["me", "me", "pronom", "", "", "me, myself", "", "/mə/"],
    ["appelle", "appeler", "verbe en -er", "", "présent : je, il, elle, on", "call, calls", "je m’appelle: my name is. Double l when the ending is silent.", "/apɛl/"],
    ["paul", "Paul", "prénom", "m", "", "(a first name)", "", "/pɔl/"],
    ["claire", "Claire", "prénom", "f", "", "(a first name)", "Also the adjective clear, light (feminine).", "/klɛʁ/"],
    ["léa", "Léa", "prénom", "f", "", "(a first name)", "", "/lea/"],
    ["martin", "Martin", "nom de famille", "", "", "(a surname)", "The most common surname in France.", "/maʁtɛ̃/"]
  ]
});
