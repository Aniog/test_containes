// Velmora Fine Jewelry - Seed Product Data
// Premium demi-fine gold jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    rating: 4.8,
    reviewCount: 124,
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
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each crystal is carefully selected and set to create a piece that feels both bold and feminine.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of blooming flowers. A cluster of hand-selected crystals in warm amber, soft rose, and clear tones creates depth and dimension. Suspended from an 18K gold-plated chain, this piece makes a graceful statement whether worn alone or layered.",
    rating: 4.9,
    reviewCount: 89,
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
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these hoops add architectural interest to any look.",
    longDescription: "The Golden Sphere Huggies are a modern interpretation of the classic hoop. Featuring a substantial dome shape with a brushed gold finish, these earrings have presence without weight. The secure hinge closure ensures they stay comfortably in place from morning meetings to evening events.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. These earrings evoke vintage elegance with a contemporary sensibility.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work. Each pair is meticulously crafted with delicate gold wirework that creates a lace-like texture. The warm amber crystal drop adds a touch of color and movement. Perfect for special occasions or when you want to feel quietly extraordinary.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"
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
    material: "Gold",
    description: "A gift-boxed matching set featuring our signature earrings and necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.",
    longDescription: "The Royal Heirloom Set pairs our most beloved pieces: the Vivid Aura ear cuffs and a delicate pendant necklace. Each piece is crafted from 18K gold-plated brass with crystal accents. Presented in a luxurious velvet-lined box, this set makes an unforgettable gift for someone special—or a well-deserved treat for yourself.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const materials = ["Gold", "Silver"];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Helper to get related products
export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter(p => p.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};
