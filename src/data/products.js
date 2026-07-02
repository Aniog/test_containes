const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    material: 'gold',
    badge: 'Bestseller',
    description:
      'A sculptural ear cuff with a delicate crystal accent that catches the light with every turn. Designed to be worn solo or stacked for a curated ear look.',
    details:
      '18K gold-plated brass with AAA-grade crystal. Water-resistant. Nickel-free and hypoallergenic.',
    care: 'Store in the provided Velmora pouch. Avoid contact with perfumes and lotions. Clean gently with a soft cloth.',
    images: [
      { bg: 'from-amber-800 via-amber-700 to-amber-900', accent: 'amber' },
      { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: 'stone' },
    ],
    colors: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 87,
    category: 'necklaces',
    material: 'gold',
    badge: null,
    description:
      'A vibrant floral necklace featuring multicolor crystal petals arranged in an artful cluster. Suspended on a fine 18K gold-plated chain.',
    details:
      '18K gold-plated brass with hand-set multicolor crystals. Adjustable 16-18" chain. Lobster clasp.',
    care: 'Store flat in the provided Velmora pouch. Avoid moisture. Clean with a soft, dry cloth.',
    images: [
      { bg: 'from-rose-800 via-rose-700 to-amber-900', accent: 'rose' },
      { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: 'stone' },
    ],
    colors: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    category: 'earrings',
    material: 'gold',
    badge: 'Popular',
    description:
      'Chunky dome huggies with a high-polish finish. The perfect everyday statement — substantial enough to wear alone, sleek enough to stack.',
    details:
      '18K gold-plated brass. 12mm diameter. Snap-back closure. Hypoallergenic.',
    care: 'Wipe clean with a soft cloth. Store in a dry place. Remove before swimming or showering.',
    images: [
      { bg: 'from-yellow-700 via-amber-600 to-yellow-800', accent: 'gold' },
      { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: 'stone' },
    ],
    colors: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 56,
    category: 'earrings',
    material: 'gold',
    badge: null,
    description:
      'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight with a refined shimmer that transitions effortlessly from day to evening.',
    details:
      '18K gold-plated brass with textured filigree detailing. 1.5" drop length. French wire back. Nickel-free.',
    care: 'Handle with care — the filigree is delicate. Store in your Velmora pouch. Avoid contact with water.',
    images: [
      { bg: 'from-amber-700 via-amber-600 to-amber-900', accent: 'amber' },
      { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: 'stone' },
    ],
    colors: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    category: 'necklaces',
    material: 'gold',
    badge: 'Gift Set',
    description:
      'A gift-boxed matching earring and necklace set designed for life\'s most memorable occasions. Presented in our signature Velmora box with ribbon.',
    details:
      '18K gold-plated brass earrings (12mm) and necklace (16-18" adjustable). Gift box included. Hypoallergenic.',
    care: 'Store each piece separately in the provided velvet-lined box. Clean with a soft cloth.',
    images: [
      { bg: 'from-amber-800 via-yellow-700 to-amber-900', accent: 'gold' },
      { bg: 'from-stone-800 via-stone-700 to-stone-900', accent: 'stone' },
    ],
    colors: ['Gold', 'Silver'],
    inStock: true,
  },
]

export const getProduct = (id) => products.find((p) => p.id === id) || null

export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.id !== product.id).slice(0, limit)

export default products