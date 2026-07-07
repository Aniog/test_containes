// Seed product data for Velmora Fine Jewelry
// Images use the strk-img tagging system; queries reference nearby text element IDs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "ear cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it curves gently around the cartilage and catches the light with a hand-set crystal. Wear it solo for a quiet statement, or stack it with your favourite huggies.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume, and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns, no questions asked.",
    images: [
      { id: "vivid-aura-1", alt: "Vivid Aura gold ear cuff with crystal" },
      { id: "vivid-aura-2", alt: "Vivid Aura ear cuff worn on ear" },
      { id: "vivid-aura-3", alt: "Vivid Aura ear cuff detail" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "floral crystal necklace",
    price: 68,
    rating: 4.9,
    reviews: 89,
    tone: "gold",
    badge: "New",
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone.",
    description:
      "Majestic Flora Nectar is a garden in miniature. Delicate gold petals cradle multicolor crystals, arranged along a fine gold chain that rests just below the collarbone. A piece designed for gifting — it arrives in our signature keepsake box.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with extender.",
    care: "Keep dry and away from perfumes. Store flat in the keepsake box. Polish with a microfibre cloth.",
    shipping:
      "Free worldwide shipping. Gift-boxed. Dispatched within 24 hours. 30-day returns.",
    images: [
      { id: "majestic-flora-1", alt: "Majestic Flora multicolor crystal necklace" },
      { id: "majestic-flora-2", alt: "Majestic Flora necklace worn on neck" },
      { id: "majestic-flora-3", alt: "Majestic Flora necklace detail" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "dome huggie earrings",
    price: 38,
    rating: 4.7,
    reviews: 214,
    tone: "gold",
    badge: "Bestseller",
    shortDesc:
      "Chunky gold dome huggies with a polished, sculptural finish.",
    description:
      "Golden Sphere Huggies are the everyday earring you'll never take off. A chunky polished dome sits snug against the lobe, catching light from every angle. Lightweight despite their bold silhouette, with a secure hinged closure.",
    materials:
      "18K gold plating over 925 sterling silver. Polished dome. Hinged snap closure. Hypoallergenic.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.",
    shipping:
      "Free worldwide shipping. Dispatched within 24 hours. 30-day returns.",
    images: [
      { id: "golden-sphere-1", alt: "Golden Sphere chunky gold dome huggies" },
      { id: "golden-sphere-2", alt: "Golden Sphere huggies worn on ear" },
      { id: "golden-sphere-3", alt: "Golden Sphere huggies detail" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "filigree drop earrings",
    price: 54,
    rating: 4.8,
    reviews: 67,
    tone: "gold",
    badge: null,
    shortDesc:
      "Textured gold filigree drop earrings with an heirloom feel.",
    description:
      "Amber Lace is inspired by antique lacework. Each drop is hand-textured in gold filigree, creating a pattern that moves softly with the wearer. An elegant drop that transitions effortlessly from day to evening.",
    materials:
      "18K gold plating over brass. Hand-textured filigree. Lever-back closure. Nickel-free.",
    care: "Handle with care to preserve the filigree detail. Store separately to avoid tangling.",
    shipping:
      "Free worldwide shipping. Dispatched within 24 hours. 30-day returns.",
    images: [
      { id: "amber-lace-1", alt: "Amber Lace textured gold filigree drop earrings" },
      { id: "amber-lace-2", alt: "Amber Lace earrings worn" },
      { id: "amber-lace-3", alt: "Amber Lace earrings detail" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    type: "earring and necklace set",
    price: 95,
    rating: 5.0,
    reviews: 41,
    tone: "gold",
    badge: "Gift Set",
    shortDesc:
      "A gift-boxed earring and necklace set in matching gold.",
    description:
      "The Royal Heirloom Set is our most considered gift. A coordinating pair of drop earrings and a pendant necklace, both finished in warm gold, presented in a velvet-lined keepsake box. Designed to be treasured — and passed on.",
    materials:
      "18K gold plating over 925 sterling silver. Matching earring and pendant set. Velvet-lined gift box included.",
    care: "Store in the provided gift box. Keep dry. Clean with a soft cloth.",
    shipping:
      "Free worldwide shipping. Gift-boxed and ready to give. Dispatched within 24 hours. 30-day returns.",
    images: [
      { id: "royal-heirloom-1", alt: "Royal Heirloom gold earring and necklace set" },
      { id: "royal-heirloom-2", alt: "Royal Heirloom set in gift box" },
      { id: "royal-heirloom-3", alt: "Royal Heirloom set worn" },
    ],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Ear cuffs, drops & statement studs",
    imgId: "cat-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants, chains & layered pieces",
    imgId: "cat-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Snug-fit everyday hoops",
    imgId: "cat-huggies",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere, all day",
    imgId: "reel-ear-1",
  },
  {
    id: "reel-2",
    caption: "Stacked & golden",
    imgId: "reel-neck-1",
  },
  {
    id: "reel-3",
    caption: "The everyday cuff",
    imgId: "reel-ear-2",
  },
  {
    id: "reel-4",
    caption: "Flora in bloom",
    imgId: "reel-neck-2",
  },
  {
    id: "reel-5",
    caption: "Heirloom moments",
    imgId: "reel-ear-3",
  },
]

export const testimonials = [
  {
    name: "Elena M.",
    rating: 5,
    text: "The quality is unreal for the price. I've worn my huggies every day for months and they still look brand new.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother cried.",
  },
  {
    name: "Camille R.",
    rating: 5,
    text: "Quiet, elegant, and so well made. The ear cuff doesn't slip at all. I get compliments constantly.",
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
