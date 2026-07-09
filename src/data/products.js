export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 86,
    description:
      'A sculptural gold ear cuff finished with a crystal accent for a luminous, no-piercing-required stack.',
    details:
      'A polished demi-fine cuff designed to hug the ear with a subtle flash of light. Wear it solo or layered with your daily studs.',
    care: '18K gold plated brass with crystal accent. Keep dry, avoid perfume contact, and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imageQuery: 'gold ear cuff crystal jewelry worn on ear warm editorial',
    secondImageQuery: 'close up gold ear cuff crystal accent on neutral silk',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 64,
    description:
      'A delicate floral crystal necklace with soft color and a quietly romantic gold chain.',
    details:
      'A refined pendant necklace with multicolor crystal petals that catches warm light beautifully for gifting or everyday polish.',
    care: '18K gold plated chain with crystal pendant. Store separately and avoid water, lotions, and household cleaners.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
    badge: 'Gift Pick',
    imageQuery: 'multicolor floral crystal gold necklace on model warm editorial',
    secondImageQuery: 'floral crystal gold necklace close up on ivory fabric',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 112,
    description:
      'Chunky gold dome huggie earrings with a rounded, high-shine silhouette made for daily wear.',
    details:
      'Lightweight but substantial, these huggies bring a modern golden curve to an effortless ear stack.',
    care: '18K gold plated brass. Nickel-safe and hypoallergenic for most sensitive ears. Wipe clean after wear.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
    badge: 'Low Stock',
    imageQuery: 'chunky gold dome huggie earrings worn on ear warm light',
    secondImageQuery: 'gold dome huggie earrings close up on dark velvet',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 43,
    description:
      'Textured gold filigree drop earrings that move softly and frame the face with warm shimmer.',
    details:
      'An ornate yet restrained drop silhouette inspired by antique lacework, balanced for evening and everyday styling.',
    care: '18K gold plated filigree. Store in the Velmora pouch and avoid abrasive surfaces.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold'],
    badge: 'New',
    imageQuery: 'textured gold filigree drop earrings on model warm luxury',
    secondImageQuery: 'gold filigree drop earrings close up editorial jewelry',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: '18K Gold Plated',
    rating: 5,
    reviews: 57,
    description:
      'A gift-boxed earring and necklace set with luminous gold detail for the moments worth marking.',
    details:
      'A complete demi-fine pairing presented in a keepsake box, designed for easy gifting and elevated everyday wear.',
    care: '18K gold plated set with hypoallergenic posts. Keep pieces separated in the provided pouch between wears.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tones: ['Gold', 'Silver'],
    badge: 'Best Gift',
    imageQuery: 'gift boxed gold earring necklace jewelry set warm luxury',
    secondImageQuery: 'gold jewelry set in gift box close up champagne background',
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

export const formatPrice = (price) => `$${price}`

export const getProductById = (id) =>
  products.find((product) => product.id === id) ?? products[0]
