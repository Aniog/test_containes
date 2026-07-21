export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'ear-cuff',
    description: 'A sculptural gold ear cuff adorned with a delicate crystal accent — effortless elegance for the modern woman.',
    materials: '18K gold plated brass, cubic zirconia crystal',
    care: 'Store in the provided pouch. Avoid contact with water, perfume, and lotions.',
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'vivid-aura-1-a7b3', descId: 'vivid-aura-desc', titleId: 'vivid-aura-title' },
      { imgId: 'vivid-aura-2-c4d2', descId: 'vivid-aura-desc', titleId: 'vivid-aura-title' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'necklace',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a garden in bloom — a statement of refined femininity.',
    materials: '18K gold plated brass, multicolor cubic zirconia crystals',
    care: 'Store in the provided jewelry box. Remove before sleeping or exercising.',
    rating: 4.9,
    reviews: 89,
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'majestic-flora-1-e5f6', descId: 'majestic-flora-desc', titleId: 'majestic-flora-title' },
      { imgId: 'majestic-flora-2-g7h8', descId: 'majestic-flora-desc', titleId: 'majestic-flora-title' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    description: 'Chunky gold dome huggie earrings that sit close to the ear — bold yet refined, perfect for everyday luxury.',
    materials: '18K gold plated brass, hypoallergenic posts',
    care: 'Wipe gently with a soft cloth after wear. Store in a dry place.',
    rating: 4.7,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'golden-sphere-1-i9j0', descId: 'golden-sphere-desc', titleId: 'golden-sphere-title' },
      { imgId: 'golden-sphere-2-k1l2', descId: 'golden-sphere-desc', titleId: 'golden-sphere-title' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'drop-earring',
    description: 'Textured gold filigree drop earrings that evoke vintage lacework — a timeless accent for any occasion.',
    materials: '18K gold plated brass, nickel-free',
    care: 'Avoid direct contact with water and chemicals. Polish with a jewelry cloth.',
    rating: 4.6,
    reviews: 67,
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'amber-lace-1-m3n4', descId: 'amber-lace-desc', titleId: 'amber-lace-title' },
      { imgId: 'amber-lace-2-o5p6', descId: 'amber-lace-desc', titleId: 'amber-lace-title' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    type: 'set',
    description: 'A gift-boxed earring and necklace set that exudes regal sophistication — the perfect present for someone treasured, including yourself.',
    materials: '18K gold plated brass, cubic zirconia, gift box included',
    care: 'Store each piece separately in the provided pouches to prevent tangling.',
    rating: 5.0,
    reviews: 42,
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'royal-heirloom-1-q7r8', descId: 'royal-heirloom-desc', titleId: 'royal-heirloom-title' },
      { imgId: 'royal-heirloom-2-s9t0', descId: 'royal-heirloom-desc', titleId: 'royal-heirloom-title' },
    ],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-u1v2', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-w3x4', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-y5z6', titleId: 'cat-huggies-title' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies look just like solid gold — I wear them every day.',
  },
  {
    id: 2,
    name: 'Priya K.',
    rating: 5,
    text: 'I gifted the Royal Heirloom Set to my sister and she was speechless. The presentation alone feels like luxury.',
  },
  {
    id: 3,
    name: 'Emma L.',
    rating: 5,
    text: "Finally, jewelry that doesn't irritate my ears. Hypoallergenic and stunning — I've already ordered three more pieces.",
  },
]

export const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-ear-1-a1b2', caption: 'Everyday gold', titleId: 'ugc-title-1' },
  { id: 'ugc-2', imgId: 'ugc-neck-2-c3d4', caption: 'Date night ready', titleId: 'ugc-title-2' },
  { id: 'ugc-3', imgId: 'ugc-ear-3-e5f6', caption: 'Stacked & styled', titleId: 'ugc-title-3' },
  { id: 'ugc-4', imgId: 'ugc-neck-4-g7h8', caption: 'Gift glow', titleId: 'ugc-title-4' },
  { id: 'ugc-5', imgId: 'ugc-ear-5-i9j0', caption: 'Minimal magic', titleId: 'ugc-title-5' },
  { id: 'ugc-6', imgId: 'ugc-neck-6-k1l2', caption: 'Golden hour', titleId: 'ugc-title-6' },
]

export const getProductById = (id) => products.find((p) => p.id === id)
export const getProductsByCategory = (cat) => {
  if (!cat || cat === 'All') return products
  return products.filter((p) => p.category === cat)
}
