// Velmora seed products
// Each product carries explicit text-reference IDs so the stock image system
// can build queries from neighboring text reliably.

export const PRODUCTS = [
  {
    id: "vivid-aura",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 42,
    rating: 4.8,
    reviews: 214,
    blurb: "Sculpted gold ear cuff dusted with a crystal accent — wear it solo or layered.",
    description:
      "A weightless gold ear cuff finished with a single hand-set crystal. Designed to hug the upper ear without a piercing, the Vivid Aura is our most-worn everyday statement. Plated in 18K gold over recycled brass.",
    materials: ["18K gold plated recycled brass", "Hand-set crystal accent", "Hypoallergenic"],
    variants: [
      { id: "gold", label: "Gold", swatch: "#B89B6E" },
      { id: "silver", label: "Silver", swatch: "#C7C7C2" },
    ],
    badges: ["Bestseller"],
    queries: {
      // Each id below corresponds to a real DOM id rendered nearby
      heroDescId: "product-vivid-aura-blurb",
      heroTitleId: "product-vivid-aura-title",
    },
    images: [
      { id: "img-vivid-aura-1", ratio: "4x5", width: 800 },
      { id: "img-vivid-aura-2", ratio: "4x5", width: 800 },
    ],
  },
  {
    id: "majestic-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    categoryLabel: "Necklaces",
    price: 68,
    rating: 4.9,
    reviews: 168,
    blurb: "A multicolor floral crystal pendant on a delicate gold chain — quietly romantic.",
    description:
      "An heirloom-feeling pendant featuring multicolored crystal florals set on a fine 18K gold-plated chain. Adjustable from 16 to 18 inches. A modern keepsake for self-purchase or gifting.",
    materials: ["18K gold plated chain", "Multicolor crystal florals", "Adjustable 16–18 in"],
    variants: [
      { id: "gold", label: "Gold", swatch: "#B89B6E" },
      { id: "silver", label: "Silver", swatch: "#C7C7C2" },
    ],
    badges: ["New"],
    queries: {
      heroDescId: "product-majestic-flora-blurb",
      heroTitleId: "product-majestic-flora-title",
    },
    images: [
      { id: "img-majestic-flora-1", ratio: "4x5", width: 800 },
      { id: "img-majestic-flora-2", ratio: "4x5", width: 800 },
    ],
  },
  {
    id: "golden-sphere",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    categoryLabel: "Huggies",
    price: 38,
    rating: 4.7,
    reviews: 312,
    blurb: "Chunky dome huggie earrings with a high-polish finish — daily wear, lifelong feel.",
    description:
      "Smooth, sculptural dome huggies that hug the lobe. The hinged closure makes them a no-fuss everyday earring. Plated in 18K gold over recycled brass, finished to a museum polish.",
    materials: ["18K gold plated recycled brass", "Hinged closure", "Hypoallergenic"],
    variants: [
      { id: "gold", label: "Gold", swatch: "#B89B6E" },
      { id: "silver", label: "Silver", swatch: "#C7C7C2" },
    ],
    badges: ["Bestseller"],
    queries: {
      heroDescId: "product-golden-sphere-blurb",
      heroTitleId: "product-golden-sphere-title",
    },
    images: [
      { id: "img-golden-sphere-1", ratio: "4x5", width: 800 },
      { id: "img-golden-sphere-2", ratio: "4x5", width: 800 },
    ],
  },
  {
    id: "amber-lace",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    categoryLabel: "Earrings",
    price: 54,
    rating: 4.8,
    reviews: 142,
    blurb: "Textured gold filigree drops inspired by lace and afternoon light.",
    description:
      "Delicate filigree drop earrings shaped by hand. The openwork casts a warm, lace-like glow against the skin. A quiet statement for dinners and weddings.",
    materials: ["18K gold plated brass", "Lightweight openwork", "Posts in sterling silver"],
    variants: [
      { id: "gold", label: "Gold", swatch: "#B89B6E" },
      { id: "silver", label: "Silver", swatch: "#C7C7C2" },
    ],
    badges: [],
    queries: {
      heroDescId: "product-amber-lace-blurb",
      heroTitleId: "product-amber-lace-title",
    },
    images: [
      { id: "img-amber-lace-1", ratio: "4x5", width: 800 },
      { id: "img-amber-lace-2", ratio: "4x5", width: 800 },
    ],
  },
  {
    id: "royal-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    categoryLabel: "Gift Sets",
    price: 95,
    rating: 5.0,
    reviews: 89,
    blurb: "A gift-boxed earring + necklace set, made to be handed down.",
    description:
      "Our most-gifted pairing: a slim gold pendant necklace and matching huggies, presented in a velvet-lined keepsake box. Includes a hand-written card option at checkout.",
    materials: ["18K gold plated", "Velvet keepsake box", "Hypoallergenic"],
    variants: [
      { id: "gold", label: "Gold", swatch: "#B89B6E" },
      { id: "silver", label: "Silver", swatch: "#C7C7C2" },
    ],
    badges: ["Gift Ready"],
    queries: {
      heroDescId: "product-royal-heirloom-blurb",
      heroTitleId: "product-royal-heirloom-title",
    },
    images: [
      { id: "img-royal-heirloom-1", ratio: "4x5", width: 800 },
      { id: "img-royal-heirloom-2", ratio: "4x5", width: 800 },
    ],
  },
];

export const CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Drops, studs, and sculpted statements.",
    imgId: "cat-tile-earrings-9f2c1a",
    titleId: "cat-tile-earrings-title",
    blurbId: "cat-tile-earrings-blurb",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants and layering chains.",
    imgId: "cat-tile-necklaces-3a8e72",
    titleId: "cat-tile-necklaces-title",
    blurbId: "cat-tile-necklaces-blurb",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "Everyday hinged hoops.",
    imgId: "cat-tile-huggies-7c4b39",
    titleId: "cat-tile-huggies-title",
    blurbId: "cat-tile-huggies-blurb",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "I bought the huggies for myself and ended up gifting the necklace to my sister. They feel weightier and more polished than I expected.",
    name: "Eliza M.",
  },
  {
    id: "t2",
    quote:
      "Velmora's pieces have replaced almost everything in my jewelry box. I wear the Vivid Aura cuff every single day.",
    name: "Naomi K.",
  },
  {
    id: "t3",
    quote:
      "Beautiful packaging, real quality. The Royal Heirloom set made my mother cry, in a good way.",
    name: "Priya R.",
  },
];

export const REELS = [
  { id: "reel-1", caption: "Layered for golden hour", imgId: "reel-layered-1f8a2b", captionId: "reel-1-caption" },
  { id: "reel-2", caption: "Everyday with the huggies", imgId: "reel-huggies-2c9d4e", captionId: "reel-2-caption" },
  { id: "reel-3", caption: "Floral pendant, soft light", imgId: "reel-pendant-3e7f6a", captionId: "reel-3-caption" },
  { id: "reel-4", caption: "Stacked on the ear", imgId: "reel-cuffs-4b5c8d", captionId: "reel-4-caption" },
  { id: "reel-5", caption: "Quiet luxury, daily", imgId: "reel-daily-5a6e7f", captionId: "reel-5-caption" },
  { id: "reel-6", caption: "Gift-boxed in velvet", imgId: "reel-gift-6f3d2c", captionId: "reel-6-caption" },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug, count = 4) {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}
