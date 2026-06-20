// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light like morning dew. The cuff is designed to sit comfortably on the upper ear, creating an architectural silhouette that feels both modern and timeless.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace featuring a cluster of multicolor floral crystals suspended from a delicate gold chain. Romantic and luminous.",
    longDescription: "Inspired by the first bloom of spring, the Majestic Flora Nectar necklace captures the essence of a garden at dawn. Each crystal is hand-selected for its unique hue, creating a harmonious composition of soft pinks, warm ambers, and cool lavenders. The 18K gold-plated chain is adjustable, allowing you to wear it at your preferred length.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural, rounded silhouette. Bold yet refined, these are the everyday statement piece.",
    longDescription: "The Golden Sphere Huggies are our most beloved silhouette. Cast in a substantial dome shape, they offer presence without weight. The hinged closure ensures a secure fit, while the polished 18K gold plate reflects light with a soft, warm glow. Perfect alone or layered with other earrings.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0f247b2?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Delicate, feminine, and full of artisanal detail.",
    longDescription: "Each Amber Lace earring is a miniature work of art. The filigree pattern is created through a meticulous process of hand-soldering fine gold wire, resulting in a lace-like texture that feels both vintage and contemporary. The warm amber crystal at the center adds a touch of color that complements the gold beautifully.",
    material: "18K Gold Plated Brass, Amber Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A gift-boxed pairing of our signature huggies and a delicate pendant necklace. The perfect introduction to the Velmora collection.",
    longDescription: "The Royal Heirloom Set is our most cherished offering — a thoughtfully curated pairing of the Golden Sphere Huggies and a matching pendant necklace. Presented in a signature Velmora gift box, this set makes an unforgettable gift for someone special, or a beautiful way to begin your own collection.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in the provided pouch. Wipe gently with a soft cloth after wear.",
    rating: 4.9,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
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

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Materials for filtering
export const materials = ["All", "Gold", "Silver"];
