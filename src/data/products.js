// Seed product data for Velmora Fine Jewelry
// Each product has two image queries (primary + hover) for the crossfade effect.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    subcategory: "Ear Cuff",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 126,
    bestseller: true,
    badge: "Bestseller",
    description:
      "A sculptural gold ear cuff crowned with a single crystal accent. Designed to curve along the cartilage for an effortless, no-pierce statement.",
    details:
      "Hand-finished 18K gold plating over a durable brass core. Lead and nickel free. Sold as a single piece.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    images: [
      { imgId: "vivid-aura-1", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
      { imgId: "vivid-aura-2", titleId: "vivid-aura-title", descId: "vivid-aura-desc" },
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    subcategory: "Pendant",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 203,
    bestseller: true,
    badge: "Bestseller",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet burst of color for everyday wear.",
    details:
      "18K gold plating over brass. Adjustable 16–18 inch chain with lobster clasp. Hypoallergenic and nickel free.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.",
    images: [
      { imgId: "majestic-flora-1", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
      { imgId: "majestic-flora-2", titleId: "majestic-flora-title", descId: "majestic-flora-desc" },
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Earrings",
    subcategory: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 318,
    bestseller: true,
    badge: "Bestseller",
    description:
      "Chunky dome huggies with a smooth, polished finish. The everyday gold earring that hugs the lobe with quiet confidence.",
    details:
      "18K gold plating over brass. Hinged snap closure. Sold as a pair. Lightweight and comfortable for all-day wear.",
    care: "Wipe clean with a soft cloth after each wear. Avoid water and chemicals.",
    images: [
      { imgId: "golden-sphere-1", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
      { imgId: "golden-sphere-2", titleId: "golden-sphere-title", descId: "golden-sphere-desc" },
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    subcategory: "Drop",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 91,
    bestseller: true,
    badge: "Bestseller",
    description:
      "Intricate filigree drops with a warm textured finish. Light-catching and featherlight, they move with a quiet elegance.",
    details:
      "18K gold plating over brass with a hand-textured filigree detail. Fishhook posts. Lead and nickel free.",
    care: "Handle with care to preserve the filigree detail. Store in the provided pouch.",
    images: [
      { imgId: "amber-lace-1", titleId: "amber-lace-title", descId: "amber-lace-desc" },
      { imgId: "amber-lace-2", titleId: "amber-lace-title", descId: "amber-lace-desc" },
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Necklaces",
    subcategory: "Set",
    material: "18K Gold Plated",
    rating: 5.0,
    reviews: 64,
    bestseller: true,
    badge: "Gift Set",
    description:
      "A coordinated earring and necklace set, presented in a signature gift box. The considered gift for milestones and moments worth marking.",
    details:
      "18K gold plating over brass. Includes one pair of earrings and one adjustable necklace. Arrives in a keepsake Velmora box.",
    care: "Store each piece separately to avoid tangling. Polish with a soft cloth.",
    images: [
      { imgId: "royal-heirloom-1", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
      { imgId: "royal-heirloom-2", titleId: "royal-heirloom-title", descId: "royal-heirloom-desc" },
    ],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    description: "Huggies, cuffs, and drops in warm gold.",
    imgId: "cat-earrings",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants and chains for everyday layering.",
    imgId: "cat-necklaces",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    name: "Huggies",
    description: "Polished dome huggies that hug the lobe.",
    imgId: "cat-huggies",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold is so warm and rich — I get compliments every time I wear the Flora Nectar. It feels far more expensive than it was.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Heirloom Set as a gift and the box alone made it feel special. Beautiful quality and the packaging is gorgeous.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "My Sphere Huggies haven't left my ears in weeks. Lightweight, comfortable, and the gold hasn't faded at all.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Golden Sphere Huggies, everyday gold.",
    imgId: "reel-1-img",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Layered pendants for a quiet glow.",
    imgId: "reel-2-img",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "The ear cuff that needs no piercing.",
    imgId: "reel-3-img",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Filigree drops catching the light.",
    imgId: "reel-4-img",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "Gift-boxed and ready to treasure.",
    imgId: "reel-5-img",
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
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aSame = a.category === current.category ? 1 : 0
      const bSame = b.category === current.category ? 1 : 0
      return bSame - aSame
    })
    .slice(0, limit)
}
