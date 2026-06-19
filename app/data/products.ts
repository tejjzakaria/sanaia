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

export interface Product {
  id: string;
  image: string;
  images: string[];
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
    color: "#1A7ABF",
    bg: "rgba(26,122,191,0.08)",
    price: "219 DH",
    rating: 4.7,
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
