// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit titleId/descId so image queries can reference
// stable DOM ids, and unique imgId values for the strk image system.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "earring",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 126,
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — effortless edge for the unpierced ear.",
    description:
      "The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plate over sterling silver. A hand-set crystal catches the light with every turn, making it the quiet statement piece your stack was missing.",
    materials:
      "18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.",
    care: "Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.",
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img2",
    galleryIds: [
      "prod-vivid-aura-jewels-g1",
      "prod-vivid-aura-jewels-g2",
      "prod-vivid-aura-jewels-g3",
    ],
    bestseller: true,
    badge: "Bestseller",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "necklace",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    rating: 4.9,
    reviews: 203,
    shortDesc:
      "A multicolor floral crystal necklace that blooms along the collarbone — a garden of light.",
    description:
      "Majestic Flora Nectar suspends a cascade of floral crystals along a delicate gold chain. Each petal is set to catch and scatter light, creating a necklace that feels both heirloom and modern. Adjustable length for layering or wearing alone.",
    materials:
      "18K gold plating over brass base. Multicolor cubic zirconia crystals. Lobster clasp with 5cm extender.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystal settings.",
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img2",
    galleryIds: [
      "prod-majestic-flora-nectar-g1",
      "prod-majestic-flora-nectar-g2",
      "prod-majestic-flora-nectar-g3",
    ],
    bestseller: true,
    badge: "Bestseller",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    type: "huggie",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    rating: 4.7,
    reviews: 318,
    shortDesc:
      "Chunky gold dome huggie earrings that sit close to the lobe — everyday polish with presence.",
    description:
      "The Golden Sphere huggies reimagine the everyday hoop with a smooth, chunky dome silhouette. They hug the lobe snugly and close with a secure hinged clasp. The pair you'll reach for every morning.",
    materials:
      "18K gold plating over 925 sterling silver. Hinged snap closure. Hypoallergenic and nickel-free.",
    care: "Wipe clean with a soft cloth after wear. Keep dry. Store in a separate compartment to avoid scratching.",
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img2",
    galleryIds: [
      "prod-golden-sphere-huggies-g1",
      "prod-golden-sphere-huggies-g2",
      "prod-golden-sphere-huggies-g3",
    ],
    bestseller: true,
    badge: "Bestseller",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "earring",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    rating: 4.8,
    reviews: 89,
    shortDesc:
      "Textured gold filigree drop earrings — lacework in metal that moves with you.",
    description:
      "Amber Lace translates traditional filigree into a modern drop earring. The openwork gold catches light from every angle and sways gently with movement. Lightweight enough for all-day wear, ornate enough for evening.",
    materials:
      "18K gold plating over brass. Textured filigree construction. Lever-back closure. Hypoallergenic.",
    care: "Handle with care to preserve the filigree detail. Store in the provided box. Avoid moisture.",
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img2",
    galleryIds: [
      "prod-amber-lace-earrings-g1",
      "prod-amber-lace-earrings-g2",
      "prod-amber-lace-earrings-g3",
    ],
    bestseller: true,
    badge: "New",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Sets",
    type: "set",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    rating: 5.0,
    reviews: 64,
    shortDesc:
      "A gift-boxed earring and necklace set — coordinated elegance, ready to give.",
    description:
      "The Royal Heirloom Set pairs a crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Designed to be worn together or apart, it is the effortless answer to gifting — for someone else, or for yourself.",
    materials:
      "18K gold plating over sterling silver. Cubic zirconia accents. Includes gift box, pouch, and care card.",
    care: "Store each piece separately in the provided box. Keep dry. Polish with a soft cloth.",
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
    galleryIds: [
      "prod-royal-heirloom-set-g1",
      "prod-royal-heirloom-set-g2",
      "prod-royal-heirloom-set-g3",
    ],
    bestseller: true,
    badge: "Gift Set",
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    label: "Earrings",
    desc: "Statement drops, cuffs, and everyday studs.",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    imgId: "cat-earrings-img",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    label: "Necklaces",
    desc: "Delicate chains and crystal-lit pendants.",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    imgId: "cat-necklaces-img",
  },
  {
    id: "huggies",
    name: "Huggies",
    label: "Huggies",
    desc: "Close-set hoops for everyday polish.",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    imgId: "cat-huggies-img",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Sofia M.",
    rating: 5,
    text: "The gold plating is unreal — it looks like fine jewelry, not costume. I wear my huggies every single day and they haven't tarnished.",
  },
  {
    id: "t2",
    name: "Priya K.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother cried. The quality exceeded every expectation.",
  },
  {
    id: "t3",
    name: "Elena R.",
    rating: 5,
    text: "I'm sensitive to most metals and these are the first earrings I can wear all day with zero irritation. Quietly luxurious and so well made.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere Huggies, styled three ways",
    titleId: "reel-r1-title",
    imgId: "reel-r1-img",
  },
  {
    id: "r2",
    caption: "Stacking the Vivid Aura cuff",
    titleId: "reel-r2-title",
    imgId: "reel-r2-img",
  },
  {
    id: "r3",
    caption: "Majestic Flora, golden hour",
    titleId: "reel-r3-title",
    imgId: "reel-r3-img",
  },
  {
    id: "r4",
    caption: "Amber Lace for date night",
    titleId: "reel-r4-title",
    imgId: "reel-r4-img",
  },
  {
    id: "r5",
    caption: "The Heirloom Set, unboxed",
    titleId: "reel-r5-title",
    imgId: "reel-r5-img",
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
