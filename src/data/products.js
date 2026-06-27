export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Designed to sit elegantly along the ear curve for a modern, refined look.',
    details: '18K gold-plated brass. Crystal accent. Hypoallergenic. One size fits most.',
    images: {
      gold: ['vivid-aura-gold-1', 'vivid-aura-gold-2'],
      silver: ['vivid-aura-silver-1', 'vivid-aura-silver-2'],
    },
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace that captures the essence of a blooming garden. Each petal is set with vibrant crystals on a delicate gold chain.',
    details: '18K gold-plated brass. Multicolor crystals. 16" chain with 2" extender. Lobster clasp.',
    images: {
      gold: ['majestic-flora-gold-1', 'majestic-flora-gold-2'],
      silver: ['majestic-flora-silver-1', 'majestic-flora-silver-2'],
    },
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished finish. A timeless staple that adds subtle luxury to any outfit.',
    details: '18K gold-plated brass. Polished dome design. Hinge closure. 0.5" diameter.',
    images: {
      gold: ['golden-sphere-gold-1', 'golden-sphere-gold-2'],
      silver: ['golden-sphere-silver-1', 'golden-sphere-silver-2'],
    },
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and intricately detailed for effortless elegance.',
    details: '18K gold-plated brass. Filigree texture. 1.2" drop length. French wire backs.',
    images: {
      gold: ['amber-lace-gold-1', 'amber-lace-gold-2'],
      silver: ['amber-lace-silver-1', 'amber-lace-silver-2'],
    },
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earring and necklace designs. The perfect heirloom-worthy present for a loved one — or yourself.',
    details: '18K gold-plated brass. Includes earrings and necklace. Premium gift box. Hypoallergenic.',
    images: {
      gold: ['royal-heirloom-gold-1', 'royal-heirloom-gold-2'],
      silver: ['royal-heirloom-silver-1', 'royal-heirloom-silver-2'],
    },
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', description: 'Delicate drops, studs & cuffs' },
  { id: 'necklaces', label: 'Necklaces', description: 'Layered chains & pendants' },
  { id: 'huggies', label: 'Huggies', description: 'Close-fitting hoops' },
  { id: 'sets', label: 'Sets', description: 'Curated pairings' },
];

export const materials = [
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Sterling Silver' },
];
