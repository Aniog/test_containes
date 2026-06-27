export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a shimmering crystal accent. This piece effortlessly elevates any look, from casual daytime to evening elegance.',
    shortDescription: 'Gold ear cuff with crystal accent',
    variants: ['Gold', 'Rose Gold'],
    materials: '18K Gold Plated, Cubic Zirconia crystals, Hypoallergenic stainless steel',
    care: 'Avoid water, perfume, and harsh chemicals. Store in the provided pouch when not wearing.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    badge: null,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal is carefully selected for its brilliance and color harmony.',
    shortDescription: 'Multicolor floral crystal necklace',
    variants: ['Gold', 'Silver'],
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic stainless steel chain',
    care: 'Avoid water and cosmetics. Clean gently with a soft cloth. Store separately to prevent scratching.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    badge: 'Bestseller',
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished spheres catch light beautifully, adding warmth and sophistication to any ensemble.',
    shortDescription: 'Chunky gold dome huggie earrings',
    variants: ['Gold', 'Silver'],
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with soft cloth after wearing. Store in jewelry box. Avoid contact with water.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    badge: null,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 67,
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. Delicate yet eye-catching, these earrings bring old-world charm to modern style.',
    shortDescription: 'Textured gold filigree drop earrings',
    variants: ['Gold'],
    materials: '18K Gold Plated, Hypoallergenic stainless steel posts',
    care: 'Handle with care to maintain filigree shape. Store flat to prevent bending. Clean with soft brush.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    badge: 'New',
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviewCount: 43,
    description: 'A luxurious gift-boxed set featuring a stunning pair of earrings and a coordinating necklace. Perfect for gifting or treating yourself to a complete look.',
    shortDescription: 'Gift-boxed earring + necklace set',
    variants: ['Gold', 'Rose Gold'],
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic stainless steel',
    care: 'Store in original gift box. Clean with jewelry cloth. Avoid swimming and showering.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    badge: 'Gift Set',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer with ease, wear with joy',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that is both beautiful and comfortable. The Majestic Flora necklace is my everyday staple.',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'The Royal Heirloom Set made the perfect anniversary gift. My wife was absolutely thrilled.',
    product: 'Royal Heirloom Set',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Stacked & styled',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Layered luxury',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Minimalist charm',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    caption: 'Effortless chic',
  },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedProducts(currentProduct, limit = 4) {
  return products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, limit);
}

export function getBestsellers() {
  return products.slice(0, 5);
}
