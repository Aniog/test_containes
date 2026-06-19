// Seed product data for the Velmora storefront.
// Images use elegant placeholder gradients evoking warm gold on dark.
// Each product has a primary (hero) image and a hover (lifestyle/alt) image.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "sets", label: "Sets" },
];

export const MATERIALS = [
  { slug: "18k-gold", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
  { slug: "mixed", label: "Mixed Metals" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 128,
    tagline: "Crystal accent ear cuff",
    description:
      "An ear-catching statement. The Vivid Aura Jewels ear cuff wraps the ear with a soft brushed-gold band, finished with a single hand-set crystal that catches the light at every angle. No piercing required.",
    details: [
      "18K gold plated over a recycled brass core",
      "Single cubic zirconia crystal accent",
      "No piercing required — adjusts to fit most ears",
      "Hypoallergenic, nickel-free, lead-free",
      "Sold as a single cuff",
    ],
    materials:
      "We start with a recycled brass core and plate it in a thick layer of 18K gold — far beyond industry standard — for warmth and weight that lasts. Every crystal is hand-set by a small atelier partner in Jaipur.",
    care: [
      "Remove before showering, swimming, or exercising",
      "Avoid contact with perfume, lotion, and sunscreen",
      "Store in the included suede pouch",
      "Wipe gently with the polishing cloth to restore shine",
    ],
    shipping:
      "Free worldwide shipping on all orders. Domestic orders ship in 1–2 business days from our studio; international orders in 3–7. You will receive a tracking link by email.",
    returns:
      "We offer 30-day returns on unworn items in their original packaging. Start a return from your account or contact us at care@velmora.co. Refunds are processed within 5 business days of receipt.",
    images: [
      "vivid-aura-1",
      "vivid-aura-2",
      "vivid-aura-3",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    material: "mixed",
    rating: 4.8,
    reviewCount: 86,
    tagline: "Multicolor floral crystal necklace",
    description:
      "A garden in full bloom, cast in gold and glass. The Majestic Flora Nectar lays a delicate chain across the collarbone, with seven hand-set crystals in champagne, blush, and peridot tones — each one a different petal of the same flower.",
    details: [
      "18K gold plated chain, 16–18\" adjustable",
      "Seven hand-set colored crystals",
      "Lobster clasp closure with extender",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    materials:
      "The chain is plated in 18K gold over brass; the crystals are precision-cut colored glass. The floral cluster is set by hand and inspected before packing.",
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid contact with perfume and lotion",
      "Store flat in the suede pouch to prevent tangling",
      "Wipe gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping. Domestic orders ship in 1–2 business days; international in 3–7. Tracking is provided by email.",
    returns:
      "30-day returns on unworn items in original packaging. Email care@velmora.co to begin.",
    images: [
      "majestic-flora-1",
      "majestic-flora-2",
      "majestic-flora-3",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    material: "18k-gold",
    rating: 5.0,
    reviewCount: 214,
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Our bestselling huggie, refined. A polished gold dome sits close to the ear — chunky enough to make a statement, light enough to forget you're wearing them. A small hinge clicks them into place.",
    details: [
      "18K gold plated over brass",
      "Polished dome, 12mm outside diameter",
      "Hinged click closure",
      "Sold as a pair",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    materials:
      "Solid brass core, plated in 18K gold. The dome is hand-polished to a soft mirror finish before assembly.",
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid contact with perfume and lotion",
      "Store in the suede pouch to prevent scratches",
      "Wipe gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping. Domestic 1–2 business days, international 3–7.",
    returns:
      "30-day returns on unworn items in original packaging.",
    images: [
      "golden-sphere-1",
      "golden-sphere-2",
      "golden-sphere-3",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 92,
    tagline: "Textured gold filigree drop earrings",
    description:
      "A whisper of lace, translated into gold. The Amber Lace Earrings trace a delicate filigree pattern that catches the light through the day and glows under candlelight at night.",
    details: [
      "18K gold plated over brass",
      "Filigree pattern, hand-finished",
      "Approx 1.5\" drop length",
      "Post-and-butterfly closure",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    materials:
      "Each pair is cast, then hand-finished to bring out the filigree pattern. The post is solid for comfort on sensitive ears.",
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid contact with perfume and lotion",
      "Store flat in the suede pouch",
      "Wipe gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping. Domestic 1–2 business days, international 3–7.",
    returns:
      "30-day returns on unworn items in original packaging.",
    images: [
      "amber-lace-1",
      "amber-lace-2",
      "amber-lace-3",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    tone: "gold",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 47,
    tagline: "Gift-boxed earring + necklace set",
    description:
      "A pair made to be given — and remembered. The Royal Heirloom Set pairs our Classic Sphere huggies with a delicate chain drop, presented in our keepsake box with a hand-written card.",
    details: [
      "18K gold plated over brass",
      "Includes pair of huggies + adjustable chain",
      "Chain: 16–18\" with extender",
      "Presented in a keepsake box with card",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    materials:
      "A matched set cast and plated together, then hand-inspected and packed in our signature box.",
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid contact with perfume and lotion",
      "Store in the keepsake box",
      "Wipe gently with a soft dry cloth",
    ],
    shipping:
      "Free worldwide shipping. Gift wrapping and hand-written cards available at checkout.",
    returns:
      "30-day returns on unworn items in original packaging.",
    images: [
      "royal-heirloom-1",
      "royal-heirloom-2",
      "royal-heirloom-3",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Aria M.",
    text:
      "I've worn the Golden Sphere Huggies every single day for six months. The plating hasn't dulled at all — they still look brand new.",
    rating: 5,
  },
  {
    name: "Noor S.",
    text:
      "Bought the Royal Heirloom Set for my sister's birthday. The box, the card, the weight of the pieces — it felt like opening something passed down.",
    rating: 5,
  },
  {
    name: "Helena K.",
    text:
      "Sensitive ears and I have been at war for years. The Majestic Flora Nectar is the first necklace I forget I'm wearing. Will be back for more.",
    rating: 5,
  },
];

export const CATEGORY_TILES = [
  {
    slug: "earrings",
    label: "Earrings",
    image: "category-earrings",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    image: "category-necklaces",
  },
  {
    slug: "huggies",
    label: "Huggies",
    image: "category-huggies",
  },
];

// UGC reel cards
export const UGC_REELS = [
  {
    id: "ugc-1",
    caption: "morning with the Golden Sphere",
    creator: "@aria.m",
    image: "ugc-ear",
  },
  {
    id: "ugc-2",
    caption: "the heirloom unboxing",
    creator: "@noor.s",
    image: "ugc-set",
  },
  {
    id: "ugc-3",
    caption: "layered, always",
    creator: "@helena.k",
    image: "ugc-necklace",
  },
  {
    id: "ugc-4",
    caption: "amber lace, candlelight",
    creator: "@june.w",
    image: "ugc-drop",
  },
  {
    id: "ugc-5",
    caption: "aura, day to night",
    creator: "@maya.d",
    image: "ugc-cuff",
  },
  {
    id: "ugc-6",
    caption: "flora, in bloom",
    creator: "@lena.p",
    image: "ugc-floral",
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, limit);
  const others = PRODUCTS.filter((p) => p.id !== id);
  // Try same category first
  const sameCat = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
}

export function getBestsellers(limit = 5) {
  return [...PRODUCTS].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, limit);
}

export function formatPrice(value) {
  return `$${value.toFixed(0)}`;
}
