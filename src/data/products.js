// Seed product data for Velmora Fine Jewelry
// Premium demi-fine gold jewelry — earrings, necklaces, huggies

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    details: "18K gold plated brass with crystal accent. Hypoallergenic posts. Sold as a single piece.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
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
    description: "A statement necklace featuring a cascade of multicolor floral crystals. The perfect balance of bold and feminine.",
    details: "18K gold plated brass with premium crystal stones. Adjustable 16-18 inch chain with lobster clasp.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
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
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement piece.",
    details: "18K gold plated brass. Secure hinged closure. Sold as a pair.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"
    ],
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Romantic and timeless.",
    details: "18K gold plated brass with textured finish. Hypoallergenic posts. Sold as a pair.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. The ultimate expression of quiet luxury.",
    details: "18K gold plated brass. Includes: one pair of stud earrings and one 18-inch pendant necklace. Presented in a velvet-lined gift box.",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
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
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity },
];
