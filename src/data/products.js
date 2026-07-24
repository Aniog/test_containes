export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed to be worn alone or stacked for a bolder look.',
    materials: '18K gold plated brass with cubic zirconia crystal. Hypoallergenic, nickel-free.',
    variants: ['gold', 'silver'],
    imgId: 'vivid-aura-jewels-main-a1b2c3',
    imgId2: 'vivid-aura-jewels-alt-d4e5f6',
    titleId: 'product-vivid-aura-jewels-title',
    descId: 'product-vivid-aura-jewels-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate chain adorned with multicolor floral crystal clusters, evoking a garden in bloom. The perfect layering piece or standalone statement.',
    materials: '18K gold plated sterling silver with hand-set crystals. Adjustable 16-18" chain.',
    variants: ['gold', 'silver'],
    imgId: 'majestic-flora-nectar-main-g7h8i9',
    imgId2: 'majestic-flora-nectar-alt-j0k1l2',
    titleId: 'product-majestic-flora-nectar-title',
    descId: 'product-majestic-flora-nectar-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky dome huggie earrings with a polished gold finish. Their sculptural silhouette adds instant sophistication to any look.',
    materials: '18K gold plated brass. Hinged closure for secure, comfortable wear. Hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'golden-sphere-huggies-main-m3n4o5',
    imgId2: 'golden-sphere-huggies-alt-p6q7r8',
    titleId: 'product-golden-sphere-huggies-title',
    descId: 'product-golden-sphere-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and elegant, perfect for day-to-night wear.',
    materials: '18K gold plated brass with intricate filigree detailing. Post-back closure.',
    variants: ['gold', 'silver'],
    imgId: 'amber-lace-earrings-main-s9t0u1',
    imgId2: 'amber-lace-earrings-alt-v2w3x4',
    titleId: 'product-amber-lace-earrings-title',
    descId: 'product-amber-lace-earrings-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A curated gift set featuring matching earrings and necklace in a luxe presentation box. The ultimate gift for someone special — or yourself.',
    materials: '18K gold plated sterling silver. Set includes drop earrings and 18" pendant necklace.',
    variants: ['gold', 'silver'],
    imgId: 'royal-heirloom-set-main-y5z6a7',
    imgId2: 'royal-heirloom-set-alt-b8c9d0',
    titleId: 'product-royal-heirloom-set-title',
    descId: 'product-royal-heirloom-set-desc',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', titleId: 'cat-huggies-title' },
];

export const testimonials = [
  {
    id: 1,
    text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.',
    author: 'Rachel K.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The hypoallergenic gold plating is perfect. Obsessed with my huggies!',
    author: 'Emma L.',
    rating: 5,
  },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category === category);
}
