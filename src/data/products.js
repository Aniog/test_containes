// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    imageSecondary: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop',
    rating: 5,
    reviews: 128,
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    imageSecondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop',
    rating: 5,
    reviews: 89,
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
    imageSecondary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
    rating: 4,
    reviews: 215,
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    imageSecondary: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
    rating: 5,
    reviews: 67,
    variants: ['gold', 'silver'],
    inStock: true,
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=800&fit=crop',
    imageSecondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop',
    rating: 5,
    reviews: 156,
    variants: ['gold', 'silver'],
    inStock: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Beautiful packaging and even more beautiful jewelry. This is my third purchase from Velmora.",
    author: "Emily R.",
    rating: 5,
  },
  {
    id: 3,
    text: "Perfect for everyday wear. The gold doesn't tarnish and the design is so elegant.",
    author: "Jessica K.",
    rating: 5,
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop',
    caption: 'My new favorites',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop',
    caption: 'Subtle sparkle',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=600&fit=crop',
    caption: 'Effortless style',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Layered perfection',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Timeless pieces',
  },
];

export const formatPrice = (price) => {
  return `$${price}`;
};