export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed for the modern woman who appreciates understated elegance.',
    materials: '18K gold plated brass, cubic zirconia crystal accent. Nickel-free, hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'vivid-aura-img-a1b2c3',
    imgId2: 'vivid-aura-img2-d4e5f6',
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
    description: 'A delicate chain adorned with multicolor floral crystal pendants, inspired by a garden in bloom. Layer it or let it shine solo.',
    materials: '18K gold plated sterling silver, multicolor cubic zirconia. Adjustable 16-18" chain.',
    variants: ['gold', 'silver'],
    imgId: 'majestic-flora-img-g7h8i9',
    imgId2: 'majestic-flora-img2-j0k1l2',
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
    description: 'Chunky gold dome huggie earrings that hug the lobe with sculptural elegance. A modern classic for everyday luxury.',
    materials: '18K gold plated brass. Hinged closure for secure fit. Hypoallergenic.',
    variants: ['gold', 'silver'],
    imgId: 'golden-sphere-img-m3n4o5',
    imgId2: 'golden-sphere-img2-p6q7r8',
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
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and effortlessly elegant for day or evening.',
    materials: '18K gold plated brass with intricate filigree detailing. Post back closure.',
    variants: ['gold', 'silver'],
    imgId: 'amber-lace-img-s9t0u1',
    imgId2: 'amber-lace-img2-v2w3x4',
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
    description: 'A curated gift set featuring our signature earrings and a matching pendant necklace, presented in a luxe velvet box. The perfect gift for someone special.',
    materials: '18K gold plated sterling silver. Set includes: drop earrings + pendant necklace (18" chain). Gift box included.',
    variants: ['gold', 'silver'],
    imgId: 'royal-heirloom-img-y5z6a7',
    imgId2: 'royal-heirloom-img2-b8c9d0',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
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
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The hypoallergenic gold plating is a game-changer. Obsessed with my huggies!',
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
