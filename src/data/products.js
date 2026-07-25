export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 128,
    description: 'A sculptural gold ear cuff finished with a single crystal accent for soft, luminous definition.',
    detail: 'Designed for everyday glow without a piercing, this refined ear cuff stacks beautifully with studs and huggies.',
    care: 'Keep dry, polish gently with a soft cloth, and store separately in the Velmora pouch.',
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 94,
    description: 'A delicate floral crystal necklace with subtle color, made to catch warm light at the collarbone.',
    detail: 'Multicolor crystal petals meet a fine adjustable chain for gifting, layering, or an elevated everyday signature.',
    care: 'Avoid perfume and lotions directly on the piece. Store clasped and flat to protect the chain.',
    badge: 'Gift Pick',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 151,
    description: 'Chunky gold dome huggies with a softly rounded silhouette and comfortable close fit.',
    detail: 'A polished dome profile adds quiet shine to denim, silk, and evening looks with minimal effort.',
    care: 'Wipe after wear and store in a dry place. Hypoallergenic posts are made for sensitive ears.',
    badge: 'Low Stock',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: 'Gold Vermeil',
    rating: 4.7,
    reviews: 83,
    description: 'Textured gold filigree drops inspired by antique lace, airy enough for day-to-night wear.',
    detail: 'Intricate openwork catches light with movement while keeping the feel featherlight and refined.',
    care: 'Remove before swimming or showering. Clean only with a dry jewelry cloth.',
    badge: 'New',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: '18K Gold Plated',
    rating: 5,
    reviews: 67,
    description: 'A gift-boxed earring and necklace pairing created for considered celebrations and polished rituals.',
    detail: 'Arrives in our signature keepsake box with complementary silhouettes designed to be worn together or separately.',
    care: 'Store pieces individually inside the box and keep away from moisture for lasting brilliance.',
    badge: 'Ready to Gift',
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies']

export const formatPrice = (price) => `$${price}`

export const getProductById = (productId) =>
  products.find((product) => product.id === productId) || products[0]
