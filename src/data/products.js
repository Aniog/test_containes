export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    inStock: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my huggies every single day.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Flora Nectar as a gift — she absolutely loved it. Beautiful packaging too.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Obsessed.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop' },
  { id: 2, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop' },
  { id: 3, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop' },
  { id: 4, caption: 'Layered perfection', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=700&fit=crop' },
  { id: 5, caption: 'Minimal & refined', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=700&fit=crop' },
];
