/* =========================================================
   Rim Medical — البيانات الافتراضية (Default Data)
   ---------------------------------------------------------
   هذا الملف هو "قاعدة البيانات" المبدئية للموقع.
   أي تعديل تقوم به من لوحة التحكم يُحفَظ في متصفحك (localStorage)
   ويطغى على القيم الموجودة هنا.
   لنشر التعديلات للجميع: استخدم زر "تصدير ملف البيانات" في لوحة
   التحكم ثم استبدل هذا الملف بالملف الذي تم تنزيله.
   ========================================================= */

window.RIM_DEFAULT_DATA = {
  version: 1,

  settings: {
    /* رقم واتساب الزبائن العاديين (أفراد/عائلات) */
    customerWhatsapp: "22228646987",
    /* رقم واتساب المؤسسات (عيادات، صيدليات، جمعيات) — منفصل تماماً */
    institutionalWhatsapp: "22236199416",
    /* شعار الموقع: اتركه فارغاً لاستخدام الشعار الافتراضي،
       أو ارفع صورة من لوحة التحكم */
    logo: "",
    /* أرقام الإحصائيات (الدليل الاجتماعي) */
    stats: {
      ordersDelivered: 1250,
      happyClients: 940,
      partners: 35,
      yearsExperience: 8
    },
    /* روابط التواصل الاجتماعي (اتركها فارغة لإخفائها) */
    social: {
      facebook: "",
      instagram: "",
      tiktok: ""
    }
  },

  /* ------------------------------------------------------
     الفئات (التصنيفات) — قابلة للإضافة والتعديل والحذف من
     لوحة التحكم. لكل فئة: معرّف، أيقونة، اسم ووصف بالثلاث لغات
     ------------------------------------------------------ */
  categories: [
    {
      id: "mobility", icon: "🦽",
      name: { ar: "معدات الحركة والتنقل", fr: "Mobilité et déplacement", en: "Mobility Equipment" },
      desc: { ar: "كراسي متحركة، مشايات، وعكازات", fr: "Fauteuils roulants, déambulateurs, béquilles", en: "Wheelchairs, walkers and crutches" }
    },
    {
      id: "monitoring", icon: "🩺",
      name: { ar: "أجهزة القياس والمراقبة", fr: "Mesure et surveillance", en: "Monitoring Devices" },
      desc: { ar: "سكر، ضغط، أكسجين، وسماعات طبية", fr: "Glycémie, tension, oxygène, stéthoscopes", en: "Glucose, blood pressure, oxygen, stethoscopes" }
    },
    {
      id: "hearing", icon: "👂",
      name: { ar: "المستلزمات السمعية", fr: "Audition", en: "Hearing Supplies" },
      desc: { ar: "سماعات أذن طبية ومستلزماتها", fr: "Appareils auditifs et accessoires", en: "Hearing aids and accessories" }
    },
    {
      id: "orthopedic", icon: "🦴",
      name: { ar: "الدعامات والتقويم", fr: "Orthèses et orthopédie", en: "Braces & Orthopedics" },
      desc: { ar: "دعامات الظهر والمفاصل والعظام", fr: "Ceintures lombaires et attelles", en: "Back, joint and bone supports" }
    },
    {
      id: "homecare", icon: "🏠",
      name: { ar: "مستلزمات العناية المنزلية", fr: "Soins à domicile", en: "Home Care Supplies" },
      desc: { ar: "كل ما يحتاجه المريض في المنزل", fr: "Tout le nécessaire pour le patient à la maison", en: "Everything a patient needs at home" }
    },
    {
      id: "beds", icon: "🛏️",
      name: { ar: "أسرّة ومعدات طبية ثقيلة", fr: "Lits et équipements lourds", en: "Beds & Heavy Equipment" },
      desc: { ar: "أسرّة كهربائية ومولدات أكسجين", fr: "Lits électriques et concentrateurs d'oxygène", en: "Electric beds and oxygen concentrators" }
    }
  ],

  /* ------------------------------------------------------
     المنتجات — لكل منتج:
     id        : معرّف فريد
     category  : mobility | monitoring | hearing | orthopedic | homecare | beds
     name/desc : الاسم والوصف بالثلاث لغات
     price     : السعر بالأوقية الجديدة (MRU) — اتركه null لعرض "السعر عند الطلب"
     image     : رابط صورة أو صورة مرفوعة من لوحة التحكم — فارغ = أيقونة افتراضية
     icon      : أيقونة (إيموجي) تُعرض إذا لم توجد صورة
     badge     : "best" (الأكثر طلباً) | "new" (جديد) | null
     ------------------------------------------------------ */
  products: [
    {
      id: "p-wheelchair",
      category: "mobility",
      icon: "🦽",
      image: "",
      price: 4500,
      badge: "best",
      name: {
        ar: "كرسي متحرك قابل للطي",
        fr: "Fauteuil roulant pliable",
        en: "Foldable Wheelchair"
      },
      desc: {
        ar: "كرسي متحرك خفيف الوزن بهيكل فولاذي متين، قابل للطي بسهولة للنقل والتخزين، مع مساند أذرع مريحة وفرامل أمان.",
        fr: "Fauteuil roulant léger à cadre en acier robuste, pliable facilement pour le transport, avec accoudoirs confortables et freins de sécurité.",
        en: "Lightweight wheelchair with a sturdy steel frame, folds easily for transport and storage, with comfortable armrests and safety brakes."
      }
    },
    {
      id: "p-walker",
      category: "mobility",
      icon: "🚶",
      image: "",
      price: 1200,
      badge: null,
      name: {
        ar: "مشاية طبية قابلة للتعديل",
        fr: "Déambulateur médical réglable",
        en: "Adjustable Medical Walker"
      },
      desc: {
        ar: "مشاية من الألومنيوم الخفيف بارتفاع قابل للتعديل، توفر ثباتاً وأماناً أثناء المشي داخل المنزل وخارجه.",
        fr: "Déambulateur en aluminium léger à hauteur réglable, offrant stabilité et sécurité à l'intérieur comme à l'extérieur.",
        en: "Lightweight aluminum walker with adjustable height, providing stability and safety indoors and outdoors."
      }
    },
    {
      id: "p-glucometer",
      category: "monitoring",
      icon: "🩸",
      image: "",
      price: 850,
      badge: "best",
      name: {
        ar: "جهاز قياس السكر في الدم",
        fr: "Glucomètre (lecteur de glycémie)",
        en: "Blood Glucose Meter"
      },
      desc: {
        ar: "جهاز دقيق وسريع لقياس نسبة السكر، نتيجة خلال 5 ثوانٍ، مع شرائط قياس وإبر وحقيبة حفظ.",
        fr: "Appareil précis et rapide, résultat en 5 secondes, livré avec bandelettes, lancettes et étui de rangement.",
        en: "Accurate and fast glucose meter with results in 5 seconds, includes test strips, lancets and a carry case."
      }
    },
    {
      id: "p-bpmonitor",
      category: "monitoring",
      icon: "❤️",
      image: "",
      price: 1100,
      badge: null,
      name: {
        ar: "جهاز قياس ضغط الدم الإلكتروني",
        fr: "Tensiomètre électronique",
        en: "Digital Blood Pressure Monitor"
      },
      desc: {
        ar: "جهاز أوتوماتيكي بالكامل لقياس الضغط ونبض القلب، شاشة كبيرة واضحة وذاكرة لحفظ آخر القياسات.",
        fr: "Tensiomètre entièrement automatique avec mesure du pouls, grand écran lisible et mémoire des dernières mesures.",
        en: "Fully automatic monitor for blood pressure and pulse, large clear display and memory for recent readings."
      }
    },
    {
      id: "p-oximeter",
      category: "monitoring",
      icon: "🫁",
      image: "",
      price: 300,
      badge: null,
      name: {
        ar: "جهاز قياس الأكسجين (أوكسيميتر)",
        fr: "Oxymètre de pouls",
        en: "Pulse Oximeter"
      },
      desc: {
        ar: "جهاز صغير يوضع على الإصبع لقياس نسبة الأكسجين في الدم ومعدل النبض بدقة خلال ثوانٍ.",
        fr: "Petit appareil à placer au bout du doigt pour mesurer la saturation en oxygène et le pouls en quelques secondes.",
        en: "Compact fingertip device measuring blood oxygen saturation and pulse rate accurately within seconds."
      }
    },
    {
      id: "p-stethoscope",
      category: "monitoring",
      icon: "🩺",
      image: "",
      price: 600,
      badge: null,
      name: {
        ar: "سماعة طبية احترافية",
        fr: "Stéthoscope professionnel",
        en: "Professional Stethoscope"
      },
      desc: {
        ar: "سماعة طبية بجودة صوت عالية ورأس مزدوج، مناسبة للأطباء والممرضين وطلاب الطب.",
        fr: "Stéthoscope à double pavillon offrant une excellente acoustique, idéal pour médecins, infirmiers et étudiants.",
        en: "Dual-head stethoscope with excellent acoustics, ideal for doctors, nurses and medical students."
      }
    },
    {
      id: "p-hearingaid",
      category: "hearing",
      icon: "👂",
      image: "",
      price: 2800,
      badge: "best",
      name: {
        ar: "سماعة أذن طبية لضعاف السمع",
        fr: "Appareil auditif",
        en: "Hearing Aid"
      },
      desc: {
        ar: "سماعة أذن مريحة وخفيفة لتحسين السمع، بمستويات صوت قابلة للتعديل وبطارية طويلة العمر.",
        fr: "Appareil auditif léger et confortable, volume réglable et batterie longue durée pour un meilleur confort d'écoute.",
        en: "Comfortable, lightweight hearing aid with adjustable volume levels and long-lasting battery."
      }
    },
    {
      id: "p-backbrace",
      category: "orthopedic",
      icon: "🦴",
      image: "",
      price: 950,
      badge: "best",
      name: {
        ar: "دعامة ظهر طبية",
        fr: "Ceinture lombaire médicale",
        en: "Medical Back Support Brace"
      },
      desc: {
        ar: "دعامة لأسفل الظهر تخفف الآلام وتصحح وضعية الجلوس والوقوف، بخامات مسامية مريحة ومقاسات متعددة.",
        fr: "Ceinture de soutien lombaire qui soulage la douleur et corrige la posture, en matière respirante, plusieurs tailles.",
        en: "Lower-back support brace that relieves pain and corrects posture, made of breathable material, multiple sizes."
      }
    },
    {
      id: "p-kneebrace",
      category: "orthopedic",
      icon: "🦵",
      image: "",
      price: 650,
      badge: null,
      name: {
        ar: "دعامة ركبة مرنة",
        fr: "Genouillère élastique",
        en: "Elastic Knee Brace"
      },
      desc: {
        ar: "دعامة ركبة تمنح ثباتاً للمفصل وتخفف الألم أثناء الحركة، مناسبة للرياضيين وكبار السن.",
        fr: "Genouillère offrant maintien et soulagement de la douleur pendant le mouvement, adaptée aux sportifs et aux seniors.",
        en: "Knee brace providing joint stability and pain relief during movement, suitable for athletes and seniors."
      }
    },
    {
      id: "p-airmattress",
      category: "homecare",
      icon: "🛏️",
      image: "",
      price: 1900,
      badge: null,
      name: {
        ar: "مرتبة هوائية ضد قرح الفراش",
        fr: "Matelas anti-escarres à air",
        en: "Anti-Bedsore Air Mattress"
      },
      desc: {
        ar: "مرتبة هوائية متموجة مع مضخة كهربائية هادئة، تقي المرضى طريحي الفراش من قرح الضغط.",
        fr: "Matelas à air alterné avec pompe électrique silencieuse, prévient les escarres chez les patients alités.",
        en: "Alternating air mattress with a quiet electric pump, prevents pressure sores for bedridden patients."
      }
    },
    {
      id: "p-careset",
      category: "homecare",
      icon: "🧴",
      image: "",
      price: null,
      badge: null,
      name: {
        ar: "مستلزمات العناية المنزلية للمرضى",
        fr: "Kit de soins à domicile",
        en: "Home Patient Care Supplies"
      },
      desc: {
        ar: "تشكيلة متكاملة: حفاضات كبار، مفارش طبية، قفازات، ومستلزمات نظافة يومية للمرضى في المنزل.",
        fr: "Gamme complète : changes adultes, alèses médicales, gants et produits d'hygiène quotidienne pour les patients à domicile.",
        en: "Complete range: adult diapers, medical underpads, gloves and daily hygiene supplies for patients at home."
      }
    },
    {
      id: "p-hospitalbed",
      category: "beds",
      icon: "🏥",
      image: "",
      price: 28000,
      badge: "best",
      name: {
        ar: "سرير طبي كهربائي متحرك",
        fr: "Lit médicalisé électrique",
        en: "Electric Hospital Bed"
      },
      desc: {
        ar: "سرير طبي كهربائي متعدد الوضعيات بجوانب أمان وعجلات مع فرامل، مثالي للرعاية المنزلية والعيادات.",
        fr: "Lit médicalisé électrique multi-positions avec barrières de sécurité et roues à freins, idéal pour le domicile et les cliniques.",
        en: "Multi-position electric hospital bed with safety rails and locking wheels, ideal for home care and clinics."
      }
    },
    {
      id: "p-oxygen",
      category: "beds",
      icon: "💨",
      image: "",
      price: null,
      badge: null,
      name: {
        ar: "جهاز مولد أكسجين",
        fr: "Concentrateur d'oxygène",
        en: "Oxygen Concentrator"
      },
      desc: {
        ar: "جهاز توليد أكسجين طبي بتدفق قابل للضبط وتشغيل هادئ ومستمر، للاستخدام المنزلي والعيادات.",
        fr: "Concentrateur d'oxygène médical à débit réglable, fonctionnement silencieux et continu, pour domicile et cliniques.",
        en: "Medical oxygen concentrator with adjustable flow, quiet continuous operation, for home and clinic use."
      }
    }
  ]
};
