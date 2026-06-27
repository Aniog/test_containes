export const CATEGORIES = ["earrings", "necklaces", "huggies", "sets"];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold-plated",
    rating: 4.8,
    reviewCount: 124,
    titleId: "product-title-vivid-aura-jewels",
    descId: "product-desc-vivid-aura-jewels",
    description:
      "A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight with every turn.",
    materials:
      "18k gold-plated brass, AAA cubic zirconia. Nickel-free and hypoallergenic. Designed for everyday wear.",
    care: "Avoid contact with perfumes, lotions, and water. Store in the included pouch and polish gently with a soft cloth.",
    tags: ["bestseller", "new"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 89,
    titleId: "product-title-majestic-flora-nectar",
    descId: "product-desc-majestic-flora-nectar",
    description:
      "A delicate necklace strung with hand-set multicolor floral crystals. A wearable bouquet that brings quiet color to neutral tailoring.",
    materials:
      "18k gold-plated chain, hand-cut glass crystals, adjustable 40–45 cm length.",
    care: "Fasten clasp before storing. Wipe after wear and keep away from moisture to preserve plating.",
    tags: ["bestseller"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold-plated",
    rating: 4.7,
    reviewCount: 215,
    titleId: "product-title-golden-sphere-huggies",
    descId: "product-desc-golden-sphere-huggies",
    description:
      "Chunky dome huggies with a polished mirror finish. Substantial enough to wear alone, refined enough to stack.",
    materials: "18k gold-plated brass with surgical steel posts. Lightweight and secure hinge closure.",
    care: "Store flat in pouch. Avoid sleeping or showering in your huggies to protect the hinge and plating.",
    tags: ["bestseller", "new"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 76,
    titleId: "product-title-amber-lace-earrings",
    descId: "product-desc-amber-lace-earrings",
    description:
      "Textured filigree drops inspired by antique lace. Warm gold threads form an airy silhouette that moves beautifully.",
    materials: "18k gold-plated brass, stainless steel ear wire. Weight: 4 g per earring.",
    care: "Handle by the post to avoid bending. Clean with a dry cloth; do not use chemical jewelry cleaners.",
    tags: ["bestseller"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold-plated",
    rating: 5.0,
    reviewCount: 42,
    titleId: "product-title-royal-heirloom-set",
    descId: "product-desc-royal-heirloom-set",
    description:
      "A curated gift set of our signature earrings and a matching pendant necklace, boxed in a velvety gift case ready for giving.",
    materials:
      "18k gold-plated brass, cubic zirconia accents. Includes gift box, polishing cloth, and care card.",
    care: "Keep pieces separated in the provided box. Remove before swimming or exercising.",
    tags: ["bestseller", "gift"],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);
