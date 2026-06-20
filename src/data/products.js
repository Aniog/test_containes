// Seed product data for Velmora Fine Jewelry
// Elegant demi-fine gold jewelry — earrings, necklaces, huggies

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    description: 'A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.',
    longDescription: 'The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light like morning dew. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.',
    material: '18K Gold Plated Brass, Crystal',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth.',
    rating: 4.8,
    reviewCount: 124,
    images: [
      'https://picsum.photos/id/1011/1200/1200',
      'https://picsum.photos/id/106/1200/1200',
      'https://picsum.photos/id/160/1200/1200',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    description: 'A multicolor floral crystal necklace that blooms against the skin. A statement of quiet opulence.',
    longDescription: 'The Majestic Flora Nectar necklace captures the ephemeral beauty of a garden in bloom. Each crystal is hand-selected and set in 18K gold-plated brass. The delicate chain drapes gracefully, allowing the pendant to rest perfectly at the collarbone.',
    material: '18K Gold Plated Brass, Multicolor Crystals',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth.',
    rating: 4.9,
    reviewCount: 87,
    images: [
      'https://picsum.photos/id/201/1200/1200',
      'https://picsum.photos/id/251/1200/1200',
      'https://picsum.photos/id/29/1200/1200',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.',
    longDescription: 'The Golden Sphere Huggies are a modern heirloom. Their domed silhouette is both architectural and soft, catching light from every angle. Cast in 18K gold-plated brass and polished to a mirror finish, these huggies are designed to be worn daily.',
    material: '18K Gold Plated Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth.',
    rating: 4.7,
    reviewCount: 156,
    images: [
      'https://picsum.photos/id/180/1200/1200',
      'https://picsum.photos/id/133/1200/1200',
      'https://picsum.photos/id/160/1200/1200',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Timeless elegance.',
    longDescription: 'The Amber Lace Earrings pay homage to traditional filigree techniques reimagined for the modern woman. Each intricate pattern is carefully crafted, creating a delicate web of gold that frames the face beautifully. The lightweight design ensures comfort without sacrificing presence.',
    material: '18K Gold Plated Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth.',
    rating: 4.6,
    reviewCount: 92,
    images: [
      'https://picsum.photos/id/106/1200/1200',
      'https://picsum.photos/id/1011/1200/1200',
      'https://picsum.photos/id/201/1200/1200',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    price: 95,
    description: 'A gift-boxed earring and necklace set. The ultimate expression of considered gifting.',
    longDescription: 'The Royal Heirloom Set is our signature offering — a perfectly matched pair of earrings and necklace presented in a velvet-lined keepsake box. Each piece is crafted from 18K gold-plated brass with delicate crystal accents. An heirloom in the making, designed to be treasured for generations.',
    material: '18K Gold Plated Brass, Crystal',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth.',
    rating: 4.9,
    reviewCount: 63,
    images: [
      'https://picsum.photos/id/251/1200/1200',
      'https://picsum.photos/id/29/1200/1200',
      'https://picsum.photos/id/180/1200/1200',
    ],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => products.find((p) => p.id === id);

// Get related products (same category, excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  
  const related = products
    .filter((p) => p.id !== currentId && p.category === current.category)
    .slice(0, limit);
  
  // If not enough in same category, fill with others
  if (related.length < limit) {
    const others = products
      .filter((p) => p.id !== currentId && !related.includes(p))
      .slice(0, limit - related.length);
    return [...related, ...others];
  }
  
  return related;
};

// Categories
export const categories = ['Earrings', 'Necklaces', 'Huggies'];

// Price ranges for filtering
export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];