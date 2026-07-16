// Seed product data for Velmora Fine Jewelry
// Images are populated at runtime via the strk image system (data-strk-img).

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    subcategory: 'Ear Cuff',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    description:
      'A sculptural gold ear cuff crowned with a single clear crystal. Designed to climb the curve of the ear with quiet brilliance — no piercing required.',
    details:
      'Hand-finished 18K gold plating over a durable brass core. Set with a faceted cubic zirconia that catches warm light. Lightweight and hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.',
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-alt-a1',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    subcategory: 'Pendant',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 203,
    description:
      'A garden in bloom, suspended at the collarbone. Multicolor crystal petals form a delicate floral pendant on a fine gold chain.',
    details:
      '18K gold plating with a tarnish-resistant finish. Hand-set multicolor cubic zirconia. Adjustable 40–45cm chain with lobster clasp.',
    care: 'Keep dry and away from perfumes. Store flat in the gift box. Clean with a microfiber cloth.',
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'p-majestic-flora-a2',
    imgIdAlt: 'p-majestic-flora-alt-a2',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    subcategory: 'Huggie',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    description:
      'Bold yet refined dome huggies that hug the lobe in polished gold. An everyday statement that pairs with everything.',
    details:
      'Chunky polished dome in 18K gold plating. Hinged huggie closure for a secure, comfortable fit. Sold as a pair. Hypoallergenic.',
    care: 'Wipe clean after each wear. Avoid water and chemicals. Store in a dry place.',
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'p-golden-sphere-a3',
    imgIdAlt: 'p-golden-sphere-alt-a3',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    subcategory: 'Drop',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 91,
    description:
      'Intricate filigree drops that move like lace. Warm gold texture catches every flicker of light with an heirloom grace.',
    details:
      'Textured filigree in 18K gold plating. Lightweight drop silhouette with shepherd hook. Hypoallergenic posts.',
    care: 'Handle with care to preserve the filigree. Keep dry and store separately to avoid tangling.',
    variants: ['Gold', 'Silver'],
    badge: 'New',
    imgId: 'p-amber-lace-a4',
    imgIdAlt: 'p-amber-lace-alt-a4',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Necklaces',
    subcategory: 'Set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    description:
      'A coordinated pairing of earrings and necklace, presented in a signature gift box. The effortless answer to a complete look — or a treasured gift.',
    details:
      'Matching earring and necklace duo in 18K gold plating. Arrives in a velvet-lined Velmora gift box. Hypoallergenic and tarnish-resistant.',
    care: 'Store in the gift box when not worn. Avoid moisture and perfumes. Polish with a soft cloth.',
    variants: ['Gold', 'Silver'],
    badge: 'Gift Set',
    imgId: 'p-royal-heirloom-a5',
    imgIdAlt: 'p-royal-heirloom-alt-a5',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Statement drops, cuffs & everyday studs',
    imgId: 'cat-earrings-b1',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Pendants, chains & layered essentials',
    imgId: 'cat-necklaces-b2',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Polished dome huggies for the lobe',
    imgId: 'cat-huggies-b3',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
  },
]

export const testimonials = [
  {
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is unreal — it looks like fine jewelry, not costume. I get compliments every time I wear the Aura cuff.',
  },
  {
    name: 'Maya T.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift and it arrived in the most beautiful box. My sister cried. Quality far exceeds the price.',
  },
  {
    name: 'Sofia L.',
    rating: 5,
    text: 'I have sensitive ears and these are the first huggies that don\'t irritate me. Lightweight, elegant, and they stay put all day.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-1-c1',
    titleId: 'reel-title-1',
  },
  {
    id: 'r2',
    caption: 'The Aura cuff on the ear',
    imgId: 'reel-2-c2',
    titleId: 'reel-title-2',
  },
  {
    id: 'r3',
    caption: 'Flora Nectar, layered',
    imgId: 'reel-3-c3',
    titleId: 'reel-title-3',
  },
  {
    id: 'r4',
    caption: 'Amber Lace in motion',
    imgId: 'reel-4-c4',
    titleId: 'reel-title-4',
  },
  {
    id: 'r5',
    caption: 'The Heirloom set, unboxed',
    imgId: 'reel-5-c5',
    titleId: 'reel-title-5',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
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
