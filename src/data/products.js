// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern interpretation of classic elegance.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace adorned with multicolor floral crystals. Each piece tells a story of natural beauty.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.9,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined for everyday wear.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Intricate filigree drop earrings with textured gold detailing. Inspired by vintage heirloom pieces.",
    material: "18K Gold Plated Brass",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.6,
    reviews: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift set featuring matching earrings and necklace. Presented in our signature keepsake box.",
    material: "18K Gold Plated Brass, Crystal",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 5.0,
    reviews: 43,
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const materials = ["18K Gold Plated", "Sterling Silver"];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};