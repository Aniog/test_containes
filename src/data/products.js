// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted with precision, this piece features a gracefully curved silhouette that hugs the ear with subtle elegance. A single faceted crystal catches and refracts light, creating a quiet shimmer that draws the eye without overwhelming. Perfect worn alone or layered with other studs for a modern, curated look.",
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
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Romantic and timeless, perfect for both day and evening.",
    longDescription: "The Majestic Flora Nectar necklace is an ode to nature's most delicate beauty. Each crystal is carefully selected and arranged to create a harmonious gradient of soft pastels and warm golds. The delicate chain drapes gracefully, allowing the pendant to rest perfectly at the collarbone. A piece that transitions effortlessly from intimate dinners to grand celebrations.",
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
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural, modern silhouette. Bold yet refined, these are everyday statement pieces.",
    longDescription: "The Golden Sphere Huggies embody quiet confidence. Their substantial dome shape creates a bold silhouette while remaining comfortable enough for all-day wear. The high-polish finish reflects light beautifully, adding warmth to any complexion. A versatile piece that elevates both casual and formal ensembles with equal grace.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Romantic and heirloom-inspired.",
    longDescription: "The Amber Lace Earrings are a celebration of traditional craftsmanship reimagined for the modern woman. Each pair is meticulously detailed with filigree work that echoes vintage lace patterns. The warm gold tone and graceful drop length make these earrings a perfect choice for special occasions or whenever you want to feel truly adorned.",
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
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring matching earrings and necklace. The ultimate expression of considered gifting.",
    longDescription: "The Royal Heirloom Set represents the pinnacle of Velmora's craftsmanship. This thoughtfully curated pairing includes our signature filigree drop earrings and a complementary pendant necklace, both presented in a luxurious keepsake box. Whether gifting to someone dear or treating yourself, this set is designed to be treasured for years to come.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (excluding the current one)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .slice(0, limit);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Materials for filtering
export const materials = ["All", "Gold", "Silver"];
