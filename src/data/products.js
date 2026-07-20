export const categories = ['earrings', 'necklaces', 'huggies', 'sets'];

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff finished with a single luminous crystal accent. Designed to sit comfortably along the ear without a piercing, it catches candlelight beautifully from every angle.',
    materials:
      'Brass base with 18k gold plating. Features a single AAA cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfumes, lotions, and water to preserve the gold finish. Wipe gently with a soft cloth after wear.',
    shipping:
      'Free worldwide shipping on all orders. Orders ship within 1–2 business days. 30-day hassle-free returns.',
    variants: ['gold', 'silver'],
    images: 2,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate collar necklace adorned with multicolor floral crystal blossoms. The playful palette is balanced by a warm gold chain, making it the perfect statement for sunlit afternoons.',
    materials:
      '18k gold-plated brass chain with hand-set enamel and crystal floral charms. Adjustable 16–18 inch length.',
    care: 'Lay flat when not in use. Avoid exposure to water, sweat, and harsh chemicals. Clean with a soft, dry cloth.',
    shipping:
      'Complimentary global shipping. Dispatched within 1–2 business days. Easy 30-day returns.',
    variants: ['gold'],
    images: 2,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 211,
    description:
      'Chunky dome huggie earrings with a polished, molten-gold finish. Small but sculptural, they hug the lobe for an effortless everyday luxury look.',
    materials:
      'Solid-feel brass with thick 18k gold plating. Hinged clasp closure. Lightweight and comfortable for all-day wear.',
    care: 'Keep away from moisture and beauty products. Store in the included Velmora pouch.',
    shipping:
      'Free worldwide shipping. Ships in 1–2 business days. 30-day returns.',
    variants: ['gold', 'silver'],
    images: 2,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 76,
    description:
      'Textured gold filigree drops inspired by vintage lace. These earrings sway gently with movement, adding warmth and old-world romance to any outfit.',
    materials:
      'Intricate gold-plated brass filigree with a brushed and high-polish mix. Surgical-steel posts.',
    care: 'Handle with care to protect delicate detailing. Store flat and avoid water.',
    shipping:
      'Free global delivery. Ships within 1–2 business days. 30-day returns.',
    variants: ['gold'],
    images: 2,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 53,
    description:
      'A curated gift set featuring a pair of petite huggie earrings and a matching pendant necklace, presented in a Velmora gift box. Made for celebrations, or simply because.',
    materials:
      '18k gold-plated brass earrings and necklace with cubic zirconia accents. Necklace length 16–18 inches.',
    care: 'Store in the provided box or pouch. Keep dry and away from chemicals.',
    shipping:
      'Free worldwide shipping, gift-ready packaging. Ships in 1–2 business days. 30-day returns.',
    variants: ['gold'],
    images: 2,
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}
