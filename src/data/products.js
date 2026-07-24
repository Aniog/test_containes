export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    material: '18k-gold-plated',
    tone: ['gold', 'silver'],
    description:
      'A sculptural gold ear cuff finished with a single hand-set crystal accent. Designed to sit comfortably along the ear without a piercing, it catches candlelight with every turn.',
    materialsCare:
      '18K gold-plated brass. Nickel-free and hypoallergenic. Avoid contact with perfume, lotion, and water. Store in the provided pouch to maintain shine.',
    images: {
      gold: ['vivid-aura-gold-1', 'vivid-aura-gold-2'],
      silver: ['vivid-aura-silver-1', 'vivid-aura-silver-2'],
    },
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    material: '18k-gold-plated',
    tone: ['gold'],
    description:
      'A delicate pendant necklace blooming with multicolor floral crystals. Strung on a fine cable chain, it layers beautifully or stands alone as a statement of softness.',
    materialsCare:
      '18K gold-plated sterling silver chain. Hand-set glass crystals. Remove before swimming or showering. Polish gently with a soft cloth.',
    images: {
      gold: ['flora-nectar-1', 'flora-nectar-2'],
    },
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    material: '18k-gold-plated',
    tone: ['gold', 'silver'],
    description:
      'Chunky dome huggies that hug the lobe with a polished, liquid-gold finish. Lightweight enough for all-day wear, bold enough to be noticed.',
    materialsCare:
      '18K gold-plated brass with surgical steel posts. Hypoallergenic. Store flat and avoid sleeping in your earrings.',
    images: {
      gold: ['sphere-huggies-gold-1', 'sphere-huggies-gold-2'],
      silver: ['sphere-huggies-silver-1', 'sphere-huggies-silver-2'],
    },
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    material: '18k-gold-plated',
    tone: ['gold'],
    description:
      'Textured filigree drops inspired by vintage lace and warm amber light. Each curve is cast and polished by hand for a one-of-a-kind heirloom feel.',
    materialsCare:
      '18K gold-plated brass. Avoid abrasive surfaces. Clean with a soft dry cloth and store away from direct sunlight.',
    images: {
      gold: ['amber-lace-1', 'amber-lace-2'],
    },
    tags: [],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 53,
    material: '18k-gold-plated',
    tone: ['gold'],
    description:
      'A curated earring and necklace pairing, gift-boxed and ready to give. The kind of set that becomes a signature — elegant, wearable, and unmistakably thoughtful.',
    materialsCare:
      '18K gold-plated brass and surgical steel posts. Includes signature Velmora gift box and polishing cloth.',
    images: {
      gold: ['royal-heirloom-1', 'royal-heirloom-2'],
    },
    tags: ['bestseller', 'gift'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getBestsellers = () => products.filter((p) => p.tags.includes('bestseller'));

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);

export const categories = [
  { id: 'earrings', label: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', label: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', label: 'Huggies', imgId: 'cat-huggies' },
];
