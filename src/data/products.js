// Seed product catalogue for Velmora Fine Jewelry.
// Image IDs are unique per slot and consumed by the strk-img stock image system.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'earring',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'gold',
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plating over sterling silver, it catches the light from every angle. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free and tarnish-resistant. Crystal accent set by hand.',
    care: 'Avoid contact with perfumes and water. Store in the provided pouch. Polish gently with a soft cloth.',
    badges: ['Bestseller'],
    imgId: 'p-vivid-aura-7f2a',
    imgIdAlt: 'p-vivid-aura-alt-3b9c',
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 204,
    tone: 'gold',
    shortDescription:
      'A multicolor floral crystal necklace that blooms along the collarbone — a wearable garden of light.',
    description:
      'Majestic Flora Nectar suspends a cascade of hand-set crystals in soft floral clusters along a delicate gold chain. Each petal is angled to catch the light, creating a quiet shimmer that moves with you. The adjustable clasp lets it sit perfectly at the neckline.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia crystals. Lobster clasp with 3cm extender.',
    care: 'Keep dry and away from cosmetics. Store flat in the gift box. Clean with a microfibre cloth.',
    badges: ['Bestseller', 'New'],
    imgId: 'p-majestic-flora-2d8e',
    imgIdAlt: 'p-majestic-flora-alt-9a1f',
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'gold',
    shortDescription:
      'Chunky gold dome huggie earrings with a polished, mirror-bright finish for everyday wear.',
    description:
      'The Golden Sphere huggies reimagine the classic hoop as a smooth, sculptural dome. Their substantial presence reads as fine jewelry, while the hinged closure keeps them comfortable enough to sleep in. Sold as a pair.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure.',
    care: 'Wipe clean after each wear. Avoid water and sweat. Store in a dry pouch.',
    badges: ['Bestseller'],
    imgId: 'p-golden-sphere-4c1b',
    imgIdAlt: 'p-golden-sphere-alt-6e7d',
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 89,
    tone: 'gold',
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern that floats at the jawline.',
    description:
      'Amber Lace is inspired by antique lacework, reimagined in warm gold filigree. The openwork drops are featherlight, swaying gently with movement. A romantic accent that transitions from day to evening with ease.',
    materials:
      '18K gold plating over brass. Hand-textured filigree. Lever-back closure for security.',
    care: 'Handle with care to preserve the filigree detail. Store separately to avoid tangling.',
    badges: [],
    imgId: 'p-amber-lace-8d3a',
    imgIdAlt: 'p-amber-lace-alt-1f5b',
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 47,
    tone: 'gold',
    shortDescription:
      'A gift-boxed earring and necklace set — a coordinated heirloom moment, ready to give.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Designed to be worn together or apart, it is the definitive gifting piece for milestones and anniversaries.',
    materials:
      '18K gold plating over 925 sterling silver. Cubic zirconia accents. Includes gift box and polishing cloth.',
    care: 'Store each piece in its compartment. Avoid moisture. Polish with the included cloth.',
    badges: ['Gift Ready'],
    imgId: 'p-royal-heirloom-5b2c',
    imgIdAlt: 'p-royal-heirloom-alt-7a9e',
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Statement drops, cuffs and everyday studs.',
    imgId: 'cat-earrings-3f1d',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Delicate chains and crystal pendants.',
    imgId: 'cat-necklaces-9c4e',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    description: 'Polished hoops that hug the ear all day.',
    imgId: 'cat-huggies-2b7f',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is unreal — it looks like a piece three times the price. I wear my huggies every single day.',
  },
  {
    id: 't2',
    name: 'Sofia M.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the box alone made her cry. Beautiful, weighty, and so elegant.',
  },
  {
    id: 't3',
    name: 'Priya K.',
    rating: 5,
    text: 'I have sensitive ears and these are the first earrings I can sleep in. No irritation, no tarnish after months.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-huggies-1a2b',
    titleId: 'reel-huggies-title',
  },
  {
    id: 'r2',
    caption: 'The Vivid Aura cuff, up close',
    imgId: 'reel-cuff-3c4d',
    titleId: 'reel-cuff-title',
  },
  {
    id: 'r3',
    caption: 'Flora Nectar catching the light',
    imgId: 'reel-flora-5e6f',
    titleId: 'reel-flora-title',
  },
  {
    id: 'r4',
    caption: 'Amber Lace at the jawline',
    imgId: 'reel-lace-7g8h',
    titleId: 'reel-lace-title',
  },
  {
    id: 'r5',
    caption: 'The Heirloom set, unboxed',
    imgId: 'reel-heirloom-9i0j',
    titleId: 'reel-heirloom-title',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSame = a.type === current.type ? 1 : 0
      const bSame = b.type === current.type ? 1 : 0
      return bSame - aSame
    })
    .slice(0, limit)
}
