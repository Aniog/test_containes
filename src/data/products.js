// Velmora seed product catalog
// Each product has id, slug, name, category, price, short + long description,
// materials, two image refs (primary + alt for hover), variants, rating.

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 214,
    bestseller: true,
    short:
      'A sculpted gold ear cuff with a single faceted crystal — refined, weightless, and quietly luminous on the curve of the ear.',
    long:
      'Hand-finished in 18K gold-plated brass, the Vivid Aura ear cuff curls softly along the helix and holds a precision-cut crystal that catches the light at every angle. Designed to be worn solo or stacked alongside our huggies for an effortless editorial ear.',
    materials: [
      '18K gold plating over recycled brass',
      'Hand-set Austrian crystal',
      'Hypoallergenic, nickel-free',
    ],
    care: [
      'Store in the included pouch away from moisture',
      'Avoid contact with perfume, lotion, and saltwater',
      'Polish gently with a soft microfibre cloth',
    ],
    variants: [
      { id: 'gold', label: '18K Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    imgPrimaryId: 'velmora-product-vivid-aura-primary-7a3f9c',
    imgAltId: 'velmora-product-vivid-aura-alt-3e1d8b',
    imgQueryPrimary:
      'editorial close up gold ear cuff with crystal worn on model warm light',
    imgQueryAlt:
      'gold ear cuff jewelry product still life on linen warm tones',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 312,
    bestseller: true,
    short:
      'A delicate pendant strung with hand-painted floral crystals — a quiet bouquet that rests just at the collarbone.',
    long:
      'Each Majestic Flora Nectar pendant is hand-assembled from cut crystal florets in soft pastels, suspended on a fine 18K gold-plated chain. An adjustable clasp lets it sit anywhere from choker to collarbone — a layering piece that always reads as the centerpiece.',
    materials: [
      '18K gold plating over recycled brass',
      'Hand-painted multicolor crystal florets',
      'Adjustable 16"–18" chain',
    ],
    care: [
      'Remove before showering, swimming, or sleeping',
      'Wipe gently after wear to remove skin oils',
      'Keep stored flat in the Velmora pouch',
    ],
    variants: [
      { id: 'gold', label: '18K Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    imgPrimaryId: 'velmora-product-majestic-flora-primary-b4c7e2',
    imgAltId: 'velmora-product-majestic-flora-alt-9d2f6a',
    imgQueryPrimary:
      'editorial floral crystal pendant gold chain on model neckline warm light',
    imgQueryAlt:
      'floral multicolor crystal necklace flat lay luxury jewelry detail',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    categoryLabel: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 489,
    bestseller: true,
    short:
      'Substantial, dome-cut huggies with a soft brushed finish — the everyday hoop, elevated.',
    long:
      'Sculpted with a chunky, dome-cut profile, the Golden Sphere huggies sit close to the lobe with a confident weight. The brushed 18K gold-plated finish softens the light, making them as wearable in daylight as they are at dinner.',
    materials: [
      '18K gold plating over recycled brass',
      'Brushed satin finish',
      'Secure hinged closure',
    ],
    care: [
      'Wipe with a soft cloth after wearing',
      'Avoid water, lotion, and perfume',
      'Store separately to preserve the brushed finish',
    ],
    variants: [
      { id: 'gold', label: '18K Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    imgPrimaryId: 'velmora-product-golden-sphere-primary-2f8a1d',
    imgAltId: 'velmora-product-golden-sphere-alt-6c4b9e',
    imgQueryPrimary:
      'chunky gold dome huggie hoop earrings on model close up warm tones',
    imgQueryAlt:
      'thick gold huggie earrings product still life linen background',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 176,
    bestseller: true,
    short:
      'Filigree drop earrings cast in fine gold — heirloom-feeling, weightless to wear.',
    long:
      'Inspired by antique European lace, Amber Lace earrings are cast in fine gold-plated brass with intricate openwork that catches the light like a quiet flame. A featherweight pair that feels timeless from the first wear.',
    materials: [
      '18K gold plating over recycled brass',
      'Hand-finished filigree casting',
      'Featherweight — under 4 grams per pair',
    ],
    care: [
      'Avoid pulling on the openwork detail',
      'Clean with a soft brush only when needed',
      'Store flat in the Velmora pouch',
    ],
    variants: [
      { id: 'gold', label: '18K Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    imgPrimaryId: 'velmora-product-amber-lace-primary-5e9c3b',
    imgAltId: 'velmora-product-amber-lace-alt-8a1f4d',
    imgQueryPrimary:
      'gold filigree drop earrings on model side profile warm editorial light',
    imgQueryAlt:
      'intricate gold lace drop earrings flat lay luxury jewelry',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    categoryLabel: 'Gift Sets',
    price: 95,
    rating: 5.0,
    reviews: 98,
    bestseller: true,
    short:
      'A matched necklace and earring duo, presented in a signature linen-lined gift box.',
    long:
      'Our most-gifted edit. The Royal Heirloom Set pairs a fine pendant with its matching pair of huggies, arriving in a signature linen-lined Velmora box, finished with a hand-tied silk ribbon — ready to give, or to keep.',
    materials: [
      '18K gold plating over recycled brass',
      'Linen-lined gift box included',
      'Hand-tied silk ribbon closure',
    ],
    care: [
      'Keep set together in the gift box for storage',
      'Avoid water, perfume, and lotion',
      'Polish individually with a soft cloth',
    ],
    variants: [
      { id: 'gold', label: '18K Gold', tone: 'gold' },
      { id: 'silver', label: 'Silver', tone: 'silver' },
    ],
    imgPrimaryId: 'velmora-product-royal-heirloom-primary-1d6e8c',
    imgAltId: 'velmora-product-royal-heirloom-alt-4b9a2f',
    imgQueryPrimary:
      'gold necklace and earring gift set in linen lined box silk ribbon warm light',
    imgQueryAlt:
      'matched gold pendant and huggie earrings on model editorial portrait',
  },
];

export const CATEGORIES = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Sculpted, weightless, made for daily wear.',
    imgId: 'velmora-cat-earrings-3a8c2d',
    imgQuery: 'editorial gold earrings worn on model close up warm light',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Pendants and chains that rest just so.',
    imgId: 'velmora-cat-necklaces-9e4b7f',
    imgQuery: 'editorial gold necklace pendant on model neckline warm light',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Hoops with weight, finish, and intention.',
    imgId: 'velmora-cat-huggies-6c1f5a',
    imgQuery: 'chunky gold huggie hoop earrings on model warm editorial light',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Eliza M.',
    text:
      'These pieces feel heirloom from the moment you open the box. The gold has a warmth I haven’t found in pieces three times the price.',
  },
  {
    id: 't2',
    name: 'Priya R.',
    text:
      'I bought the Royal Heirloom Set as a birthday gift and ended up keeping the earrings for myself. The packaging alone is worth it.',
  },
  {
    id: 't3',
    name: 'Sofía L.',
    text:
      'I’ve worn the Golden Sphere huggies every single day for four months. They still look brand new — I’m officially obsessed.',
  },
];

export const UGC_POSTS = [
  {
    id: 'ugc1',
    caption: 'Layering Vivid Aura with Golden Sphere — my forever combo.',
    handle: '@elenapaige',
    imgId: 'velmora-ugc-1-7c3f8a',
    imgQuery: 'woman ear stack gold cuff and huggie hoop close up natural light',
  },
  {
    id: 'ugc2',
    caption: 'The Majestic Flora pendant looks even better in person.',
    handle: '@maeve.studios',
    imgId: 'velmora-ugc-2-2d9b4e',
    imgQuery: 'gold floral crystal necklace on woman neckline soft daylight',
  },
  {
    id: 'ugc3',
    caption: 'Gifted, kept. The Royal Heirloom Set in its little linen box.',
    handle: '@ruelle.diary',
    imgId: 'velmora-ugc-3-5e1c6b',
    imgQuery: 'gold jewelry gift box linen ribbon flat lay warm light',
  },
  {
    id: 'ugc4',
    caption: 'Amber Lace catches the late afternoon sun beautifully.',
    handle: '@solene.archive',
    imgId: 'velmora-ugc-4-8b4a2c',
    imgQuery: 'gold filigree drop earrings on woman golden hour portrait',
  },
  {
    id: 'ugc5',
    caption: 'Quiet, but impossible to ignore.',
    handle: '@ines.objects',
    imgId: 'velmora-ugc-5-3f7d9a',
    imgQuery: 'minimalist gold ear cuff close up profile portrait warm tones',
  },
  {
    id: 'ugc6',
    caption: 'The kind of gold that warms your skin tone instantly.',
    handle: '@noor.wears',
    imgId: 'velmora-ugc-6-6a2e8d',
    imgQuery: 'woman gold huggie hoop earring close up editorial soft light',
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
