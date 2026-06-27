// Seed product catalog for Velmora Fine Jewelry.
// Each product has stable ids for image queries and rendering.

export const PRODUCTS = [
  {
    id: "vivid-aura",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    shortName: "Vivid Aura",
    price: 42,
    category: "earrings",
    categoryLabel: "Earrings",
    subcategory: "ear cuff",
    tagline: "Sculpted gold ear cuff with a single crystal pulse.",
    description:
      "A weightless ear cuff carved into a soft golden curve, finished with a single hand-set crystal. Designed to be worn alone or layered with studs for a quietly defiant look.",
    materials: "18K gold-plated brass · Hand-set crystal · Hypoallergenic post.",
    care:
      "Store separately in the pouch provided. Avoid contact with perfume, lotion, and water. Polish gently with a soft cloth.",
    shipping:
      "Complimentary worldwide shipping over $80. Most orders ship within 24 hours. 30-day no-questions returns.",
    rating: 4.9,
    reviews: 218,
    variants: ["18K Gold", "Silver"],
    badge: "Bestseller",
    imgPrimaryId: "product-vivid-aura-primary",
    imgSecondaryId: "product-vivid-aura-secondary",
    imgGalleryIds: [
      "product-vivid-aura-g1",
      "product-vivid-aura-g2",
      "product-vivid-aura-g3",
      "product-vivid-aura-g4",
    ],
    primaryQuery:
      "gold ear cuff with single crystal, editorial close up, warm lighting, demi fine jewelry",
    secondaryQuery:
      "gold ear cuff worn on model ear, soft beige background, editorial fashion jewelry",
  },
  {
    id: "majestic-flora",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    shortName: "Flora Nectar",
    price: 68,
    category: "necklaces",
    categoryLabel: "Necklaces",
    subcategory: "statement necklace",
    tagline: "A garden suspended on a whisper-thin gold chain.",
    description:
      "An ornate floral pendant of multicolored crystals strung on a barely-there 18K gold chain. Heirloom in feel, modern in scale — equally at home over a slip dress or a poplin shirt.",
    materials: "18K gold-plated brass · Multicolor cubic zirconia · 40cm chain.",
    care:
      "Remove before bathing and sleeping. Wipe with a soft, dry cloth. Keep in its felt pouch when not worn.",
    shipping:
      "Complimentary worldwide shipping over $80. Most orders ship within 24 hours. 30-day no-questions returns.",
    rating: 5.0,
    reviews: 134,
    variants: ["18K Gold", "Silver"],
    badge: "New",
    imgPrimaryId: "product-majestic-flora-primary",
    imgSecondaryId: "product-majestic-flora-secondary",
    imgGalleryIds: [
      "product-majestic-flora-g1",
      "product-majestic-flora-g2",
      "product-majestic-flora-g3",
      "product-majestic-flora-g4",
    ],
    primaryQuery:
      "delicate gold floral necklace with multicolor crystals, soft cream background, editorial jewelry",
    secondaryQuery:
      "gold floral pendant necklace worn on collarbone, warm light, editorial fashion model",
  },
  {
    id: "golden-sphere",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    shortName: "Golden Sphere",
    price: 38,
    category: "huggies",
    categoryLabel: "Huggies",
    subcategory: "huggie earrings",
    tagline: "The chunky-but-quiet huggie that finishes every look.",
    description:
      "A dome-shaped huggie cast in solid 18K gold-plated brass. The proportion is deliberate — substantial enough to feel like jewelry, refined enough to wear from desk to dinner.",
    materials: "18K gold-plated brass · Hypoallergenic post · Hinged closure.",
    care:
      "Avoid perfume and water. Wipe with the polishing cloth included in your box. Store in the felt pouch provided.",
    shipping:
      "Complimentary worldwide shipping over $80. Most orders ship within 24 hours. 30-day no-questions returns.",
    rating: 4.8,
    reviews: 412,
    variants: ["18K Gold", "Silver"],
    badge: "Bestseller",
    imgPrimaryId: "product-golden-sphere-primary",
    imgSecondaryId: "product-golden-sphere-secondary",
    imgGalleryIds: [
      "product-golden-sphere-g1",
      "product-golden-sphere-g2",
      "product-golden-sphere-g3",
      "product-golden-sphere-g4",
    ],
    primaryQuery:
      "chunky gold dome huggie earrings, close up, warm beige background, demi fine jewelry photography",
    secondaryQuery:
      "gold huggie earrings worn on ear of model, editorial portrait, warm light",
  },
  {
    id: "amber-lace",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    shortName: "Amber Lace",
    price: 54,
    category: "earrings",
    categoryLabel: "Earrings",
    subcategory: "drop earrings",
    tagline: "Filigree lace pressed into warm gold.",
    description:
      "Textured drop earrings inspired by antique lace — fine gold filigree that catches candlelight from across the room. Lightweight enough to wear all evening.",
    materials: "18K gold-plated brass · Filigree casting · Hypoallergenic post.",
    care:
      "Keep dry. Avoid spraying perfume directly onto the piece. Polish gently with the included cloth.",
    shipping:
      "Complimentary worldwide shipping over $80. Most orders ship within 24 hours. 30-day no-questions returns.",
    rating: 4.9,
    reviews: 87,
    variants: ["18K Gold", "Silver"],
    badge: null,
    imgPrimaryId: "product-amber-lace-primary",
    imgSecondaryId: "product-amber-lace-secondary",
    imgGalleryIds: [
      "product-amber-lace-g1",
      "product-amber-lace-g2",
      "product-amber-lace-g3",
      "product-amber-lace-g4",
    ],
    primaryQuery:
      "gold filigree drop earrings, lace pattern, warm beige backdrop, editorial jewelry close up",
    secondaryQuery:
      "gold filigree earrings worn on model with soft curls, editorial portrait, warm cinematic light",
  },
  {
    id: "royal-heirloom",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    shortName: "Royal Heirloom",
    price: 95,
    category: "sets",
    categoryLabel: "Sets",
    subcategory: "gift set",
    tagline: "A gift-boxed earring and necklace duo, ready to be passed down.",
    description:
      "A matched earring-and-necklace pairing arriving in a hand-wrapped velvet box. The kind of gift that earns a slow exhale — or quietly chosen for yourself.",
    materials: "18K gold-plated brass · Cubic zirconia · Velvet gift box included.",
    care:
      "Store in the velvet box provided. Avoid water, perfume, and lotions. Polish gently with a soft cloth.",
    shipping:
      "Complimentary worldwide shipping over $80. Most orders ship within 24 hours. 30-day no-questions returns.",
    rating: 5.0,
    reviews: 56,
    variants: ["18K Gold", "Silver"],
    badge: "Limited",
    imgPrimaryId: "product-royal-heirloom-primary",
    imgSecondaryId: "product-royal-heirloom-secondary",
    imgGalleryIds: [
      "product-royal-heirloom-g1",
      "product-royal-heirloom-g2",
      "product-royal-heirloom-g3",
      "product-royal-heirloom-g4",
    ],
    primaryQuery:
      "luxury gold jewelry gift set in velvet box, earrings and necklace, warm lighting, editorial",
    secondaryQuery:
      "gold necklace and earring set worn together on model, editorial portrait, warm light",
  },
];

export const CATEGORIES = [
  {
    id: "earrings",
    label: "Earrings",
    tagline: "Studs, drops, ear cuffs.",
    imgId: "category-earrings",
    query: "gold earrings collection editorial flat lay warm light",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    tagline: "Pendants, chains, statements.",
    imgId: "category-necklaces",
    query: "delicate gold necklace collection editorial soft beige background",
  },
  {
    id: "huggies",
    label: "Huggies",
    tagline: "The everyday hoop, refined.",
    imgId: "category-huggies",
    query: "gold huggie hoop earrings collection editorial warm light",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    rating: 5,
    quote:
      "These are the first earrings I've kept on through a workout and a wedding. The plating doesn't quit and the proportion is just right.",
    name: "Mira K.",
    role: "Verified Buyer",
  },
  {
    id: "t2",
    rating: 5,
    quote:
      "Velmora has become my entire jewelry box. The Heirloom Set was a gift from my partner and I genuinely cried unboxing it.",
    name: "Sienna L.",
    role: "Verified Buyer",
  },
  {
    id: "t3",
    rating: 5,
    quote:
      "It feels like real fine jewelry without the fine-jewelry guilt. Editorial, quiet, beautiful. I keep coming back.",
    name: "Amelia R.",
    role: "Verified Buyer",
  },
];

export const REELS = [
  {
    id: "reel1",
    caption: "The Vivid Aura, layered.",
    imgId: "reel-1",
    query:
      "vertical reel style close up of model wearing gold ear cuff and studs, warm cinematic light, 9:16",
  },
  {
    id: "reel2",
    caption: "Flora Nectar, in candlelight.",
    imgId: "reel-2",
    query:
      "vertical reel style portrait of woman wearing gold floral pendant necklace, candlelight, 9:16",
  },
  {
    id: "reel3",
    caption: "Golden Sphere, every day.",
    imgId: "reel-3",
    query:
      "vertical reel style close up of gold huggie earrings on ear, soft window light, 9:16",
  },
  {
    id: "reel4",
    caption: "Amber Lace, slow evenings.",
    imgId: "reel-4",
    query:
      "vertical reel style portrait of woman wearing gold filigree earrings, warm cinematic light, 9:16",
  },
  {
    id: "reel5",
    caption: "Royal Heirloom, gifted.",
    imgId: "reel-5",
    query:
      "vertical reel style of hands holding velvet jewelry box opened with gold necklace inside, warm light, 9:16",
  },
  {
    id: "reel6",
    caption: "Stacked, never loud.",
    imgId: "reel-6",
    query:
      "vertical reel style flat lay of gold demi fine jewelry on warm beige fabric, editorial, 9:16",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug, count = 4) {
  return PRODUCTS.filter((p) => p.slug !== slug).slice(0, count);
}
