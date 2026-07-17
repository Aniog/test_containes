export const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    shortDescription:
      'A sculpted ear cuff with a crystal flash for effortless evening polish.',
    description:
      'Vivid Aura Jewels brings just enough shimmer to feel elevated, with a softly sculpted profile that slips into everyday dressing as easily as it anchors a dressed-up look.',
    materials:
      '18K gold plated brass, cubic zirconia crystal accents, hypoallergenic posts, and an anti-tarnish finish designed for repeat wear.',
    shipping:
      'Free worldwide shipping on orders over $75, complimentary gift-ready packaging, and 30-day returns with easy exchanges.',
    tones: ['Gold Tone', 'Silver Tone'],
    primaryScene: 'warm-lit ear cuff close-up on model',
    secondaryScene: 'editorial still life of ear cuff on dark stone',
    gallery: [
      { id: 'front', label: 'Front styling', scene: 'close-up of gold ear cuff styled on ear' },
      { id: 'detail', label: 'Crystal detail', scene: 'macro crystal detail on gold ear cuff' },
      { id: 'still-life', label: 'Editorial flat lay', scene: 'luxury still life of gold ear cuff on linen' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold Vermeil',
    rating: 4.8,
    reviews: 94,
    badge: 'Signature',
    shortDescription:
      'A floral crystal necklace with soft multicolor light and heirloom energy.',
    description:
      'Majestic Flora Nectar layers luminous crystal tones into an easy centerpiece necklace with a delicate silhouette that rests beautifully against open necklines and knits alike.',
    materials:
      'Gold vermeil over sterling silver, multicolor crystal stones, lobster clasp closure, and nickel-free finishing for sensitive skin comfort.',
    shipping:
      'Ships within 1–2 business days in our velour pouch and rigid gift box, with prepaid 30-day return labels for eligible orders.',
    tones: ['Gold Tone', 'Silver Tone'],
    primaryScene: 'editorial necklace portrait in warm daylight',
    secondaryScene: 'necklace draped on soft stone tabletop',
    gallery: [
      { id: 'portrait', label: 'On model', scene: 'layered floral crystal necklace on collarbone' },
      { id: 'pendant', label: 'Pendant detail', scene: 'macro detail of floral crystal necklace pendant' },
      { id: 'gifted', label: 'Styled flat lay', scene: 'editorial flat lay of necklace with ribbon and box' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 176,
    badge: 'Everyday Icon',
    shortDescription:
      'Chunky dome huggies with a clean curve that instantly makes a stack feel richer.',
    description:
      'Golden Sphere Huggies are the pair you reach for daily: smooth, domed, and polished to catch light without ever feeling overdone.',
    materials:
      '18K gold plated brass with a smooth mirror finish, secure hinged closure, and a lightweight hollowed design for all-day comfort.',
    shipping:
      'Packed in a microfiber jewelry pouch and signature Velmora box, with tracked worldwide delivery and 30-day returns.',
    tones: ['Gold Tone', 'Silver Tone'],
    primaryScene: 'gold dome huggies styled on ear stack',
    secondaryScene: 'huggie earrings on sculptural neutral surface',
    gallery: [
      { id: 'stacked', label: 'Ear stack', scene: 'chunky gold huggies in curated ear stack' },
      { id: 'texture', label: 'Curve detail', scene: 'macro detail of dome huggie surface' },
      { id: 'set-down', label: 'Set down', scene: 'gold huggies resting on warm stone tray' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold Plated with Crystals',
    rating: 4.7,
    reviews: 82,
    badge: 'New Arrival',
    shortDescription:
      'Textured filigree drops that frame the face with soft golden movement.',
    description:
      'Amber Lace Earrings pair airy filigree texture with a graceful drop, balancing statement style with a surprisingly easy, wearable feel.',
    materials:
      'Gold plated brass, textured filigree detailing, lightweight drop construction, and hypoallergenic hardware for comfortable wear.',
    shipping:
      'Includes complimentary gift wrap options, worldwide tracked shipping, and simple 30-day returns for unworn pieces.',
    tones: ['Gold Tone', 'Silver Tone'],
    primaryScene: 'gold filigree drop earrings on model profile',
    secondaryScene: 'textured drop earrings in editorial still life',
    gallery: [
      { id: 'profile', label: 'Profile styling', scene: 'gold filigree earrings on model profile' },
      { id: 'filigree', label: 'Texture detail', scene: 'macro filigree texture of gold drop earrings' },
      { id: 'pair', label: 'Pair flat lay', scene: 'editorial flat lay of textured gold earrings' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: 'Gold Vermeil',
    rating: 5,
    reviews: 61,
    badge: 'Gift Ready',
    shortDescription:
      'A gift-boxed necklace and earring pairing that feels considered from the first unboxing moment.',
    description:
      'Royal Heirloom Set is curated for effortless gifting, bringing together a polished necklace and matching earrings in a keepsake presentation box.',
    materials:
      'Gold vermeil over sterling silver, matching crystal touches, velvet-lined gift box, and hypoallergenic earring posts.',
    shipping:
      'Gift-ready from the moment it arrives, with complimentary note cards, fast dispatch, and 30-day returns for peace of mind.',
    tones: ['Gold Tone', 'Silver Tone'],
    primaryScene: 'gift boxed jewelry set with necklace and earrings',
    secondaryScene: 'luxury jewelry gift set on velvet tray',
    gallery: [
      { id: 'boxed', label: 'Gift box reveal', scene: 'luxury gift box with matching jewelry set' },
      { id: 'styled', label: 'Styled on model', scene: 'matching necklace and earrings styled on model' },
      { id: 'detail', label: 'Close detail', scene: 'close-up detail of jewelry gift set craftsmanship' },
    ],
  },
]

export const featuredProducts = products.slice(0, 5)

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Statement drops, subtle cuffs, and elevated everyday shine.',
    scene: 'gold earrings editorial portrait in warm light',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Layering pieces and occasion-ready pendants with soft luminosity.',
    scene: 'layered gold necklaces on model collarbone',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Chunky curves and polished hoops that perfect a curated ear.',
    scene: 'gold huggies close-up on ear in editorial styling',
  },
]

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const ugcMoments = [
  {
    id: 'golden-hour-stack',
    caption: 'Layered for golden hour.',
    scene: 'vertical jewelry selfie with layered gold necklaces in warm sunset light',
  },
  {
    id: 'desk-to-dinner',
    caption: 'Desk to dinner, softly polished.',
    scene: 'vertical portrait of woman wearing gold huggies and necklace indoors',
  },
  {
    id: 'gifted-glow',
    caption: 'The kind of gift she keeps on.',
    scene: 'vertical close-up of gift-ready gold jewelry worn on model',
  },
  {
    id: 'ear-party',
    caption: 'A curated ear, made simple.',
    scene: 'vertical close-up of gold ear stack with huggies and cuff',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote:
      'The finish looks so expensive in person. I wore the huggies for a full day and forgot I still had them on.',
    name: 'Sofia R.',
  },
  {
    id: 'review-2',
    quote:
      'Beautiful packaging, quick delivery, and the necklace layers perfectly with pieces I already own.',
    name: 'Maya T.',
  },
  {
    id: 'review-3',
    quote:
      'I bought the set as a gift and then immediately ordered one for myself. It feels thoughtful and elevated.',
    name: 'Elena K.',
  },
]

export const journalEntries = [
  {
    id: 'journal-1',
    title: 'The Modern Jewelry Capsule',
    excerpt: 'Three pieces that carry weekday polish into evening plans with ease.',
  },
  {
    id: 'journal-2',
    title: 'How to Layer Gold Without Overthinking It',
    excerpt: 'A quiet-luxury approach to mixing lengths, textures, and proportions.',
  },
  {
    id: 'journal-3',
    title: 'Giftable Pieces That Still Feel Personal',
    excerpt: 'Thoughtful jewelry picks for birthdays, milestones, and self-celebration.',
  },
]

export const aboutHighlights = [
  'Premium demi-fine design with a soft editorial point of view.',
  'Gift-ready packaging with elevated details and considered finishing.',
  'Accessible luxury pricing designed for everyday wear and meaningful giving.',
]

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (currentSlug) =>
  products.filter((product) => product.slug !== currentSlug).slice(0, 4)
