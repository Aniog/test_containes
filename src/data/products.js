export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: "earrings",
    material: ["18k-gold-plated", "crystal"],
    tone: ["gold"],
    description:
      "A sculptural gold ear cuff finished with a single luminous crystal accent. Designed to catch candlelight without the need for a piercing.",
    materials: "Brass base with 18K gold plating. Nickel-free and hypoallergenic. Crystal accent.",
    care: "Store in a dry pouch. Avoid contact with perfumes, lotions, and water to preserve the gold finish.",
    bestseller: true,
    images: ["vivid-aura-1", "vivid-aura-2"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: "necklaces",
    material: ["18k-gold-plated", "crystal"],
    tone: ["gold"],
    description:
      "A delicate collar of multicolor floral crystals set on a warm gold chain. Equal parts garden party and gallery opening.",
    materials: "Brass base with 18K gold plating. Hand-set glass crystals. Lobster clasp.",
    care: "Wipe gently after wear. Store flat to prevent tangling.",
    bestseller: true,
    images: ["flora-nectar-1", "flora-nectar-2"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    category: "huggies",
    material: ["18k-gold-plated"],
    tone: ["gold", "silver"],
    description:
      "Chunky dome huggies with a polished, mirror-like finish. The everyday hoop elevated for any neckline.",
    materials: "Brass base with 18K gold or rhodium plating. Hinge closure.",
    care: "Avoid sleeping or showering in your huggies to maintain their shape and shine.",
    bestseller: true,
    images: ["sphere-huggies-1", "sphere-huggies-2"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    rating: 4.9,
    reviewCount: 72,
    category: "earrings",
    material: ["18k-gold-plated"],
    tone: ["gold"],
    description:
      "Textured gold filigree drops inspired by vintage lacework. Lightweight enough for all-day wear, striking enough for evening.",
    materials: "Brass base with 18K gold plating. Surgical steel posts.",
    care: "Keep away from moisture. Clean with a soft, dry cloth.",
    bestseller: true,
    images: ["amber-lace-1", "amber-lace-2"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    rating: 5.0,
    reviewCount: 47,
    category: "sets",
    material: ["18k-gold-plated", "crystal"],
    tone: ["gold"],
    description:
      "A gift-boxed pairing of pendant necklace and matching earrings. The easiest way to make someone feel treasured.",
    materials: "Brass base with 18K gold plating. Crystal accents. Gift box included.",
    care: "Store in the provided box. Polish with a soft cloth.",
    bestseller: true,
    images: ["heirloom-set-1", "heirloom-set-2"],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`
}
