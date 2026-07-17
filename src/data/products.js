// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A delicate gold ear cuff featuring a stunning crystal accent. This piece adds instant elegance to any look, worn alone or stacked with other ear pieces.',
    shortDescription: 'Gold ear cuff with crystal accent',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    tags: ['ear-cuff', 'crystal', 'gold', 'bestseller'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its vibrant hues and brilliant sparkle, creating a piece that transitions effortlessly from day to evening.',
    shortDescription: 'Multicolor floral crystal necklace',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    tags: ['crystal', 'floral', 'colorful', 'statement'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    isBestseller: true,
    isNew: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Our most-loved huggie earrings feature a chunky gold dome design that hugs the earlobe perfectly. The polished finish catches light beautifully, making these your new everyday essential.',
    shortDescription: 'Chunky gold dome huggie earrings',
    price: 38,
    comparePrice: null,
    category: 'huggies',
    tags: ['huggies', 'dome', 'gold', 'bestseller', 'everyday'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 203,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Rose Gold', value: 'rose-gold', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate detailing catches and reflects light with every movement, creating a mesmerizing effect perfect for special occasions.',
    shortDescription: 'Textured gold filigree drop earrings',
    price: 54,
    comparePrice: 68,
    category: 'earrings',
    tags: ['drops', 'filigree', 'gold', 'elegant', 'occasion'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 67,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    isBestseller: false,
    isNew: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'The perfect gift, presented in our signature gift box. This curated set includes a pair of classic gold studs and a delicate chain necklace, making it an ideal present for yourself or someone special.',
    shortDescription: 'Gift-boxed earring + necklace set',
    price: 95,
    comparePrice: null,
    category: 'sets',
    tags: ['gift', 'set', 'stud', 'necklace', 'gift-boxed'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    rating: 5.0,
    reviewCount: 156,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Ear cuffs, studs, drops, and more' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chains, pendants, and layered looks' },
  { id: 'huggies', name: 'Huggies', description: 'Classic and modern hoop designs' },
  { id: 'sets', name: 'Sets', description: 'Curated gift sets' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality for the price. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. Beautiful packaging too!',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but doesn\'t break the bank. Velmora is now my go-to for gifting.',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=400&h=711&fit=crop&q=80',
    caption: 'Monday mood',
    username: '@stylebyjane',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop&q=80',
    caption: 'Golden hour glow',
    username: '@maya.looks',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Layered & loved',
    username: '@sarah.in.gold',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'Ear party',
    username: '@fashion.with.ava',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop&q=80',
    caption: 'Gift ready',
    username: '@lindsay.lux',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop&q=80',
    caption: 'Necklace goals',
    username: '@the.golden.daily',
  },
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getBestsellers = () => {
  return products.filter(p => p.isBestseller);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === product.category ? 1 : 0;
      const bMatch = b.category === product.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
};
