// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    details: "18K gold plated brass. Hypoallergenic. Nickel-free. One size fits most.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is hand-set in a delicate gold frame, creating a piece that feels both romantic and modern.",
    details: "18K gold plated brass with glass crystal accents. Adjustable 16-18 inch chain. Lobster clasp closure.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement piece you'll never want to take off.",
    details: "18K gold plated brass. Hypoallergenic posts. Secure hinged closure. 12mm diameter.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each piece is hand-finished to create a delicate, heirloom-quality silhouette.",
    details: "18K gold plated brass. Hypoallergenic posts. 2.5 inch drop length.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 92,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.",
    details: "18K gold plated brass. Includes: 12mm dome huggies + 16-18 inch pendant necklace. Gift box included.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Wipe gently with a soft cloth after wear.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (same category, excluding current)
export const getRelatedProducts = (currentProduct, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, limit);
};

// Get all products (for shop page)
export const getAllProducts = () => products;

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
