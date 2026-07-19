export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement, this piece embodies effortless elegance.',
    materials: '18K gold plated over brass. Crystal accent. Hypoallergenic and nickel-free.',
    images: [
      { id: 'vivid-aura-1', primary: true },
      { id: 'vivid-aura-2', primary: false },
    ],
    variants: ['Gold', 'Silver'],
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    description: 'A delicate pendant featuring multicolor floral crystals set in a gold-toned frame. Each crystal is hand-set to create a garden of light around your neckline.',
    materials: '18K gold plated over brass. Multicolor Swarovski crystals. Adjustable chain 16-18 inches.',
    images: [
      { id: 'majestic-flora-1', primary: true },
      { id: 'majestic-flora-2', primary: false },
    ],
    variants: ['Gold', 'Silver'],
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    description: 'Chunky gold dome huggie earrings that hug your earlobe with understated luxury. The polished sphere design catches light from every angle.',
    materials: '18K gold plated over brass. Secure hinged closure. Hypoallergenic posts.',
    images: [
      { id: 'golden-sphere-1', primary: true },
      { id: 'golden-sphere-2', primary: false },
    ],
    variants: ['Gold', 'Silver'],
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates a play of light and shadow.',
    materials: '18K gold plated over brass. French hook closure. Lightweight construction.',
    images: [
      { id: 'amber-lace-1', primary: true },
      { id: 'amber-lace-2', primary: false },
    ],
    variants: ['Gold', 'Silver'],
    related: ['golden-sphere-huggies', 'vivid-aura-jewels'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 45,
    description: 'A gift-boxed earring and necklace set designed for the modern heirloom. Coordinated pieces that transition seamlessly from day to evening.',
    materials: '18K gold plated over brass. Presented in luxury gift box. Hypoallergenic.',
    images: [
      { id: 'royal-heirloom-1', primary: true },
      { id: 'royal-heirloom-2', primary: false },
    ],
    variants: ['Gold', 'Silver'],
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 2 },
  { id: 'huggies', name: 'Huggies', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Vivid Aura cuffs every single day and get compliments constantly.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. The Golden Sphere Huggies are my new obsession.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance', imgId: 'ugc-1' },
  { id: 2, caption: 'Stacked & styled', imgId: 'ugc-2' },
  { id: 3, caption: 'Golden hour glow', imgId: 'ugc-3' },
  { id: 4, caption: 'Layered perfection', imgId: 'ugc-4' },
  { id: 5, caption: 'Weekend vibes', imgId: 'ugc-5' },
  { id: 6, caption: 'Date night ready', imgId: 'ugc-6' },
];
