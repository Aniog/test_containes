// Seed product data for Velmora Fine Jewelry
// imgId values are unique identifiers for the stock image system.

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
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to be worn alone or stacked along the curve of the ear for an effortless, modern finish.",
    details:
      "Hand-finished 18K gold plating over brass. Set with a clear cubic zirconia crystal. Nickel-free and hypoallergenic. Sold as a single piece.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    variants: ["Gold", "Silver"],
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-a2",
    gallery: ["p-vivid-aura-g1", "p-vivid-aura-g2", "p-vivid-aura-g3"],
    bestseller: true,
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
      "A delicate floral pendant scattered with multicolor crystals, suspended from a fine gold chain. A quiet statement piece that catches the light with every movement.",
    details:
      "18K gold plating over brass. Set with multicolor cubic zirconia. Adjustable chain length 40-45cm with extender. Lobster clasp closure.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Polish with a microfibre cloth.",
    variants: ["Gold", "Silver"],
    imgId: "p-majestic-flora-a1",
    imgIdAlt: "p-majestic-flora-a2",
    gallery: ["p-majestic-flora-g1", "p-majestic-flora-g2", "p-majestic-flora-g3"],
    bestseller: true,
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
      "Chunky dome huggies with a smooth, polished finish. The everyday gold earring that sits close to the lobe and never goes out of style.",
    details:
      "18K gold plating over brass. Polished dome silhouette. Hinged huggie closure. Sold as a pair. Hypoallergenic and nickel-free.",
    care: "Wipe clean after each wear. Keep away from water and chemicals. Store in a dry place.",
    variants: ["Gold", "Silver"],
    imgId: "p-golden-sphere-a1",
    imgIdAlt: "p-golden-sphere-a2",
    gallery: ["p-golden-sphere-g1", "p-golden-sphere-g2", "p-golden-sphere-g3"],
    bestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 91,
    description:
      "Intricate filigree drops with a warm, textured finish. Inspired by antique lacework, these earrings bring a soft, romantic movement to any look.",
    details:
      "18K gold plating over brass. Textured filigree drop, 38mm length. Lightweight and comfortable for all-day wear. Hypoallergenic.",
    care: "Handle with care to protect the filigree detail. Store in the provided pouch. Clean with a soft, dry cloth.",
    variants: ["Gold", "Silver"],
    imgId: "p-amber-lace-a1",
    imgIdAlt: "p-amber-lace-a2",
    gallery: ["p-amber-lace-g1", "p-amber-lace-g2", "p-amber-lace-g3"],
    bestseller: true,
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
      "A coordinated set of filigree earrings and a matching pendant necklace, presented in a signature gift box. The perfect ready-to-gift heirloom.",
    details:
      "18K gold plating over brass. Matching filigree earrings and pendant necklace. Arrives in a Velmora signature gift box. Hypoallergenic.",
    care: "Store each piece separately to avoid tangling. Keep dry and away from perfume. Polish gently with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgId: "p-royal-heirloom-a1",
    imgIdAlt: "p-royal-heirloom-a2",
    gallery: ["p-royal-heirloom-g1", "p-royal-heirloom-g2", "p-royal-heirloom-g3"],
    bestseller: true,
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Huggies, cuffs and drops",
    imgId: "cat-earrings-a1",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants and chains",
    imgId: "cat-necklaces-a1",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Everyday gold essentials",
    imgId: "cat-huggies-a1",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The quality is unreal for the price. My huggies haven't tarnished after months of daily wear. They feel like fine jewelry.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Flora Nectar necklace as a gift and it arrived in the most beautiful box. My sister cried. Truly special.",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "I get compliments every time I wear the Amber Lace earrings. They look far more expensive than they were.",
  },
]

export const reels = [
  { id: "r1", caption: "Everyday gold, elevated", imgId: "reel-1-a1" },
  { id: "r2", caption: "Stacked huggies, soft glow", imgId: "reel-2-a1" },
  { id: "r3", caption: "The gift that lasts", imgId: "reel-3-a1" },
  { id: "r4", caption: "Warm light, warm gold", imgId: "reel-4-a1" },
  { id: "r5", caption: "Worn on the neck", imgId: "reel-5-a1" },
  { id: "r6", caption: "Quiet luxury, every day", imgId: "reel-6-a1" },
]

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
