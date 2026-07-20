export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    description:
      'A sculptural gold-plated ear cuff illuminated by a single precision-cut crystal. Designed to sit comfortably on the ear without piercing, Vivid Aura adds a refined spark to both everyday looks and evening edits.',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    material: '18k-gold-plated',
    badges: ['bestseller'],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    materials: ['Brass base', '18k gold plating', 'Cubic zirconia accent', 'Nickel-free, hypoallergenic'],
    care: ['Avoid contact with perfume and lotion', 'Store in the provided pouch', 'Wipe gently with a soft cloth'],
    shipping: 'Complimentary worldwide shipping on orders over $75. Orders ship within 1–2 business days.',
    returns: 'We offer a 30-day hassle-free return or exchange on all unworn pieces in original packaging.',
    imgQuery: 'gold ear cuff crystal jewelry close up editorial warm lighting',
    hoverQuery: 'gold ear cuff crystal jewelry on model ear close up',
    related: ['golden-sphere-huggies', 'amber-lace-earrings'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    description:
      'A delicate strand of hand-set floral crystals in soft amber, blush, and champagne tones. Suspended from a fine gold-plated chain, this necklace catches light beautifully and layers effortlessly with your favorite chains.',
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    material: '18k-gold-plated',
    badges: ['bestseller', 'new'],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: false },
    ],
    materials: ['Brass base', '18k gold plating', 'Hand-set glass crystals', 'Lobster clasp closure'],
    care: ['Keep dry and away from harsh chemicals', 'Lay flat when not in use'],
    shipping: 'Complimentary worldwide shipping on orders over $75.',
    returns: '30-day returns or exchanges.',
    imgQuery: 'gold floral crystal necklace editorial jewelry photography warm neutral background',
    hoverQuery: 'floral crystal necklace on neck close up editorial',
    related: ['royal-heirloom-set', 'amber-lace-earrings'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    description:
      'Sculptural dome huggies with a mirror-polished finish. Substantial yet lightweight, they hug the lobe with a secure click closure — the ultimate everyday gold statement.',
    price: 38,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 211,
    category: 'huggies',
    material: '18k-gold-plated',
    badges: ['bestseller'],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    materials: ['Brass base', '18k gold plating', 'Hinge with click closure', 'Nickel-free'],
    care: ['Remove before swimming or showering', 'Store separately to avoid scratches'],
    shipping: 'Complimentary worldwide shipping on orders over $75.',
    returns: '30-day returns or exchanges.',
    imgQuery: 'gold dome huggie earrings editorial jewelry photography dark background',
    hoverQuery: 'gold huggie earrings on ear close up model',
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    description:
      'Intricate filigree drops inspired by vintage lace, finished in warm 18k gold plate. Movement-catching and featherlight, Amber Lace brings romantic detail to minimal outfits.',
    price: 54,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 76,
    category: 'earrings',
    material: '18k-gold-plated',
    badges: [],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
    ],
    materials: ['Brass base', '18k gold plating', 'Surgical steel posts', 'Butterfly backs'],
    care: ['Clean with a dry jewelry cloth', 'Avoid moisture and direct sunlight in storage'],
    shipping: 'Complimentary worldwide shipping on orders over $75.',
    returns: '30-day returns or exchanges.',
    imgQuery: 'gold filigree drop earrings textured lace editorial jewelry photography',
    hoverQuery: 'gold filigree drop earrings on model ear',
    related: ['vivid-aura-jewels', 'majestic-flora-nectar'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    description:
      'A curated gift set featuring a pair of petite dome huggies and a matching pendant necklace, presented in a soft-touch Velmora gift box. A timeless choice for celebrations, thank-yous, and just-because moments.',
    price: 95,
    originalPrice: 118,
    rating: 5.0,
    reviewCount: 54,
    category: 'sets',
    material: '18k-gold-plated',
    badges: ['bestseller', 'gift'],
    variants: [
      { id: 'gold', label: 'Gold', tone: 'gold', inStock: true },
      { id: 'silver', label: 'Silver', tone: 'silver', inStock: true },
    ],
    materials: ['Brass base', '18k gold plating', 'Gift box with ribbon', 'Velvet jewelry pouch included'],
    care: ['Store in gift box when not worn', 'Clean gently with provided cloth'],
    shipping: 'Complimentary worldwide shipping and gift messaging available at checkout.',
    returns: '30-day returns or exchanges on unworn sets in original packaging.',
    imgQuery: 'gold jewelry gift set necklace earrings elegant packaging editorial',
    hoverQuery: 'gold jewelry gift set on model necklace earrings',
    related: ['majestic-flora-nectar', 'golden-sphere-huggies'],
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings editorial jewelry photography warm neutral background' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklaces editorial jewelry photography warm neutral background' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings editorial jewelry photography dark background' },
]

export const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday glow', query: 'woman wearing gold huggie earrings close up ear selfie warm light' },
  { id: 'ugc-2', caption: 'Layered in gold', query: 'woman wearing layered gold necklaces close up editorial' },
  { id: 'ugc-3', caption: 'Office to out', query: 'gold drop earrings on model ear close up fashion editorial' },
  { id: 'ugc-4', caption: 'Gift ready', query: 'gold jewelry gift box ribbon elegant unboxing' },
  { id: 'ugc-5', caption: 'Quiet luxury', query: 'woman with gold ear cuff crystal jewelry profile portrait warm' },
]

export const testimonials = [
  { id: 't1', name: 'Sarah M.', text: 'The quality is stunning for the price. My huggies haven’t tarnished after months of daily wear.', rating: 5 },
  { id: 't2', name: 'Jessica L.', text: 'Bought the Heirloom Set as a birthday gift and she absolutely loved it. Packaging felt so premium.', rating: 5 },
  { id: 't3', name: 'Amanda K.', text: 'Minimal, elegant, and delivery was faster than expected. Already planning my next order.', rating: 5 },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function formatPrice(value) {
  return `$${value.toFixed(2)}`
}
