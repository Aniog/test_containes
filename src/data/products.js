// Velmora — seed catalogue
// Each product has a primary `image` (and optional `imageHover`) for cards,
// plus a `gallery` for the PDP. Image ids match the strk-img data-attribute
// pattern so the project's image-search system can resolve warm-lit
// demi-fine gold jewelry photography at build / runtime.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const materials = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold-plated",
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: "gold",
    tagline: "Crystal accent · ear cuff",
    description:
      "An ear cuff sculpted to catch the light from every angle. Hand-set with a faceted crystal that glints like evening sun on brass — a quiet statement made for the moments you want to feel seen.",
    details: [
      "18K gold-plated brass",
      "Surgical steel post · hypoallergenic",
      "No piercing required · ear cuff fit",
      "Lightweight 3.2g per cuff",
    ],
    care: [
      "Remove before showering, swimming, or exercising.",
      "Store in the velvet pouch provided to slow oxidation.",
      "Wipe gently with the included polishing cloth.",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80.",
      "Standard delivery 4–7 business days.",
      "30-day returns · pre-paid label included.",
    ],
    image: {
      id: "product-vivid-aura",
      query: ["vivid-aura-crystal", "vivid-aura-name"],
      ratio: "3x4",
      width: 800,
    },
    imageHover: {
      id: "product-vivid-aura-alt",
      query: ["vivid-aura-crystal", "vivid-aura-name"],
      ratio: "3x4",
      width: 800,
    },
    gallery: [
      { id: "gallery-vivid-aura-1", ratio: "3x4", width: 900, query: ["vivid-aura-name"] },
      { id: "gallery-vivid-aura-2", ratio: "3x4", width: 900, query: ["vivid-aura-name"] },
      { id: "gallery-vivid-aura-3", ratio: "3x4", width: 900, query: ["vivid-aura-name"] },
      { id: "gallery-vivid-aura-4", ratio: "3x4", width: 900, query: ["vivid-aura-name"] },
    ],
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "crystal",
    price: 68,
    rating: 4.9,
    reviews: 214,
    tone: "gold",
    tagline: "Multicolor floral crystal · 18\"",
    description:
      "A botanical cluster of pastel crystals suspended on a delicate cable chain. Each stone is hand-set in a warm brass setting — small, considered, and unmistakably editorial.",
    details: [
      "18K gold-plated brass",
      "Pastel crystal cluster · 7 stones",
      "Adjustable 16–18\" cable chain with 2\" extender",
      "Lobster clasp closure",
    ],
    care: [
      "Avoid contact with perfume, lotion, and water.",
      "Lay flat in the soft pouch to protect the stones.",
      "Polish chain gently with a dry cloth.",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80.",
      "Standard delivery 4–7 business days.",
      "30-day returns · pre-paid label included.",
    ],
    image: {
      id: "product-flora-nectar",
      query: ["flora-nectar-name", "flora-nectar-crystal"],
      ratio: "3x4",
      width: 800,
    },
    imageHover: {
      id: "product-flora-nectar-alt",
      query: ["flora-nectar-name", "flora-nectar-crystal"],
      ratio: "3x4",
      width: 800,
    },
    gallery: [
      { id: "gallery-flora-1", ratio: "3x4", width: 900, query: ["flora-nectar-name"] },
      { id: "gallery-flora-2", ratio: "3x4", width: 900, query: ["flora-nectar-name"] },
      { id: "gallery-flora-3", ratio: "3x4", width: 900, query: ["flora-nectar-name"] },
      { id: "gallery-flora-4", ratio: "3x4", width: 900, query: ["flora-nectar-name"] },
    ],
    badge: "New",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold-plated",
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: "gold",
    tagline: "Chunky gold dome · huggie hoop",
    description:
      "A bolder take on the everyday huggie. Sculpted as a half-dome of warm gold, they catch the light without shouting — the kind of earrings you forget you're wearing, until someone asks.",
    details: [
      "18K gold-plated brass",
      "Hinged snap closure · pierced ear",
      "12mm outer diameter",
      "Hypoallergenic · nickel-free",
    ],
    care: [
      "Keep dry · remove before sleeping.",
      "Store flat to preserve the dome shape.",
      "Polish with the included cloth.",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80.",
      "Standard delivery 4–7 business days.",
      "30-day returns · pre-paid label included.",
    ],
    image: {
      id: "product-golden-sphere",
      query: ["golden-sphere-name", "golden-sphere-huggie"],
      ratio: "3x4",
      width: 800,
    },
    imageHover: {
      id: "product-golden-sphere-alt",
      query: ["golden-sphere-name", "golden-sphere-huggie"],
      ratio: "3x4",
      width: 800,
    },
    gallery: [
      { id: "gallery-sphere-1", ratio: "3x4", width: 900, query: ["golden-sphere-name"] },
      { id: "gallery-sphere-2", ratio: "3x4", width: 900, query: ["golden-sphere-name"] },
      { id: "gallery-sphere-3", ratio: "3x4", width: 900, query: ["golden-sphere-name"] },
      { id: "gallery-sphere-4", ratio: "3x4", width: 900, query: ["golden-sphere-name"] },
    ],
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold-plated",
    price: 54,
    rating: 4.8,
    reviews: 97,
    tone: "gold",
    tagline: "Filigree drop · textured gold",
    description:
      "Lace-cut filigree drops that move like sunlight through sheer curtains. Lightweight enough for daily wear, ornate enough to feel like a keepsake.",
    details: [
      "18K gold-plated brass",
      "Filigree drop · 32mm length",
      "Surgical steel post · hypoallergenic",
      "Lightweight 2.4g per earring",
    ],
    care: [
      "Store upright in the box to protect the filigree.",
      "Avoid hairspray and perfume contact.",
      "Polish with a soft, dry cloth.",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80.",
      "Standard delivery 4–7 business days.",
      "30-day returns · pre-paid label included.",
    ],
    image: {
      id: "product-amber-lace",
      query: ["amber-lace-name", "amber-lace-filigree"],
      ratio: "3x4",
      width: 800,
    },
    imageHover: {
      id: "product-amber-lace-alt",
      query: ["amber-lace-name", "amber-lace-filigree"],
      ratio: "3x4",
      width: 800,
    },
    gallery: [
      { id: "gallery-lace-1", ratio: "3x4", width: 900, query: ["amber-lace-name"] },
      { id: "gallery-lace-2", ratio: "3x4", width: 900, query: ["amber-lace-name"] },
      { id: "gallery-lace-3", ratio: "3x4", width: 900, query: ["amber-lace-name"] },
      { id: "gallery-lace-4", ratio: "3x4", width: 900, query: ["amber-lace-name"] },
    ],
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    material: "crystal",
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: "gold",
    tagline: "Gift-boxed earring & necklace set",
    description:
      "A matching crystal earring and necklace duo, presented in our keepsake gift box. Designed for the moment you want to give something that feels like an heirloom from the moment it's opened.",
    details: [
      "18K gold-plated brass",
      "Pastel crystal · 4 stones",
      "Earrings: surgical steel post",
      "Necklace: 16–18\" adjustable chain",
      "Velvet-lined gift box included",
    ],
    care: [
      "Remove before showering or sleeping.",
      "Store in the original box between wears.",
      "Wipe gently with the included polishing cloth.",
    ],
    shipping: [
      "Free worldwide shipping on orders over $80.",
      "Standard delivery 4–7 business days.",
      "30-day returns · pre-paid label included.",
    ],
    image: {
      id: "product-heirloom-set",
      query: ["royal-heirloom-name", "royal-heirloom-set"],
      ratio: "3x4",
      width: 800,
    },
    imageHover: {
      id: "product-heirloom-set-alt",
      query: ["royal-heirloom-name", "royal-heirloom-set"],
      ratio: "3x4",
      width: 800,
    },
    gallery: [
      { id: "gallery-heirloom-1", ratio: "3x4", width: 900, query: ["royal-heirloom-name"] },
      { id: "gallery-heirloom-2", ratio: "3x4", width: 900, query: ["royal-heirloom-name"] },
      { id: "gallery-heirloom-3", ratio: "3x4", width: 900, query: ["royal-heirloom-name"] },
      { id: "gallery-heirloom-4", ratio: "3x4", width: 900, query: ["royal-heirloom-name"] },
    ],
    badge: "Gift",
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (x) => (x.category === product.category ? -1 : 0);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, limit);
}

export const ugcReels = [
  {
    id: "reel-ear-stack",
    caption: "The everyday ear stack",
    handle: "@velmora · Maya",
    query: "ear-stack",
  },
  {
    id: "reel-floral-pendant",
    caption: "Flora, in soft light",
    handle: "@velmora · Iris",
    query: "floral-pendant",
  },
  {
    id: "reel-huggie-moment",
    caption: "Huggies, all day",
    handle: "@velmora · Liana",
    query: "huggie-hoops",
  },
  {
    id: "reel-gift-unboxing",
    caption: "A little something, kept",
    handle: "@velmora · Nora",
    query: "jewelry-gift-unboxing",
  },
  {
    id: "reel-morning-light",
    caption: "Morning light, gold on skin",
    handle: "@velmora · Cleo",
    query: "gold-on-skin",
  },
  {
    id: "reel-evening-set",
    caption: "Evening, considered",
    handle: "@velmora · Eden",
    query: "evening-jewelry",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Ava M.",
    rating: 5,
    quote:
      "I wear the Golden Sphere Huggies almost every day. They look more expensive than they are and haven't turned at all after months of wear.",
  },
  {
    id: "t2",
    name: "Priya R.",
    rating: 5,
    quote:
      "The packaging alone is worth it. The Royal Heirloom Set was a gift and my sister hasn't taken it off — she said it felt like a real heirloom.",
  },
  {
    id: "t3",
    name: "Lena K.",
    rating: 5,
    quote:
      "Quietly beautiful pieces. The Flora Nectar catches every kind of light. It's the kind of necklace I reach for without thinking.",
  },
];

export const trustItems = [
  { id: "ship", label: "Free worldwide shipping" },
  { id: "returns", label: "30-day returns" },
  { id: "gold", label: "18K gold plated" },
  { id: "hypo", label: "Hypoallergenic" },
];
