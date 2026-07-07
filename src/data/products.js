const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    subcategory: 'ear-cuffs',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff with a luminous crystal accent. Designed to grace the ear with an ethereal glow — perfect for stacking or wearing solo.',
    materials: '18K gold plated brass, cubic zirconia crystal',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-8 business days. Express delivery available at checkout.',
    returns: '30-day return policy. Items must be returned in original condition and packaging. Free returns on all domestic orders.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    subcategory: 'pendants',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal pendant necklace that captures the essence of blooming gardens. Each crystal is hand-set in a warm gold setting.',
    materials: '18K gold plated brass, multicolor cubic zirconia crystals, adjustable chain',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-8 business days. Express delivery available at checkout.',
    returns: '30-day return policy. Items must be returned in original condition and packaging. Free returns on all domestic orders.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    subcategory: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished sphere silhouette. A modern essential that transitions effortlessly from day to night.',
    materials: '18K gold plated brass, hypoallergenic posts',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-8 business days. Express delivery available at checkout.',
    returns: '30-day return policy. Items must be returned in original condition and packaging. Free returns on all domestic orders.',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3665c5b2c3b6?w=800&q=80',
      'https://images.unsplash.com/photo-1635767798638-3665c5b2c3b6?w=400&q=80',
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    subcategory: 'drop',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings that dance with light. Intricate lace-like detailing meets warm gold for a timeless heirloom feel.',
    materials: '18K gold plated brass, filigree detailing, french wire hooks',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-8 business days. Express delivery available at checkout.',
    returns: '30-day return policy. Items must be returned in original condition and packaging. Free returns on all domestic orders.',
    images: [
      'https://images.unsplash.com/photo-1617038220302-7db14f2df4f2?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220302-7db14f2df4f2?w=400&q=80',
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    subcategory: 'gift-sets',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed earring and necklace set designed for life\'s most cherished moments. Complete with a satin-lined keepsake box.',
    materials: '18K gold plated brass, cubic zirconia accents, satin-lined gift box',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-8 business days. Express delivery available at checkout.',
    returns: '30-day return policy. Items must be returned in original condition and packaging. Free returns on all domestic orders.',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', count: 1, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', count: 1, image: 'https://images.unsplash.com/photo-1635767798638-3665c5b2c3b6?w=600&q=80' },
];

export const testimonials = [
  { name: 'Sarah M.', rating: 5, text: 'The quality is absolutely stunning. I receive compliments every time I wear my Vivid Aura ear cuff. It looks far more expensive than it is.' },
  { name: 'Jessica K.', rating: 5, text: 'Bought the Royal Heirloom Set as a gift for my sister and she treasures it. The packaging alone is worth it — feels so special.' },
  { name: 'Amanda R.', rating: 5, text: 'My Golden Sphere Huggies have not tarnished after months of daily wear. Finally, jewelry that lasts without breaking the bank.' },
];

export const ugcReels = [
  { id: 1, caption: 'Gold meets skin ✨' },
  { id: 2, caption: 'Stacked and styled' },
  { id: 3, caption: 'Everyday elegance' },
  { id: 4, caption: 'Gift-wrapped with love' },
  { id: 5, caption: 'Mini but mighty' },
  { id: 6, caption: 'The perfect layering' },
];

export default products;