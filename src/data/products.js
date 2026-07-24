// Seed product catalog for Velmora Fine Jewelry.
// Image queries are intentionally descriptive and reference
// each product's own title / description / category text via
// stable id-based references so the strk image system can
// resolve them at runtime.

export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
];

export const MATERIALS = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'rose-gold', label: 'Rose Gold' },
];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    title: 'Vivid Aura Jewels',
    shortTitle: 'Vivid Aura',
    category: 'earrings',
    material: '18k-gold-plated',
    price: 42,
    tone: 'gold',
    rating: 4.8,
    reviewCount: 142,
    description:
      'A delicate gold ear cuff that catches the light at every angle, finished with a single crystal accent for a hint of quiet sparkle. Designed to be worn solo or stacked with your everyday studs.',
    materials:
      '18K gold plated over a hypoallergenic brass core. Nickel-free and lead-free. Set with a handset Austrian crystal.',
    care:
      'Remove before showering, swimming, or applying lotions. Store in the suede pouch provided. Polish gently with a soft, dry cloth.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in their original packaging.',
    images: [
      {
        imgId: 'vivid-aura-1-7f2a9c',
        titleId: 'vivid-aura-title',
        descId: 'vivid-aura-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'vivid-aura-2-3b1d8e',
        titleId: 'vivid-aura-title',
        descId: 'vivid-aura-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'vivid-aura-3-9c4a2f',
        titleId: 'vivid-aura-title',
        descId: 'vivid-aura-desc',
        ratio: '4x5',
        width: '900',
      },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    title: 'Majestic Flora Nectar',
    shortTitle: 'Majestic Flora',
    category: 'necklaces',
    material: '18k-gold-plated',
    price: 68,
    tone: 'gold',
    rating: 4.9,
    reviewCount: 218,
    description:
      'A pendant of soft, sculptural florals set with multicolour crystals in champagne, blush, and citrine. A modern heirloom, finished by hand on a fine cable chain.',
    materials:
      '18K gold plated brass chain and pendant. Hand-set crystals in champagne, blush, and citrine. Hypoallergenic and tarnish-resistant.',
    care:
      'Avoid contact with perfume and water. Wipe with the included polishing cloth and store flat in the suede pouch.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in their original packaging.',
    images: [
      {
        imgId: 'majestic-flora-1-4a8c12',
        titleId: 'majestic-flora-title',
        descId: 'majestic-flora-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'majestic-flora-2-7e2f1d',
        titleId: 'majestic-flora-title',
        descId: 'majestic-flora-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'majestic-flora-3-2b9c34',
        titleId: 'majestic-flora-title',
        descId: 'majestic-flora-desc',
        ratio: '4x5',
        width: '900',
      },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    title: 'Golden Sphere Huggies',
    shortTitle: 'Golden Sphere',
    category: 'huggies',
    material: '18k-gold-plated',
    price: 38,
    tone: 'gold',
    rating: 4.7,
    reviewCount: 96,
    description:
      'A chunky, dome-shaped huggie with a soft, polished finish. Substantial in the hand, featherlight on the ear — the everyday gold hoop, refined.',
    materials:
      '18K gold plated over a hypoallergenic brass core. Hinged snap-bar closure for a secure, comfortable fit.',
    care:
      'Remove before showering or sleeping. Store dry in the suede pouch. Polish with a soft cloth as needed.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in their original packaging.',
    images: [
      {
        imgId: 'golden-sphere-1-8d3e6a',
        titleId: 'golden-sphere-title',
        descId: 'golden-sphere-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'golden-sphere-2-1c5b7f',
        titleId: 'golden-sphere-title',
        descId: 'golden-sphere-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'golden-sphere-3-6a2d4c',
        titleId: 'golden-sphere-title',
        descId: 'golden-sphere-desc',
        ratio: '4x5',
        width: '900',
      },
    ],
  },
  {
    id: 'amber-lace-earrings',
    title: 'Amber Lace Earrings',
    shortTitle: 'Amber Lace',
    category: 'earrings',
    material: '18k-gold-plated',
    price: 54,
    tone: 'gold',
    rating: 4.8,
    reviewCount: 173,
    description:
      'Textured gold filigree in a soft, lace-like silhouette. Light enough for day, expressive enough for evening — the drop earring you will reach for again and again.',
    materials:
      '18K gold plated brass. Hypoallergenic post and back. Hand-finished filigree detail.',
    care:
      'Remove before showering or applying beauty products. Store in the suede pouch to prevent tangling.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in their original packaging.',
    images: [
      {
        imgId: 'amber-lace-1-5f9a3b',
        titleId: 'amber-lace-title',
        descId: 'amber-lace-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'amber-lace-2-8c1e7d',
        titleId: 'amber-lace-title',
        descId: 'amber-lace-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'amber-lace-3-2d4b9e',
        titleId: 'amber-lace-title',
        descId: 'amber-lace-desc',
        ratio: '4x5',
        width: '900',
      },
    ],
  },
  {
    id: 'royal-heirloom-set',
    title: 'Royal Heirloom Set',
    shortTitle: 'Royal Heirloom',
    category: 'sets',
    material: '18k-gold-plated',
    price: 95,
    tone: 'gold',
    rating: 5.0,
    reviewCount: 64,
    description:
      'A matching earring and necklace pair presented in our signature keepsake box. A modern heirloom, made to be given — and to be kept.',
    materials:
      '18K gold plated brass throughout. Hypoallergenic posts. Presented in a magnetic-close gift box with suede lining.',
    care:
      'Remove before showering, sleeping, or applying beauty products. Store in the keepsake box between wears.',
    shipping:
      'Free worldwide shipping on orders over $75. 30-day returns on unworn pieces in their original packaging.',
    images: [
      {
        imgId: 'royal-heirloom-1-3a7f2c',
        titleId: 'royal-heirloom-title',
        descId: 'royal-heirloom-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'royal-heirloom-2-9d1c5e',
        titleId: 'royal-heirloom-title',
        descId: 'royal-heirloom-desc',
        ratio: '4x5',
        width: '900',
      },
      {
        imgId: 'royal-heirloom-3-6b8a3d',
        titleId: 'royal-heirloom-title',
        descId: 'royal-heirloom-desc',
        ratio: '4x5',
        width: '900',
      },
    ],
  },
];

export function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function relatedProducts(productId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== productId).slice(0, limit);
}
