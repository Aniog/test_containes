export const categories = ["Earrings", "Necklaces", "Huggies", "Sets"]

export const materials = ["18K Gold Plated", "Sterling Silver", "Mixed Metals"]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    rating: 4.8,
    reviews: 124,
    category: "Earrings",
    material: "18K Gold Plated",
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff finished with a single luminous crystal accent. Designed to catch candlelight and compliments alike — no piercing required.",
    details:
      "Hand-polished brass with a thick 18K gold plating. Features a prong-set cubic zirconia crystal. Adjustable fit for most ear shapes.",
    care: "Avoid contact with perfumes, lotions, and water. Store in the provided pouch and polish with a soft cloth to maintain luster.",
    shipping:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tone: ["Gold", "Silver"],
    images: {
      gold: ["gold-ear-cuff-crystal-closeup", "gold-ear-cuff-on-ear-editorial", "gold-ear-cuff-product-flatlay"],
      silver: ["silver-ear-cuff-crystal-closeup", "silver-ear-cuff-on-ear-editorial", "silver-ear-cuff-product-flatlay"],
    },
    related: ["golden-sphere-huggies", "amber-lace-earrings", "royal-heirloom-set"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    rating: 4.9,
    reviews: 89,
    category: "Necklaces",
    material: "18K Gold Plated",
    badge: "New",
    description:
      "A delicate pendant necklace blooming with multicolor floral crystals. The kind of piece that turns a simple white tee into an outfit.",
    details:
      "Brass base with 18K gold plating. Hand-set pastel cubic zirconia crystals in a floral motif. 16-inch chain with 2-inch extender.",
    care: "Keep dry and away from harsh chemicals. Lay flat to store and avoid tangling with other necklaces.",
    shipping:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tone: ["Gold"],
    images: {
      gold: [
        "multicolor-floral-crystal-necklace-closeup",
        "floral-necklace-on-model-editorial",
        "floral-necklace-product-flatlay",
      ],
    },
    related: ["royal-heirloom-set", "amber-lace-earrings", "vivid-aura-jewels"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    rating: 4.7,
    reviews: 156,
    category: "Huggies",
    material: "Sterling Silver",
    badge: null,
    description:
      "Chunky dome huggies with a mirror-polished finish. Substantial enough to wear solo, understated enough to stack.",
    details:
      "925 sterling silver with 18K gold vermeil. Hinged huggie closure. Diameter 12mm, width 6mm. Hypoallergenic and nickel-free.",
    care: "Remove before showering or sleeping. Wipe clean after wear and store in a dry place.",
    shipping:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tone: ["Gold", "Silver"],
    images: {
      gold: ["chunky-gold-dome-huggies-closeup", "gold-huggies-on-ear-editorial", "gold-huggies-product-flatlay"],
      silver: ["chunky-silver-dome-huggies-closeup", "silver-huggies-on-ear-editorial", "silver-huggies-product-flatlay"],
    },
    related: ["amber-lace-earrings", "vivid-aura-jewels", "royal-heirloom-set"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    rating: 4.9,
    reviews: 72,
    category: "Earrings",
    material: "18K Gold Plated",
    badge: "Editor's Pick",
    description:
      "Textured gold filigree drops inspired by vintage lace. Romantic, lightweight, and endlessly wearable from desk to dinner.",
    details:
      "Lightweight brass with textured 18K gold plating. Surgical steel posts. Length 45mm, width 22mm.",
    care: "Store hanging or flat to preserve shape. Clean gently with a soft cloth; do not use liquid jewelry cleaners.",
    shipping:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tone: ["Gold"],
    images: {
      gold: [
        "textured-gold-filigree-drop-earrings-closeup",
        "gold-lace-earrings-on-model-editorial",
        "gold-lace-earrings-product-flatlay",
      ],
    },
    related: ["majestic-flora-nectar", "vivid-aura-jewels", "golden-sphere-huggies"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    rating: 5.0,
    reviews: 43,
    category: "Sets",
    material: "18K Gold Plated",
    badge: "Gift Ready",
    description:
      "A curated earring and necklace set, gift-boxed and ready to give. The ultimate self-gift or surprise for someone treasured.",
    details:
      "Includes pendant necklace and matching stud earrings. Brass with 18K gold plating. Necklace 16–18 inches; earrings 8mm studs.",
    care: "Keep pieces separate in the velvet-lined gift box. Avoid moisture and chemicals to preserve the finish.",
    shipping:
      "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    tone: ["Gold"],
    images: {
      gold: [
        "gift-boxed-gold-jewelry-set-flatlay",
        "gold-necklace-earring-set-on-model",
        "gold-jewelry-set-product-detail",
      ],
    },
    related: ["majestic-flora-nectar", "golden-sphere-huggies", "amber-lace-earrings"],
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (product) => {
  if (!product?.related) return []
  return product.related.map((id) => getProductById(id)).filter(Boolean)
}
