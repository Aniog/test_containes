// Seed product data for Velmora Fine Jewelry
// Premium demi-fine gold jewelry — $30–$120 range

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    details: "18K gold plated brass. Hypoallergenic. Nickel-free.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both timeless and modern.",
    details: "18K gold plated brass with crystal accents. Adjustable 16–18 inch chain.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement piece you'll reach for constantly.",
    details: "18K gold plated brass. Secure hinged closure. Hypoallergenic.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Each pair is a study in craftsmanship, with delicate patterns that feel both vintage and contemporary.",
    details: "18K gold plated brass. Lightweight drop design. Hypoallergenic.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. Presented in a velvet-lined keepsake box, this set is made for gifting — or for treasuring yourself.",
    details: "18K gold plated brass. Includes huggie earrings and 16-inch pendant necklace. Gift-ready packaging.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== parseInt(currentId))
    .slice(0, limit);
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
