export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every turn of your head — effortless elegance for the modern woman.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    variants: [
      { id: 'gold', label: 'Gold Tone', price: 42 },
      { id: 'silver', label: 'Silver Tone', price: 42 },
    ],
    images: [
      { id: 'vivid-aura-1', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-2', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-3', ratio: '3x4', width: 800 },
    ],
    bestseller: true,
    related: ['golden-sphere-huggies', 'amber-lace-earrings'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    description: 'A cascading floral pendant necklace featuring multicolor crystals set in 18K gold-plated brass. Each petal is hand-finished for a luminous, garden-inspired look.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    variants: [
      { id: 'gold', label: 'Gold Tone', price: 68 },
      { id: 'silver', label: 'Silver Tone', price: 68 },
    ],
    images: [
      { id: 'majestic-flora-1', ratio: '3x4', width: 800 },
      { id: 'majestic-flora-2', ratio: '3x4', width: 800 },
      { id: 'majestic-flora-3', ratio: '3x4', width: 800 },
    ],
    bestseller: true,
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings with a polished finish. The perfect everyday statement — substantial yet lightweight, designed for all-day comfort.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 203,
    variants: [
      { id: 'gold', label: 'Gold Tone', price: 38 },
      { id: 'silver', label: 'Silver Tone', price: 38 },
    ],
    images: [
      { id: 'golden-sphere-1', ratio: '3x4', width: 800 },
      { id: 'golden-sphere-2', ratio: '3x4', width: 800 },
      { id: 'golden-sphere-3', ratio: '3x4', width: 800 },
    ],
    bestseller: true,
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Delicate yet eye-catching, these earrings transition seamlessly from day to evening.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 67,
    variants: [
      { id: 'gold', label: 'Gold Tone', price: 54 },
      { id: 'silver', label: 'Silver Tone', price: 54 },
    ],
    images: [
      { id: 'amber-lace-1', ratio: '3x4', width: 800 },
      { id: 'amber-lace-2', ratio: '3x4', width: 800 },
      { id: 'amber-lace-3', ratio: '3x4', width: 800 },
    ],
    bestseller: true,
    related: ['golden-sphere-huggies', 'vivid-aura-jewels'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    description: 'A curated gift-boxed set featuring matching earrings and necklace in our signature 18K gold-plated finish. The ultimate expression of thoughtful luxury.',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 45,
    variants: [
      { id: 'gold', label: 'Gold Tone', price: 95 },
      { id: 'silver', label: 'Silver Tone', price: 95 },
    ],
    images: [
      { id: 'royal-heirloom-1', ratio: '3x4', width: 800 },
      { id: 'royal-heirloom-2', ratio: '3x4', width: 800 },
      { id: 'royal-heirloom-3', ratio: '3x4', width: 800 },
    ],
    bestseller: true,
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', count: 2 },
  { id: 'necklaces', label: 'Necklaces', count: 2 },
  { id: 'huggies', label: 'Huggies', count: 1 },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally found jewelry that feels luxurious without the luxury price tag. The Amber Lace Earrings are stunning in person.',
    rating: 5,
  },
]

export const ugcPosts = [
  { id: 1, caption: 'Gold ear cuff with crystal detail', imgId: 'ugc-ear-1', ratio: '9x16', width: 400 },
  { id: 2, caption: 'Gold pendant necklace with crystals', imgId: 'ugc-neck-1', ratio: '9x16', width: 400 },
  { id: 3, caption: 'Gold hoop huggie earrings', imgId: 'ugc-ear-2', ratio: '9x16', width: 400 },
  { id: 4, caption: 'Gold filigree drop earrings', imgId: 'ugc-neck-2', ratio: '9x16', width: 400 },
  { id: 5, caption: 'Minimalist gold delicate jewelry', imgId: 'ugc-ear-3', ratio: '9x16', width: 400 },
  { id: 6, caption: 'Layered gold chain necklaces', imgId: 'ugc-neck-3', ratio: '9x16', width: 400 },
]
