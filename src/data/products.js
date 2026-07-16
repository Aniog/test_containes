// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its refined crystal detail. Handcrafted in 18K gold plating over sterling silver, this piece is designed for everyday elegance. Wear it solo or stack with your favorite hoops.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "img1", alt: "Vivid Aura Jewels ear cuff in gold with crystal" },
      { id: "img2", alt: "Vivid Aura Jewels ear cuff on model" },
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
    material: "Gold",
    description: "A romantic multicolor floral crystal necklace that catches the light with every movement. A timeless piece for day or evening.",
    longDescription: "The Majestic Flora Nectar necklace features a delicate chain with a cluster of hand-set crystals in warm, complementary tones. Suspended from an adjustable 18K gold-plated chain, this piece brings a touch of garden romance to any look.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      { id: "img3", alt: "Majestic Flora Nectar floral crystal necklace" },
      { id: "img4", alt: "Majestic Flora Nectar necklace on model" },
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
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you have been looking for.",
    longDescription: "The Golden Sphere Huggies feature a substantial dome shape that sits comfortably on the ear. Cast in 18K gold plating, these huggies have a satisfying weight and a smooth, polished finish that reflects light beautifully.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "img5", alt: "Golden Sphere Huggies chunky gold dome earrings" },
      { id: "img6", alt: "Golden Sphere Huggies on model" },
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
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and elegant for all-day wear.",
    longDescription: "The Amber Lace Earrings showcase delicate filigree work inspired by vintage lace patterns. Each earring is hand-finished to highlight the intricate openwork design. Suspended from a simple post, they move gracefully with you.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      { id: "img7", alt: "Amber Lace Earrings textured gold filigree drops" },
      { id: "img8", alt: "Amber Lace Earrings on model" },
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature earring and necklace. The perfect present for someone special, or a well-deserved treat for yourself.",
    longDescription: "The Royal Heirloom Set includes a delicate pendant necklace and matching stud earrings, presented in our signature gift box. Each piece is crafted in 18K gold plating with a soft matte finish. A timeless combination for the modern woman.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: "img9", alt: "Royal Heirloom Set gift-boxed earring and necklace" },
      { id: "img10", alt: "Royal Heirloom Set on model" },
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
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
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
