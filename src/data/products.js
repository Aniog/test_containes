// Velmora Fine Jewelry — seed catalog.
// Images use the stock image tagging system (data-strk-img / data-strk-bg).
// Each product carries unique, stable text ids used to build image queries.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    compareAt: null,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviews: 214,
    isBestseller: true,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'A sculptural ear cuff that catches the light with every turn. Hand-set crystals trace a slender arc of 18k gold-plated brass — no piercing required, just slide on and glow.',
    details: [
      '18k gold plated over recycled brass',
      'Hand-set cubic zirconia crystals',
      'No piercing required — adjustable fit',
      'Sold as a single cuff',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently with the soft pouch provided and store in your Velmora box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    compareAt: null,
    category: 'necklaces',
    material: 'gold',
    rating: 4.8,
    reviews: 167,
    isBestseller: true,
    isNew: true,
    variants: ['Gold', 'Silver'],
    description:
      'A garden rendered in crystal. Jewel-toned blossoms gather along a delicate 18k gold-plated chain — an heirloom-feel statement that still whispers.',
    details: [
      '18k gold plated over recycled brass',
      'Multicolor hand-set crystals',
      'Adjustable 16–18" chain with extender',
      'Lobster clasp closure',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently with the soft pouch provided and store in your Velmora box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    compareAt: 48,
    category: 'huggies',
    material: 'gold',
    rating: 5.0,
    reviews: 342,
    isBestseller: true,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'The everyday huggie, perfected. A smooth, light-catching dome that hugs the lobe — substantial in look, featherlight in feel. You will forget you are wearing them.',
    details: [
      '18k gold plated over recycled brass',
      'High-polish dome finish',
      'Hypoallergenic, nickel-free posts',
      'Hinged huggie closure',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently with the soft pouch provided and store in your Velmora box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    compareAt: null,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviews: 128,
    isBestseller: true,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'Filigree as fine as lace. Warm amber-toned drops with hand-textured detailing that moves beautifully — from candlelit dinners to quiet Sundays.',
    details: [
      '18k gold plated over recycled brass',
      'Hand-textured filigree drops',
      'Hypoallergenic, nickel-free hooks',
      'Lightweight all-day comfort',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently with the soft pouch provided and store in your Velmora box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day hassle-free returns.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    compareAt: 120,
    category: 'sets',
    material: 'gold',
    rating: 4.9,
    reviews: 96,
    isBestseller: true,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'Our signature pairing, nestled in a keepsake gift box. A crystal-drop necklace with matching earrings — the gift that says you thought of everything.',
    details: [
      '18k gold plated over recycled brass',
      'Necklace + matching crystal earrings',
      'Presented in a signature Velmora gift box',
      'Includes a hand-written gift note option',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently with the soft pouch provided and store in your Velmora box.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day hassle-free returns.',
  },
];

// Additional catalog pieces so the shop grid feels like a real store.
export const EXTRA_PRODUCTS = [
  {
    id: 'petite-luna-studs',
    name: 'Petite Luna Studs',
    tagline: 'Crescent moon stud earrings',
    price: 32,
    compareAt: null,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 89,
    isBestseller: false,
    isNew: true,
    variants: ['Gold', 'Silver'],
    description:
      'Tiny crescent moons, polished to a soft gleam. The stud you will reach for every single morning.',
    details: [
      '18k gold plated over recycled brass',
      'Polished crescent silhouette',
      'Hypoallergenic, nickel-free posts',
      'Secure butterfly backs',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'soleil-chain-necklace',
    name: 'Soleil Chain Necklace',
    tagline: 'Dainty gold paperclip chain',
    price: 46,
    compareAt: null,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 151,
    isBestseller: false,
    isNew: true,
    variants: ['Gold', 'Silver'],
    description:
      'A featherlight paperclip chain that layers like a dream and shines on its own. Your new foundation piece.',
    details: [
      '18k gold plated over recycled brass',
      'Adjustable 15–17" chain',
      'Wear solo or layered',
      'Lobster clasp closure',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'opal-muse-huggies',
    name: 'Opal Muse Huggies',
    tagline: 'Opal drop huggie earrings',
    price: 44,
    compareAt: 56,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 73,
    isBestseller: false,
    isNew: true,
    variants: ['Gold', 'Silver'],
    description:
      'Iridescent opal charms sway from slim gold huggies. Soft, dreamy, quietly mesmerising.',
    details: [
      '18k gold plated over recycled brass',
      'Lab-created opal charms',
      'Hypoallergenic, nickel-free',
      'Removable charms — two looks in one',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'heritage-pearl-drops',
    name: 'Heritage Pearl Drops',
    tagline: 'Baroque pearl drop earrings',
    price: 58,
    compareAt: null,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 112,
    isBestseller: false,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'Baroque freshwater pearls on warm gold hooks — each pair beautifully one of a kind.',
    details: [
      '18k gold plated over recycled brass',
      'Genuine baroque freshwater pearls',
      'Naturally unique shapes',
      'Hypoallergenic, nickel-free hooks',
    ],
    care: 'Avoid water, perfume and lotions. Pearls love to be worn — wipe after use.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'isla-pendant-necklace',
    name: 'Isla Pendant Necklace',
    tagline: 'Molten gold disc pendant',
    price: 52,
    compareAt: null,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 98,
    isBestseller: false,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'A molten, hand-formed disc that catches light like water. Quietly sculptural, endlessly wearable.',
    details: [
      '18k gold plated over recycled brass',
      'Hand-formed molten disc pendant',
      'Adjustable 16–18" chain',
      'Tarnish-resistant finish',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'mini-aria-huggies',
    name: 'Mini Aria Huggies',
    tagline: 'Slim everyday gold huggies',
    price: 34,
    compareAt: null,
    category: 'huggies',
    material: 'gold',
    rating: 4.8,
    reviews: 204,
    isBestseller: false,
    isNew: false,
    variants: ['Gold', 'Silver'],
    description:
      'The slimmest huggie in our collection. A barely-there gleam for second piercings and minimalist ears.',
    details: [
      '18k gold plated over recycled brass',
      'Slim 10mm inner diameter',
      'Hypoallergenic, nickel-free',
      'Hinged huggie closure',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
  {
    id: 'lumiere-tennis-bracelet',
    name: 'Lumière Tennis Bracelet',
    tagline: 'Dainty crystal tennis bracelet',
    price: 62,
    compareAt: 78,
    category: 'sets',
    material: 'gold',
    rating: 4.7,
    reviews: 64,
    isBestseller: false,
    isNew: true,
    variants: ['Gold', 'Silver'],
    description:
      'A river of hand-set crystals on a supple gold chain. Understated sparkle for every wrist, every day.',
    details: [
      '18k gold plated over recycled brass',
      'Hand-set cubic zirconia',
      'Adjustable 6–7.5" length',
      'Secure box clasp',
    ],
    care: 'Avoid water, perfume and lotions. Wipe gently and store in your Velmora box.',
    shipping: 'Free worldwide shipping. Dispatched within 1–2 business days. 30-day returns.',
  },
];

export const ALL_PRODUCTS = [...PRODUCTS, ...EXTRA_PRODUCTS];

export function getProductById(id) {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product, count = 4) {
  if (!product) return [];
  const sameCategory = ALL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  );
  const others = ALL_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
