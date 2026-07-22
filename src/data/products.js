// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
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
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both timeless and modern.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
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
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggie earrings with a soft matte finish. The spherical silhouette adds quiet drama to any look, while remaining comfortable for all-day wear.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    description: "Textured gold filigree drop earrings inspired by vintage lacework. The intricate pattern is both delicate and bold, perfect for those who appreciate the beauty in detail.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift-boxed pairing of our signature drop earrings and a matching pendant necklace. Presented in a velvet-lined box, ready for gifting or keeping.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["18K Gold Plated Brass", "18K Gold Plated Brass, Crystal"];
