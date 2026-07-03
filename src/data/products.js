// Velmora seed catalog. Real product images will be swapped in later —
// the data shape stays stable so the storefront renders either way.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings", slug: "earrings" },
  { id: "necklaces", label: "Necklaces", slug: "necklaces" },
  { id: "huggies", label: "Huggies", slug: "huggies" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Crystal-pavé ear cuff, day-to-night",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 312,
    materials: ["18k-gold", "crystal"],
    variantLabel: "Finish",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#B8956A" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C5BE" },
    ],
    description:
      "A whisper of light. The Vivid Aura cuff is hand-set with pavé crystals and finished in 18K gold plating for an heirloom glow that catches every angle of the day.",
    details: [
      "18K gold plated over a hypoallergenic brass core",
      "Hand-set CZ pavé, ~0.6 ct total",
      "No piercing required — slides onto the ear",
      "Lightweight, 4.2 g per cuff",
    ],
    care: [
      "Avoid contact with perfume, lotion and water",
      "Store in the pouch provided",
      "Polish gently with the included cloth",
    ],
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
    primaryImgId: "vivid-aura-primary-3a7f1e",
    secondaryImgId: "vivid-aura-secondary-9c2b48",
    primaryQuery: "gold ear cuff crystal closeup on warm beige fabric",
    secondaryQuery: "model wearing gold crystal ear cuff warm light",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor crystal floral pendant",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 487,
    materials: ["18k-gold", "crystal"],
    variantLabel: "Finish",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#B8956A" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C5BE" },
    ],
    description:
      "A garden in bloom, kept close. The Majestic Flora pendant clusters hand-cut crystals in soft sunset tones — citrine, blush, peridot — for a piece that reads like poetry on the décolletage.",
    details: [
      "18K gold plated chain, 18\" with 2\" extender",
      "Hand-set crystals in citrine, rose and peridot tones",
      "Lobster clasp with branded tag",
    ],
    care: [
      "Remove before showering or sleeping",
      "Wipe with a soft, dry cloth after wear",
      "Store flat in the original box",
    ],
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
    primaryImgId: "majestic-flora-primary-77a1d2",
    secondaryImgId: "majestic-flora-secondary-44be9c",
    primaryQuery: "multicolor crystal floral pendant necklace flat lay",
    secondaryQuery: "model wearing colorful gemstone pendant necklace",
    titleId: "product-majestic-flora-title",
    descId: "product-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 921,
    materials: ["18k-gold"],
    variantLabel: "Finish",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#B8956A" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C5BE" },
    ],
    description:
      "A polished little planet for your ear. The Golden Sphere huggie is sculpted from a solid brass core and finished in 18K gold — substantial, weighty, the kind of earring you forget you're wearing until someone stops you to ask.",
    details: [
      "18K gold plated brass, hollow dome for weightless feel",
      "Hinged clicker closure, secure and easy",
      "12 mm outer diameter, 4 mm thick",
    ],
    care: [
      "Keep dry; remove before swimming",
      "Buff with the included polishing cloth",
      "Store in the velvet pouch to prevent tarnish",
    ],
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
    primaryImgId: "golden-sphere-primary-b21f88",
    secondaryImgId: "golden-sphere-secondary-3e6a90",
    primaryQuery: "chunky gold dome huggie hoop earrings on linen",
    secondaryQuery: "model close-up wearing chunky gold hoop earrings",
    titleId: "product-golden-sphere-title",
    descId: "product-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Filigree drop earrings in warm gold",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 256,
    materials: ["18k-gold"],
    variantLabel: "Finish",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#B8956A" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C5BE" },
    ],
    description:
      "Filigree work cast in 18K gold, finished to feel like a vintage find. The Amber Lace drop moves with you — the way light hits the openwork changes every time you turn your head.",
    details: [
      "18K gold plated brass with antique-finish filigree",
      "Lever-back closure for pierced ears",
      "35 mm drop, 14 mm at widest point",
    ],
    care: [
      "Avoid hairspray and perfume contact",
      "Wipe gently with a dry cloth after wear",
      "Store flat to protect the filigree",
    ],
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
    primaryImgId: "amber-lace-primary-c5d3e6",
    secondaryImgId: "amber-lace-secondary-2b8f1a",
    primaryQuery: "gold filigree drop earrings antique lace pattern",
    secondaryQuery: "model wearing ornate gold filigree drop earrings",
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring & necklace duo",
    category: "earrings",
    price: 95,
    rating: 5.0,
    reviewCount: 174,
    materials: ["18k-gold", "crystal"],
    variantLabel: "Finish",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#B8956A" },
      { id: "silver", label: "Sterling Silver", swatch: "#C9C5BE" },
    ],
    description:
      "A miniature suite, made to be gifted. The Royal Heirloom Set pairs a delicate crystal pendant with its matching stud — finished in 18K gold, presented in our signature ivory box with ribbon and a handwritten note card.",
    details: [
      "18K gold plated chain, 16\" with 2\" extender",
      "Matching CZ stud earrings, 6 mm",
      "Hand-tied ribbon, ivory presentation box",
      "Blank note card included",
    ],
    care: [
      "Remove before water, perfume and sleep",
      "Polish with the included cloth",
      "Store in the original box between wears",
    ],
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked.",
    primaryImgId: "royal-heirloom-primary-1d4b9a",
    secondaryImgId: "royal-heirloom-secondary-8f02c7",
    primaryQuery: "gold jewelry gift set in ivory box with ribbon",
    secondaryQuery: "model wearing gold pendant and stud earring set",
    titleId: "product-royal-heirloom-title",
    descId: "product-royal-heirloom-desc",
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== id && p.category === current.category,
  )
  const others = PRODUCTS.filter(
    (p) => p.id !== id && p.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function getCategoryLabel(id) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id
}
