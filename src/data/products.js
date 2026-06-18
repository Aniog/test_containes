import strkImgConfig from '@/strk-img-config.json'

const getSlot = (slotId) => strkImgConfig?.[slotId] ?? null

const getSlotResults = (slotId) => {
  const slot = getSlot(slotId)
  return Array.isArray(slot?.results) ? slot.results : []
}

const getPickedUrl = (slotId) => {
  const slot = getSlot(slotId)
  const results = getSlotResults(slotId)

  if (!results.length) {
    return ''
  }

  return results.find((result) => result.id === slot?.picked)?.url || results[0]?.url || ''
}

const getGalleryUrls = (slotIds) => {
  const urls = []

  slotIds.forEach((slotId) => {
    getSlotResults(slotId).forEach((result) => {
      if (result?.url && !urls.includes(result.url)) {
        urls.push(result.url)
      }
    })
  })

  return urls.slice(0, 4)
}

const rawProducts = [
  {
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    tones: ['Gold Tone', 'Silver Tone'],
    stockSlots: {
      card: 'home-bestseller-vivid-aura-jewels-0-img-a',
      hover: 'home-bestseller-vivid-aura-jewels-0-img-b',
    },
    shortDescription:
      'A sculptural crystal ear cuff designed to catch candlelight and compliments.',
    description:
      'Vivid Aura Jewels frame the ear with a sleek curve of gold and a refined crystal accent that feels polished for day and luminous for evening. Lightweight enough for effortless wear, it delivers statement energy without overwhelming your look.',
    care:
      'Store in the Velmora pouch, avoid water and perfume contact, and gently polish with a soft cloth after wear.',
    shipping:
      'Ships worldwide in 2–4 business days. 30-day returns on unworn pieces in original packaging.',
    imageDescriptions: [
      'editorial front view of a crystal gold ear cuff on a warm neutral backdrop',
      'close-up of a gold ear cuff worn on the ear in soft golden light',
      'detail crop showing crystal accents and polished gold texture',
      'gift-ready jewelry presentation with gold ear cuff and velvet box',
    ],
  },
  {
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal Accent',
    price: 68,
    rating: 5,
    reviews: 204,
    tones: ['Gold Tone', 'Silver Tone'],
    stockSlots: {
      card: 'home-bestseller-majestic-flora-nectar-1-img-a',
      hover: 'home-bestseller-majestic-flora-nectar-1-img-b',
    },
    shortDescription:
      'A floral crystal necklace with a luminous palette and delicate heirloom feel.',
    description:
      'Majestic Flora Nectar layers pastel-toned crystals into a softly romantic necklace that brightens the collarbone with subtle color. The silhouette feels feminine, elevated, and easy to style with everything from silk shirting to minimal knitwear.',
    care:
      'Keep away from direct moisture, remove before sleeping, and store flat to preserve the crystal settings.',
    shipping:
      'Ships worldwide in 2–4 business days. 30-day returns on unworn pieces in original packaging.',
    imageDescriptions: [
      'editorial necklace flat lay with floral crystals on a deep neutral surface',
      'close-up of a floral crystal necklace worn at the neckline in warm light',
      'macro detail of multicolor crystal petals and gold plated chain',
      'gift-boxed floral crystal necklace beside a silk ribbon',
    ],
  },
  {
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.8,
    reviews: 176,
    tones: ['Gold Tone', 'Silver Tone'],
    stockSlots: {
      card: 'home-bestseller-golden-sphere-huggies-2-img-a',
      hover: 'home-bestseller-golden-sphere-huggies-2-img-b',
    },
    shortDescription:
      'Chunky dome huggies with a smooth mirror finish and everyday-luxury weight.',
    description:
      'Golden Sphere Huggies bring a bold, rounded silhouette to your daily rotation with just the right amount of shine. They hug the lobe comfortably and look equally chic worn solo or layered into a refined ear stack.',
    care:
      'Wipe with a lint-free cloth, avoid harsh products, and keep in a cool dry place between wears.',
    shipping:
      'Ships worldwide in 2–4 business days. 30-day returns on unworn pieces in original packaging.',
    imageDescriptions: [
      'editorial shot of chunky gold dome huggie earrings on warm stone',
      'close-up of polished huggie earrings worn on the ear',
      'macro crop of reflective dome huggies with soft studio shadows',
      'gift-ready huggie earrings styled with a velvet jewelry tray',
    ],
  },
  {
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Textured Gold',
    price: 54,
    rating: 4.9,
    reviews: 142,
    tones: ['Gold Tone', 'Silver Tone'],
    stockSlots: {
      card: 'home-bestseller-amber-lace-earrings-3-img-a',
      hover: 'home-bestseller-amber-lace-earrings-3-img-b',
    },
    shortDescription:
      'Textured filigree drops that feel ornate, airy, and unmistakably elegant.',
    description:
      'Amber Lace Earrings pair delicate openwork texture with a graceful drop that sways softly as you move. The finish feels rich and artisanal, making them an effortless choice for dinners, celebrations, and dressed-up everyday styling.',
    care:
      'Avoid friction against hard surfaces, store separately to protect the finish, and clean gently with a soft cloth.',
    shipping:
      'Ships worldwide in 2–4 business days. 30-day returns on unworn pieces in original packaging.',
    imageDescriptions: [
      'editorial image of textured gold filigree drop earrings on dark neutral fabric',
      'close-up of gold filigree earrings worn with warm evening lighting',
      'macro detail of lace-like texture and delicate drop silhouette',
      'gift presentation of ornate drop earrings with ribbon and jewelry box',
    ],
  },
  {
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    material: 'Gift Set',
    price: 95,
    rating: 5,
    reviews: 89,
    tones: ['Gold Tone', 'Silver Tone'],
    stockSlots: {
      card: 'home-bestseller-royal-heirloom-set-4-img-a',
      hover: 'home-bestseller-royal-heirloom-set-4-img-b',
    },
    shortDescription:
      'A gift-boxed necklace and earring pairing made for memorable occasions.',
    description:
      'Royal Heirloom Set is a ready-to-gift pairing that brings together matching earrings and a necklace inside Velmora’s signature presentation box. It feels thoughtful, polished, and elevated for birthdays, anniversaries, or your own keepsake moment.',
    care:
      'Store pieces separately inside the provided box, avoid water exposure, and polish lightly after wear.',
    shipping:
      'Ships worldwide in 2–4 business days. 30-day returns on unworn pieces in original packaging.',
    imageDescriptions: [
      'editorial gift set featuring gold earrings and necklace in a premium jewelry box',
      'close-up of matching necklace and earrings worn together in warm light',
      'detail shot of a jewelry gift set arranged on soft neutral fabric',
      'luxury unboxing scene with boxed gold jewelry and ribbon',
    ],
  },
]

export const products = rawProducts.map((product) => {
  const galleryImages = getGalleryUrls([product.stockSlots.card, product.stockSlots.hover])
  const cardImage = getPickedUrl(product.stockSlots.card)
  const hoverImage = getPickedUrl(product.stockSlots.hover) || galleryImages[1] || cardImage

  return {
    ...product,
    cardImage,
    hoverImage,
    galleryImages: galleryImages.length ? galleryImages : [cardImage].filter(Boolean),
  }
})

export const categoryTiles = [
  {
    name: 'Earrings',
    description: 'Polished drops, cuffs, and lightweight statement silhouettes.',
  },
  {
    name: 'Necklaces',
    description: 'Layering chains and keepsake pendants with warm brilliance.',
  },
  {
    name: 'Huggies',
    description: 'Everyday icons with sculptural curves and soft shine.',
  },
]

export const testimonials = [
  {
    name: 'Mia L.',
    quote:
      'The finish looks far more expensive than the price point. I wear my Velmora huggies almost every day.',
  },
  {
    name: 'Amara T.',
    quote:
      'Beautiful packaging, thoughtful details, and the perfect gift that still felt elevated and personal.',
  },
  {
    name: 'Sofia R.',
    quote:
      'Quiet luxury done right. Everything feels refined, comfortable, and genuinely easy to style.',
  },
]

export const reels = [
  {
    id: 'reel-ear-stack',
    title: 'Ear Stack, Elevated',
    caption: 'Soft gold layers for every day',
    description: 'vertical editorial image of a woman wearing layered gold ear cuffs and huggies',
  },
  {
    id: 'reel-neckline-glow',
    title: 'Golden Hour Neckline',
    caption: 'Light-catching florals and delicate chain',
    description: 'vertical portrait of a woman wearing a gold crystal necklace in warm sunset light',
  },
  {
    id: 'reel-gifting-moment',
    title: 'Wrapped to Impress',
    caption: 'Gifting made beautifully simple',
    description: 'vertical luxury unboxing moment with jewelry box ribbon and gold earrings',
  },
  {
    id: 'reel-minimal-luxe',
    title: 'Minimal, Never Plain',
    caption: 'A refined finishing touch',
    description: 'vertical close-up of a woman in neutral styling wearing polished gold jewelry',
  },
]

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const materials = ['18K Gold Plated', 'Crystal Accent', 'Textured Gold', 'Gift Set']
export const priceFilters = ['Under $50', '$50 to $80', '$80 and above']

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)
