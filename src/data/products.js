// Seed product catalog for Velmora Fine Jewelry.
// Each product carries stable ids used for strk-img dynamic queries.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", slug: "earrings" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces" },
  { id: "huggies", name: "Huggies", slug: "huggies" },
]

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Gold Vermeil"]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 42,
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff traced with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over brass, it traces the curve of the ear with a single hand-set crystal that catches the light. Wear it solo for a quiet statement, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel and lead free. Hand-set crystal accent.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "vivid-aura-1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
    titleId: "vivid-aura-title",
    descId: "vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: 68,
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 88,
    badge: "New",
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone.",
    description:
      "Majestic Flora Nectar is a garden in miniature — a cascade of floral motifs set with multicolor crystals along a delicate gold chain. Adjustable length lets it sit just above the collarbone or layer with finer chains. A gifting favourite.",
    materials:
      "18K gold plating over brass. Multicolor hand-set crystals. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.",
    variants: ["Gold"],
    images: [
      { imgId: "majestic-flora-1", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    categoryLabel: "Huggies",
    price: 38,
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggie earrings with a smooth, sculpted finish.",
    description:
      "Our Golden Sphere Huggies are the everyday essential — a chunky dome silhouette that hugs the lobe with a secure hinged closure. Polished to a warm gold shine, they pair effortlessly with everything from a white tee to evening wear.",
    materials:
      "18K gold plating over brass. Hypoallergenic hinged hoop closure. Nickel and lead free.",
    care: "Wipe clean with a soft cloth after wear. Keep dry and store in the provided pouch.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "golden-sphere-1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 54,
    material: "Gold Vermeil",
    rating: 4.8,
    reviews: 64,
    badge: null,
    shortDesc:
      "Textured gold filigree drop earrings with an artisanal openwork finish.",
    description:
      "Amber Lace is inspired by antique lacework — a textured gold filigree drop that moves softly with the wearer. Lightweight despite its presence, it brings an editorial finish to both day and evening looks.",
    materials:
      "Gold vermeil over sterling silver. Textured filigree drop. Lever-back closure.",
    care: "Store separately to avoid tangling. Clean with a jewelry polishing cloth.",
    variants: ["Gold"],
    images: [
      { imgId: "amber-lace-1", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-2", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
    titleId: "amber-lace-title",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: 95,
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 41,
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set designed to be treasured together.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in a signature gift box — our most thoughtful present. Warm gold tones and a timeless silhouette make it a piece to be passed down. Arrives ready to gift.",
    materials:
      "18K gold plating over brass. Coordinating necklace and stud earrings. Presented in a signature Velmora gift box.",
    care: "Store each piece in the gift box. Avoid water and perfume contact.",
    variants: ["Gold"],
    images: [
      { imgId: "royal-heirloom-1", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
  },
  {
    id: "lumen-thread-necklace",
    name: "Lumen Thread Necklace",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: 46,
    material: "Gold Vermeil",
    rating: 4.6,
    reviews: 73,
    badge: null,
    shortDesc:
      "A whisper-thin gold chain with a single luminous pendant.",
    description:
      "Lumen Thread is the layering essential — a whisper-thin gold vermeil chain finished with a single luminous pendant. Designed to sit close to the collarbone and layer beautifully with bolder pieces.",
    materials: "Gold vermeil over sterling silver. 42cm chain. Hand-finished pendant.",
    care: "Handle with care — fine chain. Store flat and untangled.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "lumen-thread-1", titleId: "lumen-thread-title", descId: "lumen-thread-desc" },
      { imgId: "lumen-thread-2", titleId: "lumen-thread-title", descId: "lumen-thread-desc" },
    ],
    titleId: "lumen-thread-title",
    descId: "lumen-thread-desc",
  },
  {
    id: "celeste-crescent-huggies",
    name: "Celeste Crescent Huggies",
    category: "huggies",
    categoryLabel: "Huggies",
    price: 44,
    material: "Sterling Silver",
    rating: 4.7,
    reviews: 58,
    badge: null,
    shortDesc:
      "Slim crescent huggies with a brushed silver finish.",
    description:
      "Celeste Crescent brings a softer, cooler tone to the huggie silhouette — a slim crescent in brushed sterling silver that flatters every skin tone. A quiet alternative to gold for everyday wear.",
    materials: "Sterling silver, brushed finish. Hypoallergenic hinged closure.",
    care: "Polish with a silver cloth to prevent tarnish. Keep dry when not worn.",
    variants: ["Silver", "Gold"],
    images: [
      { imgId: "celeste-crescent-1", titleId: "celeste-crescent-title", descId: "celeste-crescent-desc" },
      { imgId: "celeste-crescent-2", titleId: "celeste-crescent-title", descId: "celeste-crescent-desc" },
    ],
    titleId: "celeste-crescent-title",
    descId: "celeste-crescent-desc",
  },
  {
    id: "soleil-hoop-earrings",
    name: "Soleil Hoop Earrings",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 52,
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 97,
    badge: null,
    shortDesc:
      "Medium gold hoops with a warm, mirror-polished finish.",
    description:
      "Soleil is the hoop you reach for every morning — a medium silhouette with a warm mirror-polished gold finish. Lightweight, secure, and quietly luxurious.",
    materials: "18K gold plating over brass. Hypoallergenic click closure.",
    care: "Wipe clean after wear. Store in the provided pouch.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "soleil-hoop-1", titleId: "soleil-hoop-title", descId: "soleil-hoop-desc" },
      { imgId: "soleil-hoop-2", titleId: "soleil-hoop-title", descId: "soleil-hoop-desc" },
    ],
    titleId: "soleil-hoop-title",
    descId: "soleil-hoop-desc",
  },
]

export const bestsellers = [
  "vivid-aura-jewels",
  "majestic-flora-nectar",
  "golden-sphere-huggies",
  "amber-lace-earrings",
  "royal-heirloom-set",
].map((id) => products.find((p) => p.id === id))

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

export const testimonials = [
  {
    id: "t1",
    name: "Elena R.",
    rating: 5,
    text: "The gold is so warm and real-looking. I've worn my huggies every day for months and they still look brand new.",
  },
  {
    id: "t2",
    name: "Priya S.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the box alone made her cry. Beautiful, considered packaging.",
  },
  {
    id: "t3",
    name: "Margot L.",
    rating: 5,
    text: "Quietly luxurious. The kind of jewelry that looks far more expensive than it is. I've already ordered twice more.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "The everyday ear, curated.",
    imgId: "reel-1",
    titleId: "reel-1-title",
  },
  {
    id: "r2",
    caption: "Golden Sphere Huggies, on rotation.",
    imgId: "reel-2",
    titleId: "reel-2-title",
  },
  {
    id: "r3",
    caption: "Layered necklaces, warm gold.",
    imgId: "reel-3",
    titleId: "reel-3-title",
  },
  {
    id: "r4",
    caption: "Amber Lace, caught in the light.",
    imgId: "reel-4",
    titleId: "reel-4-title",
  },
  {
    id: "r5",
    caption: "A gift worth treasuring.",
    imgId: "reel-5",
    titleId: "reel-5-title",
  },
]
