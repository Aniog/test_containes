// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit text-reference IDs (titleId/descId) reused by
// the strk image system so image queries always match the rendered DOM ids.

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Sculpted gold, worn close to the skin.',
    descId: 'cat-earrings-desc',
    titleId: 'cat-earrings-title',
    imgId: 'cat-earrings-tile-a1b2',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Light-catching chains and pendants.',
    descId: 'cat-necklaces-desc',
    titleId: 'cat-necklaces-title',
    imgId: 'cat-necklaces-tile-c3d4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Chunky domes that hug the lobe.',
    descId: 'cat-huggies-desc',
    titleId: 'cat-huggies-title',
    imgId: 'cat-huggies-tile-e5f6',
  },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 126,
    short: 'A sculptural gold ear cuff set with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff wraps the cartilage in a clean arc of polished gold, anchored by a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.',
    materials:
      '18K gold plating over brass base. Hypoallergenic, nickel and lead free. Hand-set cubic zirconia crystal. Wipe clean with the included microfibre cloth and store dry.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgIdAlt: 'prod-vivid-aura-jewels-img-alt',
    gallery: [
      'prod-vivid-aura-jewels-g1',
      'prod-vivid-aura-jewels-g2',
      'prod-vivid-aura-jewels-g3',
    ],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 4.9,
    reviews: 204,
    short: 'A multicolor floral crystal necklace that blooms along the collarbone.',
    description:
      'Majestic Flora Nectar suspends a cascade of enamel-painted petals and multicolor crystals from a fine gold chain. Each bloom is set by hand, creating a necklace that reads as jewellery and as a small, wearable garden.',
    materials:
      '18K gold plating over brass. Hand-set cubic zirconia in amber, citrine and peridot tones. Lobster clasp with 3-point extender. Hypoallergenic, nickel free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgIdAlt: 'prod-majestic-flora-nectar-img-alt',
    gallery: [
      'prod-majestic-flora-nectar-g1',
      'prod-majestic-flora-nectar-g2',
      'prod-majestic-flora-nectar-g3',
    ],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 318,
    short: 'Chunky gold dome huggie earrings with a soft, sculpted shine.',
    description:
      'Golden Sphere Huggies are the everyday earring — a smooth, chunky dome that hugs the lobe and catches warm light. The hinged hoop opens and clicks shut securely for all-day wear.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged click closure. Hypoallergenic, nickel and lead free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgIdAlt: 'prod-golden-sphere-huggies-img-alt',
    gallery: [
      'prod-golden-sphere-huggies-g1',
      'prod-golden-sphere-huggies-g2',
      'prod-golden-sphere-huggies-g3',
    ],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 4.8,
    reviews: 97,
    short: 'Textured gold filigree drop earrings with an open, lace-like weave.',
    description:
      'Amber Lace turns filigree into something modern. The open weave catches light from every angle while staying whisper-light on the ear, dropping just past the jawline for an elongating line.',
    materials:
      '18K gold plating over brass. Hand-finished filigree texture. Lever-back closure. Hypoallergenic, nickel free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgIdAlt: 'prod-amber-lace-earrings-img-alt',
    gallery: [
      'prod-amber-lace-earrings-g1',
      'prod-amber-lace-earrings-g2',
      'prod-amber-lace-earrings-g3',
    ],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 5.0,
    reviews: 64,
    short: 'A gift-boxed earring and necklace set made to be passed on.',
    description:
      'The Royal Heirloom Set pairs a fine gold pendant necklace with matching drop earrings, presented in a keepsake gift box. Coordinated, considered and ready to give — the set that turns a moment into a memory.',
    materials:
      '18K gold plating over brass. Matching pendant necklace and drop earrings. Presented in a signature Velmora gift box. Hypoallergenic, nickel free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns for a full refund — no questions asked.',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgIdAlt: 'prod-royal-heirloom-set-img-alt',
    gallery: [
      'prod-royal-heirloom-set-g1',
      'prod-royal-heirloom-set-g2',
      'prod-royal-heirloom-set-g3',
    ],
    bestseller: true,
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    text: 'The Golden Sphere Huggies haven\u2019t left my ears in three months. They feel solid and look far more expensive than they were.',
    productId: 'golden-sphere-huggies',
  },
  {
    id: 't2',
    name: 'Amara K.',
    text: 'I bought the Royal Heirloom Set for my mother\u2019s birthday. The gift box alone made her cry. The pieces are genuinely beautiful.',
    productId: 'royal-heirloom-set',
  },
  {
    id: 't3',
    name: 'Priya R.',
    text: 'Amber Lace is the kind of earring that makes a plain outfit look intentional. Light, warm, and so well made.',
    productId: 'amber-lace-earrings',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-huggies-stack-7a',
    titleId: 'reel-huggies-stack-title',
    descId: 'reel-huggies-stack-desc',
  },
  {
    id: 'r2',
    caption: 'The Vivid Aura cuff, up close',
    imgId: 'reel-aura-cuff-7b',
    titleId: 'reel-aura-cuff-title',
    descId: 'reel-aura-cuff-desc',
  },
  {
    id: 'r3',
    caption: 'Flora Nectar on bare skin',
    imgId: 'reel-flora-nectar-7c',
    titleId: 'reel-flora-nectar-title',
    descId: 'reel-flora-nectar-desc',
  },
  {
    id: 'r4',
    caption: 'Amber Lace at dinner',
    imgId: 'reel-amber-lace-7d',
    titleId: 'reel-amber-lace-title',
    descId: 'reel-amber-lace-desc',
  },
  {
    id: 'r5',
    caption: 'The Heirloom set, unboxed',
    imgId: 'reel-heirloom-7e',
    titleId: 'reel-heirloom-title',
    descId: 'reel-heirloom-desc',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
