import strkImgConfig from '@/strk-img-config.json'

export const getPickedImageUrl = (imageId) => {
  const entry = strkImgConfig?.[imageId]
  const pickedId = entry?.picked
  const pickedImage = entry?.results?.find((result) => result.id === pickedId) ?? entry?.results?.[0]

  return pickedImage?.url ?? ''
}

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    badge: 'Best Seller',
    shortDescription: 'A sculptural crystal ear cuff that catches candlelight and elevates everyday styling.',
    cardDescription: 'Gold ear cuff with crystal accent.',
    description: 'Designed to frame the ear with a soft flash of crystal, Vivid Aura Jewels is a modern statement with an effortless fit. Lightweight enough for daily wear, it layers beautifully with studs and huggies.',
    materialsCare: '18K gold plated brass with crystal detailing. Store in the Velmora pouch and avoid water, perfume, and lotions to preserve shine.',
    shippingReturns: 'Free worldwide shipping on orders over $75. Easy 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold Tone', 'Silver Tone'],
    details: ['Nickel free', 'Hypoallergenic', 'Lightweight comfort fit'],
    galleryCaptions: ['editorial ear cuff flatlay', 'ear cuff on model close up', 'stacked ear styling detail'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal Accent',
    price: 68,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Gift Favorite',
    shortDescription: 'A floral crystal necklace with soft color play and a delicate gold chain.',
    cardDescription: 'Multicolor floral crystal necklace.',
    description: 'Majestic Flora Nectar brings a romantic bloom to your jewelry wardrobe with a delicate floral crystal arrangement and a fine chain that layers effortlessly over knits, silk, or bare skin.',
    materialsCare: '18K gold plated brass with multicolor crystals. Wipe gently with a dry cloth after wear and keep away from moisture.',
    shippingReturns: 'Ships within 1-2 business days in a gift-ready box. Returns accepted within 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    details: ['Adjustable extender chain', 'Gift-ready packaging', 'Fine crystal setting'],
    galleryCaptions: ['floral crystal necklace flatlay', 'gold floral necklace on model', 'close up crystal pendant detail'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 203,
    badge: 'Everyday Icon',
    shortDescription: 'Chunky dome huggies with a polished finish and comfortable hinged closure.',
    cardDescription: 'Chunky gold dome huggie earrings.',
    description: 'Golden Sphere Huggies are your polished answer to everyday ease. The softly domed silhouette feels elevated yet versatile, perfect for layering or wearing on their own.',
    materialsCare: '18K gold plated brass with a secure hinge closure. Avoid showering or swimming in your jewelry to extend plating life.',
    shippingReturns: 'Complimentary worldwide shipping over $75 and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    details: ['Secure hinged closure', 'Rounded comfort shape', 'Designed for daily styling'],
    galleryCaptions: ['gold huggie earrings flatlay', 'dome huggies on ear model', 'close up polished gold huggies'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold-Plated Filigree',
    price: 54,
    rating: 4.7,
    reviewCount: 76,
    badge: 'Occasion Edit',
    shortDescription: 'Textured gold filigree drops with an airy, heirloom-inspired silhouette.',
    cardDescription: 'Textured gold filigree drop earrings.',
    description: 'Amber Lace Earrings balance delicacy and presence with a fine filigree texture that moves beautifully from daylight dressing to dinner reservations.',
    materialsCare: 'Gold-plated brass with textured detailing. Handle gently and store separately to prevent scratching.',
    shippingReturns: 'Delivered in signature Velmora packaging. Returns available within 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    details: ['Statement drop length', 'Airy filigree texture', 'Special-occasion ready'],
    galleryCaptions: ['filigree drop earrings flatlay', 'drop earrings on model close up', 'gold lace earring detail'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    material: 'Gift Set',
    price: 95,
    rating: 5,
    reviewCount: 58,
    badge: 'Gift Set',
    shortDescription: 'A gift-boxed earring and necklace pairing curated for effortless gifting.',
    cardDescription: 'Gift-boxed earring and necklace set.',
    description: 'Royal Heirloom Set pairs two easy-to-wear pieces in a beautifully boxed presentation, making it the perfect gesture for birthdays, bridesmaids, or a meaningful self-purchase.',
    materialsCare: 'Includes a coordinating necklace and earrings in 18K gold plated brass. Keep dry and polish gently with a soft cloth.',
    shippingReturns: 'Gift-ready box included. Free worldwide shipping over $75 and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    details: ['Velmora gift box included', 'Matching set styling', 'Ready to gift'],
    galleryCaptions: ['jewelry gift set flatlay', 'gift boxed necklace and earrings', 'luxury jewelry set detail'],
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Everyday studs, cuffs, and statement silhouettes.',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Layering chains and luminous pendants.',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Close-fitting essentials with a polished finish.',
  },
]

export const ugcMoments = [
  {
    id: 'ugc-ear-stack',
    title: 'Golden layers for every day',
    description: 'Close-up ear stack with warm light and layered gold jewelry.',
  },
  {
    id: 'ugc-neck-glow',
    title: 'Soft shine, evening plans',
    description: 'Necklace worn with silk blouse in warm editorial light.',
  },
  {
    id: 'ugc-weekend-gift',
    title: 'Gift-worthy details',
    description: 'Jewelry styled on a woman opening a velvet gift box.',
  },
  {
    id: 'ugc-cafe-selfpurchase',
    title: 'Self-gifting rituals',
    description: 'Woman wearing gold huggies in a chic cafe portrait.',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote: 'The quality feels far more expensive than the price. I wear my huggies almost every day.',
    author: 'Maya R.',
  },
  {
    id: 'review-2',
    quote: 'Beautiful packaging, fast shipping, and the necklace looked stunning the minute I opened the box.',
    author: 'Lauren T.',
  },
  {
    id: 'review-3',
    quote: 'Velmora nails that polished, effortless look. It feels like a treat without being intimidating.',
    author: 'Nina C.',
  },
]

export const journalEntries = [
  {
    id: 'journal-layering',
    title: 'The New Rules of Everyday Layering',
    category: 'Styling',
    excerpt: 'A refined guide to stacking earrings, huggies, and delicate necklaces without overdoing it.',
  },
  {
    id: 'journal-gifting',
    title: 'How to Choose Jewelry That Always Feels Personal',
    category: 'Gifting',
    excerpt: 'From milestone moments to just-because purchases, discover pieces that feel thoughtful and lasting.',
  },
  {
    id: 'journal-care',
    title: 'A Five-Minute Care Ritual for Lasting Shine',
    category: 'Care',
    excerpt: 'Keep demi-fine pieces luminous with a simple storage and cleaning routine that fits real life.',
  },
]

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)
