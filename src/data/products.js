export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    rating: 4.9,
    reviews: 214,
    isBestseller: true,
    description:
      "A sculptural ear cuff that wraps the ear in warm 18k gold, finished with a single hand-set crystal that catches the light with every turn. No piercing required — just slip it on and glow.",
    details: [
      "18k gold plated over recycled brass",
      "Hand-set cubic zirconia crystal",
      "Adjustable fit, no piercing needed",
      "Sold as a single cuff",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    rating: 4.8,
    reviews: 167,
    isBestseller: true,
    description:
      "A garden in bloom, captured in crystal. Delicate multicolor stones are arranged along a fine gold chain — a statement that stays soft, feminine, and endlessly wearable.",
    details: [
      "18k gold plated fine chain, 16\" + 2\" extender",
      "Multicolor hand-set crystals",
      "Lobster clasp closure",
      "Hypoallergenic, nickel-free",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    rating: 5.0,
    reviews: 321,
    isBestseller: true,
    description:
      "The everyday essential, elevated. These polished dome huggies hug the lobe in molten 18k gold — weightless enough for all day, bold enough to be noticed.",
    details: [
      "18k gold plated over sterling silver base",
      "High-polish dome finish",
      "Secure hinged closure",
      "Hypoallergenic, nickel-free",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    rating: 4.7,
    reviews: 98,
    isBestseller: true,
    description:
      "Inspired by vintage lacework, these filigree drops are hand-textured to shimmer like woven gold thread. Romantic, heirloom-feeling, and surprisingly light.",
    details: [
      "18k gold plated with hand-textured filigree",
      "Drop length: 38mm",
      "Secure lever-back closure",
      "Hypoallergenic, nickel-free",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: "18k-gold",
    rating: 4.9,
    reviews: 142,
    isBestseller: true,
    description:
      "Our signature gift. A matching earring and necklace pairing, nestled in the Velmora heirloom gift box with a hand-tied ribbon. Ready to give — or to keep.",
    details: [
      "Coordinated huggie earrings + pendant necklace",
      "18k gold plated, hand-finished",
      "Includes signature Velmora gift box",
      "Hypoallergenic, nickel-free",
    ],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const formatPrice = (value) => `$${value.toFixed(0)}`;
