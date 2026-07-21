// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    description: 'A stunning gold ear cuff adorned with a sparkling crystal accent. This piece effortlessly elevates any look, from casual daytime to elegant evening wear. The adjustable design ensures a comfortable, customized fit for all ear types.',
    shortDescription: 'Gold ear cuff with crystal accent',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A96E' },
      { name: 'Silver', color: '#C0C0C0' }
    ],
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel base',
    care: 'Avoid contact with water, perfume, and chemicals. Store in a cool, dry place. Clean gently with a soft cloth.',
    rating: 4.8,
    reviewCount: 124,
    badge: 'bestseller'
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is carefully selected for its brilliance and set in delicate gold plating. The adjustable chain allows you to wear it at your preferred length.',
    shortDescription: 'Multicolor floral crystal necklace',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A96E' }
    ],
    materials: '18K Gold Plated, Multicolor crystals, Hypoallergenic stainless steel chain',
    care: 'Remove before swimming or showering. Avoid applying perfume directly on the jewelry. Store separately to prevent scratching.',
    rating: 4.9,
    reviewCount: 89,
    badge: 'new'
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    description: 'Classic meets contemporary with these chunky gold dome huggie earrings. The smooth, polished spheres create a bold statement while remaining lightweight and comfortable for all-day wear. Perfect for stacking or wearing solo.',
    shortDescription: 'Chunky gold dome huggie earrings',
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A96E' },
      { name: 'Rose Gold', color: '#E8B4B8' }
    ],
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with a soft cloth after each use. Keep away from moisture. Store in the provided pouch when not wearing.',
    rating: 4.7,
    reviewCount: 203,
    badge: 'bestseller'
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    description: 'Intricate textured gold filigree drop earrings that showcase the beauty of traditional lace patterns reimagined in precious metal. The delicate openwork design catches light beautifully, creating an ethereal glow with every movement.',
    shortDescription: 'Textured gold filigree drop earrings',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A96E' }
    ],
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Handle with care to maintain the delicate filigree work. Clean gently with a soft-bristled brush. Store flat to prevent bending.',
    rating: 4.9,
    reviewCount: 67,
    badge: 'new'
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    description: 'Our signature gift-boxed set featuring a pair of elegant earrings and a coordinating necklace. Presented in luxurious packaging, this set makes the perfect gift for birthdays, anniversaries, or simply because she deserves it. Each piece is crafted to become a treasured keepsake.',
    shortDescription: 'Gift-boxed earring + necklace set',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A96E' }
    ],
    materials: '18K Gold Plated, Cubic Zirconia, Hypoallergenic stainless steel',
    care: 'Follow individual care instructions for each piece. Store in the provided gift box to maintain their beauty.',
    rating: 5.0,
    reviewCount: 156,
    badge: 'bestseller'
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getBestsellers = () => {
  return products.filter(p => p.badge === 'bestseller');
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
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
