export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'Delicate gold ear cuff with floating crystal accent. Effortlessly elevates any look from day to evening.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviewCount: 156,
    materials: '18K Gold Plated, Hypoallergenic, Crystal Accent',
    care: 'Avoid contact with water and perfumes. Store in the provided pouch when not wearing. Clean gently with a soft cloth.',
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'Multicolor floral crystal pendant on delicate gold chain. A garden of sparkle around your neck.',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 203,
    materials: '18K Gold Plated Chain, Multicolor Crystal Pendant, Hypoallergenic',
    care: 'Remove before swimming or showering. Avoid impact and friction. Polish gently with a jewelry cloth.',
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings with high-shine finish. Modern classics you\'ll reach for daily.',
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 312,
    materials: '18K Gold Plated, Hypoallergenic, High-Polish Finish',
    care: 'Wipe clean with a soft cloth after wearing. Store separately to prevent scratching.',
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings with intricate lace pattern. Victorian elegance meets modern ease.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 89,
    materials: '18K Gold Plated, Filigree Detail, Hypoallergenic',
    care: 'Handle with care due to delicate design. Store flat or hanging to maintain shape. Clean with compressed air.',
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'Gift-boxed earring and necklace set in keepsake packaging. The perfect present (including for yourself).',
    category: 'sets',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    rating: 5.0,
    reviewCount: 67,
    materials: '18K Gold Plated, Comes in Gift Box, Hypoallergenic',
    care: 'Keep in gift box when not wearing. Follow individual piece care instructions for longevity.',
    bestseller: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops, and ear cuffs',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layers',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Classic and modern hoops',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I receive compliments every time I wear my Golden Sphere Huggies.',
    rating: 5,
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Finally, gold jewelry that doesn\'t turn green. Velmora is now my go-to for gifts.',
    rating: 5,
    product: 'Majestic Flora Nectar',
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'The Royal Heirloom Set was perfect for my anniversary. The packaging is stunning.',
    rating: 5,
    product: 'Royal Heirloom Set',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80',
    caption: 'Everyday elegance ✨',
    handle: '@stylebyemma',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'My new favorite pair',
    handle: '@sarahstyles',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Golden hour glow',
    handle: '@luxe_life_jewelry',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Layered perfection',
    handle: '@fashionista_j',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Everyday luxury',
    handle: '@jewelry_love_',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Brb, just admiring',
    handle: '@minimalist_style',
  },
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

export function getBestsellers() {
  return products.filter(p => p.bestseller);
}
