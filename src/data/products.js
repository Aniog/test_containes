// Seed product data for Velmora Fine Jewelry
// Images are resolved at runtime via the strk-img tagging system.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to be worn alone or stacked along the curve of the ear for an effortless, modern finish.',
    details: [
      '18K gold plating over brass',
      'Hand-set crystal accent',
      'Hypoallergenic, nickel-free',
      'Sold as a single piece',
    ],
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch to preserve the finish.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-b2',
    galleryIds: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 204,
    description:
      'A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A quiet statement piece that catches the light with every movement.',
    details: [
      '18K gold plating over brass',
      'Multicolor hand-set crystals',
      'Adjustable 40–45cm chain',
      'Lobster clasp closure',
    ],
    care: 'Keep dry and away from perfumes. Clean gently with a soft cloth. Store flat in the provided pouch.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-b2',
    galleryIds: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    description:
      'Chunky gold dome huggies with a smooth, polished finish. The everyday essential that elevates any look from desk to dinner.',
    details: [
      '18K gold plating over brass',
      'Polished dome silhouette',
      'Hinged huggie closure',
      'Sold as a pair',
    ],
    care: 'Wipe clean with a soft cloth after each wear. Avoid water and chemicals to maintain the shine.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-b2',
    galleryIds: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 97,
    description:
      'Intricately textured gold filigree drops with a warm, lace-like pattern. Lightweight and graceful, they sway gently with movement.',
    details: [
      '18K gold plating over brass',
      'Textured filigree detail',
      'Lightweight drop silhouette',
      'Sold as a pair',
    ],
    care: 'Handle with care to protect the filigree. Store separately to avoid tangling.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-b2',
    galleryIds: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    description:
      'A coordinated earring and necklace set, presented in a signature Velmora gift box. The perfect gifting moment for someone treasured — or for yourself.',
    details: [
      '18K gold plating over brass',
      'Coordinated earrings + necklace',
      'Signature Velmora gift box',
      'Hypoallergenic, nickel-free',
    ],
    care: 'Store each piece in its pouch. Avoid water, perfume and lotion to preserve the finish.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-b2',
    galleryIds: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3'],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sculptural drops, cuffs and statement studs.',
    imgId: 'cat-earrings-a1',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Fine chains and pendants for everyday wear.',
    imgId: 'cat-necklaces-a1',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished dome huggies in warm gold.',
    imgId: 'cat-huggies-a1',
  },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'The quality is unreal for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the packaging alone made it feel so special. She absolutely loved it.',
  },
  {
    name: 'Priya R.',
    rating: 5,
    text: 'Beautiful, delicate and genuinely hypoallergenic. Finally gold jewelry my sensitive ears can tolerate.',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-1-a1',
  },
  {
    id: 'reel-2',
    caption: 'The Vivid Aura cuff, up close',
    imgId: 'reel-2-a1',
  },
  {
    id: 'reel-3',
    caption: 'Flora Nectar, layered',
    imgId: 'reel-3-a1',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace, in motion',
    imgId: 'reel-4-a1',
  },
  {
    id: 'reel-5',
    caption: 'The Heirloom set, unboxed',
    imgId: 'reel-5-a1',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
