// Velmora — Seed product data
// Image tags reference text IDs in components via data-strk-img interpolation.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    material: "18K Gold Plated · Crystal",
    rating: 4.8,
    reviews: 142,
    description:
      "A single sculpted ear cuff traced with a soft crystal accent — designed to catch the light without shouting for it.",
    details: {
      description:
        "The Vivid Aura cuff is shaped to follow the natural curve of the ear. Hand-set with a single champagne-cut crystal and finished in 18K gold plating. Wear it solo, or stack with our Huggy family for a quiet layered moment.",
      materials:
        "18K gold plated brass base. AAA-grade crystal. Hypoallergenic, nickel-free, lead-free. Tarnish-resistant coating.",
      shipping:
        "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Each piece arrives in our signature cream linen gift box with a care card.",
    },
    // Image alt + query text references
    imgId1: "vivid-aura-cuff-primary-7a2c1f",
    imgId2: "vivid-aura-cuff-hover-b1d4e9",
    titleId: "vivid-aura-cuff-title",
    descId: "vivid-aura-cuff-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    material: "18K Gold Plated · Crystal",
    rating: 4.9,
    reviews: 218,
    description:
      "A multicolor floral crystal pendant on a whisper-thin chain — botanical, romantic, made for slow afternoons.",
    details: {
      description:
        "Hand-arranged petals of peach, champagne, and soft emerald crystal rest on an adjustable 16–18 inch chain. The pendant is weightless and catches candlelight beautifully.",
      materials:
        "18K gold plated brass. Mixed-cut crystal. Hypoallergenic, nickel-free. Adjustable lobster clasp closure.",
      shipping:
        "Free worldwide shipping on orders over $80. 30-day returns. Gift packaging available at checkout.",
    },
    imgId1: "majestic-flora-primary-3c8b21",
    imgId2: "majestic-flora-hover-9f2a40",
    titleId: "majestic-flora-title",
    descId: "majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    material: "18K Gold Plated · Brass",
    rating: 4.7,
    reviews: 305,
    description:
      "Chunky, domed gold huggies with a satisfying weight — an everyday signature you'll never want to take off.",
    details: {
      description:
        "Sculpted as a clean half-sphere and finished with a high-polish 18K gold plate. The post clicks securely into place and the silhouette sits close to the lobe for a polished, modern line.",
      materials:
        "18K gold plated brass. Hypoallergenic, nickel-free, lead-free. Hinged post closure for comfort.",
      shipping:
        "Free worldwide shipping on orders over $80. 30-day returns.",
    },
    imgId1: "golden-sphere-primary-5e1a9c",
    imgId2: "golden-sphere-hover-2b6f03",
    titleId: "golden-sphere-title",
    descId: "golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    material: "18K Gold Plated · Filigree",
    rating: 4.8,
    reviews: 97,
    description:
      "Textured gold filigree drops that move like a slow exhale — heirloom-inspired, weightless on the ear.",
    details: {
      description:
        "Inspired by vintage lacework, each drop is pressed in micro-detail and plated in 18K gold. The light catches the negative space between the filigree, casting the softest shadow.",
      materials:
        "18K gold plated brass. Hypoallergenic, nickel-free, lead-free. Lightweight, suitable for all-day wear.",
      shipping:
        "Free worldwide shipping on orders over $80. 30-day returns.",
    },
    imgId1: "amber-lace-primary-8d4c70",
    imgId2: "amber-lace-hover-6a9b32",
    titleId: "amber-lace-title",
    descId: "amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    tone: "gold",
    material: "18K Gold Plated · Crystal",
    rating: 5.0,
    reviews: 64,
    description:
      "A gift-boxed earring and necklace set, designed to mark a moment — and to be remembered for years after.",
    details: {
      description:
        "A matching crystal pendant and petite huggie pair, presented in our signature cream linen gift box with a hand-tied ribbon. Made for the moment a piece of jewelry stops being a thing and becomes a memory.",
      materials:
        "18K gold plated brass. Crystal accents. Hypoallergenic, nickel-free, lead-free.",
      shipping:
        "Free worldwide shipping. 30-day returns. Gift receipts available at checkout.",
    },
    imgId1: "royal-heirloom-primary-4f2b18",
    imgId2: "royal-heirloom-hover-7c5e91",
    titleId: "royal-heirloom-title",
    descId: "royal-heirloom-desc",
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
}
