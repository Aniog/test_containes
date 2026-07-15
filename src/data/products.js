// Seed product data for Velmora Fine Jewelry.
// Each product carries stable ids used for the stock-image system
// (data-strk-img references text element ids on the page).

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
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the curve of the ear with quiet brilliance — no piercing required.",
    details: [
      "18K gold plating over brass",
      "Hand-set crystal accent",
      "Hypoallergenic, nickel-free",
      "Sold as a single piece",
    ],
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch to preserve the finish.",
    imgId: "prod-vivid-aura-a1",
    imgIdAlt: "prod-vivid-aura-alt-b2",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 204,
    description:
      "A garden in bloom, suspended at the collar. Multicolor crystals are arranged into delicate floral clusters on a fine gold chain.",
    details: [
      "18K gold plating over brass",
      "Multicolor crystal floral motif",
      "Adjustable 40–45cm chain",
      "Lobster clasp closure",
    ],
    care: "Gently wipe with a soft cloth after wear. Keep away from moisture and chemicals to protect the crystals.",
    imgId: "prod-majestic-flora-a1",
    imgIdAlt: "prod-majestic-flora-alt-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
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
    description:
      "Bold yet refined, these chunky dome huggies hug the lobe with a polished gold sphere. An everyday signature with quiet presence.",
    details: [
      "18K gold plating over brass",
      "Polished dome silhouette",
      "Hinged huggie closure",
      "Sold as a pair",
    ],
    care: "Clean with a dry microfiber cloth. Store separately to avoid scratching the polished surface.",
    imgId: "prod-golden-sphere-a1",
    imgIdAlt: "prod-golden-sphere-alt-b2",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 97,
    description:
      "Intricate filigree rendered in warm gold. These drop earrings move like lace, catching light with every turn of the head.",
    details: [
      "18K gold plating over brass",
      "Hand-finished filigree texture",
      "Lightweight drop, 4.5cm length",
      "Lever-back closure",
    ],
    care: "Handle with care to protect the filigree detail. Store in a soft pouch when not worn.",
    imgId: "prod-amber-lace-a1",
    imgIdAlt: "prod-amber-lace-alt-b2",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
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
    description:
      "A coordinated heirloom, presented in a signature gift box. The matching earrings and necklace are designed to be worn together or apart.",
    details: [
      "18K gold plating over brass",
      "Coordinated earring + necklace pair",
      "Presented in a Velmora gift box",
      "Ideal for gifting",
    ],
    care: "Polish gently with a soft cloth. Return to the gift box between wears to maintain the finish.",
    imgId: "prod-royal-heirloom-a1",
    imgIdAlt: "prod-royal-heirloom-alt-b2",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "Sculptural studs, drops & cuffs",
    imgId: "cat-earrings-c1",
    titleId: "cat-title-earrings",
    descId: "cat-desc-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "Fine chains & pendant stories",
    imgId: "cat-necklaces-c1",
    titleId: "cat-title-necklaces",
    descId: "cat-desc-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "Polished domes that hug the lobe",
    imgId: "cat-huggies-c1",
    titleId: "cat-title-huggies",
    descId: "cat-desc-huggies",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold is so warm and the weight feels real. I wear my huggies every single day — they haven't tarnished once.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Flora necklace as a gift and ended up keeping it for myself. The packaging alone feels like a treasure.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "Quiet, elegant, and surprisingly affordable for how premium it looks. I've already ordered a second piece.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, worn daily",
    imgId: "reel-1-d1",
    titleId: "reel-title-1",
  },
  {
    id: "reel-2",
    caption: "Flora Nectar layered at the collar",
    imgId: "reel-2-d2",
    titleId: "reel-title-2",
  },
  {
    id: "reel-3",
    caption: "Vivid Aura cuff climbing the ear",
    imgId: "reel-3-d3",
    titleId: "reel-title-3",
  },
  {
    id: "reel-4",
    caption: "Amber Lace catching the light",
    imgId: "reel-4-d4",
    titleId: "reel-title-4",
  },
  {
    id: "reel-5",
    caption: "The Heirloom set, unboxed",
    imgId: "reel-5-d5",
    titleId: "reel-title-5",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
