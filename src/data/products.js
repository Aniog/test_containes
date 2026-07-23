export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural ear cuff adorned with a single crystal accent, designed to catch the light with every movement. Our signature piece for the modern minimalist.',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', primary: true },
      { id: 'vivid-aura-2', primary: false },
    ],
    variants: [
      { id: 'gold', name: '18K Gold Plated', available: true },
      { id: 'silver', name: 'Sterling Silver', available: true },
    ],
    materials: '18K gold plated brass, cubic zirconia crystal. Hypoallergenic and nickel-free.',
    care: 'Avoid contact with water, perfume, and lotions. Store in provided pouch when not wearing.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A delicate pendant featuring multicolor floral crystals arranged in a botanical motif. Each stone is hand-set to create a garden that rests at your collarbone.',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', primary: true },
      { id: 'majestic-flora-2', primary: false },
    ],
    variants: [
      { id: 'gold', name: '18K Gold Plated', available: true },
      { id: 'silver', name: 'Sterling Silver', available: false },
    ],
    materials: '18K gold plated chain, Swarovski crystals, brass base. Chain length: 16" with 2" extender.',
    care: 'Gently wipe with soft cloth after each wear. Keep away from moisture and chemicals.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings that hug your earlobe with effortless elegance. The perfect everyday statement piece that transitions from desk to dinner.',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', primary: true },
      { id: 'golden-sphere-2', primary: false },
    ],
    variants: [
      { id: 'gold', name: '18K Gold Plated', available: true },
      { id: 'silver', name: 'Sterling Silver', available: true },
    ],
    materials: '18K gold plated brass, secure hinged closure. Diameter: 12mm.',
    care: 'Store flat in jewelry box. Clean with dry microfiber cloth only.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates a play of light and shadow against the skin.',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', primary: true },
      { id: 'amber-lace-2', primary: false },
    ],
    variants: [
      { id: 'gold', name: '18K Gold Plated', available: true },
      { id: 'silver', name: 'Sterling Silver', available: true },
    ],
    materials: '18K gold plated brass, French wire hooks. Drop length: 1.5".',
    care: 'Handle by the wire to avoid bending. Store separately to prevent tangling.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    description: 'A curated gift-boxed set featuring matching earrings and necklace in our signature heirloom design. Presented in our velvet-lined box, ready for gifting.',
    rating: 5.0,
    reviews: 45,
    images: [
      { id: 'royal-heirloom-1', primary: true },
      { id: 'royal-heirloom-2', primary: false },
    ],
    variants: [
      { id: 'gold', name: '18K Gold Plated', available: true },
      { id: 'silver', name: 'Sterling Silver', available: true },
    ],
    materials: '18K gold plated brass, cubic zirconia accents. Includes velvet gift box.',
    care: 'Store in provided box. Clean both pieces with soft dry cloth before storing.',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 2 },
  { id: 'huggies', name: 'Huggies', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday go-to. They look so much more expensive than they are. I get compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and the jewelry itself is stunning. She cried when she opened it.',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn my skin green. The Amber Lace Earrings are delicate but substantial. Absolutely love Velmora.',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
