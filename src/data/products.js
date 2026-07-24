export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A stunning gold ear cuff with crystal accent, designed to make a statement. The delicate crystal catches light beautifully, adding sparkle to any look.',
    shortDescription: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
    badge: null,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its unique hue, creating a gradient effect that flows like nectar through petals.',
    shortDescription: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    variants: [
      { name: 'Gold Chain', value: 'gold', inStock: true },
      { name: 'Silver Chain', value: 'silver', inStock: true },
    ],
    isBestseller: true,
    isNew: true,
    badge: 'New Arrival',
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with elegant simplicity. The smooth, polished spheres create a luxurious look perfect for everyday wear or special occasions.',
    shortDescription: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 203,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Rose Gold', value: 'rose-gold', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
    badge: null,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Each pair is crafted with precision, creating an heirloom-quality piece that transitions beautifully from day to evening.',
    shortDescription: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
    ],
    rating: 4.6,
    reviewCount: 67,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: false },
    ],
    isBestseller: false,
    isNew: true,
    badge: 'Limited',
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A gift-boxed earring and necklace set that makes the perfect present. Both pieces feature the same elegant design language, creating a coordinated look that feels both luxurious and timeless.',
    shortDescription: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    rating: 5.0,
    reviewCount: 156,
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
    ],
    isBestseller: true,
    isNew: false,
    badge: 'Bestseller',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
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
    text: 'Purchased the Royal Heirloom Set as a gift - the packaging alone made it feel so luxurious. My sister loved it.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive without the designer price tag. Velmora is now my go-to.',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop',
    caption: 'My new favorite huggies',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Statement earcuff life',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Layered necklace dreams',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Date night ready',
  },
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getRelatedProducts = (productId, limit = 4) => 
  products.filter(p => p.id !== productId).slice(0, limit);
