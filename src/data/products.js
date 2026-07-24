export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    material: '18k-gold-plated',
    badge: 'Bestseller',
    description: 'A sculptural ear cuff that wraps gracefully along the ear, punctuated by a single luminous crystal accent. Designed to be worn solo or stacked, this piece captures light with every movement.',
    materials: '18K gold-plated brass, cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    images: [
      { id: 'vivid-aura-1', ratio: '4x3', width: 800 },
      { id: 'vivid-aura-2', ratio: '4x3', width: 800 },
      { id: 'vivid-aura-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    material: '18k-gold-plated',
    badge: 'New',
    description: 'An enchanting bouquet of hand-set crystals in soft pastel tones, arranged along a delicate gold chain. This necklace transitions effortlessly from daytime elegance to evening allure.',
    materials: '18K gold-plated brass, handset multicolor cubic zirconia. Nickel-free and hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    images: [
      { id: 'flora-nectar-1', ratio: '4x3', width: 800 },
      { id: 'flora-nectar-2', ratio: '4x3', width: 800 },
      { id: 'flora-nectar-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
    ],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 203,
    category: 'huggies',
    material: '18k-gold-plated',
    badge: 'Bestseller',
    description: 'Bold yet refined, these chunky dome huggies bring architectural presence to any look. Their smooth, polished surface catches and reflects light with understated glamour.',
    materials: '18K gold-plated brass. Nickel-free and hypoallergenic. Secure hinged closure.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    images: [
      { id: 'sphere-huggies-1', ratio: '4x3', width: 800 },
      { id: 'sphere-huggies-2', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: false },
    ],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 76,
    category: 'earrings',
    material: '18k-gold-plated',
    badge: null,
    description: 'Intricate filigree work inspired by vintage lacework, reimagined in modern gold. These lightweight drops sway beautifully, framing the face with warmth and texture.',
    materials: '18K gold-plated brass. Nickel-free and hypoallergenic. Lightweight hollow construction.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    images: [
      { id: 'amber-lace-1', ratio: '4x3', width: 800 },
      { id: 'amber-lace-2', ratio: '4x3', width: 800 },
      { id: 'amber-lace-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
    ],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    originalPrice: 120,
    rating: 5.0,
    reviewCount: 45,
    category: 'sets',
    material: '18k-gold-plated',
    badge: 'Gift Set',
    description: 'The perfect gift, beautifully presented. A curated pairing of our most-loved earring and necklace designs, nestled in a Velmora gift box with a handwritten-style card.',
    materials: '18K gold-plated brass. Nickel-free and hypoallergenic. Includes gift box and card.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    images: [
      { id: 'heirloom-1', ratio: '4x3', width: 800 },
      { id: 'heirloom-2', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
    ],
    inStock: true,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .slice(0, limit);
};

export const getBestsellers = () =>
  products.filter((p) => p.badge === 'Bestseller');

export const categories = [
  { id: 'earrings', name: 'Earrings', imageId: 'cat-earrings-1' },
  { id: 'necklaces', name: 'Necklaces', imageId: 'cat-necklaces-1' },
  { id: 'huggies', name: 'Huggies', imageId: 'cat-huggies-1' },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is stunning for the price. I get compliments every time I wear my Vivid Aura cuff. It looks so much more expensive than it is.',
  },
  {
    id: 't2',
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging alone felt like a luxury experience.',
  },
  {
    id: 't3',
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesnt turn my ears green. These huggies are my everyday staple now.',
  },
];

export const ugcPosts = [
  {
    id: 'ugc1',
    caption: 'Everyday glamour',
    handle: '@sarahstyles',
  },
  {
    id: 'ugc2',
    caption: 'Stacked & styled',
    handle: '@emilywears',
  },
  {
    id: 'ugc3',
    caption: 'Date night ready',
    handle: '@jenajewels',
  },
  {
    id: 'ugc4',
    caption: 'Minimal but luxe',
    handle: '@minimalmuse',
  },
  {
    id: 'ugc5',
    caption: 'Self-gifted',
    handle: '@treatyourself',
  },
  {
    id: 'ugc6',
    caption: 'Golden hour glow',
    handle: '@glowwithgold',
  },
];
