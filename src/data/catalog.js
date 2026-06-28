// Seed catalog for Velmora Fine Jewelry.
// Imagery is provided via the stock-image system (data-strk-img / data-strk-bg).
// Each product has stable text-reference IDs so the image queries map to actual DOM ids.

export const CATEGORIES = [
  {
    slug: "earrings",
    title: "Earrings",
    description: "Sculptural drops, studs and statement pairs.",
    descId: "category-earrings-desc",
    titleId: "category-earrings-title",
    imgId: "category-earrings-c2a91e",
  },
  {
    slug: "necklaces",
    title: "Necklaces",
    description: "Layering chains and editorial pendants.",
    descId: "category-necklaces-desc",
    titleId: "category-necklaces-title",
    imgId: "category-necklaces-d3b40f",
  },
  {
    slug: "huggies",
    title: "Huggies",
    description: "Everyday hoops with a refined finish.",
    descId: "category-huggies-desc",
    titleId: "category-huggies-title",
    imgId: "category-huggies-e4c521",
  },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 217,
    short: "Gold ear cuff with a single crystal accent. No piercing needed.",
    long:
      "An elegant 18K gold-plated ear cuff finished with a hand-set crystal. Designed to be worn solo for an editorial moment or stacked with studs for a quiet pile-on.",
    materials:
      "18K gold plating over recycled brass. Faceted crystal accent. Nickel-free and hypoallergenic.",
    care:
      "Avoid contact with perfume, lotion and water. Store in the Velmora pouch. Polish gently with a soft cloth.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    bestseller: true,
    titleId: "product-vivid-aura-jewels-title",
    descId: "product-vivid-aura-jewels-desc",
    imgId: "product-vivid-aura-jewels-a1b2c3",
    imgIdAlt: "product-vivid-aura-jewels-alt-d4e5f6",
    gallery: [
      { imgId: "gallery-vivid-aura-jewels-main", query: "gold ear cuff crystal accent jewelry close up warm light" },
      { imgId: "gallery-vivid-aura-jewels-model", query: "model wearing gold ear cuff editorial portrait warm light" },
      { imgId: "gallery-vivid-aura-jewels-detail", query: "gold ear cuff crystal macro detail luxury jewelry" },
      { imgId: "gallery-vivid-aura-jewels-flat", query: "gold ear cuff flat lay luxury jewelry packaging warm" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 184,
    short:
      "Multicolor floral crystal necklace on a fine gold-plated chain.",
    long:
      "A delicate floral cluster of multicolor crystals set into 18K gold-plated petals. The fine chain rests at the collarbone, designed to layer or stand alone as a statement.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia and crystal accents. Lobster clasp closure.",
    care:
      "Remove before swimming, showering or exercise. Wipe with a soft cloth after wear.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    bestseller: true,
    titleId: "product-majestic-flora-nectar-title",
    descId: "product-majestic-flora-nectar-desc",
    imgId: "product-majestic-flora-nectar-b2c3d4",
    imgIdAlt: "product-majestic-flora-nectar-alt-e5f6a7",
    gallery: [
      { imgId: "gallery-majestic-flora-nectar-main", query: "gold floral pendant necklace multicolor crystal close up" },
      { imgId: "gallery-majestic-flora-nectar-model", query: "model wearing gold floral necklace collarbone warm light" },
      { imgId: "gallery-majestic-flora-nectar-detail", query: "gold floral pendant crystal macro detail jewelry" },
      { imgId: "gallery-majestic-flora-nectar-flat", query: "gold necklace flat lay luxury jewelry packaging warm" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 342,
    short: "Chunky gold dome huggie earrings. The everyday cornerstone.",
    long:
      "Smooth, sculptural domes hugging the lobe in a polished 18K gold finish. The pair you reach for every day — substantial without ever feeling heavy.",
    materials:
      "18K gold plating over recycled brass. Hinged latch back. Nickel-free.",
    care:
      "Polish with the included Velmora cloth. Avoid water and chemicals.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    bestseller: true,
    titleId: "product-golden-sphere-huggies-title",
    descId: "product-golden-sphere-huggies-desc",
    imgId: "product-golden-sphere-huggies-c3d4e5",
    imgIdAlt: "product-golden-sphere-huggies-alt-f6a7b8",
    gallery: [
      { imgId: "gallery-golden-sphere-huggies-main", query: "chunky gold dome huggie hoop earrings close up jewelry" },
      { imgId: "gallery-golden-sphere-huggies-model", query: "model wearing gold huggie hoop earrings ear close up" },
      { imgId: "gallery-golden-sphere-huggies-detail", query: "gold huggie hoop earring macro detail polished" },
      { imgId: "gallery-golden-sphere-huggies-flat", query: "gold hoop earrings flat lay luxury packaging warm" },
    ],
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 156,
    short: "Textured gold filigree drop earrings with warm amber tone.",
    long:
      "Inspired by heirloom lace, these drop earrings combine intricate filigree work with a warm amber-gold finish. Lightweight on the lobe, generous in presence.",
    materials:
      "18K gold plating over brass. Hand-finished filigree detail. Hypoallergenic posts.",
    care:
      "Store flat in the Velmora pouch to preserve filigree detail.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    bestseller: true,
    titleId: "product-amber-lace-earrings-title",
    descId: "product-amber-lace-earrings-desc",
    imgId: "product-amber-lace-earrings-d4e5f6",
    imgIdAlt: "product-amber-lace-earrings-alt-a7b8c9",
    gallery: [
      { imgId: "gallery-amber-lace-earrings-main", query: "gold filigree drop earrings amber tone close up" },
      { imgId: "gallery-amber-lace-earrings-model", query: "model wearing gold filigree drop earrings portrait" },
      { imgId: "gallery-amber-lace-earrings-detail", query: "gold filigree earring macro detail intricate" },
      { imgId: "gallery-amber-lace-earrings-flat", query: "gold drop earrings flat lay luxury packaging" },
    ],
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 98,
    short:
      "A gift-boxed earring and necklace set in warm 18K gold. The ultimate gesture.",
    long:
      "Our most thoughtful gift: a matched pair of drop earrings and a fine pendant necklace, arrived ribbon-tied in a signature Velmora box with a handwritten card option at checkout.",
    materials:
      "18K gold plating over recycled brass. Presented in a Velmora gift box with care cloth and pouch.",
    care:
      "Keep in the original box between wears. Polish lightly with the care cloth.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    bestseller: true,
    titleId: "product-royal-heirloom-set-title",
    descId: "product-royal-heirloom-set-desc",
    imgId: "product-royal-heirloom-set-e5f6a7",
    imgIdAlt: "product-royal-heirloom-set-alt-b8c9d0",
    gallery: [
      { imgId: "gallery-royal-heirloom-set-main", query: "gold jewelry gift set box ribbon earrings necklace warm" },
      { imgId: "gallery-royal-heirloom-set-model", query: "model wearing gold pendant necklace and earrings set" },
      { imgId: "gallery-royal-heirloom-set-detail", query: "gold pendant necklace macro detail luxury" },
      { imgId: "gallery-royal-heirloom-set-flat", query: "gold jewelry set flat lay luxury gift box ribbon" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "The huggies haven't left my ears in three weeks. They look more expensive than anything I own — quiet, perfect, mine.",
    name: "Eliana R.",
    location: "Brooklyn, NY",
  },
  {
    id: "t2",
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The pieces are gorgeous.",
    name: "Maya K.",
    location: "London, UK",
  },
  {
    id: "t3",
    quote:
      "Finally, gold-plated jewelry that doesn't turn. The warm tone is so flattering — it feels like a real heirloom.",
    name: "Saoirse M.",
    location: "Melbourne, AU",
  },
];

export const REELS = [
  {
    id: "reel-1",
    caption: "Layered, never matched.",
    captionId: "reel-1-caption",
    imgId: "reel-1-img-a1d2e3",
    query: "model wearing layered gold necklaces close up neck warm tone",
  },
  {
    id: "reel-2",
    caption: "Earned, not loud.",
    captionId: "reel-2-caption",
    imgId: "reel-2-img-b2e3f4",
    query: "woman ear close up gold huggies hoops earring soft light",
  },
  {
    id: "reel-3",
    caption: "Worn every day since.",
    captionId: "reel-3-caption",
    imgId: "reel-3-img-c3f4a5",
    query: "gold ear cuff crystal close up ear editorial portrait",
  },
  {
    id: "reel-4",
    caption: "Soft mornings, fine gold.",
    captionId: "reel-4-caption",
    imgId: "reel-4-img-d4a5b6",
    query: "warm natural light gold drop earrings filigree woman portrait",
  },
  {
    id: "reel-5",
    caption: "A quiet kind of beautiful.",
    captionId: "reel-5-caption",
    imgId: "reel-5-img-e5b6c7",
    query: "gold pendant necklace collarbone soft skin warm tone editorial",
  },
  {
    id: "reel-6",
    caption: "Heirloom, in the making.",
    captionId: "reel-6-caption",
    imgId: "reel-6-img-f6c7d8",
    query: "hand holding gold jewelry gift box ribbon warm light",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return PRODUCTS.slice(0, limit);
  const others = PRODUCTS.filter((p) => p.slug !== slug);
  const sameCat = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
}
