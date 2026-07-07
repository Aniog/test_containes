// Velmora Fine Jewelry - Product Data
// Seed data for the DTC jewelry e-commerce storefront

export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    images: [
      'https://via.placeholder.com/800x1000/D4AF37/FFFFFF?text=VIVID+AURA',
      'https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=GOLD+EAR+CUFF'
    ],
    description: 'A stunning gold ear cuff with crystal accent. Perfect for adding a touch of sparkle to any outfit.',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    images: [
      'https://via.placeholder.com/800x1000/D4AF37/FFFFFF?text=MAJESTIC+FLORA',
      'https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=FLORAL+NECKLACE'
    ],
    description: 'Multicolor floral crystal necklace that captures the beauty of a blooming garden.',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    inStock: true
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    images: [
      'https://via.placeholder.com/800x1000/D4AF37/FFFFFF?text=GOLDEN+SPHERE',
      'https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=HUGGIE+EARRINGS'
    ],
    description: 'Chunky gold dome huggie earrings that make a bold yet elegant statement.',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    images: [
      'https://via.placeholder.com/800x1000/D4AF37/FFFFFF?text=AMBER+LACE',
      'https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=FILIGREE+EARRINGS'
    ],
    description: 'Textured gold filigree drop earrings with intricate detailing.',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 98,
    inStock: true
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    images: [
      'https://via.placeholder.com/800x1000/D4AF37/FFFFFF?text=ROYAL+HEIRLOOM',
      'https://via.placeholder.com/800x1000/2C2C2C/D4AF37?text=GIFT+SET'
    ],
    description: 'Gift-boxed earring and necklace set. The perfect present for someone special.',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 67,
    inStock: true
  }
];

// Helper functions for product data
export const getProductById = (id) => {
  const numericId = typeof id === 'string' ? parseInt(id) : id;
  return products.find(p => p.id === numericId);
};

export const getFeaturedProducts = () => {
  return products;
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};
