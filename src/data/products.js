// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. This piece adds a touch of sparkle to any look, perfect for both everyday elegance and special occasions.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 124,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming flowers. Each crystal is carefully selected for its vibrant hue and brilliant sparkle.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    description: 'Chunky gold dome huggie earrings that make a bold statement. These substantial yet lightweight hoops hug your earlobe with comfortable precision.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 4,
    reviews: 156,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    description: 'Textured gold filigree drop earrings with intricate detailing. These heirloom-quality pieces showcase masterful craftsmanship and timeless elegance.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a51?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 72,
    inStock: true,
    variants: ['gold', 'silver']
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for gifting or treating yourself to a complete coordinated look.',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 203,
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
    initials: 'S.M.'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Perfect gift for my best friend. The packaging was beautiful and the jewelry exceeded expectations.',
    initials: 'E.R.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive but is actually affordable. Velmora is now my go-to brand.',
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
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=600&fit=crop',
    caption: 'Obsessed with these'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Gold goddess vibes'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Gift ready ✗'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);