export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    description: 'A sculptural gold ear cuff with a delicate crystal accent, designed to catch the light with every turn. No piercing required — simply slide onto the ear for an effortless statement.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided pouch when not in use. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders over $50. Standard delivery 5-8 business days. Express available at checkout.',
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    variants: ['gold', 'silver'],
    images: 3,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    description: 'A multicolor floral crystal necklace that blooms at your collarbone. Hand-set crystals in soft pastels create a garden of light against 18K gold plating.',
    care: 'Remove before showering or swimming. Store flat to prevent tangling. Avoid exposure to harsh chemicals.',
    shipping: 'Free worldwide shipping on all orders over $50. Standard delivery 5-8 business days. Express available at checkout.',
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    variants: ['gold'],
    images: 3,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    description: 'Chunky gold dome huggie earrings that hug the lobe with sculptural confidence. Lightweight enough for all-day wear, bold enough to turn heads.',
    care: 'Keep dry and store in the velvet pouch. Polish with a jewelry cloth to maintain shine.',
    shipping: 'Free worldwide shipping on all orders over $50. Standard delivery 5-8 business days. Express available at checkout.',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    variants: ['gold', 'silver'],
    images: 3,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Delicate yet dramatic, they frame the face with warm, intricate detail.',
    care: 'Handle with care to preserve the fine filigree work. Store separately to avoid tangling. Clean with a dry soft cloth only.',
    shipping: 'Free worldwide shipping on all orders over $50. Standard delivery 5-8 business days. Express available at checkout.',
    rating: 4.6,
    reviews: 67,
    badge: null,
    variants: ['gold'],
    images: 3,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    description: 'A curated gift-boxed earring and necklace set that feels like an heirloom from the first wear. Elegantly packaged and ready to give — or keep.',
    care: 'Store in the original gift box. Avoid moisture and perfumes. Wipe clean after each wear.',
    shipping: 'Complimentary express shipping on all gift sets. Arrives in 3-5 business days with signature required.',
    rating: 4.9,
    reviews: 156,
    badge: 'Gift Ready',
    variants: ['gold'],
    images: 3,
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', count: 24 },
  { id: 'necklaces', label: 'Necklaces', count: 18 },
  { id: 'huggies', label: 'Huggies', count: 12 },
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 - $80', min: 50, max: 80 },
  { id: '80-plus', label: '$80+', min: 80, max: Infinity },
];

export const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'rose-gold', label: 'Rose Gold' },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
