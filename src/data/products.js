// Seed product data for Velmora Fine Jewelry
// Image ids are stable so the stock-image system can resolve them.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    description:
      'A sculptural gold ear cuff set with a single clear crystal — no piercing required. Designed to layer along the cartilage for an effortless, modern finish.',
    details: [
      '18K gold plating over brass',
      'Hypoallergenic, nickel-free',
      'No piercing required',
      'Sold as a single piece',
    ],
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch to preserve the finish.',
    variants: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-a2',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 204,
    badge: 'Bestseller',
    description:
      'A delicate floral pendant scattered with multicolor crystals, suspended from a fine gold chain. A quiet statement piece for everyday wear.',
    details: [
      '18K gold plating over brass',
      'Multicolor cubic zirconia crystals',
      'Adjustable 40–45cm chain',
      'Lobster clasp closure',
    ],
    care: 'Keep dry and away from perfumes. Clean gently with a soft cloth.',
    variants: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-a2',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    badge: 'Bestseller',
    description:
      'Chunky polished dome huggies that hug the lobe close. Lightweight, comfortable, and made to be worn every day.',
    details: [
      '18K gold plating over brass',
      'Hypoallergenic, nickel-free',
      'Hinged snap closure',
      'Sold as a pair',
    ],
    care: 'Wipe clean after wear. Store separately to avoid scratching.',
    variants: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-a2',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 97,
    badge: 'New',
    description:
      'Intricately textured filigree drops that catch the light with every movement. An heirloom-inspired silhouette with a modern weight.',
    details: [
      '18K gold plating over brass',
      'Hand-finished filigree texture',
      'Lightweight drop, 4cm length',
      'Lever-back closure',
    ],
    care: 'Handle with care. Avoid water and store flat in the pouch.',
    variants: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-a2',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    badge: 'Gift Set',
    description:
      'A coordinated earring and necklace set, presented in a signature Velmora gift box. The considered gift for milestones and moments worth marking.',
    details: [
      '18K gold plating over brass',
      'Matching pendant + stud set',
      'Signature gift box included',
      'Hypoallergenic, nickel-free',
    ],
    care: 'Store in the gift box. Clean with a soft, dry cloth.',
    variants: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-a2',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sculptural drops, cuffs and statement studs.',
    imgId: 'cat-earrings-b1',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Fine chains and pendant-led layers.',
    imgId: 'cat-necklaces-b1',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished domes that hug the lobe close.',
    imgId: 'cat-huggies-b1',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, worn daily',
    imgId: 'reel-1-c1',
  },
  {
    id: 'reel-2',
    caption: 'Layered gold, soft light',
    imgId: 'reel-2-c1',
  },
  {
    id: 'reel-3',
    caption: 'The Vivid Aura cuff, up close',
    imgId: 'reel-3-c1',
  },
  {
    id: 'reel-4',
    caption: 'Flora Nectar on a bare collarbone',
    imgId: 'reel-4-c1',
  },
  {
    id: 'reel-5',
    caption: 'Amber Lace catching the sun',
    imgId: 'reel-5-c1',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena M.',
    rating: 5,
    text: 'The quality is unreal for the price. I wear the huggies every single day and they haven’t tarnished once.',
  },
  {
    id: 't2',
    name: 'Priya S.',
    rating: 5,
    text: 'Bought the Flora Nectar as a gift and it arrived in the most beautiful packaging. Felt truly special.',
  },
  {
    id: 't3',
    name: 'Camille R.',
    rating: 5,
    text: 'Quiet, elegant, and so well made. Velmora is now my go-to for demi-fine pieces.',
  },
]

export const trustBar = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
