// Seed catalog for Velmora Fine Jewelry.
// Each product carries 1-2 image queries; the runtime strk-img plugin
// will replace the SVG placeholder with editorial gold-jewelry photography.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export const MATERIALS = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: 'gold',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    tone: 'gold',
    badge: 'New',
    shortDescription:
      'A single luminous crystal cradled in warm gold — a whisper of light against the ear.',
    description:
      'The Vivid Aura ear cuff is sculpted by hand from recycled brass and finished with a high-shine 18K gold plating. A single crystal pavé is set by hand at its heart, catching the light with every turn of the head. Wear it solo on the ear, or pair it with the Golden Sphere Huggies for a curated stack.',
    materials:
      '18K gold plated recycled brass. Cubic zirconia crystal. Hypoallergenic and nickel-free. Lead- and cadmium-free.',
    care:
      'Remove before showering, swimming, or applying lotion. Store dry in the velvet pouch provided. Wipe gently with the included polishing cloth to maintain the finish.',
    shipping:
      'Free worldwide shipping on orders over $80. 30-day returns on unworn pieces. Most orders ship within 1-2 business days from our atelier in Lisbon.',
    images: [
      { query: 'gold ear cuff with crystal accent on ear close-up', id: 'vivid-aura-1' },
      { query: 'gold crystal ear cuff product on warm cream background', id: 'vivid-aura-2' },
    ],
    textIds: {
      title: 'product-vivid-aura-title',
      desc: 'product-vivid-aura-desc',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'gold',
    price: 68,
    rating: 4.9,
    reviewCount: 218,
    tone: 'multicolor',
    badge: 'Bestseller',
    shortDescription:
      'A garden of pastel crystals suspended on a delicate gold chain — quiet opulence, worn close.',
    description:
      'Inspired by the still-life paintings of the Dutch Golden Age, the Majestic Flora Nectar is composed of nine hand-set crystals in soft peach, sage, smoke, and blush, anchored to a whisper-fine 18K gold-plated chain. It catches morning light and rests like a small garden at the collarbone.',
    materials:
      '18K gold plated brass chain. Multi-tone crystal cluster. Hypoallergenic, nickel-free, lead-free.',
    care:
      'Lay flat after wear. Avoid contact with perfume and humidity. Polish gently with the included cloth; the crystals should be wiped with a soft, dry microfiber.',
    shipping:
      'Free worldwide shipping on orders over $80. 30-day returns on unworn pieces. Each necklace arrives in our signature ribbon-tied gift box.',
    images: [
      { query: 'multicolor floral crystal necklace on warm skin', id: 'majestic-flora-1' },
      { query: 'pastel crystal cluster necklace on linen', id: 'majestic-flora-2' },
    ],
    textIds: {
      title: 'product-majestic-flora-title',
      desc: 'product-majestic-flora-desc',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    material: 'gold',
    price: 38,
    rating: 4.7,
    reviewCount: 412,
    tone: 'gold',
    badge: null,
    shortDescription:
      'Sculptural dome huggies in brushed gold — a daily signature, weightless on the ear.',
    description:
      'The Golden Sphere huggies are cast from solid brass in a chunky dome silhouette, then finished with a soft-brushed 18K gold plating. The hinge is hand-set and clicks closed with a satisfying snap. A true everyday luxury.',
    materials:
      '18K gold plated brass. Hypoallergenic post and clasp. Nickel-free, lead-free, cadmium-free.',
    care:
      'Sleep, shower, and live in them — but for longest life, remove before swimming and applying lotion. Buff with the included cloth to keep the brushed finish soft.',
    shipping:
      'Free worldwide shipping on orders over $80. 30-day returns on unworn pieces. Most orders ship within 1-2 business days.',
    images: [
      { query: 'chunky gold dome huggie hoop earrings close up', id: 'golden-sphere-1' },
      { query: 'gold huggie earrings stacked on ear model', id: 'golden-sphere-2' },
    ],
    textIds: {
      title: 'product-golden-sphere-title',
      desc: 'product-golden-sphere-desc',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'gold',
    price: 54,
    rating: 4.9,
    reviewCount: 156,
    tone: 'gold',
    badge: 'New',
    shortDescription:
      'Hand-finished gold filigree drops, light as lace and as warm as late-afternoon sun.',
    description:
      'A study in negative space. The Amber Lace earrings are cast in detailed filigree, then hand-polished to bring out the warm depth of the 18K gold plating. They move softly with the wearer, casting small shadows of light.',
    materials:
      '18K gold plated brass. Sterling silver post. Hypoallergenic, nickel-free.',
    care:
      'Store in the soft pouch provided. Avoid spraying perfume directly onto the metal. Wipe gently with the included polishing cloth.',
    shipping:
      'Free worldwide shipping on orders over $80. 30-day returns on unworn pieces. Gift-ready in our signature box.',
    images: [
      { query: 'gold filigree drop earrings lace pattern on linen', id: 'amber-lace-1' },
      { query: 'gold lace drop earrings on ear warm light', id: 'amber-lace-2' },
    ],
    textIds: {
      title: 'product-amber-lace-title',
      desc: 'product-amber-lace-desc',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'earrings',
    material: 'gold',
    price: 95,
    rating: 5.0,
    reviewCount: 89,
    tone: 'gold',
    badge: 'Gift Edit',
    shortDescription:
      'A matching earring and necklace set, ribbon-tied in our signature box — for the moments that matter.',
    description:
      'Our Royal Heirloom Set pairs a small gold disc huggie with a delicate chain necklace, designed to be worn together. Each piece is hand-finished in 18K gold plating, then nestled into our signature cream-and-gold gift box with a hand-tied satin ribbon. The most-asked-for gift of the season.',
    materials:
      '18K gold plated brass. Sterling silver posts. Hypoallergenic, nickel-free, lead-free.',
    care:
      'Remove before showering or swimming. Store in the original box between wears. Polish gently with the included cloth.',
    shipping:
      'Free worldwide shipping on orders over $80. 30-day returns on unworn pieces. Each set is gift-wrapped at no extra cost.',
    images: [
      { query: 'gold earring and necklace set in cream gift box', id: 'royal-heirloom-1' },
      { query: 'gold matching jewelry set on linen background', id: 'royal-heirloom-2' },
    ],
    textIds: {
      title: 'product-royal-heirloom-title',
      desc: 'product-royal-heirloom-desc',
    },
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null
}

export function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const sameCat = (x) => (x.category === product.category ? 0 : 1)
      return sameCat(a) - sameCat(b)
    })
    .slice(0, limit)
}

// UGC reel cards — vertical 9:16 worn-on-body moments
export const UGC_CARDS = [
  {
    id: 'ugc-1',
    caption: 'morning stack',
    handle: '@maya.k',
    imageQuery: 'woman wearing gold huggie earrings ear close up warm light',
    textId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    caption: 'collarbone gold',
    handle: '@ines.wears',
    imageQuery: 'woman wearing delicate gold necklace warm skin editorial',
    textId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    caption: 'everyday heirloom',
    handle: '@sienna',
    imageQuery: 'woman gold jewelry ear stack mirror selfie warm',
    textId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    caption: 'in the studio',
    handle: '@noor.studio',
    imageQuery: 'woman putting on gold earrings at vanity warm light',
    textId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    caption: 'golden hour',
    handle: '@lena',
    imageQuery: 'gold earrings on woman backlit warm golden hour',
    textId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    caption: 'the heirloom set',
    handle: '@aurelia',
    imageQuery: 'woman wearing gold necklace and earrings set cream top',
    textId: 'ugc-6-caption',
  },
]

// Category tile imagery
export const CATEGORY_TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    sub: 'drops · cuffs · studs',
    imageQuery: 'gold earrings flat lay on warm linen',
    textId: 'cat-earrings-label',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    sub: 'chains · pendants · sets',
    imageQuery: 'gold necklace flat lay on warm beige background',
    textId: 'cat-necklaces-label',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    sub: 'domes · lace · minimal',
    imageQuery: 'gold huggie hoop earrings flat lay on linen',
    textId: 'cat-huggies-label',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Amelia R.',
    rating: 5,
    body:
      "I wear the Golden Sphere huggies almost every day — they haven't tarnished, they don't irritate my ears, and they make me feel quietly pulled together. My most-reached-for piece.",
  },
  {
    id: 't2',
    name: 'Sofia M.',
    rating: 5,
    body:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made me tear up. The jewelry is the real thing — heavy enough to feel real, light enough to forget about.",
  },
  {
    id: 't3',
    name: 'Priya K.',
    rating: 5,
    body:
      "I have sensitive ears and Velmora is the only demi-fine brand that doesn't make me react. The Majestic Flora necklace is genuinely the prettiest thing I own.",
  },
]
