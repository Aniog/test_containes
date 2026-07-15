// Velmora Fine Jewelry - Product Data
// Seed products for the e-commerce storefront

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    originalPrice: null,
    currency: 'USD',
    category: 'earrings',
    subcategory: 'ear-cuffs',
    material: '18K Gold Plated',
    description: 'A stunning gold ear cuff adorned with a sparkling crystal accent. This piece captures light beautifully, adding a touch of luxury to any look.',
    longDescription: 'Elevate your style with our Vivid Aura Jewels ear cuff. Crafted with meticulous attention to detail, this piece features a sleek gold band that wraps elegantly around your ear, punctuated by a brilliant crystal that catches the light from every angle. Perfect for adding a touch of glamour to both casual and formal ensembles.',
    careInstructions: 'Store in a cool, dry place. Avoid contact with perfumes and chemicals. Clean gently with a soft cloth.',
    features: ['Hypoallergenic', 'Tarnish resistant', 'Lightweight design'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    colors: ['gold', 'silver'],
    images: [
      { id: 'vivid-aura-1', alt: 'Vivid Aura Jewels ear cuff front view' },
      { id: 'vivid-aura-2', alt: 'Vivid Aura Jewels ear cuff side view' },
      { id: 'vivid-aura-3', alt: 'Vivid Aura Jewels ear cuff detail' },
    ],
    tags: ['bestseller', 'new-arrival', 'gift-pick'],
    createdAt: '2024-01-15',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    originalPrice: null,
    currency: 'USD',
    category: 'necklaces',
    subcategory: 'pendant-necklaces',
    material: '18K Gold Plated',
    description: 'A multicolor floral crystal necklace that brings nature\'s beauty to life. Each petal is carefully set with vibrant crystals.',
    longDescription: 'The Majestic Flora Nectar necklace is a celebration of nature\'s artistry. Featuring a delicate floral pendant adorned with multicolor crystals, this piece captures the essence of a blooming garden. The adjustable chain allows for versatile styling, making it perfect for layering or wearing as a statement piece.',
    careInstructions: 'Store in a cool, dry place. Avoid contact with perfumes and chemicals. Clean gently with a soft cloth.',
    features: ['Adjustable chain', 'Vibrant crystals', 'Nature-inspired design'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    colors: ['gold'],
    images: [
      { id: 'majestic-flora-1', alt: 'Majestic Flora Nectar necklace front view' },
      { id: 'majestic-flora-2', alt: 'Majestic Flora Nectar necklace detail' },
      { id: 'majestic-flora-3', alt: 'Majestic Flora Nectar necklace on model' },
    ],
    tags: ['bestseller', 'gift-pick'],
    createdAt: '2024-02-20',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    originalPrice: null,
    currency: 'USD',
    category: 'huggies',
    subcategory: 'huggie-earrings',
    material: '18K Gold Plated',
    description: 'Chunky gold dome huggie earrings that make a bold statement. Their smooth, polished surface reflects light beautifully.',
    longDescription: 'Our Golden Sphere Huggies are the perfect blend of bold and elegant. These chunky dome-shaped huggies feature a smooth, polished surface that catches the light from every angle. The secure click closure ensures comfortable all-day wear, while the substantial weight gives them a luxurious feel.',
    careInstructions: 'Store in a cool, dry place. Avoid contact with perfumes and chemicals. Clean gently with a soft cloth.',
    features: ['Secure click closure', 'Polished finish', 'Comfortable fit'],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    colors: ['gold', 'silver'],
    images: [
      { id: 'golden-sphere-1', alt: 'Golden Sphere Huggies front view' },
      { id: 'golden-sphere-2', alt: 'Golden Sphere Huggies side view' },
      { id: 'golden-sphere-3', alt: 'Golden Sphere Huggies on model' },
    ],
    tags: ['bestseller'],
    createdAt: '2024-03-10',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    originalPrice: null,
    currency: 'USD',
    category: 'earrings',
    subcategory: 'drop-earrings',
    material: '18K Gold Plated',
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. They sway gently with movement.',
    longDescription: 'The Amber Lace Earrings are a testament to the art of filigree. Each earring features an intricate lace-like pattern that has been meticulously crafted in gold. The drop design allows them to sway gently with your movement, catching the light and creating a mesmerizing effect. Perfect for adding a touch of vintage elegance to any outfit.',
    careInstructions: 'Store in a cool, dry place. Avoid contact with perfumes and chemicals. Clean gently with a soft cloth.',
    features: ['Filigree craftsmanship', 'Lightweight design', 'Vintage-inspired'],
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    colors: ['gold'],
    images: [
      { id: 'amber-lace-1', alt: 'Amber Lace Earrings front view' },
      { id: 'amber-lace-2', alt: 'Amber Lace Earrings detail' },
      { id: 'amber-lace-3', alt: 'Amber Lace Earrings on model' },
    ],
    tags: ['new-arrival'],
    createdAt: '2024-04-05',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    originalPrice: 120,
    currency: 'USD',
    category: 'sets',
    subcategory: 'gift-sets',
    material: '18K Gold Plated',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for special occasions or as a thoughtful gift.',
    longDescription: 'The Royal Heirloom Set is the ultimate expression of elegance. This curated set includes a pair of stunning drop earrings and a matching pendant necklace, both featuring the same intricate design language. Presented in our signature gift box, this set makes for a perfect present for birthdays, anniversaries, or any special occasion.',
    careInstructions: 'Store in the provided gift box. Avoid contact with perfumes and chemicals. Clean gently with a soft cloth.',
    features: ['Gift-boxed presentation', 'Matching design', 'Premium quality'],
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    colors: ['gold'],
    images: [
      { id: 'royal-heirloom-1', alt: 'Royal Heirloom Set box view' },
      { id: 'royal-heirloom-2', alt: 'Royal Heirloom Set earrings' },
      { id: 'royal-heirloom-3', alt: 'Royal Heirloom Set necklace' },
    ],
    tags: ['bestseller', 'gift-pick', 'sale'],
    createdAt: '2024-05-15',
  },
];

// Categories for filtering
export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

// Price ranges for filtering
export const priceRanges = [
  { id: 'under-50', name: 'Under $50', min: 0, max: 49 },
  { id: '50-75', name: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', name: 'Over $75', min: 76, max: Infinity },
];

// Materials for filtering
export const materials = [
  { id: '18k-gold-plated', name: '18K Gold Plated' },
  { id: 'silver', name: 'Silver' },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is exceptional for the price. I wear my Golden Sphere Huggies every day and they still look brand new!',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set for my sister\'s birthday and she absolutely loved it. The packaging is beautiful!',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Velmora has become my go-to for jewelry. The pieces are elegant, well-made, and perfect for gifting.',
    product: 'Majestic Flora Nectar',
  },
];

// UGC content for the reel strip
export const ugcContent = [
  {
    id: 1,
    image: 'ugc-1',
    caption: 'Golden hour glow with my new Vivid Aura cuff ✨',
    user: '@sarahstyle',
  },
  {
    id: 2,
    image: 'ugc-2',
    caption: 'Obsessed with this Majestic Flora necklace 💐',
    user: '@emilyfashion',
  },
  {
    id: 3,
    image: 'ugc-3',
    caption: 'The perfect everyday huggies! @velmoraofficial',
    user: '@jessicajewels',
  },
  {
    id: 4,
    image: 'ugc-4',
    caption: 'Gifted myself the Royal Heirloom Set 🎁',
    user: '@luxelook',
  },
  {
    id: 5,
    image: 'ugc-5',
    caption: 'These Amber Lace earrings are everything!',
    user: '@stylebyana',
  },
];

// Helper function to format price
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

// Helper function to get related products
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
