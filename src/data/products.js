// Seed product data for Velmora Fine Jewelry.
// Images are resolved at runtime via the strk-img system using descriptive
// query strings built from each product's title/description.

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculptural gold, worn close to the lobe.",
    desc: "From sculptural cuffs to textured drops — gold earrings made to be lived in.",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Light-catching chains that rest at the collarbone.",
    desc: "Delicate chains and crystal-set pendants for everyday layering.",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Chunky dome huggies that hug the ear.",
    desc: "Polished dome huggies in warm gold — the everyday staple.",
  },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff set with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over brass, it curves gently around the cartilage and catches the light with a single hand-set crystal. Wear it solo for a quiet statement, or stack it with your favourite studs.",
    materials:
      "18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free and hypoallergenic.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tones: ["Gold", "Silver"],
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
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    shortDesc:
      "A multicolor floral crystal necklace that rests just below the collarbone.",
    description:
      "Majestic Flora Nectar is a delicate gold chain suspending a floral pendant set with multicolor crystals. Each petal is hand-set, and the adjustable chain lets it sit perfectly at the collarbone — a quiet flourish for both day and evening.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    tones: ["Gold"],
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
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 203,
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggie earrings with a smooth, polished finish.",
    description:
      "The Golden Sphere huggies are a wardrobe staple — a chunky polished dome that hugs the lobe comfortably. Sold as a pair, they pair effortlessly with everything from a white tee to an evening dress.",
    materials:
      "18K gold plating over brass. Polished dome. Hinged snap closure. Nickel-free and hypoallergenic.",
    care: "Wipe clean with a soft cloth after each wear. Avoid water and chemicals.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    tones: ["Gold", "Silver"],
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
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 64,
    shortDesc:
      "Textured gold filigree drop earrings with an openwork lace pattern.",
    description:
      "Amber Lace is a pair of textured gold filigree drops, each one an openwork lattice that moves softly with the wearer. Lightweight despite its presence, it brings a quiet romance to any look.",
    materials:
      "18K gold plating over brass. Textured filigree. Gold-filled ear wires. Hypoallergenic.",
    care: "Handle with care — filigree is delicate. Store in the provided box. Polish gently.",
    shipping:
      "Free worldwide shipping over $50. Ships within 1–2 business days. 30-day returns on unworn pieces.",
    tones: ["Gold"],
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
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 41,
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set in matching warm gold.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earring duo in warm gold — presented in a signature Velmora gift box. Designed for gifting, it is the kind of set that becomes an heirloom.",
    materials:
      "18K gold plating over brass. Hand-set crystals. Signature gift box included.",
    care: "Store each piece separately in the gift box. Keep dry and away from perfumes.",
    shipping:
      "Free worldwide shipping. Ships within 1–2 business days in signature gift packaging. 30-day returns on unworn pieces.",
    tones: ["Gold", "Silver"],
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold is so warm and the finish feels far more expensive than it was. I wear my huggies every single day.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Heirloom Set as a gift and it arrived in the most beautiful box. My mother was genuinely moved.",
  },
  {
    name: "Camille R.",
    rating: 5,
    text: "Quiet, elegant, and the ear cuff stays put all day. This is now my go-to for demi-fine jewelry.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere huggies, all day.",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Stacking the Vivid Aura cuff.",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar at golden hour.",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, caught in motion.",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "The Heirloom Set, unboxed.",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
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
