// Seed product catalogue for Velmora Fine Jewelry.
// Images are resolved at runtime via the strk-img tagging system.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent — designed to be worn alone or stacked along the curve of the ear for an effortless, modern finish.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    variants: ["Gold", "Silver"],
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-b2",
    gallery: ["p-vivid-aura-g1", "p-vivid-aura-g2", "p-vivid-aura-g3", "p-vivid-aura-g4"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet statement piece that catches the light with every movement.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 88,
    badge: "New",
    variants: ["Gold", "Silver"],
    imgId: "p-majestic-flora-a1",
    imgIdAlt: "p-majestic-flora-b2",
    gallery: ["p-majestic-flora-g1", "p-majestic-flora-g2", "p-majestic-flora-g3", "p-majestic-flora-g4"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Polished gold dome huggies that hug the lobe with a soft, sculptural curve. Lightweight, hypoallergenic, and made for everyday wear.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    variants: ["Gold", "Silver"],
    imgId: "p-golden-sphere-a1",
    imgIdAlt: "p-golden-sphere-b2",
    gallery: ["p-golden-sphere-g1", "p-golden-sphere-g2", "p-golden-sphere-g3", "p-golden-sphere-g4"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Intricate gold filigree drops with a hand-textured lace pattern. An heirloom-inspired silhouette that feels both vintage and quietly modern.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 64,
    badge: null,
    variants: ["Gold", "Silver"],
    imgId: "p-amber-lace-a1",
    imgIdAlt: "p-amber-lace-b2",
    gallery: ["p-amber-lace-g1", "p-amber-lace-g2", "p-amber-lace-g3", "p-amber-lace-g4"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "A coordinated earring and necklace set, presented in a signature Velmora gift box. The considered gift for milestones, anniversaries, and quiet celebrations.",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 41,
    badge: "Gift Set",
    variants: ["Gold", "Silver"],
    imgId: "p-royal-heirloom-a1",
    imgIdAlt: "p-royal-heirloom-b2",
    gallery: ["p-royal-heirloom-g1", "p-royal-heirloom-g2", "p-royal-heirloom-g3", "p-royal-heirloom-g4"],
  },
]

export const categories = [
  {
    id: "Earrings",
    name: "Earrings",
    description: "Sculptural drops, cuffs & statement studs",
    imgId: "cat-earrings-01",
  },
  {
    id: "Necklaces",
    name: "Necklaces",
    description: "Fine chains & pendant necklaces",
    imgId: "cat-necklaces-01",
  },
  {
    id: "Huggies",
    name: "Huggies",
    description: "Polished dome huggies for everyday",
    imgId: "cat-huggies-01",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold plating is genuinely beautiful — it wears like fine jewelry, not costume. I get compliments every time I wear the Aura cuff.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Heirloom set as a gift and the presentation was stunning. My sister hasn't taken it off since. Worth every penny.",
  },
  {
    name: "Margot L.",
    rating: 5,
    text: "Lightweight, hypoallergenic, and the dome huggies are my new everyday. Shipping was fast and the packaging felt luxurious.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked along the ear",
    imgId: "reel-ear-01",
  },
  {
    id: "reel-2",
    caption: "The everyday huggie",
    imgId: "reel-huggie-01",
  },
  {
    id: "reel-3",
    caption: "Flora, caught in light",
    imgId: "reel-flora-01",
  },
  {
    id: "reel-4",
    caption: "Filigree, up close",
    imgId: "reel-filigree-01",
  },
  {
    id: "reel-5",
    caption: "The gift, unboxed",
    imgId: "reel-gift-01",
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
      const aScore = a.category === current.category ? 1 : 0
      const bScore = b.category === current.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
