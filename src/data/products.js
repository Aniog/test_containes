// Velmora seed product catalog.
// Imagery is loaded via the strk-img stock system — see IMAGE_GUIDELINES.
// `imgId` is a stable, unique handle for each image tag.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    subcategory: "Ear Cuff",
    price: 42,
    rating: 4.8,
    reviews: 132,
    tone: "Gold",
    toneOptions: ["Gold", "Silver"],
    shortDescription:
      "A whisper of crystal wrapped in 18K gold-plated brass — an ear cuff that catches the light with every turn.",
    description:
      "The Vivid Aura Jewels ear cuff is a quiet statement: a single hand-set crystal cradled in a polished, hypoallergenic gold-plated brass band. Designed to be worn alone, stacked, or paired with the Golden Sphere Huggies for an editorial ear curation.",
    materials:
      "18K gold-plated brass, hand-set crystal, hypoallergenic post. Free of nickel, lead, and cadmium.",
    care: "Store dry in the velvet pouch provided. Avoid water, perfume, and lotion. Gently buff with the included polishing cloth to maintain its luster.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 4–7 business days. 30-day returns on unworn items in original packaging.",
    imgIds: [
      "vivid-aura-front-a1b2c3",
      "vivid-aura-side-d4e5f6",
      "vivid-aura-detail-g7h8i9",
      "vivid-aura-on-ear-j0k1l2",
    ],
    imgTitles: [
      "Vivid Aura Jewels front",
      "Vivid Aura Jewels side",
      "Vivid Aura Jewels detail",
      "Vivid Aura Jewels on ear",
    ],
    tags: ["bestseller", "new"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    subcategory: "Pendant",
    price: 68,
    rating: 4.9,
    reviews: 218,
    tone: "Gold",
    toneOptions: ["Gold"],
    shortDescription:
      "A bouquet of warm-toned crystals set in 18K gold plating — a wearable garden.",
    description:
      "The Majestic Flora Nectar necklace layers hand-set crystals in amber, citrine, and soft champagne tones into a single pendant. Suspended from a delicate 18K gold-plated chain, it moves with you and flatters every neckline.",
    materials:
      "18K gold-plated brass chain and setting, hand-set crystals. Hypoallergenic, nickel-free.",
    care: "Remove before bathing, swimming, or sleeping. Wipe gently with a soft, dry cloth after wear. Store in the original pouch away from direct sunlight.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 4–7 business days. 30-day returns on unworn items in original packaging.",
    imgIds: [
      "majestic-flora-front-m3n4o5",
      "majestic-flora-back-p6q7r8",
      "majestic-flora-model-s9t0u1",
      "majestic-flora-detail-v2w3x4",
    ],
    imgTitles: [
      "Majestic Flora Nectar front",
      "Majestic Flora Nectar back",
      "Majestic Flora Nectar on model",
      "Majestic Flora Nectar detail",
    ],
    tags: ["bestseller"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    subcategory: "Huggie Hoop",
    price: 38,
    rating: 4.7,
    reviews: 304,
    tone: "Gold",
    toneOptions: ["Gold", "Silver"],
    shortDescription:
      "A polished gold dome huggie — weighty, sculptural, and endlessly wearable.",
    description:
      "The Golden Sphere Huggies are an everyday luxury: a chunky gold-plated brass dome that hugs the lobe with a satisfying weight. The secure hinge closure keeps them in place from morning meetings to candlelit dinners.",
    materials:
      "18K gold-plated brass, hypoallergenic. Secure hinged post closure.",
    care: "Avoid contact with water, perfume, and lotion. Polish gently with the included cloth. Store in the velvet pouch to prevent scratching.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 4–7 business days. 30-day returns on unworn items in original packaging.",
    imgIds: [
      "golden-sphere-front-y5z6a7",
      "golden-sphere-pair-b8c9d0",
      "golden-sphere-on-ear-e1f2g3",
      "golden-sphere-detail-h4i5j6",
    ],
    imgTitles: [
      "Golden Sphere Huggies front",
      "Golden Sphere Huggies pair",
      "Golden Sphere Huggies on ear",
      "Golden Sphere Huggies detail",
    ],
    tags: ["bestseller"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    subcategory: "Drop Earring",
    price: 54,
    rating: 4.8,
    reviews: 167,
    tone: "Gold",
    toneOptions: ["Gold"],
    shortDescription:
      "Filigree in motion — textured gold drop earrings that sway like lace in candlelight.",
    description:
      "The Amber Lace Earrings are inspired by heirloom lace, recast in 18K gold-plated brass. Each drop is hand-finished with a delicate openwork pattern that catches the light from every angle, finished with a small post for everyday comfort.",
    materials:
      "18K gold-plated brass, hand-finished filigree. Hypoallergenic post.",
    care: "Remove before sleeping and showering. Polish with a soft, dry cloth. Store flat in the provided pouch to protect the filigree.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 4–7 business days. 30-day returns on unworn items in original packaging.",
    imgIds: [
      "amber-lace-front-k7l8m9",
      "amber-lace-back-n0o1p2",
      "amber-lace-on-ear-q3r4s5",
      "amber-lace-detail-t6u7v8",
    ],
    imgTitles: [
      "Amber Lace Earrings front",
      "Amber Lace Earrings back",
      "Amber Lace Earrings on ear",
      "Amber Lace Earrings detail",
    ],
    tags: ["bestseller"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    subcategory: "Gift Set",
    price: 95,
    rating: 5.0,
    reviews: 89,
    tone: "Gold",
    toneOptions: ["Gold"],
    shortDescription:
      "A gift-boxed earring and necklace set — a modern heirloom, ready to give.",
    description:
      "The Royal Heirloom Set pairs the Golden Sphere Huggies with a delicate matching pendant necklace, presented together in a signature cream-and-gold gift box. Crafted in 18K gold-plated brass and finished by hand, it is the modern heirloom — the piece you'll wear forever, and the one they'll remember receiving.",
    materials:
      "18K gold-plated brass (necklace and earrings). Hypoallergenic. Includes signature gift box and velvet pouch.",
    care: "Remove before sleeping, showering, and swimming. Polish gently with a soft cloth. Store together in the original gift box.",
    shipping:
      "Free worldwide shipping on orders over $75. Standard delivery 4–7 business days. 30-day returns on unworn items in original packaging.",
    imgIds: [
      "royal-heirloom-set-box-w9x0y1",
      "royal-heirloom-set-earrings-z2a3b4",
      "royal-heirloom-set-necklace-c5d6e7",
      "royal-heirloom-set-worn-f8g9h0",
    ],
    imgTitles: [
      "Royal Heirloom Set gift box",
      "Royal Heirloom Set earrings",
      "Royal Heirloom Set necklace",
      "Royal Heirloom Set worn",
    ],
    tags: ["bestseller", "gift"],
  },
];

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "over-75", label: "Over $75", min: 75.01, max: Infinity },
];

export const materials = [
  { id: "gold-plated", label: "18K Gold Plated" },
  { id: "hypoallergenic", label: "Hypoallergenic" },
];

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
  { id: "newest", label: "Newest" },
];

export const testimonials = [
  {
    id: 1,
    name: "Olivia M.",
    quote:
      "I wear the Golden Sphere Huggies almost every day. The weight feels luxurious, and they go with absolutely everything.",
    rating: 5,
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Sophia R.",
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made it feel like a real moment.",
    rating: 5,
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Amelia T.",
    quote:
      "Quietly beautiful — exactly the kind of jewelry I want to wear and never take off. Already eyeing the Flora necklace.",
    rating: 5,
    product: "Majestic Flora Nectar",
  },
];

export const reelCards = [
  {
    id: "reel-1",
    handle: "@maya.k",
    caption: "the huggies that go with everything",
  },
  {
    id: "reel-2",
    handle: "@lenah.style",
    caption: "soft gold for slow mornings",
  },
  {
    id: "reel-3",
    handle: "@studio.aria",
    caption: "stacked the aura cuff, obsessed",
  },
  {
    id: "reel-4",
    handle: "@noor.everyday",
    caption: "my everyday heirloom",
  },
  {
    id: "reel-5",
    handle: "@elise.morgn",
    caption: "the flora necklace, styled three ways",
  },
  {
    id: "reel-6",
    handle: "@tessa.wears",
    caption: "the set that started the collection",
  },
];

export const categoryTiles = [
  {
    id: "tile-earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    imgId: "tile-earrings-img-9a1b2c",
  },
  {
    id: "tile-necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    imgId: "tile-necklaces-img-3d4e5f",
  },
  {
    id: "tile-huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    imgId: "tile-huggies-img-6g7h8i",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getBestsellers = () => products.filter((p) => p.tags.includes("bestseller"));
export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
