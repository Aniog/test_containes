// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk image system (data-strk-img) resolved at runtime.
// Each product carries stable text-reference IDs so image queries stay in sync.

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDesc: 'Gold ear cuff with a single crystal accent — effortless everyday edge.',
    description:
      'The Vivid Aura ear cuff is sculpted from 18K gold-plated brass and finished with a hand-set crystal that catches the light with every turn. No piercing required — it simply hugs the cartilage for an effortless, modern finish.',
    materials: '18K gold-plated brass, cubic zirconia crystal. Hypoallergenic, nickel-free.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgId2: 'prod-vivid-aura-jewels-img2',
    gallery: [
      { id: 'prod-vivid-aura-jewels-img', largeId: 'prod-vivid-aura-jewels-img-large', label: 'main', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
      { id: 'prod-vivid-aura-jewels-img2', largeId: 'prod-vivid-aura-jewels-img2-large', label: 'worn', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
      { id: 'prod-vivid-aura-jewels-img3', largeId: 'prod-vivid-aura-jewels-img3-large', label: 'detail', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
      { id: 'prod-vivid-aura-jewels-img4', largeId: 'prod-vivid-aura-jewels-img4-large', label: 'lifestyle', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    shortDesc: 'Multicolor floral crystal necklace — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar is a delicate pendant necklace where tiny floral motifs bloom in multicolor crystals. Suspended on a fine gold chain, it brings a soft, romantic glow to both day and evening looks.',
    materials: '18K gold-plated brass, multicolor cubic zirconia. Adjustable 40–45cm chain.',
    care: 'Keep dry and away from perfumes. Clean with a microfibre cloth. Store flat in its box.',
    tones: ['Gold'],
    badge: 'New',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgId2: 'prod-majestic-flora-nectar-img2',
    gallery: [
      { id: 'prod-majestic-flora-nectar-img', largeId: 'prod-majestic-flora-nectar-img-large', label: 'main', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
      { id: 'prod-majestic-flora-nectar-img2', largeId: 'prod-majestic-flora-nectar-img2-large', label: 'worn', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
      { id: 'prod-majestic-flora-nectar-img3', largeId: 'prod-majestic-flora-nectar-img3-large', label: 'detail', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
      { id: 'prod-majestic-flora-nectar-img4', largeId: 'prod-majestic-flora-nectar-img4-large', label: 'lifestyle', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviews: 203,
    shortDesc: 'Chunky gold dome huggie earrings — bold, polished, everyday-ready.',
    description:
      'Golden Sphere Huggies are chunky dome hoops with a high-polish gold finish. Designed to sit snug against the lobe, they deliver quiet impact from desk to dinner.',
    materials: '18K gold-plated brass, hypoallergenic post. 12mm dome.',
    care: 'Remove before showering or sleeping. Wipe clean with a soft dry cloth.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgId2: 'prod-golden-sphere-huggies-img2',
    gallery: [
      { id: 'prod-golden-sphere-huggies-img', largeId: 'prod-golden-sphere-huggies-img-large', label: 'main', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
      { id: 'prod-golden-sphere-huggies-img2', largeId: 'prod-golden-sphere-huggies-img2-large', label: 'worn', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
      { id: 'prod-golden-sphere-huggies-img3', largeId: 'prod-golden-sphere-huggies-img3-large', label: 'detail', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
      { id: 'prod-golden-sphere-huggies-img4', largeId: 'prod-golden-sphere-huggies-img4-large', label: 'lifestyle', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviews: 64,
    shortDesc: 'Textured gold filigree drop earrings — heirloom craft, modern line.',
    description:
      'Amber Lace reimagines traditional filigree as a lightweight drop earring. The openwork gold catches light like fine lace, moving gently with the wearer for an heirloom feel that is anything but heavy.',
    materials: '18K gold-plated brass filigree. Hypoallergenic lever-back closure.',
    care: 'Handle with care to protect the openwork. Store in a separate compartment.',
    tones: ['Gold'],
    badge: null,
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgId2: 'prod-amber-lace-earrings-img2',
    gallery: [
      { id: 'prod-amber-lace-earrings-img', largeId: 'prod-amber-lace-earrings-img-large', label: 'main', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
      { id: 'prod-amber-lace-earrings-img2', largeId: 'prod-amber-lace-earrings-img2-large', label: 'worn', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
      { id: 'prod-amber-lace-earrings-img3', largeId: 'prod-amber-lace-earrings-img3-large', label: 'detail', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
      { id: 'prod-amber-lace-earrings-img4', largeId: 'prod-amber-lace-earrings-img4-large', label: 'lifestyle', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviews: 41,
    shortDesc: 'Gift-boxed earring + necklace set — the complete gifting moment.',
    description:
      'Royal Heirloom is a coordinated set of crystal-accented earrings and a matching pendant necklace, presented in a signature Velmora gift box. The perfect ready-to-gift pairing for milestones and anniversaries.',
    materials: '18K gold-plated brass, cubic zirconia. Necklace 42cm + 3cm extender.',
    care: 'Store each piece in the gift box compartments. Avoid moisture and cosmetics.',
    tones: ['Gold'],
    badge: 'Gift Set',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgId2: 'prod-royal-heirloom-set-img2',
    gallery: [
      { id: 'prod-royal-heirloom-set-img', largeId: 'prod-royal-heirloom-set-img-large', label: 'main', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
      { id: 'prod-royal-heirloom-set-img2', largeId: 'prod-royal-heirloom-set-img2-large', label: 'worn', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
      { id: 'prod-royal-heirloom-set-img3', largeId: 'prod-royal-heirloom-set-img3-large', label: 'detail', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
      { id: 'prod-royal-heirloom-set-img4', largeId: 'prod-royal-heirloom-set-img4-large', label: 'lifestyle', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
    ],
  },
]

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)

export const getRelated = (product, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== product.id).slice(0, limit)

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
