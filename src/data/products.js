// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Elegant gold ear cuff with crystal accent. A delicate statement piece that wraps around your ear with effortless grace.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 128,
    variants: ['Gold', 'Silver'],
    inStock: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace that captures the essence of blooming gardens. Each crystal is carefully selected for its unique hue and brilliance.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    variants: ['Gold', 'Rose Gold'],
    inStock: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings that make a bold yet refined statement. Perfect for everyday luxury.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 215,
    variants: ['Gold', 'Silver'],
    inStock: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings with intricate detailing. A timeless piece that exudes vintage elegance.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 76,
    variants: ['Gold'],
    inStock: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Luxurious gift-boxed earring and necklace set. The perfect gift for someone special, or a treat for yourself.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 142,
    variants: ['Gold', 'Rose Gold'],
    inStock: true
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop' }
];

export const testimonials = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'The quality is stunning. I wear my Vivid Aura Jewels every single day.' },
  { id: 2, name: 'Emma R.', rating: 5, text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.' },
  { id: 3, name: 'Jessica L.', rating: 5, text: 'Received so many compliments on my Royal Heirloom Set. Worth every penny.' }
];

export const ugcImages = [
  { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop', caption: 'Golden moments' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop', caption: 'Effortless style' },
  { id: 4, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop', caption: 'Subtle sparkle' },
  { id: 5, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop', caption: 'My everyday luxury' },
  { id: 6, image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop', caption: 'Simply stunning' }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);