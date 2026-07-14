// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes at render time.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    description:
      'A sculptural gold ear cuff traced with a single crystal accent — no piercing required. Designed to curve along the cartilage for an effortless, second-skin fit.',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    tones: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-b2',
    gallery: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3', 'p-vivid-aura-g4'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    description:
      'A pendant of multicolor floral crystals set in warm gold, suspended from a delicate chain. A quiet statement piece that catches the light with every turn.',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 204,
    badge: 'Bestseller',
    tones: ['Gold'],
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-b2',
    gallery: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3', 'p-majestic-flora-g4'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    description:
      'Chunky gold dome huggies that hug the lobe with a soft, polished curve. Hypoallergenic and light enough for all-day wear.',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    badge: 'Bestseller',
    tones: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-b2',
    gallery: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3', 'p-golden-sphere-g4'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    description:
      'Textured gold filigree drops with a lace-like openwork pattern. An heirloom feel, reimagined for the everyday.',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 91,
    badge: 'New',
    tones: ['Gold'],
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-b2',
    gallery: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3', 'p-amber-lace-g4'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    description:
      'A coordinated earring and necklace set, presented in a signature Velmora gift box. The considered gift — ready to give, ready to treasure.',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 57,
    badge: 'Gift Set',
    tones: ['Gold'],
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-b2',
    gallery: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3', 'p-royal-heirloom-g4'],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops & statement studs',
    imgId: 'cat-earrings-7c',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layered sets',
    imgId: 'cat-necklaces-8d',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished dome huggies for the lobe',
    imgId: 'cat-huggies-9e',
  },
]

export const reels = [
  { id: 'r1', caption: 'Everyday gold, second-skin fit', imgId: 'reel-1-aa' },
  { id: 'r2', caption: 'Layered for the neckline', imgId: 'reel-2-bb' },
  { id: 'r3', caption: 'The huggie that hugs back', imgId: 'reel-3-cc' },
  { id: 'r4', caption: 'A gift, ready to treasure', imgId: 'reel-4-dd' },
  { id: 'r5', caption: 'Crystal, caught in the light', imgId: 'reel-5-ee' },
  { id: 'r6', caption: 'Filigree, reimagined', imgId: 'reel-6-ff' },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real. I get compliments every time I wear the Aura cuff.',
  },
  {
    id: 't2',
    name: 'Priya K.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift — the box alone is gorgeous. My sister nearly cried. Worth every cent.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Finally huggies that do not irritate my ears. Hypoallergenic and they actually stay put all day.',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0
      const bScore = b.category === current.category ? 1 : 0
      return bScore - aScore
    })
    .slice(0, limit)
}
