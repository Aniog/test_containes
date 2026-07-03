// Seed product data for Velmora Fine Jewelry
// Using elegant placeholder images - warm gold jewelry on dark/neutral backgrounds

export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff featuring a subtle crystal accent that catches the light beautifully. Perfect for everyday elegance or special occasions.',
    details: {
      material: '18K Gold Plated Sterling Silver',
      care: 'Avoid contact with water and perfumes. Store in a cool, dry place.',
      shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days.'
    },
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    isBestseller: true
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that adds a touch of nature-inspired sparkle to any outfit. The delicate chain adjusts to multiple lengths.',
    details: {
      material: '18K Gold Plated Sterling Silver with Austrian Crystals',
      care: 'Gently wipe with soft cloth after wear. Avoid swimming and showering.',
      shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days.'
    },
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    isBestseller: true
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres add instant glamour to any look.',
    details: {
      material: '18K Gold Plated Brass',
      care: 'Wipe with jewelry cloth after wearing. Store separately to prevent scratching.',
      shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days.'
    },
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Elegant textured gold filigree drop earrings with intricate lace-like detailing. A timeless piece that transitions effortlessly from day to evening.',
    details: {
      material: '18K Gold Plated Sterling Silver',
      care: 'Store in jewelry box when not wearing. Clean with mild soap and water.',
      shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days.'
    },
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 67,
    isBestseller: true
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring a delicate pair of gold earrings and matching necklace. The perfect gift for yourself or someone special.',
    details: {
      material: '18K Gold Plated Sterling Silver',
      care: 'Store in provided gift box. Avoid contact with moisture and chemicals.',
      shipping: 'Free worldwide shipping. Arrives in premium gift packaging. Standard delivery 5-7 business days.'
    },
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 43,
    isBestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Modern hoops with a comfortable fit',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny!'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. The Amber Lace Earrings are my new favorite.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the pieces are even more gorgeous in person. Will definitely be ordering again.'
  }
];

export const ugcImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
    caption: 'Layered perfection'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=711&fit=crop',
    caption: 'Date night ready'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop',
    caption: 'Minimalist vibes'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Stacked & styled'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Gift-ready packaging'
  }
];

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getBestsellers = () => {
  return products.filter(product => product.isBestseller);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && (p.category === product.category || Math.random() > 0.5))
    .slice(0, limit);
};
