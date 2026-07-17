// Seed catalog for Velmora Fine Jewelry.
// All imagery flows through the data-strk-img runtime image system; the
// `imgQuery` strings describe what each slot should look like. They are
// referenced by id in the JSX via `[${product.descId}]` / `[${product.titleId}]`
// patterns. The plugin resolves them at build/dev time.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    tagline: "Crystal-Accent Gold Ear Cuff",
    price: 42,
    compareAt: null,
    rating: 4.8,
    reviewCount: 184,
    material: "18K Gold Plated · Hypoallergenic",
    description:
      "A delicate, sculptural ear cuff finished with a single hand-set crystal. Designed to wear alone as a quiet statement or stacked with your everyday studs.",
    details: [
      "18K gold-plated brass with anti-tarnish coating",
      "Single handset CZ crystal, 3mm",
      "No piercing required — cuff style",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid direct contact with perfume and lotion",
      "Store in the Velmora pouch to slow oxidation",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships in 1–2 business days from our studio",
      "30-day returns — see policy for full details",
    ],
    colors: ["Gold"],
    imgQuery: "gold crystal ear cuff jewelry on warm beige",
    gallery: [
      "gold crystal ear cuff close-up on warm beige",
      "gold crystal ear cuff worn on ear editorial model",
      "gold ear cuff detail product photography",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    tagline: "Multicolor Floral Crystal Necklace",
    price: 68,
    compareAt: null,
    rating: 4.9,
    reviewCount: 312,
    material: "18K Gold Plated · Hand-Set Crystals",
    description:
      "An heirloom-inspired pendant featuring a constellation of hand-set crystals in soft champagne, blush, and peridot tones. A piece you'll reach for daily.",
    details: [
      "18K gold-plated brass chain, 16–18\" adjustable",
      "14 handset crystals in champagne, blush, peridot, and clear",
      "Lobster clasp with extender chain",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid direct contact with perfume and lotion",
      "Store flat in the Velmora pouch to prevent tangling",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships in 1–2 business days from our studio",
      "30-day returns — see policy for full details",
    ],
    colors: ["Gold", "Silver"],
    imgQuery: "multicolor floral crystal gold pendant necklace jewelry",
    gallery: [
      "multicolor crystal pendant necklace on warm linen",
      "multicolor crystal necklace worn editorial portrait",
      "floral pendant necklace detail product photography",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    tagline: "Chunky Gold Dome Huggie Earrings",
    price: 38,
    compareAt: null,
    rating: 4.7,
    reviewCount: 421,
    material: "18K Gold Plated · Hypoallergenic",
    description:
      "A modern take on the classic huggie. Sculptural dome silhouette with a soft, brushed finish that catches light from every angle.",
    details: [
      "18K gold-plated brass with anti-tarnish coating",
      "12mm outer diameter, 8mm inner",
      "Hinged click closure for secure everyday wear",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid direct contact with perfume and lotion",
      "Store in the Velmora pouch to slow oxidation",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships in 1–2 business days from our studio",
      "30-day returns — see policy for full details",
    ],
    colors: ["Gold", "Silver"],
    imgQuery: "chunky gold dome huggie hoop earrings on warm cream",
    gallery: [
      "gold dome huggie hoop earrings on warm cream",
      "gold huggie earrings worn on ear close-up",
      "gold huggie earrings pair product photography",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    tagline: "Textured Gold Filigree Drop Earrings",
    price: 54,
    compareAt: null,
    rating: 4.9,
    reviewCount: 268,
    material: "18K Gold Plated · Hypoallergenic",
    description:
      "An intricate lace motif rendered in warm gold. Light on the ear, with just enough movement to feel alive. Pair with the matching pendant.",
    details: [
      "18K gold-plated brass with anti-tarnish coating",
      "Filigree lace motif, 28mm drop",
      "Sterling silver post with secure butterfly back",
      "Hypoallergenic, nickel-free, lead-free",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid direct contact with perfume and lotion",
      "Store flat in the Velmora pouch to protect the filigree",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships in 1–2 business days from our studio",
      "30-day returns — see policy for full details",
    ],
    colors: ["Gold"],
    imgQuery: "textured gold filigree drop earrings on warm beige",
    gallery: [
      "gold filigree drop earrings on warm beige",
      "gold filigree earrings worn editorial portrait",
      "lace gold earrings detail product photography",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    tagline: "Gift-Boxed Earring & Necklace Set",
    price: 95,
    compareAt: null,
    rating: 5.0,
    reviewCount: 156,
    material: "18K Gold Plated · Gift Boxed",
    description:
      "Our bestselling huggies paired with a delicate cable chain. Presented in a soft-touch gift box with a hand-written card. The easiest gift of the season.",
    details: [
      "Includes Golden Sphere Huggies + matching cable chain necklace",
      "18K gold-plated brass, anti-tarnish coated",
      "Hypoallergenic, sterling silver posts",
      "Comes in a Velmora gift box with care card",
    ],
    care: [
      "Remove before showering, swimming, or sleeping",
      "Avoid direct contact with perfume and lotion",
      "Store in the original gift box to slow oxidation",
      "Wipe gently with the included polishing cloth",
    ],
    shipping: [
      "Free worldwide shipping on orders over $75",
      "Ships in 1–2 business days from our studio",
      "30-day returns — see policy for full details",
    ],
    colors: ["Gold"],
    imgQuery: "gold jewelry gift box set earrings necklace warm",
    gallery: [
      "gold jewelry gift set in box warm cream",
      "gold earrings and necklace set editorial gift",
      "gold jewelry gift box detail product photography",
    ],
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Studs, cuffs, and drops for every day.",
    imgQuery: "gold earrings collection on warm cream",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Layered or solo, all hand-set in 18K gold.",
    imgQuery: "gold necklaces collection on warm linen",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "The everyday hoop, refined.",
    imgQuery: "gold huggie hoop earrings on warm cream",
  },
];

export const ugcReels = [
  {
    id: "reel-ear-stack",
    caption: "My everyday stack",
    handle: "@maya.k",
    imgQuery: "woman gold ear stack jewelry editorial portrait",
  },
  {
    id: "reel-necklace-layer",
    caption: "Layered in linen",
    handle: "@noor.styles",
    imgQuery: "woman gold layered necklaces editorial portrait",
  },
  {
    id: "reel-unboxing",
    caption: "Velmora unboxing",
    handle: "@aria.m",
    imgQuery: "gold jewelry unboxing flatlay warm aesthetic",
  },
  {
    id: "reel-bridal",
    caption: "Something golden",
    handle: "@the.weddings",
    imgQuery: "bride gold jewelry editorial portrait warm",
  },
  {
    id: "reel-huggies",
    caption: "Huggies on repeat",
    handle: "@jules.everyday",
    imgQuery: "gold huggie earrings close up on ear editorial",
  },
  {
    id: "reel-gift",
    caption: "Gifted, of course",
    handle: "@shop.avec",
    imgQuery: "gold jewelry gift box warm aesthetic editorial",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    quote:
      "The gold catches the light like nothing else I own. I've worn my Majestic Flora three times a week since it arrived.",
    product: "Majestic Flora Nectar",
  },
  {
    id: "t2",
    name: "Priya S.",
    rating: 5,
    quote:
      "Honestly the best packaging I've ever received. The jewelry itself? Even better. Hypoallergenic, too — my ears are happy.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "t3",
    name: "Camille D.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. She hasn't taken it off. Now I need one for myself.",
    product: "Royal Heirloom Set",
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (x) => (x.category === product.category ? 0 : 1);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, limit);
}
