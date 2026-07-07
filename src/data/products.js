// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "ear cuff",
    material: "18K Gold Plated",
    shortDescription:
      "A sculptural gold ear cuff traced with a single crystal accent — effortless edge, no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday statement. Hand-finished in 18K gold plating over brass, it curves gently around the cartilage and catches the light with a single hand-set crystal. Wear it solo for a quiet gleam, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal. To care, avoid water, perfume and sweat; store in the pouch provided.",
    rating: 4.8,
    reviews: 126,
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "floral crystal necklace",
    material: "18K Gold Plated",
    shortDescription:
      "A multicolor floral crystal pendant suspended on a fine gold chain — a wearable garden in bloom.",
    description:
      "Majestic Flora Nectar turns a bouquet into jewelry. Each petal is set with a different crystal hue, graduating from amber to champagne, centered on a warm gold bloom. The adjustable 40–45cm chain lets it rest perfectly at the collarbone.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia. Adjustable chain 40–45cm with 2cm extender. Hypoallergenic, nickel-free.",
    rating: 4.9,
    reviews: 88,
    tones: ["Gold"],
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Earrings",
    type: "dome huggie earrings",
    material: "18K Gold Plated",
    shortDescription:
      "Chunky gold dome huggies with a soft brushed finish — the everyday hoop, reimagined.",
    description:
      "Golden Sphere Huggies are the foundation of any jewelry wardrobe. A polished dome with a subtle brushed texture hugs the lobe closely, comfortable enough to sleep in and bold enough to be noticed. Sold as a pair.",
    materials:
      "18K gold plating over brass. Hinged snap closure. Hypoallergenic, nickel-free. Sold as a pair.",
    rating: 4.7,
    reviews: 214,
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "filigree drop earrings",
    material: "18K Gold Plated",
    shortDescription:
      "Textured gold filigree drops with an openwork lace pattern — heirloom craft, modern weight.",
    description:
      "Amber Lace reinterprets traditional filigree for the modern wearer. Each drop is hand-shaped from fine gold-plated wire into an airy lace motif that moves softly with you. Light enough for all-day wear, intricate enough for evening.",
    materials:
      "18K gold plating over brass. Hand-shaped filigree. Fishhook closure. Hypoallergenic, nickel-free.",
    rating: 4.8,
    reviews: 64,
    tones: ["Gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    type: "earring + necklace set",
    material: "18K Gold Plated",
    shortDescription:
      "A gift-boxed earring and necklace set, designed to be worn together or treasured apart.",
    description:
      "The Royal Heirloom Set is our most considered gift. A pair of crystal-accented studs and a matching pendant arrive nested in a signature Velmora keepsake box, ready to mark a moment. The set is designed to layer beautifully, but each piece stands alone.",
    materials:
      "18K gold plating over brass. Cubic zirconia. Necklace 42cm with extender. Studs with secure butterfly back. Hypoallergenic, nickel-free. Presented in a Velmora gift box.",
    rating: 5.0,
    reviews: 41,
    tones: ["Gold"],
    badge: "Gift Edit",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Huggies, cuffs & drops",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants & chains",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Everyday essentials",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in three months. They look far more expensive than they were.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Royal Heirloom Set for my mother's birthday. The box alone made her cry. Stunning quality.",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "I have sensitive skin and these are the first gold earrings that don't irritate me. Beautiful and comfortable.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked huggies, golden hour",
    imgId: "reel-huggies-stack-a1",
  },
  {
    id: "reel-2",
    caption: "The Vivid Aura cuff, up close",
    imgId: "reel-aura-cuff-b2",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar on bare skin",
    imgId: "reel-flora-neck-c3",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, movement test",
    imgId: "reel-amber-drop-d4",
  },
  {
    id: "reel-5",
    caption: "Heirloom set, unboxing",
    imgId: "reel-heirloom-box-e5",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1
      const bMatch = b.category === current.category ? 0 : 1
      return aMatch - bMatch
    })
    .slice(0, limit)
}
