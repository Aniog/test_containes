// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "Earrings",
    material: "Gold",
    description: "A delicate ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    details: "18K gold plated brass with crystal accent. Hypoallergenic and tarnish-resistant.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "p1-1", query: "gold ear cuff with crystal on dark background editorial jewelry" },
      { id: "p1-2", query: "gold ear cuff worn on ear close up warm lighting" },
    ],
    variants: ["Gold", "Silver"],
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    description: "A statement necklace featuring a cluster of multicolor floral crystals suspended from a fine chain. Romantic and luminous.",
    details: "18K gold plated brass with multicolor crystal stones. Adjustable 16-18 inch chain with lobster clasp.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "p2-1", query: "floral crystal necklace gold on neutral background editorial" },
      { id: "p2-2", query: "multicolor crystal necklace worn on neckline warm light" },
    ],
    variants: ["Gold", "Silver"],
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "Huggies",
    material: "Gold",
    description: "Chunky dome huggie earrings with a sculptural spherical silhouette. Bold yet refined, these hug the earlobe with quiet presence.",
    details: "18K gold plated brass. Secure hinged closure. Lightweight for all-day wear.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "p3-1", query: "chunky gold dome huggie earrings on dark background" },
      { id: "p3-2", query: "gold huggie earrings worn on ear close up editorial" },
    ],
    variants: ["Gold", "Silver"],
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. A modern heirloom with vintage soul.",
    details: "18K gold plated brass with textured filigree detail. French wire hooks. Lightweight.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      { id: "p4-1", query: "textured gold filigree drop earrings editorial jewelry" },
      { id: "p4-2", query: "gold filigree earrings worn on model warm lighting" },
    ],
    variants: ["Gold", "Silver"],
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "Earrings",
    material: "Gold",
    description: "A curated gift-boxed pairing of our signature huggies and a delicate pendant necklace. The perfect introduction to Velmora.",
    details: "Includes: Golden Sphere Huggies + Delicate Pendant Necklace. Presented in a velvet-lined keepsake box.",
    care: "Store in a cool, dry place. Avoid contact with water, perfume, and lotions. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: "p5-1", query: "luxury jewelry gift set gold earrings necklace in box editorial" },
      { id: "p5-2", query: "gold jewelry set worn together on model warm tones" },
    ],
    variants: ["Gold", "Silver"],
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
