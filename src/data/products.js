export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit high on the ear for an architectural, modern look.',
    details: '18K gold-plated brass, crystal accent. Hypoallergenic. One size.',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate necklace centered by a multicolor floral crystal pendant. Light-catching and romantic, perfect for layering.',
    details: '18K gold-plated brass, multicolor crystals. 16" chain with 2" extender. Hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a86e32ef4f57?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky gold dome huggie earrings with a smooth, polished finish. A modern staple that catches the light with every turn.',
    details: '18K gold-plated brass. Hypoallergenic. Hinge closure.',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by antique lace. Lightweight and intricately detailed for everyday elegance.',
    details: '18K gold-plated brass. Hypoallergenic. Drop length: 1.2".',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a86e32ef4f57?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A gift-boxed set featuring matching earrings and a necklace. Timeless design meant to be passed down.',
    details: '18K gold-plated brass, crystal accents. Includes luxury gift box. Hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean with a soft polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'Gift',
  },
];

export const categories = ['Earrings', 'Necklaces', 'Huggies'];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (product, limit = 4) => {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
};
