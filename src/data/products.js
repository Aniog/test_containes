export const products = [
  {
    id: "p1",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.8,
    reviewCount: 124,
    variants: ["Gold", "Silver"],
    images: 2,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff finished with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and daylight with equal grace.",
    materialsCare: [
      "18K gold plating over premium brass",
      "Crystal accent",
      "Nickel-free and hypoallergenic",
      "Avoid water, perfume, and lotions to preserve the finish",
      "Store in the included pouch",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Standard delivery: 5–8 business days",
      "Express delivery available at checkout",
      "30-day hassle-free returns",
      "Items must be unworn with original packaging",
    ],
  },
  {
    id: "p2",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 89,
    variants: ["Gold", "Silver"],
    images: 2,
    badge: "New",
    description:
      "A delicate bouquet of hand-set multicolor crystals arranged along a fine gold chain. Feminine, playful, and unexpectedly versatile — layer it or let it shine alone.",
    materialsCare: [
      "18K gold-plated chain with crystal florals",
      "Adjustable 16–18 inch length",
      "Hypoallergenic clasp",
      "Wipe gently with a soft cloth after wear",
      "Keep dry and away from direct sunlight when stored",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Standard delivery: 5–8 business days",
      "Express delivery available at checkout",
      "30-day hassle-free returns",
      "Items must be unworn with original packaging",
    ],
  },
  {
    id: "p3",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    rating: 4.7,
    reviewCount: 215,
    variants: ["Gold", "Silver"],
    images: 2,
    badge: null,
    description:
      "Chunky dome huggies with a mirror-polished finish. Substantial enough to make a statement, light enough for everyday wear. The perfect foundation piece.",
    materialsCare: [
      "18K gold-plated dome hoops",
      "Hinge closure for easy wear",
      "Lightweight hollow construction",
      "Clean with a dry cloth; avoid moisture",
      "Store flat to maintain shape",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Standard delivery: 5–8 business days",
      "Express delivery available at checkout",
      "30-day hassle-free returns",
      "Items must be unworn with original packaging",
    ],
  },
  {
    id: "p4",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 76,
    variants: ["Gold"],
    images: 2,
    badge: null,
    description:
      "Intricate filigree drops inspired by vintage lace and golden light. These earrings move beautifully, framing the face with warmth and delicate detail.",
    materialsCare: [
      "18K gold-plated filigree",
      "Surgical steel posts",
      "Lightweight drop design",
      "Handle gently to protect delicate detail",
      "Store hanging or flat in pouch",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Standard delivery: 5–8 business days",
      "Express delivery available at checkout",
      "30-day hassle-free returns",
      "Items must be unworn with original packaging",
    ],
  },
  {
    id: "p5",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18k-gold-plated",
    rating: 5.0,
    reviewCount: 42,
    variants: ["Gold"],
    images: 2,
    badge: "Gift Set",
    description:
      "A curated earring and necklace pairing, presented in a Velmora gift box. An effortless present for someone you treasure — or a well-deserved treat for yourself.",
    materialsCare: [
      "18K gold-plated necklace and earrings set",
      "Gift-ready Velmora box and pouch",
      "Hypoallergenic materials throughout",
      "Avoid contact with water and beauty products",
      "Polish with included cloth",
    ],
    shippingReturns: [
      "Free worldwide shipping on orders over $50",
      "Standard delivery: 5–8 business days",
      "Express delivery available at checkout",
      "30-day hassle-free returns",
      "Items must be unworn with original packaging",
    ],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings", slug: "earrings" },
  { id: "necklaces", label: "Necklaces", slug: "necklaces" },
  { id: "huggies", label: "Huggies", slug: "huggies" },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophia L.",
    text: "The kind of jewelry that makes you feel put-together in seconds. Beautiful quality for the price.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma R.",
    text: "I bought the Royal Heirloom Set as a gift and ended up keeping it. The packaging is gorgeous too.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia M.",
    text: "These pieces photograph like fine jewelry but feel wearable every day. My new favorite brand.",
    rating: 5,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(currentSlug, limit = 4) {
  return products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}

export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 – $70", min: 50, max: 70 },
  { label: "$70 – $100", min: 70, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];
