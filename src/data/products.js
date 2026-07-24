export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without the need for a piercing.",
    materials:
      "18k gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. We recommend storing in a dry pouch and avoiding contact with perfume or lotion.",
    images: 3,
    bestseller: true,
    related: ["golden-sphere-huggies", "amber-lace-earrings"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 86,
    description:
      "A delicate pendant necklace featuring hand-set multicolor floral crystals on a fine gold chain. Made for layering or wearing solo.",
    materials:
      "18k gold-plated stainless steel chain with enamel and crystal blossoms. Water-resistant and tarnish-resistant for everyday wear.",
    images: 3,
    bestseller: true,
    related: ["royal-heirloom-set", "amber-lace-earrings"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviewCount: 215,
    description:
      "Chunky dome huggie earrings with a polished, mirror-like finish. The everyday hoop reimagined with sculptural volume.",
    materials:
      "18k gold-plated sterling silver post. Lightweight and secure with a click-back closure. Hypoallergenic.",
    images: 3,
    bestseller: true,
    related: ["vivid-aura-jewels", "royal-heirloom-set"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.9,
    reviewCount: 72,
    description:
      "Textured filigree drop earrings inspired by antique lace. Light catches every intricate curve for a warm, luminous glow.",
    materials:
      "18k gold-plated brass with a brushed and polished finish. Surgical steel posts. Each pair is hand-polished.",
    images: 3,
    bestseller: true,
    related: ["majestic-flora-nectar", "vivid-aura-jewels"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    price: 95,
    category: "sets",
    material: "gold",
    rating: 5.0,
    reviewCount: 41,
    description:
      "A ready-to-gift pairing of signature earrings and a matching necklace, presented in a soft-touch Velmora gift box.",
    materials:
      "18k gold-plated brass and stainless steel. Includes a Velmora gift box, care card, and complimentary polishing cloth.",
    images: 3,
    bestseller: true,
    related: ["golden-sphere-huggies", "majestic-flora-nectar"],
  },
]

export const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings on model ear closeup warm lighting" },
  { id: "necklaces", label: "Necklaces", query: "gold pendant necklace on neck editorial closeup" },
  { id: "huggies", label: "Huggies", query: "gold huggie hoop earrings on ear closeup" },
]

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug) || null

export const getRelatedProducts = (product) => {
  if (!product) return []
  return product.related
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean)
}

