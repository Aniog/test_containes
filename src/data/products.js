// Velmora Fine Jewelry - Product Data
// Using simple data URIs for images to avoid any external URL issues
export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23FFF5E6' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EVivid Aura Jewels%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23F5F0EB' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EEar Cuff%3C/text%3E%3C/svg%3E"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23FFF5E6' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EMajestic Flora Nectar%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23F5F0EB' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EFloral Necklace%3C/text%3E%3C/svg%3E"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23FFF5E6' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EGolden Sphere Huggies%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23F5F0EB' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EHuggie Earrings%3C/text%3E%3C/svg%3E"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23FFF5E6' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EAmber Lace Earrings%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23F5F0EB' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EFiligree Earrings%3C/text%3E%3C/svg%3E"
    ],
    rating: 4.6,
    reviews: 98,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23FFF5E6' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3ERoyal Heirloom Set%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Crect fill='%23F5F0EB' width='800' height='800'/%3E%3Ctext fill='%238B6914' font-family='serif' font-size='60' x='400' y='400' text-anchor='middle' dominant-baseline='middle'%3EJewelry Set%3C/text%3E%3C/svg%3E"
    ],
    rating: 5.0,
    reviews: 67,
    inStock: true,
    featured: true
  }
];

export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
export const materials = ["18K Gold Plated", "Silver Plated", "Rose Gold"];
