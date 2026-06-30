// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.9,
    reviews: 127,
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime to elegant evening wear.',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Standard delivery 5-7 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.8,
    reviews: 89,
    description: 'A multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and unique color gradient.',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic stainless steel chain',
    care: 'Avoid contact with water and chemicals. Store separately to prevent scratching. Polish with a jewelry cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Express shipping available.',
    returns: '30-day hassle-free returns. Complete packaging required for refunds.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.9,
    reviews: 203,
    description: 'Our bestselling chunky gold dome huggie earrings. The perfect everyday essential that adds just the right amount of sparkle to your look.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid swimming and showering.',
    shipping: 'Free worldwide shipping. Same-day dispatch on orders before 2pm. Track your order online.',
    returns: '30-day returns. Contact us for exchanges. Customer satisfaction guaranteed.',
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.7,
    reviews: 64,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These statement pieces are perfect for special occasions.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Handle with care to maintain filigree detail. Store flat to prevent bending. Clean with a soft brush.',
    shipping: 'Complimentary shipping on all orders. Arrives beautifully packaged in a velvet-lined box.',
    returns: '30-day satisfaction guarantee. Dedicated customer support for any concerns.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 4.9,
    reviews: 156,
    description: 'The ultimate gift presentation. This luxurious gift-boxed set includes a pair of classic gold huggie earrings and a matching delicate chain necklace. Perfect for gifting or treating yourself.',
    materials: '18K Gold Plated, Luxury gift box included, Hypoallergenic stainless steel',
    care: 'Store in the provided luxury box when not wearing. Clean pieces separately. Avoid stacking with other jewelry.',
    shipping: 'Free worldwide shipping. Gift wrapping available at checkout. Ships in signature packaging.',
    returns: '30-day returns on unworn items. Happy to help with exchanges or sizing questions.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=800&q=80',
    ],
    variants: ['Gold'],
    bestseller: true,
    isSet: true,
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
    text: 'Absolutely stunning pieces. The quality exceeded my expectations. I receive compliments every time I wear them.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it. Beautifully packaged too!',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive without the price tag. Velmora is my new go-to for gifts.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop',
    caption: 'Wearing my Golden Sphere Huggies',
    author: 'Mia',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'New favorite from Velmora',
    author: 'Chloe',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop',
    caption: 'The Royal Heirloom Set is everything',
    author: 'Olivia',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=400&h=711&fit=crop',
    caption: 'Everyday luxury',
    author: 'Emma',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'My collection grows',
    author: 'Sophie',
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter((p) => p.category === category);
};

export const getBestsellers = () => {
  return products.filter((p) => p.bestseller);
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProduct.id)
    .slice(0, limit);
};
