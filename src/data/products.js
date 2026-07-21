export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    materials: ['18K Gold Plated Brass', 'Cubic Zirconia'],
    description:
      'A sculptural gold ear cuff illuminated by a single crystal accent. Designed to catch candlelight — no piercing required.',
    shortDescription:
      'Gold ear cuff with crystal accent. Piercing-free, stackable, luminous.',
    variants: ['Gold', 'Silver'],
    images: ['hero', 'lifestyle'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    materials: ['18K Gold Plated Brass', 'Hand-set crystals'],
    description:
      'A garden of hand-set crystals in soft, unexpected colors on a delicate gold chain. The piece that turns a simple camisole into an occasion.',
    shortDescription:
      'Multicolor floral crystal necklace on a delicate gold chain.',
    variants: ['Gold'],
    images: ['hero', 'detail'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    materials: ['18K Gold Plated Brass', 'Surgical Steel Post'],
    description:
      'Chunky dome huggies with a mirror-polished finish. Substantial enough to wear alone, understated enough to stack.',
    shortDescription:
      'Chunky gold dome huggie earrings with a mirror polish.',
    variants: ['Gold', 'Silver'],
    images: ['hero', 'lifestyle'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    materials: ['18K Gold Plated Brass', 'Hypoallergenic Posts'],
    description:
      'Intricate filigree drops inspired by antique lace. Light as air, detailed like heirlooms — made for golden-hour dinners.',
    shortDescription:
      'Textured gold filigree drop earrings with heirloom-level detail.',
    variants: ['Gold'],
    images: ['hero', 'detail'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    materials: ['18K Gold Plated Brass', 'Gift Box & Pouch'],
    description:
      'A curated pairing of stud earrings and a pendant necklace, finished in a velvet-lined gift box. Our most gifted treasure.',
    shortDescription:
      'Gift-boxed earring + necklace set. Ready to give, impossible to forget.',
    variants: ['Gold'],
    images: ['hero', 'lifestyle'],
    bestseller: true,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(productId, count = 4) {
  const current = getProductById(productId)
  if (!current) return products.slice(0, count)
  return products
    .filter((p) => p.id !== productId && p.category === current.category)
    .concat(products.filter((p) => p.id !== productId && p.category !== current.category))
    .slice(0, count)
}

export function getBestsellers(count = 5) {
  return products.filter((p) => p.bestseller).slice(0, count)
}

export function makeImgAttrs({ imgId, contextIds = [], ratio = '4x3', width = 600 }) {
  return {
    'data-strk-img-id': imgId,
    'data-strk-img': contextIds.map((cid) => `[${cid}]`).join(' '),
    'data-strk-img-ratio': ratio,
    'data-strk-img-width': String(width),
  }
}

export function makeBgAttrs({ id, ratio = '16x9', width = 1600 }) {
  return {
    'data-strk-bg-id': id,
    'data-strk-bg': `[${id}-title]`,
    'data-strk-bg-ratio': ratio,
    'data-strk-bg-width': String(width),
  }
}
