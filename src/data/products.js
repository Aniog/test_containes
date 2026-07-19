// Seed catalog for Velmora Fine Jewelry.
// Imagery uses the data-strk-img system; queries reference the static
// text of nearby headings so the stock-image backend receives meaningful context.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystals", label: "Crystal" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    eyebrow: "Ear Cuff",
    price: 42,
    category: "earrings",
    material: "18k-gold",
    rating: 4.8,
    reviewCount: 124,
    description:
      "A whisper of crystal set in a sculptural ear cuff — designed to catch light from every angle. Wears solo or stacks seamlessly with our huggies.",
    shortDescription: "Gold ear cuff with crystal accent",
    tone: "gold",
    tones: ["gold", "silver"],
    titleId: "vivid-aura-jewels-title",
    descId: "vivid-aura-jewels-desc",
    imgId: "vivid-aura-jewels-img-1",
    hoverImgId: "vivid-aura-jewels-img-2",
    details: [
      "18K gold plated over recycled brass",
      "Hand-set Czech crystal",
      "Ear cuff silhouette — no piercing required",
      "Hypoallergenic, nickel-free post",
    ],
    materials:
      "18K gold plating over a recycled brass core. Each crystal is hand-set and quality-checked in our atelier.",
    care: [
      "Avoid contact with perfume, lotion and water",
      "Remove before showering or sleeping",
      "Store in the velvet pouch provided",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. Orders ship within 1–2 business days from our studio. 30-day returns on unworn pieces.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    eyebrow: "Necklace",
    price: 68,
    category: "necklaces",
    material: "crystals",
    rating: 4.9,
    reviewCount: 86,
    description:
      "A garden of hand-set crystals in muted florals — a quiet statement that moves with you. Finished with a delicate adjustable chain.",
    shortDescription: "Multicolor floral crystal necklace",
    tone: "gold",
    tones: ["gold", "silver"],
    titleId: "majestic-flora-nectar-title",
    descId: "majestic-flora-nectar-desc",
    imgId: "majestic-flora-nectar-img-1",
    hoverImgId: "majestic-flora-nectar-img-2",
    details: [
      "18K gold plated chain, 16–18 inch adjustable",
      "Hand-set multicolor crystal florals",
      "Lobster clasp closure",
      "Lightweight — 4.2g",
    ],
    materials:
      "Solid 18K gold plating over a brass base, hand-set crystals. The chain is finished by hand for a fluid drape.",
    care: [
      "Wipe gently with the polishing cloth provided",
      "Avoid contact with chemicals and humidity",
      "Lay flat to store",
    ],
    shipping:
      "Complimentary worldwide shipping. Carbon-neutral delivery. 30-day returns — see policy for details.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    eyebrow: "Huggies",
    price: 38,
    category: "huggies",
    material: "18k-gold",
    rating: 4.7,
    reviewCount: 213,
    description:
      "A modern take on a classic — chunky, sculptural, and impossibly light. The dome silhouette sits close to the lobe for an everyday essential.",
    shortDescription: "Chunky gold dome huggie earrings",
    tone: "gold",
    tones: ["gold", "silver"],
    titleId: "golden-sphere-huggies-title",
    descId: "golden-sphere-huggies-desc",
    imgId: "golden-sphere-huggies-img-1",
    hoverImgId: "golden-sphere-huggies-img-2",
    details: [
      "18K gold plated over sterling silver",
      "11mm outer diameter",
      "Hinged snap closure",
      "2.8g per pair — featherlight",
    ],
    materials:
      "A sterling silver core with thick 18K gold plating for lasting wear. The hinge is precision-engineered for a satisfying snap.",
    care: [
      "Remove before sleeping, showering or swimming",
      "Polish with a soft, dry cloth",
      "Store flat in the pouch provided",
    ],
    shipping:
      "Free shipping on orders over $75. 1–2 day processing. 30-day returns accepted on unworn, original-condition pieces.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    eyebrow: "Drop Earrings",
    price: 54,
    category: "earrings",
    material: "18k-gold",
    rating: 4.9,
    reviewCount: 158,
    description:
      "Filigree in motion — textured gold lacework catches light as you move. A heirloom-inspired drop, refined for the everyday.",
    shortDescription: "Textured gold filigree drop earrings",
    tone: "gold",
    tones: ["gold", "silver"],
    titleId: "amber-lace-earrings-title",
    descId: "amber-lace-earrings-desc",
    imgId: "amber-lace-earrings-img-1",
    hoverImgId: "amber-lace-earrings-img-2",
    details: [
      "18K gold plated brass",
      "Textured filigree drop, 38mm",
      "Hypoallergenic post and butterfly back",
      "Lightweight 3.4g per pair",
    ],
    materials:
      "Solid 18K gold plating over a brass base. The filigree is cast from an original hand-carved master for fine, lasting detail.",
    care: [
      "Avoid contact with perfume and water",
      "Store in the provided pouch to prevent tangling",
      "Wipe gently with a soft cloth",
    ],
    shipping:
      "Free worldwide shipping on orders over $75. 1–2 day processing. 30-day returns on unworn pieces.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    eyebrow: "Gift Set",
    price: 95,
    category: "sets",
    material: "18k-gold",
    rating: 5.0,
    reviewCount: 67,
    description:
      "A matching earring and necklace set, presented in our signature keepsake box — the heirloom-in-waiting you never knew you needed.",
    shortDescription: "Gift-boxed earring + necklace set",
    tone: "gold",
    tones: ["gold", "silver"],
    titleId: "royal-heirloom-set-title",
    descId: "royal-heirloom-set-desc",
    imgId: "royal-heirloom-set-img-1",
    hoverImgId: "royal-heirloom-set-img-2",
    details: [
      "Matching 18K gold plated huggies + pendant",
      "Adjustable 16–18 inch chain",
      "Signature cream velvet gift box",
      "Includes care cloth and authenticity card",
    ],
    materials:
      "18K gold plating over a brass base, hypoallergenic throughout. Each set is assembled and inspected by hand in our atelier.",
    care: [
      "Remove before showering or sleeping",
      "Polish with the included cloth",
      "Store in the gift box to prevent tarnish",
    ],
    shipping:
      "Free worldwide shipping. Gift-wrapped on request. 30-day returns on unworn pieces in original packaging.",
  },
]

export const getProductById = (id) =>
  PRODUCTS.find((product) => product.id === id)

export const getRelatedProducts = (product, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      if (a.category === product.category && b.category !== product.category)
        return -1
      if (b.category === product.category && a.category !== product.category)
        return 1
      return 0
    })
    .slice(0, limit)
