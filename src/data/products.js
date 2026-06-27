// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    description: 'A delicate gold ear cuff featuring a shimmering crystal accent. Perfect for creating an ethereal, layered look.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 127,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming gardens. A statement piece for any occasion.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['Gold', 'Rose Gold']
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with luxurious warmth. A modern classic.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 203,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like patterns. Elegant and timeless.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 156,
    inStock: true,
    variants: ['Gold']
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for someone special.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 78,
    inStock: true,
    variants: ['Gold', 'Rose Gold']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=800&fit=crop' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.',
    initials: 'S'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Beautiful packaging and the jewelry exceeded my expectations. Will definitely be ordering again.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Perfect for gifting. The Royal Heirloom Set was a hit at my friend\'s birthday.',
    initials: 'O'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'Obsessed with this necklace'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop',
    caption: 'Gold vibes only'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Minimalist luxury'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);