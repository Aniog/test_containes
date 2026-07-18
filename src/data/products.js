// Seed product catalog for Velmora Fine Jewelry.
// Image queries are passed to the strk-img stock system via data-strk-img
// and reference text IDs defined in the rendered JSX.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 124,
    tagline: "Crystal-pavé ear cuff",
    description:
      "A whisper of light, designed to be worn alone or stacked. The Vivid Aura cuff is hand-finished in 18K gold plating and set with a single, ethically sourced crystal that catches every flicker of daylight.",
    materials:
      "18K gold-plated brass · Cubic zirconia crystal · Hypoallergenic · Nickel-free · Water-resistant finish.",
    care: "Avoid direct contact with perfume and lotion. Store in the Velmora pouch. Wipe gently with the included polishing cloth.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns, no questions asked. Each piece ships in a signature Velmora gift box.",
    isBestseller: true,
    textIds: {
      title: "prod-vivid-aura-title",
      desc: "prod-vivid-aura-desc",
      tagline: "prod-vivid-aura-tagline",
    },
    imageQuery: "[prod-vivid-aura-tagline] [prod-vivid-aura-title] gold ear cuff crystal close-up on dark background",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 218,
    tagline: "Multicolor floral crystal necklace",
    description:
      "An heirloom in the making. A delicate vine of pastel crystals forms a soft floral silhouette, suspended on a fine 18K gold-plated chain. Designed to layer, or to be worn as a singular statement.",
    materials:
      "18K gold-plated brass · Hand-set crystal pavé · Lobster-claw clasp · Hypoallergenic · Lead-free.",
    care: "Remove before showering or sleeping. Store flat in the Velmora box to keep the chain supple.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns. Arrives in a gift-ready box with a hand-tied ribbon.",
    isBestseller: true,
    textIds: {
      title: "prod-majestic-flora-title",
      desc: "prod-majestic-flora-desc",
      tagline: "prod-majestic-flora-tagline",
    },
    imageQuery: "[prod-majestic-flora-tagline] [prod-majestic-flora-title] floral crystal gold necklace on dark background",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 342,
    tagline: "Chunky gold dome huggies",
    description:
      "Modern, weighty, quietly bold. The Golden Sphere huggies are sculpted as a smooth gold dome and polished to a soft mirror finish. A second-skin fit for everyday wear.",
    materials:
      "18K gold-plated brass · Hinged clicker closure · Hypoallergenic · Tarnish-resistant PVD coating.",
    care: "Wipe with a soft cloth after wear. Avoid contact with chlorinated water.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns. Sold as a pair.",
    isBestseller: true,
    textIds: {
      title: "prod-golden-sphere-title",
      desc: "prod-golden-sphere-desc",
      tagline: "prod-golden-sphere-tagline",
    },
    imageQuery: "[prod-golden-sphere-tagline] [prod-golden-sphere-title] chunky gold dome huggie earrings close-up on dark",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 156,
    tagline: "Textured gold filigree drop earrings",
    description:
      "A modern take on a vintage lace. The Amber Lace drop is sculpted with intricate filigree detail, then hand-polished to a soft champagne gold finish. Light as a breath, made to be noticed.",
    materials:
      "18K gold-plated brass · Fine filigree casting · Hypoallergenic · Sterling silver post.",
    care: "Store separately to protect the filigree. Wipe gently; do not bend.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns. Sold as a pair.",
    isBestseller: true,
    textIds: {
      title: "prod-amber-lace-title",
      desc: "prod-amber-lace-desc",
      tagline: "prod-amber-lace-tagline",
    },
    imageQuery: "[prod-amber-lace-tagline] [prod-amber-lace-title] gold filigree drop earrings on dark background",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    rating: 5.0,
    reviews: 87,
    tagline: "Gift-boxed earring & necklace set",
    description:
      "The set that started it all. A pair of pavé huggies and a delicate pendant, presented together in a keepsake velvet box. Made to be given, designed to be kept.",
    materials:
      "18K gold-plated brass · Cubic zirconia · Adjustable 16–18 inch chain · Hypoallergenic.",
    care: "A soft polishing cloth is included. Store in the original box between wears.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns. Gift receipt included on request.",
    isBestseller: true,
    textIds: {
      title: "prod-royal-heirloom-title",
      desc: "prod-royal-heirloom-desc",
      tagline: "prod-royal-heirloom-tagline",
    },
    imageQuery: "[prod-royal-heirloom-tagline] [prod-royal-heirloom-title] gold jewelry gift set in velvet box on dark",
  },
  {
    id: "celeste-hoops",
    name: "Celeste Hoops",
    category: "earrings",
    price: 48,
    rating: 4.6,
    reviews: 92,
    tagline: "Slim gold tube hoops",
    description:
      "A quiet essential. Slim, polished gold tube hoops with a clean silhouette and a comfortable, secure hinge. The kind of piece you forget you're wearing — until someone asks where it's from.",
    materials:
      "18K gold-plated brass · Hinged clicker closure · Hypoallergenic.",
    care: "Wipe with a soft dry cloth. Avoid perfumes and lotions.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns. Sold as a pair.",
    isBestseller: false,
    textIds: {
      title: "prod-celeste-title",
      desc: "prod-celeste-desc",
      tagline: "prod-celeste-tagline",
    },
    imageQuery: "[prod-celeste-tagline] [prod-celeste-title] slim gold tube hoop earrings on dark background",
  },
  {
    id: "noir-pendant",
    name: "Noir Pendant",
    category: "necklaces",
    price: 72,
    rating: 4.9,
    reviews: 144,
    tagline: "Onyx teardrop pendant",
    description:
      "A whisper of drama. A faceted onyx teardrop suspended on a fine gold chain — a piece that reads as quietly powerful by day, and striking by night.",
    materials:
      "18K gold-plated brass · Natural onyx gemstone · 18 inch chain with 2 inch extender.",
    care: "Remove before sleeping or showering. Store flat.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns.",
    isBestseller: false,
    textIds: {
      title: "prod-noir-title",
      desc: "prod-noir-desc",
      tagline: "prod-noir-tagline",
    },
    imageQuery: "[prod-noir-tagline] [prod-noir-title] onyx teardrop gold pendant on dark background",
  },
  {
    id: "siren-chain",
    name: "Siren Chain",
    category: "necklaces",
    price: 56,
    rating: 4.7,
    reviews: 178,
    tagline: "Layered gold rope chain",
    description:
      "A modern heirloom. The Siren chain layers effortlessly — wear it solo, doubled, or with a pendant. Soft rope-link texture catches the light like water.",
    materials:
      "18K gold-plated brass · Lobster-claw clasp · 16 inch chain · Hypoallergenic.",
    care: "Store flat. Polish with the included cloth to maintain luster.",
    shipping: "Free worldwide shipping on orders over $50. 30-day returns.",
    isBestseller: false,
    textIds: {
      title: "prod-siren-title",
      desc: "prod-siren-desc",
      tagline: "prod-siren-tagline",
    },
    imageQuery: "[prod-siren-tagline] [prod-siren-title] layered gold rope chain necklace on dark background",
  },
];

export const BESTSELLERS = PRODUCTS.filter((p) => p.isBestseller);

export const CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    imageQuery:
      "gold drop earrings on warm dark background, editorial jewelry photography",
    textId: "cat-earrings-label",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    imageQuery:
      "gold pendant necklace on warm dark background, editorial jewelry photography",
    textId: "cat-necklaces-label",
  },
  {
    id: "huggies",
    label: "Huggies",
    imageQuery:
      "gold huggie hoop earrings on warm dark background, editorial jewelry photography",
    textId: "cat-huggies-label",
  },
];

// Instagram-Reel-style UGC strip — vertical 9:16 cards
export const REELS = [
  {
    id: "reel-1",
    handle: "@noor.aurelia",
    caption: "Stacked, every day.",
    imageQuery:
      "woman wearing stacked gold huggie earrings, ear close-up, warm cinematic lighting",
  },
  {
    id: "reel-2",
    handle: "@inesmori",
    caption: "Morning ritual.",
    imageQuery:
      "woman putting on delicate gold pendant necklace, soft morning light",
  },
  {
    id: "reel-3",
    handle: "@aurelia.studios",
    caption: "The heirloom edit.",
    imageQuery:
      "close up of gold filigree drop earrings worn on ear, soft warm tone",
  },
  {
    id: "reel-4",
    handle: "@camille.ren",
    caption: "Softly golden.",
    imageQuery:
      "woman with chunky gold dome huggie earrings, side profile, warm light",
  },
  {
    id: "reel-5",
    handle: "@lina.vega",
    caption: "Layered, never loud.",
    imageQuery:
      "woman layering two delicate gold necklaces, neckline close-up, soft cinematic",
  },
  {
    id: "reel-6",
    handle: "@orla.sage",
    caption: "Boxed with love.",
    imageQuery:
      "gold jewelry gift box opened with earrings and necklace inside, warm light",
  },
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Amelia R.",
    rating: 5,
    quote:
      "I've worn the Golden Sphere huggies every single day for six months. The plating hasn't dulled once. They look like a piece three times the price.",
  },
  {
    id: "t-2",
    name: "Sophie K.",
    rating: 5,
    quote:
      "I bought the Royal Heirloom set for my sister's birthday. The packaging alone made me cry. The jewelry made her cry harder. A new tradition.",
  },
  {
    id: "t-3",
    name: "Daniela M.",
    rating: 5,
    quote:
      "Finally, demi-fine that doesn't look fake. The Majestic Flora necklace layers beautifully with everything I own. I'm already eyeing my next piece.",
  },
];

export const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    title: "The Everyday Edit",
    blurb: "Pieces designed to live in. Layered, lived in, loved.",
    imageQuery: "gold jewelry flat lay on warm linen, editorial still life",
  },
  {
    id: "the-heirloom-set",
    title: "The Heirloom Set",
    blurb: "Made to be kept, and to be passed on.",
    imageQuery: "gold jewelry in velvet gift box, warm cinematic still life",
  },
  {
    id: "soft-gold",
    title: "Soft Gold",
    blurb: "A quieter kind of statement.",
    imageQuery: "delicate thin gold jewelry on soft fabric, editorial photography",
  },
];

export const findProductById = (id) => PRODUCTS.find((p) => p.id === id);
