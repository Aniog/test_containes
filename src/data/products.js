export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 214,
    colors: ['#c9a05c', '#e8d3a8'],
    materials: '18K gold plated brass, AAA cubic zirconia',
    short:
      'A sculptural gold ear cuff crowned with a single brilliant crystal — no piercing required, endless light.',
    description:
      'Vivid Aura Jewels wraps the ear in a smooth arc of 18K gold, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone as a quiet statement or stacked with your favourite huggies.',
    details: [
      '18K gold plated over recycled brass',
      'Hand-set AAA cubic zirconia accent',
      'Adjustable cuff fit — no piercing needed',
      'Hypoallergenic, nickel-free, tarnish resistant',
    ],
    images: [
      { id: 'p-vivid-aura-a1', query: 'close-up macro of a gold ear cuff with crystal accent on dark background, luxury jewelry product photography, warm light' },
      { id: 'p-vivid-aura-b2', query: 'elegant woman wearing a gold ear cuff earring, close-up of ear, warm editorial lighting, dark background' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    badge: 'New',
    rating: 4.8,
    reviews: 96,
    colors: ['#b7c39a', '#c98f5c'],
    materials: '18K gold plated brass, multicolor crystal petals',
    short:
      'A garden in bloom — multicolor crystal blossoms gathered on a fine gold chain.',
    description:
      'Majestic Flora Nectar gathers hand-set crystal petals in soft nectar tones along a delicate 18K gold chain. Each blossom is individually polished, creating a piece that moves and shimmers like flowers in late-afternoon sun.',
    details: [
      '18K gold plated over recycled brass',
      'Multicolor hand-set crystal blossoms',
      'Adjustable 40–45cm chain with extender',
      'Hypoallergenic, nickel-free, tarnish resistant',
    ],
    images: [
      { id: 'p-flora-nectar-a1', query: 'multicolor floral crystal necklace with gold chain on beige linen, luxury jewelry product photography, warm light' },
      { id: 'p-flora-nectar-b2', query: 'elegant woman wearing a delicate gold floral crystal necklace, close-up of neckline, warm editorial lighting' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    badge: 'Bestseller',
    rating: 5.0,
    reviews: 342,
    colors: ['#d4af6a', '#a9824b'],
    materials: '18K gold plated brass',
    short:
      'Chunky domed huggies with a mirror-warm shine — the pair you will never take off.',
    description:
      'Golden Sphere Huggies are our signature everyday hoop: a softly domed silhouette in polished 18K gold that hugs the earlobe. Substantial in look, featherlight in feel — engineered with a secure hinged closure for all-day wear.',
    details: [
      '18K gold plated over recycled brass',
      'High-polish domed finish',
      'Secure hinged snap closure',
      'Hypoallergenic, nickel-free, tarnish resistant',
    ],
    images: [
      { id: 'p-sphere-huggies-a1', query: 'chunky gold dome huggie hoop earrings on dark stone surface, luxury jewelry product photography, warm light' },
      { id: 'p-sphere-huggies-b2', query: 'woman wearing chunky gold huggie hoop earrings, close-up side profile, warm light, editorial jewelry photography' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    badge: 'Limited',
    rating: 4.9,
    reviews: 128,
    colors: ['#c98f5c', '#8c6a38'],
    materials: '18K gold plated brass, filigree drop',
    short:
      'Textured filigree drops that move like woven light — vintage soul, modern line.',
    description:
      'Amber Lace Earrings are cast from hand-drawn filigree, each curve textured to catch candlelight. The articulated drop sways gently as you move, lending a quiet, heirloom drama to evening silhouettes.',
    details: [
      '18K gold plated over recycled brass',
      'Hand-finished textured filigree',
      'Articulated drop, 4.5cm length',
      'Hypoallergenic, nickel-free, tarnish resistant',
    ],
    images: [
      { id: 'p-amber-lace-a1', query: 'textured gold filigree drop earrings on dark silk fabric, luxury jewelry product photography, warm candlelight' },
      { id: 'p-amber-lace-b2', query: 'woman wearing gold filigree drop earrings, evening editorial portrait, warm light, dark background' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    compareAtPrice: 120,
    category: 'Sets',
    badge: 'Gift Ready',
    rating: 4.9,
    reviews: 87,
    colors: ['#d4af6a', '#f2e6cc'],
    materials: '18K gold plated brass, signature gift box',
    short:
      'A matched earring and necklace set, nestled in our signature gift box — ready to give, made to keep.',
    description:
      'The Royal Heirloom Set pairs our polished dome studs with a fine pendant necklace, presented in the Velmora signature gift box with a care pouch and handwritten-style note card. The definitive gift for milestones — or for yourself.',
    details: [
      '18K gold plated over recycled brass',
      'Dome stud earrings + pendant necklace',
      'Signature gift box, pouch and note card included',
      'Hypoallergenic, nickel-free, tarnish resistant',
    ],
    images: [
      { id: 'p-heirloom-set-a1', query: 'gold earring and necklace jewelry set in an elegant cream gift box, luxury jewelry product photography, warm light' },
      { id: 'p-heirloom-set-b2', query: 'luxury gold jewelry gift box with ribbon on marble table, earrings and necklace set, warm editorial photography' },
    ],
  },
]

export const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

export const MATERIALS = ['18K Gold Plated', 'Crystal Accent', 'Gift Set']

export const PRICE_RANGES = [
  { id: 'under-45', label: 'Under $45', min: 0, max: 45 },
  { id: '45-70', label: '$45 – $70', min: 45, max: 70 },
  { id: 'over-70', label: 'Over $70', min: 70, max: Infinity },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)

export const getRelatedProducts = (product, count = 4) => {
  if (!product) return PRODUCTS.slice(0, count)
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  )
  const rest = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category
  )
  return [...sameCategory, ...rest].slice(0, count)
}

export const formatPrice = (value) => `$${Number(value).toFixed(0)}`
