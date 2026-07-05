// Seed product data for Velmora Fine Jewelry
// All prices in USD, premium-but-accessible demi-fine gold jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    category: 'Earrings',
    price: 42,
    material: 'Gold',
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.',
    shortDescription: 'Gold ear cuff with crystal accent',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    category: 'Necklaces',
    price: 68,
    material: 'Gold',
    description: 'A statement necklace featuring a multicolor floral crystal pendant suspended on a fine gold chain. A modern heirloom.',
    shortDescription: 'Multicolor floral crystal necklace',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    category: 'Huggies',
    price: 38,
    material: 'Gold',
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, perfect for everyday elegance.',
    shortDescription: 'Chunky gold dome huggie earrings',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    category: 'Earrings',
    price: 54,
    material: 'Gold',
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and romantic.',
    shortDescription: 'Textured gold filigree drop earrings',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    category: 'Necklaces',
    price: 95,
    material: 'Gold',
    description: 'A curated gift-boxed set featuring a matching earring and necklace pair. The ultimate expression of quiet luxury.',
    shortDescription: 'Gift-boxed earring + necklace set',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => products.find((p) => p.id === id);

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
};

// Categories for filtering
export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

// Materials for filtering
export const materials = ['All', 'Gold', 'Silver'];

// Price ranges for filtering
export const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
