export const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];

export const MATERIALS = ['18k gold plated', 'sterling silver', 'gold vermeil'];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k gold plated',
    rating: 4.8,
    reviewCount: 124,
    tags: ['bestseller', 'new'],
    description: 'A sculptural gold ear cuff finished with a single precision-cut crystal accent. Designed to sit comfortably along the ear without piercing, it catches light with every movement.',
    materialsCare: '18k gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. Avoid contact with perfume, lotion, and water to preserve the finish. Store in the provided pouch.',
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    images: [
      { id: 'vivid-aura-1', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-2', ratio: '1x1', width: 700 },
      { id: 'vivid-aura-3', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k gold plated',
    rating: 4.9,
    reviewCount: 89,
    tags: ['bestseller'],
    description: 'A delicate pendant necklace featuring hand-set multicolor floral crystals on a fine gold chain. The playful palette feels fresh while the refined setting keeps it elegant.',
    materialsCare: '18k gold-plated sterling silver chain with enamel and crystal pendant. Length: 40cm + 5cm extender. Clean gently with a soft, dry cloth.',
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: false },
    ],
    images: [
      { id: 'majestic-flora-1', ratio: '3x4', width: 800 },
      { id: 'majestic-flora-2', ratio: '1x1', width: 700 },
      { id: 'majestic-flora-3', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold vermeil',
    rating: 4.7,
    reviewCount: 156,
    tags: ['bestseller'],
    description: 'Chunky dome huggies with a polished, mirror-like finish. Substantial enough to wear alone, refined enough to stack. The everyday hoop, elevated.',
    materialsCare: 'Gold vermeil over sterling silver. Diameter: 12mm. Tarnish-resistant when stored dry. Remove before showering or swimming.',
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    images: [
      { id: 'golden-sphere-1', ratio: '3x4', width: 800 },
      { id: 'golden-sphere-2', ratio: '1x1', width: 700 },
      { id: 'golden-sphere-3', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k gold plated',
    rating: 4.6,
    reviewCount: 72,
    tags: ['bestseller'],
    description: 'Textured filigree drops inspired by antique lace. Lightweight and intricately detailed, they bring warmth and movement to both day and evening looks.',
    materialsCare: '18k gold-plated brass with a textured cast finish. Drop length: 35mm. Hypoallergenic posts. Store flat to maintain shape.',
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
    ],
    images: [
      { id: 'amber-lace-1', ratio: '3x4', width: 800 },
      { id: 'amber-lace-2', ratio: '1x1', width: 700 },
      { id: 'amber-lace-3', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k gold plated',
    rating: 5.0,
    reviewCount: 43,
    tags: ['bestseller', 'gift'],
    description: 'A curated gift set pairing our signature huggies with a matching pendant necklace, presented in a Velmora keepsake box. Designed for gifting — or treasuring.',
    materialsCare: '18k gold-plated brass. Includes a pair of huggies and an adjustable pendant necklace. Packaged in a recycled jewelry box with a ribbon.',
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    images: [
      { id: 'royal-heirloom-1', ratio: '3x4', width: 800 },
      { id: 'royal-heirloom-2', ratio: '1x1', width: 700 },
      { id: 'royal-heirloom-3', ratio: '3x4', width: 800 },
    ],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(currentId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function getCategoryLabel(category) {
  const labels = {
    earrings: 'Earrings',
    necklaces: 'Necklaces',
    huggies: 'Huggies',
    sets: 'Gift Sets',
  };
  return labels[category] || category;
}
