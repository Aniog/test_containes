// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: ['Gold', 'Silver'],
    short: 'Gold ear cuff with a single crystal accent — effortless everyday edge.',
    description:
      'The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light with every turn. No piercing required — it simply hugs the cartilage for a quiet, modern statement.',
    materials:
      '18K gold plated brass. Hypoallergenic, nickel and lead free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviews: 204,
    tone: ['Gold'],
    short: 'Multicolor floral crystal necklace — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar suspends a delicate floral cluster of multicolor crystals from a fine gold chain. Each petal is set by hand, creating a piece that feels both heirloom and contemporary.',
    materials:
      '18K gold plated brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with extender.',
    care: 'Keep dry and away from perfumes. Store flat in the gift box. Clean with a soft, dry cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: ['Gold', 'Silver'],
    short: 'Chunky gold dome huggie earrings — the everyday gold staple.',
    description:
      'Golden Sphere Huggies are polished to a soft dome that sits close to the lobe. Substantial enough to feel luxe, light enough to forget you are wearing them. The pair you reach for every morning.',
    materials:
      '18K gold plated brass. Hypoallergenic post. Nickel and lead free. 12mm dome.',
    care: 'Avoid water and chemicals. Wipe clean with a soft cloth. Store in the pouch provided.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    tone: ['Gold'],
    short: 'Textured gold filigree drop earrings — lacework in metal.',
    description:
      'Amber Lace is a study in restraint: open filigree drops in warm gold that move with you. The texture catches low light beautifully, making them the quiet centerpiece of an evening look.',
    materials:
      '18K gold plated brass. Hand-finished filigree. Hypoallergenic post. 38mm drop.',
    care: 'Handle with care — filigree is delicate. Keep dry. Store in the gift box to prevent tangling.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: ['Gold'],
    short: 'Gift-boxed earring + necklace set — ready to give, ready to treasure.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated, considered, and made for gifting — or for keeping.',
    materials:
      '18K gold plated brass. Cubic zirconia crystals. Hypoallergenic. Includes gift box.',
    care: 'Store each piece separately in the gift box. Avoid water and perfume. Polish with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    bestseller: true,
    badge: 'Gift Set',
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}

export function getBestsellers() {
  return PRODUCTS.filter((p) => p.bestseller)
}
