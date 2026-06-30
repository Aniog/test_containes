export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A sculptural gold ear cuff adorned with a brilliant crystal accent. The organic curve hugs the ear with effortless elegance, catching light from every angle.',
    materials: '18K gold-plated brass, cubic zirconia crystal, hypoallergenic posts',
    care: 'Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A cascade of multicolor crystal blooms arranged like wildflowers in summer. Each faceted stone catches and refracts light, creating a living tapestry of color.',
    materials: '18K gold-plated brass, multicolor crystal, adjustable chain',
    care: 'Avoid contact with water and harsh chemicals. Clean with a soft, dry cloth. Store separately to prevent scratching.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    badge: null,
    variants: ['Gold', 'Rose Gold'],
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, luxurious dome huggie earrings that make a statement. The smooth gold spheres add instant glamour to any look, from casual daytime to evening elegance.',
    materials: '18K gold-plated brass, hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Delicate textured gold filigree drops with an intricately cut-out lace pattern. These heirloom-quality earrings balance the ethereal with the enduring.',
    materials: '18K gold-plated brass, hypoallergenic posts',
    care: 'Handle with care. Avoid water and chemicals. Store flat to preserve the delicate filigree.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 67,
    badge: null,
    variants: ['Gold'],
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'The perfect gift, elegantly boxed. This curated set pairs delicate drop earrings with a matching pendant necklace, creating a cohesive look of refined luxury.',
    materials: '18K gold-plated brass, cubic zirconia, comes in signature gift box',
    care: 'Follow individual care instructions for each piece. Store in the provided gift box.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 156,
    badge: 'Gift Pick',
    variants: ['Gold', 'Silver', 'Rose Gold'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my mother. The presentation was impeccable and she was moved to tears.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive without the designer price tag. Velmora has become my go-to for all occasions.',
    product: 'Majestic Flora Nectar',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and statement pieces',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Classic hoops with modern elegance',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday elegance',
    handle: '@stylebyalex',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop&q=80',
    caption: 'Golden hour glow',
    handle: '@fashion.mia',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80',
    caption: 'Gift unwrapping moment',
    handle: '@jewelry.lover',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop&q=80',
    caption: 'Layered perfection',
    handle: '@the.luxury.edit',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop&q=80',
    caption: 'Statement approved',
    handle: '@daily.darling',
  },
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getRelatedProducts = (productId, limit = 4) => 
  products.filter(p => p.id !== productId).slice(0, limit);
