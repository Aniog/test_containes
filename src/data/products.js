// Seed product catalog for Velmora Fine Jewelry
// Image queries reference nearby text element IDs via the strk-img system.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "earring",
    subType: "Ear Cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: ["Gold", "Silver"],
    badge: "Bestseller",
    shortDescription:
      "A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it curves gently around the cartilage and catches the light with a hand-set crystal. Wear it solo for a quiet gleam, or stack it with huggies for a curated ear.",
    materials:
      "18K gold plated sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    imgId: "prod-vivid-aura-a1",
    imgIdAlt: "prod-vivid-aura-alt-b2",
    galleryIds: ["prod-vivid-aura-g1", "prod-vivid-aura-g2", "prod-vivid-aura-g3", "prod-vivid-aura-g4"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "necklace",
    subType: "Pendant",
    price: 68,
    rating: 4.9,
    reviews: 89,
    tone: ["Gold"],
    badge: "New",
    shortDescription:
      "A multicolor floral crystal pendant suspended from a delicate gold chain — a garden in miniature.",
    description:
      "The Majestic Flora Nectar necklace blooms with hand-set crystals in warm amber, soft rose, and clear. The floral pendant rests on a fine 18K gold plated chain that adjusts to two lengths. A statement of quiet romance, designed to be layered or worn alone.",
    materials:
      "18K gold plated sterling silver chain. Hand-set multicolor cubic zirconia. Adjustable 16–18 inch chain.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Polish with a soft cloth.",
    imgId: "prod-majestic-flora-a1",
    imgIdAlt: "prod-majestic-flora-alt-b2",
    galleryIds: ["prod-majestic-flora-g1", "prod-majestic-flora-g2", "prod-majestic-flora-g3", "prod-majestic-flora-g4"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "earring",
    subType: "Huggie",
    price: 38,
    rating: 4.7,
    reviews: 214,
    tone: ["Gold", "Silver"],
    badge: "Bestseller",
    shortDescription:
      "Chunky gold dome huggie earrings with a smooth, sculpted finish — the everyday essential.",
    description:
      "Our Golden Sphere Huggies are the foundation of any jewelry wardrobe. The chunky dome silhouette feels substantial yet comfortable, hugging the lobe closely. Crafted in 18K gold plating with a secure hinged closure, they pair with everything from a white tee to evening wear.",
    materials:
      "18K gold plated sterling silver. Hypoallergenic hinged huggie closure. Nickel-free and lead-free.",
    care: "Wipe clean after each wear. Avoid water and chemicals. Store in a dry pouch.",
    imgId: "prod-golden-sphere-a1",
    imgIdAlt: "prod-golden-sphere-alt-b2",
    galleryIds: ["prod-golden-sphere-g1", "prod-golden-sphere-g2", "prod-golden-sphere-g3", "prod-golden-sphere-g4"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "earring",
    subType: "Drop",
    price: 54,
    rating: 4.8,
    reviews: 67,
    tone: ["Gold"],
    badge: null,
    shortDescription:
      "Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern wear.",
    description:
      "The Amber Lace earrings reimagine traditional filigree for the modern wearer. Each drop is hand-textured with an intricate openwork pattern that moves with you, catching warm light at every angle. Lightweight and graceful, they transition seamlessly from day to evening.",
    materials:
      "18K gold plated sterling silver. Hand-textured filigree. Lightweight drop construction. Hypoallergenic.",
    care: "Handle with care to preserve the filigree detail. Store separately to avoid tangling. Clean with a soft dry cloth.",
    imgId: "prod-amber-lace-a1",
    imgIdAlt: "prod-amber-lace-alt-b2",
    galleryIds: ["prod-amber-lace-g1", "prod-amber-lace-g2", "prod-amber-lace-g3", "prod-amber-lace-g4"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Sets",
    type: "set",
    subType: "Earring + Necklace",
    price: 95,
    rating: 5.0,
    reviews: 42,
    tone: ["Gold"],
    badge: "Gift Ready",
    shortDescription:
      "A gift-boxed earring and necklace set in matching gold — the complete treasure, ready to give.",
    description:
      "The Royal Heirloom Set brings together our most cherished earrings and a coordinating pendant necklace in a signature gift box. Designed to be worn together or apart, it is the perfect gift for milestones, anniversaries, or a well-earned self-purchase. Each set arrives in our keepsake Velmora box.",
    materials:
      "18K gold plated sterling silver. Coordinating earrings and pendant necklace. Presented in a signature gift box.",
    care: "Store each piece in the provided box compartments. Keep dry and away from perfumes. Polish gently with a soft cloth.",
    imgId: "prod-royal-heirloom-a1",
    imgIdAlt: "prod-royal-heirloom-alt-b2",
    galleryIds: ["prod-royal-heirloom-g1", "prod-royal-heirloom-g2", "prod-royal-heirloom-g3", "prod-royal-heirloom-g4"],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Ear cuffs, drops, and statement studs",
    imgId: "cat-earrings-a1",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants, chains, and layered essentials",
    imgId: "cat-necklaces-a1",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Everyday huggie hoops in warm gold",
    imgId: "cat-huggies-a1",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The quality is unreal for the price. I wear my huggies every single day and they still look brand new. The gold has such a warm, real feel.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Flora Nectar as a gift for my sister and she cried. The packaging alone feels like a treasure. This is my new go-to for jewelry.",
  },
  {
    name: "Margot L.",
    rating: 5,
    text: "I was nervous about demi-fine but Velmora nails it. The ear cuff stays put all day and the crystals catch every bit of light. Quietly luxurious.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-1-a1",
  },
  {
    id: "reel-2",
    caption: "Stacking the Vivid Aura cuff",
    imgId: "reel-2-a1",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar, golden hour",
    imgId: "reel-3-a1",
  },
  {
    id: "reel-4",
    caption: "Amber Lace for evening",
    imgId: "reel-4-a1",
  },
  {
    id: "reel-5",
    caption: "The Heirloom Set, unboxed",
    imgId: "reel-5-a1",
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
