// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a subtle crystal accent. Perfect for stacking or wearing alone.",
    rating: 4.8,
    reviewCount: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace adorned with multicolor floral crystals. Each piece is hand-assembled.",
    rating: 4.9,
    reviewCount: 89,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Lightweight and comfortable for daily wear.",
    rating: 4.7,
    reviewCount: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings inspired by vintage lacework. Elegant and timeless.",
    rating: 4.6,
    reviewCount: 72,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace. The perfect present for someone special.",
    rating: 4.9,
    reviewCount: 63,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);