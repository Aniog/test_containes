// Central product catalog for Velmora Fine Jewelry.
// Each product has stable ids used for image references and routing.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plating over sterling silver, it catches the light with a single hand-set crystal. Wear it solo for a quiet statement, or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in the provided pouch. Polish gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'vivid-aura-1', titleId: 'vivid-aura-title', descId: 'vivid-aura-desc' },
      { imgId: 'vivid-aura-2', titleId: 'vivid-aura-title', descId: 'vivid-aura-desc' },
    ],
    bestseller: true,
    featured: true,
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 204,
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a garden in miniature, made to be treasured.',
    description:
      'Majestic Flora Nectar gathers hand-set crystals into a blooming floral motif, each petal catching a different hue. The fine gold-plated chain is adjustable, resting softly against the collarbone. A signature piece for gifting and self-purchase alike.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia crystals. Lobster clasp with 5cm extender.',
    care: 'Keep dry and away from cosmetics. Store flat in the provided box to protect the crystals. Clean with a soft, dry cloth.',
    variants: ['Gold'],
    images: [
      { imgId: 'majestic-flora-1', titleId: 'majestic-flora-title', descId: 'majestic-flora-desc' },
      { imgId: 'majestic-flora-2', titleId: 'majestic-flora-title', descId: 'majestic-flora-desc' },
    ],
    bestseller: true,
    featured: true,
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDescription:
      'Chunky gold dome huggies with a polished, mirror finish — the everyday hoop you will never take off.',
    description:
      'Golden Sphere Huggies reimagine the classic hoop as a smooth, chunky dome that hugs the lobe. The hinged closure clicks securely into place, comfortable enough to sleep in. Sold as a pair.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.',
    care: 'Resilient for daily wear. Wipe clean with a soft cloth. Avoid prolonged exposure to water.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'golden-sphere-1', titleId: 'golden-sphere-title', descId: 'golden-sphere-desc' },
      { imgId: 'golden-sphere-2', titleId: 'golden-sphere-title', descId: 'golden-sphere-desc' },
    ],
    bestseller: true,
    featured: true,
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern weight.',
    description:
      'Amber Lace is drawn by hand and rendered in textured gold filigree, each openwork panel catching shadow and light. The drop length is designed to frame the jawline without overwhelming. A quiet heirloom for the modern wearer.',
    materials:
      '18K gold plating over brass base. Textured filigree openwork. Lever-back closure.',
    care: 'Handle with care to preserve the filigree detail. Store in the provided box. Polish with a soft cloth.',
    variants: ['Gold'],
    images: [
      { imgId: 'amber-lace-1', titleId: 'amber-lace-title', descId: 'amber-lace-desc' },
      { imgId: 'amber-lace-2', titleId: 'amber-lace-title', descId: 'amber-lace-desc' },
    ],
    bestseller: true,
    featured: true,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'Gift Set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      'A gift-boxed earring and necklace set, coordinated in warm gold — the complete gesture, ready to give.',
    description:
      'The Royal Heirloom Set pairs a delicate gold pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated in tone and proportion, it is the complete gesture for milestones, anniversaries, and self-celebration.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia accents. Includes signature gift box.',
    care: 'Store each piece separately in the gift box to prevent tangling. Keep dry and polish with a soft cloth.',
    variants: ['Gold'],
    images: [
      { imgId: 'royal-heirloom-1', titleId: 'royal-heirloom-title', descId: 'royal-heirloom-desc' },
      { imgId: 'royal-heirloom-2', titleId: 'royal-heirloom-title', descId: 'royal-heirloom-desc' },
    ],
    bestseller: true,
    featured: true,
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops, and statement hoops.',
    imgId: 'cat-earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and layered essentials.',
    imgId: 'cat-necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished everyday huggie hoops.',
    imgId: 'cat-huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is unreal — it looks like fine jewelry, not costume. I have not taken the huggies off in weeks.',
  },
  {
    id: 't2',
    name: 'Sofia M.',
    rating: 5,
    text: 'Bought the Flora Nectar as a gift and kept it for myself. The packaging alone feels like a luxury experience.',
  },
  {
    id: 't3',
    name: 'Priya K.',
    rating: 5,
    text: 'Finally hypoallergenic jewelry that does not irritate my ears. Beautiful, wearable, and genuinely affordable.',
  },
]

export const reels = [
  {
    id: 'r1',
    imgId: 'reel-1',
    titleId: 'reel-1-title',
    caption: 'Stacked huggies, golden hour',
    title: 'Golden Sphere Huggies',
  },
  {
    id: 'r2',
    imgId: 'reel-2',
    titleId: 'reel-2-title',
    caption: 'The everyday ear cuff',
    title: 'Vivid Aura Jewels',
  },
  {
    id: 'r3',
    imgId: 'reel-3',
    titleId: 'reel-3-title',
    caption: 'Flora, caught in light',
    title: 'Majestic Flora Nectar',
  },
  {
    id: 'r4',
    imgId: 'reel-4',
    titleId: 'reel-4-title',
    caption: 'Filigree in motion',
    title: 'Amber Lace Earrings',
  },
  {
    id: 'r5',
    imgId: 'reel-5',
    titleId: 'reel-5-title',
    caption: 'The complete gesture',
    title: 'Royal Heirloom Set',
  },
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)

export const getRelatedProducts = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit)

export const formatPrice = (price) => `$${price.toFixed(2)}`
