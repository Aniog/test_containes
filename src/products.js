export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    images: [
      'https://images.unsplash.com/photo-1630019852942-fdacdab687d5?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    category: 'Earrings',
    material: 'Gold',
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    featured: true,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    category: 'Necklaces',
    material: 'Gold',
    rating: 4.9,
    reviews: 89,
    variants: ['Gold'],
    featured: true,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-fdacdab687d5?w=800&q=80',
    ],
    category: 'Huggies',
    material: 'Gold',
    rating: 4.7,
    reviews: 156,
    variants: ['Gold', 'Silver'],
    featured: true,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    category: 'Earrings',
    material: 'Gold',
    rating: 4.6,
    reviews: 67,
    variants: ['Gold'],
    featured: true,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    category: 'Sets',
    material: 'Gold',
    rating: 5.0,
    reviews: 42,
    variants: ['Gold'],
    featured: true,
  },
];

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured);
};

export const getRelatedProducts = (productId, category) => {
  return products
    .filter((p) => p.id !== parseInt(productId) && p.category === category)
    .slice(0, 4);
};
