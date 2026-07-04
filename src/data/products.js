// Seed product data for Velmora Fine Jewelry.
// Each product carries multiple "lifestyle" and "alternate" SVG illustrations
// that are deterministic, elegant, and feel like editorial placeholders.
// Replace these with real assets later — the shape of the data won't change.

import {
  vividAuraSVG,
  majesticFloraSVG,
  goldenSphereSVG,
  amberLaceSVG,
  royalHeirloomSVG,
  heroEarringSVG,
  heroNecklaceSVG,
  heroHuggiesSVG,
  categoryEarringsSVG,
  categoryNecklacesSVG,
  categoryHuggiesSVG,
  ugcEarSVG,
  ugcNeckSVG,
  ugcHuggieSVG,
  ugcEar2SVG,
  ugcNeck2SVG,
  ugcHuggie2SVG,
  brandStorySVG,
  heroCloseSVG,
} from "./illustrations.jsx";

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const materials = [
  "18K Gold Plated",
  "Sterling Silver",
  "Hypoallergenic",
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 132,
    tone: "gold",
    material: "18K Gold Plated",
    shortDescription:
      "A whisper-light ear cuff with a single crystal accent. Worn alone or stacked.",
    description:
      "The Vivid Aura Jewels ear cuff traces the curve of the ear with a slim gold band, finished with a single, hand-set crystal that catches the light from every angle. Designed to wear comfortably from morning to evening — no piercing required.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Cubic zirconia accent. Nickel-free and lead-free.",
    care: "Remove before showering, swimming, or applying lotions. Store dry in the pouch provided. Wipe gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
    illustrations: {
      primary: vividAuraSVG({ variant: "primary" }),
      alt: vividAuraSVG({ variant: "alt" }),
    },
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 218,
    tone: "gold",
    material: "18K Gold Plated",
    shortDescription:
      "A multicolor floral crystal pendant on a fine cable chain. Romance, refined.",
    description:
      "Inspired by heirloom botanical jewelry, the Majestic Flora Nectar pendant is hand-set with five faceted crystals in soft amber, sage, and pearl. Suspended from a fine cable chain that adjusts from 16 to 18 inches.",
    materials:
      "18K gold plated brass chain and setting. Multi-tone crystal cluster pendant. Hypoallergenic.",
    care: "Avoid contact with perfume and water. Store flat. Wipe with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    illustrations: {
      primary: majesticFloraSVG({ variant: "primary" }),
      alt: majesticFloraSVG({ variant: "alt" }),
    },
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 304,
    tone: "gold",
    material: "18K Gold Plated",
    shortDescription:
      "A chunky gold dome huggie with just the right weight. The everyday signature.",
    description:
      "The Golden Sphere Huggies are the pair you'll reach for daily. A polished gold dome sits on a clean hinge closure — substantial in the hand, weightless on the ear. Sold as a pair.",
    materials:
      "18K gold plated over a sterling silver post. Hypoallergenic and tarnish-resistant coating.",
    care: "Remove before sleeping and showering. Buff occasionally with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    illustrations: {
      primary: goldenSphereSVG({ variant: "primary" }),
      alt: goldenSphereSVG({ variant: "alt" }),
    },
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.9,
    reviews: 176,
    tone: "gold",
    material: "18K Gold Plated",
    shortDescription:
      "Textured gold filigree in a delicate drop. The detail does the talking.",
    description:
      "The Amber Lace drop earrings are cast in fine filigree — openwork, light, and shadowed like lace against the skin. Each pair is hand-finished, so no two are exactly alike.",
    materials:
      "18K gold plated brass with sterling silver posts. Hypoallergenic.",
    care: "Store in the suede pouch provided. Avoid perfume and water contact.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces.",
    illustrations: {
      primary: amberLaceSVG({ variant: "primary" }),
      alt: amberLaceSVG({ variant: "alt" }),
    },
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    rating: 5.0,
    reviews: 89,
    tone: "gold",
    material: "18K Gold Plated",
    shortDescription:
      "A gift-boxed earring and necklace set. For the moments that matter most.",
    description:
      "The Royal Heirloom Set pairs our most-loved stud with a matching delicate chain — both hand-finished in 18K gold plating. Presented in our signature cream linen box with a handwritten card.",
    materials:
      "18K gold plated brass. Hypoallergenic. Sterling silver posts on the studs.",
    care: "Remove before water exposure. Store dry. Polishing cloth included.",
    shipping:
      "Free worldwide shipping. 30-day returns. Gift receipts included on request.",
    illustrations: {
      primary: royalHeirloomSVG({ variant: "primary" }),
      alt: royalHeirloomSVG({ variant: "alt" }),
    },
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) => {
  const current = getProductById(id);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      // Same category first
      if (a.category === current.category && b.category !== current.category) return -1;
      if (b.category === current.category && a.category !== current.category) return 1;
      return 0;
    })
    .slice(0, limit);
};

// Static editorial imagery references (used on Home, not products).
export const homeImagery = {
  hero: heroCloseSVG(),
  brandStory: brandStorySVG(),
  categories: {
    earrings: categoryEarringsSVG(),
    necklaces: categoryNecklacesSVG(),
    huggies: categoryHuggiesSVG(),
  },
  // Hero category "shapes" for the home hero feature ring (not used in v1, kept for future)
  heroShapes: {
    earrings: heroEarringSVG(),
    necklaces: heroNecklaceSVG(),
    huggies: heroHuggiesSVG(),
  },
};

// UGC reel cards — vertical 9:16 stylized "wearer" tiles.
export const ugcCards = [
  { id: "ugc-1", caption: "stacked with intention", tone: "Ear stack", illo: ugcEarSVG() },
  { id: "ugc-2", caption: "the everyday huggie", tone: "Golden Sphere", illo: ugcHuggieSVG() },
  { id: "ugc-3", caption: "caught in the light", tone: "Flora Nectar", illo: ugcNeckSVG() },
  { id: "ugc-4", caption: "lace against skin", tone: "Amber Lace", illo: ugcEar2SVG() },
  { id: "ugc-5", caption: "the heirloom edit", tone: "Royal Set", illo: ugcNeck2SVG() },
  { id: "ugc-6", caption: "soft, warm, always", tone: "Signature", illo: ugcHuggie2SVG() },
];

export const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    quote:
      "I've worn my Golden Sphere Huggies almost every day for six months. The plating hasn't dulled once.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya S.",
    quote:
      "Bought the Flora Nectar pendant for my sister's birthday. The box, the card, the piece — it felt like a real heirloom.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Naomi K.",
    quote:
      "Quiet luxury that doesn't try too hard. Exactly what I wanted from demi-fine.",
    rating: 5,
  },
];

export const trustItems = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];
