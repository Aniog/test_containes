// Seed product data for Velmora Fine Jewelry.
// Each product has stable ids used for image tagging and routing.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'earring',
    shortDescription:
      'A sculptural gold ear cuff traced with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff wraps the cartilage in a warm arc of 18K gold plating, finished with a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked, it brings quiet brilliance to the everyday.',
    materials:
      '18K gold plating over brass. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.',
    rating: 4.8,
    reviews: 126,
    tones: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'necklace',
    shortDescription:
      'A multicolor floral crystal necklace that blooms along the collarbone.',
    description:
      'Majestic Flora Nectar suspends a garden of multicolor crystals in delicate gold petals, resting just below the collarbone. Each stone is chosen for its warm, editorial glow — a statement that feels both romantic and restrained.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 16–18 inch chain. Nickel-free, hypoallergenic.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box. Polish with a microfiber cloth.',
    rating: 4.9,
    reviews: 88,
    tones: ['Gold'],
    bestseller: true,
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    shortDescription:
      'Chunky gold dome huggie earrings with a polished, sculptural finish.',
    description:
      'Golden Sphere Huggies reimagine the classic huggie with a chunky, polished dome that hugs the lobe closely. Substantial yet weightless, they are the everyday gold earring you will never want to take off.',
    materials:
      '18K gold plating over brass. Smooth polished dome. Hinged huggie closure. Nickel-free, hypoallergenic.',
    care: 'Secure the hinged closure after wear. Avoid water and chemicals. Wipe clean with a soft cloth.',
    rating: 4.7,
    reviews: 203,
    tones: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'earring',
    shortDescription:
      'Textured gold filigree drop earrings with an heirloom, lace-like pattern.',
    description:
      'Amber Lace Earrings are etched with a fine filigree pattern that recalls antique lace. The warm gold catches light along every line, dropping just enough to frame the jaw with quiet elegance.',
    materials:
      '18K gold plating over brass. Textured filigree etching. Lever-back closure. Nickel-free, hypoallergenic.',
    care: 'Handle the filigree gently. Store in a separate compartment to avoid tangling. Keep dry.',
    rating: 4.8,
    reviews: 64,
    tones: ['Gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    type: 'set',
    shortDescription:
      'A gift-boxed earring and necklace set designed to be treasured together.',
    description:
      'The Royal Heirloom Set pairs a coordinating necklace and earrings in a signature gift box, ready for the moment of giving. Warm gold and crystal accents unite the two pieces into one considered, heirloom-worthy gesture.',
    materials:
      '18K gold plating over brass. Cubic zirconia accents. Includes necklace and matching earrings. Gift boxed. Nickel-free, hypoallergenic.',
    care: 'Store each piece in the gift box compartments. Avoid water and perfume. Polish with a soft cloth.',
    rating: 5.0,
    reviews: 41,
    tones: ['Gold'],
    bestseller: true,
    badge: 'Gift Set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sculptural cuffs, drops, and huggies in warm gold.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and crystal blooms for the collarbone.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished dome huggies that hug the lobe closely.',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return []
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aMatch = a.category === product.category ? 0 : 1
      const bMatch = b.category === product.category ? 0 : 1
      return aMatch - bMatch
    })
    .slice(0, limit)
}
