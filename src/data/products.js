// Seed product data for Velmora Fine Jewelry
// Each product has stable ids used for image queries and DOM references.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to be worn alone or stacked, it catches the light with every turn of the head.",
    details:
      "Hand-finished 18K gold plating over a durable brass core. Lead and nickel free. Sold as a single piece.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    tones: ["Gold", "Silver"],
    bestseller: true,
    imgId: "prod-vivid-aura-a1",
    imgIdAlt: "prod-vivid-aura-alt-a1",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 204,
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet statement piece for everyday elegance.",
    details:
      "18K gold plating over brass. Adjustable 40–45cm chain with lobster clasp. Hand-set crystals.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a microfiber cloth.",
    tones: ["Gold", "Silver"],
    bestseller: true,
    imgId: "prod-majestic-flora-b2",
    imgIdAlt: "prod-majestic-flora-alt-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    description:
      "Chunky gold dome huggies that hug the lobe with a soft, polished glow. Lightweight, secure, and endlessly wearable.",
    details:
      "18K gold plating over brass. Hinged snap closure. Hypoallergenic. Sold as a pair.",
    care: "Wipe clean after each wear. Avoid moisture. Store in a dry place.",
    tones: ["Gold", "Silver"],
    bestseller: true,
    imgId: "prod-golden-sphere-c3",
    imgIdAlt: "prod-golden-sphere-alt-c3",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    description:
      "Intricate gold filigree drops with a warm textured finish. Inspired by antique lacework, reimagined for the modern wearer.",
    details:
      "18K gold plating over brass. Lightweight drop, 4cm length. Fishhook closure, hypoallergenic.",
    care: "Handle with care to protect the filigree. Keep dry and store separately.",
    tones: ["Gold", "Silver"],
    bestseller: true,
    imgId: "prod-amber-lace-d4",
    imgIdAlt: "prod-amber-lace-alt-d4",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 57,
    description:
      "A coordinated earring and necklace set, presented in a signature gift box. The perfect heirloom-ready gift for someone treasured.",
    details:
      "18K gold plating over brass. Includes one pair of earrings and one adjustable necklace. Arrives in a velvet-lined gift box.",
    care: "Store in the gift box between wears. Avoid water and perfume. Polish with a soft cloth.",
    tones: ["Gold", "Silver"],
    bestseller: true,
    imgId: "prod-royal-heirloom-e5",
    imgIdAlt: "prod-royal-heirloom-alt-e5",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    descId: "cat-earrings-desc",
    titleId: "cat-earrings-title",
    imgId: "cat-earrings-img-f6",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    descId: "cat-necklaces-desc",
    titleId: "cat-necklaces-title",
    imgId: "cat-necklaces-img-g7",
  },
  {
    id: "huggies",
    name: "Huggies",
    descId: "cat-huggies-desc",
    titleId: "cat-huggies-title",
    imgId: "cat-huggies-img-h8",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold is so warm and rich — I get compliments every time I wear the Aura cuff. It feels far more expensive than it was.",
  },
  {
    id: "t2",
    name: "Priya K.",
    rating: 5,
    text: "Beautiful packaging and the necklace hasn't tarnished after months. This is now my go-to gift for friends.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quiet, elegant, and exactly what I wanted. The huggies are perfect for everyday and never irritate my ears.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Everyday gold, effortlessly stacked.",
    imgId: "reel-1-i9",
    titleId: "reel-1-title",
  },
  {
    id: "r2",
    caption: "The necklace that completes every neckline.",
    imgId: "reel-2-j10",
    titleId: "reel-2-title",
  },
  {
    id: "r3",
    caption: "Huggies that hug the light.",
    imgId: "reel-3-k11",
    titleId: "reel-3-title",
  },
  {
    id: "r4",
    caption: "Filigree details, close up.",
    imgId: "reel-4-l12",
    titleId: "reel-4-title",
  },
  {
    id: "r5",
    caption: "Gift-boxed and ready to treasure.",
    imgId: "reel-5-m13",
    titleId: "reel-5-title",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
