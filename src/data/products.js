export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    short: 'A sculptural gold ear cuff crowned with a single hand-set crystal — no piercing required.',
    description:
      'The Vivid Aura Jewels cuff wraps the ear in a gentle arc of 18K gold-plated sterling silver, finished with a brilliant crystal accent that catches light with every movement. Designed to be worn alone or layered with huggies for a curated ear.',
    materials:
      '18K gold plated over recycled 925 sterling silver. Cubic zirconia crystal accent. Nickel-free and hypoallergenic. To care for your piece, avoid water, perfume and lotions, and store in the provided pouch.',
    material: '18K Gold Plated',
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 84,
    badge: 'New',
    short: 'A multicolor floral crystal necklace that blooms softly against the collarbone.',
    description:
      'Majestic Flora Nectar gathers hand-set crystals in warm botanical hues along a delicate gold chain. Each stone is placed to mimic petals mid-bloom — an heirloom silhouette with a modern, light-catching finish.',
    materials:
      '18K gold plated over brass. Multicolor cubic zirconia crystals. Adjustable 16–18" chain with lobster clasp. Nickel-free and hypoallergenic. Keep away from water and store flat in its box.',
    material: '18K Gold Plated',
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 212,
    badge: 'Bestseller',
    short: 'Chunky gold dome huggies — the everyday pair that goes with everything.',
    description:
      'Our Golden Sphere Huggies are sculpted into a softly rounded dome that hugs the lobe. Polished to a mirror warmth, they are lightweight enough for all-day wear and bold enough to stand alone.',
    materials:
      '18K gold plated over recycled 925 sterling silver. Hinged closure. Nickel-free and hypoallergenic. Wipe with a soft cloth after wear; avoid water and perfume.',
    material: '18K Gold Plated',
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 67,
    badge: null,
    short: 'Textured gold filigree drops, woven like lace and warm as amber light.',
    description:
      'Amber Lace Earrings are cast from hand-drawn filigree, giving each drop an airy, textile-like texture. They sway gently with movement — an evening piece that remains effortless by day.',
    materials:
      '18K gold plated over brass. Secure post back. Nickel-free and hypoallergenic. Store in pouch away from humidity; polish gently with a dry cloth.',
    material: '18K Gold Plated',
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 43,
    badge: 'Gift Ready',
    short: 'A gift-boxed earring and necklace set, made for moments that matter.',
    description:
      'The Royal Heirloom Set pairs crystal-studded huggies with a matching pendant necklace, presented in our signature linen gift box. A keepsake for anniversaries, milestones, or the simple act of treating yourself.',
    materials:
      '18K gold plated over recycled 925 sterling silver. Cubic zirconia crystals. Necklace adjustable 16–18". Nickel-free and hypoallergenic. Includes linen gift box and care card.',
    material: '18K Gold Plated',
    bestseller: true,
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', test: (p) => p.price < 50 },
  { id: '50-75', label: '$50 – $75', test: (p) => p.price >= 50 && p.price <= 75 },
  { id: 'over-75', label: 'Over $75', test: (p) => p.price > 75 },
]

export const getProduct = (id) => products.find((p) => p.id === id)

export const formatPrice = (n) => `$${n.toFixed(0)}`
