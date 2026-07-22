// Seed catalog for Velmora Fine Jewelry.
// Each product carries editorial copy + two lifestyle/studio image queries so
// the listing card can swap imagery on hover. Real photography can be dropped
// in later by replacing the data-strk-img queries with asset URLs.

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tag: "Bestseller",
    category: "Earrings",
    price: 42,
    rating: 4.9,
    reviews: 214,
    short:
      "A sculptural gold ear cuff crowned with a single brilliant-cut crystal — no piercing required.",
    description:
      "The Vivid Aura Jewels cuff traces the curve of your ear in polished 18k gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to be slipped on in seconds and treasured for years.",
    materials:
      "18k gold plating over a recycled brass core. Cubic zirconia crystal. Nickel-free and hypoallergenic. To care for your piece, avoid water, perfume and lotions, and store in the provided pouch.",
    imgId: "p-vivid-aura-a9f1c2",
    hoverImgId: "p-vivid-aura-h7d3e4",
    query: "gold ear cuff with crystal accent, elegant demi-fine jewelry",
    hoverQuery: "gold crystal ear cuff worn on model ear close up, warm light",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tag: "New",
    category: "Necklaces",
    price: 68,
    rating: 4.8,
    reviews: 132,
    short:
      "A delicate chain blooming with multicolor floral crystals — a garden rendered in gold.",
    description:
      "Majestic Flora Nectar gathers hand-set floral crystals in soft honey, blush and champagne tones along a fine 18k gold-plated chain. Each stone is placed to catch and scatter light, like dew on petals at first light.",
    materials:
      "18k gold plating over recycled brass. Multicolor cubic zirconia. 16\" chain with 2\" extender. Nickel-free and hypoallergenic. Keep dry and store flat in the provided box.",
    imgId: "p-majestic-flora-b2e5f6",
    hoverImgId: "p-majestic-flora-h4c8d1",
    query: "multicolor floral crystal gold necklace, luxury demi-fine jewelry",
    hoverQuery: "gold floral crystal necklace on model neck, elegant warm light",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tag: "Bestseller",
    category: "Huggies",
    price: 38,
    rating: 5.0,
    reviews: 308,
    short:
      "Chunky domed huggies in molten gold — the everyday hoop, perfected.",
    description:
      "Our Golden Sphere Huggies are cast with a softly rounded dome that hugs the lobe. Polished to a mirror finish, they move seamlessly from day to evening — the pair you will reach for every single morning.",
    materials:
      "18k gold plating over recycled brass. Hinged huggie closure. Nickel-free and hypoallergenic. Wipe gently with a soft cloth and keep away from moisture.",
    imgId: "p-golden-sphere-c8a3b9",
    hoverImgId: "p-golden-sphere-h1f6e2",
    query: "chunky gold dome huggie earrings, minimal luxury jewelry",
    hoverQuery: "gold huggie hoop earrings worn on model ear, warm close up",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tag: "Limited",
    category: "Earrings",
    price: 54,
    rating: 4.7,
    reviews: 96,
    short:
      "Textured filigree drops that fall like golden lace — heirloom detail, modern line.",
    description:
      "Amber Lace Earrings are finely worked with an open filigree that recalls antique lace. Suspended from a slender hook, each drop sways with a quiet, golden movement — ornate yet effortlessly wearable.",
    materials:
      "18k gold plating over recycled brass. Textured filigree drop. Nickel-free and hypoallergenic. Store hanging or flat to protect the filigree, away from humidity.",
    imgId: "p-amber-lace-d4f7a1",
    hoverImgId: "p-amber-lace-h9b2c5",
    query: "textured gold filigree drop earrings, ornate elegant jewelry",
    hoverQuery: "gold filigree drop earrings on model, warm elegant light",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tag: "Gift Set",
    category: "Sets",
    price: 95,
    rating: 4.9,
    reviews: 74,
    short:
      "A gift-boxed pairing of earrings and necklace — the complete Velmora gesture.",
    description:
      "The Royal Heirloom Set arrives in our signature gift box: a coordinated earring and necklace pairing in warm 18k gold. Made to be given — and to be kept — it is our most treasured offering for life's meaningful moments.",
    materials:
      "18k gold plating over recycled brass. Coordinated earring + necklace set. Signature gift box included. Nickel-free and hypoallergenic. Keep each piece in its compartment to preserve the finish.",
    imgId: "p-royal-heirloom-e6b8c3",
    hoverImgId: "p-royal-heirloom-h3d9f7",
    query: "luxury gold jewelry gift set box, earrings and necklace, elegant",
    hoverQuery: "gold jewelry gift set in elegant box, warm luxury",
  },
];

export const CATEGORIES = ["Earrings", "Necklaces", "Huggies", "Sets"];

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const relatedProducts = (id, count = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, count);
