// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    comparePrice: null,
    category: 'earrings',
    tags: ['bestseller', 'ear-cuff'],
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. This statement piece adds instant elegance to any look, from casual brunch to evening out. Adjustable fit for left or right ear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K gold plated over sterling silver. Hypoallergenic. Crystal detail.',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    featured: true,
    isNew: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    comparePrice: null,
    category: 'necklaces',
    tags: ['bestseller', 'crystal', 'floral'],
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a spring garden. Each crystal is carefully selected for its unique color gradient, creating a piece that is truly one of a kind. Perfect for layering or wearing alone as a statement piece.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K gold plated chain. Multicolor crystal beads. Hypoallergenic.',
    care: 'Avoid contact with water and chemicals. Store flat or hanging to prevent tangling. Clean crystals with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    isNew: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    comparePrice: 48,
    category: 'earrings',
    tags: ['bestseller', 'huggies'],
    description: 'Our signature chunky gold dome huggie earrings. These sculptural spheres hug your earlobe for all-day comfort while making a bold statement. The perfect everyday luxury piece.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K gold plated over brass. Hypoallergenic posts.',
    care: 'Wipe with soft cloth after wearing. Store separately to avoid scratching. Avoid water and perfumes.',
    shipping: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    variants: ['gold', 'silver'],
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    rating: 4.7,
    reviewCount: 203,
    featured: true,
    isNew: false,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    comparePrice: null,
    category: 'earrings',
    tags: ['bestseller', 'drop-earrings', 'filigree'],
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate openwork design catches the light beautifully, creating an ethereal effect. A romantic choice for special occasions.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K gold plated over sterling silver. Hypoallergenic.',
    care: 'Store in the provided jewelry box. Avoid moisture and harsh chemicals. Clean with a soft brush if needed.',
    shipping: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.9,
    reviewCount: 67,
    featured: true,
    isNew: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    comparePrice: 120,
    category: 'sets',
    tags: ['gift', 'set', 'bestseller'],
    description: 'The perfect gift, beautifully presented in our signature gift box. This curated set includes a pair of our bestselling Classic Pearl Drops and the matching Elena Pendant necklace. Makes an unforgettable gift for yourself or someone special.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K gold plated over sterling silver. Freshwater pearls. Hypoallergenic.',
    care: 'Store pieces separately to prevent scratching. Clean pearls gently with a barely damp cloth. Avoid contact with perfumes.',
    shipping: 'Free worldwide shipping on all orders. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    variants: ['gold'],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    rating: 5.0,
    reviewCount: 156,
    featured: true,
    isNew: false,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layered chains and statement pendants',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Sculptural ear candy that hugs your lobe',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My husband was thrilled with how beautifully it was packaged.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally jewelry that doesn\'t turn my ears green! The quality is exceptional for the price point.',
    product: 'Amber Lace Earrings',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
    caption: 'Monday mood',
    aspectRatio: '9:16',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
    caption: 'Huggies season',
    aspectRatio: '9:16',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
    caption: 'Layered up',
    aspectRatio: '9:16',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
    caption: 'Statement pieces',
    aspectRatio: '9:16',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Gold obsessed',
    aspectRatio: '9:16',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Date night ready',
    aspectRatio: '9:16',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.tags.includes('bestseller'));
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId)
    .slice(0, limit);
};
