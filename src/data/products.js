export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A sculptural ear cuff adorned with a single crystal accent, designed to catch the light with every turn of the head.',
    price: 42,
    category: 'earrings',
    material: '18k gold plated',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', query: 'gold ear cuff crystal accent jewelry model' },
      { id: 'vivid-aura-2', query: 'gold ear cuff closeup detail luxury' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', color: '#c9a96e' },
      { id: 'silver', label: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A delicate pendant necklace featuring multicolor floral crystals suspended from a fine gold chain.',
    price: 68,
    category: 'necklaces',
    material: '18k gold plated',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', query: 'floral crystal pendant necklace gold chain model' },
      { id: 'majestic-flora-2', query: 'multicolor crystal necklace closeup detail' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', color: '#c9a96e' },
      { id: 'silver', label: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings with a polished finish. Effortlessly elegant for everyday wear.',
    price: 38,
    category: 'huggies',
    material: '18k gold plated',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', query: 'gold dome huggie earrings model ear' },
      { id: 'golden-sphere-2', query: 'chunky gold huggie earrings closeup' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', color: '#c9a96e' },
      { id: 'silver', label: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Lightweight and statement-making.',
    price: 54,
    category: 'earrings',
    material: '18k gold plated',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', query: 'gold filigree drop earrings model' },
      { id: 'amber-lace-2', query: 'textured gold lace earrings detail' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', color: '#c9a96e' },
      { id: 'silver', label: 'Silver', color: '#c0c0c0' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A beautifully gift-boxed matching earring and necklace set. The perfect present for someone special.',
    price: 95,
    category: 'sets',
    material: '18k gold plated',
    rating: 5.0,
    reviews: 41,
    images: [
      { id: 'royal-heirloom-1', query: 'gold jewelry gift box set necklace earrings' },
      { id: 'royal-heirloom-2', query: 'luxury jewelry set gold necklace earrings model' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', color: '#c9a96e' },
      { id: 'silver', label: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', count: 24 },
  { id: 'necklaces', label: 'Necklaces', count: 18 },
  { id: 'huggies', label: 'Huggies', count: 12 },
  { id: 'sets', label: 'Gift Sets', count: 8 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my huggies every single day — they haven\'t tarnished at all.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emma L.',
    text: 'Bought the Flora Nectar necklace as a gift for my sister. She absolutely loved it. The packaging was beautiful too.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia R.',
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Velmora is my new go-to.',
    rating: 5,
  },
];

export const trustItems = [
  { label: 'Free Worldwide Shipping', icon: 'truck' },
  { label: '30-Day Returns', icon: 'refresh' },
  { label: '18K Gold Plated', icon: 'shield' },
  { label: 'Hypoallergenic', icon: 'heart' },
];
