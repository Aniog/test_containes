// Seed product catalog for Velmora Fine Jewelry.
// Each product carries explicit ID strings used for image-tag interpolation
// so dynamic IDs always match the rendered DOM ids.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "An architectural ear cuff hand-finished in 18k gold plate, set with a single faceted crystal. No piercing needed — slips quietly into your everyday rotation.",
    price: 42,
    category: "Earrings",
    material: "18k Gold Plated",
    rating: 4.8,
    reviewCount: 214,
    variants: ["Gold", "Silver"],
    bestseller: true,
    imgIds: {
      main: "product-vivid-aura-main-9f3a1b",
      hover: "product-vivid-aura-hover-2c7d4e",
      gallery1: "product-vivid-aura-g1-5b8f2a",
      gallery2: "product-vivid-aura-g2-7d3c9e",
      gallery3: "product-vivid-aura-g3-1a6e4f",
    },
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A delicate cascade of floral crystals on a fine gold chain. Layer alone for a quiet statement, or stack with our slim chains for an editorial finish.",
    price: 68,
    category: "Necklaces",
    material: "18k Gold Plated · Crystal",
    rating: 4.9,
    reviewCount: 312,
    variants: ["Gold", "Silver"],
    bestseller: true,
    imgIds: {
      main: "product-majestic-flora-main-4e2d8c",
      hover: "product-majestic-flora-hover-6a9b3f",
      gallery1: "product-majestic-flora-g1-8c5d1e",
      gallery2: "product-majestic-flora-g2-2f7a9b",
      gallery3: "product-majestic-flora-g3-3d4c6e",
    },
    titleId: "product-majestic-flora-title",
    descId: "product-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Sculptural dome huggies with a smooth, polished finish. The kind of pair you put on once and forget you're wearing — until someone asks where they're from.",
    price: 38,
    category: "Huggies",
    material: "18k Gold Plated",
    rating: 4.7,
    reviewCount: 188,
    variants: ["Gold", "Silver"],
    bestseller: true,
    imgIds: {
      main: "product-golden-sphere-main-7b2a4d",
      hover: "product-golden-sphere-hover-9e1c5f",
      gallery1: "product-golden-sphere-g1-3a8d6c",
      gallery2: "product-golden-sphere-g2-5f2b9e",
      gallery3: "product-golden-sphere-g3-1c7d4a",
    },
    titleId: "product-golden-sphere-title",
    descId: "product-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Hand-textured filigree drops, inspired by antique European lace. Light to wear, generous in presence — a quiet conversation piece.",
    price: 54,
    category: "Earrings",
    material: "18k Gold Plated",
    rating: 4.8,
    reviewCount: 142,
    variants: ["Gold", "Silver"],
    bestseller: true,
    imgIds: {
      main: "product-amber-lace-main-2d6e8a",
      hover: "product-amber-lace-hover-4b1f3c",
      gallery1: "product-amber-lace-g1-6c9e2d",
      gallery2: "product-amber-lace-g2-8a4d5f",
      gallery3: "product-amber-lace-g3-3e7b1c",
    },
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "Our most-gifted pairing. An earring and necklace set, presented in a signature Velmora linen-lined gift box. Ready to give, ready to keep.",
    price: 95,
    category: "Sets",
    material: "18k Gold Plated · Gift Boxed",
    rating: 5.0,
    reviewCount: 96,
    variants: ["Gold", "Silver"],
    bestseller: true,
    imgIds: {
      main: "product-royal-heirloom-main-5d9a2e",
      hover: "product-royal-heirloom-hover-7f3c4b",
      gallery1: "product-royal-heirloom-g1-1b8e6d",
      gallery2: "product-royal-heirloom-g2-9c2a5f",
      gallery3: "product-royal-heirloom-g3-4d6e3a",
    },
    titleId: "product-royal-heirloom-title",
    descId: "product-royal-heirloom-desc",
  },
];

export const CATEGORIES = [
  {
    slug: "earrings",
    label: "Earrings",
    blurb: "From slim hoops to sculptural drops",
    imgId: "category-earrings-3f8a2b",
    titleId: "category-earrings-title",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    blurb: "Layer-ready chains and editorial pendants",
    imgId: "category-necklaces-7c4e9d",
    titleId: "category-necklaces-title",
  },
  {
    slug: "huggies",
    label: "Huggies",
    blurb: "The everyday-everywhere staple",
    imgId: "category-huggies-2b6d5a",
    titleId: "category-huggies-title",
  },
];

export const REELS = [
  {
    id: "reel-01",
    caption: "On her, on repeat.",
    imgId: "reel-on-her-01-8d2f4a",
    captionId: "reel-on-her-01-caption",
  },
  {
    id: "reel-02",
    caption: "Sunday mornings, gilded.",
    imgId: "reel-sunday-02-3e7c9b",
    captionId: "reel-sunday-02-caption",
  },
  {
    id: "reel-03",
    caption: "Stack, soften, repeat.",
    imgId: "reel-stack-03-6f1d8e",
    captionId: "reel-stack-03-caption",
  },
  {
    id: "reel-04",
    caption: "The gift she keeps.",
    imgId: "reel-gift-04-9b4a2c",
    captionId: "reel-gift-04-caption",
  },
  {
    id: "reel-05",
    caption: "An everyday heirloom.",
    imgId: "reel-everyday-05-2c5e7f",
    captionId: "reel-everyday-05-caption",
  },
  {
    id: "reel-06",
    caption: "Quietly hers.",
    imgId: "reel-quietly-06-4d8b1a",
    captionId: "reel-quietly-06-caption",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "These are the first demi-fine pieces I've worn every single day without taking off. The gold has held up beautifully.",
    name: "Eliza M.",
    location: "New York",
  },
  {
    id: "t2",
    quote:
      "Bought the Royal Heirloom set as a gift for my sister — the box alone made her cry. The pieces are even prettier in person.",
    name: "Priya R.",
    location: "London",
  },
  {
    id: "t3",
    quote:
      "Velmora is my secret. People constantly ask where I got my earrings. Quiet luxury, real craft, fair price.",
    name: "Sofia L.",
    location: "Paris",
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(id, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
}
