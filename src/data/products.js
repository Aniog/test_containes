export const categories = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
]

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    tags: ["ear cuff", "crystal", "gold"],
    rating: 4.8,
    reviewCount: 124,
    description:
      "A sculptural gold ear cuff finished with a single luminous crystal. Designed to sit comfortably along the ear without piercing, it catches candlelight beautifully and layers effortlessly with studs and hoops.",
    materials:
      "18k gold-plated brass with a hypoallergenic, nickel-free finish. Hand-set faceted glass crystal.",
    care: "Store in a dry pouch. Avoid contact with perfumes, lotions, and water to preserve the gold plating.",
    images: ["vivid-aura-main", "vivid-aura-hover"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    tags: ["multicolor", "floral", "crystal", "necklace"],
    rating: 4.9,
    reviewCount: 89,
    description:
      "A delicate pendant necklace blooming with hand-painted enamel petals and tiny crystal dewdrops. The adjustable chain lets you wear it close to the collarbone or layered over a silk blouse.",
    materials:
      "18k gold-plated chain with enamel and glass crystal accents. Lobster clasp closure.",
    care: "Wipe gently with a soft cloth after wear. Keep away from moisture and harsh chemicals.",
    images: ["majestic-flora-main", "majestic-flora-hover"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    tags: ["huggies", "gold", "hoop", "minimal"],
    rating: 4.7,
    reviewCount: 211,
    description:
      "Chunky dome huggies that feel substantial but stay featherlight. Their polished mirror finish reflects warmth, making them the perfect everyday pair you never have to take off.",
    materials:
      "18k gold-plated brass with a stainless steel post. Hypoallergenic and suitable for sensitive ears.",
    care: "Remove before swimming or showering. Polish with a soft jewelry cloth to maintain shine.",
    images: ["golden-sphere-main", "golden-sphere-hover"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    tags: ["filigree", "drop", "textured", "gold"],
    rating: 4.9,
    reviewCount: 76,
    description:
      "Intricate filigree drops inspired by antique lace and sun-warmed amber. Each curve is etched by hand for a vintage-meets-modern silhouette that frames the face.",
    materials:
      "18k gold-plated brass with a textured matte-and-polish finish. Surgical steel posts.",
    care: "Store flat to prevent bending. Clean gently with a dry cloth; avoid abrasive materials.",
    images: ["amber-lace-main", "amber-lace-hover"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "earrings",
    tags: ["gift set", "earrings", "necklace", "box"],
    rating: 5.0,
    reviewCount: 52,
    description:
      "A ready-to-gift pairing of petite drop earrings and a matching pendant, presented in a soft-touch Velmora box. The kind of set that becomes a signature.",
    materials:
      "18k gold-plated brass, glass crystals, and a velvet-padded Velmora keepsake box.",
    care: "Keep pieces separated in the provided box. Wipe clean and avoid exposure to water.",
    images: ["royal-heirloom-main", "royal-heirloom-hover"],
  },
]

export const testimonials = [
  { id: 1, name: "Sophia M.", text: "The packaging alone made me gasp. The earrings are even more luminous in person." },
  { id: 2, name: "Emma R.", text: "My new everyday hoops. Lightweight, chic, and they still look brand new after months." },
  { id: 3, name: "Isabella T.", text: "Bought the set as a gift and ended up ordering one for myself. Absolutely stunning." },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (product, count = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count)
