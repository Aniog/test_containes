export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every turn of your head — effortless elegance, no piercing required.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', src: '', alt: 'Vivid Aura Jewels - gold ear cuff with crystal accent' },
      { id: 'vivid-aura-2', src: '', alt: 'Vivid Aura Jewels - side view' },
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A delicate chain suspends a cluster of multicolor floral crystals, each petal hand-set to create a garden you can wear. The pendant rests just above the collarbone.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', src: '', alt: 'Majestic Flora Nectar - multicolor floral crystal necklace' },
      { id: 'majestic-flora-2', src: '', alt: 'Majestic Flora Nectar - detail view' },
    ],
    variants: ['Gold', 'Silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with quiet confidence. The polished sphere catches light from every angle — a modern classic.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', src: '', alt: 'Golden Sphere Huggies - chunky gold dome earrings' },
      { id: 'golden-sphere-2', src: '', alt: 'Golden Sphere Huggies - worn view' },
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by antique lacework. Each piece is individually crafted, making every pair subtly unique.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', src: '', alt: 'Amber Lace Earrings - textured gold filigree' },
      { id: 'amber-lace-2', src: '', alt: 'Amber Lace Earrings - detail view' },
    ],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A gift-boxed earring and necklace set in matching gold finish. The perfect present for someone special — or a treat you deserve.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 45,
    images: [
      { id: 'royal-heirloom-1', src: '', alt: 'Royal Heirloom Set - gift-boxed earring and necklace' },
      { id: 'royal-heirloom-2', src: '', alt: 'Royal Heirloom Set - open box view' },
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 24 },
  { id: 'necklaces', name: 'Necklaces', count: 18 },
  { id: 'huggies', name: 'Huggies', count: 12 },
  { id: 'sets', name: 'Gift Sets', count: 8 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set for my sister\'s birthday. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. The Amber Lace Earrings are even more beautiful in person.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance ✨', handle: '@sarahstyle' },
  { id: 2, caption: 'Layered perfection', handle: '@emilywears' },
  { id: 3, caption: 'Golden hour glow', handle: '@jessicajewels' },
  { id: 4, caption: 'Stacked & styled', handle: '@minimalchic' },
  { id: 5, caption: 'Date night ready', handle: '@luxeandless' },
];
