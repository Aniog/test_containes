// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'An ethereal gold ear cuff featuring a delicate crystal accent. This statement piece wraps elegantly around your ear, creating a luminous, celestial effect. Perfect for layering or wearing alone as a bold statement.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 127,
    variants: ['Gold', 'Silver'],
    featured: true,
    bestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring blooms. Each crystal is carefully selected for its vibrant hue and brilliance, creating a cascading effect that catches light from every angle.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 89,
    variants: ['Gold'],
    featured: true,
    bestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky, luxurious gold dome huggie earrings that hug your earlobe with comfortable elegance. The polished spherical design reflects light beautifully, making these a go-to for both day and evening wear.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    featured: true,
    bestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each piece is crafted with meticulous attention to detail, creating a vintage-inspired look with modern sophistication.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 76,
    variants: ['Gold'],
    featured: true,
    bestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. This comprehensive piece makes for an unforgettable gift, presented in our signature Velmora keepsake box. The coordinated design ensures effortless elegance.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 54,
    variants: ['Gold'],
    featured: true,
    bestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and statement pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Hoops that hug your lobe',
    image: 'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I\'ve received so many compliments on my Golden Sphere Huggies.',
    initials: 'S'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Perfect for gifting. The Royal Heirloom Set was a huge hit with my mother.',
    initials: 'J'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80&h=711',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80&h=711',
    caption: 'Layered with love'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80&h=711',
    caption: 'My new favorite piece'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1635767798638-3e252a018695?w=400&q=80&h=711',
    caption: 'Subtle sparkle'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80&h=711',
    caption: 'Effortless style'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80&h=711',
    caption: 'Gold goddess'
  }
];