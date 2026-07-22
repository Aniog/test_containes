export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    description: 'A sculptural gold ear cuff adorned with a delicate crystal accent. Designed to sit gracefully along the ear without the need for a piercing.',
    materialsCare: '18K gold-plated brass with cubic zirconia accent. Avoid contact with water, perfume, and lotions. Store in a dry pouch.',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', query: 'gold ear cuff crystal accent jewelry close up dark background', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-2', query: 'gold ear cuff worn on ear elegant jewelry photography', ratio: '3x4', width: 800 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    description: 'A captivating multicolor floral crystal necklace that catches light from every angle. The perfect statement piece for day or evening.',
    materialsCare: '18K gold-plated chain with multicolor cubic zirconia flowers. Length: 42cm + 5cm extender. Wipe clean with soft cloth.',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'flora-nectar-1', query: 'multicolor floral crystal gold necklace on black background luxury jewelry', ratio: '3x4', width: 800 },
      { id: 'flora-nectar-2', query: 'gold crystal flower necklace worn on neck editorial jewelry photography', ratio: '3x4', width: 800 },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    description: 'Chunky gold dome huggie earrings that bring a modern, sculptural presence to any look. Comfortable enough for all-day wear.',
    materialsCare: '18K gold-plated stainless steel. Hypoallergenic and nickel-free. Hinged closure. Diameter: 12mm.',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'sphere-huggies-1', query: 'chunky gold dome huggie earrings on dark background luxury jewelry', ratio: '3x4', width: 800 },
      { id: 'sphere-huggies-2', query: 'gold huggie earrings worn on ear close up jewelry photography', ratio: '3x4', width: 800 },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and elegant with intricate handcrafted detail.',
    materialsCare: '18K gold-plated brass with filigree texture. Drop length: 4cm. Avoid moisture. Store flat to maintain shape.',
    rating: 4.6,
    reviews: 76,
    images: [
      { id: 'amber-lace-1', query: 'textured gold filigree drop earrings dark background luxury jewelry', ratio: '3x4', width: 800 },
      { id: 'amber-lace-2', query: 'gold filigree earrings worn editorial jewelry photography', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    description: 'A curated gift-boxed set featuring a matching earring and necklace pair. The ultimate thoughtful gift, beautifully presented.',
    materialsCare: '18K gold-plated brass earrings and necklace set. Gift box included. Wipe clean, avoid water and chemicals.',
    rating: 4.9,
    reviews: 56,
    images: [
      { id: 'heirloom-1', query: 'gold jewelry gift set earrings necklace in elegant box dark background', ratio: '3x4', width: 800 },
      { id: 'heirloom-2', query: 'gold jewelry set worn editorial fashion photography', ratio: '3x4', width: 800 },
    ],
    badge: 'Gift Set',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday staple — they look so much more expensive than they are.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena K.',
    text: 'I bought the Royal Heirloom Set as a birthday gift and my friend was speechless. The packaging alone feels like a luxury brand.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica T.',
    text: 'Finally found demi-fine jewelry that does not turn my ears green. The Amber Lace Earrings are delicate, lightweight, and absolutely stunning.',
    rating: 5,
  },
];

export const ugcItems = [
  {
    id: 'ugc-1',
    title: 'Golden Sphere Huggies',
    subtitle: 'Everyday elegance',
    imgId: 'ugc-1-img',
  },
  {
    id: 'ugc-2',
    title: 'Majestic Flora Nectar',
    subtitle: 'Statement piece',
    imgId: 'ugc-2-img',
  },
  {
    id: 'ugc-3',
    title: 'Amber Lace Earrings',
    subtitle: 'Vintage charm',
    imgId: 'ugc-3-img',
  },
  {
    id: 'ugc-4',
    title: 'Vivid Aura Jewels',
    subtitle: 'Modern edge',
    imgId: 'ugc-4-img',
  },
  {
    id: 'ugc-5',
    title: 'Royal Heirloom Set',
    subtitle: 'Gift ready',
    imgId: 'ugc-5-img',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', label: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces', label: 'Necklaces' },
  { id: 'huggies', name: 'Huggies', label: 'Huggies' },
];
