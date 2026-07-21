// Seed product catalog for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes in components.
// Each product has stable ids used to build DOM ids for image queries.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'gold',
    short: 'Gold ear cuff with a single crystal accent — effortless, no piercing required.',
    description:
      'The Vivid Aura ear cuff wraps the ear in warm 18K gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it needs no piercing — simply slide it on and go.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal. Wipe clean with the included microfibre cloth.',
    badges: ['Bestseller'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 204,
    tone: 'gold',
    short: 'Multicolor floral crystal pendant on a delicate gold chain.',
    description:
      'A blooming floral pendant set with multicolor crystals, suspended from a fine gold chain. The Majestic Flora Nectar necklace brings a quiet wash of colour to the collarbone — romantic, lightweight, and made to layer.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia. 42cm chain with 5cm extender. Lobster clasp. Hypoallergenic, nickel-free.',
    badges: ['Bestseller', 'New'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'gold',
    short: 'Chunky gold dome huggie earrings with a smooth polished finish.',
    description:
      'The Golden Sphere huggies are chunky, polished gold domes that hug the lobe with a satisfying weight. A modern everyday staple that reads as quietly expensive — wear them from desk to dinner without a second thought.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged huggie closure. Sold as a pair. Hypoallergenic, nickel-free.',
    badges: ['Bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    tone: 'gold',
    short: 'Textured gold filigree drop earrings with an artisan finish.',
    description:
      'Intricate gold filigree is shaped into a soft lace-like drop, catching warm light in every groove. The Amber Lace earrings are featherlight and move with you — an heirloom feel at an everyday price.',
    materials:
      '18K gold plating over brass. Textured filigree. Fishhook closure. Sold as a pair. Hypoallergenic, nickel-free.',
    badges: [],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: 'gold',
    short: 'Gift-boxed earring and necklace set in matching gold.',
    description:
      'A coordinated set of gold earrings and a pendant necklace, presented in a keepsake gift box. The Royal Heirloom Set is our most giftable piece — ready to give, ready to treasure, with a matching finish that feels considered from every angle.',
    materials:
      '18K gold plating over brass. Hand-set cubic zirconia. Includes earrings, necklace, and gift box. Hypoallergenic, nickel-free.',
    badges: ['Gift Set'],
  },
  {
    id: 'lumen-twist-hoops',
    slug: 'lumen-twist-hoops',
    name: 'Lumen Twist Hoops',
    category: 'Earrings',
    type: 'Hoop Earrings',
    price: 46,
    rating: 4.6,
    reviews: 142,
    tone: 'gold',
    short: 'Twisted-texture gold hoop earrings with a sculptural feel.',
    description:
      'A sculptural twist on the classic hoop. The Lumen Twist hoops catch light along their textured spiral, adding dimension to a timeless silhouette.',
    materials:
      '18K gold plating over brass. Twisted texture. Hinged hoop closure. Sold as a pair. Hypoallergenic, nickel-free.',
    badges: [],
  },
  {
    id: 'seraph-chain-necklace',
    slug: 'seraph-chain-necklace',
    name: 'Seraph Chain Necklace',
    category: 'Necklaces',
    type: 'Chain Necklace',
    price: 52,
    rating: 4.7,
    reviews: 88,
    tone: 'gold',
    short: 'Fine gold paperclip chain made for layering.',
    description:
      'A delicate paperclip chain in warm gold, the Seraph is built for layering. Wear it solo for a whisper of shine, or stack it with pendants for a curated look.',
    materials:
      '18K gold plating over brass. 45cm chain with extender. Lobster clasp. Hypoallergenic, nickel-free.',
    badges: [],
  },
  {
    id: 'petal-huggie-duo',
    slug: 'petal-huggie-duo',
    name: 'Petal Huggie Duo',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 44,
    rating: 4.8,
    reviews: 73,
    tone: 'gold',
    short: 'Gold huggies with a tiny crystal petal detail.',
    description:
      'A petite huggie finished with a tiny crystal-set petal. The Petal Huggie Duo is delicate enough for everyday, special enough to notice.',
    materials:
      '18K gold plating over brass. Cubic zirconia petal. Hinged huggie closure. Sold as a pair. Hypoallergenic, nickel-free.',
    badges: ['New'],
  },
]

export const categories = [
  { id: 'Earrings', name: 'Earrings', desc: 'Hoops, drops & cuffs' },
  { id: 'Necklaces', name: 'Necklaces', desc: 'Chains & pendants' },
  { id: 'Huggies', name: 'Huggies', desc: 'Everyday huggies' },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelated(slug, limit = 4) {
  const current = getProduct(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
