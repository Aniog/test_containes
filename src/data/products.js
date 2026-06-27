export const products = [
  {
    id: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    shortName: "Vivid Aura Jewels",
    description: "A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every turn of the head — effortless elegance, no piercing required.",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&crop=center",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    shortName: "Majestic Flora Nectar",
    description: "A delicate chain necklace featuring a multicolor floral crystal pendant. Each petal is hand-set to create a luminous, garden-inspired centerpiece.",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&h=1000&fit=crop&crop=center",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    shortName: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a polished finish. A modern take on the classic hoop — substantial yet lightweight for all-day wear.",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f62d?w=800&h=1000&fit=crop&crop=center",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    shortName: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates beautiful shadow play against the skin.",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.6,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop&crop=center",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    shortName: "Royal Heirloom Set",
    description: "A gift-boxed earring and necklace set in matching gold finish. The perfect present for someone special — or a treat for yourself.",
    price: 95,
    category: "necklaces",
    material: "gold",
    rating: 5.0,
    reviewCount: 41,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&h=1000&fit=crop&crop=center",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
]

export const categories = [
  { id: "earrings", name: "Earrings", count: 2 },
  { id: "necklaces", name: "Necklaces", count: 2 },
  { id: "huggies", name: "Huggies", count: 1 },
]

export const materials = [
  { id: "gold", name: "Gold Plated" },
  { id: "silver", name: "Silver Tone" },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(productId, limit = 4) {
  return products.filter((p) => p.id !== productId).slice(0, limit)
}
