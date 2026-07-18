export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviewCount: 124,
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    description:
      'A sculptural gold ear cuff with a single crystal accent, designed to catch candlelight. No piercing required — simply slide it along the ear for an instant layered look.',
    materialsCare: [
      '18K gold-plated brass',
      'Cubic zirconia crystal accent',
      'Hypoallergenic, nickel-free',
      'Avoid contact with perfume, lotion, and water',
      'Store in provided pouch to prevent tarnish',
    ],
    shippingReturns: [
      'Free worldwide shipping on orders over $50',
      'Standard delivery: 5–8 business days',
      'Express delivery available at checkout',
      '30-day hassle-free returns',
      'Gift packaging included',
    ],
    bestseller: true,
    images: [
      { id: 'vivid-aura-1', ratio: '4x3', width: 800 },
      { id: 'vivid-aura-2', ratio: '4x3', width: 800 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviewCount: 89,
    material: '18K Gold Plated',
    variants: ['Gold'],
    description:
      'A delicate necklace featuring hand-set multicolor floral crystals on a fine gold chain. A piece that feels like summer in bloom, perfect for layering or wearing solo.',
    materialsCare: [
      '18K gold-plated sterling silver chain',
      'Hand-set crystal florals',
      'Adjustable 16–18 inch chain',
      'Keep dry and store flat',
    ],
    shippingReturns: [
      'Free worldwide shipping on orders over $50',
      'Standard delivery: 5–8 business days',
      '30-day hassle-free returns',
    ],
    bestseller: true,
    images: [
      { id: 'flora-nectar-1', ratio: '4x3', width: 800 },
      { id: 'flora-nectar-2', ratio: '4x3', width: 800 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviewCount: 215,
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    description:
      'Chunky dome huggie earrings with a polished mirror finish. Lightweight enough for everyday wear, bold enough to make a quiet statement.',
    materialsCare: [
      '18K gold-plated brass',
      'Hinge closure for secure fit',
      'Diameter: 12mm',
      'Wipe gently with soft cloth after wear',
    ],
    shippingReturns: [
      'Free worldwide shipping on orders over $50',
      'Standard delivery: 5–8 business days',
      '30-day hassle-free returns',
    ],
    bestseller: true,
    images: [
      { id: 'sphere-huggies-1', ratio: '4x3', width: 800 },
      { id: 'sphere-huggies-2', ratio: '4x3', width: 800 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    rating: 4.9,
    reviewCount: 76,
    material: '18K Gold Plated',
    variants: ['Gold'],
    description:
      'Textured gold filigree drop earrings inspired by vintage lace. Each curve is cast to catch the light from every angle, creating a soft golden glow around the face.',
    materialsCare: [
      '18K gold-plated brass',
      'Intricate filigree texture',
      'Post back with butterfly closure',
      'Avoid moisture and chemicals',
    ],
    shippingReturns: [
      'Free worldwide shipping on orders over $50',
      'Standard delivery: 5–8 business days',
      '30-day hassle-free returns',
    ],
    bestseller: true,
    images: [
      { id: 'amber-lace-1', ratio: '4x3', width: 800 },
      { id: 'amber-lace-2', ratio: '4x3', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    rating: 5.0,
    reviewCount: 52,
    material: '18K Gold Plated',
    variants: ['Gold'],
    description:
      'A coordinated earring and necklace set presented in a gift-ready Velmora box. The perfect ready-to-give treasure for birthdays, anniversaries, or just because.',
    materialsCare: [
      '18K gold-plated brass',
      'Set includes matching earrings and pendant necklace',
      'Gift box and polishing cloth included',
      'Store in a cool, dry place',
    ],
    shippingReturns: [
      'Free worldwide shipping on orders over $50',
      'Standard delivery: 5–8 business days',
      '30-day hassle-free returns',
      'Complimentary gift message available',
    ],
    bestseller: true,
    images: [
      { id: 'heirloom-set-1', ratio: '4x3', width: 800 },
      { id: 'heirloom-set-2', ratio: '4x3', width: 800 },
    ],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);

export const getBestsellers = (limit = 5) =>
  products.filter((p) => p.bestseller).slice(0, limit);
