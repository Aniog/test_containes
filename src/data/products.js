// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: 'Gold',
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.',
    details: '18K gold plated brass. Hypoallergenic. Nickel-free.',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: 'Gold',
    description: 'A statement necklace featuring a cluster of multicolor floral crystals suspended from a fine gold chain. Each crystal is hand-selected for its unique hue.',
    details: '18K gold plated brass with crystal accents. Adjustable 16-18" chain.',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: 'Gold',
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement piece you will reach for constantly.',
    details: '18K gold plated brass. Secure hinged closure. Hypoallergenic.',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: 'Gold',
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Each piece is individually hand-finished to highlight the delicate craftsmanship.',
    details: '18K gold plated brass. French wire hooks. Hypoallergenic.',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Earrings',
    price: 95,
    material: 'Gold',
    description: 'A gift-boxed pairing of our signature huggies and a delicate pendant necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.',
    details: '18K gold plated brass. Includes: Golden Sphere Huggies + matching pendant necklace. Gift-ready packaging.',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 63,
  },
];

// Helper to get product by ID
export const getProductById = (id) => products.find((p) => p.id === id);

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
};

// Categories
export const categories = ['Earrings', 'Necklaces', 'Huggies'];

// Materials
export const materials = ['Gold', 'Silver'];

// Price ranges for filtering
export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
