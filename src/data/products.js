export const products = [
  {
    id: 'velmora-vivid-aura',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: 'Gold Plated + Crystal',
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    shortDescription: 'A sculptural gold ear cuff with a crystal glint for understated shine.',
    details:
      'Designed for day-to-night layering, this ear cuff hugs the ear with a softly polished silhouette and a single crystal flash that feels elevated rather than overly ornate.',
    materialsCare:
      '18K gold-plated brass with cubic zirconia. Hypoallergenic, nickel-free, and best kept dry. Store in the Velmora pouch between wears to preserve its luster.',
    shippingReturns:
      'Free worldwide shipping on orders over $75, easy 30-day returns, and gift-ready packaging included with every order.',
    tones: ['gold', 'silver'],
    reelCaption: 'Soft sparkle for candlelit dinners.',
    galleryNotes: [
      'Close-up finish and crystal detail',
      'Layered styling on the ear',
      'Gift-ready presentation',
    ],
  },
  {
    id: 'velmora-majestic-flora',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Gold Plated + Crystal',
    price: 68,
    rating: 4.8,
    reviews: 96,
    badge: 'Gift Favorite',
    shortDescription: 'A delicate floral crystal necklace with soft color and heirloom energy.',
    details:
      'This necklace pairs painterly floral crystals with a warm gold chain, creating a feminine statement that still feels effortless enough for everyday styling.',
    materialsCare:
      '18K gold-plated chain with multicolor crystal accents. Avoid perfume, lotions, and water exposure. Wipe gently with a soft dry cloth after wear.',
    shippingReturns:
      'Ships in a velour gift box within 1-2 business days. Complimentary exchanges and 30-day returns are available worldwide.',
    tones: ['gold', 'silver'],
    reelCaption: 'An instant neckline glow-up.',
    galleryNotes: [
      'Petal-inspired crystal setting',
      'Editorial neckline layering',
      'Special-occasion gift styling',
    ],
  },
  {
    id: 'velmora-golden-sphere',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 144,
    badge: 'Everyday Icon',
    shortDescription: 'Chunky dome huggies with a smooth mirror finish and modern weight.',
    details:
      'A best-selling Velmora silhouette, these huggies bring a softly sculptural statement to daily dressing with just the right amount of volume.',
    materialsCare:
      '18K gold-plated brass. Hypoallergenic and lightweight for daily wear. Keep away from moisture and polish gently with a jewelry cloth.',
    shippingReturns:
      'Free worldwide shipping over $75 and 30-day returns. Gift notes and premium boxing are available at checkout later.',
    tones: ['gold', 'silver'],
    reelCaption: 'Your polished everyday signature.',
    galleryNotes: [
      'Reflective dome finish',
      'Styled in a curated ear stack',
      'Minimal packaging reveal',
    ],
  },
  {
    id: 'velmora-amber-lace',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Textured Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 81,
    badge: 'New Arrival',
    shortDescription: 'Filigree drop earrings with warm texture and graceful movement.',
    details:
      'Inspired by vintage lacework, these drops frame the face with intricate texture while keeping the silhouette light, elegant, and easy to wear.',
    materialsCare:
      'Textured 18K gold-plated brass with hypoallergenic posts. Protect the finish by removing before showering or sleeping and storing flat in the box.',
    shippingReturns:
      'Orders ship quickly from our studio with tracked delivery. Returns and exchanges are accepted within 30 days of receipt.',
    tones: ['gold', 'silver'],
    reelCaption: 'Vintage romance, modern finish.',
    galleryNotes: [
      'Intricate filigree texture',
      'Warm movement against the neck',
      'Occasion-ready styling moment',
    ],
  },
  {
    id: 'velmora-royal-heirloom',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: 'Gift Boxed Set',
    price: 95,
    rating: 5,
    reviews: 64,
    badge: 'Limited Set',
    shortDescription: 'A gift-boxed earring and necklace pairing designed for effortless giving.',
    details:
      'Thoughtfully paired to feel complete on arrival, this heirloom-inspired set makes gifting easy while keeping the styling refined and wearable.',
    materialsCare:
      '18K gold-plated set including matching earrings and necklace. Hypoallergenic and presented in a signature Velmora keepsake box.',
    shippingReturns:
      'Gift-ready packaging is included. Enjoy complimentary worldwide shipping over $75 and 30-day returns if the set is not quite right.',
    tones: ['gold', 'silver'],
    reelCaption: 'The easiest luxury gift to give.',
    galleryNotes: [
      'Complete set styling',
      'Keepsake box presentation',
      'Layered gift-worthy close-up',
    ],
  },
]

export const collectionCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']

export const materialFilters = [
  'All',
  '18K Gold Plated',
  'Gold Plated + Crystal',
  'Textured Gold Plated',
  'Gift Boxed Set',
]

export const priceFilters = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: '80-120', label: '$80 – $120', min: 80.01, max: 120 },
]

export const formatPrice = (price) => `$${price}`

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 3)
