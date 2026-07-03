// Seed product data for Velmora Fine Jewelry
// Images use the strk-img tagging system; queries reference nearby text element IDs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the ear with quiet confidence — no piercing required.",
    details:
      "Hand-finished 18K gold plating over a durable brass core. Set with a brilliant-cut cubic zirconia. Lightweight and comfortable for all-day wear.",
    care: "Avoid contact with water, perfume, and cosmetics. Store in the provided pouch. Clean gently with a soft, dry cloth.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    imgId: "prod-vivid-aura",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    description:
      "A garden in bloom, suspended at the collarbone. Multicolor crystal petals catch the light with every movement, set in warm gold.",
    details:
      "18K gold plating over brass. Hand-set multicolor cubic zirconia stones. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the stones. Polish with a soft cloth.",
    tones: ["Gold"],
    badge: "New",
    imgId: "prod-majestic-flora",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 203,
    description:
      "Chunky dome huggies with a polished, mirror finish. The everyday gold earring — effortless from desk to dinner.",
    details:
      "18K gold plating over brass. 12mm dome huggie hoops with secure hinged closure. Hypoallergenic and nickel-free.",
    care: "Wipe clean after each wear. Avoid water and chemicals. Store in a dry place.",
    tones: ["Gold", "Silver"],
    badge: "Bestseller",
    imgId: "prod-golden-sphere",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 64,
    description:
      "Intricate filigree drops with a hand-textured finish. A modern heirloom that moves softly and catches warm light.",
    details:
      "18K gold plating over brass with a hand-hammered texture. 45mm drop length. Lightweight lever-back closure.",
    care: "Handle with care to preserve the filigree detail. Keep dry and store separately to avoid tangling.",
    tones: ["Gold"],
    badge: null,
    imgId: "prod-amber-lace",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 41,
    description:
      "A coordinated set of matching earrings and pendant necklace, presented in a signature gift box. The perfect complete gift.",
    details:
      "18K gold plating over brass. Matching pendant necklace (45cm) and stud earrings. Arrives in a premium Velmora gift box with ribbon.",
    care: "Store each piece separately in the gift box. Avoid water and perfume. Clean with a soft cloth.",
    tones: ["Gold", "Silver"],
    badge: "Gift Set",
    imgId: "prod-royal-heirloom",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Ear cuffs, drops & statement studs",
    imgId: "cat-earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants, chains & layered sets",
    imgId: "cat-necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Polished dome & everyday hoops",
    imgId: "cat-huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
];

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold is genuinely beautiful — I get compliments every time I wear the huggies. Feels far more expensive than it was.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Flora necklace as a gift and it arrived in the most elegant box. My sister hasn't taken it off since.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "I was nervous about gold-plated jewelry irritating my ears, but these are completely hypoallergenic. No reaction at all.",
  },
];

export const reelItems = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-1",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Majestic Flora Nectar, layered at the collarbone",
    imgId: "reel-2",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Vivid Aura ear cuff, no piercing needed",
    imgId: "reel-3",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace drops, caught in warm light",
    imgId: "reel-4",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom Set, the complete gift",
    imgId: "reel-5",
    titleId: "reel-5-title",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}
