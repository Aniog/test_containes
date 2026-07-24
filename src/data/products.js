// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable image IDs and text-reference IDs used by the
// strk stock-image system (data-strk-img / data-strk-bg).

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', descId: 'cat-earrings-desc', titleId: 'cat-earrings-title', desc: 'Statement and everyday gold earrings' },
  { id: 'necklaces', name: 'Necklaces', descId: 'cat-necklaces-desc', titleId: 'cat-necklaces-title', desc: 'Layered chains and crystal pendants' },
  { id: 'huggies', name: 'Huggies', descId: 'cat-huggies-desc', titleId: 'cat-huggies-title', desc: 'Chunky dome huggies and hoops' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    shortDesc: 'Gold ear cuff with a single crystal accent — no piercing required, effortless edge.',
    description:
      'The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light with every turn. Designed to hug the cartilage without a piercing, it is the quiet statement piece for the modern collector.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal. Wipe clean with the included microfibre cloth and store in the Velmora pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked. Lifetime guarantee against plating defects.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-vivid-aura-7f2a',
    imgId2: 'prod-vivid-aura-2-7f2a',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 203,
    shortDesc: 'Multicolor floral crystal necklace — a garden of light resting at the collarbone.',
    description:
      'Majestic Flora Nectar is a delicate gold chain suspending a multicolor floral cluster of crystals. Each petal is set by hand to refract warm and cool light, making it the centrepiece of any layered neckline.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia. Adjustable 40–45cm chain with extender. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns. Lifetime guarantee against plating defects.',
    tones: ['Gold'],
    badge: 'New',
    imgId: 'prod-majestic-flora-3c91',
    imgId2: 'prod-majestic-flora-2-3c91',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    shortDesc: 'Chunky gold dome huggie earrings — bold presence, comfortable everyday wear.',
    description:
      'The Golden Sphere huggies reimagine the classic hoop as a chunky polished dome. Lightweight despite their presence, they sit flush against the lobe for an everyday-luxe finish that transitions from desk to dinner.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged snap closure. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns. Lifetime guarantee against plating defects.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-golden-sphere-9b4d',
    imgId2: 'prod-golden-sphere-2-9b4d',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 87,
    shortDesc: 'Textured gold filigree drop earrings — heirloom craft with a modern silhouette.',
    description:
      'Amber Lace is a study in texture: open filigree drops in warm gold that move with a whisper. The intricate lattice catches light from every angle, evoking antique lace reimagined for the contemporary wardrobe.',
    materials:
      '18K gold plating over brass. Textured filigree. Lever-back closure. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns. Lifetime guarantee against plating defects.',
    tones: ['Gold'],
    badge: null,
    imgId: 'prod-amber-lace-2e8f',
    imgId2: 'prod-amber-lace-2-2e8f',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    shortDesc: 'Gift-boxed earring and necklace set — the complete coordinated statement.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated, considered, and ready to gift — the effortless route to a complete look.',
    materials:
      '18K gold plating over brass. Hand-set cubic zirconia. Includes necklace and earrings. Hypoallergenic, nickel-free. Gift-boxed.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns. Lifetime guarantee against plating defects.',
    tones: ['Gold', 'Silver'],
    badge: 'Gift Set',
    imgId: 'prod-royal-heirloom-5d1c',
    imgId2: 'prod-royal-heirloom-2-5d1c',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const TESTIMONIALS = [
  { name: 'Elena R.', rating: 5, text: 'The gold is so warm and the weight feels real. I have worn the huggies every single day since they arrived.' },
  { name: 'Maya T.', rating: 5, text: 'Gifting the Royal Heirloom Set felt luxurious — the box alone made my mother gasp. Stunning quality for the price.' },
  { name: 'Priya S.', rating: 5, text: 'I was nervous about demi-fine but the plating has held up perfectly through showers and sleep. Quietly perfect.' },
]

export const REELS = [
  { id: 'reel-1', caption: 'Golden Sphere Huggies on the lobe', imgId: 'reel-huggies-1a2b', titleId: 'reel-1-title' },
  { id: 'reel-2', caption: 'Majestic Flora layered at the collarbone', imgId: 'reel-flora-3c4d', titleId: 'reel-2-title' },
  { id: 'reel-3', caption: 'Vivid Aura ear cuff, no piercing', imgId: 'reel-aura-5e6f', titleId: 'reel-3-title' },
  { id: 'reel-4', caption: 'Amber Lace drops in motion', imgId: 'reel-lace-7g8h', titleId: 'reel-4-title' },
  { id: 'reel-5', caption: 'Royal Heirloom, the full set', imgId: 'reel-heirloom-9i0j', titleId: 'reel-5-title' },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}
