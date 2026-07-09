// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries explicit text-reference IDs so the stock image system
// can build contextual queries from neighbouring text content.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const MATERIALS = [
  { id: "gold", name: "18K Gold Plated" },
  { id: "silver", name: "Sterling Silver" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      "A sculptural gold ear cuff crowned with a single crystal accent — wear it solo for a quiet statement.",
    description:
      "The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plating over brass. A hand-set crystal catches the light with every turn. Lightweight, hypoallergenic, and made to be worn every day.",
    materials:
      "18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, hypoallergenic post backing.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    badge: "Bestseller",
    imgId: "prod-vivid-aura-a1",
    imgIdAlt: "prod-vivid-aura-b2",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 204,
    shortDescription:
      "A multicolor floral crystal necklace — petals of citrine, rose, and peridot suspended on a fine gold chain.",
    description:
      "Majestic Flora Nectar is a pendant necklace featuring a hand-arranged floral cluster of multicolor crystals. The adjustable 16–18 inch chain lets it sit perfectly at the collarbone. A romantic piece designed for gifting.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable chain 16–18 inches with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in a jewelry box to protect the crystal setting.",
    badge: "New",
    imgId: "prod-majestic-flora-a1",
    imgIdAlt: "prod-majestic-flora-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDescription:
      "Chunky gold dome huggie earrings with a smooth, polished finish that hugs the lobe.",
    description:
      "Golden Sphere Huggies are everyday staples — a chunky polished dome that sits flush against the lobe. The hinged hoop opens and closes with a secure click, making them effortless to wear from desk to dinner.",
    materials:
      "18K gold plating over brass. Polished dome. Hinged click closure. Hypoallergenic.",
    care: "Wipe clean after wear. Avoid water exposure to preserve the plating.",
    badge: "Bestseller",
    imgId: "prod-golden-sphere-a1",
    imgIdAlt: "prod-golden-sphere-b2",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 97,
    shortDescription:
      "Textured gold filigree drop earrings — intricate openwork that moves with a soft sway.",
    description:
      "Amber Lace is a drop earring inspired by antique lacework. The filigree is cut by hand and finished in warm gold, catching light through its open weave. Lightweight despite its statement silhouette.",
    materials:
      "18K gold plating over brass. Hand-cut filigree. Lever-back closure. Nickel-free.",
    care: "Handle the filigree with care. Store in a separate compartment to avoid tangling.",
    badge: null,
    imgId: "prod-amber-lace-a1",
    imgIdAlt: "prod-amber-lace-b2",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      "A gift-boxed earring and necklace set — coordinated heirloom styling for the perfect present.",
    description:
      "The Royal Heirloom Set pairs a crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Designed for milestone moments — anniversaries, birthdays, and 'just because'.",
    materials:
      "18K gold plating over brass. Cubic zirconia accents. Includes necklace and earrings. Gift box included.",
    care: "Store each piece separately in the gift box. Polish with a soft cloth before wearing.",
    badge: "Gift Set",
    imgId: "prod-royal-heirloom-a1",
    imgIdAlt: "prod-royal-heirloom-b2",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
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
