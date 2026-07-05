// Seed catalog for Velmora Fine Jewelry.
// Image IDs are deterministic so the stock image system can resolve them
// from the surrounding contextual text (see data-strk-img usage in cards).

export const CATEGORIES = [
  { id: "earrings", name: "Earrings", singular: "Earring" },
  { id: "necklaces", name: "Necklaces", singular: "Necklace" },
  { id: "huggies", name: "Huggies", singular: "Huggie" },
  { id: "rings", name: "Rings", singular: "Ring" },
  { id: "bracelets", name: "Bracelets", singular: "Bracelet" },
  { id: "sets", name: "Sets", singular: "Set" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "rose-gold", label: "Rose Gold Plated" },
  { id: "crystal", label: "Crystal" },
]

export const VARIANTS = [
  { id: "gold", label: "Gold", swatch: "#B08A52" },
  { id: "silver", label: "Silver", swatch: "#C8C2BA" },
  { id: "rose-gold", label: "Rose Gold", swatch: "#C49A78" },
]

const baseProduct = (id, name, desc, price, overrides = {}) => ({
  id,
  name,
  nameId: `product-${id}-name`,
  descId: `product-${id}-desc`,
  desc,
  price,
  compareAtPrice: null,
  rating: 4.8,
  reviewCount: 0,
  category: "earrings",
  material: "18k-gold",
  variants: ["gold", "silver"],
  defaultVariant: "gold",
  featured: false,
  bestseller: false,
  ...overrides,
})

// Five requested hero products + extra to flesh out the collection.
export const PRODUCTS = [
  baseProduct("vivid-aura", "Vivid Aura Jewels", "A delicate gold ear cuff with a single crystal accent — the piece you forget you're wearing.", 42, {
    category: "earrings",
    material: "18k-gold",
    variants: ["gold", "silver"],
    featured: true,
    bestseller: true,
    imgId: "img-vivid-aura",
    img2Id: "img-vivid-aura-2",
    gallery: ["img-vivid-aura", "img-vivid-aura-2", "img-vivid-aura-3"],
    materialLabel: "18K Gold Plated · Crystal",
    reviewCount: 312,
    description:
      "An ear cuff that sits like it was always meant to be there. Hand-finished in 18K gold plate with a single hand-set crystal, Vivid Aura is our most-loved everyday piece — a quiet statement that catches the light, never the room.",
    care: "Avoid contact with perfume, lotions and water. Store in the velvet pouch provided. Wipe gently with a soft, dry cloth to restore shine.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
  }),
  baseProduct("majestic-flora", "Majestic Flora Nectar", "A multicolor floral crystal necklace — modern heirloom.", 68, {
    category: "necklaces",
    material: "crystal",
    variants: ["gold", "silver", "rose-gold"],
    featured: true,
    bestseller: true,
    imgId: "img-majestic-flora",
    img2Id: "img-majestic-flora-2",
    gallery: ["img-majestic-flora", "img-majestic-flora-2", "img-majestic-flora-3"],
    materialLabel: "18K Gold Plated · Floral Crystal",
    reviewCount: 184,
    description:
      "Inspired by a courtyard in spring bloom, Majestic Flora is a hand-set cluster of pastel crystals suspended from a fine gold chain. A piece that finishes a neckline, or starts a conversation.",
    care: "Remove before showering, swimming or sleeping. Store flat in the original box. Avoid direct contact with perfume.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  }),
  baseProduct("golden-sphere", "Golden Sphere Huggies", "Chunky gold dome huggie earrings — quiet boldness.", 38, {
    category: "huggies",
    material: "18k-gold",
    variants: ["gold", "silver"],
    bestseller: true,
    imgId: "img-golden-sphere",
    img2Id: "img-golden-sphere-2",
    gallery: ["img-golden-sphere", "img-golden-sphere-2", "img-golden-sphere-3"],
    materialLabel: "18K Gold Plated · Dome",
    reviewCount: 421,
    description:
      "Polished to a mirror finish, the Golden Sphere huggie is a small, weighty hoop that sits close to the lobe. Wear them solo for a clean line, or stacked with your everyday studs.",
    care: "Wipe with a soft dry cloth. Avoid perfume and chlorine. Store in the pouch provided.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  }),
  baseProduct("amber-lace", "Amber Lace Earrings", "Textured gold filigree drop earrings — warm, intricate, light.", 54, {
    category: "earrings",
    material: "18k-gold",
    variants: ["gold", "rose-gold"],
    featured: true,
    imgId: "img-amber-lace",
    img2Id: "img-amber-lace-2",
    gallery: ["img-amber-lace", "img-amber-lace-2", "img-amber-lace-3"],
    materialLabel: "18K Gold Plated · Filigree",
    reviewCount: 96,
    description:
      "Inspired by antique lacework, the Amber Lace drop is cast in three dimensions of fine gold detail. Lighter than they look, and far more wearable than they should be.",
    care: "Store separately to protect the filigree. Avoid bending. Wipe with a soft cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  }),
  baseProduct("royal-heirloom", "Royal Heirloom Set", "A gift-boxed earring and necklace set — the gift that always lands.", 95, {
    category: "sets",
    material: "18k-gold",
    variants: ["gold", "silver"],
    featured: true,
    imgId: "img-royal-heirloom",
    img2Id: "img-royal-heirloom-2",
    gallery: ["img-royal-heirloom", "img-royal-heirloom-2", "img-royal-heirloom-3"],
    materialLabel: "18K Gold Plated · Matching Set",
    reviewCount: 248,
    description:
      "Our most-gifted set: a fine cable chain with a single crystal drop, paired with matching crystal huggies. Arrives in a hand-tied velvet box, ready to give.",
    care: "Avoid contact with water, perfume and lotion. Wipe gently with the polishing cloth included.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns. Gift receipts available at checkout.",
  }),

  // Additional pieces to populate the collection page.
  baseProduct("soft-crescent", "Soft Crescent Pendant", "A slim gold crescent pendant on a fine cable chain.", 48, {
    category: "necklaces",
    material: "18k-gold",
    variants: ["gold", "silver", "rose-gold"],
    imgId: "img-soft-crescent",
    img2Id: "img-soft-crescent-2",
    gallery: ["img-soft-crescent", "img-soft-crescent-2", "img-soft-crescent-3"],
    materialLabel: "18K Gold Plated · Crescent",
    reviewCount: 153,
  }),
  baseProduct("twin-pearl", "Twin Pearl Studs", "Two freshwater pearls set in a soft gold bezel.", 36, {
    category: "earrings",
    material: "18k-gold",
    variants: ["gold", "silver"],
    imgId: "img-twin-pearl",
    img2Id: "img-twin-pearl-2",
    gallery: ["img-twin-pearl", "img-twin-pearl-2", "img-twin-pearl-3"],
    materialLabel: "18K Gold Plated · Freshwater Pearl",
    reviewCount: 207,
  }),
  baseProduct("quiet-ribbon", "Quiet Ribbon Ring", "A fluid gold ribbon ring with a hand-polished finish.", 44, {
    category: "rings",
    material: "18k-gold",
    variants: ["gold", "silver", "rose-gold"],
    imgId: "img-quiet-ribbon",
    img2Id: "img-quiet-ribbon-2",
    gallery: ["img-quiet-ribbon", "img-quiet-ribbon-2", "img-quiet-ribbon-3"],
    materialLabel: "18K Gold Plated · Ribbon",
    reviewCount: 88,
  }),
  baseProduct("halo-bangle", "Halo Bangle", "A slim gold bangle with a single crystal accent.", 58, {
    category: "bracelets",
    material: "18k-gold",
    variants: ["gold", "silver"],
    imgId: "img-halo-bangle",
    img2Id: "img-halo-bangle-2",
    gallery: ["img-halo-bangle", "img-halo-bangle-2", "img-halo-bangle-3"],
    materialLabel: "18K Gold Plated · Crystal",
    reviewCount: 132,
  }),
  baseProduct("petal-huggie", "Petal Huggies", "A scalloped gold huggie with a petal-edge silhouette.", 42, {
    category: "huggies",
    material: "18k-gold",
    variants: ["gold", "rose-gold"],
    imgId: "img-petal-huggie",
    img2Id: "img-petal-huggie-2",
    gallery: ["img-petal-huggie", "img-petal-huggie-2", "img-petal-huggie-3"],
    materialLabel: "18K Gold Plated · Petal",
    reviewCount: 64,
  }),
  baseProduct("celestial-chain", "Celestial Chain Necklace", "A fine layered chain with three crescent drops.", 62, {
    category: "necklaces",
    material: "18k-gold",
    variants: ["gold", "silver"],
    featured: true,
    imgId: "img-celestial-chain",
    img2Id: "img-celestial-chain-2",
    gallery: ["img-celestial-chain", "img-celestial-chain-2", "img-celestial-chain-3"],
    materialLabel: "18K Gold Plated · Layered",
    reviewCount: 75,
  }),
  baseProduct("luna-signet", "Luna Signet Ring", "A polished gold signet set with a single moonstone.", 52, {
    category: "rings",
    material: "18k-gold",
    variants: ["gold", "silver"],
    imgId: "img-luna-signet",
    img2Id: "img-luna-signet-2",
    gallery: ["img-luna-signet", "img-luna-signet-2", "img-luna-signet-3"],
    materialLabel: "18K Gold Plated · Moonstone",
    reviewCount: 49,
  }),
]

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    quote: "I bought the Royal Heirloom set for my sister's birthday and ended up keeping it for myself. The packaging alone is worth it.",
  },
  {
    id: "t2",
    name: "Sofia M.",
    rating: 5,
    quote: "The Golden Sphere huggies are the only hoops I've worn daily for six months — they still look brand new. Quietly the best jewelry purchase I've made.",
  },
  {
    id: "t3",
    name: "Hana K.",
    rating: 5,
    quote: "Velmora feels like a small atelier, not a giant brand. The details are so considered, and the weight of each piece is perfect.",
  },
]

export const TRUST_ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
]

export const UGC_REELS = [
  {
    id: "reel-1",
    caption: "everyday ear stack",
    imgId: "img-ugc-1",
    captionId: "ugc-caption-1",
  },
  {
    id: "reel-2",
    caption: "golden hour, golden hoops",
    imgId: "img-ugc-2",
    captionId: "ugc-caption-2",
  },
  {
    id: "reel-3",
    caption: "the everyday necklace",
    imgId: "img-ugc-3",
    captionId: "ugc-caption-3",
  },
  {
    id: "reel-4",
    caption: "wedding guest, sorted",
    imgId: "img-ugc-4",
    captionId: "ugc-caption-4",
  },
  {
    id: "reel-5",
    caption: "stack the spheres",
    imgId: "img-ugc-5",
    captionId: "ugc-caption-5",
  },
  {
    id: "reel-6",
    caption: "office, but softer",
    imgId: "img-ugc-6",
    captionId: "ugc-caption-6",
  },
  {
    id: "reel-7",
    caption: "a gift, kept",
    imgId: "img-ugc-7",
    captionId: "ugc-caption-7",
  },
]

export const CATEGORY_TILES = [
  {
    id: "earrings",
    title: "Earrings",
    label: "Shop Earrings",
    imgId: "img-cat-earrings",
    titleId: "tile-earrings-title",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    label: "Shop Necklaces",
    imgId: "img-cat-necklaces",
    titleId: "tile-necklaces-title",
  },
  {
    id: "huggies",
    title: "Huggies",
    label: "Shop Huggies",
    imgId: "img-cat-huggies",
    titleId: "tile-huggies-title",
  },
]

export function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit)
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, limit))
    .slice(0, limit)
}

export function getBestsellers(limit = 5) {
  const flagged = PRODUCTS.filter((p) => p.bestseller)
  return (flagged.length >= limit ? flagged : PRODUCTS).slice(0, limit)
}
