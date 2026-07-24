// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a subtle crystal accent. Perfect for stacking or wearing alone.",
    details: "18K gold plated brass with crystal detail. Hypoallergenic posts.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace with multicolor floral crystal pendants arranged in an elegant cascade.",
    details: "18K gold plated chain with crystal pendants. Adjustable length 16-18 inches.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky dome huggie earrings with a sculptural, modern silhouette.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight design.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Intricate filigree drop earrings with a delicate lace-like texture.",
    details: "18K gold plated brass with textured finish. French wire hooks.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.6,
    reviews: 92,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A curated gift set featuring matching earrings and necklace in an elegant presentation box.",
    details: "Includes: 1 pair of huggies + 1 pendant necklace. Gift-ready packaging.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    rating: 4.9,
    reviews: 63,
  },
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getRelatedProducts = (currentId, limit = 4) => {
  return products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);
};
