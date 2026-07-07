// Seed product catalogue for Velmora Fine Jewelry.
// Images are populated at runtime via the strk-img system (data-strk-img).
// Each product has a primary + secondary image query for hover swap.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    colors: ["Gold", "Silver"],
    description:
      "A sculptural ear cuff that traces the curve of your ear with a single hand-set crystal. No piercing required — simply slide and pinch for a secure, weightless fit.",
    details:
      "Hand-finished over a solid brass core. Each crystal is faceted for maximum light return. Sold as a single piece.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    badges: ["Bestseller"],
    imgId1: "vivid-aura-1",
    imgId2: "vivid-aura-2",
    titleId: "vivid-aura-title",
    descId: "vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    colors: ["Gold", "Silver"],
    description:
      "A garden in bloom, suspended at the collarbone. Multicolor crystals are arranged into delicate floral clusters that catch the light with every movement.",
    details:
      "Adjustable 40–45cm chain with a secure lobster clasp. Nickel-free and hypoallergenic.",
    care: "Keep dry and store flat. Clean with a microfiber cloth to restore brilliance.",
    badges: ["Bestseller", "New"],
    imgId1: "majestic-flora-1",
    imgId2: "majestic-flora-2",
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    colors: ["Gold", "Silver"],
    description:
      "The everyday huggie, reimagined. A polished dome that hugs the lobe with a satisfying weight, finished with a hinged click closure.",
    details: "Sold as a pair. 12mm diameter. Solid brass core with 18K gold plating.",
    care: "Wipe clean after wear. Avoid sleeping in to preserve the hinge.",
    badges: ["Bestseller"],
    imgId1: "golden-sphere-1",
    imgId2: "golden-sphere-2",
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    colors: ["Gold", "Silver"],
    description:
      "Intricate filigree worked by hand into a featherweight drop. The openwork catches light like lace, moving softly with you.",
    details: "Drop length 38mm. Lever-back closure. Hypoallergenic posts.",
    care: "Handle with care — filigree is delicate. Store in a separate compartment.",
    badges: [],
    imgId1: "amber-lace-1",
    imgId2: "amber-lace-2",
    titleId: "amber-lace-title",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 64,
    colors: ["Gold", "Silver"],
    description:
      "A coordinated set designed to be gifted — and treasured. Matching crystal earrings and pendant arrive in a signature Velmora keepsake box.",
    details:
      "Set includes one necklace and one pair of earrings. Presented in a recyclable gift box with ribbon.",
    care: "Store each piece separately to prevent tangling. Polish with a soft cloth.",
    badges: ["Gift Ready"],
    imgId1: "royal-heirloom-1",
    imgId2: "royal-heirloom-2",
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id && p.category === current.category)
    .concat(PRODUCTS.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}

export const TESTIMONIALS = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in months. They feel far more expensive than they were.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Gifted the Royal Heirloom Set to my sister and she cried. The box alone is gorgeous. Quality is unreal for the price.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "I get compliments every time I wear the Flora Nectar necklace. It's delicate but makes a statement.",
  },
]

export const REELS = [
  { id: "reel-1", caption: "Golden Sphere Huggies, everyday", imgId: "reel-1-img", titleId: "reel-1-title" },
  { id: "reel-2", caption: "Vivid Aura cuff, no piercing", imgId: "reel-2-img", titleId: "reel-2-title" },
  { id: "reel-3", caption: "Flora Nectar, layered", imgId: "reel-3-img", titleId: "reel-3-title" },
  { id: "reel-4", caption: "Amber Lace, evening", imgId: "reel-4-img", titleId: "reel-4-title" },
  { id: "reel-5", caption: "Heirloom Set, unboxing", imgId: "reel-5-img", titleId: "reel-5-title" },
]
