// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    subcategory: 'ear-cuff',
    description: 'A delicate gold ear cuff featuring a sparkling crystal accent. This piece adds instant elegance to any look, whether worn alone or stacked with other ear pieces. The adjustable design fits comfortably on any ear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia Crystal, Hypoallergenic',
    care: 'Store in a cool, dry place. Clean gently with a soft cloth. Avoid contact with water, perfumes, and lotions.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-necklace',
    name: 'MAJESTIC FLORA NECKLACE',
    slug: 'majestic-flora-necklace',
    price: 68,
    category: 'necklaces',
    subcategory: 'pendant',
    description: 'A stunning multicolor floral crystal necklace that catches the light beautifully. The intricate floral design features carefully selected crystals in warm amber, rose, and clear tones. Perfect for layering or wearing alone as a statement piece.',
    shortDescription: 'Multicolor floral crystal pendant necklace',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic Base',
    care: 'Store separately to avoid scratching. Clean with a soft, dry cloth. Remove before swimming or showering.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'earrings',
    subcategory: 'huggies',
    description: 'Chunky, luxurious gold dome huggie earrings that hug the earlobe with comfortable precision. The smooth, polished surface reflects light from every angle. A modern classic that elevates both casual and formal attire.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Sterling Silver Base, Hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid exposure to water and harsh chemicals.',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: 'Bestseller',
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    subcategory: 'drops',
    description: 'Elegant textured gold filigree drop earrings featuring intricate lace-like patterns. The warm amber tones catch the light, creating a mesmerizing glow. These statement earrings balance sophistication with delicate craftsmanship.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass Base, Hypoallergenic',
    care: 'Store flat to maintain shape. Clean gently with a jewelry cloth. Keep away from moisture and perfumes.',
    rating: 4.8,
    reviews: 73,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    subcategory: 'gift-set',
    description: 'An exquisite gift-boxed set featuring a matching pair of earrings and necklace. Presented in luxurious packaging, this set is perfect for gifting or treating yourself to a complete jewelry wardrobe. The cohesive design creates a polished, put-together look.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic',
    care: 'Store in the provided gift box. Clean pieces separately with a soft cloth. Handle with care to maintain intricate details.',
    rating: 4.9,
    reviews: 201,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: 'Gift Idea',
    featured: true,
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeds expectations for the price. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. The packaging was so elegant too.',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found jewelry that is both beautiful and hypoallergenic. I have sensitive ears and these are the only earrings I can wear all day.',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Morning light ✨',
    author: '@stylebyalex',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80',
    caption: 'Golden hour vibes',
    author: '@melissawears',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'New favorite piece',
    author: '@fashionwithjules',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop&q=80',
    caption: 'Date night ready',
    author: '@thejewelryedit',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday elegance',
    author: '@livingwithvelmora',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category) => products.filter((p) => p.category === category);
export const getBestsellers = () => products.filter((p) => p.bestseller);
export const getFeatured = () => products.filter((p) => p.featured);
