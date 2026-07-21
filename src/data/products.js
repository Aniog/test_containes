export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Gift Sets" },
];

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 214,
    bestseller: true,
    isNew: false,
    description:
      "A sculptural ear cuff that catches the light with every turn. Hand-finished in 18K gold plate and set with a single brilliant crystal, the Vivid Aura Jewels cuff requires no piercing — simply slide it on and glow.",
    details: [
      "18K gold plated over recycled brass",
      "AAA-grade crystal accent",
      "No piercing required — adjustable fit",
      "Hypoallergenic, nickel & lead free",
      "Arrives in the Velmora signature gift box",
    ],
    care: "Keep your piece radiant: avoid water, perfume and lotions. Wipe gently with the included soft cloth after wear and store in your Velmora pouch.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 167,
    bestseller: true,
    isNew: true,
    description:
      "A garden in full bloom, captured in crystal. The Majestic Flora Nectar necklace layers hand-set multicolor stones along a delicate 18K gold chain — an heirloom-feeling piece made for everyday light.",
    details: [
      "18K gold plated over recycled brass",
      "Hand-set multicolor crystals",
      'Adjustable 16"–18" chain with extender',
      "Hypoallergenic, nickel & lead free",
      "Arrives in the Velmora signature gift box",
    ],
    care: "Keep your piece radiant: avoid water, perfume and lotions. Wipe gently with the included soft cloth after wear and store in your Velmora pouch.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 389,
    bestseller: true,
    isNew: false,
    description:
      "The everyday essential, perfected. Golden Sphere Huggies are softly domed, impossibly light, and polished to a mirror glow — the pair you will reach for morning after morning.",
    details: [
      "18K gold plated over recycled brass",
      "Lightweight hollow-dome design",
      "Secure hinged closure",
      "Hypoallergenic, nickel & lead free",
      "Arrives in the Velmora signature gift box",
    ],
    care: "Keep your piece radiant: avoid water, perfume and lotions. Wipe gently with the included soft cloth after wear and store in your Velmora pouch.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 98,
    bestseller: true,
    isNew: false,
    description:
      "Inspired by antique lace, each Amber Lace drop is cast with a fine filigree texture that flickers between shadow and shine. An evening piece that moves beautifully with you.",
    details: [
      "18K gold plated over recycled brass",
      "Hand-textured filigree finish",
      "Feather-light drop silhouette",
      "Hypoallergenic, nickel & lead free",
      "Arrives in the Velmora signature gift box",
    ],
    care: "Keep your piece radiant: avoid water, perfume and lotions. Wipe gently with the included soft cloth after wear and store in your Velmora pouch.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 142,
    bestseller: true,
    isNew: false,
    description:
      "Our most gifted treasure. The Royal Heirloom Set pairs polished gold huggies with a matching pendant necklace, nested in a ribboned keepsake box — ready to give, impossible to forget.",
    details: [
      "18K gold plated over recycled brass",
      "Huggie earrings + pendant necklace",
      "Presented in a ribboned keepsake box",
      "Hypoallergenic, nickel & lead free",
      "Includes a hand-written gift note option",
    ],
    care: "Keep your piece radiant: avoid water, perfume and lotions. Wipe gently with the included soft cloth after wear and store in your Velmora pouch.",
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);

export const formatPrice = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
