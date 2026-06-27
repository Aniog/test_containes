export const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets']

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without piercing — an effortless statement for everyday luxury.',
    materials: 'Brass base with 18k gold plating. Crystal accent. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfume, lotion, and water. Store in the included pouch and polish gently with a soft cloth.',
    tags: ['best-seller', 'ear-cuff'],
    tone: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate necklace featuring hand-set multicolor floral crystals on a fine gold chain. Feminine, refined, and the perfect layering piece.',
    materials: 'Brass base with 18k gold plating. Glass crystals in pastel tones. Adjustable 16–18 inch chain.',
    care: 'Remove before showering or swimming. Lay flat to store and avoid tugging the chain.',
    tags: ['best-seller', 'necklace'],
    tone: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky dome huggies with a polished, mirror-like finish. Lightweight enough for all-day wear and bold enough to stand alone.',
    materials: 'Brass base with 18k gold plating. Hinge closure. Hypoallergenic posts.',
    care: 'Wipe clean after each wear. Store separately to prevent scratching.',
    tags: ['best-seller', 'huggie'],
    tone: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.6,
    reviewCount: 76,
    description: 'Textured filigree drops inspired by antique lace. The warm gold surface catches candlelight beautifully — ideal for evening or elevated everyday looks.',
    materials: 'Brass base with 18k gold plating. Surgical steel posts.',
    care: 'Keep dry and store hanging or flat. Clean with a dry microfiber cloth only.',
    tags: ['best-seller', 'drop-earring'],
    tone: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 52,
    description: 'A coordinated earring and necklace set, presented in a Velmora gift box. A timeless choice for celebrations, anniversaries, or thoughtful gifting.',
    materials: 'Brass base with 18k gold plating. Includes stud earrings and matching pendant necklace.',
    care: 'Store in the provided gift box. Avoid exposure to moisture and harsh chemicals.',
    tags: ['best-seller', 'gift-set', 'gift'],
    tone: ['gold'],
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit)
}
