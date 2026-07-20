// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    details: "18K gold plated brass with crystal accent. Hypoallergenic and tarnish-resistant.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both timeless and modern.",
    details: "18K gold plated brass with multicolor crystal stones. Adjustable chain length 16-18 inches.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these earrings frame the face with a warm metallic glow.",
    details: "18K gold plated brass. Secure hinged closure. Sold as a pair.",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight and elegant, these earrings move gracefully with you.",
    details: "18K gold plated brass with textured filigree detail. French wire hooks. Sold as a pair.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
    rating: 4.6,
    reviewCount: 92,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. The perfect introduction to the Velmora collection, or a thoughtful gift for someone special.",
    details: "Includes: 1 pair of Golden Sphere Huggies + 1 Majestic Flora Nectar Necklace. Presented in a signature Velmora gift box.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviewCount: 63,
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

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Materials for filtering
export const materials = ["All", "Gold", "Silver"];

// Price ranges for filtering
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity },
];
