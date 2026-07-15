// Velmora Fine Jewelry - Product Data
// Seed products for the DTC e-commerce storefront

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    subcategory: 'ear-cuff',
    description: 'An elegant ear cuff adorned with a delicate crystal accent. The sculptural design wraps gracefully around the ear, adding instant elegance to any look. Perfect for layering or wearing alone as a statement piece.',
    shortDescription: 'Elegant ear cuff with crystal accent',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-free',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true },
    ],
    rating: 4.8,
    reviewCount: 124,
    badge: null,
    isBestseller: true,
    tags: ['ear-cuff', 'crystal', 'gold-plated'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    subcategory: 'crystal-necklace',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal petal is carefully set to catch the light from every angle. The adjustable chain allows for versatile styling.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Cubic Zirconia Crystals, Hypoallergenic',
    care: 'Avoid water and chemicals. Apply perfume before wearing. Store separately to prevent scratching.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    rating: 4.9,
    reviewCount: 89,
    badge: 'New',
    isBestseller: true,
    tags: ['necklace', 'crystal', 'floral'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    comparePrice: null,
    category: 'earrings',
    subcategory: 'huggie',
    description: 'Chunky gold dome huggie earrings that hug the lobe with comfortable precision. The polished sphere creates a luxurious, sculptural silhouette. A modern essential for everyday elegance.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic, Lightweight',
    care: 'Wipe with soft cloth after wearing. Store in pouch to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true },
    ],
    rating: 4.7,
    reviewCount: 203,
    badge: 'Bestseller',
    isBestseller: true,
    tags: ['huggie', 'dome', 'everyday'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    subcategory: 'drop-earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. The intricate openwork design creates beautiful shadows and catches light elegantly. Sophisticated enough for special occasions, delicate enough for daily wear.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Filigree Design, Hypoallergenic',
    care: 'Avoid moisture and harsh chemicals. Clean carefully with soft brush if needed.',
    images: [
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    rating: 4.9,
    reviewCount: 67,
    badge: null,
    isBestseller: true,
    tags: ['drop-earrings', 'filigree', 'lace'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    comparePrice: 120,
    category: 'sets',
    subcategory: 'gift-set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Presented in an elegant velvet-lined box, this set makes a perfect gift for yourself or someone special. The coordinated pieces create a polished, pulled-together look.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Premium Crystals, Gift Box Included',
    care: 'Store in provided box. Clean gently to maintain sparkle.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    rating: 5.0,
    reviewCount: 156,
    badge: 'Best Gift',
    isBestseller: true,
    tags: ['gift-set', 'earrings', 'necklace', 'luxury'],
  },
];

export const categories = [
  { 
    id: 'earrings', 
    name: 'Earrings', 
    description: 'Ear cuffs, huggies, and drop earrings',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    count: 3,
  },
  { 
    id: 'necklaces', 
    name: 'Necklaces', 
    description: 'Chains, pendants, and statement pieces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    count: 1,
  },
  { 
    id: 'huggies', 
    name: 'Huggies', 
    description: 'Classic and modern huggie earrings',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    count: 1,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies. The gold doesn\'t tarnish and the weight feels luxurious.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife was speechless. The presentation was impeccable.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that\'s both elegant and affordable. The craftsmanship exceeds expectations for the price point.',
    product: 'Amber Lace Earrings',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Sunday brunch vibes ☀️',
    username: '@stylebysarah',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Layered and loving it',
    username: '@emilyrose',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Date night ready',
    username: '@jessicalooks',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Golden hour glow',
    username: '@fashionforward',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Gift unwrapping moment',
    username: '@velvetandgold',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Everyday luxury',
    username: '@minimaliststyle',
  },
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
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
