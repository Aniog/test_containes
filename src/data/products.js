export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    tags: ['bestseller', 'new'],
    description:
      'A sculptural gold ear cuff illuminated by a single crystal accent. Designed to catch candlelight and conversation alike—no piercing required.',
    materialsCare:
      '18k gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. To preserve the finish, avoid contact with perfume, lotion, and water. Store in the included pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    imgId: 'velmora-product-vivid-aura-jewels',
    titleId: 'product-title-vivid-aura-jewels',
    descId: 'product-desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    tags: ['bestseller'],
    description:
      'A delicate collar of gold petals and multicolor crystals inspired by an overgrown garden at golden hour. The adjustable chain lets it sit exactly where you want it.',
    materialsCare:
      '18k gold-plated brass with hand-set glass crystals. Length: 40cm + 5cm extender. Wipe gently with a soft cloth after wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: false },
    ],
    imgId: 'velmora-product-majestic-flora-nectar',
    titleId: 'product-title-majestic-flora-nectar',
    descId: 'product-desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 210,
    tags: ['bestseller'],
    description:
      'Chunky dome huggies with a mirror-polished finish. Substantial enough to wear solo, understated enough to stack. The everyday gold staple.',
    materialsCare:
      '18k gold-plated stainless steel. Water-resistant and tarnish-resistant. Hypoallergenic posts. Store flat to maintain shape.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    imgId: 'velmora-product-golden-sphere-huggies',
    titleId: 'product-title-golden-sphere-huggies',
    descId: 'product-desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.6,
    reviewCount: 76,
    tags: ['bestseller'],
    description:
      'Textured filigree drops inspired by vintage lace and sun-warmed amber. Light enough for all-day wear, detailed enough to draw every glance.',
    materialsCare:
      '18k gold-plated brass with a brushed filigree texture. Nickel-free. Avoid moisture and store in a dry pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    imgId: 'velmora-product-amber-lace-earrings',
    titleId: 'product-title-amber-lace-earrings',
    descId: 'product-desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 42,
    tags: ['bestseller', 'gift'],
    description:
      'A gift-boxed pairing of pendant necklace and stud earrings, finished in warm gold. Thoughtfully packaged and ready to become someone\'s favorite present.',
    materialsCare:
      '18k gold-plated brass necklace and matching studs. Includes a Velmora gift box and polishing cloth. Keep dry and away from direct sunlight when stored.',
    shippingReturns:
      'Free worldwide shipping. Delivered in 3–7 business days. Complimentary gift packaging. 30-day hassle-free returns and exchanges.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    imgId: 'velmora-product-royal-heirloom-set',
    titleId: 'product-title-royal-heirloom-set',
    descId: 'product-desc-royal-heirloom-set',
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'velmora-category-earrings',
    titleId: 'category-title-earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'velmora-category-necklaces',
    titleId: 'category-title-necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'velmora-category-huggies',
    titleId: 'category-title-huggies',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Claire M.',
    text: 'The quality is remarkable for the price. My huggies have become the only earrings I reach for.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sophia L.',
    text: 'Bought the Heirloom Set as a gift and ended up ordering one for myself. The packaging felt like a boutique unboxing.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Amara K.',
    text: 'Quiet luxury, exactly as described. Shipping was fast and the pieces are even prettier in person.',
    rating: 5,
  },
]

export const ugcPosts = [
  {
    id: 'ugc-1',
    caption: 'Soft gold for Sunday morning',
    imgId: 'velmora-ugc-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Layered necklaces, linen, light',
    imgId: 'velmora-ugc-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Huggies that go everywhere',
    imgId: 'velmora-ugc-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gilded details',
    imgId: 'velmora-ugc-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'A little extra shine',
    imgId: 'velmora-ugc-5',
    captionId: 'ugc-caption-5',
  },
]

export function formatPrice(value) {
  return `$${value.toFixed(2)}`
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}
