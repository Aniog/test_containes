// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent. A delicate statement piece that wraps elegantly around your ear, featuring a sparkling crystal that catches the light with every movement.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop',
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace. A stunning pendant featuring delicate floral crystals in warm hues, perfect for adding a touch of elegance to any outfit.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop',
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. These substantial yet lightweight huggie earrings feature a beautiful dome shape that adds instant glamour to any look.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate filigree work meets modern elegance in these stunning drop earrings. Each piece features detailed gold lace patterns.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop',
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special. This luxurious set includes matching earrings and necklace, beautifully presented in a signature gift box.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop',
    ],
    rating: 4.9,
    reviews: 78,
    inStock: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Elegant ear cuffs, studs, and drop earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and statement necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Chunky gold hoops and huggie earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day.',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
  },
  {
    id: 3,
    name: 'Amanda R.',
    rating: 5,
    text: 'Received so many compliments on my Royal Heirloom Set. Worth every penny.',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'My new favorite piece',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'Gold goddess vibes',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Perfect for date night',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Subtle sparkle',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Effortlessly chic',
  },
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};