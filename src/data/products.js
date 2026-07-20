// Seed product data for Velmora Fine Jewelry
// Images are populated at runtime via the strk-img system using descriptive queries.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    subcategory: 'Ear Cuff',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    description:
      'A sculptural gold ear cuff crowned with a single crystal accent. Designed to be worn alone or stacked, it brings a quiet gleam to the curve of the ear.',
    materials:
      '18K gold plated brass. Hypoallergenic, nickel and lead free. Crystal accent set by hand.',
    care: 'Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'vivid-aura-1', alt: 'Vivid Aura gold ear cuff with crystal on a model' },
      { id: 'vivid-aura-2', alt: 'Vivid Aura ear cuff detail on dark background' },
      { id: 'vivid-aura-3', alt: 'Vivid Aura ear cuff worn stacked' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    subcategory: 'Pendant',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 203,
    description:
      'A delicate floral pendant set with multicolor crystals, suspended from a fine gold chain. A garden of light against the collarbone.',
    materials:
      '18K gold plated brass chain. Hand-set multicolor crystals. Lobster clasp with adjustable length.',
    care: 'Keep dry and away from perfumes. Store flat in the provided pouch to protect the crystals.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'flora-nectar-1', alt: 'Majestic Flora Nectar multicolor crystal necklace on model' },
      { id: 'flora-nectar-2', alt: 'Floral crystal pendant detail on neutral background' },
      { id: 'flora-nectar-3', alt: 'Majestic Flora necklace worn layered' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    subcategory: 'Huggie',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    description:
      'Chunky gold dome huggies that hug the lobe with a soft, polished gleam. An everyday signature, sold as a pair.',
    materials:
      '18K gold plated brass. Hypoallergenic hinged huggie closure. Nickel and lead free.',
    care: 'Wipe clean with a soft cloth after wear. Store in the provided pouch to prevent scratching.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'sphere-huggies-1', alt: 'Golden Sphere chunky gold dome huggie earrings on model' },
      { id: 'sphere-huggies-2', alt: 'Gold dome huggie earring detail on dark background' },
      { id: 'sphere-huggies-3', alt: 'Golden Sphere huggies worn on ear' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    subcategory: 'Drop',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 91,
    description:
      'Textured gold filigree drops that move like lace. Lightweight and luminous, they catch the light with every turn of the head.',
    materials:
      '18K gold plated brass with textured filigree. Hypoallergenic post. Nickel and lead free.',
    care: 'Handle with care to preserve the filigree. Avoid water and perfume. Store flat in the provided pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'amber-lace-1', alt: 'Amber Lace textured gold filigree drop earrings on model' },
      { id: 'amber-lace-2', alt: 'Gold filigree drop earring detail on neutral background' },
      { id: 'amber-lace-3', alt: 'Amber Lace earrings worn with hair up' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Necklaces',
    subcategory: 'Set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    description:
      'A coordinated earring and necklace set, presented in a signature gift box. The heirloom-worthy pairing for gifting or keeping.',
    materials:
      '18K gold plated brass. Matching earrings and pendant necklace. Hypoallergenic, nickel and lead free.',
    care: 'Store each piece separately in the gift box to prevent tangling. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days in signature gift box. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'heirloom-set-1', alt: 'Royal Heirloom gold earring and necklace set in gift box' },
      { id: 'heirloom-set-2', alt: 'Heirloom set earrings and necklace detail on dark background' },
      { id: 'heirloom-set-3', alt: 'Royal Heirloom set worn together on model' },
    ],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops and statement studs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains and layered sets',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished dome huggies for every day',
  },
]

export const testimonials = [
  {
    name: 'Elena R.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real. I wear my huggies every single day — they have not tarnished once.',
  },
  {
    name: 'Maya T.',
    rating: 5,
    text: 'Gifted the Flora Nectar necklace to my sister and she cried. The packaging alone feels like a treasure.',
  },
  {
    name: 'Sofia L.',
    rating: 5,
    text: 'Quiet luxury without the loud price tag. The Amber Lace earrings move beautifully and catch every light.',
  },
]

export const reelItems = [
  { id: 'reel-1', caption: 'Stacked & golden', imgId: 'reel-img-1' },
  { id: 'reel-2', caption: 'Everyday huggies', imgId: 'reel-img-2' },
  { id: 'reel-3', caption: 'A floral glow', imgId: 'reel-img-3' },
  { id: 'reel-4', caption: 'Filigree in motion', imgId: 'reel-img-4' },
  { id: 'reel-5', caption: 'The heirloom set', imgId: 'reel-img-5' },
  { id: 'reel-6', caption: 'Worn at golden hour', imgId: 'reel-img-6' },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
