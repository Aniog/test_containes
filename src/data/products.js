// Seed product catalog for Velmora Fine Jewelry.
// 5 hero products from the brief, plus supporting pieces for the
// collection grid and "you may also like" rows.

import strkImgConfig from "@/strk-img-config.json"

export const CATEGORIES = [
  { slug: "earrings", name: "Earrings" },
  { slug: "necklaces", name: "Necklaces" },
  { slug: "huggies", name: "Huggies" },
  { slug: "sets", name: "Sets" },
]

export const MATERIALS = [
  { slug: "18k-gold", name: "18K Gold Plated" },
  { slug: "sterling-silver", name: "Sterling Silver" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      "A whisper of light at the ear. The Vivid Aura ear cuff is hand-set with a single crystal that catches every movement — the kind of piece you'll forget you're wearing until someone asks where you got it.",
    details:
      "Sculpted ear cuff in 18K gold-plated brass with a hand-set crystal accent. Designed to sit comfortably on the cartilage without a piercing. Sold as a single cuff.",
    materials:
      "18K gold-plated brass, AAA-grade crystal. Hypoallergenic and nickel-free.",
    care: "Remove before showering, swimming, or applying fragrance. Wipe gently with the included polishing cloth to maintain its luster.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      { query: "Vivid Aura gold ear cuff with crystal accent on dark background", ratio: "3x4" },
      { query: "gold crystal ear cuff detail macro on warm beige background", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" },
    ],
    bestSeller: true,
    tags: ["bestseller", "earrings"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.8,
    reviews: 214,
    description:
      "A garden in miniature. Five hand-set crystals bloom along a delicate gold chain, each stone catching a different note of the spectrum. Wear it as your only necklace — it's enough.",
    details:
      "Layered crystal pendant on a fine 18K gold-plated chain. Adjustable length 16–18 inches. Lobster clasp closure.",
    materials: "18K gold-plated brass, multicolor crystal.",
    care: "Store flat in the velvet pouch provided. Avoid contact with lotions and perfumes.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    images: [
      { query: "Majestic Flora multicolor crystal gold necklace on neutral linen", ratio: "3x4" },
      { query: "multicolor crystal floral pendant necklace close-up on warm cream", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
    ],
    bestSeller: true,
    tags: ["bestseller", "necklaces"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 5.0,
    reviews: 342,
    description:
      "The everyday huggie, refined. A polished gold dome with a satisfying weight — the kind of earrings you sleep in, swim in, and reach for before anything else.",
    details: "Chunky dome huggie hoops in 18K gold plating. Hinged click-post closure. Sold as a pair.",
    materials: "18K gold-plated brass. Hypoallergenic, nickel-free, lead-free.",
    care: "Wipe with a soft cloth after wear. Safe for daily wear; remove before chlorinated water.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Golden Sphere chunky gold dome huggie hoop earrings on dark surface", ratio: "3x4" },
      { query: "gold dome hoop earrings close-up on cream linen", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" },
    ],
    bestSeller: true,
    tags: ["bestseller", "huggies"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.7,
    reviews: 89,
    description:
      "Vintage lacework, reimagined in gold. Each drop is cast from a hand-carved original, then plated in 18K gold. Light on the ear, generous in detail.",
    details: "Filigree drop earrings with post back. Approximately 1.5 inches in length. Sold as a pair.",
    materials: "18K gold-plated brass with antique finish.",
    care: "Store in the included pouch. Avoid direct contact with perfume.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Amber Lace filigree gold drop earrings on warm beige background", ratio: "3x4" },
      { query: "gold lace filigree drop earring detail on cream linen", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
    ],
    bestSeller: true,
    tags: ["bestseller", "earrings"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18k-gold",
    price: 95,
    rating: 4.9,
    reviews: 167,
    description:
      "Our most-loved earring and necklace, presented in a keepsake gift box. The set she opens once and keeps forever.",
    details: "Matching earring and necklace set presented in a signature velvet-lined gift box with ribbon. Includes polishing cloth.",
    materials: "18K gold-plated brass. Hypoallergenic.",
    care: "Wipe with included cloth. Store in original box.",
    shipping: "Free worldwide shipping. Gift-wrapped at no extra cost.",
    images: [
      { query: "Royal Heirloom gold earring and necklace set in elegant gift box on cream", ratio: "3x4" },
      { query: "gold jewelry set with velvet gift box close-up on warm neutral", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
    ],
    bestSeller: true,
    tags: ["bestseller", "sets", "gifts"],
  },
  // Supporting pieces for the shop grid
  {
    id: "celeste-pearl-hoops",
    name: "Celeste Pearl Hoops",
    category: "earrings",
    material: "18k-gold",
    price: 46,
    rating: 4.8,
    reviews: 102,
    description: "Freshwater pearl drops suspended on a slim gold hoop. Quietly elegant.",
    details: "Hoop earrings with freshwater pearl accent. 1 inch diameter. Sold as a pair.",
    materials: "18K gold-plated brass, freshwater pearl.",
    care: "Avoid water; wipe with soft cloth.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Celeste gold hoop earrings with freshwater pearl on warm beige", ratio: "3x4" },
    ],
    colors: [{ name: "Gold", value: "gold" }],
    tags: ["earrings"],
  },
  {
    id: "lumen-crystal-charm",
    name: "Lumen Crystal Charm",
    category: "necklaces",
    material: "18k-gold",
    price: 52,
    rating: 4.7,
    reviews: 71,
    description: "A single faceted crystal on a fine gold chain. A modern love letter.",
    details: "Solitaire crystal pendant on 16–18 inch adjustable chain.",
    materials: "18K gold-plated brass, crystal.",
    care: "Store flat; avoid lotions.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Lumen solitaire crystal pendant on delicate gold chain on cream", ratio: "3x4" },
    ],
    colors: [{ name: "Gold", value: "gold" }],
    tags: ["necklaces"],
  },
  {
    id: "solstice-textured-huggies",
    name: "Solstice Textured Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 36,
    rating: 4.9,
    reviews: 188,
    description: "Our signature huggie in a hand-hammered finish. Catches the light differently from every angle.",
    details: "Textured dome huggies. Click-post closure. Sold as a pair.",
    materials: "18K gold-plated brass.",
    care: "Wipe with soft cloth.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Solstice textured gold huggie hoop earrings on dark background", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" },
    ],
    tags: ["huggies"],
  },
  {
    id: "mira-chain-necklace",
    name: "Mira Chain Necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 58,
    rating: 4.8,
    reviews: 56,
    description: "A timeless paperclip chain, substantial enough to wear alone.",
    details: "Paperclip-link chain, 18 inches with 2-inch extender.",
    materials: "18K gold-plated brass.",
    care: "Avoid water; store flat.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Mira gold paperclip chain necklace on warm neutral background", ratio: "3x4" },
    ],
    colors: [{ name: "Gold", value: "gold" }],
    tags: ["necklaces"],
  },
  {
    id: "noir-stack-rings",
    name: "Noir Stack Rings",
    category: "earrings",
    material: "18k-gold",
    price: 44,
    rating: 4.6,
    reviews: 41,
    description: "Slim, sculptural rings designed to be worn together or alone.",
    details: "Set of three stackable rings in mixed widths.",
    materials: "18K gold-plated brass.",
    care: "Remove before washing hands.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Noir slim gold stackable rings on warm linen background", ratio: "3x4" },
    ],
    colors: [{ name: "Gold", value: "gold" }],
    tags: ["rings"],
  },
  {
    id: "daphne-statement-earrings",
    name: "Daphne Statement Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 72,
    rating: 4.9,
    reviews: 98,
    description: "Sculptural gold drops with a hand-hammered finish. The moment of the night.",
    details: "Statement drop earrings, approximately 2 inches.",
    materials: "18K gold-plated brass.",
    care: "Store flat in pouch.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Daphne sculptural gold statement drop earrings on dark background", ratio: "3x4" },
    ],
    colors: [
      { name: "Gold", value: "gold" },
      { name: "Silver", value: "silver" },
    ],
    tags: ["earrings"],
  },
  {
    id: "atelier-charm-necklace",
    name: "Atelier Charm Necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 64,
    rating: 4.8,
    reviews: 64,
    description: "Three small gold charms, hand-finished, on a fine cable chain.",
    details: "Charm necklace, 16–18 inch adjustable chain.",
    materials: "18K gold-plated brass.",
    care: "Avoid lotions; wipe with cloth.",
    shipping: "Free shipping on orders over $75. 30-day returns.",
    images: [
      { query: "Atelier delicate gold charm necklace with three small charms on cream", ratio: "3x4" },
    ],
    colors: [{ name: "Gold", value: "gold" }],
    tags: ["necklaces"],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getBestSellers() {
  return PRODUCTS.filter((p) => p.bestSeller).slice(0, 5)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  const sameCat = PRODUCTS.filter(
    (p) => p.id !== id && p.category === current.category,
  )
  const others = PRODUCTS.filter(
    (p) => p.id !== id && p.category !== current.category,
  )
  return [...sameCat, ...others].slice(0, limit)
}

// Look up a pre-resolved stock image URL by static id (e.g. "vivid-aura-jewels-primary")
// from the strk-img-config.json map. Returns null if not yet resolved.
export function getResolvedImageUrl(staticId) {
  if (!staticId) return null
  const map = strkImgConfig || {}
  const entry = map[staticId]
  if (!entry) return null
  const target = entry.reusedFrom ? map[entry.reusedFrom] : entry
  return target?.results?.[0]?.url || null
}
