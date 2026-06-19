// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff featuring crystal accents that catch the light beautifully. This piece adds effortless elegance to any look, day or evening.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystals, Hypoallergenic stainless steel',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in a cool, dry place. Clean gently with a soft cloth.',
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    images: {
      primary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    },
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that blooms with every movement. Each crystal is carefully selected for its brilliance and color saturation.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Austrian crystals, Hypoallergenic stainless steel chain',
    care: 'Avoid swimming and showering. Apply perfume before wearing. Wipe with jewelry cloth after each wear.',
    rating: 4.9,
    reviews: 89,
    variants: ['Gold', 'Rose Gold'],
    images: {
      primary: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=600&h=600&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    },
    badge: 'New',
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Our signature chunky gold dome huggie earrings. These statement pieces are lightweight yet impactful, perfect for everyday luxury.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Lightweight resin core, Hypoallergenic posts',
    care: 'Store separately to prevent scratching. Clean with mild soap and water. Pat dry immediately.',
    rating: 4.7,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    images: {
      primary: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
    },
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Elegant textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is a work of art, hand-finished for perfection.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated brass, Hand-painted enamel details, Gold-plated hooks',
    care: 'Keep away from moisture. Store in the provided pouch. Handle with care to maintain filigree detail.',
    rating: 4.9,
    reviews: 67,
    variants: ['Gold', 'Antique Gold'],
    images: {
      primary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
    },
    badge: null,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special, presented in our signature Velmora box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, AAA Quality cubic zirconia, Luxury gift box included',
    care: 'Follow individual care instructions for each piece. Store in the provided gift box when not in use.',
    rating: 5.0,
    reviews: 156,
    variants: ['Gold', 'Rose Gold', 'Silver'],
    images: {
      primary: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=600&fit=crop',
      secondary: 'https://images.unsplash.com/photo-1616428218616-a15f8f64e13e?w=600&h=600&fit=crop',
    },
    badge: 'Gift Set',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to statement pieces',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800&h=1000&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. Beautiful packaging too.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but doesn\'t break the bank. Velmora is my new favorite brand.',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'Monday mood 💛',
    tag: '@velmora',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Stack goals',
    tag: '@velmora',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Golden hour, golden jewels',
    tag: '@velmora',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'Layered perfection',
    tag: '@velmora',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Everyday luxury',
    tag: '@velmora',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
    caption: 'Statement ready',
    tag: '@velmora',
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter((p) => p.category === category);
};