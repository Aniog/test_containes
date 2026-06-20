// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for stacking or wearing alone for a subtle statement.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its refined crystal detail. Handcrafted in 18K gold plating over sterling silver, this piece is designed for everyday elegance. Wear it solo or pair with other Velmora studs for a layered look.",
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
    description: "A romantic multicolor floral crystal necklace that catches the light with every movement. The perfect piece for special occasions.",
    longDescription: "Inspired by blooming gardens, the Majestic Flora Nectar necklace features hand-set crystals in a delicate floral arrangement. Suspended from a fine 18K gold-plated chain, this piece adds a touch of romance to any ensemble.",
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are an everyday essential.",
    longDescription: "The Golden Sphere Huggies feature a substantial dome shape that feels modern and timeless. Crafted in 18K gold plating, these huggies are lightweight enough for all-day wear while making a confident statement.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0f4b1a6?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A timeless silhouette with modern craftsmanship.",
    longDescription: "The Amber Lace Earrings showcase the artistry of filigree work. Each delicate pattern is hand-finished to create a piece that feels both vintage-inspired and contemporary. Lightweight and comfortable for extended wear.",
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
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring our signature gold filigree work. The ultimate expression of refined gifting.",
    longDescription: "The Royal Heirloom Set pairs our beloved Amber Lace Earrings with a matching pendant necklace. Presented in a premium gift box, this set is designed for those moments that deserve something truly special. A treasured addition to any jewelry collection.",
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

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== parseInt(currentId))
    .slice(0, limit);
};

// Get products by category
export const getProductsByCategory = (category) => {
  if (!category || category === 'All') return products;
  return products.filter(p => p.category === category);
};