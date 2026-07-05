export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement.',
    shortDescription: 'Gold ear cuff with crystal accent',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    bestseller: true,
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A cascading floral pendant featuring multicolor crystals set in 18K gold-plated brass. A statement piece for special occasions.',
    shortDescription: 'Multicolor floral crystal necklace',
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: false },
    ],
    bestseller: true,
    related: ['royal-heirloom-set'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings with a polished finish. Everyday luxury that pairs with everything.',
    shortDescription: 'Chunky gold dome huggie earrings',
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    bestseller: true,
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Lightweight yet statement-making.',
    shortDescription: 'Textured gold filigree drop earrings',
    rating: 4.6,
    reviewCount: 67,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    bestseller: true,
    related: ['vivid-aura-jewels', 'golden-sphere-huggies'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    description: 'A gift-boxed earring and necklace set in matching gold tones. The perfect present for someone special.',
    shortDescription: 'Gift-boxed earring + necklace set',
    rating: 5.0,
    reviewCount: 45,
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    ],
    variants: [
      { id: 'gold', name: 'Gold', available: true },
      { id: 'silver', name: 'Silver', available: true },
    ],
    bestseller: true,
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Vivid Aura cuff gets compliments every time I wear it.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. The Golden Sphere Huggies are my everyday go-to.',
  },
]

export const ugcPosts = [
  { id: 1, caption: 'Ear stack goals', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
  { id: 2, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 3, caption: 'Layered perfection', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { id: 4, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80' },
  { id: 5, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80' },
  { id: 6, caption: 'Gift of gold', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
]
