// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
    rating: 5,
    reviews: 128,
    inStock: true,
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=750&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop',
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ['gold', 'silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop',
    rating: 4,
    reviews: 156,
    inStock: true,
    variants: ['gold'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
    rating: 5,
    reviews: 72,
    inStock: true,
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop',
    imageHover: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop',
    rating: 5,
    reviews: 203,
    inStock: true,
    variants: ['gold'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I wear my Vivid Aura Jewels every single day.',
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Perfect for gifting. My mother loved her Royal Heirloom Set.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t look cheap. Worth every penny.',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Wearing my Golden Sphere Huggies',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Obsessed with this look',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'My everyday stack',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Date night ready',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Subtle & elegant',
  },
];