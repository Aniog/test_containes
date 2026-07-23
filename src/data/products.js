export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff dotted with a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and daylight with equal ease.',
    materials:
      '18K gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and water to preserve the gold finish.',
    images: ['hero-title', 'product-vivid-aura-title'],
    hoverImage: 'product-vivid-aura-title',
    tone: ['gold'],
    bestseller: true,
    new: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate garden of multicolor crystal blossoms strung on a fine gold chain. Feminine, joyful, and made for layering with your favorite everyday pendant.',
    materials:
      '18K gold-plated brass chain, hand-set enamel and crystal petals. Length: 16–18 in adjustable.',
    care: 'Wipe gently with a soft cloth after wear. Keep away from moisture and direct sunlight.',
    images: ['section-subtitle', 'product-flora-title'],
    hoverImage: 'product-flora-title',
    tone: ['gold'],
    bestseller: true,
    new: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviewCount: 215,
    description:
      'Chunky dome huggies with a polished mirror finish. Lightweight enough for all-day wear, bold enough to become your signature pair.',
    materials:
      '18K gold-plated brass, hypoallergenic stainless-steel posts. Diameter: 12mm.',
    care: 'Remove before showering or sleeping. Store flat to maintain shape.',
    images: ['category-huggies-title', 'product-huggies-title'],
    hoverImage: 'product-huggies-title',
    tone: ['gold', 'silver'],
    bestseller: true,
    new: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 76,
    description:
      'Textured filigree drops inspired by antique lace. The warm gold surface catches the light in soft, shifting patterns — refined movement for evening or day.',
    materials:
      '18K gold-plated brass, surgical steel posts. Drop length: 28mm.',
    care: 'Avoid bending. Clean with a dry microfiber cloth and store hanging.',
    images: ['category-earrings-title', 'product-amber-title'],
    hoverImage: 'product-amber-title',
    tone: ['gold'],
    bestseller: true,
    new: false,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviewCount: 52,
    description:
      'A ready-to-gift pairing of sculpted earrings and a matching pendant necklace, presented in a soft-touch Velmora box. Our most-loved present.',
    materials:
      '18K gold-plated brass, cubic zirconia details. Necklace 16–18 in; earrings 10mm stud.',
    care: 'Store in the provided gift box. Polish gently with a soft cloth.',
    images: ['category-necklaces-title', 'product-heirloom-title'],
    hoverImage: 'product-heirloom-title',
    tone: ['gold', 'silver'],
    bestseller: true,
    new: false,
  },
];

export const CATEGORIES = [
  {
    id: 'earrings',
    name: 'Earrings',
    imageQuery: 'category-earrings-title',
    titleId: 'category-earrings-title',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imageQuery: 'category-necklaces-title',
    titleId: 'category-necklaces-title',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imageQuery: 'category-huggies-title',
    titleId: 'category-huggies-title',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The packaging alone made me gasp. The huggies are my everyday staple now — comfortable, weighty, and they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'I bought the Royal Heirloom Set as a birthday gift and ended up ordering one for myself. Quiet luxury without the crazy price tag.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Maya T.',
    text: 'Finally, demi-fine jewelry that feels special. The ear cuff gets compliments every time I wear it. Fast shipping too.',
    rating: 5,
  },
];

export const UGC_ITEMS = [
  {
    id: 'ugc-1',
    caption: 'Soft gold for everyday',
    titleId: 'ugc-1-title',
  },
  {
    id: 'ugc-2',
    caption: 'Layered and loved',
    titleId: 'ugc-2-title',
  },
  {
    id: 'ugc-3',
    caption: 'Gift-ready moments',
    titleId: 'ugc-3-title',
  },
  {
    id: 'ugc-4',
    caption: 'A little sparkle',
    titleId: 'ugc-4-title',
  },
  {
    id: 'ugc-5',
    caption: 'Ear stack essentials',
    titleId: 'ugc-5-title',
  },
  {
    id: 'ugc-6',
    caption: 'Warm neutrals',
    titleId: 'ugc-6-title',
  },
];
