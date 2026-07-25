const gallery = (slug, cues) =>
  cues.map((cue, index) => ({
    cueId: `${slug}-gallery-cue-${index + 1}`,
    cueText: cue,
    alt: cue,
    mainSlotId: `velmora-${slug}-gallery-main-${index + 1}`,
    thumbSlotId: `velmora-${slug}-gallery-thumb-${index + 1}`,
  }))

export const products = [
  {
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    shortDescription:
      'A crystal-tipped ear cuff that lends instant polish without overpowering your stack.',
    description:
      'Designed to hug the ear with a luminous crystal accent, Vivid Aura Jewels turns a minimal outfit into a styled moment. Lightweight, sculptural, and easy to pair with studs or hoops.',
    materials:
      '18K gold-plated brass, cubic zirconia crystal accent, nickel-free posts, and a hypoallergenic finish suitable for sensitive ears.',
    shipping:
      'Ships within 1 to 2 business days from our studio. Free worldwide shipping on orders over $75 and 30-day returns for unworn pieces.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: {
      primarySlotId: 'velmora-vivid-aura-card-primary',
      secondarySlotId: 'velmora-vivid-aura-card-secondary',
      promptId: 'velmora-vivid-aura-card-prompt',
      prompt: 'editorial close-up of gold ear cuff jewelry worn on the ear with warm luxury lighting',
    },
    gallery: gallery('vivid-aura-jewels', [
      'close-up gold ear cuff with crystal accent on the ear',
      'gold ear cuff styled with a sleek bun and editorial makeup',
      'stacked gold ear cuff with soft warm lighting',
      'gift-ready ear cuff resting in a velvet jewelry box',
    ]),
  },
  {
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    shortDescription:
      'A floral crystal pendant necklace with a delicate spectrum of warm, gemstone-like color.',
    description:
      'Majestic Flora Nectar layers luminous petals, refined sparkle, and a fine chain for an instantly dressed look. It wears beautifully solo and glows when paired with a crisp white shirt or silk slip.',
    materials:
      '18K gold-plated brass, multicolor crystal stones, adjustable chain length, and a hypoallergenic clasp closure.',
    shipping:
      'Ships within 1 to 2 business days. Gift boxing is available at checkout, with free returns within 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: {
      primarySlotId: 'velmora-majestic-flora-card-primary',
      secondarySlotId: 'velmora-majestic-flora-card-secondary',
      promptId: 'velmora-majestic-flora-card-prompt',
      prompt: 'editorial floral crystal necklace jewelry worn at the collarbone in warm neutral light',
    },
    gallery: gallery('majestic-flora-nectar', [
      'multicolor floral crystal necklace worn at the collarbone',
      'close-up of a floral crystal pendant necklace on soft skin',
      'gold floral necklace layered with a silk blouse neckline',
      'floral crystal necklace styled in an ivory gift box',
    ]),
  },
  {
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 214,
    shortDescription:
      'Chunky dome huggies with a smooth sculptural curve and everyday wearability.',
    description:
      'Golden Sphere Huggies are the pair you reach for on repeat. The rounded silhouette catches light beautifully, adding just enough drama to denim, tailoring, and night-out dressing.',
    materials:
      '18K gold-plated brass, lightweight hollow construction, secure click closure, and hypoallergenic finish.',
    shipping:
      'Quick dispatch within 1 to 2 business days. Enjoy free worldwide shipping on qualifying orders and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: {
      primarySlotId: 'velmora-golden-sphere-card-primary',
      secondarySlotId: 'velmora-golden-sphere-card-secondary',
      promptId: 'velmora-golden-sphere-card-prompt',
      prompt: 'editorial chunky gold huggie earrings jewelry on model ear with refined warm styling',
    },
    gallery: gallery('golden-sphere-huggies', [
      'chunky gold dome huggie earrings on an ear stack',
      'close-up of polished gold huggie earrings with soft lighting',
      'gold dome huggies styled with a neutral knit and slicked hair',
      'pair of gold huggie earrings placed on velvet for gifting',
    ]),
  },
  {
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '14K Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviews: 81,
    shortDescription:
      'Textured filigree drop earrings with a soft vintage-inspired glow.',
    description:
      'Amber Lace Earrings bring intricate texture and movement to evening looks while staying comfortable enough for dinner dates and special gifting. The filigree detail feels heirloom-inspired yet modern.',
    materials:
      '14K gold vermeil over sterling silver, textured filigree drops, hypoallergenic hooks, and polished protective coating.',
    shipping:
      'Ships in 1 to 2 business days with elegant gift-ready packaging. Returns accepted within 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: {
      primarySlotId: 'velmora-amber-lace-card-primary',
      secondarySlotId: 'velmora-amber-lace-card-secondary',
      promptId: 'velmora-amber-lace-card-prompt',
      prompt: 'editorial textured gold drop earrings jewelry against warm dark luxury background',
    },
    gallery: gallery('amber-lace-earrings', [
      'textured gold filigree drop earrings against dark silk',
      'gold filigree earrings worn with tucked hair and warm makeup',
      'close-up of lace-like gold drop earrings in motion',
      'filigree earrings arranged in a refined jewelry gift box',
    ]),
  },
  {
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 63,
    shortDescription:
      'A gift-boxed earring and necklace pairing curated for effortless, polished gifting.',
    description:
      'The Royal Heirloom Set combines a refined pendant necklace with matching earrings in a velvet-lined box. It is our elevated answer to milestone gifting, bridesmaid boxes, and self-purchase indulgence.',
    materials:
      '18K gold-plated brass set, matching crystal details, velvet presentation box, and hypoallergenic finish across both pieces.',
    shipping:
      'Ships in 1 to 2 business days with signature packaging. Complimentary gift messaging and 30-day returns included.',
    variants: ['Gold Tone', 'Silver Tone'],
    cardImages: {
      primarySlotId: 'velmora-royal-heirloom-card-primary',
      secondarySlotId: 'velmora-royal-heirloom-card-secondary',
      promptId: 'velmora-royal-heirloom-card-prompt',
      prompt: 'editorial luxury gold jewelry gift set with necklace and earrings in elegant packaging',
    },
    gallery: gallery('royal-heirloom-set', [
      'gift boxed gold earring and necklace set on ivory linen',
      'coordinated gold jewelry gift set styled for an elegant unboxing',
      'close-up of matching gold necklace and earrings in warm light',
      'luxury jewelry gift box tied with ribbon and opened beside velvet',
    ]),
  },
]

export const categoryTiles = [
  {
    name: 'Earrings',
    href: '/shop?category=Earrings',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    slotId: 'velmora-category-earrings',
    description: 'Sculptural drops, cuffs, and soft sparkle for every day.',
  },
  {
    name: 'Necklaces',
    href: '/shop?category=Necklaces',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    slotId: 'velmora-category-necklaces',
    description: 'Delicate layers and statement pendants that sit just right.',
  },
  {
    name: 'Huggies',
    href: '/shop?category=Huggies',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    slotId: 'velmora-category-huggies',
    description: 'Rounded silhouettes designed to stay on rotation.',
  },
]

export const ugcMoments = [
  {
    title: 'The Everyday Stack',
    caption: 'Layered gold huggies for morning coffee, late dinners, and everything between.',
    titleId: 'ugc-everyday-stack-title',
    captionId: 'ugc-everyday-stack-caption',
    slotId: 'velmora-ugc-everyday-stack',
  },
  {
    title: 'Golden Hour Glow',
    caption: 'A quiet necklace moment catching warm light at the collarbone.',
    titleId: 'ugc-golden-hour-title',
    captionId: 'ugc-golden-hour-caption',
    slotId: 'velmora-ugc-golden-hour',
  },
  {
    title: 'Soft Statement',
    caption: 'Crystal florals that elevate tailoring without trying too hard.',
    titleId: 'ugc-soft-statement-title',
    captionId: 'ugc-soft-statement-caption',
    slotId: 'velmora-ugc-soft-statement',
  },
  {
    title: 'Weekend Gift Edit',
    caption: 'Our velvet boxed set wrapped and ready for birthdays, bridesmaids, and just because.',
    titleId: 'ugc-weekend-gift-title',
    captionId: 'ugc-weekend-gift-caption',
    slotId: 'velmora-ugc-weekend-gift',
  },
  {
    title: 'Dinner-Date Shine',
    caption: 'Textured drops and a bare shoulder make the whole look feel done.',
    titleId: 'ugc-dinner-date-title',
    captionId: 'ugc-dinner-date-caption',
    slotId: 'velmora-ugc-dinner-date',
  },
]

export const testimonials = [
  {
    name: 'Sofia M.',
    quote:
      'The quality feels far more expensive than the price point. My huggies have become my everyday pair.',
  },
  {
    name: 'Danielle R.',
    quote:
      'I bought the heirloom set for a birthday gift and ended up ordering one for myself the same night.',
  },
  {
    name: 'Priya T.',
    quote:
      'The packaging, finish, and comfort all feel so considered. Velmora looks genuinely elevated.',
  },
]

export const journalEntries = [
  {
    title: 'How to Build an Ear Stack That Still Feels Refined',
    excerpt:
      'A guide to balancing shine, shape, and spacing for a jewelry wardrobe that looks collected over time.',
    titleId: 'journal-ear-stack-title',
    excerptId: 'journal-ear-stack-excerpt',
    slotId: 'velmora-journal-ear-stack',
  },
  {
    title: 'The New Gift Uniform: Jewelry That Feels Personal',
    excerpt:
      'Why demi-fine sets have become the new default for birthdays, bridal moments, and self-gifting rituals.',
    titleId: 'journal-gift-uniform-title',
    excerptId: 'journal-gift-uniform-excerpt',
    slotId: 'velmora-journal-gift-uniform',
  },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)
