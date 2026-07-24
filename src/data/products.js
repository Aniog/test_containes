// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff adorned with a brilliant crystal accent. This piece effortlessly elevates any look, from casual daytime elegance to evening sophistication.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystal',
    care: 'Store in a dry place. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    variants: ['Gold', 'Rose Gold'],
    rating: 4.8,
    reviewCount: 124,
    bestseller: true,
    isNew: false
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a spring garden. Each crystal petal is carefully placed to create a stunning, light-catching effect.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Austrian Crystals',
    care: 'Store in a dry place. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 89,
    bestseller: true,
    isNew: false
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Our most popular huggie style! Chunky gold dome huggie earrings that hug close to the ear. The perfect everyday piece with maximum impact.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Surgical Steel post',
    care: 'Store in a dry place. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 256,
    bestseller: true,
    isNew: false
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. A timeless piece that adds a touch of vintage elegance to any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass base',
    care: 'Store in a dry place. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviewCount: 67,
    bestseller: true,
    isNew: true
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'The perfect gift! This luxurious set comes beautifully packaged in a gift box and includes a matching pair of earrings and necklace. Ideal for anniversaries, birthdays, or simply treating yourself.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Cubic Zirconia stones',
    care: 'Store in a dry place. Avoid contact with water, perfume, and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    ],
    variants: ['Gold'],
    rating: 5.0,
    reviewCount: 43,
    bestseller: true,
    isNew: false
  }
];

export const categories = [
  { id: 'all', name: 'All Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80' },
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    review: 'Absolutely stunning jewelry. The quality exceeds expectations for the price point. I receive compliments every time I wear my Golden Sphere Huggies.',
    rating: 5,
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emily R.',
    review: 'Purchased the Royal Heirloom Set as a gift for my mother. The packaging was exquisite and the jewelry is even more beautiful in person.',
    rating: 5,
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Jessica L.',
    review: 'Finally found demi-fine jewelry that looks luxurious without the luxury price tag. My Majestic Flora necklace is absolutely perfect.',
    rating: 5,
    product: 'Majestic Flora Nectar'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=711&fit=crop',
    caption: 'Golden hour, golden glow ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop',
    caption: 'Everyday elegance'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=711&fit=crop',
    caption: 'Date night ready 💫'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=711&fit=crop',
    caption: 'Minimalist dreams'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop',
    caption: 'Stacked and styled'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=711&fit=crop',
    caption: 'Effortlessly chic'
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getBestsellers = () => products.filter(p => p.bestseller);
export const getProductsByCategory = (category) => 
  category === 'all' ? products : products.filter(p => p.category === category);
