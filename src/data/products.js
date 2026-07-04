// Seed product catalog for Velmora Fine Jewelry
// Each product carries enough metadata to render cards, detail pages, filters, and related products.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const materials = [
  { id: "18k-gold-plated", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    shortDescription:
      "A delicate ear cuff with a single crystal accent — designed to catch light from every angle.",
    description:
      "The Vivid Aura Jewels ear cuff is sculpted in 18K gold-plated brass with a hand-set crystal at its heart. Lightweight enough for all-day wear, bold enough to anchor an evening look. No piercing required — slides gently into place and stays put.",
    materialsCare:
      "18K gold-plated brass with a hypoallergenic, nickel-free base. Crystal is hand-set. To preserve the finish, avoid contact with perfume, lotion, and water. Store in the velvet pouch provided.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Standard delivery 5–8 business days; express 2–3 business days.",
    images: [
      {
        ratio: "4x5",
        width: 900,
        query: "gold crystal ear cuff on model ear close up editorial",
        alt: "Vivid Aura Jewels — gold ear cuff with crystal",
      },
      {
        ratio: "4x5",
        width: 900,
        query: "gold crystal ear cuff detail product shot on dark background",
        alt: "Vivid Aura Jewels — detail on dark background",
      },
      {
        ratio: "1x1",
        width: 800,
        query: "gold ear cuff crystal macro detail on velvet",
        alt: "Vivid Aura Jewels — macro detail",
      },
    ],
    colors: [
      { id: "gold", label: "Gold", swatch: "#C9A878" },
      { id: "silver", label: "Silver", swatch: "#C8C5BF" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.9,
    reviewCount: 208,
    badge: "New",
    shortDescription:
      "A multicolor floral crystal pendant on a fine cable chain — the heirloom in the making.",
    description:
      "Inspired by Victorian posy gardens, the Majestic Flora Nectar necklace is a hand-arranged cluster of crystals in soft champagne, blush, and peridot hues. Suspended on a 16–18″ adjustable cable chain. Light catches the facets like morning dew.",
    materialsCare:
      "18K gold-plated brass chain and findings. Crystals are handset and sealed to resist tarnish. Remove before showering or swimming. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Standard delivery 5–8 business days; express 2–3 business days.",
    images: [
      {
        ratio: "4x5",
        width: 900,
        query: "multicolor floral crystal pendant necklace on model neckline",
        alt: "Majestic Flora Nectar — multicolor crystal necklace",
      },
      {
        ratio: "4x5",
        width: 900,
        query: "multicolor crystal pendant necklace on dark editorial background",
        alt: "Majestic Flora Nectar — editorial detail",
      },
      {
        ratio: "1x1",
        width: 800,
        query: "floral crystal pendant close up on linen fabric",
        alt: "Majestic Flora Nectar — pendant macro",
      },
    ],
    colors: [
      { id: "gold", label: "Gold", swatch: "#C9A878" },
      { id: "silver", label: "Silver", swatch: "#C8C5BF" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.7,
    reviewCount: 341,
    badge: "Bestseller",
    shortDescription:
      "A chunky gold dome huggie — the everyday signature, refined to a mirror finish.",
    description:
      "Sculptural, weighty in the hand, featherlight on the ear. The Golden Sphere Huggies are polished to a mirror finish and engineered with a secure hinged closure. Wear them solo or stack with your favorite studs.",
    materialsCare:
      "18K gold-plated brass with a hypoallergenic post. Hinged closure for secure everyday wear. Wipe with a soft dry cloth; avoid chemicals.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Standard delivery 5–8 business days; express 2–3 business days.",
    images: [
      {
        ratio: "4x5",
        width: 900,
        query: "chunky gold dome huggie hoop earrings product on dark background",
        alt: "Golden Sphere Huggies — chunky gold huggie hoops",
      },
      {
        ratio: "4x5",
        width: 900,
        query: "gold huggie hoops stacked on model ear editorial portrait",
        alt: "Golden Sphere Huggies — on model",
      },
      {
        ratio: "1x1",
        width: 800,
        query: "gold dome huggie earring pair flat lay on linen",
        alt: "Golden Sphere Huggies — flat lay",
      },
    ],
    colors: [
      { id: "gold", label: "Gold", swatch: "#C9A878" },
      { id: "silver", label: "Silver", swatch: "#C8C5BF" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "18k-gold-plated",
    tone: "gold",
    rating: 4.8,
    reviewCount: 96,
    badge: "Limited",
    shortDescription:
      "Textured filigree drops in warm gold — the heirloom motif, reimagined.",
    description:
      "Inspired by antique lacework, the Amber Lace Earrings are cast in 18K gold-plated brass with an openwork filigree pattern. They sway gently with movement, casting delicate shadows. Lightweight despite their presence.",
    materialsCare:
      "18K gold-plated brass with a hypoallergenic post. Avoid water, perfume, and lotions to preserve the plating. Store in the included pouch.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Standard delivery 5–8 business days; express 2–3 business days.",
    images: [
      {
        ratio: "4x5",
        width: 900,
        query: "textured gold filigree drop earrings editorial product photo",
        alt: "Amber Lace Earrings — gold filigree drops",
      },
      {
        ratio: "4x5",
        width: 900,
        query: "gold filigree drop earrings on model dark background portrait",
        alt: "Amber Lace Earrings — on model",
      },
      {
        ratio: "1x1",
        width: 800,
        query: "gold filigree drop earring pair on linen fabric",
        alt: "Amber Lace Earrings — flat lay",
      },
    ],
    colors: [
      { id: "gold", label: "Gold", swatch: "#C9A878" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    material: "18k-gold-plated",
    tone: "gold",
    rating: 5.0,
    reviewCount: 58,
    badge: "Giftset",
    shortDescription:
      "A gift-boxed earring and necklace set — ready to give, ready to be remembered.",
    description:
      "The Royal Heirloom Set pairs our most-loved earring silhouette with a delicate pendant necklace, presented in a keepsake velvet box with a hand-written card. Made for milestone moments — and the quiet ones, too.",
    materialsCare:
      "18K gold-plated brass with hypoallergenic posts and chain. Includes velvet gift box and care card. Remove before showering or swimming.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Standard delivery 5–8 business days; express 2–3 business days.",
    images: [
      {
        ratio: "4x5",
        width: 900,
        query: "gold earring and necklace gift set in velvet box editorial",
        alt: "Royal Heirloom Set — gift-boxed set",
      },
      {
        ratio: "4x5",
        width: 900,
        query: "gold jewelry gift set necklace earrings in box on dark background",
        alt: "Royal Heirloom Set — on dark background",
      },
      {
        ratio: "1x1",
        width: 800,
        query: "gold jewelry gift set earrings necklace flat lay linen",
        alt: "Royal Heirloom Set — flat lay",
      },
    ],
    colors: [
      { id: "gold", label: "Gold", swatch: "#C9A878" },
    ],
  },
];

export const priceRanges = [
  { id: "all", label: "All prices", min: 0, max: Infinity },
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-100", label: "$75 – $100", min: 75, max: 100 },
];

export function findProduct(id) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (x) => (x.category === product.category ? 0 : 1);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, limit);
}
