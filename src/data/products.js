// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'Earrings',
    description: 'A single statement piece that catches the light. This gold ear cuff with crystal accent adds instant elegance to any look, day or evening.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated Sterling Silver, Austrian Crystal',
    care: 'Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    rating: 4.9,
    reviews: 127,
    variants: ['Gold', 'Silver'],
    images: {
      Gold: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
      ],
      Silver: [
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
      ],
    },
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'Necklaces',
    description: 'Delicate blooms in an earthy palette. This multicolor floral crystal necklace brings natural beauty to your everyday style or special occasions.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated Sterling Silver, Natural Crystals',
    care: 'Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    rating: 4.8,
    reviews: 89,
    variants: ['Gold'],
    images: {
      Gold: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
        'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
      ],
    },
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'Huggies',
    description: 'Modern curves, timeless appeal. These chunky gold dome huggie earrings are the perfect everyday luxury — comfortable, wearable, unforgettable.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated Brass',
    care: 'Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    rating: 4.9,
    reviews: 203,
    variants: ['Gold'],
    images: {
      Gold: [
        'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80',
        'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
      ],
    },
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'Earrings',
    description: 'Handcrafted detail, every angle different. These textured gold filigree drop earrings showcase artisanal craftsmanship at its finest.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated Sterling Silver',
    care: 'Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    rating: 4.7,
    reviews: 156,
    variants: ['Gold'],
    images: {
      Gold: [
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
      ],
    },
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'Sets',
    description: 'Complete your collection or gift it. This gift-boxed earring and necklace set makes every moment feel like a celebration.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated Sterling Silver, Cubic Zirconia',
    care: 'Store in a dry place. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.',
    rating: 5.0,
    reviews: 78,
    variants: ['Gold'],
    images: {
      Gold: [
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
      ],
    },
    featured: true,
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive but doesn\'t break the bank. The packaging alone made me feel special.',
  },
  {
    id: 3,
    name: 'Emma L.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift, and it arrived beautifully packaged. My sister absolutely loved it.',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Everyday elegance ✨',
    handle: '@style.by.sophia',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    caption: 'My new favorite piece',
    handle: '@luxe.looks',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Date night ready 💫',
    handle: '@the.real.emma',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Minimalist perfection',
    handle: '@effortless.style',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Layered and loving it',
    handle: '@jewelry.lover',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Gift unwrapping moment 🎁',
    handle: '@unboxed.beauty',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

export const getBestsellers = () => products.filter((p) => p.bestseller);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.id !== productId)
    .slice(0, limit);
};
