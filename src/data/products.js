// Seed product catalog for Velmora Fine Jewelry
// Each product has 2-3 image queries (primary + secondary hover) and 1 vertical "lifestyle" shot.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gifting Sets" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
]

export const PRICE_BUCKETS = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75.01, max: 9999 },
]

export const VARIANTS = [
  { id: "gold", label: "18K Gold", priceAdjust: 0, swatch: "#B8956A" },
  { id: "silver", label: "Sterling Silver", priceAdjust: 0, swatch: "#D8D2C5" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff · Crystal",
    price: 42,
    rating: 4.9,
    reviews: 128,
    category: "earrings",
    material: "18k-gold",
    description:
      "A delicate ear cuff set with a single hand-set crystal — designed to catch candlelight. Crafted in 18K gold-plated brass with a hypoallergenic finish, it sits comfortably along the ear for an effortlessly elevated look.",
    details: [
      "18K gold-plated brass with tarnish-resistant finish",
      "Hand-set cubic zirconia crystal, 4mm",
      "Hypoallergenic and nickel-free",
      "No piercing required — gently squeezes to fit",
    ],
    care: [
      "Remove before showering, swimming, or applying lotion",
      "Store in the velvet pouch provided",
      "Wipe gently with the included polishing cloth",
    ],
    images: [
      "ear cuff gold crystal closeup on dark velvet",
      "vivid aura ear cuff gold crystal on model ear",
      "vivid aura ear cuff on woman with soft warm lighting",
    ],
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Necklace · Floral Crystal",
    price: 68,
    rating: 4.8,
    reviews: 94,
    category: "necklaces",
    material: "18k-gold",
    description:
      "A pendant of hand-arranged crystals in soft botanical tones, suspended on a whisper-fine cable chain. The Flora Nectar reads like a small bouquet caught in gold — designed to be worn alone or layered.",
    details: [
      "18K gold-plated brass chain, 16–18\" adjustable",
      "Multi-tone crystals, hand-set in a floral cluster",
      "Lobster clasp with 2\" extender",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Apply perfume before putting on jewelry",
      "Avoid contact with water and humidity",
      "Store flat in the original box to protect the setting",
    ],
    images: [
      "multicolor floral crystal necklace pendant on dark surface",
      "majestic flora crystal necklace worn on woman neckline",
      "floral crystal necklace closeup macro warm light",
    ],
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies · Dome",
    price: 38,
    rating: 4.9,
    reviews: 312,
    category: "huggies",
    material: "18k-gold",
    description:
      "Chubby, polished dome huggies with a satisfying weight. The Golden Sphere is the everyday earring you forget you're wearing — until the light catches it and someone asks where it's from.",
    details: [
      "18K gold-plated sterling silver core",
      "10mm outside diameter, 6mm tube",
      "Hinged click-top closure for secure fit",
      "Hypoallergenic, suitable for sensitive ears",
    ],
    care: [
      "Sleep, swim, and shower friendly",
      "Polish with a soft cloth as needed",
      "Store in the divided pouch to prevent scratches",
    ],
    images: [
      "chunky gold dome huggie earrings on marble surface",
      "golden sphere huggie earrings on model ear closeup",
      "gold dome huggies styled with hair pulled back",
    ],
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Earrings · Filigree Drop",
    price: 54,
    rating: 4.7,
    reviews: 76,
    category: "earrings",
    material: "18k-gold",
    description:
      "Hand-finished filigree in a vintage lace pattern. Light enough to wear from morning meetings to evening dinners, with just enough movement to feel like something special.",
    details: [
      "18K gold-plated brass with etched filigree detail",
      "1.5\" drop length, 0.5\" width",
      "Post-and-butterfly back",
      "Hypoallergenic, lead-free, nickel-free",
    ],
    care: [
      "Avoid spraying perfume directly on metalwork",
      "Wipe with a soft, dry cloth after wear",
      "Store separately to prevent tangling",
    ],
    images: [
      "gold filigree lace drop earrings on linen background",
      "amber lace filigree earrings on woman with updo",
      "gold filigree drop earrings closeup detail",
    ],
    badge: null,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Set · Earring + Necklace",
    price: 95,
    rating: 5.0,
    reviews: 42,
    category: "sets",
    material: "18k-gold",
    description:
      "A matched earring and necklace set in our signature heirloom finish, presented in a keepsake gift box. Designed to be unwrapped, worn on a significant evening, and kept forever.",
    details: [
      "Includes filigree drop earrings + matching pendant necklace",
      "18K gold-plated brass, tarnish-resistant",
      "Velvet-lined gift box with magnetic closure",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Remove before sleeping, showering, or swimming",
      "Use the included polishing cloth monthly",
      "Keep the original box for long-term storage",
    ],
    images: [
      "gold jewelry gift set in velvet box elegant",
      "royal heirloom jewelry set on woman styling",
      "gold filigree earring and necklace set closeup",
    ],
    badge: "Gift-Ready",
  },
  {
    id: "luna-pearl-huggies",
    name: "Luna Pearl Huggies",
    eyebrow: "Huggies · Pearl",
    price: 46,
    rating: 4.7,
    reviews: 41,
    category: "huggies",
    material: "18k-gold",
    description:
      "A single freshwater pearl, hand-selected for its soft luster, set into a slim gold huggie. Wear solo for a hint of warmth, or pair with the Golden Sphere for an editorial ear.",
    details: [
      "18K gold-plated brass huggie, 8mm",
      "Genuine freshwater pearl, 4mm",
      "Hinged click-top closure",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Wipe gently with a soft, dry cloth",
      "Store flat in the original pouch",
    ],
    images: [
      "gold huggie earring with single freshwater pearl closeup",
      "luna pearl huggie on woman ear soft warm light",
      "freshwater pearl huggie flat lay on linen",
    ],
    badge: null,
  },
  {
    id: "celeste-chain-necklace",
    name: "Celeste Chain Necklace",
    eyebrow: "Necklace · Cable Chain",
    price: 58,
    rating: 4.8,
    reviews: 67,
    category: "necklaces",
    material: "18k-gold",
    description:
      "A 16–18\" adjustable cable chain finished with a tiny gold disc pendant. The layering staple — disappears into a neckline and quietly elevates everything around it.",
    details: [
      "18K gold-plated brass cable chain, 16–18\"",
      "5mm disc pendant, hand-finished",
      "Lobster clasp with 2\" extender",
      "Hypoallergenic, tarnish-resistant",
    ],
    care: [
      "Remove before sleeping and showering",
      "Polish gently with the included cloth",
      "Store flat to preserve the chain drape",
    ],
    images: [
      "fine gold cable chain necklace with tiny disc pendant flat lay",
      "celeste chain necklace worn layered on woman",
      "gold disc pendant macro closeup on linen",
    ],
    badge: "Layering",
  },
  {
    id: "marigold-tassel-earrings",
    name: "Marigold Tassel Earrings",
    eyebrow: "Earrings · Tassel",
    price: 48,
    rating: 4.8,
    reviews: 53,
    category: "earrings",
    material: "18k-gold",
    description:
      "Slim gold threads fall like a slow pour of light. Inspired by marigold garlands and warm summer evenings — they catch every glance of light as you turn.",
    details: [
      "18K gold-plated brass tassel chains, 2\" drop",
      "Sterling silver post and butterfly back",
      "Hand-finished, lightweight construction",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Store flat in the original pouch to preserve the drape",
      "Avoid contact with perfume and hair spray",
      "Wipe gently with a soft, dry cloth",
    ],
    images: [
      "gold tassel chain drop earrings on warm linen background",
      "marigold tassel earrings on woman in motion portrait",
      "gold thread tassel earrings macro detail",
    ],
    badge: null,
  },
]

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    quote:
      "I bought the Golden Sphere Huggies as a treat for myself and now I haven't taken them off in three months. The weight is just right.",
    rating: 5,
  },
  {
    name: "Priya S.",
    quote:
      "Gifted the Royal Heirloom Set to my sister for her graduation. The packaging alone made her cry. The jewelry inside is even better.",
    rating: 5,
  },
  {
    name: "Margot L.",
    quote:
      "Finally — demi-fine that doesn't look like fast fashion. Velmora feels like a piece I would have inherited, not ordered online.",
    rating: 5,
  },
]

// Horizontal scroll "Reels" — vertical lifestyle shots
export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "Morning light, golden sphere huggies",
    image: "woman wearing gold huggie earrings morning light closeup portrait",
  },
  {
    id: "reel-2",
    caption: "Layered — flora nectar + cable chain",
    image: "woman wearing layered gold necklaces floral pendant portrait",
  },
  {
    id: "reel-3",
    caption: "Office to evening, ear cuff styled",
    image: "woman wearing gold ear cuff professional styling portrait",
  },
  {
    id: "reel-4",
    caption: "Brunch, amber lace + linen",
    image: "woman wearing gold filigree drop earrings casual portrait",
  },
  {
    id: "reel-5",
    caption: "The heirloom, unboxed",
    image: "woman opening gold jewelry gift set velvet box portrait",
  },
  {
    id: "reel-6",
    caption: "Sunday stack, huggies + cuff",
    image: "woman with stack of gold earrings portrait soft light",
  },
]

// Category tiles for "Shop by category"
export const CATEGORY_TILES = [
  {
    id: "earrings",
    label: "Earrings",
    image: "gold drop earrings and studs on woman editorial portrait warm light",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: "gold pendant necklace on woman neckline editorial portrait",
  },
  {
    id: "huggies",
    label: "Huggies",
    image: "gold huggie hoop earrings on woman ear closeup editorial",
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1
      const bMatch = b.category === current.category ? 0 : 1
      return aMatch - bMatch
    })
    .slice(0, limit)
}

// A product is offered in the tone corresponding to its material
// (18k-gold → gold tone; sterling-silver → silver tone).
// We expose both tones for variety on detail pages.
export function getProductVariants(product) {
  if (!product) return VARIANTS
  return VARIANTS
}
