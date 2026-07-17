export const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    material: "gold",
    materialLabel: "18K Gold Plated",
    description:
      "A sculptural ear cuff that hugs the ear with a single hand-set crystal — light-catching, weightless, and made to be worn from morning meetings to midnight.",
    materials:
      "18k gold plated over recycled brass. Hand-set cubic zirconia crystal. Nickel-free and hypoallergenic. To keep its glow, avoid water, perfume and lotions, and store in the pouch provided.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviews: 98,
    badge: "New",
    material: "gold",
    materialLabel: "18K Gold Plated",
    description:
      "A garden in bloom, caught in gold. Multicolor crystals are arranged by hand into a delicate floral cluster that rests just below the collarbone.",
    materials:
      "18k gold plated over recycled brass with multicolor cubic zirconia. 16\" chain with 2\" extender. Nickel-free and hypoallergenic. Wipe gently with a soft cloth after wear.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    material: "gold",
    materialLabel: "18K Gold Plated",
    description:
      "Our signature dome huggie — rounded, polished, and quietly bold. The pair you will reach for every single day.",
    materials:
      "18k gold plated over recycled brass. Hinged closure for all-day comfort. Nickel-free and hypoallergenic. Keep dry and store separately to preserve the high-polish finish.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    category: "Earrings",
    price: 54,
    rating: 4.9,
    reviews: 87,
    badge: null,
    material: "gold",
    materialLabel: "18K Gold Plated",
    description:
      "Intricate filigree, cast in warm gold and finished by hand. A drop earring with the delicacy of lace and the presence of an heirloom.",
    materials:
      "18k gold plated over recycled brass with a hand-textured filigree finish. Nickel-free and hypoallergenic. Store flat in the provided box to protect the lace detail.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    category: "Sets",
    price: 95,
    rating: 5.0,
    reviews: 64,
    badge: "Gift-Ready",
    material: "gold",
    materialLabel: "18K Gold Plated",
    description:
      "A matched earring and necklace set, presented in our signature gift box. The piece you give when you want the moment to last.",
    materials:
      "18k gold plated over recycled brass, hand-set crystals. Arrives in the Velmora signature gift box with care card. Nickel-free and hypoallergenic.",
  },
];

export const VARIANTS = [
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const formatPrice = (n) => `$${Number(n).toFixed(0)}`;

export const CATEGORIES = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const TESTIMONIALS = [
  {
    quote:
      "The sphere huggies are the only earrings I wear now. Three months in, they still look brand new.",
    name: "Amelia R.",
  },
  {
    quote:
      "Bought the Heirloom Set for my sister's birthday. The box alone made her gasp — the jewelry did the rest.",
    name: "Sofia M.",
  },
  {
    quote:
      "Quietly beautiful pieces. People assume they cost five times the price, and I never correct them.",
    name: "Priya K.",
  },
];

export const REELS = [
  { id: "reel-1", caption: "Morning light, golden hour all day" },
  { id: "reel-2", caption: "Layers that never tangle" },
  { id: "reel-3", caption: "The everyday dome" },
  { id: "reel-4", caption: "Dressed up, never overdone" },
  { id: "reel-5", caption: "Worn on repeat" },
  { id: "reel-6", caption: "Heirlooms in the making" },
];
