export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviews: 124,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every turn of your head.',
    materials: '18K gold plated over brass. Crystal accent. Hypoallergenic. Nickel-free.',
    images: [
      { id: 'vivid-aura-1', query: 'gold ear cuff crystal jewelry closeup' },
      { id: 'vivid-aura-2', query: 'gold ear cuff model wearing jewelry' },
      { id: 'vivid-aura-3', query: 'gold ear cuff detail macro shot' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', price: 42 },
      { id: 'silver', label: 'Silver', price: 42 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviews: 89,
    category: 'necklaces',
    material: 'gold',
    description: 'A delicate pendant featuring multicolor floral crystals suspended from a fine chain. Inspired by gardens in full bloom.',
    materials: '18K gold plated over brass. Multicolor Swarovski crystals. Adjustable 16-18" chain.',
    images: [
      { id: 'flora-nectar-1', query: 'floral crystal necklace gold pendant jewelry' },
      { id: 'flora-nectar-2', query: 'woman wearing floral pendant necklace' },
      { id: 'flora-nectar-3', query: 'multicolor crystal necklace detail closeup' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', price: 68 },
      { id: 'silver', label: 'Silver', price: 68 },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviews: 203,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings with a polished finish. The perfect everyday statement — substantial yet lightweight.',
    materials: '18K gold plated over brass. Secure hinged closure. 12mm diameter.',
    images: [
      { id: 'sphere-huggies-1', query: 'gold dome huggie earrings jewelry' },
      { id: 'sphere-huggies-2', query: 'gold huggie earrings on ear model' },
      { id: 'sphere-huggies-3', query: 'chunky gold earrings pair flatlay' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', price: 38 },
      { id: 'silver', label: 'Silver', price: 38 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Elegant movement with every step.',
    materials: '18K gold plated over brass. French wire closure. Drop length: 2".',
    images: [
      { id: 'amber-lace-1', query: 'gold filigree drop earrings lace pattern jewelry' },
      { id: 'amber-lace-2', query: 'gold drop earrings woman wearing' },
      { id: 'amber-lace-3', query: 'gold filigree earrings detail closeup' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', price: 54 },
      { id: 'silver', label: 'Silver', price: 54 },
    ],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviews: 45,
    category: 'necklaces',
    material: 'gold',
    description: 'A curated gift-boxed set featuring matching earrings and necklace. The ultimate expression of refined taste — for yourself or someone you love.',
    materials: '18K gold plated over brass. Presented in signature Velmora gift box. Hypoallergenic.',
    images: [
      { id: 'heirloom-set-1', query: 'gold jewelry set necklace earrings gift box' },
      { id: 'heirloom-set-2', query: 'luxury gold jewelry set flatlay' },
      { id: 'heirloom-set-3', query: 'gold necklace and earrings set woman wearing' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', price: 95 },
      { id: 'silver', label: 'Silver', price: 95 },
    ],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', count: 2 },
  { id: 'necklaces', label: 'Necklaces', count: 2 },
  { id: 'huggies', label: 'Huggies', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Olivia R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. The Amber Lace Earrings are stunning.',
  },
];

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];
