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
    imageAlt: "Gold ear cuff with crystal accent on warm neutral background",
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "A statement necklace adorned with multicolor floral crystals. Perfect for evening occasions.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageAlt: "Multicolor floral crystal necklace on dark background",
    hoverImage: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined.",
    price: 38,
    category: "Huggies",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageAlt: "Chunky gold dome huggie earrings",
    hoverImage: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Timeless sophistication.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageAlt: "Textured gold filigree drop earrings",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed set featuring matching earrings and necklace. The perfect present.",
    price: 95,
    category: "Necklaces",
    material: "Gold",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    imageAlt: "Gift-boxed earring and necklace set",
    hoverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 5.0,
    reviewCount: 63,
  },
];

// Add silver tone variants for products
export const getProductWithVariants = (product) => ({
  ...product,
  variants: ['Gold', 'Silver'],
});

// All products with variants
export const productsWithVariants = products.map(getProductWithVariants);

// Categories
export const categories = ['Earrings', 'Necklaces', 'Huggies'];

// Materials
export const materials = ['Gold', 'Silver'];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

// Related products (simple logic: same category, exclude self)
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
