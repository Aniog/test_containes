export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
]

export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    tags: ['ear cuff', 'crystal', 'gold'],
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff illuminated by a single luminous crystal. Designed to catch candlelight and compliments alike—no piercing required.',
    materials:
      '18k gold-plated brass with a cushion-cut cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid perfumes, lotions, and water to preserve the gold finish. Gently polish with a soft cloth.',
    variants: ['Gold', 'Silver'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    tags: ['necklace', 'floral', 'multicolor', 'crystal'],
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate garden of hand-set crystals in soft blush, amber, and champagne. Suspended on a fine gold chain for a feminine, heirloom feel.',
    materials:
      '18k gold-plated sterling silver chain with hand-set cubic zirconia petals. Adjustable 16–18 inch length.',
    care: 'Lay flat when storing. Remove before swimming or showering. Clean with a lint-free cloth only.',
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    tags: ['huggies', 'gold', 'minimal'],
    rating: 4.7,
    reviewCount: 211,
    description:
      'Chunky yet lightweight dome huggies that hug the lobe with a polished glow. The everyday earring that still feels special.',
    materials:
      '18k gold-plated brass with stainless steel posts. Lightweight hollow construction.',
    care: 'Avoid moisture and harsh chemicals. Wipe clean after each wear to maintain shine.',
    variants: ['Gold', 'Silver'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    tags: ['drop earrings', 'filigree', 'gold'],
    rating: 4.9,
    reviewCount: 76,
    description:
      'Textured gold filigree drops inspired by antique lace. Romantic movement meets modern minimalism for effortless day-to-night wear.',
    materials:
      '18k gold-plated brass with a hammered lace texture. Surgical steel posts.',
    care: 'Store hanging or flat. Clean gently with a dry cloth; do not use jewelry dips.',
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    tags: ['gift set', 'earrings', 'necklace', 'gold'],
    rating: 5.0,
    reviewCount: 53,
    description:
      'A curated earring and necklace pairing, finished and nestled in a Velmora gift box. The perfect present—for someone you love, including yourself.',
    materials:
      '18k gold-plated brass and surgical steel posts. Includes a 16-inch cable chain necklace and matching studs.',
    care: 'Keep pieces separated in the provided pouch. Avoid contact with water, perfume, and creams.',
    variants: ['Gold', 'Silver'],
    inStock: true,
    isBestseller: true,
  },
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
export const getBestsellers = () => products.filter((p) => p.isBestseller)
export const getRelatedProducts = (slug, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit)
