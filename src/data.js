export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A striking ear cuff featuring delicate crystal accents. Designed to add a touch of editorial warmth to any evening look, resting comfortably without the need for a piercing.',
    material: '18K Gold Plated Brass',
    image: 'gold ear cuff with crystal accent warm editorial',
    images: [
      'gold ear cuff with crystal accent warm editorial',
      'model wearing gold ear cuff profile editorial portrait'
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'An intricate multicolor floral crystal necklace that captures the soft, radiant beauty of nature. The perfect centerpiece for a layered necklace look.',
    material: '18K Gold Plated Brass, Cubic Zirconia',
    image: 'multicolor floral crystal gold necklace on soft neutral background',
    images: [
      'multicolor floral crystal gold necklace on soft neutral background',
      'woman wearing elegant floral crystal gold necklace editorial'
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, sculpted gold dome huggie earrings. A modern classic that transitions effortlessly from day to night with quiet luxury appeal.',
    material: '18K Gold Plated Sterling Silver',
    image: 'chunky gold dome huggie earrings warm lighting',
    images: [
      'chunky gold dome huggie earrings warm lighting',
      'side profile woman wearing chunky gold dome huggies'
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings with a vintage-inspired lace design. Light-catching and exquisitely detailed.',
    material: '18K Gold Plated Brass',
    image: 'textured gold filigree drop earrings dark luxury background',
    images: [
      'textured gold filigree drop earrings dark luxury background',
      'model with styled hair wearing gold filigree drop earrings'
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'Our signature gift-boxed set featuring a matching filigree pendant necklace and delicate drop earrings. A beautiful expression of everyday elegance.',
    material: '18K Gold Plated Brass',
    image: 'gift-boxed gold earring and necklace set elegant presentation',
    images: [
      'gift-boxed gold earring and necklace set elegant presentation',
      'close-up of gold filigree pendant necklace and matching earrings'
    ]
  }
];

export const getProductsByCategory = (category) => 
  category === 'all' ? products : products.filter(p => p.category === category);

export const getProductById = (id) => 
  products.find(p => p.id === id);