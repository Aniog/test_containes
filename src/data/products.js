// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. This piece effortlessly elevates any look, worn alone for subtlety or layered for maximum impact.',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    variants: ['gold', 'silver'],
    featured: true,
    tags: ['earrings', 'ear-cuff', 'crystal']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Each crystal petal is carefully set to catch the light, creating a mesmerizing sparkle with every movement.',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    variants: ['gold'],
    featured: true,
    tags: ['necklaces', 'floral', 'crystal']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a bold statement. The smooth, polished spheres hug your earlobe perfectly, adding instant glamour to any ensemble.',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviews: 189,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    variants: ['gold', 'silver'],
    featured: true,
    tags: ['huggies', 'earrings', 'chunky']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate openwork design creates beautiful shadows and highlights, perfect for both day and evening wear.',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80'
    ],
    variants: ['gold'],
    featured: true,
    tags: ['earrings', 'filigree', 'drop']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A luxurious gift-boxed set featuring matching gold-plated earrings and necklace. Presented in an elegant velvet box, this set is perfect for gifting or treating yourself to a coordinated look.',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    variants: ['gold'],
    featured: true,
    tags: ['sets', 'gift', 'earrings', 'necklace']
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
    text: 'Absolutely stunning jewelry. The quality exceeded my expectations. I receive compliments every time I wear my Golden Sphere Huggies.',
    location: 'New York, NY'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Perfect for gifting! I bought the Royal Heirloom Set for my best friend and she absolutely loved it. Beautiful packaging too.',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t look cheap. The attention to detail is remarkable. Will definitely be ordering more!',
    location: 'Chicago, IL'
  }
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Layered looks'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Statement pieces'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80',
    caption: 'Minimalist chic'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Gift ready'
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
