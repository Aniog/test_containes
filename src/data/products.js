// Seed product catalog for Velmora Fine Jewelry.
// Imagery is wired through the strk-img system; see useEffect + ImageHelper in pages.
// Each product has 2 images (hover swap) and a category for filtering.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
];

export const PRODUCTS = [
  {
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff · 18K Gold Plated",
    price: 42,
    category: "earrings",
    rating: 4.8,
    reviews: 142,
    description:
      "A modern ear cuff traced with a single hand-set crystal. Sculpted to catch light at every angle — the piece you'll reach for without thinking.",
    materials:
      "18K gold plated over recycled brass. Single cubic zirconia crystal. Hypoallergenic, nickel-free, and tarnish-resistant.",
    care: "Store dry in the pouch provided. Remove before showering, swimming, or applying lotion. Wipe gently with the included polishing cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. See full policy below.",
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      {
        imgId: "prod-vivid-aura-primary-7c1a",
        alt: "Vivid Aura Jewels — gold ear cuff with crystal accent, on dark background",
        query: "Vivid Aura Jewels gold ear cuff with crystal accent",
      },
      {
        imgId: "prod-vivid-aura-hover-3e9f",
        alt: "Vivid Aura Jewels — worn on ear, close-up detail",
        query: "Vivid Aura Jewels ear cuff worn on model ear close-up",
      },
    ],
  },
  {
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Necklace · Multicolor Crystal",
    price: 68,
    category: "necklaces",
    rating: 4.9,
    reviews: 218,
    description:
      "A garden of hand-set crystals in soft botanical hues. Suspended from a delicate box chain — feminine, considered, made to be layered.",
    materials:
      "18K gold plated chain and setting. Multicolor handset crystals. Lead-free, nickel-free, hypoallergenic.",
    care: "Avoid contact with perfume and water. Polish with a soft cloth and store in the velvet pouch.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      {
        imgId: "prod-flora-nectar-primary-2b4d",
        alt: "Majestic Flora Nectar — multicolor crystal necklace on dark surface",
        query: "Majestic Flora Nectar multicolor crystal floral necklace",
      },
      {
        imgId: "prod-flora-nectar-hover-8a1c",
        alt: "Majestic Flora Nectar — worn on neck, soft natural light",
        query: "Majestic Flora Nectar crystal necklace worn on neck model",
      },
    ],
  },
  {
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies · 18K Gold Plated",
    price: 38,
    category: "huggies",
    rating: 4.7,
    reviews: 304,
    description:
      "A polished gold dome in our signature huggie silhouette. Sculptural, weighty in the hand, featherlight on the lobe — your new every day.",
    materials:
      "Solid 18K gold plating over a brass core. Hypoallergenic post and secure hinged closure.",
    care: "Remove before sleeping and showering. Wipe dry after wear. Store flat.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      {
        imgId: "prod-sphere-huggies-primary-5f8e",
        alt: "Golden Sphere Huggies — chunky gold dome earrings pair on dark background",
        query: "Golden Sphere Huggies chunky gold dome huggie earrings pair",
      },
      {
        imgId: "prod-sphere-huggies-hover-9d2b",
        alt: "Golden Sphere Huggies — worn on ear, studio portrait",
        query: "Golden Sphere Huggies chunky gold dome earrings worn on ear",
      },
    ],
  },
  {
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Drop Earrings · Filigree",
    price: 54,
    category: "earrings",
    rating: 4.8,
    reviews: 176,
    description:
      "Hand-finished filigree inspired by antique lace. A drop earring that moves with you — light, airy, and unmistakably considered.",
    materials:
      "18K gold plated brass. Hand-set cubic zirconia. Hypoallergenic, nickel-free.",
    care: "Polish with a soft dry cloth. Avoid water, perfume, and lotion on the metal.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      {
        imgId: "prod-amber-lace-primary-4a7c",
        alt: "Amber Lace Earrings — textured gold filigree drop earrings",
        query: "Amber Lace textured gold filigree drop earrings",
      },
      {
        imgId: "prod-amber-lace-hover-6b2e",
        alt: "Amber Lace Earrings — worn, soft afternoon light",
        query: "Amber Lace filigree drop earrings worn on model",
      },
    ],
  },
  {
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Gift Set · Earring + Necklace",
    price: 95,
    category: "earrings",
    rating: 5.0,
    reviews: 89,
    description:
      "A matching earring and necklace set, presented in our signature gift box. Designed to be unwrapped — and remembered.",
    materials:
      "18K gold plated brass throughout. Hypoallergenic. Includes signature velvet pouch and gift box.",
    care: "Store in the included box. Polish gently with a soft cloth. Remove before water exposure.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns. Gift receipts available at checkout.",
    variants: [
      { id: "gold", label: "Gold" },
    ],
    images: [
      {
        imgId: "prod-royal-heirloom-primary-1c9a",
        alt: "Royal Heirloom Set — gold earring and necklace set in gift box",
        query: "Royal Heirloom gold earring and necklace gift set in box",
      },
      {
        imgId: "prod-royal-heirloom-hover-7f5b",
        alt: "Royal Heirloom Set — worn, editorial portrait",
        query: "Royal Heirloom gold jewelry set worn on model editorial",
      },
    ],
  },
];

export const findProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

export const relatedProducts = (slug, n = 4) => {
  const others = PRODUCTS.filter((p) => p.slug !== slug);
  return others.slice(0, n);
};

// Used in homepage bestsellers & featured rail.
export const bestsellers = () => PRODUCTS.slice(0, 5);
