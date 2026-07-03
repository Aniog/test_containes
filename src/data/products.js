// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Effortlessly elegant for day or night, this piece adds a touch of brilliance to any look.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystal',
    care: 'Avoid contact with water and perfumes. Store in a cool, dry place. Clean gently with a soft cloth.',
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop'
    ],
    rating: 4.8,
    reviews: 124,
    badge: null,
    isBestseller: true
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its vibrant hues and brilliant clarity.',
    shortDescription: 'Multicolor floral crystal statement necklace',
    materials: '18K Gold Plated, Austrian Crystals',
    care: 'Avoid contact with water and perfumes. Store separately to prevent scratching. Clean with a soft, dry cloth.',
    variants: ['Gold'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    isBestseller: true
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The perfect everyday luxury piece that elevates any outfit from casual to polished.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Sterling Silver base',
    care: 'Avoid water and chemicals. Apply perfume before wearing. Store in the provided pouch when not in use.',
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop'
    ],
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    isBestseller: true
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. A timeless piece that balances vintage charm with modern elegance.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass base',
    care: 'Keep away from moisture. Gently wipe with a jewelry cloth to maintain shine. Store individually.',
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 67,
    badge: null,
    isBestseller: true
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for special occasions or to treat yourself to a complete look.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Store in the provided gift box. Avoid contact with water and perfumes. Clean with care.',
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop'
    ],
    rating: 5.0,
    reviews: 156,
    badge: 'Gift Set',
    isBestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to drops, find your perfect pair',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer, stack, and shine',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=1000&fit=crop'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless elegance for everyday',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    review: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    rating: 5,
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emily R.',
    review: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. The packaging was beautiful too.',
    rating: 5,
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Jessica K.',
    review: 'Finally found demi-fine jewelry that looks luxurious without the luxury price tag. My new favorite brand!',
    rating: 5,
    product: 'Vivid Aura Jewels'
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop',
    caption: 'Monday mood 🖤',
    username: '@stylebyalex'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'Layered and loving it',
    username: '@modernelegance'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'My everyday go-to',
    username: '@sarahstyles'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop',
    caption: 'Huggies for days',
    username: '@thejewelrydiaries'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Date night ready',
    username: '@glamdaily'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop',
    caption: 'Shine bright ✨',
    username: '@luxelife'
  }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && (p.category === product.category || p.isBestseller))
    .slice(0, limit);
};
