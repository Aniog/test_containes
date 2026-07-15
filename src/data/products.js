// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted with precision, the 18K gold-plated cuff features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "p1-1", alt: "Vivid Aura Jewels ear cuff in gold with crystal accent" },
      { id: "p1-2", alt: "Vivid Aura Jewels ear cuff worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" },
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
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each crystal is carefully selected and set to create a piece that feels both romantic and modern.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of blooming gardens. A cluster of hand-selected crystals in warm amber, soft rose, and clear tones creates depth and dimension. Suspended from an 18K gold-plated chain, this piece makes a graceful statement.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "p2-1", alt: "Majestic Flora Nectar multicolor crystal necklace" },
      { id: "p2-2", alt: "Majestic Flora Nectar necklace worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" },
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies are designed to frame the face with quiet confidence.",
    longDescription: "The Golden Sphere Huggies celebrate the beauty of form. Each earring features a perfectly proportioned dome shape, crafted in 18K gold plating with a soft matte finish. The secure hinge closure ensures comfort and peace of mind throughout the day.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "p3-1", alt: "Golden Sphere Huggies chunky gold dome earrings" },
      { id: "p3-2", alt: "Golden Sphere Huggies worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" },
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each pair is a small work of art, evoking vintage elegance with a contemporary edge.",
    longDescription: "The Amber Lace Earrings are a tribute to traditional craftsmanship. Delicate filigree work creates a lace-like texture that catches light from every angle. Finished in warm 18K gold plating, these drops bring a touch of heirloom beauty to modern wardrobes.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      { id: "p4-1", alt: "Amber Lace Earrings textured gold filigree drops" },
      { id: "p4-2", alt: "Amber Lace Earrings worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" },
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
    description: "A gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, this set is made for gifting and treasuring.",
    longDescription: "The Royal Heirloom Set brings together two of our most beloved pieces: the Vivid Aura ear cuff and a delicate pendant necklace. Each piece is crafted in 18K gold plating and arrives nestled in a luxurious velvet-lined box. A thoughtful gift for someone special, or a beautiful addition to your own collection.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: "p5-1", alt: "Royal Heirloom Set gift-boxed earring and necklace" },
      { id: "p5-2", alt: "Royal Heirloom Set pieces worn together" },
    ],
    variants: [
      { id: "gold", label: "Gold", value: "gold" },
      { id: "silver", label: "Silver", value: "silver" },
    ],
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
    .slice(0, limit);
};

// Categories
export const categories = ["Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["Gold", "Silver"];
