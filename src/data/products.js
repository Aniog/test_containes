// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries stable ids used to build DOM ids for the Strikingly
// stock-image system (data-strk-img references these ids).

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    material: '18K Gold Plated',
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to be worn alone or stacked — no piercing required.',
    details: [
      '18K gold plating over brass',
      'Hand-set cubic zirconia crystal',
      'No-piercing cuff fit',
      'Hypoallergenic & nickel-free',
    ],
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch to preserve the gold finish.',
    tones: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-b2',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 204,
    material: '18K Gold Plated',
    description:
      'A blooming floral pendant set with multicolor crystals, suspended from a delicate gold chain. A statement of quiet romance.',
    details: [
      '18K gold plating over brass',
      'Multicolor cubic zirconia crystals',
      'Adjustable 40–45 cm chain',
      'Lobster clasp closure',
    ],
    care: 'Wipe gently with a soft cloth after wear. Keep away from moisture and chemicals to protect the crystals.',
    tones: ['Gold'],
    bestseller: true,
    imgId: 'prod-majestic-flora-a1',
    imgIdAlt: 'prod-majestic-flora-b2',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 318,
    material: '18K Gold Plated',
    description:
      'Chunky gold dome huggies that hug the lobe with a soft, sculptural curve. Everyday gold, elevated.',
    details: [
      '18K gold plating over brass',
      'Polished dome silhouette',
      'Hinged snap closure',
      'Sold as a pair',
    ],
    care: 'Clean with a dry microfibre cloth. Store separately to avoid scratching the polished surface.',
    tones: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'prod-golden-sphere-a1',
    imgIdAlt: 'prod-golden-sphere-b2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    material: '18K Gold Plated',
    description:
      'Intricate gold filigree drops with a lace-like openwork texture. Light in hand, luminous on the ear.',
    details: [
      '18K gold plating over brass',
      'Hand-finished filigree texture',
      'Lightweight drop, 4.5 cm',
      'Lever-back closure',
    ],
    care: 'Handle the filigree with care. Avoid pulling or bending the openwork. Store flat in the pouch.',
    tones: ['Gold'],
    bestseller: true,
    imgId: 'prod-amber-lace-a1',
    imgIdAlt: 'prod-amber-lace-b2',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 58,
    material: '18K Gold Plated',
    description:
      'A coordinated earring and necklace set, presented in a signature Velmora gift box. The heirloom-worthy gift, ready to give.',
    details: [
      '18K gold plating over brass',
      'Matching drop earrings & pendant',
      'Adjustable 42–47 cm chain',
      'Signature gift box included',
    ],
    care: 'Store each piece in its compartment. Polish gently before gifting to restore the warm gold lustre.',
    tones: ['Gold'],
    bestseller: true,
    imgId: 'prod-royal-heirloom-a1',
    imgIdAlt: 'prod-royal-heirloom-b2',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
  {
    id: 'lumen-thread-studs',
    name: 'Lumen Thread Studs',
    tagline: 'Minimal gold threader earrings',
    category: 'Earrings',
    price: 34,
    rating: 4.6,
    reviews: 142,
    material: '18K Gold Plated',
    description:
      'Sleek gold threaders that thread through the piercing for a floating, modern line.',
    details: ['18K gold plating over brass', 'Thread-through fit', 'Sold as a pair', 'Hypoallergenic'],
    care: 'Straighten gently after wear. Keep dry to maintain the gold finish.',
    tones: ['Gold', 'Silver'],
    bestseller: false,
    imgId: 'prod-lumen-thread-a1',
    imgIdAlt: 'prod-lumen-thread-b2',
    titleId: 'prod-lumen-thread-title',
    descId: 'prod-lumen-thread-desc',
  },
  {
    id: 'celeste-chain-necklace',
    name: 'Celeste Chain Necklace',
    tagline: 'Layered gold paperclip chain',
    category: 'Necklaces',
    price: 58,
    rating: 4.8,
    reviews: 176,
    material: '18K Gold Plated',
    description:
      'A refined paperclip chain that layers beautifully or stands alone. The everyday gold essential.',
    details: ['18K gold plating over brass', 'Paperclip link chain', 'Adjustable 40–46 cm', 'Lobster clasp'],
    care: 'Lay flat when not worn. Wipe with a soft cloth to keep the links bright.',
    tones: ['Gold', 'Silver'],
    bestseller: false,
    imgId: 'prod-celeste-chain-a1',
    imgIdAlt: 'prod-celeste-chain-b2',
    titleId: 'prod-celeste-chain-title',
    descId: 'prod-celeste-chain-desc',
  },
  {
    id: 'petal-halo-huggies',
    name: 'Petal Halo Huggies',
    tagline: 'Crystal halo huggie earrings',
    category: 'Huggies',
    price: 46,
    rating: 4.7,
    reviews: 89,
    material: '18K Gold Plated',
    description:
      'Slim gold huggies framed by a halo of tiny crystals. A whisper of sparkle for everyday wear.',
    details: ['18K gold plating over brass', 'Pavé cubic zirconia halo', 'Hinged snap closure', 'Sold as a pair'],
    care: 'Avoid contact with water. Clean crystals gently with a soft brush.',
    tones: ['Gold', 'Silver'],
    bestseller: false,
    imgId: 'prod-petal-halo-a1',
    imgIdAlt: 'prod-petal-halo-b2',
    titleId: 'prod-petal-halo-title',
    descId: 'prod-petal-halo-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    blurb: 'Studs, drops & cuffs',
    imgId: 'cat-earrings-a1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    blurb: 'Chains & pendants',
    imgId: 'cat-necklaces-a1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    blurb: 'Everyday gold huggies',
    imgId: 'cat-huggies-a1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  {
    id: 'reel-ear',
    caption: 'Stacked gold, every day',
    imgId: 'reel-ear-a1',
    titleId: 'reel-ear-title',
  },
  {
    id: 'reel-neck',
    caption: 'The everyday gold chain',
    imgId: 'reel-neck-a1',
    titleId: 'reel-neck-title',
  },
  {
    id: 'reel-cuff',
    caption: 'No-piercing gold cuff',
    imgId: 'reel-cuff-a1',
    titleId: 'reel-cuff-title',
  },
  {
    id: 'reel-set',
    caption: 'The gift, ready to give',
    imgId: 'reel-set-a1',
    titleId: 'reel-set-title',
  },
  {
    id: 'reel-halo',
    caption: 'A whisper of sparkle',
    imgId: 'reel-halo-a1',
    titleId: 'reel-halo-title',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and real-looking. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my sister and she cried. The packaging alone feels like a treasure.',
  },
  {
    id: 't3',
    name: 'Priya R.',
    rating: 5,
    text: 'Finally demi-fine jewelry that does not irritate my ears. Hypoallergenic and genuinely beautiful.',
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
      const aMatch = a.category === current.category ? 1 : 0
      const bMatch = b.category === current.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, limit)
}
