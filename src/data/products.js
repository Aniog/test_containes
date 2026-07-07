export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculpted gold ear cuff with a luminous crystal accent. Designed to catch light from every angle, this single-ear statement piece adds an effortless edge to any look.',
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=85',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85',
    ],
    details: {
      materials: '18K gold over brass. Hypoallergenic, nickel-free, lead-free.',
      care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft, dry cloth.',
      shipping: 'Free worldwide shipping on all orders. Ships within 1–2 business days. Estimated delivery: 5–10 business days.',
      returns: '30-day return policy. Items must be unworn and in original packaging. Free returns on first-time orders.',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multi-color floral crystal necklace suspended from a delicate gold chain. Each petal-shaped stone is individually set for a heirloom-quality finish.',
    category: 'Necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85',
    ],
    details: {
      materials: '18K gold over brass. Hand-set crystal stones. Nickel-free, lead-free.',
      care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft, dry cloth.',
      shipping: 'Free worldwide shipping on all orders. Ships within 1–2 business days.',
      returns: '30-day return policy. Items must be unworn and in original packaging.',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished sphere silhouette. Lightweight enough for everyday wear, striking enough for evenings out.',
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85',
      'https://images.unsplash.com/photo-1535639818669-c059d2f038e6?w=800&q=85',
    ],
    details: {
      materials: '18K gold over brass. Hypoallergenic, nickel-free, lead-free.',
      care: 'Avoid contact with water, perfume, and lotions. Store in a dry place.',
      shipping: 'Free worldwide shipping on all orders. Ships within 1–2 business days.',
      returns: '30-day return policy. Items must be unworn and in original packaging.',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Light-catching and remarkably detailed — a delicate heirloom for daily adornment.',
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=85',
    ],
    details: {
      materials: '18K gold over brass. Intricate filigree detailing. Nickel-free, lead-free.',
      care: 'Avoid contact with water, perfume, and lotions. Store in a dry place.',
      shipping: 'Free worldwide shipping on all orders. Ships within 1–2 business days.',
      returns: '30-day return policy. Items must be unworn and in original packaging.',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring a matching earring and necklace ensemble. Presented in a velvet-lined keepsake box — the ultimate expression of quiet luxury.',
    category: 'Sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=85',
    ],
    details: {
      materials: '18K gold over brass. Matching earring and necklace set. Velvet gift box included.',
      care: 'Avoid contact with water, perfume, and lotions. Store in included gift box.',
      shipping: 'Free worldwide shipping on all orders. Ships within 1–2 business days.',
      returns: '30-day return policy. Items must be unworn and in original packaging.',
    },
  },
]

export const categories = [
  { name: 'Earrings', slug: 'earrings', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=85' },
  { name: 'Necklaces', slug: 'necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85' },
  { name: 'Huggies', slug: 'huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=85' },
]

export const testimonials = [
  {
    name: 'Sophia K.',
    text: 'The quality is exceptional for the price point. My Royal Heirloom Set arrived in the most beautiful packaging — made gifting it almost as special as receiving it.',
    rating: 5,
  },
  {
    name: 'Amanda R.',
    text: 'I wear my Golden Sphere Huggies almost every day. They haven\'t tarnished at all, and I constantly get compliments. Already planning my next purchase.',
    rating: 5,
  },
  {
    name: 'Jessica M.',
    text: 'Velmora is my go-to for elevated gifts. The Majestic Flora necklace made my best friend cry — in a good way. Fast shipping, beautiful quality.',
    rating: 5,
  },
]

export const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Daily essentials ✨',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=85',
  },
  {
    id: 'ugc-2',
    caption: 'Gold on gold on gold',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=85',
  },
  {
    id: 'ugc-3',
    caption: 'Date night ready',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=85',
  },
  {
    id: 'ugc-4',
    caption: 'New addition to the family',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=85',
  },
  {
    id: 'ugc-5',
    caption: 'Gifted with love 💝',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=85',
  },
  {
    id: 'ugc-6',
    caption: 'Office elegance',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=85',
  },
]