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
      'A luminous gold ear cuff finished with a crystal accent for a subtle, sculptural glint.',
    details:
      'Designed for everyday radiance, this no-piercing cuff hugs the ear with a refined silhouette and a single light-catching crystal.',
    care: '18K gold plated brass with crystal accent. Keep dry, store separately, and polish gently with a soft cloth.',
    query: 'gold ear cuff with crystal accent warm editorial jewelry on model',
    imageId: 'product-vivid-aura-primary-a91f2c',
    hoverImageId: 'product-vivid-aura-hover-b82e7d',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 94,
    description:
      'A delicate floral crystal necklace with multicolor facets set against warm gold.',
    details:
      'A refined pendant that brings a soft botanical note to silk blouses, knitwear, and evening necklines.',
    care: '18K gold plated chain with crystal pendant. Avoid perfume and water to preserve the finish.',
    query: 'multicolor floral crystal necklace gold warm editorial jewelry close up',
    imageId: 'product-majestic-flora-primary-c73d0e',
    hoverImageId: 'product-majestic-flora-hover-d64c1a',
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
      'Chunky dome huggies with a polished gold curve that feels modern and timeless.',
    details:
      'Compact, comfortable, and quietly bold, these huggies bring dimension to an everyday stack.',
    care: '18K gold plated hypoallergenic posts. Wipe after wear and store in the included pouch.',
    query: 'chunky gold dome huggie earrings warm neutral background editorial',
    imageId: 'product-golden-sphere-primary-e55b3f',
    hoverImageId: 'product-golden-sphere-hover-f46a2d',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 87,
    description:
      'Textured gold filigree drops that frame the face with airy, heirloom-inspired detail.',
    details:
      'Intricate but lightweight, these drops add a romantic finish to dinners, weddings, and polished days.',
    care: '18K gold plated filigree. Remove before showering and keep away from lotions or oils.',
    query: 'textured gold filigree drop earrings warm luxury editorial jewelry',
    imageId: 'product-amber-lace-primary-g37f8a',
    hoverImageId: 'product-amber-lace-hover-h28e9b',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 112,
    description:
      'A gift-boxed earring and necklace pairing made for milestones, bridesmaids, and treasured rituals.',
    details:
      'Presented in Velmora gift packaging, this coordinated set balances soft sparkle with everyday wearability.',
    care: '18K gold plated demi-fine set with hypoallergenic details. Store each piece separately in its pouch.',
    query: 'gift boxed gold earring necklace jewelry set warm luxury packaging',
    imageId: 'product-royal-heirloom-primary-i19d6c',
    hoverImageId: 'product-royal-heirloom-hover-j80c5e',
  },
]

export const categories = [
  {
    name: 'Earrings',
    description: 'Face-framing glints for every hour.',
    imageId: 'category-earrings-k61b4e',
  },
  {
    name: 'Necklaces',
    description: 'Delicate layers with heirloom energy.',
    imageId: 'category-necklaces-l52a3f',
  },
  {
    name: 'Huggies',
    description: 'Small silhouettes, unmistakable polish.',
    imageId: 'category-huggies-m43c2d',
  },
]

export const ugcStories = [
  { id: 'ugc-ear-stack', caption: 'Golden hour ear stack', imageId: 'ugc-ear-stack-n34d1a' },
  { id: 'ugc-neck-layer', caption: 'Layered for dinner', imageId: 'ugc-neck-layer-o25e0b' },
  { id: 'ugc-gift-moment', caption: 'A gift worth keeping', imageId: 'ugc-gift-moment-p16f9c' },
  { id: 'ugc-daily-huggies', caption: 'The everyday huggie', imageId: 'ugc-daily-huggies-q07a8d' },
  { id: 'ugc-soft-silk', caption: 'Silk, skin, gold', imageId: 'ugc-soft-silk-r98b7e' },
]

export const formatPrice = (price) => `$${price}`
