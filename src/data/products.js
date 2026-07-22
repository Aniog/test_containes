// Seed product data for Velmora Fine Jewelry
// Each product has explicit titleId/descId used for strk-img dynamic queries.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "Ear Cuff",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is an everyday statement piece, hand-finished in 18K gold plating over brass. A precision-set crystal catches the light with every turn. Designed to hug the cartilage gently, it requires no piercing and adjusts to your ear.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Crystal accent. Wipe clean with the provided microfibre cloth and store in the pouch to preserve the finish.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn items in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "vivid-aura-1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
    titleId: "vivid-aura-title",
    descId: "vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "Pendant Necklace",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    shortDesc:
      "A multicolor floral crystal pendant suspended from a delicate gold chain.",
    description:
      "Majestic Flora Nectar is a garden in miniature — a floral cluster of multicolor crystals set in warm gold, resting on a fine adjustable chain. A romantic piece that moves from day to evening with ease.",
    materials:
      "18K gold plating over brass. Multicolor crystal stones. Adjustable 40–45cm chain with extender. Hypoallergenic, nickel-free.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn items in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "majestic-flora-1", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    type: "Huggie Earrings",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    shortDesc:
      "Chunky gold dome huggies with a smooth, sculptural silhouette.",
    description:
      "Golden Sphere Huggies are the everyday essential reimagined — a chunky polished dome that hugs the lobe with a secure hinged closure. Substantial yet comfortable, sold as a pair.",
    materials:
      "18K gold plating over brass. Hinged snap closure. Hypoallergenic, nickel-free. Sold as a pair.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn items in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "golden-sphere-1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "Drop Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 91,
    shortDesc:
      "Textured gold filigree drop earrings with an artisanal, lace-like finish.",
    description:
      "Amber Lace is a study in texture — filigree-inspired gold drops that catch the light like woven thread. Lightweight and graceful, they add quiet drama to any look.",
    materials:
      "18K gold plating over brass. Textured filigree finish. Hypoallergenic, nickel-free. Fishhook closure.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn items in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "amber-lace-1", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-2", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
    titleId: "amber-lace-title",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Necklaces",
    type: "Earring + Necklace Set",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 64,
    shortDesc:
      "A gift-boxed earring and necklace set — the complete coordinated look.",
    description:
      "The Royal Heirloom Set pairs a matching necklace and earrings in a signature keepsake box. Coordinated, considered, and ready to gift — to someone special, or to yourself.",
    materials:
      "18K gold plating over brass. Hypoallergenic, nickel-free. Arrives in a signature Velmora gift box.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn items in original packaging.",
    variants: ["Gold", "Silver"],
    images: [
      { imgId: "royal-heirloom-1", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Statement drops, cuffs and everyday studs.",
    imgId: "cat-earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Delicate chains and pendant centrepieces.",
    imgId: "cat-necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Polished dome huggies for every lobe.",
    imgId: "cat-huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
];

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold plating is unreal for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Flora Nectar as a gift and ended up keeping it for myself. The packaging alone feels like a treat.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "Quiet, elegant, and so well made. Velmora is now my go-to for demi-fine pieces that don't cost a fortune.",
  },
];

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled three ways",
    imgId: "reel-1",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "The Vivid Aura cuff on the cartilage",
    imgId: "reel-2",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Flora Nectar layered for evening",
    imgId: "reel-3",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace drops in golden hour",
    imgId: "reel-4",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "The Heirloom Set, unboxed",
    imgId: "reel-5",
    titleId: "reel-5-title",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit);
}
