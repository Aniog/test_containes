// Velmora Fine Jewelry - Seed Product Data
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look from casual to extraordinary.',
    price: 42,
    category: 'earrings',
    tags: ['bestseller', 'ear-cuff', 'crystal'],
    rating: 4.8,
    reviews: 124,
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    materials: '18K Gold Plated, Cubic Zirconia Crystal, Hypoallergenic'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A multicolor floral crystal necklace that captures the essence of blooming gardens. Perfect for adding a pop of color to your everyday elegance.',
    price: 68,
    category: 'necklaces',
    tags: ['floral', 'crystal', 'colorful'],
    rating: 4.9,
    reviews: 89,
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    materials: '18K Gold Plated, Glass Crystals, Hypoallergenic'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. These timeless pieces hug your earlobe with comfortable precision.',
    price: 38,
    category: 'huggies',
    tags: ['bestseller', 'classic', 'minimalist'],
    rating: 4.7,
    reviews: 156,
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    materials: '18K Gold Plated, Hypoallergenic Stainless Steel'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like patterns. These show-stoppers are perfect for special occasions.',
    price: 54,
    category: 'earrings',
    tags: ['filigree', 'drop', 'elegant'],
    rating: 4.9,
    reviews: 67,
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80'
    ],
    materials: '18K Gold Plated, Hypoallergenic'
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A gift-boxed matching earring and necklace set. Presented in luxurious packaging, this set makes the perfect gift for yourself or someone special.',
    price: 95,
    category: 'sets',
    tags: ['gift', 'set', 'premium'],
    rating: 5.0,
    reviews: 43,
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
    ],
    materials: '18K Gold Plated, Hypoallergenic'
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny!'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. The packaging alone made it feel so luxurious.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but doesn\'t break the bank. Velmora is my new go-to.'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Golden hour glow'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Effortless luxury'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Stacked and styled'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Minimalist charm'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Gift worthy'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => products.filter(p => p.category === category);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
