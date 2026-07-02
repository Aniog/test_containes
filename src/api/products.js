export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'Gold ear cuff with crystal accent. A subtle yet striking addition to your daily stack.',
    materials: '18K Gold Plated Brass, Cubic Zirconia',
    shipping: 'Ships within 1-2 business days. Free worldwide shipping on orders over $50.',
    images: ['vivid-aura-1', 'vivid-aura-2'],
    isBestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'Multicolor floral crystal necklace. Inspired by the soft blooms of early spring.',
    materials: '18K Gold Plated Brass, Mixed Crystals',
    shipping: 'Ships within 1-2 business days. Free worldwide shipping on orders over $50.',
    images: ['majestic-flora-1', 'majestic-flora-2'],
    isBestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Earrings',
    description: 'Chunky gold dome huggie earrings. Minimalist high-polished spheres for effortless elegance.',
    materials: '18K Gold Plated Brass',
    shipping: 'Ships within 1-2 business days. Free worldwide shipping on orders over $50.',
    images: ['golden-sphere-1', 'golden-sphere-2'],
    isBestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Textured gold filigree drop earrings. Intricate craftsmanship meets modern luxury.',
    materials: '18K Gold Plated Brass',
    shipping: 'Ships within 1-2 business days. Free worldwide shipping on orders over $50.',
    images: ['amber-lace-1', 'amber-lace-2'],
    isBestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    description: 'Gift-boxed earring + necklace set. The ultimate collection for moments worth treasuring.',
    materials: '18K Gold Plated Brass, Lab-grown Crystals',
    shipping: 'Ships within 1-2 business days. Free worldwide shipping.',
    images: ['royal-heirloom-1', 'royal-heirloom-2'],
    isBestseller: true
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
