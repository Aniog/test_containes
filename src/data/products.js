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
    isBestseller: true,
    imgId: 'vivid-aura-main-a1b2c3',
    imgId2: 'vivid-aura-hover-d4e5f6',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate chain adorned with multicolor floral crystals, inspired by a garden in full bloom. The perfect layering piece or standalone statement.',
    materials: '18K gold plated sterling silver with hand-set crystal stones. Adjustable 16–18" chain.',
    variants: ['gold', 'silver'],
    isBestseller: true,
    imgId: 'majestic-flora-main-g7h8i9',
    imgId2: 'majestic-flora-hover-j0k1l2',
    titleId: 'product-majestic-flora-title',
    descId: 'product-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Lightweight yet bold — the everyday essential you will reach for daily.',
    materials: '18K gold plated brass. Hinged closure for secure, comfortable wear. Hypoallergenic.',
    variants: ['gold', 'silver'],
    isBestseller: true,
    imgId: 'golden-sphere-main-m3n4o5',
    imgId2: 'golden-sphere-hover-p6q7r8',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Delicate yet eye-catching, with a warm amber-gold finish.',
    materials: '18K gold plated brass with intricate filigree detailing. Post-back closure. Hypoallergenic.',
    variants: ['gold', 'silver'],
    isBestseller: true,
    imgId: 'amber-lace-main-s9t0u1',
    imgId2: 'amber-lace-hover-v2w3x4',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A curated gift set featuring our signature earring and necklace pairing, presented in a luxe velvet box. The perfect gift for someone special — or yourself.',
    materials: '18K gold plated sterling silver. Set includes one pair of drop earrings and one pendant necklace.',
    variants: ['gold', 'silver'],
    isBestseller: true,
    imgId: 'royal-heirloom-main-y5z6a7',
    imgId2: 'royal-heirloom-hover-b8c9d0',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Statement pieces for every occasion' },
  { id: 'necklaces', name: 'Necklaces', description: 'Layering essentials and pendants' },
  { id: 'huggies', name: 'Huggies', description: 'Everyday sculptural hoops' },
];

export const testimonials = [
  {
    id: 1,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they still look brand new after months.',
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
    text: 'Finally found jewelry that does not irritate my sensitive skin. The hypoallergenic gold plating is a game-changer. Obsessed with my Amber Lace Earrings.',
    author: 'Emma T.',
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
