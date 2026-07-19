// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its faceted crystal accent. Handcrafted in 18K gold plating over sterling silver, this piece is designed for everyday elegance. Wear it solo or stack with your favorite hoops.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
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
    description: "A romantic multicolor floral crystal necklace that catches the light with every movement. A timeless piece for layering or wearing alone.",
    longDescription: "Inspired by wildflower meadows at golden hour, the Majestic Flora Nectar necklace features hand-set crystals in warm, complementary tones. Suspended on an 18K gold-plated chain with an adjustable length for versatile styling.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome shape that sits comfortably on the ear. Cast in 18K gold plating with a brushed finish that catches light beautifully. Hypoallergenic and water-resistant.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that moves gracefully with you.",
    longDescription: "Each Amber Lace earring is meticulously crafted with delicate filigree work that evokes vintage lace. The warm gold tone and intricate texture create depth and dimension. Lightweight enough for all-day wear.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring our signature pieces. The perfect introduction to Velmora or a thoughtful gift for someone special.",
    longDescription: "The Royal Heirloom Set pairs our beloved Golden Sphere Huggies with a delicate pendant necklace. Presented in a premium keepsake box with a handwritten note card. An heirloom-quality introduction to demi-fine jewelry.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
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

// Get all unique categories
export const getCategories = () => {
  return [...new Set(products.map(p => p.category))];
};

// Get all unique materials
export const getMaterials = () => {
  return [...new Set(products.map(p => p.material))];
};
