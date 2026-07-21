// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes at render.
// Each product has a primary + hover image id so ProductCard can swap on hover.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "ear cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      "A sculptural gold ear cuff traced with a single crystal accent — effortless shine, no piercing required.",
    description:
      "The Vivid Aura ear cuff is our everyday signature: a fluid band of 18K gold-plated brass that hugs the cartilage, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it brings quiet brilliance to the simplest of looks.",
    materials:
      "18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    badge: "Bestseller",
    imgId: "vivid-aura-main",
    imgIdHover: "vivid-aura-hover",
    titleId: "vivid-aura-title",
    descId: "vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "pendant necklace",
    price: 68,
    rating: 4.9,
    reviews: 203,
    shortDescription:
      "A multicolor floral crystal pendant suspended from a fine gold chain — a garden of light at the collarbone.",
    description:
      "Majestic Flora Nectar is a statement of soft opulence. A delicate floral motif is set with multicolor crystals that bloom across the neckline, suspended from an adjustable fine gold chain. A piece made for gifting and for keeping.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable chain 40–45cm with extender. Lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the gift box. Polish with a microfibre cloth.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    badge: "Bestseller",
    imgId: "majestic-flora-main",
    imgIdHover: "majestic-flora-hover",
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "huggie earrings",
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDescription:
      "Chunky gold dome huggies that sit close to the lobe — everyday polish with a confident edge.",
    description:
      "The Golden Sphere Huggies reimagine the classic hoop with a chunky, sculpted dome that hugs the lobe. Lightweight and secure with a hinged closure, they are the pair you reach for every morning and never take off.",
    materials:
      "18K gold plating over brass. Hinged snap closure. Hypoallergenic. Sold as a pair.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    badge: "Bestseller",
    imgId: "golden-sphere-main",
    imgIdHover: "golden-sphere-hover",
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "drop earrings",
    price: 54,
    rating: 4.8,
    reviews: 91,
    shortDescription:
      "Textured gold filigree drop earrings — intricate lacework that moves with a quiet shimmer.",
    description:
      "Amber Lace is an ode to craftsmanship. Each drop is formed from textured gold filigree, an open lattice that catches light and air. The result is an earring that feels heirloom-precious yet weighs almost nothing.",
    materials:
      "18K gold plating over brass. Textured filigree. Post and butterfly back. Hypoallergenic. Sold as a pair.",
    care: "Handle with care to preserve the filigree. Keep dry, store flat in the pouch provided.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    badge: "Bestseller",
    imgId: "amber-lace-main",
    imgIdHover: "amber-lace-hover",
    titleId: "amber-lace-title",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    type: "earring + necklace set",
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give and to treasure.",
    description:
      "The Royal Heirloom Set pairs a crystal-accented necklace with matching drop earrings in a signature keepsake box. Coordinated, considered and ready to gift, it is the piece for milestones, anniversaries and the people you love most.",
    materials:
      "18K gold plating over brass. Cubic zirconia crystals. Necklace 42cm with extender. Earrings post back. Hypoallergenic. Presented in a Velmora gift box.",
    care: "Store each piece in the gift box. Avoid water and perfume. Clean with a soft cloth.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    badge: "Gift Set",
    imgId: "royal-heirloom-main",
    imgIdHover: "royal-heirloom-hover",
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
  },
]

export const categories = [
  {
    id: "Earrings",
    name: "Earrings",
    description: "Ear cuffs, drops and huggies in warm gold.",
    imgId: "cat-earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "Necklaces",
    name: "Necklaces",
    description: "Pendants and chains for the collarbone.",
    imgId: "cat-necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "Huggies",
    name: "Huggies",
    description: "Sculpted hoops that hug the lobe.",
    imgId: "cat-huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold plating is genuinely beautiful — it wears like a piece three times the price. I get compliments every time.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Heirloom Set as an anniversary gift. The box alone felt luxurious. She hasn't taken it off since.",
  },
  {
    name: "Camille R.",
    rating: 5,
    text: "I have sensitive ears and these are the first huggies I can wear all day. Lightweight, elegant, perfect.",
  },
]

export const reels = [
  { id: "reel-1", caption: "Golden Sphere Huggies, styled for everyday.", imgId: "reel-1", titleId: "reel-1-title" },
  { id: "reel-2", caption: "Majestic Flora Nectar catching the light.", imgId: "reel-2", titleId: "reel-2-title" },
  { id: "reel-3", caption: "Stacking the Vivid Aura ear cuff.", imgId: "reel-3", titleId: "reel-3-title" },
  { id: "reel-4", caption: "Amber Lace drops for an evening out.", imgId: "reel-4", titleId: "reel-4-title" },
  { id: "reel-5", caption: "The Royal Heirloom Set, unboxed.", imgId: "reel-5", titleId: "reel-5-title" },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
