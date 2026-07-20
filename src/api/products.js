export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'A delicate gold ear cuff featuring a shimmering crystal accent. Perfect for adding a touch of brilliance without the need for a piercing.',
    materials: '18K Gold Plated, Cubic Zirconia',
    images: ['vivid-aura-1', 'vivid-aura-2'],
    featured: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'An elegant necklace inspired by nature, featuring multicolor floral crystal accents that catch the light beautifully.',
    materials: '18K Gold Plated, Mixed Crystals',
    images: ['flora-nectar-1', 'flora-nectar-2'],
    featured: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    description: 'Chunky gold dome huggie earrings that offer a bold yet classic statement. A must-have for any jewelry collection.',
    materials: '18K Gold Plated Brass',
    images: ['sphere-huggies-1', 'sphere-huggies-2'],
    featured: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Textured gold filigree drop earrings that evoke the intricate beauty of vintage lace. Ideal for both day and night.',
    materials: '18K Gold Plated Brass',
    images: ['amber-lace-1', 'amber-lace-2'],
    featured: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Collections',
    description: 'A beautifully gift-boxed set featuring matching earrings and a necklace. The ultimate gift for yourself or a loved one.',
    materials: '18K Gold Plated, Premium Crystals',
    images: ['heirloom-set-1', 'heirloom-set-2'],
    featured: true
  }
];

export const fetchProducts = () => Promise.resolve(products);
export const fetchProductById = (id) => Promise.resolve(products.find(p => p.id === id));
