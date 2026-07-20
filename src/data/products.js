export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    shortDescription:
      'A luminous gold ear cuff traced with a single crystal accent for everyday radiance.',
    description:
      'Designed to slip on with ease, this polished ear cuff adds a refined glimmer without a piercing. Wear it alone for restraint or stack it with huggies for a modern heirloom look.',
    care: 'Finished in 18K gold plating over a durable demi-fine base. Keep dry, store in the Velmora pouch, and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    giftNote: 'Arrives in a soft ivory gift pouch.',
    searchText: 'gold ear cuff crystal accent warm model demi fine jewelry',
    gallery: [
      { id: 'model', caption: 'Gold ear cuff with crystal accent worn on ear' },
      { id: 'detail', caption: 'Close-up polished gold ear cuff with crystal detail' },
      { id: 'stack', caption: 'Minimal gold ear stack with cuff and huggies' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    shortDescription:
      'A delicate floral crystal necklace with softened color and a light-catching gold chain.',
    description:
      'A romantic necklace shaped for gifting and daily self-adornment. Multicolor floral crystals sit against warm gold for a graceful accent at the collarbone.',
    care: '18K gold plated chain with crystal details. Avoid perfume and water exposure to preserve the finish.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    giftNote: 'Gift-ready with a handwritten-style care card.',
    searchText: 'multicolor floral crystal necklace gold chain model neckline',
    gallery: [
      { id: 'neckline', caption: 'Floral crystal necklace worn on warm neutral silk' },
      { id: 'detail', caption: 'Multicolor floral crystal pendant on gold chain' },
      { id: 'gift', caption: 'Elegant gold necklace styled for gifting' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 5,
    reviews: 174,
    shortDescription:
      'Chunky gold dome huggies with a sculptural silhouette and effortless everyday shine.',
    description:
      'A best-loved huggie with soft volume, secure closure, and a high-polish gold finish. Made to elevate a white tee, a slip dress, and everything between.',
    care: '18K gold plating over a lightweight demi-fine base. Store separately to avoid surface scratching.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    giftNote: 'Packaged in our signature pearl drawer box.',
    searchText: 'chunky gold dome huggie earrings worn on ear close-up',
    gallery: [
      { id: 'ear', caption: 'Chunky gold dome huggie earrings worn on ear' },
      { id: 'pair', caption: 'Pair of sculptural gold sphere huggie earrings' },
      { id: 'editorial', caption: 'Editorial close-up of warm gold huggies' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 83,
    shortDescription:
      'Textured gold filigree drops with airy movement and a candlelit amber glow.',
    description:
      'Fine filigree texture gives these drop earrings a soft lace-like presence. Lightweight enough for evening wear that lasts beyond the first toast.',
    care: '18K gold plated with textured detailing. Wipe after wear and store in a dry pouch.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    giftNote: 'Includes a velvet travel sleeve.',
    searchText: 'textured gold filigree drop earrings amber warm editorial jewelry',
    gallery: [
      { id: 'portrait', caption: 'Textured gold filigree drop earrings on model' },
      { id: 'detail', caption: 'Amber gold lace texture drop earring close-up' },
      { id: 'movement', caption: 'Warm gold statement drop earrings in motion' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 62,
    shortDescription:
      'A gift-boxed pairing of luminous earrings and a refined necklace made for keepsake moments.',
    description:
      'Curated for birthdays, anniversaries, and self-celebration, this coordinated set arrives gift-ready with two polished essentials in our signature packaging.',
    care: '18K gold plated demi-fine pieces. Keep away from moisture and polish gently after wear.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    giftNote: 'Presented in a rigid ivory gift box with champagne ribbon.',
    searchText: 'gift boxed gold earring and necklace set demi fine jewelry',
    gallery: [
      { id: 'box', caption: 'Gift boxed gold earring and necklace jewelry set' },
      { id: 'flatlay', caption: 'Gold necklace and earrings arranged on ivory silk' },
      { id: 'model', caption: 'Coordinated gold necklace and earrings worn together' },
    ],
  },
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const categories = ['Earrings', 'Necklaces', 'Huggies']
