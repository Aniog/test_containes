// Seed product data for Velmora Fine Jewelry
// All prices in USD, demi-fine 18K gold plated

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    material: 'gold',
    description: 'A sculptural ear cuff adorned with a single crystal accent. Lightweight yet striking, designed to catch the light with every movement.',
    shortDescription: 'Gold ear cuff with crystal accent',
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: 'main', alt: 'Vivid Aura Jewels ear cuff in warm gold with crystal', color: 'gold' },
      { id: 'alt', alt: 'Vivid Aura Jewels ear cuff detail view', color: 'gold' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    material: 'gold',
    description: 'A delicate necklace featuring a cluster of multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both romantic and modern.',
    shortDescription: 'Multicolor floral crystal necklace',
    rating: 4.9,
    reviewCount: 89,
    images: [
      { id: 'main', alt: 'Majestic Flora Nectar necklace with colorful crystals', color: 'gold' },
      { id: 'alt', alt: 'Majestic Flora Nectar necklace worn on model', color: 'gold' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    material: 'gold',
    description: 'Chunky dome huggie earrings with a soft matte finish. The spherical silhouette adds quiet dimension while remaining comfortable for everyday wear.',
    shortDescription: 'Chunky gold dome huggie earrings',
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: 'main', alt: 'Golden Sphere Huggies chunky gold dome earrings', color: 'gold' },
      { id: 'alt', alt: 'Golden Sphere Huggies close-up detail', color: 'gold' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate pattern is balanced by a warm amber-toned crystal at the center.',
    shortDescription: 'Textured gold filigree drop earrings',
    rating: 4.6,
    reviewCount: 72,
    images: [
      { id: 'main', alt: 'Amber Lace Earrings textured gold filigree drops', color: 'gold' },
      { id: 'alt', alt: 'Amber Lace Earrings detail of filigree work', color: 'gold' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    material: 'gold',
    description: 'A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, this set is made for gifting and treasuring.',
    shortDescription: 'Gift-boxed earring + necklace set',
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: 'main', alt: 'Royal Heirloom Set gift box with earrings and necklace', color: 'gold' },
      { id: 'alt', alt: 'Royal Heirloom Set jewelry pieces displayed', color: 'gold' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', value: 'gold' },
      { id: 'silver', label: 'Silver', value: 'silver' },
    ],
    inStock: true,
  },
];

// Helper to get product by id
export const getProductById = (id) => products.find((p) => p.id === id);

// Categories for filtering
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

// Materials
export const materials = [
  { id: 'all', label: 'All' },
  { id: 'gold', label: '18K Gold Plated' },
];

// Price ranges for filtering
export const priceRanges = [
  { id: 'all', label: 'All', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
];
