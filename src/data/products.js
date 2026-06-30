// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    description: 'Gold ear cuff with crystal accent. A delicate, ethereal piece that wraps around your ear with graceful elegance. The subtle crystal catch light beautifully in any setting.',
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
    description: 'Multicolor floral crystal necklace. Inspired by morning dew on blossoms, this necklace features carefully placed crystals that create a radiant, nature-inspired glow.',
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
    variants: ['Gold', 'Silver']
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    description: 'Chunky gold dome huggie earrings. A bold statement piece with a smooth, polished sphere that hugs your earlobe with comfortable weight and luxurious presence.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 203,
    inStock: true,
    variants: ['Gold']
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    description: 'Textured gold filigree drop earrings. Intricate filigree work meets modern elegance. Each earring is a masterpiece of delicate patterns that sway with every movement.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 156,
    inStock: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    description: 'Gift-boxed earring + necklace set. The perfect gift for life\'s special moments. This coordinated set comes in an elegant gift box, ready to be presented and treasured.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 312,
    inStock: true,
    variants: ['Gold']
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
    text: 'The quality is exceptional. I\'ve worn my Golden Sphere Huggies every day since I got them.',
    initial: 'S'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
    initial: 'E'
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Received so many compliments on my Majestic Flora Nectar necklace. Worth every penny.',
    initial: 'O'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Obsessed with these'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=400&h=711&fit=crop',
    caption: 'Gold vibes only'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Perfect for gifting'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);