// Seed product catalog for Velmora Fine Jewelry
// Each product has stable text-reference IDs used by data-strk-img queries.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A sculptural ear cuff hand-finished in 18K gold plate, set with a single faceted crystal that catches the light from every angle. No piercing required.",
    price: 42,
    rating: 4.8,
    reviewCount: 184,
    category: "earrings",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    bestseller: true,
    images: [
      { id: "vivid-aura-1", queryDesc: "vivid-aura-desc-main", queryTitle: "vivid-aura-title-main" },
      { id: "vivid-aura-2", queryDesc: "vivid-aura-desc-detail", queryTitle: "vivid-aura-title-detail" },
      { id: "vivid-aura-3", queryDesc: "vivid-aura-desc-worn", queryTitle: "vivid-aura-title-worn" },
      { id: "vivid-aura-4", queryDesc: "vivid-aura-desc-styled", queryTitle: "vivid-aura-title-styled" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "An heirloom-inspired pendant featuring petal-cut crystals arranged in a floral cluster. Hung on a fine 18K gold-plated chain with a softly weighted drop.",
    price: 68,
    rating: 4.9,
    reviewCount: 312,
    category: "necklaces",
    material: "18K Gold Plated, Cubic Zirconia",
    variants: ["Gold", "Silver"],
    bestseller: true,
    images: [
      { id: "majestic-flora-1", queryDesc: "majestic-flora-desc-main", queryTitle: "majestic-flora-title-main" },
      { id: "majestic-flora-2", queryDesc: "majestic-flora-desc-detail", queryTitle: "majestic-flora-title-detail" },
      { id: "majestic-flora-3", queryDesc: "majestic-flora-desc-worn", queryTitle: "majestic-flora-title-worn" },
      { id: "majestic-flora-4", queryDesc: "majestic-flora-desc-styled", queryTitle: "majestic-flora-title-styled" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Bold yet weightless, our signature dome huggies hug the lobe in a sculpted half-moon silhouette. Designed for everyday wear, day to dinner.",
    price: 38,
    rating: 4.7,
    reviewCount: 421,
    category: "huggies",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    bestseller: true,
    images: [
      { id: "golden-sphere-1", queryDesc: "golden-sphere-desc-main", queryTitle: "golden-sphere-title-main" },
      { id: "golden-sphere-2", queryDesc: "golden-sphere-desc-detail", queryTitle: "golden-sphere-title-detail" },
      { id: "golden-sphere-3", queryDesc: "golden-sphere-desc-worn", queryTitle: "golden-sphere-title-worn" },
      { id: "golden-sphere-4", queryDesc: "golden-sphere-desc-styled", queryTitle: "golden-sphere-title-styled" },
    ],
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Inspired by antique lacework, these drop earrings feature delicate hand-pierced filigree that flutters with movement. A romantic, editorial finish.",
    price: 54,
    rating: 4.9,
    reviewCount: 268,
    category: "earrings",
    material: "18K Gold Plated Brass",
    variants: ["Gold", "Silver"],
    bestseller: true,
    images: [
      { id: "amber-lace-1", queryDesc: "amber-lace-desc-main", queryTitle: "amber-lace-title-main" },
      { id: "amber-lace-2", queryDesc: "amber-lace-desc-detail", queryTitle: "amber-lace-title-detail" },
      { id: "amber-lace-3", queryDesc: "amber-lace-desc-worn", queryTitle: "amber-lace-title-worn" },
      { id: "amber-lace-4", queryDesc: "amber-lace-desc-styled", queryTitle: "amber-lace-title-styled" },
    ],
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "Our most-gifted pairing: a matched necklace and earring duo nestled in a signature linen-wrapped box. Made to be treasured, made to be passed on.",
    price: 95,
    rating: 5.0,
    reviewCount: 156,
    category: "sets",
    material: "18K Gold Plated, Hypoallergenic",
    variants: ["Gold", "Silver"],
    bestseller: true,
    images: [
      { id: "royal-heirloom-1", queryDesc: "royal-heirloom-desc-main", queryTitle: "royal-heirloom-title-main" },
      { id: "royal-heirloom-2", queryDesc: "royal-heirloom-desc-detail", queryTitle: "royal-heirloom-title-detail" },
      { id: "royal-heirloom-3", queryDesc: "royal-heirloom-desc-worn", queryTitle: "royal-heirloom-title-worn" },
      { id: "royal-heirloom-4", queryDesc: "royal-heirloom-desc-styled", queryTitle: "royal-heirloom-title-styled" },
    ],
  },
];

export const CATEGORIES = [
  { id: "earrings", label: "Earrings", tagline: "Statement and everyday" },
  { id: "necklaces", label: "Necklaces", tagline: "Layered with intention" },
  { id: "huggies", label: "Huggies", tagline: "The new classic" },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Camille R.",
    quote:
      "The huggies have not left my ears in three months. They look like fine jewelry, and the gold has not faded once.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sienna L.",
    quote:
      "I gifted the Royal Heirloom set to my sister and she actually cried. The packaging alone feels like a luxury house.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Naomi K.",
    quote:
      "Finally a brand that strikes the balance — modern, quiet, but unmistakably elevated. The lace earrings are art.",
    rating: 5,
  },
];

export const REELS = [
  {
    id: "reel-1",
    caption: "Layered for golden hour",
    queryDesc: "reel-desc-1",
    queryTitle: "reel-title-1",
  },
  {
    id: "reel-2",
    caption: "Everyday with the huggies",
    queryDesc: "reel-desc-2",
    queryTitle: "reel-title-2",
  },
  {
    id: "reel-3",
    caption: "An evening, softly lit",
    queryDesc: "reel-desc-3",
    queryTitle: "reel-title-3",
  },
  {
    id: "reel-4",
    caption: "The lace, up close",
    queryDesc: "reel-desc-4",
    queryTitle: "reel-title-4",
  },
  {
    id: "reel-5",
    caption: "Heirloom, unboxed",
    queryDesc: "reel-desc-5",
    queryTitle: "reel-title-5",
  },
  {
    id: "reel-6",
    caption: "Gold, on linen",
    queryDesc: "reel-desc-6",
    queryTitle: "reel-title-6",
  },
];

export const findProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
