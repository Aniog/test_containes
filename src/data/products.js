// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'earring',
    shortDesc: 'Gold ear cuff with a single crystal accent — effortless, no piercing required.',
    description:
      'A sculptural gold ear cuff that traces the curve of the ear, finished with a hand-set crystal that catches the light. Designed to be worn alone or stacked, no piercing required.',
    materials: '18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, hypoallergenic.',
    rating: 4.8,
    reviews: 126,
    bestseller: true,
    variants: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-b2',
    imgId3: 'p-vivid-aura-c3',
    imgId4: 'p-vivid-aura-d4',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'necklace',
    shortDesc: 'Multicolor floral crystal necklace — a garden of light at the collarbone.',
    description:
      'A delicate chain suspends a cluster of floral motifs, each petal set with multicolor crystals. A statement of soft brilliance that elevates both day and evening looks.',
    materials: '18K gold plating over brass. Multicolor cubic zirconia. Adjustable 40–45cm chain. Lobster clasp.',
    rating: 4.9,
    reviews: 89,
    bestseller: true,
    variants: ['Gold'],
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-b2',
    imgId3: 'p-majestic-flora-c3',
    imgId4: 'p-majestic-flora-d4',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    shortDesc: 'Chunky gold dome huggie earrings — everyday polish with quiet presence.',
    description:
      'A pair of chunky dome huggies in warm gold, designed to hug the lobe closely. Substantial enough to feel intentional, refined enough for every day.',
    materials: '18K gold plating over brass. Hinged snap closure. Sold as a pair. Hypoallergenic.',
    rating: 4.7,
    reviews: 203,
    bestseller: true,
    variants: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-b2',
    imgId3: 'p-golden-sphere-c3',
    imgId4: 'p-golden-sphere-d4',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'earring',
    shortDesc: 'Textured gold filigree drop earrings — heirloom craft, modern line.',
    description:
      'Intricate gold filigree is shaped into a flowing drop, catching warm light with every movement. A nod to heirloom craft, rendered in a clean modern silhouette.',
    materials: '18K gold plating over brass. Textured filigree. Gold-fill ear posts. Hypoallergenic.',
    rating: 4.8,
    reviews: 64,
    bestseller: true,
    variants: ['Gold'],
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-b2',
    imgId3: 'p-amber-lace-c3',
    imgId4: 'p-amber-lace-d4',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    type: 'set',
    shortDesc: 'Gift-boxed earring + necklace set — a complete gesture, ready to give.',
    description:
      'A coordinated set of earrings and necklace in matching gold, presented in a signature Velmora gift box. The effortless choice for gifting — or for treating yourself.',
    materials: '18K gold plating over brass. Cubic zirconia accents. Includes gift box. Hypoallergenic.',
    rating: 5.0,
    reviews: 41,
    bestseller: true,
    variants: ['Gold', 'Silver'],
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-b2',
    imgId3: 'p-royal-heirloom-c3',
    imgId4: 'p-royal-heirloom-d4',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  { name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-x1' },
  { name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-x2' },
  { name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-x3' },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real. I get compliments every time I wear the huggies.',
  },
  {
    name: 'Priya K.',
    rating: 5,
    text: 'Bought the Flora necklace as a gift and it arrived in the most beautiful box. Felt truly special.',
  },
  {
    name: 'Elena R.',
    rating: 5,
    text: 'Finally demi-fine jewelry that does not irritate my skin. The quality is far beyond the price.',
  },
]

export const reels = [
  { id: 'r1', caption: 'Golden Sphere Huggies, every day', imgId: 'reel-r1-a9' },
  { id: 'r2', caption: 'Stacked ear story', imgId: 'reel-r2-b8' },
  { id: 'r3', caption: 'Flora at the collarbone', imgId: 'reel-r3-c7' },
  { id: 'r4', caption: 'Filigree in motion', imgId: 'reel-r4-d6' },
  { id: 'r5', caption: 'The gift set, unboxed', imgId: 'reel-r5-e5' },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const getRelated = (slug, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit)
