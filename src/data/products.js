// Seed catalog for Velmora Fine Jewelry.
// Each product references a stable DOM id used by the strk-img interpolation system.
// Imagery: warm-lit gold jewelry on dark/neutral backgrounds.

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
];

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "mixed", label: "Mixed Metals" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Crystal ear cuff",
    price: 42,
    rating: 4.9,
    reviews: 312,
    category: "earrings",
    material: "18k-gold",
    variants: [
      { id: "gold", label: "Gold", tone: "#B5905A" },
      { id: "silver", label: "Silver", tone: "#C9C5BD" },
    ],
    isBestseller: true,
    description:
      "A whisper of light at the lobe. The Vivid Aura ear cuff catches a single crystal pavilion set in a hand-finished 18K gold-plated brass frame — designed for the woman who prefers a single, considered accent over a stack.",
    details: [
      "18K gold-plated brass with hypoallergenic post",
      "Single pavé crystal, handset",
      "No piercing required — slide-on cuff",
      "Lightweight, 2.4g per cuff",
    ],
    materials:
      "18K gold plating over a brass core. Nickel-free and hypoallergenic. Each crystal is handset and quality-checked in our atelier.",
    care: "Store dry in the pouch provided. Avoid contact with perfume, lotion, and water. Wipe gently with the included polishing cloth to restore luster.",
    shipping:
      "Free worldwide shipping on orders over $75. Domestic orders ship within 1–2 business days. 30-day returns, no questions asked.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Floral crystal necklace",
    price: 68,
    rating: 4.8,
    reviews: 184,
    category: "necklaces",
    material: "18k-gold",
    variants: [
      { id: "gold", label: "Gold", tone: "#B5905A" },
    ],
    isBestseller: true,
    description:
      "A garden in full bloom, captured in crystal. The Majestic Flora pendant suspends a multicolor floral cluster from a fine 18K gold-plated chain — a quiet statement for both day and evening.",
    details: [
      "18K gold-plated brass chain, 18 inches with 2-inch extender",
      "Multicolor hand-set crystals",
      "Lobster clasp closure",
      "Pendant 18mm × 14mm",
    ],
    materials:
      "Fine 18K gold plating over brass. Hand-set European crystals in six tonal hues. Hypoallergenic, nickel-free.",
    care: "Remove before showering or sleeping. Store flat in the velvet pouch. Polish gently with a soft dry cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. Arrives in our signature gift box with a hand-tied ribbon. 30-day returns.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Dome huggie hoops",
    price: 38,
    rating: 4.9,
    reviews: 528,
    category: "huggies",
    material: "18k-gold",
    variants: [
      { id: "gold", label: "Gold", tone: "#B5905A" },
      { id: "silver", label: "Silver", tone: "#C9C5BD" },
    ],
    isBestseller: true,
    description:
      "The everyday huggie, refined. A polished gold dome wraps the lobe in a soft, sculptural curve — weightless to wear, generous in presence.",
    details: [
      "18K gold-plated brass",
      "12mm outer diameter, 3mm thick",
      "Hinged click closure, secure and easy",
      "Sold as a pair",
    ],
    materials:
      "Heavy 18K gold plating over a solid brass core. Hypoallergenic and tarnish-resistant when cared for properly.",
    care: "Keep dry. Avoid contact with perfumes and oils. Wipe with the included cloth before storing.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Filigree drop earrings",
    price: 54,
    rating: 4.7,
    reviews: 142,
    category: "earrings",
    material: "18k-gold",
    variants: [
      { id: "gold", label: "Gold", tone: "#B5905A" },
    ],
    isBestseller: false,
    description:
      "A vintage lace pattern, cast in warm gold. The Amber Lace drop earrings catch the light through openwork filigree — light, romantic, and quietly dramatic.",
    details: [
      "18K gold-plated brass with hand-set filigree",
      "38mm drop length",
      "Push-back post, comfort-fit",
      "Sold as a pair",
    ],
    materials:
      "18K gold plating over brass. Each filigree panel is cast and hand-finished in small batches.",
    care: "Remove before sleeping, showering, or exercising. Store in the pouch to prevent tangling.",
    shipping:
      "Free worldwide shipping on orders over $75. Gift wrapping available at checkout. 30-day returns.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Earring & necklace gift set",
    price: 95,
    rating: 5.0,
    reviews: 96,
    category: "sets",
    material: "18k-gold",
    variants: [
      { id: "gold", label: "Gold", tone: "#B5905A" },
    ],
    isBestseller: true,
    description:
      "Our most-loved pair, gift-boxed together. The Royal Heirloom Set pairs the Vivid Aura ear cuff with the Majestic Flora pendant — an heirloom in the making, presented in our signature keepsake box.",
    details: [
      "Includes: Vivid Aura Jewels (1 cuff) + Majestic Flora Nectar pendant",
      "18K gold-plated brass throughout",
      "Arrives in a magnetic-close keepsake box with ribbon",
      "Add a handwritten note at checkout",
    ],
    materials:
      "18K gold plating over brass. Hand-set crystals. Hypoallergenic and nickel-free.",
    care: "Store each piece separately in the included pouches. Avoid water, perfume, and lotion.",
    shipping:
      "Complimentary express shipping on this set. Allow 2 business days for assembly and hand-tied ribbon. 30-day returns.",
  },
];

export const findProduct = (id) => products.find((p) => p.id === id);

export const relatedFor = (product, limit = 4) =>
  products.filter((p) => p.id !== product.id).slice(0, limit);

// Categories with a hero image and label for the Shop-by-Category tiles.
export const categoryTiles = [
  {
    id: "earrings",
    title: "Earrings",
    eyebrow: "Heard before spoken",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    eyebrow: "Worn close to the heart",
  },
  {
    id: "huggies",
    title: "Huggies",
    eyebrow: "Everyday, elevated",
  },
];
