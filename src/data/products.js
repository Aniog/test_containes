export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    shortDescription: 'A sculptural gold ear cuff dotted with a single luminous crystal — no piercing required.',
    description:
      'The Vivid Aura Jewels ear cuff catches light from every angle. Designed to sit comfortably on the ear without a piercing, it features a hand-polished 18K gold-plated band and a subtle crystal accent for just the right amount of sparkle.',
    materials:
      'Brass base with 18K gold plating. Finished with a lead- and nickel-free e-coating. Crystal accent. Hypoallergenic and suitable for sensitive skin.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in a dry pouch and polish gently with a soft cloth to maintain shine.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    defaultVariant: 'gold',
    images: 3,
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 86,
    shortDescription: 'A delicate necklace where hand-set floral crystals bloom along a golden chain.',
    description:
      'Inspired by overgrown gardens at golden hour, the Majestic Flora Nectar necklace layers tiny floral charms with multicolor crystals. Wear it solo or layered with a fine chain for an editorial finish.',
    materials:
      'Brass base with 18K gold plating. Hand-set glass crystals in soft pastel tones. Adjustable 16–18 inch chain with lobster clasp.',
    care: 'Store flat or hanging to prevent tangling. Keep away from moisture and harsh chemicals.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: false },
    ],
    defaultVariant: 'gold',
    images: 3,
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 213,
    shortDescription: 'Chunky dome huggies with a mirror-polished finish for everyday polish.',
    description:
      'The Golden Sphere Huggies are our most-loved everyday earring. A rounded, chunky silhouette gives them a vintage feel, while the lightweight hollow construction makes them comfortable from morning to night.',
    materials:
      'Brass base with thick 18K gold plating. Hinged huggie closure. Hollow-core construction for all-day wear.',
    care: 'Wipe clean after wear. Avoid sleeping or showering in your jewelry.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    defaultVariant: 'gold',
    images: 3,
    related: ['amber-lace-earrings', 'vivid-aura-jewels'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 97,
    shortDescription: 'Textured filigree drops inspired by antique lace and warm amber light.',
    description:
      'Amber Lace Earrings bring together intricate filigree texture and a soft teardrop shape. Each pair is cast and polished by hand, giving the surface a rich, heirloom-quality finish.',
    materials:
      'Brass base with 18K gold plating. Post-back closure with butterfly backing. Lightweight hollow drop.',
    care: 'Handle with care to protect the detailed surface. Store separately to avoid scratches.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    defaultVariant: 'gold',
    images: 3,
    related: ['golden-sphere-huggies', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 42,
    shortDescription: 'A gift-boxed pairing of signature earrings and a delicate matching necklace.',
    description:
      'The Royal Heirloom Set is everything you need for a considered gift. Includes a pair of our best-selling huggie earrings and a matching pendant necklace, presented in a Velmora gift box with a handwritten-style note card.',
    materials:
      'Brass base with 18K gold plating. Includes huggie earrings and adjustable 16–18 inch necklace. Gift box and note card included.',
    care: 'Keep pieces stored in the provided box. Avoid exposure to water and beauty products.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: false },
    ],
    defaultVariant: 'gold',
    images: 3,
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function formatPrice(price) {
  return `$${price}`
}
