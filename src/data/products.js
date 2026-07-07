// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable ids used to wire up stock-image queries
// (data-strk-img references the titleId / descId of nearby text nodes).

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    tagline: "Sculptural gold, worn close to the skin.",
    descId: "cat-earrings-desc",
    titleId: "cat-earrings-title",
    bgId: "cat-earrings-bg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    tagline: "Light-catching chains and pendants.",
    descId: "cat-necklaces-desc",
    titleId: "cat-necklaces-title",
    bgId: "cat-necklaces-bg",
  },
  {
    id: "huggies",
    name: "Huggies",
    tagline: "Chunky domes that hug every curve.",
    descId: "cat-huggies-desc",
    titleId: "cat-huggies-title",
    bgId: "cat-huggies-bg",
  },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    short:
      "A sculptural gold ear cuff traced with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff wraps the cartilage in a fluid arc of polished gold, anchored by a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.",
    materials:
      "18K gold plating over a sterling silver core. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.",
    care: "Store in the provided pouch away from moisture. Avoid contact with perfumes and lotions. Polish gently with a soft cloth.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-vivid-aura-title",
    descId: "prod-vivid-aura-desc",
    imgId: "prod-vivid-aura-img",
    imgIdAlt: "prod-vivid-aura-img-alt",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.9,
    reviews: 204,
    badge: "Bestseller",
    short:
      "A multicolor floral crystal necklace — petals of light suspended on a fine gold chain.",
    description:
      "Majestic Flora Nectar suspends a bloom of multicolor crystals from a whisper-fine gold chain. Each petal is set to catch a different angle of light, so the necklace reads as a quiet constellation against the collarbone.",
    materials:
      "18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and store flat in the provided box. Clean with a soft, lint-free cloth. Avoid exposure to chlorine and salt water.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-majestic-flora-title",
    descId: "prod-majestic-flora-desc",
    imgId: "prod-majestic-flora-img",
    imgIdAlt: "prod-majestic-flora-img-alt",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 318,
    badge: "Bestseller",
    short:
      "Chunky gold dome huggie earrings that hug the lobe with a soft, sculpted weight.",
    description:
      "The Golden Sphere huggies are our most-worn silhouette — a chunky polished dome that hugs the lobe and reads as effortless from every angle. A hinged closure keeps them secure from morning to night.",
    materials:
      "18K gold plating over sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.",
    care: "Store in the provided pouch. Wipe clean with a soft cloth after each wear to preserve the plating.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-golden-sphere-title",
    descId: "prod-golden-sphere-desc",
    imgId: "prod-golden-sphere-img",
    imgIdAlt: "prod-golden-sphere-img-alt",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.8,
    reviews: 91,
    badge: "New",
    short:
      "Textured gold filigree drop earrings — lace rendered in warm metal.",
    description:
      "Amber Lace translates antique filigree into a modern drop. The textured gold catches low light beautifully, making these the pair you reach for after dark. Lightweight enough to forget you are wearing them.",
    materials:
      "18K gold plating over brass. Textured filigree drop. Gold-fill leverback closure.",
    care: "Store flat to protect the filigree. Polish with a soft cloth; avoid chemical cleaners.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-amber-lace-title",
    descId: "prod-amber-lace-desc",
    imgId: "prod-amber-lace-img",
    imgIdAlt: "prod-amber-lace-img-alt",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "necklaces",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 5.0,
    reviews: 57,
    badge: "Gift Set",
    short:
      "A gift-boxed earring and necklace set — the complete heirloom in one box.",
    description:
      "The Royal Heirloom Set pairs a coordinating necklace and earring duo in a keepsake gift box. Designed for gifting, the set arrives ready to present, with matching motifs that read as a single, considered gesture.",
    materials:
      "18K gold plating over sterling silver. Cubic zirconia accents. Presented in a signature Velmora gift box.",
    care: "Store each piece separately in the gift box compartments. Keep dry and polish with a soft cloth.",
    shipping:
      "Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.",
    titleId: "prod-royal-heirloom-title",
    descId: "prod-royal-heirloom-desc",
    imgId: "prod-royal-heirloom-img",
    imgIdAlt: "prod-royal-heirloom-img-alt",
  },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const getRelated = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)

export const testimonials = [
  {
    id: "t1",
    name: "Elena R.",
    rating: 5,
    text: "The Golden Sphere huggies have not left my ears since they arrived. They feel far more expensive than they were.",
  },
  {
    id: "t2",
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Royal Heirloom Set for my mother and she cried. The gift box alone is beautiful. Gifting sorted.",
  },
  {
    id: "t3",
    name: "Amara K.",
    rating: 5,
    text: "Quiet, warm, elegant. The Majestic Flora necklace catches light in the most subtle way. My new everyday piece.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere, all day.",
    titleId: "reel-r1-title",
    imgId: "reel-r1-img",
  },
  {
    id: "r2",
    caption: "Stacked cuffs, no piercing.",
    titleId: "reel-r2-title",
    imgId: "reel-r2-img",
  },
  {
    id: "r3",
    caption: "Flora, caught in low light.",
    titleId: "reel-r3-title",
    imgId: "reel-r3-img",
  },
  {
    id: "r4",
    caption: "Amber lace after dark.",
    titleId: "reel-r4-title",
    imgId: "reel-r4-img",
  },
  {
    id: "r5",
    caption: "The heirloom, unboxed.",
    titleId: "reel-r5-title",
    imgId: "reel-r5-img",
  },
]
