export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    description: 'A luminous gold ear cuff finished with a crystal accent that catches warm evening light.',
    longDescription: 'Designed for effortless stacking, the Vivid Aura Jewels ear cuff brings a polished glow to everyday dressing and special gifting moments alike.',
    materials: '18K gold plated brass, cubic zirconia, hypoallergenic posts, nickel free.',
    care: 'Store in the pouch provided and avoid water, perfumes, and lotions to maintain brilliance.',
    shipping: 'Free worldwide shipping on orders over $75. Returns accepted within 30 days.',
    colors: ['Gold', 'Silver'],
    gallery: [
      { id: 'vivid-aura-main', ratio: '3x4', width: '900', query: 'gold ear cuff crystal luxury jewelry editorial closeup model' },
      { id: 'vivid-aura-alt', ratio: '3x4', width: '900', query: 'ear cuff gold crystal jewelry studio premium neutral background' },
      { id: 'vivid-aura-detail', ratio: '3x4', width: '900', query: 'gold ear cuff detailed macro jewelry warm light editorial' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Crystal Necklace',
    material: 'Gold Vermeil',
    price: 68,
    rating: 4.8,
    reviewCount: 92,
    description: 'A multicolor floral crystal necklace that layers beautifully over knits, silk, or bare skin.',
    longDescription: 'Majestic Flora Nectar balances delicate florals with a confident gold chain, making it a signature gifting piece for celebrations and self-purchase alike.',
    materials: 'Gold vermeil chain, faceted crystal accents, lobster clasp closure.',
    care: 'Wipe gently with a soft cloth after wear and keep away from moisture.',
    shipping: 'Ships in 1–2 business days with gift-ready packaging and 30-day returns.',
    colors: ['Gold', 'Silver'],
    gallery: [
      { id: 'flora-main', ratio: '3x4', width: '900', query: 'gold floral crystal necklace luxury jewelry editorial model closeup' },
      { id: 'flora-alt', ratio: '3x4', width: '900', query: 'multicolor crystal necklace gold jewelry studio editorial warm neutral' },
      { id: 'flora-detail', ratio: '3x4', width: '900', query: 'floral crystal necklace macro premium jewelry' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Dome Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 214,
    description: 'Chunky gold dome huggie earrings with a bold yet polished silhouette for everyday wear.',
    longDescription: 'Golden Sphere Huggies are the pair you leave on repeat — sculptural, comfortable, and easy to style from daytime errands to dinner reservations.',
    materials: '18K gold plated brass, click-lock closure, hypoallergenic finish.',
    care: 'Avoid sleeping, showering, or swimming while wearing to preserve plating.',
    shipping: 'Complimentary shipping over $75 and easy 30-day returns.',
    colors: ['Gold', 'Silver'],
    gallery: [
      { id: 'sphere-main', ratio: '3x4', width: '900', query: 'chunky gold huggie earrings luxury editorial jewelry model ear closeup' },
      { id: 'sphere-alt', ratio: '3x4', width: '900', query: 'gold dome huggie earrings jewelry still life premium dark background' },
      { id: 'sphere-detail', ratio: '3x4', width: '900', query: 'gold huggie earrings macro sculptural jewelry editorial' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviewCount: 86,
    description: 'Textured gold filigree drop earrings with movement, shimmer, and elegant detail.',
    longDescription: 'Amber Lace Earrings are designed to elevate simple tailoring, slip dresses, and occasion looks with a refined sense of drama.',
    materials: '18K gold plated brass, textured filigree finish, lightweight drop silhouette.',
    care: 'Handle gently and store flat in a dry pouch between wears.',
    shipping: 'Giftable packaging included, with free shipping on qualifying orders.',
    colors: ['Gold', 'Silver'],
    gallery: [
      { id: 'amber-main', ratio: '3x4', width: '900', query: 'gold filigree drop earrings jewelry editorial model warm light' },
      { id: 'amber-alt', ratio: '3x4', width: '900', query: 'textured gold earrings luxury jewelry still life neutral background' },
      { id: 'amber-detail', ratio: '3x4', width: '900', query: 'gold drop earrings macro detailed jewelry premium' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    type: 'Earring + Necklace Set',
    material: '18K Gold Plated',
    price: 95,
    rating: 5.0,
    reviewCount: 64,
    description: 'A gift-boxed earring and necklace set created for meaningful milestones and polished everyday wear.',
    longDescription: 'The Royal Heirloom Set pairs a softly sculpted necklace with coordinating earrings in a keepsake box ready for gifting.',
    materials: '18K gold plated brass, matching necklace and earrings, velvet gift box included.',
    care: 'Keep in the presentation box when not in use and avoid direct moisture.',
    shipping: 'Priority gift packaging, complimentary delivery over $75, and 30-day returns.',
    colors: ['Gold', 'Silver'],
    gallery: [
      { id: 'royal-main', ratio: '3x4', width: '900', query: 'gold jewelry gift set luxury box editorial premium' },
      { id: 'royal-alt', ratio: '3x4', width: '900', query: 'gold necklace and earrings set jewelry still life dark background' },
      { id: 'royal-detail', ratio: '3x4', width: '900', query: 'gift boxed jewelry set warm premium flat lay' },
    ],
  },
]

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']

export const materials = ['18K Gold Plated', 'Gold Vermeil']

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export const reelMoments = [
  {
    id: 'reel-1',
    title: 'Everyday glow',
    subtitle: 'Soft huggies for coffee runs and meetings.',
    query: 'woman wearing gold huggie earrings editorial portrait vertical',
  },
  {
    id: 'reel-2',
    title: 'Layered gifting',
    subtitle: 'Necklaces styled with cashmere and silk.',
    query: 'gold necklace on woman editorial fashion portrait vertical warm light',
  },
  {
    id: 'reel-3',
    title: 'Quiet statement',
    subtitle: 'Sculptural gold on a clean beauty look.',
    query: 'editorial portrait woman wearing gold earrings close up vertical luxury',
  },
  {
    id: 'reel-4',
    title: 'Golden hour',
    subtitle: 'Delicate shine, softly lit.',
    query: 'gold jewelry on model neck and ear warm sunlight vertical',
  },
]

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sophia R.',
    quote: 'The finish feels far more luxurious than the price point. I wear the huggies almost every day.',
  },
  {
    id: 'testimonial-2',
    name: 'Maya T.',
    quote: 'Beautiful packaging, fast shipping, and the necklace looked stunning for a birthday gift.',
  },
  {
    id: 'testimonial-3',
    name: 'Elena K.',
    quote: 'Exactly the kind of elevated everyday jewelry I was looking for — polished, feminine, and easy.',
  },
]

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]
