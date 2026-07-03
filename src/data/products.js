// Seed product catalogue for Velmora Fine Jewelry.
// Images are resolved at runtime via the strk-img system using dynamic text refs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'ear cuff',
    material: '18K Gold Plated',
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, finished in 18K gold plating over sterling silver. A hand-set crystal catches the light with every turn. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    rating: 4.8,
    reviews: 126,
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-alt-b2',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'pendant necklace',
    material: '18K Gold Plated',
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain.',
    description:
      'Majestic Flora Nectar blooms at the collarbone — a floral cluster of multicolor crystals set in warm gold. The adjustable chain lets it rest exactly where you want it, making it as effortless with a white tee as with an evening neckline.',
    materials:
      '18K gold plating over 925 sterling silver. Multicolor cubic zirconia. Adjustable 40–45cm chain with 5cm extender.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    rating: 4.9,
    reviews: 88,
    variants: ['Gold'],
    badge: 'New',
    imgId: 'prod-majestic-flora-c3',
    imgIdAlt: 'prod-majestic-flora-alt-d4',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie earrings',
    material: '18K Gold Plated',
    shortDescription:
      'Chunky gold dome huggies with a smooth, sculptural silhouette.',
    description:
      'The Golden Sphere huggies reimagine the everyday hoop as a polished gold dome. Their chunky profile reads bold, while the huggie closure keeps them comfortable enough to never take off. Sold as a pair.',
    materials:
      '18K gold plating over 925 sterling silver. Hinged huggie closure. Hypoallergenic, nickel-free.',
    care: 'Wipe clean with a soft cloth after wear. Avoid water and chemicals to preserve the plating.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    rating: 4.7,
    reviews: 214,
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-golden-sphere-e5',
    imgIdAlt: 'prod-golden-sphere-alt-f6',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'drop earrings',
    material: '18K Gold Plated',
    shortDescription:
      'Textured gold filigree drop earrings with an artisanal, lace-like finish.',
    description:
      'Amber Lace pairs old-world filigree with a modern drop length. Each earring is textured by hand to catch the light like fine lace, finished in warm 18K gold. Lightweight enough for all-day wear, expressive enough for evening.',
    materials:
      '18K gold plating over 925 sterling silver. Textured filigree. Hypoallergenic, nickel-free.',
    care: 'Store separately to protect the filigree texture. Polish with a soft, dry cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    rating: 4.8,
    reviews: 64,
    variants: ['Gold'],
    imgId: 'prod-amber-lace-g7',
    imgIdAlt: 'prod-amber-lace-alt-h8',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    type: 'earring + necklace set',
    material: '18K Gold Plated',
    shortDescription:
      'A gift-boxed earring and necklace set designed to be treasured together.',
    description:
      'The Royal Heirloom Set unites a pair of crystal-studded earrings with a matching pendant necklace, presented in a signature Velmora gift box. Coordinated to layer perfectly, it is the gift that arrives ready to be unworn — and remembered.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes signature gift box.',
    care: 'Store each piece in its compartment. Keep dry and away from perfume to preserve the finish.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    rating: 5.0,
    reviews: 41,
    variants: ['Gold'],
    badge: 'Gift Set',
    imgId: 'prod-royal-heirloom-i9',
    imgIdAlt: 'prod-royal-heirloom-alt-j0',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  {
    id: 'Earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops and statement hoops.',
    imgId: 'cat-earrings-k1',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
  },
  {
    id: 'Necklaces',
    name: 'Necklaces',
    description: 'Pendants and chains for every neckline.',
    imgId: 'cat-necklaces-l2',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
  },
  {
    id: 'Huggies',
    name: 'Huggies',
    description: 'Polished dome huggies you never take off.',
    imgId: 'cat-huggies-m3',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I have worn my huggies every day for months and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the packaging alone made it feel twice the price. She adored it.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet, elegant, and genuinely comfortable. The Amber Lace earrings are my new go-to for everything.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-1-n4',
    titleId: 'reel-title-1',
  },
  {
    id: 'r2',
    caption: 'The ear cuff that needs no piercing',
    imgId: 'reel-2-o5',
    titleId: 'reel-title-2',
  },
  {
    id: 'r3',
    caption: 'Flora Nectar, layered',
    imgId: 'reel-3-p6',
    titleId: 'reel-title-3',
  },
  {
    id: 'r4',
    caption: 'Filigree that catches the light',
    imgId: 'reel-4-q7',
    titleId: 'reel-title-4',
  },
  {
    id: 'r5',
    caption: 'The everyday gold dome',
    imgId: 'reel-5-r8',
    titleId: 'reel-title-5',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
