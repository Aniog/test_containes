// Seed product catalog. Image search strings are built from
// nearby heading IDs so the strk stock-image system picks
// editorially-appropriate, warm gold-jewelry photography.

const img = (id, query, ratio = "1x1", width = 900) => ({
  id,
  query,
  ratio,
  width,
})

const title = (slug) => `prod-${slug}-title`
const desc = (slug) => `prod-${slug}-desc`

export const categories = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "From quiet huggies to statement drops — designed for the everyday and the evening.",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Layering chains, pendants, and a touch of color, finished in warm 18K gold.",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "Our signature silhouettes — close-to-the-lobe, never basic, always on.",
  },
]

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
]

// 10 products total. The first 5 are the brief's "bestsellers" with the
// exact names and prices provided; the next 5 round out the catalog so the
// Shop and You-May-Also-Like views have real content.
export const products = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Jewels",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.8,
    reviewCount: 214,
    isBestseller: true,
    shortDescription:
      "A whisper of crystal pavé set in a sculpted gold ear cuff — for the lobe that wants to be noticed.",
    description:
      "The Vivid Aura cuff is hand-finished in warm 18K gold plate over a recycled brass core, set with a single row of ethically sourced crystals that catch the light without ever shouting. Designed to sit softly along the helix, it layers effortlessly with our huggies or wears alone as a quiet statement.",
    materialsAndCare: {
      materials:
        "18K gold plated over recycled brass. Crystals: ethically sourced, lead-free. Hypoallergenic, nickel-free, and safe for sensitive ears.",
      care: "Avoid water, perfume, and lotions. Store dry in the pouch provided. Buff gently with the included polishing cloth to restore shine.",
    },
    shippingAndReturns: {
      shipping:
        "Free worldwide shipping on orders over $80. Carbon-neutral courier. Tracked delivery in 3–7 business days.",
      returns:
        "30-day returns, no questions asked. Item must be unworn, in original packaging. Email care@velmora.com to start a return.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("vivid-aura-cuff-1", `[${desc("vivid-aura-cuff")}] [${title("vivid-aura-cuff")}]`, "1x1", 900),
      img("vivid-aura-cuff-2", `[${title("vivid-aura-cuff")}] gold ear cuff crystal`, "1x1", 900),
      img("vivid-aura-cuff-3", `gold crystal ear cuff close up ${title("vivid-aura-cuff")}`, "1x1", 900),
      img("vivid-aura-cuff-4", `wearing ${title("vivid-aura-cuff")} on ear`, "4x5", 720),
    ],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.9,
    reviewCount: 342,
    isBestseller: true,
    shortDescription:
      "A multicolor floral pendant, hand-set with crystals in sunset tones — botanical, romantic, made to layer.",
    description:
      "Inspired by an English garden at golden hour, Majestic Flora suspends a hand-set cluster of warm-toned crystals from a fine 18K gold-plated chain. The pendant is lightweight enough for daily wear and finished by hand so no two are quite the same.",
    materialsAndCare: {
      materials:
        "18K gold plated chain, brass pendant core. Crystals: ethically sourced, multicolor cut. Hypoallergenic.",
      care: "Remove before showering, sleeping, or exercising. Wipe with a soft dry cloth and store flat in the velvet pouch.",
    },
    shippingAndReturns: {
      shipping:
        "Free worldwide shipping on orders over $80. Tracked delivery in 3–7 business days.",
      returns:
        "30-day returns on unworn items in original packaging. Email care@velmora.com to start a return.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("majestic-flora-1", `[${desc("majestic-flora-necklace")}] [${title("majestic-flora-necklace")}]`, "1x1", 900),
      img("majestic-flora-2", `multicolor floral crystal necklace ${title("majestic-flora-necklace")}`, "1x1", 900),
      img("majestic-flora-3", `gold floral pendant closeup`, "1x1", 900),
      img("majestic-flora-4", `wearing floral pendant layered chains`, "4x5", 720),
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.7,
    reviewCount: 528,
    isBestseller: true,
    shortDescription:
      "A chunky, sculpted dome huggie in 18K gold — the earring you'll never take off.",
    description:
      "Sculptural, substantial, and impossibly light. The Golden Sphere huggie is our most-loved silhouette: a polished dome that catches light from every angle, hinged for a secure close, and plated in a thick layer of 18K gold for everyday wear.",
    materialsAndCare: {
      materials:
        "18K gold plated over a brass core. Hinged post closure. Hypoallergenic, nickel-free.",
      care: "Water-resistant but best removed before showering and swimming. Buff with the polishing cloth included.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80. Tracked, 3–7 business days.",
      returns:
        "30-day returns on unworn items. Email care@velmora.com to start a return.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("golden-sphere-1", `[${desc("golden-sphere-huggies")}] [${title("golden-sphere-huggies")}]`, "1x1", 900),
      img("golden-sphere-2", `chunky gold dome huggie earrings ${title("golden-sphere-huggies")}`, "1x1", 900),
      img("golden-sphere-3", `gold huggie pair top view`, "1x1", 900),
      img("golden-sphere-4", `wearing chunky gold huggies on ear`, "4x5", 720),
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.8,
    reviewCount: 187,
    isBestseller: true,
    shortDescription:
      "Textured gold filigree drops, hand-finished with an amber crystal — vintage soul, modern weight.",
    description:
      "Each Amber Lace drop is cast from a hand-carved master, then filed and plated by hand to bring out the depth of the filigree. A single warm-amber crystal anchors the design and moves with the light as you do.",
    materialsAndCare: {
      materials:
        "18K gold plated over brass. Amber-toned crystal. Hypoallergenic, nickel-free.",
      care: "Store in the pouch provided, away from direct sunlight. Avoid contact with perfume and lotion.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80. Tracked, 3–7 business days.",
      returns:
        "30-day returns on unworn items in original packaging.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("amber-lace-1", `[${desc("amber-lace-earrings")}] [${title("amber-lace-earrings")}]`, "1x1", 900),
      img("amber-lace-2", `textured gold filigree drop earrings ${title("amber-lace-earrings")}`, "1x1", 900),
      img("amber-lace-3", `amber crystal drop earring closeup`, "1x1", 900),
      img("amber-lace-4", `wearing amber filigree drop earrings`, "4x5", 720),
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    material: "18k-gold",
    price: 95,
    rating: 4.9,
    reviewCount: 96,
    isBestseller: true,
    isGift: true,
    shortDescription:
      "A gift-boxed earring and necklace set in warm 18K gold — for the moment that matters.",
    description:
      "The Royal Heirloom Set pairs a delicate pendant chain with a pair of crystal-set huggies, presented in our signature cream linen gift box. Designed to be worn together or apart, finished to be treasured.",
    materialsAndCare: {
      materials:
        "18K gold plated over brass. Crystals: ethically sourced. Hypoallergenic, nickel-free.",
      care: "Remove before water and exercise. Buff gently with the polishing cloth included.",
    },
    shippingAndReturns: {
      shipping:
        "Free worldwide shipping. Tracked, 3–7 business days. Gift wrap included.",
      returns:
        "30-day returns on unworn items in original packaging.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("royal-heirloom-1", `[${desc("royal-heirloom-set")}] [${title("royal-heirloom-set")}]`, "1x1", 900),
      img("royal-heirloom-2", `gift box gold earring and necklace set ${title("royal-heirloom-set")}`, "1x1", 900),
      img("royal-heirloom-3", `gold pendant and huggie set`, "1x1", 900),
      img("royal-heirloom-4", `wearing matching gold earring and necklace set`, "4x5", 720),
    ],
  },
  // ---- additional catalog ----
  {
    id: "luna-thread-chain",
    name: "Luna Thread Chain",
    category: "necklaces",
    material: "18k-gold",
    price: 48,
    rating: 4.7,
    reviewCount: 162,
    isBestseller: false,
    shortDescription:
      "An impossibly fine 18K gold chain — the foundation of every layered look.",
    description:
      "A barely-there thread chain, hand-finished in 18K gold plate. Wear one, wear three. It tucks under every neckline and outlasts every trend.",
    materialsAndCare: {
      materials: "18K gold plated over brass. Hypoallergenic, nickel-free.",
      care: "Remove before showering. Store flat in the velvet pouch.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80. 3–7 business days.",
      returns: "30-day returns on unworn items.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("luna-chain-1", `[${desc("luna-thread-chain")}] [${title("luna-thread-chain")}]`, "1x1", 900),
      img("luna-chain-2", `fine gold thread chain necklace ${title("luna-thread-chain")}`, "1x1", 900),
      img("luna-chain-3", `layered fine gold chains`, "1x1", 900),
      img("luna-chain-4", `wearing fine gold chain close up`, "4x5", 720),
    ],
  },
  {
    id: "pearl-ember-huggies",
    name: "Pearl Ember Huggies",
    category: "huggies",
    material: "18k-gold",
    price: 36,
    rating: 4.6,
    reviewCount: 244,
    isBestseller: false,
    shortDescription:
      "A freshwater pearl set in a polished gold huggie — luminous, modern, quiet.",
    description:
      "Each Pearl Ember huggie holds a single freshwater pearl, hand-selected for its soft, creamy glow. A modern heirloom in the making.",
    materialsAndCare: {
      materials: "18K gold plated brass huggie, freshwater pearl. Hypoallergenic.",
      care: "Avoid water and perfume. Wipe with a soft cloth after wear.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80.",
      returns: "30-day returns on unworn items.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("pearl-ember-1", `[${desc("pearl-ember-huggies")}] [${title("pearl-ember-huggies")}]`, "1x1", 900),
      img("pearl-ember-2", `pearl gold huggie earring ${title("pearl-ember-huggies")}`, "1x1", 900),
      img("pearl-ember-3", `pearl huggie pair flatlay`, "1x1", 900),
      img("pearl-ember-4", `wearing pearl gold huggies`, "4x5", 720),
    ],
  },
  {
    id: "constellation-drops",
    name: "Constellation Drops",
    category: "earrings",
    material: "18k-gold",
    price: 58,
    rating: 4.8,
    reviewCount: 119,
    isBestseller: false,
    shortDescription:
      "A scatter of crystal stars set in 18K gold — for evenings, exits, and the moment after.",
    description:
      "Inspired by the Pleiades, the Constellation drop is a scatter of graduated crystals in a hand-set gold cluster. Light, luminous, and unmistakably evening.",
    materialsAndCare: {
      materials: "18K gold plated brass, ethically sourced crystals. Hypoallergenic.",
      care: "Store in the pouch provided. Avoid contact with perfume and lotion.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80.",
      returns: "30-day returns on unworn items.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("constellation-1", `[${desc("constellation-drops")}] [${title("constellation-drops")}]`, "1x1", 900),
      img("constellation-2", `crystal cluster gold drop earring ${title("constellation-drops")}`, "1x1", 900),
      img("constellation-3", `crystal constellation drop closeup`, "1x1", 900),
      img("constellation-4", `wearing crystal cluster drop earrings`, "4x5", 720),
    ],
  },
  {
    id: "verona-pendant",
    name: "Verona Pendant",
    category: "necklaces",
    material: "18k-gold",
    price: 72,
    rating: 4.9,
    reviewCount: 88,
    isBestseller: false,
    shortDescription:
      "An oval cabochon pendant in warm rose, framed in 18K gold — quietly romantic.",
    description:
      "The Verona pendant sets a single hand-cut cabochon in a polished gold bezel, suspended on a fine cable chain. A study in restraint.",
    materialsAndCare: {
      materials: "18K gold plated brass bezel, hand-cut cabochon, fine cable chain.",
      care: "Remove before showering. Buff gently with the polishing cloth.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80.",
      returns: "30-day returns on unworn items.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("verona-1", `[${desc("verona-pendant")}] [${title("verona-pendant")}]`, "1x1", 900),
      img("verona-2", `oval cabochon gold pendant necklace ${title("verona-pendant")}`, "1x1", 900),
      img("verona-3", `gold bezel pendant closeup`, "1x1", 900),
      img("verona-4", `wearing oval pendant necklace`, "4x5", 720),
    ],
  },
  {
    id: "siren-hoops",
    name: "Siren Hoops",
    category: "earrings",
    material: "18k-gold",
    price: 44,
    rating: 4.7,
    reviewCount: 301,
    isBestseller: false,
    shortDescription:
      "Tapered gold hoops, hand-hammered for a soft, watery sheen — the everyday signature.",
    description:
      "A slim, tapered hoop hand-hammered along its length to catch the light like water. Sized to wear from morning to night.",
    materialsAndCare: {
      materials: "18K gold plated brass, hypoallergenic.",
      care: "Avoid water and perfume. Store flat in the pouch.",
    },
    shippingAndReturns: {
      shipping: "Free worldwide shipping on orders over $80.",
      returns: "30-day returns on unworn items.",
    },
    variants: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
    ],
    images: [
      img("siren-1", `[${desc("siren-hoops")}] [${title("siren-hoops")}]`, "1x1", 900),
      img("siren-2", `tapered hand hammered gold hoop earrings ${title("siren-hoops")}`, "1x1", 900),
      img("siren-3", `gold hoop pair flatlay`, "1x1", 900),
      img("siren-4", `wearing tapered gold hoops`, "4x5", 720),
    ],
  },
]

export const bestsellers = products.filter((p) => p.isBestseller)
export const allProducts = products

export function findProduct(id) {
  return products.find((p) => p.id === id)
}

export function relatedProducts(id, limit = 4) {
  const current = findProduct(id)
  if (!current) return []
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aScore =
        (a.category === current.category ? 2 : 0) +
        (a.material === current.material ? 1 : 0)
      const bScore =
        (b.category === current.category ? 2 : 0) +
        (b.material === current.material ? 1 : 0)
      return bScore - aScore
    })
    .slice(0, limit)
}
