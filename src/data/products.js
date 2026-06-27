// Velmora Fine Jewelry — seed catalog
// Each product has 2 image variants (so product cards can crossfade on hover)
// plus category / material / variant data used by filters and the PDP.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff",
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    description:
      "A delicate gold ear cuff set with a single crystal accent — designed to catch the light at every turn. Stack it, or wear it solo.",
    details: [
      "18K gold plated over a brass core",
      "Set with a handset crystal",
      "No piercing required — gentle clip fit",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Avoid contact with water, perfume, and lotion",
      "Remove before sleeping and showering",
      "Store in the velvet pouch provided",
      "Wipe gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    related: ["golden-sphere-huggies", "amber-lace-earrings"],
    imageQueries: {
      primary: "gold ear cuff with crystal accent on warm beige background",
      secondary: "gold ear cuff with crystal accent closeup macro on skin",
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Floral Crystal Necklace",
    price: 68,
    rating: 4.8,
    reviewCount: 214,
    category: "necklaces",
    material: "18k-gold",
    tone: "gold",
    description:
      "A multicolor floral crystal pendant on a fine cable chain — a piece that holds its own with denim, but loves an evening neckline.",
    details: [
      "18K gold plated chain, 18 inch with 2 inch extender",
      "Hand-set multicolor crystals",
      "Lobster clasp closure",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Remove before bathing, swimming, or exercising",
      "Avoid spraying perfume directly on the piece",
      "Store flat in the original pouch to prevent tangling",
      "Wipe with the polishing cloth provided",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Each piece is hand-finished and inspected before shipping.",
    related: ["vivid-aura-jewels", "royal-heirloom-set"],
    imageQueries: {
      primary: "multicolor floral crystal pendant necklace on woman neck editorial",
      secondary: "gold chain with multicolor crystal flowers closeup jewelry",
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Chunky Dome Huggies",
    price: 38,
    rating: 4.9,
    reviewCount: 312,
    category: "huggies",
    material: "18k-gold",
    tone: "gold",
    description:
      "Our most-loved huggies. A chunky gold dome that hugs the lobe — weighty enough to feel real, refined enough to wear daily.",
    details: [
      "18K gold plated over a brass core",
      "Hinged click-top closure for secure fit",
      "Hypoallergenic and nickel-free",
      "Sold as a pair",
    ],
    care: [
      "Remove before showering or swimming",
      "Wipe gently with the included polishing cloth",
      "Store in the velvet pouch to prevent scratches",
      "Avoid contact with harsh chemicals",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Available in both gold and silver tone.",
    related: ["amber-lace-earrings", "vivid-aura-jewels"],
    imageQueries: {
      primary: "chunky gold dome huggie earrings on model ear editorial closeup",
      secondary: "gold sphere huggie earrings on neutral linen background product",
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Filigree Drop",
    price: 54,
    rating: 4.7,
    reviewCount: 96,
    category: "earrings",
    material: "18k-gold",
    tone: "gold",
    description:
      "Textured gold filigree drop earrings that move with you. Light on the ear, heavy on the romance.",
    details: [
      "18K gold plated over a brass core",
      "Textured filigree detail, hand-finished",
      "Leverback closure for secure wear",
      "Hypoallergenic and nickel-free",
    ],
    care: [
      "Remove before sleeping, showering, or swimming",
      "Avoid contact with perfume and lotion",
      "Store in the original box to maintain shape",
      "Polish gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    related: ["majestic-flora-nectar", "golden-sphere-huggies"],
    imageQueries: {
      primary: "gold filigree drop earrings on woman editorial portrait warm",
      secondary: "textured gold filigree drop earrings flat lay on linen",
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Earring + Necklace Set",
    price: 95,
    rating: 5.0,
    reviewCount: 47,
    category: "sets",
    material: "18k-gold",
    tone: "gold",
    description:
      "Our most-loved earring and necklace pairing, presented in a signature gift box. A ready-to-give heirloom, made modern.",
    details: [
      "Set includes one pair of earrings and one necklace",
      "18K gold plated over a brass core",
      "Hypoallergenic and nickel-free",
      "Arrives in a signature velvet-lined gift box",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid contact with perfume, lotion, and harsh chemicals",
      "Store in the original box between wears",
      "Polish gently with the included cloth",
    ],
    shipping:
      "Free worldwide shipping. Gift wrapping available at checkout. 30-day returns.",
    related: ["majestic-flora-nectar", "vivid-aura-jewels"],
    imageQueries: {
      primary: "gold earring and necklace jewelry set in velvet gift box editorial",
      secondary: "gold jewelry gift set with ribbon on neutral background still life",
    },
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  const relatedIds = product.related || [];
  const related = relatedIds.map((id) => getProductById(id)).filter(Boolean);
  // Fill with other products in the same category if not enough related
  if (related.length < limit) {
    const sameCat = PRODUCTS.filter(
      (p) => p.category === product.category && !related.find((r) => r.id === p.id) && p.id !== product.id
    );
    related.push(...sameCat.slice(0, limit - related.length));
  }
  return related.slice(0, limit);
}

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The packaging alone made me tear up — the pieces themselves are stunning. She hasn't taken them off.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    quote:
      "Finally, demi-fine jewelry that doesn't look or feel cheap. The Golden Sphere Huggies are weighty in the best way. I'm on my second pair in silver.",
  },
  {
    name: "Hannah J.",
    rating: 5,
    quote:
      "Quietly my favorite brand. The Floral Nectar necklace is the only thing I reach for, whether I'm in a tee or a dress. It just works.",
  },
];

export const UGC_REELS = [
  {
    id: "ugc-1",
    caption: "Stacked, never sidelined.",
    query: "woman wearing gold ear cuff and huggies editorial closeup",
  },
  {
    id: "ugc-2",
    caption: "Morning light, every day.",
    query: "woman wearing gold floral necklace morning editorial portrait",
  },
  {
    id: "ugc-3",
    caption: "The everyday heirloom.",
    query: "woman wearing chunky gold huggie earrings editorial portrait",
  },
  {
    id: "ugc-4",
    caption: "Glow, in three layers.",
    query: "woman layering gold necklaces editorial closeup portrait",
  },
  {
    id: "ugc-5",
    caption: "The bridal shower edit.",
    query: "woman wearing gold filigree drop earrings bridal editorial",
  },
  {
    id: "ugc-6",
    caption: "Caught in the light.",
    query: "woman gold jewelry editorial portrait warm light",
  },
];

export const CATEGORIES_TILE = [
  {
    id: "earrings",
    label: "Earrings",
    query: "gold earrings editorial product flat lay on neutral linen",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "gold necklaces layered editorial product on neutral surface",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie earrings editorial closeup product on neutral",
  },
];
