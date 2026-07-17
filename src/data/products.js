// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    material: 'gold',
    description: 'An elegant gold ear cuff adorned with a sparkling crystal accent. This piece adds instant glamour to any look, whether worn solo or stacked with other earrings.',
    shortDescription: 'Gold ear cuff with crystal accent',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true },
    ],
    rating: 4.8,
    reviewCount: 124,
    tags: ['bestseller', 'ear-cuff'],
    isNew: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    material: 'gold',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming gardens. Each crystal is carefully selected for its unique hue, creating a one-of-a-kind piece that transitions effortlessly from day to evening.',
    shortDescription: 'Multicolor floral crystal necklace',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: [
      { name: 'Gold Chain', value: 'gold', inStock: true },
      { name: 'Silver Chain', value: 'silver', inStock: true },
    ],
    rating: 4.9,
    reviewCount: 89,
    tags: ['bestseller', 'statement'],
    isNew: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    comparePrice: null,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings that make a bold statement. These substantial yet lightweight hoops hug your earlobe perfectly, adding instant polish to any outfit.',
    shortDescription: 'Chunky gold dome huggie earrings',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Rose Gold', value: 'rose-gold', inStock: true },
    ],
    rating: 4.7,
    reviewCount: 203,
    tags: ['bestseller', 'huggies'],
    isNew: false,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    material: 'gold',
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate detailing catches the light beautifully, making these earrings a true conversation starter.',
    shortDescription: 'Textured gold filigree drop earrings',
    images: [
      'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Antique Gold', value: 'antique', inStock: true },
    ],
    rating: 4.9,
    reviewCount: 67,
    tags: ['new', 'drop-earrings'],
    isNew: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    comparePrice: 120,
    category: 'sets',
    material: 'gold',
    description: 'The perfect gift, presented in an elegant gift box. This curated set includes a pair of classic stud earrings and a delicate pendant necklace, creating a coordinated look that feels both luxurious and timeless.',
    shortDescription: 'Gift-boxed earring + necklace set',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    rating: 5.0,
    reviewCount: 156,
    tags: ['bestseller', 'gift', 'set'],
    isNew: false,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops, and ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants, chains, and statement pieces' },
  { id: 'huggies', name: 'Huggies', description: 'Chunky and delicate hoops' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeded my expectations. I receive compliments every time I wear my Majestic Flora necklace.',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'These Golden Sphere Huggies are my new everyday essentials. They\'re the perfect size and so comfortable to wear all day.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my sister. The packaging was exquisite and she absolutely loved it.',
    product: 'Royal Heirloom Set',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop&q=80',
    caption: 'Golden hour, golden jewels ✨',
    author: '@stylebyjane',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80',
    caption: 'My everyday essentials',
    author: '@eleganteveryday',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'Stacked and styled 💫',
    author: '@jewelrylover',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80',
    caption: 'Gift ready ✨',
    author: '@thestyleedit',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Statement piece for the win',
    author: '@fashionforward',
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (category) => products.filter((p) => p.category === category);
export const getBestsellers = () => products.filter((p) => p.tags.includes('bestseller'));
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
