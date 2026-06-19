// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece adds instant glamour to any look, worn alone for a minimalist statement or stacked for maximum impact.',
    material: '18K Gold Plated, Hypoallergenic',
    care: 'Avoid contact with water and perfume. Store in a dry place.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that catches the light from every angle. Each crystal is hand-selected for its vibrant color and exceptional clarity.',
    material: '18K Gold Plated, Hypoallergenic',
    care: 'Avoid contact with water and perfume. Store in a dry place.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, bold, and beautifully balanced. These dome huggie earrings feature a smooth gold finish that wraps comfortably around your earlobe for all-day wear.',
    material: '18K Gold Plated, Hypoallergenic',
    care: 'Clean with a soft cloth. Avoid harsh chemicals.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 156,
    variants: ['Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings with intricate lace-like detailing. These conversation-starting pieces balance vintage romance with modern elegance.',
    material: '18K Gold Plated, Hypoallergenic',
    care: 'Avoid moisture and perfumes. Store separately to prevent scratching.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 67,
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'The perfect gift, beautifully packaged in a luxurious gift box. This curated set includes a pair of classic gold stud earrings and a delicate pendant necklace that layer beautifully together.',
    material: '18K Gold Plated, Hypoallergenic',
    care: 'Store in the provided gift box. Clean with a soft, dry cloth.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 203,
    variants: ['Gold'],
    isBestseller: true,
    isGiftSet: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Gift Sets', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning pieces. The quality exceeds expectations at this price point. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. Beautifully packaged and even more beautiful in person.',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that actually looks expensive. The attention to detail is remarkable. Already planning my next purchase!',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Everyday elegance',
    author: '@stylebyalex',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Golden hour glow',
    author: '@maya.style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Stacked & styled',
    author: '@jen.luxury',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Gift ready ✨',
    author: '@sarah.loves.jewels',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Everyday luxury',
    author: '@claire.m.insta',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80',
    caption: 'Date night ready',
    author: '@lisa.wears.velmora',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
