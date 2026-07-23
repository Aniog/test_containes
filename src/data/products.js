export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', label: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', label: 'Huggies', slug: 'huggies' },
];

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    tones: ['gold', 'silver'],
    description:
      'A sculptural gold ear cuff with a single crystal accent. Designed to sit comfortably along the ear without a piercing, it catches candlelight and sunlight alike.',
    details:
      'Brass base with 18k gold plating. Hand-set cubic zirconia crystal. Nickel-free and hypoallergenic. Measures 12mm x 10mm.',
    care:
      'Store in a dry pouch and avoid contact with perfume, lotion, and water. Gently polish with a soft cloth to maintain shine.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns for unworn pieces in original packaging.',
    imageIds: {
      primary: 'velmora-vivid-aura-primary',
      hover: 'velmora-vivid-aura-hover',
      gallery: ['velmora-vivid-aura-primary', 'velmora-vivid-aura-hover', 'velmora-vivid-aura-gallery-3'],
    },
    titleId: 'product-title-vivid-aura-jewels',
    descId: 'product-desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    tones: ['gold'],
    description:
      'A delicate collar necklace blooming with multicolor floral crystals. The perfect statement for summer evenings and sunlit brunches.',
    details:
      'Brass base with 18k gold plating. Enamel and crystal floral motifs. Adjustable 16–18 inch chain. Lobster clasp closure.',
    care:
      'Keep away from moisture and harsh chemicals. Lay flat to store and avoid tangling.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns for unworn pieces.',
    imageIds: {
      primary: 'velmora-majestic-flora-primary',
      hover: 'velmora-majestic-flora-hover',
      gallery: ['velmora-majestic-flora-primary', 'velmora-majestic-flora-hover', 'velmora-majestic-flora-gallery-3'],
    },
    titleId: 'product-title-majestic-flora-nectar',
    descId: 'product-desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 156,
    tones: ['gold', 'silver'],
    description:
      'Chunky dome huggies that hug the lobe with a polished, liquid-gold finish. Minimal enough for everyday, bold enough for night.',
    details:
      'Brass base with 18k gold plating. Hinge closure. Diameter 14mm. Weight 6g per pair.',
    care:
      'Wipe clean after wear. Store in the provided pouch to prevent scratches.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns for unworn pieces.',
    imageIds: {
      primary: 'velmora-golden-sphere-primary',
      hover: 'velmora-golden-sphere-hover',
      gallery: ['velmora-golden-sphere-primary', 'velmora-golden-sphere-hover', 'velmora-golden-sphere-gallery-3'],
    },
    titleId: 'product-title-golden-sphere-huggies',
    descId: 'product-desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 72,
    tones: ['gold'],
    description:
      'Textured filigree drops inspired by vintage lace. Lightweight and luminous, they bring old-world romance to a modern silhouette.',
    details:
      'Brass base with 18k gold plating. Intricate filigree detailing. Hook closure. Length 45mm.',
    care:
      'Avoid bending the delicate filigree. Store flat and clean gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns for unworn pieces.',
    imageIds: {
      primary: 'velmora-amber-lace-primary',
      hover: 'velmora-amber-lace-hover',
      gallery: ['velmora-amber-lace-primary', 'velmora-amber-lace-hover', 'velmora-amber-lace-gallery-3'],
    },
    titleId: 'product-title-amber-lace-earrings',
    descId: 'product-desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 43,
    tones: ['gold'],
    description:
      'A gift-boxed pairing of matching earrings and necklace. Elegantly packaged and ready to become her next keepsake.',
    details:
      'Brass base with 18k gold plating. Matching pendant necklace and stud earrings. Necklace 18 inches with 2-inch extender.',
    care:
      'Store pieces separately in the velvet-lined gift box to avoid tangling and scratches.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns for unworn pieces.',
    imageIds: {
      primary: 'velmora-royal-heirloom-primary',
      hover: 'velmora-royal-heirloom-hover',
      gallery: ['velmora-royal-heirloom-primary', 'velmora-royal-heirloom-hover', 'velmora-royal-heirloom-gallery-3'],
    },
    titleId: 'product-title-royal-heirloom-set',
    descId: 'product-desc-royal-heirloom-set',
  },
  // Additional shop-only pieces for the collection grid and related products
  {
    id: 'celestial-pearl-hoops',
    name: 'Celestial Pearl Hoops',
    slug: 'celestial-pearl-hoops',
    price: 58,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 98,
    tones: ['gold'],
    description:
      'Sleek gold hoops accented with a single freshwater pearl. Understated glamour for day or night.',
    details:
      'Brass base with 18k gold plating. Freshwater pearl detail. Hinge closure. Diameter 18mm.',
    care:
      'Avoid contact with acids and perfumes. Wipe pearls gently with a dry cloth.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns.',
    imageIds: {
      primary: 'velmora-celestial-pearl-primary',
      hover: 'velmora-celestial-pearl-hover',
      gallery: ['velmora-celestial-pearl-primary', 'velmora-celestial-pearl-hover'],
    },
    titleId: 'product-title-celestial-pearl-hoops',
    descId: 'product-desc-celestial-pearl-hoops',
  },
  {
    id: 'serpentine-chain-necklace',
    name: 'Serpentine Chain Necklace',
    slug: 'serpentine-chain-necklace',
    price: 49,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 67,
    tones: ['gold', 'silver'],
    description:
      'A liquid-like serpentine chain that sits beautifully alone or layered. The essential foundation piece.',
    details:
      'Brass base with 18k gold plating. Length 18 inches with extender. Lobster clasp.',
    care:
      'Store flat to prevent kinks. Clean with a soft cloth.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns.',
    imageIds: {
      primary: 'velmora-serpentine-chain-primary',
      hover: 'velmora-serpentine-chain-hover',
      gallery: ['velmora-serpentine-chain-primary', 'velmora-serpentine-chain-hover'],
    },
    titleId: 'product-title-serpentine-chain-necklace',
    descId: 'product-desc-serpentine-chain-necklace',
  },
  {
    id: 'opal-garden-studs',
    name: 'Opal Garden Studs',
    slug: 'opal-garden-studs',
    price: 36,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 112,
    tones: ['gold'],
    description:
      'Petite floral studs with a glowing opal center. Feminine, wearable, and endlessly charming.',
    details:
      'Brass base with 18k gold plating. Synthetic opal center. Butterfly backing. 8mm diameter.',
    care:
      'Keep dry and store in pouch. Avoid dropping to protect the opal setting.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. 30-day returns.',
    imageIds: {
      primary: 'velmora-opal-garden-primary',
      hover: 'velmora-opal-garden-hover',
      gallery: ['velmora-opal-garden-primary', 'velmora-opal-garden-hover'],
    },
    titleId: 'product-title-opal-garden-studs',
    descId: 'product-desc-opal-garden-studs',
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function formatPrice(price) {
  return `$${price}`;
}
