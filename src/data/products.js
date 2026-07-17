export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    originalPrice: null,
    category: 'earrings',
    description: 'An ethereal ear cuff featuring a delicate crystal accent that catches the light with every movement. The adjustable design wraps beautifully around the ear, creating an effortless statement piece perfect for both day and evening wear.',
    shortDescription: 'Crystal accent ear cuff with adjustable fit',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel',
    care: 'Store in a cool, dry place. Avoid contact with water, perfumes, and cosmetics. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    rating: 4.8,
    reviewCount: 124,
    badge: null,
    isBestSeller: true,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    originalPrice: null,
    category: 'necklaces',
    description: 'A breathtaking multicolor crystal necklace inspired by blooming gardens at golden hour. Each crystal is carefully selected for its unique color gradient, creating a piece that transitions seamlessly from casual elegance to formal glamour.',
    shortDescription: 'Multicolor floral crystal pendant necklace',
    materials: '18K Gold Plated, Multicolor crystals, Gold-filled chain, Hypoallergenic',
    care: 'Store in the provided pouch when not wearing. Avoid swimming and showering. Polish with a jewelry cloth to maintain shine.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    rating: 4.9,
    reviewCount: 89,
    badge: 'New',
    isBestSeller: true,
    variants: ['Gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    originalPrice: 48,
    category: 'huggies',
    description: 'Our signature chunky dome huggie earrings that hug close to the ear. The smooth, polished spheres create a bold yet refined look. Lightweight and comfortable for all-day wear, these are your new everyday essential.',
    shortDescription: 'Chunky dome huggie earrings',
    materials: '18K Gold Plated, Lightweight alloy, Hypoallergenic posts',
    care: 'Wipe clean with a soft cloth after each wear. Store separately to prevent scratching. Avoid exposure to harsh chemicals.',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    rating: 4.7,
    reviewCount: 256,
    badge: 'Bestseller',
    isBestSeller: true,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    originalPrice: null,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. Each pair is meticulously crafted to create a delicate, feminine silhouette that adds instant elegance to any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Brass base, Hypoallergenic posts',
    care: 'Keep away from moisture. Clean with a dry cloth only. Store in the provided box to maintain shape.',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
    rating: 4.9,
    reviewCount: 67,
    badge: null,
    isBestSeller: false,
    variants: ['Gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    originalPrice: null,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring a matching pair of drop earrings and delicate necklace. The coordinated design creates a polished, cohesive look perfect for gifting or treating yourself. Presented in our signature velvet-lined gift box.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Cubic Zirconia, Premium gift box included, Hypoallergenic',
    care: 'Store in the included gift box. Avoid contact with water and chemicals. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    rating: 5.0,
    reviewCount: 42,
    badge: 'Gift Set',
    isBestSeller: true,
    variants: ['Gold'],
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Sleek hoops that hug the ear',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
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
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green! The packaging was beautiful too — perfect for gifting.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Obsessed with the Majestic Flora Nectar necklace. The crystals catch the light so beautifully. Will definitely be ordering more.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
    caption: 'Golden hour glow ✨',
    handle: '@stylebyemily',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=600&q=80',
    caption: 'Everyday elegance',
    handle: '@fashionista.j',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=600&q=80',
    caption: 'My new favorite pieces',
    handle: '@jewelrylover',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80',
    caption: 'Effortlessly chic',
    handle: '@luxedaily',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Heirloom vibes',
    handle: '@sophisticated.style',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Stacking goals',
    handle: '@earcandy',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

export function getBestSellers() {
  return products.filter((p) => p.isBestSeller);
}

export function getRelatedProducts(currentProductId, limit = 4) {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit);
}
