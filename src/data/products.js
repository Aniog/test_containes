export const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies', 'Sets']
export const MATERIALS = ['18K Gold Plated', 'Sterling Silver']
export const TONES = ['gold', 'silver']

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviewCount: 124,
    shortDescription: 'A sculptural gold ear cuff finished with a single crystal accent — no piercing required.',
    description: 'The Vivid Aura Jewels ear cuff catches light from every angle. Hand-set with a brilliant crystal and sculpted in warm 18K gold-plated brass, it sits comfortably on the ear without the need for a piercing. Designed to layer with your favorite studs or shine solo.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in the included pouch and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery.',
    tags: ['bestseller', 'ear cuff', 'crystal'],
    variants: [
      { tone: 'gold', label: 'Gold', price: 42, inStock: true },
      { tone: 'silver', label: 'Silver', price: 42, inStock: true },
    ],
    images: [
      { imgId: 'vivid-aura-1', query: 'gold ear cuff crystal accent on ear close up luxury jewelry' },
      { imgId: 'vivid-aura-2', query: 'gold ear cuff jewelry flatlay dark background editorial' },
      { imgId: 'vivid-aura-3', query: 'woman wearing gold ear cuff crystal elegant portrait' },
    ],
    hoverImage: { imgId: 'vivid-aura-hover', query: 'gold ear cuff crystal detail macro jewelry photography' },
    isBestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'A delicate necklace blooming with multicolor floral crystals on a fine gold chain.',
    description: 'Inspired by secret gardens and golden hour light, the Majestic Flora Nectar necklace features hand-painted enamel petals and soft pastel crystals set along a dainty 18K gold-plated chain. A piece made for layering or wearing as a statement of quiet femininity.',
    care: 'Keep dry and away from direct sunlight when not worn. Wipe after each wear to preserve the finish.',
    shipping: 'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery.',
    tags: ['bestseller', 'floral', 'necklace'],
    variants: [
      { tone: 'gold', label: 'Gold', price: 68, inStock: true },
    ],
    images: [
      { imgId: 'flora-nectar-1', query: 'multicolor floral crystal necklace gold chain on model' },
      { imgId: 'flora-nectar-2', query: 'floral crystal necklace flatlay dark background jewelry' },
      { imgId: 'flora-nectar-3', query: 'delicate gold flower necklace worn close up editorial' },
    ],
    hoverImage: { imgId: 'flora-nectar-hover', query: 'colorful crystal flower necklace macro gold chain' },
    isBestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Chunky dome huggie earrings with a polished, mirror-like gold finish.',
    description: 'The Golden Sphere Huggies bring a modern, sculptural presence to an everyday silhouette. Their chunky dome shape catches light beautifully, while the secure hinged closure keeps them comfortable from morning coffee to evening plans.',
    care: 'Remove before showering or swimming. Store flat to maintain shape and polish with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery.',
    tags: ['bestseller', 'huggies', 'chunky'],
    variants: [
      { tone: 'gold', label: 'Gold', price: 38, inStock: true },
      { tone: 'silver', label: 'Silver', price: 38, inStock: false },
    ],
    images: [
      { imgId: 'sphere-huggies-1', query: 'chunky gold dome huggie earrings on ear close up' },
      { imgId: 'sphere-huggies-2', query: 'gold huggie earrings flatlay black background jewelry' },
      { imgId: 'sphere-huggies-3', query: 'woman wearing chunky gold huggie earrings editorial portrait' },
    ],
    hoverImage: { imgId: 'sphere-huggies-hover', query: 'gold dome huggie earrings pair macro detail' },
    isBestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Sterling Silver',
    rating: 4.9,
    reviewCount: 72,
    shortDescription: 'Textured filigree drop earrings inspired by vintage lace and warm amber light.',
    description: 'Intricate filigree work gives the Amber Lace Earrings their heirloom appeal. Finished in warm 18K gold over sterling silver, each drop moves gracefully with you — a romantic choice for both daytime polish and evening occasions.',
    care: 'Store in a dry place. Clean gently with a silver polishing cloth to maintain the gold wash over sterling silver.',
    shipping: 'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. Returns accepted within 30 days of delivery.',
    tags: ['bestseller', 'drop earrings', 'filigree'],
    variants: [
      { tone: 'gold', label: 'Gold', price: 54, inStock: true },
      { tone: 'silver', label: 'Silver', price: 54, inStock: true },
    ],
    images: [
      { imgId: 'amber-lace-1', query: 'gold filigree drop earrings on model close up jewelry' },
      { imgId: 'amber-lace-2', query: 'textured gold lace earrings flatlay editorial dark background' },
      { imgId: 'amber-lace-3', query: 'gold filigree drop earrings worn elegant portrait' },
    ],
    hoverImage: { imgId: 'amber-lace-hover', query: 'gold filigree drop earrings detail macro' },
    isBestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 48,
    shortDescription: 'A gift-boxed pairing of earrings and necklace, ready to make someone feel treasured.',
    description: 'The Royal Heirloom Set combines our signature filigree studs with a matching pendant necklace, presented in a Velmora gift box. Thoughtfully designed for gifting — or for treating yourself to a complete, curated look.',
    care: 'Keep pieces separated in the provided box to prevent scratching. Avoid water, perfume, and lotions.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days in our signature gift packaging. Returns accepted within 30 days of delivery.',
    tags: ['bestseller', 'gift set', 'earrings necklace'],
    variants: [
      { tone: 'gold', label: 'Gold', price: 95, inStock: true },
      { tone: 'silver', label: 'Silver', price: 95, inStock: true },
    ],
    images: [
      { imgId: 'royal-heirloom-1', query: 'gold earring and necklace gift set jewelry box elegant' },
      { imgId: 'royal-heirloom-2', query: 'gold jewelry set necklace earrings flatlay dark background' },
      { imgId: 'royal-heirloom-3', query: 'woman wearing gold necklace and earrings set editorial portrait' },
    ],
    hoverImage: { imgId: 'royal-heirloom-hover', query: 'gold earring necklace set detail macro jewelry' },
    isBestseller: true,
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.id === slug) || null
}

export function getRelatedProducts(currentProductId, limit = 4) {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit)
}

export function getBestsellers(limit = 5) {
  return products.filter((p) => p.isBestseller).slice(0, limit)
}

export function formatTone(tone) {
  return tone === 'gold' ? 'Gold' : 'Silver'
}
