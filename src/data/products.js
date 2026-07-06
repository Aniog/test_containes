export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed to elevate any look from day to evening.',
    material: '18K Gold Plated Brass · Cubic Zirconia',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold', 'silver'],
    images: ['ear-cuff-crystal-gold-jewelry', 'ear-cuff-crystal-detail', 'ear-cuff-model-wearing'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate chain adorned with multicolor floral crystal pendants, inspired by a garden in bloom. The perfect layering piece or standalone statement.',
    material: '18K Gold Plated Sterling Silver · Natural Zircon',
    care: 'Remove before swimming or showering. Polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold', 'silver'],
    images: ['floral-crystal-necklace-gold', 'floral-necklace-detail-pendant', 'floral-necklace-model-neck'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a smooth, sculptural finish. Lightweight enough for all-day wear with a bold, modern silhouette.',
    material: '18K Gold Plated Brass · Hypoallergenic Posts',
    care: 'Wipe clean with a dry cloth after wearing. Store flat to maintain shape.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: ['gold-dome-huggie-earrings', 'huggie-earrings-close-up', 'huggie-earrings-model-ear'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. A timeless design that moves gracefully with you.',
    material: '18K Gold Plated Brass · Surgical Steel Posts',
    care: 'Handle with care to preserve filigree detail. Store in jewelry box away from moisture.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold', 'silver'],
    images: ['gold-filigree-drop-earrings', 'filigree-earrings-detail', 'filigree-earrings-model'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A curated gift set featuring matching earrings and necklace in a luxe presentation box. The perfect gift for someone special — or yourself.',
    material: '18K Gold Plated Sterling Silver · Gift Box Included',
    care: 'Each piece should be stored separately. Avoid stacking to prevent scratching.',
    shipping: 'Free worldwide shipping. Gift-wrapped and shipped within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: ['jewelry-gift-set-box-gold', 'gift-set-necklace-earrings', 'gift-set-model-wearing'],
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Statement studs, drops & cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chains, pendants & layers' },
  { id: 'huggies', name: 'Huggies', description: 'Everyday hoops & huggies' },
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
    text: 'Finally found jewelry that doesn\'t irritate my sensitive ears. The hypoallergenic quality is real, and the designs are so elegant.',
    rating: 5,
  },
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => 
  category === 'all' ? products : products.filter(p => p.category === category);

export const getRelatedProducts = (productId) => 
  products.filter(p => p.id !== productId).slice(0, 4);
