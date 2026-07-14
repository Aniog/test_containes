// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A stunning gold ear cuff featuring a crystal accent that catches light beautifully. This piece adds instant elegance to any look, whether dressed up or casual.',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
    tags: ['ear-cuff', 'crystal', 'everyday'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A breathtaking multicolor floral crystal necklace that drapes elegantly. Each crystal is carefully selected for its clarity and brilliance, creating a mesmerizing rainbow effect.',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
    tags: ['floral', 'crystal', 'statement'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished surface reflects light from every angle. Perfect for everyday luxury or special occasions.',
    price: 38,
    comparePrice: null,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 156,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
    tags: ['huggies', 'dome', 'minimalist'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is meticulously crafted to capture the delicate beauty of vintage jewelry.',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 67,
    variants: ['Gold'],
    inStock: true,
    isBestseller: false,
    tags: ['drop', 'filigree', 'vintage'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A luxurious gift-boxed set featuring a matching earring and necklace combination. Presented in Velmora\'s signature packaging, this set is perfect for gifting or treating yourself.',
    price: 95,
    comparePrice: null,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    rating: 5.0,
    reviewCount: 43,
    variants: ['Gold'],
    inStock: true,
    isBestseller: true,
    tags: ['gift-set', 'earrings', 'necklace'],
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement drops',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments on my Velmora pieces constantly. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green. Beautiful packaging and fast shipping too!',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it.',
    product: 'Royal Heirloom Set',
  },
];

export const ugcImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Date night ready',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    caption: 'Layered looks',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Minimalist vibes',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Gift unwrapping moment',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
