export const products = [
  {
    id: 'vivid-aura-ear-cuff',
    name: 'Vivid Aura Ear Cuff',
    shortName: 'Vivid Aura',
    price: 42,
    category: 'earrings',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 124,
    description: 'A stunning gold ear cuff adorned with a brilliant crystal accent. This piece makes a statement while remaining elegantly delicate.',
    details: '18K gold-plated brass with cubic zirconia crystal. Sold as a single piece.',
    materials: '18K Gold Plated Brass · Cubic Zirconia Crystal · Hypoallergenic',
    care: 'Store in a dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Arrives in our signature gift box, perfect for gifting.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    related: ['golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set']
  },
  {
    id: 'majestic-flora-necklace',
    name: 'Majestic Flora Necklace',
    shortName: 'Majestic Flora',
    price: 68,
    category: 'necklaces',
    badge: 'New',
    rating: 4.9,
    reviews: 89,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and color harmony.',
    details: 'Delicate chain with intricate floral crystal pendant. Adjustable length 16-18 inches.',
    materials: '18K Gold Plated Sterling Silver · Multicolor Crystals · Hypoallergenic',
    care: 'Store in a dry place. Avoid water and harsh chemicals. Clean with a jewelry-safe polishing cloth.',
    shipping: 'Free worldwide shipping. Presented in our signature Velmora gift box.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    related: ['royal-heirloom-set', 'vivid-aura-ear-cuff', 'amber-lace-earrings']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    shortName: 'Golden Sphere',
    price: 38,
    category: 'huggies',
    badge: 'Bestseller',
    rating: 4.7,
    reviews: 203,
    description: 'Our most popular huggie earring. The chunky gold dome creates a bold, luxurious look while hugging close to the ear for comfortable all-day wear.',
    details: 'Classic hoop style with secure click-back closure. Sold as a pair.',
    materials: '18K Gold Plated Brass · Hypoallergenic',
    care: 'Wipe clean with a soft cloth. Store separately to avoid scratching.',
    shipping: 'Free worldwide shipping. Includes velvet pouch for safe storage.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    related: ['vivid-aura-ear-cuff', 'amber-lace-earrings', 'royal-heirloom-set']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    shortName: 'Amber Lace',
    price: 54,
    category: 'earrings',
    badge: null,
    rating: 4.6,
    reviews: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Each pair is a work of art, featuring intricate detailing that catches the light beautifully.',
    details: 'Elegant drop silhouette with delicate filigree work. Length approximately 1.5 inches. Sold as a pair.',
    materials: '18K Gold Plated Brass · Hypoallergenic',
    care: 'Handle with care due to intricate design. Store flat to maintain shape.',
    shipping: 'Free worldwide shipping. Carefully packaged to protect the delicate filigree.',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold'],
    related: ['vivid-aura-ear-cuff', 'golden-sphere-huggies', 'royal-heirloom-set']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    shortName: 'Royal Heirloom',
    price: 95,
    category: 'sets',
    badge: 'Gift Set',
    rating: 5.0,
    reviews: 156,
    description: 'The perfect gift, elegantly presented. This luxurious set includes a pair of classic gold huggie earrings and a delicate pendant necklace, nestled in our signature gift box.',
    details: 'Includes: 1 pair Golden Sphere Huggies + 1 Delicate Chain Necklace. Necklace length: 18 inches.',
    materials: '18K Gold Plated Brass · Hypoallergenic',
    care: 'Store in the included gift box. Clean pieces separately to maintain their beauty.',
    shipping: 'Free worldwide shipping. This set ships in our premium gift box—ready for gifting.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['Gold'],
    related: ['golden-sphere-huggies', 'majestic-flora-necklace', 'vivid-aura-ear-cuff']
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, studs, and drop earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-cfa0a8d5a7e8?w=800&q=80',
    count: 2
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and statement pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 1
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable hoops that hug close',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    count: 1
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    initial: 'S',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeds jewelry costing twice the price. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emma L.',
    initial: 'E',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my mother. She was over the moon. The presentation was exquisite.',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Olivia K.',
    initial: 'O',
    rating: 5,
    text: 'Finally, demi-fine jewelry that looks expensive without the luxury price tag. Fast shipping and beautiful packaging.',
    product: 'Vivid Aura Ear Cuff'
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&q=80',
    caption: 'Everyday elegance',
    username: '@style.by.ava'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Stacked and stunning',
    username: '@jewelry.lover'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'The perfect gift',
    username: '@maria.style'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-cfa0a8d5a7e8?w=600&q=80',
    caption: 'Gold season',
    username: '@daily.gold'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Heirloom vibes',
    username: '@elegant.everyday'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Minimalist luxury',
    username: '@the.jewelry.diary'
  }
];

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (productId) => {
  const product = getProductById(productId);
  if (!product) return [];
  return product.related
    .map(id => getProductById(id))
    .filter(Boolean);
};

export const getBestsellers = () => {
  return products.filter(p => p.badge === 'Bestseller');
};
