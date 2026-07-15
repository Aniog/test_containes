// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    rating: 4.8,
    reviewCount: 124,
    description: "A delicate ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    shortDescription: "Gold ear cuff with crystal accent",
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
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    rating: 4.9,
    reviewCount: 89,
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is carefully selected and set by hand, creating a piece that feels both timeless and contemporary.",
    shortDescription: "Multicolor floral crystal necklace",
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
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggie earrings with a polished finish. These substantial hoops make a bold yet refined statement, perfect for both day and evening wear.",
    shortDescription: "Chunky gold dome huggie earrings",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
      "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=800&q=80",
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
    rating: 4.6,
    reviewCount: 72,
    description: "Textured gold filigree drop earrings inspired by vintage lacework. The intricate pattern catches light beautifully, creating a delicate play of shadow and shine.",
    shortDescription: "Textured gold filigree drop earrings",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
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
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. Presented in a velvet-lined keepsake box, this set makes an unforgettable gift for someone special.",
    shortDescription: "Gift-boxed earring + necklace set",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Helper to get related products
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
