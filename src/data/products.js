// Seed product catalog for Velmora Fine Jewelry.
// All images are loaded via the data-strk-img runtime stock system.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff · 18K Gold Plated",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    reviews: 128,
    cartImgId: "cart-thumb-vivid-aura",
    cartNameId: "cart-line-vivid-aura-name",
    cartEyebrowId: "cart-line-vivid-aura-eyebrow",
    description:
      "An ear-catching cuff sculpted to wrap the ear with a single, hand-set crystal accent. Lightweight, hypoallergenic, made to layer.",
    details: [
      "18K gold plated over brass",
      "Surgical-steel hypoallergenic post",
      "Single handset crystal",
      "Water-resistant finish",
    ],
    care: [
      "Remove before showering or swimming",
      "Store in the suede pouch provided",
      "Wipe gently with the polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–2 business days",
    ],
  },
  {
    id: "majestic-flora",
    name: "Majestic Flora Nectar",
    eyebrow: "Floral Crystal Necklace · 18K Gold Plated",
    price: 68,
    category: "necklaces",
    material: "crystal",
    tone: "gold",
    rating: 4.8,
    cartImgId: "cart-thumb-majestic-flora",
    cartNameId: "cart-line-majestic-flora-name",
    cartEyebrowId: "cart-line-majestic-flora-eyebrow",
    reviews: 96,
    description:
      "A scattered bouquet of multicolor crystals hand-set on a delicate 18K gold-plated chain. Designed to sit just below the collarbone.",
    details: [
      "18K gold plated chain, 16” with 2” extender",
      "Lobster clasp closure",
      "Hand-set multicolor crystals",
    ],
    care: [
      "Avoid contact with perfume and lotion",
      "Store flat to preserve chain shape",
      "Wipe with a soft, dry cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–2 business days",
    ],
  },
  {
    id: "golden-sphere",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies · 18K Gold Plated",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    rating: 5.0,
    cartImgId: "cart-thumb-golden-sphere",
    cartNameId: "cart-line-golden-sphere-name",
    cartEyebrowId: "cart-line-golden-sphere-eyebrow",
    reviews: 214,
    description:
      "A chunky gold dome huggie with a satisfying weight. The everyday staple, finished in 18K gold plating for a soft, brushed glow.",
    details: [
      "18K gold plated over brass",
      "10mm outer diameter",
      "Hinged click closure",
      "Hypoallergenic",
    ],
    care: [
      "Remove before showering or sleeping",
      "Store in the suede pouch provided",
      "Wipe gently with the polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–2 business days",
    ],
  },
  {
    id: "amber-lace",
    name: "Amber Lace Earrings",
    eyebrow: "Drop Earrings · 18K Gold Plated",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    cartImgId: "cart-thumb-amber-lace",
    cartNameId: "cart-line-amber-lace-name",
    cartEyebrowId: "cart-line-amber-lace-eyebrow",
    reviews: 72,
    description:
      "Textured filigree drops cast in warm gold, with movement that catches the light at every turn. A modern heirloom.",
    details: [
      "18K gold plated over brass",
      "1.5” drop length",
      "Hypoallergenic post",
    ],
    care: [
      "Remove before showering or swimming",
      "Store in the suede pouch provided",
      "Wipe gently with the polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–2 business days",
    ],
  },
  {
    id: "royal-heirloom",
    name: "Royal Heirloom Set",
    eyebrow: "Earring + Necklace Set · Gift Boxed",
    price: 95,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    rating: 4.9,
    cartImgId: "cart-thumb-royal-heirloom",
    cartNameId: "cart-line-royal-heirloom-name",
    cartEyebrowId: "cart-line-royal-heirloom-eyebrow",
    reviews: 41,
    description:
      "A pair of petite drop earrings and a delicate chain, presented together in our keepsake gift box. Made to be gifted — and to be kept.",
    details: [
      "18K gold plated over brass",
      "Earring + 16” chain necklace",
      "Suede-lined keepsake gift box",
    ],
    care: [
      "Remove before showering or swimming",
      "Store in the gift box when not worn",
      "Wipe gently with the polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80",
      "30-day returns, no questions asked",
      "Ships in 1–2 business days",
    ],
  },
];

// Convenience getters
export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
export const getRelatedProducts = (id, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
