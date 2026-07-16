// Seed product data for Velmora Fine Jewelry
// Images are resolved at runtime via the strk image system (data-strk-img).

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
    tone: "Gold",
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is an everyday statement piece, hand-finished in 18K gold plating over sterling silver. A precision-set crystal catches the light with every turn. Designed to hug the cartilage comfortably without a piercing, it pairs effortlessly with huggies or stands alone.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Set with a premium cubic zirconia crystal.",
    care: "Avoid contact with perfumes and water. Store in the provided pouch. Clean gently with a soft cloth.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    featured: true,
    imgId: "p-vivid-aura-a1",
    imgIdAlt: "p-vivid-aura-a1-alt",
    gallery: ["p-vivid-aura-g1", "p-vivid-aura-g2", "p-vivid-aura-g3", "p-vivid-aura-g4"],
  },
  {
    id: "majestic-flora-nectar",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    type: "Pendant Necklace",
    price: 68,
    rating: 4.9,
    reviews: 204,
    tone: "Gold",
    shortDesc:
      "A multicolor floral crystal pendant suspended from a delicate gold chain.",
    description:
      "Majestic Flora Nectar blooms with hand-set multicolor crystals arranged as a delicate flower. The fine gold-plated chain is adjustable, letting the pendant rest perfectly at the collarbone. A romantic piece made for gifting and special occasions.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia crystals. Lobster clasp with 5cm extender.",
    care: "Keep dry and away from cosmetics. Store flat in a jewelry box to protect the crystals.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    featured: true,
    imgId: "p-majestic-flora-b2",
    imgIdAlt: "p-majestic-flora-b2-alt",
    gallery: ["p-majestic-flora-g1", "p-majestic-flora-g2", "p-majestic-flora-g3", "p-majestic-flora-g4"],
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
    tone: "Gold",
    shortDesc:
      "Chunky gold dome huggie earrings with a smooth, polished finish.",
    description:
      "Golden Sphere Huggies deliver bold presence in a compact silhouette. The polished dome catches light from every angle, while the secure hinged hoop keeps them comfortable all day. Sold as a pair.",
    materials:
      "18K gold plating over 925 sterling silver. Hinged snap closure. Hypoallergenic, nickel-free.",
    care: "Wipe clean after wear. Avoid sleeping in them to preserve the hinge.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    featured: true,
    imgId: "p-golden-sphere-c3",
    imgIdAlt: "p-golden-sphere-c3-alt",
    gallery: ["p-golden-sphere-g1", "p-golden-sphere-g2", "p-golden-sphere-g3", "p-golden-sphere-g4"],
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
    tone: "Gold",
    shortDesc:
      "Textured gold filigree drop earrings with an artisanal openwork design.",
    description:
      "Amber Lace Earrings are inspired by antique lacework, rendered in textured gold filigree. The openwork drops move gracefully and feel weightless. A refined choice that transitions from day to evening.",
    materials:
      "18K gold plating over brass. Textured filigree openwork. Lever-back closure.",
    care: "Handle with care to protect the filigree detail. Store separately to avoid tangling.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    featured: true,
    imgId: "p-amber-lace-d4",
    imgIdAlt: "p-amber-lace-d4-alt",
    gallery: ["p-amber-lace-g1", "p-amber-lace-g2", "p-amber-lace-g3", "p-amber-lace-g4"],
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
    tone: "Gold",
    shortDesc:
      "A gift-boxed earring and necklace set — a coordinated heirloom duo.",
    description:
      "The Royal Heirloom Set unites a pair of crystal-studded earrings with a matching pendant necklace, presented in a signature Velmora gift box. The perfect ready-to-gift duo for anniversaries, birthdays, and milestones.",
    materials:
      "18K gold plating over 925 sterling silver. Premium cubic zirconia. Includes gift box and polishing cloth.",
    care: "Store in the gift box when not worn. Clean with the provided cloth.",
    variants: ["Gold", "Silver"],
    bestseller: true,
    featured: true,
    imgId: "p-royal-heirloom-e5",
    imgIdAlt: "p-royal-heirloom-e5-alt",
    gallery: ["p-royal-heirloom-g1", "p-royal-heirloom-g2", "p-royal-heirloom-g3", "p-royal-heirloom-g4"],
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    slug: "earrings",
    desc: "Ear cuffs, drops & statement studs",
    imgId: "cat-earrings-f1",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    slug: "necklaces",
    desc: "Pendants, chains & layered pieces",
    imgId: "cat-necklaces-f2",
  },
  {
    id: "huggies",
    name: "Huggies",
    slug: "huggies",
    desc: "Polished hoops that hug the ear",
    imgId: "cat-huggies-f3",
  },
]

export const testimonials = [
  {
    name: "Elena R.",
    rating: 5,
    text: "The gold plating is unreal for the price. I wear my huggies every single day and they haven't tarnished. Feels far more expensive than it was.",
  },
  {
    name: "Maya T.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the presentation was stunning. My mother cried. The pieces themselves are delicate and beautiful.",
  },
  {
    name: "Sofia L.",
    rating: 5,
    text: "Quiet luxury done right. The packaging, the weight of the pieces, the little note — it all feels considered. Already on my third order.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere Huggies, styled for everyday",
    imgId: "reel-r1-g1",
    handle: "@studio.velmora",
  },
  {
    id: "r2",
    caption: "Layering the Majestic Flora Nectar",
    imgId: "reel-r2-g2",
    handle: "@studio.velmora",
  },
  {
    id: "r3",
    caption: "Amber Lace, golden hour edit",
    imgId: "reel-r3-g3",
    handle: "@studio.velmora",
  },
  {
    id: "r4",
    caption: "The Vivid Aura ear cuff, no piercing",
    imgId: "reel-r4-g4",
    handle: "@studio.velmora",
  },
  {
    id: "r5",
    caption: "Royal Heirloom, unboxed",
    imgId: "reel-r5-g5",
    handle: "@studio.velmora",
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0
      const bMatch = b.category === current.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, limit)
}
