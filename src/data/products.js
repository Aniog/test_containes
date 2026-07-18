// Seed product data for Velmora Fine Jewelry storefront.
// Images are resolved at runtime via the strk-img system using stable imgId slots.

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
      "A sculptural gold ear cuff traced with a single crystal accent. Designed to climb the curve of the ear with quiet confidence — no piercing required.",
    details:
      "Hand-finished 18K gold plating over brass. Set with a clear cubic zirconia. Lightweight and hypoallergenic. Sold as a single piece.",
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-b2",
    variants: ["Gold", "Silver"],
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
      "A pendant of tiny enamel petals and multicolor crystals, suspended from a fine gold chain. A keepsake bloom that never fades.",
    details:
      "18K gold plating over brass. Adjustable 40–45cm chain. Lobster clasp. Hypoallergenic and nickel-free.",
    imgId: "p-majestic-flora-a1",
    imgIdAlt: "p-majestic-flora-b2",
    variants: ["Gold", "Silver"],
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
      "Polished dome huggies that hug the lobe with a soft, sculptural weight. The everyday gold earring you'll never take off.",
    details:
      "18K gold plating over brass. 12mm dome. Hinged snap closure. Sold as a pair. Hypoallergenic.",
    imgId: "p-golden-sphere-a1",
    imgIdAlt: "p-golden-sphere-b2",
    variants: ["Gold", "Silver"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    description:
      "Filigree drops in warm gold, drawn out like fine lace. They catch the light with every turn of the head.",
    details:
      "18K gold plating over brass. 45mm drop length. Fishhook post. Hypoallergenic. Sold as a pair.",
    imgId: "p-amber-lace-a1",
    imgIdAlt: "p-amber-lace-b2",
    variants: ["Gold", "Silver"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 57,
    description:
      "A coordinated set of crystal earrings and a matching pendant, presented in a velvet gift box. The kind of gift that becomes an heirloom.",
    details:
      "18K gold plating over brass. Clear cubic zirconia. Includes earrings, 42cm pendant necklace, and signature gift box. Hypoallergenic.",
    imgId: "p-royal-heirloom-a1",
    imgIdAlt: "p-royal-heirloom-b2",
    variants: ["Gold", "Silver"],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Huggies, cuffs & drops in warm gold.",
    imgId: "cat-earrings-01",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Fine chains and pendant keepsakes.",
    imgId: "cat-necklaces-01",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Polished domes that hug the lobe.",
    imgId: "cat-huggies-01",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold is so warm and the weight feels real. I've worn the huggies every day for three months and they still look brand new.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Flora Nectar as a gift and the box alone made her cry. Beautiful, considered packaging and the piece is even prettier in person.",
  },
  {
    name: "Camille D.",
    rating: 5,
    text: "Quiet luxury without the markup. The ear cuff stays put all day and I get compliments every time I wear it.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, all day.",
    imgId: "reel-huggies-01",
  },
  {
    id: "reel-2",
    caption: "Flora Nectar, layered.",
    imgId: "reel-flora-01",
  },
  {
    id: "reel-3",
    caption: "The ear cuff that stays.",
    imgId: "reel-cuff-01",
  },
  {
    id: "reel-4",
    caption: "Amber Lace at golden hour.",
    imgId: "reel-lace-01",
  },
  {
    id: "reel-5",
    caption: "Heirloom set, unboxed.",
    imgId: "reel-heirloom-01",
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
      const aScore = a.category === current.category ? 1 : 0
      const bScore = b.category === current.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
