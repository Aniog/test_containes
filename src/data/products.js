// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'An ethereal ear cuff featuring a delicate crystal accent that catches the light with every movement. This piece embodies modern elegance with its sculptural curves and sparkling centerpiece.',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-free',
    care: 'Store in the provided pouch when not in use. Avoid contact with water, perfume, and harsh chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    badge: null,
    isBestseller: true,
    variants: ['Gold'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that celebrates nature\'s beauty. Each crystal is carefully selected for its unique color palette, creating a one-of-a-kind statement piece that transitions effortlessly from day to evening.',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic',
    care: 'Store flat in the provided box. Clean crystals gently with a soft, dry cloth. Avoid submerging in water.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    isBestseller: true,
    variants: ['Gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Classic meets contemporary in these chunky gold dome huggie earrings. The smooth, polished spheres create a bold yet refined look that hugs the earlobe perfectly. Lightweight for all-day comfort.',
    materials: '18K Gold Plated, Lightweight, Hypoallergenic',
    care: 'Wipe clean with a soft cloth after wearing. Store separately to prevent scratching. Avoid contact with water and chemicals.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    badge: null,
    isBestseller: true,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Intricate textured gold filigree creates these stunning drop earrings. The delicate lace-like pattern catches light beautifully, creating an elegant cascade of shimmer that elevates any outfit.',
    materials: '18K Gold Plated, Intricate Filigree, Hypoallergenic',
    care: 'Handle with care due to delicate design. Store in the provided pouch. Clean gently with a soft brush.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 67,
    badge: null,
    isBestseller: true,
    variants: ['Gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'Our signature gift-boxed set featuring a coordinated earring and necklace combination. Perfect for gifting or treating yourself to a complete look. Presented in an elegant velour-lined gift box.',
    materials: '18K Gold Plated, Luxury Gift Box, Hypoallergenic',
    care: 'Store in the provided gift box when not in use. Follow individual piece care instructions.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 156,
    badge: 'Bestseller',
    isBestseller: true,
    variants: ['Gold'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch light beautifully. Worth every penny.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 2,
    name: 'Jessica K.',
    rating: 5,
    text: 'I\'ve received so many compliments on my Amber Lace Earrings. They elevate even the simplest outfit.',
    product: 'Amber Lace Earrings',
  },
  {
    id: 3,
    name: 'Michelle R.',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the jewelry itself exceeded my expectations. A new favorite brand!',
    product: 'Golden Sphere Huggies',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&q=80',
    caption: 'Layered for days ✨',
    author: 'jewelry_lover',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&q=80',
    caption: 'My new favorite pair',
    author: 'style.by.mia',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&q=80',
    caption: 'Effortless elegance',
    author: 'the.luxe.edit',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&q=80',
    caption: 'Gift unwrapping moment',
    author: 'natalie.lux',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&q=80',
    caption: 'Everyday luxury',
    author: 'graceful.gems',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops & studs',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Classic & modern hoops',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
