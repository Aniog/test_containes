export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: 'Gold',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    details: 'Elevate your edge with our Vivid Aura Jewels ear cuff. Handcrafted in 18K gold plated brass, this piece features a delicate crystal accent that catches the light with every turn. No piercing required — simply slide and adjust for a custom fit.',
    materials: '18K Gold Plated Brass, Crystal Accent',
    inStock: true,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    material: 'Gold',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    details: 'A botanical dream in precious metal. The Majestic Flora Nectar necklace features hand-set multicolor crystals arranged in a delicate floral motif. Each piece is plated in 18K gold for a luxurious, lasting finish that sits beautifully at the collarbone.',
    materials: '18K Gold Plated Brass, Multicolor Crystals',
    inStock: true,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    material: 'Gold',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    details: 'The perfect everyday huggie. Our Golden Sphere Huggies feature a substantial domed silhouette in polished 18K gold plate. Lightweight enough for all-day wear, substantial enough to make a statement. Hypoallergenic and nickel-free.',
    materials: '18K Gold Plated Brass, Hypoallergenic',
    inStock: true,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold',
    rating: 4.9,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    details: 'Intricate filigree work meets modern design in our Amber Lace Earrings. Each pair is meticulously crafted with a textured gold surface that mimics delicate lace, catching light from every angle. The perfect blend of vintage inspiration and contemporary style.',
    materials: '18K Gold Plated Brass, Hand-finished Filigree',
    inStock: true,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Sets',
    material: 'Gold',
    rating: 5.0,
    reviews: 42,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    details: 'The ultimate gift — our Royal Heirloom Set includes a matching earring and necklace duo, beautifully presented in our signature Velmora gift box. Each piece features our signature 18K gold plate and comes with a care card and authenticity guarantee.',
    materials: '18K Gold Plated Brass, Gift Box Included',
    inStock: true,
  },
];

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getRelatedProducts = (productId) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, 3);
};
