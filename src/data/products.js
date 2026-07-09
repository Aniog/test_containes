// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a multicolor floral crystal pendant. Each stone is carefully selected for its unique hue, creating a piece that feels both timeless and contemporary.",
    longDescription: "The Majestic Flora Nectar necklace celebrates the beauty of nature through hand-selected crystals in warm, complementary tones. Suspended from a delicate 18K gold-plated chain, the pendant measures approximately 1.5 inches and sits gracefully at the collarbone.",
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
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies make a confident statement while remaining comfortable for daily wear.",
    longDescription: "The Golden Sphere Huggies feature a distinctive domed silhouette that adds dimension and presence. Crafted in 18K gold-plated brass with a polished finish, these earrings are designed to sit comfortably on the earlobe while making a memorable impression.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Each pair is individually finished to highlight the delicate craftsmanship and organic patterns.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work reimagined for the modern woman. The intricate openwork pattern creates a sense of lightness while the warm gold tone adds richness. Measuring approximately 1.75 inches, these earrings move gracefully with you.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. Presented in our signature velvet box, this set makes an unforgettable gift for someone special.",
    longDescription: "The Royal Heirloom Set pairs our signature delicate chain necklace with coordinating stud earrings. Both pieces feature the same refined 18K gold plating and are designed to be worn together or separately. Packaged in our signature velvet jewelry box with a handwritten note card option.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit);
};

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];
