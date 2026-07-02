// Seed product data for Velmora Fine Jewelry
// Elegant placeholder images using warm gold jewelry on dark/neutral backgrounds

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    details: "18K gold plated brass with crystal accent. Hypoallergenic and tarnish-resistant.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
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
    description: "A romantic multicolor floral crystal necklace that captures light with every movement. A timeless piece for day or evening.",
    details: "18K gold plated chain with hand-set crystal pendants. Adjustable 16-18 inch length.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are an everyday essential.",
    details: "18K gold plated brass. Secure hinged closure. 12mm diameter.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and elegant for all occasions.",
    details: "18K gold plated brass with textured finish. French wire backs. 2.5 inches long.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
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
    description: "A gift-boxed pairing of our signature drop earrings and delicate pendant necklace. The perfect present for someone special.",
    details: "18K gold plated brass. Includes gift box with velvet lining. Earrings: 1.5 inches. Necklace: 16-18 inch adjustable.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  },
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== parseInt(currentId))
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
