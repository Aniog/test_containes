export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff with a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches light with every turn.',
    materials:
      'Brass base with 18k gold plating, cubic zirconia accent. Nickel-free and hypoallergenic. Avoid contact with perfumes and lotions to preserve finish.',
    variants: ['gold', 'silver'],
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate pendant necklace blooming with multicolor floral crystals. Finished on a fine cable chain that layers beautifully with your favorite chains.',
    materials:
      'Brass base with 18k gold plating, hand-set enamel and glass crystals. Length: 40cm + 5cm extender. Store flat and away from moisture.',
    variants: ['gold'],
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 156,
    description:
      'Chunky dome huggie earrings with a polished, mirror-like finish. The perfect everyday hoop that transitions from morning coffee to evening plans.',
    materials:
      'Brass base with thick 18k gold plating, stainless steel posts. Diameter: 12mm. Wipe gently with a soft cloth after wear.',
    variants: ['gold', 'silver'],
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 72,
    description:
      'Textured filigree drop earrings inspired by vintage lace. Lightweight and statement-making, they frame the face with warm golden detail.',
    materials:
      'Brass base with 18k gold plating, surgical steel hooks. Length: 45mm. Keep dry and store in the included pouch.',
    variants: ['gold'],
    tags: ['bestseller'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 48,
    description:
      'A curated gift set featuring a pair of earrings and a matching necklace, presented in our signature Velmora box. Made for moments worth remembering.',
    materials:
      'Brass base with 18k gold plating, gift-ready packaging. Includes a care card and polishing cloth.',
    variants: ['gold'],
    tags: ['bestseller', 'gift'],
  },
]

export const relatedProductsMap = {
  'vivid-aura-jewels': ['golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set'],
  'majestic-flora-nectar': ['royal-heirloom-set', 'amber-lace-earrings', 'golden-sphere-huggies'],
  'golden-sphere-huggies': ['vivid-aura-jewels', 'amber-lace-earrings', 'majestic-flora-nectar'],
  'amber-lace-earrings': ['vivid-aura-jewels', 'majestic-flora-nectar', 'royal-heirloom-set'],
  'royal-heirloom-set': ['majestic-flora-nectar', 'vivid-aura-jewels', 'golden-sphere-huggies'],
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id) {
  const ids = relatedProductsMap[id] || []
  return ids.map(getProductById).filter(Boolean)
}
