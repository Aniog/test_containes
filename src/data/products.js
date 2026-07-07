export const CATEGORIES = ["earrings", "necklaces", "huggies", "sets"]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight like a private wink.",
    materials:
      "18k gold-plated brass with a hand-set cubic zirconia accent. Nickel-free and hypoallergenic. Each piece is finished with a protective e-coating to preserve its warm glow.",
    variants: ["gold", "silver"],
    bestseller: true,
    imageId: "velmora-product-vivid-aura",
    hoverImageId: "velmora-product-vivid-aura-hover",
    titleId: "velmora-title-vivid-aura",
    descId: "velmora-desc-vivid-aura",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    rating: 4.9,
    reviewCount: 89,
    description:
      "A delicate pendant necklace blooming with multicolor floral crystals. Strung on a fine gold chain, it reads romantic from across the room and intimate up close.",
    materials:
      "18k gold-plated sterling silver chain. Hand-enameled petals with pastel cubic zirconia centers. Chain length: 40cm + 5cm extender.",
    variants: ["gold"],
    bestseller: true,
    imageId: "velmora-product-flora",
    hoverImageId: "velmora-product-flora-hover",
    titleId: "velmora-title-flora",
    descId: "velmora-desc-flora",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    rating: 4.7,
    reviewCount: 156,
    description:
      "Chunky yet featherlight dome huggies that hug the lobe with a polished, liquid-gold finish. The everyday hoop, reimagined for evening.",
    materials:
      "18k gold-plated brass with surgical steel posts. Hollow construction keeps them light. Diameter: 12mm.",
    variants: ["gold", "silver"],
    bestseller: true,
    imageId: "velmora-product-sphere",
    hoverImageId: "velmora-product-sphere-hover",
    titleId: "velmora-title-sphere",
    descId: "velmora-desc-sphere",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    rating: 4.9,
    reviewCount: 72,
    description:
      "Textured filigree drops inspired by antique lace and sun-warmed amber. They move like light through honey.",
    materials:
      "18k gold-plated brass with a hand-textured lace pattern. Hypoallergenic posts. Drop length: 35mm.",
    variants: ["gold"],
    bestseller: true,
    imageId: "velmora-product-amber",
    hoverImageId: "velmora-product-amber-hover",
    titleId: "velmora-title-amber",
    descId: "velmora-desc-amber",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    rating: 5.0,
    reviewCount: 47,
    description:
      "A gift-boxed pairing of stud earrings and a matching pendant necklace. Old-world romance, made for modern keepsakes.",
    materials:
      "18k gold-plated brass and cubic zirconia. Set includes velvet pouch and signature Velmora gift box. Necklace chain: 42cm + 5cm extender.",
    variants: ["gold", "silver"],
    bestseller: true,
    imageId: "velmora-product-heirloom",
    hoverImageId: "velmora-product-heirloom-hover",
    titleId: "velmora-title-heirloom",
    descId: "velmora-desc-heirloom",
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit)
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`
}

export function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-")
}
