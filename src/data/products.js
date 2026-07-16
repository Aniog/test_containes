// Seed product data for Velmora Fine Jewelry
// imgId values are unique identifiers consumed by the stock image system.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 126,
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to climb the ear with quiet confidence — no piercing required.',
    details: [
      '18K gold plating over brass',
      'Hand-set cubic zirconia crystal',
      'Hypoallergenic, nickel-free',
      'No piercing required',
    ],
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch to preserve the finish.',
    imgId: 'p-vivid-aura-7f2a9c',
    imgIdAlt: 'p-vivid-aura-alt-3b8d1e',
    galleryIds: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 4.9,
    reviews: 204,
    description:
      'A garden in bloom, suspended at the collarbone. Multicolor floral crystals are set along a fine gold chain for an editorial, luminous finish.',
    details: [
      '18K gold plating over brass',
      'Multicolor cubic zirconia crystals',
      'Adjustable 40–45 cm chain',
      'Lobster clasp closure',
    ],
    care: 'Gently wipe with a soft cloth after wear. Keep away from moisture and chemicals.',
    imgId: 'p-majestic-flora-2c4e7a',
    imgIdAlt: 'p-majestic-flora-alt-9d1f33',
    galleryIds: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 318,
    description:
      'Chunky dome huggies with a polished, mirror-like finish. The everyday gold earring — substantial enough to notice, light enough to forget.',
    details: [
      '18K gold plating over brass',
      'Polished dome silhouette',
      'Hinged huggie closure',
      'Sold as a pair',
    ],
    care: 'Polish with a microfiber cloth to restore shine. Store separately to avoid scratching.',
    imgId: 'p-golden-sphere-5a1b8c',
    imgIdAlt: 'p-golden-sphere-alt-6e2d4f',
    galleryIds: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 4.8,
    reviews: 97,
    description:
      'Intricate gold filigree rendered as a soft, lace-like drop. A romantic statement that catches the light with every movement.',
    details: [
      '18K gold plating over brass',
      'Hand-finished filigree texture',
      'Lightweight drop silhouette',
      'Post and butterfly back',
    ],
    care: 'Handle with care to protect the filigree detail. Store flat in the provided box.',
    imgId: 'p-amber-lace-8c3f1a',
    imgIdAlt: 'p-amber-lace-alt-4b7e2d',
    galleryIds: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 5.0,
    reviews: 64,
    description:
      'A coordinated heirloom — matching drop earrings and a pendant necklace, presented in a signature Velmora gift box. The gift that needs no wrapping.',
    details: [
      '18K gold plating over brass',
      'Coordinated earrings + necklace',
      'Signature Velmora gift box',
      'Adjustable chain length',
    ],
    care: 'Clean gently with a soft cloth. Store each piece in its compartment to prevent tangling.',
    imgId: 'p-royal-heirloom-1d6a3b',
    imgIdAlt: 'p-royal-heirloom-alt-7f9c2e',
    galleryIds: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3'],
    bestseller: true,
  },
]

export const categories = [
  {
    id: 'Earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops and statement studs',
    imgId: 'cat-earrings-3a7b1c',
  },
  {
    id: 'Necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains and layered sets',
    imgId: 'cat-necklaces-9d2e4f',
  },
  {
    id: 'Huggies',
    name: 'Huggies',
    description: 'Polished dome huggies for every day',
    imgId: 'cat-huggies-5c8a1b',
  },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and rich — I get compliments every single time I wear the Flora Nectar. It looks far more expensive than it was.',
  },
  {
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Heirloom Set as a gift for my mother and she nearly cried. The box alone feels luxurious. Beautiful, thoughtful packaging.',
  },
  {
    name: 'Priya R.',
    rating: 5,
    text: 'I have sensitive ears and these are the first huggies that don’t irritate me at all. Lightweight, hypoallergenic and gorgeous.',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, styled for everyday',
    imgId: 'reel-1-4a2c8e',
  },
  {
    id: 'reel-2',
    caption: 'The Flora Nectar, caught in afternoon light',
    imgId: 'reel-2-7b3d1f',
  },
  {
    id: 'reel-3',
    caption: 'Stacking the Vivid Aura ear cuff',
    imgId: 'reel-3-2e9c4a',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace drops for an evening out',
    imgId: 'reel-4-6f1a8b',
  },
  {
    id: 'reel-5',
    caption: 'The Heirloom Set, unboxed',
    imgId: 'reel-5-3c7d2e',
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
