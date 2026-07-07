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
    description: "A sculptural ear cuff featuring a delicate crystal accent that catches the light with every movement. Designed to be worn alone or stacked for a layered look.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: {
      gold: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    defaultVariant: "gold",
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A statement necklace adorned with hand-selected multicolor crystals arranged in a delicate floral motif. Suspended from a fine chain for graceful movement.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: {
      gold: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    defaultVariant: "gold",
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggie earrings with a smooth, sculptural silhouette. The perfect everyday statement that transitions effortlessly from day to night.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: {
      gold: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1535632787350-4e68b0bdad41?w=800&q=80"
    },
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    defaultVariant: "gold",
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    rating: 4.6,
    reviewCount: 72,
    description: "Intricately textured filigree drop earrings inspired by vintage lacework. Each piece is hand-finished to create a delicate yet bold silhouette.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: {
      gold: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    },
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    defaultVariant: "gold",
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Sets",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift-boxed pairing of our signature huggie earrings and a delicate pendant necklace. Presented in a velvet-lined keepsake box, ready for gifting.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass",
    images: {
      gold: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      silver: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    defaultVariant: "gold",
    inStock: true,
  }
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentSlug, limit = 4) => {
  return products
    .filter(p => p.slug !== currentSlug)
    .slice(0, limit);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Price ranges for filtering
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity }
];
