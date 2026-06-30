// Velmora Fine Jewelry — Product Data

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'earrings',
    price: 42,
    description: 'An elegant ear cuff adorned with a subtle crystal accent, designed to hug the curve of your ear with effortless grace. Stack multiple for a bolder statement or wear solo for understated elegance.',
    shortDescription: 'Crystal-accented gold ear cuff',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic sterling silver base',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'necklaces',
    price: 68,
    description: 'A stunning multicolor crystal necklace inspired by blooming florals. Each crystal catches the light beautifully, creating a mesmerizing display of color and sparkle. The perfect statement piece for special occasions.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Cubic Zirconia crystals, Hypoallergenic base metal',
    care: 'Store separately to avoid scratching. Clean with a jewelry polishing cloth. Remove before swimming or showering.',
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'huggies',
    price: 38,
    description: 'Chunky, bold, and beautifully crafted. These dome-style huggie earrings hug your earlobe with a perfect fit. The smooth gold spheres catch light from every angle for all-day sparkle.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic surgical steel',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid harsh chemicals and moisture.',
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1564163763543-5d60dc9b4f58?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'earrings',
    price: 54,
    description: 'Delicate filigree detailing meets modern elegance in these textured drop earrings. The intricate lace-like pattern creates beautiful depth and shimmer, perfect for elevating any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Hypoallergenic brass base',
    care: 'Store in a jewelry box to prevent tangling. Clean with a dry cloth. Keep away from water and perfume.',
    rating: 4.8,
    reviewCount: 76,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold'],
    badge: null,
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'sets',
    price: 95,
    description: 'The perfect gift, elegantly boxed. This curated set includes a pair of classic huggie earrings and a delicate chain necklace that layer beautifully together. An instant jewelry wardrobe essential.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Hypoallergenic base metal, Premium gift box included',
    care: 'Store in the provided gift box. Clean each piece gently before storing. Handle with care to maintain shine.',
    rating: 4.9,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    variants: ['Gold + Gold', 'Gold + Silver'],
    badge: 'Gift Set',
    featured: true,
    bestseller: true,
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
    description: 'Dome & oversized hoops',
    image: 'https://images.unsplash.com/photo-1564163763543-5d60dc9b4f58?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for myself and I\'m obsessed. The packaging alone makes you feel luxurious.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabella K.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that doesn\'t turn green! I\'ve worn my Amber Lace Earrings every single day since they arrived.',
    product: 'Amber Lace Earrings',
  },
];

export const ugcImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&q=80',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Golden hour, golden glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Layered in luxury',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Stack & slay',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Minimalist moments',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
    caption: 'Gift giving season',
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter((p) => p.category === category);
};

export const getBestsellers = () => {
  return products.filter((p) => p.bestseller);
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured);
};
