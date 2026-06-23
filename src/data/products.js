export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      'A luminous gold ear cuff finished with a tiny crystal accent for everyday radiance.',
    detail:
      'Designed to hug the ear without piercing, Vivid Aura brings a flicker of light to minimalist stacks and solo styling alike.',
    imageRef: {
      titleId: 'product-vivid-aura-title',
      descId: 'product-vivid-aura-desc',
    },
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal & Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 94,
    description:
      'A delicate multicolor floral crystal necklace that catches light with soft vintage charm.',
    detail:
      'A fine chain suspends petal-like crystals in jewel tones, made for gifting moments and quietly special days.',
    imageRef: {
      titleId: 'product-majestic-flora-title',
      descId: 'product-majestic-flora-desc',
    },
    badge: 'Gift pick',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 5.0,
    reviews: 156,
    description:
      'Chunky gold dome huggie earrings with a sculptural silhouette and polished finish.',
    detail:
      'Compact, comfortable, and richly rounded, Golden Sphere adds instant polish to denim, silk, and everything between.',
    imageRef: {
      titleId: 'product-golden-sphere-title',
      descId: 'product-golden-sphere-desc',
    },
    badge: 'Low stock',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviews: 73,
    description:
      'Textured gold filigree drop earrings inspired by antique lace and warm candlelight.',
    detail:
      'Light-catching filigree gives these drops an heirloom feeling while staying easy enough for dinner dates and daily rituals.',
    imageRef: {
      titleId: 'product-amber-lace-title',
      descId: 'product-amber-lace-desc',
    },
    badge: 'New',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 87,
    description:
      'A gift-boxed earring and necklace pairing made for memorable milestones.',
    detail:
      'Curated in our signature keepsake box, this coordinated set is the effortless answer to elevated gifting.',
    imageRef: {
      titleId: 'product-royal-heirloom-title',
      descId: 'product-royal-heirloom-desc',
    },
    badge: 'Under $100',
  },
]

export const getProductById = (id) =>
  products.find((product) => product.id === id) || products[0]

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
export const materials = ['All', '18K Gold Plated', 'Gold Vermeil', 'Crystal & Gold Plated']
