// Velmora seed product catalog.
// Each product carries stable text IDs used by the strk-img query system so
// stock images can be resolved from on-page text. All copy text is
// intentionally short so the [id] references resolve cleanly.

export const CATEGORIES = [
  { slug: "earrings", label: "Earrings" },
  { slug: "necklaces", label: "Necklaces" },
  { slug: "huggies", label: "Huggies" },
  { slug: "gifts", label: "Gifts" },
];

export const MATERIALS = ["18K Gold Plated", "Sterling Silver", "Rose Gold"];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.9,
    reviews: 128,
    tagline: "Crystal-set ear cuff, hand-finished in 18K gold plating.",
    description:
      "A single sculptural ear cuff set with a hand-set crystal that catches the light from every angle. Designed for the second piercing and beyond, Vivid Aura Jewels deliver the glow of fine jewelry with the ease of a cuff — no piercing required.",
    materials:
      "18K gold plated over a hypoallergenic brass core. Lead-free, nickel-free, and tarnish-resistant. Each crystal is hand-set and inspected in our atelier.",
    care: "Store in the soft pouch provided. Avoid contact with perfumes, lotions, and chlorinated water. Gently wipe with the included polishing cloth to maintain its luster.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C9A96A" },
      { id: "silver", label: "Sterling Silver", swatch: "#D6D2CC" },
    ],
    badges: ["Bestseller"],
    imgId: "vivid-aura-1",
    alt: "Gold ear cuff with crystal on a model",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.8,
    reviews: 94,
    tagline: "Multicolor crystal floral necklace, an heirloom in the making.",
    description:
      "Inspired by a still-life of spring blooms, Majestic Flora Nectar arranges hand-cut crystals in soft champagne, blush, and smoke into a delicate pendant on an 18-inch gold chain. A piece to mark a moment.",
    materials:
      "Hand-cut multicolor crystals, 18K gold plated chain and findings. Adjustable 16–18 inch length with a 2 inch extender.",
    care: "Remove before sleeping, showering, or exercising. Store flat in the velvet pouch to keep the chain kink-free.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C9A96A" },
    ],
    badges: ["New"],
    imgId: "majestic-flora-1",
    alt: "Multicolor crystal floral pendant necklace in gold",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 5.0,
    reviews: 211,
    tagline: "Sculpted dome huggies in solid-feeling 18K gold plating.",
    description:
      "The everyday huggie, refined. A clean, dome-shaped silhouette with a satisfying weight, hinged for comfort, and finished in a high-shine 18K gold plating that wears close to solid gold without the price tag.",
    materials:
      "18K gold plated over a brass core. Hinged click-post closure designed for all-day comfort, even in fresh piercings.",
    care: "Wipe with a soft dry cloth after wear. Avoid contact with perfume and chlorine.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C9A96A" },
      { id: "silver", label: "Sterling Silver", swatch: "#D6D2CC" },
    ],
    badges: ["Bestseller"],
    imgId: "golden-sphere-1",
    alt: "Chunky gold dome huggie hoop earrings",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.9,
    reviews: 67,
    tagline: "Filigree drop earrings, light as a whisper, warm as a glow.",
    description:
      "A reimagining of antique lacework, cast in 18K gold plating with intricate openwork that moves with the light. Lightweight enough for daily wear, distinctive enough for an occasion.",
    materials:
      "18K gold plated brass, hypoallergenic and nickel-free. Lightweight cast construction for all-day comfort.",
    care: "Store flat in the pouch provided. Polish gently with the included cloth. Keep dry.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C9A96A" },
    ],
    badges: ["Limited"],
    imgId: "amber-lace-1",
    alt: "Textured gold filigree drop earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "gifts",
    price: 95,
    rating: 4.9,
    reviews: 152,
    tagline: "A gift-boxed earring and necklace set, ready to give.",
    description:
      "An everyday pairing of our most-loved silhouettes, presented in our signature gift box. A pendant necklace of the Majestic Flora Nectar and a pair of Golden Sphere Huggies — the modern heirloom, ready to be passed on.",
    materials:
      "18K gold plated brass, hypoallergenic and nickel-free. Crystal accent. Includes linen-lined gift box and care card.",
    care: "Wipe gently with a soft dry cloth. Store in the original box to prevent tangling and tarnish.",
    shipping:
      "Free worldwide shipping on orders over $80. Gift wrap available at checkout. 30-day returns.",
    variants: [
      { id: "gold", label: "18K Gold", swatch: "#C9A96A" },
    ],
    badges: ["Gift-Ready"],
    imgId: "royal-heirloom-1",
    alt: "Gold jewelry gift set with earring and necklace in box",
  },
];

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id);
export const getRelated = (id) => PRODUCTS.filter((p) => p.id !== id).slice(0, 4);
