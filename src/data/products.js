// Seed product data for Velmora Fine Jewelry
// All prices in USD, demi-fine 18K gold plated

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    category: 'earrings',
    price: 42,
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural ear cuff that catches the light with every turn. Delicate crystal accents add a whisper of brilliance to this modern heirloom.',
    shortDescription: 'Gold ear cuff with crystal accent',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    category: 'necklaces',
    price: 68,
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A celebration of nature\'s artistry. Multicolor floral crystals cascade along a delicate chain, creating a piece that feels both timeless and utterly unique.',
    shortDescription: 'Multicolor floral crystal necklace',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    category: 'huggies',
    price: 38,
    material: 'gold',
    rating: 4.7,
    reviewCount: 156,
    description: 'Bold yet refined. These chunky dome huggies embrace the ear with a sculptural presence, finished in warm 18K gold plating.',
    shortDescription: 'Chunky gold dome huggie earrings',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    category: 'earrings',
    price: 54,
    material: 'gold',
    rating: 4.6,
    reviewCount: 72,
    description: 'Intricate filigree work meets organic texture. These drop earrings evoke vintage lace, reimagined in warm gold with a contemporary silhouette.',
    shortDescription: 'Textured gold filigree drop earrings',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    category: 'necklaces',
    price: 95,
    material: 'gold',
    rating: 4.9,
    reviewCount: 63,
    description: 'A curated pairing of our signature pieces. This gift-boxed set includes a delicate necklace and matching earrings, presented in our signature velvet box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
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
export const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
];

// Materials for filtering
export const materials = [
  { value: 'all', label: 'All' },
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'silver', label: 'Sterling Silver' },
];

// Price ranges for filtering
export const priceRanges = [
  { value: 'all', label: 'All Prices', min: 0, max: Infinity },
  { value: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { value: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { value: 'over-80', label: 'Over $80', min: 80, max: Infinity },
];

// Sort options
export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];
