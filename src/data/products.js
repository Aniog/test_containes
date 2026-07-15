// Seed product data for Velmora Fine Jewelry.
// Each product carries explicit titleId/descId so image queries can reference
// the exact rendered DOM ids.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Gold ear cuff with crystal accent',
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the curve of the ear with quiet confidence — no piercing required.',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgId2: 'prod-vivid-aura-jewels-img2',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    description:
      'A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A wearable garden that catches the light with every movement.',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 84,
    tones: ['Gold'],
    badge: 'New',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgId2: 'prod-majestic-flora-nectar-img2',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggie earrings',
    description:
      'Chunky dome huggies with a polished gold finish that hugs the lobe closely. Everyday statement earrings with a satisfying weight.',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgId2: 'prod-golden-sphere-huggies-img2',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drop earrings',
    description:
      'Intricate filigree drops in warm textured gold. Inspired by antique lacework, these earrings bring old-world craft to a modern silhouette.',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 57,
    tones: ['Gold'],
    badge: null,
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgId2: 'prod-amber-lace-earrings-img2',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring + necklace set',
    description:
      'A coordinated earring and necklace set, presented in a signature Velmora gift box. The perfect ready-to-gift pairing for someone treasured.',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 41,
    tones: ['Gold', 'Silver'],
    badge: 'Gift Set',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgId2: 'prod-royal-heirloom-set-img2',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Studs, drops & cuffs',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-bg',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Chains, pendants & layers',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-bg',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    blurb: 'Close-set everyday hoops',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-bg',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, styled for everyday.',
    titleId: 'reel-1-title',
    imgId: 'reel-1-img',
  },
  {
    id: 'reel-2',
    caption: 'Layered gold, soft light.',
    titleId: 'reel-2-title',
    imgId: 'reel-2-img',
  },
  {
    id: 'reel-3',
    caption: 'The Vivid Aura cuff on the curve of the ear.',
    titleId: 'reel-3-title',
    imgId: 'reel-3-img',
  },
  {
    id: 'reel-4',
    caption: 'Flora Nectar, caught in afternoon sun.',
    titleId: 'reel-4-title',
    imgId: 'reel-4-img',
  },
  {
    id: 'reel-5',
    caption: 'Amber Lace, a quiet statement.',
    titleId: 'reel-5-title',
    imgId: 'reel-5-img',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The quality is unreal for the price. My huggies haven’t tarnished after months of daily wear.',
  },
  {
    id: 't2',
    name: 'Priya K.',
    rating: 5,
    text: 'Gifted the Heirloom Set to my sister and she cried. The box alone feels like a treasure.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet, elegant, and so comfortable I forget I’m wearing them. This is my new go-to brand.',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
