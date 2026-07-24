export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff accented with a single radiant crystal. Designed to catch the light from every angle — an effortless statement for day or night.',
    materials: '18K gold plated over brass, cubic zirconia crystal',
    care: 'Avoid contact with water, perfume, and lotions. Store in a soft pouch.',
    images: {
      primary:
        'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
      hover:
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    },
    variants: ['Gold', 'Silver'],
    slug: 'vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description:
      'A delicate floral pendant necklace featuring multicolored crystal blossoms. Each petal set in warm gold — a wearable garden of heirloom quality.',
    materials: '18K gold plated over brass, multicolor crystal petals',
    care: 'Gently wipe with a soft cloth. Keep away from harsh chemicals.',
    images: {
      primary:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      hover:
        'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    },
    variants: ['Gold', 'Silver'],
    slug: 'majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Earrings',
    price: 38,
    rating: 4.7,
    reviews: 203,
    description:
      'Chunky gold dome huggie earrings with a polished sphere silhouette. Lightweight yet bold — the everyday essential your jewelry box has been waiting for.',
    materials: '18K gold plated over brass, hypoallergenic posts',
    care: 'Wipe clean after each wear. Remove before swimming or showering.',
    images: {
      primary:
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      hover:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    },
    variants: ['Gold', 'Silver'],
    slug: 'golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    description:
      'Textured gold filigree drop earrings with an intricate lace-like pattern. Elegantly dangling with a warm amber glow — timeless romance in motion.',
    materials: '18K gold plated over brass, filigree brass base',
    care: 'Avoid bending or pulling. Store flat to preserve shape.',
    images: {
      primary:
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      hover:
        'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    },
    variants: ['Gold', 'Silver'],
    slug: 'amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description:
      'A gift-boxed set of matching earrings and necklace, crafted in warm gold. Heirloom quality, ready to gift — or to keep as your new signature.',
    materials: '18K gold plated over brass, crystal accents',
    care: 'Each piece comes in a branded keepsake box. Clean with included cloth.',
    images: {
      primary:
        'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
      hover:
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    },
    variants: ['Gold', 'Silver'],
    slug: 'royal-heirloom-set',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3, slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', count: 1, slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', count: 1, slug: 'huggies' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality is absolutely stunning. I wear my Golden Sphere Huggies every single day — they never tarnish.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Olivia K.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried. The packaging alone is worth the price.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma R.',
    text: 'Finally, affordable jewelry that doesn\'t look cheap. The Vivid Aura cuff gets compliments everywhere I go.',
    rating: 5,
  },
]

export const ugcReels = [
  {
    id: 1,
    caption: 'Golden hour with my Golden Sphere Huggies',
    initial: 'S',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  },
  {
    id: 2,
    caption: 'Stacking my Vivid Aura with everyday studs',
    initial: 'A',
    image:
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80',
  },
  {
    id: 3,
    caption: 'The Flora Nectar pendant is my new obsession',
    initial: 'M',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
  },
  {
    id: 4,
    caption: 'Amber Lace for date night',
    initial: 'J',
    image:
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
  },
  {
    id: 5,
    caption: 'Unboxing the Royal Heirloom Set',
    initial: 'L',
    image:
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80',
  },
  {
    id: 6,
    caption: 'Everyday gold that stays gold',
    initial: 'C',
    image:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
  },
]