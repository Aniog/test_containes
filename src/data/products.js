export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 128,
    shortDescription:
      'A sculptural gold ear cuff finished with a single crystal accent for effortless everyday shine.',
    description:
      'Designed to frame the ear without a piercing, this crystal-accented cuff brings a quiet flash of light to polished daytime looks and evening layers.',
    care: 'Keep dry, avoid fragrance contact, and store in the included soft pouch between wears.',
    imgId: 'product-vivid-aura-primary-a8f4c1',
    hoverImgId: 'product-vivid-aura-hover-d3b92e',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: 'Crystal & Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.8,
    reviewCount: 96,
    shortDescription:
      'A delicate floral crystal necklace with soft color, fine sparkle, and a graceful adjustable chain.',
    description:
      'A romantic floral pendant softened by multicolor crystal detail, made for gifting, layering, and luminous self-purchase moments.',
    care: 'Polish gently with a dry jewelry cloth and fasten the clasp before storage to prevent tangling.',
    imgId: 'product-majestic-flora-primary-f61a0b',
    hoverImgId: 'product-majestic-flora-hover-c9e4f7',
    titleId: 'product-majestic-flora-title',
    descId: 'product-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 151,
    shortDescription:
      'Chunky gold dome huggies with a smooth rounded profile and premium, weightless comfort.',
    description:
      'A bestselling everyday huggie with a softly domed silhouette that catches warm light from every angle.',
    care: 'Remove before showering, swimming, or working out to preserve the high-polish finish.',
    imgId: 'product-golden-sphere-primary-b27e11',
    hoverImgId: 'product-golden-sphere-hover-e0a44d',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: 'Textured Gold Plated',
    tone: ['Gold'],
    rating: 4.7,
    reviewCount: 84,
    shortDescription:
      'Textured gold filigree drop earrings with heirloom-inspired detail and a barely-there feel.',
    description:
      'Intricate openwork and warm gold texture make these statement drops feel refined, feminine, and surprisingly easy to wear.',
    care: 'Store separately from harder metals and wipe after wear to keep the textured finish bright.',
    imgId: 'product-amber-lace-primary-e8c30a',
    hoverImgId: 'product-amber-lace-hover-a5bd72',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: 'Gift-Boxed Demi-Fine Set',
    tone: ['Gold', 'Silver'],
    rating: 5,
    reviewCount: 73,
    shortDescription:
      'A gift-boxed earring and necklace pairing designed for polished rituals and memorable occasions.',
    description:
      'Presented in a Velmora keepsake box, this coordinated set combines luminous stones and warm metal for an instantly complete jewelry wardrobe.',
    care: 'Nest each piece in its original compartment after wear and keep away from prolonged humidity.',
    imgId: 'product-royal-heirloom-primary-fb7d19',
    hoverImgId: 'product-royal-heirloom-hover-c7a80d',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Light-catching studs, cuffs, and refined drops for daily polish.',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imgId: 'category-earrings-image-b8d91f',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and pendants made to layer, gift, and treasure.',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imgId: 'category-necklaces-image-a2e73c',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Close-fit silhouettes with sculptural shine and all-day comfort.',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imgId: 'category-huggies-image-f0c56a',
  },
]

export const ugcStories = [
  {
    id: 'mirror-glow',
    caption: 'golden hour stack',
    titleId: 'ugc-mirror-glow-title',
    imgId: 'ugc-mirror-glow-image-3c72e4',
  },
  {
    id: 'soft-dinner',
    caption: 'dinner-light huggies',
    titleId: 'ugc-soft-dinner-title',
    imgId: 'ugc-soft-dinner-image-b6f89a',
  },
  {
    id: 'gift-moment',
    caption: 'wrapped for her',
    titleId: 'ugc-gift-moment-title',
    imgId: 'ugc-gift-moment-image-41de9b',
  },
  {
    id: 'neckline-layer',
    caption: 'a quiet neckline',
    titleId: 'ugc-neckline-layer-title',
    imgId: 'ugc-neckline-layer-image-9fd120',
  },
  {
    id: 'weekend-cuff',
    caption: 'weekend ear cuff',
    titleId: 'ugc-weekend-cuff-title',
    imgId: 'ugc-weekend-cuff-image-69a3fe',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductById = (id) => products.find((product) => product.id === id)
