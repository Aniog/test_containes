export const IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviewCount: 86,
    badge: 'Bestseller',
    shortDescription:
      'A crystal-tipped ear cuff designed to brighten an everyday stack with a polished glow.',
    description:
      'Vivid Aura Jewels pairs a sculptural gold ear cuff with a refined crystal accent for just the right amount of light-catching detail. It slips effortlessly into a layered ear look while still feeling delicate and elevated on its own.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'hero',
        title: 'Warm editorial close-up',
        prompt: 'close-up gold ear cuff with crystal accent on model ear in warm editorial light',
      },
      {
        id: 'detail',
        title: 'Texture detail',
        prompt: 'macro detail of demi-fine gold ear cuff with crystal on neutral stone background',
      },
      {
        id: 'styled',
        title: 'Styled stack',
        prompt: 'stacked gold ear cuff styling with soft knitwear and warm studio shadows',
      },
    ],
    cardPrompts: {
      primary: 'gold ear cuff with crystal accent styled on model ear in warm luxury light',
      secondary: 'editorial gold ear cuff laid on dark neutral surface with soft shadow',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'Gold Vermeil',
    price: 68,
    rating: 4.8,
    reviewCount: 64,
    badge: 'New Arrival',
    shortDescription:
      'A floral crystal necklace with soft color and a warm gilt finish for day-to-evening dressing.',
    description:
      'Majestic Flora Nectar blends tiny multicolor stones with a floral silhouette that feels feminine, polished, and easy to gift. The necklace sits beautifully at the collarbone and adds a quietly radiant finish to simple layers.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'hero',
        title: 'On-body necklace portrait',
        prompt: 'warm-lit gold floral crystal necklace worn at collarbone on model with neutral silk blouse',
      },
      {
        id: 'detail',
        title: 'Pendant detail',
        prompt: 'macro detail of floral crystal necklace in gold vermeil on soft cream surface',
      },
      {
        id: 'styled',
        title: 'Gift styling',
        prompt: 'giftable floral crystal necklace with ribbon and warm editorial shadows',
      },
    ],
    cardPrompts: {
      primary: 'gold floral crystal necklace on dark neutral background editorial jewelry still life',
      secondary: 'close-up necklace styling on model neck with warm evening light',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Customer Favorite',
    shortDescription:
      'Chunky dome huggies with a softly rounded profile and a weightless everyday feel.',
    description:
      'Golden Sphere Huggies are designed for women who want a bolder silhouette without sacrificing comfort. Their rounded shape reflects light beautifully, making them an easy staple for everyday wear, gifting, and travel.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'hero',
        title: 'Front profile',
        prompt: 'chunky gold dome huggie earrings on model ear with warm editorial lighting',
      },
      {
        id: 'detail',
        title: 'Metal finish',
        prompt: 'macro gold dome huggie earrings on polished stone plinth with soft luxury shadow',
      },
      {
        id: 'styled',
        title: 'Off-duty styling',
        prompt: 'minimal gold huggie earrings styled with sleek bun and fine knitwear',
      },
    ],
    cardPrompts: {
      primary: 'chunky gold dome huggie earrings on warm espresso background premium jewelry photo',
      secondary: 'gold huggie earrings worn on model with soft cream knit and natural glow',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviewCount: 48,
    badge: 'Event Ready',
    shortDescription:
      'Textured filigree drop earrings that feel romantic, lightweight, and beautifully detailed.',
    description:
      'Amber Lace Earrings bring a softly vintage mood through intricate filigree texture and a graceful drop silhouette. They are polished enough for dinners and celebrations, while remaining easy to style with a crisp shirt or silk slip.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'hero',
        title: 'Editorial portrait',
        prompt: 'textured gold filigree drop earrings worn on model in warm moody editorial light',
      },
      {
        id: 'detail',
        title: 'Filigree detail',
        prompt: 'close-up detail of gold filigree earrings on soft ivory surface with shadow',
      },
      {
        id: 'styled',
        title: 'Evening styling',
        prompt: 'gold drop earrings styled with black dress and low bun editorial jewelry shoot',
      },
    ],
    cardPrompts: {
      primary: 'gold filigree drop earrings on neutral stone slab luxury product photography',
      secondary: 'warm portrait of textured gold earrings on ear with elegant styling',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviewCount: 29,
    badge: 'Gift Edit',
    shortDescription:
      'A gift-boxed necklace and earring pairing designed for effortless gifting moments.',
    description:
      'Royal Heirloom Set is Velmora’s signature giftable pairing, presented in a refined keepsake box. The coordinating earring and necklace combination feels timeless, making it a beautiful option for birthdays, bridesmaids, and self-purchase alike.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'hero',
        title: 'Gift box reveal',
        prompt: 'gift-boxed gold jewelry set with necklace and earrings in warm editorial lighting',
      },
      {
        id: 'detail',
        title: 'Set detail',
        prompt: 'luxury demi-fine gold jewelry gift set on cream linen with ribbon and soft shadow',
      },
      {
        id: 'styled',
        title: 'Occasion styling',
        prompt: 'matching gold necklace and earrings styled on model for giftable luxury jewelry campaign',
      },
    ],
    cardPrompts: {
      primary: 'gift boxed gold earring and necklace set on dark background with warm light',
      secondary: 'editorial jewelry gift set with ribbon and velvet box in cream tones',
    },
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Statement drops and softly sculpted silhouettes for every day.',
    prompt: 'warm editorial gold earrings on model portrait with dark neutral background',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layering pieces that sit beautifully against knitwear and silk.',
    prompt: 'gold necklace close-up on collarbone with soft cream blouse and warm luxury light',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Rounded everyday icons with polished shine and weightless comfort.',
    prompt: 'gold huggie earrings on model ear close-up with clean editorial styling',
  },
]

export const ugcClips = [
  {
    id: 'soft-stack',
    caption: 'Soft morning stack',
    prompt: 'vertical lifestyle shot of layered gold ear stack in warm daylight mirror selfie style',
  },
  {
    id: 'weekend-glow',
    caption: 'Weekend glow',
    prompt: 'vertical portrait of woman wearing gold necklace and huggies in warm apartment light',
  },
  {
    id: 'gifted-gold',
    caption: 'Gifted gold moments',
    prompt: 'vertical unboxing of gold jewelry gift set with ribbon and feminine styling',
  },
  {
    id: 'after-hours',
    caption: 'After-hours polish',
    prompt: 'vertical evening portrait with gold drop earrings and black dress editorial style',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    name: 'Emma R.',
    quote:
      'The quality feels so elevated for the price. My huggies have become part of my everyday uniform.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 'review-2',
    name: 'Sofia M.',
    quote:
      'I bought the set as a gift and ended up ordering one for myself. Beautiful packaging and such a luxe feel.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 'review-3',
    name: 'Lena T.',
    quote:
      'The necklace catches the light in the prettiest way. It looks much more expensive than it is.',
    product: 'Majestic Flora Nectar',
  },
]

export const journalEntries = [
  {
    id: 'layering-guide',
    title: 'How to Layer Gold Jewelry Without Overdoing It',
    category: 'Styling',
    prompt: 'editorial flat lay of layered gold jewelry on silk scarf and magazine',
  },
  {
    id: 'gift-edit',
    title: 'The Gift Edit for Birthdays, Bridesmaids, and Beyond',
    category: 'Gifting',
    prompt: 'luxury jewelry gift edit with ribbon, velvet box, and warm neutral tones',
  },
  {
    id: 'care-guide',
    title: 'A Simple Care Ritual for Demi-Fine Pieces',
    category: 'Care',
    prompt: 'gold jewelry care scene with soft cloth, tray, and creamy editorial styling',
  },
]

export const navigationLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/collections' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export const priceFilters = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-80', label: '$50 – $80' },
  { id: 'over-80', label: 'Over $80' },
]

export const materialFilters = ['18K Gold Plated', 'Gold Vermeil']

export const categoryFilters = ['earrings', 'necklaces', 'huggies', 'sets']

export const categoryLabels = {
  earrings: 'Earrings',
  necklaces: 'Necklaces',
  huggies: 'Huggies',
  sets: 'Sets',
}

export const formatCurrency = (value) => `$${value}`

export const productLookup = Object.fromEntries(
  products.map((product) => [product.id, product]),
)

export const getRelatedProducts = (currentId, category) =>
  products
    .filter((product) => product.id !== currentId)
    .sort((left, right) => {
      if (left.category === category && right.category !== category) return -1
      if (left.category !== category && right.category === category) return 1
      return left.price - right.price
    })
    .slice(0, 4)
