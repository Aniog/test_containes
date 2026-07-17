export const CATEGORIES = {
  EARRINGS: 'Earrings',
  NECKLACES: 'Necklaces',
  HUGGIES: 'Huggies',
  SETS: 'Sets',
};

export const MATERIALS = {
  GOLD_PLATED: '18K Gold Plated',
  STERLING_SILVER: 'Sterling Silver',
};

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: CATEGORIES.EARRINGS,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff with a single luminous crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and daylight alike.',
    materialsCare:
      '18K gold-plated brass with a cubic zirconia accent. Nickel-free and hypoallergenic. Avoid contact with perfumes, lotions, and water to preserve the finish. Store in the included pouch.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: CATEGORIES.NECKLACES,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.9,
    reviews: 89,
    description:
      'A delicate pendant necklace featuring hand-set multicolor floral crystals on a fine gold chain. An easy statement piece that layers beautifully or stands alone.',
    materialsCare:
      '18K gold-plated sterling silver chain with enamel and crystal pendant. Tarnish-resistant. Clean gently with a soft cloth; do not use chemical jewelry cleaners.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: CATEGORIES.HUGGIES,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.7,
    reviews: 210,
    description:
      'Chunky dome huggies with a polished mirror finish. Substantial enough to wear solo, compact enough for everyday. Hinged for a secure, comfortable fit.',
    materialsCare:
      '18K gold-plated brass with surgical steel posts. Hypoallergenic and water-resistant for occasional wear. Store flat to maintain shape.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: CATEGORIES.EARRINGS,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.9,
    reviews: 76,
    description:
      'Textured gold filigree drops inspired by vintage lacework. Lightweight and full of movement, they bring warmth to every angle.',
    materialsCare:
      '18K gold-plated brass with a textured hand-cast finish. Avoid moisture and abrasive surfaces. Wipe after each wear.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
    tags: ['bestseller'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: CATEGORIES.SETS,
    material: MATERIALS.GOLD_PLATED,
    rating: 5.0,
    reviews: 52,
    description:
      'A curated gift set of matching stud earrings and a delicate pendant necklace, presented in a Velmora keepsake box. The ultimate ready-to-give treasure.',
    materialsCare:
      '18K gold-plated brass and surgical steel posts. Includes anti-tarnish pouch and gift box. Handle with care to preserve plating.',
    shippingReturns:
      'Free worldwide shipping. Delivered in 3–7 business days. Gift wrapping included. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80',
    tags: ['bestseller', 'gift'],
  },
  {
    id: 'luna-pearl-huggies',
    name: 'Luna Pearl Huggies',
    price: 46,
    category: CATEGORIES.HUGGIES,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.8,
    reviews: 94,
    description:
      'Petite huggies with a freshwater pearl drop. A quiet luxury staple that transitions effortlessly from morning coffee to evening plans.',
    materialsCare:
      '18K gold-plated brass with freshwater pearl accents. Pearls are sensitive to chemicals and moisture; wipe gently and store separately.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    tags: [],
  },
  {
    id: 'solar-chain-necklace',
    name: 'Solar Chain Necklace',
    price: 58,
    category: CATEGORIES.NECKLACES,
    material: MATERIALS.GOLD_PLATED,
    rating: 4.6,
    reviews: 61,
    description:
      'A bold yet refined chain necklace with interlocking oval links. Designed to be worn alone or layered with finer chains.',
    materialsCare:
      '18K gold-plated brass with a polished clasp. Avoid prolonged water exposure. Store flat or hung to prevent tangling.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
    tags: [],
  },
  {
    id: 'midnight-velvet-earrings',
    name: 'Midnight Velvet Earrings',
    price: 49,
    category: CATEGORIES.EARRINGS,
    material: MATERIALS.STERLING_SILVER,
    rating: 4.7,
    reviews: 38,
    description:
      'Darkened sterling silver drops with a soft brushed texture. For the woman who prefers her gold with a little edge.',
    materialsCare:
      'Oxidized sterling silver. The intentional dark patina will evolve with wear. Polish lightly with a soft cloth to restore highlights.',
    shippingReturns:
      'Free worldwide shipping on orders over $50. Delivered in 3–7 business days. 30-day returns on unworn pieces in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
    ],
    hoverImage:
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80',
    tags: [],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getBestsellers = () =>
  products.filter((p) => p.tags.includes('bestseller'));

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
