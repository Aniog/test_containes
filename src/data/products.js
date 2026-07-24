// Seed product data for Velmora Fine Jewelry
// All prices in USD, premium-but-accessible demi-fine gold jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.',
    shortDescription: 'Gold ear cuff with crystal accent',
    material: '18K Gold Plated Brass, Crystal',
    rating: 4.8,
    reviewCount: 124,
    images: {
      primary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    },
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A delicate necklace featuring a cluster of multicolor floral crystals. Each stone is hand-selected for its unique hue and brilliance.',
    shortDescription: 'Multicolor floral crystal necklace',
    material: '18K Gold Plated Brass, Crystal',
    rating: 4.9,
    reviewCount: 89,
    images: {
      primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    },
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky dome huggies with a soft matte finish. Bold yet refined, these are the everyday statement you have been looking for.',
    shortDescription: 'Chunky gold dome huggie earrings',
    material: '18K Gold Plated Brass',
    rating: 4.7,
    reviewCount: 156,
    images: {
      primary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    },
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Intricate filigree drop earrings with a warm textured finish. Inspired by vintage lacework and heirloom craftsmanship.',
    shortDescription: 'Textured gold filigree drop earrings',
    material: '18K Gold Plated Brass',
    rating: 4.6,
    reviewCount: 72,
    images: {
      primary: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, perfect for gifting or self-treasuring.',
    shortDescription: 'Gift-boxed earring + necklace set',
    material: '18K Gold Plated Brass, Crystal',
    rating: 4.9,
    reviewCount: 63,
    images: {
      primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    variants: ['gold', 'silver'],
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => products.find((p) => p.id === id);

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
  { value: 'silver', label: 'Silver Tone' },
];

// Price ranges
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