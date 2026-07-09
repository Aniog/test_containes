export const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Crystal"];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    material: "18K Gold Plated",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and compliments alike.",
    details: [
      "18K gold-plated brass",
      "Cubic zirconia crystal accent",
      "Adjustable squeeze fit",
      "Nickel-free and hypoallergenic",
    ],
    care: "Store in a dry pouch. Avoid perfumes, lotions, and water to preserve the gold finish. Gently polish with a soft cloth.",
    images: 3,
    tone: ["gold", "silver"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    material: "Crystal",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      "A delicate strand of multicolor floral crystals finished in warm gold. Layer it or let it shine alone — this necklace was made for sunlit afternoons and evening toasts.",
    details: [
      "18K gold-plated chain",
      " handset pastel crystals",
      "16–18 inch adjustable length",
      "Lobster clasp closure",
    ],
    care: "Wipe after wear. Store flat to prevent tangling. Keep away from moisture and harsh chemicals.",
    images: 3,
    tone: ["gold"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 4.7,
    reviewCount: 215,
    description:
      "Chunky yet lightweight dome huggies that hug the lobe with a polished, mirror-like finish. The everyday gold staple your jewelry box has been waiting for.",
    details: [
      "18K gold-plated brass",
      "Hinged huggie closure",
      "12mm outer diameter",
      "Suitable for sensitive ears",
    ],
    care: "Remove before showering or sleeping. Clean with a dry microfiber cloth and store in the provided pouch.",
    images: 3,
    tone: ["gold", "silver"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    material: "18K Gold Plated",
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    description:
      "Textured filigree drops inspired by antique lace and warm amber light. Statement enough for an occasion, refined enough for every day.",
    details: [
      "Intricate gold filigree drop",
      "18K gold-plated brass",
      "Surgical steel posts",
      "Length: 42mm",
    ],
    care: "Handle gently to protect delicate filigree. Store separately to avoid snagging. Keep dry.",
    images: 3,
    tone: ["gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    material: "18K Gold Plated",
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    description:
      "A gift-boxed pairing of coordinating earrings and necklace, finished in rich gold and ready to give. The kind of set that becomes an instant heirloom.",
    details: [
      "Earring + necklace gift set",
      "18K gold-plated brass",
      "Signature Velmora gift box included",
      "Complimentary handwritten note available",
    ],
    care: "Store in the gift box or a soft pouch. Avoid contact with water, perfume, and lotion.",
    images: 3,
    tone: ["gold"],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
