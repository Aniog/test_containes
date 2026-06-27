// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "necklaces",
    price: 68,
    description: "A romantic multicolor floral crystal necklace featuring delicate gold chain and hand-set crystals in soft pastels and warm tones.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement piece.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight and elegant for day or evening.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "sets",
    price: 95,
    description: "A gift-boxed pairing of our signature huggies and a delicate pendant necklace. Presented in a velvet-lined keepsake box.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories for filtering
export const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' },
];

// Materials for filtering
export const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'crystal', label: 'With Crystal' },
];
