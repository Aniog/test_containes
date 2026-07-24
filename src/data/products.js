// Seed product data for Velmora Fine Jewelry.
// Each product carries stable image IDs and text-reference IDs so the
// strk-img system can resolve descriptive queries at build time.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the curve of the ear with quiet brilliance — no piercing required.',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    variants: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-alt-b2',
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
    gallery: [
      { imgId: 'p-vivid-aura-g1', ratio: '4x5', width: 900 },
      { imgId: 'p-vivid-aura-g2', ratio: '4x5', width: 900 },
      { imgId: 'p-vivid-aura-g3', ratio: '4x5', width: 900 },
      { imgId: 'p-vivid-aura-g4', ratio: '4x5', width: 900 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    description:
      'A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A garden of light against the collarbone.',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 88,
    badge: 'New',
    variants: ['Gold', 'Silver'],
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-alt-b2',
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
    gallery: [
      { imgId: 'p-majestic-flora-g1', ratio: '4x5', width: 900 },
      { imgId: 'p-majestic-flora-g2', ratio: '4x5', width: 900 },
      { imgId: 'p-majestic-flora-g3', ratio: '4x5', width: 900 },
      { imgId: 'p-majestic-flora-g4', ratio: '4x5', width: 900 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    description:
      'Polished gold dome huggies that hug the lobe with a soft, sculptural curve. Everyday gold with a quietly bold presence.',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    variants: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-alt-b2',
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
    gallery: [
      { imgId: 'p-golden-sphere-g1', ratio: '4x5', width: 900 },
      { imgId: 'p-golden-sphere-g2', ratio: '4x5', width: 900 },
      { imgId: 'p-golden-sphere-g3', ratio: '4x5', width: 900 },
      { imgId: 'p-golden-sphere-g4', ratio: '4x5', width: 900 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    description:
      'Hand-finished gold filigree drops with a lace-like openwork texture. Light-catching, featherweight, endlessly elegant.',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 64,
    badge: null,
    variants: ['Gold', 'Silver'],
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-alt-b2',
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
    gallery: [
      { imgId: 'p-amber-lace-g1', ratio: '4x5', width: 900 },
      { imgId: 'p-amber-lace-g2', ratio: '4x5', width: 900 },
      { imgId: 'p-amber-lace-g3', ratio: '4x5', width: 900 },
      { imgId: 'p-amber-lace-g4', ratio: '4x5', width: 900 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    description:
      'A coordinated set of filigree earrings and a matching pendant necklace, presented in a signature Velmora gift box. Heirloom energy, made for gifting.',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 41,
    badge: 'Gift Set',
    variants: ['Gold', 'Silver'],
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-alt-b2',
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
    gallery: [
      { imgId: 'p-royal-heirloom-g1', ratio: '4x5', width: 900 },
      { imgId: 'p-royal-heirloom-g2', ratio: '4x5', width: 900 },
      { imgId: 'p-royal-heirloom-g3', ratio: '4x5', width: 900 },
      { imgId: 'p-royal-heirloom-g4', ratio: '4x5', width: 900 },
    ],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Sculptural drops, cuffs & statement studs',
    imgId: 'cat-earrings-c1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Fine chains & crystal-lit pendants',
    imgId: 'cat-necklaces-c1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    blurb: 'Polished gold domes for everyday wear',
    imgId: 'cat-huggies-c1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold sphere huggies have not left my ears since they arrived. They feel far more expensive than they were.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'I gifted the Royal Heirloom set to my sister and she genuinely gasped. The packaging alone is worth it.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet, warm, elegant. My Flora Nectar necklace gets compliments every single time I wear it.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Golden Sphere Huggies, worn daily',
    imgId: 'reel-r1-d1',
    titleId: 'reel-r1-title',
  },
  {
    id: 'r2',
    caption: 'Flora Nectar layered at the collarbone',
    imgId: 'reel-r2-d2',
    titleId: 'reel-r2-title',
  },
  {
    id: 'r3',
    caption: 'Vivid Aura cuff climbing the ear',
    imgId: 'reel-r3-d3',
    titleId: 'reel-r3-title',
  },
  {
    id: 'r4',
    caption: 'Amber Lace drops catching the light',
    imgId: 'reel-r4-d4',
    titleId: 'reel-r4-title',
  },
  {
    id: 'r5',
    caption: 'Royal Heirloom set, unboxed',
    imgId: 'reel-r5-d5',
    titleId: 'reel-r5-title',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
