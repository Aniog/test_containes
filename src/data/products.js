// Seed product data for Velmora Fine Jewelry
// Images are resolved at runtime via the strk image tagging system.

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
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the ear with quiet confidence — no piercing required.",
    details:
      "Hand-finished 18K gold plating over brass. Set with a clear cubic zirconia. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.",
    variants: ["Gold", "Silver"],
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-a1-alt",
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
    reviews: 203,
    description:
      "A garden in bloom, suspended at the collarbone. Multicolor floral crystals are set along a fine gold chain for an editorial, romantic finish.",
    details:
      "18K gold plating over brass. Adjustable 40–45cm chain. Set with multicolor cubic zirconia in a floral motif.",
    care: "Keep dry and away from perfumes. Store flat in a jewelry box to protect the crystal settings.",
    variants: ["Gold", "Silver"],
    imgId: "p-majestic-flora-b2",
    imgIdAlt: "p-majestic-flora-b2-alt",
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
      "Chunky gold dome huggies that hug the lobe with a polished, modern silhouette. The everyday earring you'll never take off.",
    details:
      "18K gold plating over brass. 12mm dome huggie with hinged closure. Hypoallergenic and nickel-free.",
    care: "Wipe clean with a soft cloth after each wear. Keep away from water and chemicals.",
    variants: ["Gold", "Silver"],
    imgId: "p-golden-sphere-c3",
    imgIdAlt: "p-golden-sphere-c3-alt",
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
      "Intricate gold filigree drops with a hand-textured lace pattern. Light-catching and featherlight, they move with quiet elegance.",
    details:
      "18K gold plating over brass. 45mm drop length. Textured filigree finish with secure lever-back closure.",
    care: "Handle with care to preserve the filigree detail. Store in the provided pouch.",
    variants: ["Gold", "Silver"],
    imgId: "p-amber-lace-d4",
    imgIdAlt: "p-amber-lace-d4-alt",
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
    reviews: 64,
    description:
      "A coordinated heirloom duo — matching earrings and necklace — presented in a signature gift box. The perfect gift, ready to give.",
    details:
      "Set includes one pair of earrings and one necklace. 18K gold plating over brass. Arrives in a velvet-lined Velmora gift box.",
    care: "Store each piece separately to avoid tangling. Clean with a soft, dry cloth.",
    variants: ["Gold", "Silver"],
    imgId: "p-royal-heirloom-e5",
    imgIdAlt: "p-royal-heirloom-e5-alt",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculptural studs, drops & cuffs",
    imgId: "cat-earrings-f6",
    titleId: "cat-title-earrings",
    descId: "cat-desc-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Chains, pendants & layers",
    imgId: "cat-necklaces-g7",
    titleId: "cat-title-necklaces",
    descId: "cat-desc-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Polished everyday huggies",
    imgId: "cat-huggies-h8",
    titleId: "cat-title-huggies",
    descId: "cat-desc-huggies",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-1-i9",
    titleId: "reel-title-1",
  },
  {
    id: "reel-2",
    caption: "Majestic Flora Nectar layered at the collarbone",
    imgId: "reel-2-j10",
    titleId: "reel-title-2",
  },
  {
    id: "reel-3",
    caption: "Amber Lace drops catching the light",
    imgId: "reel-3-k11",
    titleId: "reel-title-3",
  },
  {
    id: "reel-4",
    caption: "Vivid Aura ear cuff, no piercing needed",
    imgId: "reel-4-l12",
    titleId: "reel-title-4",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom Set, unboxed and ready to gift",
    imgId: "reel-5-m13",
    titleId: "reel-title-5",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The quality is unreal for the price. I've worn my huggies every day for months and they still look brand new.",
  },
  {
    id: "t2",
    name: "Amara K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother was thrilled.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quietly luxurious. The filigree on the Amber Lace earrings is stunning in person — photos don't do it justice.",
  },
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
