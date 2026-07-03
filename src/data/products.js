// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    description: 'A captivating gold ear cuff featuring a delicate crystal accent. This statement piece adds effortless elegance to any look, day or evening.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia Crystal, Hypoallergenic',
    care: 'Store in provided pouch. Avoid contact with water, perfume, and harsh chemicals. Clean gently with a soft cloth.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming gardens. Each crystal is carefully selected for its unique color gradient, creating a one-of-a-kind piece that transitions beautifully from day to evening wear.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic Chain',
    care: 'Store flat to maintain shape. Clean crystals with a soft, dry cloth. Avoid submerging in water.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    description: 'Our signature chunky gold dome huggie earrings. The perfect everyday essential that adds a touch of luxury to your look without overwhelming. These huggies hug close to the ear for a comfortable, polished finish.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Surgical Steel Post, Hypoallergenic',
    care: 'Wipe with soft cloth after wear. Store separately to prevent scratching. The surgical steel posts are gentle for sensitive ears.',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is crafted with meticulous attention to detail, creating a delicate yet eye-catching statement piece perfect for special occasions.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass Base, Hypoallergenic Posts',
    care: 'Store in cool, dry place. Clean with jewelry polishing cloth. Avoid contact with water and cosmetics.',
    rating: 4.8,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: ['Gold'],
    isBestseller: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    description: 'The perfect gift, beautifully packaged in our signature gift box. This curated set includes a pair of classic gold stud earrings and a delicate pendant necklace. Ideal for marking special moments or treating yourself to a complete look.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic',
    care: 'Store in provided gift box. Remove before swimming or showering. Polish gently with soft cloth to maintain shine.',
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['Gold'],
    isBestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & statement pieces' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chokers, pendants & chains' },
  { id: 'huggies', name: 'Huggies', description: 'Classic & modern hoop styles' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning jewelry. The quality exceeds expectations at this price point. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the jewelry itself is even more beautiful in person. Will definitely be ordering again.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green! The gold finish has lasted months and still looks brand new.',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Everyday elegance ✨',
    tag: '@sarah_styles',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'My new favorite piece',
    tag: '@emily.r',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Weekend vibes',
    tag: '@jessica.lux',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Gift for myself',
    tag: '@mia.gram',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Love these huggies',
    tag: '@alexandrav',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Perfect layering',
    tag: '@grace.b',
  },
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getBestsellers = () => {
  return products.filter(p => p.isBestseller);
};
