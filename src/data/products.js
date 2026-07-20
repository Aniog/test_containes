// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. This piece adds a touch of sparkle to any look, perfect for layering or wearing alone as a statement piece.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming flowers. Each crystal is carefully selected for its vibrant hue and brilliance.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true,
    variants: ['Gold', 'Rose Gold']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with style. A modern classic that transitions effortlessly from day to night.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings with intricate detailing. These elegant pieces showcase masterful craftsmanship and timeless beauty.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 76,
    inStock: true,
    variants: ['Gold']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for special occasions or as a meaningful gift for someone special.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 54,
    inStock: true,
    variants: ['Gold', 'Rose Gold']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.',
    initials: 'S.M.'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Perfect gift for my best friend. The packaging was beautiful and the jewelry exceeded my expectations.',
    initials: 'E.R.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive but doesn\'t break the bank. I\'m obsessed!',
    initials: 'J.L.'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Can\'t stop wearing these'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Minimalist perfection'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Date night ready'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Gold goddess'
  }
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity }
];