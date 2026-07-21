// Velmora seed catalog — demi-fine gold jewelry
// Image search queries reference the product's own title/subtitle ids so the
// stock image system produces a relevant editorial result.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Crystal ear cuff · hand-set",
    description:
      "A single, sculptural ear cuff finished with a hand-set crystal accent. Designed to layer or wear alone, with a comfortable, no-pierce fit that moves with you.",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 132,
    badge: "Bestseller",
    details: [
      "18K gold-plated brass",
      "Hand-set cubic zirconia crystal",
      "Hypoallergenic, nickel-free post",
      "Comes in a velvet pouch and gift box",
    ],
    materials_care:
      "Avoid contact with water, perfume, and lotion. Store in the included pouch. Gently polish with the provided cloth to maintain the gold finish.",
    shipping_returns:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. See our Returns page for full details.",
    images: [
      {
        id: "vivid-aura-primary-9a4f2c",
        ratio: "4x5",
        width: 900,
        query: "gold ear cuff with crystal accent on model ear editorial close up warm light [vivid-aura-jewels-subtitle] [vivid-aura-jewels-name]",
        title: "vivid-aura-jewels-name",
        subtitle: "vivid-aura-jewels-subtitle",
      },
      {
        id: "vivid-aura-hover-2b8d1e",
        ratio: "4x5",
        width: 900,
        query: "gold crystal ear cuff product shot on warm beige stone background [vivid-aura-jewels-subtitle] [vivid-aura-jewels-name]",
        title: "vivid-aura-jewels-name",
        subtitle: "vivid-aura-jewels-subtitle",
      },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    description:
      "A delicate floral cluster of hand-set crystals in soft honey, blush, and sage. The botanical motif is suspended on a fine 18K gold-plated chain that drapes like a whisper.",
    price: 68,
    category: "necklaces",
    material: "crystal",
    tone: "gold",
    rating: 4.8,
    reviews: 98,
    badge: "New",
    details: [
      "18K gold-plated brass chain, 16\" + 2\" extender",
      "Hand-set multicolor crystal cluster",
      "Lobster clasp with branded tag",
      "Velvet pouch and gift box included",
    ],
    materials_care:
      "Remove before showering or sleeping. Keep dry and store flat in the included pouch to protect the crystal setting.",
    shipping_returns:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "majestic-flora-primary-7c1d5b",
        ratio: "4x5",
        width: 900,
        query: "multicolor floral crystal necklace on model editorial portrait warm light [majestic-flora-nectar-subtitle] [majestic-flora-nectar-name]",
        title: "majestic-flora-nectar-name",
        subtitle: "majestic-flora-nectar-subtitle",
      },
      {
        id: "majestic-flora-hover-3a9e0f",
        ratio: "4x5",
        width: 900,
        query: "floral crystal pendant necklace product detail on warm dark background [majestic-flora-nectar-subtitle] [majestic-flora-nectar-name]",
        title: "majestic-flora-nectar-name",
        subtitle: "majestic-flora-nectar-subtitle",
      },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    description:
      "A modern take on the classic huggie — a substantial, polished gold dome that catches light from every angle. Hinged for a clean, secure fit you can sleep in.",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    reviews: 211,
    badge: "Bestseller",
    details: [
      "18K gold-plated sterling silver",
      "Hinged clicker closure",
      "Hypoallergenic, nickel-free",
      "Suitable for sensitive ears",
    ],
    materials_care:
      "Wipe with the included polishing cloth after wear. Avoid contact with chlorine, perfume, and lotions.",
    shipping_returns:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "golden-sphere-primary-5e3a2c",
        ratio: "4x5",
        width: 900,
        query: "chunky gold dome huggie hoop earrings on model ear editorial close up [golden-sphere-huggies-subtitle] [golden-sphere-huggies-name]",
        title: "golden-sphere-huggies-name",
        subtitle: "golden-sphere-huggies-subtitle",
      },
      {
        id: "golden-sphere-hover-8f4b6a",
        ratio: "4x5",
        width: 900,
        query: "gold huggie hoop earrings pair on warm beige fabric flatlay [golden-sphere-huggies-subtitle] [golden-sphere-huggies-name]",
        title: "golden-sphere-huggies-name",
        subtitle: "golden-sphere-huggies-subtitle",
      },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    description:
      "Inspired by vintage lacework, these filigree drops catch the light through tiny openwork details. Lightweight enough for all-day wear, statement enough for evening.",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.7,
    reviews: 76,
    details: [
      "18K gold-plated brass, filigree",
      "French wire closure",
      "Hypoallergenic, nickel-free",
      "Lightweight, all-day wear",
    ],
    materials_care:
      "Store flat in the included pouch. Avoid bending the filigree by handling the post when removing.",
    shipping_returns:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "amber-lace-primary-2c8f1d",
        ratio: "4x5",
        width: 900,
        query: "gold filigree lace drop earrings on model editorial portrait warm light [amber-lace-earrings-subtitle] [amber-lace-earrings-name]",
        title: "amber-lace-earrings-name",
        subtitle: "amber-lace-earrings-subtitle",
      },
      {
        id: "amber-lace-hover-6b0a9c",
        ratio: "4x5",
        width: 900,
        query: "vintage gold filigree drop earrings product shot on warm dark background [amber-lace-earrings-subtitle] [amber-lace-earrings-name]",
        title: "amber-lace-earrings-name",
        subtitle: "amber-lace-earrings-subtitle",
      },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    description:
      "Our most-loved huggies paired with a delicate chain — finished with a single crystal. Presented in a keepsake gift box with a handwritten note option at checkout.",
    price: 95,
    category: "sets",
    material: "crystal",
    tone: "gold",
    rating: 4.9,
    reviews: 154,
    badge: "Gifting",
    details: [
      "18K gold-plated brass",
      "Includes matching huggies + pendant necklace",
      "Crystal accent on pendant",
      "Velvet-lined keepsake gift box",
    ],
    materials_care:
      "Remove before showering, sleeping, or exercising. Polish gently with the included cloth to maintain the gold finish.",
    shipping_returns:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    images: [
      {
        id: "royal-heirloom-primary-1f7c8e",
        ratio: "4x5",
        width: 900,
        query: "gold jewelry earring and necklace gift set in velvet box editorial [royal-heirloom-set-subtitle] [royal-heirloom-set-name]",
        title: "royal-heirloom-set-name",
        subtitle: "royal-heirloom-set-subtitle",
      },
      {
        id: "royal-heirloom-hover-4d2a0b",
        ratio: "4x5",
        width: 900,
        query: "gold huggies and crystal pendant necklace flatlay on warm linen [royal-heirloom-set-subtitle] [royal-heirloom-set-name]",
        title: "royal-heirloom-set-name",
        subtitle: "royal-heirloom-set-subtitle",
      },
    ],
  },
]

// Editorial UGC reel placeholders
export const reelItems = [
  {
    id: "reel-1",
    imgId: "reel-earrings-7a3c1b",
    imgQuery: "gold drop earrings on woman ear editorial portrait warm light [reel-1-caption]",
    captionId: "reel-1-caption",
    caption: "Layered, lit, lived-in.",
    ratio: "9x16",
    width: 540,
  },
  {
    id: "reel-2",
    imgId: "reel-necklace-2d8e4f",
    imgQuery: "delicate gold crystal necklace on woman neck editorial portrait [reel-2-caption]",
    captionId: "reel-2-caption",
    caption: "Whisper-soft sparkle.",
    ratio: "9x16",
    width: 540,
  },
  {
    id: "reel-3",
    imgId: "reel-huggies-9b1f6a",
    imgQuery: "gold huggie hoop earrings on woman editorial close up warm light [reel-3-caption]",
    captionId: "reel-3-caption",
    caption: "The everyday heirloom.",
    ratio: "9x16",
    width: 540,
  },
  {
    id: "reel-4",
    imgId: "reel-cuff-4c0d2e",
    imgQuery: "gold ear cuff ear stack editorial portrait on model [reel-4-caption]",
    captionId: "reel-4-caption",
    caption: "Stacked with intention.",
    ratio: "9x16",
    width: 540,
  },
  {
    id: "reel-5",
    imgId: "reel-set-6f3a8c",
    imgQuery: "gold jewelry set on woman editorial portrait warm soft light [reel-5-caption]",
    captionId: "reel-5-caption",
    caption: "Gifts that become keepsakes.",
    ratio: "9x16",
    width: 540,
  },
  {
    id: "reel-6",
    imgId: "reel-detail-8e2b5d",
    imgQuery: "gold filigree jewelry detail editorial close up warm light [reel-6-caption]",
    captionId: "reel-6-caption",
    caption: "Crafted in the details.",
    ratio: "9x16",
    width: 540,
  },
]

// Testimonials
export const testimonials = [
  {
    id: "review-1",
    name: "Amelia R.",
    rating: 5,
    text: "I've worn the huggies every day for six months — the gold hasn't faded at all. They feel like an heirloom already.",
  },
  {
    id: "review-2",
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Flora necklace for my sister's birthday. The packaging alone made her tear up — and the piece is stunning.",
  },
  {
    id: "review-3",
    name: "Jenna K.",
    rating: 5,
    text: "Quiet, elegant, and never cheap-looking. Velmora has become my go-to for gifts and for myself.",
  },
]

export function findProduct(id) {
  return products.find((p) => p.id === id) || null
}

export function relatedProducts(productId, limit = 4) {
  const current = findProduct(productId)
  if (!current) return products.slice(0, limit)
  const sameCategory = products.filter(
    (p) => p.id !== productId && p.category === current.category
  )
  const others = products.filter(
    (p) => p.id !== productId && p.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}
