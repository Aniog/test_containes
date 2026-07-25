export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    isNew: false,
    description:
      "A sculptural ear cuff that catches the light with every turn. Hand-set crystals trace a warm gold arc — no piercing required, just slip on and glow.",
    details:
      "The Vivid Aura cuff is cast in recycled brass and finished in a thick layer of 18K gold. Each crystal is hand-set by our atelier partners and inspected for brilliance. Designed to sit comfortably on the helix for all-day wear, solo or stacked.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 156,
    badge: "Limited",
    isNew: true,
    description:
      "A garden in bloom, suspended in gold. Multicolor crystals are arranged as delicate petals along a fine cable chain — romantic, never loud.",
    details:
      "Each Flora Nectar necklace is assembled by hand: five crystal blossoms in champagne, blush, and peridot tones on a 16-inch chain with a 2-inch extender. Finished in 18K gold over recycled brass, sealed for lasting shine.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 389,
    badge: "Bestseller",
    isNew: false,
    description:
      "The everyday hoop, perfected. A softly domed silhouette in polished gold that hugs the lobe — weightless enough to forget, luminous enough to notice.",
    details:
      "Our signature huggies are hollow-cast for a feather-light feel, then polished to a mirror finish. Hinged closure clicks securely shut. Hypoallergenic posts, safe for sensitive ears. Sold as a pair.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 98,
    badge: null,
    isNew: true,
    description:
      "Filigree like woven light. These textured drops move as you do, casting delicate shadows — an heirloom mood at an everyday price.",
    details:
      "Inspired by antique lace, each drop is etched with a fine filigree pattern and finished in warm 18K gold. Lightweight despite their presence, with secure lever-back closures. Approximately 38mm drop length.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 132,
    badge: "Gift Ready",
    isNew: false,
    description:
      "A matched pair of treasures — crystal huggies and a pendant necklace — presented in our signature gift box. The answer to every occasion.",
    details:
      "The Heirloom Set pairs our crystal-studded huggies with a matching solitaire pendant on an adjustable chain. Arrives in a linen-wrapped keepsake box with a care pouch and polishing cloth. Ready to give, impossible to forget.",
  },
];

export const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);

export const getRelatedProducts = (product, count = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id).slice(0, count);

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
