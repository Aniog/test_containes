// Seed product data for Velmora Fine Jewelry
// All prices in USD, demi-fine 18K gold plated

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: 'Gold',
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.',
    longDescription: 'The Vivid Aura ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, it sits gracefully along the ear without the need for piercing.',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
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
    description: 'A statement necklace featuring a cluster of multicolor floral crystals suspended from a delicate gold chain. Perfect for evening occasions or adding romance to daytime looks.',
    longDescription: 'Inspired by a blooming garden at dusk, the Majestic Flora Nectar necklace combines warm gold with a curated palette of soft crystal tones. Each stone is hand-selected and set in a sculptural arrangement that feels both organic and intentional. The 18-inch chain allows it to sit elegantly at the collarbone.',
    rating: 4.9,
    reviewCount: 87,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
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
    description: 'Chunky gold dome huggie earrings with a sculptural, rounded silhouette. Bold yet wearable, these are the perfect everyday statement.',
    longDescription: 'The Golden Sphere Huggies are our most-loved silhouette. Cast in 18K gold-plated brass with a high-polish finish, they feature a substantial dome shape that feels modern and architectural. The hinged closure ensures a secure, comfortable fit.',
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
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
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. These heirloom-inspired pieces bring old-world romance to modern wardrobes.',
    longDescription: 'Each Amber Lace earring is meticulously crafted with a delicate filigree technique that creates a lacework of gold. The warm amber-toned finish adds depth and character. Lightweight despite their presence, they move gracefully with you.',
    rating: 4.6,
    reviewCount: 91,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
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
    description: 'A gift-boxed pairing of our signature huggies and a delicate pendant necklace. The ultimate expression of Velmora craftsmanship, presented in a keepsake box.',
    longDescription: 'The Royal Heirloom Set unites two of our most cherished designs: the Golden Sphere Huggies and a matching pendant necklace. Presented in a velvet-lined keepsake box, this set is designed for gifting — or for treasuring as a personal heirloom. Each piece is crafted from 18K gold-plated brass with the same attention to detail that defines the Velmora collection.',
    rating: 4.9,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === id);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .slice(0, limit);
};

// Categories
export const categories = ['Earrings', 'Necklaces', 'Huggies'];

// Materials
export const materials = ['Gold', 'Silver'];