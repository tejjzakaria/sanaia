export interface ProductTranslation {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  howToUse: string;
  ingredients: string[];
  faq: { q: string; a: string }[];
}

export interface ProductPack {
  qty: number;
  label: string;
  labelAr: string;
  price: string;
  priceNum: number;
}

export interface ProductSectionContent {
  headline: string;
  sub: string;
  points?: string[];
  badges?: string[];
  myth?: string;
  mythLabel?: string;
  fact?: string;
  factLabel?: string;
}

export interface ProductSection {
  image: string;
  layout: "image-left" | "image-right";
  variant?: "myth-fact";
  fr: ProductSectionContent;
  ar: ProductSectionContent;
}

export interface ProductReview {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export interface Product {
  id: string;
  image: string;
  images: string[];
  creatives: string[];
  sections: ProductSection[];
  reviews: ProductReview[];
  color: string;
  bg: string;
  price: string;
  rating: number;
  packs: ProductPack[];
  fr: ProductTranslation;
  ar: ProductTranslation;
}

export const PRODUCTS: Product[] = [
  {
    id: "collagene-marin",
    image: "/sanaia-images/IMG_9215%202.JPG.jpeg",
    packs: [
      { qty: 1, label: "1 Boite",   labelAr: "علبة واحدة",  price: "219 DH", priceNum: 219 },
      { qty: 2, label: "2 Boites",  labelAr: "علبتان",       price: "349 DH", priceNum: 349 },
      { qty: 3, label: "3 Boites",  labelAr: "3 علب",        price: "499 DH", priceNum: 499 },
    ],
    images: [
      "/sanaia-images/IMG_9215%202.JPG.jpeg",
      "/sanaia-images/Frame%20C%20-%20Shot%202%20End%20Shot%203%20Start.png",
      "/sanaia-images/Frame%20B%20-%20Shot%201%20End%20Shot%202%20Start.png",
      "/sanaia-images/ChatGPT%20Image%20Jun%209%2C%202026%2C%2003_32_34%20PM.png",
      "/sanaia-images/1781292167605.png",
      "/sanaia-images/Frame%20A%20-%20Shot%201%20Start.png",
    ],
    creatives: [
      "/collagen_creatives/1.jpeg",
      "/collagen_creatives/2.jpeg",
      "/collagen_creatives/3.jpeg",
      "/collagen_creatives/4.jpeg",
      "/collagen_creatives/5.jpeg",
      "/collagen_creatives/6.jpeg",
      "/collagen_creatives/7.jpeg",
      "/collagen_creatives/8.jpeg",
    ],
    sections: [
      {
        image: "/collagen_creatives/1.jpeg",
        layout: "image-right",
        fr: {
          headline: "Une peau radieuse commence ici",
          sub: "Soutient l'éclat naturel et l'élasticité de la peau de l'intérieur, dès les premières semaines.",
          points: [
            "Éclat naturel & anti-âge visible",
            "Réduit les signes de l'âge",
            "Soutient cheveux & ongles",
            "Soutien des articulations",
          ],
        },
        ar: {
          headline: "الجمال الطبيعي يبدأ من الداخل",
          sub: "كولاجين بحري فاخر لدعم جمالك من الداخل، يُظهر نتائج ملموسة من الأسابيع الأولى.",
          points: [
            "بشرة أكثر نضارة وتقلل التجاعيد",
            "شعر أقوى وأكثر كثافة",
            "أظافر صحية وقوية",
          ],
        },
      },
      {
        image: "/collagen_creatives/4.jpeg",
        layout: "image-left",
        fr: {
          headline: "Retrouvez votre jeunesse",
          sub: "Le collagène marin réduit visiblement les rides et ridules, et repulpe la peau progressivement.",
          badges: ["Wild Caught Marine Source", "Non-GMO Formula", "Third-Party Tested", "Gluten & Soy Free"],
        },
        ar: {
          headline: "استعيدي شبابك",
          sub: "يقلل الكولاجين البحري من علامات الشيخوخة ويملأ البشرة بشكل تدريجي وطبيعي.",
          badges: ["مصدر بحري نقي", "تركيبة غير معدلة وراثياً", "مختبر من جهة ثالثة", "خالٍ من الغلوتين والصويا"],
        },
      },
      {
        image: "/collagen_creatives/5.jpeg",
        layout: "image-right",
        fr: {
          headline: "Des cheveux plus forts et sains",
          sub: "Renforcés de l'intérieur grâce aux peptides de collagène marin haute biodisponibilité.",
          points: [
            "Nourrit les follicules capillaires",
            "Favorise la force et la brillance",
            "Soutient une croissance saine",
          ],
        },
        ar: {
          headline: "شعر أقوى وأكثر حيوية",
          sub: "تقوية من الجذور بفضل ببيبتيدات الكولاجين البحري عالية التوافر البيولوجي.",
          points: [
            "يغذي بصيلات الشعر",
            "يعزز القوة والبريق",
            "يدعم نمواً صحياً",
          ],
        },
      },
      {
        image: "/collagen_creatives/7.jpeg",
        layout: "image-left",
        fr: {
          headline: "Bougez en toute confiance",
          sub: "Un soutien complet des articulations et des os pour une mobilité optimale au quotidien.",
          badges: ["Soutien articulations & os", "Cheveux, peau & ongles en santé", "Peptides marins premium", "Formule sûre & efficace"],
        },
        ar: {
          headline: "تحرك بثقة وحيوية",
          sub: "دعم شامل للمفاصل والعظام للحصول على حركة مثلى في حياتك اليومية.",
          badges: ["دعم المفاصل والعظام", "شعر وبشرة وأظافر صحية", "ببيبتيدات بحرية فاخرة", "تركيبة آمنة وفعالة"],
        },
      },
    ],
    reviews: [
      {
        name: "Fatima",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "Ma peau a vraiment changé après 6 semaines ! Elle est plus lumineuse et les petites rides ont nettement diminué. Je ne m'y attendais pas aussi vite.",
      },
      {
        name: "Yasmine",
        rating: 5,
        date: "Il y a 1 mois",
        text: "كانت عندي مشكل مع تساقط الشعر، جربت بزاف دالحوايج بلا نتيجة. من بعد كولاجين ديال سانايا وقف التساقط والشعر ولى مالق وبريّق. عجبني مزيان!",
      },
      {
        name: "Khadija",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Je le prends le matin à jeun et je vois vraiment la différence. Mes ongles sont beaucoup plus solides et ma peau est plus douce et repulpée.",
      },
      {
        name: "Nadia",
        rating: 4,
        date: "Il y a 5 semaines",
        text: "كانت عندي ألم ف الركبة من سنين. دابا بدات نمشي مليح بزاف ف الحياة اليومية. نوصي بيه!",
      },
      {
        name: "Salma",
        rating: 5,
        date: "Il y a 2 mois",
        text: "Produit de qualité, livraison rapide. Résultats visibles dès le premier mois. Je le recommande à toutes mes amies !",
      },
    ],
    color: "#1A7ABF",
    bg: "rgba(26,122,191,0.08)",
    price: "219 DH",
    rating: 4.9,
    fr: {
      name: "Collagène Marin",
      tagline: "Peau · Cheveux · Ongles · Articulations",
      description:
        "Notre Collagène Marin est formulé avec des peptides de collagène marin de haute qualité pour nourrir votre peau de l'intérieur, renforcer vos cheveux et ongles, et soutenir la santé de vos articulations.",
      benefits: [
        "Améliore l'élasticité et l'éclat de la peau",
        "Renforce les cheveux et les ongles",
        "Soutient la santé des articulations",
        "Peptides de collagène marin haute biodisponibilité",
      ],
      howToUse:
        "Prendre 2 gélules par jour avec un grand verre d'eau, de préférence le matin à jeun ou 30 min avant le repas.",
      ingredients: [
        "Peptides de collagène marin",
        "Acide hyaluronique",
        "Vitamine C",
        "Biotine",
        "Zinc",
      ],
      faq: [
        {
          q: "Quand vais-je voir les résultats ?",
          a: "Les premiers effets sur la peau et les cheveux apparaissent généralement après 4 à 6 semaines d'utilisation régulière.",
        },
        {
          q: "Convient-il aux allergiques aux fruits de mer ?",
          a: "Ce produit contient des protéines de poisson marin. Les personnes allergiques doivent consulter un médecin avant la prise.",
        },
      ],
    },
    ar: {
      name: "كولاجين البحر",
      tagline: "البشرة · الشعر · الأظافر · المفاصل",
      description:
        "كولاجين البحر من سانايا مُصاغ ببيبتيدات الكولاجين البحري عالية الجودة لتغذية بشرتك من الداخل وتقوية شعرك وأظافرك ودعم صحة مفاصلك.",
      benefits: [
        "يحسن مرونة البشرة وإشراقها",
        "يقوي الشعر والأظافر",
        "يدعم صحة المفاصل",
        "ببيبتيدات كولاجين بحري عالية التوافر البيولوجي",
      ],
      howToUse:
        "تناول كبسولتين يومياً مع كوب كبير من الماء، ويُفضَّل في الصباح على معدة فارغة أو قبل 30 دقيقة من الوجبة.",
      ingredients: [
        "ببيبتيدات الكولاجين البحري",
        "حمض الهيالورونيك",
        "فيتامين C",
        "البيوتين",
        "الزنك",
      ],
      faq: [
        {
          q: "متى ستظهر النتائج؟",
          a: "تظهر التأثيرات الأولى على البشرة والشعر عادةً بعد 4 إلى 6 أسابيع من الاستخدام المنتظم.",
        },
        {
          q: "هل يناسب المصابين بحساسية من المأكولات البحرية؟",
          a: "يحتوي المنتج على بروتينات السمك البحري. يجب على الأشخاص المصابين بحساسية استشارة طبيب قبل الاستخدام.",
        },
      ],
    },
  },
  {
    id: "moodcalm",
    image: "/sanaia-images/IMG_9217%202.JPG.jpeg",
    packs: [
      { qty: 1, label: "1 Boite",   labelAr: "علبة واحدة",  price: "219 DH", priceNum: 219 },
      { qty: 2, label: "2 Boites",  labelAr: "علبتان",       price: "349 DH", priceNum: 349 },
      { qty: 3, label: "3 Boites",  labelAr: "3 علب",        price: "499 DH", priceNum: 499 },
    ],
    images: [
      "/sanaia-images/IMG_9217%202.JPG.jpeg",
      "/sanaia-images/MoodCalm%20Frame%20C%20-%20Shot%202%20End%20Shot%203%20Start.png",
      "/sanaia-images/MoodCalm%20Frame%20B%20-%20Shot%201%20End%20Shot%202%20Start.jpg.jpeg",
      "/sanaia-images/mood%20calm%201.png",
      "/sanaia-images/mood%20calm%202.png",
      "/sanaia-images/1781017538848.jpg.jpeg",
    ],
    creatives: [
      "/moodcalm_creatives/1.jpeg",
      "/moodcalm_creatives/2.jpeg",
      "/moodcalm_creatives/3.jpeg",
      "/moodcalm_creatives/4.jpeg",
      "/moodcalm_creatives/5.jpeg",
      "/moodcalm_creatives/6.jpeg",
    ],
    sections: [
      {
        image: "/moodcalm_creatives/5.jpeg",
        layout: "image-right",
        fr: {
          headline: "Le stress quotidien ?",
          sub: "Retrouvez votre équilibre naturellement avec MoodCalm. Une formule adaptogène pour calmer le système nerveux sans accoutumance.",
          points: [
            "Calme le système nerveux",
            "Réduit l'anxiété chronique",
            "Favorise l'équilibre émotionnel",
            "Sans accoutumance ni effets secondaires",
          ],
        },
        ar: {
          headline: "التوتر اليومي؟",
          sub: "استعد توازنك بشكل طبيعي مع مود كالم. تركيبة أدابتوجينية لتهدئة الجهاز العصبي بدون إدمان.",
          points: [
            "يهدئ الجهاز العصبي",
            "يقلل القلق المزمن",
            "يعزز التوازن العاطفي",
            "بدون إدمان أو آثار جانبية",
          ],
        },
      },
      {
        image: "/moodcalm_creatives/6.jpeg",
        layout: "image-left",
        fr: {
          headline: "Ingrédients naturels sélectionnés",
          sub: "Valériane · Camomille · Formule avancée. Une synergie unique d'extraits naturels pour un effet apaisant puissant.",
          points: [
            "Valériane pour un sommeil réparateur",
            "Camomille apaisante pour le système nerveux",
            "Ashwagandha KSM-66® pour la gestion du stress",
            "L-Théanine pour la clarté mentale",
          ],
        },
        ar: {
          headline: "مكونات طبيعية مختارة بعناية",
          sub: "فاليريان · بابونج · تركيبة متقدمة. تآزر فريد من المستخلصات الطبيعية لتأثير مهدئ قوي.",
          points: [
            "فاليريان لنوم مريح ومنعش",
            "بابونج مهدئ للجهاز العصبي",
            "أشواجاندا KSM-66® لإدارة التوتر",
            "إل-ثيانين للوضوح الذهني",
          ],
        },
      },
      {
        image: "/moodcalm_creatives/2.jpeg",
        layout: "image-right",
        fr: {
          headline: "Votre rituel quotidien pour la sérénité",
          sub: "Un moment de calme chaque jour, pour un équilibre émotionnel durable.",
          points: [
            "2 gélules par jour",
            "De préférence le soir, 1h avant le coucher",
            "Avec un grand verre d'eau tiède",
            "Conseil : associer à une tisane à la camomille",
          ],
        },
        ar: {
          headline: "طقسك اليومي للهدوء",
          sub: "لحظة من السكينة كل يوم، لتوازن عاطفي دائم.",
          points: [
            "كبسولتان يومياً",
            "مساءً قبل النوم بساعة",
            "مع الماء الدافئ للاسترخاء",
            "نصيحة: تناوله مع شاي البابونج لتعزيز التأثير",
          ],
        },
      },
    ],
    reviews: [
      {
        name: "Amine",
        rating: 5,
        date: "Il y a 2 semaines",
        text: "Je travaille sous forte pression et le stress était devenu insupportable. MoodCalm m'a vraiment aidé à retrouver mon calme sans somnolence. Je le prends depuis 3 semaines.",
      },
      {
        name: "Sara",
        rating: 5,
        date: "Il y a 1 mois",
        text: "ما كنتقدرش ننعس مزيان من بزاف دالشهور. من بعد 3 أسابيع ديال مود كالم، بدات ننعس بزاف مليح وكانعس مرتاح. واعر بحال!",
      },
      {
        name: "Hamid",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "كان مزاجي بحال المية والنار، متقلب بزاف على طول النهار. من دخلت مود كالم، حسيت براسي مستوي وهادي بزاف. الفرق واضح!",
      },
      {
        name: "Layla",
        rating: 4,
        date: "Il y a 5 semaines",
        text: "Bon produit pour l'anxiété. Je le prends le soir et ça m'aide vraiment à me détendre avant de dormir. Effets progressifs mais réels.",
      },
      {
        name: "Mehdi",
        rating: 5,
        date: "Il y a 6 semaines",
        text: "Je recommande ! Ça prend 2-3 semaines pour sentir l'effet mais ça vaut vraiment la peine. Produit naturel et de bonne qualité.",
      },
    ],
    color: "#7B5EA7",
    bg: "rgba(123,94,167,0.08)",
    price: "219 DH",
    rating: 4.7,
    fr: {
      name: "MoodCalm",
      tagline: "Soutien naturel au stress & à l'humeur",
      description:
        "MoodCalm combine des plantes adaptogènes et des extraits naturels soigneusement sélectionnés pour vous aider à gérer le stress quotidien et retrouver un équilibre émotionnel durable.",
      benefits: [
        "Réduit l'anxiété et le stress chronique",
        "Améliore la qualité du sommeil",
        "Favorise l'équilibre émotionnel",
        "Extraits de plantes adaptogènes 100% naturels",
      ],
      howToUse:
        "Prendre 2 gélules par jour avec de l'eau, de préférence le matin ou en milieu de journée. Éviter la prise le soir.",
      ingredients: [
        "Ashwagandha KSM-66® (500mg)",
        "Griffonia simplicifolia (5-HTP)",
        "Magnésium bisglycinate",
        "L-Théanine",
        "Vitamine B6 (P-5-P)",
      ],
      faq: [
        {
          q: "MoodCalm peut-il créer une dépendance ?",
          a: "Non, MoodCalm est un complément 100% naturel sans substances psychoactives et ne crée aucune dépendance.",
        },
        {
          q: "Compatible avec des médicaments antidépresseurs ?",
          a: "Déconseillé de combiner avec des antidépresseurs ou inhibiteurs de sérotonine sans avis médical préalable.",
        },
      ],
    },
    ar: {
      name: "مود كالم",
      tagline: "دعم طبيعي للضغط والمزاج",
      description:
        "مود كالم يجمع نباتات أدابتوجينية ومستخلصات طبيعية مختارة بعناية لمساعدتك على التعامل مع ضغوط الحياة اليومية واستعادة توازن عاطفي دائم.",
      benefits: [
        "يقلل القلق والتوتر المزمن",
        "يحسن جودة النوم",
        "يعزز التوازن العاطفي",
        "مستخلصات نباتية أدابتوجينية 100% طبيعية",
      ],
      howToUse:
        "تناول كبسولتين يومياً مع الماء، ويُفضَّل في الصباح أو منتصف النهار. تجنب تناوله مساءً.",
      ingredients: [
        "أشواجاندا KSM-66® (500 ملغ)",
        "غريفونيا سيمبليسيفوليا (5-HTP)",
        "مغنيسيوم بيسغليسينات",
        "إل-ثيانين",
        "فيتامين B6 (P-5-P)",
      ],
      faq: [
        {
          q: "هل يسبب مود كالم الإدمان؟",
          a: "لا، مود كالم مكمل 100% طبيعي بدون مواد نفسية التأثير ولا يسبب أي إدمان.",
        },
        {
          q: "هل يتوافق مع مضادات الاكتئاب؟",
          a: "يُنصح بشدة بعدم الجمع مع مضادات الاكتئاب أو مثبطات السيروتونين دون استشارة طبية.",
        },
      ],
    },
  },
  {
    id: "weight-boost",
    image: "/sanaia-images/IMG_9214%202.JPG.jpeg",
    packs: [
      { qty: 1, label: "1 Boite",   labelAr: "علبة واحدة",  price: "219 DH", priceNum: 219 },
      { qty: 2, label: "2 Boites",  labelAr: "علبتان",       price: "349 DH", priceNum: 349 },
      { qty: 3, label: "3 Boites",  labelAr: "3 علب",        price: "499 DH", priceNum: 499 },
    ],
    images: [
      "/sanaia-images/IMG_9214%202.JPG.jpeg",
      "/sanaia-images/weight%20boost%201.png",
      "/sanaia-images/weight%20boost%202.png",
    ],
    creatives: [
      "/weightboost_creatives/1.jpeg",
      "/weightboost_creatives/2.jpeg",
      "/weightboost_creatives/3.jpeg",
      "/weightboost_creatives/4.jpeg",
      "/weightboost_creatives/5.jpeg",
      "/weightboost_creatives/6.jpeg",
      "/weightboost_creatives/7.jpeg",
    ],
    sections: [
      {
        image: "/weightboost_creatives/2.jpeg",
        layout: "image-right",
        fr: {
          headline: "Votre corps mérite le meilleur",
          sub: "WEIGHT BOOST vous accompagne dans votre parcours vers un corps plus sain et épanoui. Chaque objectif commence par une décision.",
          badges: ["Ingrédients 100% naturels", "Formule complète", "Soutien à la prise de poids"],
        },
        ar: {
          headline: "جسمك يستحق الأفضل",
          sub: "وزن بوست يرافقك في رحلتك نحو جسم أكثر صحة وثقة بالنفس. كل هدف يبدأ بقرار.",
          badges: ["مكونات 100% طبيعية", "تركيبة متكاملة", "دعم زيادة الوزن الصحية"],
        },
      },
      {
        image: "/weightboost_creatives/4.jpeg",
        layout: "image-left",
        fr: {
          headline: "Soutenez votre appétit naturellement",
          sub: "WEIGHT BOOST aide à soutenir votre appétit et votre apport nutritionnel pour atteindre vos objectifs de prise de poids sainement.",
          points: [
            "Stimule naturellement l'appétit",
            "Optimise l'absorption des nutriments",
            "Soutien nutritionnel complet · 60 gélules",
          ],
        },
        ar: {
          headline: "عزز شهيتك بشكل طبيعي",
          sub: "وزن بوست يساعد على دعم الشهية وتحسين امتصاص المغذيات لتحقيق أهداف زيادة الوزن بصحة.",
          points: [
            "يحفز الشهية بشكل طبيعي",
            "يحسن امتصاص المغذيات",
            "دعم غذائي متكامل · 60 كبسولة",
          ],
        },
      },
      {
        image: "/weightboost_creatives/6.jpeg",
        layout: "image-right",
        fr: {
          headline: "Un style de vie sain et complet",
          sub: "Weight Boost s'intègre à votre quotidien pour soutenir vos objectifs dans le cadre d'un mode de vie équilibré.",
          badges: ["Bien-être global", "Énergie naturelle", "Soutien de l'appétit"],
        },
        ar: {
          headline: "نمط حياة صحي متكامل",
          sub: "وزن بوست يندمج في حياتك اليومية لدعم أهدافك ضمن نمط حياة متوازن وصحي.",
          badges: ["عافية شاملة", "طاقة طبيعية", "دعم الشهية"],
        },
      },
    ],
    reviews: [
      {
        name: "Youssef",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "زدت 4 كيلو ف شهرين مع وزن بوست وماكلة مزيانة. زادت شهيتي بصح وحسيت براسي قوي وفيا طاقة. عجبني مزيان!",
      },
      {
        name: "Karim",
        rating: 5,
        date: "Il y a 1 mois",
        text: "J'avais du mal à manger assez pour prendre du poids. Depuis Weight Boost, j'ai vraiment faim aux repas et les résultats sont visibles sur mon corps.",
      },
      {
        name: "Omar",
        rating: 5,
        date: "Il y a 2 mois",
        text: "منتج واعر! كانجمعو مع رياضة المقاومة وخدام بلا فلوس. نوصي بيه لكل من باغي يكبر بصحة.",
      },
      {
        name: "Soufiane",
        rating: 4,
        date: "Il y a 5 semaines",
        text: "Bon résultat après 6 semaines. L'appétit a bien augmenté et je commence à voir la différence sur mon corps. Livraison rapide aussi.",
      },
      {
        name: "Rachid",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "منتج طبيعي وعندو خدمة. هاد هي الكوتي التانية وكاملي! عيلتي كاتلاحظ التغيير بصح.",
      },
    ],
    color: "#C4621C",
    bg: "rgba(196,98,28,0.08)",
    price: "219 DH",
    rating: 4.6,
    fr: {
      name: "Weight Boost",
      tagline: "Pour un poids corporel sain & naturel",
      description:
        "Weight Boost est conçu pour soutenir naturellement la prise de poids saine en stimulant l'appétit, en optimisant l'absorption des nutriments et en favorisant le développement musculaire.",
      benefits: [
        "Stimule naturellement l'appétit",
        "Optimise l'absorption des nutriments",
        "Favorise le développement musculaire",
        "Formule sans stimulants ni additifs artificiels",
      ],
      howToUse:
        "Prendre 2 gélules trois fois par jour lors des repas principaux. Combiner avec une alimentation hypercalorique pour de meilleurs résultats.",
      ingredients: [
        "Fenugrec (extrait de graine)",
        "Spiruline (Arthrospira platensis)",
        "Igname sauvage",
        "Zinc",
        "Complexe vitamines B",
        "Extrait de gingembre",
      ],
      faq: [
        {
          q: "Adapté aux femmes ?",
          a: "Oui, Weight Boost est formulé pour les hommes et les femmes souhaitant prendre du poids sainement et naturellement.",
        },
        {
          q: "Faut-il faire du sport en parallèle ?",
          a: "Pour des résultats optimaux, combiner avec des exercices de résistance musculaire est fortement recommandé.",
        },
      ],
    },
    ar: {
      name: "وزن بوست",
      tagline: "مكمل لوزن جسم صحي وطبيعي",
      description:
        "وزن بوست مُصمم لدعم اكتساب الوزن الصحي بشكل طبيعي من خلال تحفيز الشهية وتحسين امتصاص المغذيات وتعزيز نمو العضلات.",
      benefits: [
        "يحفز الشهية بشكل طبيعي",
        "يحسن امتصاص المغذيات",
        "يعزز نمو العضلات",
        "تركيبة بدون منبهات أو إضافات صناعية",
      ],
      howToUse:
        "تناول كبسولتين ثلاث مرات يومياً مع الوجبات الرئيسية. اجمع مع نظام غذائي غني بالسعرات الحرارية لأفضل النتائج.",
      ingredients: [
        "الحلبة (مستخلص البذور)",
        "سبيرولينا",
        "يام بري",
        "الزنك",
        "مجمع فيتامينات B",
        "مستخلص الزنجبيل",
      ],
      faq: [
        {
          q: "هل هو مناسب للنساء؟",
          a: "نعم، وزن بوست مُصاغ للرجال والنساء الراغبين في اكتساب الوزن بشكل صحي.",
        },
        {
          q: "هل يجب ممارسة الرياضة بالتوازي؟",
          a: "للحصول على نتائج مثلى، يُنصح بالجمع مع تمارين المقاومة العضلية.",
        },
      ],
    },
  },
  {
    id: "prostate-supp",
    image: "/sanaia-images/IMG_9216%202.JPG.jpeg",
    packs: [
      { qty: 1, label: "1 Boite",   labelAr: "علبة واحدة",  price: "219 DH", priceNum: 219 },
      { qty: 2, label: "2 Boites",  labelAr: "علبتان",       price: "349 DH", priceNum: 349 },
      { qty: 3, label: "3 Boites",  labelAr: "3 علب",        price: "499 DH", priceNum: 499 },
    ],
    images: [
      "/sanaia-images/IMG_9216%202.JPG.jpeg",
      "/sanaia-images/prostate%20supp%202.png",
      "/sanaia-images/prostate%20supp.png",
    ],
    creatives: [
      "/psotatesupp_creatives/1.jpeg",
      "/psotatesupp_creatives/2.jpeg",
      "/psotatesupp_creatives/3.jpeg",
      "/psotatesupp_creatives/4.jpeg",
      "/psotatesupp_creatives/5.jpeg",
      "/psotatesupp_creatives/6.jpeg",
      "/psotatesupp_creatives/7.jpeg",
    ],
    sections: [
      {
        image: "/psotatesupp_creatives/1.jpeg",
        layout: "image-right",
        fr: {
          headline: "Vitalité Masculine, Naturellement",
          sub: "PROSTATE SUPP soutient le bien-être de la prostate et le confort urinaire. Formule 100% naturelle pour hommes actifs.",
          points: [
            "Soutient la santé de la prostate",
            "Améliore le flux urinaire",
            "Réduit les mictions nocturnes",
            "Confort et vitalité au quotidien",
          ],
          badges: ["Sans Gluten", "Sans OGM", "Sans Maïs", "Sans Lactose", "Sans Sucre"],
        },
        ar: {
          headline: "حيوية رجولية طبيعية",
          sub: "بروستات ساب يدعم صحة البروستاتا والراحة البولية. تركيبة 100% طبيعية للرجال النشيطين.",
          points: [
            "يدعم صحة البروستاتا",
            "يحسن تدفق البول",
            "يقلل التبول الليلي",
            "راحة وحيوية في الحياة اليومية",
          ],
          badges: ["خالٍ من الغلوتين", "خالٍ من GMO", "خالٍ من الذرة", "خالٍ من الألبان", "خالٍ من السكر"],
        },
      },
      {
        image: "/psotatesupp_creatives/3.jpeg",
        layout: "image-left",
        fr: {
          headline: "Des nuits plus paisibles, des jours plus actifs",
          sub: "PROSTATE SUPP aide à réduire les levers nocturnes et améliore le flux urinaire pour un confort naturel et durable.",
          points: [
            "Réduit les levers nocturnes",
            "Améliore le flux urinaire",
            "Confort naturel garanti",
          ],
        },
        ar: {
          headline: "ليال أكثر راحة، أيام أكثر نشاطاً",
          sub: "بروستات ساب يساعد على تقليل الذهاب للحمام ليلاً ويحسن تدفق البول لراحة طبيعية ودائمة.",
          points: [
            "يقلل التبول الليلي",
            "يحسن تدفق البول",
            "راحة طبيعية مضمونة",
          ],
        },
      },
      {
        image: "/psotatesupp_creatives/5.jpeg",
        layout: "image-right",
        fr: {
          headline: "Ne laissez pas l'âge définir votre bien-être",
          sub: "60 gélules naturelles, sans gluten, sans OGM. Pour une santé prostatique optimale au quotidien, dès 40 ans.",
          badges: ["Naturel et sûr", "Soutien ciblé", "Confort et vitalité", "Qualité premium"],
        },
        ar: {
          headline: "الشيخوخة الصحية تبدأ بالاختيارات الذكية",
          sub: "60 كبسولة طبيعية، خالية من الغلوتين، غير معدلة وراثياً. لصحة بروستاتا مثلى يومياً، اعتباراً من سن الأربعين.",
          badges: ["طبيعي وآمن", "دعم مستهدف", "راحة وحيوية", "جودة فاخرة"],
        },
      },
      {
        image: "/psotatesupp_creatives/6.jpeg",
        layout: "image-left",
        variant: "myth-fact",
        fr: {
          headline: "Mythe ou Réalité ?",
          sub: "",
          mythLabel: "MYTHE",
          myth: "Les problèmes de prostate sont une partie inévitable du vieillissement qu'on ne peut pas éviter.",
          factLabel: "RÉALITÉ",
          fact: "Un soutien proactif avec des compléments naturels comme Prostate Supp aide à maintenir la santé de la prostate et le confort urinaire.",
        },
        ar: {
          headline: "خرافة أم حقيقة؟",
          sub: "",
          mythLabel: "خرافة",
          myth: "مشاكل البروستاتا جزء طبيعي من الشيخوخة ولا يمكن تجنبها.",
          factLabel: "حقيقة",
          fact: "الدعم الاستباقي بمكملات طبيعية مثل بروستات ساب يساعد في الحفاظ على صحة البروستاتا والراحة البولية.",
        },
      },
    ],
    reviews: [
      {
        name: "Hassan",
        rating: 5,
        date: "Il y a 1 mois",
        text: "Depuis que je prends Prostate Supp, je me lève beaucoup moins la nuit. Après 6 semaines, vraiment une grande différence dans mon confort quotidien.",
      },
      {
        name: "Mohammed",
        rating: 5,
        date: "Il y a 5 semaines",
        text: "كانت عندي مشاكل ف البول من سنتين. طبيبي قالي نجربو كمكمل. مرضي بزاف على النتيجة، وكاملي الكور.",
      },
      {
        name: "Brahim",
        rating: 5,
        date: "Il y a 3 semaines",
        text: "Produit de qualité, ingrédients naturels. Je dors beaucoup mieux la nuit et je me sens plus à l'aise dans ma vie quotidienne. Merci SANAÏA.",
      },
      {
        name: "Abdelkarim",
        rating: 5,
        date: "Il y a 2 mois",
        text: "منتج واعر لصحة الرجل. كانوصي بيه لجميع الرجال لي فوق 45 عام. النتائج موجودة بصح.",
      },
      {
        name: "Khalid",
        rating: 4,
        date: "Il y a 6 semaines",
        text: "Il faut être patient, les résultats viennent progressivement. Après un mois, je commence à ressentir une nette amélioration du confort.",
      },
    ],
    color: "#1A5BAF",
    bg: "rgba(26,91,175,0.08)",
    price: "219 DH",
    rating: 4.8,
    fr: {
      name: "Prostate Supp",
      tagline: "Santé de la prostate & confort urinaire",
      description:
        "Prostate Supp est une formule ciblée qui combine les meilleurs extraits naturels pour soutenir la santé de la prostate, améliorer le confort urinaire et maintenir une fonction prostatique optimale.",
      benefits: [
        "Soutient la santé de la prostate",
        "Améliore le confort urinaire",
        "Réduit les inconforts prostatiques",
        "Extraits de palmier nain, zinc & lycopène",
      ],
      howToUse:
        "Prendre 2 gélules par jour lors d'un repas. Maintenir une prise régulière sur 3 mois minimum pour une efficacité optimale.",
      ingredients: [
        "Extrait de Palmier nain (Serenoa repens)",
        "Lycopène (extrait de tomate)",
        "Zinc",
        "Sélénium",
        "Extrait de racine d'Ortie",
        "Vitamine D3",
      ],
      faq: [
        {
          q: "À partir de quel âge ?",
          a: "Recommandé pour les hommes à partir de 40 ans ou présentant des inconforts urinaires, après avis médical.",
        },
        {
          q: "Peut-on le prendre en continu ?",
          a: "Oui, une cure de 3 mois est recommandée en première intention, puis en entretien selon les besoins.",
        },
      ],
    },
    ar: {
      name: "بروستات سوب",
      tagline: "صحة البروستاتا والمسالك البولية",
      description:
        "بروستات سوب تركيبة مستهدفة تجمع أجود المستخلصات الطبيعية لدعم صحة البروستاتا وتحسين راحة المسالك البولية والحفاظ على وظيفة البروستاتا المثلى.",
      benefits: [
        "يدعم صحة البروستاتا",
        "يحسن راحة المسالك البولية",
        "يقلل الانزعاج البروستاتي",
        "مستخلصات نخيل القزم والزنك والليكوبين",
      ],
      howToUse:
        "تناول كبسولتين يومياً مع وجبة. حافظ على تناول منتظم لمدة 3 أشهر على الأقل للحصول على الفاعلية المثلى.",
      ingredients: [
        "مستخلص نخيل القزم (سيرينوا ريبنس)",
        "الليكوبين (مستخلص الطماطم)",
        "الزنك",
        "السيلينيوم",
        "مستخلص جذور الحريق",
        "فيتامين D3",
      ],
      faq: [
        {
          q: "اعتباراً من أي سن؟",
          a: "يُنصح للرجال ابتداءً من سن 40 عاماً أو من يعانون من اضطرابات بولية، بعد استشارة طبية.",
        },
        {
          q: "هل يمكن تناوله بشكل مستمر؟",
          a: "نعم، تُنصح بدورة 3 أشهر في المرحلة الأولى ثم صيانة حسب الحاجة.",
        },
      ],
    },
  },
];
