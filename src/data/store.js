import strkImgConfig from '@/strk-img-config.json'

const imagePlaceholder =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

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
    type: 'Ear Cuff',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 124,
    shortDescription:
      'A sculptural gold ear cuff finished with a crystal accent for understated after-dark shine.',
    description:
      'Designed to slip on with ease, Vivid Aura Jewels frames the ear with a softly polished silhouette and a glint of crystal. It is lightweight, refined, and easy to stack for everyday glamour.',
    materialsCare:
      '18K gold plated brass, cubic zirconia accents, and a smooth anti-tarnish finish. Store in the pouch provided and avoid water, perfume, and lotions for longer wear.',
    shippingReturns:
      'Ships within 1 to 2 business days with complimentary worldwide delivery over $75. Returns accepted within 30 days in original condition.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: [
      {
        id: 'vivid-aura-card-main-a4m9',
        caption: 'Warm editorial close-up of a gold crystal ear cuff on a model.',
      },
      {
        id: 'vivid-aura-card-alt-b7n2',
        caption: 'Stacked ear styling with a sculptural gold cuff in soft evening light.',
      },
    ],
    gallery: [
      {
        id: 'vivid-aura-gallery-1-k2t1',
        caption: 'Close-up of the ear cuff worn on a model with soft gold light.',
      },
      {
        id: 'vivid-aura-gallery-2-k2t2',
        caption: 'Detailed profile of the crystal accent and polished gold curve.',
      },
      {
        id: 'vivid-aura-gallery-3-k2t3',
        caption: 'Editorial ear stack styling featuring the cuff with layered earrings.',
      },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'Crystal Necklace',
    material: 'Gold Vermeil',
    rating: 4.8,
    reviewCount: 88,
    shortDescription:
      'A delicate floral crystal necklace that catches light with a soft multicolor glow.',
    description:
      'Majestic Flora Nectar pairs a graceful chain with floral-inspired stones in warm jewel tones. The silhouette feels romantic but polished, making it an effortless gifting piece.',
    materialsCare:
      'Gold vermeil over sterling silver with multicolor crystal details. Clean with a dry microfiber cloth and store separately to protect the stones.',
    shippingReturns:
      'Ships within 1 to 2 business days with complimentary worldwide delivery over $75. Returns accepted within 30 days in original condition.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: [
      {
        id: 'flora-nectar-card-main-c1v8',
        caption: 'Warm-lit floral crystal necklace styled against a dark silk neckline.',
      },
      {
        id: 'flora-nectar-card-alt-c1v9',
        caption: 'Close-up of a multicolor floral pendant resting on a neutral surface.',
      },
    ],
    gallery: [
      {
        id: 'flora-nectar-gallery-1-r9f1',
        caption: 'Editorial neckline styling with a delicate floral crystal necklace.',
      },
      {
        id: 'flora-nectar-gallery-2-r9f2',
        caption: 'Close-up of the pendant and soft multicolor crystal facets.',
      },
      {
        id: 'flora-nectar-gallery-3-r9f3',
        caption: 'Gift-ready necklace laid on warm stone with a silk ribbon.',
      },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'Dome Huggie Earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 176,
    shortDescription:
      'Chunky dome huggies with a smooth mirror finish for an elevated everyday statement.',
    description:
      'Golden Sphere Huggies are softly rounded and polished to reflect light beautifully without feeling heavy. They bring a sculptural finish to daily dressing and pair easily with cuffs and studs.',
    materialsCare:
      '18K gold plated brass with hypoallergenic posts. Keep away from moisture and wipe gently after wear to maintain luster.',
    shippingReturns:
      'Ships within 1 to 2 business days with complimentary worldwide delivery over $75. Returns accepted within 30 days in original condition.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: [
      {
        id: 'golden-sphere-card-main-p3m4',
        caption: 'Chunky gold huggie earrings worn on an ear in warm editorial light.',
      },
      {
        id: 'golden-sphere-card-alt-p3m5',
        caption: 'Close-up of rounded dome huggies on a neutral stone tray.',
      },
    ],
    gallery: [
      {
        id: 'golden-sphere-gallery-1-h8d1',
        caption: 'Minimal ear styling with sculptural gold dome huggies.',
      },
      {
        id: 'golden-sphere-gallery-2-h8d2',
        caption: 'A polished pair of chunky gold huggies on an ivory jewelry tray.',
      },
      {
        id: 'golden-sphere-gallery-3-h8d3',
        caption: 'Editorial close-up highlighting the rounded reflective shape.',
      },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'Drop Earrings',
    material: 'Recycled Sterling Silver Base',
    rating: 4.7,
    reviewCount: 63,
    shortDescription:
      'Textured filigree drop earrings with an heirloom feel and a softly brushed glow.',
    description:
      'Amber Lace Earrings bring movement and texture together in a delicate drop silhouette. The openwork filigree catches warm light beautifully and feels dressed-up without effort.',
    materialsCare:
      'Gold plated recycled sterling silver base with hypoallergenic posts. Avoid sleeping in the earrings and store flat after wear.',
    shippingReturns:
      'Ships within 1 to 2 business days with complimentary worldwide delivery over $75. Returns accepted within 30 days in original condition.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: [
      {
        id: 'amber-lace-card-main-w2s5',
        caption: 'Textured gold filigree drop earrings worn with softly lit evening styling.',
      },
      {
        id: 'amber-lace-card-alt-w2s6',
        caption: 'Close-up of intricate filigree gold earrings on a warm neutral fabric.',
      },
    ],
    gallery: [
      {
        id: 'amber-lace-gallery-1-z7c1',
        caption: 'Elegant profile of filigree drop earrings with soft movement.',
      },
      {
        id: 'amber-lace-gallery-2-z7c2',
        caption: 'Detailed macro shot of textured gold filigree lacework.',
      },
      {
        id: 'amber-lace-gallery-3-z7c3',
        caption: 'Gift styling featuring the drop earrings on ivory wrapping.',
      },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Gift Sets',
    type: 'Earring and Necklace Set',
    material: 'Gold Vermeil',
    rating: 5,
    reviewCount: 41,
    shortDescription:
      'A gift-boxed duo of matching earrings and necklace created for instant polish.',
    description:
      'Royal Heirloom Set is curated for effortless gifting, pairing a refined necklace with matching earrings inside an elevated keepsake box. It feels celebratory, feminine, and ready to present.',
    materialsCare:
      'Gold vermeil over sterling silver with velvet-lined gift box included. Store each piece separately and polish gently with a soft cloth.',
    shippingReturns:
      'Ships within 1 to 2 business days with complimentary worldwide delivery over $75. Returns accepted within 30 days in original condition.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: [
      {
        id: 'royal-heirloom-card-main-q4l7',
        caption: 'Gift-boxed gold earring and necklace set styled with ribbon and velvet.',
      },
      {
        id: 'royal-heirloom-card-alt-q4l8',
        caption: 'A matching jewelry set arranged on a dark editorial surface.',
      },
    ],
    gallery: [
      {
        id: 'royal-heirloom-gallery-1-j1n1',
        caption: 'Luxury gift box opened to reveal a coordinated gold jewelry set.',
      },
      {
        id: 'royal-heirloom-gallery-2-j1n2',
        caption: 'Matching earrings and necklace styled together on soft ivory fabric.',
      },
      {
        id: 'royal-heirloom-gallery-3-j1n3',
        caption: 'Editorial gifting moment with a jewelry set and handwritten note.',
      },
    ],
  },
]

export const getStrkImageUrl = (imageId) => {
  const imageEntry = strkImgConfig[imageId]

  if (!imageEntry) {
    return imagePlaceholder
  }

  const pickedResult =
    imageEntry.results?.find((result) => result.id === imageEntry.picked) ??
    imageEntry.results?.[0]

  return pickedResult?.url ?? imagePlaceholder
}

export const ugcMoments = [
  {
    id: 'ugc-evening-stack',
    title: 'Evening Stack',
    caption: 'Soft-gold layers for dinner plans.',
    imageId: 'ugc-evening-stack-91a1',
    displayImageId: 'vivid-aura-gallery-3-k2t3',
  },
  {
    id: 'ugc-daily-glow',
    title: 'Daily Glow',
    caption: 'Minimal pieces that still feel special.',
    imageId: 'ugc-daily-glow-91a2',
    displayImageId: 'golden-sphere-gallery-1-h8d1',
  },
  {
    id: 'ugc-ear-party',
    title: 'Ear Party',
    caption: 'Huggies and cuffs styled with restraint.',
    imageId: 'ugc-ear-party-91a3',
    displayImageId: 'golden-sphere-card-main-p3m4',
  },
  {
    id: 'ugc-gifted-well',
    title: 'Gifted Well',
    caption: 'Ready-to-gift favorites with keepsake appeal.',
    imageId: 'ugc-gifted-well-91a4',
    displayImageId: 'royal-heirloom-card-main-q4l7',
  },
  {
    id: 'ugc-layered-neckline',
    title: 'Layered Neckline',
    caption: 'Quiet sparkle against warm neutrals.',
    imageId: 'ugc-layered-neckline-91a5',
    displayImageId: 'flora-nectar-gallery-1-r9f1',
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    eyebrow: 'Daily polish',
    imageId: 'tile-earrings-f1e1',
    href: '/shop?category=Earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    eyebrow: 'Soft shimmer',
    imageId: 'tile-necklaces-f1e2',
    href: '/shop?category=Necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    eyebrow: 'Sculpted essentials',
    imageId: 'tile-huggies-f1e3',
    href: '/shop?category=Huggies',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote:
      'The quality feels far more expensive than the price. My huggies have become my everyday pair.',
    author: 'Sofia M.',
  },
  {
    id: 'review-2',
    quote:
      'I bought the set as a gift and ended up ordering one for myself. The packaging is beautiful.',
    author: 'Claire T.',
  },
  {
    id: 'review-3',
    quote:
      'Elegant, lightweight, and easy to style. Velmora looks luxe without feeling overdone.',
    author: 'Naomi R.',
  },
]

export const brandStory = {
  imageId: 'brand-story-image-u7h2',
  eyebrow: 'Crafted for daily rituals',
  title: 'A jewelry wardrobe designed for self-gifting, celebrating, and keeping.',
  body:
    'Velmora Fine Jewelry was created for women who want pieces that feel polished enough for evenings and effortless enough for every day. Each design is imagined with warm metals, wearable proportions, and gift-worthy presentation.',
}

export const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=Earrings' },
      { label: 'Necklaces', href: '/shop?category=Necklaces' },
      { label: 'Gift Sets', href: '/shop?category=Gift%20Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', href: '/about' },
      { label: 'Returns', href: '/about' },
      { label: 'Care Guide', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Privacy', href: '/about' },
      { label: 'Terms', href: '/about' },
    ],
  },
]

export const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'Apple Pay']

export const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'TikTok', href: '#' },
]

export const formatPrice = (value) => `$${value}`

export const findProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (productId) => {
  const currentProduct = products.find((product) => product.id === productId)

  if (!currentProduct) {
    return products.slice(0, 3)
  }

  const related = products.filter(
    (product) =>
      product.id !== productId &&
      (product.category === currentProduct.category ||
        product.material === currentProduct.material),
  )

  return [...related, ...products.filter((product) => product.id !== productId)]
    .slice(0, 3)
}
