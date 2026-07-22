export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Elegant gold ear cuff with crystal accent. A delicate piece that wraps around your ear for an ethereal, bohemian look.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 127,
    variants: ['gold', 'silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Stunning multicolor floral crystal necklace. Each crystal is carefully selected to create a harmonious blend of warm tones.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 89,
    variants: ['gold', 'silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. A statement piece that adds instant glamour to any outfit.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 203,
    variants: ['gold', 'silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate details meet timeless elegance in these show-stopping pieces.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 156,
    variants: ['gold', 'silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Luxurious gift-boxed earring and necklace set. Perfect for gifting or treating yourself to a complete look.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 78,
    variants: ['gold', 'silver']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop' }
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
    text: 'Perfect for gifting. The packaging was beautiful and the jewelry exceeded my expectations.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive but is actually accessible. Obsessed!',
    initials: 'O'
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
    caption: 'My new favorites'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Layered perfection'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop',
    caption: 'Effortless beauty'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Statement maker'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

export const getRelatedProducts = (product, limit = 4) => 
  products
    .filter(p => p.id !== product.id)
    .slice(0, limit);