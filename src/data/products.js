export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff illuminated by a single precision-set crystal accent. Designed to catch candlelight and compliments alike — no piercing required.',
    materials:
      '18k gold-plated brass with a rhodium-protected finish. Lead-free, nickel-free, and hypoallergenic for sensitive ears.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and chlorine. Wipe gently with a soft cloth after wear.',
    shipping:
      'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. 30-day returns on unworn pieces.',
    imageQuery: 'gold ear cuff crystal accent demi fine jewelry warm light',
    secondaryQuery: 'gold ear cuff worn on ear editorial jewelry close up',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 86,
    description:
      'A delicate collar of multicolor floral crystals suspended from a fine gold chain. Romantic, modern, and endlessly wearable.',
    materials:
      '18k gold-plated stainless steel chain with hand-set glass crystals. Hypoallergenic and water-resistant.',
    care: 'Lay flat to store. Remove before swimming or showering. Clean with a soft, dry cloth.',
    shipping:
      'Complimentary tracked shipping. Most orders arrive within 3–5 business days. Easy 30-day returns.',
    imageQuery: 'multicolor floral crystal necklace gold chain demi fine jewelry',
    secondaryQuery: 'floral crystal necklace on model neck editorial jewelry',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 215,
    description:
      'Chunky gold dome huggies that hug the lobe with quiet confidence. A modern classic for everyday luxury.',
    materials:
      '18k gold-plated 925 sterling silver posts. Lightweight, hypoallergenic, and designed for all-day comfort.',
    care: 'Keep away from harsh chemicals. Store in the included Velmora pouch. Polish with a microfiber cloth.',
    shipping:
      'Free standard shipping on all orders. Express options available at checkout. 30-day hassle-free returns.',
    imageQuery: 'chunky gold dome huggie earrings demi fine jewelry',
    secondaryQuery: 'gold huggie earrings worn on ear lobe close up',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 98,
    description:
      'Textured gold filigree drops inspired by antique lace. Statement-making yet featherlight, they move beautifully with you.',
    materials:
      '18k gold-plated brass with intricate openwork. Nickel-free and hypoallergenic.',
    care: 'Avoid bending the delicate openwork. Store flat in a jewelry box. Wipe clean with a soft cloth.',
    shipping:
      'Ships in a Velmora gift box within 1–2 business days. Free worldwide shipping over $50. 30-day returns.',
    imageQuery: 'textured gold filigree drop earrings demi fine jewelry',
    secondaryQuery: 'gold filigree drop earrings worn editorial jewelry',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 47,
    description:
      'A curated gift set of coordinating earrings and necklace, presented in our signature Velmora box. The perfect gift — or self-treasure.',
    materials:
      '18k gold-plated brass and stainless steel with crystal accents. Hypoallergenic and tarnish-resistant.',
    care: 'Store pieces separately in the provided pouch. Avoid moisture and beauty products.',
    shipping:
      'Complimentary gift packaging and worldwide shipping. 30-day returns on unworn items.',
    imageQuery: 'gold jewelry gift set earrings necklace velvet box demi fine',
    secondaryQuery: 'gold earring necklace set styled flat lay jewelry',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

export const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: '80plus', label: '$80+', min: 80, max: Infinity },
]
