// Seed product catalog for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'earring',
    shortDesc: 'Gold ear cuff with a single crystal accent — effortless, no piercing required.',
    description:
      'The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it slips on without a piercing for an instant touch of quiet brilliance.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal. Wipe clean with the included microfibre cloth and store in the Velmora pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns — no questions asked. Lifetime plating warranty.',
    rating: 4.8,
    reviews: 126,
    tones: ['Gold', 'Silver'],
    imgId: 'prod-vivid-aura-a1b2',
    imgId2: 'prod-vivid-aura-b2-c3d4',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'necklace',
    shortDesc: 'Multicolor floral crystal necklace — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar gathers delicate crystal blooms into a luminous floral cluster, suspended from a fine gold chain. Each stone is chosen for its warm, editorial glow, making it the kind of piece that elevates a simple neckline into something memorable.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia. Adjustable 40–45cm chain with extender. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns. Lifetime plating warranty.',
    rating: 4.9,
    reviews: 89,
    tones: ['Gold', 'Silver'],
    imgId: 'prod-majestic-flora-e5f6',
    imgId2: 'prod-majestic-flora-f6-g7h8',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    shortDesc: 'Chunky gold dome huggie earrings — everyday polish with quiet presence.',
    description:
      'The Golden Sphere huggies are our most-loved everyday pair: a smooth, chunky gold dome that hugs the lobe with a secure click closure. Substantial enough to be noticed, refined enough to never feel loud.',
    materials:
      '18K gold plating over brass. Smooth polished dome. Click-and-lock huggie closure. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns. Lifetime plating warranty.',
    rating: 4.7,
    reviews: 214,
    tones: ['Gold', 'Silver'],
    imgId: 'prod-golden-sphere-i9j0',
    imgId2: 'prod-golden-sphere-j0-k1l2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'earring',
    shortDesc: 'Textured gold filigree drop earrings — heirloom craft, modern line.',
    description:
      'Amber Lace reimagines traditional filigree as a modern drop earring. The openwork gold texture moves gently with the wearer, casting warm shadows that feel both antique and entirely now.',
    materials:
      '18K gold plating over brass. Hand-finished filigree texture. Lightweight drop, lever-back closure. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns. Lifetime plating warranty.',
    rating: 4.8,
    reviews: 67,
    tones: ['Gold', 'Silver'],
    imgId: 'prod-amber-lace-m3n4',
    imgId2: 'prod-amber-lace-n4-o5p6',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    type: 'set',
    shortDesc: 'Gift-boxed earring + necklace set — the complete gifting moment.',
    description:
      'The Royal Heirloom Set pairs a coordinating necklace and earring duo inside our signature keepsake box. Designed for gifting — to someone cherished, or to yourself — it is the most complete expression of the Velmora edit.',
    materials:
      '18K gold plating over brass. Coordinating necklace and earrings. Presented in a signature Velmora gift box with microfibre pouch. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns. Complimentary gift wrapping included.',
    rating: 5.0,
    reviews: 41,
    tones: ['Gold', 'Silver'],
    imgId: 'prod-royal-heirloom-q7r8',
    imgId2: 'prod-royal-heirloom-r8-s9t0',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)

export const categories = [
  { name: 'Earrings', slug: 'earrings', label: 'Earrings' },
  { name: 'Necklaces', slug: 'necklaces', label: 'Necklaces' },
  { name: 'Huggies', slug: 'huggies', label: 'Huggies' },
]
