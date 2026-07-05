// Seed product data for Velmora Fine Jewelry.
// Each product carries stable text-reference IDs (titleId/descId) used by the
// stock-image system (data-strk-img) so queries resolve to the right imagery.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "ear cuff",
    material: "18K Gold Plated",
    shortDescription:
      "A sculptural gold ear cuff traced with a single crystal accent — effortless edge, no piercing required.",
    description:
      "The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension. Hand-finished in 18K gold plating over sterling silver, it catches the light along a slender crystal-set ridge. Wear it solo for a quiet statement, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over 925 sterling silver. Cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Clean gently with a soft dry cloth.",
    rating: 4.8,
    reviews: 126,
    variants: ["Gold", "Silver"],
    images: 2,
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img2",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "pendant necklace",
    material: "18K Gold Plated",
    shortDescription:
      "A multicolor floral crystal pendant suspended from a fine gold chain — a garden in miniature.",
    description:
      "Majestic Flora Nectar centers on a hand-set floral motif where each petal holds a different crystal hue. The delicate gold chain is adjustable, letting the pendant rest just below the collarbone. A piece designed for gifting and everyday radiance.",
    materials:
      "18K gold plating over 925 sterling silver. Multicolor cubic zirconia. Adjustable 40–45cm chain. Nickel-free, hypoallergenic.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Polish with a soft cloth.",
    rating: 4.9,
    reviews: 88,
    variants: ["Gold", "Silver"],
    images: 2,
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img2",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    type: "huggie earrings",
    material: "18K Gold Plated",
    shortDescription:
      "Chunky gold dome huggies with a polished, mirror finish — the everyday ear essential.",
    description:
      "Golden Sphere Huggies offer a confident, rounded silhouette that sits close to the lobe. The smooth dome catches light from every angle, making them the perfect everyday staple that transitions from desk to dinner. Secure hinged closure for all-day comfort.",
    materials:
      "18K gold plating over 925 sterling silver. Polished dome. Hinged snap closure. Nickel-free, hypoallergenic.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.",
    rating: 4.7,
    reviews: 214,
    variants: ["Gold", "Silver"],
    images: 2,
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img2",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "drop earrings",
    material: "18K Gold Plated",
    shortDescription:
      "Textured gold filigree drop earrings with an artisanal, lace-like openwork.",
    description:
      "Amber Lace is inspired by vintage lacework, rendered in textured gold filigree. The openwork drops move softly with the wearer, casting warm shadows. Lightweight despite their presence, they bring an editorial finish to both day and evening looks.",
    materials:
      "18K gold plating over 925 sterling silver. Textured filigree. Lever-back closure. Nickel-free, hypoallergenic.",
    care: "Handle with care to preserve the filigree. Keep dry and store separately to avoid tangling.",
    rating: 4.8,
    reviews: 67,
    variants: ["Gold", "Silver"],
    images: 2,
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img2",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Necklaces",
    type: "earring + necklace set",
    material: "18K Gold Plated",
    shortDescription:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give.",
    description:
      "The Royal Heirloom Set pairs a refined crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Designed for milestones, anniversaries, and the kind of self-purchase that becomes an heirloom. Coordinated, considered, complete.",
    materials:
      "18K gold plating over 925 sterling silver. Cubic zirconia accents. Includes necklace and earrings. Nickel-free, hypoallergenic.",
    care: "Store in the gift box. Avoid moisture and perfume. Clean with a soft cloth.",
    rating: 5.0,
    reviews: 41,
    variants: ["Gold", "Silver"],
    images: 2,
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
    description: "Ear cuffs, drops & statement studs",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants, chains & layered sets",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Everyday close-fit essentials",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked huggies, golden hour",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "The Vivid Aura, on the ear",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar, layered",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Amber Lace in motion",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "The Heirloom, unboxed",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in weeks. They feel far more expensive than they were.",
  },
  {
    id: "t2",
    name: "Priya R.",
    rating: 5,
    text: "Gifted the Royal Heirloom Set to my mother and she cried. The box alone is stunning. Truly heirloom quality.",
  },
  {
    id: "t3",
    name: "Camille D.",
    rating: 5,
    text: "I have sensitive skin and these are the first gold earrings that don't irritate me. Beautiful and hypoallergenic.",
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
      const aMatch = a.category === current.category ? 1 : 0
      const bMatch = b.category === current.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, limit)
}
