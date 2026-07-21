// Seed catalog for Velmora Fine Jewelry.
// Each product has a primary + hover image (queried via the strk-img runtime).
// `imgId` and `hoverImgId` must be globally unique within the app.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18K Gold Plated · Crystal",
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    description:
      "A whisper of light at the ear. The Vivid Aura cuff sweeps along the lobe in a slim arc of 18K gold-plated brass, finished with a single hand-set crystal that catches the room.",
    tone: ["gold"],
    bestseller: true,
    imgId: "prod-vivid-aura-primary-8f2a",
    hoverImgId: "prod-vivid-aura-hover-8f2a",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18K Gold Plated · Multi-Crystal",
    price: 68,
    rating: 4.8,
    reviewCount: 94,
    description:
      "A garden in miniature, set in warm gold. The Majestic Flora pendant clusters hand-cut crystals in soft amber, rose, and champagne, hung on a fine cable chain that drapes like water.",
    tone: ["gold"],
    bestseller: true,
    imgId: "prod-majestic-flora-primary-3c1d",
    hoverImgId: "prod-majestic-flora-hover-3c1d",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18K Gold Plated · Brass",
    price: 38,
    rating: 4.9,
    reviewCount: 211,
    description:
      "A plump little dome of warm gold, set on a snug huggie closure. Polished to a soft sheen — wear them alone or stack two in each ear for the undone, editorial finish.",
    tone: ["gold", "silver"],
    bestseller: true,
    imgId: "prod-golden-sphere-primary-9a73",
    hoverImgId: "prod-golden-sphere-hover-9a73",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18K Gold Plated · Brass",
    price: 54,
    rating: 4.7,
    reviewCount: 76,
    description:
      "Hand-finished filigree in a delicate lace pattern, suspended from a fine post. Lightweight enough for evening, refined enough for morning.",
    tone: ["gold"],
    bestseller: true,
    imgId: "prod-amber-lace-primary-4e0b",
    hoverImgId: "prod-amber-lace-hover-4e0b",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "18K Gold Plated · Crystal",
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    description:
      "A pair of cushion-cut crystal studs and a matching pendant, nestled in a keepsake gift box. The set that says everything without a card.",
    tone: ["gold"],
    bestseller: true,
    imgId: "prod-royal-heirloom-primary-2a1f",
    hoverImgId: "prod-royal-heirloom-hover-2a1f",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
  },
  {
    id: "luna-thread-huggies",
    slug: "luna-thread-huggies",
    name: "Luna Thread Huggies",
    category: "huggies",
    material: "Sterling Silver · 18K Gold Plated",
    price: 44,
    rating: 4.8,
    reviewCount: 63,
    description:
      "An everyday thread of silver, polished to a fine mirror — a stacking staple and the quietest piece in your line-up.",
    tone: ["silver", "gold"],
    bestseller: false,
    imgId: "prod-luna-thread-primary-7d8e",
    hoverImgId: "prod-luna-thread-hover-7d8e",
    titleId: "prod-luna-thread-title",
    descId: "prod-luna-thread-desc",
  },
  {
    id: "velvet-dawn-necklace",
    slug: "velvet-dawn-necklace",
    name: "Velvet Dawn Necklace",
    category: "necklaces",
    material: "18K Gold Plated · Brass",
    price: 58,
    rating: 4.6,
    reviewCount: 41,
    description:
      "A slim bar pendant on a 16\" chain, finished with a hand-hammered texture that catches dawn light. Quiet, considered, and easy to layer.",
    tone: ["gold"],
    bestseller: false,
    imgId: "prod-velvet-dawn-primary-1b6c",
    hoverImgId: "prod-velvet-dawn-hover-1b6c",
    titleId: "prod-velvet-dawn-title",
    descId: "prod-velvet-dawn-desc",
  },
  {
    id: "serene-pearl-earrings",
    slug: "serene-pearl-earrings",
    name: "Serene Pearl Earrings",
    category: "earrings",
    material: "Freshwater Pearl · 18K Gold Plated",
    price: 62,
    rating: 4.9,
    reviewCount: 88,
    description:
      "Hand-selected freshwater pearls cradled in a soft gold cup. Lightweight, refined, and made to be worn with everything.",
    tone: ["gold"],
    bestseller: false,
    imgId: "prod-serene-pearl-primary-5f4a",
    hoverImgId: "prod-serene-pearl-hover-5f4a",
    titleId: "prod-serene-pearl-title",
    descId: "prod-serene-pearl-desc",
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-80", label: "$50 – $80", min: 50, max: 80 },
  { id: "80-plus", label: "$80 & up", min: 80, max: Infinity },
];

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "freshwater-pearl", label: "Freshwater Pearl" },
  { id: "crystal", label: "Crystal" },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}

export const formatPrice = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
