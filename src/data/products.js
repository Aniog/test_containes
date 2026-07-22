// Seed product catalog for Velmora Fine Jewelry.
// Each product has carefully chosen image search queries and a unique
// `imgId` so the build-time strk-img plugin can resolve a real photo
// for the primary image, the alternate hover image, and the gallery
// thumbnails.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    short:
      "A modern ear cuff finished with a single hand-set crystal — luminous from every angle.",
    description:
      "The Vivid Aura Jewels ear cuff is sculpted to follow the natural curve of the ear, finished with a single hand-set crystal that catches light with every turn. Wear it solo as a statement, or pair it with the Golden Sphere Huggies for an effortless stack.",
    materials:
      "18K gold plated over hypoallergenic brass base. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic. Tarnish-resistant coating.",
    care: "Avoid direct contact with perfume, lotion, and water. Store in the Velmora pouch between wears. Wipe gently with the included polishing cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $50. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our atelier.",
    variants: [
      { id: "gold", label: "Gold", tone: "#B8956A" },
      { id: "silver", label: "Silver", tone: "#C8B9A6" },
    ],
    imgId: "product-vivid-aura-jewels",
    altImgId: "product-vivid-aura-jewels-alt",
    galleryImgIds: [
      "product-vivid-aura-jewels-gallery-1",
      "product-vivid-aura-jewels-gallery-2",
      "product-vivid-aura-jewels-gallery-3",
      "product-vivid-aura-jewels-gallery-4",
    ],
    imageQuery: "gold ear cuff with crystal on ear editorial jewelry photography",
    imageQueries: [
      "gold ear cuff with crystal on ear editorial jewelry photography",
      "gold ear cuff crystal on cream background close up product photography",
      "gold ear cuff hand set crystal detail macro photography",
      "gold ear cuff styled with gold huggie hoops ear stack",
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "majestic-flora-nectar"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.8,
    reviews: 96,
    badge: "New",
    short:
      "A multicolor floral crystal pendant on a delicate cable chain — romance, refined.",
    description:
      "Inspired by an English garden in late bloom, the Majestic Flora Nectar necklace layers hand-set floral crystals in soft champagne, blush, and peridot tones on a delicate 18-inch cable chain. The pendant catches every movement with quiet color.",
    materials:
      "18K gold plated brass chain. Hand-set multicolor crystal pendant. Lead-free, nickel-free, hypoallergenic. Adjustable 16–18 inch length with lobster clasp.",
    care: "Remove before showering, swimming, or exercising. Store flat in the Velmora pouch. Wipe with a soft dry cloth after wear.",
    shipping:
      "Free worldwide shipping on orders over $50. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    variants: [
      { id: "gold", label: "Gold", tone: "#B8956A" },
    ],
    imgId: "product-majestic-flora-nectar",
    altImgId: "product-majestic-flora-nectar-alt",
    galleryImgIds: [
      "product-majestic-flora-nectar-gallery-1",
      "product-majestic-flora-nectar-gallery-2",
      "product-majestic-flora-nectar-gallery-3",
      "product-majestic-flora-nectar-gallery-4",
    ],
    imageQuery: "multicolor floral crystal pendant necklace on model editorial",
    imageQueries: [
      "multicolor floral crystal pendant necklace on model editorial",
      "multicolor floral crystal pendant close up on linen background",
      "multicolor floral crystal pendant detail macro on hand",
      "multicolor floral crystal pendant on bare neck styled",
    ],
    related: ["royal-heirloom-set", "vivid-aura-jewels", "amber-lace-earrings"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    short:
      "Chunky gold dome huggies — the everyday staple your stack has been waiting for.",
    description:
      "Bold yet wearable, the Golden Sphere Huggies are a substantial dome huggie finished in high-polish 18K gold plating. The secure hinged closure keeps them comfortable for all-day wear. Designed to be the foundation of your everyday ear stack.",
    materials:
      "18K gold plated over sterling silver post. Hypoallergenic, nickel-free, lead-free. Secure hinged click closure.",
    care: "Store dry in the Velmora pouch. Polish with the included cloth. Avoid contact with chlorine and perfume.",
    shipping:
      "Free worldwide shipping on orders over $50. 30-day returns. Most orders ship within 1–2 business days.",
    variants: [
      { id: "gold", label: "Gold", tone: "#B8956A" },
      { id: "silver", label: "Silver", tone: "#C8B9A6" },
    ],
    imgId: "product-golden-sphere-huggies",
    altImgId: "product-golden-sphere-huggies-alt",
    galleryImgIds: [
      "product-golden-sphere-huggies-gallery-1",
      "product-golden-sphere-huggies-gallery-2",
      "product-golden-sphere-huggies-gallery-3",
      "product-golden-sphere-huggies-gallery-4",
    ],
    imageQuery: "chunky gold dome huggie hoop earrings on model close up",
    imageQueries: [
      "chunky gold dome huggie hoop earrings on model close up",
      "chunky gold dome huggie earrings pair on cream background",
      "chunky gold dome huggie detail macro product photography",
      "chunky gold dome huggies ear stack styled with cuffs",
    ],
    related: ["vivid-aura-jewels", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.7,
    reviews: 84,
    short:
      "Textured gold filigree drops — heirloom-inspired, modern in weight and line.",
    description:
      "Inspired by vintage lacework, the Amber Lace Earrings are cast in intricate gold filigree and finished with a delicate drop. Lightweight enough for daily wear, detailed enough to feel like a keepsake.",
    materials:
      "18K gold plated brass with filigree texture. Hypoallergenic post. Lightweight cast construction.",
    care: "Avoid water and perfume. Store in the Velmora pouch. Wipe gently with a soft dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $50. 30-day returns. Most orders ship within 1–2 business days.",
    variants: [
      { id: "gold", label: "Gold", tone: "#B8956A" },
    ],
    imgId: "product-amber-lace-earrings",
    altImgId: "product-amber-lace-earrings-alt",
    galleryImgIds: [
      "product-amber-lace-earrings-gallery-1",
      "product-amber-lace-earrings-gallery-2",
      "product-amber-lace-earrings-gallery-3",
      "product-amber-lace-earrings-gallery-4",
    ],
    imageQuery: "textured gold filigree drop earrings editorial fashion photography",
    imageQueries: [
      "textured gold filigree drop earrings editorial fashion photography",
      "textured gold filigree drop earrings on linen flatlay",
      "textured gold filigree drop earrings detail macro",
      "textured gold filigree drop earrings styled on ear",
    ],
    related: ["vivid-aura-jewels", "majestic-flora-nectar", "golden-sphere-huggies"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 47,
    badge: "Gift",
    short:
      "A gift-boxed earring and necklace set — the heirloom, ready to give.",
    description:
      "The Royal Heirloom Set pairs our most-loved drop earrings with a delicate pendant necklace, presented together in our signature keepsake gift box with cream ribbon. The set that started it all — for the women you love, or for yourself.",
    materials:
      "18K gold plated brass and sterling silver post. Hypoallergenic, nickel-free, lead-free. Includes signature Velmora keepsake gift box.",
    care: "Avoid water, perfume, and lotion. Store in the gift box between wears. Polish with included cloth.",
    shipping:
      "Free worldwide shipping on orders over $50. Gift wrapping included. 30-day returns.",
    variants: [
      { id: "gold", label: "Gold", tone: "#B8956A" },
    ],
    imgId: "product-royal-heirloom-set",
    altImgId: "product-royal-heirloom-set-alt",
    galleryImgIds: [
      "product-royal-heirloom-set-gallery-1",
      "product-royal-heirloom-set-gallery-2",
      "product-royal-heirloom-set-gallery-3",
      "product-royal-heirloom-set-gallery-4",
    ],
    imageQuery: "gold jewelry gift set box earrings necklace editorial photography",
    imageQueries: [
      "gold jewelry gift set box earrings necklace editorial photography",
      "gold jewelry gift set unboxed velvet cream box",
      "gold jewelry gift set earrings and pendant detail",
      "gold jewelry gift set styled on model with ribbon",
    ],
    related: ["majestic-flora-nectar", "amber-lace-earrings", "golden-sphere-huggies"],
  },
]

// UGC-style cards (mimic Instagram Reels strip)
export const UGC_REELS = [
  {
    id: "ugc-1",
    caption: "Morning light with the Aura cuff.",
    imgId: "ugc-reel-1",
    imageQuery: "woman ear with gold cuff jewelry morning light selfie portrait",
  },
  {
    id: "ugc-2",
    caption: "The huggies I never take off.",
    imgId: "ugc-reel-2",
    imageQuery: "close up of gold huggie hoop earrings on woman portrait",
  },
  {
    id: "ugc-3",
    caption: "Layered. Forever.",
    imgId: "ugc-reel-3",
    imageQuery: "woman wearing layered gold necklaces on bare neck fashion portrait",
  },
  {
    id: "ugc-4",
    caption: "An everyday heirloom.",
    imgId: "ugc-reel-4",
    imageQuery: "gold filigree drop earrings on woman natural light editorial portrait",
  },
  {
    id: "ugc-5",
    caption: "The set I gifted my sister.",
    imgId: "ugc-reel-5",
    imageQuery: "gold jewelry gift set unboxing velvet box warm light flatlay",
  },
  {
    id: "ugc-6",
    caption: "Stacked five ways.",
    imgId: "ugc-reel-6",
    imageQuery: "woman ear stack with multiple gold earrings close up portrait",
  },
]

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    text:
      "I wear the Golden Sphere Huggies almost every day — they go with everything and still look as polished as the day they arrived. The packaging alone is worth it.",
  },
  {
    id: "t2",
    name: "Sophie M.",
    rating: 5,
    text:
      "I bought the Royal Heirloom Set for my sister's birthday and ended up ordering one for myself. The quality at this price point is genuinely surprising.",
  },
  {
    id: "t3",
    name: "Nadia K.",
    rating: 5,
    text:
      "Quiet, refined, and made to be worn. Velmora is the only demi-fine brand I'll keep returning to — the details are what make it.",
  },
]

export const TRUST_BADGES = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getProductsByIds(ids) {
  return ids.map((id) => getProductById(id)).filter(Boolean)
}
