// Seed product data for Velmora Fine Jewelry
// Premium demi-fine gold jewelry - $30-$120 range

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A delicate ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://picsum.photos/id/1011/800/800",
      "https://picsum.photos/id/106/800/800",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A statement necklace featuring a cluster of multicolor floral crystals. Each crystal is hand-selected and set in a delicate gold frame, creating a piece that feels both timeless and modern.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://picsum.photos/id/160/800/800",
      "https://picsum.photos/id/201/800/800",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggie earrings with a sculptural silhouette. These bold yet refined hoops are perfect for stacking or wearing alone as a statement piece.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://picsum.photos/id/180/800/800",
      "https://picsum.photos/id/251/800/800",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    rating: 4.6,
    reviewCount: 72,
    description: "Textured gold filigree drop earrings inspired by vintage lacework. The intricate pattern is achieved through traditional metalworking techniques, creating a piece that feels both heirloom and contemporary.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://picsum.photos/id/29/800/800",
      "https://picsum.photos/id/312/800/800",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Sets",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift-boxed set featuring a matching pair of earrings and a delicate necklace. Presented in our signature velvet box, this set makes the perfect gift for someone special—or yourself.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://picsum.photos/id/133/800/800",
      "https://picsum.photos/id/160/800/800",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

// Get bestsellers (first 5 for homepage)
export const getBestsellers = () => {
  return products.slice(0, 5);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Materials for filtering
export const materials = ["All", "18K Gold Plated Brass", "18K Gold Plated Brass, Crystal"];
