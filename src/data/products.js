// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit titleId/descId so image queries can reference
// the exact rendered DOM ids.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "Earrings",
    type: "Ear Cuff",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    shortDesc:
      "A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.",
    description:
      "The Vivid Aura ear cuff is an everyday statement piece, designed to hug the curve of the ear with a comfortable, secure fit. A hand-set crystal catches the light with every turn, adding a quiet shimmer that transitions effortlessly from day to evening.",
    materials:
      "18K gold plating over a durable brass core. Hypoallergenic, nickel and lead free. Crystal accent.",
    care: "Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.",
    rating: 4.8,
    reviews: 126,
    titleId: "prod-vivid-aura-jewels-title",
    descId: "prod-vivid-aura-jewels-desc",
    imgId: "prod-vivid-aura-jewels-img",
    cartImgId: "cart-vivid-aura-jewels-img",
    imgId2: "prod-vivid-aura-jewels-img2",
    bestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "Necklaces",
    type: "Pendant Necklace",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    shortDesc:
      "A multicolor floral crystal pendant suspended from a fine gold chain.",
    description:
      "Majestic Flora Nectar is a garden in miniature — a floral cluster of multicolor crystals blooming from a polished gold setting. The delicate chain sits gracefully at the collarbone, making it a versatile centerpiece for both layered looks and solo wear.",
    materials:
      "18K gold plating over brass. Multicolor crystal stones. Adjustable 40–45cm chain with lobster clasp.",
    care: "Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Clean with a soft, lint-free cloth.",
    rating: 4.9,
    reviews: 88,
    titleId: "prod-majestic-flora-nectar-title",
    descId: "prod-majestic-flora-nectar-desc",
    imgId: "prod-majestic-flora-nectar-img",
    cartImgId: "cart-majestic-flora-nectar-img",
    imgId2: "prod-majestic-flora-nectar-img2",
    bestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "Huggies",
    type: "Huggie Earrings",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    shortDesc:
      "Chunky gold dome huggie earrings with a smooth, sculpted finish.",
    description:
      "The Golden Sphere huggies reimagine a classic silhouette with a bold, chunky dome. Their snug huggie closure sits close to the lobe for all-day comfort, while the polished sphere adds a confident gleam that flatters every skin tone.",
    materials:
      "18K gold plating over brass. Smooth polished dome. Hinged huggie closure. Hypoallergenic.",
    care: "Wipe clean after each wear. Avoid water and chemicals. Store in a dry, separate pouch to prevent scratching.",
    rating: 4.7,
    reviews: 203,
    titleId: "prod-golden-sphere-huggies-title",
    descId: "prod-golden-sphere-huggies-desc",
    imgId: "prod-golden-sphere-huggies-img",
    cartImgId: "cart-golden-sphere-huggies-img",
    imgId2: "prod-golden-sphere-huggies-img2",
    bestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "Earrings",
    type: "Drop Earrings",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    shortDesc:
      "Textured gold filigree drop earrings with an intricate lace-like pattern.",
    description:
      "Amber Lace is a study in craftsmanship — each drop is rendered in textured gold filigree that mimics fine lace. Lightweight and quietly ornate, these earrings move gracefully and catch warm light with every detail.",
    materials:
      "18K gold plating over brass. Textured filigree detail. Lightweight drop construction. Hypoallergenic posts.",
    care: "Handle with care to preserve the filigree detail. Keep dry and store in the provided box. Clean gently with a soft cloth.",
    rating: 4.8,
    reviews: 64,
    titleId: "prod-amber-lace-earrings-title",
    descId: "prod-amber-lace-earrings-desc",
    imgId: "prod-amber-lace-earrings-img",
    cartImgId: "cart-amber-lace-earrings-img",
    imgId2: "prod-amber-lace-earrings-img2",
    bestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "Necklaces",
    type: "Earring + Necklace Set",
    material: "18K Gold Plated",
    toneOptions: ["Gold", "Silver"],
    shortDesc:
      "A gift-boxed earring and necklace set, designed to be treasured together.",
    description:
      "The Royal Heirloom Set pairs a refined pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated in proportion and finish, the set is a complete gifting moment — ready for anniversaries, milestones, or a well-earned self-purchase.",
    materials:
      "18K gold plating over brass. Coordinated pendant necklace and drop earrings. Signature gift box included. Hypoallergenic.",
    care: "Store each piece in the gift box compartments. Avoid moisture and perfumes. Polish gently with a soft cloth to maintain the gold finish.",
    rating: 5.0,
    reviews: 41,
    titleId: "prod-royal-heirloom-set-title",
    descId: "prod-royal-heirloom-set-desc",
    imgId: "prod-royal-heirloom-set-img",
    cartImgId: "cart-royal-heirloom-set-img",
    imgId2: "prod-royal-heirloom-set-img2",
    bestseller: true,
  },
]

export const categories = [
  {
    id: "earrings",
    name: "Earrings",
    desc: "Statement drops, cuffs and everyday studs.",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    bgId: "cat-earrings-bg",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants and chains for layering or solo wear.",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    bgId: "cat-necklaces-bg",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Sculpted dome huggies that hug the lobe.",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    bgId: "cat-huggies-bg",
  },
]

export const testimonials = [
  {
    id: "t1",
    name: "Elena R.",
    rating: 5,
    text: "The gold plating is unreal for the price. I wear my huggies every single day and they still look brand new.",
  },
  {
    id: "t2",
    name: "Maya L.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift and the box alone made it feel like a luxury experience. She adored it.",
  },
  {
    id: "t3",
    name: "Priya S.",
    rating: 5,
    text: "Quiet, elegant, and so comfortable I forget I'm wearing them. Velmora is now my go-to for demi-fine.",
  },
]

export const reels = [
  {
    id: "r1",
    caption: "Golden Sphere Huggies, styled for everyday.",
    titleId: "reel-r1-title",
    imgId: "reel-r1-img",
  },
  {
    id: "r2",
    caption: "Layering the Majestic Flora Nectar.",
    titleId: "reel-r2-title",
    imgId: "reel-r2-img",
  },
  {
    id: "r3",
    caption: "Amber Lace, caught in golden hour.",
    titleId: "reel-r3-title",
    imgId: "reel-r3-img",
  },
  {
    id: "r4",
    caption: "The Vivid Aura cuff, no piercing needed.",
    titleId: "reel-r4-title",
    imgId: "reel-r4-img",
  },
  {
    id: "r5",
    caption: "Royal Heirloom, unboxed.",
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
