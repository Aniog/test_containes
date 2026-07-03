// ==========================================
// VELMORA PRODUCT DATA
// ==========================================

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    description: 'An ethereal gold ear cuff adorned with a delicate crystal accent. Light-catching and effortlessly elegant.',
    shortDescription: 'Gold ear cuff with crystal accent',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    tags: ['bestseller', 'ear-cuff', 'crystal'],
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Avoid water and perfume. Store in a soft pouch when not wearing.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    isNew: false
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal is carefully selected for its vibrant hue and brilliance.',
    shortDescription: 'Multicolor floral crystal necklace',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    tags: ['floral', 'crystal', 'statement'],
    materials: '18K Gold Plated, Multicolor Crystals',
    care: 'Avoid water and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    isNew: false
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    description: 'Our signature chunky gold dome huggie earrings. Bold yet refined, these huggies make a statement while remaining lightweight and comfortable for all-day wear.',
    shortDescription: 'Chunky gold dome huggie earrings',
    price: 38,
    comparePrice: null,
    category: 'huggies',
    tags: ['bestseller', 'chunky', 'everyday'],
    materials: '18K Gold Plated, Sterling Silver Base',
    care: 'Avoid water. Apply perfume before wearing.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    isNew: false
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    description: 'Delicate textured gold filigree drop earrings inspired by vintage lace patterns. Intricate craftsmanship meets modern elegance.',
    shortDescription: 'Textured gold filigree drop earrings',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    tags: ['filigree', 'drop', 'vintage-inspired'],
    materials: '18K Gold Plated',
    care: 'Store separately to avoid scratches. Clean with jewelry cloth.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    isNew: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special. Presented in our signature velvet box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    price: 95,
    comparePrice: 120,
    category: 'sets',
    tags: ['gift', 'set', 'bestseller'],
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Follow individual care instructions for each piece.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 5.0,
    reviewCount: 156,
    featured: true,
    isNew: false
  }
];

export const categories = [
  { id: 'all', name: 'All Jewelry', slug: 'all' },
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
  { id: 'sets', name: 'Sets', slug: 'sets' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'Absolutely stunning quality. The Golden Sphere Huggies are my everyday essential now.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'The Royal Heirloom Set exceeded all expectations. Gifted it to my mother and she was moved to tears.',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Isabella C.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks luxury without the luxury price tag. Velmora is my new obsession.',
    product: 'Majestic Flora Nectar'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Everyday elegance ✨',
    username: '@style.by.sophie'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'My new favorites',
    username: '@graceful.luxe'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Date night ready',
    username: '@mia.styles'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Heirloom vibes',
    username: '@juliana.velvet'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Gift for myself 💛',
    username: '@elegant.everyday'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'New obsession',
    username: '@classic.with.a twist'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getBestsellers = () => products.filter(p => p.tags.includes('bestseller'));
