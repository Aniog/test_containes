// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A sculptural ear cuff adorned with a single crystal accent. Minimal yet striking, designed to catch the light with every movement.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold-1", tone: "gold", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
      { id: "gold-2", tone: "gold", url: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    defaultVariant: "gold",
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A delicate floral crystal necklace featuring a harmonious blend of warm-toned stones. Each piece is hand-assembled to ensure perfect symmetry and lasting beauty.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      { id: "gold-1", tone: "gold", url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80" },
      { id: "gold-2", tone: "gold", url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" },
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    defaultVariant: "gold",
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggie earrings with a soft matte finish. The perfect everyday statement piece that transitions effortlessly from day to night.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold-1", tone: "gold", url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
      { id: "gold-2", tone: "gold", url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80" },
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    defaultVariant: "gold",
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    rating: 4.9,
    reviewCount: 73,
    description: "Intricately textured filigree drop earrings inspired by vintage lacework. Each pair is finished by hand to create a one-of-a-kind heirloom quality piece.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold-1", tone: "gold", url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80" },
      { id: "gold-2", tone: "gold", url: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80" },
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    defaultVariant: "gold",
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: "A curated gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold-1", tone: "gold", url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80" },
      { id: "gold-2", tone: "gold", url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80" },
    ],
    variants: [
      { id: "gold", label: "Gold", tone: "gold" },
      { id: "silver", label: "Silver", tone: "silver" },
    ],
    defaultVariant: "gold",
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
export const materials = ["18K Gold Plated", "Crystal"];

// Price ranges for filtering
export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity },
];
