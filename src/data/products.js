export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    accent: 'Crystal Accent',
    rating: 4.9,
    reviews: 128,
    description: 'A sculptural gold ear cuff finished with a subtle crystal glint for everyday radiance.',
    longDescription:
      'Designed to frame the ear without piercing, Vivid Aura Jewels brings a polished line of warm gold and a delicate crystal accent to day-to-night styling.',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    accent: 'Multicolor Crystal',
    rating: 4.8,
    reviews: 96,
    description: 'A floral crystal necklace with soft color, gold warmth, and a graceful gifting silhouette.',
    longDescription:
      'A refined pendant necklace inspired by pressed florals, balancing luminous stones with a slim gold-plated chain for an heirloom feeling at an accessible price.',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    accent: 'Polished Dome',
    rating: 4.9,
    reviews: 174,
    description: 'Chunky gold dome huggies with a comfortable close fit and softly rounded shine.',
    longDescription:
      'A modern essential with volume and restraint, these huggies add warm sculptural polish while staying light enough for everyday wear.',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    accent: 'Textured Filigree',
    rating: 4.7,
    reviews: 82,
    description: 'Textured gold filigree drops with a lace-like finish that catches warm evening light.',
    longDescription:
      'Amber Lace Earrings bring vintage romance into a contemporary profile, with dimensional texture and elegant movement for dinners, weddings, and gifting.',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: '18K Gold Plated',
    accent: 'Gift Boxed Set',
    rating: 5.0,
    reviews: 64,
    description: 'A gift-boxed earring and necklace set made for milestones, birthdays, and self-celebration.',
    longDescription:
      'A complete demi-fine pairing presented in signature packaging, Royal Heirloom Set layers luminous gold details into a considered gift-ready moment.',
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']
export const materials = ['18K Gold Plated', 'Crystal Accent', 'Gift Boxed Set']

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)

export const getRelatedProducts = (product) =>
  products
    .filter((item) => item.id !== product.id)
    .sort((a, b) => (a.category === product.category ? -1 : 1) - (b.category === product.category ? -1 : 1))
    .slice(0, 4)
