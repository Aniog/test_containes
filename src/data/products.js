// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes.
// Each product carries stable text-reference IDs so image queries resolve
// from neighbouring product copy.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", tagline: "Sculpted gold for every lobe" },
  { id: "necklaces", name: "Necklaces", tagline: "Layers of warm gold light" },
  { id: "huggies", name: "Huggies", tagline: "Chunky, cozy, everyday" },
]

export const MATERIALS = [
  { id: "gold", name: "18K Gold Plated" },
  { id: "silver", name: "Sterling Silver" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "A sculpted gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff wraps the ear in warm 18K gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing — simply slide it on and let it hold. A quiet statement for the modern collector.",
    materials:
      "18K gold plating over brass base. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    images: [
      { imgId: "vivid-aura-1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 89,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone.",
    description:
      "Majestic Flora Nectar is a delicate chain scattered with hand-set floral crystals in warm amber, soft rose and clear stone. Each bloom is framed in 18K gold plating, resting just below the collarbone. A piece that feels both heirloom and modern — the kind you reach for every day.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with extender.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    images: [
      { imgId: "majestic-flora-1", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 203,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggie earrings that hug the lobe in warm light.",
    description:
      "The Golden Sphere huggies are our most-loved everyday pair — a smooth, chunky gold dome that sits flush against the lobe. Polished to a soft glow, they move from morning coffee to evening out without a second thought. Lightweight, secure, and endlessly wearable.",
    materials:
      "18K gold plating over brass. Hinged huggie closure. Nickel-free, hypoallergenic. Sold as a pair.",
    care: "Wipe clean with a soft cloth after wear. Avoid water and chemicals to preserve the plating.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    images: [
      { imgId: "golden-sphere-1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 64,
    tone: "gold",
    badge: "New",
    shortDesc:
      "Textured gold filigree drop earrings with a soft, lace-like openwork.",
    description:
      "Amber Lace is a study in texture — an openwork filigree drop in warm 18K gold that moves like fabric. The intricate pattern catches light from every angle, falling just below the lobe. Romantic, lightweight, and quietly intricate.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure. Nickel-free, hypoallergenic.",
    care: "Handle with care to protect the openwork. Store in the provided pouch. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    images: [
      { imgId: "amber-lace-1", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-2", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 41,
    tone: "gold",
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set in matching warm gold.",
    description:
      "The Royal Heirloom Set pairs a delicate gold pendant necklace with coordinating drop earrings, presented in a signature Velmora gift box. Designed to be given — or kept. The matching tones layer effortlessly, making it the most thoughtful gift in the collection.",
    materials:
      "18K gold plating over brass. Pendant necklace (45cm) and drop earrings. Gift box included. Nickel-free, hypoallergenic.",
    care: "Store each piece separately in the gift box. Keep dry and away from perfumes.",
    shipping:
      "Free worldwide shipping. Gift-boxed and ready. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    images: [
      { imgId: "royal-heirloom-1", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}

export function getBestsellers() {
  return PRODUCTS
}
