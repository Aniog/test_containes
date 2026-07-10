// Velmora Fine Jewelry - Seed Product Data
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime to elegant evening ensembles.',
    shortDescription: 'Gold ear cuff with crystal accent',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    tags: ['ear-cuff', 'crystal', 'gold'],
    rating: 4.8,
    reviewCount: 124,
    variants: [
      { name: 'Gold', color: '#c9a962' },
      { name: 'Rose Gold', color: '#d4a574' },
      { name: 'Silver', color: '#c0c0c0' },
    ],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    badge: 'Bestseller',
    materials: '18K Gold Plated, Cubic Zirconia Crystal, Hypoallergenic Stainless Steel',
    care: 'Avoid contact with water, perfumes, and cosmetics. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of blooming gardens. Each crystal is carefully selected for its brilliance and color depth.',
    shortDescription: 'Multicolor floral crystal necklace',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    tags: ['crystal', 'floral', 'multicolor'],
    rating: 4.9,
    reviewCount: 89,
    variants: [
      { name: 'Gold Chain', color: '#c9a962' },
      { name: 'Silver Chain', color: '#c0c0c0' },
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    badge: 'New',
    materials: 'Alloy Base, Austrian Crystals, 18K Gold Plated Chain',
    care: 'Remove before swimming or showering. Avoid contact with harsh chemicals. Store separately to prevent scratching.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    description: 'Our signature chunky gold dome huggie earrings. The perfect everyday essential that adds a touch of luxury to any outfit without overwhelming your look.',
    shortDescription: 'Chunky gold dome huggie earrings',
    price: 38,
    comparePrice: 48,
    category: 'huggies',
    tags: ['huggies', 'gold', 'minimalist'],
    rating: 4.7,
    reviewCount: 203,
    variants: [
      { name: 'Gold', color: '#c9a962' },
      { name: 'Rose Gold', color: '#d4a574' },
    ],
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    badge: null,
    materials: '18K Gold Plated, High-Quality Brass, Hypoallergenic',
    care: 'Wipe with soft cloth after wearing. Keep away from moisture. Store in provided pouch when not in use.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. A statement piece that commands attention while maintaining elegant refinement.',
    shortDescription: 'Textured gold filigree drop earrings',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    tags: ['drop-earrings', 'filigree', 'gold'],
    rating: 4.6,
    reviewCount: 67,
    variants: [
      { name: 'Gold', color: '#c9a962' },
      { name: 'Antique Gold', color: '#b8956e' },
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    ],
    badge: 'Limited',
    materials: '18K Gold Plated Brass, Detailed Filigree Work',
    care: 'Handle with care to preserve delicate details. Clean gently with a dry cloth. Avoid water and chemicals.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    description: 'The perfect gift, beautifully packaged in a luxurious gift box. This curated set includes a pair of elegant stud earrings and a delicate pendant necklace that complement each other flawlessly.',
    shortDescription: 'Gift-boxed earring + necklace set',
    price: 95,
    comparePrice: 120,
    category: 'sets',
    tags: ['gift-set', 'earrings', 'necklace', 'gift-boxed'],
    rating: 4.9,
    reviewCount: 156,
    variants: [
      { name: 'Gold', color: '#c9a962' },
      { name: 'Rose Gold', color: '#d4a574' },
    ],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    badge: 'Best Gift',
    materials: '18K Gold Plated, Cubic Zirconia, Premium Gift Box Included',
    care: 'Store in provided gift box. Clean with soft cloth. Avoid contact with water and perfumes.',
    shipping: 'Free worldwide shipping. Elegant gift packaging included. 30-day hassle-free returns.',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, studs, and drop earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    count: 2,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and statement pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    count: 1,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Classic and modern hoop earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    count: 1,
  },
  {
    id: 'sets',
    name: 'Gift Sets',
    description: 'Curated jewelry sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    count: 1,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning pieces. The quality exceeded my expectations. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife was speechless. Beautifully packaged and delivered promptly.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green! The Vivid Aura Jewels are my everyday go-to. Obsessed with this brand.',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Everyday elegance ✨',
    author: '@stylebyemma',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    caption: 'My new favorite pieces',
    author: '@luxe.living',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Date night ready 💫',
    author: '@sarah.joy',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80',
    caption: 'Layering goals',
    author: '@jewelry.lover',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Golden hour glow',
    author: '@modern.minimalist',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Weekend vibes',
    author: '@chic.and.simple',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.slice(0, 5);
