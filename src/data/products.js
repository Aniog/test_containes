// Curated product imagery is provided by local SVG illustrations
// (see src/components/decor) and can be swapped for real photography
// by replacing the `imageKey` and `imageKeyHover` fields with URLs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    material: "18K Gold Plated · Crystal",
    tone: ["gold"],
    rating: 4.9,
    reviewCount: 128,
    imageKey: "earCuff",
    imageKeyHover: "earCuffOn",
    shortDescription:
      "A whisper of crystal set in warm gold — the ear cuff that flatters from every angle.",
    description:
      "Sculpted by hand from a single brass core and plated in 18K gold, Vivid Aura wraps the ear in a soft arc of light. A single hand-set crystal catches candlelight, dinner light, sunlight — every light. Wear it solo, stack it, love it.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Stone: hand-set cubic zirconia crystal. Hypoallergenic and nickel-free. Tarnish-resistant coating.",
    care: "Avoid contact with perfume, lotions, and chlorinated water. Store in the suede pouch provided. Gently polish with the included cloth to restore shine.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    material: "18K Gold Plated · Crystal",
    tone: ["gold"],
    rating: 4.8,
    reviewCount: 96,
    imageKey: "floralNecklace",
    imageKeyHover: "floralNecklaceOn",
    shortDescription:
      "A garden of light, gathered at the throat — multicolor crystals bloom on a delicate chain.",
    description:
      "Inspired by Victorian parure pieces reimagined for modern wear. Each stone is hand-set into a brass filigree, then plated in 18K gold. A whispered heirloom — for everyday, or for the moment you want to feel extraordinary.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Stones: multicolor cubic zirconia in soft champagne, blush, and honey tones. Adjustable 16–18 inch chain with lobster clasp.",
    care: "Remove before showering, swimming, or applying lotions. Store flat in the suede pouch. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    material: "18K Gold Plated",
    tone: ["gold", "silver"],
    rating: 4.9,
    reviewCount: 214,
    imageKey: "sphereHuggie",
    imageKeyHover: "sphereHuggieOn",
    shortDescription:
      "A polished dome of gold, sitting close to the lobe — the huggie you'll never take off.",
    description:
      "Heavy in the hand, light on the ear. The Golden Sphere is a study in restraint — a single, perfect curve that catches light without shouting. Sold as a pair. Designed to be worn day and night, layered or alone.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Also available in rhodium-plated silver tone. Hypoallergenic. Hinged click-post closure.",
    care: "Water-resistant. Remove before swimming in chlorinated water. Buff with the included polishing cloth to keep the dome mirror-bright.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    material: "18K Gold Plated",
    tone: ["gold"],
    rating: 4.7,
    reviewCount: 73,
    imageKey: "laceDrop",
    imageKeyHover: "laceDropOn",
    shortDescription:
      "Textured filigree drops, kissed in warm gold — movement, light, and a touch of romance.",
    description:
      "Lacework in metal. The Amber Lace is a slow study in filigree — openwork that moves as you do, casting soft shadows on the neck. Slightly heavier than our everyday pieces, made for the evening and the occasions you remember.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Hand-finished filigree. French wire ear hook. Nickel-free and hypoallergenic.",
    care: "Avoid contact with perfume and hairspray. Store upright in the suede pouch to protect the filigree. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    material: "18K Gold Plated · Gift Boxed",
    tone: ["gold"],
    rating: 5.0,
    reviewCount: 41,
    imageKey: "heirloomSet",
    imageKeyHover: "heirloomSetOn",
    shortDescription:
      "A matched earring and necklace set, presented in our signature gift box — the heirloom in the making.",
    description:
      "Two pieces, one story. The Royal Heirloom pairs our signature drop earrings with a delicate chain — designed to be opened together, kept together. Comes in our signature cream-and-gold gift box with a hand-tied ribbon. The set she'll remember.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Hypoallergenic. Includes matching suede pouch and signature gift box.",
    care: "Remove before showering or swimming. Store together in the gift box. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Express shipping available at checkout. Most orders ship within 1–2 business days.",
    isBestseller: true,
  },
  // Additional products to fill the shop grid
  {
    id: "petal-chain-necklace",
    name: "Petal Chain Necklace",
    category: "necklaces",
    price: 48,
    material: "18K Gold Plated",
    tone: ["gold", "silver"],
    rating: 4.8,
    reviewCount: 87,
    imageKey: "petalChain",
    imageKeyHover: "petalChainOn",
    shortDescription:
      "A whisper-thin chain with a single suspended petal — barely there, endlessly elegant.",
    description:
      "The necklace you'll forget you're wearing, until someone asks. A 1.5mm cable chain in 18K gold, anchored by a hand-pressed brass petal. Wear it alone or layered with the Majestic Flora.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Adjustable 16–18 inch chain with lobster clasp. Hypoallergenic.",
    care: "Water-resistant. Avoid chlorinated water. Buff with the included cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: false,
  },
  {
    id: "twilight-dome-studs",
    name: "Twilight Dome Studs",
    category: "earrings",
    price: 32,
    material: "18K Gold Plated",
    tone: ["gold", "silver"],
    rating: 4.9,
    reviewCount: 156,
    imageKey: "domeStud",
    imageKeyHover: "domeStudOn",
    shortDescription:
      "A perfect half-dome — the everyday stud, refined.",
    description:
      "The quiet hero of your ear stack. A mirror-polished half-dome, surgical-post back, weighty enough to feel substantial, light enough to sleep in.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Surgical steel post for sensitive ears. Hypoallergenic.",
    care: "Water-resistant. Buff with the included cloth to maintain mirror polish.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: false,
  },
  {
    id: "moonlight-huggies",
    name: "Moonlight Huggies",
    category: "huggies",
    price: 44,
    material: "18K Gold Plated · Pavé",
    tone: ["gold"],
    rating: 4.8,
    reviewCount: 102,
    imageKey: "moonHuggie",
    imageKeyHover: "moonHuggieOn",
    shortDescription:
      "A slim huggie with a pavé-set crescent — the night sky, miniaturized.",
    description:
      "Hand-set with a single row of micro-pavé stones, Moonlight is the huggie for evenings. A discreet click-post closure keeps it secure from dinner to dancing.",
    materials:
      "Base metal: brass. Plating: 18K gold (2.5 microns). Stones: cubic zirconia pavé. Hinged click-post closure. Hypoallergenic.",
    care: "Avoid contact with perfume and lotions. Store in the suede pouch. Polish gently with the included cloth.",
    shipping: "Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Most orders ship within 1–2 business days.",
    isBestseller: false,
  },
];

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    imageKey: "catEarrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    imageKey: "catNecklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    imageKey: "catHuggies",
  },
];

export const materials = [
  "18K Gold Plated",
  "18K Gold Plated · Crystal",
  "18K Gold Plated · Pavé",
  "18K Gold Plated · Gift Boxed",
];

export const priceRanges = [
  { id: "under-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-75", label: "$50 – $75", min: 50, max: 75 },
  { id: "75-plus", label: "$75+", min: 75, max: Infinity },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId, limit = 4) {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== currentId)
    .sort((a, b) => {
      // Same category first
      const aMatch = a.category === current.category ? 0 : 1;
      const bMatch = b.category === current.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}
