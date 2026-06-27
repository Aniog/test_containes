const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      'An ethereal gold ear cuff with a single luminous crystal accent. Lightweight and designed for all-day wear, it catches the light with every movement.',
    materials: '18K gold-plated brass, Swarovski crystal',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/vivid-aura-1.jpg', alt: 'Vivid Aura Jewels — gold ear cuff front view' },
      { src: '/products/vivid-aura-2.jpg', alt: 'Vivid Aura Jewels — on model' },
      { src: '/products/vivid-aura-3.jpg', alt: 'Vivid Aura Jewels — detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 87,
    description:
      'A statement floral necklace hand-set with multicolor crystals. The pendant blooms on a fine gold chain — romantic, vivid, and unforgettable.',
    materials: '18K gold-plated sterling silver, multicolor Swarovski crystals',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/flora-nectar-1.jpg', alt: 'Majestic Flora Nectar — floral necklace front' },
      { src: '/products/flora-nectar-2.jpg', alt: 'Majestic Flora Nectar — on model' },
      { src: '/products/flora-nectar-3.jpg', alt: 'Majestic Flora Nectar — detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description:
      'Chunky gold dome huggies with a high-polish finish. Bold yet refined, these everyday hoops deliver quiet luxury with every wear.',
    materials: '18K gold-plated brass',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/sphere-huggies-1.jpg', alt: 'Golden Sphere Huggies — front view' },
      { src: '/products/sphere-huggies-2.jpg', alt: 'Golden Sphere Huggies — on model' },
      { src: '/products/sphere-huggies-3.jpg', alt: 'Golden Sphere Huggies — detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 59,
    description:
      'Textured gold filigree drop earrings with an antique-inspired lace pattern. Warm amber undertones make these an heirloom-worthy addition to any collection.',
    materials: '18K gold-plated brass with antique finish',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/amber-lace-1.jpg', alt: 'Amber Lace Earrings — front view' },
      { src: '/products/amber-lace-2.jpg', alt: 'Amber Lace Earrings — on model' },
      { src: '/products/amber-lace-3.jpg', alt: 'Amber Lace Earrings — detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description:
      'A gift-boxed earring and necklace duo crafted for someone unforgettable. The matching set features delicate gold work with a timeless silhouette.',
    materials: '18K gold-plated sterling silver',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/royal-heirloom-1.jpg', alt: 'Royal Heirloom Set — full set' },
      { src: '/products/royal-heirloom-2.jpg', alt: 'Royal Heirloom Set — on model' },
      { src: '/products/royal-heirloom-3.jpg', alt: 'Royal Heirloom Set — gift box' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'luminous-pearl-drop',
    name: 'Luminous Pearl Drop',
    category: 'Earrings',
    price: 48,
    rating: 4.7,
    reviewCount: 91,
    description:
      'A single freshwater pearl suspended from a gleaming gold hoop. Effortless elegance for day-to-night transitions.',
    materials: '18K gold-plated brass, freshwater pearl',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/pearl-drop-1.jpg', alt: 'Luminous Pearl Drop — front view' },
      { src: '/products/pearl-drop-2.jpg', alt: 'Luminous Pearl Drop — on model' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'celestial-chain-necklace',
    name: 'Celestial Chain Necklace',
    category: 'Necklaces',
    price: 72,
    rating: 4.8,
    reviewCount: 68,
    description:
      'A fine gold chain necklace with scattered tiny star charms. Layer it or wear it solo — an everyday talisman.',
    materials: '18K gold-plated sterling silver',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/celestial-1.jpg', alt: 'Celestial Chain Necklace — front view' },
      { src: '/products/celestial-2.jpg', alt: 'Celestial Chain Necklace — on model' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'twisted-rope-huggies',
    name: 'Twisted Rope Huggies',
    category: 'Huggies',
    price: 44,
    rating: 4.5,
    reviewCount: 115,
    description:
      'Intricate twisted-rope texture wraps around these mini huggies. Textured gold that feels both modern and ancient.',
    materials: '18K gold-plated brass',
    care: 'Avoid water and perfume. Clean with a soft cloth. Store in the provided Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders processed within 1-2 business days.',
    images: [
      { src: '/products/twisted-rope-1.jpg', alt: 'Twisted Rope Huggies — front view' },
      { src: '/products/twisted-rope-2.jpg', alt: 'Twisted Rope Huggies — on model' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
]

export const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
]

export function getProduct(id) {
  return products.find((p) => p.id === id) || null
}

export function getBestsellers() {
  return bestsellerIds.map((id) => getProduct(id)).filter(Boolean)
}

export function getRelated(productId, count = 4) {
  return products.filter((p) => p.id !== productId).slice(0, count)
}

export default products
