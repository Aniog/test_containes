// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    details: "18K gold plated brass with crystal. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A romantic multicolor floral crystal necklace that captures light beautifully. The perfect piece for both everyday elegance and special occasions.",
    details: "18K gold plated brass with premium crystal stones. Adjustable 16-18 inch chain.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight for all-day comfort.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A timeless silhouette that adds elegance to any look.",
    details: "18K gold plated brass with textured finish. Lightweight drop design.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring our signature gold filigree work. The ultimate expression of refined luxury for someone special.",
    details: "18K gold plated brass. Includes matching drop earrings and pendant necklace. Presented in a velvet-lined gift box.",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 63,
  },
]

// Add silver tone variants for products that support it
export const productsWithVariants = products.map(p => ({
  ...p,
  variants: ["Gold", "Silver"],
}))

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"]

// Materials
export const materials = ["Gold", "Silver"]

// Helper to get product by id
export function getProductById(id) {
  return productsWithVariants.find(p => p.id === parseInt(id))
}

// Helper to get related products
export function getRelatedProducts(currentId, limit = 4) {
  return productsWithVariants
    .filter(p => p.id !== parseInt(currentId))
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}