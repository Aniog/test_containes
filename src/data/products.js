// Seed product data for Velmora Fine Jewelry.
// Images are resolved at runtime via the strk-img system using text-reference IDs.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", slug: "earrings" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces" },
  { id: "huggies", name: "Huggies", slug: "huggies" },
  { id: "sets", name: "Sets", slug: "sets" },
]

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Gold Vermeil"]

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 126,
    shortDescription: "Gold ear cuff with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light from every angle. Designed to hug the cartilage without a piercing, it wears beautifully alone or stacked along the ear. A quiet statement piece for everyday wear.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    variants: ["Gold", "Silver"],
    badge: "Bestseller",
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img2",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 89,
    shortDescription: "Multicolor floral crystal necklace on a delicate gold chain.",
    description:
      "Majestic Flora Nectar is a pendant necklace featuring a multicolor floral motif set with crystals in warm jewel tones. Suspended from a fine gold-plated chain, it sits just below the collarbone and brings a soft, romantic glow to any neckline. The perfect gifting piece.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Polish with a microfiber cloth to restore shine.",
    variants: ["Gold", "Silver"],
    badge: "New",
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img2",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviewCount: 203,
    shortDescription: "Chunky gold dome huggie earrings with a polished finish.",
    description:
      "Golden Sphere Huggies are chunky dome huggies with a high-polish gold finish. Their rounded silhouette frames the lobe with a confident, modern edge while staying light enough for all-day wear. A secure hinged closure keeps them comfortably in place.",
    care: "Wipe clean after each wear. Avoid moisture. Store in a separate compartment to prevent scratching.",
    variants: ["Gold", "Silver"],
    badge: "Bestseller",
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img2",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "Gold Vermeil",
    rating: 4.8,
    reviewCount: 64,
    shortDescription: "Textured gold filigree drop earrings with an artisan finish.",
    description:
      "Amber Lace is a pair of textured gold filigree drop earrings, hand-finished to reveal a delicate lace-like pattern. The elongated drop moves softly with the wearer and catches warm light along its ridges. An heirloom-feel piece for evenings and special occasions.",
    care: "Handle with care — filigree is delicate. Keep away from water and store in the padded box provided.",
    variants: ["Gold", "Silver"],
    badge: null,
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img2",
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    rating: 5.0,
    reviewCount: 41,
    shortDescription: "Gift-boxed earring and necklace set in matching gold.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earring duo in warm 18K gold plate, presented in a signature Velmora gift box. Designed to be worn together or separately, it is our most-loved gifting choice for anniversaries, birthdays and milestones.",
    care: "Store each piece in the gift box compartments. Avoid moisture and cosmetics. Clean with a soft dry cloth.",
    variants: ["Gold", "Silver"],
    badge: "Gift Set",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  const sameCategory = products.filter(
    (p) => p.slug !== slug && p.category === current.category
  )
  const others = products.filter(
    (p) => p.slug !== slug && p.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}

export function getCategoryName(categoryId) {
  return CATEGORIES.find((c) => c.id === categoryId)?.name || categoryId
}
