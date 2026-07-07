// Seed product catalog. Image text references are crafted for the
// `data-strk-img` system — the search query is built from neighboring
// `id`-tagged text so that the stock image service returns editorial
// gold-jewelry photography.

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
]

export const MATERIALS = [
  { id: '18k-gold', name: '18K Gold Plated' },
  { id: 'sterling-silver', name: 'Sterling Silver' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    subcategory: 'Ear Cuff',
    price: 42,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Bestseller',
    shortDescription:
      'A whisper of crystal suspended on warm 18K gold — the ear cuff you forget you are wearing.',
    description:
      'Designed in our New York studio, the Vivid Aura Jewels ear cuff is a single, fluid curve of 18K gold-plated brass set with a hand-set crystal that catches light at every turn. It is hypoallergenic, lead-free, and crafted without compromise so the only thing you feel is weightless confidence.',
    materials:
      '18K gold-plated brass, hand-set Czech crystal, hypoallergenic post. Free of nickel, lead and cadmium.',
    care:
      'Store dry in the velvet pouch provided. Avoid contact with perfume, lotion and water. Buff gently with the included polishing cloth to maintain its warm luster.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Each piece arrives in a recyclable linen gift box.',
    images: [
      {
        id: 'vivid-aura-main',
        queryParts: ['vivid-aura-name', 'vivid-aura-desc'],
        alt: 'Vivid Aura Jewels — gold ear cuff with crystal accent',
      },
      {
        id: 'vivid-aura-alt',
        queryParts: ['vivid-aura-name', 'vivid-aura-cat', 'vivid-aura-desc'],
        alt: 'Crystal detail on the Vivid Aura ear cuff',
      },
    ],
    variants: [
      { id: 'gold', name: 'Gold', hex: '#B8915A' },
      { id: 'silver', name: 'Silver', hex: '#D9D2C4' },
    ],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    subcategory: 'Pendant',
    price: 68,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 94,
    badge: 'New',
    shortDescription:
      'A garden in full bloom, pressed into a single hand-set pendant. A piece you reach for daily.',
    description:
      'The Majestic Flora Nectar pendant is a study in restraint: a hand-arranged cluster of multicolored crystals on a delicate 18K gold-plated chain. It catches the eye without demanding it, the way good jewelry should. Adjustable 16–18 inch length, with a 2-inch extender for layering.',
    materials:
      '18K gold-plated brass, multicolored Czech crystals, hypoallergenic clasp. Lead-free and nickel-free.',
    care:
      'Remove before showering or sleeping. Wipe gently with a soft, dry cloth after wear. Keep in the original pouch to prevent tangling.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Ships in 1–2 business days.',
    images: [
      {
        id: 'majestic-flora-main',
        queryParts: ['majestic-flora-name', 'majestic-flora-desc'],
        alt: 'Majestic Flora Nectar — multicolor floral crystal necklace',
      },
      {
        id: 'majestic-flora-alt',
        queryParts: ['majestic-flora-name', 'majestic-flora-cat', 'majestic-flora-desc'],
        alt: 'Layered styling of the Majestic Flora Nectar pendant',
      },
    ],
    variants: [
      { id: 'gold', name: 'Gold', hex: '#B8915A' },
      { id: 'silver', name: 'Silver', hex: '#D9D2C4' },
    ],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    subcategory: 'Huggies',
    price: 38,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Bestseller',
    shortDescription:
      'A small sphere of warm light, snug against the ear. Quietly the most worn piece in our studio.',
    description:
      'Inspired by a 1970s archive piece, the Golden Sphere Huggies are a chunky, full-volume huggie in 18K gold-plated brass. The dome catches light from every angle, the hinge closes with a satisfying click, and the post is built for all-day wear. Sold as a pair.',
    materials:
      '18K gold-plated brass, hypoallergenic hinge, secure click closure. Lead-free, nickel-free, cadmium-free.',
    care:
      'Store flat in the velvet pouch. Avoid contact with water, perfume and lotion. Polish gently with the included cloth.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns, no questions asked.',
    images: [
      {
        id: 'golden-sphere-main',
        queryParts: ['golden-sphere-name', 'golden-sphere-desc'],
        alt: 'Golden Sphere Huggies — chunky gold dome huggie earrings',
      },
      {
        id: 'golden-sphere-alt',
        queryParts: ['golden-sphere-name', 'golden-sphere-cat', 'golden-sphere-desc'],
        alt: 'Worn detail of the Golden Sphere Huggies',
      },
    ],
    variants: [
      { id: 'gold', name: 'Gold', hex: '#B8915A' },
      { id: 'silver', name: 'Silver', hex: '#D9D2C4' },
    ],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    subcategory: 'Drop Earrings',
    price: 54,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 67,
    badge: null,
    shortDescription:
      'Filigree work drawn from an heirloom piece, reinterpreted for the everyday. A quiet statement.',
    description:
      'The Amber Lace drop earrings are a study in texture: a hand-finished filigree pattern in warm 18K gold-plated brass, suspended on a delicate lever-back closure. They move with you, catching light in the way only finely worked metal can.',
    materials:
      '18K gold-plated brass, hypoallergenic lever-back post. Lead-free, nickel-free, cadmium-free.',
    care:
      'Remove before showering or sleeping. Avoid contact with perfume and lotion. Polish gently with the included cloth and store flat.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns, no questions asked.',
    images: [
      {
        id: 'amber-lace-main',
        queryParts: ['amber-lace-name', 'amber-lace-desc'],
        alt: 'Amber Lace Earrings — textured gold filigree drop earrings',
      },
      {
        id: 'amber-lace-alt',
        queryParts: ['amber-lace-name', 'amber-lace-cat', 'amber-lace-desc'],
        alt: 'Filigree detail of the Amber Lace Earrings',
      },
    ],
    variants: [
      { id: 'gold', name: 'Gold', hex: '#B8915A' },
      { id: 'silver', name: 'Silver', hex: '#D9D2C4' },
    ],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    subcategory: 'Earring + Necklace',
    price: 95,
    originalPrice: 122,
    rating: 5.0,
    reviewCount: 41,
    badge: 'Gift Edit',
    shortDescription:
      'A matching earring and necklace set, gift-boxed in linen. The present you wish someone had given you.',
    description:
      'The Royal Heirloom Set is our love letter to the ritual of gifting: a hand-finished pendant and matching drop earrings, presented together in a recyclable linen box tied with a silk ribbon. The set saves 22% versus buying each piece separately — and ships ready to gift.',
    materials:
      '18K gold-plated brass, hypoallergenic posts and clasp. Lead-free, nickel-free, cadmium-free. Includes linen gift box and care card.',
    care:
      'Remove before showering, sleeping or swimming. Polish gently with the included cloth. Store in the original box to prevent tarnish.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns, no questions asked. Ships in 1–2 business days with optional gift note.',
    images: [
      {
        id: 'royal-heirloom-main',
        queryParts: ['royal-heirloom-name', 'royal-heirloom-desc'],
        alt: 'Royal Heirloom Set — gift-boxed earring and necklace set',
      },
      {
        id: 'royal-heirloom-alt',
        queryParts: ['royal-heirloom-name', 'royal-heirloom-cat', 'royal-heirloom-desc'],
        alt: 'Royal Heirloom Set displayed in its linen gift box',
      },
    ],
    variants: [
      { id: 'gold', name: 'Gold', hex: '#B8915A' },
    ],
    inStock: true,
  },
]

// Helpers ---------------------------------------------------------------
export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const product = getProductById(id)
  if (!product) return PRODUCTS.slice(0, limit)
  return PRODUCTS.filter((p) => p.id !== id).slice(0, limit)
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.badge === 'Bestseller' || p.badge === 'New')
    .concat(PRODUCTS)
    .filter((p, idx, arr) => arr.findIndex((q) => q.id === p.id) === idx)
    .slice(0, limit)
}
