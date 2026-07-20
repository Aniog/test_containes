// Seed product catalog. Each product has two image variants for hover swap.
// Image queries feed the runtime stock image system via data-strk-img.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

export const MATERIALS = [
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal' },
];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: '18k-gold',
    price: 42,
    rating: 4.9,
    reviewCount: 187,
    shortDescription: 'A whisper of gold tracing the ear. A single crystal catches the light like a held breath.',
    longDescription:
      'The Vivid Aura Jewels ear cuff is sculpted to follow the natural curve of the ear, finished with a hand-set crystal that catches candlelight and afternoon sun alike. Wear it solo, or pair with our Golden Sphere Huggies for an effortless stack.',
    details: [
      '18K gold plated over a sterling silver core',
      'Hand-set cubic zirconia crystal accent',
      'Ear cuff design — no piercing required',
      'Hypoallergenic, nickel-free, lead-free',
    ],
    care: [
      'Avoid contact with perfume, lotion and water',
      'Store in the velvet pouch provided',
      'Wipe gently with the included polishing cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    defaultVariant: 'gold',
    images: {
      gold: {
        primary: {
          query: 'gold ear cuff with crystal, side profile, model ear, soft window light, warm cream background',
          ratio: '4x5',
          id: 'vivid-aura-primary',
        },
        secondary: {
          query: 'gold crystal ear cuff on linen fabric, flat lay, soft shadows, editorial still life',
          ratio: '4x5',
          id: 'vivid-aura-secondary',
        },
      },
      silver: {
        primary: {
          query: 'silver ear cuff with crystal, on ear, soft light, neutral background',
          ratio: '4x5',
          id: 'vivid-aura-silver-primary',
        },
        secondary: {
          query: 'silver ear cuff flat lay on stone, editorial product photography',
          ratio: '4x5',
          id: 'vivid-aura-silver-secondary',
        },
      },
    },
    isBestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'crystal',
    price: 68,
    rating: 4.8,
    reviewCount: 214,
    shortDescription: 'A garden of soft pastels, hand-set in 18K gold. The necklace you reach for on Sunday mornings.',
    longDescription:
      'A delicate chain of hand-set multicolor crystals, each stone chosen for its quiet luminosity. Inspired by the wild gardens of the Mediterranean, the Majestic Flora Nectar rests gently along the collarbone — light enough for daily wear, considered enough to layer with the Royal Heirloom Set.',
    details: [
      '18K gold plated chain, 16" with 2" extender',
      'Multi-color crystal pavé pendant, 18mm',
      'Lobster clasp closure',
      'Hypoallergenic, nickel-free',
    ],
    care: [
      'Remove before showering or sleeping',
      'Store flat to preserve chain shape',
      'Polish gently with a soft, dry cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold' },
    ],
    defaultVariant: 'gold',
    images: {
      gold: {
        primary: {
          query: 'multicolor crystal floral necklace on chest, model, soft window light, neutral background',
          ratio: '4x5',
          id: 'majestic-flora-primary',
        },
        secondary: {
          query: 'multicolor crystal pendant necklace flat lay on linen, editorial product photography, warm light',
          ratio: '4x5',
          id: 'majestic-flora-secondary',
        },
      },
    },
    isBestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    material: '18k-gold',
    price: 38,
    rating: 4.9,
    reviewCount: 342,
    shortDescription: 'A polished gold dome that hugs the lobe. The everyday hoop, refined.',
    longDescription:
      'A clean, chunky dome huggie with a high-polish finish. Sized to sit just below the lobe — substantial without weight. Sold as a pair. The piece you forget you\'re wearing until someone asks.',
    details: [
      '18K gold plated over brass',
      'Hinged click closure, 12mm diameter',
      'Sold as a pair',
      'Hypoallergenic, lead-free',
    ],
    care: [
      'Remove before showering and sleeping',
      'Store in the velvet pouch, away from direct sunlight',
      'Wipe with the included polishing cloth to maintain shine',
    ],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    defaultVariant: 'gold',
    images: {
      gold: {
        primary: {
          query: 'chunky gold dome huggie hoop earrings on ear, model, soft warm light, neutral background',
          ratio: '4x5',
          id: 'golden-sphere-primary',
        },
        secondary: {
          query: 'gold huggie hoop earrings flat lay on linen fabric, soft shadow, editorial product photography',
          ratio: '4x5',
          id: 'golden-sphere-secondary',
        },
      },
      silver: {
        primary: {
          query: 'silver chunky huggie hoop earrings on ear, model, soft light',
          ratio: '4x5',
          id: 'golden-sphere-silver-primary',
        },
        secondary: {
          query: 'silver huggie earrings on stone surface, editorial still life',
          ratio: '4x5',
          id: 'golden-sphere-silver-secondary',
        },
      },
    },
    isBestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: '18k-gold',
    price: 54,
    rating: 4.7,
    reviewCount: 128,
    shortDescription: 'Filigree, the way grandmother made it. Hand-finished drops, light as breath.',
    longDescription:
      'Inspired by the lace collars of antique christening gowns, the Amber Lace drop earrings are hand-finished in 18K gold plate. Each pair carries the gentle irregularity of a true craft piece — they\'re the opposite of mass-produced.',
    details: [
      '18K gold plated brass, filigree drop',
      'Leverback closure, 38mm drop',
      'Lightweight, suitable for all-day wear',
      'Hypoallergenic, nickel-free',
    ],
    care: [
      'Remove before showering and sleeping',
      'Store upright in the included pouch to protect filigree',
      'Wipe gently with a soft, dry cloth — avoid liquid cleaners',
    ],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold' },
    ],
    defaultVariant: 'gold',
    images: {
      gold: {
        primary: {
          query: 'gold filigree drop earrings, side profile, model ear, soft warm window light, neutral background',
          ratio: '4x5',
          id: 'amber-lace-primary',
        },
        secondary: {
          query: 'gold filigree drop earrings flat lay on linen, editorial product photography, warm shadow',
          ratio: '4x5',
          id: 'amber-lace-secondary',
        },
      },
    },
    isBestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    material: '18k-gold',
    price: 95,
    rating: 5.0,
    reviewCount: 96,
    shortDescription: 'A pendant and matching huggies, gift-boxed. The set you wish someone had given you.',
    longDescription:
      'A considered pairing of a delicate gold pendant and a pair of polished huggies, presented in our signature cream linen gift box. Designed as a gift, kept forever.',
    details: [
      '18K gold plated pendant and huggies',
      'Pendant on 16" chain with 2" extender',
      'Huggies, 10mm hinged click closure',
      'Presented in a cream linen gift box with ribbon',
    ],
    care: [
      'Remove before showering and sleeping',
      'Store pieces separately in the gift box compartments',
      'Polish gently with the included cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold' },
    ],
    defaultVariant: 'gold',
    images: {
      gold: {
        primary: {
          query: 'gold pendant necklace and huggie earrings gift set, cream linen box, soft warm light',
          ratio: '4x5',
          id: 'royal-heirloom-primary',
        },
        secondary: {
          query: 'gold jewelry gift set, necklace and earrings, editorial flat lay on linen, warm shadow',
          ratio: '4x5',
          id: 'royal-heirloom-secondary',
        },
      },
    },
    isBestseller: true,
  },
];

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelated(product, n = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, n);
}

export function getBestsellers(n = 5) {
  return PRODUCTS.filter((p) => p.isBestseller).slice(0, n);
}
