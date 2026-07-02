export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Sets' },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    badge: 'Bestseller',
    materialsList: ['18K gold-plated brass', 'cubic zirconia accent', 'hypoallergenic'],
    description:
      'A sculptural gold ear cuff illuminated by a single luminous crystal. Designed to catch candlelight and compliments alike, it hugs the ear with effortless elegance.',
    care: 'Avoid contact with perfumes and lotions. Store in a dry pouch and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: true },
    ],
    images: {
      main: { query: 'Vivid Aura Jewels gold ear cuff crystal accent luxury jewelry', ratio: '3x4', width: 800 },
      hover: { query: 'gold ear cuff crystal worn on ear close up editorial jewelry', ratio: '3x4', width: 800 },
      gallery: [
        { query: 'Vivid Aura Jewels gold ear cuff crystal accent luxury jewelry', ratio: '1x1', width: 800 },
        { query: 'gold ear cuff crystal model ear editorial warm light', ratio: '1x1', width: 800 },
        { query: 'gold ear cuff crystal packaging jewelry box', ratio: '1x1', width: 800 },
      ],
    },
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    badge: 'New',
    materialsList: ['18K gold-plated chain', 'hand-set enamel petals', 'cubic zirconia centers'],
    description:
      'A romantic bouquet you can wear every day. Multicolor floral crystals are arranged along a delicate gold chain, evoking vintage gardens and sun-drenched afternoons.',
    care: 'Wipe after wear. Remove before swimming or showering to preserve plating.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
    ],
    images: {
      main: { query: 'Majestic Flora Nectar multicolor floral crystal necklace gold', ratio: '3x4', width: 800 },
      hover: { query: 'floral crystal gold necklace worn on neck editorial', ratio: '3x4', width: 800 },
      gallery: [
        { query: 'Majestic Flora Nectar multicolor floral crystal necklace gold', ratio: '1x1', width: 800 },
        { query: 'floral crystal gold necklace close up warm background', ratio: '1x1', width: 800 },
        { query: 'gold necklace floral crystals layering editorial', ratio: '1x1', width: 800 },
      ],
    },
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    category: 'huggies',
    badge: null,
    materialsList: ['18K gold-plated brass', 'surgical steel post', 'secure click closure'],
    description:
      'The perfect everyday hoop, reimagined as a polished dome. These chunky huggies sit close to the lobe and reflect light with every turn.',
    care: 'Store flat in provided box. Clean with a microfiber cloth to maintain shine.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
      { id: 'silver', name: 'Silver', inStock: false },
    ],
    images: {
      main: { query: 'Golden Sphere Huggies chunky gold dome hoop earrings', ratio: '3x4', width: 800 },
      hover: { query: 'gold dome huggie earrings worn ear close up', ratio: '3x4', width: 800 },
      gallery: [
        { query: 'Golden Sphere Huggies chunky gold dome hoop earrings', ratio: '1x1', width: 800 },
        { query: 'gold huggie earrings pair on neutral background', ratio: '1x1', width: 800 },
        { query: 'gold dome huggies worn double piercing editorial', ratio: '1x1', width: 800 },
      ],
    },
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    category: 'earrings',
    badge: 'Editor\'s Pick',
    materialsList: ['18K gold-plated brass', 'textured filigree casting', 'hypoallergenic hook'],
    description:
      'Intricate filigree drops inspired by antique lace and golden hour light. The textured surface catches shadows and creates a soft, glowing movement around the face.',
    care: 'Keep away from moisture. Use a soft brush to clean detailed surfaces.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
    ],
    images: {
      main: { query: 'Amber Lace Earrings textured gold filigree drop earrings', ratio: '3x4', width: 800 },
      hover: { query: 'gold filigree drop earrings worn on ear editorial warm', ratio: '3x4', width: 800 },
      gallery: [
        { query: 'Amber Lace Earrings textured gold filigree drop earrings', ratio: '1x1', width: 800 },
        { query: 'gold filigree drop earrings detail close up', ratio: '1x1', width: 800 },
        { query: 'gold drop earrings model portrait jewelry editorial', ratio: '1x1', width: 800 },
      ],
    },
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    category: 'sets',
    badge: 'Gift Set',
    materialsList: ['18K gold-plated brass', 'cubic zirconia accents', 'gift-ready velvet box'],
    description:
      'A curated pairing for the woman who has everything — except this. The Royal Heirloom Set combines a pendant necklace and coordinating earrings in a soft velvet gift box.',
    care: 'Store in the provided velvet box. Avoid direct contact with water and cosmetics.',
    shipping: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    variants: [
      { id: 'gold', name: 'Gold', inStock: true },
    ],
    images: {
      main: { query: 'Royal Heirloom Set gold earring necklace gift box jewelry', ratio: '3x4', width: 800 },
      hover: { query: 'gold necklace earrings gift set worn editorial', ratio: '3x4', width: 800 },
      gallery: [
        { query: 'Royal Heirloom Set gold earring necklace gift box jewelry', ratio: '1x1', width: 800 },
        { query: 'gold jewelry gift set velvet box necklace earrings', ratio: '1x1', width: 800 },
        { query: 'gold pendant earrings set on model close up', ratio: '1x1', width: 800 },
      ],
    },
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Isabella M.',
    text: 'The packaging alone felt like a luxury gift. I wear my huggies every day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia L.',
    text: 'Finally demi-fine jewelry that looks expensive without the markup. The ear cuff gets compliments every time.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma R.',
    text: 'Bought the heirloom set for my sister and she absolutely loved it. Beautiful quality and fast shipping.',
    rating: 5,
  },
]

export const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday gold moments' },
  { id: 'ugc-2', caption: 'Stacked & styled' },
  { id: 'ugc-3', caption: 'A little luxury' },
  { id: 'ugc-4', caption: 'Gift to myself' },
  { id: 'ugc-5', caption: 'Evening light' },
  { id: 'ugc-6', caption: 'Layered in gold' },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(productId, limit = 4) {
  return products.filter((p) => p.id !== productId).slice(0, limit)
}

export function formatPrice(price) {
  return `$${price.toFixed(2)}`
}
