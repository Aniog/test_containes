// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. Perfect for creating an ethereal, layered look.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 124,
    inStock: true,
    isBestseller: true
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming gardens. A statement piece for any occasion.',
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    isBestseller: true
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings that hug your earlobe with luxurious comfort. A modern classic.',
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 156,
    inStock: true,
    isBestseller: true
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings with intricate lace-like patterns. Timeless elegance for special moments.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 67,
    inStock: true,
    isBestseller: true
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for someone special.',
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 203,
    inStock: true,
    isBestseller: true
  },
  {
    id: 6,
    name: 'LUNA CHAIN NECKLACE',
    slug: 'luna-chain-necklace',
    price: 48,
    description: 'A delicate chain necklace with a subtle crescent moon pendant. Perfect for everyday wear.',
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 92,
    inStock: true,
    isBestseller: false
  },
  {
    id: 7,
    name: 'CELESTIAL HUGGIES',
    slug: 'celestial-huggies',
    price: 45,
    description: 'Small gold huggie earrings with subtle star details. Add a touch of sparkle to any look.',
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 78,
    inStock: true,
    isBestseller: false
  },
  {
    id: 8,
    name: 'AURORA STUD EARRINGS',
    slug: 'aurora-stud-earrings',
    price: 36,
    description: 'Classic gold stud earrings with a subtle iridescent finish. Essential for any jewelry collection.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 145,
    inStock: true,
    isBestseller: false
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3 },
  { id: 'necklaces', name: 'Necklaces', count: 2 },
  { id: 'huggies', name: 'Huggies', count: 2 },
  { id: 'sets', name: 'Sets', count: 1 }
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
    text: 'Perfect for gifting. The Royal Heirloom Set arrived beautifully packaged.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesnt tarnish. Obsessed!',
    initials: 'J'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Wearing my Vivid Aura Jewels'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Golden moments'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'My everyday staple'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Love these huggies'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop',
    caption: 'Effortless elegance'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=600&fit=crop',
    caption: 'Heirloom vibes'
  }
];