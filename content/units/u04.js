registerUnit({
  id: "u04",
  title: "Poser des questions",
  objectif: "Ask and answer everyday questions, from casual speech to formal writing.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "A yes/no question can be built in three ways. The choice is a matter of register, not of meaning: all three ask exactly the same thing." },
    { table: {
        head: ["registre", "question", "note"],
        kinds: ["en", "fr", "en"],
        rows: [
          ["spoken", "Tu parles français ?", "the voice rises"],
          ["neutral", "Est-ce que tu parles français ?", "est-ce que in front"],
          ["formal", "Parles-tu français ?", "verb and pronoun swap"]
        ] },
      marge: "même sens,<br>trois registres" },
    { p: "Inversion puts the subject pronoun after the verb, joined by a hyphen: {fr:Vous parlez} becomes {fr:Parlez-vous ?} When the verb ends in a vowel and the pronoun starts with one ({fr:il}, {fr:elle}, {fr:on}), French slips in a <em>t</em>: {fr:Parle-t-il français ?}, {fr:A-t-elle un vélo ?} This <em>-t-</em> is borrowed from verbs that still end in <em>t</em>, where that letter is heard in inversion: {fr:est-il} {ipa:/ɛ{e:t}il/}, {fr:sont-ils} {ipa:/sɔ̃{e:t}il/}. It is the old third-person ending, which <em>-er</em> verbs and {fr:a} had lost." },
    { p: "With {fr:je}, inversion is rare and formal ({fr:suis-je}); in everyday French, use {fr:est-ce que} instead. At this level, invert only with a pronoun subject." },
    { p: "A question word asks for information instead of yes or no. It sits in one of three places, matching the three registers:" },
    { table: {
        head: ["à l’oral", "neutre", "soutenu"],
        kinds: ["fr", "fr", "fr"],
        rows: [
          ["Tu habites où ?", "Où est-ce que tu habites ?", "Où habites-tu ?"],
          ["Tu arrives quand ?", "Quand‿est-ce que tu arrives ?", "Quand arrives-tu ?"],
          ["Tu cherches quoi ?", "Qu’est-ce que tu cherches ?", "Que cherches-tu ?"],
          ["Elle s’appelle comment ?", "Comment est-ce qu’elle s’appelle ?", "Comment s’appelle-t-elle ?"]
        ] },
      marge: "où ? quand ?<br>quoi ? comment ?" },
    { list: [
        "{fr:où} where, {fr:quand} when, {fr:comment} how, {fr:pourquoi} why (the answer starts with {fr:parce que}, because)",
        "{fr:qui} who, {fr:combien} how much, how many ({fr:combien de} + noun: {fr:combien d’enfants ?})",
        "<em>what</em> has two forms: {fr:que} at the front ({fr:qu’est-ce que}, or {fr:que} + inversion), {fr:quoi} at the end or alone ({fr:C’est quoi ?}, {fr:Quoi ?})"
      ] },
    { p: "{fr:quel} (which, what) agrees like an adjective with the noun it asks about, whether it stands right before that noun or before {fr:être}. Four spellings, one sound before a consonant:" },
    { table: {
        head: ["", "singulier", "pluriel", "à l’oral"],
        kinds: ["en", "fr", "fr", "ipa"],
        rows: [
          ["masculine", "{m:quel livre}", "{m:quel{s:s} livre{s:s}}", "/kɛl/"],
          ["feminine", "{f:quell{s:e} heure}", "{f:quell{s:es} question{s:s}}", "/kɛl/"]
        ] },
      marge: "4 écritures,<br>1 seul son" },
    { p: "Answers follow a three-way system too. {fr:oui} says yes to a positive question and {fr:non} says no. To contradict a <em>negative</em> question, French uses {fr:si}: {fr:Tu ne parles pas anglais ? Si, je parle anglais.} {fr:Non} agrees with the negative: {fr:Non, je ne parle pas anglais.}" }
  ],

  oral: [
    { label: "à l’oral", html: "Everyday speech also puts the question word first without inversion or {fr:est-ce que}: {fr:Où tu habites ?} It is common and natural, but informal: avoid it in writing." },
    { label: "intonation", html: "In speech, a rising voice at the end is all it takes: {fr:Tu parles français ?} differs from the statement only in its melody. It is the most common question in conversation." },
    { label: "est-ce que", html: "{fr:est-ce que} is said in one breath, {ipa:/ɛskə/}, and {fr:qu’est-ce que} as {ipa:/kɛskə/}. Before a vowel it elides: {fr:est-ce qu’il} {ipa:/ɛskil/}. After {fr:quand}, the <em>d</em> is linked as <em>t</em>: {fr:quand‿est-ce que} {ipa:/kɑ̃{e:t}ɛskə/}." },
    { label: "liaison", html: "In inversion, a final written <em>t</em> is heard before the pronoun: {fr:est-il} {ipa:/ɛ{e:t}il/}, {fr:sont-ils} {ipa:/sɔ̃{e:t}il/}. And {fr:quels‿amis} {ipa:/kɛl{e:z}ami/}: the liaison is the only audible plural." },
    { label: "ancrage", html: "Mandarin leaves question words in place: 你住哪儿？ matches spoken {fr:Tu habites où ?} word for word. And 吗 turns a statement into a yes/no question the way {fr:est-ce que} does, only from the other end of the sentence." },
    { label: "ancrage", html: "German normally inverts in a question: <em>Sprichst du Deutsch?</em>, <em>Wo wohnst du?</em> French inversion is the same move, but formal in French and everyday in German. As an answer to a negative question, German <em>doch</em> is exactly French {fr:si}." }
  ],

  exemples: [
    { fr: "Tu habites où ?", en: "Where do you live?" },
    { fr: "Est-ce que vous‿avez {f:une chambre} pour ce soir ?", en: "Do you have a room for tonight?" },
    { fr: "Qu’est-ce que tu cherches ?", en: "What are you looking for?" },
    { fr: "Parle-{e:t}-il français ?", en: "Does he speak French?", note: "voyelle + voyelle<br>→ -t-" },
    { fr: "{f:Quelle heure} e{s:s}{e:t}-il ?", en: "What time is it?" },
    { fr: "Pourquoi est-ce que tu étudies {m:le français} ?", en: "Why are you studying French?" },
    { fr: "Parce que j’aime {f:la langue}.", en: "Because I like the language." },
    { fr: "C’est combien ?", en: "How much is it?" },
    { fr: "Tu n’as pas faim ? Si, un peu.", en: "Aren’t you hungry? Yes, a little.", note: "si, pas oui" },
    { fr: "Vous‿êtes de {f:quelle ville} ?", en: "Which city are you from?" }
  ],

  pieges: [
    { label: "piège", html: "No inversion with a noun subject at this level: <em>*Parle Marie français ?</em> is wrong. Use {fr:Est-ce que Marie parle français ?} The formal written pattern names the subject first and repeats it as a pronoun, {fr:Marie parle-t-elle français ?} (recognise it, do not produce it yet)." },
    { label: "piège", html: "{fr:quoi} never starts a full question: <em>*Quoi tu cherches ?</em> is wrong. Put {fr:quoi} at the end ({fr:Tu cherches quoi ?}) or start with {fr:qu’est-ce que}." },
    { label: "piège", html: "English <em>what</em> splits in two. Before a noun or with {fr:être}, French uses {fr:quel}: {fr:Quelle est la réponse ?} (What is the answer?). Before a subject and verb, {fr:qu’est-ce que}: {fr:Qu’est-ce que tu cherches ?}" },
    { label: "piège", html: "{fr:pourquoi} asks, {fr:parce que} answers. Before a vowel, {fr:parce que} becomes <em>parce qu’</em>: {fr:parce qu’il travaille}." }
  ],

  exercices: [
    { titre: "Formes", seance: 2, items: [
      { t: "transform", q: "Tu parles anglais ?", consigne: "Avec est-ce que", a: ["Est-ce que tu parles anglais ?"] },
      { t: "transform", q: "Vous habitez à Paris ?", consigne: "Avec l’inversion", a: ["Habitez-vous à Paris ?"] },
      { t: "transform", q: "Il travaille ici ?", consigne: "Avec l’inversion", a: ["Travaille-t-il ici ?"], note: "voyelle + voyelle → -t-", why: "{fr:travaille} ends in a vowel and {fr:il} starts with one, so French inserts <em>-t-</em>." },
      { t: "transform", q: "Elle a un vélo ?", consigne: "Avec l’inversion", a: ["A-t-elle un vélo ?"], note: "a-t-elle" },
      { t: "transform", q: "Où est-ce que vous travaillez ?", consigne: "Avec l’inversion", a: ["Où travaillez-vous ?"], why: "Drop {fr:est-ce que} and swap verb and pronoun." },
      { t: "choose", q: "___ est-ce que tu habites ? (À Lyon.)", options: ["Où", "Quand", "Comment"], a: "Où" },
      { t: "choose", q: "___ tu cherches ? (La clé.)", options: ["Qu’est-ce que", "Quoi", "Que"], a: "Qu’est-ce que", why: "{fr:quoi} never starts a full question, and {fr:que} needs inversion ({fr:Que cherches-tu ?})." },
      { t: "choose", q: "___ heure est-il ?", options: ["Quel", "Quelle", "Quels"], a: "Quelle", why: "{fr:heure} is feminine. {fr:quel} and {fr:quelle} sound the same, /kɛl/: only the spelling shows the gender." },
      { t: "choose", q: "Tu n’as pas faim ? ___, j’ai faim.", options: ["Oui", "Si", "Non"], a: "Si", why: "Yes to a negative question is {fr:si}." },
      { t: "cloze", q: "___ d’enfants est-ce que vous avez ?", hint: "how many", a: "Combien" }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "dictee", a: "Est-ce que tu parles français ?" },
      { t: "dictee", a: "Où habitez-vous ?" },
      { t: "ecoute", say: "Qu’est-ce que tu cherches ?", options: ["Est-ce que tu cherches ?", "Qu’est-ce que tu cherches ?"], a: "Qu’est-ce que tu cherches ?", why: "{fr:qu’est-ce que} starts with /k/: /kɛskə/." },
      { t: "ecoute", say: "Quels amis ?", options: ["Quel ami ?", "Quels amis ?"], a: "Quels amis ?", why: "Only the liaison /z/ tells the plural apart: /kɛlzami/." },
      { t: "translate", q: "Where do you live? (informal)", a: ["Tu habites où ?", "Où est-ce que tu habites ?", "Où habites-tu ?", "Où tu habites ?"] },
      { t: "translate", q: "Do you speak French? (formal)", a: ["Parlez-vous français ?", "Est-ce que vous parlez français ?", "Vous parlez français ?"] },
      { t: "translate", q: "Why are you studying French? (informal)", a: ["Pourquoi est-ce que tu étudies le français ?", "Pourquoi tu étudies le français ?", "Pourquoi étudies-tu le français ?", "Tu étudies le français pourquoi ?"] },
      { t: "translate", q: "What time is it?", a: ["Quelle heure est-il ?", "Il est quelle heure ?", "Quelle heure il est ?"], why: "{fr:Il est quelle heure ?} is the spoken version." },
      { t: "spot", q: "Parle-il français ?", a: ["Parle-t-il français ?"], note: "voyelle + voyelle → -t-" },
      { t: "spot", q: "Quoi tu cherches ?", a: ["Qu’est-ce que tu cherches ?", "Tu cherches quoi ?", "Que cherches-tu ?"], note: "quoi : à la fin" }
    ] }
  ],

  lecture: {
    dialogue: true,
    phrases: [
      { fr: "Inès : Bonjour, vous‿êtes Thomas ?", en: "Inès: Hello, are you Thomas?" },
      { fr: "Thomas : Oui, c’est moi. Et vous, comment vous‿appelez-vous ?", en: "Thomas: Yes, that’s me. And you, what is your name?" },
      { fr: "Inès : Je m’appelle Inès. Vous habitez où ?", en: "Inès: My name is Inès. Where do you live?" },
      { fr: "Thomas : À Lyon, près de {f:la gare}. Et vous ?", en: "Thomas: In Lyon, near the station. And you?" },
      { fr: "Inès : Moi, j’habite à Paris, mais je travaille ici.", en: "Inès: I live in Paris, but I work here." },
      { fr: "Thomas : Pourquoi à Lyon ?", en: "Thomas: Why in Lyon?" },
      { fr: "Inès : Parce que j’aime {f:la ville}. Vous n’aimez pas Lyon ?", en: "Inès: Because I like the city. Don’t you like Lyon?" },
      { fr: "Thomas : Si, beaucoup !", en: "Thomas: Yes, very much!" }
    ],
    notes: [
      { label: "si", html: "Thomas answers a negative question ({fr:Vous n’aimez pas Lyon ?}) with {fr:si}: yes, I do." },
      { label: "vous", html: "Two strangers meeting say {fr:vous}. {fr:Comment vous‿appelez-vous ?} is the formal way to ask a name." }
    ]
  },

  vocabulaire: [
    { fr: "où", en: "where" },
    { fr: "quand", en: "when" },
    { fr: "comment", en: "how" },
    { fr: "pourquoi", en: "why" },
    { fr: "parce que", en: "because" },
    { fr: "qui", en: "who" },
    { fr: "combien", en: "how much, how many" },
    { fr: "qu’est-ce que", en: "what (at the front)" },
    { fr: "quoi", en: "what (at the end, or alone)" },
    { fr: "quel, quelle", en: "which, what" },
    { fr: "si", en: "yes (to a negative question)" },
    { fr: "{f:l’heure}", en: "hour, time (f)" },
    { fr: "{m:le prix}", en: "price" },
    { fr: "{m:le nom}", en: "name" },
    { fr: "{m:le numéro}", en: "number (phone, house)" },
    { fr: "{f:l’adresse}", en: "address (f)" },
    { fr: "{f:la question}", en: "question" },
    { fr: "{f:la réponse}", en: "answer" }
  ],

  lexique: [
    ["poser", "poser", "verbe en -er", "", "infinitif", "to put; to ask (a question)", "poser une question: to ask a question.", "/poze/"],
    ["travaillez", "travailler", "verbe en -er", "", "présent : vous", "work", "", "/tʁavaje/"],
    ["est-ce", "est-ce que", "locution interrogative", "", "", "(turns a statement into a question)", "est-ce que /ɛskə/, literally «is it that». Put it in front of any statement to ask a yes/no question.", "/ɛs/"],
    ["quand", "quand", "adverbe interrogatif", "", "", "when", "In quand‿est-ce que, the d is linked as t: /kɑ̃tɛskə/.", "/kɑ̃/"],
    ["pourquoi", "pourquoi", "adverbe interrogatif", "", "", "why", "The answer starts with parce que.", "/puʁkwa/"],
    ["parce", "parce que", "conjonction", "", "", "because", "Always followed by que: parce que, or parce qu’ before a vowel.", "/paʁs/"],
    ["combien", "combien", "adverbe interrogatif", "", "", "how much, how many", "combien de + noun: combien d’enfants ? C’est combien ? How much is it?", "/kɔ̃bjɛ̃/"],
    ["quoi", "quoi", "pronom interrogatif", "", "", "what", "At the end or alone: Tu cherches quoi ? C’est quoi ? Never at the start of a full question.", "/kwa/"],
    ["quel", "quel", "adjectif interrogatif", "m", "masculin singulier", "which, what", "Agrees with its noun: quel, quelle, quels, quelles, all /kɛl/ before a consonant.", "/kɛl/"],
    ["quelle", "quel", "adjectif interrogatif", "f", "féminin singulier", "which, what", "Same sound as quel: /kɛl/.", "/kɛl/"],
    ["quels", "quel", "adjectif interrogatif", "m", "masculin pluriel", "which, what", "Liaison before a vowel: quels‿amis /kɛlz‿ami/.", "/kɛl/"],
    ["quelles", "quel", "adjectif interrogatif", "f", "féminin pluriel", "which, what", "", "/kɛl/"],
    ["si", "si", "adverbe", "", "", "yes (to a negative question)", "Tu n’as pas faim ? Si ! Like German doch. Also means if (later units).", "/si/"],
    ["intonation", "l’intonation (f)", "nom", "f", "", "intonation, the melody of speech", "A rising melody alone can make a question.", "/ɛ̃tɔnasjɔ̃/"],
    ["même", "même", "adjectif ou adverbe", "", "", "same; even", "le même sens: the same meaning.", "/mɛm/"],
    ["sens", "le sens", "nom", "m", "", "meaning, sense", "The final s is pronounced: /sɑ̃s/.", "/sɑ̃s/"],
    ["registres", "un registre", "nom", "m", "pluriel", "registers (levels of formality)", "", "/ʁəʒistʁ/"],
    ["écritures", "une écriture", "nom", "f", "pluriel", "spellings, ways of writing", "Also handwriting.", "/ekʁityʁ/"],
    ["parles-tu", "parler", "verbe en -er", "", "présent : tu, inversion", "do you speak?", "Formal question: verb and pronoun swap, joined by a hyphen.", "/paʁlty/"],
    ["parlez-vous", "parler", "verbe en -er", "", "présent : vous, inversion", "do you speak?", "", "/paʁlevu/"],
    ["parle-t-il", "parler", "verbe en -er", "", "présent : il, inversion", "does he speak?", "The -t- keeps two vowels apart: /paʁlətil/.", "/paʁltil/"],
    ["parle-t-elle", "parler", "verbe en -er", "", "présent : elle, inversion", "does she speak?", "Marie parle-t-elle… ? names the subject first, then repeats it as a pronoun.", "/paʁltɛl/"],
    ["a-t-elle", "avoir", "verbe irrégulier", "", "présent : elle, inversion", "does she have?", "/atɛl/.", "/atɛl/"],
    ["est-il", "être", "verbe irrégulier", "", "présent : il, inversion", "is he? is it?", "The written t is heard: /ɛtil/. Quelle heure est-il ? What time is it?", "/ɛtil/"],
    ["sont-ils", "être", "verbe irrégulier", "", "présent : ils, inversion", "are they?", "The t is heard: /sɔ̃til/.", "/sɔ̃til/"],
    ["suis-je", "être", "verbe irrégulier", "", "présent : je, inversion", "am I?", "Rare and formal. With je, use est-ce que.", "/sɥiʒ/"],
    ["habites", "habiter", "verbe en -er", "", "présent : tu", "live", "The -es is silent.", "/abit/"],
    ["habites-tu", "habiter", "verbe en -er", "", "présent : tu, inversion", "do you live?", "", "/abitty/"],
    ["habitez", "habiter", "verbe en -er", "", "présent : vous", "live", "", "/abite/"],
    ["arrives", "arriver", "verbe en -er", "", "présent : tu", "arrive", "", "/aʁiv/"],
    ["arrives-tu", "arriver", "verbe en -er", "", "présent : tu, inversion", "do you arrive?", "", "/aʁivty/"],
    ["cherches", "chercher", "verbe en -er", "", "présent : tu", "look for", "No preposition: chercher la clé.", "/ʃɛʁʃ/"],
    ["cherches-tu", "chercher", "verbe en -er", "", "présent : tu, inversion", "are you looking for?", "", "/ʃɛʁʃty/"],
    ["appelle-t-elle", "s’appeler", "verbe pronominal", "", "présent : elle, inversion", "is she called?", "Comment s’appelle-t-elle ? What is her name?", "/apɛltɛl/"],
    ["appelez-vous", "s’appeler", "verbe pronominal", "", "présent : vous, inversion", "are you called?", "Comment vous appelez-vous ? What is your name? (formal). A fixed phrase for now: reflexive verbs come in unit 13.", "/aplevu/"],
    ["étudies", "étudier", "verbe en -er", "", "présent : tu", "study", "", "/etydi/"],
    ["aimez", "aimer", "verbe en -er", "", "présent : vous", "like, love", "", "/eme/"],
    ["langue", "une langue", "nom", "f", "", "language; tongue", "", "/lɑ̃ɡ/"],
    ["peu", "peu", "adverbe", "", "", "little", "un peu: a little.", "/pø/"],
    ["questions", "une question", "nom", "f", "pluriel", "questions", "", "/kɛstjɔ̃/"],
    ["question", "une question", "nom", "f", "", "question", "", "/kɛstjɔ̃/"],
    ["réponse", "une réponse", "nom", "f", "", "answer, reply", "", "/ʁepɔ̃s/"],
    ["prix", "le prix", "nom", "m", "", "price; prize", "The x is silent: /pʁi/. Same form in the plural.", "/pʁi/"],
    ["numéro", "le numéro", "nom", "m", "", "number (phone, house, issue)", "A number in maths is un nombre.", "/nymeʁo/"],
    ["adresse", "l’adresse (f)", "nom", "f", "", "address", "One d in French, two s.", "/adʁɛs/"],
    ["inès", "Inès", "prénom", "f", "", "(a first name)", "The final s is pronounced: /inɛs/.", "/inɛs/"],
    ["thomas", "Thomas", "prénom", "m", "", "(a first name)", "th is just /t/, and the s is silent: /tɔma/.", "/tɔma/"]
  ]
});
