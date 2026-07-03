// Seed catalog for Velmora. Image queries are intentionally specific so the
// stock-image system returns warm, editorial gold-on-skin / gold-on-stone
// photography rather than white-background e-commerce shots.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    tones: ["gold"],
    rating: 4.8,
    reviews: 312,
    material: "18K Gold Plated · Brass Base",
    description:
      "A crystal-pavé ear cuff sculpted to hug the helix. Worn solo, stacked, or paired with our huggies — the way jewelry should feel: easy, considered, yours.",
    imageQuery: "gold crystal ear cuff on woman ear close up warm light",
    altImageQuery: "gold crystal ear cuff stacked editorial jewelry",
    imageRatio: "4x5",
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    tones: ["gold"],
    rating: 4.9,
    reviews: 248,
    material: "18K Gold Plated · Sterling Silver Post",
    description:
      "A multicolor floral crystal pendant on a fine cable chain. Hand-set in a low-profile bezel so the light — not the metal — does the talking.",
    imageQuery: "multicolor floral crystal gold necklace on model warm",
    altImageQuery: "multicolor floral crystal necklace flat lay on linen",
    imageRatio: "4x5",
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    tones: ["gold", "silver"],
    rating: 4.7,
    reviews: 519,
    material: "18K Gold Plated · Sterling Silver Post",
    description:
      "Chunky dome huggies in a high-polish gold finish. A clean, architectural take on the everyday hoop — the kind you forget you're wearing (in the best way).",
    imageQuery: "chunky gold dome huggie hoop earrings on model ear",
    altImageQuery: "gold huggie earrings pair on warm stone flat lay",
    imageRatio: "4x5",
    badge: "Cult Favorite",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    tones: ["gold"],
    rating: 4.8,
    reviews: 187,
    material: "18K Gold Plated · Brass Base",
    description:
      "Textured gold filigree drops cast from a Victorian lace motif. Light on the lobe, heavy on the moment.",
    imageQuery: "gold filigree drop earrings vintage lace on model",
    altImageQuery: "gold lace drop earrings editorial jewelry flat lay",
    imageRatio: "4x5",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    tone: "gold",
    tones: ["gold"],
    rating: 5.0,
    reviews: 96,
    material: "18K Gold Plated · Gift Boxed",
    description:
      "A matching earring and necklace set, presented in our signature linen-lined gift box. Made to be given — or kept.",
    imageQuery: "gold jewelry gift set earring necklace in linen box",
    altImageQuery: "gold jewelry heirloom set worn by model warm",
    imageRatio: "4x5",
    badge: "Gifting",
  },
];

export const productById = (id) => products.find((p) => p.id === id);

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const priceBands = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75.01, max: Infinity },
];

export const materials = ["18K Gold Plated", "Sterling Silver", "Brass Base"];
