// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, this piece features a single faceted crystal that refracts light with subtle brilliance. Perfect worn alone or stacked with other pieces from our collection.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace featuring a cascade of multicolor floral crystals suspended from a delicate gold chain.",
    longDescription: "Inspired by the ephemeral beauty of spring blossoms, the Majestic Flora Nectar necklace is a celebration of color and light. Each crystal is carefully selected and hand-set in our signature 18K gold-plated setting. The adjustable chain allows for versatile styling.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    longDescription: "The Golden Sphere Huggies embody quiet confidence. Their substantial dome shape creates a striking silhouette while remaining comfortable for all-day wear. Cast in 18K gold-plated brass with a brushed finish that catches the light beautifully.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A timeless silhouette.",
    longDescription: "Each Amber Lace earring is a miniature work of art. The intricate filigree work is achieved through traditional metalworking techniques, creating a delicate lace pattern that feels both vintage and contemporary. Suspended from our signature gold posts.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    description: "A curated gift-boxed set featuring our signature drop earrings paired with a delicate pendant necklace.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. Presented in a velvet-lined keepsake box, this set includes our signature filigree drop earrings and a matching pendant necklace. A meaningful gift for someone special—or yourself.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in a dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
]

// Helper to get product by slug
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

// Helper to get related products (same category, excluding current)
export function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, limit)
}

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"]

// Materials
export const materials = ["Gold", "Silver"]
