// Velmora seed product catalog
// Prices in USD. Two images per product for hover swap.

export const categories = [
  { id: "earrings", name: "Earrings", slug: "earrings" },
  { id: "necklaces", name: "Necklaces", slug: "necklaces" },
  { id: "huggies", name: "Huggies", slug: "huggies" },
  { id: "sets", name: "Sets", slug: "sets" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    tone: "gold",
    material: "18K Gold Plated · Crystal",
    badge: "Bestseller",
    short:
      "A delicate ear cuff accented with a single hand-set crystal. Wears like a whisper.",
    description:
      "Sculpted in our atelier from a featherlight brass core, the Vivid Aura is finished in 18K gold and hand-set with a luminous crystal accent. Designed to sit on the ear without a piercing, it catches the light at every turn.",
    materialCare:
      "18K gold plated over brass. Hypoallergenic and nickel-free. Avoid water, perfume, and lotion to preserve the finish. Store in the provided pouch.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days.",
    imgIds: {
      primary: "vivid-aura-primary",
      secondary: "vivid-aura-secondary",
    },
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 208,
    tone: "multicolor",
    material: "18K Gold Plated · Multi-Crystal",
    badge: "New",
    short:
      "A multicolor floral crystal cluster on a fine gold chain. A small garden to wear.",
    description:
      "Inspired by an English garden in late summer, the Majestic Flora clusters hand-set crystals in soft champagne, blush, and peridot hues. Suspended on a delicate 16–18 inch adjustable chain.",
    materialCare:
      "18K gold plated brass chain with hand-set crystals. Hypoallergenic. Remove before showering or swimming. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Ships in our signature ivory gift box.",
    imgIds: {
      primary: "majestic-flora-primary",
      secondary: "majestic-flora-secondary",
    },
    related: ["vivid-aura-jewels", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 412,
    tone: "gold",
    material: "18K Gold Plated · Brass",
    badge: "Bestseller",
    short:
      "A chunky dome huggie with a quiet, sculptural weight. Your everyday signature.",
    description:
      "Sculptural and quietly bold, the Golden Sphere huggie sits close to the lobe with a satisfying, weighty feel. The polished dome catches light from every angle, making them the perfect every-day earring.",
    materialCare:
      "Solid brass core plated in 18K gold. Hypoallergenic and tarnish-resistant. Remove before sleeping and showering.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Arrives in our signature ivory pouch.",
    imgIds: {
      primary: "golden-sphere-primary",
      secondary: "golden-sphere-secondary",
    },
    related: ["vivid-aura-jewels", "amber-lace-earrings", "majestic-flora-nectar"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 167,
    tone: "gold",
    material: "18K Gold Plated · Filigree",
    badge: "Limited",
    short:
      "Textured gold filigree drops, inspired by antique lace. A small heirloom.",
    description:
      "Each pair is hand-finished with intricate filigree, recalling the lace of a grandmother's tablecloth. Light on the ear, these drops move like a quiet conversation piece.",
    materialCare:
      "18K gold plated brass with hand-engraved filigree. Hypoallergenic. Polish gently with a soft dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Limited quantities.",
    imgIds: {
      primary: "amber-lace-primary",
      secondary: "amber-lace-secondary",
    },
    related: ["vivid-aura-jewels", "majestic-flora-nectar", "royal-heirloom-set"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviewCount: 89,
    tone: "gold",
    material: "18K Gold Plated · Gift Boxed",
    badge: "Gift",
    short:
      "A gift-boxed earring and necklace set, ready to give. A little ceremony.",
    description:
      "A matched set of our most-loved Vivid Aura earrings and a delicate V-shaped chain necklace. Presented in our signature ivory gift box with a hand-tied ribbon — perfect for the people you love most.",
    materialCare:
      "18K gold plated brass, hypoallergenic and nickel-free. Each piece is individually inspected before packing.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns. Includes a complimentary handwritten gift card.",
    imgIds: {
      primary: "royal-heirloom-primary",
      secondary: "royal-heirloom-secondary",
    },
    related: ["vivid-aura-jewels", "majestic-flora-nectar", "golden-sphere-huggies"],
  },
];

// Convenience lookups
export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (slug) =>
  products.filter((p) => p.category === slug);
export const getRelatedProducts = (ids) =>
  ids.map((id) => getProductById(id)).filter(Boolean);

// Image search queries (used by strk-img system via [id] references on the page)
// Curated to fetch warm gold-on-dark editorial photography
export const imageQueries = {
  "vivid-aura-primary": "gold ear cuff crystal earring on dark warm background editorial",
  "vivid-aura-secondary": "woman wearing gold crystal ear cuff on neck editorial portrait warm light",
  "majestic-flora-primary": "multicolor floral crystal gold necklace on dark background macro editorial",
  "majestic-flora-secondary": "model wearing multicolor crystal floral necklace on warm skin editorial",
  "golden-sphere-primary": "chunky gold dome huggie hoop earrings on dark background macro",
  "golden-sphere-secondary": "woman wearing chunky gold huggie hoops editorial portrait",
  "amber-lace-primary": "textured gold filigree drop earrings on dark warm background",
  "amber-lace-secondary": "model wearing antique gold filigree drop earrings editorial",
  "royal-heirloom-primary": "gold jewelry gift box ivory ribbon on warm dark surface editorial",
  "royal-heirloom-secondary": "matched earring and necklace set on marble surface gift box open",
};
