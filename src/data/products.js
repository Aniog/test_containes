export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed to elevate any look from day to evening.',
    materials: '18K gold plated brass with cubic zirconia crystal. Nickel-free, hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'prod-vivid-aura-a1b2c3',
    imgId2: 'prod-vivid-aura-alt-d4e5f6',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate chain adorned with multicolor floral crystal clusters, inspired by a garden in bloom. The perfect layering piece or standalone statement.',
    materials: '18K gold plated sterling silver with hand-set crystals. Adjustable 16-18" chain.',
    variants: ['gold', 'silver'],
    imgId: 'prod-flora-nectar-g7h8i9',
    imgId2: 'prod-flora-nectar-alt-j0k1l2',
    titleId: 'prod-flora-nectar-title',
    descId: 'prod-flora-nectar-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky dome huggie earrings with a polished gold finish. Comfortable enough for all-day wear, bold enough to make a statement.',
    materials: '18K gold plated brass. Hinged closure for secure fit. Hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'prod-sphere-huggies-m3n4o5',
    imgId2: 'prod-sphere-huggies-alt-p6q7r8',
    titleId: 'prod-sphere-huggies-title',
    descId: 'prod-sphere-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and elegant, perfect for special occasions.',
    materials: '18K gold plated brass with intricate filigree detailing. Butterfly back closure.',
    variants: ['gold', 'silver'],
    imgId: 'prod-amber-lace-s9t0u1',
    imgId2: 'prod-amber-lace-alt-v2w3x4',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A curated gift set featuring matching earrings and necklace in a luxe presentation box. The perfect gift for someone special — or yourself.',
    materials: '18K gold plated sterling silver. Set includes drop earrings and pendant necklace. Gift box included.',
    variants: ['gold', 'silver'],
    imgId: 'prod-royal-heirloom-y5z6a7',
    imgId2: 'prod-royal-heirloom-alt-b8c9d0',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', titleId: 'cat-huggies-title' },
]

export const testimonials = [
  {
    id: 1,
    text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. The packaging alone feels so luxurious.',
    author: 'Rachel K.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. Beautiful designs and truly hypoallergenic. I\'m a customer for life.',
    author: 'Emma L.',
    rating: 5,
  },
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return products
  return products.filter(p => p.category === category)
}
