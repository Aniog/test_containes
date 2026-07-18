// Seed product data for Velmora Fine Jewelry.
// Each product has stable ids used for image queries and routing.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    tone: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff crowned with a single hand-set crystal. Designed to be worn alone or stacked along the lobe for an effortless, modern finish.",
    details: [
      "18K gold plating over sterling silver core",
      "Hand-set Swarovski-style crystal",
      "Nickel-free, hypoallergenic",
      "Sold as a single piece",
    ],
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch to preserve the plating.",
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-a2",
    gallery: ["p-vivid-aura-g1", "p-vivid-aura-g2", "p-vivid-aura-g3"],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    tone: ["Gold"],
    rating: 4.9,
    reviews: 88,
    badge: "New",
    description:
      "A delicate floral pendant scattered with multicolor crystals, suspended from a fine gold chain. A quiet statement piece for everyday wear.",
    details: [
      "18K gold plating over sterling silver",
      "Multicolor crystal floral motif",
      "Adjustable 40–45cm chain",
      "Lobster clasp closure",
    ],
    care: "Gently wipe with a soft cloth after wear. Keep dry and store separately to avoid tangling.",
    imgId: "p-majestic-flora-a1",
    imgIdAlt: "p-majestic-flora-a2",
    gallery: ["p-majestic-flora-g1", "p-majestic-flora-g2", "p-majestic-flora-g3"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    tone: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 214,
    badge: "Bestseller",
    description:
      "Polished gold dome huggies with a satisfying chunky silhouette. Lightweight, secure, and made to live in from day to night.",
    details: [
      "18K gold plating over sterling silver",
      "Chunky polished dome",
      "Hinged snap closure",
      "Sold as a pair",
    ],
    care: "Clean with a soft dry cloth. Avoid exposure to moisture and chemicals.",
    imgId: "p-golden-sphere-a1",
    imgIdAlt: "p-golden-sphere-a2",
    gallery: ["p-golden-sphere-g1", "p-golden-sphere-g2", "p-golden-sphere-g3"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    tone: ["Gold"],
    rating: 4.8,
    reviews: 73,
    badge: null,
    description:
      "Intricately textured filigree drops that catch the light with every movement. An heirloom-inspired silhouette with a modern, weightless feel.",
    details: [
      "18K gold plating over sterling silver",
      "Hand-finished filigree texture",
      "Lightweight drop, 4.5cm length",
      "Lever-back closure",
    ],
    care: "Handle with care to protect the filigree detail. Store flat in the provided box.",
    imgId: "p-amber-lace-a1",
    imgIdAlt: "p-amber-lace-a2",
    gallery: ["p-amber-lace-g1", "p-amber-lace-g2", "p-amber-lace-g3"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    tone: ["Gold"],
    rating: 5.0,
    reviews: 41,
    badge: "Gift Set",
    description:
      "A coordinated pairing of filigree earrings and a matching pendant necklace, presented in a signature Velmora gift box. The effortless gift, ready to give.",
    details: [
      "18K gold plating over sterling silver",
      "Matching earrings + pendant necklace",
      "Signature Velmora gift box included",
      "Adjustable chain 42–48cm",
    ],
    care: "Store each piece separately in the gift box. Wipe clean with a soft cloth.",
    imgId: "p-royal-heirloom-a1",
    imgIdAlt: "p-royal-heirloom-a2",
    gallery: ["p-royal-heirloom-g1", "p-royal-heirloom-g2", "p-royal-heirloom-g3"],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Sculptural drops, cuffs and statement studs.",
    imgId: "cat-earrings-1",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Fine chains and pendants for everyday layering.",
    imgId: "cat-necklaces-1",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Polished gold huggies made to live in.",
    imgId: "cat-huggies-1",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold plating is unreal — it looks like solid gold and hasn't faded after months of daily wear. My new everyday earrings.",
  },
  {
    name: "Sofia M.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the packaging alone made it feel so special. She hasn't taken it off since.",
  },
  {
    name: "Priya K.",
    rating: 5,
    text: "Quietly luxurious without the designer markup. The filigree detail on the Amber Lace is genuinely beautiful in person.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, worn daily",
    imgId: "reel-1-img",
  },
  {
    id: "reel-2",
    caption: "Stacking the Vivid Aura cuff",
    imgId: "reel-2-img",
  },
  {
    id: "reel-3",
    caption: "Majestic Flora, layered",
    imgId: "reel-3-img",
  },
  {
    id: "reel-4",
    caption: "Amber Lace for evening",
    imgId: "reel-4-img",
  },
  {
    id: "reel-5",
    caption: "The Heirloom set, unboxed",
    imgId: "reel-5-img",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
