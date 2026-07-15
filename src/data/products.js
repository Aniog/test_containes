// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit titleId/descId so image queries stay in sync
// with the rendered DOM ids.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    colors: ["Gold", "Silver"],
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to curve along the cartilage with a weightless feel, it brings a quiet gleam to bare lobes — no piercing required.",
    details:
      "Hand-finished 18K gold plating over a durable brass core. Hypoallergenic, nickel-free, and tarnish-resistant with everyday care.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img-2",
    bestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    colors: ["Gold", "Silver"],
    description:
      "A garden in miniature. Multicolor crystals bloom along a fine gold chain, catching the light with every movement. An everyday statement that feels both playful and refined.",
    details:
      "18K gold plating over brass. Adjustable 16–18 inch chain with a secure lobster clasp. Set with hand-placed cubic zirconia crystals.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a microfiber cloth.",
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img-2",
    bestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    colors: ["Gold", "Silver"],
    description:
      "Chunky dome huggies with a polished, mirror-like finish. Snug against the lobe, they layer beautifully with studs and cuffs for a curated ear.",
    details:
      "Sold as a pair. 18K gold plating over brass. Hinged snap closure for a secure, comfortable fit. Hypoallergenic.",
    care: "Wipe clean after each wear. Store separately to avoid scratching the polished surface.",
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img-2",
    bestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 91,
    colors: ["Gold", "Silver"],
    description:
      "Intricate filigree drops with a warm, lace-like texture. Light as air, they sway gently and catch the light in soft, golden threads.",
    details:
      "18K gold plating over brass. Lightweight drop silhouette, 45mm length. Fishhook closure, hypoallergenic.",
    care: "Handle with care to preserve the filigree detail. Keep dry and store in a soft pouch.",
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img-2",
    bestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 64,
    colors: ["Gold", "Silver"],
    description:
      "A coordinated heirloom duo — matching crystal earrings and pendant necklace — presented in a signature Velmora gift box. The effortless choice for gifting and milestone moments.",
    details:
      "Set includes one pair of stud earrings and one pendant necklace (adjustable 16–18 inch). 18K gold plating over brass with cubic zirconia. Arrives in a keepsake gift box.",
    care: "Store each piece in the gift box compartments. Avoid moisture and cosmetics. Polish gently with a soft cloth.",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img-2",
    bestseller: true,
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Studs, drops & cuffs",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Chains, pendants & layers",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Snug, everyday hoops",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled for everyday",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Layered necklaces for the curated look",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Amber Lace drops, caught in golden hour",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "The Vivid Aura cuff on a bare lobe",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom set, unboxed",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold plating is unreal for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: "t2",
    name: "Amara K.",
    rating: 5,
    text: "Bought the Heirloom set as a gift and the box alone made it feel so special. My sister hasn't taken it off.",
  },
  {
    id: "t3",
    name: "Priya R.",
    rating: 5,
    text: "Quiet, elegant, and genuinely hypoallergenic. No green marks, no irritation. This is my new go-to.",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
