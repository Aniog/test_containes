export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    originalPrice: null,
    category: 'earrings',
    tags: ['ear cuff', 'crystal', 'bestseller'],
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff adorned with a delicate crystal accent that catches the light with every turn. Designed to sit comfortably on the ear without piercing, the Vivid Aura Jewels piece adds instant sophistication to any look.',
    materials: '18K gold-plated brass, cubic zirconia crystal accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry, airtight pouch. Avoid contact with perfumes, lotions, and water. Clean gently with a soft cloth.',
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    defaultVariant: 'gold',
    images: [
      { id: 'img1', alt: 'Vivid Aura Jewels gold ear cuff on model' },
      { id: 'img2', alt: 'Vivid Aura Jewels close-up detail' },
      { id: 'img3', alt: 'Vivid Aura Jewels silver variant' },
    ],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    originalPrice: 85,
    category: 'necklaces',
    tags: ['necklace', 'floral', 'crystal', 'multicolor', 'bestseller'],
    rating: 4.9,
    reviewCount: 89,
    description: 'A dreamy floral necklace featuring hand-set multicolor crystals that bloom across a delicate gold chain. The Majestic Flora Nectar is a statement piece that transitions effortlessly from day to evening.',
    materials: '18K gold-plated stainless steel, hand-set glass crystals in blush, champagne, and clear. Lead-free and nickel-free.',
    care: 'Lay flat when storing to prevent tangling. Keep away from moisture and harsh chemicals. Wipe after each wear.',
    variants: [
      { id: 'gold', label: 'Gold', available: true },
    ],
    defaultVariant: 'gold',
    images: [
      { id: 'img1', alt: 'Majestic Flora Nectar necklace on model' },
      { id: 'img2', alt: 'Majestic Flora Nectar detail shot' },
      { id: 'img3', alt: 'Majestic Flora Nectar flat lay' },
    ],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    originalPrice: null,
    category: 'huggies',
    tags: ['huggies', 'hoop', 'chunky', 'bestseller'],
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky yet refined, these dome-shaped huggie earrings hug the earlobe with a satisfying weight and mirror-like polish. The Golden Sphere Huggies are your new everyday signature.',
    materials: '18K gold-plated surgical steel. Hypoallergenic and tarnish-resistant.',
    care: 'Remove before showering or swimming. Polish with a jewelry cloth to maintain shine.',
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    defaultVariant: 'gold',
    images: [
      { id: 'img1', alt: 'Golden Sphere Huggies on ear' },
      { id: 'img2', alt: 'Golden Sphere Huggies pair' },
      { id: 'img3', alt: 'Golden Sphere Huggies silver variant' },
    ],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    originalPrice: null,
    category: 'earrings',
    tags: ['drop earrings', 'filigree', 'textured', 'bestseller'],
    rating: 4.6,
    reviewCount: 76,
    description: 'Inspired by vintage lacework, these textured filigree drop earrings feature an intricate open-weave pattern in warm gold. The Amber Lace Earrings sway beautifully and frame the face with romantic elegance.',
    materials: '18K gold-plated brass with textured filigree detail. Lightweight and comfortable for all-day wear.',
    care: 'Store hanging or flat to preserve shape. Avoid bending or crushing. Clean with a dry soft cloth only.',
    variants: [
      { id: 'gold', label: 'Gold', available: true },
    ],
    defaultVariant: 'gold',
    images: [
      { id: 'img1', alt: 'Amber Lace Earrings on model' },
      { id: 'img2', alt: 'Amber Lace Earrings detail' },
      { id: 'img3', alt: 'Amber Lace Earrings flat lay' },
    ],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    originalPrice: 120,
    category: 'sets',
    tags: ['gift set', 'earrings', 'necklace', 'bestseller'],
    rating: 5.0,
    reviewCount: 53,
    description: 'The perfect gift, beautifully boxed. The Royal Heirloom Set pairs our bestselling huggie earrings with a delicate pendant necklace, both in warm 18K gold plating. A ready-to-give treasure.',
    materials: '18K gold-plated stainless steel earrings and necklace set. Includes signature Velmora gift box and ribbon.',
    care: 'Store in the provided gift box. Keep pieces separated to avoid scratching. Follow individual care guidelines for each piece.',
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: false },
    ],
    defaultVariant: 'gold',
    images: [
      { id: 'img1', alt: 'Royal Heirloom Set gift box' },
      { id: 'img2', alt: 'Royal Heirloom Set necklace detail' },
      { id: 'img3', alt: 'Royal Heirloom Set earrings detail' },
    ],
    inStock: true,
  },
];

export const CATEGORIES = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'From delicate studs to sculptural drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Layered chains and statement pendants',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    description: 'Effortless hoops that hug the ear',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'The quality exceeded my expectations. The gold plating still looks brand new after months of daily wear. I\'ve already ordered three more pieces.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was gorgeous and she hasn\'t taken the earrings off since.',
  },
  {
    id: 3,
    name: 'Ava L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive without the luxury markup. The huggies are my everyday go-to.',
  },
];

export const UGC_REELS = [
  {
    id: 1,
    caption: 'Daily sparkle with my Golden Sphere Huggies',
    author: '@sophiastyles',
  },
  {
    id: 2,
    caption: 'Layering game strong today',
    author: '@emilyfashion',
  },
  {
    id: 3,
    caption: 'Obsessed with this ear cuff moment',
    author: '@avajewels',
  },
  {
    id: 4,
    caption: 'Gifted myself the Flora Nectar necklace',
    author: '@michelleluxe',
  },
  {
    id: 5,
    caption: 'Minimal but make it gold',
    author: '@rachelelegant',
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(currentSlug, limit = 4) {
  return PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}