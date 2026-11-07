registerUnit({
  id: "u02",
  title: "Avoir, il y a et la négation",
  objectif: "Say what you have and what there is, and say that something is not so.",
  legend: ["end", "mute", "m", "f"],

  systeme: [
    { p: "{fr:avoir} (to have) is irregular and one of the most frequent verbs in French; later it also builds the past tense (unit 14). Learn its six forms as a block, together with their liaisons." },
    { table: {
        head: ["sujet", "à l’écrit", "à l’oral"],
        kinds: ["fr", "fr", "ipa"],
        rows: [
          ["j’", "ai", "/ʒe/"],
          ["tu", "a{s:s}", "/tya/"],
          ["il, elle, on", "a", "/ila/"],
          ["nous", "av{e:ons}", "/nu{e:z}avɔ̃/"],
          ["vous", "av{e:ez}", "/vu{e:z}ave/"],
          ["ils, elles", "ont", "/il{e:z}ɔ̃/"]
        ] },
      marge: "ils‿ont : z<br>ils sont : s" },
    { p: "Every form of {fr:avoir} starts with a vowel, so every plural pronoun links to it. That liaison is what separates two verbs: {fr:ils‿ont} {ipa:/il{e:z}ɔ̃/} (they have) against {fr:ils sont} {ipa:/ilsɔ̃/} (they are). One sound, /z/ or /s/, carries the whole difference." },
    { p: "{fr:il y a} is a fixed block meaning <em>there is</em> and <em>there are</em>. It never changes for the plural: {fr:il y a un parc}, {fr:il y a deux parcs}." },
    { p: "Negation wraps the conjugated verb: {fr:ne} before it, {fr:pas} after it. Before a vowel {fr:ne} becomes {fr:n’}: {fr:je n’ai pas}, {fr:ce n’est pas}, {fr:il n’y a pas}." },
    { table: {
        head: ["affirmatif", "négatif"],
        kinds: ["fr", "fr"],
        rows: [
          ["J’ai {f:une voiture}.", "Je n’ai pas {b:de} voiture."],
          ["Il y a {m:un parc}.", "Il n’y a pas {b:de} parc."],
          ["Nous avons {m:des enfants}.", "Nous n’avons pas {b:d’}enfants."],
          ["J’ai {m:le livre}.", "Je n’ai pas {b:le} livre."]
        ] },
      marge: "un, une, des<br>→ de après pas" },
    { p: "After a negated {fr:avoir} or {fr:il y a}, you are saying the quantity is zero, so no article counts it: {fr:un}, {fr:une} and {fr:des} all become {fr:de}. The definite articles {fr:le}, {fr:la}, {fr:les} point to a specific thing, not a quantity, so they stay. So does everything after {fr:être}: {fr:c’est un vélo} becomes {fr:ce n’est pas un vélo}, because {fr:être} identifies rather than counts." },
    { p: "Several states that English expresses with <em>be</em> use {fr:avoir} in French: you <em>have</em> hunger, thirst, cold, years." },
    { list: [
        "{fr:avoir faim}, {fr:avoir soif}: to be hungry, thirsty",
        "{fr:avoir froid}, {fr:avoir chaud}: to be cold, hot (a person)",
        "{fr:avoir raison}, {fr:avoir tort}: to be right, wrong",
        "{fr:avoir trente ans}: to be thirty"
      ] }
  ],

  oral: [
    { label: "à l’oral", html: "In everyday speech the {fr:ne} usually disappears: {fr:J’ai pas de voiture}, {fr:Il y a pas de parc}. Recognise it when you hear it, since {fr:pas} alone carries the negation. Write the full {fr:ne ... pas}." },
    { label: "liaison", html: "{fr:nous‿avons} {ipa:/nu{e:z}avɔ̃/}, {fr:vous‿avez} {ipa:/vu{e:z}ave/}, {fr:ils‿ont} {ipa:/il{e:z}ɔ̃/}: the silent <em>s</em> of the pronoun is pronounced /z/ before every form of {fr:avoir}." },
    { label: "élision", html: "{fr:je} + {fr:ai} gives {fr:j’ai} {ipa:/ʒe/}; {fr:ne} + {fr:a} gives {fr:n’a}; {fr:de} + {fr:enfants} gives {fr:d’enfants}. The vowel drops in writing and in speech." },
    { label: "ancrage", html: "Mandarin uses one verb, 有, for both: {fr:j’ai un chat} 我有一只猫, {fr:il y a un parc} 有一个公园. French splits it into {fr:avoir} and {fr:il y a}. The negation lines up: 我没有猫 drops 一只 just as {fr:je n’ai pas de chat} drops the article." },
    { label: "ancrage", html: "English and German give age with <em>be</em> (<em>I am 30</em>, <em>ich bin 30</em>). French counts the years you have: {fr:j’ai trente ans}." }
  ],

  exemples: [
    { fr: "J’ai {m:un frère} et {f:une sœur}.", en: "I have a brother and a sister." },
    { fr: "Tu as {m:un vélo} ?", en: "Do you have a bike?" },
    { fr: "Il{e:s}‿ont {m:un chat} et {m:un chien}.", en: "They have a cat and a dog.", note: "ils‿ont : z" },
    { fr: "Il y a {m:un parc} près de {m:l’appartement}.", en: "There is a park near the apartment." },
    { fr: "Il n’y a pas de gare dans {m:le quartier}.", en: "There is no station in the neighbourhood." },
    { fr: "Je n’ai pas de voiture.", en: "I don’t have a car." },
    { fr: "Nou{e:s}‿avons faim !", en: "We’re hungry!" },
    { fr: "Elle a vingt-cinq ans.", en: "She is twenty-five." },
    { fr: "Ce n’est pas {m:un restaurant}, c’est {m:un magasin}.", en: "It’s not a restaurant, it’s a shop." }
  ],

  pieges: [
    { label: "pas de", html: "In a plain negative, {fr:un}, {fr:une} and {fr:des} become {fr:de}: {fr:je n’ai pas de chat}. <em>Je n’ai pas un chat</em> is not a plain negative: it stresses <em>not a single cat</em>, or sets up a contrast (<em>je n’ai pas un chat, j’ai un chien</em>)." },
    { label: "être", html: "{fr:être} keeps its article: {fr:c’est un parc} becomes {fr:ce n’est pas un parc}. The {fr:de} rule is for what you have (later, the object of any verb) and for what there is, not for being." },
    { label: "l’âge", html: "Age takes {fr:avoir}, and {fr:ans} is never left out: {fr:j’ai vingt ans}. <em>Je suis vingt</em> is wrong." },
    { label: "il y a", html: "{fr:il y a} never changes for the plural: {fr:il y a deux parcs}. <em>Il y ont</em> does not exist." },
    { label: "ont, sont", html: "{fr:ils‿ont} {ipa:/ilzɔ̃/} (have) and {fr:ils sont} {ipa:/ilsɔ̃/} (are) differ by one sound. Listen for the buzz of /z/." },
    { label: "chaud", html: "{fr:j’ai chaud} is about your body; {fr:c’est chaud} is about a thing. <em>Je suis chaud</em> is slang for <em>I’m up for it</em> (and can sound sexual), so say {fr:j’ai chaud} when you feel hot." }
  ],

  exercices: [
    { titre: "Formes", seance: 2, items: [
      { t: "form", sujet: "nous", verbe: "avoir", a: "avons", note: "nous‿avons" },
      { t: "form", sujet: "ils", verbe: "avoir", a: "ont", note: "ils‿ont : z", why: "{fr:ils‿ont} is <em>they have</em>; {fr:ils sont} is <em>they are</em>." },
      { t: "form", sujet: "elle", verbe: "avoir", a: "a" },
      { t: "form", sujet: "vous", verbe: "avoir", a: "avez" },
      { t: "transform", q: "J’ai un vélo.", consigne: "À la forme négative", a: ["Je n’ai pas de vélo."], note: "un → de" },
      { t: "transform", q: "Il y a une gare.", consigne: "À la forme négative", a: ["Il n’y a pas de gare."], note: "une → de" },
      { t: "transform", q: "C’est un chat.", consigne: "À la forme négative", a: ["Ce n’est pas un chat."], note: "être : un reste", why: "After {fr:être} the article stays: {fr:ce n’est pas un chat}." },
      { t: "cloze", q: "Nous n’avons pas ___ chien.", a: "de", note: "pas de" },
      { t: "cloze", q: "Je n’ai pas ___ livre de Léa.", hint: "le, la ou de ? (Léa’s book)", a: "le", why: "A specific book: the definite article {fr:le} stays after the negation." },
      { t: "choose", q: "Ils ___ deux enfants.", options: ["ont", "sont"], a: "ont", why: "Having children: {fr:avoir}." }
    ] },
    { titre: "Écoute et production", seance: 3, items: [
      { t: "ecoute", say: "ils ont", options: ["ils ont", "ils sont"], a: "ils ont", why: "You hear /z/: {fr:ils‿ont}, they have." },
      { t: "ecoute", say: "ils sont", options: ["ils ont", "ils sont"], a: "ils sont", why: "You hear /s/: {fr:ils sont}, they are." },
      { t: "ecoute", say: "Il y a un chat.", options: ["Il a un chat.", "Il y a un chat."], a: "Il y a un chat.", why: "{fr:il y a} has an extra /j/ sound: /ilja/. {fr:il a} is /ila/." },
      { t: "dictee", a: "Nous avons un jardin." },
      { t: "dictee", a: "Il n’y a pas de restaurant ici." },
      { t: "translate", q: "I am twenty-five.", a: ["J’ai vingt-cinq ans.", "J’ai 25 ans."], note: "l’âge : avoir" },
      { t: "translate", q: "There is no station.", a: ["Il n’y a pas de gare."] },
      { t: "translate", q: "We are hungry.", a: ["Nous avons faim.", "On a faim."], why: "Hunger is something you have: {fr:avoir faim}." },
      { t: "spot", q: "Je n’ai pas une voiture.", a: ["Je n’ai pas de voiture."], note: "pas une → pas de" },
      { t: "spot", q: "Je suis trente ans.", a: ["J’ai trente ans."], note: "l’âge : avoir" }
    ] }
  ],

  lecture: {
    phrases: [
      { fr: "Karim a {m:un appartement} à Lille.", en: "Karim has an apartment in Lille." },
      { fr: "Il y a {f:une chambre}, {f:une cuisine} et {f:une salle de bains}, mais il n’y a pas de jardin.", en: "There is a bedroom, a kitchen and a bathroom, but there is no garden." },
      { fr: "Dans {m:le quartier}, il y a {m:un parc}, {m:des magasins} et {m:un restaurant}.", en: "In the neighbourhood, there is a park, some shops and a restaurant." },
      { fr: "Karim n’a pas de voiture : il a {m:un vélo}.", en: "Karim doesn’t have a car: he has a bike." },
      { fr: "Il a aussi {m:un chat}, Moka, et Moka a toujours faim !", en: "He also has a cat, Moka, and Moka is always hungry!" },
      { fr: "Et vous, vous avez {m:un jardin} ?", en: "And you, do you have a garden?" }
    ],
    notes: [
      { label: "pas de", html: "{fr:il n’y a pas de jardin}: zero gardens, so no article, only {fr:de}." },
      { label: "salle de bains", html: "{fr:une salle de bains} is the bathroom. The toilet is often a separate room: {fr:les toilettes}, always plural." }
    ]
  },

  vocabulaire: [
    { fr: "{m:un appartement}", en: "apartment, flat" },
    { fr: "{f:une chambre}", en: "bedroom" },
    { fr: "{f:une cuisine}", en: "kitchen; cooking" },
    { fr: "{m:un jardin}", en: "garden" },
    { fr: "{m:un quartier}", en: "neighbourhood" },
    { fr: "{m:un parc}", en: "park" },
    { fr: "{m:un magasin}", en: "shop" },
    { fr: "{m:un restaurant}", en: "restaurant" },
    { fr: "{m:un vélo}", en: "bike" },
    { fr: "{f:une voiture}", en: "car" },
    { fr: "{m:un frère}", en: "brother" },
    { fr: "{f:une sœur}", en: "sister" },
    { fr: "{m:un enfant}", en: "child" },
    { fr: "{m:un chat}", en: "cat" },
    { fr: "{m:un chien}", en: "dog" },
    { fr: "avoir faim", en: "to be hungry" },
    { fr: "avoir soif", en: "to be thirsty" },
    { fr: "avoir ... ans", en: "to be ... years old" }
  ],

  lexique: [
    ["parc", "un parc", "nom", "m", "", "park", "The c is pronounced: /paʁk/.", "/paʁk/"],
    ["parcs", "un parc", "nom", "m", "pluriel", "parks", "The plural -s is silent: /paʁk/.", "/paʁk/"],
    ["après", "après", "préposition", "", "", "after", "", "/apʁɛ/"],
    ["faim", "la faim", "nom", "f", "", "hunger", "avoir faim: to be hungry.", "/fɛ̃/"],
    ["soif", "la soif", "nom", "f", "", "thirst", "avoir soif: to be thirsty.", "/swaf/"],
    ["froid", "froid", "adjectif ou nom", "m", "", "cold", "avoir froid: to feel cold (a person). il fait froid: it is cold (weather).", "/fʁwa/"],
    ["chaud", "chaud", "adjectif ou nom", "m", "", "hot, warm", "avoir chaud: to feel hot (a person). c’est chaud: it is hot (a thing).", "/ʃo/"],
    ["raison", "la raison", "nom", "f", "", "reason", "avoir raison: to be right.", "/ʁɛzɔ̃/"],
    ["tort", "le tort", "nom", "m", "", "wrong, fault", "avoir tort: to be wrong.", "/tɔʁ/"],
    ["trente", "trente", "nombre", "", "", "thirty", "", "/tʁɑ̃t/"],
    ["ans", "un an", "nom", "m", "pluriel", "years", "avoir trente ans: to be thirty. Never left out.", "/ɑ̃/"],
    ["vingt", "vingt", "nombre", "", "", "twenty", "On its own /vɛ̃/: the g and t are silent.", "/vɛ̃/"],
    ["vingt-cinq", "vingt-cinq", "nombre", "", "", "twenty-five", "The t of vingt is heard here: /vɛ̃tsɛ̃k/.", "/vɛ̃tsɛ̃k/"],
    ["vélo", "un vélo", "nom", "m", "", "bike", "Short for vélocipède.", "/velo/"],
    ["chien", "un chien", "nom", "m", "", "dog", "", "/ʃjɛ̃/"],
    ["frère", "un frère", "nom", "m", "", "brother", "", "/fʁɛʁ/"],
    ["sœur", "une sœur", "nom", "f", "", "sister", "œ is o and e joined into one letter, read /œ/: /sœʁ/.", "/sœʁ/"],
    ["appartement", "un appartement", "nom", "m", "", "apartment, flat", "", "/apaʁtəmɑ̃/"],
    ["quartier", "un quartier", "nom", "m", "", "neighbourhood, district", "", "/kaʁtje/"],
    ["gare", "une gare", "nom", "f", "", "(train) station", "", "/ɡaʁ/"],
    ["restaurant", "un restaurant", "nom", "m", "", "restaurant", "The final t is silent.", "/ʁɛstɔʁɑ̃/"],
    ["magasin", "un magasin", "nom", "m", "", "shop", "Faux ami: a magazine is un magazine or une revue.", "/maɡazɛ̃/"],
    ["magasins", "un magasin", "nom", "m", "pluriel", "shops", "", "/maɡazɛ̃/"],
    ["cuisine", "une cuisine", "nom", "f", "", "kitchen; cooking", "", "/kɥizin/"],
    ["salle", "une salle", "nom", "f", "", "room, hall", "une salle de bains: a bathroom.", "/sal/"],
    ["bains", "un bain", "nom", "m", "pluriel", "baths", "une salle de bains: a bathroom (also written salle de bain).", "/bɛ̃/"],
    ["jardin", "un jardin", "nom", "m", "", "garden", "", "/ʒaʁdɛ̃/"],
    ["toilettes", "les toilettes", "nom", "f", "pluriel", "toilet", "Always plural in this sense.", "/twalɛt/"],
    ["toujours", "toujours", "adverbe", "", "", "always; still", "", "/tuʒuʁ/"],
    ["karim", "Karim", "prénom", "m", "", "(a first name)", "", "/kaʁim/"],
    ["lille", "Lille", "nom de ville", "", "", "Lille", "A city in the north of France.", "/lil/"],
    ["moka", "Moka", "nom d’animal", "", "", "(a pet’s name)", "", "/mɔka/"],
    ["âge", "l’âge", "nom", "m", "", "age", "Masculine despite the -e.", "/aʒ/"]
  ]
});
