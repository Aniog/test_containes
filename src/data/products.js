export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'Gold ear cuff with crystal accent, demi-fine jewelry for women, 18K gold plated over sterling silver.',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-2', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-3', ratio: '3x4', width: 800 },
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'Gold pendant necklace with multicolor floral crystals, fine chain, demi-fine jewelry for women.',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', ratio: '3x4', width: 800 },
      { id: 'majestic-flora-2', ratio: '3x4', width: 800 },
      { id: 'majestic-flora-3', ratio: '3x4', width: 800 },
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Gold dome huggie earrings, chunky polished finish, demi-fine jewelry for everyday wear.',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', ratio: '3x4', width: 800 },
      { id: 'golden-sphere-2', ratio: '3x4', width: 800 },
      { id: 'golden-sphere-3', ratio: '3x4', width: 800 },
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Gold filigree drop earrings, textured vintage lacework design, lightweight statement jewelry.',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', ratio: '3x4', width: 800 },
      { id: 'amber-lace-2', ratio: '3x4', width: 800 },
      { id: 'amber-lace-3', ratio: '3x4', width: 800 },
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    description: 'Gold earring and necklace gift set, matching demi-fine jewelry, luxury boxed presentation.',
    rating: 5.0,
    reviews: 45,
    images: [
      { id: 'royal-heirloom-1', ratio: '3x4', width: 800 },
      { id: 'royal-heirloom-2', ratio: '3x4', width: 800 },
      { id: 'royal-heirloom-3', ratio: '3x4', width: 800 },
    ],
    variants: ['gold', 'silver'],
    badge: 'Limited',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift — the packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Olivia R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Velmora is my new go-to.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Gold ear cuff everyday elegance ✨', imgId: 'ugc-ear-1', ratio: '9x16', width: 400 },
  { id: 2, caption: 'Layered gold necklaces stacked & loved', imgId: 'ugc-neck-1', ratio: '9x16', width: 400 },
  { id: 3, caption: 'Golden hour glow gold jewelry', imgId: 'ugc-ear-2', ratio: '9x16', width: 400 },
  { id: 4, caption: 'Stacked gold huggie earrings perfection', imgId: 'ugc-ear-3', ratio: '9x16', width: 400 },
  { id: 5, caption: 'Gold pendant necklace date night ready', imgId: 'ugc-neck-2', ratio: '9x16', width: 400 },
  { id: 6, caption: 'Minimal gold jewelry luxe everyday', imgId: 'ugc-ear-4', ratio: '9x16', width: 400 },
];
