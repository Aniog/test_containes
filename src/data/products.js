// Seed product catalog for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    subCategory: 'ear-cuffs',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 128,
    shortDescription: 'A sculptural ear cuff in 18K gold plate, set with a single luminous crystal that catches every flicker of light.',
    description:
      "Designed to be worn alone or layered, the Vivid Aura ear cuff curves gently around the ear without the need for a piercing. The crystal is hand-set into a brushed gold cradle, finished with our signature warm-tone polish.",
    variants: ['Gold', 'Silver'],
    bestseller: true,
    queryHint: 'gold ear cuff jewelry crystal warm lighting editorial',
  },
  {
    id: 'majestic-flora',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    subCategory: 'statement',
    material: '18K Gold Plated · Crystal',
    rating: 4.8,
    reviewCount: 94,
    shortDescription: 'A delicate necklace blooming with multicolor floral crystals — soft, romantic, unmistakably Velmora.',
    description:
      'Each petal is hand-finished and arranged like a pressed bouquet. The chain falls just below the collarbone, and the lobster clasp is engraved with our subtle V monogram.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    queryHint: 'gold floral crystal necklace pendant warm lighting',
  },
  {
    id: 'golden-sphere',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    subCategory: 'huggies',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 211,
    shortDescription: 'Chunky dome huggies that hug the lobe with a confident, weighty feel — your everyday gold edit.',
    description:
      "Smooth, high-polish gold sculpted into a generous dome. Lightweight despite the look, with a secure hinged closure built for daily wear.",
    variants: ['Gold', 'Silver'],
    bestseller: true,
    queryHint: 'gold dome huggie hoop earrings minimal jewelry',
  },
  {
    id: 'amber-lace',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    subCategory: 'drops',
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 76,
    shortDescription: 'Filigree drop earrings woven like fine lace — a quiet heirloom for modern wear.',
    description:
      "A modern reading of vintage filigree. The open metalwork stays light against the ear while catching the room's warmth. Posts in surgical-grade steel for sensitive ears.",
    variants: ['Gold', 'Silver'],
    bestseller: true,
    queryHint: 'gold filigree drop earrings textured antique style',
  },
  {
    id: 'royal-heirloom',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    subCategory: 'gift-sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 52,
    shortDescription: 'Our gift-boxed earring and necklace pairing — arrives wrapped in our signature ivory keepsake box.',
    description:
      "Two of our most-loved pieces, paired and presented in a linen-lined keepsake box with a hand-tied silk ribbon. The kind of gift that feels considered before it's opened.",
    variants: ['Gold', 'Silver'],
    bestseller: true,
    queryHint: 'gold jewelry gift set box necklace earrings luxury',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Drops, studs and statement silhouettes.',
    queryHint: 'gold earrings on model warm editorial lighting',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layering chains and quiet pendants.',
    queryHint: 'gold necklace on model neckline editorial portrait',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday weight, undeniable polish.',
    queryHint: 'gold huggie hoop earrings on ear close up warm light',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Eleanor M.',
    rating: 5,
    text: "I bought the Amber Lace earrings for my sister and immediately ordered a pair for myself. The packaging alone made it feel like a real gift.",
  },
  {
    id: 2,
    name: 'Sasha R.',
    rating: 5,
    text: "I've worn the Golden Sphere huggies every single day for four months — through showers, the gym, everything. They still look brand new.",
  },
  {
    id: 3,
    name: 'Naomi T.',
    rating: 5,
    text: "The weight, the warmth of the gold, the little details — Velmora feels far more expensive than it is. My new go-to.",
  },
];

export const ugcReels = [
  { id: 'reel-1', caption: 'Layered for dinner', queryHint: 'woman wearing gold layered necklaces close up editorial' },
  { id: 'reel-2', caption: 'Morning light', queryHint: 'gold huggie earring close up on ear morning light' },
  { id: 'reel-3', caption: 'For her', queryHint: 'hand holding gold jewelry box gift wrapping' },
  { id: 'reel-4', caption: 'Quiet weekends', queryHint: 'woman in linen wearing gold necklace soft natural light' },
  { id: 'reel-5', caption: 'Heirloom moments', queryHint: 'gold filigree earrings close up portrait warm tone' },
  { id: 'reel-6', caption: 'Everyday gold', queryHint: 'minimal gold jewelry stack on model neutral background' },
];
