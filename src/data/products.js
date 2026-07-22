// Seed product data for Velmora Fine Jewelry.
// Image IDs are unique per slot so the strk-img system can resolve each one.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "ear cuff",
    material: "18K Gold Plated",
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.",
    description:
      "The Vivid Aura ear cuff is our most-loved everyday statement. Hand-finished in 18K gold plating over brass, it curves gently to hug the cartilage and catches the light with a hand-set crystal. Wear it solo for a quiet gleam or stack it with huggies for a curated ear.",
    materials:
      "18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    rating: 4.8,
    reviews: 214,
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "vivid-aura-main-a1b2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-alt-c3d4", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "floral crystal necklace",
    material: "18K Gold Plated",
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone — a romantic centerpiece for day or evening.",
    description:
      "Majestic Flora Nectar is a garden in gold. Delicate petals of 18K gold plating cradle multicolor crystals, arranged into a luminous floral pendant on a fine adjustable chain. A romantic, gift-ready piece that transitions effortlessly from brunch to candlelight.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable chain 40–45cm with extender. Lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Clean with a microfiber cloth.",
    rating: 4.9,
    reviews: 168,
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "majestic-flora-main-e5f6", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-alt-g7h8", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    type: "chunky gold dome huggie earrings",
    material: "18K Gold Plated",
    shortDesc:
      "Chunky gold dome huggies with a polished, sculptural curve — the everyday hoop you'll never take off.",
    description:
      "Golden Sphere Huggies reimagine the classic hoop as a chunky, polished dome that hugs the lobe. Lightweight despite their bold silhouette, they close with a secure hinged clasp. The perfect foundation for a stacked ear or a clean solo look.",
    materials:
      "18K gold plating over brass. Hinged snap closure. Nickel-free, hypoallergenic. Sold as a pair.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.",
    rating: 4.7,
    reviews: 302,
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "golden-sphere-main-i9j0", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-alt-k1l2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "textured gold filigree drop earrings",
    material: "18K Gold Plated",
    shortDesc:
      "Textured gold filigree drop earrings with a lace-like openwork — heirloom craft, modern weightlessness.",
    description:
      "Amber Lace earrings translate traditional filigree into a modern drop. The openwork gold catches every shift of light, while the textured surface adds depth and warmth. Surprisingly light, endlessly elegant — a piece that feels both antique and new.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure. Nickel-free, hypoallergenic. Sold as a pair.",
    care: "Handle with care to preserve the filigree. Store separately to avoid tangling. Dry-wipe only.",
    rating: 4.8,
    reviews: 97,
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "amber-lace-main-m3n4", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-alt-o5p6", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    type: "gift-boxed earring and necklace set",
    material: "18K Gold Plated",
    shortDesc:
      "A gift-boxed earring and necklace set in matching gold — a coordinated heirloom for milestones and gifting.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earrings in one keepsake gift box. Designed to be worn together or apart, the set balances presence and wearability. Arrives in our signature velvet-lined box, ready for the moments that matter.",
    materials:
      "18K gold plating over brass. Cubic zirconia accents. Necklace 42cm + extender. Stud earrings with push-back. Hypoallergenic. Gift box included.",
    care: "Store each piece in the gift box compartments. Keep dry. Polish with a soft cloth.",
    rating: 5.0,
    reviews: 64,
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "royal-heirloom-main-q7r8", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-alt-s9t0", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Statement drops, cuffs and everyday studs.",
    imgId: "cat-earrings-u1v2",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants, chains and floral centerpieces.",
    imgId: "cat-necklaces-w3x4",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Polished dome hoops that hug the lobe.",
    imgId: "cat-huggies-y5z6",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold plating is unreal for the price. I've worn my huggies every day for months and they still look brand new.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Flora Nectar as a gift and the box alone made her gasp. Beautiful, weighty, and so elegant.",
  },
  {
    name: "Camille R.",
    rating: 5,
    text: "Quiet luxury without the markup. The Amber Lace earrings feel like an heirloom I actually own.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked ear, golden hour",
    imgId: "reel-ear-stack-a1",
    titleId: "reel-ear-stack-title",
    descId: "reel-ear-stack-desc",
    desc: "Gold huggies and ear cuff layered on the lobe",
  },
  {
    id: "reel-2",
    caption: "The Flora Nectar, up close",
    imgId: "reel-flora-close-b2",
    titleId: "reel-flora-close-title",
    descId: "reel-flora-close-desc",
    desc: "Floral crystal necklace resting on the collarbone",
  },
  {
    id: "reel-3",
    caption: "Filigree in motion",
    imgId: "reel-filigree-c3",
    titleId: "reel-filigree-title",
    descId: "reel-filigree-desc",
    desc: "Textured gold drop earrings swaying softly",
  },
  {
    id: "reel-4",
    caption: "Gift-ready, every time",
    imgId: "reel-giftbox-d4",
    titleId: "reel-giftbox-title",
    descId: "reel-giftbox-desc",
    desc: "Velvet-lined gift box with gold jewelry set",
  },
  {
    id: "reel-5",
    caption: "Dome huggies, no piercing",
    imgId: "reel-dome-e5",
    titleId: "reel-dome-title",
    descId: "reel-dome-desc",
    desc: "Chunky gold dome huggie worn on the ear",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
