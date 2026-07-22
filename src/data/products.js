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
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: "img1", alt: "Vivid Aura Jewels ear cuff in gold with crystal accent on dark background" },
      { id: "img2", alt: "Vivid Aura Jewels ear cuff worn on model ear" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
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
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each crystal is carefully set to create a luminous, garden-inspired silhouette.",
    longDescription: "The Majestic Flora Nectar necklace is an ode to nature's beauty. Delicate gold chains support a cluster of hand-selected crystals in warm amber, soft rose, and clear tones. The adjustable chain allows for versatile styling at 16\" or 18\" lengths.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "img1", alt: "Majestic Flora Nectar multicolor crystal necklace on neutral background" },
      { id: "img2", alt: "Majestic Flora Nectar necklace worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: false },
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies make a confident statement.",
    longDescription: "The Golden Sphere Huggies are our most-loved everyday statement. Cast in 18K gold-plated brass with a polished dome finish, they hug the earlobe with comfort and presence. The secure hinge closure ensures they stay in place from morning coffee to evening events.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "img1", alt: "Golden Sphere Huggies chunky gold dome earrings on dark background" },
      { id: "img2", alt: "Golden Sphere Huggies worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight despite their ornate appearance.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work. Each earring is meticulously crafted with a delicate openwork pattern that feels both vintage-inspired and thoroughly modern. The warm gold tone flatters all skin tones.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      { id: "img1", alt: "Amber Lace Earrings textured gold filigree drops on neutral background" },
      { id: "img2", alt: "Amber Lace Earrings worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A gift-boxed pairing of our signature huggies and a delicate pendant necklace. The perfect introduction to Velmora.",
    longDescription: "The Royal Heirloom Set is our most cherished gift offering. Inside the signature Velmora keepsake box, you'll find the Golden Sphere Huggies paired with a matching 16\" pendant necklace. Both pieces are crafted in 18K gold-plated brass with the same refined attention to detail. Presented in our signature cream and gold packaging, ready for gifting.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      { id: "img1", alt: "Royal Heirloom Set gift box with earrings and necklace on warm background" },
      { id: "img2", alt: "Royal Heirloom Set pieces worn together on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: false },
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
