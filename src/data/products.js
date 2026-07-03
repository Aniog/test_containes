// Velmora product catalog.
// Each product has 2 gallery images. The image source URLs are resolved
// at build time by the vite-plugin-strk-img from `data-strk-img` queries
// that reference the static text near each image (e.g. product name, copy).

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const MATERIALS = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "mixed", label: "Mixed Metals" },
]

// Star ratings — used in product cards and detail page.
const R = 4.8

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    category: "earrings",
    price: 42,
    compareAt: null,
    rating: R,
    reviews: 312,
    tone: "gold",
    materials: ["18K Gold Plated", "Cubic Zirconia"],
    short:
      "A whisper-thin gold ear cuff set with a single crystal accent. Made to be noticed up close.",
    description:
      "The Vivid Aura Cuff is hand-finished in 18K gold plating over a brass core, then set with a single brilliant-cut cubic zirconia. No piercing required — the open cuff shape slides on comfortably and stays in place. Wear it solo, or layer with the Golden Sphere Huggies for a considered stack.",
    care:
      "Avoid contact with water, perfume and lotion. Store in the pouch provided. Wipe gently with the polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "vivid-aura-cuff-img-1",
        query: "[vivid-aura-cuff-name] [vivid-aura-cuff-copy] [home-hero-subtitle]",
        alt: "Vivid Aura Cuff worn on ear",
      },
      {
        id: "vivid-aura-cuff-img-2",
        query: "[vivid-aura-cuff-name] gold ear cuff crystal detail",
        alt: "Vivid Aura Cuff close-up detail",
      },
    ],
    tags: ["bestseller", "new"],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    category: "necklaces",
    price: 68,
    compareAt: null,
    rating: R,
    reviews: 248,
    tone: "gold",
    materials: ["18K Gold Plated", "Swarovski Crystals"],
    short:
      "A garden of soft-tone crystals arranged on a delicate gold chain. The kind of piece that does the talking.",
    description:
      "Inspired by heirloom floral motifs, the Majestic Flora Necklace suspends a cluster of hand-set Swarovski crystals in blush, champagne and smoke from a fine 18K gold-plated chain. Adjustable to 16 or 18 inches.",
    care:
      "Remove before showering or sleeping. Store flat in the suede pouch. Avoid contact with lotions and perfumes.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "majestic-flora-img-1",
        query: "[majestic-flora-name] [majestic-flora-copy] [home-hero-subtitle]",
        alt: "Majestic Flora Necklace styled on model",
      },
      {
        id: "majestic-flora-img-2",
        query: "[majestic-flora-name] floral crystal necklace detail",
        alt: "Majestic Flora Necklace crystal detail",
      },
    ],
    tags: ["bestseller"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    compareAt: null,
    rating: R,
    reviews: 421,
    tone: "gold",
    materials: ["18K Gold Plated", "Sterling Silver Post"],
    short:
      "Chunky, dome-shaped huggies in a polished gold finish. The everyday staple, refined.",
    description:
      "A confident take on the classic huggie. The Golden Sphere is a chunky gold dome on a hinged post, with a high-polish finish that catches the light without feeling loud. Lightweight enough for daily wear, substantial enough to feel like fine jewelry.",
    care:
      "Wipe with a soft cloth after wear. Keep dry. Store in the pouch to prevent scratches.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "golden-sphere-img-1",
        query: "[golden-sphere-name] [golden-sphere-copy] [home-hero-subtitle]",
        alt: "Golden Sphere Huggies worn close to lobe",
      },
      {
        id: "golden-sphere-img-2",
        query: "[golden-sphere-name] chunky gold huggie earring detail",
        alt: "Golden Sphere Huggies detail",
      },
    ],
    tags: ["bestseller"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    compareAt: null,
    rating: R,
    reviews: 187,
    tone: "gold",
    materials: ["18K Gold Plated", "Brass"],
    short:
      "Textured gold filigree drop earrings — small, sculptural, and quietly statement.",
    description:
      "Inspired by antique lace, the Amber Lace drop is a slim, textured filigree shape in 18K gold plating. The pattern catches light as you move, like sunlight on fabric. A buttery push-back closure keeps them secure all day.",
    care:
      "Avoid water and chemicals. Polish gently with the included cloth. Store flat.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "amber-lace-img-1",
        query: "[amber-lace-name] [amber-lace-copy] [home-hero-subtitle]",
        alt: "Amber Lace drop earrings on model",
      },
      {
        id: "amber-lace-img-2",
        query: "[amber-lace-name] filigree drop earring detail",
        alt: "Amber Lace earrings close-up",
      },
    ],
    tags: ["bestseller"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    compareAt: 120,
    rating: R,
    reviews: 96,
    tone: "gold",
    materials: ["18K Gold Plated", "Cubic Zirconia"],
    short:
      "A matching earring and necklace duo, presented in a keepsake gift box.",
    description:
      "Our Royal Heirloom Set pairs a delicate crystal pendant with a pair of small pavé huggies. Both pieces are 18K gold plated over brass, finished to a soft mirror polish, and arrive in our signature linen-lined gift box — ready to gift, designed to keep.",
    care:
      "Remove before showering or sleeping. Wipe with the included cloth. Store in the gift box between wears.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "royal-heirloom-img-1",
        query: "[royal-heirloom-name] [royal-heirloom-copy] [home-hero-subtitle]",
        alt: "Royal Heirloom Set gift box and jewelry",
      },
      {
        id: "royal-heirloom-img-2",
        query: "[royal-heirloom-name] earring and necklace set detail",
        alt: "Royal Heirloom Set jewelry detail",
      },
    ],
    tags: ["bestseller", "gift"],
  },
]

export const BESTSELLER_IDS = [
  "vivid-aura-cuff",
  "majestic-flora-necklace",
  "golden-sphere-huggies",
  "amber-lace-earrings",
  "royal-heirloom-set",
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter(
    (p) => p.id !== id && (p.category === current.category || p.tone === current.tone),
  ).slice(0, limit)
}
