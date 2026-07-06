export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold-plated",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff with a single luminous crystal accent. Designed to catch candlelight and compliments alike — no piercing required.",
    materials:
      "18k gold-plated brass with a cubic zirconia accent. Hypoallergenic, nickel-free, and water-resistant for everyday wear.",
    care: "Store in a dry pouch. Avoid perfumes, lotions, and prolonged water exposure. Gently polish with a soft cloth to maintain shine.",
    shipping:
      "Free worldwide shipping on all orders. Orders ship within 1–2 business days. 30-day hassle-free returns.",
    variants: ["gold", "silver"],
    images: 2,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 89,
    badge: "New",
    description:
      "A delicate pendant necklace blooming with multicolor floral crystals. Feminine, playful, and unexpectedly versatile.",
    materials:
      "18k gold-plated chain with hand-set enamel and crystal petals. Adjustable 16–18 inch length.",
    care: "Keep away from direct sunlight when stored. Wipe clean after wear. Avoid contact with chemicals.",
    shipping:
      "Free worldwide shipping on all orders. Orders ship within 1–2 business days. 30-day hassle-free returns.",
    variants: ["gold"],
    images: 2,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold-plated",
    rating: 4.7,
    reviewCount: 215,
    badge: "Bestseller",
    description:
      "Chunky dome huggie earrings with a polished, liquid-gold finish. The everyday staple that still feels special.",
    materials:
      "18k gold-plated surgical steel post. Lightweight, hypoallergenic, and secure hinged closure.",
    care: "Store flat in provided pouch. Remove before showering or swimming. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping on all orders. Orders ship within 1–2 business days. 30-day hassle-free returns.",
    variants: ["gold", "silver"],
    images: 2,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold-plated",
    rating: 4.9,
    reviewCount: 76,
    badge: null,
    description:
      "Textured gold filigree drops inspired by vintage lace. Statement enough for evening, light enough for daily.",
    materials:
      "18k gold-plated brass with intricate openwork detail. Surgical steel posts. Length: 1.8 inches.",
    care: "Avoid bending or pressing. Store in original box. Clean gently with a dry cloth only.",
    shipping:
      "Free worldwide shipping on all orders. Orders ship within 1–2 business days. 30-day hassle-free returns.",
    variants: ["gold"],
    images: 2,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "gold-plated",
    rating: 5.0,
    reviewCount: 52,
    badge: "Gift Ready",
    description:
      "A curated gift set of matching earrings and necklace, delivered in our signature Velmora box. The perfect present — to give or keep.",
    materials:
      "18k gold-plated earrings and pendant necklace with crystal accents. Includes Velmora gift box and polishing cloth.",
    care: "Store pieces separately in the provided pouch. Avoid water and chemicals. Polish with included cloth.",
    shipping:
      "Free worldwide shipping on all orders. Gift wrapping included. Orders ship within 1–2 business days. 30-day hassle-free returns.",
    variants: ["gold"],
    images: 2,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}

export const UGC_ITEMS = [
  { id: "ugc-1", caption: "Stacked in gold" },
  { id: "ugc-2", caption: "Date night hoops" },
  { id: "ugc-3", caption: "Morning light" },
  { id: "ugc-4", caption: "Gift to self" },
  { id: "ugc-5", caption: "Layered luxe" },
  { id: "ugc-6", caption: "Tiny treasures" },
]

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Sophia M.",
    text: "The quality is stunning for the price. I wear my huggies every single day and they still look brand new.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Emma R.",
    text: "Bought the Heirloom Set as a birthday gift. The packaging alone made it feel like a $300 purchase.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Lily K.",
    text: "Quiet luxury exactly as described. Minimal, elegant, and I get compliments constantly.",
    rating: 5,
  },
]
