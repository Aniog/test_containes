// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "earring",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      "A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.",
    description:
      "The Vivid Aura ear cuff is our everyday signature. Hand-finished in 18K gold plating over sterling silver, it wraps the ear with a gentle, secure curve and catches the light with a hand-set crystal. Wear it solo for a quiet statement or stack it with your favourite huggies.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume, and cosmetics. Store in the provided pouch. Clean gently with a soft dry cloth.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img",
    imgId2: "prod-vivid-aura-img2",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "necklace",
    price: 68,
    rating: 4.9,
    reviews: 89,
    shortDescription:
      "A multicolor floral crystal necklace that blooms along the collarbone — a romantic, gift-ready centerpiece.",
    description:
      "Majestic Flora Nectar is a garden in gold. Delicate petals are set with multicolor crystals that shift from amber to rose as they catch the light. The fine cable chain sits gracefully at the collarbone, finished with an adjustable extender for the perfect drape.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable 40–45cm cable chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystal setting. Polish with a soft cloth.",
    tones: ["Gold"],
    badge: "New",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img",
    imgId2: "prod-majestic-flora-img2",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Earrings",
    type: "earring",
    price: 38,
    rating: 4.7,
    reviews: 214,
    shortDescription:
      "Chunky gold dome huggie earrings with a smooth, polished finish — the everyday hoop you'll never take off.",
    description:
      "Golden Sphere Huggies reimagine the classic huggie with a bold, chunky dome silhouette. The polished gold surface reflects light from every angle, while the snug hinged hoop keeps them comfortable from morning to night. A modern essential for pierced ears.",
    materials:
      "18K gold plating over 925 sterling silver. Polished dome. Hinged snap closure. Hypoallergenic.",
    care: "Wipe clean after each wear. Avoid water and chemicals. Store in a dry pouch.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img",
    imgId2: "prod-golden-sphere-img2",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "earring",
    price: 54,
    rating: 4.8,
    reviews: 67,
    shortDescription:
      "Textured gold filigree drop earrings with an artisanal, lace-like openwork — quiet drama for evening.",
    description:
      "Amber Lace is a study in craftsmanship. Each drop is rendered in textured gold filigree, an openwork pattern that moves like lace against the skin. Lightweight despite its presence, it transitions effortlessly from day to evening wear.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure. Hypoallergenic.",
    care: "Handle with care to preserve the filigree detail. Keep dry and store in the provided box.",
    tones: ["Gold"],
    badge: null,
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img",
    imgId2: "prod-amber-lace-img2",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    type: "set",
    price: 95,
    rating: 5.0,
    reviews: 42,
    shortDescription:
      "A gift-boxed earring and necklace set designed to be treasured — the perfect present, beautifully presented.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in a signature Velmora gift box. Inspired by vintage heirloom jewelry, the set features refined gold work and subtle crystal accents. It is our most considered gift — ready to give, ready to keep.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes necklace and matching earrings. Presented in a Velmora gift box.",
    care: "Store each piece separately in the gift box. Avoid water and perfume. Clean with a soft cloth.",
    tones: ["Gold"],
    badge: "Gift Set",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img",
    imgId2: "prod-royal-heirloom-img2",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Huggies, cuffs & drops",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    bgId: "cat-earrings-bg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Pendants & chains",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    bgId: "cat-necklaces-bg",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Everyday essentials",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    bgId: "cat-huggies-bg",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere, on the ear",
    titleId: "reel-1-title",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Majestic Flora, layered",
    titleId: "reel-2-title",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Vivid Aura, stacked",
    titleId: "reel-3-title",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, at dusk",
    titleId: "reel-4-title",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom, unboxed",
    titleId: "reel-5-title",
    imgId: "reel-5-img",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold plating is genuinely beautiful — it looks far more expensive than it was. I wear my huggies every single day.",
  },
  {
    id: "t2",
    name: "Priya K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the presentation was stunning. My mother was moved to tears. Will be back.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quiet, elegant, and hypoallergenic — finally jewelry that doesn't irritate my ears. The Vivid Aura cuff is my new signature.",
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
