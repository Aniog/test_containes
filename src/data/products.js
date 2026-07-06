export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff finished with a single hand-set crystal accent. Designed to hug the ear without piercing, it catches light beautifully from every angle.",
    details:
      "18k gold-plated brass. Hand-set cubic zirconia accent. Nickel-free and hypoallergenic. One size; adjustable gentle squeeze fit.",
    care: "Avoid contact with perfumes, lotions, and water. Store in a dry pouch and polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day hassle-free returns.",
    imageRatio: "4x3",
    hoverRatio: "4x3",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 89,
    badge: "New",
    description:
      "A delicate floral pendant necklace with multicolor crystal petals suspended on a fine gold chain. Feminine, modern, and endlessly wearable.",
    details:
      "18k gold-plated stainless steel chain. Multicolor cubic zirconia petals. Length: 40cm + 5cm extender. Lobster clasp closure.",
    care: "Keep away from moisture and harsh chemicals. Store flat to prevent tangling.",
    shipping:
      "Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day hassle-free returns.",
    imageRatio: "3x4",
    hoverRatio: "3x4",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    rating: 4.7,
    reviewCount: 156,
    badge: null,
    description:
      "Chunky dome huggie earrings with a polished, liquid-gold finish. Bold enough to stand alone, refined enough for everyday.",
    details:
      "18k gold-plated brass with surgical steel posts. Diameter: 12mm. Hinge closure. Nickel-free.",
    care: "Wipe clean after wear. Avoid sleeping or swimming in your jewelry.",
    shipping:
      "Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day hassle-free returns.",
    imageRatio: "1x1",
    hoverRatio: "1x1",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.8,
    reviewCount: 102,
    badge: null,
    description:
      "Textured filigree drop earrings inspired by antique lace. Intricate, lightweight, and effortlessly elegant for day or evening.",
    details:
      "18k gold-plated brass. Surgical steel hooks. Length: 45mm. Nickel-free and hypoallergenic.",
    care: "Store hanging or flat. Avoid bending the delicate filigree.",
    shipping:
      "Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day hassle-free returns.",
    imageRatio: "3x4",
    hoverRatio: "3x4",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 67,
    badge: "Gift Set",
    description:
      "A coordinated earring and necklace set, presented in a Velmora gift box. The perfect ready-to-give treasure for someone special.",
    details:
      "18k gold-plated brass and stainless steel. Includes stud earrings and matching pendant necklace. Necklace length: 42cm + 5cm extender.",
    care: "Store pieces separately in the provided pouch. Clean with a soft, dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day hassle-free returns.",
    imageRatio: "4x3",
    hoverRatio: "4x3",
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const materials = [
  { id: "18k-gold-plated", label: "18k Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const getRelatedProducts = (currentId, count = 4) => {
  const current = products.find((p) => p.id === currentId);
  if (!current) return products.slice(0, count);
  return products
    .filter((p) => p.id !== currentId)
    .sort(
      (a, b) =>
        (b.category === current.category ? 1 : 0) -
        (a.category === current.category ? 1 : 0)
    )
    .slice(0, count);
};

export const findProductById = (id) =>
  products.find((p) => p.id === id) || null;
