export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    description: 'An exquisite gold ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement, this piece embodies quiet luxury for the modern woman.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', src: '', alt: 'Gold ear cuff with crystal accent on model' },
      { id: 'vivid-aura-2', src: '', alt: 'Close-up of gold ear cuff detail' },
      { id: 'vivid-aura-3', src: '', alt: 'Gold ear cuff on dark background' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
    badge: 'Bestseller',
    details: {
      materials: '18K gold plated brass, Austrian crystal',
      care: 'Avoid contact with water, perfume, and lotions. Store in provided pouch.',
      dimensions: 'Length: 1.2 inches, Width: 0.4 inches',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is hand-set to create a luminous, dimensional effect.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', src: '', alt: 'Multicolor floral crystal necklace on model' },
      { id: 'majestic-flora-2', src: '', alt: 'Floral crystal necklace detail view' },
      { id: 'majestic-flora-3', src: '', alt: 'Necklace on neutral background' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: false },
    ],
    badge: 'New',
    details: {
      materials: '18K gold plated brass, multicolor Swarovski crystals',
      care: 'Clean with soft dry cloth. Avoid moisture and chemicals.',
      dimensions: 'Chain length: 16-18 inches adjustable, Pendant: 1.5 inches',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a statement with their sculptural silhouette. The polished finish reflects light beautifully for an effortlessly chic look.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    images: [
      { id: 'golden-sphere-1', src: '', alt: 'Chunky gold dome huggie earrings on ear' },
      { id: 'golden-sphere-2', src: '', alt: 'Huggie earrings side view' },
      { id: 'golden-sphere-3', src: '', alt: 'Gold huggies on dark surface' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
    badge: null,
    details: {
      materials: '18K gold plated brass, hypoallergenic post',
      care: 'Wipe clean with soft cloth. Store separately to avoid scratches.',
      dimensions: 'Diameter: 0.6 inches, Thickness: 0.3 inches',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate openwork design creates a delicate, feminine silhouette that dances with movement.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    images: [
      { id: 'amber-lace-1', src: '', alt: 'Textured gold filigree drop earrings' },
      { id: 'amber-lace-2', src: '', alt: 'Filigree earrings detail close-up' },
      { id: 'amber-lace-3', src: '', alt: 'Drop earrings on model' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
    badge: null,
    details: {
      materials: '18K gold plated brass, French wire hooks',
      care: 'Handle with care due to delicate filigree. Store flat.',
      dimensions: 'Length: 2.1 inches, Width: 0.8 inches',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    description: 'A beautifully gift-boxed earring and necklace set, perfect for special occasions or as a thoughtful present. Coordinated pieces that exude timeless elegance.',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 45,
    images: [
      { id: 'royal-heirloom-1', src: '', alt: 'Gift-boxed earring and necklace set' },
      { id: 'royal-heirloom-2', src: '', alt: 'Necklace from the set on model' },
      { id: 'royal-heirloom-3', src: '', alt: 'Earrings from the set detail' },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
    badge: 'Gift Set',
    details: {
      materials: '18K gold plated brass, cubic zirconia accents',
      care: 'Store in provided luxury box. Clean with included polishing cloth.',
      dimensions: 'Necklace: 16-18 inches, Earrings: 0.8 inches drop',
    },
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 24 },
  { id: 'necklaces', name: 'Necklaces', count: 18 },
  { id: 'huggies', name: 'Huggies', count: 12 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Vivid Aura cuffs every day and they still look brand new after months.',
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
    text: 'Finally found jewelry that feels luxurious without breaking the bank. The Golden Sphere Huggies are my new everyday staple.',
  },
];
