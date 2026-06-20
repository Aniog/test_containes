// Seed product data for Velmora Fine Jewelry
// Categories: earrings, necklaces, huggies

export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A sculptural ear cuff adorned with a single crystal accent. Lightweight yet striking, designed to catch the light with every movement.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A delicate floral crystal necklace featuring a harmonious blend of warm and cool tones. Suspended on an 18K gold-plated chain for effortless elegance.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal, Cubic Zirconia",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-e17149ad2f83?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggies with a soft matte finish. Bold yet refined, these earrings hug the earlobe with quiet confidence.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    category: "earrings",
    price: 54,
    rating: 4.6,
    reviewCount: 72,
    description: "Intricately textured filigree drop earrings inspired by vintage lacework. Each piece is hand-finished to highlight the delicate goldwork.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    category: "necklaces",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated pairing of our signature drop earrings and pendant necklace, presented in a velvet-lined keepsake box. The perfect gift for someone you treasure.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-e17149ad2f83?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    inStock: true,
  }
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .slice(0, limit);
};

// Categories for filtering
export const categories = [
  { value: "all", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" }
];

// Materials for filtering
export const materials = [
  { value: "all", label: "All Materials" },
  { value: "gold", label: "18K Gold Plated" },
  { value: "silver", label: "Silver Plated" }
];
