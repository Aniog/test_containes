export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description:
      'A sculptural gold ear cuff adorned with a single luminous crystal accent. Wear it alone for a striking statement or stack with other earrings for a curated look.',
    materials:
      '18K gold plated brass with AAA-grade cubic zirconia crystal.',
    category: 'Earrings',
    subcategory: 'Ear Cuffs',
    material: 'Gold',
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller',
    images: [
      { src: '', alt: 'Vivid Aura Jewels - front', color: '#b89b7b' },
      { src: '', alt: 'Vivid Aura Jewels - on model', color: '#a08565' },
      { src: '', alt: 'Vivid Aura Jewels - detail', color: '#c4a882' },
    ],
    relatedIds: ['golden-sphere-huggies', 'amber-lace-earrings'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description:
      'A breathtaking floral-inspired necklace featuring multicolor crystal petals set in warm 18K gold plating. Suspended on a delicate chain with adjustable length.',
    materials:
      '18K gold plated brass with multicolor crystal stones.',
    category: 'Necklaces',
    subcategory: 'Pendants',
    material: 'Gold',
    rating: 4.9,
    reviewCount: 87,
    badge: 'New',
    images: [
      { src: '', alt: 'Majestic Flora Nectar - front', color: '#c9a87c' },
      { src: '', alt: 'Majestic Flora Nectar - on model', color: '#b8956d' },
      { src: '', alt: 'Majestic Flora Nectar - detail', color: '#d4b896' },
    ],
    relatedIds: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description:
      'Chunky gold dome huggies with a smooth, polished finish. These versatile earrings transition effortlessly from day to evening — a true everyday luxury staple.',
    materials:
      '18K gold plated brass, hypoallergenic posts.',
    category: 'Earrings',
    subcategory: 'Huggies',
    material: 'Gold',
    rating: 4.7,
    reviewCount: 203,
    badge: 'Bestseller',
    images: [
      { src: '', alt: 'Golden Sphere Huggies - front', color: '#c2a070' },
      { src: '', alt: 'Golden Sphere Huggies - on model', color: '#ad8c5c' },
      { src: '', alt: 'Golden Sphere Huggies - detail', color: '#d1b080' },
    ],
    relatedIds: ['amber-lace-earrings', 'vivid-aura-jewels'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description:
      'Intricate filigree drop earrings with a textured gold lace pattern. The warm amber-gold tone catches the light beautifully with every movement.',
    materials:
      '18K gold plated brass with hand-finished filigree detailing.',
    category: 'Earrings',
    subcategory: 'Drop Earrings',
    material: 'Gold',
    rating: 4.6,
    reviewCount: 59,
    badge: null,
    images: [
      { src: '', alt: 'Amber Lace Earrings - front', color: '#b89060' },
      { src: '', alt: 'Amber Lace Earrings - on model', color: '#a0774d' },
      { src: '', alt: 'Amber Lace Earrings - detail', color: '#c9a373' },
    ],
    relatedIds: ['golden-sphere-huggies', 'majestic-flora-nectar'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description:
      'A gift-boxed set pairing a petite crystal pendant necklace with matching stud earrings. An elegant duo designed to be passed down and treasured across generations.',
    materials:
      '18K gold plated brass with crystal accents, presented in a velvet gift box.',
    category: 'Sets',
    subcategory: 'Gift Sets',
    material: 'Gold',
    rating: 5.0,
    reviewCount: 42,
    badge: 'Limited',
    images: [
      { src: '', alt: 'Royal Heirloom Set - front', color: '#bf9e78' },
      { src: '', alt: 'Royal Heirloom Set - unboxed', color: '#a88962' },
      { src: '', alt: 'Royal Heirloom Set - detail', color: '#d2b48c' },
    ],
    relatedIds: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
];

export const testimonials = [
  {
    name: 'Sophia L.',
    text: 'Absolutely stunning quality. The gold finish is impeccable — looks and feels far more expensive than the price. My go-to for gifts now.',
    rating: 5,
  },
  {
    name: 'Camille R.',
    text: 'I wear my Golden Sphere Huggies every single day. No tarnishing, no irritation. The packaging alone feels like a luxury unboxing experience.',
    rating: 5,
  },
  {
    name: 'Nina K.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. She cried. The presentation, the craftsmanship — everything exceeded expectations.',
    rating: 5,
  },
];

export const categories = [
  { name: 'Earrings', slug: 'earrings', description: 'Studs, huggies, drops & cuffs' },
  { name: 'Necklaces', slug: 'necklaces', description: 'Pendants, chokers & chains' },
  { name: 'Huggies', slug: 'huggies', description: 'Everyday gold huggie earrings' },
];

export const ugcImages = [
  { caption: 'Everyday glow ✨', product: 'Golden Sphere Huggies' },
  { caption: 'Date night edit', product: 'Amber Lace Earrings' },
  { caption: 'Layered & loved', product: 'Majestic Flora Nectar' },
  { caption: 'Stack game strong', product: 'Vivid Aura Jewels' },
  { caption: 'Gift-ready 💫', product: 'Royal Heirloom Set' },
  { caption: 'Minimal moments', product: 'Golden Sphere Huggies' },
];
