const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A luminous gold ear cuff adorned with a single crystal accent, designed to wrap the ear with understated brilliance. The open silhouette catches light from every angle.',
    materials: '18K gold-plated brass, cubic zirconia crystal',
    variants: [
      { name: 'Gold', value: 'gold', hex: '#C4A45A' },
      { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
    ],
    images: {
      primary: 'vivid-aura-jewels-primary',
      hover: 'vivid-aura-jewels-hover',
    },
    tags: ['bestseller', 'new'],
    slug: 'vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A statement floral necklace featuring multicolor crystal petals set in warm gold. Each bloom is meticulously crafted to capture the essence of a garden in full bloom.',
    materials: '18K gold-plated brass, multicolor Austrian crystals',
    variants: [
      { name: 'Gold', value: 'gold', hex: '#C4A45A' },
      { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
    ],
    images: {
      primary: 'majestic-flora-nectar-primary',
      hover: 'majestic-flora-nectar-hover',
    },
    tags: ['bestseller'],
    slug: 'majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggies that hug the earlobe with a sculptural presence. A modern take on the classic hoop, finished with a high-polish shine.',
    materials: '18K gold-plated sterling silver',
    variants: [
      { name: 'Gold', value: 'gold', hex: '#C4A45A' },
      { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
    ],
    images: {
      primary: 'golden-sphere-huggies-primary',
      hover: 'golden-sphere-huggies-hover',
    },
    tags: ['bestseller'],
    slug: 'golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Delicate gold filigree drops inspired by antique lacework. Each earring is hand-textured with intricate openwork patterns that sway gently with movement.',
    materials: '18K gold-plated brass, amber-tone glass',
    variants: [
      { name: 'Gold', value: 'gold', hex: '#C4A45A' },
      { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
    ],
    images: {
      primary: 'amber-lace-earrings-primary',
      hover: 'amber-lace-earrings-hover',
    },
    tags: [],
    slug: 'amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set pairing a radiant crystal pendant necklace with matching drop earrings. Presented in a velvet-lined box, ready for the most memorable occasions.',
    materials: '18K gold-plated sterling silver, premium crystals',
    variants: [
      { name: 'Gold', value: 'gold', hex: '#C4A45A' },
      { name: 'Silver', value: 'silver', hex: '#C0C0C0' },
    ],
    images: {
      primary: 'royal-heirloom-set-primary',
      hover: 'royal-heirloom-set-hover',
    },
    tags: ['bestseller', 'gift'],
    slug: 'royal-heirloom-set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', imageQuery: 'gold earrings model editorial' },
  { id: 'necklaces', name: 'Necklaces', imageQuery: 'gold necklace model editorial' },
  { id: 'huggies', name: 'Huggies', imageQuery: 'gold huggie earrings editorial' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every day and they still look as brilliant as the day I unboxed them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer L.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The presentation was exquisite — she cried when she opened it. Truly a special piece.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Alexandra K.',
    text: 'Finally, demi-fine jewelry that feels luxurious without the luxury markup. The attention to detail is remarkable. I\'m building my collection piece by piece.',
    rating: 5,
  },
];

export const ugcReels = [
  { id: 1, caption: 'Golden hour glow', product: 'Vivid Aura Jewels' },
  { id: 2, caption: 'Everyday elegance', product: 'Golden Sphere Huggies' },
  { id: 3, caption: 'Date night layers', product: 'Majestic Flora Nectar' },
  { id: 4, caption: 'Stacked & styled', product: 'Amber Lace Earrings' },
  { id: 5, caption: 'Gift unboxing', product: 'Royal Heirloom Set' },
  { id: 6, caption: 'Minimal moments', product: 'Vivid Aura Jewels' },
];

export default products;