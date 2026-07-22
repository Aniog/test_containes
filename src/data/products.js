export const CATEGORIES = [
  { value: "earrings", label: "Earrings" },
  { value: "necklaces", label: "Necklaces" },
  { value: "huggies", label: "Huggies" },
  { value: "sets", label: "Gift Sets" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviews: 132,
    badge: "Bestseller",
    short: "A sculptural gold ear cuff crowned with a single brilliant crystal — no piercing required.",
    description:
      "The Vivid Aura Jewels cuff wraps the ear in a ribbon of warm 18K gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to slip on gently and stay all day, it is the piece our community reaches for when one small detail should say everything.",
    materials:
      "18K gold plating over recycled brass. Hand-set cubic zirconia crystal. Nickel-free and hypoallergenic. To care for your piece, avoid water, perfume and lotions, and store it in the soft pouch provided.",
    tags: ["ear cuff", "crystal accent", "no piercing"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviews: 96,
    badge: "New",
    short: "A garden in bloom — multicolor floral crystals gathered on a fine gold chain.",
    description:
      "Majestic Flora Nectar gathers tiny blossoms of hand-set crystal in soft honey, blush and champagne tones along a delicate 18K gold plated chain. Each flower is placed by hand so the necklace falls like a garland against the collarbone — romantic, but never sweet.",
    materials:
      "18K gold plating over recycled brass. Hand-set multicolor cubic zirconia. 40cm chain with 5cm extender. Nickel-free and hypoallergenic. Keep dry and store flat in your Velmora pouch.",
    tags: ["floral", "multicolor crystal", "fine chain"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    short: "Chunky domed huggies in high-polish gold — the everyday pair you never take off.",
    description:
      "Golden Sphere Huggies are sculpted into a smooth dome that hugs the lobe and reflects light like liquid metal. Their hinged closure clicks softly shut and stays put through long days, workouts and everything in between. This is the pair our stylists call the uniform.",
    materials:
      "18K gold plating over recycled brass, high-polish finish. Hinged huggie closure. Nickel-free and hypoallergenic. Polish gently with a soft cloth; avoid water and perfume.",
    tags: ["chunky dome", "everyday", "hinged closure"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviews: 78,
    badge: null,
    short: "Textured filigree drops that move like golden lace in candlelight.",
    description:
      "Amber Lace Earrings are cast from hand-drawn filigree, then lightly textured so every curve holds a warm, amber glow. Feather-light despite their presence, they sway gently as you move — made for evenings that deserve a little ceremony.",
    materials:
      "18K gold plating over recycled brass with a hand-textured finish. Secure lever-back closure. Nickel-free and hypoallergenic. Store hanging or flat; keep away from moisture.",
    tags: ["filigree", "textured gold", "drop earrings"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    rating: 5.0,
    reviews: 64,
    badge: "Gift Ready",
    short: "A matching earring and necklace set, gift-boxed in our signature velvet case.",
    description:
      "The Royal Heirloom Set pairs a dainty crystal pendant with matching studs, presented in our signature velvet gift box with a hand-tied ribbon. It is our most gifted piece — chosen for anniversaries, bridesmaids and the quiet milestone in between.",
    materials:
      "18K gold plating over recycled brass. Hand-set cubic zirconia pendant and studs. 40cm chain with 5cm extender. Nickel-free and hypoallergenic. Arrives in a keepsake velvet box.",
    tags: ["gift set", "earring and necklace", "velvet box"],
  },
  {
    id: "lumina-pearl-drop",
    name: "Lumina Pearl Drop",
    category: "earrings",
    price: 48,
    rating: 4.6,
    reviews: 57,
    badge: null,
    short: "A single baroque pearl suspended from a fine gold thread.",
    description:
      "Lumina Pearl Drop pairs the softness of a freshwater pearl with the clean line of a gold thread, so the pearl seems to float just below the lobe. Quietly luminous, endlessly wearable.",
    materials:
      "18K gold plating over recycled brass. Genuine freshwater pearl. Nickel-free and hypoallergenic. Pearls love to be worn; wipe with a soft cloth after wear.",
    tags: ["pearl", "thread earring", "minimal"],
  },
  {
    id: "serene-chain-necklace",
    name: "Serene Chain Necklace",
    category: "necklaces",
    price: 52,
    rating: 4.7,
    reviews: 143,
    badge: "Bestseller",
    short: "A fluid curb chain with a soft brushed finish — the perfect layering base.",
    description:
      "Serene Chain Necklace is weighted to sit exactly where a pendant would fall, with a brushed finish that glows rather than glints. Wear it alone for restraint, or let it anchor your whole stack.",
    materials:
      "18K gold plating over recycled brass, brushed finish. 45cm chain with 5cm extender. Nickel-free and hypoallergenic. Store flat; avoid water and perfume.",
    tags: ["curb chain", "layering", "brushed gold"],
  },
  {
    id: "petite-crystal-huggies",
    name: "Petite Crystal Huggies",
    category: "huggies",
    price: 34,
    rating: 4.8,
    reviews: 189,
    badge: null,
    short: "Slim huggies pavéd with micro crystals — a whisper of sparkle.",
    description:
      "Petite Crystal Huggies trace the lobe in a single row of pavé-set micro crystals. They are the second-piercing hero and the first-piercing essential, made to mix with everything you already own.",
    materials:
      "18K gold plating over recycled brass. Pavé-set cubic zirconia. Hinged huggie closure. Nickel-free and hypoallergenic. Keep dry; polish with a soft cloth.",
    tags: ["pavé", "micro crystal", "second piercing"],
  },
]

PRODUCTS.forEach((p) => {
  p.imgIds = {
    primary: `p-${p.id}-a1`,
    secondary: `p-${p.id}-b2`,
    macro: `p-${p.id}-c3`,
    worn: `p-${p.id}-d4`,
  }
})

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)

export const relatedProducts = (product, count = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => (b.category === product.category) - (a.category === product.category))
    .slice(0, count)

export const BESTSELLER_IDS = [
  "vivid-aura-jewels",
  "majestic-flora-nectar",
  "golden-sphere-huggies",
  "amber-lace-earrings",
  "royal-heirloom-set",
]
