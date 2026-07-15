// Seed product data for Velmora Fine Jewelry storefront.
// Each product has two image references (primary + hover) for the stock image system.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold Ear Cuff with Crystal Accent",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    tones: ["Gold", "Silver"],
    description:
      "A sculptural ear cuff that traces the curve of your ear with a single hand-set crystal. No piercing required — simply slide and pinch to fit. Effortless edge for everyday wear.",
    details: [
      "18K gold plating over sterling silver core",
      "Hand-set cubic zirconia crystal",
      "No-piercing, adjustable fit",
      "Hypoallergenic & nickel-free",
    ],
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    imgId: "p-vivid-aura-a1",
    imgIdHover: "p-vivid-aura-b2",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor Floral Crystal Necklace",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    tones: ["Gold", "Silver"],
    description:
      "A delicate floral pendant blooming with multicolor crystals, suspended from a fine gold chain. A romantic statement piece that catches the light with every movement.",
    details: [
      "18K gold plating over sterling silver",
      "Multicolor cubic zirconia floral motif",
      "Adjustable 40–45cm chain with extender",
      "Lobster clasp closure",
    ],
    care: "Keep dry and away from perfumes. Store flat in a jewelry box to prevent tangling. Polish with a microfiber cloth.",
    imgId: "p-majestic-flora-a1",
    imgIdHover: "p-majestic-flora-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky Gold Dome Huggie Earrings",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    tones: ["Gold", "Silver"],
    description:
      "Chunky dome huggies that hug the lobe with a polished, sculptural finish. The everyday gold earring you'll never want to take off.",
    details: [
      "18K gold plating over sterling silver",
      "Polished dome silhouette",
      "Hinged snap closure for secure fit",
      "Sold as a pair",
    ],
    care: "Remove before showering or swimming. Wipe clean with a soft dry cloth after each wear.",
    imgId: "p-golden-sphere-a1",
    imgIdHover: "p-golden-sphere-b2",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured Gold Filigree Drop Earrings",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 89,
    tones: ["Gold", "Silver"],
    description:
      "Intricate filigree drops with a lace-like openwork texture, finished in warm gold. Lightweight and quietly ornate — the kind of detail that turns heads.",
    details: [
      "18K gold plating over sterling silver",
      "Hand-finished filigree texture",
      "Lightweight drop, 4cm length",
      "Lever-back closure",
    ],
    care: "Handle with care to preserve fine detailing. Store separately to avoid snagging. Clean with a soft brush and dry cloth.",
    imgId: "p-amber-lace-a1",
    imgIdHover: "p-amber-lace-b2",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-Boxed Earring + Necklace Set",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 64,
    tones: ["Gold", "Silver"],
    description:
      "A coordinated set of filigree earrings and a matching pendant necklace, presented in a signature Velmora gift box. The perfect ready-to-gift heirloom.",
    details: [
      "18K gold plating over sterling silver",
      "Coordinated earring + necklace set",
      "Presented in signature gift box",
      "Includes polishing cloth & care card",
    ],
    care: "Store each piece separately in the gift box compartments. Avoid moisture and cosmetics. Polish gently before wearing.",
    imgId: "p-royal-heirloom-a1",
    imgIdHover: "p-royal-heirloom-b2",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "Sculptural drops, cuffs & statement studs",
    imgId: "cat-earrings-a1",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "Delicate chains & pendant moments",
    imgId: "cat-necklaces-a1",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "Polished domes that hug the lobe",
    imgId: "cat-huggies-a1",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Sofia M.",
    rating: 5,
    text: "The Golden Sphere Huggies have become my everyday go-to. The gold tone is rich and warm, not cheap-looking at all. I get compliments constantly.",
  },
  {
    name: "Amara K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift for my mother. The packaging alone felt luxurious. She hasn't taken it off since. Beautiful quality.",
  },
  {
    name: "Elena R.",
    rating: 5,
    text: "I was nervous about demi-fine pricing but the Majestic Flora necklace exceeded expectations. Delicate, sparkly, and the chain doesn't tangle.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-1-a1",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Majestic Flora Nectar, layered & luminous",
    imgId: "reel-2-a1",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Vivid Aura cuff, no piercing needed",
    imgId: "reel-3-a1",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace drops, evening-ready",
    imgId: "reel-4-a1",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Royal Heirloom Set, the gift moment",
    imgId: "reel-5-a1",
    titleId: "reel-5-title",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
