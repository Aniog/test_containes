// Central product catalog for Velmora Fine Jewelry.
// Each product carries stable `imgId` / `titleId` / `descId` fields so the
// stock-image system can resolve a query from the rendered text content.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", imgId: "cat-earrings-a1b2c3" },
  { id: "necklaces", name: "Necklaces", imgId: "cat-necklaces-d4e5f6" },
  { id: "huggies", name: "Huggies", imgId: "cat-huggies-g7h8i9" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    type: "Gold Ear Cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, made to catch the light.",
    longDesc:
      "The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, needing no piercing. Hand-finished in 18K gold plate over brass, it carries a hand-set crystal that refracts warm light with every turn of the head. Wear it solo for a quiet statement, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plate over brass. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgId: "prod-vivid-aura-1f2a",
    imgId2: "prod-vivid-aura-2b3c",
    gallery: [
      "prod-vivid-aura-1f2a",
      "prod-vivid-aura-2b3c",
      "prod-vivid-aura-g3a4",
      "prod-vivid-aura-g4b5",
    ],
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    type: "Floral Crystal Necklace",
    price: 68,
    rating: 4.9,
    reviews: 88,
    badge: "Bestseller",
    shortDesc:
      "A multicolor floral pendant suspended on a fine gold chain — a garden of crystals that blooms against the collarbone.",
    longDesc:
      "Majestic Flora Nectar gathers hand-set crystals into a delicate floral cluster, each petal a different warm hue. The pendant rides a whisper-thin 18K gold plated chain that adjusts to three lengths, so it layers beautifully or stands alone. A piece designed for gifting and for keeping.",
    materials:
      "18K gold plate over brass. Multicolor cubic zirconia crystals. Adjustable chain 40–46cm. Lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a soft, dry cloth.",
    variants: ["Gold", "Silver"],
    imgId: "prod-majestic-flora-4d5e",
    imgId2: "prod-majestic-flora-6f7a",
    gallery: [
      "prod-majestic-flora-4d5e",
      "prod-majestic-flora-6f7a",
      "prod-majestic-flora-g7b8",
      "prod-majestic-flora-g8c9",
    ],
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    type: "Chunky Gold Dome Huggies",
    price: 38,
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggies with a polished, mirror finish — the everyday earring you will never take off.",
    longDesc:
      "Golden Sphere Huggies pair a confident dome silhouette with a snug, comfortable hoop closure. The polished 18K gold plate catches light from every angle, making them equally at home with a white tee or an evening dress. Sold as a pair.",
    materials:
      "18K gold plate over brass. Polished dome. Hinged huggie closure. Nickel-free, hypoallergenic.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.",
    variants: ["Gold", "Silver"],
    imgId: "prod-golden-sphere-8b9c",
    imgId2: "prod-golden-sphere-0d1e",
    gallery: [
      "prod-golden-sphere-8b9c",
      "prod-golden-sphere-0d1e",
      "prod-golden-sphere-g9d0",
      "prod-golden-sphere-g0e1",
    ],
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    type: "Textured Gold Filigree Drops",
    price: 54,
    rating: 4.8,
    reviews: 97,
    badge: "New",
    shortDesc:
      "Textured gold filigree drop earrings — openwork lace rendered in warm metal, swaying with every movement.",
    longDesc:
      "Amber Lace reimagines traditional filigree as a modern drop earring. The openwork gold plate is light enough for all-day wear yet detailed enough to feel heirloom. A subtle hammered texture diffuses light across the lace, giving each pair its own character.",
    materials:
      "18K gold plate over brass. Textured filigree drop. Lever-back closure. Nickel-free, hypoallergenic.",
    care: "Handle with care to protect the filigree. Keep dry, store flat. Polish with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgId: "prod-amber-lace-2f3a",
    imgId2: "prod-amber-lace-4b5c",
    gallery: [
      "prod-amber-lace-2f3a",
      "prod-amber-lace-4b5c",
      "prod-amber-lace-g5d6",
      "prod-amber-lace-g6e7",
    ],
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    type: "Gift-Boxed Earring + Necklace Set",
    price: 95,
    rating: 5.0,
    reviews: 64,
    badge: "Gift Set",
    shortDesc:
      "A coordinated earring and necklace set, presented in a signature gift box — the complete gift, ready to give.",
    longDesc:
      "The Royal Heirloom Set unites a crystal-accented necklace with matching drop earrings in a single, considered composition. Each set arrives in a Velmora signature gift box with a satin ribbon, ready for the moment of giving. The pieces are designed to be worn together or apart.",
    materials:
      "18K gold plate over brass. Cubic zirconia crystals. Necklace 42cm + 5cm extender. Earrings lever-back. Gift boxed.",
    care: "Store each piece separately in the gift box. Avoid water and perfume. Clean with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgId: "prod-royal-heirloom-6d7e",
    imgId2: "prod-royal-heirloom-8f9a",
    gallery: [
      "prod-royal-heirloom-6d7e",
      "prod-royal-heirloom-8f9a",
      "prod-royal-heirloom-g9f0",
      "prod-royal-heirloom-g0g1",
    ],
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}

export function getBestsellers() {
  return PRODUCTS.filter((p) => p.badge === "Bestseller")
}
