// Velmora — seed product catalog.
// Imagery is sourced through the strk-img stock pipeline via queries built from
// product name + category text. All images have a matching text id so the
// interpreter can resolve them deterministically.

export const CATEGORIES = [
  { slug: "earrings",  label: "Earrings",  description: "Stacks, drops, cuffs.",          imgQuery: "velmora earrings collection editorial gold jewelry on model warm" },
  { slug: "necklaces", label: "Necklaces", description: "Whisper chains & crystals.",     imgQuery: "velmora necklaces editorial gold crystal pendant on warm skin" },
  { slug: "huggies",   label: "Huggies",   description: "The daily heirloom.",            imgQuery: "velmora huggies gold dome earrings close up editorial warm" },
  { slug: "gifts",     label: "Gifts",     description: "Sets, presented in cream.",      imgQuery: "velmora gift box cream velvet jewelry set editorial warm" },
];

export const MATERIALS = [
  { value: "gold",   label: "18K Gold Plated" },
  { value: "silver", label: "Sterling Silver" },
  { value: "mixed",  label: "Mixed Metals"    },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Cuff",
    tagline: "Crystal Ear Cuff",
    category: "earrings",
    categories: ["earrings", "gifts"],
    price: 42,
    tone: "gold",
    tones: ["gold", "silver"],
    material: "18K Gold Plated Brass",
    rating: 4.8,
    reviews: 124,
    bestseller: true,
    shortDescription:
      "A delicate ear cuff set with a single faceted crystal. Wears like a whispered promise — soft, weightless, impossible to ignore.",
    description:
      "The Vivid Aura Cuff is a study in restraint. Hand-set in recycled brass and plated in a warm 18K gold, a single precision-cut crystal catches light at every angle. No piercing required — the open cuff slides along the ear and stays exactly where you place it, morning to night.",
    materials:
      "18K gold plated recycled brass · AAA cubic crystal · Lead- and nickel-free · Hypoallergenic titanium post.",
    care: "Avoid water, perfume, and lotion. Store in the Velmora pouch. Wipe gently with the included polishing cloth.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Orders ship within 1–2 business days.",
    images: [
      { id: "vivid-aura-cuff-1", query: "[vivid-aura-cuff-name] [vivid-aura-cuff-tagline] [home-bestsellers-title]", ratio: "4x5", width: 900 },
      { id: "vivid-aura-cuff-2", query: "[vivid-aura-cuff-name] model wearing jewelry editorial",           ratio: "4x5", width: 900 },
    ],
    detailsTitleId: "vivid-aura-cuff-name",
    detailsTaglineId: "vivid-aura-cuff-tagline",
  },
  {
    id: "majestic-flora",
    name: "Majestic Flora",
    tagline: "Floral Crystal Necklace",
    category: "necklaces",
    categories: ["necklaces", "gifts"],
    price: 68,
    tone: "gold",
    tones: ["gold"],
    material: "18K Gold Plated Brass",
    rating: 4.9,
    reviews: 218,
    bestseller: true,
    shortDescription:
      "A hand-set bouquet of multicolored crystals on a whisper-thin chain. A garden you wear against the collarbone.",
    description:
      "Inspired by Victorian botanical drawings, the Majestic Flora necklace clusters five crystal blooms in champagne, blush, sage, smoke, and topaz. Each petal is hand-set; each chain is hand-finished. The result is dimensional, never flat — a piece that moves.",
    materials:
      "18K gold plated recycled brass · Multicolor Austrian crystals · 16–18\" adjustable chain with 2\" extender · Lobster clasp.",
    care: "Remove before showering or sleeping. Keep dry. Polish with the included cloth every few wears.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    images: [
      { id: "majestic-flora-1", query: "[majestic-flora-name] [majestic-flora-tagline] editorial jewelry",     ratio: "4x5", width: 900 },
      { id: "majestic-flora-2", query: "[majestic-flora-name] model wearing crystal necklace warm light",        ratio: "4x5", width: 900 },
    ],
    detailsTitleId: "majestic-flora-name",
    detailsTaglineId: "majestic-flora-tagline",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Dome Huggie Earrings",
    category: "huggies",
    categories: ["huggies", "earrings"],
    price: 38,
    tone: "gold",
    tones: ["gold", "silver"],
    material: "18K Gold Plated Sterling Silver",
    rating: 4.7,
    reviews: 412,
    bestseller: true,
    shortDescription:
      "A chunky dome huggie in warm gold. Quietly architectural, endlessly wearable — the daily heirloom.",
    description:
      "The Golden Sphere is a precision-milled dome set on a hinged huggie closure. Substantial without weight, sculptural without statement. Wear it alone for a polished everyday look, or layer with the Vivid Aura Cuff for an editorial stack.",
    materials:
      "Sterling silver core · 18K gold plating (2.5 microns) · Hinged snap closure · Hypoallergenic.",
    care: "Water-resistant, but remove before swimming or showering to extend the life of the plating.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    images: [
      { id: "golden-sphere-huggies-1", query: "[golden-sphere-huggies-name] [golden-sphere-huggies-tagline] editorial gold", ratio: "4x5", width: 900 },
      { id: "golden-sphere-huggies-2", query: "[golden-sphere-huggies-name] ear stack model warm lighting",                       ratio: "4x5", width: 900 },
    ],
    detailsTitleId: "golden-sphere-huggies-name",
    detailsTaglineId: "golden-sphere-huggies-tagline",
  },
  {
    id: "amber-lace",
    name: "Amber Lace Drops",
    tagline: "Filigree Drop Earrings",
    category: "earrings",
    categories: ["earrings", "gifts"],
    price: 54,
    tone: "gold",
    tones: ["gold"],
    material: "18K Gold Plated Brass",
    rating: 4.9,
    reviews: 96,
    bestseller: true,
    shortDescription:
      "Hand-finished filigree in warm gold, casting delicate lace-shadowed light. Romantic, never saccharine.",
    description:
      "Each Amber Lace drop is cast from a hand-carved master, then plated in 18K gold for a warm, antique glow. The openwork catches and throws light like sun through lace curtains — a little theatrical, entirely wearable.",
    materials:
      "18K gold plated recycled brass · Hypoallergenic titanium post · Approximately 1.4\" drop.",
    care: "Avoid perfume, sunscreen, and water. Store flat in the Velmora box to protect the filigree.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging.",
    images: [
      { id: "amber-lace-1", query: "[amber-lace-name] [amber-lace-tagline] editorial filigree gold jewelry",  ratio: "4x5", width: 900 },
      { id: "amber-lace-2", query: "[amber-lace-name] model wearing drop earrings warm light editorial",        ratio: "4x5", width: 900 },
    ],
    detailsTitleId: "amber-lace-name",
    detailsTaglineId: "amber-lace-tagline",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-Boxed Earring + Necklace Set",
    category: "gifts",
    categories: ["gifts", "earrings", "necklaces"],
    price: 95,
    tone: "gold",
    tones: ["gold"],
    material: "18K Gold Plated Brass",
    rating: 5.0,
    reviews: 73,
    bestseller: true,
    shortDescription:
      "A matching drop-and-pendant set in a keepsake velvet box. The gift that becomes part of the story.",
    description:
      "The Royal Heirloom Set pairs a delicate pendant with a matching drop earring, both finished with a hand-set crystal. It arrives in our signature cream-and-gold box with a soft velvet interior — ready to gift, designed to keep.",
    materials:
      "18K gold plated recycled brass · Austrian crystal · Adjustable 16–18\" chain · Hypoallergenic titanium posts · Includes velvet-lined keepsake box.",
    care: "Remove before showering, sleeping, or exercise. Store in the included box.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn pieces in original packaging. Gift wrap available at checkout.",
    images: [
      { id: "royal-heirloom-set-1", query: "[royal-heirloom-set-name] [royal-heirloom-set-tagline] gift box jewelry",  ratio: "4x5", width: 900 },
      { id: "royal-heirloom-set-2", query: "[royal-heirloom-set-name] model wearing matching jewelry set warm light", ratio: "4x5", width: 900 },
    ],
    detailsTitleId: "royal-heirloom-set-name",
    detailsTaglineId: "royal-heirloom-set-tagline",
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
}

export const TRUST_BAR = [
  { label: "Free Worldwide Shipping",  sub: "On orders over $80" },
  { label: "30-Day Returns",          sub: "On unworn pieces"   },
  { label: "18K Gold Plated",         sub: "2.5 microns thick"  },
  { label: "Hypoallergenic",          sub: "Nickel- and lead-free" },
];

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    rating: 5,
    title: "Wears like an heirloom.",
    body: "I bought the Golden Sphere Huggies on a whim and they have not left my ears in three months. Substantial but not heavy — exactly the weight I want.",
  },
  {
    name: "Priya K.",
    rating: 5,
    title: "Gifted, kept, reordered.",
    body: "The Royal Heirloom Set is the most thoughtful gift I've ever given. My sister wears it weekly and I just ordered the Flora necklace for myself.",
  },
  {
    name: "Naomi S.",
    rating: 5,
    title: "Quiet luxury, finally.",
    body: "No logo, no flash — just beautifully made jewelry. The packaging alone made me feel like I'd stepped into a Parisian atelier.",
  },
];

export const REELS = [
  { id: "reel-1", caption: "Ear Stack, every day",  category: "earrings"  },
  { id: "reel-2", caption: "The Flora, in motion",  category: "necklaces" },
  { id: "reel-3", caption: "Huggies, repeated",    category: "huggies"   },
  { id: "reel-4", caption: "Golden hour, on skin",  category: "earrings"  },
  { id: "reel-5", caption: "The heirloom unboxing", category: "gifts"     },
  { id: "reel-6", caption: "Layered, never loud",   category: "necklaces" },
];

export const CATEGORY_TILES = [
  {
    slug: "earrings",
    label: "Earrings",
    blurb: "Stacks, drops, cuffs",
    imgQuery: "velmora earrings collection editorial gold jewelry on model",
  },
  {
    slug: "necklaces",
    label: "Necklaces",
    blurb: "Whisper chains & crystals",
    imgQuery: "velmora necklaces editorial gold crystal pendant on warm skin",
  },
  {
    slug: "huggies",
    label: "Huggies",
    blurb: "The daily heirloom",
    imgQuery: "velmora gold huggie hoops editorial close up on ear",
  },
];
