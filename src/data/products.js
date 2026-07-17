export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime elegance to evening sophistication. The adjustable design ensures a comfortable, secure fit for all ear types.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K gold plated over sterling silver, cubic zirconia crystals. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the provided jewelry pouch when not wearing. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Rose Gold'],
    rating: 4.8,
    reviews: 124,
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal is carefully selected for its unique color gradients, creating a one-of-a-kind piece that sparkles from every angle.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K gold plated chain, multicolor crystal beads. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the provided jewelry pouch when not wearing. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold Chain', 'Silver Chain'],
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Our bestselling chunky gold dome huggie earrings. The perfect everyday essential, these huggies feature a smooth, polished surface and secure click-lock closure. Stack them with our ear cuffs for a curated ear look.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K gold plated over brass. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the provided jewelry pouch when not wearing. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 203,
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These statement pieces bring drama and refinement to any outfit. Lightweight and comfortable for all-day wear.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K gold plated over sterling silver. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the provided jewelry pouch when not wearing. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Antique Gold'],
    rating: 4.9,
    reviews: 67,
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'Our signature gift-boxed set featuring a matching pair of drop earrings and a delicate pendant necklace. Presented in our signature velvet jewelry box, this set is perfect for gifting or treating yourself to a complete look.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K gold plated over sterling silver. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the provided jewelry pouch when not wearing. Avoid contact with water, perfumes, and lotions. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold Set', 'Rose Gold Set'],
    rating: 5.0,
    reviews: 156,
    featured: true,
    bestseller: true,
  },
];

export const categories = [
  { id: 'all', name: 'All Jewelry', count: products.length },
  { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
  { id: 'huggies', name: 'Huggies', count: products.filter(p => p.category === 'huggies').length },
  { id: 'sets', name: 'Sets', count: products.filter(p => p.category === 'sets').length },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch light beautifully. I get compliments every time I wear them.',
    initials: 'S',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'These pieces feel so much more expensive than they are. Perfect for everyday luxury. I\'ve already ordered three more sets.',
    initials: 'E',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'The attention to detail is remarkable. I bought the Royal Heirloom Set as a gift and it arrived beautifully packaged. My sister was thrilled.',
    initials: 'J',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'Statement pieces',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'Layered perfection',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Ear curation',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'Neckline details',
  },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getBestsellers() {
  return products.filter(p => p.bestseller);
}

export function getRelatedProducts(currentProductId, limit = 4) {
  const current = getProductById(currentProductId);
  if (!current) return [];
  
  return products
    .filter(p => p.id !== currentProductId)
    .sort((a, b) => {
      if (a.category === current.category) return -1;
      if (b.category === current.category) return 1;
      return b.rating - a.rating;
    })
    .slice(0, limit);
}
