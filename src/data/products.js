export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit high on the ear for an elevated, modern look.',
    details: '18K gold-plated brass with crystal accent. Hypoallergenic. One size.',
    care: 'Store in a dry place. Avoid contact with perfumes and lotions. Clean with a soft polishing cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day returns.',
    images: [
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Vivid+Aura+Jewels&font=playfair-display',
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Vivid+Aura+Jewels+2&font=playfair-display',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace inspired by pressed botanicals. Lightweight and luminous against the skin.',
    details: '18K gold-plated chain with multicolor crystal floral pendant. 16" chain with 2" extender.',
    care: 'Store in a dry place. Avoid contact with perfumes and lotions. Clean with a soft polishing cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day returns.',
    images: [
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Majestic+Flora+Nectar&font=playfair-display',
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Majestic+Flora+Nectar+2&font=playfair-display',
    ],
    variants: ['Gold', 'Silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky gold dome huggie earrings with a polished finish. A modern staple for everyday wear.',
    details: '18K gold-plated brass. Hinge closure. 0.6" diameter.',
    care: 'Store in a dry place. Avoid contact with perfumes and lotions. Clean with a soft polishing cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day returns.',
    images: [
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Golden+Sphere+Huggies&font=playfair-display',
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Golden+Sphere+Huggies+2&font=playfair-display',
    ],
    variants: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an organic, lace-like silhouette. Light as air.',
    details: '18K gold-plated brass with textured finish. French wire backs. 1.2" drop.',
    care: 'Store in a dry place. Avoid contact with perfumes and lotions. Clean with a soft polishing cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day returns.',
    images: [
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Amber+Lace+Earrings&font=playfair-display',
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Amber+Lace+Earrings+2&font=playfair-display',
    ],
    variants: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earrings and a necklace. The perfect gesture for a milestone moment.',
    details: '18K gold-plated brass. Includes earrings and 16" necklace. Presented in a Velmora gift box.',
    care: 'Store in a dry place. Avoid contact with perfumes and lotions. Clean with a soft polishing cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day returns.',
    images: [
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Royal+Heirloom+Set&font=playfair-display',
      'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Royal+Heirloom+Set+2&font=playfair-display',
    ],
    variants: ['Gold', 'Silver'],
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
