// Seed product data for Velmora Fine Jewelry
// Elegant warm-toned gradient placeholders for jewelry imagery

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. This piece effortlessly elevates any look, worn alone for subtlety or layered for maximum impact.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Store in jewelry box. Avoid water, perfume, and direct sunlight.',
    variants: ['gold', 'silver'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      },
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and color depth.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Austrian Crystals',
    care: 'Clean gently with soft cloth. Avoid swimming and showering.',
    variants: ['gold'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      },
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Our most popular huggie style. The chunky gold dome creates a bold statement while remaining comfortable for all-day wear.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated Brass',
    care: 'Wipe with jewelry cloth after wearing. Store separately.',
    variants: ['gold', 'silver'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1549174446-1b3fe4c3e73e?w=800&q=80',
      },
    ],
    isBestseller: true,
    isNew: false,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Elegant textured gold filigree drop earrings inspired by vintage lace patterns. Each pair is meticulously crafted for intricate detail.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Sterling Silver Base',
    care: 'Keep dry. Clean with soft dry cloth.',
    variants: ['gold'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1635767798638-3665c80d8e97?w=800&q=80',
      },
    ],
    isBestseller: true,
    isNew: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 156,
    description: 'The perfect gift. This beautifully packaged set includes a matching pair of huggie earrings and a delicate pendant necklace. Presented in our signature gift box.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Store in provided gift box. Polish with jewelry cloth.',
    variants: ['gold'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      },
    ],
    isBestseller: true,
    isNew: false,
    isGiftSet: true,
  },
  // Additional products for collection page
  {
    id: 'celestial-drop-earrings',
    name: 'Celestial Drop Earrings',
    slug: 'celestial-drop-earrings',
    category: 'earrings',
    price: 48,
    rating: 4.5,
    reviewCount: 78,
    description: 'Elegant elongated drop earrings with a celestial-inspired design. The subtle sway adds movement and sophistication to any ensemble.',
    shortDescription: 'Elongated celestial drop earrings',
    materials: '18K Gold Plated',
    care: 'Avoid contact with water and perfume.',
    variants: ['gold', 'silver'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      },
    ],
    isBestseller: false,
    isNew: true,
  },
  {
    id: 'luna-pendant-necklace',
    name: 'Luna Pendant Necklace',
    slug: 'luna-pendant-necklace',
    category: 'necklaces',
    price: 56,
    rating: 4.8,
    reviewCount: 112,
    description: 'A delicate crescent moon pendant on a fine gold chain. The perfect everyday piece that adds a touch of celestial magic.',
    shortDescription: 'Crescent moon pendant on fine chain',
    materials: '18K Gold Plated',
    care: 'Store in pouch when not wearing.',
    variants: ['gold', 'silver'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      },
    ],
    isBestseller: false,
    isNew: false,
  },
  {
    id: 'petal-huggies',
    name: 'Petal Huggies',
    slug: 'petal-huggies',
    category: 'huggies',
    price: 32,
    rating: 4.6,
    reviewCount: 189,
    description: 'Soft petal-shaped huggie earrings with a gentle curve. Lightweight and comfortable for everyday elegance.',
    shortDescription: 'Soft petal-shaped huggie earrings',
    materials: '18K Gold Plated Brass',
    care: 'Wipe clean after each wear.',
    variants: ['gold'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      },
    ],
    isBestseller: false,
    isNew: true,
  },
  {
    id: 'avenue-layer-necklace',
    name: 'Avenue Layer Necklace',
    slug: 'avenue-layer-necklace',
    category: 'necklaces',
    price: 62,
    rating: 4.7,
    reviewCount: 94,
    description: 'Three delicate chains of varying lengths create the perfect layered look. Each chain features subtle charm accents.',
    shortDescription: 'Triple chain layered necklace',
    materials: '18K Gold Plated',
    care: 'Tangle-free storage recommended.',
    variants: ['gold'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      },
    ],
    isBestseller: false,
    isNew: false,
  },
  {
    id: 'starlight-stud-earrings',
    name: 'Starlight Stud Earrings',
    slug: 'starlight-stud-earrings',
    category: 'earrings',
    price: 36,
    rating: 4.9,
    reviewCount: 234,
    description: 'Classic star-shaped stud earrings with pavé crystal detailing. A timeless essential for any jewelry collection.',
    shortDescription: 'Star pavé crystal stud earrings',
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Store separately to prevent scratching.',
    variants: ['gold', 'silver'],
    images: [
      {
        primary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        secondary: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      },
    ],
    isBestseller: false,
    isNew: false,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and statement pieces',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chokers, pendants, and chains',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable hoops for everyday',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
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
    name: 'Jessica L.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my mother. The packaging alone made it feel like a luxury experience.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t tarnish! Three months in and still looks brand new. Obsessed.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Everyday elegance ✨',
    author: '@stylebyemma',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'My new favorite piece',
    author: '@luxeliving',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Golden hour glow',
    author: '@jewelrylover',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Gift ready ✨',
    author: '@theeverydaystyle',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Layered perfection',
    author: '@modernromantic',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    caption: 'Weekend vibes',
    author: '@laurie_style',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);

export const getBestsellers = () => products.filter(p => p.isBestseller);

export const getProductsByCategory = (category) => products.filter(p => p.category === category);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
