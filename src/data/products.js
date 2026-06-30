// Seed product catalogue for Velmora Fine Jewelry.
// Images are resolved at runtime via the strk-img system (data-strk-img).
// Each product has a primary + hover image id and descriptive text used as
// the image search query context.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Gold Vermeil"]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18K Gold Plated",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff wraps the ear in warm 18K gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    badge: "Bestseller",
    imgId: "p-vivid-aura-a7c1",
    hoverImgId: "p-vivid-aura-hover-b2d9",
    gallery: [
      "p-vivid-aura-g1-c1",
      "p-vivid-aura-g2-c2",
      "p-vivid-aura-g3-c3",
      "p-vivid-aura-g4-c4",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18K Gold Plated",
    price: 68,
    rating: 4.9,
    reviews: 204,
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone.",
    description:
      "Majestic Flora Nectar is a delicate chain scattered with multicolor floral crystals, each petal set by hand. The result is a necklace that feels like a garden in bloom — luminous, feminine and quietly bold.",
    care: "Keep dry and away from perfumes. Clean with a microfibre cloth. Store flat to protect the chain.",
    badge: "Bestseller",
    imgId: "p-majestic-flora-a7c2",
    hoverImgId: "p-majestic-flora-hover-b2d0",
    gallery: [
      "p-majestic-flora-g1-d1",
      "p-majestic-flora-g2-d2",
      "p-majestic-flora-g3-d3",
      "p-majestic-flora-g4-d4",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDesc:
      "Chunky gold dome huggie earrings — everyday polish with a confident edge.",
    description:
      "These chunky dome huggies hug the lobe in polished 18K gold plating. Smooth, weighty and endlessly wearable, they move effortlessly from morning meetings to evening dinners.",
    care: "Wipe clean after each wear. Keep away from moisture. Store in a dry jewellery box.",
    badge: "Bestseller",
    imgId: "p-golden-sphere-a7c3",
    hoverImgId: "p-golden-sphere-hover-b2d1",
    gallery: [
      "p-golden-sphere-g1-e1",
      "p-golden-sphere-g2-e2",
      "p-golden-sphere-g3-e3",
      "p-golden-sphere-g4-e4",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "Gold Vermeil",
    price: 54,
    rating: 4.8,
    reviews: 97,
    shortDesc:
      "Textured gold filigree drop earrings with an heirloom, lace-like finish.",
    description:
      "Amber Lace is a pair of textured gold filigree drops, their openwork pattern inspired by antique lace. Light catches every curve, giving the earrings a soft, glowing movement as you wear them.",
    care: "Handle with care — filigree is delicate. Avoid sleeping in them. Polish with a soft cloth.",
    badge: "New",
    imgId: "p-amber-lace-a7c4",
    hoverImgId: "p-amber-lace-hover-b2d2",
    gallery: [
      "p-amber-lace-g1-f1",
      "p-amber-lace-g2-f2",
      "p-amber-lace-g3-f3",
      "p-amber-lace-g4-f4",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    material: "18K Gold Plated",
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDesc:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in warm 18K gold plating, presented in a signature Velmora gift box. A complete, considered gift for milestones and quiet celebrations alike.",
    care: "Store each piece separately to avoid tangling. Keep dry. Clean gently with a soft cloth.",
    badge: "Gift Set",
    imgId: "p-royal-heirloom-a7c5",
    hoverImgId: "p-royal-heirloom-hover-b2d3",
    gallery: [
      "p-royal-heirloom-g1-g1",
      "p-royal-heirloom-g2-g2",
      "p-royal-heirloom-g3-g3",
      "p-royal-heirloom-g4-g4",
    ],
  },
  {
    id: "lumen-thread-necklace",
    name: "Lumen Thread Necklace",
    category: "necklaces",
    material: "Sterling Silver",
    price: 46,
    rating: 4.6,
    reviews: 88,
    shortDesc:
      "A whisper-thin silver chain with a single luminous drop.",
    description:
      "Lumen Thread is a fine sterling silver chain finished with a single luminous drop. Minimal, modern and made for layering, it sits close to the collarbone with a quiet glow.",
    care: "Silver naturally tarnishes over time. Polish with a silver cloth. Store in an airtight pouch.",
    imgId: "p-lumen-thread-a7c6",
    hoverImgId: "p-lumen-thread-hover-b2d4",
    gallery: [
      "p-lumen-thread-g1-h1",
      "p-lumen-thread-g2-h2",
      "p-lumen-thread-g3-h3",
      "p-lumen-thread-g4-h4",
    ],
  },
  {
    id: "celeste-mini-huggies",
    name: "Celeste Mini Huggies",
    category: "huggies",
    material: "Gold Vermeil",
    price: 34,
    rating: 4.7,
    reviews: 142,
    shortDesc:
      "Petite gold vermeil huggies with a tiny crystal star.",
    description:
      "Celeste Mini huggies are petite gold vermeil hoops finished with a single crystal star. Dainty enough for everyday, special enough to be noticed — the perfect second or third piercing piece.",
    care: "Keep away from water and perfume. Store separately. Polish gently.",
    imgId: "p-celeste-mini-a7c7",
    hoverImgId: "p-celeste-mini-hover-b2d5",
    gallery: [
      "p-celeste-mini-g1-i1",
      "p-celeste-mini-g2-i2",
      "p-celeste-mini-g3-i3",
      "p-celeste-mini-g4-i4",
    ],
  },
  {
    id: "solene-arc-earrings",
    name: "Solene Arc Earrings",
    category: "earrings",
    material: "18K Gold Plated",
    price: 58,
    rating: 4.9,
    reviews: 73,
    shortDesc:
      "A sweeping gold arc that frames the face in warm light.",
    description:
      "Solene Arc is a sculptural gold-plated earring that sweeps upward along the ear, framing the face with a warm, architectural line. Modern, confident and impossibly flattering.",
    care: "Avoid moisture and cosmetics. Store in the provided pouch. Wipe clean after wear.",
    imgId: "p-solene-arc-a7c8",
    hoverImgId: "p-solene-arc-hover-b2d6",
    gallery: [
      "p-solene-arc-g1-j1",
      "p-solene-arc-g2-j2",
      "p-solene-arc-g3-j3",
      "p-solene-arc-g4-j4",
    ],
  },
]

export const bestsellers = products.filter((p) => p.badge === "Bestseller")

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
