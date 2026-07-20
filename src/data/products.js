export const imagePlaceholder =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

export const products = [
  {
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    price: 42,
    rating: 4.9,
    reviews: 128,
    description: 'A delicate gold ear cuff traced with a single crystal accent for everyday radiance.',
    detail:
      'Light-catching and effortless, this sculptural ear cuff slips on comfortably without a piercing and layers beautifully with studs or huggies.',
    care: 'Avoid perfume, lotions, and salt water. Store in the Velmora pouch and polish gently with a soft cloth.',
  },
  {
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    price: 68,
    rating: 4.8,
    reviews: 96,
    description: 'A luminous floral crystal necklace with soft multicolor stones set against warm gold.',
    detail:
      'Designed to sit at the collarbone, this feminine pendant adds a subtle bloom of color to silk, cotton, and evening layers alike.',
    care: 'Fasten the clasp before storing to avoid tangles. Keep crystals away from harsh cleaners and prolonged moisture.',
  },
  {
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    price: 38,
    rating: 4.9,
    reviews: 174,
    description: 'Chunky gold dome huggie earrings with a polished, softly rounded silhouette.',
    detail:
      'A modern signature pair with just enough volume, these huggies feel substantial while remaining comfortable from morning to midnight.',
    care: 'Remove before showering or exercising. Wipe after wear to preserve the mirror-polished finish.',
  },
  {
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    tones: ['Gold', 'Silver'],
    price: 54,
    rating: 4.7,
    reviews: 84,
    description: 'Textured gold filigree drop earrings inspired by vintage lacework and candlelight.',
    detail:
      'Intricate yet lightweight, these drop earrings bring heirloom texture to dinner dates, weddings, and elevated everyday dressing.',
    care: 'Store flat to protect the lace-like texture. Avoid bending the drop detail and clean only with a dry cloth.',
  },
  {
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    price: 95,
    rating: 5,
    reviews: 63,
    description: 'A gift-boxed earring and necklace set made for birthdays, bridesmaids, and keepsake moments.',
    detail:
      'Presented in our signature gift box, the coordinated set pairs a glowing pendant necklace with refined earrings for a complete golden ritual.',
    care: 'Keep each piece in its pouch between wears. Close the box away from direct sunlight and humidity.',
  },
]

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
export const materials = ['18K Gold Plated', 'Gold Vermeil']
export const tones = ['Gold', 'Silver']

export function formatPrice(price) {
  return `$${price}`
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(slug) {
  return products.filter((product) => product.slug !== slug).slice(0, 4)
}
