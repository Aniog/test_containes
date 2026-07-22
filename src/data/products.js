// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    subcategory: 'ear-cuff',
    description: 'A stunning gold ear cuff featuring a brilliant crystal accent. The perfect statement piece that adds elegance to any look, worn alone or layered with other earrings.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic Sterling Silver Base',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    isBestseller: true,
    featured: true,
  },
  {
    id: 'majestic-flora-necklace',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-necklace',
    price: 68,
    category: 'necklaces',
    subcategory: 'pendant',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and unique color gradient, creating a piece that truly stands out.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, multicolor crystals, Hypoallergenic Sterling Silver Base',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    isBestseller: false,
    featured: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'earrings',
    subcategory: 'huggies',
    description: 'Our chunky gold dome huggie earrings are a modern classic. The smooth, rounded silhouette hugs your earlobe comfortably while making a bold fashion statement.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic Sterling Silver Base',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    isBestseller: true,
    featured: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    subcategory: 'drops',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These heirloom-quality pieces showcase masterful craftsmanship and timeless beauty.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Hypoallergenic Sterling Silver Base',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviews: 67,
    badge: null,
    isBestseller: false,
    featured: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    subcategory: 'earring-necklace',
    description: 'The ultimate gift-giving piece. This beautifully gift-boxed set includes a matching pair of earrings and necklace, designed to be passed down through generations. Perfect for special occasions or treating yourself.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Hypoallergenic Sterling Silver Base, Premium Gift Box included',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    rating: 5.0,
    reviews: 156,
    badge: 'Gift Set',
    isBestseller: true,
    featured: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, huggies, drops & studs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    count: 12,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layered sets',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    count: 8,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Charming huggie earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    count: 6,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch the light beautifully. I get compliments every time I wear them.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. The presentation was exquisite and my wife absolutely loved it.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that\'s both affordable and truly luxurious looking. The craftsmanship is impeccable.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Golden hour, golden glow ✨',
    handle: '@stylebyalexa',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Layering season is here',
    handle: '@fashionforward_j',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Minimalist gold vibes',
    handle: '@thestyledaily',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'The perfect gift 🎁',
    handle: '@luxlifebylisa',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop',
    caption: 'Everyday elegance',
    handle: '@beautyandthegold',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Heirloom vibes',
    handle: '@jewelrylover',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getFeatured = () => products.filter(p => p.featured);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
