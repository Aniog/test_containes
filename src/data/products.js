// Velmora Fine Jewelry - Product Data
export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    nameDisplay: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    tag: 'Bestseller',
    rating: 4.8,
    reviews: 124,
    description: 'An exquisite ear cuff featuring a delicate crystal accent that catches the light beautifully. This piece adds an instant touch of elegance to any look, day or evening.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel base',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in the provided jewelry pouch when not wearing. Clean gently with a soft, dry cloth.',
    shipping: 'Free standard shipping on orders over $50. Express shipping available at checkout. Most orders ship within 1-2 business days.',
    returns: 'We offer a 30-day return policy for unworn items in original packaging. Contact our customer care team to initiate a return.',
    variants: ['Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    nameDisplay: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    tag: 'New Arrival',
    rating: 4.9,
    reviews: 89,
    description: 'A stunning multicolor floral crystal necklace that blooms with every movement. The intricate floral details are crafted to perfection, making this a statement piece for any occasion.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic stainless steel chain',
    care: 'Avoid water exposure and harsh chemicals. Apply perfume before wearing. Store separately to prevent scratching.',
    shipping: 'Complimentary standard shipping on all orders over $50. Express delivery available at checkout.',
    returns: '30-day hassle-free returns. Items must be unworn and in original condition with all packaging.',
    variants: ['Gold'],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    nameDisplay: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    tag: 'Bestseller',
    rating: 4.7,
    reviews: 203,
    description: 'Our signature chunky dome huggie earrings that hug the earlobe perfectly. These everyday essentials feature a smooth, polished finish that adds subtle sophistication to any outfit.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Wipe with a soft cloth after wearing. Keep away from water and beauty products. Store in the provided pouch.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery in 5-7 business days.',
    returns: 'We accept returns within 30 days of delivery. Items must be unworn and in original packaging.',
    variants: ['Gold', 'Rose Gold', 'Silver'],
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    nameDisplay: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    tag: 'Limited Edition',
    rating: 5.0,
    reviews: 67,
    description: 'Intricate textured gold filigree drop earrings inspired by vintage lace patterns. Each pair is carefully crafted to capture the delicate beauty of hand embroidery.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Hypoallergenic stainless steel posts',
    care: 'Handle with care to preserve the intricate detailing. Avoid contact with water and chemicals. Store flat or hanging.',
    shipping: 'Free shipping on orders over $50. Each piece ships in a signature Velmora gift box.',
    returns: '30-day return policy. Must be unworn with original packaging and all components included.',
    variants: ['Gold'],
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    featured: true,
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    nameDisplay: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    tag: 'Gift Boxed',
    rating: 4.9,
    reviews: 156,
    description: 'An elegant gift-boxed set featuring a matching pair of stud earrings and a delicate necklace. The perfect gift for yourself or someone special, presented in our signature luxury packaging.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    care: 'Follow care instructions for each piece. Store in the provided gift box when not wearing.',
    shipping: 'Complimentary gift wrapping and shipping on orders over $50. Arrives ready for gifting.',
    returns: '30-day return policy. Gift sets must be returned complete with all items and packaging.',
    variants: ['Gold', 'Rose Gold'],
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    featured: true,
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
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my best friend. The packaging was exquisite and she absolutely loved it.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Isabella C.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that doesn\'t irritate my ears! Beautiful craftsmanship and fast shipping.',
    product: 'Amber Lace Earrings',
  },
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&q=80',
    caption: 'Golden hour, golden glow ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=600&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    caption: 'Stacked and stunning',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Statement pieces',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    caption: 'Effortless beauty',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'My everyday essential',
  },
];

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};
