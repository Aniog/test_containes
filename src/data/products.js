export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff finished with a single luminous crystal accent. Designed to catch candlelight and compliments alike — no piercing required.",
    materials:
      "Brass base with 18k gold plating. Crystal accent. Hypoallergenic, nickel-free, lead-free. Water-resistant for everyday wear.",
    care: "Store in a dry pouch. Avoid perfumes, lotions, and harsh chemicals. Wipe gently with a soft cloth after wear.",
    tags: ["bestseller", "new"],
    variants: ["gold", "silver"],
    related: ["amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 89,
    description:
      "A delicate strand of hand-set floral crystals in warm amber, blush, and champagne tones. The piece that turns a simple blouse into an occasion.",
    materials:
      "Brass base with 18k gold plating. Hand-set glass crystals. Lobster clasp with 2-inch extender. Nickel-free.",
    care: "Lay flat to store. Avoid contact with water and beauty products. Clean with a soft, dry cloth.",
    tags: ["bestseller"],
    variants: ["gold"],
    related: ["royal-heirloom-set", "golden-sphere-huggies"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    rating: 4.7,
    reviewCount: 211,
    description:
      "Chunky dome huggies with a polished, molten-gold finish. Substantial enough to frame the face, light enough to wear all day.",
    materials:
      "Brass base with thick 18k gold plating. Hinged huggie closure. Hypoallergenic posts. Lightweight hollow construction.",
    care: "Store closed in a jewelry box. Keep dry and away from abrasive surfaces.",
    tags: ["bestseller"],
    variants: ["gold", "silver"],
    related: ["vivid-aura-jewels", "amber-lace-earrings"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    rating: 4.9,
    reviewCount: 76,
    description:
      "Textured filigree drops inspired by antique lace and golden hour light. Elegant movement with every turn of the head.",
    materials:
      "Brass base with 18k gold plating. Intricate openwork filigree. Shepherd hook closure. Nickel-free.",
    care: "Hang or lay flat. Avoid moisture and chemical exposure. Polish gently with a soft cloth.",
    tags: ["bestseller", "new"],
    variants: ["gold"],
    related: ["vivid-aura-jewels", "royal-heirloom-set"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18k-gold-plated",
    rating: 5.0,
    reviewCount: 53,
    description:
      "A curated earring and necklace set presented in a velvet gift box. The ultimate ready-to-give treasure for someone unforgettable.",
    materials:
      "Brass base with 18k gold plating. Matching pendant necklace and stud earrings. Gift box included. Hypoallergenic.",
    care: "Keep pieces separated in the provided box. Wipe clean after each wear. Avoid water and perfume.",
    tags: ["bestseller", "gift"],
    variants: ["gold"],
    related: ["majestic-flora-nectar", "golden-sphere-huggies"],
  },
]

export const CATEGORIES = [
  { id: "earrings", label: "Earrings", query: "gold earrings on ear" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace on model" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings" },
]

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Elena M.",
    text: "The quality is stunning — these look like pieces from a boutique at twice the price.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sophie L.",
    text: "Bought the Heirloom Set as a gift and ended up keeping it. Packaging is beautiful.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Nina R.",
    text: "My new everyday earrings. They haven’t tarnished after weeks of wear.",
    rating: 5,
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(product, limit = 3) {
  if (!product) return []
  return PRODUCTS.filter((p) => product.related.includes(p.id)).slice(0, limit)
}
