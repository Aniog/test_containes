export const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const products = [
  {
    id: 'velmora-001',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    tone: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff finished with a single luminous crystal. Designed to hug the ear without a piercing, it catches candlelight beautifully and layers effortlessly with studs or hoops.',
    details:
      '18k gold-plated brass. Nickel-free and hypoallergenic. One size, adjustable gentle squeeze fit. Crystal accent.',
    care: 'Store in a dry pouch. Avoid perfumes, lotions, and water. Polish gently with a soft cloth.',
    images: 3,
  },
  {
    id: 'velmora-002',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    tone: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate pendant necklace inspired by pressed wildflowers, set with multicolor crystals on a fine gold chain. The perfect statement of understated femininity.',
    details:
      '18k gold-plated brass chain. Glass crystals in pastel tones. Lobster clasp, 16–18" adjustable length.',
    care: 'Lay flat to store. Remove before showering or swimming. Wipe after wear.',
    images: 3,
  },
  {
    id: 'velmora-003',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    tone: 'gold',
    rating: 4.7,
    reviewCount: 210,
    description:
      'Chunky yet lightweight dome huggies that bring a sculptural glow to everyday looks. The polished rounded form feels both modern and timeless.',
    details:
      '18k gold-plated brass. Hinged huggie closure. Diameter 12mm. Sold as a pair.',
    care: 'Avoid contact with water and beauty products. Store in original box to prevent scratches.',
    images: 3,
  },
  {
    id: 'velmora-004',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    tone: 'gold',
    rating: 4.9,
    reviewCount: 76,
    description:
      'Textured filigree drops inspired by antique Venetian lace. Lightweight and luminous, they frame the face with warm golden movement.',
    details:
      '18k gold-plated brass. Textured filigree. Shepherd hook closure. Length 45mm. Sold as a pair.',
    care: 'Keep dry and store hanging or flat. Clean with a soft dry cloth only.',
    images: 3,
  },
  {
    id: 'velmora-005',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    tone: 'gold',
    rating: 5.0,
    reviewCount: 52,
    description:
      'A curated gift set of matching earrings and necklace, presented in a soft-touch Velmora box. Made for milestones, anniversaries, or simply because she deserves it.',
    details:
      '18k gold-plated brass set. Includes stud earrings and pendant necklace. Gift box included.',
    care: 'Store pieces separately in the provided pouch. Avoid exposure to moisture and fragrance.',
    images: 3,
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', description: 'Studs, drops and statement cuffs' },
  { id: 'necklaces', label: 'Necklaces', description: 'Layered chains and pendants' },
  { id: 'huggies', label: 'Huggies', description: 'Effortless everyday hoops' },
  { id: 'sets', label: 'Sets', description: 'Curated gifts, boxed and ready' },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(productId, limit = 4) {
  return products.filter((p) => p.id !== productId).slice(0, limit)
}

export function getProductImageQuery(product, index = 0) {
  return `[product-${product.id}-desc] [product-${product.id}-name]`
}

export function getBestsellers() {
  return products.slice(0, 5)
}
