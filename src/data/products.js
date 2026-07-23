// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A delicate gold ear cuff adorned with a brilliant crystal accent. This piece catches the light beautifully, adding instant elegance to any look.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    badge: null,
    hoverImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A stunning multicolor floral crystal necklace that radiates warmth and sophistication. Each crystal is carefully selected for its unique brilliance.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    badge: 'Bestseller',
    hoverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings that make a statement. The smooth, polished surface reflects light for a luxurious, dimensional look.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 156,
    badge: null,
    hoverImage: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings with intricate detailing. The delicate lace-like pattern adds vintage-inspired charm to your ensemble.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 72,
    badge: 'New',
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'An exquisite gift-boxed set featuring a matching earring and necklace duo. Presented in luxury packaging, perfect for gifting or treating yourself.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 45,
    badge: 'Gift Set',
    hoverImage: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. The Royal Heirloom Set was the perfect anniversary gift.',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found jewelry that looks luxurious without the luxury price tag. Velmora is now my go-to for all occasions.',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=400&q=80',
    caption: 'Stacked perfection',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80',
    caption: 'Effortless luxury',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'Love at first sight',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Darling details',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  
  return products
    .filter(p => p.id !== productId)
    .slice(0, limit);
};
