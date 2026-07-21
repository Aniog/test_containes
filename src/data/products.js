export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    rating: 4.9,
    reviews: 214,
    bestseller: true,
    isNew: false,
    description:
      "A sculptural ear cuff that catches the light with every turn. Hand-set crystal accents trace a polished 18k gold-plated arc — no piercing required, just a gentle slide and press. Designed to sit comfortably from morning coffee to midnight.",
    materials:
      "18k gold plating over recycled brass · AAA cubic zirconia · Nickel-free, hypoallergenic · Tarnish-resistant finish. Care: wipe gently with a soft cloth, avoid perfume and water, store in the pouch provided.",
    imgId: "pdp-vivid-aura-jewels-7f3a2c",
    galleryIds: ["gal-vivid-1-a81f0d", "gal-vivid-2-b92e1e", "gal-vivid-3-c03d2f"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18k-gold",
    rating: 4.8,
    reviews: 156,
    bestseller: true,
    isNew: true,
    description:
      "A garden suspended in gold. Multicolored crystals bloom along a fine 18k gold-plated chain, each petal hand-set to catch the light like morning dew. Adjustable length lets it rest exactly where you want it — collarbone or just below.",
    materials:
      "18k gold plating over recycled brass · Multicolored AAA crystals · Adjustable 16–18 in chain · Nickel-free, hypoallergenic. Care: keep dry, polish with the soft pouch, clasp before storing.",
    imgId: "pdp-majestic-flora-nectar-1d4b5e",
    galleryIds: ["gal-flora-1-d14e3a", "gal-flora-2-e25f4b", "gal-flora-3-f36a5c"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    rating: 5.0,
    reviews: 389,
    bestseller: true,
    isNew: false,
    description:
      "The everyday essential, perfected. A plump dome of polished 18k gold-plated brass that hugs the lobe — substantial enough to notice, light enough to forget. Our most-gifted piece, three years running.",
    materials:
      "18k gold plating over recycled brass · Hinged snap closure · 12mm diameter · Nickel-free, hypoallergenic. Care: wipe after wear, keep away from chlorine and salt water.",
    imgId: "pdp-golden-sphere-huggies-2e5c6f",
    galleryIds: ["gal-sphere-1-a47b6d", "gal-sphere-2-b58c7e", "gal-sphere-3-c69d8f"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    rating: 4.9,
    reviews: 178,
    bestseller: true,
    isNew: false,
    description:
      "Filigree like woven light. Hand-textured 18k gold-plated drops move as you do, throwing soft shadows that read as lace against the skin. Evening-ready, but honest enough for a white shirt and jeans.",
    materials:
      "18k gold plating over recycled brass · Hand-textured filigree · Secure lever-back closure · Nickel-free, hypoallergenic. Care: store flat in pouch, avoid bending the lace-work.",
    imgId: "pdp-amber-lace-earrings-3f6d7a",
    galleryIds: ["gal-amber-1-d7ae9a", "gal-amber-2-e8bfab", "gal-amber-3-f9cabc"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set",
    price: 95,
    category: "necklaces",
    material: "18k-gold",
    rating: 4.9,
    reviews: 92,
    bestseller: true,
    isNew: true,
    description:
      "The gift that needs no wrapping — though ours arrives in a signature linen box anyway. A matched pair of crystal studs and a fine pendant necklace, plated in 18k gold and made to be worn together or apart, for decades.",
    materials:
      "18k gold plating over recycled brass · AAA cubic zirconia · Signature linen gift box included · Nickel-free, hypoallergenic. Care: individual pouches for each piece, keep dry.",
    imgId: "pdp-royal-heirloom-set-4a7e8b",
    galleryIds: ["gal-royal-1-aabccd", "gal-royal-2-bbcdde", "gal-royal-3-ccdeef"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The Sphere Huggies haven't left my ears in four months. No tarnish, no irritation — just compliments.",
    name: "Amelia R.",
    piece: "Golden Sphere Huggies",
  },
  {
    quote:
      "Bought the Heirloom Set for my mother's 60th. She opened the linen box and went quiet. That's the review.",
    name: "Sofia L.",
    piece: "Royal Heirloom Set",
  },
  {
    quote:
      "Quietly beautiful. The Flora Nectar necklace looks three times its price — my jeweler asked where it was from.",
    name: "Priya K.",
    piece: "Majestic Flora Nectar",
  },
];

export const formatPrice = (value) => `$${value.toFixed(0)}`;

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const getRelated = (product, count = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => (b.category === product.category) - (a.category === product.category))
    .slice(0, count);
