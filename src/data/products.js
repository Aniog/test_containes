export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: '18K gold plated',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', primary: true },
      { id: 'vivid-aura-2', primary: false },
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: '18K gold plated',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', primary: true },
      { id: 'majestic-flora-2', primary: false },
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: '18K gold plated',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', primary: true },
      { id: 'golden-sphere-2', primary: false },
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: '18K gold plated',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', primary: true },
      { id: 'amber-lace-2', primary: false },
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: '18K gold plated',
    rating: 5.0,
    reviews: 45,
    images: [
      { id: 'royal-heirloom-1', primary: true },
      { id: 'royal-heirloom-2', primary: false },
    ],
    variants: ['gold', 'silver'],
    badge: 'Limited',
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
    text: 'The quality is incredible for the price. I wear my Vivid Aura cuffs every single day.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emma L.',
    text: 'Beautiful packaging and even more stunning in person. Already ordered a second pair.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica R.',
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Obsessed.',
    rating: 5,
  },
];
