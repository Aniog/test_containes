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
      "The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension. Hand-finished in 18K gold plating over sterling silver, it catches the light from every angle thanks to a hand-set crystal. Wear it solo for a quiet statement or stack it with your favourite huggies.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with perfumes and water. Store in the provided pouch. Polish with a soft jewellery cloth.",
    tones: ["Gold", "Silver"],
    images: [
      { imgId: "vivid-aura-1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
    titleId: "vivid-aura-title",
    descId: "vivid-aura-desc",
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "necklace",
    price: 68,
    rating: 4.9,
    reviews: 88,
    shortDescription:
      "A multicolor floral crystal necklace that blooms along the collarbone — a romantic, gift-ready centrepiece.",
    description:
      "Majestic Flora Nectar suspends a delicate floral cluster of multicolor crystals from a fine gold chain. Each petal is set by hand to refract warm and cool light, making it read as effortlessly elegant by day and luminous by night. The adjustable chain lets it sit perfectly above any neckline.",
    materials:
      "18K gold plating over brass. Hand-set multicolor cubic zirconia. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a soft dry cloth.",
    tones: ["Gold"],
    images: [
      { imgId: "majestic-flora-1", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "huggie",
    price: 38,
    rating: 4.7,
    reviews: 214,
    shortDescription:
      "Chunky gold dome huggie earrings with a smooth, sculpted finish — the everyday hoop you'll never take off.",
    description:
      "Golden Sphere Huggies reimagine the classic huggie with a bold, chunky dome silhouette. The polished gold surface reflects light like liquid metal, while the snug hinged hoop keeps them comfortable enough to sleep in. Sold as a pair.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.",
    care: "Wipe clean with a soft cloth after each wear. Avoid water and chemicals. Store in a dry pouch.",
    tones: ["Gold", "Silver"],
    images: [
      { imgId: "golden-sphere-1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "earring",
    price: 54,
    rating: 4.8,
    reviews: 73,
    shortDescription:
      "Textured gold filigree drop earrings with an artisan, lace-like openwork — quiet drama for evening.",
    description:
      "Amber Lace is a study in negative space. Each drop is hand-textured to recall antique lace, with filigree openwork that moves softly with the wearer. The warm gold tone flatters every complexion, and the lightweight construction means they feel as good as they look.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure for security.",
    care: "Handle with care to preserve the openwork. Store hanging or flat. Polish gently with a jewellery cloth.",
    tones: ["Gold"],
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
    category: "Sets",
    type: "set",
    price: 95,
    rating: 5.0,
    reviews: 41,
    shortDescription:
      "A gift-boxed earring and necklace set designed to be treasured — the ultimate present, for them or you.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in a signature keepsake box. The matching motifs create a pulled-together look in seconds, and the presentation makes it the most thoughtful gift in the collection. A modern heirloom, made to be passed on.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Presented in a velvet-lined keepsake box.",
    care: "Store in the provided keepsake box. Keep dry. Clean each piece with a soft jewellery cloth.",
    tones: ["Gold"],
    images: [
      { imgId: "royal-heirloom-1", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
    badge: "Gift Edit",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Huggies, cuffs & drops",
    imgId: "cat-earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Pendants & chains",
    imgId: "cat-necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Everyday essentials",
    imgId: "cat-huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in three months. They look far more expensive than they were.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "I gifted my mother the Royal Heirloom Set and she nearly cried. The box alone feels like a treasure.",
  },
  {
    name: "Camille D.",
    rating: 5,
    text: "Quiet, warm, elegant — exactly the kind of jewellery I want to wear every single day. No green skin, ever.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked huggies, golden hour",
    imgId: "reel-1-img",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "The ear cuff that changed my routine",
    imgId: "reel-2-img",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar, styled three ways",
    imgId: "reel-3-img",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace for date night",
    imgId: "reel-4-img",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Everyday gold, no fuss",
    imgId: "reel-5-img",
    titleId: "reel-5-title",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
