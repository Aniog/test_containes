export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without a piercing, it catches candlelight beautifully and layers effortlessly with studs and huggies.',
    materialsCare:
      '18K gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. Avoid contact with perfume, lotion, and water. Store in the included pouch to preserve the finish.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns on unworn pieces in original packaging.',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
    imgId: 'product-vivid-aura-img',
    hoverImgId: 'product-vivid-aura-hover',
    images: ['product-vivid-aura-img', 'product-vivid-aura-hover'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate pendant necklace blooming with hand-set multicolor crystals. The floral motif nods to vintage botanical illustrations while feeling fresh enough for everyday wear.',
    materialsCare:
      '18K gold-plated chain with enamel and crystal details. Length 40cm + 5cm extender. Wipe gently with a soft cloth after wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns on unworn pieces in original packaging.',
    titleId: 'product-flora-title',
    descId: 'product-flora-desc',
    imgId: 'product-flora-img',
    hoverImgId: 'product-flora-hover',
    images: ['product-flora-img', 'product-flora-hover'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 156,
    description:
      'Chunky dome huggies with a polished, mirror-like finish. Substantial enough to elevate a white T-shirt, light enough to wear all day.',
    materialsCare:
      '18K gold-plated brass with a surgical steel post. Hypoallergenic and nickel-free. Diameter 12mm. Store flat to maintain shape.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns on unworn pieces in original packaging.',
    titleId: 'product-sphere-title',
    descId: 'product-sphere-desc',
    imgId: 'product-sphere-img',
    hoverImgId: 'product-sphere-hover',
    images: ['product-sphere-img', 'product-sphere-hover'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 72,
    description:
      'Textured filigree drops inspired by antique lace and sun-worn architecture. The warm gold surface shimmers with every movement, framing the face in soft light.',
    materialsCare:
      '18K gold-plated brass with a textured matte-polished finish. Surgical steel posts. Avoid moisture and store in a dry pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns on unworn pieces in original packaging.',
    titleId: 'product-amber-title',
    descId: 'product-amber-desc',
    imgId: 'product-amber-img',
    hoverImgId: 'product-amber-hover',
    images: ['product-amber-img', 'product-amber-hover'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'earrings',
    price: 95,
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 48,
    description:
      'A considered gift set pairing our signature huggies with a matching pendant necklace, presented in a Velmora gift box. Made for birthdays, anniversaries, or a quiet “just because.”',
    materialsCare:
      '18K gold-plated brass with surgical steel posts. Includes a soft polishing cloth and keepsake box.',
    shippingReturns:
      'Free worldwide shipping. Standard delivery 5–8 business days. 30-day returns on unworn pieces in original packaging. Gift wrap included.',
    titleId: 'product-heirloom-title',
    descId: 'product-heirloom-desc',
    imgId: 'product-heirloom-img',
    hoverImgId: 'product-heirloom-hover',
    images: ['product-heirloom-img', 'product-heirloom-hover'],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}

export const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
