// Local fallback catalog — mirrors the seeded "Products" table.
// Images are resolved at runtime by the strk-img system via each
// product's `imageQuery` (warm gold jewelry on dark/neutral backgrounds).
export const PRODUCTS = [
  {
    id: 2956,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'earrings',
    price: 42,
    description:
      'A sculptural gold ear cuff traced with a single line of hand-set crystals. No piercing required — slip it on and let it catch the light.',
    materials:
      '18K gold plated over recycled brass. Cubic zirconia accents. Hypoallergenic, nickel-free. Wipe gently with a soft cloth; avoid water and perfume.',
    rating: 4.9,
    reviews: 214,
    bestseller: true,
    variants: ['gold', 'silver'],
    imageQuery:
      'gold ear cuff with crystal accent on dark elegant background, macro jewelry photography',
  },
  {
    id: 2957,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'necklaces',
    price: 68,
    description:
      'A garden captured in gold — delicate floral stations set with multicolor crystals on a fine cable chain. Layers beautifully or stands alone.',
    materials:
      '18K gold plated over recycled brass. Multicolor cubic zirconia. Hypoallergenic, nickel-free. Store in the pouch provided; avoid water and perfume.',
    rating: 4.8,
    reviews: 167,
    bestseller: true,
    variants: ['gold'],
    imageQuery:
      'multicolor floral crystal gold necklace on neutral linen, editorial jewelry photography',
  },
  {
    id: 2958,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'huggies',
    price: 38,
    description:
      "Our signature chunky dome huggies — polished to a mirror finish and light enough to forget you're wearing them. The everyday essential.",
    materials:
      '18K gold plated over recycled brass. Hypoallergenic, nickel-free posts. Wipe gently with a soft cloth; avoid water and perfume.',
    rating: 4.9,
    reviews: 342,
    bestseller: true,
    variants: ['gold', 'silver'],
    imageQuery:
      'chunky gold dome huggie earrings macro on dark warm background, luxury jewelry photography',
  },
  {
    id: 2959,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'earrings',
    price: 54,
    description:
      'Textured filigree drops that move like lace in candlelight. Hand-finished with a warm brushed glow for evenings that matter.',
    materials:
      '18K gold plated over recycled brass. Hypoallergenic, nickel-free hooks. Store flat; avoid water and perfume.',
    rating: 4.7,
    reviews: 98,
    bestseller: true,
    variants: ['gold'],
    imageQuery:
      'textured gold filigree drop earrings on dark silk, elegant editorial jewelry photography',
  },
  {
    id: 2960,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'sets',
    price: 95,
    description:
      "A gift-boxed pairing of our heirloom huggies and a matching pendant necklace — the set she'll keep forever, ready to give.",
    materials:
      '18K gold plated over recycled brass. Hypoallergenic, nickel-free. Presented in the Velmora signature gift box with care card.',
    rating: 5,
    reviews: 76,
    bestseller: true,
    variants: ['gold'],
    imageQuery:
      'gold earring and necklace gift set in elegant jewelry box, luxury product photography',
  },
]

export const CATEGORY_LABELS = {
  earrings: 'Earrings',
  necklaces: 'Necklaces',
  huggies: 'Huggies',
  sets: 'Gift Sets',
}
