// Seed product catalog for Velmora Fine Jewelry
// All imagery is requested via the data-strk-img system using descriptive queries.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    short:
      "A whisper of crystal suspended on a slim gold ear cuff — the most flattering kind of sparkle.",
    description:
      "A whisper of crystal suspended on a slim 18K gold-plated ear cuff. Designed to catch the light without competing with the rest of your look, Vivid Aura Jewels are sculpted for everyday wear and styled to be stacked. Comfortable, featherlight, and finished by hand.",
    materials:
      "18K gold-plated brass, hypoallergenic post, lead-free crystal. Free from nickel and cadmium.",
    care:
      "Avoid contact with perfume, lotion, and water. Store in the velvet pouch provided. Wipe gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Each piece arrives in our signature cream gift box with a velvet pouch.",
    imgId: "vivid-aura-1",
    imgIdAlt: "vivid-aura-2",
    badge: "Bestseller",
    variants: [
      { id: "gold", name: "Gold" },
      { id: "silver", name: "Silver" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 87,
    short:
      "A multicolor crystal pendant on a whisper-thin chain — a small garden that hangs at the collarbone.",
    description:
      "A multicolor crystal pendant assembled petal by petal on a whisper-thin 18K gold-plated chain. The Majestic Flora Nectar is small enough for everyday, special enough for the moments you remember. Hand-set stones catch the light at every angle.",
    materials:
      "18K gold-plated brass, multicolor lead-free crystals, hypoallergenic clasp. Free from nickel and cadmium.",
    care:
      "Remove before showering or sleeping. Store flat in the velvet pouch. Gently polish with the included cloth to maintain the gold finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Arrives in our signature cream gift box.",
    imgId: "majestic-flora-1",
    imgIdAlt: "majestic-flora-2",
    badge: "New",
    variants: [
      { id: "gold", name: "Gold" },
      { id: "silver", name: "Silver" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 213,
    short:
      "Chunky gold dome huggies with a soft, hand-polished finish. The everyday piece you'll never take off.",
    description:
      "Chunky gold dome huggies with a soft, hand-polished finish. The Golden Sphere Huggies are the everyday piece you'll never take off — substantial without being heavy, secure without pinching. A true Velmora staple.",
    materials:
      "18K gold-plated brass, hypoallergenic hinge post. Free from nickel and cadmium.",
    care:
      "Avoid contact with water, perfume, and lotion. Store dry in the velvet pouch. Wipe gently with a soft cloth to maintain the polish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Arrives in our signature cream gift box.",
    imgId: "golden-sphere-1",
    imgIdAlt: "golden-sphere-2",
    badge: "Bestseller",
    variants: [
      { id: "gold", name: "Gold" },
      { id: "silver", name: "Silver" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 96,
    short:
      "Textured gold filigree drop earrings — soft, sculptural, and made to move with you.",
    description:
      "Textured gold filigree drop earrings, soft and sculptural. The Amber Lace is made to move with you — the way the light catches the openwork is different every time. Light enough for daytime, elegant enough for evening.",
    materials:
      "18K gold-plated brass, hypoallergenic post. Free from nickel and cadmium.",
    care:
      "Avoid contact with water, perfume, and lotion. Store flat in the velvet pouch. Polish gently with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Arrives in our signature cream gift box.",
    imgId: "amber-lace-1",
    imgIdAlt: "amber-lace-2",
    badge: "Limited",
    variants: [
      { id: "gold", name: "Gold" },
      { id: "silver", name: "Silver" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    short:
      "A gift-boxed earring and necklace set, designed to be unwrapped and remembered.",
    description:
      "A gift-boxed earring and necklace set, designed to be unwrapped and remembered. The Royal Heirloom pairs our most-loved earring silhouette with a delicate matching pendant — both finished in 18K gold plating. Each set is presented in a signature cream gift box with a hand-tied ribbon.",
    materials:
      "18K gold-plated brass, hypoallergenic posts and clasp. Free from nickel and cadmium.",
    care:
      "Avoid contact with water, perfume, and lotion. Store in the original gift box. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping. 30-day returns, no questions asked. Gift wrapping included.",
    imgId: "royal-heirloom-1",
    imgIdAlt: "royal-heirloom-2",
    badge: "Gift Set",
    variants: [
      { id: "gold", name: "Gold" },
    ],
  },
]

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.id === slug) || null
}

export function getRelatedProducts(productId, limit = 4) {
  const current = PRODUCTS.find((p) => p.id === productId)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== productId).slice(0, limit)
}

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    text:
      "I've worn the Golden Sphere Huggies almost every day since they arrived. The weight is just right and the gold hasn't tarnished at all. Genuinely obsessed.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text:
      "Bought the Royal Heirloom set as a gift and ended up keeping it for myself. The packaging alone made me feel something. Will be reordering for every birthday this year.",
  },
  {
    name: "Camille D.",
    rating: 5,
    text:
      "Velmora's pieces look like the ones I save up for, but the price point lets me actually wear them daily. The Majestic Flora Nectar is unreal in person.",
  },
]

// UGC reel items (mimic Instagram Reels strip)
export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "morning light",
    handle: "@velmora",
  },
  {
    id: "reel-2",
    caption: "stacked",
    handle: "@amelia.r",
  },
  {
    id: "reel-3",
    caption: "little luxuries",
    handle: "@sofia.m",
  },
  {
    id: "reel-4",
    caption: "soft gold",
    handle: "@camille",
  },
  {
    id: "reel-5",
    caption: "everyday",
    handle: "@noor.h",
  },
  {
    id: "reel-6",
    caption: "the heirloom set",
    handle: "@isla",
  },
]
