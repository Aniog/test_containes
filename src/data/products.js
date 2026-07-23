export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime elegance to evening glamour.',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Delicate crystal blooms cascade along a fine gold chain, creating a piece that transitions beautifully from day to evening wear.',
    materials: '18K Gold Plated, Multicolor crystals, Hypoallergenic stainless steel chain',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' }
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Statement-making chunky gold dome huggie earrings that frame your face with warmth. These substantial yet lightweight hoops add instant glamour to any ensemble.',
    materials: '18K Gold Plated, Lightweight hollow design, Hypoallergenic stainless steel',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 203,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is a work of art, combining traditional craftsmanship with contemporary design.',
    materials: '18K Gold Plated, Textured filigree, Hypoallergenic stainless steel',
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 67,
    variants: [
      { name: 'Gold', value: 'gold' }
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'necklaces',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Designed to be treasured and passed down, this set embodies timeless elegance with a modern sensibility. Perfect for special occasions or as a meaningful gift.',
    materials: '18K Gold Plated, Gift box included, Hypoallergenic stainless steel',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 156,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80' },
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
  },
  {
    id: 2,
    name: 'Sophie R.',
    rating: 5,
    text: 'Finally found jewelry that looks luxury without the luxury price tag. The Royal Heirloom Set was perfect for my anniversary.',
  },
  {
    id: 3,
    name: 'Elena K.',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the pieces themselves are even more gorgeous in person. Velmora is now my go-to.',
  }
];

export const ugcItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=711&fit=crop&q=80', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80', caption: 'Golden hour glow' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop&q=80', caption: 'Dressed up or down' },
  { id: 4, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop&q=80', caption: 'Minimalist luxury' },
  { id: 5, image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80', caption: 'Statement piece' },
  { id: 6, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80', caption: 'Special moments' },
  { id: 7, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop&q=80', caption: 'Stack it up' },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, limit);
}
