export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A stunning gold ear cuff with crystal accent, designed to add a touch of glamour to any look. The intricate design catches light beautifully, making it perfect for both day and evening wear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    tags: ['bestseller', 'ear-cuff'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    variants: ['Gold', 'Silver'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its clarity and brilliance, creating a piece that transitions seamlessly from casual to formal occasions.',
    shortDescription: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    tags: ['floral', 'crystal'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres create a luxurious look that complements any outfit. Lightweight and comfortable for all-day wear.',
    shortDescription: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    tags: ['huggies', 'classic'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 156,
    variants: ['Gold', 'Rose Gold'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. The detailed craftsmanship creates a delicate yet eye-catching piece that adds elegance to any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    tags: ['filigree', 'drop-earrings'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 73,
    variants: ['Gold', 'Silver'],
    inStock: true,
    isBestseller: false,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. This coordinated duo makes the perfect gift for yourself or a loved one. Presented in an elegant velvet-lined box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    tags: ['gift', 'set', 'luxury'],
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    ],
    rating: 5.0,
    reviewCount: 45,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Jewelry', count: products.length },
  { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
  { id: 'huggies', name: 'Huggies', count: products.filter(p => p.category === 'huggies').length },
  { id: 'sets', name: 'Sets', count: products.filter(p => p.category === 'sets').length },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeds expectations at this price point. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. The packaging was beautiful too!',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks luxurious without the luxury price tag. Velmora has become my go-to for gifting.',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Everyday elegance',
    handle: '@stylebyalex',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'My new favorite pieces',
    handle: '@minimalistluxe',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop',
    caption: 'Date night ready',
    handle: '@jessicavintage',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Elevated everyday',
    handle: '@通勤スタイル',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Layered perfection',
    handle: '@goldandglow',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Huggies obsession',
    handle: '@earcandy_jewels',
  },
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getRelatedProducts = (productId, limit = 4) => 
  products.filter(p => p.id !== productId).slice(0, limit);
