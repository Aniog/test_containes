export const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'A sculptural gold ear cuff with a single luminous crystal accent. Designed to catch candlelight and conversation alike—no piercing required.',
    care: '18K gold-plated brass with a hypoallergenic finish. Avoid contact with perfume, lotion, and water. Store in the provided pouch to maintain shine.',
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'A delicate strand of hand-set floral crystals in soft sunset tones. The pendant floats at the collarbone for an effortless, romantic moment.',
    care: 'Gold-plated brass with glass crystals. Gently wipe with a soft cloth after wear. Keep dry and away from harsh chemicals.',
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    material: '18K Gold Plated',
    tone: ['gold', 'silver'],
    description:
      'Chunky dome huggies that feel modern and timeless all at once. A polished, rounded silhouette designed for everyday luxury.',
    care: 'Gold or rhodium-plated brass with surgical steel posts. Suitable for sensitive ears. Store flat to preserve shape.',
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'Intricate filigree drops inspired by vintage lace and golden hour light. Lightweight enough for all-day wear, striking enough for evening.',
    care: 'Gold-plated brass with a nickel-free, hypoallergenic coating. Handle with care to protect the detailed texture.',
    tags: [],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviewCount: 53,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'A coordinated earring and necklace set, elegantly gift-boxed and ready to become her new favorite. The perfect self-gift or celebration present.',
    care: 'Gold-plated brass set with cubic zirconia accents. Includes a Velmora keepsake pouch and polishing cloth.',
    tags: ['bestseller', 'gift'],
  },
  {
    id: 'solstice-hoop-earrings',
    name: 'Solstice Hoop Earrings',
    category: 'Earrings',
    price: 48,
    rating: 4.6,
    reviewCount: 98,
    material: '18K Gold Plated',
    tone: ['gold', 'silver'],
    description:
      'Slim, weightless hoops with a subtle squared edge. A modern classic that pairs with everything in your wardrobe.',
    care: 'Gold or rhodium-plated brass. Closure is secure and comfortable for daily wear.',
    tags: [],
  },
  {
    id: 'luna-pearl-pendant',
    name: 'Luna Pearl Pendant',
    category: 'Necklaces',
    price: 58,
    rating: 4.8,
    reviewCount: 64,
    material: 'Freshwater Pearl',
    tone: ['gold'],
    description:
      'A single luminous freshwater pearl suspended from a fine gold chain. Minimal, graceful, and endlessly wearable.',
    care: 'Freshwater pearl and gold-plated brass. Pearls are delicate; avoid water, perfume, and direct sunlight.',
    tags: ['new'],
  },
  {
    id: 'twilight-huggie-set',
    name: 'Twilight Huggie Set',
    category: 'Huggies',
    price: 44,
    rating: 4.7,
    reviewCount: 112,
    material: '18K Gold Plated',
    tone: ['gold', 'silver'],
    description:
      'A set of three miniature huggies in graduated sizes. Stack them across multiple piercings or wear solo for a whisper of shine.',
    care: 'Gold or rhodium-plated brass with surgical steel posts. Lightweight and hypoallergenic.',
    tags: [],
  },
  {
    id: 'aurora-chain-necklace',
    name: 'Aurora Chain Necklace',
    category: 'Necklaces',
    price: 52,
    rating: 4.5,
    reviewCount: 47,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'A liquid-like chain that catches the light with every movement. Layer it or let it shine on its own.',
    care: 'Gold-plated brass. Store hanging or flat to prevent tangling.',
    tags: [],
  },
  {
    id: 'velvet-rose-earrings',
    name: 'Velvet Rose Earrings',
    category: 'Earrings',
    price: 46,
    rating: 4.8,
    reviewCount: 81,
    material: '18K Gold Plated',
    tone: ['gold'],
    description:
      'Sculpted rose petals in brushed gold, finished with a soft polished edge. Romantic without being overly sweet.',
    care: 'Gold-plated brass with hypoallergenic posts. Wipe gently after each wear.',
    tags: ['gift'],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.tags.includes('bestseller')).slice(0, limit);
}

export function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  if (!current) return PRODUCTS.slice(0, limit);
  const same = PRODUCTS.filter((p) => p.id !== currentId && p.category === current.category);
  const others = PRODUCTS.filter((p) => p.id !== currentId && p.category !== current.category);
  return [...same, ...others].slice(0, limit);
}
