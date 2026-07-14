export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 86,
    description: 'A sculptural gold ear cuff traced with a luminous crystal accent for understated evening shine.',
    detail: 'Designed for effortless stacking, this cuff slips on comfortably without a piercing and catches the light with a single crystal line.',
    care: 'Keep away from water, perfume, and lotions. Store separately in the Velmora pouch and polish gently with a soft cloth.',
    imageFocus: 'gold ear cuff crystal accent worn on ear warm editorial jewelry close up',
    related: ['golden-sphere-huggies', 'amber-lace-earrings', 'majestic-flora-nectar'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 112,
    description: 'A delicate floral crystal necklace with soft multicolor stones arranged like tiny petals.',
    detail: 'A feminine keepsake for gifting or self-purchase, finished with an adjustable chain that layers beautifully.',
    care: 'Avoid moisture and chemicals. Fasten the clasp before storing to prevent tangles and preserve the gold finish.',
    imageFocus: 'multicolor floral crystal gold necklace on warm neutral skin editorial close up',
    related: ['royal-heirloom-set', 'vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 154,
    description: 'Chunky gold dome huggies with a softly rounded silhouette and everyday polish.',
    detail: 'Lightweight but substantial, these huggies add a refined golden glow from workday to dinner.',
    care: 'Remove before swimming or sleeping. Wipe after wear and keep in a dry jewelry box.',
    imageFocus: 'chunky gold dome huggie earrings on ear quiet luxury jewelry',
    related: ['vivid-aura-jewels', 'amber-lace-earrings', 'royal-heirloom-set'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 73,
    description: 'Textured gold filigree drop earrings with a lace-like pattern and graceful movement.',
    detail: 'A romantic statement with airy detail, crafted to feel special without feeling overdone.',
    care: 'Store flat and dry. Use the included cloth to maintain the textured gold surface.',
    imageFocus: 'textured gold filigree drop earrings warm editorial portrait jewelry',
    related: ['majestic-flora-nectar', 'vivid-aura-jewels', 'golden-sphere-huggies'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    price: 95,
    material: '18K Gold Plated',
    rating: 5,
    reviews: 98,
    description: 'A gift-boxed earring and necklace pairing curated for timeless, ready-to-give elegance.',
    detail: 'Presented in Velmora signature packaging, this set brings together a polished necklace and coordinating earrings.',
    care: 'Keep each piece in its compartment and avoid direct contact with fragrance or cosmetics.',
    imageFocus: 'gift boxed gold earring necklace set warm luxury jewelry packaging',
    related: ['majestic-flora-nectar', 'golden-sphere-huggies', 'amber-lace-earrings'],
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']

export const formatPrice = (price) => `$${price}`

export const getProductById = (id) => products.find((product) => product.id === id)

export const getRelatedProducts = (product) =>
  product?.related?.map((id) => getProductById(id)).filter(Boolean) ?? products.slice(0, 4)
