// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable text-reference IDs used by the stock image system.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    subcategory: "Ear Cuff",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    shortDescription:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension. Hand-finished in 18K gold plating over sterling silver, it catches the light with a single hand-set crystal. Wear it solo for a quiet statement, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
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
    category: "Necklaces",
    subcategory: "Pendant",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    shortDescription:
      "A multicolor floral crystal pendant suspended from a delicate gold chain.",
    description:
      "Majestic Flora Nectar blooms at the collar with a multicolor floral cluster of crystals, each petal reflecting a different hue. The fine gold-plated chain is adjustable, letting the pendant rest exactly where you want it. A piece designed for gifting and everyday elevation.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia. Adjustable 16–18 inch chain with extender.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a microfiber cloth.",
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
    category: "Huggies",
    subcategory: "Huggie",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 214,
    shortDescription:
      "Chunky gold dome huggie earrings with a polished, mirror-like finish.",
    description:
      "The Golden Sphere huggies deliver a confident, chunky dome silhouette in a comfortable huggie fit. The polished surface reflects light from every angle, making them an effortless everyday staple. Secure hinged closure keeps them in place all day.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic. Hinged snap closure.",
    care: "Wipe clean after each wear. Avoid water exposure. Store in a dry place.",
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
    category: "Earrings",
    subcategory: "Drop",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 67,
    shortDescription:
      "Textured gold filigree drop earrings with an intricate openwork design.",
    description:
      "Amber Lace reimagines traditional filigree as a modern drop earring. The openwork texture is lightweight and airy, with a warm gold tone that flatters every complexion. They move gently with you, catching light through the lace-like pattern.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure.",
    care: "Handle with care to preserve the filigree detail. Store in the provided box to prevent tangling.",
    variants: ["Gold", "Silver"],
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
    category: "Necklaces",
    subcategory: "Set",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 42,
    shortDescription:
      "A gift-boxed earring and necklace set, designed to be treasured together.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in a keepsake gift box. The matching motifs create a harmonious look that feels considered and complete. The perfect gift for milestones, anniversaries, or a treat for yourself.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set crystals. Includes keepsake gift box.",
    care: "Store each piece in the gift box compartments. Keep dry. Polish with a soft cloth.",
    variants: ["Gold", "Silver"],
    badge: "Gift Set",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    slug: "Earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
    description: "Statement drops, cuffs & studs",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    slug: "Necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
    description: "Pendants, chains & layered sets",
  },
  {
    id: "huggies",
    name: "Huggies",
    slug: "Huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
    description: "Polished everyday huggie hoops",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold plating is unreal — it looks like solid gold. I've worn my huggies every day for months and they haven't tarnished at all.",
  },
  {
    id: "t2",
    name: "Priya K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as an anniversary gift and the presentation was stunning. My partner hasn't taken it off since.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quiet luxury without the quiet-luxury price. The Amber Lace earrings get compliments every single time I wear them.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Stacked huggies, golden hour",
    titleId: "reel-r1-title",
    imgId: "reel-r1-img",
  },
  {
    id: "r2",
    caption: "The Vivid Aura cuff, up close",
    titleId: "reel-r2-title",
    imgId: "reel-r2-img",
  },
  {
    id: "r3",
    caption: "Flora Nectar, layered",
    titleId: "reel-r3-title",
    imgId: "reel-r3-img",
  },
  {
    id: "r4",
    caption: "Amber Lace in motion",
    titleId: "reel-r4-title",
    imgId: "reel-r4-img",
  },
  {
    id: "r5",
    caption: "The Heirloom Set, unboxed",
    titleId: "reel-r5-title",
    imgId: "reel-r5-img",
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
