// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries explicit text-reference IDs (titleId/descId) used by
// the strk image system to build contextual image queries.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const MATERIALS = [
  { id: "gold", name: "18K Gold Plated" },
  { id: "silver", name: "Sterling Silver" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff traced with a single crystal accent — effortless from desk to dinner.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it curves gently around the ear with a hand-set crystal that catches the light. No piercing required — simply slide it on for an instant, modern finish.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with perfumes, water and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.",
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img2",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviews: 88,
    badge: "New",
    shortDesc:
      "A multicolor floral crystal necklace — a wearable garden of warm, faceted light.",
    description:
      "Majestic Flora Nectar is a statement necklace of layered floral motifs, each petal set with multicolor crystals that shift from amber to champagne. Finished in warm 18K gold plating, it rests on an adjustable 45–50cm chain.",
    materials:
      "18K gold plating over brass base. Hand-set multicolor cubic zirconia. Adjustable chain 45–50cm with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.",
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img2",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggie earrings — the everyday hoop with quiet presence.",
    description:
      "Golden Sphere Huggies are our signature everyday hoop: a polished gold dome that hugs the lobe with a satisfying weight. Sold as a pair, with a secure hinged closure that stays put from morning to night.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure. Sold as a pair.",
    care: "Wipe clean with a soft cloth after wear. Avoid water and chemicals to preserve the plating.",
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img2",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviews: 64,
    shortDesc:
      "Textured gold filigree drop earrings — heirloom craft, modern proportions.",
    description:
      "Amber Lace reimagines traditional filigree as a modern drop earring. The openwork gold texture moves softly with the wearer, catching warm light at every angle. Lightweight and comfortable for all-day wear.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure. Hypoallergenic.",
    care: "Handle with care to protect the openwork detail. Store in the provided pouch.",
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img2",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "necklaces",
    material: "gold",
    rating: 5.0,
    reviews: 41,
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set — the complete, considered gift.",
    description:
      "Royal Heirloom is our most considered gift: a coordinated earring and necklace set, presented in a signature Velmora keepsake box. Warm gold tones and faceted crystals make it a piece to be treasured for years.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes necklace (adjustable 45–50cm) and matching drop earrings.",
    care: "Store each piece separately in the keepsake box. Avoid water, perfume and chemicals.",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
  },
  {
    id: "lumen-thread-studs",
    name: "Lumen Thread Studs",
    price: 34,
    category: "earrings",
    material: "silver",
    rating: 4.6,
    reviews: 97,
    shortDesc:
      "Minimal sterling silver thread studs — quiet, architectural, everyday.",
    description:
      "Lumen Thread is a minimal linear stud in sterling silver, designed to follow the curve of the ear. Understated and architectural, it pairs effortlessly with any look.",
    materials:
      "925 sterling silver, rhodium-plated for tarnish resistance. Hypoallergenic. Sold as a pair.",
    care: "Polish with a silver cloth to restore shine. Keep dry.",
    titleId: "prod-lumen-thread-studs-title",
    descId: "prod-lumen-thread-studs-desc",
    imgId: "prod-lumen-thread-studs-img",
    imgId2: "prod-lumen-thread-studs-img2",
  },
  {
    id: "celeste-chain-necklace",
    name: "Celeste Chain Necklace",
    price: 58,
    category: "necklaces",
    material: "gold",
    rating: 4.8,
    reviews: 73,
    shortDesc:
      "A fine gold paperclip chain — the layering essential.",
    description:
      "Celeste is a delicate paperclip chain in 18K gold plating, designed to layer or stand alone. Lightweight with a refined drape and an adjustable 40–45cm length.",
    materials:
      "18K gold plating over 925 sterling silver. Adjustable 40–45cm. Lobster clasp.",
    care: "Avoid water and perfume. Store flat to prevent tangling.",
    titleId: "prod-celeste-chain-necklace-title",
    descId: "prod-celeste-chain-necklace-desc",
    imgId: "prod-celeste-chain-necklace-img",
    imgId2: "prod-celeste-chain-necklace-img2",
  },
  {
    id: "noir-crescent-huggies",
    name: "Noir Crescent Huggies",
    price: 44,
    category: "huggies",
    material: "silver",
    rating: 4.7,
    reviews: 58,
    shortDesc:
      "Sterling silver crescent huggies — a cool, modern counterpoint.",
    description:
      "Noir Crescent brings a cool-toned edge to our huggie family. A polished sterling silver crescent hugs the lobe with a secure hinged closure — the perfect partner to gold layers.",
    materials:
      "925 sterling silver, rhodium-plated. Hypoallergenic. Hinged snap closure. Sold as a pair.",
    care: "Polish with a silver cloth. Keep dry and store separately.",
    titleId: "prod-noir-crescent-huggies-title",
    descId: "prod-noir-crescent-huggies-desc",
    imgId: "prod-noir-crescent-huggies-img",
    imgId2: "prod-noir-crescent-huggies-img2",
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
      const aScore = (a.category === current.category ? 1 : 0) + (a.material === current.material ? 0.5 : 0)
      const bScore = (b.category === current.category ? 1 : 0) + (b.material === current.material ? 0.5 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}
