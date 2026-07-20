export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    shortDescription: 'A sculptural gold ear cuff finished with a luminous crystal accent for everyday polish.',
    description:
      'Designed to catch the light from every angle, this no-piercing ear cuff brings a refined glimmer to stacked ears and minimalist looks alike.',
    care: '18K gold plated over recycled brass with a crystal accent. Keep dry, store separately, and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition.',
    searchPrimary: 'warm editorial close up gold ear cuff crystal accent worn on ear demi fine jewelry',
    searchSecondary: 'gold crystal ear cuff jewelry detail on soft neutral background',
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    shortDescription: 'A floral crystal necklace with subtle color and a delicate gold chain made for gifting.',
    description:
      'A soft statement piece that balances color with restraint, made to sit beautifully at the collarbone over silk, linen, or bare skin.',
    care: '18K gold plated chain with glass crystal florals. Avoid perfume, water, and harsh cleaners to preserve the finish.',
    shipping: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition.',
    searchPrimary: 'warm model close up wearing floral crystal gold necklace demi fine jewelry',
    searchSecondary: 'multicolor floral crystal gold necklace on ivory silk editorial jewelry',
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 154,
    shortDescription: 'Chunky gold dome huggies with a polished silhouette that feels modern and timeless.',
    description:
      'Small in scale and rich in shape, these huggies deliver the soft volume of vintage gold without feeling heavy.',
    care: '18K gold plated over stainless steel. Hypoallergenic posts. Wipe after wear and store in the included pouch.',
    shipping: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition.',
    searchPrimary: 'close up chunky gold dome huggie earrings worn on ear warm luxury light',
    searchSecondary: 'polished gold huggie earrings on neutral stone editorial jewelry',
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 82,
    shortDescription: 'Textured filigree drop earrings with a warm amber glow and evening-ready movement.',
    description:
      'Intricate but never ornate, these drops add lace-like dimension to a clean neckline or swept-back hair.',
    care: '18K gold plated filigree with lightweight drops. Store flat and avoid moisture to protect the delicate texture.',
    shipping: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition.',
    searchPrimary: 'warm editorial close up textured gold filigree drop earrings on model',
    searchSecondary: 'amber gold lace drop earrings on dark neutral velvet jewelry still life',
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 73,
    shortDescription: 'A gift-boxed earring and necklace pairing curated for effortless occasion dressing.',
    description:
      'A complete gold pairing presented in our signature box, ideal for birthdays, bridal moments, and elevated everyday rituals.',
    care: '18K gold plated set with hypoallergenic earrings. Keep pieces separated in the gift box between wears.',
    shipping: 'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition.',
    searchPrimary: 'luxury gift box gold jewelry necklace earrings set warm editorial still life',
    searchSecondary: 'gold necklace and earrings gift set in elegant jewelry box',
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']
export const materials = ['18K Gold Plated', 'Hypoallergenic', 'Crystal Accent']

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug) || products[0]

export const formatPrice = (price) => `$${price}`
