export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    shortDescription: 'A sculptural gold ear cuff finished with a single crystal accent for everyday luminosity.',
    details: 'Designed to frame the ear with a delicate flash of light, this cuff layers beautifully with studs and huggies without requiring a piercing.',
    care: '18K gold plated over recycled brass with a crystal accent. Keep dry, avoid perfume, and store in the included soft pouch.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 94,
    shortDescription: 'A refined floral crystal necklace with soft multicolor stones and a warm gold chain.',
    details: 'A feminine centerpiece that catches the light at the collarbone, created for gifting moments and polished everyday wear.',
    care: '18K gold plated chain with glass crystal detailing. Wipe gently after wear and fasten before storing to prevent tangles.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 211,
    shortDescription: 'Chunky dome huggie earrings with a rounded gold profile and polished everyday finish.',
    details: 'Lightweight with just enough volume, these huggies bring a modern dome silhouette to workdays, dinners, and weekend travel.',
    care: '18K gold plated over stainless steel with hypoallergenic posts. Clean with a dry microfiber cloth only.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 73,
    shortDescription: 'Textured filigree drop earrings with an heirloom-inspired silhouette and soft movement.',
    details: 'An intricate lace-like drop brings vintage romance to the face while remaining light enough for long evenings.',
    care: '18K gold plated filigree with hypoallergenic hooks. Avoid water, lotions, and abrasive cloths.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 56,
    shortDescription: 'A gift-boxed demi-fine pairing of earrings and necklace made for meaningful celebrations.',
    details: 'A complete jewelry moment presented in Velmora gift packaging, curated for birthdays, anniversaries, and elevated self-purchase.',
    care: '18K gold plated set with hypoallergenic earring posts. Store each piece separately in the keepsake box.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Warm gold earrings styled on ear for quiet luxury editorial jewelry',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Demi fine gold necklace worn on collarbone with soft neutral silk',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Chunky gold huggie earrings close up on model in warm studio light',
  },
]

export const ugcMoments = [
  {
    id: 'morning-stack',
    caption: 'The morning stack',
    description: 'gold huggie earrings stacked on ear warm bathroom mirror light',
  },
  {
    id: 'gift-note',
    caption: 'Wrapped to gift',
    description: 'gold jewelry gift box with handwritten note warm cream background',
  },
  {
    id: 'dinner-glow',
    caption: 'Dinner glow',
    description: 'woman wearing gold necklace at candlelit dinner close crop',
  },
  {
    id: 'soft-focus',
    caption: 'Soft focus shine',
    description: 'delicate gold earrings on model soft focus editorial portrait',
  },
  {
    id: 'weekend-chain',
    caption: 'Weekend chain',
    description: 'layered demi fine gold necklace over ivory knit close up',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug) ?? products[0]
