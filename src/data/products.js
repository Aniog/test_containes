// Seed product catalog for Velmora Fine Jewelry.
// Images use the data-strk-img tagging system; query strings reference
// nearby text element IDs (title/desc) so the stock image system can pick
// relevant warm gold jewelry photography.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    subtitle: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    subcategory: "Ear Cuffs",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 126,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff traced with a single crystal accent. Designed to climb the curve of the ear — no piercing required. Quietly luminous, made for everyday wear.",
    details:
      "18K gold plating over brass. Hand-set cubic zirconia. Nickel-free and hypoallergenic. Sold as a single piece.",
    care: "Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    imgId: "prod-vivid-aura-a1",
    imgId2: "prod-vivid-aura-b2",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    subtitle: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    subcategory: "Pendants",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.9,
    reviews: 203,
    badge: "Bestseller",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A garden in miniature — romantic, weightless, made to catch the light.",
    details:
      "18K gold plating over brass. Hand-set cubic zirconia in amber, rose and clear. Adjustable 40–45cm chain with extender. Lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the stones.",
    imgId: "prod-majestic-flora-a1",
    imgId2: "prod-majestic-flora-b2",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    subtitle: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    subcategory: "Huggies",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 318,
    badge: "Bestseller",
    description:
      "Chunky dome huggies with a polished, mirror-bright finish. The everyday gold earring — substantial enough to notice, light enough to forget you're wearing.",
    details:
      "18K gold plating over brass. 12mm dome. Hinged huggie closure. Sold as a pair. Hypoallergenic.",
    care: "Wipe clean after wear. Avoid water and chemicals. Store in a dry place.",
    imgId: "prod-golden-sphere-a1",
    imgId2: "prod-golden-sphere-b2",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    subtitle: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    subcategory: "Drops",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.8,
    reviews: 89,
    badge: "New",
    description:
      "Drop earrings in openwork gold filigree, inspired by antique lace. Light as air with a quiet, old-world elegance that moves with you.",
    details:
      "18K gold plating over brass. 45mm drop length. Lever-back closure. Sold as a pair. Hypoallergenic.",
    care: "Handle filigree with care. Store in the provided box. Polish with a soft cloth.",
    imgId: "prod-amber-lace-a1",
    imgId2: "prod-amber-lace-b2",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    subtitle: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    subcategory: "Sets",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 5.0,
    reviews: 64,
    badge: "Gift Set",
    description:
      "A coordinated set of filigree earrings and a matching pendant, presented in a signature Velmora gift box. The considered gift — ready to give, made to be treasured.",
    details:
      "18K gold plating over brass. Hand-set cubic zirconia. Necklace 42cm with extender. Earrings 30mm. Arrives in a keepsake gift box.",
    care: "Store each piece separately in the gift box. Keep dry and away from perfume.",
    imgId: "prod-royal-heirloom-a1",
    imgId2: "prod-royal-heirloom-b2",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
  {
    id: "celeste-chain-necklace",
    name: "Celeste Chain Necklace",
    subtitle: "Layered fine gold chain necklace",
    price: 46,
    category: "Necklaces",
    subcategory: "Chains",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.6,
    reviews: 142,
    badge: null,
    description:
      "A pre-layered fine chain necklace that does the styling for you. Three delicate strands at varying lengths for an effortless, considered look.",
    details:
      "18K gold plating over brass. 40/45/50cm layered lengths. Lobster clasp. Hypoallergenic.",
    care: "Keep dry. Store flat to avoid tangling. Polish with a soft cloth.",
    imgId: "prod-celeste-chain-a1",
    imgId2: "prod-celeste-chain-b2",
    titleId: "title-celeste-chain-necklace",
    descId: "desc-celeste-chain-necklace",
  },
  {
    id: "lumiere-stud-earrings",
    name: "Lumiere Stud Earrings",
    subtitle: "Solitaire crystal gold studs",
    price: 34,
    category: "Earrings",
    subcategory: "Studs",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 211,
    badge: null,
    description:
      "A pair of solitaire crystal studs in a fine gold setting. The quiet essential — the first piece you reach for, every morning.",
    details:
      "18K gold plating over brass. 4mm hand-set cubic zirconia. Push-back closure. Sold as a pair. Hypoallergenic.",
    care: "Wipe clean after wear. Store in the provided pouch.",
    imgId: "prod-lumiere-stud-a1",
    imgId2: "prod-lumiere-stud-b2",
    titleId: "title-lumiere-stud-earrings",
    descId: "desc-lumiere-stud-earrings",
  },
  {
    id: "noir-crescent-huggies",
    name: "Noir Crescent Huggies",
    subtitle: "Crescent moon gold huggies",
    price: 44,
    category: "Huggies",
    subcategory: "Huggies",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.8,
    reviews: 97,
    badge: "New",
    description:
      "Slim crescent huggies that hug the lobe in a soft arc of gold. Modern and minimal, with a subtle celestial line.",
    details:
      "18K gold plating over brass. 14mm crescent. Hinged huggie closure. Sold as a pair. Hypoallergenic.",
    care: "Keep dry and away from chemicals. Store in a dry place.",
    imgId: "prod-noir-crescent-a1",
    imgId2: "prod-noir-crescent-b2",
    titleId: "title-noir-crescent-huggies",
    descId: "desc-noir-crescent-huggies",
  },
]

export const categories = [
  {
    id: "Earrings",
    name: "Earrings",
    tagline: "Studs, drops & cuffs",
    imgId: "cat-earrings-a1",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "Necklaces",
    name: "Necklaces",
    tagline: "Chains, pendants & sets",
    imgId: "cat-necklaces-a1",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "Huggies",
    name: "Huggies",
    tagline: "Everyday gold huggies",
    imgId: "cat-huggies-a1",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in months. They look far more expensive than they were — I get compliments constantly.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother was genuinely moved. Quality is stunning.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "I was nervous about gold-plated jewelry irritating my skin, but these are genuinely hypoallergenic. No green, no itch. Beautiful everyday pieces.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, everyday",
    imgId: "reel-1-a1",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Layered Celeste chains",
    imgId: "reel-2-a1",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Vivid Aura ear cuff",
    imgId: "reel-3-a1",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Amber Lace, evening light",
    imgId: "reel-4-a1",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Majestic Flora, close up",
    imgId: "reel-5-a1",
    titleId: "reel-5-title",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
