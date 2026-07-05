export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff finished with a single radiant crystal accent. Designed to sit comfortably on the ear without piercing, it catches light with every turn.',
    materials:
      '18k gold-plated brass. AAA cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfume, lotion, and water. Store in the provided pouch and polish gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
    tags: ['best'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate collar necklace blooming with hand-set multicolor crystals in a floral motif. Feminine, romantic, and unmistakably modern.',
    materials:
      '18k gold-plated brass. Hand-set glass crystals in pastel tones. Adjustable 16–18 inch chain.',
    care: 'Lay flat when not in use. Clean with a dry cloth; never soak.',
    variants: ['Gold'],
    tags: ['best'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 215,
    description:
      'Chunky dome huggies with a polished, mirror-like finish. The everyday earring that works from coffee runs to candlelit dinners.',
    materials:
      '18k gold-plated stainless steel. Hinged huggie closure. Water-resistant finish.',
    care: 'Can be worn in light rain. Dry after swimming and store away from direct sunlight.',
    variants: ['Gold', 'Silver'],
    tags: ['best'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 76,
    description:
      'Textured gold filigree drops inspired by vintage lace. Light enough for all-day wear, statement enough to own the room.',
    materials:
      '18k gold-plated brass. Surgical steel posts. Butterfly backings.',
    care: 'Store hanging or flat to prevent bending. Wipe clean with a jewelry cloth.',
    variants: ['Gold'],
    tags: ['best'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    description:
      'A curated gift set of our signature huggies and a matching pendant necklace, presented in a soft-touch Velmora box.',
    materials:
      '18k gold-plated stainless steel and brass. Includes gift box, pouch, and care card.',
    care: 'Keep pieces separated in the pouch to prevent scratching.',
    variants: ['Gold', 'Silver'],
    tags: ['best'],
  },
]

export const CATEGORIES = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'velmora-category-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'velmora-category-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'velmora-category-huggies',
  },
]

export const UGC_REELS = [
  {
    id: 'reel-1',
    caption: 'Morning light, gold huggies.',
    imgId: 'velmora-reel-1',
  },
  {
    id: 'reel-2',
    caption: 'Date-night ear stack.',
    imgId: 'velmora-reel-2',
  },
  {
    id: 'reel-3',
    caption: 'Layered necklaces, always.',
    imgId: 'velmora-reel-3',
  },
  {
    id: 'reel-4',
    caption: 'Self-gift Sunday.',
    imgId: 'velmora-reel-4',
  },
  {
    id: 'reel-5',
    caption: 'Wedding guest ready.',
    imgId: 'velmora-reel-5',
  },
  {
    id: 'reel-6',
    caption: 'Coffee and crystals.',
    imgId: 'velmora-reel-6',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Amelia K.',
    text: 'The quality is exceptional for the price. My huggies still look brand new after months of daily wear.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sophia L.',
    text: 'Beautiful packaging and even more beautiful jewelry. I have already ordered two more pieces for gifts.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Maya J.',
    text: 'Finally, demi-fine jewelry that feels luxe without the markup. The ear cuff is my new signature.',
    rating: 5,
  },
]

export const TRUST_POINTS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export function formatPrice(value) {
  return `$${value}`
}

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.id === slug) || null
}

export function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== product.id).slice(0, limit)
}

export function getBestsellers(limit = 5) {
  return PRODUCTS.filter((p) => p.tags.includes('best')).slice(0, limit)
}
