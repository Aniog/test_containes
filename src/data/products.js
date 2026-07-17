// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-ear-cuff',
    name: 'Vivid Aura Ear Cuff',
    price: 42,
    category: 'earrings',
    description: 'A statement ear cuff featuring a stunning crystal accent that catches the light beautifully. The adjustable design ensures a comfortable, secure fit for any ear shape. Perfect for creating an ear party or wearing solo for a subtle sparkle.',
    materials: '18K Gold-Plated Brass, Austrian Crystals, Hypoallergenic',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A962' },
      { name: 'Silver', color: '#C0C0C0' }
    ],
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller'
  },
  {
    id: 'majestic-flora-necklace',
    name: 'Majestic Flora Necklace',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that brings garden-inspired elegance to any outfit. Each crystal is carefully selected for its brilliant color and clarity. The adjustable chain allows you to wear it at your perfect length.',
    materials: '18K Gold-Plated Sterling Silver, Multicolor Austrian Crystals, Hypoallergenic',
    care: 'Avoid exposure to water and harsh chemicals. Remove before sleeping. Polish with a jewelry cloth to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    variants: [
      { name: 'Gold Chain', color: '#C9A962' },
      { name: 'Silver Chain', color: '#C0C0C0' }
    ],
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, luxurious dome huggie earrings that make a statement. The smooth spherical design adds dimensionality and catches light from every angle. These everyday luxuries elevate any look from casual to polished.',
    materials: '18K Gold-Plated Brass, Hypoallergenic, Lead & Nickel Free',
    care: 'Wipe with a soft cloth after wearing. Store separately to prevent scratching. Avoid contact with liquids.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A962' },
      { name: 'Rose Gold', color: '#E8B4B8' }
    ],
    rating: 4.7,
    reviewCount: 203,
    badge: 'Customer Favorite'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Delicate textured gold filigree drop earrings featuring intricate lace-like patterns. The openwork design creates beautiful light play and movement. A romantic, feminine choice for both everyday elegance and special occasions.',
    materials: '18K Gold-Plated Brass, Hypoallergenic, Lead-Free',
    care: 'Handle with care to maintain the intricate pattern. Store in the provided pouch. Clean with a dry brush.',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A962' }
    ],
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'An exquisite gift-boxed set featuring a stunning pair of earrings and a coordinating necklace. Designed to be worn together for a cohesive, luxurious look or separately for a more subtle elegance. The perfect gift for yourself or someone special.',
    materials: '18K Gold-Plated Brass, Cubic Zirconia, Hypoallergenic',
    care: 'Store in the provided gift box when not wearing. Clean with a soft, dry cloth. Avoid water and perfume.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', color: '#C9A962' }
    ],
    rating: 5.0,
    reviewCount: 156,
    badge: 'Gift Set'
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & statement pieces',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Sleek & statement hoops',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that\'s both elegant and affordable. The Royal Heirloom Set was the perfect anniversary gift for my wife.',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'The packaging alone makes you feel like you\'re receiving something truly special. Beautiful craftsmanship.',
    product: 'Majestic Flora Necklace'
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80',
    caption: 'My everyday essential ✨',
    aspectRatio: '9:16'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
    caption: 'Date night ready',
    aspectRatio: '9:16'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
    caption: 'Layered vibes',
    aspectRatio: '9:16'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80',
    caption: 'Minimalist chic',
    aspectRatio: '9:16'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&q=80',
    caption: 'The details matter',
    aspectRatio: '9:16'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
    caption: 'Golden hour glow',
    aspectRatio: '9:16'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
