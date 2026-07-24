export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    title: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent. Crafted in 18K gold plated brass.',
    price: 42,
    category: 'Earrings',
    imageQuery: 'gold ear cuff crystal accent jewelry',
    images: [] // To be populated by image helper logic or placeholders
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    title: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace. A true statement piece.',
    price: 68,
    category: 'Necklaces',
    imageQuery: 'floral crystal necklace gold',
    images: []
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    title: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings. Perfect for everyday luxury.',
    price: 38,
    category: 'Earrings',
    imageQuery: 'chunky gold huggie earrings',
    images: []
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    title: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings. Intricate and elegant.',
    price: 54,
    category: 'Earrings',
    imageQuery: 'gold filigree drop earrings',
    images: []
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    title: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special.',
    price: 95,
    category: 'Sets',
    imageQuery: 'gold jewelry set gift box',
    images: []
  }
];

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
