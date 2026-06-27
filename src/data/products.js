// Central product catalog for Velmora Fine Jewelry.
// Images use the strk-img tagging system (data-strk-img) resolved at runtime.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const MATERIALS = [
  { id: "gold", name: "18K Gold Plated" },
  { id: "silver", name: "Silver Tone" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required. Designed to curve along the cartilage for an effortless, second-skin fit that catches the light with every turn.",
    price: 42,
    category: "earrings",
    materials: ["gold"],
    rating: 4.8,
    reviews: 126,
    bestseller: true,
    badge: "Bestseller",
    imgId: "vivid-aura-jewels-a1",
    imgIdAlt: "vivid-aura-jewels-b2",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. Each petal is hand-set to refract warm light — a quiet statement piece for everyday wear.",
    price: 68,
    category: "necklaces",
    materials: ["gold"],
    rating: 4.9,
    reviews: 203,
    bestseller: true,
    badge: "Bestseller",
    imgId: "majestic-flora-nectar-a1",
    imgIdAlt: "majestic-flora-nectar-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Chunky gold dome huggies that hug the lobe with a polished, mirror finish. Substantial yet weightless — the everyday earring you'll never take off.",
    price: 38,
    category: "huggies",
    materials: ["gold", "silver"],
    rating: 4.7,
    reviews: 318,
    bestseller: true,
    badge: "Bestseller",
    imgId: "golden-sphere-huggies-a1",
    imgIdAlt: "golden-sphere-huggies-b2",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Hand-finished gold filigree drops with a lace-like openwork texture. Light as air, with a gentle sway that frames the jawline — an heirloom feel for the modern wearer.",
    price: 54,
    category: "earrings",
    materials: ["gold"],
    rating: 4.8,
    reviews: 91,
    bestseller: true,
    badge: "Bestseller",
    imgId: "amber-lace-earrings-a1",
    imgIdAlt: "amber-lace-earrings-b2",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "A coordinated earring and necklace set, presented in a signature Velmora gift box. The matching motifs make it the perfect gift — ready to treasure, ready to give.",
    price: 95,
    category: "necklaces",
    materials: ["gold"],
    rating: 5.0,
    reviews: 64,
    bestseller: true,
    badge: "Gift Set",
    imgId: "royal-heirloom-set-a1",
    imgIdAlt: "royal-heirloom-set-b2",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
  // Additional catalog for the shop page
  {
    id: "celeste-drop-huggies",
    name: "Celeste Drop Huggies",
    tagline: "Gold huggies with pearl drop",
    description:
      "Slim gold huggies finished with a single luminous pearl drop. A refined pairing of warm metal and soft lustre for an understated evening look.",
    price: 46,
    category: "huggies",
    materials: ["gold"],
    rating: 4.6,
    reviews: 58,
    bestseller: false,
    imgId: "celeste-drop-huggies-a1",
    imgIdAlt: "celeste-drop-huggies-b2",
    titleId: "title-celeste-drop-huggies",
    descId: "desc-celeste-drop-huggies",
  },
  {
    id: "lumen-chain-necklace",
    name: "Lumen Chain Necklace",
    tagline: "Layered fine gold chain necklace",
    description:
      "A pre-layered fine gold chain that sits flush at the collarbone. Delicate yet dimensional — the foundation of any curated stack.",
    price: 58,
    category: "necklaces",
    materials: ["gold", "silver"],
    rating: 4.7,
    reviews: 142,
    bestseller: false,
    imgId: "lumen-chain-necklace-a1",
    imgIdAlt: "lumen-chain-necklace-b2",
    titleId: "title-lumen-chain-necklace",
    descId: "desc-lumen-chain-necklace",
  },
  {
    id: "solene-hoop-earrings",
    name: "Solene Hoop Earrings",
    tagline: "Slim gold everyday hoops",
    description:
      "The perfect everyday hoop — slim, weightless, and endlessly versatile. A polished gold finish that transitions from desk to dinner.",
    price: 34,
    category: "earrings",
    materials: ["gold", "silver"],
    rating: 4.5,
    reviews: 211,
    bestseller: false,
    imgId: "solene-hoop-earrings-a1",
    imgIdAlt: "solene-hoop-earrings-b2",
    titleId: "title-solene-hoop-earrings",
    descId: "desc-solene-hoop-earrings",
  },
  {
    id: "noor-crescent-huggies",
    name: "Noor Crescent Huggies",
    tagline: "Crescent gold huggie earrings",
    description:
      "A crescent silhouette in polished gold that wraps the lobe. Quietly architectural, with a soft glow that flatters every skin tone.",
    price: 40,
    category: "huggies",
    materials: ["gold"],
    rating: 4.8,
    reviews: 77,
    bestseller: false,
    imgId: "noor-crescent-huggies-a1",
    imgIdAlt: "noor-crescent-huggies-b2",
    titleId: "title-noor-crescent-huggies",
    descId: "desc-noor-crescent-huggies",
  },
  {
    id: "mira-pendant-necklace",
    name: "Mira Pendant Necklace",
    tagline: "Gold pendant with crystal",
    description:
      "A single crystal set in a minimalist gold pendant on an adjustable chain. Understated sparkle for the neckline you'll reach for daily.",
    price: 52,
    category: "necklaces",
    materials: ["gold"],
    rating: 4.7,
    reviews: 96,
    bestseller: false,
    imgId: "mira-pendant-necklace-a1",
    imgIdAlt: "mira-pendant-necklace-b2",
    titleId: "title-mira-pendant-necklace",
    descId: "desc-mira-pendant-necklace",
  },
  {
    id: "ember-stud-earrings",
    name: "Ember Stud Earrings",
    tagline: "Gold bezel stud earrings",
    description:
      "Warm gold bezel studs with a soft hammered finish. The quiet luxury staple — small, sculptural, and impossibly wearable.",
    price: 30,
    category: "earrings",
    materials: ["gold", "silver"],
    rating: 4.6,
    reviews: 134,
    bestseller: false,
    imgId: "ember-stud-earrings-a1",
    imgIdAlt: "ember-stud-earrings-b2",
    titleId: "title-ember-stud-earrings",
    descId: "desc-ember-stud-earrings",
  },
  {
    id: "aurora-twist-huggies",
    name: "Aurora Twist Huggies",
    tagline: "Twisted gold huggie earrings",
    description:
      "A twisted rope motif in polished gold gives these huggies a tactile, artisanal feel. Texture that catches the light from every angle.",
    price: 44,
    category: "huggies",
    materials: ["gold"],
    rating: 4.8,
    reviews: 88,
    bestseller: false,
    imgId: "aurora-twist-huggies-a1",
    imgIdAlt: "aurora-twist-huggies-b2",
    titleId: "title-aurora-twist-huggies",
    descId: "desc-aurora-twist-huggies",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Elena R.",
    rating: 5,
    text: "The gold is so warm and the weight feels real — not flimsy at all. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: "t2",
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Heirloom Set as a gift and the box alone made her cry. The pieces feel far more expensive than they were.",
  },
  {
    id: "t3",
    name: "Priya K.",
    rating: 5,
    text: "Finally jewelry that doesn't irritate my ears. Hypoallergenic and genuinely beautiful — I've already ordered three more.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere Huggies, all day",
    imgId: "reel-golden-sphere-a1",
    titleId: "reel-title-r1",
  },
  {
    id: "r2",
    caption: "Layered necklaces, undone",
    imgId: "reel-layered-neck-a1",
    titleId: "reel-title-r2",
  },
  {
    id: "r3",
    caption: "The ear cuff that stays put",
    imgId: "reel-ear-cuff-a1",
    titleId: "reel-title-r3",
  },
  {
    id: "r4",
    caption: "Filigree that catches light",
    imgId: "reel-filigree-a1",
    titleId: "reel-title-r4",
  },
  {
    id: "r5",
    caption: "Gift box, ready to treasure",
    imgId: "reel-gift-box-a1",
    titleId: "reel-title-r5",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
