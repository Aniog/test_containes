// Seed product catalog for Velmora Fine Jewelry.
// Each product has two image queries so the grid can swap on hover.
// "tone" variants: gold | silver
// "category": earrings | necklaces | huggies | sets

export const CATEGORIES = [
  { id: "earrings", label: "Earrings", count: 0 },
  { id: "necklaces", label: "Necklaces", count: 0 },
  { id: "huggies", label: "Huggies", count: 0 },
  { id: "sets", label: "Sets", count: 0 },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
  { id: "crystal", label: "Crystal" },
];

export const PRICE_BANDS = [
  { id: "u50", label: "Under $50", min: 0, max: 49.99 },
  { id: "50to75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75to100", label: "$75 – $100", min: 75.01, max: 100 },
  { id: "over100", label: "Over $100", min: 100.01, max: 9999 },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Crystal accent ear cuff",
    description:
      "An architectural ear cuff sculpted to catch the light from every angle. Set with a hand-set crystal accent that shimmers like morning dew against warm gold. Designed for the lobe, the helix, or stacked together.",
    price: 42,
    compareAt: null,
    rating: 4.8,
    reviews: 184,
    category: "earrings",
    materials: ["18k-gold", "crystal"],
    tones: ["gold"],
    badge: "Bestseller",
    img1: "Vivid Aura Jewels crystal accent ear cuff on warm skin editorial close-up",
    img2: "Vivid Aura Jewels crystal ear cuff side detail on linen",
    gallery: [
      "Vivid Aura Jewels crystal ear cuff editorial close-up on warm skin",
      "Vivid Aura Jewels ear cuff side detail soft focus on linen",
      "Vivid Aura Jewels ear cuff styled with gold hoops on model",
      "Vivid Aura Jewels ear cuff packaging on cream paper",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A garden captured in gold. The Majestic Flora Nectar necklace layers hand-set floral crystals in soft amber, blush, and champagne across a delicate 18K gold-plated chain. Light enough to wear with a silk tee, striking enough for evening.",
    price: 68,
    compareAt: null,
    rating: 4.9,
    reviews: 312,
    category: "necklaces",
    materials: ["18k-gold", "crystal"],
    tones: ["gold"],
    badge: "New",
    img1: "Majestic Flora Nectar multicolor floral crystal necklace editorial on linen",
    img2: "Majestic Flora Nectar floral crystal necklace on model neckline",
    gallery: [
      "Majestic Flora Nectar multicolor crystal necklace flat lay on linen",
      "Majestic Flora Nectar floral necklace on model neckline warm light",
      "Majestic Flora Nectar necklace detail of floral cluster",
      "Majestic Flora Nectar necklace styled with cream silk blouse",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "A quiet statement. The Golden Sphere Huggies are sculpted as solid domes in warm 18K gold plating, with a satisfying weight and a hinged click that closes with intention. The everyday heirloom, refined.",
    price: 38,
    compareAt: null,
    rating: 4.7,
    reviews: 421,
    category: "huggies",
    materials: ["18k-gold"],
    tones: ["gold", "silver"],
    badge: "Bestseller",
    img1: "Golden Sphere Huggies chunky gold dome huggie earrings editorial close-up",
    img2: "Golden Sphere Huggies gold dome huggies stacked on ear",
    gallery: [
      "Golden Sphere Huggies chunky gold dome huggies editorial close-up",
      "Golden Sphere Huggies gold dome huggies worn on model ear",
      "Golden Sphere Huggies gold huggies and silver huggies side by side",
      "Golden Sphere Huggies huggies in gift box on cream",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Inspired by antique lacework, the Amber Lace drop earrings are hand-finished in warm 18K gold with an openwork filigree pattern that catches light and shadow. Lightweight enough for all-day wear, intricate enough to be the moment.",
    price: 54,
    compareAt: null,
    rating: 4.8,
    reviews: 156,
    category: "earrings",
    materials: ["18k-gold"],
    tones: ["gold"],
    badge: null,
    img1: "Amber Lace textured gold filigree drop earrings editorial close-up",
    img2: "Amber Lace gold filigree drop earrings on model ear warm light",
    gallery: [
      "Amber Lace textured gold filigree drop earrings on linen",
      "Amber Lace filigree drop earrings worn on model ear warm light",
      "Amber Lace earrings detail of filigree pattern",
      "Amber Lace earrings styled with cream cashmere",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring and necklace set",
    description:
      "The set designed for gifting — and for keeping. The Royal Heirloom Set pairs a luminous crystal drop necklace with matching earrings, presented in our signature cream and gold box with a hand-tied ribbon. Heirlooms in the making.",
    price: 95,
    compareAt: 118,
    rating: 5.0,
    reviews: 89,
    category: "sets",
    materials: ["18k-gold", "crystal"],
    tones: ["gold"],
    badge: "Gift-Ready",
    img1: "Royal Heirloom Set gift-boxed earring and necklace set editorial",
    img2: "Royal Heirloom Set gold earring and necklace set in cream gift box",
    gallery: [
      "Royal Heirloom Set gift-boxed earring and necklace set on linen",
      "Royal Heirloom Set necklace and earring set open gift box",
      "Royal Heirloom Set earrings and necklace worn on model",
      "Royal Heirloom Set gold jewelry set styled on vanity",
    ],
  },
];

// Compute category counts from products
CATEGORIES.forEach((cat) => {
  cat.count = PRODUCTS.filter((p) => p.category === cat.id).length;
});

export function findProduct(idOrSlug) {
  return (
    PRODUCTS.find((p) => p.id === idOrSlug) ||
    PRODUCTS.find((p) => p.id === slugify(idOrSlug)) ||
    null
  );
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getRelatedProducts(product, n = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  )
    .concat(
      PRODUCTS.filter(
        (p) => p.id !== product.id && p.category !== product.category,
      ),
    )
    .slice(0, n);
}

export function getBestsellers(n = 5) {
  return [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, n);
}
