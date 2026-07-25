// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. A modern take on classic elegance, designed to catch the light with every movement.",
    details: "18K gold plated brass with crystal accent. Hypoallergenic and tarnish-resistant.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
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
    description: "A statement necklace adorned with multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both timeless and contemporary.",
    details: "18K gold plated brass with multicolor crystal stones. Adjustable chain length 16-18 inches.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these earrings add a touch of modern glamour to any look.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight for all-day comfort.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that moves gracefully with every gesture.",
    details: "18K gold plated brass with textured filigree. French wire hooks. Lightweight design.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. The perfect heirloom piece for those who appreciate understated luxury.",
    details: "18K gold plated brass. Includes gift box. Earrings: 1.2\" drop. Necklace: 16-18\" adjustable chain.",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
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
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity },
];