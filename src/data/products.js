export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'earrings',
    price: 42,
    description:
      'A sculptural gold ear cuff adorned with a brilliant crystal accent. Wears solo for understated elegance or stacked for full drama. Light-catching, effortless, everyday.',
    shortDescription: 'Gold ear cuff with crystal accent',
    material: '18K Gold Plated, Crystal',
    care: 'Avoid water, perfume, and direct sunlight. Store in the provided pouch when not wearing.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    variants: [{ name: 'Gold', value: 'gold', color: '#D4A853' }],
    badge: null,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'necklaces',
    price: 68,
    description:
      'A cascading multicolor floral crystal pendant necklace that captures light from every angle. The perfect statement piece for脖颈 and décolletage. Makes a memorable gift.',
    shortDescription: 'Multicolor floral crystal necklace',
    material: '18K Gold Plated, Multicolor Crystals',
    care: 'Gently wipe with a soft cloth after wearing. Avoid contact with liquids and chemicals.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    variants: [{ name: 'Gold', value: 'gold', color: '#D4A853' }],
    badge: 'Bestseller',
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'huggies',
    price: 38,
    description:
      'Chunky dome huggie earrings that hug the lobe with a satisfying weight. Polished to a high shine, these are the everyday essential your collection is missing.',
    shortDescription: 'Chunky gold dome huggie earrings',
    material: '18K Gold Plated',
    care: 'Wipe with a dry cloth after use. Avoid swimming and showering to maintain the gold finish.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    variants: [{ name: 'Gold', value: 'gold', color: '#D4A853' }, { name: 'Silver', value: 'silver', color: '#C0C0C0' }],
    badge: null,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'earrings',
    price: 54,
    description:
      'Textured gold filigree drop earrings with intricate openwork detail. Lightweight despite their dramatic length — comfortable enough for all-day wear, striking enough for evening.',
    shortDescription: 'Textured gold filigree drop earrings',
    material: '18K Gold Plated',
    care: 'Store separately to avoid scratching. Clean with a jewelry polishing cloth only.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 71,
    variants: [{ name: 'Gold', value: 'gold', color: '#D4A853' }],
    badge: 'New',
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'sets',
    price: 95,
    description:
      'A beautifully packaged gift-boxed set of matching earrings and necklace. The perfect present for graduations, anniversaries, birthdays, or just because. Presented in a signature Velmora box.',
    shortDescription: 'Gift-boxed earring and necklace set',
    material: '18K Gold Plated',
    care: 'Follow individual care instructions for each piece. Store the set together in its box.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 56,
    variants: [{ name: 'Gold', value: 'gold', color: '#D4A853' }],
    badge: 'Gift Set',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely unreal for the price. I get compliments every single time I wear them. Already ordered my third pair.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my sister and she cried. The packaging alone is worth it. Velmora has a customer for life.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that doesn’t turn green or fall apart. These feel like real fine jewelry. Obsessed.',
    product: 'Amber Lace Earrings',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs · Drops · Climbers',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains · Pendants · Layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Dome · Crystal · Classic',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug) || null;

export const getRelatedProducts = (productId, limit = 4) =>
  products.filter((p) => p.id !== productId).slice(0, limit);

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Layered & loved',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Stacked & styled',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Gift-ready always',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Everyday luxury',
  },
];
