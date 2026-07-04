// Velmora Fine Jewelry — seed catalog.
// All copy is editorial and intentional. Imagery is generated from text references.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "sets", label: "Sets" },
];

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Gold Vermeil"];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    badge: "Bestseller",
    shortDescription:
      "A whisper-light ear cuff anchored by a single hand-set crystal — designed for the lobe that wants to be noticed.",
    longDescription:
      "The Vivid Aura ear cuff is sculpted to drape along the ear's natural curve, finished in 18K gold plating over a hypoallergenic brass core. A single faceted crystal catches warm light at every angle, creating the soft, lived-in sparkle that defines the Velmora look. No piercing required.",
    materials:
      "18K gold plated brass core. Hand-set crystal. Hypoallergenic and nickel-free. Tarnish-resistant coating.",
    care: "Store in the included velvet pouch. Avoid contact with perfume, chlorine, and lotions. Wipe gently with the polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Carbon-neutral delivery.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#C9A86A" },
      { id: "silver", label: "Silver", swatch: "#D7D2CB" },
    ],
    defaultVariant: "gold",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
    imgId1: "vivid-aura-main-1",
    imgId2: "vivid-aura-hover-2",
    related: ["majestic-flora-nectar", "golden-sphere-huggies", "amber-lace-earrings"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.8,
    reviewCount: 92,
    badge: "New",
    shortDescription:
      "A delicate chain adorned with multicolour floral crystals — a small garden resting at the collarbone.",
    longDescription:
      "Inspired by botanical still-lifes, the Majestic Flora Nectar necklace layers five hand-set floral crystals in soft champagne, blush, and citrine tones along a 16–18 inch adjustable chain. Each stone is faceted to catch candlelight. Lightweight, fluid, made to be worn every day.",
    materials:
      "18K gold plated brass chain. Hand-set multicolor crystals. Lead-free and nickel-free. Adjustable extender.",
    care: "Remove before showering or sleeping. Polish with a soft dry cloth. Avoid contact with body oils and perfume.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Arrives in our signature ivory gift box.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#C9A86A" },
      { id: "silver", label: "Silver", swatch: "#D7D2CB" },
    ],
    defaultVariant: "gold",
    titleId: "product-flora-title",
    descId: "product-flora-desc",
    imgId1: "flora-main-1",
    imgId2: "flora-hover-2",
    related: ["vivid-aura-jewels", "royal-heirloom-set", "amber-lace-earrings"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.9,
    reviewCount: 211,
    badge: "Bestseller",
    shortDescription:
      "Chunky dome huggies in 18K gold — a confident everyday silhouette that pairs with absolutely everything.",
    longDescription:
      "Our Golden Sphere huggies are cast as a solid domed silhouette, polished by hand until they catch light like small suns. The hinge closes with a satisfying click and sits flush to the lobe for a clean, modern line. Sized for a snug, secure fit — the huggie that started it all.",
    materials:
      "18K gold plated over a stainless steel core. Hypoallergenic, tarnish-resistant, water-friendly finish.",
    care: "Wear them everywhere. Rinse with warm water and pat dry. Store flat to maintain the dome shape.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Ships in 1–2 business days.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#C9A86A" },
      { id: "silver", label: "Silver", swatch: "#D7D2CB" },
    ],
    defaultVariant: "gold",
    titleId: "product-sphere-title",
    descId: "product-sphere-desc",
    imgId1: "sphere-main-1",
    imgId2: "sphere-hover-2",
    related: ["amber-lace-earrings", "vivid-aura-jewels", "majestic-flora-nectar"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.7,
    reviewCount: 76,
    badge: "Limited",
    shortDescription:
      "Textured gold filigree drops — vintage lacework reinterpreted in demi-fine 18K gold.",
    longDescription:
      "The Amber Lace drops reference heirloom lace patterns, hand-finished in 18K gold plating to bring warmth and weight to the silhouette. They move softly with the wearer, casting a delicate filigree shadow. Light enough for day, expressive enough for evening.",
    materials:
      "18K gold plated brass. Hypoallergenic post and butterfly back. Lead-free, nickel-free.",
    care: "Store flat in the original pouch. Avoid spraying perfume directly. Polish gently with a microfiber cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Signature ivory gift box included.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#C9A86A" },
    ],
    defaultVariant: "gold",
    titleId: "product-amber-title",
    descId: "product-amber-desc",
    imgId1: "amber-main-1",
    imgId2: "amber-hover-2",
    related: ["vivid-aura-jewels", "golden-sphere-huggies", "royal-heirloom-set"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviewCount: 54,
    badge: "Gifting",
    shortDescription:
      "A matched earring and necklace set, gift-boxed and ready to be remembered — for her, for you, for them.",
    longDescription:
      "The Royal Heirloom set pairs our Golden Sphere huggies with a delicate pendant on a 16–18 inch chain, both finished in matching 18K gold plating. The set arrives in our signature ivory gift box with a hand-written card option at checkout. The most-loved gift of the season.",
    materials:
      "18K gold plated brass and stainless steel. Hypoallergenic, tarnish-resistant. Includes velvet pouch and gift box.",
    care: "Store pieces separately in the included pouches. Remove before showering. Polish with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Gift wrap and handwritten card available at checkout.",
    variants: [
      { id: "gold", label: "Gold", swatch: "#C9A86A" },
      { id: "silver", label: "Silver", swatch: "#D7D2CB" },
    ],
    defaultVariant: "gold",
    titleId: "product-heirloom-title",
    descId: "product-heirloom-desc",
    imgId1: "heirloom-main-1",
    imgId2: "heirloom-hover-2",
    related: ["golden-sphere-huggies", "majestic-flora-nectar", "amber-lace-earrings"],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getProductsByIds(ids = []) {
  return ids.map((id) => getProductById(id)).filter(Boolean);
}

export function getProductsByCategory(slug) {
  if (!slug || slug === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === slug);
}

export { slugify };
