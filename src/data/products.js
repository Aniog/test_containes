// Seed product data for Velmora Fine Jewelry
// All prices in USD. Categories: earrings, necklaces, huggies

export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 127,
    description: 'A sculptural ear cuff featuring a brilliant crystal accent that catches the light with every movement. Designed to sit gracefully along the ear\'s natural curve.',
    shortDescription: 'Gold ear cuff with crystal accent',
    details: '18K gold plated brass • Hypoallergenic • Nickel-free • Lightweight design',
    care: 'Store in a cool, dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=85',
    ],
    inStock: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate floral crystal necklace inspired by morning dew on petals. Each multicolored crystal is hand-selected and set in a refined gold setting.',
    shortDescription: 'Multicolor floral crystal necklace',
    details: '18K gold plated brass • Premium crystal stones • Adjustable 16-18" chain • Lobster clasp',
    care: 'Store in a cool, dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85',
    ],
    inStock: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 156,
    description: 'Chunky yet refined dome huggies with a mirror-polished finish. The perfect everyday statement that transitions effortlessly from day to night.',
    shortDescription: 'Chunky gold dome huggie earrings',
    details: '18K gold plated brass • Secure hinge closure • Hypoallergenic • 12mm diameter',
    care: 'Store in a cool, dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85',
    ],
    inStock: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 73,
    description: 'Intricate filigree drop earrings with a textured gold finish reminiscent of vintage lace. Lightweight despite their ornate appearance.',
    shortDescription: 'Textured gold filigree drop earrings',
    details: '18K gold plated brass • Lightweight filigree construction • French wire hooks • 2.5" length',
    care: 'Store in a cool, dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85',
    ],
    inStock: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 64,
    description: 'A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box — the perfect gift for someone special, including yourself.',
    shortDescription: 'Gift-boxed earring + necklace set',
    details: '18K gold plated brass • Includes matching earrings and necklace • Premium velvet gift box • Gift-ready packaging',
    care: 'Store in a cool, dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85',
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
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories for filtering
export const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

// Price ranges for filtering
export const priceRanges = [
  { value: 'all', label: 'All Prices', min: 0, max: Infinity },
  { value: 'under50', label: 'Under $50', min: 0, max: 50 },
  { value: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { value: 'over80', label: 'Over $80', min: 80, max: Infinity },
];
