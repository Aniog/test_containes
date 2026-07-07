// Seed catalog. Each product exposes both primary & secondary imagery so the
// hover-reveal on the card works out of the box.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    image: "ear-cuff",
    imageAlt: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    tone: "Gold",
    rating: 4.8,
    reviews: 126,
    short:
      "A delicate gold ear cuff traced with a single crystal — designed to catch the light at every turn.",
    description:
      "The Vivid Aura Jewels ear cuff is sculpted from a single curve of 18K gold-plated brass and finished with a hand-set crystal accent. Its open silhouette lets you slip it on without a piercing, making it an effortless way to elevate your everyday stack.",
    materials:
      "18K gold-plated brass, hypoallergenic, nickel-free, lead-free. Hand-set crystal accent.",
    care: "Avoid contact with water, perfume, and lotion. Store dry in the pouch provided. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 2 business days.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    image: "floral-necklace",
    imageAlt: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    tone: "Gold",
    rating: 4.9,
    reviews: 214,
    short:
      "A multicolor floral pendant suspended on a fine gold chain — the heirloom in the making.",
    description:
      "Inspired by pressed garden petals, the Majestic Flora Nectar necklace layers hand-set crystals in moss green, deep garnet, and citrine onto a sculpted 18K gold-plated centerpiece. It hangs on a 16-18\" adjustable cable chain.",
    materials:
      "18K gold-plated brass chain and centerpiece. Hand-set crystals in garnet, citrine, and emerald tones.",
    care: "Remove before showering or sleeping. Keep away from harsh chemicals. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    image: "huggies-sphere",
    imageAlt: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    tone: "Gold",
    rating: 4.7,
    reviews: 342,
    short:
      "A chunky dome huggie with a quiet weight — the everyday gold earring you'll never take off.",
    description:
      "Bold yet wearable, the Golden Sphere Huggies are precision-cast in 18K gold-plated brass for a satisfying weight and a smooth, polished finish. A secure hinged closure keeps them comfortably in place from morning to evening.",
    materials:
      "18K gold-plated brass with a hypoallergenic, nickel-free, lead-free finish. Hinged post closure.",
    care: "Wipe with a soft, dry cloth after wear. Avoid contact with perfumes and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    image: "lace-drop",
    imageAlt: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    tone: "Gold",
    rating: 4.8,
    reviews: 189,
    short:
      "Filigreed gold lace cradling a warm amber teardrop — light, feminine, and unmistakably heirloom.",
    description:
      "The Amber Lace Earrings are hand-finished in 18K gold-plated brass with an intricate openwork filigree pattern. Each pair cradles a honey-toned amber-glass teardrop that catches the light like a drop of warm resin.",
    materials:
      "18K gold-plated brass filigree, amber-glass teardrop, hypoallergenic post.",
    care: "Remove before sleeping and showering. Store in the velvet pouch to prevent tangling.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    image: "heirloom-set",
    imageAlt: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    tone: "Gold",
    rating: 5.0,
    reviews: 87,
    short:
      "A gift-boxed earring and necklace set, tied with a velvet ribbon — the gift that always lands.",
    description:
      "Curated for gifting, the Royal Heirloom Set pairs our signature Golden Sphere Huggies with a delicate Vivid Aura pendant on a fine cable chain. Each set arrives in a keepsake gift box tied with a satin ribbon, ready to give.",
    materials:
      "18K gold-plated brass, hypoallergenic. Includes keepsake gift box and polishing cloth.",
    care: "Remove before sleeping and showering. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)
export const getProductsByCategory = (cat) =>
  cat && cat !== "all" ? products.filter((p) => p.category === cat) : products
export const getRelated = (id, n = 4) =>
  products.filter((p) => p.id !== id).slice(0, n)

export const categories = [
  { id: "all",        label: "All" },
  { id: "earrings",   label: "Earrings" },
  { id: "necklaces",  label: "Necklaces" },
  { id: "huggies",    label: "Huggies" },
  { id: "sets",       label: "Sets" },
]

export const priceRanges = [
  { id: "all",     label: "All Prices",  min: 0,    max: Infinity },
  { id: "under50", label: "Under $50",   min: 0,    max: 50 },
  { id: "50to80",  label: "$50 – $80",   min: 50,   max: 80 },
  { id: "80plus",  label: "$80+",        min: 80,   max: Infinity },
]

export const materials = [
  { id: "all",            label: "All Materials" },
  { id: "18K Gold Plated", label: "18K Gold Plated" },
]
