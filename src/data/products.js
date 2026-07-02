// Seed product data for Velmora Fine Jewelry
// All prices in USD, premium-but-accessible demi-fine gold jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A sculptural ear cuff featuring a delicate crystal accent that catches the light with every movement. Designed to sit gracefully along the ear's natural curve.",
    shortDescription: "Gold ear cuff with crystal accent",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true },
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A romantic necklace adorned with multicolor floral crystals arranged in an organic, nature-inspired pattern. The delicate chain drapes elegantly at 16-18 inches.",
    shortDescription: "Multicolor floral crystal necklace",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true },
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky yet refined dome huggie earrings with a soft matte finish. The spherical silhouette adds modern dimension while remaining effortlessly wearable.",
    shortDescription: "Chunky gold dome huggie earrings",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true },
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricately textured gold filigree drop earrings inspired by vintage lacework. Each piece is hand-finished to create a delicate, heirloom-quality silhouette.",
    shortDescription: "Textured gold filigree drop earrings",
    rating: 4.9,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, this set is designed for gifting and treasuring.",
    shortDescription: "Gift-boxed earring + necklace set",
    rating: 5.0,
    reviewCount: 61,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true },
    ],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .slice(0, limit);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies"];

// Materials for filtering
export const materials = ["All", "Gold", "Silver"];