registerUnit({
  id: "u01",
  title: "Les pronoms sujets et être",
  objectif: "Introduce yourself and others: name, nationality, job, and where you are from.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "French sorts its subject pronouns into six cells on two axes: person (the speaker, the one spoken to, anyone else) and number (one or several). The third-person cells hold a choice ({fr:il}, {fr:elle} or {fr:on}; {fr:ils} or {fr:elles}), and one person you address can be {fr:tu} or {fr:vous}." },
    { table: {
        head: ["", "singulier", "pluriel"],
        kinds: ["en", "fr", "fr"],
        rows: [
          ["1st person", "je", "nous"],
          ["2nd person", "tu", "vous"],
          ["3rd person", "il, elle, on", "ils, elles"]
        ] },
      marge: "on = nous<br>à l’oral" },
    { p: "{fr:tu} is for one person you know well: family, friends, children, fellow students. {fr:vous} is for one person you address formally, and for any group. When unsure, start with {fr:vous} and wait to be offered {fr:tu}. {fr:on} takes the verb form of {fr:il}, but in speech it usually means <em>we</em>: {fr:on est français} is the everyday way to say {fr:nous sommes français}." },
    { table: {
        head: ["sujet", "à l’écrit", "à l’oral"],
        kinds: ["fr", "fr", "ipa"],
        rows: [
          ["je", "sui{s:s}", "/sɥi/"],
          ["tu", "e{s:s}", "/ɛ/"],
          ["il, elle, on", "e{s:st}", "/ɛ/"],
          ["nous", "somm{s:es}", "/sɔm/"],
          ["vous", "êt{s:es}", "/ɛt/"],
          ["ils, elles", "son{s:t}", "/sɔ̃/"]
        ] },
      marge: "es = est<br>à l’oral" },
    { p: "{fr:être} has no stem at all: its six forms go straight back to Latin <em>sum, es, est, sumus, estis, sunt</em> and were never regularised. The most frequent verbs resist regularisation, which is why <em>to be</em> and <em>sein</em> are just as irregular. Six written forms, five spoken: {fr:tu es} and {fr:il est} both sound /ɛ/, and every final consonant here is silent." },
    { p: "To say what someone <em>is</em>, French has two frames, chosen by what follows. {fr:c’est} takes a determiner and a noun, a name or a stressed pronoun: {fr:c’est un médecin}, {fr:c’est Marie}, {fr:c’est moi}. {fr:il est} and {fr:elle est} take an adjective, or a bare profession or nationality used like one: {fr:il est médecin}, {fr:elle est française}." },
    { table: {
        head: ["c’est + un, une", "il est, elle est + adjectif"],
        kinds: ["fr", "fr"],
        rows: [
          ["C’est {m:un médecin}.", "Il est médecin."],
          ["C’est {f:une Française}.", "Elle est française."],
          ["C’est {m:un ami}.", "Il est sympa."]
        ] },
      marge: "c’est + nom<br>il est + adjectif" },
    { p: "Nationalities and many professions add <em>-e</em> for a woman. Often the feminine is the form you can hear: the final consonant, silent in {fr:français}, is pronounced once an <em>e</em> follows it in {fr:française}. Full adjective agreement comes in unit 5." },
    { table: {
        head: ["masculin", "féminin", "à l’oral"],
        kinds: ["fr", "fr", "ipa"],
        rows: [
          ["françai{s:s}", "françai{e:s}{s:e}", "/fʁɑ̃sɛ/ → /fʁɑ̃sɛz/"],
          ["chinoi{s:s}", "chinoi{e:s}{s:e}", "/ʃinwa/ → /ʃinwaz/"],
          ["alleman{s:d}", "alleman{e:d}{s:e}", "/almɑ̃/ → /almɑ̃d/"],
          ["étudian{s:t}", "étudian{e:t}{s:e}", "/etydjɑ̃/ → /etydjɑ̃t/"]
        ] },
      marge: "+ e : on entend<br>la consonne" }
  ],

  oral: [
    { label: "liaison", html: "{fr:vous‿êtes} {ipa:/vu{e:z}ɛt/}: the silent <em>s</em> of {fr:vous} is heard as <em>z</em> before a vowel. In {fr:c’est‿un‿ami} {ipa:/sɛ{e:t}œ̃{e:n}ami/}, the liaison after {fr:est} is optional but very common; the one after {fr:un} is obligatory." },
    { label: "élision", html: "{fr:ce} + {fr:est} becomes {fr:c’est}. Only a few short words elide before a vowel ({fr:je}, {fr:me}, {fr:ce}, {fr:le}, {fr:la}, {fr:ne}, {fr:de}, {fr:que}); in standard writing {fr:tu} never does." },
    { label: "familier", html: "In casual speech {fr:tu es} is often squeezed to {ipa:/tɛ/}, and written {fr:t’es} in messages: {fr:t’es où ?} (where are you?). Recognise it; write {fr:tu es}." },
    { label: "ancrage", html: "German makes the same split: {fr:tu} is <em>du</em>, {fr:vous} is <em>Sie</em> (and also <em>ihr</em>, for a group). French borrows the plural for politeness where German borrows the third person. English once had it too (<em>thou</em> / <em>you</em>) and lost it." },
    { label: "ancrage", html: "Mandarin 您 marks respect like {fr:vous}, but it is singular and optional in much of the Chinese-speaking world. {fr:vous} is expected with any adult stranger." }
  ],

  exemples: [
    { fr: "Bonjour, je m’appelle Sophie.", en: "Hello, my name is Sophie." },
    { fr: "Je sui{s:s} chercheuse à {f:l’université} de Lyon.", en: "I am a researcher at the University of Lyon." },
    { fr: "Vous‿êtes d’où ?", en: "Where are you from?" },
    { fr: "Il est de Berlin, il est allemand.", en: "He is from Berlin, he is German." },
    { fr: "Elle est médecin.", en: "She is a doctor.", note: "pas d’article" },
    { fr: "C’est {m:un collègue} : il est ingénieur.", en: "This is a colleague: he is an engineer." },
    { fr: "On est étudiants à Paris.", en: "We are students in Paris.", note: "on = nous" },
    { fr: "Madame Leroy, vous‿êtes professeure ?", en: "Ms Leroy, are you a teacher?" },
    { fr: "Ils sont anglais, elles sont américaines.", en: "They (men) are English, they (women) are American." }
  ],

  pieges: [
    { label: "piège", html: "No article before a bare profession: {fr:je suis médecin}, not <em>je suis un médecin</em>. The article comes back with {fr:c’est} ({fr:c’est un médecin}), or once the profession is described: {fr:c’est un bon médecin}." },
    { label: "piège", html: "{fr:c’est} or {fr:il est}? Look at what follows. A determiner ({fr:un}, {fr:une}, {fr:le}) calls for {fr:c’est}; an adjective or a bare profession or nationality calls for {fr:il est} or {fr:elle est}." },
    { label: "majuscule", html: "A nationality adjective takes no capital letter: {fr:il est français}. The noun for the person does: {fr:un Français}, {fr:une Chinoise}." },
    { label: "piège", html: "{fr:vous} can mean one person. The verb is always {fr:êtes}, but the adjective follows the real people: {fr:vous êtes française} to one woman, {fr:vous êtes françaises} to several women." }
  ],

  exercices: [
    { titre: "Formes", seance: 2, items: [
      { t: "form", sujet: "je", verbe: "être", a: "suis" },
      { t: "form", sujet: "nous", verbe: "être", a: "sommes" },
      { t: "form", sujet: "vous", verbe: "être", a: "êtes", note: "vous → êtes", why: "One of only three present-tense vous forms without -ez: êtes, faites, dites." },
      { t: "form", sujet: "ils", verbe: "être", a: "sont", note: "ils → sont" },
      { t: "form", sujet: "on", verbe: "être", a: "est", note: "on = forme de il", why: "on always takes the il form of the verb, even when it means we." },
      { t: "choose", q: "Elle ___ ingénieure.", options: ["est", "es"], a: "est", why: "es goes with tu, est with il, elle, on. They sound the same, /ɛ/." },
      { t: "choose", q: "___ un ami de Paul.", options: ["C’est", "Il est"], a: "C’est", why: "A determiner follows ({fr:un}), so {fr:c’est}." },
      { t: "choose", q: "___ médecin.", options: ["C’est", "Il est"], a: "Il est", why: "A bare profession works like an adjective: {fr:il est médecin}." },
      { t: "cloze", q: "Vous ___ d’où ?", hint: "être", a: "êtes" },
      { t: "choose", q: "To a professor you have just met:", options: ["Tu es de Lyon ?", "Vous êtes de Lyon ?"], a: "Vous êtes de Lyon ?", why: "Use {fr:vous} with adults you do not know, especially in a professional setting." }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "dictee", a: "Je suis chercheur à Lyon." },
      { t: "dictee", a: "Vous êtes d’où ?" },
      { t: "ecoute", say: "Elles sont françaises.", options: ["Elle est française.", "Elles sont françaises."], a: "Elles sont françaises.", why: "{fr:française} and {fr:françaises} sound the same, but {fr:est} /ɛ/ and {fr:sont} /sɔ̃/ do not: the verb carries the plural." },
      { t: "ecoute", say: "Il est anglais.", options: ["Il est anglais.", "Ils sont anglais."], a: "Il est anglais." },
      { t: "choose", q: "To a child:", options: ["Tu es d’où ?", "Vous êtes d’où ?"], a: "Tu es d’où ?", why: "Children are always addressed with {fr:tu}." },
      { t: "translate", q: "We are students.", a: ["Nous sommes étudiants.", "On est étudiants.", "Nous sommes étudiantes.", "On est étudiantes."], why: "In speech, {fr:on est} is the usual form." },
      { t: "translate", q: "She is a doctor.", a: ["Elle est médecin.", "C’est une médecin."], why: "No article before a bare profession." },
      { t: "translate", q: "This is a colleague.", a: ["C’est un collègue.", "C’est une collègue.", "Voici un collègue.", "Voici une collègue."] },
      { t: "spot", q: "Il est un médecin.", a: ["Il est médecin.", "C’est un médecin."], note: "il est + métier, sans article", why: "After {fr:il est}, a profession takes no article; with an article, use {fr:c’est}." },
      { t: "spot", q: "Vous es professeure ?", a: ["Vous êtes professeure ?", "Tu es professeure ?"], note: "vous → êtes" }
    ] }
  ],

  lecture: {
    phrases: [
      { fr: "Bonjour ! Je m’appelle Clara.", en: "Hello! My name is Clara." },
      { fr: "Je suis allemande, de Hambourg.", en: "I am German, from Hamburg." },
      { fr: "Maintenant, je suis à Lyon : je suis ingénieure dans {f:une entreprise française}.", en: "Now I am in Lyon: I am an engineer in a French company." },
      { fr: "Voici Marc, {m:un collègue}.", en: "This is Marc, a colleague." },
      { fr: "Il est français et très sympa.", en: "He is French and very nice." },
      { fr: "C’est aussi {m:un ami}.", en: "He is also a friend." },
      { fr: "Marc et moi, on est souvent au café ensemble.", en: "Marc and I are often at the café together." },
      { fr: "Et vous, vous‿êtes d’où ?", en: "And you, where are you from?" }
    ],
    notes: [
      { label: "voici", html: "{fr:voici} presents someone or something: <em>here is, this is</em>. {fr:voici Marc}: this is Marc." },
      { label: "sympa", html: "{fr:sympa} is short for {fr:sympathique}: nice, friendly. Same form for a man or a woman." }
    ]
  },

  vocabulaire: [
    { fr: "je m’appelle", en: "my name is" },
    { fr: "bonjour", en: "hello, good morning" },
    { fr: "monsieur", en: "Mr, sir" },
    { fr: "madame", en: "Mrs, Ms, madam" },
    { fr: "français, française", en: "French" },
    { fr: "chinois, chinoise", en: "Chinese" },
    { fr: "allemand, allemande", en: "German" },
    { fr: "américain, américaine", en: "American" },
    { fr: "anglais, anglaise", en: "English" },
    { fr: "{m:un étudiant}, {f:une étudiante}", en: "student" },
    { fr: "{m:un chercheur}, {f:une chercheuse}", en: "researcher" },
    { fr: "{m:un médecin}", en: "doctor" },
    { fr: "{m:un ingénieur}, {f:une ingénieure}", en: "engineer" },
    { fr: "{m:un professeur}, {f:une professeure}", en: "teacher, professor" },
    { fr: "{m:un collègue}, {f:une collègue}", en: "colleague" },
    { fr: "{m:un ami}, {f:une amie}", en: "friend" },
    { fr: "d’où ?", en: "from where?" },
    { fr: "sympa", en: "nice, friendly" }
  ],

  lexique: [
    ["sophie", "Sophie", "prénom", "f", "", "(a first name)", "", "/sɔfi/"],
    ["chercheur", "un chercheur", "nom", "m", "", "researcher", "Feminine: une chercheuse.", "/ʃɛʁʃœʁ/"],
    ["chercheuse", "une chercheuse", "nom", "f", "", "researcher (woman)", "Bare after être: je suis chercheuse.", "/ʃɛʁʃøz/"],
    ["université", "une université", "nom", "f", "", "university", "Nouns in -té are almost all feminine.", "/ynivɛʁsite/"],
    ["lyon", "Lyon", "nom de ville", "", "", "Lyon", "", "/ljɔ̃/"],
    ["berlin", "Berlin", "nom de ville", "", "", "Berlin", "", "/bɛʁlɛ̃/"],
    ["hambourg", "Hambourg", "nom de ville", "", "", "Hamburg", "Many foreign cities have French names: Londres, Pékin.", "/ɑ̃buʁ/"],
    ["allemand", "allemand", "adjectif ou nom", "m", "masculin singulier", "German", "The final d is silent: /almɑ̃/. The person: un Allemand. The language: l’allemand.", "/almɑ̃/"],
    ["allemande", "allemand", "adjectif ou nom", "f", "féminin singulier", "German", "The d is heard: /almɑ̃d/.", "/almɑ̃d/"],
    ["médecin", "un médecin", "nom", "m", "", "doctor", "Also used for women: elle est médecin, une médecin.", "/medsɛ̃/"],
    ["collègue", "un, une collègue", "nom", "", "", "colleague", "Same form for both genders; the article shows which.", "/kɔlɛɡ/"],
    ["ingénieur", "un ingénieur", "nom", "m", "", "engineer", "Feminine: une ingénieure, same pronunciation.", "/ɛ̃ʒenjœʁ/"],
    ["ingénieure", "une ingénieure", "nom", "f", "", "engineer (woman)", "Pronounced like ingénieur: /ɛ̃ʒenjœʁ/.", "/ɛ̃ʒenjœʁ/"],
    ["étudiant", "un étudiant", "nom ou adjectif", "m", "masculin singulier", "student", "The t is silent: /etydjɑ̃/.", "/etydjɑ̃/"],
    ["étudiante", "une étudiante", "nom ou adjectif", "f", "féminin singulier", "student (woman)", "The t is heard: /etydjɑ̃t/.", "/etydjɑ̃t/"],
    ["étudiants", "un étudiant", "nom", "m", "pluriel", "students", "The plural s is silent: sounds like étudiant.", "/etydjɑ̃/"],
    ["leroy", "Leroy", "nom de famille", "", "", "(a surname)", "", "/ləʁwa/"],
    ["professeur", "un professeur", "nom", "m", "", "teacher, professor", "Spoken: le prof.", "/pʁɔfɛsœʁ/"],
    ["professeure", "une professeure", "nom", "f", "", "teacher, professor (woman)", "Pronounced like professeur. Spoken: la prof.", "/pʁɔfɛsœʁ/"],
    ["anglais", "anglais", "adjectif ou nom", "m", "masculin", "English", "The s is silent: /ɑ̃ɡlɛ/. The language: l’anglais.", "/ɑ̃ɡlɛ/"],
    ["anglaise", "anglais", "adjectif ou nom", "f", "féminin singulier", "English", "The s is heard as z: /ɑ̃ɡlɛz/.", "/ɑ̃ɡlɛz/"],
    ["américaines", "américain", "adjectif ou nom", "f", "féminin pluriel", "American", "Sounds like américaine: the plural s is silent.", "/ameʁikɛn/"],
    ["française", "français", "adjectif ou nom", "f", "féminin singulier", "French", "The s is heard as z: /fʁɑ̃sɛz/. The person: une Française.", "/fʁɑ̃sɛz/"],
    ["françaises", "français", "adjectif ou nom", "f", "féminin pluriel", "French", "Sounds like française: the plural s is silent.", "/fʁɑ̃sɛz/"],
    ["chinois", "chinois", "adjectif ou nom", "m", "masculin", "Chinese", "/ʃinwa/. The language: le chinois.", "/ʃinwa/"],
    ["chinoise", "chinois", "adjectif ou nom", "f", "féminin singulier", "Chinese", "/ʃinwaz/. The person: une Chinoise.", "/ʃinwaz/"],
    ["marie", "Marie", "prénom", "f", "", "(a first name)", "", "/maʁi/"],
    ["sympa", "sympa", "adjectif", "", "même forme au féminin", "nice, friendly", "Short for sympathique. Plural: sympas.", "/sɛ̃pa/"],
    ["sympathique", "sympathique", "adjectif", "", "", "nice, friendly", "Faux ami: sympathetic is compatissant.", "/sɛ̃patik/"],
    ["adjectif", "un adjectif", "nom", "m", "", "adjective", "", "/adʒɛktif/"],
    ["article", "un article", "nom", "m", "", "article", "pas d’article: no article.", "/aʁtikl/"],
    ["majuscule", "une majuscule", "nom", "f", "", "capital letter", "Lower case: une minuscule.", "/maʒyskyl/"],
    ["consonne", "une consonne", "nom", "f", "", "consonant", "", "/kɔ̃sɔn/"],
    ["familier", "familier", "adjectif", "m", "masculin singulier", "informal, colloquial", "", "/familje/"],
    ["t'", "tu", "pronom sujet", "", "élidé, oral familier", "you", "Only in casual speech and messages: t’es où ? Standard writing keeps tu es.", "/t/"],
    ["clara", "Clara", "prénom", "f", "", "(a first name)", "", "/klaʁa/"],
    ["maintenant", "maintenant", "adverbe", "", "", "now", "", "/mɛ̃tnɑ̃/"],
    ["entreprise", "une entreprise", "nom", "f", "", "company, business", "", "/ɑ̃tʁəpʁiz/"],
    ["marc", "Marc", "prénom", "m", "", "(a first name)", "The c is pronounced: /maʁk/.", "/maʁk/"],
    ["ensemble", "ensemble", "adverbe", "", "", "together", "", "/ɑ̃sɑ̃bl/"],
  ]
});
