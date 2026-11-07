registerUnit({
  id: "u05",
  title: "Les adjectifs",
  objectif: "Describe people, places and things, with adjectives that agree with their noun and sit in the right place.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "An adjective copies the gender and number of its noun. In writing the rule looks simple: add <em>-e</em> for the feminine, <em>-s</em> for the plural, <em>-es</em> for both: {fr:un livre intéressant}, {fr:une ville intéressante}, {fr:des livres intéressants}, {fr:des villes intéressantes}." },
    { table: {
        head: ["masculin", "à l’oral", "féminin", "à l’oral"],
        kinds: ["fr", "ipa", "fr", "ipa"],
        rows: [
          ["peti{s:t}", "/pəti/", "peti{e:t}{s:e}", "/pətit/"],
          ["gran{s:d}", "/ɡʁɑ̃/", "gran{e:d}{s:e}", "/ɡʁɑ̃d/"],
          ["françai{s:s}", "/fʁɑ̃sɛ/", "françai{e:s}{s:e}", "/fʁɑ̃sɛz/"],
          ["mauvai{s:s}", "/movɛ/", "mauvai{e:s}{s:e}", "/movɛz/"],
          ["bleu", "/blø/", "bleu{s:e}", "/blø/"],
          ["jeune", "/ʒœn/", "jeune", "/ʒœn/"]
        ] },
      marge: "le féminin<br>révèle la consonne" },
    { p: "Speech works differently from spelling. The feminine <em>-e</em> is silent, but it keeps alive a final consonant that the masculine has lost, so in conversation gender is often a consonant you hear or do not hear. The plural is usually not heard at all: {fr:petit} and {fr:petits} sound the same. Adjectives that already end in <em>-e</em> do not change for gender: {fr:jeune}, {fr:rouge}, {fr:facile}, {fr:difficile}." },
    { p: "A few ending families change more than an <em>-e</em>. They are regular, so learn the family rather than each word:" },
    { table: {
        head: ["famille", "exemple", "à l’oral"],
        kinds: ["en", "fr", "ipa"],
        rows: [
          ["-eux, -euse", "heureux, heureuse", "/œʁø/, /œʁøz/"],
          ["-if, -ive", "sportif, sportive", "/spɔʁtif/, /spɔʁtiv/"],
          ["-er, -ère", "premier, première", "/pʁəmje/, /pʁəmjɛʁ/"],
          ["-on, -onne", "bon, bonne", "/bɔ̃/, /bɔn/"],
          ["-en, -enne", "italien, italienne", "/italjɛ̃/, /italjɛn/"],
          ["-el, -elle", "naturel, naturelle", "/natyʁɛl/"],
          ["-al, -aux (m. pl.)", "normal, normaux", "/nɔʁmal/, /nɔʁmo/"]
        ] },
      marge: "bon : nasale<br>bonne : sans nasale" },
    { p: "Where the adjective goes: after the noun by default, and always for colours and nationalities ({fr:une voiture rouge}, {fr:un ami allemand}). A short list of very common adjectives goes before the noun. They cover beauty, age, goodness and size: {fr:beau}, {fr:joli}, {fr:jeune}, {fr:vieux}, {fr:nouveau}, {fr:bon}, {fr:mauvais}, {fr:grand}, {fr:petit}, {fr:gros}." },
    { table: {
        head: ["masculin", "devant une voyelle", "féminin"],
        kinds: ["fr", "fr", "fr"],
        rows: [
          ["un beau livre", "un be{e:l} hôtel", "une belle ville"],
          ["un nouveau film", "un nouve{e:l} ami", "une nouvelle voiture"],
          ["un vieux quartier", "un vie{e:il} homme", "une vieille maison"]
        ] },
      marge: "bel, belle :<br>même son" },
    { p: "Three of the preposed adjectives have a second masculine form for the ear. Before a masculine noun starting with a vowel or a silent <em>h</em>, French uses the form that ends in a consonant, so the two words run together: {fr:un bel hôtel} {ipa:/œ̃ bɛlotɛl/}. Finally, a group of mixed gender takes the masculine plural: {fr:Paul et Marie sont grands}." }
  ],

  oral: [
    { label: "liaison", html: "A preposed adjective links to a noun that starts with a vowel: {fr:un petit‿appartement} {ipa:/œ̃ pəti{e:t}apaʁtəmɑ̃/}, {fr:un grand‿hôtel} {ipa:/œ̃ ɡʁɑ̃{e:t}otɛl/}. In liaison the <em>d</em> of <em>grand</em> is pronounced /t/." },
    { label: "enchaînement", html: "{fr:une grande école} {ipa:/yn ɡʁɑ̃dekɔl/}: the <em>d</em> of the feminine is heard anyway, and it simply runs into the next vowel." },
    { label: "ancrage", html: "English adjectives never agree and almost always come first. German inflects an adjective before the noun (<em>ein großer Mann, eine große Frau</em>) but not after a verb (<em>der Mann ist groß</em>). French agrees in both places: {fr:une grande ville}, {fr:la ville est grande}." },
    { label: "ancrage", html: "Mandarin puts the description before the noun with 的 (漂亮的房子, a beautiful house). French mostly puts it after ({fr:une maison moderne}), with the short list above as the exception ({fr:une belle maison})." }
  ],

  exemples: [
    { fr: "C’est {f:une peti{e:t}{s:e} ville}.", en: "It’s a small town." },
    { fr: "{m:Le quartier} est calme et très joli.", en: "The neighbourhood is quiet and very pretty." },
    { fr: "Marie est gran{e:d}{s:e} et sporti{e:v}{s:e}.", en: "Marie is tall and sporty." },
    { fr: "Paul est gran{s:d} et sporti{e:f}.", en: "Paul is tall and sporty." },
    { fr: "J’ai {m:un nouve{e:l} appartement}.", en: "I have a new apartment.", note: "nouvel :<br>devant voyelle" },
    { fr: "Il y a {f:une vieille église} dans {m:le centre}.", en: "There is an old church in the centre." },
    { fr: "{m:Les vélo{s:s} bleu{s:s}} sont dans {m:le jardin}.", en: "The blue bikes are in the garden." },
    { fr: "C’est {m:un bon restaurant}, mais il est cher.", en: "It’s a good restaurant, but it’s expensive." },
    { fr: "{f:Quelle belle journée} !", en: "What a beautiful day!" }
  ],

  pieges: [
    { label: "piège", html: "{fr:marron} and {fr:orange} never change, because they were nouns first (a chestnut, an orange): {fr:des chaussures marron}, {fr:des sacs orange}. Other colour words agree as usual, including <em>rose</em> and <em>mauve</em>, though they were nouns too." },
    { label: "piège", html: "Position can change the meaning: {fr:un homme grand} is a tall man, {fr:un grand homme} a great man. Recognise it for now." },
    { label: "piège", html: "{fr:vieux} becomes {fr:vieil} before a masculine noun starting with a vowel or silent <em>h</em>: {fr:un vieil homme}, never <em>un vieux homme</em>." },
    { label: "piège", html: "Nationality adjectives take no capital: {fr:un ami français}. The capital is for the noun that names a person: {fr:un Français}, a Frenchman." },
    { label: "faux ami", html: "{fr:sympathique} means <em>nice, friendly</em>, not <em>sympathetic</em>." }
  ],

  exercices: [
    { titre: "Formes", seance: 2, items: [
      { t: "cloze", q: "une ___ voiture", hint: "petit", a: "petite", note: "féminin : + e" },
      { t: "cloze", q: "des livres ___", hint: "intéressant", a: "intéressants", note: "pluriel : + s" },
      { t: "cloze", q: "une étudiante ___", hint: "sportif", a: "sportive", note: "-if → -ive" },
      { t: "cloze", q: "Elle est très ___.", hint: "heureux", a: "heureuse", note: "-eux → -euse" },
      { t: "cloze", q: "une ___ idée", hint: "bon", a: "bonne", note: "-on → -onne" },
      { t: "cloze", q: "Les filles sont ___.", hint: "grand", a: "grandes", note: "féminin pluriel : + es" },
      { t: "choose", q: "un ___ hôtel", options: ["beau", "bel", "belle"], a: "bel", why: "Before a masculine noun starting with a vowel or silent h, {fr:beau} becomes {fr:bel}." },
      { t: "choose", q: "une ___ maison", options: ["vieux", "vieil", "vieille"], a: "vieille", why: "{fr:maison} is feminine, so the feminine {fr:vieille}." },
      { t: "choose", q: "Choisissez la bonne place :", options: ["une voiture rouge", "une rouge voiture"], a: "une voiture rouge", why: "Colours always follow the noun." },
      { t: "sort", q: "Avant ou après le nom ?", bins: ["avant", "après"], items: [["petit", 0], ["rouge", 1], ["joli", 0], ["français", 1], ["nouveau", 0], ["intéressant", 1]] }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "ecoute", say: "Camille est grande.", options: ["Camille est grand.", "Camille est grande."], a: "Camille est grande.", why: "Camille is a name for both men and women; the /d/ you hear tells you it is a woman here." },
      { t: "ecoute", say: "des amies françaises", options: ["des amis français", "des amies françaises"], a: "des amies françaises", why: "{fr:amis} and {fr:amies} sound the same; only the /z/ of {fr:françaises} shows the feminine." },
      { t: "transform", q: "un étudiant américain", consigne: "Au féminin", a: ["une étudiante américaine"] },
      { t: "transform", q: "un livre intéressant", consigne: "Au pluriel", a: ["des livres intéressants"] },
      { t: "transform", q: "un nouveau vélo", consigne: "Remplacez « vélo » par « ami »", a: ["un nouvel ami"], why: "Before a vowel, {fr:nouveau} becomes {fr:nouvel}." },
      { t: "translate", q: "a small red car", a: ["une petite voiture rouge"], why: "{fr:petite} goes before the noun, {fr:rouge} after it." },
      { t: "translate", q: "She is happy and sporty.", a: ["Elle est heureuse et sportive."] },
      { t: "dictee", a: "C’est une belle ville." },
      { t: "spot", q: "J’ai une voiture bleu.", a: ["J’ai une voiture bleue."], note: "voiture (f) → bleue" },
      { t: "spot", q: "C’est un vieux hôtel.", a: ["C’est un vieil hôtel."], note: "vieux → vieil devant voyelle" }
    ] }
  ],

  lecture: {
    phrases: [
      { fr: "Dans {m:le laboratoire}, il y a {f:une nouvelle collègue}.", en: "In the lab, there is a new colleague." },
      { fr: "Elle s’appelle Sophie et elle est italienne.", en: "Her name is Sophie and she is Italian." },
      { fr: "Elle est jeune, très sympathique et un peu timide.", en: "She is young, very friendly and a little shy." },
      { fr: "Elle habite à Lyon, dans {m:un vieux quartier}.", en: "She lives in Lyon, in an old neighbourhood." },
      { fr: "{f:Les rues} sont petites et {f:les maisons} sont belles.", en: "The streets are small and the houses are beautiful." },
      { fr: "{m:Le soir}, {f:la ville} est calme.", en: "In the evening, the city is quiet." },
      { fr: "Sophie aime beaucoup Lyon : c’est {f:une grande ville}, mais elle est très agréable.", en: "Sophie really likes Lyon: it’s a big city, but it’s very pleasant." }
    ],
    notes: [
      { label: "un peu", html: "{fr:un peu} softens an adjective: {fr:un peu timide}, a little shy." },
      { label: "elle", html: "{fr:elle} can mean <em>it</em>: in the last sentence it stands for {fr:la ville}." }
    ]
  },

  vocabulaire: [
    { fr: "petit, petite", en: "small" },
    { fr: "grand, grande", en: "big, tall" },
    { fr: "beau, belle", en: "beautiful, handsome" },
    { fr: "joli, jolie", en: "pretty" },
    { fr: "nouveau, nouvelle", en: "new" },
    { fr: "vieux, vieille", en: "old" },
    { fr: "jeune", en: "young" },
    { fr: "bon, bonne", en: "good" },
    { fr: "mauvais, mauvaise", en: "bad" },
    { fr: "heureux, heureuse", en: "happy" },
    { fr: "sportif, sportive", en: "sporty" },
    { fr: "cher, chère", en: "expensive; dear" },
    { fr: "facile", en: "easy" },
    { fr: "difficile", en: "difficult" },
    { fr: "intéressant, intéressante", en: "interesting" },
    { fr: "calme", en: "calm, quiet" },
    { fr: "rouge", en: "red" },
    { fr: "bleu, bleue", en: "blue" },
    { fr: "noir, noire", en: "black" },
    { fr: "blanc, blanche", en: "white" }
  ],

  lexique: [
    ["amies", "une amie", "nom", "f", "pluriel", "friends (all women)", "Sounds the same as amis: /ami/.", "/ami/"],
    ["filles", "une fille", "nom", "f", "pluriel", "girls; daughters", "The ll is /j/ here: /fij/.", "/fij/"],
    ["idée", "une idée", "nom", "f", "", "idea", "Most nouns in -ée are feminine (but le musée).", "/ide/"],
    ["place", "une place", "nom", "f", "", "place, position; square; seat", "A place in general is un endroit or un lieu.", "/plas/"],
    ["avant", "avant", "préposition", "", "", "before", "avant le nom: before the noun.", "/avɑ̃/"],
    ["intéressant", "intéressant", "adjectif", "m", "masculin singulier", "interesting", "The t is silent: /ɛ̃teʁesɑ̃/. In the feminine it is heard: /ɛ̃teʁesɑ̃t/.", "/ɛ̃teʁɛsɑ̃/"],
    ["intéressante", "intéressant", "adjectif", "f", "féminin singulier", "interesting", "", "/ɛ̃teʁɛsɑ̃t/"],
    ["intéressants", "intéressant", "adjectif", "m", "masculin pluriel", "interesting", "The -ts is silent.", "/ɛ̃teʁɛsɑ̃/"],
    ["intéressantes", "intéressant", "adjectif", "f", "féminin pluriel", "interesting", "", "/ɛ̃teʁɛsɑ̃t/"],
    ["villes", "une ville", "nom", "f", "pluriel", "towns, cities", "", "/vil/"],
    ["grand", "grand", "adjectif", "m", "masculin singulier", "big, tall; great", "The d is silent: /ɡʁɑ̃/. In liaison it sounds /t/: un grand‿homme.", "/ɡʁɑ̃/"],
    ["grande", "grand", "adjectif", "f", "féminin singulier", "big, tall; great", "The d is heard: /ɡʁɑ̃d/.", "/ɡʁɑ̃d/"],
    ["grands", "grand", "adjectif", "m", "masculin pluriel", "big, tall", "Sounds like grand: /ɡʁɑ̃/.", "/ɡʁɑ̃/"],
    ["mauvais", "mauvais", "adjectif", "m", "masculin singulier ou pluriel", "bad", "The s is silent: /movɛ/.", "/movɛ/"],
    ["mauvaise", "mauvais", "adjectif", "f", "féminin singulier", "bad", "The s is heard as /z/: /movɛz/.", "/movɛz/"],
    ["bleu", "bleu", "adjectif", "m", "masculin singulier", "blue", "", "/blø/"],
    ["bleue", "bleu", "adjectif", "f", "féminin singulier", "blue", "Sounds exactly like bleu: /blø/.", "/blø/"],
    ["bleus", "bleu", "adjectif", "m", "masculin pluriel", "blue", "The s is silent: /blø/.", "/blø/"],
    ["jeune", "jeune", "adjectif", "", "masculin ou féminin", "young", "Already ends in -e, so it does not change for gender.", "/ʒœn/"],
    ["révèle", "révéler", "verbe en -er", "", "présent : je, il, elle, on", "reveals", "é becomes è before a silent ending: je révèle, nous révélons.", "/ʁevɛl/"],
    ["petits", "petit", "adjectif", "m", "masculin pluriel", "small", "Sounds like petit: /pəti/.", "/pəti/"],
    ["petites", "petit", "adjectif", "f", "féminin pluriel", "small", "Sounds like petite: /pətit/.", "/pətit/"],
    ["rouge", "rouge", "adjectif", "", "masculin ou féminin", "red", "", "/ʁuʒ/"],
    ["facile", "facile", "adjectif", "", "masculin ou féminin", "easy", "", "/fasil/"],
    ["difficile", "difficile", "adjectif", "", "masculin ou féminin", "difficult", "Double f, single l.", "/difisil/"],
    ["heureux", "heureux", "adjectif", "m", "masculin singulier ou pluriel", "happy", "Ends in -x, so the masculine plural is the same: /œʁø/.", "/œʁø/"],
    ["heureuse", "heureux", "adjectif", "f", "féminin singulier", "happy", "The feminine ends in a /z/ sound: /œʁøz/.", "/œʁøz/"],
    ["sportif", "sportif", "adjectif", "m", "masculin singulier", "sporty, athletic", "The f is heard: /spɔʁtif/.", "/spɔʁtif/"],
    ["sportive", "sportif", "adjectif", "f", "féminin singulier", "sporty, athletic", "-if becomes -ive: /spɔʁtiv/.", "/spɔʁtiv/"],
    ["premier", "premier", "adjectif", "m", "masculin singulier", "first", "The r is silent: /pʁəmje/.", "/pʁəmje/"],
    ["première", "premier", "adjectif", "f", "féminin singulier", "first", "The r is heard: /pʁəmjɛʁ/.", "/pʁəmjɛʁ/"],
    ["italien", "italien", "adjectif", "m", "masculin singulier", "Italian", "Nasal vowel: /italjɛ̃/.", "/italjɛ̃/"],
    ["italienne", "italien", "adjectif", "f", "féminin singulier", "Italian", "Double n, and the vowel is no longer nasal: /italjɛn/.", "/italjɛn/"],
    ["naturel", "naturel", "adjectif", "m", "masculin singulier", "natural", "", "/natyʁɛl/"],
    ["naturelle", "naturel", "adjectif", "f", "féminin singulier", "natural", "Sounds like naturel: /natyʁɛl/.", "/natyʁɛl/"],
    ["normal", "normal", "adjectif", "m", "masculin singulier", "normal", "", "/nɔʁmal/"],
    ["normaux", "normal", "adjectif", "m", "masculin pluriel", "normal", "-al becomes -aux in the masculine plural: /nɔʁmo/. The feminine plural is normales.", "/nɔʁmo/"],
    ["plus", "plus", "adverbe", "", "", "more; no more", "ne ... plus (no longer) comes in unit 31.", "/ply/"],
    ["nasale", "nasal", "adjectif", "f", "féminin singulier", "nasal", "une voyelle nasale: a nasal vowel.", "/nazal/"],
    ["joli", "joli", "adjectif", "m", "masculin singulier", "pretty", "Goes before the noun: un joli quartier.", "/ʒɔli/"],
    ["jolie", "joli", "adjectif", "f", "féminin singulier", "pretty", "Sounds like joli: /ʒɔli/.", "/ʒɔli/"],
    ["vieux", "vieux", "adjectif", "m", "masculin singulier ou pluriel", "old", "Becomes vieil before a vowel: un vieil homme. Feminine: vieille.", "/vjø/"],
    ["nouveau", "nouveau", "adjectif", "m", "masculin singulier", "new", "Becomes nouvel before a vowel: un nouvel ami. Feminine: nouvelle.", "/nuvo/"],
    ["gros", "gros", "adjectif", "m", "masculin singulier ou pluriel", "big, fat", "Feminine: grosse /ɡʁos/.", "/ɡʁo/"],
    ["bel", "beau", "adjectif", "m", "masculin singulier, devant une voyelle", "beautiful, handsome", "Before a masculine noun starting with a vowel or silent h: un bel hôtel. Sounds like belle: /bɛl/.", "/bɛl/"],
    ["belle", "beau", "adjectif", "f", "féminin singulier", "beautiful", "", "/bɛl/"],
    ["belles", "beau", "adjectif", "f", "féminin pluriel", "beautiful", "", "/bɛl/"],
    ["nouvel", "nouveau", "adjectif", "m", "masculin singulier, devant une voyelle", "new", "Sounds like nouvelle: /nuvɛl/.", "/nuvɛl/"],
    ["nouvelle", "nouveau", "adjectif", "f", "féminin singulier", "new", "Also a noun: une nouvelle, a piece of news.", "/nuvɛl/"],
    ["vieil", "vieux", "adjectif", "m", "masculin singulier, devant une voyelle", "old", "Sounds like vieille: /vjɛj/.", "/vjɛj/"],
    ["vieille", "vieux", "adjectif", "f", "féminin singulier", "old", "/vjɛj/: the ill sounds like the y of yes.", "/vjɛj/"],
    ["moderne", "moderne", "adjectif", "", "masculin ou féminin", "modern", "", "/mɔdɛʁn/"],
    ["calme", "calme", "adjectif", "", "masculin ou féminin", "calm, quiet", "un quartier calme: a quiet neighbourhood.", "/kalm/"],
    ["église", "une église", "nom", "f", "", "church", "The s between vowels sounds /z/: /eɡliz/.", "/eɡliz/"],
    ["centre", "le centre", "nom", "m", "", "centre", "le centre-ville: the town centre.", "/sɑ̃tʁ/"],
    ["vélos", "un vélo", "nom", "m", "pluriel", "bikes", "", "/velo/"],
    ["cher", "cher", "adjectif", "m", "masculin singulier", "expensive; dear", "The r is heard: /ʃɛʁ/. The feminine chère sounds the same.", "/ʃɛʁ/"],
    ["chère", "cher", "adjectif", "f", "féminin singulier", "expensive; dear", "Sounds like cher: /ʃɛʁ/.", "/ʃɛʁ/"],
    ["marron", "marron", "adjectif", "", "invariable", "brown", "Never changes: des chaussures marron. Originally a noun: a chestnut.", "/maʁɔ̃/"],
    ["orange", "orange", "adjectif", "", "invariable", "orange", "Never changes: des sacs orange. Also the fruit, une orange.", "/ɔʁɑ̃ʒ/"],
    ["chaussures", "une chaussure", "nom", "f", "pluriel", "shoes", "", "/ʃosyʁ/"],
    ["sacs", "un sac", "nom", "m", "pluriel", "bags", "The c is heard, the s is not: /sak/.", "/sak/"],
    ["timide", "timide", "adjectif", "", "masculin ou féminin", "shy", "", "/timid/"],
    ["rues", "une rue", "nom", "f", "pluriel", "streets", "", "/ʁy/"],
    ["maisons", "une maison", "nom", "f", "pluriel", "houses", "", "/mɛzɔ̃/"],
    ["agréable", "agréable", "adjectif", "", "masculin ou féminin", "pleasant, nice", "", "/aɡʁeabl/"],
    ["noir", "noir", "adjectif", "m", "masculin singulier", "black", "", "/nwaʁ/"],
    ["noire", "noir", "adjectif", "f", "féminin singulier", "black", "Sounds like noir: /nwaʁ/.", "/nwaʁ/"],
    ["blanc", "blanc", "adjectif", "m", "masculin singulier", "white", "The c is silent: /blɑ̃/.", "/blɑ̃/"],
    ["blanche", "blanc", "adjectif", "f", "féminin singulier", "white", "Irregular feminine: /blɑ̃ʃ/.", "/blɑ̃ʃ/"]
  ]
});
