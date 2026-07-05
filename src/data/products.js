// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    material: "Gold",
    description: "Delicate gold ear cuff featuring a brilliant crystal accent. Designed to sit gracefully along the ear's natural curve.",
    details: "Handcrafted with 18K gold plating over sterling silver. Features a secure hinged closure and a single faceted crystal.",
    care: "Avoid contact with perfumes, lotions, and water. Store in the provided pouch. Clean gently with a soft cloth.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    description: "A statement necklace adorned with multicolor floral crystals. Each stone is carefully set to catch the light from every angle.",
    details: "18K gold-plated brass chain with hand-set crystal pendants. Adjustable length with extender chain.",
    care: "Wipe with a dry soft cloth after wear. Keep away from moisture and harsh chemicals. Store flat to prevent tangling.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, perfect for everyday elegance.",
    details: "Solid 18K gold-plated brass with a high-polish finish. Secure click closure. Lightweight for all-day comfort.",
    care: "Clean with a jewelry polishing cloth. Remove before swimming or showering. Store in a dry place.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like patterns. A romantic silhouette that moves with grace.",
    details: "18K gold-plated sterling silver with hand-etched filigree detail. French wire backs with secure stoppers.",
    care: "Handle with care to preserve delicate filigree. Polish gently. Avoid ultrasonic cleaners.",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    category: "Earrings",
    material: "Gold",
    description: "A curated gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box.",
    details: "Includes one pair of Golden Sphere Huggies and one Majestic Flora Nectar necklace. Gift-ready packaging included.",
    care: "Store pieces separately in the velvet compartments. Follow individual care instructions for each item.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 63,
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

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];