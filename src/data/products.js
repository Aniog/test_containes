export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime elegance to evening glamour.',
    materials: '18K Gold Plated, Crystal Accent, Hypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 156,
    variants: ['gold', 'silver'],
    isBestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and set in delicate gold plating.',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 203,
    variants: ['gold', 'silver'],
    isBestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Our signature chunky gold dome huggie earrings. The perfect everyday essential that adds a touch of understated luxury to any ensemble.',
    materials: '18K Gold Plated, Hypoallergenic, Lightweight',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 312,
    variants: ['gold', 'silver'],
    isBestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like detailing. A statement piece that balances vintage charm with modern sophistication.',
    materials: '18K Gold Plated, Filigree Design, Hypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 89,
    variants: ['gold', 'silver'],
    isBestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'Our most beloved gift set, featuring a stunning pair of classic gold earrings paired with a delicate pendant necklace. Beautifully packaged in our signature gift box, perfect for gifting.',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic, Gift Boxed',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    rating: 5.0,
    reviewCount: 178,
    variants: ['gold'],
    isBestseller: true
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants & chains' },
  { id: 'huggies', name: 'Huggies', description: 'Hoop earrings' },
  { id: 'sets', name: 'Sets', description: 'Curated gift sets' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. The Royal Heirloom Set arrived beautifully packaged.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'These have become my everyday go-to pieces. Comfortable, stylish, and the gold doesnt fade. Highly recommend!'
  }
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance ✨', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80' },
  { id: 2, caption: 'My new favorite pieces', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80' },
  { id: 3, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 4, caption: 'Gift ready 💫', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80' },
  { id: 5, caption: 'Stack it up', image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&q=80' },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
