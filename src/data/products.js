// Seed product data for Velmora Fine Jewelry
// imgId / titleId / descId are stable ids used by the stock image system.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A sculptural gold ear cuff traced with a single crystal accent — effortless from desk to dinner. No piercing required.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    imgId: "prod-vivid-aura-a1",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId2: "prod-vivid-aura-b2",
    descId2: "prod-vivid-aura-desc2",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet statement piece.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 204,
    badge: "Bestseller",
    imgId: "prod-majestic-flora-a1",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId2: "prod-majestic-flora-b2",
    descId2: "prod-majestic-flora-desc2",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Polished gold dome huggies that hug the lobe with a soft, sculptural curve. Lightweight, everyday-luxe.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    badge: "Bestseller",
    imgId: "prod-golden-sphere-a1",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId2: "prod-golden-sphere-b2",
    descId2: "prod-golden-sphere-desc2",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Hand-finished filigree drops with a warm amber-toned texture. Movement and light, caught in gold.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    badge: "New",
    imgId: "prod-amber-lace-a1",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId2: "prod-amber-lace-b2",
    descId2: "prod-amber-lace-desc2",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "A coordinated earring and necklace set, presented in a signature Velmora gift box. The gift that needs no words.",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 57,
    badge: "Gift Set",
    imgId: "prod-royal-heirloom-a1",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId2: "prod-royal-heirloom-b2",
    descId2: "prod-royal-heirloom-desc2",
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)

export const categories = ["Earrings", "Necklaces", "Huggies"]
export const materials = ["18K Gold Plated", "Sterling Silver"]
export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: 1000 },
]
