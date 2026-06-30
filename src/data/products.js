// Seed product catalog for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes at render time.

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'earring',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.',
    description:
      'The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it curves gently around the cartilage and catches the light with a hand-set crystal. Wear it solo for a quiet gleam, or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Gently wipe with a soft cloth to restore shine.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-b2',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
    gallery: [
      { imgId: 'prod-vivid-aura-a1', query: '[prod-vivid-aura-desc] [prod-vivid-aura-title]' },
      { imgId: 'prod-vivid-aura-b2', query: '[prod-vivid-aura-desc] Vivid Aura Jewels worn styled' },
      { imgId: 'prod-vivid-aura-a1-g3', query: '[prod-vivid-aura-desc] Vivid Aura Jewels detail close up gold' },
      { imgId: 'prod-vivid-aura-a1-g4', query: '[prod-vivid-aura-desc] Vivid Aura Jewels on neutral background' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 89,
    shortDescription:
      'A multicolor floral crystal necklace that blooms along the collarbone — a statement of quiet brilliance.',
    description:
      'Majestic Flora Nectar is a garden in light. Delicate gold petals cradle multicolor crystals that shift from champagne to rose as they move. The adjustable 40–45cm chain lets it rest perfectly at the neckline, making it the piece that turns a simple top into an outfit.',
    materials:
      '18K gold plating over 925 sterling silver. Multicolor cubic zirconia crystals. Adjustable 40–45cm cable chain with lobster clasp.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Clean with a soft, dry cloth.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-majestic-flora-a1',
    imgIdAlt: 'prod-majestic-flora-b2',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
    gallery: [
      { imgId: 'prod-majestic-flora-a1', query: '[prod-majestic-flora-desc] [prod-majestic-flora-title]' },
      { imgId: 'prod-majestic-flora-b2', query: '[prod-majestic-flora-desc] Majestic Flora Nectar worn styled' },
      { imgId: 'prod-majestic-flora-a1-g3', query: '[prod-majestic-flora-desc] Majestic Flora Nectar detail close up gold' },
      { imgId: 'prod-majestic-flora-a1-g4', query: '[prod-majestic-flora-desc] Majestic Flora Nectar on neutral background' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 203,
    shortDescription:
      'Chunky gold dome huggie earrings with a polished, sculptural finish — the everyday gold you never take off.',
    description:
      'The Golden Sphere huggies are our signature everyday hoop. A chunky polished dome sits snug against the lobe, comfortable enough to sleep in and bold enough to be noticed. The hinged closure keeps them secure from morning to night.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure. Hypoallergenic.',
    care: 'Resistant to everyday wear. Wipe clean with a soft cloth. Store in the provided pouch when not worn.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-golden-sphere-a1',
    imgIdAlt: 'prod-golden-sphere-b2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
    gallery: [
      { imgId: 'prod-golden-sphere-a1', query: '[prod-golden-sphere-desc] [prod-golden-sphere-title]' },
      { imgId: 'prod-golden-sphere-b2', query: '[prod-golden-sphere-desc] Golden Sphere Huggies worn styled' },
      { imgId: 'prod-golden-sphere-a1-g3', query: '[prod-golden-sphere-desc] Golden Sphere Huggies detail close up gold' },
      { imgId: 'prod-golden-sphere-a1-g4', query: '[prod-golden-sphere-desc] Golden Sphere Huggies on neutral background' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 64,
    shortDescription:
      'Textured gold filigree drop earrings with an heirloom feel — intricate, weightless, endlessly elegant.',
    description:
      'Amber Lace is inspired by antique lacework. Each drop is hand-textured in gold filigree that moves softly with you, catching warm light at every angle. The result is a piece that feels both vintage and modern — the kind you pass down.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-textured filigree. Lightweight drop with secure lever-back closure.',
    care: 'Handle with care to preserve the filigree detail. Avoid water and chemicals. Store in the provided box.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-amber-lace-a1',
    imgIdAlt: 'prod-amber-lace-b2',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
    gallery: [
      { imgId: 'prod-amber-lace-a1', query: '[prod-amber-lace-desc] [prod-amber-lace-title]' },
      { imgId: 'prod-amber-lace-b2', query: '[prod-amber-lace-desc] Amber Lace Earrings worn styled' },
      { imgId: 'prod-amber-lace-a1-g3', query: '[prod-amber-lace-desc] Amber Lace Earrings detail close up gold' },
      { imgId: 'prod-amber-lace-a1-g4', query: '[prod-amber-lace-desc] Amber Lace Earrings on neutral background' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 41,
    shortDescription:
      'A gift-boxed earring and necklace set designed to be treasured — the complete Velmora moment, ready to give.',
    description:
      'The Royal Heirloom Set pairs our most-loved drop earrings with a matching pendant necklace, presented in a signature Velmora gift box. Coordinated in tone and proportion, it is the effortless way to give (or receive) a complete look — for milestones, anniversaries, or simply because.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes earrings, pendant necklace (adjustable 40–45cm), and signature gift box.',
    care: 'Store each piece in the gift box compartments. Keep dry and away from perfumes. Clean with a soft cloth.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-royal-heirloom-a1',
    imgIdAlt: 'prod-royal-heirloom-b2',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
    gallery: [
      { imgId: 'prod-royal-heirloom-a1', query: '[prod-royal-heirloom-desc] [prod-royal-heirloom-title]' },
      { imgId: 'prod-royal-heirloom-b2', query: '[prod-royal-heirloom-desc] Royal Heirloom Set worn styled' },
      { imgId: 'prod-royal-heirloom-a1-g3', query: '[prod-royal-heirloom-desc] Royal Heirloom Set detail close up gold' },
      { imgId: 'prod-royal-heirloom-a1-g4', query: '[prod-royal-heirloom-desc] Royal Heirloom Set on neutral background' },
    ],
  },
]

export const CATEGORIES = [
  {
    id: 'earrings',
    name: 'Earrings',
    type: 'earring',
    descId: 'cat-earrings-desc',
    titleId: 'cat-earrings-title',
    imgId: 'cat-earrings-img',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    type: 'necklace',
    descId: 'cat-necklaces-desc',
    titleId: 'cat-necklaces-title',
    imgId: 'cat-necklaces-img',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    type: 'huggie',
    descId: 'cat-huggies-desc',
    titleId: 'cat-huggies-title',
    imgId: 'cat-huggies-img',
  },
]

export const REELS = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere huggies, every day.',
    imgId: 'reel-1-img',
    titleId: 'reel-1-title',
  },
  {
    id: 'reel-2',
    caption: 'Majestic Flora, caught in afternoon light.',
    imgId: 'reel-2-img',
    titleId: 'reel-2-title',
  },
  {
    id: 'reel-3',
    caption: 'A curated ear, styled with Vivid Aura.',
    imgId: 'reel-3-img',
    titleId: 'reel-3-title',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace, moving softly.',
    imgId: 'reel-4-img',
    titleId: 'reel-4-title',
  },
  {
    id: 'reel-5',
    caption: 'The Royal Heirloom set, unboxed.',
    imgId: 'reel-5-img',
    titleId: 'reel-5-title',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I have worn my huggies every day for months and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom set as an anniversary gift. The box alone made it feel like a luxury purchase. She was thrilled.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'I get compliments every time I wear the Majestic Flora necklace. It looks far more expensive than it was.',
  },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, limit)

export const formatPrice = (price) => `$${price.toFixed(2)}`
