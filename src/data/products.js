export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'An exquisite gold ear cuff adorned with a brilliant crystal accent. The delicate chain design wraps gracefully around the ear, creating an effortlessly elegant look perfect for both day and evening wear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-Free',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    variants: ['Gold', 'Rose Gold'],
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal petal is carefully set to create a stunning gradient effect that catches light beautifully.',
    shortDescription: 'Multicolor floral crystal statement necklace',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic',
    care: 'Store separately to avoid scratching. Clean with a soft jewelry cloth. Avoid submerging in water.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    badge: 'New'
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, bold, and beautifully balanced. These dome huggie earrings make a statement while remaining comfortable for all-day wear. The smooth gold finish adds a luxurious touch to any ensemble.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic, Lightweight',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch to maintain shine.',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller'
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Intricate textured gold filigree drop earrings inspired by vintage lace patterns. The openwork design creates delicate movement, while the warm amber tones add depth and richness to your look.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Oxidized Finish, Hypoallergenic',
    care: 'Avoid exposure to water and perfumes. Clean carefully with a soft-bristled brush.',
    rating: 4.9,
    reviews: 73,
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80'
    ],
    variants: ['Gold'],
    badge: null
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A curated gift-boxed set featuring an exquisite pair of drop earrings and a matching delicate necklace. Perfect for gifting or treating yourself to a complete look. Arrives in luxurious packaging.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Genuine Gemstones, Hypoallergenic',
    care: 'Store in the provided gift box. Clean with a soft cloth. Remove before swimming or exercising.',
    rating: 5.0,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    variants: ['Gold', 'Rose Gold'],
    badge: 'Gift Set'
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Ear cuffs, studs, and drops', count: 2 },
  { id: 'necklaces', name: 'Necklaces', description: 'Chokers, chains, and pendants', count: 1 },
  { id: 'huggies', name: 'Huggies', description: 'Classic and modern hoop earrings', count: 1 },
  { id: 'sets', name: 'Sets', description: 'Coordinated gift sets', count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch the light beautifully. I receive compliments every time I wear them.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'The Royal Heirloom Set was perfect for my anniversary. The packaging alone made it feel like a luxury experience. My wife was thrilled!',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that actually looks expensive. The attention to detail is remarkable, and the prices are so accessible.',
    product: 'Amber Lace Earrings'
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop',
    caption: 'Golden hour, golden glow ✨',
    username: '@stylebyjules'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=400&h=711&fit=crop',
    caption: 'My everyday essentials',
    username: '@thestyleedit'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Obsessed with these huggies',
    username: '@fashionforwardmia'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'Date night ready',
    username: '@elegant everyday'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Layering is everything',
    username: '@jewelrylover_nyc'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
    caption: 'Gift for myself',
    username: '@selfcare.sunday'
  }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.badge === 'Bestseller');
