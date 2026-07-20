// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. Perfect for creating a layered, editorial look.',
    category: 'earrings',
    material: 'Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Features hand-placed crystals on a delicate gold chain.',
    category: 'necklaces',
    material: 'Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings that make a statement. Comfortable click-through closure for all-day wear.',
    category: 'earrings',
    material: 'Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings with intricate detailing. A timeless piece that elevates any outfit.',
    category: 'earrings',
    material: 'Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for special occasions.',
    category: 'sets',
    material: 'Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop'
    ],
    rating: 5.0,
    reviews: 78,
    inStock: true,
    variants: ['Gold', 'Silver']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I\'ve received so many compliments on my Golden Sphere Huggies.',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. The Royal Heirloom Set was the perfect anniversary gift.',
    date: '2024-01-10'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t look cheap. The attention to detail is incredible.',
    date: '2024-01-05'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=600&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Layered with love'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Gift giving season'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop',
    caption: 'Minimalist vibes'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Effortlessly chic'
  }
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity }
];

export const materials = [
  { id: 'gold-plated', label: 'Gold Plated' },
  { id: 'silver-plated', label: 'Silver Plated' },
  { id: 'rose-gold', label: 'Rose Gold' }
];