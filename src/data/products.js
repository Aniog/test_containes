// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Ear cuff with crystal accent',
    shortDescription: 'A delicate ear cuff featuring a shimmering crystal centerpiece, crafted in 18K gold vermeil.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    badge: null,
    isBestseller: true,
    variants: ['Gold']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace',
    shortDescription: 'A stunning statement necklace featuring multicolor crystal blooms, perfect for layering or wearing alone.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    isBestseller: true,
    variants: ['Gold']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings',
    shortDescription: 'Bold yet elegant dome huggies that hug your earlobe perfectly. A modern classic.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 203,
    badge: null,
    isBestseller: true,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings',
    shortDescription: 'Intricate filigree work creates delicate drop earrings that catch the light beautifully.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 67,
    badge: null,
    isBestseller: false,
    variants: ['Gold']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set',
    shortDescription: 'The perfect gift, beautifully packaged. Includes matching earrings and necklace in a luxe gift box.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 156,
    badge: 'Bestseller',
    isBestseller: true,
    variants: ['Gold']
  }
];

// UGC / Social proof content
export const ugcContent = [
  {
    id: 'ugc-1',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 'ugc-2',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop',
    caption: 'My new favorites'
  },
  {
    id: 'ugc-3',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Date night ready'
  },
  {
    id: 'ugc-4',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'The perfect gift 🎁'
  },
  {
    id: 'ugc-5',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop',
    caption: 'Obsessed with these'
  },
  {
    id: 'ugc-6',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Layering goals'
  }
];

// Testimonials
export const testimonials = [
  {
    id: 'test-1',
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments on my Velmora pieces constantly. Worth every penny.'
  },
  {
    id: 'test-2',
    name: 'Sophia R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t tarnish. These pieces have become my daily essentials.'
  },
  {
    id: 'test-3',
    name: 'Emma L.',
    rating: 5,
    text: 'The packaging alone makes you feel luxurious. The jewelry itself exceeded my expectations. Beautiful!'
  }
];

// Navigation links
export const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' }
];

// Trust bar items
export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

// Category tiles
export const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    href: '/shop?category=earrings'
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    href: '/shop?category=necklaces'
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    href: '/shop?category=huggies'
  }
];

// Get product by ID
export const getProductById = (id) => products.find(p => p.id === id);

// Get products by category
export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

// Get bestseller products
export const getBestsellers = () => products.filter(p => p.isBestseller);

// Get related products
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
