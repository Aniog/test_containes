// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A stunning gold ear cuff featuring a crystal accent that catches light with every movement. This piece effortlessly elevates any look from casual to elegant.',
    shortDescription: 'Gold ear cuff with crystal accent',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['gold'],
    badge: 'Bestseller',
    isBestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A multicolor floral crystal necklace that brings garden-inspired elegance to your everyday style. Each crystal is carefully selected for its exceptional clarity and color.',
    shortDescription: 'Multicolor floral crystal necklace',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: ['gold'],
    badge: 'New',
    isBestseller: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres add dimension and sophistication to your ear curation.',
    shortDescription: 'Chunky gold dome huggie earrings',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: null,
    isBestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings featuring intricate lace-like patterns. These heirloom-quality pieces showcase exceptional craftsmanship.',
    shortDescription: 'Textured gold filigree drop earrings',
    rating: 4.9,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['gold'],
    badge: 'Limited',
    isBestseller: false,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    material: 'gold',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special. Presented in our signature Velmora jewelry box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    rating: 5.0,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['gold'],
    badge: 'Gift Set',
    isBestseller: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable everyday hoops',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. Velmora has become my go-to for gifts.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'The packaging alone makes you feel like you\'re unwrapping something special. Obsessed with the Majestic Flora necklace!',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80',
    caption: 'Stacked & styled',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80',
    caption: 'Layered perfection',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'Minimalist luxury',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Statement piece',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80',
    caption: 'Gift ready',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && (p.category === product.category || p.isBestseller))
    .slice(0, limit);
};
