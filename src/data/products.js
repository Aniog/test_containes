export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed to elevate any look from day to evening.',
    materials: '18K gold plated brass with cubic zirconia crystal. Hypoallergenic, nickel-free.',
    variants: ['gold', 'silver'],
    imgId: 'vivid-aura-jewels-main-a1b2c3',
    imgId2: 'vivid-aura-jewels-hover-d4e5f6',
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
    description: 'A delicate chain adorned with multicolor floral crystal clusters, inspired by a garden in bloom. The perfect layering piece or standalone statement.',
    materials: '18K gold plated sterling silver with hand-set crystals. Adjustable 16-18" chain.',
    variants: ['gold', 'silver'],
    imgId: 'majestic-flora-nectar-main-g7h8i9',
    imgId2: 'majestic-flora-nectar-hover-j0k1l2',
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
    description: 'Chunky dome huggie earrings with a polished gold finish. Their sculptural silhouette adds instant sophistication to any ensemble.',
    materials: '18K gold plated brass. Hinged closure for secure, comfortable wear. Hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'golden-sphere-huggies-main-m3n4o5',
    imgId2: 'golden-sphere-huggies-hover-p6q7r8',
    titleId: 'product-golden-sphere-huggies-title',
    descId: 'product-golden-sphere-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet impactful, perfect for special occasions.',
    materials: '18K gold plated brass with intricate filigree detailing. Post-back closure.',
    variants: ['gold', 'silver'],
    imgId: 'amber-lace-earrings-main-s9t0u1',
    imgId2: 'amber-lace-earrings-hover-v2w3x4',
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
    description: 'A curated gift set featuring a matching earring and necklace duo, presented in a luxe velvet box. The ultimate gift for someone special.',
    materials: '18K gold plated sterling silver. Set includes drop earrings and pendant necklace.',
    variants: ['gold', 'silver'],
    imgId: 'royal-heirloom-set-main-y5z6a7',
    imgId2: 'royal-heirloom-set-hover-b8c9d0',
    titleId: 'product-royal-heirloom-set-title',
    descId: 'product-royal-heirloom-set-desc',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'category-earrings-e1f2g3' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'category-necklaces-h4i5j6' },
  { id: 'huggies', name: 'Huggies', imgId: 'category-huggies-k7l8m9' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Amber Lace earrings every single day — they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is worth it. Absolutely stunning pieces.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The hypoallergenic gold plating is perfect. I\'m obsessed with my huggies.',
    rating: 5,
  },
]

export const ugcItems = [
  { id: 'ugc-1', caption: 'Date night ready', imgId: 'ugc-datenight-n0p1q2' },
  { id: 'ugc-2', caption: 'Everyday elegance', imgId: 'ugc-everyday-r3s4t5' },
  { id: 'ugc-3', caption: 'Layered & loved', imgId: 'ugc-layered-u6v7w8' },
  { id: 'ugc-4', caption: 'Gift of gold', imgId: 'ugc-gift-x9y0z1' },
  { id: 'ugc-5', caption: 'Morning glow', imgId: 'ugc-morning-a2b3c4' },
  { id: 'ugc-6', caption: 'Sunset sparkle', imgId: 'ugc-sunset-d5e6f7' },
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return products
  return products.filter(p => p.category === category)
}
