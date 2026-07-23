// Seed product catalog for Velmora Fine Jewelry.
// Each product references a `artwork` key that the ProductImage component
// uses to render an inline SVG placeholder that always works (no external
// image dependencies). Swap in real product photography by replacing the
// `artwork` field with an `image` URL when ready.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Crystal Ear Cuff",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 312,
    material: "18K Gold Plated · Crystal",
    tone: "gold",
    artwork: "earCuff",
    description:
      "A whisper of light along the ear. The Vivid Aura ear cuff is hand-shaped and set with a single cubic zirconia that catches the sun the way real fine jewelry should — without the fine-jewelry price tag.",
    details: [
      "Hypoallergenic, nickel-free brass core",
      "18K gold plating over e-coating for tarnish resistance",
      "Single 3mm cubic zirconia crystal",
      "No piercing required — adjusts gently to most ears",
    ],
    materials:
      "Velmora pieces are crafted in small batches. The base is hypoallergenic brass, finished with a thick layer of 18K gold plating and an e-coat to slow everyday tarnish. Remove before showering, swimming, or applying lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. Orders ship within 1–2 business days from our studio in Lisbon. Returns are accepted within 30 days, unworn, in original packaging.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Floral Crystal Necklace",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 248,
    material: "18K Gold Plated · Multi-Crystal",
    tone: "gold",
    artwork: "floralNecklace",
    description:
      "A garden at the collarbone. The Majestic Flora pendant is set with seven hand-cut crystals in a warm spectrum — citrine, peridot, champagne, blush — arranged on a delicate cable chain.",
    details: [
      "17\" cable chain with 2\" extender",
      "Lobster clasp closure",
      "Pendant 18mm",
      "Hand-set crystals in citrine, peridot, champagne, blush",
    ],
    materials:
      "Crafted with a hypoallergenic brass base and a thick 18K gold plating. The crystals are precision-cut glass with an optical clarity close to fine gemstones. Store flat in the pouch provided.",
    shipping:
      "Free worldwide shipping on orders over $75. Each order is hand-checked and packaged in our signature linen box. 30-day returns on unworn pieces.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky Dome Huggies",
    category: "earrings",
    price: 38,
    rating: 4.7,
    reviews: 504,
    material: "18K Gold Plated",
    tone: "gold",
    artwork: "huggieSphere",
    description:
      "Quietly bold. The Golden Sphere huggie is a soft, domed silhouette in a substantial gold finish — the pair you'll reach for most days, from the office to dinner.",
    details: [
      "12mm outer diameter",
      "Hinged clicker closure",
      "Solid-feeling dome silhouette",
      "Sold as a pair",
    ],
    materials:
      "Hypoallergenic brass core, plated in 18K gold with a protective e-coat. The clicker mechanism is engineered for daily wear — no fragile wires, no fiddly backs.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Filigree Drop Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 187,
    material: "18K Gold Plated",
    tone: "gold",
    artwork: "filigreeDrop",
    description:
      "Vintage soul, modern weight. The Amber Lace drop earring is a finely textured filigree silhouette that moves like a slow afternoon — light, considered, never overstated.",
    details: [
      "2.5\" drop length",
      "Push-back post for pierced ears",
      "Lightweight openwork filigree",
      "Sold as a pair",
    ],
    materials:
      "Each pair is cast in hypoallergenic brass and plated in 18K gold. The filigree is finished by hand for a softly antique, never shiny-new, look.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Earring & Necklace Gift Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviews: 92,
    material: "18K Gold Plated · Gift Boxed",
    tone: "gold",
    artwork: "heirloomSet",
    description:
      "The piece to give — and to keep. The Royal Heirloom set pairs our most-loved drop earrings with a delicate matching pendant, presented in our signature linen box with hand-tied ribbon.",
    details: [
      "Includes matching drop earrings + pendant on 16\" chain",
      "Signature linen gift box with hand-tied silk ribbon",
      "Gifting note card included",
      "Limited release",
    ],
    materials:
      "Crafted in hypoallergenic brass, plated in 18K gold, e-coated for tarnish resistance. Built to be worn — and re-gifted — for years.",
    shipping:
      "Free worldwide shipping on orders over $75. Gift sets are eligible for our 30-day return policy when unworn.",
  },
];

// Additional catalog items for the shop page (variations + related products)
export const shopCatalog = [
  ...products,
  {
    id: "pearl-drop-mini",
    name: "Pearl Drop Mini",
    subtitle: "Freshwater Pearl Studs",
    category: "earrings",
    price: 36,
    rating: 4.7,
    reviews: 421,
    material: "18K Gold Plated · Pearl",
    tone: "gold",
    artwork: "pearlStud",
    description: "Tiny freshwater pearls on a gold post — the everyday heirloom.",
    details: ["4mm freshwater pearls", "Push-back post", "Sold as a pair"],
    materials: "Hypoallergenic brass, 18K gold plating, freshwater pearl.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "celeste-chain",
    name: "Celeste Chain",
    subtitle: "Layering Chain Necklace",
    category: "necklaces",
    price: 48,
    rating: 4.6,
    reviews: 286,
    material: "18K Gold Plated",
    tone: "gold",
    artwork: "layerChain",
    description: "A whisper-thin cable chain made for layering — or wearing alone.",
    details: ['16" + 2" extender', "Lobster clasp", "1.2mm cable"],
    materials: "Hypoallergenic brass, 18K gold plating.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "moonlit-hoops",
    name: "Moonlit Hoops",
    subtitle: "Slim Gold Hoops",
    category: "earrings",
    price: 44,
    rating: 4.7,
    reviews: 358,
    material: "18K Gold Plated",
    tone: "gold",
    artwork: "slimHoop",
    description: "The slim hoop, perfected. Light enough to forget, polished enough to notice.",
    details: ["20mm diameter", "Hinged clicker", "Sold as a pair"],
    materials: "Hypoallergenic brass, 18K gold plating.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "ember-huggies",
    name: "Ember Huggies",
    subtitle: "Pavé Crystal Huggies",
    category: "huggies",
    price: 52,
    rating: 4.8,
    reviews: 244,
    material: "18K Gold Plated · Crystal",
    tone: "gold",
    artwork: "paveHuggie",
    description: "A line of micro-pavé crystals set in a snug gold huggie.",
    details: ["10mm diameter", "Hinged clicker", "Sold as a pair"],
    materials: "Hypoallergenic brass, 18K gold plating, cubic zirconia.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "twin-spark-huggies",
    name: "Twin Spark Huggies",
    subtitle: "Crystal Duo Huggies",
    category: "huggies",
    price: 46,
    rating: 4.6,
    reviews: 197,
    material: "18K Gold Plated · Crystal",
    tone: "gold",
    artwork: "duoHuggie",
    description: "Two crystals, one huggie. The tiny detail that catches the room.",
    details: ["11mm diameter", "Hinged clicker", "Sold as a pair"],
    materials: "Hypoallergenic brass, 18K gold plating, cubic zirconia.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "solstice-pendant",
    name: "Solstice Pendant",
    subtitle: "Single Crystal Pendant",
    category: "necklaces",
    price: 58,
    rating: 4.7,
    reviews: 312,
    material: "18K Gold Plated · Crystal",
    tone: "gold",
    artwork: "crystalPendant",
    description: "A single bezel-set crystal on a delicate chain. The modern locket.",
    details: ['18" chain', "Lobster clasp", "6mm crystal"],
    materials: "Hypoallergenic brass, 18K gold plating, cubic zirconia.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
  {
    id: "celeste-threader",
    name: "Celeste Threader",
    subtitle: "Long Chain Drop Earring",
    category: "earrings",
    price: 62,
    rating: 4.8,
    reviews: 148,
    material: "18K Gold Plated",
    tone: "gold",
    artwork: "layerChain",
    description: "A long, quiet threader that moves with you. Slip them in, forget them on.",
    details: ['3.5" length', 'Lightweight', "Sold as a pair"],
    materials: "Hypoallergenic brass, 18K gold plating.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns.",
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Ear cuffs, drops, and studs",
    artwork: "catEarrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants and chains",
    artwork: "catNecklace",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Everyday gold hoops",
    artwork: "catHuggie",
  },
];

export const tones = [
  { id: "gold", label: "18K Gold", swatch: "linear-gradient(135deg,#E5D4A8,#C9A86A 50%,#9C7E45)" },
  { id: "silver", label: "Sterling Silver", swatch: "linear-gradient(135deg,#E8E6E2,#BDB9B0 50%,#8B877E)" },
];

export function getProductById(id) {
  return shopCatalog.find((p) => p.id === id);
}

export function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId);
  if (!current) return [];
  return shopCatalog
    .filter((p) => p.id !== productId && p.category === current.category)
    .slice(0, limit);
}
