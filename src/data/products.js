export const imagePlaceholder = '/velmora-jewelry-fallback.svg'

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    description: 'A sculptural gold ear cuff finished with a luminous crystal accent.',
    detail:
      'A refined no-piercing cuff designed to catch the light with every turn. Wear it solo for a clean glint or stack it with huggies for a layered evening look.',
    care: 'Keep dry, store separately in the Velmora pouch, and polish gently with a soft cloth after wear.',
    rating: 4.9,
    reviews: 86,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    description: 'A delicate floral crystal necklace with soft multicolor shimmer.',
    detail:
      'An heirloom-inspired pendant necklace with petite crystal petals and a graceful adjustable chain, made for gifting and everyday glow.',
    care: 'Avoid perfume and lotions directly on the piece. Close the clasp before storing to prevent tangles.',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    description: 'Chunky gold dome huggies with a polished, modern silhouette.',
    detail:
      'A compact rounded huggie with enough volume to feel special, balanced by an effortless hinged closure for daily wear.',
    care: 'Remove before swimming or showering. Wipe clean after wear to preserve the finish.',
    rating: 4.9,
    reviews: 134,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    description: 'Textured gold filigree drops with a warm, lace-like finish.',
    detail:
      'Airy filigree work gives these earrings movement and lightness, pairing beautifully with silk, knits, or a swept-back neckline.',
    care: 'Store in a dry place and avoid abrasive surfaces to protect the textured detailing.',
    rating: 4.7,
    reviews: 73,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    price: 95,
    material: '18K Gold Plated',
    description: 'A gift-boxed earring and necklace set with timeless golden shine.',
    detail:
      'Designed for effortless gifting, this coordinated set arrives ready to present with softly luminous pieces she can wear together or apart.',
    care: 'Keep pieces in separate compartments within the gift box and polish softly after each wear.',
    rating: 5,
    reviews: 58,
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']
export const materials = ['18K Gold Plated', 'Hypoallergenic', 'Crystal Accent']

export const getProductById = (id) => products.find((product) => product.id === id)
