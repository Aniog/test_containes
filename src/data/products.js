// Seed catalog. Slugs drive URLs. Art is an inline SVG component name
// rendered by <ProductImage /> so product cards stay fast and consistent.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets & Gifts' },
]

export const MATERIALS = [
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal' },
]

export const PRODUCTS = [
  {
    id: 'p-001',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Crystal accent ear cuff',
    category: 'earrings',
    material: '18k-gold',
    price: 42,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 312,
    art: 'earCuff',
    colors: ['gold'],
    description:
      'A whisper of light at the lobe. The Vivid Aura ear cuff is sculpted in 18K gold-plated brass with a hand-set crystal that catches the sun at every angle. No piercing required — it slides on and stays put, from morning espresso to late dinners.',
    details: [
      '18K gold-plated brass, hand-finished',
      'Hand-set cubic crystal accent',
      'No piercing required; gentle silicone-grip fit',
      'Lightweight, 3.4 g per cuff',
    ],
    care: [
      'Avoid contact with perfume, lotions and chlorine',
      'Remove before showering or swimming',
      'Store in the velvet pouch provided',
      'Wipe gently with the included polishing cloth',
    ],
  },
  {
    id: 'p-002',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    category: 'necklaces',
    material: 'crystal',
    price: 68,
    badge: 'New',
    rating: 4.8,
    reviewCount: 184,
    art: 'floralNecklace',
    colors: ['gold', 'silver'],
    description:
      'A small garden around the collarbone. Hand-arranged crystals in soft champagne, blush and peridot tones sit on a delicate 18K gold-plated chain. Adjustable to 16 or 18 inches — wear it solo, or layered with the Royal Heirloom chain.',
    details: [
      '18K gold-plated brass chain, 16–18 in adjustable',
      'Hand-set multicolor crystals',
      'Lobster-claw clasp with 2 in extender',
      'Nickel-free, hypoallergenic',
    ],
    care: [
      'Last on, first off — after fragrance and skin care',
      'Wipe with a soft dry cloth after wear',
      'Store flat to protect the stone setting',
    ],
  },
  {
    id: 'p-003',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggies',
    category: 'huggies',
    material: '18k-gold',
    price: 38,
    badge: 'Bestseller',
    rating: 4.9,
    reviewCount: 526,
    art: 'sphereHuggies',
    colors: ['gold'],
    description:
      'The everyday hoop, elevated. A clean architectural dome in a substantial 14 mm silhouette — substantial without weight, polished to a mirror finish. Hinged for a secure, easy fit you can sleep in.',
    details: [
      '18K gold-plated brass with mirror polish',
      '14 mm outer diameter, 4 mm tube',
      'Hinged click-closure for a secure fit',
      'Hypoallergenic, nickel-free post',
    ],
    care: [
      'Remove before swimming or exercising',
      'Buff with the polishing cloth to maintain shine',
      'Store in the divided pouch to prevent tangling',
    ],
  },
  {
    id: 'p-004',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drops',
    category: 'earrings',
    material: '18k-gold',
    price: 54,
    rating: 4.8,
    reviewCount: 142,
    art: 'filigreeDrop',
    colors: ['gold'],
    description:
      'Old-world filigree, made modern. Each drop is cast from a hand-drawn lace pattern, then polished by hand so the gold catches every flicker of light. Light enough for daytime, dramatic enough for evening.',
    details: [
      '18K gold-plated brass, 1.6 in drop',
      'Hand-cast filigree, hand-polished',
      'Secure butterfly back',
      'Lightweight 4.2 g per pair',
    ],
    care: [
      'Avoid sprays and lotions directly on the metal',
      'Store flat to protect the filigree pattern',
      'Wipe with a soft, lint-free cloth',
    ],
  },
  {
    id: 'p-005',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring + necklace set',
    category: 'sets',
    material: '18k-gold',
    price: 95,
    badge: 'Gift edit',
    rating: 5.0,
    reviewCount: 98,
    art: 'giftSet',
    colors: ['gold'],
    description:
      'A duo designed to live together. The Royal Heirloom Set pairs our most-loved huggies with a delicate chain necklace, presented in a keepsake box with a ribbon and a hand-written card. Made to be gifted — and to be kept.',
    details: [
      '18K gold-plated brass set',
      'Sphere huggies (14 mm) + adjustable 16–18 in chain',
      'Velvet-lined keepsake gift box',
      'Includes hand-written card on request',
    ],
    care: [
      'Store in the original box to keep pieces together',
      'Wipe gently with the included polishing cloth',
      'Avoid contact with perfumes and lotions',
    ],
  },
  {
    id: 'p-006',
    slug: 'opal-pearl-huggies',
    name: 'Opal Pearl Huggies',
    subtitle: 'Pavé-set huggies with freshwater pearl',
    category: 'huggies',
    material: 'crystal',
    price: 48,
    rating: 4.7,
    reviewCount: 211,
    art: 'pearlHuggies',
    colors: ['gold', 'silver'],
    description:
      'A tiny pearl on a clean gold hoop. The Opal Pearl huggies are set with a single freshwater pearl and pavé crystals along the band — small detail, big finish.',
    details: [
      '18K gold-plated brass, 12 mm',
      'Freshwater pearl, pavé crystal band',
      'Hinged click closure',
    ],
    care: [
      'Keep dry — remove before showering',
      'Wipe pearl gently with a soft cloth',
    ],
  },
  {
    id: 'p-007',
    slug: 'solstice-pendant',
    name: 'Solstice Pendant',
    subtitle: 'Half-moon pendant necklace',
    category: 'necklaces',
    material: '18k-gold',
    price: 58,
    rating: 4.8,
    reviewCount: 167,
    art: 'moonPendant',
    colors: ['gold', 'silver'],
    description:
      'A half-moon pendant on a paperclip chain. Substantial enough to be the only thing you wear, refined enough to layer with everything else.',
    details: [
      '18K gold-plated brass, 18 in chain',
      'Half-moon pendant, 1.1 in',
      'Lobster-claw clasp',
    ],
    care: [
      'Store flat to keep the chain smooth',
      'Polish with a soft dry cloth',
    ],
  },
  {
    id: 'p-008',
    slug: 'crescent-hoops',
    name: 'Crescent Hoops',
    subtitle: 'Sculpted crescent hoops',
    category: 'earrings',
    material: '18k-gold',
    price: 46,
    rating: 4.7,
    reviewCount: 89,
    art: 'crescentHoops',
    colors: ['gold'],
    description:
      'A soft crescent, hand-formed. The Crescent Hoops are tapered and sculptural — a quiet statement for everyday.',
    details: [
      '18K gold-plated brass, 1.4 in drop',
      'Hand-formed tapered shape',
      'Secure post and butterfly back',
    ],
    care: [
      'Avoid bending the wire — handle with care',
      'Wipe with the polishing cloth included',
    ],
  },
]

export const getProductBySlug = (slug) =>
  PRODUCTS.find((p) => p.slug === slug)

export const getRelatedProducts = (product, limit = 4) => {
  if (!product) return []
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  )
    .slice(0, limit)
}

export const TESTIMONIALS = [
  {
    name: 'Amelia R.',
    rating: 5,
    text:
      'I have worn the Golden Sphere Huggies every single day for six months. They still look brand new. The weight, the polish — I get asked about them constantly.',
    product: 'Golden Sphere Huggies',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text:
      'Bought the Royal Heirloom Set for my sister. The packaging alone made me cry. The jewelry is the kind of thing you keep forever.',
    product: 'Royal Heirloom Set',
  },
  {
    name: 'Naomi K.',
    rating: 5,
    text:
      'I am so picky about earrings and these do not irritate my ears at all. The Vivid Aura cuff is the first thing I put on in the morning.',
    product: 'Vivid Aura Jewels',
  },
]

export const UGC_REELS = [
  {
    id: 'reel-1',
    handle: '@velmora',
    caption: 'Golden hour',
    art: 'reelEar',
  },
  {
    id: 'reel-2',
    handle: '@velmora',
    caption: 'Layered',
    art: 'reelNeck',
  },
  {
    id: 'reel-3',
    handle: '@velmora',
    caption: 'Set for the evening',
    art: 'reelSet',
  },
  {
    id: 'reel-4',
    handle: '@velmora',
    caption: 'Cuffs, no piercing',
    art: 'reelCuff',
  },
  {
    id: 'reel-5',
    handle: '@velmora',
    caption: 'Pearl on gold',
    art: 'reelPearl',
  },
  {
    id: 'reel-6',
    handle: '@velmora',
    caption: 'Every day, elevated',
    art: 'reelDaily',
  },
]
