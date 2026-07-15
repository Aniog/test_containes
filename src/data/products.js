export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement, this piece embodies effortless elegance.',
    shortDescription: 'Gold ear cuff with crystal accent',
    rating: 4.8,
    reviews: 124,
    variants: ['gold', 'silver'],
    images: [
      { id: 'vivid-aura-1', src: '', alt: 'Vivid Aura Jewels - front view' },
      { id: 'vivid-aura-2', src: '', alt: 'Vivid Aura Jewels - side view' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    description: 'A cascading floral pendant featuring multicolor crystals set in warm gold. Each petal is carefully crafted to create a garden-inspired masterpiece.',
    shortDescription: 'Multicolor floral crystal necklace',
    rating: 4.9,
    reviews: 89,
    variants: ['gold', 'silver'],
    images: [
      { id: 'majestic-flora-1', src: '', alt: 'Majestic Flora Nectar - front view' },
      { id: 'majestic-flora-2', src: '', alt: 'Majestic Flora Nectar - detail view' },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    description: 'Chunky gold dome huggie earrings that sit close to the earlobe. A modern take on a classic silhouette, perfect for everyday luxury.',
    shortDescription: 'Chunky gold dome huggie earrings',
    rating: 4.7,
    reviews: 156,
    variants: ['gold', 'silver'],
    images: [
      { id: 'golden-sphere-1', src: '', alt: 'Golden Sphere Huggies - front view' },
      { id: 'golden-sphere-2', src: '', alt: 'Golden Sphere Huggies - worn view' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate detailing creates a romantic, heirloom-quality piece.',
    shortDescription: 'Textured gold filigree drop earrings',
    rating: 4.6,
    reviews: 72,
    variants: ['gold', 'silver'],
    images: [
      { id: 'amber-lace-1', src: '', alt: 'Amber Lace Earrings - front view' },
      { id: 'amber-lace-2', src: '', alt: 'Amber Lace Earrings - detail view' },
    ],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    description: 'A beautifully gift-boxed set featuring matching earrings and necklace. The perfect expression of refined taste, ideal for gifting or self-purchase.',
    shortDescription: 'Gift-boxed earring + necklace set',
    rating: 5.0,
    reviews: 43,
    variants: ['gold', 'silver'],
    images: [
      { id: 'royal-heirloom-1', src: '', alt: 'Royal Heirloom Set - full set view' },
      { id: 'royal-heirloom-2', src: '', alt: 'Royal Heirloom Set - detail view' },
    ],
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
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. Beautiful packaging too.',
  },
  {
    id: 3,
    name: 'Olivia R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Velmora is my new go-to.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance', imageId: 'ugc-1' },
  { id: 2, caption: 'Golden hour glow', imageId: 'ugc-2' },
  { id: 3, caption: 'Stacked & styled', imageId: 'ugc-3' },
  { id: 4, caption: 'Date night ready', imageId: 'ugc-4' },
  { id: 5, caption: 'Minimalist magic', imageId: 'ugc-5' },
  { id: 6, caption: 'Layered perfection', imageId: 'ugc-6' },
];
