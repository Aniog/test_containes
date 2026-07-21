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
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 127,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace. A stunning statement piece featuring vibrant crystals arranged in a delicate floral pattern.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. These substantial yet lightweight hoops add instant glamour to any outfit.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 203,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate detailing meets modern elegance in these show-stopping drops.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 156,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special, or a luxurious treat for yourself.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 78,
    inStock: true,
    variants: ['gold']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.',
    initials: 'S.M.'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Received the Royal Heirloom Set as a gift and I\'m obsessed. The packaging was beautiful too.',
    initials: 'E.R.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t tarnish. Velmora is now my go-to brand.',
    initials: 'J.L.'
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
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'Obsessed with this necklace'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Minimalist gold dreams'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop',
    caption: 'Ear party ready'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  
  return products
    .filter(p => p.id !== productId)
    .slice(0, limit);
};