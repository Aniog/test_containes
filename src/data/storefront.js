export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price)

export const toneOptions = ['Gold Tone', 'Silver Tone']

export const trustBadges = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const products = [
  {
    id: 'velmora-001',
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated & Crystal',
    silhouette: 'Crystal Ear Cuff',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 128,
    description:
      'A sculptural ear cuff with a crystal accent that brings a candlelit gleam to everyday styling.',
    longDescription:
      'Designed to slip on with ease, Vivid Aura Jewels balances a fluid gold curve with a precise crystal accent. It is the kind of piece that turns a simple look into something considered, polished, and quietly striking.',
    materialsCare:
      '18K gold plated brass with cubic zirconia. Nickel-free and hypoallergenic. Store dry and wipe with a soft cloth after wear to keep the finish luminous.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns are accepted within 30 days in original packaging. Gift-ready wrapping is included.',
    imageNotes: [
      'warm-lit close-up of gold ear cuff with crystal accent on model',
      'editorial side profile of gold ear cuff styled with soft makeup',
      'gold ear cuff flat lay on dark stone with crystal detail',
    ],
  },
  {
    id: 'velmora-002',
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated & Crystal',
    silhouette: 'Floral Crystal Necklace',
    badge: 'Gift Favorite',
    rating: 4.8,
    reviews: 96,
    description:
      'A delicate floral necklace with multicolor crystals that layers soft color into a polished neckline.',
    longDescription:
      'Majestic Flora Nectar pairs luminous gold links with a floral pendant scattered in jewel-toned crystals. It feels romantic and elevated, while remaining easy enough for daily wear and gifting.',
    materialsCare:
      '18K gold plated brass with hand-set multicolor crystals. Avoid direct fragrance contact and store in the accompanying pouch when not worn.',
    shippingReturns:
      'Ships within 1 to 2 business days. Free worldwide shipping over $75 and 30-day returns for unworn pieces.',
    imageNotes: [
      'multicolor floral crystal necklace on warm skin editorial portrait',
      'gold floral necklace layered over silk blouse close-up',
      'floral crystal necklace styled on dark neutral backdrop',
    ],
  },
  {
    id: 'velmora-003',
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    silhouette: 'Chunky Dome Huggies',
    badge: 'Everyday Essential',
    rating: 4.9,
    reviews: 214,
    description:
      'Chunky dome huggies with a polished finish that add instant structure, shine, and everyday confidence.',
    longDescription:
      'Golden Sphere Huggies are softly rounded and substantial without feeling heavy. The compact silhouette hugs the ear beautifully, making them ideal for daily wear, stacking, and effortless gifting.',
    materialsCare:
      '18K gold plated brass. Water-resistant for light wear, hypoallergenic, and safe for sensitive ears. Clean gently with a microfiber cloth.',
    shippingReturns:
      'Arrives in our signature cream gift box. Eligible for complimentary shipping thresholds and 30-day returns.',
    imageNotes: [
      'chunky gold dome huggie earrings close-up on ear',
      'editorial portrait with chunky gold huggie earrings',
      'polished gold huggie earrings on neutral silk surface',
    ],
  },
  {
    id: 'velmora-004',
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Textured Gold Finish',
    silhouette: 'Filigree Drop Earrings',
    badge: 'Occasion Ready',
    rating: 4.7,
    reviews: 84,
    description:
      'Textured filigree drops that move softly and frame the face with warm, heirloom-inspired detail.',
    longDescription:
      'Amber Lace Earrings were created for evenings out, celebrations, and the moments that call for a little more romance. Their openwork texture keeps the silhouette airy while the gold finish feels rich and collected.',
    materialsCare:
      'Gold-plated lightweight alloy with textured filigree detailing. Keep away from moisture and store flat to preserve the finish and shape.',
    shippingReturns:
      'Packaged in a protective jewelry pouch and gift box. Returns accepted within 30 days on unworn pieces.',
    imageNotes: [
      'textured gold filigree drop earrings worn on model',
      'gold filigree earrings detail against dark editorial background',
      'statement gold drop earrings styled on warm stone tray',
    ],
  },
  {
    id: 'velmora-005',
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated Gift Set',
    silhouette: 'Gift-Boxed Set',
    badge: 'Gift Edit',
    rating: 5,
    reviews: 61,
    description:
      'A gift-boxed pairing of coordinating earrings and necklace, curated for effortless gifting and celebration.',
    longDescription:
      'Royal Heirloom Set brings together two of our most giftable silhouettes in one polished presentation. It is an instant keepsake with a refined finish, thoughtful packaging, and timeless appeal.',
    materialsCare:
      '18K gold plated brass set with matching necklace and earrings. Hypoallergenic and finished in a polished warm gold tone. Store each piece separately after wear.',
    shippingReturns:
      'Includes signature Velmora gift box and note card. Complimentary worldwide shipping over $75 and 30-day returns.',
    imageNotes: [
      'gift boxed gold jewelry set with earrings and necklace',
      'warm editorial flat lay of gold jewelry gift set',
      'model wearing matching gold necklace and earrings set',
    ],
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Soft statement silhouettes for everyday polish and evening plans.',
    imageNote: 'editorial gold earrings worn on woman in warm light',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layering pieces and gift-ready pendants with luminous detail.',
    imageNote: 'warm gold necklace close-up on model with silk blouse',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Sculpted mini hoops made for easy stacking and daily wear.',
    imageNote: 'close-up of gold huggie earrings on ear editorial beauty shot',
  },
]

export const ugcMoments = [
  {
    id: 'morning-stack',
    title: 'Morning Stack',
    caption: 'The gold stack I reach for before coffee runs and client calls.',
    imageNote: 'vertical editorial close-up of stacked gold earrings on ear',
  },
  {
    id: 'soft-layering',
    title: 'Soft Layering',
    caption: 'A necklace layering moment that feels effortless with a silk button-down.',
    imageNote: 'vertical portrait of woman wearing layered gold necklaces',
  },
  {
    id: 'after-dark',
    title: 'After Dark',
    caption: 'Chunky huggies, low bun, candlelight. Done.',
    imageNote: 'vertical warm-lit portrait wearing chunky gold huggie earrings',
  },
  {
    id: 'gifted-glow',
    title: 'Gifted Glow',
    caption: 'Wrapped, worn, and instantly a favorite.',
    imageNote: 'vertical jewelry gifting moment with gold necklace and earrings',
  },
]

export const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'The finish looks far more expensive than the price. My huggies have become my everyday pair.',
    author: 'Maya T.',
  },
  {
    id: 'testimonial-2',
    quote: 'Beautiful packaging, quick shipping, and pieces that feel special without feeling precious.',
    author: 'Lauren K.',
  },
  {
    id: 'testimonial-3',
    quote: 'I bought the necklace as a gift and ended up ordering one for myself the same week.',
    author: 'Sofia R.',
  },
]

export const valueHighlights = [
  {
    id: 'craft',
    title: 'Thoughtful finish',
    description: 'Designed with demi-fine materials that bring a polished look to daily wear.',
  },
  {
    id: 'comfort',
    title: 'Easy to wear',
    description: 'Hypoallergenic, lightweight silhouettes chosen for all-day comfort and layering.',
  },
  {
    id: 'giftable',
    title: 'Ready to gift',
    description: 'Every order arrives in signature packaging made to feel celebratory from the start.',
  },
]

export const journalEntries = [
  {
    id: 'journal-1',
    title: 'How to Build a Gold Stack That Feels Effortless',
    category: 'Styling',
    excerpt:
      'A refined ear stack starts with proportion, texture, and one polished focal point. Here is our minimalist approach.',
    imageNote: 'editorial close-up of layered gold earrings and huggies',
  },
  {
    id: 'journal-2',
    title: 'The Gift Guide for Women Who Prefer Quiet Luxury',
    category: 'Gifting',
    excerpt:
      'Pieces with a soft gleam, timeless shape, and gift-ready finish make the most lasting impression.',
    imageNote: 'gift-ready gold jewelry arranged in elegant packaging',
  },
  {
    id: 'journal-3',
    title: 'Why Demi-Fine Jewelry Has Become the Everyday Standard',
    category: 'Materials',
    excerpt:
      'Premium-but-accessible materials are redefining the jewelry drawer, balancing longevity, beauty, and versatility.',
    imageNote: 'gold jewelry editorial flat lay on warm neutral surface',
  },
]

export const shopLinks = ['Earrings', 'Necklaces', 'Huggies']

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)
