// Seed product data for Velmora Fine Jewelry
// Images use the strk stock-image system via data-strk-img attributes at render time.

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculptural drops & everyday studs",
    descId: "cat-earrings-desc",
    titleId: "cat-earrings-title",
    imgId: "cat-earrings-tile-a1b2",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Layered chains & crystal pendants",
    descId: "cat-necklaces-desc",
    titleId: "cat-necklaces-title",
    imgId: "cat-necklaces-tile-c3d4",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Chunky gold domes that hug the ear",
    descId: "cat-huggies-desc",
    titleId: "cat-huggies-title",
    imgId: "cat-huggies-tile-e5f6",
  },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff set with a single clear crystal — no piercing required. Designed to curve along the cartilage for an effortless, second-skin fit.",
    materials:
      "18K gold plating over brass base. Hypoallergenic, nickel-free. Crystal: cubic zirconia. Wipe clean with the included microfibre cloth.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "p1-main-7a3c", titleId: "p1-title", descId: "p1-desc" },
      { imgId: "p1-alt-7a3d", titleId: "p1-title", descId: "p1-desc" },
    ],
    titleId: "p1-title",
    descId: "p1-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 204,
    badge: "Bestseller",
    description:
      "A blooming floral pendant set with multicolor crystals on a delicate gold chain. Adjustable length for layering or wearing solo.",
    materials:
      "18K gold plating over brass. Crystals: cubic zirconia. Chain length 40–45cm with extender. Lobster clasp.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "p2-main-9b1e", titleId: "p2-title", descId: "p2-desc" },
      { imgId: "p2-alt-9b1f", titleId: "p2-title", descId: "p2-desc" },
    ],
    titleId: "p2-title",
    descId: "p2-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    badge: "Bestseller",
    description:
      "Chunky polished gold dome huggies that sit flush against the lobe. The everyday earring you'll never take off.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Hinged snap closure. Sold as a pair.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "p3-main-2c8a", titleId: "p3-title", descId: "p3-desc" },
      { imgId: "p3-alt-2c8b", titleId: "p3-title", descId: "p3-desc" },
    ],
    titleId: "p3-title",
    descId: "p3-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    badge: "New",
    description:
      "Hand-finished gold filigree drops with a lace-like openwork texture. Lightweight movement that catches the light.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Fishhook closure with safety back.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "p4-main-5d6f", titleId: "p4-title", descId: "p4-desc" },
      { imgId: "p4-alt-5d70", titleId: "p4-title", descId: "p4-desc" },
    ],
    titleId: "p4-title",
    descId: "p4-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 57,
    badge: "Gift Set",
    description:
      "A coordinated earring and necklace set, presented in a signature Velmora gift box. The ready-to-gift heirloom moment.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Includes earrings, necklace, and keepsake gift box.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "p5-main-8e2b", titleId: "p5-title", descId: "p5-desc" },
      { imgId: "p5-alt-8e2c", titleId: "p5-title", descId: "p5-desc" },
    ],
    titleId: "p5-title",
    descId: "p5-desc",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold plating is unreal — I've worn my huggies every day for months and they haven't tarnished. Feels far more expensive than it was.",
  },
  {
    id: "t2",
    name: "Priya K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the box alone made it feel like a luxury unboxing. My mother was thrilled.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quiet, elegant, and the ear cuff stays put all day. This is now my go-to for demi-fine pieces.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere Huggies, every day",
    handle: "@sofia",
    imgId: "reel-1-3a7b",
    titleId: "reel-1-title",
    descId: "reel-1-desc",
  },
  {
    id: "r2",
    caption: "Layered necklaces, golden hour",
    handle: "@priya",
    imgId: "reel-2-3a7c",
    titleId: "reel-2-title",
    descId: "reel-2-desc",
  },
  {
    id: "r3",
    caption: "The ear cuff that stays put",
    handle: "@elena",
    imgId: "reel-3-3a7d",
    titleId: "reel-3-title",
    descId: "reel-3-desc",
  },
  {
    id: "r4",
    caption: "Filigree drops, caught the light",
    handle: "@maya",
    imgId: "reel-4-3a7e",
    titleId: "reel-4-title",
    descId: "reel-4-desc",
  },
  {
    id: "r5",
    caption: "Gift box unboxing moment",
    handle: "@noor",
    imgId: "reel-5-3a7f",
    titleId: "reel-5-title",
    descId: "reel-5-desc",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
