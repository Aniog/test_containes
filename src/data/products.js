// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    shortDescription: 'Elegant gold ear cuff with delicate crystal accent',
    description: 'The Vivid Aura ear cuff wraps gracefully around your ear, adorned with a subtle crystal accent that catches the light beautifully. This piece effortlessly elevates any outfit from day to evening.',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel base',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping. Orders typically ship within 1-2 business days. 30-day returns accepted for unworn items in original packaging.',
    variants: [
      { name: 'Gold', hex: '#C4A962' },
      { name: 'Silver', hex: '#C0C0C0' }
    ],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    shortDescription: 'Multicolor floral crystal statement necklace',
    description: 'Inspired by garden blossoms at golden hour, the Majestic Flora Nectar necklace features an array of multicolor crystals arranged in a floral pattern. The adjustable chain allows you to wear it at your perfect length.',
    materials: '18K Gold Plated, multicolor crystal beads, Hypoallergenic stainless steel chain',
    care: 'Avoid swimming and showering while wearing. Store flat or hanging to prevent tangling. Clean crystals with a soft, lint-free cloth.',
    shipping: 'Free worldwide shipping. Orders typically ship within 1-2 business days. 30-day returns accepted for unworn items in original packaging.',
    variants: [
      { name: 'Gold', hex: '#C4A962' }
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 89,
    badge: 'New'
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    shortDescription: 'Chunky dome huggie earrings in polished gold',
    description: 'The Golden Sphere Huggies are your everyday statement piece. These chunky dome-shaped huggies hug close to the ear with a comfortable, secure closure. The polished gold finish adds the perfect touch of luxury to any look.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with a soft cloth after wearing. Store separately to prevent scratching. Avoid contact with harsh chemicals and perfumes.',
    shipping: 'Free worldwide shipping. Orders typically ship within 1-2 business days. 30-day returns accepted for unworn items in original packaging.',
    variants: [
      { name: 'Gold', hex: '#C4A962' },
      { name: 'Silver', hex: '#C0C0C0' }
    ],
    images: [
      'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    rating: 4.7,
    reviewCount: 203,
    badge: 'Bestseller'
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    shortDescription: 'Textured gold filigree drop earrings',
    description: 'Delicate filigree work meets modern elegance in the Amber Lace drop earrings. Each earring features intricate lace-like patterns that create beautiful light reflections. The drop design adds movement and sophistication to your look.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel posts',
    care: 'Handle with care to preserve the delicate filigree. Store in the provided gift box. Clean gently with a dry soft cloth.',
    shipping: 'Free worldwide shipping. Orders typically ship within 1-2 business days. 30-day returns accepted for unworn items in original packaging.',
    variants: [
      { name: 'Gold', hex: '#C4A962' }
    ],
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
    ],
    rating: 4.9,
    reviewCount: 67,
    badge: null
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    shortDescription: 'Gift-boxed earring and necklace combination',
    description: 'The Royal Heirloom Set is designed to become a treasured part of your jewelry collection. This curated combination includes a pair of classic gold huggie earrings and a delicate pendant necklace, beautifully packaged in our signature gift box. Perfect for gifting or treating yourself.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Store pieces separately to prevent tangling and scratching. Clean with a soft, dry cloth. Avoid water and harsh chemicals.',
    shipping: 'Free worldwide shipping. Orders typically ship within 1-2 business days. 30-day returns accepted for unworn items in original packaging.',
    variants: [
      { name: 'Gold', hex: '#C4A962' }
    ],
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80'
    ],
    rating: 5.0,
    reviewCount: 156,
    badge: 'Gift Set'
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops, and hoops' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants and chains' },
  { id: 'huggies', name: 'Huggies', description: 'Curved huggie earrings' },
  { id: 'sets', name: 'Gift Sets', description: 'Curated combinations' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. They look so much more expensive than they actually are.',
  },
  {
    id: 2,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found jewelry that is both beautiful AND hypoallergenic. The 18K gold plating doesn\'t irritate my sensitive ears at all. Velmora is now my go-to for gifts.',
  },
  {
    id: 3,
    name: 'Amanda R.',
    rating: 5,
    text: 'The Royal Heirloom Set exceeded all expectations. The packaging alone makes you feel like you\'re receiving something truly special. Perfect anniversary gift.',
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Golden hour glow'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Subtle sparkle'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Layered luxury'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    caption: 'Effortless chic'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Timeless beauty'
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = products.find(p => p.id === productId);
  if (!product) return products.slice(0, limit);
  
  return products
    .filter(p => p.id !== productId)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === product.category && b.category !== product.category) return -1;
      if (b.category === product.category && a.category !== product.category) return 1;
      return b.rating - a.rating;
    })
    .slice(0, limit);
};
