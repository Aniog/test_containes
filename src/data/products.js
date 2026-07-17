import { slugify } from "@/lib/utils";

// Seed product catalog for Velmora Fine Jewelry
// Artwork: "variant" is the jewelry piece (earrings, necklace, huggies, set, cuff)
// Each product includes 2 image variants used for the hover swap in the product card.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 128,
    tone: "gold",
    description:
      "A whisper of light against the ear. The Vivid Aura ear cuff is hand-set with a single crystal that catches the day\u2019s first light, finished in 18K gold plating over a hypoallergenic brass core.",
    art: "earcuff",
    palette: "amber",
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 214,
    tone: "gold",
    description:
      "A garden in motion. The Majestic Flora Nectar necklace layers faceted crystals in soft botanical hues along a delicate 18K gold-plated chain, designed to sit just below the collarbone.",
    art: "flora",
    palette: "blush",
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 412,
    tone: "gold",
    description:
      "A polished dome that hugs the lobe with quiet confidence. Heft without weight, these are the everyday earrings you will reach for again and again.",
    art: "huggies",
    palette: "honey",
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 96,
    tone: "gold",
    description:
      "Inspired by heirloom lacework, the Amber Lace drop earrings are cast in textured 18K gold plating with a softly antiqued finish. Light enough to forget, beautiful enough to be remembered.",
    art: "lace",
    palette: "amber",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 73,
    tone: "gold",
    description:
      "A matched pair of mini huggies and a whisper-thin pendant, gift-boxed in our signature cream linen. The Royal Heirloom Set is the answer to every \u2018I don\u2019t know what to get her\u2019 moment.",
    art: "set",
    palette: "champagne",
    badge: "Gifting",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductBySlug = (slug) =>
  products.find((p) => slugify(p.name) === slug);

export const categories = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Studs, drops, cuffs",
    art: "earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Pendants & chains",
    art: "necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "Everyday hoops",
    art: "huggies",
  },
];

export const materials = ["18K Gold Plated", "Sterling Silver", "Rose Gold"];
export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 \u2013 $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75 & up", min: 75.01, max: 9999 },
];

// Bestsellers are the first four in the catalog (curated)
export const bestsellers = products.filter((p) => p.badge === "Bestseller" || p.id === "majestic-flora-nectar" || p.id === "amber-lace-earrings");

// Related products by category (excluding self)
export const getRelated = (product, count = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
