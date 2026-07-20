export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

export const materials = [
  { id: 'gold-plated', label: '18K Gold Plated' },
  { id: 'silver-plated', label: 'Silver Plated' },
  { id: 'crystal', label: 'Crystal Accent' },
];

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviewCount: 124,
    tags: ['bestseller', 'new'],
    variants: ['Gold', 'Silver'],
    description:
      'A sculptural gold ear cuff finished with a single radiant crystal accent. Designed to catch candlelight and compliments alike — no piercing required.',
    materialsCare:
      '18K gold-plated brass with a genuine crystal accent. Nickel-free and hypoallergenic. Avoid contact with perfume, lotions, and water to preserve the finish. Store in the provided pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day returns on unworn pieces in original packaging.',
    imageRatio: '4x3',
    imageWidth: '800',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 86,
    tags: ['bestseller'],
    variants: ['Gold', 'Silver'],
    description:
      'A delicate necklace featuring hand-set multicolor floral crystals on a fine gold chain. Romantic, wearable, and impossible to forget.',
    materialsCare:
      '18K gold-plated stainless steel chain with hand-set glass crystals. Water-resistant coating. Wipe clean with a soft cloth after wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day returns on unworn pieces in original packaging.',
    imageRatio: '3x4',
    imageWidth: '800',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviewCount: 203,
    tags: ['bestseller'],
    variants: ['Gold', 'Silver'],
    description:
      'Chunky dome huggies with a mirror-polished finish. Small enough for everyday, bold enough to make the moment feel special.',
    materialsCare:
      '18K gold-plated brass with a surgical steel post. Hypoallergenic and nickel-free. Store flat and away from moisture.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day returns on unworn pieces in original packaging.',
    imageRatio: '4x3',
    imageWidth: '800',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 71,
    tags: ['bestseller'],
    variants: ['Gold'],
    description:
      'Textured filigree drops inspired by vintage lace. Light as air, rich in detail — the pair you reach for when ordinary will not do.',
    materialsCare:
      '18K gold-plated brass with an embossed filigree texture. Nickel-free. Handle with care to protect the delicate surface.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 5–10 business days. 30-day returns on unworn pieces in original packaging.',
    imageRatio: '3x4',
    imageWidth: '800',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'crystal',
    rating: 5.0,
    reviewCount: 42,
    tags: ['bestseller', 'gift'],
    variants: ['Gold', 'Silver'],
    description:
      'A curated gift set pairing a pendant necklace with matching stud earrings, presented in a Velmora keepsake box. Ready to give — or keep.',
    materialsCare:
      '18K gold-plated brass and surgical steel posts with crystal accents. Includes a velvet-lined keepsake box and care card.',
    shippingReturns:
      'Free worldwide shipping. Delivered in 5–10 business days. 30-day returns on unworn pieces in original packaging. Gift wrapping included.',
    imageRatio: '1x1',
    imageWidth: '800',
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function formatPrice(price) {
  return `$${price}`;
}
