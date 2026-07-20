export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    description: "A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds an effortless edge to any look.",
    details: "Crafted from recycled brass with 18K gold plating. Set with a hand-placed cubic zirconia crystal. Hypoallergenic and nickel-free.",
    care: "Store in the provided pouch. Avoid contact with water, perfume, and lotions. Gently polish with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgQuery: "gold ear cuff crystal jewelry dark background",
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    description: "A delicate chain necklace featuring multicolor floral crystal clusters. Each stone is hand-set to create a garden-inspired masterpiece that sits beautifully at the collarbone.",
    details: "18K gold-plated sterling silver chain. Multi-colored cubic zirconia stones in floral arrangement. Adjustable length 16–18 inches.",
    care: "Store flat to prevent tangling. Remove before swimming or showering. Clean with a dry microfiber cloth.",
    variants: ["Gold", "Silver"],
    imgQuery: "floral crystal necklace gold chain elegant",
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 203,
    description: "Chunky dome huggie earrings with a high-polish finish. These everyday essentials hug the earlobe with a satisfying click closure.",
    details: "Solid recycled brass core with thick 18K gold plating. Hinged click-shut closure. Diameter: 14mm. Weight: 4g per earring.",
    care: "Wipe clean after each wear. Store in a dry place away from humidity. Avoid sleeping in jewelry.",
    variants: ["Gold", "Rose Gold"],
    imgQuery: "chunky gold dome huggie earrings minimal",
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 156,
    description: "Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet statement-making, they move gracefully with you.",
    details: "Intricate filigree metalwork in recycled brass with 18K gold plating. Butterfly back closure. Drop length: 45mm.",
    care: "Handle with care due to delicate filigree. Store individually to prevent scratching. Clean gently with a soft brush.",
    variants: ["Gold", "Silver"],
    imgQuery: "gold filigree drop earrings textured elegant",
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 67,
    description: "A curated gift set featuring our bestselling drop earrings paired with a matching pendant necklace. Presented in a luxe velvet box — perfect for gifting.",
    details: "Set includes: one pair of drop earrings and one pendant necklace. 18K gold-plated recycled brass. Necklace length: 17 inches with 2-inch extender.",
    care: "Store in the provided velvet box. Each piece should be cleaned separately with a soft cloth. Avoid exposure to chemicals.",
    variants: ["Gold"],
    imgQuery: "gold jewelry gift set box earrings necklace luxury",
  },
];

export const categories = [
  { name: "Earrings", slug: "earrings" },
  { name: "Necklaces", slug: "necklaces" },
  { name: "Huggies", slug: "huggies" },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(productId, limit = 4) {
  return products.filter((p) => p.id !== productId).slice(0, limit);
}
