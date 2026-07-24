export const CATEGORIES = {
  EARRINGS: 'Earrings',
  NECKLACES: 'Necklaces',
  HUGGIES: 'Huggies',
  SETS: 'Sets',
};

export const MATERIALS = {
  GOLD_PLATED: '18K Gold Plated',
  STERLING_SILVER: 'Sterling Silver',
  CRYSTAL: 'Crystal Accent',
};

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: CATEGORIES.EARRINGS,
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    material: MATERIALS.GOLD_PLATED,
    description:
      'A sculptural gold ear cuff with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and daylight alike.',
    shortDescription:
      'Sculptural gold ear cuff with a luminous crystal accent. No piercing required.',
    images: [
      { imgId: 'velmora-vivid-aura-hero', ratio: '3x4', width: 800, alt: 'Vivid Aura Jewels gold ear cuff with crystal accent' },
      { imgId: 'velmora-vivid-aura-detail', ratio: '1x1', width: 600, alt: 'Close up of Vivid Aura ear cuff' },
      { imgId: 'velmora-vivid-aura-worn', ratio: '3x4', width: 800, alt: 'Model wearing Vivid Aura ear cuff' },
    ],
    variants: ['Gold', 'Silver'],
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: CATEGORIES.NECKLACES,
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    material: MATERIALS.GOLD_PLATED,
    description:
      'A delicate necklace featuring hand-set multicolor floral crystals on a fine gold-plated chain. Layer it or let it shine alone — the palette complements every skin tone.',
    shortDescription:
      'Multicolor floral crystal necklace on a fine gold-plated chain.',
    images: [
      { imgId: 'velmora-flora-necklace', ratio: '3x4', width: 800, alt: 'Majestic Flora Nectar multicolor crystal necklace' },
      { imgId: 'velmora-flora-detail', ratio: '1x1', width: 600, alt: 'Detail of floral crystal necklace' },
      { imgId: 'velmora-flora-worn', ratio: '3x4', width: 800, alt: 'Model wearing Flora Nectar necklace' },
    ],
    variants: ['Gold'],
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: CATEGORIES.HUGGIES,
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    material: MATERIALS.GOLD_PLATED,
    description:
      'Chunky yet featherlight dome huggies that hug the lobe with a polished, mirror-like finish. Your new everyday signature.',
    shortDescription:
      'Chunky gold dome huggie earrings with a mirror-like finish.',
    images: [
      { imgId: 'velmora-sphere-huggies', ratio: '1x1', width: 700, alt: 'Golden Sphere Huggies chunky gold dome earrings' },
      { imgId: 'velmora-sphere-detail', ratio: '1x1', width: 600, alt: 'Close up of sphere huggies' },
      { imgId: 'velmora-sphere-worn', ratio: '3x4', width: 800, alt: 'Model wearing Golden Sphere Huggies' },
    ],
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: CATEGORIES.EARRINGS,
    price: 54,
    rating: 4.9,
    reviewCount: 72,
    material: MATERIALS.GOLD_PLATED,
    description:
      'Textured filigree drops inspired by vintage lacework, finished in warm gold. Substantial enough for evening, light enough for all day.',
    shortDescription:
      'Textured gold filigree drop earrings with vintage lace inspiration.',
    images: [
      { imgId: 'velmora-amber-lace', ratio: '3x4', width: 800, alt: 'Amber Lace Earrings textured gold filigree drops' },
      { imgId: 'velmora-amber-detail', ratio: '1x1', width: 600, alt: 'Detail of Amber Lace filigree' },
      { imgId: 'velmora-amber-worn', ratio: '3x4', width: 800, alt: 'Model wearing Amber Lace Earrings' },
    ],
    variants: ['Gold'],
    tags: ['bestseller'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: CATEGORIES.SETS,
    price: 95,
    rating: 5.0,
    reviewCount: 48,
    material: MATERIALS.GOLD_PLATED,
    description:
      'A curated gift set featuring a pair of petite huggies and a matching pendant necklace, presented in a Velmora gift box. Ready to give, impossible to forget.',
    shortDescription:
      'Gift-boxed earring and necklace set in a Velmora gift box.',
    images: [
      { imgId: 'velmora-heirloom-set', ratio: '3x4', width: 800, alt: 'Royal Heirloom Set gold huggies and necklace gift box' },
      { imgId: 'velmora-heirloom-detail', ratio: '1x1', width: 600, alt: 'Open gift box with heirloom jewelry' },
      { imgId: 'velmora-heirloom-worn', ratio: '3x4', width: 800, alt: 'Model wearing Royal Heirloom Set' },
    ],
    variants: ['Gold', 'Silver'],
    tags: ['bestseller', 'gift'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getBestsellers = () => products.filter((p) => p.tags.includes('bestseller'));

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);
