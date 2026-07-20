// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its refined crystal detail. Handcrafted in 18K gold plating over sterling silver, this piece is designed for those who appreciate understated elegance. Wear it solo or pair with our huggies for a layered look.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    description: "A romantic multicolor floral crystal necklace that catches the light with every movement. A timeless piece for everyday elegance.",
    longDescription: "Inspired by the delicate beauty of wildflowers, the Majestic Flora Nectar necklace features a cluster of hand-set crystals in warm, complementary tones. Suspended from a fine 18K gold-plated chain, this piece adds a touch of romance to any ensemble.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome shape that sits comfortably on the ear. Their substantial presence makes them a versatile choice — equally at home with a crisp white shirt or an evening gown.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. A delicate balance of detail and simplicity.",
    longDescription: "Each Amber Lace earring is crafted with a delicate filigree technique, creating a lace-like texture that feels both vintage and modern. The warm gold tone and graceful drop make these earrings a favorite for both day and evening wear.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    description: "A gift-boxed earring and necklace set featuring our signature pieces. The perfect present for someone special — or yourself.",
    longDescription: "The Royal Heirloom Set pairs our beloved Golden Sphere Huggies with a matching pendant necklace. Presented in a velvet-lined keepsake box, this set is designed to be treasured and passed down. A meaningful gift for milestones and celebrations.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
]

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug)
}

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category)
}

// All categories
export const categories = ["Earrings", "Necklaces", "Huggies"]

// Materials for filtering
export const materials = ["18K Gold Plated", "Sterling Silver"]
