export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: ["gold-plated", "crystal"],
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff with a single crystal accent, designed to catch light without the need for a piercing. Wear it solo or stack it for a curated ear.",
    materialsCare:
      "18k gold-plated brass with a hypoallergenic finish. Avoid contact with perfume, lotion, and water. Store in the included pouch to prevent scratching.",
    shippingReturns:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns on unworn pieces.",
    images: {
      gold: "vivid-aura-gold",
      silver: "vivid-aura-silver",
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: ["gold-plated", "crystal"],
    rating: 4.9,
    reviewCount: 89,
    description:
      "A delicate collar necklace featuring hand-set multicolor floral crystals on a fine gold chain. Made for layering or standing alone at sunset.",
    materialsCare:
      "18k gold-plated brass with glass crystals. Wipe gently with a soft cloth after wear. Remove before swimming or showering.",
    shippingReturns:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns on unworn pieces.",
    images: {
      gold: "flora-nectar-gold",
      silver: "flora-nectar-silver",
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: ["gold-plated"],
    rating: 4.7,
    reviewCount: 215,
    description:
      "Chunky dome huggie earrings with a polished mirror finish. Lightweight enough for all-day wear, bold enough to elevate a plain tee.",
    materialsCare:
      "18k gold-plated brass with surgical steel posts. Hypoallergenic and nickel-free. Keep dry and store flat.",
    shippingReturns:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns on unworn pieces.",
    images: {
      gold: "sphere-huggies-gold",
      silver: "sphere-huggies-silver",
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: ["gold-plated"],
    rating: 4.9,
    reviewCount: 76,
    description:
      "Textured filigree drop earrings inspired by vintage lace. The warm gold tone and airy silhouette make them a forever favorite.",
    materialsCare:
      "18k gold-plated brass. Handle with care to preserve the intricate filigree detail. Store away from direct sunlight.",
    shippingReturns:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns on unworn pieces.",
    images: {
      gold: "amber-lace-gold",
      silver: "amber-lace-silver",
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: ["gold-plated", "crystal"],
    rating: 5.0,
    reviewCount: 52,
    description:
      "A gift-ready pairing of stud earrings and a matching pendant necklace, presented in a Velmora embossed box. Thoughtful, timeless, and easy to love.",
    materialsCare:
      "18k gold-plated brass with crystal detailing. Includes gift box and care card. Wipe clean and store flat.",
    shippingReturns:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns on unworn pieces.",
    images: {
      gold: "heirloom-set-gold",
      silver: "heirloom-set-silver",
    },
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const formatPrice = (price) => `$${price}`;
