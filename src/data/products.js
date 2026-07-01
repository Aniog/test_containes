// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable ids used for the stock-image system
// (data-strk-img references text element ids built from these fields).

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", descId: "cat-earrings-desc", titleId: "cat-earrings-title", imgId: "cat-earrings-img-a1b2", q: "[cat-earrings-desc] [cat-earrings-title] gold jewelry", desc: "Sculptural gold earrings, from huggies to statement drops." },
  { id: "necklaces", name: "Necklaces", descId: "cat-necklaces-desc", titleId: "cat-necklaces-title", imgId: "cat-necklaces-img-c3d4", q: "[cat-necklaces-desc] [cat-necklaces-title] gold jewelry", desc: "Layered chains and crystal pendants for everyday elegance." },
  { id: "huggies", name: "Huggies", descId: "cat-huggies-desc", titleId: "cat-huggies-title", imgId: "cat-huggies-img-e5f6", q: "[cat-huggies-desc] [cat-huggies-title] gold jewelry", desc: "Chunky dome huggies that hug the ear in warm gold." },
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
    short: "Gold ear cuff with a single crystal accent — effortless, no piercing required.",
    description:
      "The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to the curve of your ear.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel and lead free. Hand-set crystal accent. Wipe clean with the included microfibre cloth and store in the Velmora pouch.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Each piece arrives in a signature Velmora box.",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img-1a2b",
    imgQ: "[prod-vivid-aura-desc] Vivid Aura Jewels gold jewelry",
    img2Id: "prod-vivid-aura-img2-3c4d",
    img2Q: "[prod-vivid-aura-desc] Vivid Aura Jewels worn on model",
    imgId2: "prod-vivid-aura-img2-3c4d",
    imgId3: "prod-vivid-aura-img3-5e6f",
    imgId4: "prod-vivid-aura-img4-7g8h",
    gallery: [
      { imgId: "prod-vivid-aura-img-1a2b", q: "[prod-vivid-aura-desc] Vivid Aura Jewels gold jewelry" },
      { imgId: "prod-vivid-aura-img2-3c4d", q: "[prod-vivid-aura-desc] Vivid Aura Jewels worn on model" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 203,
    tone: "gold",
    badge: "Bestseller",
    short: "Multicolor floral crystal necklace — a garden of light at the collarbone.",
    description:
      "Majestic Flora Nectar is a delicate gold chain suspending a floral cluster of multicolor crystals. Each petal is set by hand to refract warm and cool light, making it the kind of necklace that turns a simple neckline into a statement.",
    materials:
      "18K gold plating over brass. Multicolor hand-set crystals. Hypoallergenic, nickel and lead free. Adjustable 40–45cm chain. Store in the Velmora pouch to keep the crystals luminous.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Arrives in a signature Velmora box, ready to gift.",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img-1a2b",
    imgQ: "[prod-majestic-flora-desc] Majestic Flora Nectar gold jewelry",
    img2Id: "prod-majestic-flora-img2-3c4d",
    img2Q: "[prod-majestic-flora-desc] Majestic Flora Nectar worn on model",
    imgId2: "prod-majestic-flora-img2-3c4d",
    imgId3: "prod-majestic-flora-img3-5e6f",
    imgId4: "prod-majestic-flora-img4-7g8h",
    gallery: [
      { imgId: "prod-majestic-flora-img-1a2b", q: "[prod-majestic-flora-desc] Majestic Flora Nectar gold jewelry" },
      { imgId: "prod-majestic-flora-img2-3c4d", q: "[prod-majestic-flora-desc] Majestic Flora Nectar worn on model" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: "gold",
    badge: "Bestseller",
    short: "Chunky gold dome huggie earrings — everyday polish in a single hoop.",
    description:
      "Golden Sphere Huggies are our most-loved everyday earring. The chunky dome silhouette sits flush against the lobe in warm gold, comfortable enough to sleep in and bold enough to be noticed. A secure hinged closure keeps them exactly where they belong.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel and lead free. Hinged snap closure. 12mm dome. Wipe clean with the included microfibre cloth.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Arrives in a signature Velmora box.",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img-1a2b",
    imgQ: "[prod-golden-sphere-desc] Golden Sphere Huggies gold jewelry",
    img2Id: "prod-golden-sphere-img2-3c4d",
    img2Q: "[prod-golden-sphere-desc] Golden Sphere Huggies worn on model",
    imgId2: "prod-golden-sphere-img2-3c4d",
    imgId3: "prod-golden-sphere-img3-5e6f",
    imgId4: "prod-golden-sphere-img4-7g8h",
    gallery: [
      { imgId: "prod-golden-sphere-img-1a2b", q: "[prod-golden-sphere-desc] Golden Sphere Huggies gold jewelry" },
      { imgId: "prod-golden-sphere-img2-3c4d", q: "[prod-golden-sphere-desc] Golden Sphere Huggies worn on model" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 91,
    tone: "gold",
    badge: "New",
    short: "Textured gold filigree drop earrings — heirloom craft, modern weight.",
    description:
      "Amber Lace is a study in texture: open filigree drops in warm gold that move with you. The lace-like pattern is hand-finished, giving each pair a subtly unique character and a lightness that belies its presence.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel and lead free. Lever-back closure. 38mm drop. Store in the Velmora pouch.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Arrives in a signature Velmora box.",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img-1a2b",
    imgQ: "[prod-amber-lace-desc] Amber Lace Earrings gold jewelry",
    img2Id: "prod-amber-lace-img2-3c4d",
    img2Q: "[prod-amber-lace-desc] Amber Lace Earrings worn on model",
    imgId2: "prod-amber-lace-img2-3c4d",
    imgId3: "prod-amber-lace-img3-5e6f",
    imgId4: "prod-amber-lace-img4-7g8h",
    gallery: [
      { imgId: "prod-amber-lace-img-1a2b", q: "[prod-amber-lace-desc] Amber Lace Earrings gold jewelry" },
      { imgId: "prod-amber-lace-img2-3c4d", q: "[prod-amber-lace-desc] Amber Lace Earrings worn on model" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: "gold",
    badge: "Gift Set",
    short: "Gift-boxed earring + necklace set — a complete look, ready to give.",
    description:
      "The Royal Heirloom Set pairs our filigree drop earrings with a matching crystal pendant necklace, presented in a keepsake Velmora gift box. Coordinated in warm gold, it is the complete answer to a milestone gift — anniversary, birthday, or simply because.",
    materials:
      "18K gold plating over brass. Hand-set crystals. Hypoallergenic, nickel and lead free. Adjustable 40–45cm chain. Lever-back earrings. Includes signature gift box and pouches.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Arrives in a signature Velmora gift box.",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img-1a2b",
    imgQ: "[prod-royal-heirloom-desc] Royal Heirloom Set gold jewelry",
    img2Id: "prod-royal-heirloom-img2-3c4d",
    img2Q: "[prod-royal-heirloom-desc] Royal Heirloom Set worn on model",
    imgId2: "prod-royal-heirloom-img2-3c4d",
    imgId3: "prod-royal-heirloom-img3-5e6f",
    imgId4: "prod-royal-heirloom-img4-7g8h",
    gallery: [
      { imgId: "prod-royal-heirloom-img-1a2b", q: "[prod-royal-heirloom-desc] Royal Heirloom Set gold jewelry" },
      { imgId: "prod-royal-heirloom-img2-3c4d", q: "[prod-royal-heirloom-desc] Royal Heirloom Set worn on model" },
    ],
  },
]

export const REELS = [
  { id: "reel-1", caption: "Golden Sphere Huggies, every single day.", imgId: "reel-1-img-9i0j", titleId: "reel-1-title", q: "[reel-1-title] gold jewelry worn editorial vertical" },
  { id: "reel-2", caption: "Stacking the Vivid Aura cuff.", imgId: "reel-2-img-8k7l", titleId: "reel-2-title", q: "[reel-2-title] gold jewelry worn editorial vertical" },
  { id: "reel-3", caption: "Majestic Flora, golden hour.", imgId: "reel-3-img-6m5n", titleId: "reel-3-title", q: "[reel-3-title] gold jewelry worn editorial vertical" },
  { id: "reel-4", caption: "Amber Lace in motion.", imgId: "reel-4-img-4o3p", titleId: "reel-4-title", q: "[reel-4-title] gold jewelry worn editorial vertical" },
  { id: "reel-5", caption: "The Heirloom set, unboxed.", imgId: "reel-5-img-2q1r", titleId: "reel-5-title", q: "[reel-5-title] gold jewelry worn editorial vertical" },
]

export const TESTIMONIALS = [
  { name: "Sofia M.", rating: 5, text: "The Golden Sphere Huggies haven't left my ears in three months. They look far more expensive than they were." },
  { name: "Priya K.", rating: 5, text: "Bought the Heirloom set for my mother's birthday. The box alone made her cry. The jewelry is stunning." },
  { name: "Elena R.", rating: 5, text: "I get compliments every time I wear the Flora necklace. It catches light like fine jewelry, not costume." },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}
