export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent. A luminous statement piece that catches the light from every angle.',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
    ],
    imgId: 'vivid-aura-8f2a9c',
    titleId: 'vivid-aura-title',
    descId: 'vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace. A garden of gemstones on a delicate gold chain.',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    imgId: 'majestic-flora-3b7d1e',
    titleId: 'majestic-flora-title',
    descId: 'majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings. Modern minimalism meets timeless elegance.',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
    ],
    imgId: 'golden-sphere-5c9e2f',
    titleId: 'golden-sphere-title',
    descId: 'golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings. Intricate detailing with a warm, vintage-inspired finish.',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    ],
    imgId: 'amber-lace-7d4a3b',
    titleId: 'amber-lace-title',
    descId: 'amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring and necklace set. The ultimate gift for life\'s most cherished moments.',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    ],
    imgId: 'royal-heirloom-1e8f4c',
    titleId: 'royal-heirloom-title',
    descId: 'royal-heirloom-desc',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80' },
];

export const testimonials = [
  { id: 1, name: 'Sarah M.', text: 'Absolutely stunning quality. The gold has such a warm, rich glow — I\'ve received countless compliments on my Vivid Aura cuff.', rating: 5 },
  { id: 2, name: 'Jessica K.', text: 'I bought the Royal Heirloom Set as a gift for my sister and ended up ordering one for myself. The packaging alone is a work of art.', rating: 5 },
  { id: 3, name: 'Emily R.', text: 'The Golden Sphere Huggies are my everyday staple. So comfortable I forget I\'m wearing them, yet they elevate every outfit.', rating: 5 },
];

export const getProductById = (id) => products.find(p => p.id === id);