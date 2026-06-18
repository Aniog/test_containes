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
      'A luminous gold ear cuff finished with a crystal accent for a polished everyday glow.',
    details:
      'Designed to frame the ear without a piercing, this refined cuff brings a subtle light-catching finish to stacks and solo looks.',
    care:
      '18K gold plated brass with crystal accent. Nickel-safe and hypoallergenic. Keep dry, polish gently, and store in the included pouch.',
    imgId: 'product-vivid-aura-primary-a18f3c',
    hoverImgId: 'product-vivid-aura-hover-c29b72',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    description:
      'A delicate floral crystal necklace with softly colored stones and a warm gold chain.',
    details:
      'A romantic demi-fine pendant designed for gifting, layering, and warm evening light.',
    care:
      '18K gold plated stainless steel with multicolor crystal details. Avoid perfume and lotions directly on the piece.',
    imgId: 'product-majestic-flora-primary-f8d3a1',
    hoverImgId: 'product-majestic-flora-hover-e71a54',
    titleId: 'product-majestic-flora-title',
    descId: 'product-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 204,
    description:
      'Chunky gold dome huggie earrings with a sculptural, softly rounded silhouette.',
    details:
      'Our most-worn huggie shape: bold enough to notice, refined enough for every day.',
    care:
      '18K gold plated brass with stainless steel posts. Hypoallergenic. Store separately to protect the high-polish finish.',
    imgId: 'product-golden-sphere-primary-b33d92',
    hoverImgId: 'product-golden-sphere-hover-a93d2f',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviews: 82,
    description:
      'Textured gold filigree drop earrings inspired by antique lace and warm candlelight.',
    details:
      'A lightweight statement with intricate texture, made for dinners, celebrations, and dressed-up days.',
    care:
      'Gold vermeil over sterling silver. Remove before swimming and clean with a soft dry cloth.',
    imgId: 'product-amber-lace-primary-d7c4f9',
    hoverImgId: 'product-amber-lace-hover-b8a1e6',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 61,
    description:
      'A gift-boxed demi-fine earring and necklace pairing with heirloom-inspired warmth.',
    details:
      'Made for effortless gifting, this coordinated set arrives in Velmora signature packaging.',
    care:
      '18K gold plated stainless steel with crystal accents. Hypoallergenic and packed in a keepsake gift box.',
    imgId: 'product-royal-heirloom-primary-c5d1b8',
    hoverImgId: 'product-royal-heirloom-hover-d52e6a',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imgId: 'category-earrings-image-a3c93d',
    description: 'Gold earrings with refined sparkle and sculptural detail.',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imgId: 'category-necklaces-image-f42e99',
    description: 'Layering chains and crystal pendants for everyday luminosity.',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imgId: 'category-huggies-image-e8a13b',
    description: 'Close-fit gold silhouettes designed for daily wear.',
  },
]

export const ugcPosts = [
  {
    id: 'morning-stack',
    caption: 'Morning gold stack',
    titleId: 'ugc-morning-stack-title',
    imgId: 'ugc-morning-stack-img-f92ac1',
  },
  {
    id: 'soft-neckline',
    caption: 'A softer neckline',
    titleId: 'ugc-soft-neckline-title',
    imgId: 'ugc-soft-neckline-img-e24d8c',
  },
  {
    id: 'dinner-glow',
    caption: 'Dinner glow, no effort',
    titleId: 'ugc-dinner-glow-title',
    imgId: 'ugc-dinner-glow-img-b71a66',
  },
  {
    id: 'gift-unboxed',
    caption: 'Unboxed for her',
    titleId: 'ugc-gift-unboxed-title',
    imgId: 'ugc-gift-unboxed-img-c63d02',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductById = (id) =>
  products.find((product) => product.id === id) ?? products[0]
