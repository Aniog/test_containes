export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.9,
    reviews: 214,
    badge: "Bestseller",
    description:
      "A sculptural ear cuff that hugs the ear in warm 18K gold plating, finished with a single handset crystal that catches the light with every turn. No piercing required — simply slide and adjust for a custom fit.",
    details: [
      "18K gold plated over recycled brass",
      "Handset AAA cubic zirconia crystal",
      "Adjustable, no piercing needed",
      "Sold as a single cuff",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.8,
    reviews: 167,
    badge: "New",
    description:
      "A garden in bloom, captured in crystal. Delicate floral stations in honey, blush and champagne tones trail along a fine 18K gold plated chain — an heirloom-feeling piece made for every day.",
    details: [
      "18K gold plated over recycled brass",
      "Multicolor handset crystals",
      '16" chain with 2" extender',
      "Lobster clasp closure",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 5.0,
    reviews: 342,
    badge: "Bestseller",
    description:
      "Our signature dome huggie — softly rounded, quietly bold. Polished to a mirror finish in 18K gold plating, they sit close to the lobe and go with absolutely everything, from silk to Sunday denim.",
    details: [
      "18K gold plated over recycled brass",
      "Hypoallergenic, nickel-free posts",
      "Hinged snap closure",
      "12mm diameter, lightweight feel",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.7,
    reviews: 98,
    badge: null,
    description:
      "Inspired by vintage lace, these filigree drops are hand-textured to shimmer softly in candlelight. Featherlight on the ear, dramatic in the frame — the pair you reach for when the evening calls.",
    details: [
      "18K gold plated over recycled brass",
      "Hand-textured filigree",
      "Hypoallergenic, nickel-free hooks",
      "38mm drop length",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    compareAt: 116,
    category: "sets",
    material: "gold",
    rating: 4.9,
    reviews: 121,
    badge: "Gift Ready",
    description:
      "A perfectly paired earring and necklace set, nestled in our signature linen gift box. Understated enough for daily wear, special enough to mark the moment — the gift that never misses.",
    details: [
      "18K gold plated over recycled brass",
      "Includes huggie earrings + pendant necklace",
      "Signature linen gift box included",
      "Hypoallergenic, nickel-free",
    ],
  },
];

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const formatPrice = (value) => `$${value.toFixed(0)}`;

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
