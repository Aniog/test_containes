// Seed product data for Velmora Fine Jewelry.

export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "Gold",
    rating: 4.8,
    reviewCount: 312,
    bestseller: true,
    short:
      "A whisper of crystal — an ear cuff designed to catch candlelight, not demand it.",
    description:
      "The Vivid Aura ear cuff is shaped to follow the natural curve of the ear, set with a single hand-cut crystal that catches light from every angle. Made for everyday wear and quiet statements.",
    materials:
      "18K gold-plated brass, hand-set crystal. Lead-free, nickel-free, hypoallergenic. Tarnish-resistant coating.",
    care:
      "Store in the included velvet pouch. Avoid contact with perfume, lotion, and chlorinated water. Polish gently with the included cloth to maintain the finish.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Most orders ship within 1–2 business days from our studio.",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "Gold",
    rating: 4.9,
    reviewCount: 184,
    bestseller: true,
    short:
      "A multicolor floral pendant — botanical, modern, made to layer with our huggies.",
    description:
      "Inspired by pressed wildflowers, the Majestic Flora pendant layers hand-set crystals in soft champagne, blush, and moss. Finished on a delicate 16–18\" adjustable chain.",
    materials:
      "18K gold-plated brass, multicolor crystals. Adjustable 16–18\" chain with lobster clasp.",
    care:
      "Remove before showering or sleeping. Wipe gently with a soft dry cloth; do not use chemical cleaners.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "Gold",
    rating: 4.7,
    reviewCount: 421,
    bestseller: true,
    short:
      "Chunky gold dome huggies — the everyday pair you'll reach for, then reach for again.",
    description:
      "A modern take on a classic. Substantial without weight, our Golden Sphere huggies sit close to the lobe with a smooth, polished dome finish. Hinged for easy on, easy off.",
    materials:
      "18K gold-plated brass with a high-polish finish. Hypoallergenic, lead-free, nickel-free.",
    care:
      "Store flat in the included pouch. Wipe with a soft dry cloth. Avoid contact with perfume and lotions.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "Gold",
    rating: 4.8,
    reviewCount: 96,
    bestseller: true,
    short:
      "Textured filigree drop earrings — vintage-inspired, made for slow afternoons.",
    description:
      "Sculpted by hand in our studio, the Amber Lace drop earring draws from antique lacework patterns. Lightweight, fluid, finished in warm 18K gold.",
    materials:
      "18K gold-plated brass, hand-finished filigree. Lightweight post-and-butterfly back.",
    care:
      "Remove before sleeping, showering, or swimming. Polish with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    tone: "Gold",
    rating: 5.0,
    reviewCount: 58,
    bestseller: true,
    short:
      "A gift-boxed earring and necklace set — for the people you'd hand-pick a present for.",
    description:
      "Our most-loved earring and necklace, presented together in a keepsake gift box. The Royal Heirloom Set is the quietest way to say: I thought of you.",
    materials:
      "18K gold-plated brass, hand-set crystals. Arrives in a magnetic-close gift box with care card.",
    care:
      "Store in the gift box between wears. Avoid contact with perfume, lotion, and water.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, no questions asked.",
  },
]

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const materials = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "crystal", label: "Crystal" },
]

export function findProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function relatedProducts(product, limit = 4) {
  if (!product) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (a.category === product.category) - (b.category === product.category)
      if (sameCat !== 0) return -sameCat
      return Math.abs(a.price - product.price) - Math.abs(b.price - product.price)
    })
    .slice(0, limit)
}
