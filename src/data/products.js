export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    category: 'Earrings',
    materialFilter: 'Crystal Accent',
    collection: 'Ear Statements',
    shortDescription: 'A sculptural gold ear cuff illuminated with a single crystal accent.',
    description:
      'Designed to catch candlelight and conversation, Vivid Aura Jewels balances a polished gold curve with a refined crystal glint.',
    materialsCare:
      '18K gold plated brass with cubic zirconia. Avoid water, perfume, and lotions. Store in the soft pouch after wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      { key: 'still-life', label: 'Still Life', scene: 'Editorial still life on dark stone with warm directional light' },
      { key: 'ear-closeup', label: 'Worn View', scene: 'Close-up of ear styling with quiet luxury makeup and soft glow' },
      { key: 'gifting', label: 'Gift Ready', scene: 'Luxury gift box styling with ribbon and warm ivory textures' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.8,
    reviewCount: 94,
    category: 'Necklaces',
    materialFilter: 'Crystal Accent',
    collection: 'Evening Bloom',
    shortDescription: 'A floral crystal necklace that layers color against a fine gold chain.',
    description:
      'Majestic Flora Nectar frames the collarbone with petal-inspired crystals, adding a luminous focal point to everyday tailoring and occasion dressing alike.',
    materialsCare:
      '18K gold plated brass with multicolor crystals. Wipe with a soft dry cloth and keep away from moisture and direct heat.',
    shippingReturns:
      'Ships in 1–2 business days. Complimentary gift wrapping and 30-day returns included.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      { key: 'still-life', label: 'Still Life', scene: 'Necklace arranged on warm ivory linen with editorial shadows' },
      { key: 'neck-closeup', label: 'Worn View', scene: 'Close-up portrait of necklace layered on neck with soft warm light' },
      { key: 'box', label: 'Gift Box', scene: 'Jewelry box reveal with necklace on suede insert and elegant ribbon' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.9,
    reviewCount: 213,
    category: 'Huggies',
    materialFilter: '18K Gold Plated',
    collection: 'Daily Icons',
    shortDescription: 'Chunky dome huggies with a mirrored finish and comfortable everyday weight.',
    description:
      'Golden Sphere Huggies bring polished volume to your daily stack with a rounded silhouette that feels modern, soft, and endlessly wearable.',
    materialsCare:
      '18K gold plated brass with a hypoallergenic post. Remove before showering and gently polish with a jewelry cloth.',
    shippingReturns:
      'Free shipping over $75 and easy 30-day returns. Packed in a Velmora keepsake box.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      { key: 'still-life', label: 'Still Life', scene: 'Pair of dome huggies styled on dark lacquer tray with moody light' },
      { key: 'ear-closeup', label: 'Worn View', scene: 'Close-up of huggie earrings worn on ear with sleek hair and soft glow' },
      { key: 'tray', label: 'Collector Tray', scene: 'Jewelry tray flat lay with huggies, ring dish, and silk ribbon' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.7,
    reviewCount: 77,
    category: 'Earrings',
    materialFilter: '18K Gold Plated',
    collection: 'Textured Light',
    shortDescription: 'Textured filigree drop earrings with delicate movement and vintage warmth.',
    description:
      'Amber Lace Earrings offer a graceful drop and a softly textured finish, inspired by heirloom detail but styled for the now.',
    materialsCare:
      '18K gold plated brass. Store flat, avoid bending, and clean with a dry microfiber cloth only.',
    shippingReturns:
      'Delivered in 2–4 business days with tracked shipping. Returns available for 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      { key: 'still-life', label: 'Still Life', scene: 'Filigree drop earrings photographed on velvet with warm editorial light' },
      { key: 'ear-closeup', label: 'Worn View', scene: 'Elegant portrait featuring drop earrings beside jawline in warm light' },
      { key: 'detail', label: 'Detail', scene: 'Macro detail of gold filigree pattern with soft shadow and luxury mood' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5,
    reviewCount: 61,
    category: 'Necklaces',
    materialFilter: 'Gift Set',
    collection: 'Gifted Gold',
    shortDescription: 'A gift-boxed necklace and earring set curated for effortless gifting.',
    description:
      'Royal Heirloom Set arrives ready to gift, pairing a softly gleaming necklace with matching earrings for an instantly elevated set.',
    materialsCare:
      '18K gold plated brass set with crystal detailing. Keep each piece in its compartment and avoid contact with water.',
    shippingReturns:
      'Complimentary gift packaging included. Free worldwide shipping and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      { key: 'still-life', label: 'Set View', scene: 'Gift-boxed jewelry set on ivory stone with ribbon and warm light' },
      { key: 'worn', label: 'Worn View', scene: 'Portrait with matching necklace and earrings in quiet luxury styling' },
      { key: 'boxing', label: 'Unboxing', scene: 'Elegant unboxing moment with suede jewelry box and soft editorial shadows' },
    ],
  },
]

export const categoryTiles = [
  {
    slug: 'earrings',
    name: 'Earrings',
    blurb: 'Textured drops, cuffs, and polished everyday statements.',
    scene: 'Gold earrings styled on a model with soft warm editorial lighting',
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    blurb: 'Fine chains and luminous pendants designed to layer beautifully.',
    scene: 'Gold necklaces styled on collarbone with refined quiet luxury mood',
  },
  {
    slug: 'huggies',
    name: 'Huggies',
    blurb: 'Rounded icons for daily wear, gifting, and effortless stacks.',
    scene: 'Close-up of gold huggie earrings on ear with sleek editorial beauty look',
  },
]

export const ugcMoments = [
  {
    id: 'ugc-ear-stack',
    title: 'Layered for late dinners',
    caption: 'Golden stacks that catch the candlelight.',
    scene: 'Vertical portrait of woman wearing layered gold earrings in evening light',
  },
  {
    id: 'ugc-necklace',
    title: 'The weekday uniform',
    caption: 'Soft tailoring, luminous chain, effortless polish.',
    scene: 'Vertical close-up of necklace worn with cream blazer and warm natural light',
  },
  {
    id: 'ugc-gifting',
    title: 'Wrapped to impress',
    caption: 'A keepsake moment, ready for gifting.',
    scene: 'Vertical gifting scene with luxury jewelry box, ribbon, and gold jewelry',
  },
  {
    id: 'ugc-huggies',
    title: 'Everyday glow',
    caption: 'Quiet shine for coffee runs and after-hours plans.',
    scene: 'Vertical beauty portrait with chunky gold huggies and dewy skin',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote: 'The finish looks far more expensive than the price point. My huggies are in constant rotation.',
    author: 'Maya R.',
  },
  {
    id: 'review-2',
    quote: 'Beautiful packaging, quick shipping, and the necklace sits perfectly. It felt giftable from the second it arrived.',
    author: 'Elena T.',
  },
  {
    id: 'review-3',
    quote: 'I bought one pair and came back for more. The pieces feel refined without trying too hard.',
    author: 'Sofia L.',
  },
]

export const journalEntries = [
  {
    id: 'journal-1',
    title: 'How to Build a Golden Everyday Stack',
    category: 'Styling',
    excerpt: 'Three simple ways to layer cuffs, huggies, and necklaces without overdoing it.',
  },
  {
    id: 'journal-2',
    title: 'A Guide to Giftable Demi-Fine Jewelry',
    category: 'Gifting',
    excerpt: 'Thoughtful pieces that feel personal, polished, and easy to wear from day one.',
  },
]

export const materialOptions = ['18K Gold Plated', 'Crystal Accent', 'Gift Set']

export const priceOptions = [
  { id: 'all', label: 'All prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-80', label: '$50 – $80' },
  { id: '80-plus', label: '$80+' },
]

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug, category) =>
  products
    .filter((product) => product.slug !== slug)
    .sort((first, second) => Number(second.category === category) - Number(first.category === category))
    .slice(0, 4)
