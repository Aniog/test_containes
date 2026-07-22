// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    details: 'A stunning ear cuff featuring a delicate crystal accent that catches the light beautifully. Crafted in 18K gold-plated sterling silver for lasting shine.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    details: 'A captivating necklace featuring multicolor crystal blooms that create a floral garden effect. Perfect for layering or wearing alone as a statement piece.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    details: 'Bold yet elegant, these chunky dome huggie earrings add instant glamour to any look. Hinged closure ensures a secure, comfortable fit.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 67,
    badge: null,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    details: 'Intricate filigree work creates an elegant lace-like pattern in these stunning drop earrings. Each pair is hand-finished for exceptional detail.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 156,
    badge: 'Gift Ready',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    variants: ['Gold'],
    details: 'The perfect gift, beautifully packaged in a signature Velmora box. Includes matching stud earrings and a delicate pendant necklace.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The packaging alone made this feel like a luxurious gift. The jewelry exceeds expectations.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive without the designer price tag.',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Gift ready 💫',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Ear party 💛',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Layered perfection',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Minimalist chic',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Date night vibes ✨',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & ear cuffs',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Dome & hoop earrings',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
];
