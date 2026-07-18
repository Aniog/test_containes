// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit text-reference IDs (titleId/descId) reused by
// the strk image system so image queries stay in sync with rendered DOM ids.

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', descId: 'cat-earrings-desc', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', descId: 'cat-necklaces-desc', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', descId: 'cat-huggies-desc', titleId: 'cat-huggies-title' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    materials: ['18K Gold Plated', 'Crystal Accent'],
    tones: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    short: 'A sculptural gold ear cuff crowned with a single crystal accent — effortless everyday radiance.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plating over a hypoallergenic brass core. A hand-set crystal catches the light with every turn of the head.',
    materialsCare:
      '18K gold plating over brass. Hypoallergenic, nickel and lead free. Avoid contact with water, perfume and lotion to preserve the finish. Store in the provided pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
    imgId: 'prod-vivid-aura-img',
    imgId2: 'prod-vivid-aura-img2',
    gallery: ['prod-vivid-aura-g1', 'prod-vivid-aura-g2', 'prod-vivid-aura-g3', 'prod-vivid-aura-g4'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    materials: ['18K Gold Plated', 'Multicolor Crystal'],
    tones: ['Gold'],
    rating: 4.9,
    reviews: 88,
    badge: 'New',
    short: 'A multicolor floral crystal necklace that blooms along the collarbone — a quiet statement piece.',
    description:
      'Majestic Flora Nectar suspends a cascade of floral crystals from a delicate gold-plated chain. Each petal is set by hand to refract warm, multicolor light against the skin.',
    materialsCare:
      '18K gold plating over brass with hand-set crystals. Hypoallergenic, nickel and lead free. Wipe gently with a soft cloth. Keep dry and store flat.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
    imgId: 'prod-majestic-flora-img',
    imgId2: 'prod-majestic-flora-img2',
    gallery: ['prod-majestic-flora-g1', 'prod-majestic-flora-g2', 'prod-majestic-flora-g3', 'prod-majestic-flora-g4'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    materials: ['18K Gold Plated'],
    tones: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 214,
    badge: 'Bestseller',
    short: 'Chunky gold dome huggie earrings with a polished, mirror-like finish for everyday wear.',
    description:
      'The Golden Sphere huggies pair a chunky dome silhouette with a secure hinged closure. Polished to a mirror shine, they sit close to the lobe for a refined, modern look.',
    materialsCare:
      '18K gold plating over brass. Hypoallergenic, nickel and lead free. Hinged closure. Wipe clean with a soft cloth and store in the pouch provided.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
    imgId: 'prod-golden-sphere-img',
    imgId2: 'prod-golden-sphere-img2',
    gallery: ['prod-golden-sphere-g1', 'prod-golden-sphere-g2', 'prod-golden-sphere-g3', 'prod-golden-sphere-g4'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    materials: ['18K Gold Plated', 'Textured Filigree'],
    tones: ['Gold'],
    rating: 4.8,
    reviews: 67,
    badge: null,
    short: 'Textured gold filigree drop earrings with an openwork lace pattern that moves with you.',
    description:
      'Amber Lace reimagines traditional filigree as a modern drop earring. The openwork gold pattern is featherlight, catching warm light through every cut-out.',
    materialsCare:
      '18K gold plating over brass with a textured filigree finish. Hypoallergenic, nickel and lead free. Handle with care to protect the openwork detail.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
    imgId: 'prod-amber-lace-img',
    imgId2: 'prod-amber-lace-img2',
    gallery: ['prod-amber-lace-g1', 'prod-amber-lace-g2', 'prod-amber-lace-g3', 'prod-amber-lace-g4'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    materials: ['18K Gold Plated', 'Crystal', 'Gift Boxed'],
    tones: ['Gold'],
    rating: 5.0,
    reviews: 41,
    badge: 'Gift Set',
    short: 'A gift-boxed earring and necklace set — coordinated heirloom elegance, ready to give.',
    description:
      'The Royal Heirloom Set unites a crystal-accented necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated, considered, and ready to treasure.',
    materialsCare:
      '18K gold plating over brass with hand-set crystals. Hypoallergenic, nickel and lead free. Arrives in a keepsake gift box. Store pieces separately to avoid scratching.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours in a signature gift box. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
    imgId: 'prod-royal-heirloom-img',
    imgId2: 'prod-royal-heirloom-img2',
    gallery: ['prod-royal-heirloom-g1', 'prod-royal-heirloom-g2', 'prod-royal-heirloom-g3', 'prod-royal-heirloom-g4'],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}

export function getBestsellers() {
  return PRODUCTS
}
