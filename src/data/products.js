// Seed product catalog for Velmora Fine Jewelry.
// Categories: "earrings" | "necklaces" | "huggies"
// Materials (tone): "gold" | "silver" | "rose-gold"
// Imagery is sourced from the runtime stock system via data-strk-img.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "gold",
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    badge: "Bestseller",
    short:
      "A delicate gold ear cuff traced with a single crystal — quiet light, worn close.",
    description:
      "Sculpted in 18K gold-plated brass, the Vivid Aura ear cuff catches light from a single hand-set crystal accent. Designed to sit softly along the helix, it needs no piercing and slips on in a moment. Made for everyday wear and the occasional toast.",
    details: [
      "18K gold-plated brass",
      "Hand-set crystal accent",
      "No piercing required",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Remove before showering or swimming",
      "Store in the pouch provided",
      "Wipe gently with a soft, dry cloth",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 2 business days.",
    imageQueries: [
      "[product-vivid-aura-desc] [product-vivid-aura-name] [homepage-bestsellers-title]",
      "[product-vivid-aura-name] editorial flatlay on warm brown linen",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "gold",
    price: 68,
    rating: 4.8,
    reviewCount: 96,
    badge: "New",
    short:
      "A multicolor crystal cluster on a whisper-thin chain — like a pressed garden at the throat.",
    description:
      "The Flora Nectar necklace suspends a hand-arranged cluster of pastel crystals from a fine 18K gold-plated cable chain. Each stone is set by hand; no two clusters are exactly alike. Adjustable to 16 or 18 inches.",
    details: [
      "18K gold-plated chain and findings",
      "Hand-arranged multicolor crystals",
      "Adjustable 16–18 inch length",
      "Lobster clasp closure",
    ],
    care: [
      "Apply lotion and perfume before putting on",
      "Wipe with the included polishing cloth",
      "Avoid prolonged exposure to water",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Delivered in our signature gift-ready box.",
    imageQueries: [
      "[product-flora-desc] [product-flora-name] [homepage-bestsellers-title]",
      "[product-flora-name] model wearing floral crystal necklace editorial",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "gold",
    price: 38,
    rating: 4.9,
    reviewCount: 214,
    badge: "Bestseller",
    short:
      "A chunky dome huggie, polished to a high gold sheen. Weighty, in a good way.",
    description:
      "Inspired by a vintage 1970s archive piece, the Golden Sphere huggie is a substantial dome that hugs the lobe with a satisfying weight. 18K gold-plated over a brass core, with a secure hinged click closure.",
    details: [
      "18K gold-plated brass",
      "15mm outer diameter",
      "Hinged click closure",
      "Hypoallergenic posts",
    ],
    care: [
      "Remove before sleeping or exercising",
      "Store flat in the pouch provided",
      "Buff lightly with a dry cloth to maintain shine",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Most orders ship within 2 business days.",
    imageQueries: [
      "[product-sphere-desc] [product-sphere-name] [homepage-bestsellers-title]",
      "[product-sphere-name] pair of gold dome huggie earrings",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "gold",
    price: 54,
    rating: 4.7,
    reviewCount: 71,
    badge: "",
    short:
      "Filigree drops with the warmth of old gold — light through a curtain at dusk.",
    description:
      "Textured filigree drops cast in 18K gold-plated brass, finished by hand to soften the edges and bring out the lacework's depth. The amber undertone pairs naturally with warm wardrobes and cooler light alike.",
    details: [
      "18K gold-plated brass",
      "Hand-finished filigree",
      "45mm drop length",
      "Hypoallergenic posts",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Wipe with a soft, dry cloth",
      "Store in the included pouch",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Gift wrapping available at checkout.",
    imageQueries: [
      "[product-amber-desc] [product-amber-name] [homepage-bestsellers-title]",
      "[product-amber-name] gold filigree drop earrings editorial",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "gold",
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    badge: "Gift-Ready",
    short:
      "A coordinated earring and necklace set in our keepsake box — the gift that gets remembered.",
    description:
      "The Royal Heirloom set pairs our Golden Sphere huggies with a delicate satellite chain necklace, presented in a hinged keepsake box lined in oat suede. Designed to be given — and kept.",
    details: [
      "18K gold-plated brass throughout",
      "Matching earring + necklace set",
      "Hinged keepsake gift box",
      "Hypoallergenic, nickel-free",
    ],
    care: [
      "Store pieces separately to prevent tangling",
      "Wipe gently after wear",
      "Use the included polishing cloth monthly",
    ],
    shipping:
      "Free worldwide shipping. 30-day returns. Includes handwritten gift note option at checkout.",
    imageQueries: [
      "[product-heirloom-desc] [product-heirloom-name] [homepage-bestsellers-title]",
      "[product-heirloom-name] gift boxed earring and necklace set",
    ],
  },
]

export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const priceRanges = [
  { id: "under-50", name: "Under $50", min: 0, max: 50 },
  { id: "50-80", name: "$50 – $80", min: 50, max: 80 },
  { id: "over-80", name: "Over $80", min: 80, max: Infinity },
]

export const materials = [
  { id: "gold", name: "Gold Tone" },
  { id: "silver", name: "Silver Tone" },
  { id: "rose-gold", name: "Rose Gold" },
]

// UGC "reel" strip captions (no real IG embeds — stylized vertical cards)
export const ugcItems = [
  {
    id: "ugc-1",
    handle: "@maya.r",
    caption: "Heirloom, reimagined",
    query: "[ugc-caption-1] woman wearing gold huggies ear closeup",
  },
  {
    id: "ugc-2",
    handle: "@noor.studio",
    caption: "Layered for the season",
    query: "[ugc-caption-2] crystal necklace layered editorial portrait",
  },
  {
    id: "ugc-3",
    handle: "@isla.linen",
    caption: "A small, golden habit",
    query: "[ugc-caption-3] gold ear cuff editorial mirror selfie",
  },
  {
    id: "ugc-4",
    handle: "@the.wren.edit",
    caption: "Morning light, filigree",
    query: "[ugc-caption-4] gold filigree drop earrings morning light",
  },
  {
    id: "ugc-5",
    handle: "@by.harriet",
    caption: "The everyday heirloom",
    query: "[ugc-caption-5] gold huggies on warm brown skin editorial",
  },
  {
    id: "ugc-6",
    handle: "@studio.olive",
    caption: "Set down, set apart",
    query: "[ugc-caption-6] heirloom jewelry set on linen",
  },
]

// Categories for the homepage tile row
export const categoryTiles = [
  {
    id: "earrings",
    name: "Earrings",
    query: "[home-category-earrings-name] editorial closeup gold earrings on model",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    query: "[home-category-necklaces-name] editorial closeup gold necklace on model",
  },
  {
    id: "huggies",
    name: "Huggies",
    query: "[home-category-huggies-name] editorial closeup gold huggie earrings",
  },
]

// Testimonials
export const testimonials = [
  {
    id: "t1",
    name: "Sofia R.",
    rating: 5,
    quote:
      "I wore the Golden Sphere huggies to a wedding and back to brunch the next day. They feel like an old friend already.",
  },
  {
    id: "t2",
    name: "Amelia K.",
    rating: 5,
    quote:
      "The Flora necklace is the first piece of jewelry I’ve owned that I actually take off and put back on with intention.",
  },
  {
    id: "t3",
    name: "Jules M.",
    rating: 5,
    quote:
      "Gifted the Heirloom set to my sister. The box alone made her cry. The jewelry made the rest of the year.",
  },
]
