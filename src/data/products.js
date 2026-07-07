const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A luminous gold ear cuff with a delicate crystal accent. Designed to wrap elegantly around the ear for an effortless statement.',
    materials: '18K gold plated brass, Swarovski crystal',
    care: 'Avoid contact with water and perfume. Store in a dry pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. 30-day returns.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 87,
    description:
      'A multicolor floral crystal pendant suspended on a fine gold chain. Inspired by wild nectar blooms at dawn.',
    materials: '18K gold plated brass, multicolor Swarovski crystals',
    care: 'Avoid contact with water and perfume. Store flat in a dry pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. 30-day returns.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description:
      'Chunky gold dome huggie earrings with a polished, mirror-like finish. Perfectly sized for everyday wear with a bold presence.',
    materials: '18K gold plated brass',
    care: 'Avoid contact with water and perfume. Store in a dry pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. 30-day returns.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 59,
    description:
      'Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight and endlessly romantic.',
    materials: '18K gold plated brass',
    care: 'Avoid contact with water and perfume. Store in a dry pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. 30-day returns.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 41,
    description:
      'A gift-boxed earring and necklace set crafted with faceted crystal accents. An heirloom-worthy duo for special occasions.',
    materials: '18K gold plated brass, Swarovski crystals',
    care: 'Avoid contact with water and perfume. Store in a dry pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. 30-day returns.',
    variants: ['Gold', 'Silver'],
  },
];

export default products;

export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

export const testimonials = [
  { name: 'Isabella M.', text: 'Absolutely stunning. The quality far exceeded my expectations. I wear my Golden Sphere Huggies every single day.', rating: 5 },
  { name: 'Charlotte D.', text: 'The packaging alone feels like a gift. Bought the Majestic Flora Nectar for my sister and she hasn\'t taken it off.', rating: 5 },
  { name: 'Olivia R.', text: 'Quiet luxury at its finest. The gold finish is impeccable and the pieces feel weighty and substantial.', rating: 5 },
];

export const ugcPosts = [
  { id: 'ugc1', caption: 'Everyday gold', tag: '@sophia.k' },
  { id: 'ugc2', caption: 'Stacked & layered', tag: '@emma.w' },
  { id: 'ugc3', caption: 'Golden hour glow', tag: '@olivia.r' },
  { id: 'ugc4', caption: 'Weekend details', tag: '@charlotte.m' },
  { id: 'ugc5', caption: 'Less is more', tag: '@isabella.d' },
  { id: 'ugc6', caption: 'New favorites', tag: '@mia.t' },
];
