export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'Gold ear cuff with crystal accent. A subtle yet striking addition to your daily ensemble.',
    category: 'Earrings',
    images: [
      { id: 'img1', alt: 'Vivid Aura Jewels Ear Cuff' }
    ],
    variants: ['Gold', 'Silver'],
    details: [
      { title: 'Materials', content: '18K Gold Plated Brass, Cubic Zirconia' },
      { title: 'Care', content: 'Avoid contact with water, perfumes, and lotions. Store in a cool, dry place.' },
      { title: 'Shipping', content: 'Free worldwide shipping on all orders.' }
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'Multicolor floral crystal necklace. Inspired by the delicate beauty of blooming gardens.',
    category: 'Necklaces',
    images: [
      { id: 'img2', alt: 'Majestic Flora Nectar Necklace' }
    ],
    variants: ['Gold'],
    details: [
      { title: 'Materials', content: '18K Gold Plated Brass, Multi-tonal Crystals' },
      { title: 'Care', content: 'Polish gently with a soft cloth. Keep away from chemicals.' },
      { title: 'Shipping', content: 'Ships in 1-2 business days.' }
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings. A classic silhouette reimagined for the modern woman.',
    category: 'Earrings',
    images: [
      { id: 'img3', alt: 'Golden Sphere Huggies' }
    ],
    variants: ['Gold', 'Silver'],
    details: [
      { title: 'Materials', content: '18K Gold Plated Recycled Silver' },
      { title: 'Care', content: 'Wipe clean after use. Store in provided pouch.' },
      { title: 'Shipping', content: 'Returns accepted within 30 days.' }
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings. Intricate lace-like patterns captured in gold.',
    category: 'Earrings',
    images: [
      { id: 'img4', alt: 'Amber Lace Earrings' }
    ],
    variants: ['Gold'],
    details: [
      { title: 'Materials', content: '18K Gold Vermeil' },
      { title: 'Care', content: 'Do not use abrasive cleaners.' },
      { title: 'Shipping', content: 'Insured worldwide shipping.' }
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'Gift-boxed earring + necklace set. The perfect curated collection for special moments.',
    category: 'Sets',
    images: [
      { id: 'img5', alt: 'Royal Heirloom Set' }
    ],
    variants: ['Gold'],
    details: [
      { title: 'Materials', content: '18K Gold Plated Sterling Silver' },
      { title: 'Care', content: 'Handle with care. Avoid extreme temperatures.' },
      { title: 'Shipping', content: 'Signature required upon delivery.' }
    ]
  }
];

export const collections = [
  { id: 'earrings', name: 'Earrings', imgId: 'coll-earrings' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'coll-necklaces' },
  { id: 'huggies', name: 'Huggies', imgId: 'coll-huggies' }
];

export const ugc_reels = [
  { id: 'ugc1', caption: 'Effortless elegance for every day.' },
  { id: 'ugc2', caption: 'The perfect subtle sparkle.' },
  { id: 'ugc3', caption: 'Stirred by classical beauty.' },
  { id: 'ugc4', caption: 'Curated for the modern woman.' },
  { id: 'ugc5', caption: 'Details that matter.' }
];

export const testimonials = [
  { id: 't1', name: 'Sarah L.', text: 'The quality of these earrings is exceptional for the price. I wear my Golden Sphere Huggies every day!', rating: 5 },
  { id: 't2', name: 'Elena R.', text: 'Beautifully packaged and arrived so quickly. The Majestic Flora necklace is even prettier in person.', rating: 5 },
  { id: 't3', name: 'Maya K.', text: 'Finally found jewelry that doesn\'t irritate my skin. Simple, elegant, and timeless.', rating: 5 }
];
