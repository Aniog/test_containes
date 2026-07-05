// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    tagline: "Gold ear cuff with crystal accent",
    description:
      "A sculptural gold ear cuff crowned with a single clear crystal. Effortless alone or stacked along the lobe for a curated, modern ear.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 126,
    bestseller: true,
    badge: "Bestseller",
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-a1-alt",
    titleId: "p-vivid-aura-title",
    descId: "p-vivid-aura-desc",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    description:
      "A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet statement piece for everyday radiance.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.9,
    reviews: 88,
    bestseller: true,
    badge: "Bestseller",
    imgId: "p-majestic-flora-b2",
    imgIdAlt: "p-majestic-flora-b2-alt",
    titleId: "p-majestic-flora-title",
    descId: "p-majestic-flora-desc",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggie earrings",
    description:
      "Polished gold dome huggies with a satisfying weight and a soft, mirror shine. The everyday hoop you will never take off.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 214,
    bestseller: true,
    badge: "Bestseller",
    imgId: "p-golden-sphere-c3",
    imgIdAlt: "p-golden-sphere-c3-alt",
    titleId: "p-golden-sphere-title",
    descId: "p-golden-sphere-desc",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drop earrings",
    description:
      "Hand-finished filigree drops in warm gold, inspired by antique lacework. Light on the ear, rich in detail.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    tones: ["Gold"],
    rating: 4.8,
    reviews: 64,
    bestseller: true,
    badge: "Bestseller",
    imgId: "p-amber-lace-d4",
    imgIdAlt: "p-amber-lace-d4-alt",
    titleId: "p-amber-lace-title",
    descId: "p-amber-lace-desc",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Gift-boxed earring + necklace set",
    description:
      "A coordinated earring and necklace pairing, presented in a signature Velmora gift box. The effortless gift, ready to treasure.",
    price: 95,
    category: "Necklaces",
    material: "18K Gold Plated",
    tones: ["Gold", "Silver"],
    rating: 5.0,
    reviews: 41,
    bestseller: true,
    badge: "Gift Set",
    imgId: "p-royal-heirloom-e5",
    imgIdAlt: "p-royal-heirloom-e5-alt",
    titleId: "p-royal-heirloom-title",
    descId: "p-royal-heirloom-desc",
  },
]

export const categories = [
  {
    id: "Earrings",
    name: "Earrings",
    blurb: "Huggies, cuffs & drops",
    imgId: "cat-earrings-1",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "Necklaces",
    name: "Necklaces",
    blurb: "Pendants & chains",
    imgId: "cat-necklaces-2",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "Huggies",
    name: "Huggies",
    blurb: "Everyday gold hoops",
    imgId: "cat-huggies-3",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
]

export const testimonials = [
  {
    name: "Eleanor M.",
    rating: 5,
    text: "The gold sphere huggies have not left my ears since they arrived. They feel far more expensive than they were.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the presentation was stunning. My mother was genuinely moved.",
  },
  {
    name: "Camille D.",
    rating: 5,
    text: "Quiet, warm, elegant. Velmora is now my go-to for pieces that look heirloom but cost a fraction.",
  },
]

export const reels = [
  {
    id: "reel-1",
    caption: "Stacked gold cuffs on the lobe",
    imgId: "reel-1-img",
    titleId: "reel-1-title",
  },
  {
    id: "reel-2",
    caption: "Flora pendant, layered",
    imgId: "reel-2-img",
    titleId: "reel-2-title",
  },
  {
    id: "reel-3",
    caption: "Huggies, all day",
    imgId: "reel-3-img",
    titleId: "reel-3-title",
  },
  {
    id: "reel-4",
    caption: "Filigree drops at golden hour",
    imgId: "reel-4-img",
    titleId: "reel-4-title",
  },
  {
    id: "reel-5",
    caption: "The gift, unboxed",
    imgId: "reel-5-img",
    titleId: "reel-5-title",
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
