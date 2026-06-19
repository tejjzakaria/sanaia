"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "fr" | "ar";

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      products: "Boutique",
      about: "À propos",
      faq: "FAQ",
      cta: "Commander",
    },
    shop: {
      heading: "Notre Boutique",
      sub: "Des formules biologiques certifiées ONSSA, pour chaque besoin de santé.",
      order: "Commander",
      onssa: "Agrément ONSSA · #CAPV 26 1009.24 · Beauty Pharmacos, Aït Melloul",
    },
    about: {
      heroTag: "+ NOTRE HISTOIRE",
      heroLine1: "Née au Maroc,",
      heroLine2: "Formulée pour Vous",
      heroSub: "La rencontre entre la richesse naturelle du Maroc et la rigueur scientifique moderne, au service de votre santé.",
      missionTag: "+ NOTRE MISSION",
      missionHeading: "Rendre le Bien-être Naturel Accessible à Tous",
      missionText1: "Fondée avec la conviction que chaque personne mérite des compléments de qualité, SANAÏA s'engage à formuler des produits biologiques, efficaces et certifiés.",
      missionText2: "Fabriqués par Beauty Pharmacos selon les normes les plus strictes, nos compléments allient les meilleurs extraits naturels à une formulation scientifiquement éprouvée.",
      missionDetails: [
        "Extraits naturels sélectionnés avec rigueur",
        "Formulations testées et certifiées",
        "Certifié ONSSA · Fabriqué au Maroc",
      ],
      valuesTag: "+ NOS VALEURS",
      valuesHeading: "Ce Qui Nous Définit",
      values: [
        { title: "100% Naturel", text: "Chaque ingrédient est soigneusement sélectionné pour sa pureté et son origine naturelle, sans additifs ni conservateurs artificiels." },
        { title: "Science & Rigueur", text: "Nos formules sont développées avec une rigueur scientifique pour garantir une efficacité optimale et une absorption maximale." },
        { title: "Fierté Marocaine", text: "Fiers de notre ancrage marocain, nous fabriquons localement selon des standards de qualité internationaux reconnus." },
      ],
      mfgTag: "+ NOTRE FABRICATION",
      mfgHeading: "Beauty Pharmacos, Notre Partenaire Qualité",
      mfgText: "Tous les compléments SANAÏA sont produits dans les installations modernes de Beauty Pharmacos, situées dans la Zone Industrielle d'Aït Melloul. Chaque étape est soumise à un contrôle qualité rigoureux pour vous garantir le meilleur.",
      mfgDetails: [
        "Lot 916, Zone Industrielle, Aït Melloul, Maroc",
        "Contrôle qualité à chaque étape de production",
        "Standards de fabrication GMP",
        "Traçabilité complète de chaque lot",
      ],
      certTag: "+ CERTIFICATION OFFICIELLE",
      certHeading: "Agréé par l'ONSSA",
      certText: "Nos compléments sont officiellement agréés par l'Office National de Sécurité Sanitaire des Produits Alimentaires du Maroc, garantissant leur sécurité, qualité et conformité aux réglementations en vigueur.",
      certNumber: "#CAPV 26 1009.24",
      certBody: "Office National de Sécurité Sanitaire des Produits Alimentaires du Maroc",
      ctaHeading: "Prêt à Découvrir Notre Gamme ?",
      ctaButton: "Voir la Boutique",
    },
    hero: {
      tag: "+ SANAÏA NATUREL",
      headline1: "Compléments",
      headline2: "100% Naturels",
      headline3: "Pour Vous",
      description:
        "Certifiés ONSSA, formulés au Maroc avec les meilleurs extraits naturels pour prendre soin de vous au quotidien.",
      cta: "Découvrir nos produits",
      ctaSecondary: "En savoir plus",
      badge1: "100% Naturel",
      badge2: "Certifié ONSSA",
      badge3: "Sans Additifs",
      offerBadge: "BIO",
      stat1Value: "4",
      stat1Label: "Produits phares",
      stat2Value: "100%",
      stat2Label: "Naturel & Bio",
      stat3Value: "ONSSA",
      stat3Label: "Certifié",
    },
    problem: {
      tag: "+ VOUS RECONNAISSEZ-VOUS ?",
      heading: "Votre Corps Envoie Des Signaux",
      description:
        "Vous n'êtes pas seul. Des millions de personnes font face aux mêmes défis quotidiens qui impactent leur santé et leur bien-être.",
      cards: [
        {
          title: "Peau & Vitalité",
          description:
            "Vos cheveux, ongles et peau manquent d'éclat et de soutien nutritionnel au quotidien.",
        },
        {
          title: "Stress & Humeur",
          description:
            "Le stress chronique et les variations d'humeur épuisent votre système nerveux et votre énergie.",
        },
        {
          title: "Confort & Énergie",
          description:
            "Votre corps a besoin d'un soutien nutritionnel ciblé pour maintenir un poids et une vitalité sains.",
        },
      ],
      solutionTag: "+ LA SOLUTION SANAÏA",
      solutionHeading: "La Réponse Naturelle à Vos Besoins",
      solutionText:
        "SANAÏA propose des compléments alimentaires biologiques, scientifiquement formulés avec les meilleurs extraits naturels. Certifiés par l'ONSSA et fabriqués au Maroc.",
      bullets: [
        "Extraits naturels 100% biologiques",
        "Formules scientifiquement élaborées",
        "Certifié ONSSA · Fabriqué au Maroc",
      ],
    },
    products: {
      tag: "+ NOS PRODUITS",
      title: "Une Gamme Pour Chaque Besoin",
      description:
        "Chaque formule est soigneusement élaborée pour répondre à vos besoins spécifiques.",
      cta: "Acheter maintenant",
      items: [
        { name: "Collagène Marin", tagline: "Peau · Cheveux · Ongles · Articulations" },
        { name: "MoodCalm",        tagline: "Soutien naturel au stress & à l'humeur" },
        { name: "Weight Boost",    tagline: "Pour un poids corporel sain & naturel" },
        { name: "Prostate Supp",   tagline: "Santé de la prostate & confort urinaire" },
      ],
    },
    trust: {
      tag: "+ POURQUOI NOUS CHOISIR",
      heading: "La Qualité SANAÏA, Garantie",
      pillars: [
        {
          number: "01",
          title: "100% Naturel",
          description:
            "Extraits naturels purs et biologiques, sans additifs ni conservateurs artificiels.",
        },
        {
          number: "02",
          title: "Certifié ONSSA",
          description:
            "Agréé par l'Office National de Sécurité Sanitaire des produits Alimentaires du Maroc.",
        },
        {
          number: "03",
          title: "Formule Avancée",
          description:
            "Scientifiquement formulés pour une efficacité optimale et une absorption maximale.",
        },
        {
          number: "04",
          title: "Made in Morocco",
          description:
            "Fabriqué par Beauty Pharmacos au Maroc, dans les normes de qualité les plus strictes.",
        },
      ],
      certBar: "Agrément ONSSA · #CAPV 26 1009.24 · Beauty Pharmacos, Aït Melloul",
    },
    testimonials: {
      tag: "+ AVIS CLIENTS",
      heading: "De Vraies Personnes, De Vrais Résultats",
      subheading: "Des clients qui partagent leur expérience en vidéo.",
      items: [
        {
          name: "Fatima Z.",
          location: "Casablanca",
          product: "MoodCalm",
          productColor: "#7B5EA7",
          text: "Depuis que j'ai commencé MoodCalm, mon niveau de stress a considérablement diminué. Je me sens plus sereine au quotidien. Je recommande vivement !",
        },
        {
          name: "Karim B.",
          location: "Rabat",
          product: "Collagène Marin",
          productColor: "#1A7ABF",
          text: "Ma peau est tellement plus lumineuse depuis un mois. Mes cheveux sont plus forts et mes ongles ne cassent plus. Un produit exceptionnel !",
        },
        {
          name: "Leila M.",
          location: "Marrakech",
          product: "Weight Boost",
          productColor: "#C4621C",
          text: "J'ai enfin réussi à prendre du poids sainement et naturellement. Les résultats sont visibles dès la troisième semaine.",
        },
      ],
    },
    faq: {
      tag: "+ FAQ",
      heading: "Questions Fréquentes",
      items: [
        {
          q: "Quand vais-je voir les résultats ?",
          a: "Les résultats varient selon les individus. En général, les premiers effets sont perceptibles dès 2 à 4 semaines d'utilisation régulière. Pour des résultats optimaux, une prise continue sur 3 mois est recommandée.",
        },
        {
          q: "Les produits SANAÏA sont-ils certifiés ?",
          a: "Oui, tous nos produits sont agréés par l'ONSSA (Office National de Sécurité Sanitaire des produits Alimentaires) sous le numéro #CAPV 26 1009.24. Ils sont fabriqués par Beauty Pharmacos au Maroc.",
        },
        {
          q: "Peut-on combiner plusieurs produits SANAÏA ?",
          a: "Oui, nos produits sont conçus pour être complémentaires. Cependant, consultez votre médecin avant de combiner plusieurs compléments, surtout si vous prenez des médicaments.",
        },
        {
          q: "Y a-t-il des effets secondaires ?",
          a: "Nos produits sont formulés avec des ingrédients naturels et sont généralement bien tolérés. En cas de condition médicale particulière, de grossesse ou d'allaitement, consultez votre médecin avant utilisation.",
        },
        {
          q: "Comment commander les produits SANAÏA ?",
          a: "Vous pouvez nous contacter directement via le formulaire de contact ou par e-mail à contact@sanaia.ma pour passer votre commande.",
        },
      ],
    },
    cta: {
      tag: "+ COMMENCEZ AUJOURD'HUI",
      headline: "Prêt à Prendre Soin de Votre Santé ?",
      sub: "Rejoignez des milliers de Marocains qui font confiance à SANAÏA.",
      button: "Commander maintenant",
    },
    footer: {
      tagline:
        "Des compléments alimentaires biologiques et certifiés pour votre santé et votre bien-être au quotidien.",
      productsTitle: "Nos Produits",
      contactTitle: "Contact",
      address: "Lot 916, Zone Industrielle, Aït Melloul, Maroc",
      email: "contact@sanaia.ma",
      legal: "Mentions légales",
      cgv: "CGV",
      privacy: "Confidentialité",
      copyright: "© 2026 SANAÏA. Tous droits réservés.",
      onssa: "Agrément ONSSA · #CAPV 26 1009.24 · Beauty Pharmacos",
      productList: ["Collagène Marin", "MoodCalm", "Weight Boost", "Prostate Supp"],
    },
    product: {
      howToUse: "Mode d'Emploi",
      ingredients: "Ingrédients Clés",
      faqTitle: "Questions Fréquentes",
      related: "Vous Pourriez Aussi Aimer",
      backToShop: "← Boutique",
      orderNow: "Commander maintenant",
      perUnit: "/ unité",
      certifiedBy: "Certifié ONSSA",
    },
    checkout: {
      tag: "+ COMMANDEZ MAINTENANT",
      heading: "Finalisez Votre Commande",
      summaryTitle: "Votre Commande",
      qty: "Quantité",
      delivery: "Livraison",
      deliveryValue: "Gratuite",
      total: "Total",
      formTitle: "Vos Coordonnées",
      name: "Prénom et Nom",
      namePlaceholder: "Mohammed Alami",
      phone: "Téléphone",
      phonePlaceholder: "0612345678",
      city: "Ville",
      cityPlaceholder: "Casablanca",
      address: "Adresse complète",
      addressPlaceholder: "Numéro, rue, quartier...",
      submit: "Confirmer ma commande",
      submitting: "Traitement...",
      successTitle: "Commande confirmée !",
      successBody: "Notre équipe vous contactera sous 24h pour confirmer votre livraison.",
      errorRequired: "Champ requis",
      errorPhone: "Numéro invalide (ex: 0612345678)",
      cod: "Paiement à la Livraison",
      codSub: "Payez cash à la réception de votre colis",
      trust: ["Paiement à la livraison", "Livraison partout au Maroc", "Satisfait ou remboursé"],
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      products: "المتجر",
      about: "من نحن",
      faq: "الأسئلة الشائعة",
      cta: "اطلب الآن",
    },
    shop: {
      heading: "متجرنا",
      sub: "تركيبات عضوية معتمدة من أونسا لكل احتياج صحي.",
      order: "اطلب الآن",
      onssa: "اعتماد أونسا · #CAPV 26 1009.24 · بيوتي فارماكوس، آيت ملول",
    },
    about: {
      heroTag: "+ قصتنا",
      heroLine1: "ولدت في المغرب،",
      heroLine2: "مُصاغة من أجلك",
      heroSub: "التقاء بين ثروات المغرب الطبيعية والدقة العلمية الحديثة، في خدمة صحتك ورفاهيتك.",
      missionTag: "+ مهمتنا",
      missionHeading: "إتاحة العافية الطبيعية للجميع",
      missionText1: "تأسست سانايا بقناعة أن كل شخص يستحق الوصول إلى مكملات غذائية عالية الجودة. نلتزم بتركيب منتجات عضوية، فعّالة ومعتمدة.",
      missionText2: "تُصنَّع منتجاتنا بواسطة بيوتي فارماكوس وفق أعلى المعايير، إذ تجمع أجود المستخلصات الطبيعية بالتركيب العلمي المُثبت.",
      missionDetails: [
        "مستخلصات طبيعية مختارة بدقة",
        "تركيبات مُختبرة ومعتمدة",
        "معتمدة أونسا · صنع في المغرب",
      ],
      valuesTag: "+ قيمنا",
      valuesHeading: "ما يُعرِّفنا",
      values: [
        { title: "100% طبيعي", text: "كل مكوّن مُختار بعناية لنقائه وأصله الطبيعي، دون إضافات أو مواد حافظة صناعية." },
        { title: "العلم والدقة", text: "تركيباتنا مُطوَّرة بدقة علمية لضمان الفاعلية المثلى وأقصى امتصاص ممكن من قِبل الجسم." },
        { title: "فخر مغربي", text: "نفخر بانتمائنا المغربي، نُصنِّع محلياً وفق أعلى معايير الجودة الدولية المعترف بها." },
      ],
      mfgTag: "+ تصنيعنا",
      mfgHeading: "بيوتي فارماكوس، شريك الجودة",
      mfgText: "تُنتَج جميع مكملات سانايا في منشآت بيوتي فارماكوس الحديثة الواقعة في المنطقة الصناعية بآيت ملول. كل مرحلة من مراحل الإنتاج تخضع لرقابة جودة صارمة لضمان أفضل ما يُقدَّم لك.",
      mfgDetails: [
        "لوط 916، المنطقة الصناعية، آيت ملول، المغرب",
        "مراقبة الجودة في كل مرحلة إنتاجية",
        "معايير التصنيع الجيد GMP",
        "تتبع كامل لكل دفعة إنتاجية",
      ],
      certTag: "+ الاعتماد الرسمي",
      certHeading: "معتمد من أونسا",
      certText: "مكملاتنا الغذائية معتمدة رسمياً من المكتب الوطني للسلامة الصحية للمنتجات الغذائية بالمغرب، مما يضمن سلامتها وجودتها وامتثالها للأنظمة المعمول بها.",
      certNumber: "#CAPV 26 1009.24",
      certBody: "المكتب الوطني للسلامة الصحية للمنتجات الغذائية بالمغرب",
      ctaHeading: "هل أنت مستعد لاكتشاف تشكيلتنا؟",
      ctaButton: "زيارة المتجر",
    },
    hero: {
      tag: "+ سانايا الطبيعية",
      headline1: "مكملات غذائية",
      headline2: "100% طبيعية",
      headline3: "لصحتك",
      description:
        "تركيبات عضوية متقدمة، معتمدة من أونسا ومصنوعة في المغرب بأجود المستخلصات الطبيعية لصحتك ورفاهيتك كل يوم.",
      cta: "اكتشف منتجاتنا",
      ctaSecondary: "اعرف أكثر",
      badge1: "100% طبيعي",
      badge2: "معتمد أونسا",
      badge3: "بدون إضافات",
      offerBadge: "عضوي",
      stat1Value: "4",
      stat1Label: "منتجات متميزة",
      stat2Value: "100%",
      stat2Label: "طبيعي وعضوي",
      stat3Value: "أونسا",
      stat3Label: "معتمد",
    },
    problem: {
      tag: "+ هل تتعرف على نفسك؟",
      heading: "جسمك يرسل إشارات",
      description:
        "لست وحدك. يواجه ملايين الأشخاص نفس التحديات اليومية التي تؤثر على صحتهم ورفاهيتهم.",
      cards: [
        {
          title: "البشرة والحيوية",
          description:
            "شعرك وأظافرك وبشرتك تحتاج إلى دعم غذائي يومي للإشراق والحيوية.",
        },
        {
          title: "التوتر والمزاج",
          description:
            "الإجهاد المزمن وتقلبات المزاج تستنزف جهازك العصبي وطاقتك.",
        },
        {
          title: "الراحة والطاقة",
          description:
            "يحتاج جسمك إلى دعم غذائي مُستهدف للحفاظ على وزن ولياقة صحية.",
        },
      ],
      solutionTag: "+ الحل سانايا",
      solutionHeading: "الجواب الطبيعي لاحتياجاتك",
      solutionText:
        "تقدم سانايا مكملات غذائية عضوية، مُصاغة علمياً بأجود المستخلصات الطبيعية. معتمدة من أونسا ومصنوعة في المغرب.",
      bullets: [
        "مستخلصات طبيعية 100% عضوية",
        "تركيبات مُعدَّة علمياً",
        "معتمدة أونسا · صنع في المغرب",
      ],
    },
    products: {
      tag: "+ منتجاتنا",
      title: "تشكيلة لكل احتياج",
      description: "كل تركيبة مُعدَّة بعناية لتلبية احتياجاتك الصحية الخاصة.",
      cta: "اشتر الآن",
      items: [
        { name: "كولاجين البحر",  tagline: "البشرة · الشعر · الأظافر · المفاصل" },
        { name: "مود كالم",       tagline: "دعم طبيعي للضغط والمزاج" },
        { name: "وزن بوست",      tagline: "مكمل لوزن جسم صحي وطبيعي" },
        { name: "بروستات سوب",   tagline: "صحة البروستاتا والمسالك البولية" },
      ],
    },
    trust: {
      tag: "+ لماذا نختارنا",
      heading: "جودة سانايا مضمونة",
      pillars: [
        {
          number: "٠١",
          title: "100% طبيعي",
          description: "مستخلصات طبيعية نقية وعضوية، بدون إضافات صناعية أو مواد حافظة.",
        },
        {
          number: "٠٢",
          title: "معتمد أونسا",
          description: "معتمد من المكتب الوطني للسلامة الصحية للمنتجات الغذائية بالمغرب.",
        },
        {
          number: "٠٣",
          title: "تركيبة متقدمة",
          description: "مُعدَّة علمياً لفاعلية مثلى وامتصاص أقصى من قِبل الجسم.",
        },
        {
          number: "٠٤",
          title: "صنع في المغرب",
          description: "مُصنَّع بفخر بواسطة بيوتي فارماكوس بالمغرب وفق أعلى معايير الجودة.",
        },
      ],
      certBar: "اعتماد أونسا · #CAPV 26 1009.24 · بيوتي فارماكوس، آيت ملول",
    },
    testimonials: {
      tag: "+ آراء العملاء",
      heading: "أشخاص حقيقيون، نتائج حقيقية",
      subheading: "عملاء يشاركون تجربتهم في فيديوهات حقيقية.",
      items: [
        {
          name: "فاطمة ز.",
          location: "الدار البيضاء",
          product: "مود كالم",
          productColor: "#7B5EA7",
          text: "منذ أن بدأت استخدام مود كالم، انخفض مستوى توتري بشكل ملحوظ. أشعر بهدوء أكبر في حياتي اليومية. أنصح به بشدة!",
        },
        {
          name: "كريم ب.",
          location: "الرباط",
          product: "كولاجين البحر",
          productColor: "#1A7ABF",
          text: "بشرتي أكثر إشراقاً منذ شهر من الاستخدام. شعري أقوى وأظافري لا تنكسر بعد الآن. منتج استثنائي حقاً!",
        },
        {
          name: "ليلى م.",
          location: "مراكش",
          product: "وزن بوست",
          productColor: "#C4621C",
          text: "نجحت أخيراً في اكتساب الوزن بصحة وبشكل طبيعي. النتائج مرئية من الأسبوع الثالث.",
        },
      ],
    },
    faq: {
      tag: "+ أسئلة شائعة",
      heading: "الأسئلة الأكثر شيوعاً",
      items: [
        {
          q: "متى سأرى النتائج؟",
          a: "تتفاوت النتائج حسب الأفراد. بشكل عام، تظهر التأثيرات الأولى خلال 2 إلى 4 أسابيع من الاستخدام المنتظم. للحصول على نتائج مثلى، يُنصح بالاستمرار لمدة 3 أشهر.",
        },
        {
          q: "هل منتجات سانايا معتمدة؟",
          a: "نعم، جميع منتجاتنا معتمدة من أونسا (المكتب الوطني للسلامة الصحية) تحت رقم #CAPV 26 1009.24، وتُصنَّع بواسطة بيوتي فارماكوس في المغرب.",
        },
        {
          q: "هل يمكن الجمع بين عدة منتجات سانايا؟",
          a: "نعم، منتجاتنا مُصممة لتكون متكاملة. مع ذلك، استشر طبيبك قبل الجمع بين عدة مكملات، خاصة إذا كنت تتناول أدوية.",
        },
        {
          q: "هل هناك آثار جانبية؟",
          a: "منتجاتنا مُصاغة بمكونات طبيعية وتُحتمَل بشكل جيد عموماً. في حالة وجود حالة طبية خاصة أو حمل أو رضاعة، استشر طبيبك قبل الاستخدام.",
        },
        {
          q: "كيف أطلب منتجات سانايا؟",
          a: "يمكنك التواصل معنا مباشرة عبر نموذج الاتصال أو عبر البريد الإلكتروني contact@sanaia.ma لتقديم طلبك.",
        },
      ],
    },
    cta: {
      tag: "+ ابدأ اليوم",
      headline: "هل أنت مستعد للعناية بصحتك؟",
      sub: "انضم إلى آلاف المغاربة الذين يثقون في سانايا.",
      button: "اطلب الآن",
    },
    footer: {
      tagline: "مكملات غذائية عضوية ومعتمدة لصحتك ورفاهيتك كل يوم.",
      productsTitle: "منتجاتنا",
      contactTitle: "التواصل",
      address: "لوط 916، المنطقة الصناعية، آيت ملول، المغرب",
      email: "contact@sanaia.ma",
      legal: "الشروط القانونية",
      cgv: "شروط البيع",
      privacy: "سياسة الخصوصية",
      copyright: "© 2026 سانايا. جميع الحقوق محفوظة.",
      onssa: "اعتماد أونسا · #CAPV 26 1009.24 · بيوتي فارماكوس",
      productList: ["كولاجين البحر", "مود كالم", "وزن بوست", "بروستات سوب"],
    },
    product: {
      howToUse: "طريقة الاستخدام",
      ingredients: "المكونات الرئيسية",
      faqTitle: "الأسئلة الشائعة",
      related: "قد يعجبك أيضاً",
      backToShop: "← المتجر",
      orderNow: "اطلب الآن",
      perUnit: "/ وحدة",
      certifiedBy: "معتمد أونسا",
    },
    checkout: {
      tag: "+ اطلب الآن",
      heading: "أتمم طلبك",
      summaryTitle: "طلبك",
      qty: "الكمية",
      delivery: "التوصيل",
      deliveryValue: "مجاني",
      total: "المجموع",
      formTitle: "بياناتك",
      name: "الاسم الكامل",
      namePlaceholder: "محمد العلمي",
      phone: "رقم الهاتف",
      phonePlaceholder: "0612345678",
      city: "المدينة",
      cityPlaceholder: "الدار البيضاء",
      address: "العنوان الكامل",
      addressPlaceholder: "الرقم، الشارع، الحي...",
      submit: "تأكيد الطلب",
      submitting: "جارٍ المعالجة...",
      successTitle: "تم تأكيد طلبك !",
      successBody: "سيتصل بك فريقنا خلال 24 ساعة لتأكيد التوصيل.",
      errorRequired: "هذا الحقل مطلوب",
      errorPhone: "رقم غير صالح (مثال: 0612345678)",
      cod: "الدفع عند الاستلام",
      codSub: "ادفع نقداً عند استلام طلبك",
      trust: ["الدفع عند الاستلام", "توصيل في كل أنحاء المغرب", "مضمون أو مسترد"],
    },
  },
};

type Translations = typeof translations.fr;

interface LangCtx {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LangCtx>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");
  const setLang = (l: Language) => setLangState(l);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as Translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
