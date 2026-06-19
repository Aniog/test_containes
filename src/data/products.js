// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    subcategory: 'ear-cuff',
    description: 'A sculptural ear cuff with a striking crystal accent. This piece wraps the ear in 18K gold plating, creating an effortlessly editorial look. The central crystal catches light from every angle, making it perfect for evening wear or everyday elegance.',
    materials: '18K Gold Plated Brass, Austrian Crystal',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    subcategory: 'crystal',
    description: 'A cascading necklace featuring multicolor floral crystals that create a garden-inspired symphony. Each crystal is carefully selected for its clarity and color gradient, from soft rose to deep amethyst. A statement piece that transforms any outfit.',
    materials: '18K Gold Plated Brass, Multicolor Austrian Crystals',
    care: 'Avoid contact with water and harsh chemicals. Remove before swimming or showering. Store flat to prevent tangling.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'earrings',
    subcategory: 'huggies',
    description: 'Chunky dome huggie earrings that make an immediate impact. These substantial hoops hug close to the ear, creating a clean silhouette with maximum presence. The smooth, polished surface reflects light beautifully.',
    materials: '18K Gold Plated Brass',
    care: 'Wipe with a soft cloth after wearing. Store separately to prevent scratching. Avoid contact with abrasive surfaces.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    subcategory: 'drop',
    description: 'Delicate filigree drop earrings featuring intricate gold work that evokes antique lace. The openwork design creates an ethereal quality, catching light through the negative space. A refined choice for those who appreciate detailed craftsmanship.',
    materials: '18K Gold Plated Brass',
    care: 'Handle with care to maintain the delicate filigree. Store in the provided box. Clean with a soft, dry cloth only.',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    subcategory: 'gift-set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The pieces share a cohesive design language of softly hammered gold surfaces and organic curves. Presented in Velmora\'s signature gift box with ribbon closure — perfect for gifting or treating yourself.',
    materials: '18K Gold Plated Brass',
    care: 'Store the complete set together in the gift box. Polish gently with a jewelry cloth as needed.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold'],
    rating: 5.0,
    reviewCount: 156,
    featured: true,
    bestseller: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From sculptural cuffs to delicate drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and statement pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Chunky hoops that hug close',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I get compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift. The packaging alone made it feel luxurious. My sister was thrilled.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Olivia R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green. Six months in and still looks brand new.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'My new obsession',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Gold season',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Gift ready',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&q=80',
    caption: 'Date night vibes',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    caption: 'Layering season',
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getBestsellers() {
  return products.filter((p) => p.bestseller);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, limit);
}