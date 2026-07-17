export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'A striking gold ear cuff adorned with a delicate crystal accent, designed to capture the light and elevate your everyday style.',
    category: 'huggies',
    material: '18k Gold Plated',
    images: [
      { id: 'vivid-aura-1', query: '[vivid-aura-desc] [vivid-aura-name]' },
      { id: 'vivid-aura-2', query: '[vivid-aura-desc] [vivid-aura-name] detail' },
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'An intricate necklace featuring a multicolor floral crystal arrangement set in gleaming gold, inspired by nature\'s most exquisite blooms.',
    category: 'necklaces',
    material: '18k Gold Plated',
    images: [
      { id: 'flora-nectar-1', query: '[flora-nectar-desc] [flora-nectar-name]' },
      { id: 'flora-nectar-2', query: '[flora-nectar-desc] [flora-nectar-name] detail' },
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky, sculpted gold dome huggie earrings that offer a modern, bold silhouette while remaining lightweight and effortless.',
    category: 'huggies',
    material: '18k Gold Plated',
    images: [
      { id: 'golden-sphere-1', query: '[golden-sphere-desc] [golden-sphere-name]' },
      { id: 'golden-sphere-2', query: '[golden-sphere-desc] [golden-sphere-name] detail' },
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Elegant drop earrings showcasing textured gold filigree work that resembles fine lace, offering a vintage-inspired aesthetic.',
    category: 'earrings',
    material: '18k Gold Plated',
    images: [
      { id: 'amber-lace-1', query: '[amber-lace-desc] [amber-lace-name]' },
      { id: 'amber-lace-2', query: '[amber-lace-desc] [amber-lace-name] detail' },
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'A beautifully curated gift set featuring a matching filigree necklace and drop earrings, presented in a signature Velmora box.',
    category: 'sets',
    material: '18k Gold Plated',
    images: [
      { id: 'royal-heirloom-1', query: '[royal-heirloom-desc] [royal-heirloom-name]' },
      { id: 'royal-heirloom-2', query: '[royal-heirloom-desc] [royal-heirloom-name] detail' },
    ]
  }
];

export const getFeaturedProducts = () => products.slice(0, 4);
export const getProductById = (id) => products.find(p => p.id === id);