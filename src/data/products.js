// Seed product data for Velmora Fine Jewelry
// All prices in USD, premium-but-accessible range ($30–$120)

export const products = [
  {
    id: 'p1',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: 'Gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.',
    shortDescription: 'Gold ear cuff with crystal accent',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'p2',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: 'Gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A statement necklace featuring a cascade of multicolor floral crystals. Each stone is hand-selected for its unique hue and brilliance.',
    shortDescription: 'Multicolor floral crystal necklace',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'p3',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: 'Gold',
    rating: 4.7,
    reviewCount: 156,
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Comfortable enough for everyday wear, striking enough for evening.',
    shortDescription: 'Chunky gold dome huggie earrings',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'p4',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: 'Gold',
    rating: 4.6,
    reviewCount: 72,
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Lightweight yet substantial, with a warm amber glow.',
    shortDescription: 'Textured gold filigree drop earrings',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'p5',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: 'Gold',
    rating: 4.9,
    reviewCount: 63,
    description: 'A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.',
    shortDescription: 'Gift-boxed earring + necklace set',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Helper to get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories for filtering
export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

// Materials for filtering
export const materials = ['All', 'Gold', 'Silver'];