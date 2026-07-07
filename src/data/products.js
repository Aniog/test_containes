export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Effortlessly elegant for everyday wear or special occasions.',
    materials: '18K Gold Plated, Hypoallergenic, Crystal',
    care: 'Store in a cool, dry place. Avoid contact with water, perfumes, and cosmetics. Clean gently with a soft cloth.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    rating: 4.8,
    reviews: 124,
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Perfect for layering or wearing alone as a statement piece.',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic',
    care: 'Store separately to avoid scratching. Clean with a soft, dry cloth. Remove before swimming or showering.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    rating: 4.9,
    reviews: 89,
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with comfortable precision. A modern classic in demi-fine jewelry.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch to maintain shine.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    rating: 4.7,
    reviews: 156,
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings featuring intricate lace-like patterns. Lightweight yet impactful, these are destined to become your favorites.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Avoid contact with water and harsh chemicals. Store in a jewelry box or soft pouch.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    rating: 4.9,
    reviews: 72,
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect present for yourself or someone special.',
    materials: '18K Gold Plated, Hypoallergenic, Comes in Gift Box',
    care: 'Follow individual care instructions for each piece. Store in the provided gift box.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    rating: 5.0,
    reviews: 203,
    variants: ['gold'],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80' },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
