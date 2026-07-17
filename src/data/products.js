const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 127,
    description:
      'A luminous crystal accent set in warm 18K gold-plated brass. The open cuff design hugs the ear with an effortless sculptural elegance — perfect worn alone or stacked with studs.',
    details: [
      '18K gold plated over brass',
      'Cubic zirconia crystal accent',
      'Cuff style — no piercing required',
      'Sold as a single (left or right ear)',
      'Diameter: 12mm',
    ],
    care: 'Keep away from water, perfume, and lotions. Store in the provided Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: [
      'vivid-aura-1',
      'vivid-aura-2',
      'vivid-aura-3',
    ],
    colors: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 84,
    description:
      'A cascade of delicate floral charms with multicolor crystal centers. Suspended on a fine gold chain, this piece evokes a garden in full bloom — romantic, feminine, unforgettable.',
    details: [
      '18K gold plated over brass',
      'Multicolor cubic zirconia crystals',
      'Adjustable chain: 40cm + 5cm extension',
      'Lobster clasp closure',
      'Pendant drop: 25mm',
    ],
    care: 'Avoid contact with water and chemicals. Remove before swimming or showering. Store flat in the included Velmora pouch.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: [
      'majestic-flora-1',
      'majestic-flora-2',
      'majestic-flora-3',
    ],
    colors: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description:
      'Chunky dome huggies with a smooth, high-polish finish. These everyday essentials catch the light beautifully — substantial enough to make a statement, light enough for all-day wear.',
    details: [
      '18K gold plated over brass',
      'High-polish domed finish',
      'Hinged clasp closure',
      'Sold as a pair',
      'Diameter: 14mm',
    ],
    care: 'Remove before sleeping or swimming. Wipe with a soft cloth after wear. Store in your Velmora pouch to prevent scratches.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: [
      'golden-sphere-1',
      'golden-sphere-2',
      'golden-sphere-3',
    ],
    colors: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 61,
    description:
      'Intricate filigree work inspired by vintage lace patterns. These drop earrings feature openwork gold detailing with a warm amber-toned crystal drop — heirloom charm for the modern woman.',
    details: [
      '18K gold plated over brass',
      'Amber-toned crystal drop',
      'French hook closure',
      'Sold as a pair',
      'Drop length: 38mm',
    ],
    care: 'Delicate filigree — handle with care. Avoid contact with water and chemicals. Store upright in your Velmora pouch.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: [
      'amber-lace-1',
      'amber-lace-2',
      'amber-lace-3',
    ],
    colors: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 48,
    description:
      'A beautifully gift-boxed set pairing our signature crystal drop earrings with a matching pendant necklace. The ultimate gift — presented in a Velmora keepsake box, ready for the most special occasions.',
    details: [
      '18K gold plated over brass',
      'Clear cubic zirconia crystals',
      'Earrings: French hook, 32mm drop',
      'Necklace: 42cm + 5cm extension',
      'Gift-boxed with velvet insert',
    ],
    care: 'Treat as fine jewelry. Remove before swimming, showering, or exercising. Store each piece separately.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: [
      'royal-heirloom-1',
      'royal-heirloom-2',
      'royal-heirloom-3',
    ],
    colors: ['gold', 'silver'],
  },
];

export default products;

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
  { id: 'sets', name: 'Sets', slug: 'sets' },
];

export const reviews = [
  {
    name: 'Sophia R.',
    rating: 5,
    text: 'The most beautiful earrings I\'ve ever owned. The gold tone is so warm and luxurious — I wear them every single day.',
  },
  {
    name: 'Emily C.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my sister for her birthday. The packaging alone made her cry. Absolutely stunning quality.',
  },
  {
    name: 'Lauren M.',
    rating: 5,
    text: 'I was skeptical about the price point but these genuinely feel like pieces that cost 5x more. My new go-to brand for gifts.',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
