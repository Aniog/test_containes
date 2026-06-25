// Central product catalog for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes.

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'earring',
    price: 42,
    rating: 4.8,
    reviews: 126,
    short: 'Gold ear cuff with a single crystal accent — effortless, no piercing required.',
    description:
      'A sculptural gold ear cuff that traces the curve of the ear, finished with a hand-set crystal that catches the light. Designed to be worn alone or stacked. No piercing required.',
    materials:
      '18K gold plating over brass base. Hypoallergenic, nickel and lead free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    short: 'Multicolor floral crystal necklace — a garden of light at the collarbone.',
    description:
      'Delicate floral motifs bloom along a fine gold chain, each petal set with multicolor crystals. Adjustable length for layering or wearing alone as a statement of quiet brilliance.',
    materials:
      '18K gold plating over brass. Hand-set multicolor cubic zirconia. Spring-ring clasp, 40–45cm adjustable.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box. Clean with a soft, dry cloth.',
    variants: ['Gold'],
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 318,
    short: 'Chunky gold dome huggie earrings — everyday polish in a single hoop.',
    description:
      'Substantial yet comfortable, these dome huggies sit close to the lobe with a secure hinged closure. The everyday gold earring you will reach for again and again.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel free. Hinged snap closure.',
    care: 'Remove before showering or sleeping. Wipe clean with a soft cloth. Store in a dry place.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 89,
    short: 'Textured gold filigree drop earrings — heirloom craft, modern line.',
    description:
      'Intricate filigree work forms a lace-like drop that moves with you. A nod to vintage craftsmanship, refined for the modern wearer.',
    materials:
      '18K gold plating over brass. Lightweight filigree construction. Hypoallergenic post.',
    care: 'Handle with care to preserve the filigree detail. Keep dry and store separately to avoid tangling.',
    variants: ['Gold'],
    tags: ['bestseller'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    short: 'Gift-boxed earring and necklace set — ready to give, made to last.',
    description:
      'A coordinated pair of earrings and a matching necklace, presented in a signature Velmora gift box. The effortless gift for milestones, anniversaries, and self-celebration.',
    materials:
      '18K gold plating over brass. Hand-set crystals. Includes earrings and necklace. Gift box included.',
    care: 'Store each piece in the gift box. Avoid moisture and cosmetics. Clean gently with a soft cloth.',
    variants: ['Gold'],
    tags: ['bestseller'],
  },
]

export const CATEGORIES = [
  { id: 'Earrings', label: 'Earrings', desc: 'Studs, drops and cuffs in warm gold.' },
  { id: 'Necklaces', label: 'Necklaces', desc: 'Fine chains and statement collars.' },
  { id: 'Huggies', label: 'Huggies', desc: 'Close-fit hoops for every day.' },
]

export const REELS = [
  { id: 'r1', caption: 'Golden Sphere Huggies, every day.' },
  { id: 'r2', caption: 'Layered necklaces, soft light.' },
  { id: 'r3', caption: 'The ear cuff that needs no piercing.' },
  { id: 'r4', caption: 'Filigree that moves with you.' },
  { id: 'r5', caption: 'A gift, unboxed.' },
]

export const TESTIMONIALS = [
  { name: 'Elena R.', text: 'The gold is so warm and the weight feels real. I have not taken the huggies off in weeks.' },
  { name: 'Sofia M.', text: 'Beautifully packaged and even prettier in person. The floral necklace is my new signature piece.' },
  { name: 'Priya K.', text: 'Bought the heirloom set as a gift and it looked far more expensive than it was. Stunning.' },
]

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)
export const getRelated = (id, n = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, n)
