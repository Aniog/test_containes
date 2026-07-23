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
    shortDescription: 'A sculptural gold ear cuff traced with a subtle crystal accent for day-to-night glow.',
    description: 'Designed for a polished stacked look without an extra piercing, Vivid Aura Jewels catches the light with a delicate crystal-set curve and a high-shine gold finish.',
    care: '18K gold plated over recycled brass with crystal detail. Keep dry, store separately, and polish gently with a soft cloth.',
    imagePrompt: 'warm close up gold ear cuff with crystal accent worn on ear quiet luxury jewelry',
    toneOptions: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal',
    price: 68,
    rating: 4.8,
    reviewCount: 96,
    shortDescription: 'A floral crystal necklace with luminous multicolor stones and a refined gold chain.',
    description: 'A romantic floral pendant made for gifting, layered with softly colored crystal petals and a slender gold-plated chain that rests beautifully at the collarbone.',
    care: '18K gold plated chain with crystal pendant. Avoid perfume and lotions, then store in the Velmora pouch after wear.',
    imagePrompt: 'multicolor floral crystal necklace on warm neutral silk editorial gold jewelry',
    toneOptions: ['Gold'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 182,
    shortDescription: 'Chunky gold dome huggies with a rounded silhouette and everyday polish.',
    description: 'Softly rounded and comfortably lightweight, Golden Sphere Huggies bring a confident gold glow to a white tee, silk blouse, or evening slip dress.',
    care: '18K gold plated over recycled brass with hypoallergenic posts. Remove before swimming and sleeping.',
    imagePrompt: 'chunky gold dome huggie earrings on model ear warm studio light',
    toneOptions: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Textured Gold',
    price: 54,
    rating: 4.7,
    reviewCount: 74,
    shortDescription: 'Textured gold filigree drops with movement, warmth, and vintage-inspired detail.',
    description: 'A delicate filigree drop earring with rich texture and soft motion, created to frame the face with an heirloom feel at an accessible price.',
    care: 'Gold-plated textured brass with hypoallergenic posts. Wipe after wear and store flat to protect the filigree finish.',
    imagePrompt: 'textured gold filigree drop earrings warm editorial close up jewelry',
    toneOptions: ['Gold'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5.0,
    reviewCount: 61,
    shortDescription: 'A gift-boxed earring and necklace set curated for birthdays, bridal moments, and keepsakes.',
    description: 'A beautifully boxed pairing of luminous gold earrings and a matching necklace, ready to gift and designed to become part of her daily ritual.',
    care: '18K gold plated set with hypoallergenic earrings. Store pieces separately in the included box to preserve shine.',
    imagePrompt: 'luxury gift boxed gold earring and necklace set warm ivory background',
    toneOptions: ['Gold'],
  },
]

export const categories = [
  {
    name: 'Earrings',
    description: 'Face-framing shine for every ritual.',
    imagePrompt: 'gold earrings on model warm editorial beauty close up',
  },
  {
    name: 'Necklaces',
    description: 'Layered chains and delicate pendants.',
    imagePrompt: 'gold necklace layered on neck warm natural light jewelry',
  },
  {
    name: 'Huggies',
    description: 'Polished silhouettes made for daily wear.',
    imagePrompt: 'gold huggie earrings worn on ear quiet luxury close up',
  },
]

export const ugcPosts = [
  {
    id: 'morning-stack',
    caption: 'Morning stack, softened in gold.',
    prompt: 'vertical reel style woman wearing stacked gold earrings warm morning light',
  },
  {
    id: 'gift-unboxing',
    caption: 'Wrapped for the moments she keeps.',
    prompt: 'vertical reel style hands opening luxury jewelry gift box gold necklace',
  },
  {
    id: 'silk-collarbone',
    caption: 'A shimmer at the collarbone.',
    prompt: 'vertical reel style gold necklace on collarbone silk blouse warm editorial',
  },
  {
    id: 'dinner-huggies',
    caption: 'Dinner plans, dome huggies.',
    prompt: 'vertical reel style close up gold huggie earrings evening warm light',
  },
  {
    id: 'soft-florals',
    caption: 'Florals with a little crystal light.',
    prompt: 'vertical reel style floral crystal necklace worn on model warm neutral',
  },
]

export const testimonials = [
  {
    name: 'Maya L.',
    quote: 'The huggies feel substantial without being heavy. They make every outfit look considered.',
  },
  {
    name: 'Elise R.',
    quote: 'I bought the necklace as a gift and kept thinking about it, so I ordered one for myself.',
  },
  {
    name: 'Nora S.',
    quote: 'Beautiful packaging, fast shipping, and the gold tone looks far more expensive than the price.',
  },
]

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)

export const formatPrice = (price) => `$${price}`
