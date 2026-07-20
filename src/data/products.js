// Seed product data for Velmora Fine Jewelry.
// Images use the strk-img stock system via data-strk-img attributes in components.
// Each product carries stable text-reference IDs so image queries stay in sync.

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
  { id: 'sets', name: 'Sets', slug: 'sets' },
]

export const MATERIALS = [
  { id: 'gold', name: '18K Gold Plated' },
  { id: 'silver', name: 'Sterling Silver' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    categoryName: 'Earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 126,
    bestseller: true,
    shortDescription:
      'A sculptural gold ear cuff set with a single clear crystal — no piercing required. Quietly luminous, made to layer.',
    description:
      'The Vivid Aura ear cuff is our most-worn piece for a reason. Hand-finished in 18K gold plating over brass, it curves gently around the cartilage and stays put without a pierce. A single hand-set crystal catches the light without ever shouting. Wear it solo for a clean line, or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgIdAlt: 'prod-vivid-aura-jewels-img-alt',
    galleryIds: [
      'prod-vivid-aura-jewels-g1',
      'prod-vivid-aura-jewels-g2',
      'prod-vivid-aura-jewels-g3',
      'prod-vivid-aura-jewels-g4',
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    categoryName: 'Necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 203,
    bestseller: true,
    shortDescription:
      'A delicate floral pendant scattered with multicolor crystals. The necklace that turns a plain top into a look.',
    description:
      'Majestic Flora Nectar is a garden in miniature. A fine gold-plated chain holds a single floral bloom, its petals set with multicolor crystals that shift from amber to rose as they catch the light. Adjustable length lets it sit just at the collarbone — the most flattering place for a pendant.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Multicolor cubic zirconia. Adjustable 16–18 inch chain with extender.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystals. Clean with a soft, dry cloth.',
    variants: ['Gold', 'Silver'],
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgIdAlt: 'prod-majestic-flora-nectar-img-alt',
    galleryIds: [
      'prod-majestic-flora-nectar-g1',
      'prod-majestic-flora-nectar-g2',
      'prod-majestic-flora-nectar-g3',
      'prod-majestic-flora-nectar-g4',
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    categoryName: 'Huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 318,
    bestseller: true,
    shortDescription:
      'Chunky gold dome huggies that hug the lobe. The everyday earring you will reach for first.',
    description:
      'Golden Sphere Huggies are the foundation of a great jewelry wardrobe. A smooth, polished dome sits flush against the lobe with a secure hinged closure. Substantial enough to read as a statement, light enough to forget you are wearing them. Sold as a pair.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Hinged snap closure. 12mm diameter. Sold as a pair.',
    care: 'Close the hinge fully when wearing. Keep dry. Polish with a soft cloth to restore shine.',
    variants: ['Gold', 'Silver'],
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgIdAlt: 'prod-golden-sphere-huggies-img-alt',
    galleryIds: [
      'prod-golden-sphere-huggies-g1',
      'prod-golden-sphere-huggies-g2',
      'prod-golden-sphere-huggies-g3',
      'prod-golden-sphere-huggies-g4',
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    categoryName: 'Earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 91,
    bestseller: true,
    shortDescription:
      'Textured gold filigree drops with an openwork lace pattern. Movement and warmth in one elegant line.',
    description:
      'Amber Lace is filigree reimagined. Each drop is hand-textured with an openwork pattern that reads like fine lace, catching warm light from every angle. They move with you — quiet, never fussy — and transition effortlessly from day to evening.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Lever-back closure. 45mm drop length.',
    care: 'Handle the filigree gently. Avoid snagging on knitwear. Store in the provided pouch.',
    variants: ['Gold', 'Silver'],
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgIdAlt: 'prod-amber-lace-earrings-img-alt',
    galleryIds: [
      'prod-amber-lace-earrings-g1',
      'prod-amber-lace-earrings-g2',
      'prod-amber-lace-earrings-g3',
      'prod-amber-lace-earrings-g4',
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    categoryName: 'Sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 74,
    bestseller: true,
    shortDescription:
      'A coordinated earring and necklace set, presented in a keepsake gift box. The gift that needs no wrapping.',
    description:
      'Royal Heirloom is our most considered gift. A matching pair of drop earrings and a pendant necklace, designed to be worn together or apart, arrive in a velvet-lined keepsake box. The coordinated silhouette makes it the effortless answer to birthdays, anniversaries, and the moments that deserve marking.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Includes earrings, necklace (18 inch), and velvet-lined gift box.',
    care: 'Store in the provided gift box. Keep dry and away from perfume. Polish with a soft cloth.',
    variants: ['Gold', 'Silver'],
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgIdAlt: 'prod-royal-heirloom-set-img-alt',
    galleryIds: [
      'prod-royal-heirloom-set-g1',
      'prod-royal-heirloom-set-g2',
      'prod-royal-heirloom-set-g3',
      'prod-royal-heirloom-set-g4',
    ],
  },
]

export const getProductBySlug = (slug) =>
  PRODUCTS.find((p) => p.slug === slug)

export const getRelatedProducts = (slug, limit = 4) =>
  PRODUCTS.filter((p) => p.slug !== slug).slice(0, limit)

export const getBestsellers = () => PRODUCTS.filter((p) => p.bestseller)
