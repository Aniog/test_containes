export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A cascading floral pendant featuring multicolor crystals set in warm gold. A statement piece for special occasions.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that sit close to the earlobe. Effortlessly chic for everyday wear.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Lightweight and elegant.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A beautifully gift-boxed set featuring matching earrings and necklace. The perfect present for someone special.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&q=80',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Gift Set',
  },
]

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (currentId, limit = 4) => {
  const current = getProductById(currentId)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}
