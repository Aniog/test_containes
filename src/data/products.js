// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    shortDesc: "A delicate gold ear cuff adorned with a shimmering crystal accent. Effortlessly elegant, no piercing required.",
    description: "The Vivid Aura ear cuff wraps gently around the upper ear, featuring a single faceted crystal that catches the light beautifully. Crafted in 18K gold-plated brass, it's lightweight enough for all-day wear yet striking enough to stand alone.",
    materials: "18K gold-plated brass, AAA-grade cubic zirconia crystal. Nickel-free, hypoallergenic.",
    variants: ["Gold Tone", "Silver Tone"],
    images: [
      { id: "vivid-aura-img1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { id: "vivid-aura-img2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
    imgId: "vivid-aura-main-a1b2c3",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
    related: ["majestic-flora-nectar", "amber-lace-earrings", "golden-sphere-huggies"],
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    badge: "New",
    shortDesc: "A multicolor floral crystal necklace that blooms at the collarbone. Garden-inspired, endlessly wearable.",
    description: "Inspired by wildflower meadows, the Majestic Flora Nectar necklace features hand-set multicolor crystals arranged in a delicate floral motif. The 16\" + 2\" extender chain ensures a perfect fit on every neckline.",
    materials: "18K gold-plated sterling silver, hand-set multicolor crystals. Nickel-free, hypoallergenic.",
    variants: ["Gold Tone", "Silver Tone"],
    images: [
      { id: "flora-img1", titleId: "flora-title", descId: "flora-desc" },
      { id: "flora-img2", titleId: "flora-title", descId: "flora-desc" },
    ],
    imgId: "flora-main-d4e5f6",
    titleId: "product-flora-title",
    descId: "product-flora-desc",
    related: ["vivid-aura-jewels", "royal-heirloom-set", "amber-lace-earrings"],
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    badge: "Bestseller",
    shortDesc: "Chunky gold dome huggie earrings with a satisfying weight and mirror-polished finish.",
    description: "The Golden Sphere Huggies are the perfect everyday earring — substantial enough to make a statement, small enough to wear from morning to night. The dome shape catches light from every angle, giving a luxurious look at an accessible price.",
    materials: "18K gold-plated brass, mirror-polished finish. Nickel-free, hypoallergenic.",
    variants: ["Gold Tone", "Silver Tone"],
    images: [
      { id: "huggies-img1", titleId: "huggies-title", descId: "huggies-desc" },
      { id: "huggies-img2", titleId: "huggies-title", descId: "huggies-desc" },
    ],
    imgId: "huggies-main-g7h8i9",
    titleId: "product-huggies-title",
    descId: "product-huggies-desc",
    related: ["vivid-aura-jewels", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 67,
    badge: null,
    shortDesc: "Textured gold filigree drop earrings with an heirloom-inspired lattice pattern.",
    description: "The Amber Lace earrings draw from antique filigree traditions, reimagined in a modern drop silhouette. Each earring features an intricate lattice of gold wire, creating a lace-like texture that moves beautifully with the wearer.",
    materials: "18K gold-plated brass, hand-finished filigree. Nickel-free, hypoallergenic.",
    variants: ["Gold Tone", "Silver Tone"],
    images: [
      { id: "amber-img1", titleId: "amber-title", descId: "amber-desc" },
      { id: "amber-img2", titleId: "amber-title", descId: "amber-desc" },
    ],
    imgId: "amber-main-j1k2l3",
    titleId: "product-amber-title",
    descId: "product-amber-desc",
    related: ["vivid-aura-jewels", "golden-sphere-huggies", "royal-heirloom-set"],
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviewCount: 45,
    badge: "Gift Set",
    shortDesc: "A curated gift-boxed earring and necklace set — the perfect luxury gift for someone special.",
    description: "The Royal Heirloom Set pairs our signature stud earrings with a delicate pendant necklace, presented in a signature Velmora gift box with satin ribbon. Designed to be gifted, treasured, and worn for years.",
    materials: "18K gold-plated brass, cubic zirconia accents. Nickel-free, hypoallergenic. Includes Velmora gift box.",
    variants: ["Gold Tone", "Silver Tone"],
    images: [
      { id: "royal-img1", titleId: "royal-title", descId: "royal-desc" },
      { id: "royal-img2", titleId: "royal-title", descId: "royal-desc" },
    ],
    imgId: "royal-main-m4n5o6",
    titleId: "product-royal-title",
    descId: "product-royal-desc",
    related: ["majestic-flora-nectar", "amber-lace-earrings", "vivid-aura-jewels"],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings", imgId: "cat-earrings-p7q8r9", titleId: "cat-earrings-title" },
  { id: "necklaces", label: "Necklaces", imgId: "cat-necklaces-s1t2u3", titleId: "cat-necklaces-title" },
  { id: "huggies", label: "Huggies", imgId: "cat-huggies-v4w5x6", titleId: "cat-huggies-title" },
];

export const ugcItems = [
  { id: "ugc-1", caption: "My everyday stack", imgId: "ugc-img-1-y7z8a9", titleId: "ugc-1-title" },
  { id: "ugc-2", caption: "The perfect gift", imgId: "ugc-img-2-b1c2d3", titleId: "ugc-2-title" },
  { id: "ugc-3", caption: "Wearing the Aura cuff", imgId: "ugc-img-3-e4f5g6", titleId: "ugc-3-title" },
  { id: "ugc-4", caption: "Flora Nectar moment", imgId: "ugc-img-4-h7i8j9", titleId: "ugc-4-title" },
  { id: "ugc-5", caption: "Golden hour huggies", imgId: "ugc-img-5-k1l2m3", titleId: "ugc-5-title" },
];

export const testimonials = [
  {
    id: "t1",
    text: "I've been wearing the Vivid Aura cuff every single day. It's the first thing people notice and the last thing I take off.",
    author: "Sophie M.",
    rating: 5,
  },
  {
    id: "t2",
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. Absolutely stunning quality.",
    author: "Priya K.",
    rating: 5,
  },
  {
    id: "t3",
    text: "Finally found jewelry that looks expensive but doesn't break the bank. The Flora Nectar necklace is pure magic.",
    author: "Camille R.",
    rating: 5,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id || p.slug === id);
export const getRelatedProducts = (product) =>
  (product?.related || []).map((id) => getProductById(id)).filter(Boolean);
