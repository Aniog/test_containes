// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff adorned with a brilliant crystal accent. This piece adds instant glamour to any look, day or evening. The adjustable design fits comfortably and pairs beautifully with studs or worn alone.',
    materials: '18K gold plated, cubic zirconia crystal, hypoallergenic sterling silver base',
    care: 'Store in the provided pouch when not wearing. Avoid contact with water, perfume, and harsh chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-necklace',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that catches light from every angle. Each crystal is carefully selected for its brilliance and color depth, creating a truly statement piece.',
    materials: '18K gold plated, multicolor Austrian crystals, hypoallergenic sterling silver base',
    care: 'Store flat to maintain the necklace shape. Avoid swimming and showering. Polish with a jewelry cloth to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599458252573-56ae36120de1?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['Gold'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere',
    price: 38,
    category: 'huggies',
    description: 'Our signature chunky gold dome huggie earrings. These substantial yet lightweight hoops hug the earlobe perfectly, creating maximum impact with minimal effort. The perfect everyday luxury.',
    materials: '18K gold plated, hypoallergenic stainless steel base',
    care: 'Apply beauty products before wearing. Store separately to prevent scratching. Wipe with soft cloth after wearing.',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like detailing. These romantic, feminine earrings swing gently with movement, catching light beautifully.',
    materials: '18K gold plated, hypoallergenic brass base',
    care: 'Keep away from water and moisture. Store in the provided box. Handle with care to preserve the delicate filigree work.',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 67,
    variants: ['Gold'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom',
    price: 95,
    category: 'sets',
    description: 'The perfect gift, beautifully packaged in our signature gift box. This curated set includes a pair of elegant drop earrings and a delicate pendant necklace, designed to be worn together or separately. A true treasure.',
    materials: '18K gold plated, cubic zirconia, hypoallergenic sterling silver base',
    care: 'Store in the gift box provided. Clean pieces separately. Avoid contact with water and chemicals.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 156,
    variants: ['Gold'],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants & chains' },
  { id: 'huggies', name: 'Huggies', description: 'Hoops & huggie earrings' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. The gold doesn\'t tarnish and the crystals catch light beautifully. I receive compliments every time I wear them.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife was speechless. The packaging is just as luxurious as the jewelry itself.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that looks expensive but doesn\'t break the bank. The Golden Sphere Huggies are my daily go-to.',
    product: 'Golden Sphere Huggies',
  },
];

export const ugcImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Date night ready',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Layered & loved',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Gift giving season',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Statement pieces',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=711&fit=crop',
    caption: 'Minimalist charm',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
