// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "Handcrafted with precision, the Vivid Aura Jewels ear cuff features a sculptural silhouette that hugs the ear with quiet elegance. A single faceted crystal is set into warm gold plating, creating a refined contrast between metallic warmth and crystalline brilliance. Perfect worn alone or layered with other studs.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is carefully selected to create a harmonious blend of warm and cool tones.",
    longDescription: "The Majestic Flora Nectar necklace is a celebration of nature's palette. Delicate gold chains suspend a cluster of hand-selected crystals in shades of amber, rose, and soft peridot. The design drapes gracefully at the collarbone, making it an ideal piece for both day and evening occasions.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
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
    description: "Chunky gold dome huggie earrings with a sculptural, rounded silhouette. Bold yet refined, these are the perfect everyday statement.",
    longDescription: "The Golden Sphere Huggies embody modern minimalism with a touch of volume. Cast in warm gold plating, each earring features a softly domed profile that catches light from every angle. The secure hinge closure ensures comfort throughout the day, while the substantial form adds presence without weight.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0f9b8b7?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each piece is a miniature work of art, echoing vintage craftsmanship.",
    longDescription: "Inspired by antique lacework, the Amber Lace Earrings feature an open filigree design that allows light to filter through. Warm gold plating enhances the delicate metalwork, while the graceful drop silhouette elongates the neck. These earrings are lightweight despite their intricate appearance.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
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
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.",
    longDescription: "The Royal Heirloom Set is our signature pairing: a delicate pendant necklace and coordinating stud earrings, both finished in warm gold plating. Each piece is designed to be worn together or separately, offering versatility across occasions. The set arrives in a premium velvet-lined box, making it a thoughtful gift for someone special—or yourself.",
    rating: 4.9,
    reviewCount: 73,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
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
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
