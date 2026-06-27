// Velmora Fine Jewelry - Seed Product Data
// Premium demi-fine gold jewelry — $30–$120 range

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: 'Gold',
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.',
    longDescription: 'The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: 'Gold',
    description: 'A romantic multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is carefully selected for its unique hue.',
    longDescription: 'The Majestic Flora Nectar necklace is a celebration of nature\'s palette. Delicate gold chains suspend a cluster of hand-selected crystals in soft pinks, ambers, and greens. The adjustable chain allows you to style it at your preferred length.',
    rating: 4.9,
    reviewCount: 87,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e48f5cd3468?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: 'Gold',
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the statement pieces your jewelry box has been missing.',
    longDescription: 'The Golden Sphere Huggies feature a perfectly proportioned dome shape that sits comfortably against the ear. Cast in 18K gold-plated brass with a brushed finish, they offer just the right amount of presence without overwhelming.',
    rating: 4.7,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68b0bdad41?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: 'Gold',
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Each piece is individually hand-finished for a one-of-a-kind look.',
    longDescription: 'The Amber Lace Earrings showcase the artistry of traditional filigree work. Delicate gold threads are woven into an organic lace pattern, creating movement and depth. The warm amber tones of the gold plating complement all skin tones.',
    rating: 4.6,
    reviewCount: 92,
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e48f5cd3468?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Earrings',
    price: 95,
    material: 'Gold',
    description: 'A gift-boxed earring and necklace set featuring our signature designs. The perfect introduction to Velmora, or a thoughtful gift for someone special.',
    longDescription: 'The Royal Heirloom Set pairs our beloved Golden Sphere Huggies with a matching pendant necklace. Presented in a premium keepsake box with a handwritten note card option. This set represents the essence of Velmora: timeless, thoughtful, and beautifully made.',
    rating: 4.9,
    reviewCount: 63,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => products.find(p => p.id === id);

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories
export const categories = ['Earrings', 'Necklaces', 'Huggies'];

// Materials
export const materials = ['Gold', 'Silver'];
