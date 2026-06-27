export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
]

export const materials = ["18K Gold Plated", "Sterling Silver", "Mixed Metals"]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviewCount: 124,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without the need for a piercing, it catches candlelight with every turn.",
    details: {
      materials:
        "18K gold-plated brass with a premium e-coating. Set with a single cubic zirconia crystal. Nickel-free and hypoallergenic.",
      care: "Avoid contact with perfume, lotion, and water. Store in the provided pouch and polish gently with a soft cloth.",
      shipping:
        "Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.",
    },
    images: [
      { alt: "Vivid Aura Jewels ear cuff on model", query: "gold ear cuff crystal accent closeup luxury jewelry warm light" },
      { alt: "Vivid Aura Jewels detail", query: "gold ear cuff crystal jewelry detail dark background" },
      { alt: "Vivid Aura Jewels styled", query: "gold ear cuff earrings stacked ear jewelry editorial" },
    ],
    hoverImage: { alt: "Vivid Aura Jewels worn", query: "woman wearing gold ear cuff crystal jewelry closeup" },
    toneOptions: ["Gold", "Silver"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 89,
    badge: "New",
    description:
      "A delicate floral crystal necklace inspired by heirloom gardens. Tiny multicolor crystals bloom along a fine gold chain — feminine, romantic, and quietly striking.",
    details: {
      materials:
        "18K gold-plated chain with handset glass crystals in blush, champagne, and sage. Lobster clasp closure. Length: 40cm + 5cm extender.",
      care: "Keep dry and store flat. Clean crystals with a soft, dry cloth only.",
      shipping:
        "Complimentary gift packaging included. Free worldwide shipping over $50. 30-day returns.",
    },
    images: [
      { alt: "Majestic Flora Nectar necklace flatlay", query: "multicolor crystal flower necklace gold chain editorial jewelry flatlay" },
      { alt: "Majestic Flora Nectar on model", query: "floral crystal gold necklace on woman neck closeup warm light" },
      { alt: "Majestic Flora Nectar detail", query: "flower crystal necklace gold detail jewelry macro" },
    ],
    hoverImage: { alt: "Majestic Flora Nectar styled", query: "woman wearing floral crystal gold necklace elegant portrait" },
    toneOptions: ["Gold"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviewCount: 210,
    badge: "Bestseller",
    description:
      "Chunky dome huggies that feel modern and timeless at once. Polished to a mirror finish, they hug the lobe with just the right weight.",
    details: {
      materials:
        "18K gold-plated stainless steel. Hinge closure. Diameter: 12mm. Tarnish-resistant and waterproof-friendly.",
      care: "Rinse after swimming or sweating. Dry thoroughly before storing.",
      shipping:
        "Ships within 1–2 business days. Free worldwide shipping over $50. Easy 30-day returns.",
    },
    images: [
      { alt: "Golden Sphere Huggies pair", query: "chunky gold dome huggie earrings pair dark background luxury" },
      { alt: "Golden Sphere Huggies on ear", query: "gold huggie earrings on ear closeup warm light" },
      { alt: "Golden Sphere Huggies detail", query: "gold dome huggie earrings detail macro jewelry" },
    ],
    hoverImage: { alt: "Golden Sphere Huggies worn", query: "woman wearing chunky gold huggie earrings portrait" },
    toneOptions: ["Gold", "Silver"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    rating: 4.9,
    reviewCount: 76,
    description:
      "Textured filigree drops inspired by antique lace. Lightweight and luminous, they move beautifully and elevate everything from a white shirt to an evening dress.",
    details: {
      materials:
        "18K gold-plated brass with textured filigree work. Post back with butterfly closure. Length: 45mm.",
      care: "Avoid moisture and perfume. Store hanging or flat in the provided pouch.",
      shipping:
        "Free worldwide shipping over $50. Orders ship within 1–2 business days. 30-day returns on unworn items.",
    },
    images: [
      { alt: "Amber Lace Earrings flatlay", query: "gold filigree drop earrings textured lace jewelry dark background" },
      { alt: "Amber Lace Earrings on model", query: "woman wearing gold filigree drop earrings closeup warm light" },
      { alt: "Amber Lace Earrings detail", query: "gold lace earrings detail macro luxury jewelry" },
    ],
    hoverImage: { alt: "Amber Lace Earrings styled", query: "gold filigree drop earrings styled portrait elegant" },
    toneOptions: ["Gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "sets",
    material: "Mixed Metals",
    rating: 5.0,
    reviewCount: 43,
    badge: "Gift Set",
    description:
      "A curated gift set featuring our signature huggies and a matching pendant necklace, presented in a Velmora keepsake box. The easiest way to give something unforgettable.",
    details: {
      materials:
        "18K gold-plated huggies paired with a matching gold-plated pendant necklace. Includes Velmora gift box and care card.",
      care: "Store pieces separately in the provided pouch to prevent scratching. Clean with a soft, dry cloth.",
      shipping:
        "Complimentary gift box and note. Free worldwide shipping. 30-day returns on unworn sets.",
    },
    images: [
      { alt: "Royal Heirloom Set gift box", query: "gold jewelry gift set earrings necklace velvet box luxury" },
      { alt: "Royal Heirloom Set pieces", query: "gold huggie earrings pendant necklace set flatlay dark background" },
      { alt: "Royal Heirloom Set on model", query: "woman wearing gold huggie earrings pendant necklace set portrait" },
    ],
    hoverImage: { alt: "Royal Heirloom Set styled", query: "gold jewelry set worn elegant woman portrait warm light" },
    toneOptions: ["Gold", "Silver"],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}

export function getBestsellers(limit = 5) {
  return products.slice(0, limit)
}
