// Velmora — seed product catalog.
// Each product carries its own descriptive `imageQuery` so the strk-img
// system can resolve warm, on-brand imagery at runtime.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    tone: "18K Gold Plated",
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    imageQuery: "single gold ear cuff with crystal accent on dark linen background, closeup, warm light, editorial jewelry photography",
    imageQueryAlt: "model wearing gold ear cuff, soft warm light, editorial portrait",
    shortDescription:
      "A whisper of crystal set on a sculpted gold ear cuff — luminous, modern, made to be noticed from across the room.",
    description:
      "Vivid Aura Jewels are sculpted from a single curve of 18K gold-plated brass and finished with a hand-set crystal accent that catches light from every angle. Lightweight enough for all-day wear, statement enough for an evening out. Pairs seamlessly with our huggies and minimalist studs.",
    materials:
      "18K gold-plated brass, lead-free and nickel-free, hand-set crystal accent. Hypoallergenic and tarnish-resistant with proper care.",
    care: "Avoid contact with water, perfume, and lotion. Store in the included velvet pouch. Buff gently with a soft cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Each order ships in a recyclable gift box.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    tone: "18K Gold Plated",
    rating: 4.8,
    reviews: 218,
    badge: "New",
    imageQuery: "multicolor floral crystal pendant necklace on warm taupe linen, editorial jewelry still life, soft natural light",
    imageQueryAlt: "model wearing multicolor crystal floral necklace, closeup of neckline",
    shortDescription:
      "A garden in full bloom. Hand-arranged crystals in soft petal tones drape from a delicate gold chain.",
    description:
      "Inspired by the first flowers of late spring, the Majestic Flora Nectar necklace features hand-arranged crystals in soft coral, sage, blush, and champagne, set in a delicate floral silhouette. The adjustable 16–18 inch chain is finished with a refined lobster clasp.",
    materials:
      "18K gold-plated brass chain and setting, premium Czech crystals. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before showering or sleeping. Store flat in the included pouch. Avoid contact with sprays and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Ships in a recyclable gift box.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    tone: "18K Gold Plated",
    rating: 4.9,
    reviews: 540,
    badge: "Cult Favorite",
    imageQuery: "chunky gold dome huggie hoop earrings, pair on warm cream linen, editorial jewelry closeup, soft light",
    imageQueryAlt: "model wearing chunky gold dome huggie earrings, side profile",
    shortDescription:
      "A polished gold dome, perfectly weighted. The huggie you'll reach for every single day.",
    description:
      "Sculpted as a continuous dome, the Golden Sphere Huggies sit close to the lobe with a subtle, weighty feel. The hinged closure clicks softly into place. Sold as a pair — wear them solo, stack with studs, or pair with our ear cuffs.",
    materials:
      "18K gold-plated brass with a high-polish finish. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before showering, sleeping, or exercising. Buff with the included polishing cloth to maintain shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Ships in a recyclable gift box.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    tone: "18K Gold Plated",
    rating: 4.7,
    reviews: 176,
    badge: "",
    imageQuery: "textured gold filigree drop earrings on deep espresso background, dramatic editorial lighting, jewelry closeup",
    imageQueryAlt: "model wearing textured gold filigree drop earrings, ear closeup",
    shortDescription:
      "Heirloom-inspired filigree, hand-finished and featherweight. Romance you can wear.",
    description:
      "Inspired by a 1920s locket discovered in a Florence flea market, the Amber Lace Earrings are hand-finished in textured filigree and suspended on a fine gold chain. Long enough to move, light enough to forget.",
    materials:
      "18K gold-plated brass, hand-finished filigree. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before showering or sleeping. Store flat in the included pouch. Avoid contact with perfume.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Ships in a recyclable gift box.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold",
    tone: "18K Gold Plated",
    rating: 5.0,
    reviews: 94,
    badge: "Gift Edit",
    imageQuery: "gift-boxed gold earring and necklace set on cream linen, editorial flat lay, warm soft light",
    imageQueryAlt: "model wearing matching gold earring and necklace set, portrait",
    shortDescription:
      "A matching earring and necklace set, presented in our signature gift box. The heirloom in the making.",
    description:
      "The Royal Heirloom Set pairs our bestselling drop earrings with a delicate gold pendant on an adjustable 16–18 inch chain. Each set arrives in our signature cream linen gift box, ready to give — or to keep.",
    materials:
      "18K gold-plated brass. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before showering or sleeping. Store in the included gift box. Buff gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Gift-wrapped on request.",
  },
];

export const categories = [
  {
    id: "earrings",
    label: "Earrings",
    imageQuery:
      "editorial flat lay of gold earrings on warm cream linen, soft natural light, jewelry photography",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    imageQuery:
      "gold pendant necklace draped on warm taupe silk fabric, editorial still life, soft daylight",
  },
  {
    id: "huggies",
    label: "Huggies",
    imageQuery:
      "pair of gold huggie hoop earrings on dark espresso background, closeup, warm studio light",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    quote:
      "I bought the Golden Sphere Huggies on a whim and now I never take them off. They feel so much more expensive than they are.",
  },
  {
    id: "t2",
    name: "Sloane K.",
    rating: 5,
    quote:
      "Packaging alone made me feel like I was opening a gift from a Parisian atelier. The necklace is even prettier in person.",
  },
  {
    id: "t3",
    name: "Priya M.",
    rating: 5,
    quote:
      "I've worn the Majestic Flora Nectar three times this month and gotten compliments every single time. A new forever piece.",
  },
];

export const reelSlides = [
  {
    id: "r1",
    caption: "morning light, golden hour",
    imageQuery:
      "vertical portrait closeup of ear wearing gold huggie hoop earring, soft morning window light, vertical 9:16",
  },
  {
    id: "r2",
    caption: "the everyday stack",
    imageQuery:
      "vertical portrait of neck and collarbone wearing layered gold necklaces, soft warm light, vertical 9:16",
  },
  {
    id: "r3",
    caption: "something old, something new",
    imageQuery:
      "vertical portrait closeup of hand holding gold filigree drop earrings, cream linen, soft daylight, vertical 9:16",
  },
  {
    id: "r4",
    caption: "in the garden",
    imageQuery:
      "vertical portrait of woman wearing floral crystal necklace in soft garden setting, warm light, vertical 9:16",
  },
  {
    id: "r5",
    caption: "the heirloom edit",
    imageQuery:
      "vertical portrait of hands opening cream gift box with gold jewelry, soft warm light, vertical 9:16",
  },
  {
    id: "r6",
    caption: "golden hour, always",
    imageQuery:
      "vertical portrait of ear with gold ear cuff and crystal accent, golden hour sunlight, vertical 9:16",
  },
];
