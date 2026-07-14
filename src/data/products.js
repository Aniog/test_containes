export const placeholderSvg =
  'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22/%3E'

export const products = [
  {
    id: 'vivid-aura',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    subcategory: 'Ear cuff',
    material: '18K gold plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    description: 'A sculptural gold ear cuff finished with a single light-catching crystal accent.',
    detail:
      'Designed for effortless stacking, this no-piercing ear cuff brings a polished glint to everyday dressing and evening plans alike.',
    care: 'Keep dry, store in the included pouch, and polish gently with a soft cloth after wear.',
    variants: ['Gold', 'Silver'],
    imageSeed: 'gold ear cuff with crystal accent on model ear warm editorial jewelry',
  },
  {
    id: 'majestic-flora',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    subcategory: 'Pendant necklace',
    material: '18K gold plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    badge: 'Gift Pick',
    description: 'A delicate gold necklace with multicolor floral crystals arranged like tiny nectar drops.',
    detail:
      'A romantic pendant necklace that adds quiet color to a silk camisole, white shirt, or soft knit.',
    care: 'Avoid perfume and lotions. Fasten the clasp before storing to protect the chain.',
    variants: ['Gold', 'Silver'],
    imageSeed: 'multicolor floral crystal necklace gold chain warm neutral still life',
  },
  {
    id: 'golden-sphere',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    subcategory: 'Huggie earrings',
    material: '18K gold plated',
    price: 38,
    rating: 4.9,
    reviews: 154,
    badge: 'Most Loved',
    description: 'Chunky gold dome huggies with a rounded silhouette and a comfortable hinged closure.',
    detail:
      'Compact, gleaming, and easy to wear from morning coffee to late dinner reservations.',
    care: 'Wipe clean after wear and store separately to preserve the high-polish finish.',
    variants: ['Gold', 'Silver'],
    imageSeed: 'chunky gold dome huggie earrings close up warm shadow editorial',
  },
  {
    id: 'amber-lace',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    subcategory: 'Drop earrings',
    material: '18K gold plated',
    price: 54,
    rating: 4.7,
    reviews: 83,
    badge: 'New',
    description: 'Textured gold filigree drop earrings with lace-like movement and a soft amber glow.',
    detail:
      'An elegant drop style made for gifting moments, wedding weekends, and dressed-up everyday rituals.',
    care: 'Remove before swimming, bathing, and sleep. Store flat in a dry place.',
    variants: ['Gold', 'Silver'],
    imageSeed: 'textured gold filigree drop earrings warm amber editorial jewelry',
  },
  {
    id: 'royal-heirloom',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    subcategory: 'Earring and necklace set',
    material: '18K gold plated',
    price: 95,
    rating: 5,
    reviews: 67,
    badge: 'Boxed Set',
    description: 'A gift-boxed earring and necklace pairing with heirloom-inspired golden details.',
    detail:
      'Made for milestones, thank-yous, birthdays, and the self-gift that marks a new chapter.',
    care: 'Store each piece in its compartment and keep the gift box away from humidity.',
    variants: ['Gold'],
    imageSeed: 'gift boxed gold earring and necklace set luxury warm cream background',
  },
]

export const categories = [
  {
    name: 'Earrings',
    href: '/shop?category=Earrings',
    description: 'Sculptural drops, cuffs, and polished everyday pairs.',
  },
  {
    name: 'Necklaces',
    href: '/shop?category=Necklaces',
    description: 'Delicate chains and light-catching pendants for layering.',
  },
  {
    name: 'Huggies',
    href: '/shop?category=Huggies',
    description: 'Close-fitting silhouettes with a luminous gold finish.',
  },
]

export const testimonials = [
  {
    quote: 'The finish looks far more expensive than it is. I wear my huggies every single day.',
    name: 'Maya R.',
  },
  {
    quote: 'Beautiful packaging, quick shipping, and the necklace has the prettiest subtle sparkle.',
    name: 'Elena K.',
  },
  {
    quote: 'Finally jewelry that feels special but not too precious for real life.',
    name: 'Simone A.',
  },
]

export const ugcCards = [
  { id: 'morning-stack', caption: 'Morning gold stack' },
  { id: 'soft-portrait', caption: 'Soft portrait shine' },
  { id: 'date-night', caption: 'Date-night huggies' },
  { id: 'gift-unboxing', caption: 'A little unboxing ritual' },
  { id: 'necklace-layer', caption: 'Layered with silk' },
]

export const formatPrice = (price) => `$${price}`

export const findProductBySlug = (slug) =>
  products.find((product) => product.slug === slug) || products[0]
