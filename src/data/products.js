export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
];

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    titleId: 'product-vivid-aura-jewels-title',
    descId: 'product-vivid-aura-jewels-desc',
    price: 42,
    category: 'earrings',
    tags: ['bestseller', 'ear cuff'],
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff illuminated by a single hand-set crystal. Designed to catch candlelight and compliments, no piercing required.',
    materials: ['Brass base with 18K gold plating', 'Hand-set cubic zirconia', 'Hypoallergenic, nickel-free', 'Avoid water, perfume, and lotions to preserve finish'],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    images: ['main', 'alt'],
    featured: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    titleId: 'product-majestic-flora-nectar-title',
    descId: 'product-majestic-flora-nectar-desc',
    price: 68,
    category: 'necklaces',
    tags: ['bestseller', 'statement'],
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate garden of multicolor crystals arranged along a fine gold chain. Feminine, festive, and unexpectedly wearable for everyday.',
    materials: ['Brass base with 18K gold plating', 'Multicolor cubic zirconia', 'Adjustable 16–18 inch chain', 'Store flat to prevent tangling'],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: false },
    ],
    images: ['main', 'alt'],
    featured: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    titleId: 'product-golden-sphere-huggies-title',
    descId: 'product-golden-sphere-huggies-desc',
    price: 38,
    category: 'huggies',
    tags: ['bestseller', 'everyday'],
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 156,
    description:
      'Chunky yet featherlight dome huggies that hug the earlobe with a polished, liquid-gold glow. Your new everyday signature.',
    materials: ['Brass base with 18K gold plating', 'Hinge closure', 'Hypoallergenic posts', 'Wipe gently with a soft cloth after wear'],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    images: ['main', 'alt'],
    featured: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    titleId: 'product-amber-lace-earrings-title',
    descId: 'product-amber-lace-earrings-desc',
    price: 54,
    category: 'earrings',
    tags: ['bestseller', 'drop'],
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 72,
    description:
      'Textured filigree drops inspired by vintage lace, finished in warm gold. Equal parts romantic and refined.',
    materials: ['Brass base with 18K gold plating', 'Surgical steel posts', 'Lightweight hollow construction', 'Keep dry and store in pouch'],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: false },
    ],
    images: ['main', 'alt'],
    featured: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    titleId: 'product-royal-heirloom-set-title',
    descId: 'product-royal-heirloom-set-desc',
    price: 95,
    category: 'earrings',
    tags: ['bestseller', 'gift set'],
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 47,
    description:
      'A curated gift set featuring complementary earrings and necklace, presented in a Velmora gift box. The ultimate ready-to-give treasure.',
    materials: ['Brass base with 18K gold plating', 'Matching necklace and earrings', 'Velmora signature gift box', 'Gift note available at checkout'],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: false },
    ],
    images: ['main', 'alt'],
    featured: true,
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentSlug, limit = 4) =>
  products.filter((p) => p.slug !== currentSlug).slice(0, limit);

export const getFeaturedProducts = () => products.filter((p) => p.featured);
