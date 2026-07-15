// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: '1',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviews: 127,
    description: 'A mesmerizing gold ear cuff adorned with crystal accents. This statement piece captures light from every angle, making it perfect for both day and evening wear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystals, Hypoallergenic stainless steel base',
    care: 'Store in the provided pouch when not wearing. Avoid contact with water, perfume, and harsh chemicals. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express: 2-3 business days.',
    images: [
      { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop', alt: 'Gold ear cuff with crystal accent - front view' },
      { src: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&h=800&fit=crop', alt: 'Gold ear cuff styled on ear' },
    ],
    variants: ['Gold', 'Rose Gold'],
    isBestseller: true,
  },
  {
    id: '2',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviews: 89,
    description: 'A stunning multicolor floral crystal necklace that brings together the beauty of nature and elegance. Each crystal is carefully selected for its brilliance and set in gold-plated sterling silver.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated Sterling Silver, Multicolor crystals, Nickel-free',
    care: 'Keep away from water and beauty products. Store separately to avoid scratches. Polish with a jewelry cloth for lasting shine.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express: 2-3 business days.',
    images: [
      { src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop', alt: 'Floral crystal necklace - front view' },
      { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop', alt: 'Floral necklace styled on model' },
    ],
    variants: ['Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: '3',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviews: 203,
    description: 'Chunky, luxurious gold dome huggie earrings that hug your earlobe with comfort and style. The smooth, polished surface catches light beautifully for an effortless statement look.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Sterling silver core, Hypoallergenic',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid swimming and showering while wearing.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express: 2-3 business days.',
    images: [
      { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=800&fit=crop', alt: 'Golden sphere huggie earrings - pair view' },
      { src: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=800&fit=crop', alt: 'Huggies worn on ears' },
    ],
    variants: ['Gold', 'Silver'],
    isBestseller: true,
  },
  {
    id: '4',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    rating: 4.9,
    reviews: 67,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is handcrafted to create a delicate, feminine silhouette that elevates any outfit.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass base, Cubic Zirconia accents, Hypoallergenic',
    care: 'Handle with care as filigree can be delicate. Store flat in the provided box. Clean gently with a soft brush.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5-7 business days. Express: 2-3 business days.',
    images: [
      { src: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&h=800&fit=crop', alt: 'Amber lace drop earrings - detailed view' },
      { src: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=800&fit=crop', alt: 'Lace earrings styled on model' },
    ],
    variants: ['Gold', 'Rose Gold'],
    isBestseller: true,
  },
  {
    id: '5',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    rating: 5.0,
    reviews: 45,
    description: 'Our signature gift-boxed set featuring a stunning earring and necklace combination. Perfect for gifting or treating yourself to a coordinated look. Presented in a luxurious velvet-lined box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Sterling Silver base, AAA quality cubic zirconia, Comes in luxury gift box',
    care: 'Store in the provided gift box when not wearing. Each piece should be cleaned and stored separately to maintain their beauty.',
    shipping: 'Free worldwide shipping on all orders. Arrives in a luxury gift box, perfect for gifting. Standard delivery: 5-7 business days.',
    images: [
      { src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=800&fit=crop', alt: 'Royal Heirloom Set - complete gift box' },
      { src: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&h=800&fit=crop', alt: 'Set pieces styled together' },
    ],
    variants: ['Gold', 'Rose Gold'],
    isBestseller: true,
  },
];

export const categories = [
  { 
    id: 'earrings', 
    name: 'Earrings', 
    description: 'From subtle studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop'
  },
  { 
    id: 'necklaces', 
    name: 'Necklaces', 
    description: 'Layer, stack, and make it yours',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop'
  },
  { 
    id: 'huggies', 
    name: 'Huggies', 
    description: 'The everyday essential',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop'
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny!',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Fast shipping, beautiful packaging, and the jewelry itself exceeded my expectations. The Royal Heirloom Set was perfect for my anniversary.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that is both elegant and affordable. The gold tone is rich and doesnt fade. Im a customer for life!',
    product: 'Vivid Aura Jewels',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=1067&fit=crop',
    caption: 'My everyday go-to ✨',
    handle: '@stylebyjenna',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=1067&fit=crop',
    caption: 'Gift for myself 💫',
    handle: '@sarah_makes',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=1067&fit=crop',
    caption: 'Obsessed with these!',
    handle: '@fashionandco',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=1067&fit=crop',
    caption: 'Perfect layering ✨',
    handle: '@jewelrylover',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=1067&fit=crop',
    caption: 'Date night ready 💕',
    handle: '@the.luxe.life',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=1067&fit=crop',
    caption: 'Birthday treat 🎂',
    handle: '@styledaily',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
