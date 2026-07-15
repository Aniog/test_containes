export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

export const materials = [
  { id: 'gold-plated', label: '18K Gold Plated' },
  { id: 'silver-plated', label: 'Silver Plated' },
  { id: 'hypoallergenic', label: 'Hypoallergenic' },
];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: slugify('Vivid Aura Jewels'),
    price: 42,
    category: 'earrings',
    material: ['gold-plated', 'hypoallergenic'],
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff with a single crystal accent. Designed to catch the light without the need for a piercing.',
    materialsCare:
      '18K gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. Avoid contact with perfume, lotion, and water to preserve the finish. Store in the provided pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Returns accepted within 30 days of delivery in original condition.',
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: slugify('Majestic Flora Nectar'),
    price: 68,
    category: 'necklaces',
    material: ['gold-plated', 'hypoallergenic'],
    rating: 4.9,
    reviewCount: 86,
    description:
      'A delicate pendant necklace blooming with multicolor floral crystals. The perfect statement for sunlit afternoons and candlelit evenings.',
    materialsCare:
      '18K gold-plated chain with hand-set enamel and crystal petals. Length: 40cm + 5cm extender. Keep dry and store flat.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Returns accepted within 30 days of delivery in original condition.',
    variants: ['gold'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: slugify('Golden Sphere Huggies'),
    price: 38,
    category: 'huggies',
    material: ['gold-plated', 'hypoallergenic'],
    rating: 4.7,
    reviewCount: 210,
    description:
      'Chunky dome huggies that hug the lobe with a polished, liquid-gold finish. Everyday luxury, redefined.',
    materialsCare:
      '18K gold-plated brass with stainless steel posts. Lightweight and comfortable for all-day wear. Wipe clean with a soft cloth.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Returns accepted within 30 days of delivery in original condition.',
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: slugify('Amber Lace Earrings'),
    price: 54,
    category: 'earrings',
    material: ['gold-plated'],
    rating: 4.9,
    reviewCount: 62,
    description:
      'Textured filigree drops inspired by vintage lace. An elegant sway that feels both heirloom and utterly modern.',
    materialsCare:
      'Intricate gold-plated filigree with a brushed satin interior. Handle gently to protect the openwork detail.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Returns accepted within 30 days of delivery in original condition.',
    variants: ['gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: slugify('Royal Heirloom Set'),
    price: 95,
    category: 'sets',
    material: ['gold-plated', 'hypoallergenic'],
    rating: 5.0,
    reviewCount: 47,
    description:
      'A curated gift set pairing a pendant necklace with coordinating earrings, presented in a signature Velmora box.',
    materialsCare:
      'Matching 18K gold-plated necklace and earrings with velvet-pouch storage. Gift box included.',
    shippingReturns:
      'Free worldwide shipping. Complimentary gift wrapping and handwritten note available at checkout. Returns accepted within 30 days.',
    variants: ['gold'],
    bestseller: true,
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}

export function formatPrice(price) {
  return `$${price}`;
}
