export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural ear cuff adorned with a single crystal accent, catching light with every movement. Designed to be worn alone or stacked.',
    materials: '18K gold plated brass, cubic zirconia crystal. Nickel-free, hypoallergenic.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate chain adorned with multicolor floral crystal clusters, evoking a garden in full bloom. The perfect statement piece for any occasion.',
    materials: '18K gold plated sterling silver, hand-set crystals in rose, amber, and emerald tones.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141589-67f0d93e2e4e?w=800&q=80',
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky dome huggie earrings with a high-polish finish. Their satisfying weight and secure clasp make them perfect for everyday luxury.',
    materials: '18K gold plated brass with a high-polish finish. Hypoallergenic, suitable for sensitive ears.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet impactful, they frame the face beautifully.',
    materials: '18K gold plated brass with intricate filigree detailing. Nickel-free.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A curated gift set featuring a matching earring and necklace duo, presented in our signature velvet box. The ultimate gift for someone special.',
    materials: '18K gold plated sterling silver with hand-set crystals. Comes in a luxury velvet presentation box.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141589-67f0d93e2e4e?w=800&q=80',
    ],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  category === 'all' ? products : products.filter((p) => p.category === category);
