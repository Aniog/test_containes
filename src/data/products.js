export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      'A sculptural gold ear cuff traced with a single crystal accent for an effortless stacked-ear look.',
    details:
      'Designed to hug the ear without piercing, this polished cuff brings a quiet glint to everyday dressing and evening layers.',
    care: '18K gold-plated brass with crystal accent. Keep dry, avoid perfume, and polish gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'Bestseller',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal',
    price: 68,
    rating: 4.8,
    reviews: 94,
    description:
      'A delicate floral crystal necklace with soft color, golden petals, and a luminous neckline finish.',
    details:
      'A refined pendant necklace made for gifting, layering, and adding a subtle botanical note to silk, linen, or cashmere.',
    care: 'Gold-plated chain with multicolor crystal floral pendant. Store separately in the pouch to protect the stones.',
    shipping: 'Complimentary shipping with tracking. Gift wrapping is available at checkout for every Velmora piece.',
    badge: 'Gift Pick',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 176,
    description:
      'Chunky gold dome huggie earrings with a high-polish curve and everyday weightless feel.',
    details:
      'A modern rounded huggie that gives the look of heirloom gold while remaining light, comfortable, and easy to style.',
    care: '18K gold-plated hypoallergenic posts. Wipe after each wear and keep away from water for longest shine.',
    shipping: 'Ships in 1–2 business days with free worldwide shipping and simple 30-day returns.',
    badge: 'Low Stock',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Textured Gold',
    price: 54,
    rating: 4.7,
    reviews: 83,
    description:
      'Textured gold filigree drop earrings with lace-like movement and warm amber shine.',
    details:
      'Intricate and airy, these drop earrings catch the light beautifully without feeling heavy or overly ornate.',
    care: 'Gold-plated filigree with hypoallergenic hooks. Store flat, avoid lotions, and polish gently.',
    shipping: 'Free global delivery and 30-day returns. All earrings arrive in a soft Velmora keepsake pouch.',
    badge: 'New',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 61,
    description:
      'A gift-boxed earring and necklace set with heirloom-inspired shine and modern demi-fine ease.',
    details:
      'Curated as a complete golden moment, this set makes a polished gift for birthdays, bridesmaids, and self-purchase rituals.',
    care: '18K gold-plated set with crystal accents. Keep each piece in its compartment and avoid moisture.',
    shipping: 'Arrives gift-ready in a Velmora box. Free worldwide shipping and returns within 30 days.',
    badge: 'Gift Ready',
    tones: ['Gold', 'Silver'],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sculptural drops, cuffs, and refined everyday shine.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layerable chains and delicate crystal pendants.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Polished close-fit hoops made for daily wear.',
  },
]

export const reels = [
  {
    id: 'ear-stack',
    caption: 'Golden huggies for the everyday stack',
    context: 'gold huggie earrings worn on ear close up warm light',
  },
  {
    id: 'neckline-glow',
    caption: 'A soft crystal glow at the neckline',
    context: 'delicate gold crystal necklace on model neckline editorial',
  },
  {
    id: 'gift-moment',
    caption: 'Gift-ready pieces with heirloom presence',
    context: 'gold jewelry gift box demi fine elegant hands',
  },
  {
    id: 'quiet-evening',
    caption: 'Quiet gold for late dinner plans',
    context: 'gold drop earrings worn by woman candlelit editorial',
  },
  {
    id: 'mirror-stack',
    caption: 'Layered shine, made personal',
    context: 'woman mirror selfie gold jewelry stack warm neutral',
  },
]

export const testimonials = [
  {
    quote: 'The huggies feel expensive, but I can wear them every day without thinking twice.',
    name: 'Maya R.',
  },
  {
    quote: 'I bought the necklace as a gift and kept coming back to order one for myself.',
    name: 'Claire M.',
  },
  {
    quote: 'Beautiful packaging, soft gold tone, and no irritation on my sensitive ears.',
    name: 'Nina S.',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug) || products[0]

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)
