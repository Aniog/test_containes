// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern take on classic elegance.",
    price: 42,
    category: "Earrings",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "A statement necklace adorned with multicolor floral crystals. Perfect for evening occasions.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    price: 38,
    category: "Huggies",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Intricate textured gold filigree drop earrings. Handcrafted with delicate attention to detail.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviews: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed set featuring matching earrings and necklace. The perfect present.",
    price: 95,
    category: "Sets",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviews: 43,
    inStock: true,
  },
];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};
