// Seed product catalog for Velmora Fine Jewelry
// Stable IDs are used both for routes and as data-strk-img-id values.
// Each product includes a hover-reveal second image and a 3-image gallery for the PDP.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff",
    category: "earrings",
    material: "18k-gold-plated",
    price: 42,
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    shortDescription:
      "A delicate gold ear cuff set with a single crystal accent — the kind of quiet sparkle that earns compliments without asking.",
    description:
      "Sculpted in 18K gold-plated brass, the Vivid Aura ear cuff catches light from a single hand-set crystal. Designed to hug the cartilage without piercing, it slips on in seconds and stays comfortably in place from morning coffee to last call.",
    materialsAndCare: [
      "18K gold-plated brass with a hand-set crystal",
      "Hypoallergenic and nickel-free",
      "Tarnish-resistant coating; remove before showering or swimming",
      "Store in the included velvet pouch to keep its finish",
    ],
    shippingAndReturns: [
      "Free worldwide shipping on orders over $75",
      "30-day returns — unworn, in original packaging",
      "Ships within 2 business days from our atelier",
    ],
    details: ["No piercing required", "One size; adjustable curve", "Velvet pouch included"],
    // Two imagery slots for the card hover swap
    images: [
      { ratio: "4x5", ratioKey: "4x5", query: "Vivid Aura ear cuff" },
      { ratio: "4x5", ratioKey: "4x5", query: "Vivid Aura ear cuff worn" },
    ],
    // PDP gallery
    gallery: [
      { ratio: "4x5", ratioKey: "4x5", query: "Vivid Aura ear cuff" },
      { ratio: "4x5", ratioKey: "4x5", query: "Vivid Aura ear cuff side" },
      { ratio: "4x5", ratioKey: "4x5", query: "Vivid Aura ear cuff macro" },
    ],
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    stock: 24,
    related: ["golden-sphere-huggies", "amber-lace-earrings"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Statement Necklace",
    category: "necklaces",
    material: "18k-gold-plated",
    price: 68,
    rating: 4.9,
    reviewCount: 184,
    badge: "New",
    shortDescription:
      "A multicolor floral crystal cluster on a whisper-fine chain. Heirloom detail, modern weightlessness.",
    description:
      "Inspired by a grandmother's pressed garden, the Majestic Flora Nectar clusters hand-set crystals in soft botanical tones along a barely-there chain. Worn solo, it carries a room. Layered, it disappears into your ritual.",
    materialsAndCare: [
      "18K gold-plated brass chain and setting",
      "Hand-set multicolor crystals",
      "16 + 2 inch extender; lobster clasp",
      "Wipe gently with a soft, dry cloth — no abrasives",
    ],
    shippingAndReturns: [
      "Free worldwide shipping on orders over $75",
      "30-day returns — unworn, in original packaging",
      "Ships within 2 business days from our atelier",
    ],
    details: ["Adjustable 16–18 in", "Lobster clasp closure", "Gift box included"],
    images: [
      { ratio: "4x5", ratioKey: "4x5", query: "Majestic Flora Nectar necklace" },
      { ratio: "4x5", ratioKey: "4x5", query: "Majestic Flora Nectar worn" },
    ],
    gallery: [
      { ratio: "4x5", ratioKey: "4x5", query: "Majestic Flora Nectar necklace" },
      { ratio: "4x5", ratioKey: "4x5", query: "Majestic Flora Nectar on neckline" },
      { ratio: "4x5", ratioKey: "4x5", query: "Majestic Flora Nectar macro detail" },
    ],
    variants: [
      { id: "gold", label: "Gold" },
    ],
    stock: 12,
    related: ["royal-heirloom-set", "vivid-aura-jewels"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies",
    category: "huggies",
    material: "18k-gold-plated",
    price: 38,
    rating: 4.7,
    reviewCount: 521,
    badge: "Bestseller",
    shortDescription:
      "Chunky gold dome huggies with a satisfying weight. The everyday polish that always looks finished.",
    description:
      "Sculpted as a continuous gold dome with a secure hinged closure, the Golden Sphere Huggies carry presence without weight. The polished interior glides comfortably, while the brushed outside catches light like a tiny sunrise.",
    materialsAndCare: [
      "18K gold-plated brass; hypoallergenic post",
      "Hinged snap closure",
      "Avoid perfume, lotion, and water contact",
      "Store flat in the included pouch",
    ],
    shippingAndReturns: [
      "Free worldwide shipping on orders over $75",
      "30-day returns — unworn, in original packaging",
      "Ships within 2 business days from our atelier",
    ],
    details: ["Inner diameter: 10mm", "Hinged snap closure", "Sold as a pair"],
    images: [
      { ratio: "4x5", ratioKey: "4x5", query: "Golden Sphere Huggies earrings" },
      { ratio: "4x5", ratioKey: "4x5", query: "Golden Sphere Huggies worn" },
    ],
    gallery: [
      { ratio: "4x5", ratioKey: "4x5", query: "Golden Sphere Huggies pair" },
      { ratio: "4x5", ratioKey: "4x5", query: "Golden Sphere Huggies side" },
      { ratio: "4x5", ratioKey: "4x5", query: "Golden Sphere Huggies macro" },
    ],
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    stock: 36,
    related: ["amber-lace-earrings", "vivid-aura-jewels"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Drop Earrings",
    category: "earrings",
    material: "18k-gold-plated",
    price: 54,
    rating: 4.9,
    reviewCount: 246,
    badge: "Editor’s Pick",
    shortDescription:
      "Textured gold filigree drops with movement and warmth — like sunlight through lace.",
    description:
      "Each drop is pressed from a hand-engraved die, giving the lacework its quiet irregularity. The amber undertone in the gold plating warms every complexion, and the gentle sway gives them a soft, considered motion.",
    materialsAndCare: [
      "18K gold-plated brass with pressed filigree",
      "Hypoallergenic post and butterfly back",
      "Length: 1.5 in",
      "Wipe with a dry cloth; store flat",
    ],
    shippingAndReturns: [
      "Free worldwide shipping on orders over $75",
      "30-day returns — unworn, in original packaging",
      "Ships within 2 business days from our atelier",
    ],
    details: ["Drop length: 1.5 in", "Lightweight filigree", "Sold as a pair"],
    images: [
      { ratio: "4x5", ratioKey: "4x5", query: "Amber Lace drop earrings" },
      { ratio: "4x5", ratioKey: "4x5", query: "Amber Lace drop earrings worn" },
    ],
    gallery: [
      { ratio: "4x5", ratioKey: "4x5", query: "Amber Lace drop earrings" },
      { ratio: "4x5", ratioKey: "4x5", query: "Amber Lace drop earrings side" },
      { ratio: "4x5", ratioKey: "4x5", query: "Amber Lace drop earrings macro" },
    ],
    variants: [
      { id: "gold", label: "Gold" },
    ],
    stock: 18,
    related: ["vivid-aura-jewels", "golden-sphere-huggies"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Gift Set",
    category: "earrings",
    material: "gold-vermeil",
    price: 95,
    rating: 5.0,
    reviewCount: 92,
    badge: "Gift-Ready",
    shortDescription:
      "A coordinated earring and necklace set in a keepsake gift box — the present that always fits.",
    description:
      "The Royal Heirloom Set pairs our most-loved silhouette with a delicate pendant on a fine chain. Finished in a heavier gold vermeil for longevity, it arrives in a keepsake velvet box with a hand-written card.",
    materialsAndCare: [
      "Gold vermeil over sterling silver",
      "Pendant on 16 + 2 in chain; matching stud earrings",
      "Remove before sleeping, showering, or swimming",
      "Buff gently with the included polishing cloth",
    ],
    shippingAndReturns: [
      "Free worldwide shipping on orders over $75",
      "30-day returns — unworn, in original packaging",
      "Ships within 2 business days from our atelier",
      "Gift wrap and hand-written card included",
    ],
    details: ["Earring + necklace set", "Gift box included", "Hand-written card"],
    images: [
      { ratio: "4x5", ratioKey: "4x5", query: "Royal Heirloom gift set box" },
      { ratio: "4x5", ratioKey: "4x5", query: "Royal Heirloom set worn" },
    ],
    gallery: [
      { ratio: "4x5", ratioKey: "4x5", query: "Royal Heirloom gift set box" },
      { ratio: "4x5", ratioKey: "4x5", query: "Royal Heirloom set flat lay" },
      { ratio: "4x5", ratioKey: "4x5", query: "Royal Heirloom set worn" },
    ],
    variants: [
      { id: "gold", label: "Gold" },
    ],
    stock: 8,
    related: ["majestic-flora-nectar", "golden-sphere-huggies"],
  },
];

export function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function relatedProducts(product, limit = 4) {
  if (!product) return PRODUCTS.slice(0, limit);
  const ids = new Set(product.related || []);
  const direct = PRODUCTS.filter((p) => ids.has(p.id));
  const rest = PRODUCTS.filter((p) => p.id !== product.id && !ids.has(p.id));
  return [...direct, ...rest].slice(0, limit);
}