export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without a piercing, it catches candlelight and compliments alike.',
    materials: '18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and water. Wipe gently with a soft cloth after wear.',
    images: 4,
    tone: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate necklace threaded with multicolor floral crystals that feel plucked from a summer garden. Wear it as a single statement or layer with finer chains.',
    materials: '18k gold-plated chain, hand-set glass crystals. Adjustable 16–18 inch length.',
    care: 'Lay flat to store. Remove before showering or swimming. Polish with a microfiber cloth.',
    images: 4,
    tone: ['gold'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviewCount: 215,
    description: 'Chunky dome huggies with a polished mirror finish. Substantial enough to wear alone, small enough for everyday.',
    materials: '18k gold-plated brass, stainless steel post. Lightweight and hypoallergenic.',
    care: 'Keep away from moisture and chemicals. Store in original box to prevent scratches.',
    images: 4,
    tone: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 76,
    description: 'Textured filigree drops inspired by antique lace. The warm gold surface shimmers with every movement.',
    materials: '18k gold-plated brass, surgical steel posts. Weight: 4g per earring.',
    care: 'Avoid bending the delicate filigree. Store flat and clean with a soft dry cloth.',
    images: 4,
    tone: ['gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviewCount: 52,
    description: 'A ready-to-gift pairing of earrings and necklace, presented in a signature Velmora box. The perfect introduction to the collection.',
    materials: '18k gold-plated brass, cubic zirconia details. Includes gift box and care card.',
    care: 'Store in provided box. Remove before exercise, swimming, or applying fragrance.',
    images: 4,
    tone: ['gold'],
    bestseller: true,
  },
  // Additional collection products
  {
    id: 'luna-pearl-huggies',
    name: 'Luna Pearl Huggies',
    price: 46,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.6,
    reviewCount: 98,
    description: 'Petite huggies cradling a single freshwater pearl. Equal parts modern and timeless.',
    materials: '18k gold-plated brass, freshwater pearl, stainless steel post.',
    care: 'Pearls are sensitive to acids and perfume. Wipe with a damp cloth and store separately.',
    images: 4,
    tone: ['gold'],
    bestseller: false,
  },
  {
    id: 'soleil-chain-necklace',
    name: 'Soleil Chain Necklace',
    price: 58,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.8,
    reviewCount: 112,
    description: 'A fluid paperclip chain that catches the light at every link. Layer it or let it shine solo.',
    materials: '18k gold-plated brass, lobster clasp. 18 inch length.',
    care: 'Keep dry and store hanging to prevent tangling.',
    images: 4,
    tone: ['gold', 'silver'],
    bestseller: false,
  },
  {
    id: 'oracle-eye-earrings',
    name: 'Oracle Eye Earrings',
    price: 49,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.7,
    reviewCount: 64,
    description: 'Evil-eye motif reimagined in warm gold and deep cobalt crystal. A modern talisman.',
    materials: '18k gold-plated brass, enamel and crystal detail, surgical steel posts.',
    care: 'Avoid impact on enamel. Clean gently with a dry cloth.',
    images: 4,
    tone: ['gold'],
    bestseller: false,
  },
  {
    id: 'minimal-hoop-trio',
    name: 'Minimal Hoop Trio',
    price: 36,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.5,
    reviewCount: 143,
    description: 'Three graduated hoop sizes for endless stacking combinations. Your new everyday uniform.',
    materials: '18k gold-plated brass, stainless steel posts. Set of three pairs.',
    care: 'Store as separate pairs to avoid tangling. Keep dry.',
    images: 4,
    tone: ['gold', 'silver'],
    bestseller: false,
  },
]

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

export const MATERIALS = [
  { id: 'gold-plated', label: '18k Gold Plated' },
  { id: 'silver-plated', label: 'Silver Tone' },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Amelia K.',
    text: 'The quality is exceptional for the price. My huggies have become my everyday signature.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sofia M.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like opening a luxury gift to myself.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Jenna R.',
    text: 'I gifted the Royal Heirloom Set and she has not taken it off. Truly treasured.',
    rating: 5,
  },
]

export const UGC_POSTS = [
  { id: 'u1', caption: 'Morning light, golden hoops', handle: '@amelia.style' },
  { id: 'u2', caption: 'Layered and luminous', handle: '@sofia.wears' },
  { id: 'u3', caption: 'Self-gift Sundays', handle: '@jennarose' },
  { id: 'u4', caption: 'Wedding guest ready', handle: '@camille.d' },
  { id: 'u5', caption: 'Daily demi-fine', handle: '@leahloves' },
]

export function formatPrice(price) {
  return `$${price}`
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit)
}
