// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent. A delicate, ethereal piece that wraps around your ear with graceful elegance.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 128,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace. A stunning statement piece featuring delicate crystal flowers that catch the light beautifully.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. These substantial yet lightweight huggies make a bold statement with their smooth, polished sphere design.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=800&fit=crop'
    ],
    rating: 4,
    reviews: 156,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate filigree work meets modern elegance in these stunning drop earrings.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 72,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special. This coordinated set comes beautifully packaged in our signature box.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 203,
    inStock: true,
    variants: ['gold', 'silver']
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
    text: 'The quality is absolutely stunning. I\'ve received so many compliments on my Golden Sphere Huggies.',
    initials: 'S'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. This is my third purchase from Velmora.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Perfect for everyday wear. The gold doesn\'t tarnish and the design is so elegant.',
    initials: 'J'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Obsessed with these'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Date night ready'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop',
    caption: 'Subtle sparkle'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=600&fit=crop',
    caption: 'Layered perfection'
  }
];

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const formatPrice = (price) => {
  return `$${price.toFixed(0)}`;
};