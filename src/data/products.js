// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "Handcrafted with precision, the Vivid Aura ear cuff features a luminous crystal set in warm 18K gold plating. Its sculptural form hugs the ear gently, creating an ethereal glow that transitions effortlessly from day to evening. Perfect worn alone or stacked with other favorites.",
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
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A multicolor floral crystal necklace that blooms with vibrant energy. Each petal is carefully set to create a piece that feels both timeless and modern.",
    longDescription: "The Majestic Flora Nectar necklace is a celebration of nature's beauty. Delicate crystal flowers in soft jewel tones are suspended from a fine gold chain, creating movement and dimension. The adjustable length allows for versatile styling — wear it at the collarbone or let it fall gracefully lower.",
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
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the statement pieces you'll reach for daily.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome shape that catches light from every angle. Cast in warm gold plating with a subtle brushed texture, they offer just the right amount of presence without overwhelming. Hypoallergenic posts ensure all-day comfort.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that feels both vintage-inspired and contemporary.",
    longDescription: "Inspired by antique lacework, the Amber Lace earrings feature delicate filigree patterns hand-finished in warm gold. The graceful drop silhouette moves gently with you, catching light in the openwork design. Lightweight construction belies their substantial visual presence.",
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
    category: "Sets",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring matching crystal accents. The perfect heirloom piece for someone special — or yourself.",
    longDescription: "The Royal Heirloom Set pairs our signature crystal-accented studs with a delicate pendant necklace. Both pieces feature the same warm gold finish and carefully selected crystals. Presented in a velvet-lined keepsake box, this set is designed to be treasured for years to come.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
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
