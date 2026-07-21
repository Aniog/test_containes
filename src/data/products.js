// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'A stunning gold ear cuff adorned with a brilliant crystal accent. This piece captures light from every angle, making it the perfect statement piece for evening wear or everyday elegance. The adjustable design ensures a comfortable fit for all ear types.',
    shortDescription: 'Gold ear cuff with crystal accent',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    rating: 4.8,
    reviewCount: 124,
    materials: '18K gold plated, hypoallergenic stainless steel, Austrian crystal',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in a dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns accepted.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace that brings the beauty of a spring garden to your脖颈. Each crystal is carefully selected for its brilliance and color harmony, creating a piece that transitions seamlessly from day to evening wear.',
    shortDescription: 'Multicolor floral crystal necklace',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: [
      { name: 'Gold Chain', value: 'gold' },
      { name: 'Silver Chain', value: 'silver' },
    ],
    rating: 4.9,
    reviewCount: 89,
    materials: '18K gold plated chain, multicolor Austrian crystals, hypoallergenic',
    care: 'Handle with care to preserve crystal brilliance. Avoid swimming and strenuous activity while wearing. Store separately to prevent scratching.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns accepted.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Our most beloved huggie style — these chunky gold dome earrings make a bold yet elegant statement. The smooth, polished surface catches light beautifully, while the lightweight design ensures all-day comfort. Perfect for stacking or wearing solo.',
    shortDescription: 'Chunky gold dome huggie earrings',
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    rating: 4.7,
    reviewCount: 203,
    materials: '18K gold plated over sterling silver, hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid contact with harsh chemicals.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns accepted.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings that showcase intricate craftsmanship. The delicate lace-like pattern creates stunning visual depth, while the warm amber tones add a touch of vintage romance to any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Antique Gold', value: 'antique' },
    ],
    rating: 4.6,
    reviewCount: 67,
    materials: '18K gold plated, detailed filigree work, hypoallergenic posts',
    care: 'Handle the delicate filigree with care. Clean gently with a soft-bristled brush. Store flat to maintain shape.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns accepted.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'The ultimate gift — a beautifully packaged set featuring a stunning earring and necklace combination. Perfect for gifting or treating yourself, this set includes our bestselling huggie earrings paired with a complementary delicate necklace. Arrives in a luxurious gift box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    category: 'sets',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    variants: [
      { name: 'Gold Set', value: 'gold' },
      { name: 'Rose Gold Set', value: 'rose-gold' },
    ],
    rating: 4.9,
    reviewCount: 156,
    materials: '18K gold plated, premium crystals, comes in luxury gift box',
    care: 'Follow individual care instructions for each piece. Store in the provided gift box when not in use.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day returns accepted. Gift wrapping available.',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layering chains to bold statement pieces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Effortless everyday elegance',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that is both elegant and affordable. The Royal Heirloom Set was the perfect anniversary gift.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'I have sensitive ears and these are the only earrings I can wear all day without irritation. Obsessed!',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Monday mood 🌟',
    author: '@stylebyana',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Layering season',
    author: '@oliviar Style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'My everyday go-to',
    author: '@maya.looks',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
    caption: 'Date night ready ✨',
    author: '@fashionbyjen',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'New favorite pieces',
    author: '@style_sabrina',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Wedding guest glam',
    author: '@clairedressup',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.id !== productId)
    .slice(0, limit);
};
