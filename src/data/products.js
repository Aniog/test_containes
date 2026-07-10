// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    nameLower: 'vivid aura jewels',
    price: 42,
    category: 'earrings',
    tag: 'ear cuff',
    description: 'A delicate gold ear cuff adorned with a shimmering crystal accent. The perfect statement piece that adds instant elegance to any look.',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-free',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Rose Gold'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'majestic-flora-necklace',
    name: 'Majestic Flora Nectar',
    nameLower: 'majestic flora nectar',
    price: 68,
    category: 'necklaces',
    tag: 'crystal necklace',
    description: 'A stunning multicolor floral crystal necklace that catches the light beautifully. Delicate and feminine, perfect for both everyday wear and special occasions.',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic',
    care: 'Store separately to avoid scratching. Clean with a soft, dry cloth. Remove before swimming or bathing.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['Gold'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    nameLower: 'golden sphere huggies',
    price: 38,
    category: 'huggies',
    tag: 'huggie earrings',
    description: 'Chunky gold dome huggie earrings that hug your earlobe perfectly. A modern classic that elevates any outfit with effortless sophistication.',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 156,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    nameLower: 'amber lace earrings',
    price: 54,
    category: 'earrings',
    tag: 'drop earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like details. These statement pieces bring vintage-inspired glamour to your everyday style.',
    materials: '18K Gold Plated, Alloy Base, Hypoallergenic',
    care: 'Keep away from moisture. Store in a jewelry box. Clean with a jewelry polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 67,
    variants: ['Gold'],
    bestseller: true,
    isNew: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    nameLower: 'royal heirloom set',
    price: 95,
    category: 'sets',
    tag: 'gift set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special. Presented in Velmora\'s signature packaging.',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic',
    care: 'Store in the included gift box. Clean gently with a soft cloth. Keep away from perfumes and lotions.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 203,
    variants: ['Gold'],
    bestseller: true,
    isNew: false
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Ear cuffs, drops & studs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chains, pendants & layers' },
  { id: 'huggies', name: 'Huggies', description: 'Mini hoops that hug your ear' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch light beautifully. I\'ve received so many compliments!',
    product: 'Majestic Flora Nectar'
  },
  {
    id: 2,
    name: 'Jessica R.',
    rating: 5,
    text: 'These huggies are perfect for everyday wear. Comfortable, stylish, and the gold stays bright. My new everyday essentials.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 3,
    name: 'Emily K.',
    rating: 5,
    text: 'The gift box set was absolutely beautiful. My mother cried when she opened it. Such elegant packaging and even better jewelry.',
    product: 'Royal Heirloom Set'
  }
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80',
    caption: 'Golden hour glow'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Layered perfection'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Minimalist chic'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
    caption: 'Statement moment'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Huggie heaven'
  }
];
