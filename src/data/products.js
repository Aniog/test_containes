// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern take on the classic ear cuff, designed to catch the light with every movement.",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviewCount: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "An exquisite multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is hand-selected for its brilliance and clarity.",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviewCount: 89,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these statement pieces add instant sophistication to any look.",
    price: 38,
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviewCount: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings inspired by vintage lacework. Intricate detailing meets modern elegance in these timeless pieces.",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    reviewCount: 73,
    images: {
      primary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A curated gift-boxed set featuring our signature earring and necklace pairing. The perfect introduction to the Velmora collection, presented in our signature packaging.",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 4.9,
    reviewCount: 67,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (currentId, limit = 4) => 
  products.filter(p => p.id !== parseInt(currentId)).slice(0, limit);