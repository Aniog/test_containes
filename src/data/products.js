// Seed catalog for Velmora Fine Jewelry.
// Imagery is sourced through the data-strk-img stock-image system; the queries
// below reference nearby text IDs so the picker picks editorially-aligned shots
// of warm gold jewelry on warm dark/neutral backgrounds.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings', plural: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces', plural: 'Necklaces' },
  { id: 'huggies', label: 'Huggies', plural: 'Huggies' },
  { id: 'sets', label: 'Sets & Gifts', plural: 'Sets' },
];

export const MATERIALS = [
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal' },
];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Crystal ear cuff',
    category: 'earrings',
    material: '18k-gold',
    price: 42,
    compareAt: null,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Bestseller',
    description:
      'A whisper of light along the ear. The Vivid Aura ear cuff catches every movement with a single hand-set crystal — wearable everyday, quietly striking.',
    details: [
      '18K gold plated over brass',
      'Hand-set cubic zirconia crystal',
      'Hypoallergenic, nickel-free post',
      'No piercing required — gently slides on',
    ],
    materials:
      'Velmora pieces are crafted in brass and finished with a thick layer of 18K gold plating for a warm, lasting glow. Keep dry, avoid lotions and perfume directly on the metal, and store in the suede pouch provided.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Each order is shipped in a recyclable kraft gift box.',
    care: [
      'Remove before showering, swimming, or sleeping',
      'Avoid contact with perfume, sunscreen and lotions',
      'Store in the soft pouch to prevent tarnish',
      'Wipe gently with a dry microfiber cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', swatch: '#D4B98C' },
      { id: 'silver', label: 'Silver', swatch: '#D9D5CC' },
    ],
    images: [
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
    ],
    related: ['golden-sphere-huggies', 'amber-lace-earrings', 'majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    category: 'necklaces',
    material: '18k-gold',
    price: 68,
    compareAt: null,
    rating: 4.8,
    reviewCount: 96,
    badge: 'New',
    description:
      'A garden in motion. Faceted crystals in citrine, peridot and champagne cluster at the collarbone — a piece you’ll wear from the office to a candlelit dinner.',
    details: [
      '18K gold plated chain, 16" with 2" extender',
      'Hand-set multicolor crystal cluster pendant',
      'Lobster clasp closure',
      'Hypoallergenic, lead- and nickel-free',
    ],
    materials:
      'Each crystal is hand-set in our studio onto a brass base, then plated in 18K gold. The result is the warmth of fine jewelry with the lightness of a piece you can wear every day.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Gift wrap available at checkout.',
    care: [
      'Remove before showering, swimming, or sleeping',
      'Avoid contact with perfume and lotions',
      'Wipe gently with a dry microfiber cloth',
      'Store flat to protect the pendant',
    ],
    variants: [
      { id: 'gold', label: 'Gold', swatch: '#D4B98C' },
      { id: 'silver', label: 'Silver', swatch: '#D9D5CC' },
    ],
    images: [
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
    ],
    related: ['vivid-aura-jewels', 'royal-heirloom-set', 'amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggie earrings',
    category: 'huggies',
    material: '18k-gold',
    price: 38,
    compareAt: null,
    rating: 4.9,
    reviewCount: 214,
    badge: 'Bestseller',
    description:
      'A polished dome that hugs the lobe. Substantial without weight — the everyday earring you’ll reach for, then forget you’re wearing.',
    details: [
      '18K gold plated over brass',
      '12mm outer diameter, 4mm thick',
      'Hinged click closure for secure fit',
      'Hypoallergenic, nickel- and lead-free',
    ],
    materials:
      'Solid-feeling brass core plated in a generous layer of 18K gold. Designed to wear daily without tarnish for the price of fine jewelry.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.',
    care: [
      'Remove before showering, swimming, or sleeping',
      'Avoid contact with perfume and lotions',
      'Wipe gently with a dry microfiber cloth',
      'Store in the suede pouch provided',
    ],
    variants: [
      { id: 'gold', label: 'Gold', swatch: '#D4B98C' },
      { id: 'silver', label: 'Silver', swatch: '#D9D5CC' },
    ],
    images: [
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
    ],
    related: ['vivid-aura-jewels', 'amber-lace-earrings', 'majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drop earrings',
    category: 'earrings',
    material: '18k-gold',
    price: 54,
    compareAt: null,
    rating: 4.7,
    reviewCount: 73,
    badge: null,
    description:
      'Filigree, softened. Hand-finished openwork drops that catch candlelight and sun alike — heirloom-inspired, made for today.',
    details: [
      '18K gold plated brass, drop length 38mm',
      'Hand-finished filigree openwork',
      'Hypoallergenic lever-back closure',
      'Lightweight — under 4g per earring',
    ],
    materials:
      'Brass core, finished with a thick layer of 18K gold plating. Designed in-house and finished by hand for a softer, slightly irregular surface that catches the light.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging.',
    care: [
      'Remove before showering, swimming, or sleeping',
      'Avoid contact with perfume and lotions',
      'Store flat to protect the filigree',
      'Wipe gently with a dry microfiber cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', swatch: '#D4B98C' },
      { id: 'silver', label: 'Silver', swatch: '#D9D5CC' },
    ],
    images: [
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
    ],
    related: ['vivid-aura-jewels', 'majestic-flora-nectar', 'golden-sphere-huggies', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring and necklace set',
    category: 'sets',
    material: '18k-gold',
    price: 95,
    compareAt: 112,
    rating: 5.0,
    reviewCount: 58,
    badge: 'Gift',
    description:
      'Our most-loved drop earrings paired with a delicate satellite chain. Gift-boxed in a matte champagne box with a hand-written card — ready to give, made to keep.',
    details: [
      '18K gold plated over brass',
      'Earring drop 22mm with secure lever-back',
      '18" satellite chain with 2" extender',
      'Hypoallergenic, nickel- and lead-free',
      'Includes champagne gift box and care card',
    ],
    materials:
      'Crafted in brass and plated in 18K gold. The set is finished and inspected by hand, then packaged in our signature gift box.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in original packaging. Express options available at checkout.',
    care: [
      'Remove before showering, swimming, or sleeping',
      'Avoid contact with perfume and lotions',
      'Store in the gift box provided',
      'Wipe gently with a dry microfiber cloth',
    ],
    variants: [
      { id: 'gold', label: 'Gold', swatch: '#D4B98C' },
      { id: 'silver', label: 'Silver', swatch: '#D9D5CC' },
    ],
    images: [
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
      { ratio: '4x5', width: 900 },
    ],
    related: ['majestic-flora-nectar', 'amber-lace-earrings', 'vivid-aura-jewels', 'golden-sphere-huggies'],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'I bought the Royal Heirloom Set for my sister’s birthday. The box arrived like a little ceremony — she’s worn it every day since.',
    name: 'Amelia R.',
    rating: 5,
    productId: 'royal-heirloom-set',
  },
  {
    quote:
      'The Golden Sphere Huggies are my forever earring. They feel expensive, they look expensive, and they’ve held up beautifully in the shower (against the rules, I know).',
    name: 'Priya S.',
    rating: 5,
    productId: 'golden-sphere-huggies',
  },
  {
    quote:
      'Finally — demi-fine jewelry that doesn’t scream for attention. Quietly beautiful, made to last, and the price point lets me actually treat myself.',
    name: 'Nora K.',
    rating: 5,
    productId: 'majestic-flora-nectar',
  },
];

export const REELS = [
  {
    id: 'reel-ear-stack',
    caption: 'the everyday ear stack',
    handle: '@velmora',
  },
  {
    id: 'reel-collar-glow',
    caption: 'candlelight on the collarbone',
    handle: '@priya',
  },
  {
    id: 'reel-morning-ritual',
    caption: 'a quiet morning ritual',
    handle: '@amelia',
  },
  {
    id: 'reel-gift-unbox',
    caption: 'the unboxing moment',
    handle: '@nora',
  },
  {
    id: 'reel-huggies-close',
    caption: 'huggies, closer than you think',
    handle: '@velmora',
  },
  {
    id: 'reel-wedding-guest',
    caption: 'wedding guest, demure',
    handle: '@isla',
  },
  {
    id: 'reel-second-day-hair',
    caption: 'second-day hair, perfect huggies',
    handle: '@camille',
  },
  {
    id: 'reel-sunday-brunch',
    caption: 'sunday brunch, gentle gold',
    handle: '@noor',
  },
];

export const HERO_COPY = {
  eyebrow: 'Velmora · Est. 2024',
  title: 'Crafted to be Treasured',
  subtitle:
    'Demi-fine 18K gold plated jewelry — earrings, necklaces and huggies made to live in, made to last.',
  primaryCta: { label: 'Shop the Collection', href: '/shop' },
  secondaryCta: { label: 'Best Sellers', href: '/shop?sort=bestsellers' },
};

export const TRUST = [
  { label: 'Free Worldwide Shipping' },
  { label: '30-Day Returns' },
  { label: '18K Gold Plated' },
  { label: 'Hypoallergenic' },
];

export const BRAND_STORY = {
  eyebrow: 'Our Story',
  title: 'Quietly Crafted, Made to Live In',
  body:
    'Velmora began with a simple thought: demi-fine jewelry shouldn’t feel precious. We plate every piece in a generous layer of 18K gold over brass, hand-finish each setting, and send every order in packaging worth keeping — at a price you can actually wear every day.',
  cta: { label: 'Read Our Story', href: '/about' },
};

export const NEWSLETTER = {
  title: 'Join for 10% off your first order',
  body: 'Quietly in your inbox — new pieces, restocks, and the occasional story. No noise.',
  cta: 'Subscribe',
};

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  const ids = product.related || [];
  const related = ids
    .map((id) => getProductById(id))
    .filter(Boolean)
    .slice(0, limit);
  return related;
}