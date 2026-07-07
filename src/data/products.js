// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'A delicate gold ear cuff adorned with a shimmering crystal accent. This elegant piece adds instant glamour to any look, day or evening.',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'A stunning multicolor floral crystal pendant necklace with a delicate chain. The intricate crystal work catches light beautifully, making it a true statement piece.',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky solid dome huggie earrings in polished gold. These bold yet wearable hoops hug your earlobe for comfortable all-day wear with maximum impact.',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Intricate textured gold filigree drop earrings with a vintage-inspired design. Each pair is meticulously crafted for lightweight comfort and timeless elegance.',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 67,
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'An elegant gift-boxed earring and necklace combination. This curated set makes the perfect gift for yourself or someone special, presented in our signature luxury packaging.',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 156,
    badge: 'Bestseller',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  
  return products
    .filter((p) => p.id !== productId)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === product.category && b.category !== product.category) return -1;
      if (b.category === product.category && a.category !== product.category) return 1;
      return 0;
    })
    .slice(0, limit);
};

// UGC / Instagram-style content data
export const ugcContent = [
  {
    id: 'ugc-1',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Everyday elegance',
    author: 'Sarah M.',
  },
  {
    id: 'ugc-2',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80',
    caption: 'Golden hour glow',
    author: 'Emily R.',
  },
  {
    id: 'ugc-3',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
    caption: 'Stacked and styled',
    author: 'Jessica L.',
  },
  {
    id: 'ugc-4',
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80',
    caption: 'Minimal luxury',
    author: 'Amanda K.',
  },
  {
    id: 'ugc-5',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80',
    caption: 'Heirloom vibes',
    author: 'Rachel T.',
  },
  {
    id: 'ugc-6',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Gift ready',
    author: 'Michelle D.',
  },
];

// Testimonials data
export const testimonials = [
  {
    id: 'test-1',
    name: 'Alexandra R.',
    rating: 5,
    text: 'The quality exceeded my expectations. I\'ve received so many compliments on my Golden Sphere Huggies.',
  },
  {
    id: 'test-2',
    name: 'Olivia M.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
  },
  {
    id: 'test-3',
    name: 'Sophia K.',
    rating: 5,
    text: 'Finally found affordable jewelry that doesn\'t look cheap. The Royal Heirloom Set is stunning.',
  },
];
