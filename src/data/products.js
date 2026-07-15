// Seed product catalog. Every product carries enough metadata to drive
// filtering, sorting, related products, the cart, and the product page.
//
// Image queries are written so the strk-img system can fetch warm-lit
// gold-jewelry stock imagery. We use sibling text nodes as references for
// accurate image search context (per the project image rules).

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "sets", label: "Sets" },
];

export const MATERIALS = [
  { slug: "18k-gold-plated", label: "18K Gold Plated" },
  { slug: "sterling-silver", label: "Sterling Silver" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    subtitle: "Crystal-set gold ear cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    short:
      "An open ear cuff traced with a single crystal, set to catch light from every angle.",
    description:
      "The Vivid Aura Cuff is hand-finished in 18K gold plated brass with a hand-set crystal accent. Designed to sit comfortably along the helix without piercing, it slips on in seconds and stays put from morning to evening.",
    materials:
      "18K gold plated brass, hypoallergenic surgical-steel post-free core, hand-set Austrian crystal. Nickel-free and lead-free. Tarnish-resistant coating.",
    care: "Avoid water, perfume, and lotion. Store in the suede pouch provided. Wipe gently with the included polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
    images: [
      { ratio: "1x1", query: "crystal-set gold ear cuff on dark linen editorial jewelry still life" },
      { ratio: "1x1", query: "closeup gold ear cuff with crystal accent on model ear warm light" },
      { ratio: "4x3", query: "gold ear cuff crystals on warm cream background editorial detail" },
      { ratio: "4x3", query: "model wearing gold ear cuff editorial portrait warm tones" },
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal pendant",
    price: 68,
    category: "necklaces",
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.9,
    reviewCount: 487,
    badge: "New",
    short:
      "A garden of faceted crystals set in 18K gold, suspended on a delicate cable chain.",
    description:
      "Hand-set with a constellation of pastel crystals in soft champagne, blush, and moss, the Majestic Flora Nectar is a quietly whimsical pendant. The 18-inch cable chain layers beautifully with our other necklaces or sits perfectly on its own.",
    materials:
      "18K gold plated brass, 16–18 inch adjustable cable chain, hand-set multi-cut crystals. Lead-free, nickel-free, hypoallergenic.",
    care: "Remove before showering, swimming, or applying fragrance. Polish gently with a soft cloth; store flat in the suede pouch to protect the stone settings.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Each piece is inspected and packaged in our signature gift box, ready for gifting.",
    images: [
      { ratio: "1x1", query: "multicolor floral crystal pendant necklace on warm dark background editorial" },
      { ratio: "1x1", query: "closeup of floral gold pendant with pastel crystals macro" },
      { ratio: "4x3", query: "model wearing floral crystal pendant necklace editorial portrait" },
      { ratio: "4x3", query: "gold floral necklace on linen warm still life jewelry flat lay" },
    ],
    related: ["royal-heirloom-set", "vivid-aura-cuff", "amber-lace-earrings"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.7,
    reviewCount: 921,
    badge: "Bestseller",
    short:
      "A weighty little dome in 18K gold. The everyday huggie you'll reach for daily.",
    description:
      "Sculpted from solid brass and plated in a thick layer of 18K gold, the Golden Sphere Huggies have the satisfying weight of fine jewelry without the price tag. Hinged for easy on-and-off, comfortable enough to sleep in.",
    materials:
      "Solid brass core, 18K gold plating (2.5 micron), hypoallergenic and nickel-free. Hinged snap closure.",
    care: "Water-resistant, but we recommend removing before swimming in chlorine or salt water. Buff with the included cloth to maintain shine.",
    shipping:
      "Free worldwide shipping over $75. 30-day returns. Pairs ship in a stackable jewelry box designed for everyday storage.",
    images: [
      { ratio: "1x1", query: "chunky gold dome huggie hoop earrings on dark warm background still life" },
      { ratio: "1x1", query: "gold huggie earrings worn on earlobe closeup warm light" },
      { ratio: "4x3", query: "pair of gold huggie earrings on linen cream background" },
      { ratio: "4x3", query: "model wearing chunky gold huggies editorial portrait" },
    ],
    related: ["vivid-aura-cuff", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Drops",
    subtitle: "Textured gold filigree drops",
    price: 54,
    category: "earrings",
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.8,
    reviewCount: 264,
    badge: "Limited",
    short:
      "Filigree-cast gold drops that move like fabric. Light, weightless, made to be noticed.",
    description:
      "Inspired by antique lace, the Amber Lace Drops are cast in 18K gold plated brass with an openwork pattern that catches the light at every turn. The movement is what makes them — wear them with everything from linen shirts to silk slips.",
    materials:
      "18K gold plated brass, hypoallergenic sterling-silver post and butterfly back. Nickel-free, lead-free.",
    care: "Avoid contact with water, perfume, and lotion. Store flat in the suede pouch to preserve the filigree.",
    shipping:
      "Free worldwide shipping over $75. 30-day returns. Each pair is hand-inspected and arrives in our signature gift box.",
    images: [
      { ratio: "1x1", query: "gold filigree drop earrings on dark warm background still life" },
      { ratio: "1x1", query: "closeup of textured gold lace drop earrings macro" },
      { ratio: "4x3", query: "model wearing gold filigree drop earrings editorial portrait" },
      { ratio: "4x3", query: "gold lace earrings on linen cream detail jewelry flat lay" },
    ],
    related: ["vivid-aura-cuff", "golden-sphere-huggies", "majestic-flora-nectar"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring & necklace duo",
    price: 95,
    category: "sets",
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.9,
    reviewCount: 178,
    badge: "Gift-Ready",
    short:
      "A matching earring and necklace pair, presented in our heirloom gift box.",
    description:
      "The Royal Heirloom Set pairs our signature huggies with a delicate cable-chain necklace, finished with a single hand-set crystal drop. Arrives in our cotton-lined gift box with ribbon, ready to give.",
    materials:
      "18K gold plated brass throughout, sterling-silver earring posts, hand-set crystal pendant. Hypoallergenic, nickel-free, lead-free.",
    care: "Remove before showering, swimming, or applying fragrance. Store in the included gift box; polish with the enclosed cloth as needed.",
    shipping:
      "Free worldwide shipping over $75. 30-day returns. Ships in 1–2 business days; express options available at checkout.",
    images: [
      { ratio: "1x1", query: "gold jewelry gift set in luxury cream box on linen dark background" },
      { ratio: "1x1", query: "matching gold huggies and crystal necklace set still life" },
      { ratio: "4x3", query: "model wearing gold earring and necklace set editorial portrait" },
      { ratio: "4x3", query: "gold jewelry set unwrapped in cream gift box detail" },
    ],
    related: ["golden-sphere-huggies", "majestic-flora-nectar", "amber-lace-earrings"],
  },
];

// O(1) lookup
export const PRODUCT_BY_ID = PRODUCTS.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

export function getProduct(id) {
  return PRODUCT_BY_ID[id];
}

export function getRelated(productId, limit = 3) {
  const product = PRODUCT_BY_ID[productId];
  if (!product) return [];
  const ids = product.related || [];
  return ids
    .map((id) => PRODUCT_BY_ID[id])
    .filter(Boolean)
    .slice(0, limit);
}

export function getBestsellers(limit = 5) {
  // Bestsellers are flagged with the badge, fallback to top rating.
  const flagged = PRODUCTS.filter((p) => p.badge === "Bestseller");
  const rest = PRODUCTS.filter((p) => p.badge !== "Bestseller")
    .sort((a, b) => b.rating - a.rating);
  return [...flagged, ...rest].slice(0, limit);
}

export function filterProducts({
  category = null,
  material = null,
  priceMin = null,
  priceMax = null,
  search = "",
} = {}) {
  return PRODUCTS.filter((p) => {
    if (category && p.category !== category) return false;
    if (material && p.material !== material) return false;
    if (priceMin != null && p.price < priceMin) return false;
    if (priceMax != null && p.price > priceMax) return false;
    if (search) {
      const q = search.toLowerCase();
      const hay = `${p.name} ${p.subtitle} ${p.short}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function sortProducts(products, sortKey) {
  const list = [...products];
  switch (sortKey) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    case "newest":
      // Use badge ordering as a proxy (New > Limited > others)
      return list.sort((a, b) => priority(b.badge) - priority(a.badge));
    case "featured":
    default:
      return list;
  }
}

function priority(badge) {
  switch (badge) {
    case "New": return 3;
    case "Limited": return 2;
    case "Bestseller": return 1;
    default: return 0;
  }
}
