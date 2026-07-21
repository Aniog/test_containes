// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
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
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each crystal is carefully selected and arranged to create a harmonious bloom of color.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of wildflowers. A cluster of hand-selected crystals in warm amber, soft rose, and clear tones creates a floral motif that rests gracefully at the collarbone. Suspended from an 18K gold-plated chain with an adjustable clasp.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies make a modern statement.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome shape that hugs the earlobe with architectural precision. Cast in 18K gold-plated brass with a high-polish finish, these earrings add dimension and warmth to any look. Secure hinged closure ensures comfort and peace of mind.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. A timeless silhouette with modern craftsmanship.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work reimagined for today. Each earring is meticulously crafted with delicate gold wirework that creates a lace-like texture. The warm amber crystal at the center adds a touch of color and depth. Lightweight despite their intricate appearance.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace duo. The perfect heirloom-worthy gift for someone special.",
    longDescription: "The Royal Heirloom Set pairs our signature filigree drop earrings with a delicate pendant necklace. Both pieces feature the same intricate goldwork and warm crystal accents. Presented in a premium gift box with a handwritten note option, this set is designed to be treasured for generations.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  }
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Get related products (excluding current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
