// Seed product catalogue for Velmora Fine Jewelry.
// Each product has two image slots (primary + hover) driven by the
// strk-img stock system via text-reference queries.

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Sculptural gold forms for every lobe.',
    descId: 'cat-earrings-desc',
    titleId: 'cat-earrings-title',
    imgId: 'cat-earrings-bg',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Layered luminosity, close to the collarbone.',
    descId: 'cat-necklaces-desc',
    titleId: 'cat-necklaces-title',
    imgId: 'cat-necklaces-bg',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Chunky domes that hug the ear in gold.',
    descId: 'cat-huggies-desc',
    titleId: 'cat-huggies-title',
    imgId: 'cat-huggies-bg',
  },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 126,
    short: 'A sculptural gold ear cuff traced with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff wraps the cartilage in a clean arc of 18K gold-plated brass, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal. Wipe clean with the included microfibre cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
    imgId: 'p-vivid-aura-img',
    hoverImgId: 'p-vivid-aura-hover',
    galleryIds: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 204,
    short: 'A multicolor floral crystal necklace that blooms along the collarbone.',
    description:
      'Majestic Flora Nectar suspends a cascade of enamel-petaled blooms, each centred with a crystal in warm jewel tones. The fine gold chain sits at the collarbone and fastens with a secure lobster clasp, layering beautifully with finer chains.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with lobster clasp. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
    imgId: 'p-majestic-flora-img',
    hoverImgId: 'p-majestic-flora-hover',
    galleryIds: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 318,
    short: 'Chunky gold dome huggie earrings with a polished, sculptural finish.',
    description:
      'The Golden Sphere huggies are our most-worn everyday piece — a chunky polished dome that hugs the lobe in warm gold. The hinged click-top opens smoothly and locks securely for all-day, forget-you-are-wearing-them comfort.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged click-top closure. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
    imgId: 'p-golden-sphere-img',
    hoverImgId: 'p-golden-sphere-hover',
    galleryIds: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 97,
    short: 'Textured gold filigree drop earrings with an open, lace-like weave.',
    description:
      'Amber Lace is a study in negative space — a filigree drop of textured gold that reads as delicate from afar and architectural up close. Lightweight enough for all-day wear, with a fine lever-back that keeps them perfectly placed.',
    materials:
      '18K gold plating over brass. Textured filigree finish. Lever-back closure. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
    imgId: 'p-amber-lace-img',
    hoverImgId: 'p-amber-lace-hover',
    galleryIds: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 64,
    short: 'A gift-boxed earring and necklace set, made to be given and treasured.',
    description:
      'The Royal Heirloom set pairs a fine gold pendant necklace with matching drop earrings, presented in a keepsake Velmora gift box. Coordinated in tone and proportion, it is our most-loved gift — for others, or for yourself.',
    materials:
      '18K gold plating over brass. Hand-set cubic zirconia. Necklace 42cm with 5cm extender. Lever-back earrings. Hypoallergenic, nickel-free. Arrives in a signature gift box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 48 hours. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
    imgId: 'p-royal-heirloom-img',
    hoverImgId: 'p-royal-heirloom-hover',
    galleryIds: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3'],
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The Golden Sphere huggies have not left my ears in three months. They look far more expensive than they were.',
  },
  {
    id: 't2',
    name: 'Priya R.',
    rating: 5,
    text: 'Bought the Royal Heirloom set for my mother and she cried. The gift box alone feels like a treasure.',
  },
  {
    id: 't3',
    name: 'Hannah L.',
    rating: 5,
    text: 'I have sensitive skin and these are the first gold pieces that have never irritated me. Beautiful and wearable.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    titleId: 'reel-1-title',
    imgId: 'reel-1-img',
  },
  {
    id: 'r2',
    caption: 'The Flora Nectar, layered',
    titleId: 'reel-2-title',
    imgId: 'reel-2-img',
  },
  {
    id: 'r3',
    caption: 'Amber Lace, caught in motion',
    titleId: 'reel-3-title',
    imgId: 'reel-3-img',
  },
  {
    id: 'r4',
    caption: 'Vivid Aura on the cartilage',
    titleId: 'reel-4-title',
    imgId: 'reel-4-img',
  },
  {
    id: 'r5',
    caption: 'The Heirloom set, unboxed',
    titleId: 'reel-5-title',
    imgId: 'reel-5-img',
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
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
