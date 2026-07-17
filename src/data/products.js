// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent. A delicate, ethereal piece that wraps around your ear with graceful elegance. The subtle crystal catchlight adds a touch of understated sparkle.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 128,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace. Inspired by morning dew on garden blooms, this necklace features delicate crystal flowers that catch the light beautifully. Perfect for layering or wearing alone as a statement piece.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. These substantial yet lightweight huggies feature a beautiful polished dome that adds instant elegance to any outfit. The perfect everyday luxury.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 215,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate filigree work meets modern minimalism. These delicate drop earrings feature detailed patterns that catch the eye without overwhelming.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 76,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The ultimate luxurious gift. This beautifully packaged set includes matching earrings and necklace, perfect for special occasions or treating yourself.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 42,
    inStock: true,
    variants: ['gold', 'silver']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.',
    initials: 'S'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Received so many compliments on my Royal Heirloom Set. Worth every penny.',
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
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Gold goddess vibes'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Layered perfection'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=600&fit=crop',
    caption: 'Gift ready 💝'
  }
];

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const formatPrice = (price) => {
  return `$${price}`;
};