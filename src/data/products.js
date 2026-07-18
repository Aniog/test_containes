// Seed product data for Velmora Fine Jewelry
// Premium demi-fine gold jewelry - $30-$120 range

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a sparkling crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://picsum.photos/id/1011/800/800",
      "https://picsum.photos/id/106/800/800",
      "https://picsum.photos/id/160/800/800"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    description: "A romantic multicolor floral crystal necklace featuring delicate gold-plated chains and vibrant crystal blooms. A timeless piece that captures light beautifully.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://picsum.photos/id/201/800/800",
      "https://picsum.photos/id/251/800/800",
      "https://picsum.photos/id/29/800/800"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the perfect everyday statement piece.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://picsum.photos/id/180/800/800",
      "https://picsum.photos/id/133/800/800",
      "https://picsum.photos/id/312/800/800"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and elegant, these earrings add a touch of vintage romance to any look.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://picsum.photos/id/1005/800/800",
      "https://picsum.photos/id/177/800/800",
      "https://picsum.photos/id/250/800/800"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    description: "A curated gift-boxed set featuring our signature huggie earrings paired with a delicate matching necklace. Presented in a luxurious velvet box, perfect for gifting or treating yourself.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://picsum.photos/id/160/800/800",
      "https://picsum.photos/id/201/800/800",
      "https://picsum.photos/id/106/800/800"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  }
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category === category);
};

// Categories for filtering
export const categories = [
  { value: 'all', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Sets' }
];

// Materials for filtering
export const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: '18K Gold Plated' },
  { value: 'crystal', label: 'With Crystal' }
];

// Price ranges
export const priceRanges = [
  { value: 'all', label: 'All Prices', min: 0, max: Infinity },
  { value: 'under50', label: 'Under $50', min: 0, max: 50 },
  { value: '50to80', label: '$50 - $80', min: 50, max: 80 },
  { value: 'over80', label: 'Over $80', min: 80, max: Infinity }
];
