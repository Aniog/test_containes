const FALLBACK_PRODUCTS = [
  { id: 'f1', name: 'Vivid Aura Jewels', price: 42, slug: 'vivid-aura-jewels', category: 'Earrings', isBestseller: true, description: 'Gold ear cuff with crystal accent' },
  { id: 'f2', name: 'Majestic Flora Nectar', price: 68, slug: 'majestic-flora-nectar', category: 'Necklaces', isBestseller: true, description: 'Multicolor floral crystal necklace' },
  { id: 'f3', name: 'Golden Sphere Huggies', price: 38, slug: 'golden-sphere-huggies', category: 'Huggies', isBestseller: true, description: 'Chunky gold dome huggie earrings' },
  { id: 'f4', name: 'Amber Lace Earrings', price: 54, slug: 'amber-lace-earrings', category: 'Earrings', isBestseller: true, description: 'Textured gold filigree drop earrings' },
  { id: 'f5', name: 'Royal Heirloom Set', price: 95, slug: 'royal-heirloom-set', category: 'Sets', isBestseller: true, description: 'Gift-boxed earring + necklace set' }
];

export const fetchProducts = async (filters = {}) => {
  let data = [...FALLBACK_PRODUCTS];
  if (filters.category && filters.category !== 'All') {
    data = data.filter(p => p.category === filters.category);
  }
  return data;
};

export const fetchProductBySlug = async (slug) => {
  return FALLBACK_PRODUCTS.find(p => p.slug === slug) || null;
};
