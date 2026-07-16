// Seed product data for Velmora Fine Jewelry
// All prices in USD, demi-fine 18K gold plated

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    category: "earrings",
    price: 42,
    description: "A sculptural ear cuff adorned with a single crystal accent. Minimal yet striking, designed to catch the light with every turn.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    category: "necklaces",
    price: 68,
    description: "A delicate necklace featuring a cluster of multicolor floral crystals. Each stone is hand-selected for its unique hue, creating a piece that feels both timeless and modern.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    category: "huggies",
    price: 38,
    description: "Chunky dome huggies with a soft matte finish. These everyday essentials hug the ear with comfort and quiet confidence.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
  {
    id: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    category: "earrings",
    price: 54,
    description: "Textured filigree drops inspired by vintage lacework. The intricate pattern catches light from every angle, revealing subtle depth and warmth.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
  },
  {
    id: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    category: "necklaces",
    price: 95,
    description: "A curated pairing of our signature drop earrings and pendant necklace, presented in a keepsake gift box. The perfect expression of thoughtfulness.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" }
    ],
    rating: 4.9,
    reviewCount: 63,
    inStock: true,
  }
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .slice(0, limit);
};

// Categories for filtering
export const categories = [
  { value: "all", label: "All" },
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" }
];

// Materials for filtering
export const materials = [
  { value: "all", label: "All Materials" },
  { value: "gold", label: "18K Gold Plated" },
  { value: "crystal", label: "With Crystal" }
];
