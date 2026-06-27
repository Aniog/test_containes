export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 126,
    description:
      'A sculptural gold ear cuff traced with a crystal accent for a luminous, no-piercing-needed finish.',
    details:
      'Designed to catch the light from every angle, this polished cuff adds a refined glimmer to everyday stacks and evening looks.',
    care: '18K gold plated over brass with hand-set crystal. Keep away from perfumes and water, store in the Velmora pouch, and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'Bestseller',
    variants: ['Gold', 'Silver'],
    imageTone: 'warm gold crystal ear cuff on model ear quiet luxury',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 92,
    description:
      'A delicate floral crystal necklace with soft multicolor stones and a graceful demi-fine gold chain.',
    details:
      'A romantic centerpiece with restrained color, created for gifting moments and polished self-purchase styling.',
    care: '18K gold plated chain with crystal floral pendant. Avoid direct moisture, lotions, and harsh cleaners.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'Gift pick',
    variants: ['Gold', 'Silver'],
    imageTone: 'multicolor floral crystal gold necklace editorial neckline',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 5,
    reviews: 188,
    description:
      'Chunky gold dome huggie earrings with a high-polish finish and comfortable everyday closure.',
    details:
      'A modern rounded silhouette that layers beautifully with studs or makes a minimal statement alone.',
    care: '18K gold plated over recycled brass with hypoallergenic posts. Wipe after wear and store separately.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'Most loved',
    variants: ['Gold', 'Silver'],
    imageTone: 'chunky gold dome huggie earrings close up warm studio',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 74,
    description:
      'Textured gold filigree drop earrings with intricate lacework and a softly luminous finish.',
    details:
      'Airy but memorable, these drops bring artisanal texture to silk blouses, slip dresses, and simple tees.',
    care: '18K gold plated textured filigree. Store dry, avoid tugging delicate details, and clean with a dry microfiber cloth.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'New classic',
    variants: ['Gold', 'Silver'],
    imageTone: 'textured gold filigree drop earrings dark neutral editorial',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 61,
    description:
      'A gift-boxed earring and necklace set, curated for effortless occasion dressing and meaningful gifting.',
    details:
      'The polished ready-to-gift pairing brings together a refined necklace and luminous earrings in our signature keepsake box.',
    care: '18K gold plated demi-fine set with hypoallergenic earrings. Keep pieces in separate compartments to protect the finish.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    badge: 'Ready to gift',
    variants: ['Gold', 'Silver'],
    imageTone: 'gift boxed gold earring necklace jewelry set ivory velvet',
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    copy: 'Light-catching drops, cuffs, and polished everyday silhouettes.',
    query: 'gold earrings on model warm quiet luxury',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    copy: 'Delicate chains and crystal pendants made for close-to-heart gifting.',
    query: 'gold crystal necklace on neckline warm editorial',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    copy: 'Comfortable rounded hoops with a sculptural demi-fine finish.',
    query: 'gold huggie earrings close up on ear neutral background',
  },
]

export const ugcStories = [
  {
    id: 'morning-stack',
    caption: 'Morning gold stack',
    detail: 'Soft huggies with a silk shirt and coffee light.',
  },
  {
    id: 'date-night',
    caption: 'Date-night shimmer',
    detail: 'Crystal accents catching candlelight at dinner.',
  },
  {
    id: 'gift-unboxing',
    caption: 'Gift-ready glow',
    detail: 'A velvet box opened on warm ivory linen.',
  },
  {
    id: 'necklace-layer',
    caption: 'Layered neckline',
    detail: 'A floral pendant layered with fine gold chains.',
  },
  {
    id: 'ear-party',
    caption: 'Polished ear party',
    detail: 'Dome huggies styled with a delicate cuff.',
  },
]

export const testimonials = [
  {
    name: 'Mara L.',
    text: 'The Golden Sphere Huggies feel far more expensive than they are. I wear them almost daily.',
  },
  {
    name: 'Elise R.',
    text: 'Beautiful packaging, warm gold tone, and no irritation. It made the perfect birthday gift.',
  },
  {
    name: 'Nina S.',
    text: 'Velmora has that subtle heirloom look without feeling precious. The pieces layer perfectly.',
  },
]

export const formatPrice = (price) => `$${price}`
