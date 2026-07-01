// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern statement piece that catches the light with every movement.",
    details: "Handcrafted from 18K gold-plated brass with a single faceted crystal. Lightweight and comfortable for all-day wear.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88483?w=800&q=80",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A stunning multicolor floral crystal necklace that blooms with elegance. Each crystal is carefully selected for its unique hue and brilliance.",
    details: "18K gold-plated chain with hand-set multicolor crystals. Adjustable length from 16\" to 18\" with extender.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday luxury your jewelry box needs.",
    details: "18K gold-plated brass with a polished dome finish. Secure hinged closure. Measures 12mm in diameter.",
    image: "https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that moves gracefully with you.",
    details: "18K gold-plated brass with hand-etched filigree pattern. Lightweight drop design measuring 35mm in length.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set designed for the modern heirloom. Timeless silhouettes presented in our signature velvet box.",
    details: "Includes matching 18K gold-plated necklace (16-18\") and stud earrings. Presented in a premium velvet gift box with ribbon.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];

// Price ranges for filtering
export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity },
];