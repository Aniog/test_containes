// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura',
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. Perfect for creating a layered, editorial look.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 128,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora',
    description: 'A stunning multicolor floral crystal necklace that captures light from every angle. A statement piece for any occasion.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere',
    description: 'Chunky gold dome huggie earrings that make a bold yet elegant statement. Comfortable for everyday wear.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 4,
    reviews: 156,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace',
    description: 'Textured gold filigree drop earrings with intricate detailing. A timeless piece that elevates any outfit.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 72,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for gifting or treating yourself.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 203,
    variants: ['Gold', 'Silver']
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
    text: 'The quality is absolutely stunning. I wear my Vivid Aura jewels every single day.',
    initials: 'S.M.'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Perfect for gifting. My mother loved her Royal Heirloom set.',
    initials: 'E.R.'
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but feels accessible.',
    initials: 'O.K.'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop',
    caption: 'Golden hour glow'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'Statement maker'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Minimalist vibes'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Effortless style'
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