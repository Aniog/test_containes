// Seed product catalogue for Velmora Fine Jewelry.
// Images are resolved at runtime via the data-strk-img system using
// descriptive queries built from each product's title + description.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      "A sculptural gold ear cuff traced with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff wraps the cartilage in a fluid arc of polished gold, anchored by a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.",
    materials:
      "18K gold plated over sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.",
    care: "Keep dry and away from perfumes and lotions. Store in the provided pouch. Polish with a soft cloth.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    imgId: "prod-vivid-aura-a1",
    hoverImgId: "prod-vivid-aura-b2",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 204,
    shortDescription:
      "A multicolor floral crystal necklace — petals of light that rest just below the collarbone.",
    description:
      "Majestic Flora Nectar gathers multicolor crystals into a delicate floral cluster, suspended from a fine gold chain. Each petal is set to catch a different angle of light, giving the piece a quiet, luminous movement as you wear it.",
    materials:
      "18K gold plated over sterling silver. Multicolor cubic zirconia. Adjustable 40–45cm chain.",
    care: "Avoid contact with water and chemicals. Clean gently with a soft, dry cloth. Store separately to protect the stones.",
    tones: ["Gold"],
    badge: "New",
    imgId: "prod-majestic-flora-a1",
    hoverImgId: "prod-majestic-flora-b2",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDescription:
      "Chunky gold dome huggie earrings — everyday polish that hugs the lobe close.",
    description:
      "The Golden Sphere huggies are a confident, chunky dome of polished gold that sits flush against the lobe. Smooth, weighty and quietly bold, they are the pair you reach for every morning and never take off.",
    materials:
      "18K gold plated over sterling silver. Hypoallergenic, nickel-free. Hinged huggie closure.",
    care: "Reseal the hinged closure gently. Keep dry; polish with a soft cloth to restore shine.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    imgId: "prod-golden-sphere-a1",
    hoverImgId: "prod-golden-sphere-b2",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 97,
    shortDescription:
      "Textured gold filigree drop earrings — lacework that moves with you.",
    description:
      "Amber Lace is drawn from fine gold filigree, woven into a soft teardrop that sways gently from the ear. The openwork catches light and shadow in equal measure, giving an heirloom texture to a modern, wearable silhouette.",
    materials:
      "18K gold plated over sterling silver. Hand-finished filigree. Hypoallergenic, nickel-free.",
    care: "Handle the filigree with care. Store flat in the provided box. Polish lightly to maintain the gold finish.",
    tones: ["Gold"],
    badge: null,
    imgId: "prod-amber-lace-a1",
    hoverImgId: "prod-amber-lace-b2",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give.",
    description:
      "The Royal Heirloom Set pairs a fine gold necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated in proportion and finish, it is the effortless choice for gifting — or for treating yourself to a complete look.",
    materials:
      "18K gold plated over sterling silver. Hypoallergenic, nickel-free. Includes gift box, necklace and earrings.",
    care: "Store each piece in the gift box compartments. Keep dry and away from perfumes. Polish with a soft cloth.",
    tones: ["Gold"],
    badge: "Gift Set",
    imgId: "prod-royal-heirloom-a1",
    hoverImgId: "prod-royal-heirloom-b2",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
  },
]

export const REELS = [
  {
    id: "reel-ear",
    caption: "Golden Sphere, all day.",
    imgId: "reel-ear-01",
    titleId: "reel-ear-title",
  },
  {
    id: "reel-neck",
    caption: "Flora, caught in light.",
    imgId: "reel-neck-01",
    titleId: "reel-neck-title",
  },
  {
    id: "reel-cuff",
    caption: "The cuff that needs no piercing.",
    imgId: "reel-cuff-01",
    titleId: "reel-cuff-title",
  },
  {
    id: "reel-stack",
    caption: "Stacked, never loud.",
    imgId: "reel-stack-01",
    titleId: "reel-stack-title",
  },
  {
    id: "reel-gift",
    caption: "Boxed, ready to give.",
    imgId: "reel-gift-01",
    titleId: "reel-gift-title",
  },
]

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "The gold is so warm and real-looking. I have worn the huggies every single day for months and they still look new.",
    name: "Sofia M.",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Bought the Heirloom Set as a gift and the box alone made it feel twice the price. My mother was thrilled.",
    name: "Amara K.",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Quiet, elegant, and the ear cuff finally stays put. This is the only jewelry brand I keep coming back to.",
    name: "Elena R.",
    rating: 5,
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}
