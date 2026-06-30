export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Designed to sit elegantly along the ear curve for a modern, minimalist look.',
    details: '18K gold-plated brass\nCrystal accent\nHypoallergenic\nOne size fits most',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d48?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace that captures the essence of a blooming garden. Each petal is meticulously set with vibrant crystals.',
    details: '18K gold-plated brass\nMulticolor crystals\n16" chain with 2" extender\nHypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings that make a statement. The perfect everyday earring with a luxurious, sculptural feel.',
    details: '18K gold-plated brass\nDome design\nHuggie closure\nHypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d48?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and intricately detailed for effortless elegance.',
    details: '18K gold-plated brass\nFiligree texture\nDrop length: 1.5"\nHypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    rating: 5.0,
    reviewCount: 67,
    description: 'A gift-boxed set featuring matching earrings and necklace. The perfect heirloom-worthy piece to treasure for years to come.',
    details: '18K gold-plated brass\nEarrings + necklace\nGift box included\nHypoallergenic',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d48?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80' },
]

export const testimonials = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'The quality is absolutely stunning. I\'ve worn my Golden Sphere Huggies every day for months and they still look brand new.' },
  { id: 2, name: 'Emily R.', rating: 5, text: 'Bought the Royal Heirloom Set as a gift for my daughter\'s graduation. The packaging alone made it feel so special.' },
  { id: 3, name: 'Jessica L.', rating: 5, text: 'Finally found jewelry that looks expensive but doesn\'t break the bank. The Amber Lace Earrings are my new go-to.' },
]

export const ugcContent = [
  { id: 1, user: '@sarah.style', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'Everyday luxury ✨' },
  { id: 2, user: '@emily.jewelry', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Layering season' },
  { id: 3, user: '@jessica.gold', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80', caption: 'New favorite' },
  { id: 4, user: '@anna.wears', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80', caption: 'Gift ready' },
]
