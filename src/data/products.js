// Seed product data for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes.
// Each product has a primary and hover image id plus text reference ids.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "Ear Cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    material: "18K Gold Plated",
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.",
    description:
      "The Vivid Aura ear cuff is an everyday statement. Hand-finished in 18K gold plating over brass, it curves gently to hug the cartilage and catches light with a hand-set crystal. Wear it solo for a quiet gleam or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "vivid-aura-1-a3f2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2-b7c1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "Pendant Necklace",
    price: 68,
    rating: 4.9,
    reviews: 203,
    material: "18K Gold Plated",
    shortDesc:
      "A multicolor floral crystal pendant suspended on a delicate gold chain — a garden of light at the collarbone.",
    description:
      "Majestic Flora Nectar blooms with hand-set crystals in warm jewel tones, arranged into a delicate floral pendant. The fine gold-plated chain sits gracefully at the collarbone, making it a romantic centerpiece for both casual and occasion wear.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Clean with a soft, dry cloth.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "majestic-flora-1-c2d9", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2-d8e4", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "Huggie Earrings",
    price: 38,
    rating: 4.7,
    reviews: 318,
    material: "18K Gold Plated",
    shortDesc:
      "Chunky gold dome huggies with a smooth, sculpted finish — the everyday hoop you'll never take off.",
    description:
      "Golden Sphere Huggies reimagine the classic hoop with a chunky, polished dome. The hinged huggie closure sits snug against the lobe for all-day comfort. Polished to a warm mirror finish, they pair effortlessly with every other piece in the collection.",
    materials:
      "18K gold plating over brass. Polished dome. Hinged huggie closure. Hypoallergenic and nickel-free.",
    care: "Wipe clean after each wear. Avoid water and chemicals. Store in a dry pouch to prevent tarnish.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "golden-sphere-1-e5f1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2-f6a2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "Drop Earrings",
    price: 54,
    rating: 4.8,
    reviews: 97,
    material: "18K Gold Plated",
    shortDesc:
      "Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern weight.",
    description:
      "Amber Lace Earrings are inspired by antique filigree. Each drop is hand-textured into an openwork lace pattern that moves with a whisper. Lightweight despite their presence, they bring an editorial, heirloom quality to any look.",
    materials:
      "18K gold plating over brass. Hand-textured filigree. Lightweight drop silhouette. Hypoallergenic posts.",
    care: "Handle with care to preserve the filigree detail. Keep dry and store separately to avoid tangling.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "amber-lace-1-a1b3", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-2-c4d6", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    type: "Gift Set",
    price: 95,
    rating: 5.0,
    reviews: 64,
    material: "18K Gold Plated",
    shortDesc:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give and to treasure.",
    description:
      "The Royal Heirloom Set unites a pair of crystal-accented earrings with a matching pendant necklace, presented in a signature Velmora gift box. Coordinated in tone and proportion, it is the effortless answer to gifting — or to treating yourself.",
    materials:
      "18K gold plating over brass. Cubic zirconia accents. Includes earrings, pendant necklace, and gift box.",
    care: "Store each piece in the gift box compartments. Avoid moisture and perfume. Polish gently with a soft cloth.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "royal-heirloom-1-b2c4", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2-d6e8", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Huggies, cuffs & drops",
    imgId: "cat-earrings-1-f1a2",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants & chains",
    imgId: "cat-necklaces-1-b3c4",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Everyday hoops",
    imgId: "cat-huggies-1-d5e6",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in months. They feel far more expensive than they were — the gold tone is so warm.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "I gifted my mother the Royal Heirloom Set and she was moved to tears. The box, the weight, the finish — pure quiet luxury.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "Majestic Flora Nectar is the most complimented piece I own. Delicate but with real presence. I've already ordered a second for a friend.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked huggies, golden hour",
    imgId: "reel-1-a1b2",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "The ear cuff that needs no piercing",
    imgId: "reel-2-c3d4",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar, caught in sunlight",
    imgId: "reel-3-e5f6",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, an heirloom in motion",
    imgId: "reel-4-a7b8",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "A gift, unboxed",
    imgId: "reel-5-c9d0",
    titleId: "reel-5-title",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
