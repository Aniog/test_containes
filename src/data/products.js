// Seed catalog for Velmora Fine Jewelry
// Image queries are written for the strk-img stock image system;
// each entry has two angles to support the hover-swap product card.

export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    tagline: "Crystal-Accented Ear Cuff",
    category: "earrings",
    material: "18K Gold Plated · Crystal",
    price: 42,
    rating: 4.9,
    reviews: 187,
    badge: "Bestseller",
    description:
      "A sculptural ear cuff set with a single hand-set crystal. Designed to catch candlelight — wear it solo, or pair with the Golden Sphere Huggies for an effortless stack.",
    details:
      "18K gold plated over a hypoallergenic brass core. Each crystal is hand-set in our Lisbon atelier. Sold as a single cuff. Lightweight, comfortable for all-day wear.",
    materials:
      "18K gold plating · brass core · Austrian crystal · hypoallergenic · nickel-free · tarnish-resistant coating",
    care: "Avoid water, perfume, and lotion. Store in the suede pouch provided. Polish gently with the included cloth to maintain finish.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Each piece is delivered in a gift-ready box with suede pouch and care cloth.",
    colors: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      "Vivid Aura Cuff editorial gold ear cuff crystal accent on dark warm background still life",
      "Vivid Aura Cuff editorial gold ear cuff crystal on woman ear close up warm portrait",
    ],
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Necklace",
    tagline: "Multicolor Floral Crystal Pendant",
    category: "necklaces",
    material: "18K Gold Plated · Crystal",
    price: 68,
    rating: 4.8,
    reviews: 243,
    badge: "New",
    description:
      "A delicate floral cluster of hand-set crystals in warm honey, sage, and blush tones. Suspended from a whisper-thin chain — the kind of piece you'll never take off.",
    details:
      "Hand-set crystals in a botanical arrangement. 18K gold plated chain, 16–18 inch adjustable. Lobster clasp closure.",
    materials:
      "18K gold plating · brass base · Czech crystal cluster · hypoallergenic · nickel-free",
    care: "Remove before showering or swimming. Store flat in the suede pouch. Avoid contact with perfumes and lotions.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns. Delivered in our signature gift box.",
    colors: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      "Majestic Flora editorial gold multicolor floral crystal necklace on dark warm background still life",
      "Majestic Flora editorial gold floral crystal pendant on woman neckline warm portrait",
    ],
    related: ["vivid-aura-cuff", "royal-heirloom-set", "golden-sphere-huggies"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky Gold Dome Huggie Earrings",
    category: "huggies",
    material: "18K Gold Plated",
    price: 38,
    rating: 4.9,
    reviews: 412,
    badge: "Cult Favorite",
    description:
      "A modern take on the classic huggie. Substantial in weight, sculptural in silhouette — these are the earrings you'll reach for every single morning.",
    details:
      "Solid-feel huggies with a secure hinged closure. 14mm diameter, comfortable for all-day wear. Sold as a pair.",
    materials:
      "18K gold plating · brass core · hypoallergenic · nickel-free · tarnish-resistant",
    care: "Remove before showering. Polish with included cloth. Store in suede pouch.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns.",
    colors: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      "Golden Sphere Huggies editorial chunky gold dome huggie earrings on dark warm background still life",
      "Golden Sphere Huggies editorial gold huggie earrings on woman ear close up warm portrait",
    ],
    related: ["vivid-aura-cuff", "amber-lace-earrings", "majestic-flora-necklace"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured Gold Filigree Drops",
    category: "earrings",
    material: "18K Gold Plated",
    price: 54,
    rating: 4.7,
    reviews: 156,
    badge: null,
    description:
      "Heirloom-inspired filigree drops with a soft, lace-like texture. Light on the ear, generous in detail — the most-asked-about piece in our collection.",
    details:
      "Hand-finished filigree in a lightweight silhouette. 38mm drop length. Post-and-butterfly closure. Sold as a pair.",
    materials:
      "18K gold plating · brass · hypoallergenic · nickel-free",
    care: "Remove before sleeping and showering. Polish gently with the included cloth. Store flat.",
    shipping: "Free worldwide shipping on orders over $80. 30-day returns.",
    colors: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      "Amber Lace editorial gold filigree drop earrings on dark warm background still life",
      "Amber Lace editorial gold filigree earrings on woman portrait warm light",
    ],
    related: ["golden-sphere-huggies", "vivid-aura-cuff", "majestic-flora-necklace"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-Boxed Earring & Necklace Pairing",
    category: "necklaces",
    material: "18K Gold Plated · Crystal",
    price: 95,
    rating: 5.0,
    reviews: 89,
    badge: "Gifts",
    description:
      "Our most-loved earring and necklace, curated together in our signature gift box. The set that's sold out three times — restocked for the season.",
    details:
      "Includes one pair of Golden Sphere Huggies and one Majestic Flora Necklace. Delivered in a keepsake gift box with suede pouches and care cloth.",
    materials:
      "18K gold plating · brass · Austrian crystal · hypoallergenic · nickel-free",
    care: "Remove before showering. Polish with included cloth. Store in the keepsake box.",
    shipping: "Free express worldwide shipping. 30-day returns. Gift receipts available at checkout.",
    colors: [
      { id: "gold", label: "Gold" },
    ],
    images: [
      "Royal Heirloom editorial gold jewelry gift set in elegant velvet box dark warm background still life",
      "Royal Heirloom editorial gold earrings and necklace styled on woman warm portrait",
    ],
    related: ["majestic-flora-necklace", "golden-sphere-huggies", "vivid-aura-cuff"],
  },
];

export const productById = (id) => products.find((p) => p.id === id);

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
];
