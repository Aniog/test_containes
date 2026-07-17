export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const toneOptions = ['Gold Tone', 'Silver Tone']

export const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 124,
    shortDescription:
      'A sculpted ear cuff with a crystal glint that elevates even the simplest look.',
    description:
      'Designed to catch warm light from every angle, this modern ear cuff balances a clean curved silhouette with a subtle crystal accent for an easy, elevated finish.',
    features: [
      'Lightweight open cuff silhouette',
      'Crystal accent for a soft reflective finish',
      'Ideal for gifting or everyday styling',
    ],
    galleryShots: [
      { id: 'studio-front', label: 'Studio front', prompt: 'Warm studio close-up of the ear cuff' },
      { id: 'model-angle', label: 'On model', prompt: 'Editorial side profile styling shot' },
      { id: 'box-detail', label: 'Gift detail', prompt: 'Luxury gift box and jewelry detail' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold Vermeil with Crystal Accents',
    rating: 4.8,
    reviewCount: 98,
    shortDescription:
      'A floral crystal necklace that layers soft color with a polished gold finish.',
    description:
      'Majestic Flora Nectar blends delicate multicolor stones with a luminous gold chain, creating a feminine statement that still feels refined enough for daily wear.',
    features: [
      'Multicolor floral crystal centerpiece',
      'Polished chain designed for layering',
      'A premium gifting favorite',
    ],
    galleryShots: [
      { id: 'flat-lay', label: 'Flat lay', prompt: 'Editorial flat lay necklace styling' },
      { id: 'model-close', label: 'On model', prompt: 'Warm portrait close-up of necklace on model' },
      { id: 'clasp-detail', label: 'Clasp detail', prompt: 'Jewelry craftsmanship clasp detail' },
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
    reviewCount: 176,
    shortDescription:
      'Chunky dome huggies with a smooth, sculptural profile and everyday comfort.',
    description:
      'Golden Sphere Huggies are the kind of forever pair you reach for on repeat — compact, polished, and softly bold without ever overwhelming the rest of your look.',
    features: [
      'Chunky dome silhouette',
      'Secure huggie closure',
      'Easy desk-to-dinner styling',
    ],
    galleryShots: [
      { id: 'pair-front', label: 'Pair front', prompt: 'Clean studio pair shot of huggie earrings' },
      { id: 'ear-stack', label: 'Ear stack', prompt: 'Curated ear stack close-up on model' },
      { id: 'texture-detail', label: 'Finish detail', prompt: 'Reflective gold finish detail' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Textured Gold Filigree',
    rating: 4.7,
    reviewCount: 84,
    shortDescription:
      'Textured filigree drops that bring light movement and old-world elegance.',
    description:
      'With intricate texture and a softly elongated drop, Amber Lace Earrings add a romantic finishing note while staying remarkably wearable for special dinners and event dressing alike.',
    features: [
      'Textured filigree-inspired surface',
      'Elegant movement with a lightweight feel',
      'Ideal for occasion gifting',
    ],
    galleryShots: [
      { id: 'drape-shot', label: 'Drape view', prompt: 'Drop earring drape detail in soft warm light' },
      { id: 'portrait', label: 'Portrait', prompt: 'Editorial portrait with drop earrings' },
      { id: 'gift-box', label: 'Packaging', prompt: 'Premium jewelry packaging detail' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Gift Sets',
    material: '18K Gold Plated Set',
    rating: 5,
    reviewCount: 61,
    shortDescription:
      'A gift-boxed pairing of earrings and necklace for effortless set dressing.',
    description:
      'The Royal Heirloom Set pairs luminous everyday staples in one elegant box, making it the easiest way to gift a polished, put-together moment for birthdays, bridesmaids, or self-celebration.',
    features: [
      'Coordinated earring and necklace pairing',
      'Presented in a premium gift box',
      'Exceptional value for elevated gifting',
    ],
    galleryShots: [
      { id: 'boxed-set', label: 'Boxed set', prompt: 'Luxury jewelry gift set presentation' },
      { id: 'model-layered', label: 'Layered wear', prompt: 'Layered necklace and earrings on model' },
      { id: 'detail-macro', label: 'Macro detail', prompt: 'Jewelry texture and clasp macro detail' },
    ],
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    title: 'Earrings',
    eyebrow: 'Everyday icons',
    description: 'Sculptural drops, cuffs, and polished silhouettes for soft daily shine.',
    href: '/shop?category=Earrings',
    prompt: 'Warm editorial gold earrings styling',
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    eyebrow: 'Layered glow',
    description: 'Delicate chains and statement crystals made to stack beautifully.',
    href: '/shop?category=Necklaces',
    prompt: 'Refined gold necklace on neutral background',
  },
  {
    id: 'huggies',
    title: 'Huggies',
    eyebrow: 'Quiet statement',
    description: 'Smooth domes and close-fitting profiles with a polished finish.',
    href: '/shop?category=Huggies',
    prompt: 'Close-up of gold huggie earrings on model ear',
  },
]

export const ugcMoments = [
  {
    id: 'city-light',
    caption: 'City dinner glow',
    title: 'Golden Sphere Huggies after dark',
    description: 'Warm evening ear stack in soft city light',
  },
  {
    id: 'morning-ritual',
    caption: 'Morning ritual',
    title: 'Majestic Flora layered with linen',
    description: 'Necklace styling close-up with neutral wardrobe',
  },
  {
    id: 'gifted-softly',
    caption: 'Gifted softly',
    title: 'Royal Heirloom unboxed for her birthday',
    description: 'Luxury gift reveal with jewelry and ribbon detail',
  },
  {
    id: 'everyday-polish',
    caption: 'Everyday polish',
    title: 'Vivid Aura for an off-duty look',
    description: 'Minimal ear cuff styling in natural daylight',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote:
      'The finish looks far more expensive than the price point. My huggies have become my everyday pair.',
    author: 'Sofia M.',
  },
  {
    id: 'review-2',
    quote:
      'I bought the Royal Heirloom Set as a gift and immediately ordered one for myself. The packaging is gorgeous.',
    author: 'Claire T.',
  },
  {
    id: 'review-3',
    quote:
      'Velmora pieces feel delicate, polished, and easy to wear from work to dinner without thinking twice.',
    author: 'Nina R.',
  },
]

export const journalNotes = [
  {
    id: 'journal-1',
    slug: 'how-to-stack-gold-tones-with-ease',
    title: 'How to stack gold tones with ease',
    category: 'Styling',
    readingTime: '3 min read',
    excerpt:
      'Thoughtful layering starts with one softly sculptural anchor, then builds with contrast in scale, texture, and light-catching detail.',
    lede:
      'The most elegant stacks never feel overworked. They begin with one piece you want to notice first, then layer in supporting shapes that bring warmth, polish, and dimension.',
    body: [
      'Start with a clear focal point, whether that is a floral pendant, a polished dome huggie, or a crystal-accented cuff. Once the hero piece is in place, choose one or two quieter companions so the look still feels breathable and refined.',
      'Mixing chain weights is the easiest way to create depth without looking busy. A fine necklace beside a slightly bolder silhouette keeps the stack intentional, while repeating the same metal tone allows the overall finish to stay soft and cohesive.',
      'For earrings, think in balance rather than symmetry. A slim cuff paired with a rounded huggie creates the kind of editorial tension that feels premium, modern, and wearable from coffee meetings to candlelit dinners.',
    ],
    sidebar:
      'Build your own softly layered edit with necklaces and huggies designed to sit beautifully together.',
    ctaLabel: 'Shop Necklaces',
    shopHref: '/shop?category=Necklaces',
  },
  {
    id: 'journal-2',
    slug: 'the-art-of-gifting-jewelry-that-feels-personal',
    title: 'The art of gifting jewelry that feels personal',
    category: 'Gifting',
    readingTime: '4 min read',
    excerpt:
      'The best jewelry gifts feel intimate, not extravagant — chosen with enough detail to feel noticed and enough versatility to be worn often.',
    lede:
      'A meaningful gift does not need to be loud. It needs to feel like it belongs to the woman receiving it — easy to reach for, beautiful to unwrap, and polished enough to mark the moment.',
    body: [
      'When choosing a piece, consider how she dresses every day rather than saving the decision for rare occasions. Huggies, delicate necklaces, and coordinated sets tend to become the gifts people wear most because they slide effortlessly into an existing wardrobe.',
      'Presentation matters just as much as the piece itself. A gift feels more considered when it arrives ready to give, with warm-toned packaging, a personal note, and a silhouette that feels elevated from the first glance.',
      'If you are unsure where to begin, choose something versatile with a little presence. A softly statement necklace or a gift-boxed set offers the confidence of impact while still feeling universally wearable.',
    ],
    sidebar:
      'Explore gift-ready pieces that arrive polished, versatile, and beautifully packaged for the occasion.',
    ctaLabel: 'Shop Gift Sets',
    shopHref: '/shop?category=Gift%20Sets',
  },
  {
    id: 'journal-3',
    slug: 'caring-for-demi-fine-pieces-so-they-stay-luminous',
    title: 'Caring for demi-fine pieces so they stay luminous',
    category: 'Care',
    readingTime: '3 min read',
    excerpt:
      'A few simple rituals help demi-fine jewelry hold its glow longer: gentle storage, mindful wear, and a quick wipe after the day ends.',
    lede:
      'Jewelry lasts best when it is treated like part of a ritual. Small habits preserve shine, protect plating, and keep your favorite pieces ready to wear again tomorrow.',
    body: [
      'Store each piece somewhere dry and soft, ideally in its pouch or box, so chains do not tangle and polished surfaces stay protected from friction. Humidity and hard contact are the fastest way to dull a beautiful finish.',
      'Apply fragrance, lotion, and hair products before putting jewelry on. Letting those formulas settle first helps preserve plated surfaces and keeps crystals or textured details looking clear and bright.',
      'At the end of the day, use a soft cloth to remove skin oils and residue. That one quiet step goes a long way toward maintaining the warm glow that makes demi-fine gold jewelry feel so special.',
    ],
    sidebar:
      'Choose everyday pieces designed for repeat wear, thoughtful gifting, and long-lasting shine with proper care.',
    ctaLabel: 'Shop Bestsellers',
    shopHref: '/shop',
  },
]

export const getJournalNoteBySlug = (slug) =>
  journalNotes.find((note) => note.slug === slug)

export const footerColumns = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Our Materials', 'Privacy'],
}

export const materialsCopy =
  'Crafted with 18K gold plating over carefully selected base metals, finished with hypoallergenic posts and designed for long-lasting shine with thoughtful care.'

export const shippingCopy =
  'Enjoy free worldwide shipping on orders over $75. Orders dispatch within 1–2 business days, with easy 30-day returns for unworn pieces in original packaging.'

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)

export const priceFilters = [
  { id: 'all', label: 'All Prices', value: 'all' },
  { id: 'under-50', label: 'Under $50', value: 'under-50' },
  { id: '50-80', label: '$50 to $80', value: '50-80' },
  { id: '80-plus', label: '$80+', value: '80-plus' },
]

export const materialFilters = [
  '18K Gold Plated',
  'Gold Vermeil with Crystal Accents',
  'Textured Gold Filigree',
  '18K Gold Plated Set',
]

export const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
