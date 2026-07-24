// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff with crystal accent that adds effortless elegance to any look. Crafted from 18K gold-plated brass with hypoallergenic posts.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Hypoallergenic Brass, Cubic Zirconia',
    care: 'Avoid contact with water and perfumes. Store in a cool, dry place. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A multicolor floral crystal necklace that captures the essence of blooming gardens. Each crystal is carefully selected for its unique color and brilliance.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated Chain, Glass Crystals, Hypoallergenic Base',
    care: 'Avoid exposure to water and chemicals. Gently wipe with a soft cloth after wearing.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviews: 89,
    badge: null,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres catch light beautifully from every angle.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Surgical Steel Post, Hypoallergenic',
    care: 'Store separately to avoid scratching. Clean with a jewelry polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 156,
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and comfortable for all-day wear.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated Brass, Lightweight Construction',
    care: 'Keep away from moisture. Store in the provided pouch when not in use.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.8,
    reviews: 72,
    badge: null,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'An exquisite gift-boxed earring and necklace set perfect for gifting. Each piece features timeless design that transcends seasons.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Premium Brass, Comes in Luxury Gift Box',
    care: 'Follow individual care instructions for each piece. Store in the gift box when not wearing.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 5.0,
    reviews: 203,
    badge: 'Gift Pick',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green. Velmora has become my go-to for gifts.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'The Royal Heirloom Set was perfect for my anniversary. My husband was so pleased with the packaging too!',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to statement pieces',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'The everyday essential',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday elegance ✨',
    handle: '@stylebyalex',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop&q=80',
    caption: 'Layered perfection',
    handle: '@themodernwoman',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop&q=80',
    caption: 'Minimalist vibes',
    handle: '@luxe.daily',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop&q=80',
    caption: 'Gift ready ✨',
    handle: '@thegiftguide',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80',
    caption: 'Date night ready',
    handle: '@effortless.style',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80',
    caption: 'The perfect gift',
    handle: '@jewelry.lover',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
