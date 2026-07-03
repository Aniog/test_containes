export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'A luminous gold ear cuff kissed with a single crystal accent. Effortlessly sculptural — made to catch light from every angle.',
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'A multicolor floral crystal necklace suspended from a delicate gold chain. Whimsical yet refined — a statement of quiet joy.',
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings with a brilliant polished finish. A modern classic that transitions from desk to dinner.',
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings with an heirloom feel. Light as lace, luminous as amber — endlessly wearable.',
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    variants: ['Gold'],
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'A gift-boxed set featuring matching earrings and a pendant necklace. Heirloom quality, ready to gift — or to keep.',
    category: 'Sets',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 42,
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    ],
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=800&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'I bought the Royal Heirloom Set for my sister\'s birthday and she hasn\'t taken it off since. The quality is stunning for the price.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena K.',
    text: 'The Golden Sphere Huggies are my everyday staple. They look far more expensive than they are — I get compliments constantly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire R.',
    text: 'Velmora has become my go-to for thoughtful gifts. Beautiful packaging, fast shipping, and the pieces truly shine.',
    rating: 5,
  },
];

export const ugcReels = [
  {
    id: 1,
    caption: 'Morning light, gold glow.',
  },
  {
    id: 2,
    caption: 'Stacking my Velmora favorites.',
  },
  {
    id: 3,
    caption: 'Gift-wrapped with love.',
  },
  {
    id: 4,
    caption: 'The perfect huggie stack.',
  },
  {
    id: 5,
    caption: 'Demi-fine dreams.',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (category) =>
  products.filter((p) => p.category.toLowerCase() === category.toLowerCase());