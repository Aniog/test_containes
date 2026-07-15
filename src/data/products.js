// Seed product catalog. Each product has stable IDs for text and image references.
// Text IDs (titleId, descId) are used in `data-strk-img` queries as `[titleId] [descId]`.
// Image IDs (imgId) are passed to `data-strk-img-id` (unique per image element).

export const CATEGORIES = [
  { id: "earrings",  label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies",   label: "Huggies" },
]

export const MATERIALS = [
  { id: "18k-gold",   label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal",    label: "Crystal" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 128,
    badge: "Bestseller",
    imgId: "p-vivid-aura-1-7a3f",
    imgId2: "p-vivid-aura-2-9c12",
    titleId: "product-vivid-aura-jewels-title",
    descId: "product-vivid-aura-jewels-desc",
    short: "A whisper of crystal caught in warm gold.",
    description:
      "A delicate ear cuff in 18K gold plate, finished with a single hand-set crystal that catches the light at every angle. Made for stacking or wearing solo — the way fine jewelry was meant to be worn.",
    details: [
      "18K gold plated over sterling silver base",
      "Hand-set crystal accent, 4 mm",
      "No piercing required — cuff style",
      "Sold as a single ear cuff",
    ],
    materials:
      "Hypoallergenic sterling silver base plated in 18K yellow gold. Free of nickel, lead, and cadmium. Crystal is precision-cut and hand-set in our atelier.",
    care: "Store flat in the pouch provided. Avoid contact with perfume, lotion, and water. To refresh the gold finish, gently wipe with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns — unworn, in original packaging. Express options at checkout.",
    variants: [
      { id: "gold",   label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    collection: "Aura",
    gallery: [
      "p-vivid-aura-1-7a3f",
      "p-vivid-aura-2-9c12",
      "p-vivid-aura-3-b1d4",
      "p-vivid-aura-4-3e8f",
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 96,
    badge: "New",
    imgId: "p-flora-nectar-1-4b21",
    imgId2: "p-flora-nectar-2-7c98",
    titleId: "product-majestic-flora-nectar-title",
    descId: "product-majestic-flora-nectar-desc",
    short: "A garden of crystals, set in warm gold.",
    description:
      "A multicolor floral crystal pendant strung on a fine 18K gold plated chain. Each stone is hand-set in a soft bloom — a piece that feels like a pressed flower, made permanent.",
    details: [
      "18K gold plated chain, 16–18\" adjustable",
      "Hand-set multicolor crystal cluster, 18 mm",
      "Lobster clasp closure",
      "Hypoallergenic and nickel-free",
    ],
    materials:
      "Sterling silver chain plated in 18K yellow gold. Pendant features a clustered floral setting of amber, citrine, and crystal stones, each hand-set.",
    care: "Remove before showering or sleeping. Store in the suede pouch provided. Avoid direct sunlight for prolonged periods to protect stone color.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns — unworn, in original packaging. Express options at checkout.",
    variants: [
      { id: "gold",   label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    collection: "Flora",
    gallery: [
      "p-flora-nectar-1-4b21",
      "p-flora-nectar-2-7c98",
      "p-flora-nectar-3-aa05",
      "p-flora-nectar-4-2d7e",
    ],
    related: ["vivid-aura-jewels", "royal-heirloom-set", "golden-sphere-huggies"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 214,
    badge: "Bestseller",
    imgId: "p-golden-sphere-1-9e44",
    imgId2: "p-golden-sphere-2-2b71",
    titleId: "product-golden-sphere-huggies-title",
    descId: "product-golden-sphere-huggies-desc",
    short: "A polished gold dome, sitting close to the lobe.",
    description:
      "Chunky, sculptural, and impossibly wearable. These dome huggies are the everyday gold you reach for first — substantial without weighing the ear.",
    details: [
      "18K gold plated over sterling silver",
      "10 mm dome, 4 mm thickness",
      "Hinged closure for secure fit",
      "Sold as a pair",
    ],
    materials:
      "Solid sterling silver base plated in 18K yellow gold. Hand-polished to a soft mirror finish. Hinge and post are reinforced for daily wear.",
    care: "Sleep, sweat, and shower-friendly. Wipe with the polishing cloth to maintain shine. Avoid chlorine and harsh chemicals.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns — unworn, in original packaging. Express options at checkout.",
    variants: [
      { id: "gold",   label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    collection: "Sphere",
    gallery: [
      "p-golden-sphere-1-9e44",
      "p-golden-sphere-2-2b71",
      "p-golden-sphere-3-ff08",
      "p-golden-sphere-4-55ab",
    ],
    related: ["amber-lace-earrings", "vivid-aura-jewels", "majestic-flora-nectar"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 87,
    badge: "Limited",
    imgId: "p-amber-lace-1-6d0a",
    imgId2: "p-amber-lace-2-1f3c",
    titleId: "product-amber-lace-earrings-title",
    descId: "product-amber-lace-earrings-desc",
    short: "Filigree in motion, the way gold should be worn.",
    description:
      "Textured gold filigree, hand-shaped into long drop earrings that move like fabric. Inspired by vintage lace and the way light moves through it.",
    details: [
      "18K gold plated brass",
      "2.5\" drop, lightweight construction",
      "Push-back post closure",
      "Sold as a pair",
    ],
    materials:
      "Brass base plated in 18K yellow gold. Filigree is hand-finished by a small workshop in Jaipur, India. Posts are sterling silver, suitable for sensitive ears.",
    care: "Last on, first off — apply perfume and lotion before wearing. Store in the suede pouch, separated from other pieces.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns — unworn, in original packaging. Express options at checkout.",
    variants: [
      { id: "gold",   label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    collection: "Lace",
    gallery: [
      "p-amber-lace-1-6d0a",
      "p-amber-lace-2-1f3c",
      "p-amber-lace-3-44f0",
      "p-amber-lace-4-8b9c",
    ],
    related: ["vivid-aura-jewels", "golden-sphere-huggies", "majestic-flora-nectar"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    originalPrice: 120,
    rating: 5.0,
    reviewCount: 142,
    badge: "Gift-Ready",
    imgId: "p-royal-heirloom-1-cc55",
    imgId2: "p-royal-heirloom-2-7ee1",
    titleId: "product-royal-heirloom-set-title",
    descId: "product-royal-heirloom-set-desc",
    short: "A matching set, gift-boxed and ready to give.",
    description:
      "Our most-loved earring and necklace, paired and packaged in a keepsake gift box. The set designed for the people you love most — and, quietly, for yourself.",
    details: [
      "Includes one pair of earrings + one necklace",
      "18K gold plated sterling silver",
      "Velvet-lined keepsake gift box",
      "Includes polishing cloth and care card",
    ],
    materials:
      "Both pieces are solid sterling silver plated in 18K yellow gold. Hypoallergenic, nickel-free, and lead-free. Clasps and posts are reinforced for daily wear.",
    care: "Store in the keepsake box when not worn. The included polishing cloth will restore the gold finish over time. Avoid contact with perfumes and chlorine.",
    shipping:
      "Complimentary express shipping on all gift sets. 30-day returns — items must be unworn and returned in original packaging.",
    variants: [
      { id: "gold",   label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    collection: "Heirloom",
    gallery: [
      "p-royal-heirloom-1-cc55",
      "p-royal-heirloom-2-7ee1",
      "p-royal-heirloom-3-2230",
      "p-royal-heirloom-4-aa91",
    ],
    related: ["majestic-flora-nectar", "amber-lace-earrings", "golden-sphere-huggies"],
  },
]

// Curated bestsellers for the homepage (first 5 in catalogue, locked order)
export const BESTSELLERS = PRODUCTS.slice(0, 5)

// Featured category tiles for the homepage
export const FEATURED_CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Studs, drops, cuffs.",
    imgId: "cat-earrings-tile-aa01",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants, chains, lockets.",
    imgId: "cat-necklaces-tile-bb02",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "The everyday gold.",
    imgId: "cat-huggies-tile-cc03",
  },
]

// Reels-style UGC row (vertical cards with caption overlay)
export const REELS = [
  {
    id: "reel-1",
    caption: "the everyday gold",
    handle: "@velmora",
    imgId: "reel-1-7a91",
  },
  {
    id: "reel-2",
    caption: "stacked & loved",
    handle: "@maya.k",
    imgId: "reel-2-bb22",
  },
  {
    id: "reel-3",
    caption: "the heirloom set",
    handle: "@velmora",
    imgId: "reel-3-cc33",
  },
  {
    id: "reel-4",
    caption: "golden hour",
    handle: "@noor.d",
    imgId: "reel-4-dd44",
  },
  {
    id: "reel-5",
    caption: "in bloom",
    handle: "@velmora",
    imgId: "reel-5-ee55",
  },
  {
    id: "reel-6",
    caption: "the sphere huggie",
    handle: "@aria.s",
    imgId: "reel-6-ff66",
  },
  {
    id: "reel-7",
    caption: "lace, but in gold",
    handle: "@velmora",
    imgId: "reel-7-gg77",
  },
]

// Homepage hero
export const HERO = {
  eyebrow: "New Collection — Spring",
  title: "Crafted to be Treasured",
  subtitle:
    "Demi-fine 18K gold plated jewelry, made by hand and made to last. The pieces you'll reach for — and never take off.",
  ctaLabel: "Shop the Collection",
  ctaTo: "/shop",
  imgId: "reel-3-cc33",
}

// Testimonials
export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Maya K.",
    location: "Los Angeles",
    rating: 5,
    quote:
      "The quality is unreal for the price. The huggies feel like the ones I've been saving up for — but I actually wear them every day.",
  },
  {
    id: "t-2",
    name: "Noor D.",
    location: "Dubai",
    rating: 5,
    quote:
      "I ordered the Heirloom set for my sister's birthday. The box alone made me cry. The jewelry inside made her cry.",
  },
  {
    id: "t-3",
    name: "Aria S.",
    location: "Brooklyn",
    rating: 5,
    quote:
      "Finally — gold that doesn't turn green on me. The amber lace earrings are everything. I've worn them every day since they arrived.",
  },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)

export const getProductsByIds = (ids) => ids.map(getProductById).filter(Boolean)

export const getProductsByCategory = (categoryId) =>
  PRODUCTS.filter((p) => p.category === categoryId)
