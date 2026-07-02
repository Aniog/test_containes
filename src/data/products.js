const imageUrls = {
  'vivid-aura-jewels': 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop',
  'majestic-flora-nectar': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
  'golden-sphere-huggies': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop',
  'amber-lace-earrings': 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&auto=format&fit=crop',
  'royal-heirloom-set': 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop',
};

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 127,
    category: 'earrings',
    tags: ['earrings', 'cuff', 'crystal', 'bestseller'],
    description: 'A sculptural gold ear cuff with a luminous crystal accent, designed to catch the light at every angle. No piercing required — simply slide onto the ear for an effortless statement.',
    materials: '18K gold-plated brass, cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfumes, lotions, and water. Polish gently with a soft cloth to maintain shine.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express delivery available at checkout.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: true },
    ],
    images: 4,
    imageUrl: imageUrls['vivid-aura-jewels'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviewCount: 203,
    category: 'necklaces',
    tags: ['necklaces', 'floral', 'crystal', 'bestseller'],
    description: 'A delicate pendant necklace featuring a cascade of multicolor floral crystals suspended from a fine gold chain. A piece that feels both vintage and utterly modern.',
    materials: '18K gold-plated stainless steel, hand-set crystals. Lead-free and hypoallergenic.',
    care: 'Store flat to prevent tangling. Keep away from moisture and harsh chemicals.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: false },
    ],
    images: 4,
    imageUrl: imageUrls['majestic-flora-nectar'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 89,
    category: 'huggies',
    tags: ['huggies', 'earrings', 'minimal', 'bestseller'],
    description: 'Chunky dome huggie earrings with a polished mirror finish. Small in size, bold in presence. The perfect everyday hoop elevated.',
    materials: '18K gold-plated brass with surgical steel posts. Lightweight and comfortable for all-day wear.',
    care: 'Wipe clean after wear. Store separately to avoid scratches.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: true },
    ],
    images: 4,
    imageUrl: imageUrls['golden-sphere-huggies'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 74,
    category: 'earrings',
    tags: ['earrings', 'drop', 'filigree', 'bestseller'],
    description: 'Textured gold filigree drop earrings inspired by antique lace patterns. Intricate yet lightweight, they sway with a graceful, hypnotic rhythm.',
    materials: '18K gold-plated brass with intricate cutwork detailing. Nickel-free.',
    care: 'Handle with care due to delicate filigree. Store in a soft pouch.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: true },
    ],
    images: 4,
    imageUrl: imageUrls['amber-lace-earrings'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    originalPrice: 120,
    rating: 5.0,
    reviewCount: 156,
    category: 'sets',
    tags: ['sets', 'earrings', 'necklaces', 'gift', 'bestseller'],
    description: 'A curated gift set featuring a pair of elegant stud earrings and a matching pendant necklace, presented in our signature velvet gift box. The ultimate self-gift or surprise for someone special.',
    materials: '18K gold-plated brass with surgical steel posts. Necklace chain: 45cm with 5cm extender.',
    care: 'Store in provided gift box. Avoid contact with water and cosmetics.',
    shipping: 'Free worldwide shipping. Express delivery included on gift sets.',
    returns: '30-day hassle-free returns. Gift packaging must be intact.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: true },
    ],
    images: 4,
    imageUrl: imageUrls['royal-heirloom-set'],
  },
];

export const getProductImage = (slug) => imageUrls[slug] || imageUrls['vivid-aura-jewels'];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);

export const getRelatedProducts = (slug, limit = 4) => {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter(p => p.slug !== slug && p.category === current.category)
    .concat(products.filter(p => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
};

export const categories = [
  { id: 'earrings', name: 'Earrings', label: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces', label: 'Necklaces' },
  { id: 'huggies', name: 'Huggies', label: 'Huggies' },
  { id: 'sets', name: 'Sets', label: 'Gift Sets' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality exceeded my expectations. These pieces look and feel so much more expensive than they are. I have received compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and my sister absolutely loved it. The packaging alone felt like opening something from a luxury boutique.',
  },
  {
    id: 3,
    name: 'Jessica T.',
    rating: 5,
    text: 'I have sensitive ears and these are the first fashion earrings I can wear all day without irritation. Beautiful design and truly hypoallergenic.',
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday gold moments' },
  { id: 2, caption: 'Dinner date ready' },
  { id: 3, caption: 'Stacking my favorites' },
  { id: 4, caption: 'Golden hour glow' },
  { id: 5, caption: 'Minimal but mighty' },
  { id: 6, caption: 'Self-gift season' },
];
