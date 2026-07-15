export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A sculptural ear cuff adorned with delicate crystal accents. Designed to catch the light with every movement, this piece embodies effortless elegance for the modern woman.',
    price: 42,
    rating: 4.8,
    reviews: 124,
    category: 'earrings',
    material: 'gold',
    images: [
      { id: 'vivid-aura-1', src: null, alt: 'Vivid Aura Jewels gold ear cuff with crystal accent' },
      { id: 'vivid-aura-2', src: null, alt: 'Vivid Aura Jewels detail view' },
      { id: 'vivid-aura-3', src: null, alt: 'Vivid Aura Jewels on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Plated', price: 42 },
      { id: 'silver', name: 'Silver Plated', price: 42 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A delicate necklace featuring multicolor floral crystals suspended from a fine chain. Each petal is hand-set to create a garden of light around your neckline.',
    price: 68,
    rating: 4.9,
    reviews: 89,
    category: 'necklaces',
    material: 'gold',
    images: [
      { id: 'majestic-flora-1', src: null, alt: 'Majestic Flora Nectar multicolor floral crystal necklace' },
      { id: 'majestic-flora-2', src: null, alt: 'Majestic Flora Nectar detail view' },
      { id: 'majestic-flora-3', src: null, alt: 'Majestic Flora Nectar on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Plated', price: 68 },
      { id: 'silver', name: 'Silver Plated', price: 68 },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that sit close to the earlobe. A modern take on the classic hoop, these statement pieces add instant polish to any look.',
    price: 38,
    rating: 4.7,
    reviews: 203,
    category: 'huggies',
    material: 'gold',
    images: [
      { id: 'golden-sphere-1', src: null, alt: 'Golden Sphere Huggies chunky gold dome earrings' },
      { id: 'golden-sphere-2', src: null, alt: 'Golden Sphere Huggies detail view' },
      { id: 'golden-sphere-3', src: null, alt: 'Golden Sphere Huggies on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Plated', price: 38 },
      { id: 'silver', name: 'Silver Plated', price: 38 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates a play of light and shadow, perfect for special occasions.',
    price: 54,
    rating: 4.6,
    reviews: 67,
    category: 'earrings',
    material: 'gold',
    images: [
      { id: 'amber-lace-1', src: null, alt: 'Amber Lace Earrings textured gold filigree drop earrings' },
      { id: 'amber-lace-2', src: null, alt: 'Amber Lace Earrings detail view' },
      { id: 'amber-lace-3', src: null, alt: 'Amber Lace Earrings on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Plated', price: 54 },
      { id: 'silver', name: 'Silver Plated', price: 54 },
    ],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'A beautifully gift-boxed earring and necklace set, designed for the woman who appreciates coordinated elegance. Each piece complements the other in a harmonious design language.',
    price: 95,
    rating: 5.0,
    reviews: 45,
    category: 'sets',
    material: 'gold',
    images: [
      { id: 'royal-heirloom-1', src: null, alt: 'Royal Heirloom Set gift-boxed earring and necklace set' },
      { id: 'royal-heirloom-2', src: null, alt: 'Royal Heirloom Set detail view' },
      { id: 'royal-heirloom-3', src: null, alt: 'Royal Heirloom Set on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Plated', price: 95 },
      { id: 'silver', name: 'Silver Plated', price: 95 },
    ],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 24 },
  { id: 'necklaces', name: 'Necklaces', count: 18 },
  { id: 'huggies', name: 'Huggies', count: 12 },
  { id: 'sets', name: 'Gift Sets', count: 8 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Vivid Aura cuffs every single day — they go with everything.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. The Golden Sphere Huggies are my new obsession.',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
