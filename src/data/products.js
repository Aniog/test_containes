// Seed product data for Velmora Fine Jewelry
// Each product has stable ids used for image queries and DOM references.

export const products = [
  {
    id: "vivid-aura-jewels",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "Earrings",
    type: "Ear Cuff",
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.",
    description:
      "The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure fit. Hand-finished in 18K gold plating over sterling silver, it catches the light with a hand-set crystal that reads as a quiet sparkle, never a shout. Wear it solo or stacked.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.",
    care: "Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Clean gently with a soft dry cloth.",
    variants: ["Gold", "Silver"],
    images: 2,
    imgId: "p-vivid-aura",
    titleId: "title-vivid-aura-jewels",
    descId: "desc-vivid-aura-jewels",
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "Pendant Necklace",
    price: 68,
    rating: 4.9,
    reviews: 203,
    shortDesc:
      "A multicolor floral crystal pendant suspended from a fine gold chain — a garden in miniature, made to be layered.",
    description:
      "Majestic Flora Nectar centres on a delicate floral motif set with multicolor crystals that shift with the light. The adjustable fine chain lets it sit perfectly at the collarbone, whether worn alone or layered with simpler chains.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable chain 40–45cm with extender.",
    care: "Keep dry and away from perfumes. Fasten the clasp before storing to avoid tangling. Polish with a soft cloth.",
    variants: ["Gold", "Silver"],
    images: 2,
    imgId: "p-majestic-flora",
    titleId: "title-majestic-flora-nectar",
    descId: "desc-majestic-flora-nectar",
  },
  {
    id: "golden-sphere-huggies",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "Huggies",
    type: "Huggie Earrings",
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDesc:
      "Chunky gold dome huggies with a smooth, polished finish — the everyday earring you'll never take off.",
    description:
      "Golden Sphere Huggies reimagine the classic hoop as a polished dome that sits flush to the lobe. Lightweight and secure with a hinged closure, they are the foundation piece of any jewelry wardrobe.",
    materials:
      "18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure. Hypoallergenic.",
    care: "Wipe clean after each wear. Store separately to preserve the polished surface.",
    variants: ["Gold", "Silver"],
    images: 2,
    imgId: "p-golden-sphere",
    titleId: "title-golden-sphere-huggies",
    descId: "desc-golden-sphere-huggies",
  },
  {
    id: "amber-lace-earrings",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "Earrings",
    type: "Drop Earrings",
    price: 54,
    rating: 4.8,
    reviews: 97,
    shortDesc:
      "Textured gold filigree drop earrings with an artisanal, lace-like openwork — quiet drama for the evening.",
    description:
      "Amber Lace is built from hand-finished filigree that reads like woven gold thread. The openwork catches light from every angle while remaining remarkably light on the ear, moving softly with the wearer.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure. Nickel-free.",
    care: "Handle by the closure to protect the filigree. Store flat in a dedicated compartment.",
    variants: ["Gold", "Silver"],
    images: 2,
    imgId: "p-amber-lace",
    titleId: "title-amber-lace-earrings",
    descId: "desc-amber-lace-earrings",
  },
  {
    id: "royal-heirloom-set",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "Necklaces",
    type: "Earring + Necklace Set",
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDesc:
      "A gift-boxed earring and necklace set in matching gold — the considered present, ready to give.",
    description:
      "Royal Heirloom pairs a coordinating pendant necklace with drop earrings in a unified gold finish, presented in a signature Velmora gift box. Designed for gifting, made to be treasured and passed on.",
    materials:
      "18K gold plating over 925 sterling silver. Hand-set crystals. Includes signature gift box and pouch.",
    care: "Store each piece in the provided pouch. Avoid moisture. Clean with a soft dry cloth.",
    variants: ["Gold", "Silver"],
    images: 2,
    imgId: "p-royal-heirloom",
    titleId: "title-royal-heirloom-set",
    descId: "desc-royal-heirloom-set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Huggies, cuffs and drops in warm gold.",
    imgId: "cat-earrings",
    titleId: "cat-title-earrings",
    descId: "cat-desc-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants and chains made to layer.",
    imgId: "cat-necklaces",
    titleId: "cat-title-necklaces",
    descId: "cat-desc-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Polished everyday hoops that hug the lobe.",
    imgId: "cat-huggies",
    titleId: "cat-title-huggies",
    descId: "cat-desc-huggies",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The Golden Sphere Huggies haven't left my ears in months. They feel far more expensive than they were.",
  },
  {
    id: "t2",
    name: "Amara K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the packaging alone made me look like the most thoughtful person alive.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "Quiet, warm, elegant. The Amber Lace earrings get compliments every single time I wear them.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Stacked huggies, golden hour",
    imgId: "reel-1",
    titleId: "reel-title-1",
  },
  {
    id: "r2",
    caption: "The ear cuff that needs no piercing",
    imgId: "reel-2",
    titleId: "reel-title-2",
  },
  {
    id: "r3",
    caption: "Layered necklaces, one story",
    imgId: "reel-3",
    titleId: "reel-title-3",
  },
  {
    id: "r4",
    caption: "Filigree that catches the light",
    imgId: "reel-4",
    titleId: "reel-title-4",
  },
  {
    id: "r5",
    caption: "Gift-boxed and ready",
    imgId: "reel-5",
    titleId: "reel-title-5",
  },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelated(slug, limit = 4) {
  const current = getProduct(slug)
  if (!current) return products.slice(0, limit)
  return products.filter((p) => p.slug !== slug).slice(0, limit)
}
