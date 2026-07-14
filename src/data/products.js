// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    rating: 4.9,
    reviewCount: 89,
    description: "A statement necklace featuring a cluster of multicolor floral crystals suspended from a delicate gold chain. Each crystal is hand-selected for its unique hue and brilliance.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
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
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. These bold yet refined hoops hug the earlobe with a comfortable, secure fit.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    rating: 4.6,
    reviewCount: 72,
    description: "Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates a delicate play of light and shadow.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Sets",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift-boxed set featuring a matching pair of delicate earrings and a pendant necklace. Presented in our signature velvet box, this set makes an unforgettable gift.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Get related products (same category, excluding current)
export const getRelatedProducts = (currentProduct, limit = 4) => {
  return products
    .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, limit);
};

// Get all products (for shop page)
export const getAllProducts = () => products;

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

// Materials
export const materials = ["18K Gold Plated Brass", "18K Gold Plated Brass, Crystal"];