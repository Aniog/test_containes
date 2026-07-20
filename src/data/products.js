// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-ear-cuff',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-ear-cuff',
    category: 'earrings',
    subcategory: 'ear-cuffs',
    price: 42,
    description: 'A stunning gold ear cuff featuring a delicate crystal accent that catches the light beautifully. This statement piece adds an air of sophistication to any ensemble, from casual daytime looks to evening elegance.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic sterling silver post',
    care: 'Store in the provided pouch when not wearing. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft, dry cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.8,
    reviews: 124,
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-necklace',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-necklace',
    category: 'necklaces',
    subcategory: 'pendant',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring blooms. Each crystal is carefully selected for its unique color gradient, creating a one-of-a-kind piece that transitions seamlessly from day to night.',
    shortDescription: 'Multicolor floral crystal pendant necklace',
    materials: '18K Gold Plated, Multicolor crystals, Hypoallergenic chain',
    care: 'Store in the provided pouch when not wearing. Avoid contact with water and harsh chemicals. Clean crystals gently with a soft brush.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'earrings',
    subcategory: 'huggies',
    price: 38,
    description: 'The perfect everyday huggie earring. These chunky gold dome huggies feature a smooth, polished finish that adds instant elegance to any look. Comfortable to wear and easy to style.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with a soft cloth after wearing. Store separately to prevent scratching. Avoid swimming pools and hot tubs.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 203,
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'earrings',
    subcategory: 'drops',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate detailing catches light from every angle, creating a mesmerizing effect perfect for special occasions or adding drama to everyday style.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Hypoallergenic posts',
    care: 'Handle with care to maintain filigree shape. Store in the provided pouch. Avoid water and perfume contact.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviews: 67,
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'sets',
    subcategory: 'gift-sets',
    price: 95,
    description: 'Our most popular gift set, beautifully packaged in a signature Velmora gift box. Includes a delicate pair of stud earrings and a matching pendant necklace that create a cohesive, elegant look. The perfect gift for yourself or someone special.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Hypoallergenic materials',
    care: 'Store in gift box when not wearing. Clean with soft cloth. Avoid contact with water and chemicals.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 5.0,
    reviews: 156,
    featured: true,
    bestseller: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    count: products.filter(p => p.category === 'earrings').length,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    count: products.filter(p => p.category === 'necklaces').length,
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable everyday elegance',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80',
    count: products.filter(p => p.subcategory === 'huggies').length,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeded my expectations for the price point. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift for my wife. The packaging alone made it feel like a luxury purchase.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found jewelry that is both elegant and affordable. The Amber Lace Earrings are my new favorite piece!',
    product: 'Amber Lace Earrings',
  },
];

export const ugcImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80',
    caption: 'Statement earrings',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Layered perfection',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop&q=80',
    caption: 'Gift-ready luxury',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'Gold goddess',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop&q=80',
    caption: 'Date night ready',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getBestsellers = () => products.filter(p => p.bestseller);
export const getFeatured = () => products.filter(p => p.featured);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
