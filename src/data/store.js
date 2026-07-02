export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff with a single crystal accent that catches the light with every turn. Designed for effortless stacking or a quiet standalone statement.',
    materials:
      '18K gold-plated brass with a prong-set cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfumes and lotions. Store in the provided pouch and polish gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'velmora-product-vivid-aura-hero', ratio: '3x4', width: 800, alt: 'Vivid Aura Jewels gold ear cuff on model' },
      { imgId: 'velmora-product-vivid-aura-detail', ratio: '1x1', width: 600, alt: 'Vivid Aura Jewels detail shot' },
      { imgId: 'velmora-product-vivid-aura-worn', ratio: '3x4', width: 800, alt: 'Vivid Aura Jewels worn on ear' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description:
      'A delicate gold chain suspends a bouquet of multicolor crystals in soft floral forms. Feminine, wearable, and made to layer.',
    materials:
      '18K gold-plated chain with hand-set multicolor crystal pendants. Adjustable 16–18 inch length.',
    care: 'Remove before showering or swimming. Lay flat to store and avoid tangles.',
    variants: ['Gold'],
    images: [
      { imgId: 'velmora-product-flora-nectar-hero', ratio: '3x4', width: 800, alt: 'Majestic Flora Nectar necklace' },
      { imgId: 'velmora-product-flora-nectar-detail', ratio: '1x1', width: 600, alt: 'Majestic Flora Nectar pendant detail' },
      { imgId: 'velmora-product-flora-nectar-worn', ratio: '3x4', width: 800, alt: 'Majestic Flora Nectar worn on model' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviews: 156,
    description:
      'Chunky dome huggies with a polished gold finish. Substantial enough to elevate a white tee, refined enough for evening.',
    materials:
      '18K gold-plated brass with a secure hinge closure. Lightweight and comfortable for all-day wear.',
    care: 'Wipe clean after wear. Keep dry and store separately to prevent scratching.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'velmora-product-sphere-huggies-hero', ratio: '3x4', width: 800, alt: 'Golden Sphere Huggies earrings' },
      { imgId: 'velmora-product-sphere-huggies-detail', ratio: '1x1', width: 600, alt: 'Golden Sphere Huggies detail' },
      { imgId: 'velmora-product-sphere-huggies-worn', ratio: '3x4', width: 800, alt: 'Golden Sphere Huggies worn' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviews: 71,
    description:
      'Textured gold filigree drops inspired by vintage lace. Lightweight and luminous, they frame the face with warm golden movement.',
    materials:
      '18K gold-plated brass with an intricate openwork filigree drop. Surgical-steel posts.',
    care: 'Handle by the post to preserve shape. Store hanging or flat in a dry pouch.',
    variants: ['Gold'],
    images: [
      { imgId: 'velmora-product-amber-lace-hero', ratio: '3x4', width: 800, alt: 'Amber Lace Earrings gold filigree drops' },
      { imgId: 'velmora-product-amber-lace-detail', ratio: '1x1', width: 600, alt: 'Amber Lace Earrings detail' },
      { imgId: 'velmora-product-amber-lace-worn', ratio: '3x4', width: 800, alt: 'Amber Lace Earrings worn' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'earrings',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description:
      'A gift-boxed pairing of signature earrings and a matching necklace. The perfect ready-to-give treasure for someone you love — including yourself.',
    materials:
      '18K gold-plated brass set including coordinated earrings and pendant necklace. Presented in a Velmora gift box.',
    care: 'Store in the gift box between wears. Clean gently with a soft, dry cloth.',
    variants: ['Gold'],
    images: [
      { imgId: 'velmora-product-heirloom-set-hero', ratio: '3x4', width: 800, alt: 'Royal Heirloom Set gift box' },
      { imgId: 'velmora-product-heirloom-set-detail', ratio: '1x1', width: 600, alt: 'Royal Heirloom Set detail' },
      { imgId: 'velmora-product-heirloom-set-worn', ratio: '3x4', width: 800, alt: 'Royal Heirloom Set worn' },
    ],
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena M.',
    rating: 5,
    text: 'The packaging alone felt like a gift. The earrings are even more beautiful in person — delicate but substantial.',
  },
  {
    id: 't2',
    name: 'Sophia L.',
    rating: 5,
    text: 'I bought the huggies as a treat to myself and I have not taken them off. They go with absolutely everything.',
  },
  {
    id: 't3',
    name: 'Naomi R.',
    rating: 5,
    text: 'Gifting Velmora has become my signature. Every piece feels thoughtful and quietly luxurious.',
  },
]

export const ugcReels = [
  {
    id: 'reel-1',
    imgId: 'velmora-ugc-ear-cuff',
    caption: 'Ear cuff stack of dreams',
    ratio: '9x16',
    width: 500,
  },
  {
    id: 'reel-2',
    imgId: 'velmora-ugc-necklace-layer',
    caption: 'Layered and luminous',
    ratio: '9x16',
    width: 500,
  },
  {
    id: 'reel-3',
    imgId: 'velmora-ugc-huggies-close',
    caption: 'Everyday gold',
    ratio: '9x16',
    width: 500,
  },
  {
    id: 'reel-4',
    imgId: 'velmora-ugc-gift-unbox',
    caption: 'Unboxing magic',
    ratio: '9x16',
    width: 500,
  },
  {
    id: 'reel-5',
    imgId: 'velmora-ugc-filigree',
    caption: 'Vintage vibes',
    ratio: '9x16',
    width: 500,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}
