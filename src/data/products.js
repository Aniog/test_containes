export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', query: 'gold ear cuff crystal accent jewelry closeup' },
      { id: 'vivid-aura-2', query: 'gold ear cuff model wearing jewelry' },
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', query: 'floral crystal necklace multicolor gold jewelry' },
      { id: 'majestic-flora-2', query: 'floral necklace model wearing pendant' },
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 156,
    images: [
      { id: 'golden-sphere-1', query: 'chunky gold dome huggie earrings jewelry' },
      { id: 'golden-sphere-2', query: 'gold huggie earrings model ear closeup' },
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 72,
    images: [
      { id: 'amber-lace-1', query: 'textured gold filigree drop earrings jewelry' },
      { id: 'amber-lace-2', query: 'gold filigree earrings model wearing' },
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviews: 43,
    images: [
      { id: 'royal-heirloom-1', query: 'gold jewelry gift box earring necklace set' },
      { id: 'royal-heirloom-2', query: 'luxury jewelry set gold necklace earrings' },
    ],
    variants: ['gold', 'silver'],
    badge: 'Limited',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', imageQuery: 'gold earrings jewelry collection' },
  { id: 'necklaces', name: 'Necklaces', imageQuery: 'gold necklace jewelry collection' },
  { id: 'huggies', name: 'Huggies', imageQuery: 'gold huggie earrings jewelry' },
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
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Velmora is my new go-to.',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
