// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable ids used for strk-img text references.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'earring',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: ['Gold', 'Silver'],
    badge: 'Bestseller',
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless edge, no piercing required.',
    description:
      'The Vivid Aura ear cuff is our most-loved everyday statement. Hand-finished in 18K gold plating over sterling silver, it traces the curve of the ear with a single hand-set crystal that catches the light. No piercing needed — simply slide it on and go.',
    materials:
      '18K gold plated sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    imgId: 'prod-vivid-aura-a1b2',
    imgIdAlt: 'prod-vivid-aura-alt-c3d4',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 89,
    tone: ['Gold'],
    badge: 'New',
    shortDesc:
      'A multicolor floral crystal necklace that blooms along the collarbone — a quiet garden of light.',
    description:
      'Majestic Flora Nectar is a delicate pendant necklace where tiny crystals form an open blossom. Each stone is set by hand in a warm gold frame, resting on a fine adjustable chain. A piece designed to be layered or worn alone.',
    materials:
      '18K gold plated brass. Multicolor cubic zirconia. Adjustable chain 40–45cm. Lobster clasp.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the stones.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    imgId: 'prod-majestic-flora-e5f6',
    imgIdAlt: 'prod-majestic-flora-alt-g7h8',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 214,
    tone: ['Gold', 'Silver'],
    badge: 'Bestseller',
    shortDesc:
      'Chunky gold dome huggie earrings with a soft, sculpted curve that hugs the lobe.',
    description:
      'Golden Sphere Huggies are the everyday essential reimagined. A smooth, chunky dome in warm gold sits flush against the lobe for a polished, modern look. Lightweight and comfortable enough to never take off.',
    materials:
      '18K gold plated sterling silver. Hinged huggie closure. Nickel-free, hypoallergenic. Sold as a pair.',
    care: 'Wipe clean with a soft cloth after wear. Avoid water and chemicals to preserve the plating.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    imgId: 'prod-golden-sphere-i9j0',
    imgIdAlt: 'prod-golden-sphere-alt-k1l2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 67,
    tone: ['Gold'],
    badge: null,
    shortDesc:
      'Textured gold filigree drop earrings — intricate lacework rendered in warm metal.',
    description:
      'Amber Lace turns traditional filigree into something modern. Each drop is a lattice of textured gold that moves softly with you, catching warm light from every angle. An heirloom feel, made for everyday.',
    materials:
      '18K gold plated brass. Textured filigree drop. Gold-fill leverback hooks. Hypoallergenic.',
    care: 'Handle with care to protect the filigree. Store in the provided pouch. Clean with a soft dry cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    imgId: 'prod-amber-lace-m3n4',
    imgIdAlt: 'prod-amber-lace-alt-o5p6',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 42,
    tone: ['Gold'],
    badge: 'Gift Set',
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated elegance, ready to give.',
    description:
      'The Royal Heirloom Set pairs a pair of crystal-studded gold studs with a matching pendant necklace, presented in a signature Velmora gift box. Coordinated, considered, and ready to mark any occasion.',
    materials:
      '18K gold plated sterling silver. Cubic zirconia. Includes earrings, necklace (adjustable 40–45cm) and gift box.',
    care: 'Store each piece separately in the gift box. Avoid water, perfume and cosmetics.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns — no questions asked.',
    imgId: 'prod-royal-heirloom-q7r8',
    imgIdAlt: 'prod-royal-heirloom-alt-s9t0',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    type: 'earring',
    desc: 'Studs, drops and cuffs in warm gold.',
    imgId: 'cat-earrings-u1v2',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    type: 'necklace',
    desc: 'Delicate chains and pendant pieces.',
    imgId: 'cat-necklaces-w3x4',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    type: 'huggie',
    desc: 'Sculpted hoops that hug the lobe.',
    imgId: 'cat-huggies-y5z6',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena M.',
    rating: 5,
    text: 'The gold is so warm and the pieces feel substantial — not flimsy at all. I get compliments every time I wear the Vivid Aura cuff.',
  },
  {
    id: 't2',
    name: 'Priya S.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My sister cried. Quality is genuinely lovely for the price.',
  },
  {
    id: 't3',
    name: 'Camille R.',
    rating: 5,
    text: 'I never take the Golden Sphere huggies off — even in the shower. Months later they still look brand new. Obsessed.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Everyday gold, layered.',
    imgId: 'reel-1-a7b8',
    titleId: 'reel-1-title',
  },
  {
    id: 'r2',
    caption: 'The ear cuff that stays put.',
    imgId: 'reel-2-c9d0',
    titleId: 'reel-2-title',
  },
  {
    id: 'r3',
    caption: 'A bloom at the collarbone.',
    imgId: 'reel-3-e1f2',
    titleId: 'reel-3-title',
  },
  {
    id: 'r4',
    caption: 'Huggies that never come off.',
    imgId: 'reel-4-g3h4',
    titleId: 'reel-4-title',
  },
  {
    id: 'r5',
    caption: 'Filigree, reimagined.',
    imgId: 'reel-5-i5j6',
    titleId: 'reel-5-title',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.type === current.type ? -1 : 0
      const bMatch = b.type === current.type ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
