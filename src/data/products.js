// Seed catalog for Velmora Fine Jewelry.
// Imagery uses the Strikingly stock image system via data-strk-img tags.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "rose-gold", label: "Rose Gold Plated" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    shortDescription:
      "A whisper of crystal light along the ear, hand-set into warm 18K gold plating.",
    description:
      "The Vivid Aura Jewels are designed to catch the light at every angle. A delicate crystal is cradled by a hand-finished gold ear cuff, sculpted to sit softly along the cartilage without the need for a piercing. Wear one for an editorial moment, or layer a pair.",
    materials:
      "18K gold-plated brass core, hypoallergenic and nickel-free. Hand-set crystal accent. Tarnish-resistant finish.",
    care:
      "Avoid contact with perfume, water, and lotions. Store in the velvet pouch provided. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Gift-ready packaging included with every order.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "gold ear cuff crystal accent on model warm lighting editorial",
      "close up gold ear cuff crystal earring detail warm gold tones",
    ],
    bestSeller: true,
    new: false,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.9,
    reviewCount: 287,
    shortDescription:
      "A garden in full bloom — multicolor crystals suspended on a fine gold chain.",
    description:
      "Inspired by a wildflower meadow at first light, the Majestic Flora Nectar necklace features hand-set multicolor crystals in a flowing cluster. Each stone catches the light differently, creating a living, breathing piece that moves with you.",
    materials:
      "18K gold-plated brass chain and setting, ethically sourced crystals, hypoallergenic and nickel-free.",
    care:
      "Remove before showering or swimming. Store flat in the suede pouch. Avoid contact with perfumes and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "multicolor floral crystal necklace on model warm skin tone",
      "gold floral crystal necklace detail close up editorial lighting",
    ],
    bestSeller: true,
    new: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.7,
    reviewCount: 412,
    shortDescription:
      "A modern heirloom. Chunky gold dome huggies with a satisfying weight.",
    description:
      "The Golden Sphere Huggies are made to be lived in. A bold, satisfying dome shape with a secure hinged closure — comfortable enough for all-day wear, substantial enough to feel like a true heirloom.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free. Hinged post closure.",
    care:
      "Wipe with a soft cloth after wear. Store dry in the velvet pouch.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "chunky gold dome huggie earrings on model warm tones",
      "gold huggie hoop earrings close up detail editorial",
    ],
    bestSeller: true,
    new: false,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    shortDescription:
      "Hand-finished filigree drops with the warmth of antique gold lace.",
    description:
      "The Amber Lace Earrings are sculpted drop by drop, each filigree detail catching the light like sun through lace curtains. Lightweight, fluid, made for slow afternoons and candlelit evenings.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free. French wire post.",
    care:
      "Remove before sleeping or showering. Store in the suede pouch. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "textured gold filigree drop earrings on model warm light",
      "gold lace filigree earring detail editorial close up",
    ],
    bestSeller: true,
    new: false,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviewCount: 89,
    shortDescription:
      "A matching earring and necklace duo, gift-boxed in signature Velmora cream.",
    description:
      "Our most-loved set, presented in our signature cream and gold gift box. The Royal Heirloom includes a pair of crystal-set gold drops and a matching delicate pendant necklace — designed to be worn together, forever.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free, hand-set crystals.",
    care:
      "Remove before sleeping, showering, or swimming. Store in the signature gift box. Polish gently with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Gift receipts available at checkout.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "gold jewelry gift set earring and necklace box cream",
      "matching gold earring and necklace set editorial detail",
    ],
    bestSeller: true,
    new: true,
  },
  {
    id: "celeste-pearl-drops",
    name: "Celeste Pearl Drops",
    category: "earrings",
    material: "18k-gold",
    price: 48,
    rating: 4.7,
    reviewCount: 198,
    shortDescription:
      "Freshwater pearl drops suspended on a whisper of gold.",
    description:
      "The Celeste Pearl Drops pair a luminous freshwater pearl with a fine gold cap and post. The most understated pearl earring we make — quiet, considered, eternally in style.",
    materials:
      "18K gold-plated brass, ethically sourced freshwater pearls, hypoallergenic and nickel-free.",
    care:
      "Avoid contact with perfume and lotion. Wipe gently with a soft cloth after wear.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "gold pearl drop earrings on model soft warm lighting",
      "freshwater pearl gold earring detail editorial close up",
    ],
    bestSeller: false,
    new: true,
  },
  {
    id: "lumiere-chain-necklace",
    name: "Lumière Chain Necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 58,
    rating: 4.8,
    reviewCount: 321,
    shortDescription:
      "A delicate paperclip chain with a soft, hand-polished gold finish.",
    description:
      "Lumière is the chain you'll never take off. A modern paperclip silhouette, hand-polished for a soft, worn-in gold finish that catches the light at every link.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free, lobster clasp closure.",
    care:
      "Remove before showering or sleeping. Store flat. Wipe gently after wear.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "gold paperclip chain necklace on model warm skin tone",
      "gold link chain necklace close up editorial detail",
    ],
    bestSeller: false,
    new: false,
  },
  {
    id: "siren-twisted-huggies",
    name: "Siren Twisted Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 44,
    rating: 4.6,
    reviewCount: 142,
    shortDescription:
      "Sculpted, twisted gold huggies — modern, fluid, and impossibly light.",
    description:
      "The Siren Twisted Huggies feature a sculptural twisted silhouette, designed to feel like liquid gold at the ear. Lightweight, secure, and impossibly flattering.",
    materials:
      "18K gold-plated brass, hypoallergenic and nickel-free, hinged closure.",
    care:
      "Remove before showering. Store in the velvet pouch. Polish with a soft cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
    variants: [
      { id: "gold", label: "18K Gold" },
      { id: "silver", label: "Sterling Silver" },
    ],
    imageQueries: [
      "twisted gold huggie hoop earrings on model warm",
      "sculpted gold huggie earrings detail editorial",
    ],
    bestSeller: false,
    new: true,
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.id !== productId && p.category === current.category
  )
    .concat(PRODUCTS.filter((p) => p.id !== productId && p.category !== current.category))
    .slice(0, limit);
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.bestSeller).slice(0, limit);
}
