// Velmora Fine Jewelry - Seed Product Data
// Premium demi-fine gold jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. The cuff is designed to sit comfortably on the upper ear, creating an elegant layered effect when worn with other earrings. Perfect for those who appreciate understated luxury.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace featuring a cluster of multicolor floral crystals suspended from a delicate gold chain. Each crystal is carefully selected for its unique hue and brilliance.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the quiet beauty of a blooming garden at dawn. Multiple hand-selected crystals in soft pinks, ambers, and clear tones are arranged in an organic cluster. Suspended from an 18K gold-plated chain with an adjustable length, this piece transitions effortlessly from day to evening wear.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: false }
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these hoops make a confident statement while remaining comfortable for all-day wear.",
    longDescription: "The Golden Sphere Huggies are a modern interpretation of the classic hoop. Featuring a substantial dome profile with a smooth, polished finish, these earrings have presence without weight. The secure hinge closure ensures they stay comfortably in place from morning meetings to evening events.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. These lightweight drops feature warm amber tones that complement the gold beautifully.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work reimagined for the modern woman. Each earring is meticulously crafted with an openwork pattern that allows light to pass through, creating a delicate play of shadow and shine. The warm amber crystal accents add depth and warmth to the design.",
    material: "18K Gold Plated Brass, Amber Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Sets",
    price: 95,
    description: "A curated gift-boxed set featuring a matching pair of earrings and a delicate necklace. Presented in our signature velvet box, this set makes an unforgettable gift.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. This coordinated pairing includes our signature drop earrings and a matching pendant necklace, both featuring the same refined gold finish and crystal detailing. Each piece is designed to be worn together or separately, offering versatility for any occasion. Packaged in our signature velvet box with a handwritten note card option.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  }
];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

// Materials for filtering
export const materials = ["All", "Gold", "Silver"];

// Price ranges
export const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "Over $80", min: 80, max: Infinity }
];