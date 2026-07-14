export const products = [
  {
    id: 'vivid-aura-cuff',
    name: 'Vivid Aura Jewels',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description:
      'A luminous ear cuff that catches light with every turn. Designed with a faceted crystal accent set against polished 18K gold plating, this piece adds effortless edge without a piercing commitment.',
    details:
      '18K gold-plated sterling silver. Cubic zirconia crystal accent. No piercing required. Nickel-free, hypoallergenic. Weight: 1.2g',
    care: 'Store in a dry, soft pouch. Avoid contact with perfume, water, and harsh chemicals. Gently polish with a soft cloth.',
    rating: 4.8,
    reviewCount: 127,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
    ],
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description:
      'Inspired by a garden in full bloom, this delicate necklace features hand-set multicolor crystals in an intricate floral arrangement. A statement piece that remains refined and elegant.',
    details:
      '18K gold-plated brass chain. Hand-set multicolor cubic zirconia. Adjustable 40-45cm with lobster clasp. Hypoallergenic. Weight: 4.5g',
    care: 'Lay flat in a jewelry box to prevent tangling. Avoid water, perfume, and lotion. Wipe gently with a soft cloth after wear.',
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    ],
    badge: 'New',
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description:
      'Bold yet refined, these dome-shaped huggie earrings wrap the lobe in warm 18K gold. The chunky silhouette brings modern volume while staying comfortable enough for everyday wear.',
    details:
      '18K gold-plated sterling silver. Snap closure. Inner diameter: 10mm. Hypoallergenic, nickel-free. Weight: 3.8g per pair',
    care: 'Clean gently with a dry polishing cloth. Remove before swimming or showering. Store separately to prevent scratching.',
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=600&fit=crop',
    ],
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description:
      'Delicate filigree patterns echo antique lace, brought to life in warm 18K gold. These drop earrings swing gently with movement, framing the face with vintage-inspired elegance.',
    details:
      '18K gold-plated brass. Filigree drop length: 38mm. French hook closure. Lightweight design for all-day comfort. Weight: 2.4g per pair',
    care: 'Hang or lay flat when storing to preserve the delicate filigree shape. Avoid pulling or bending. Polish gently with a soft cloth.',
    rating: 4.6,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
    ],
    badge: null,
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    category: 'earrings',
    material: 'gold',
    description:
      'Our signature gift set pairs the Golden Sphere Huggies with a matching pendant necklace, presented in a linen-lined keepsake box. The perfect gift for someone special — or for yourself.',
    details:
      'Set includes: Golden Sphere Huggies (18K gold-plated sterling silver) + matching sphere pendant necklace (42cm, adjustable). Arrives in a branded Velmora gift box with tissue and ribbon.',
    care: 'Each piece should be stored individually. Follow care instructions for each item. Keep the gift box for elegant re-storage.',
    rating: 5.0,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    ],
    badge: 'Gift Set',
    inStock: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
];

export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality for the price. I wear my Golden Sphere Huggies every single day and they still look brand new. Obsessed!',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set for my sister\'s birthday and she literally cried. The packaging is gorgeous and the jewelry is even more beautiful in person.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    text: 'I\'ve been searching for affordable demi-fine jewelry that doesn\'t tarnish. Velmora is IT. The Majestic Flora necklace gets me compliments everywhere I go.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
    caption: 'Golden hour, golden huggies',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
    caption: 'Everyday elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop',
    caption: 'Layered & loved',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=400&h=700&fit=crop',
    caption: 'Gift giving, perfected',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop',
    caption: 'Quiet luxury',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=700&fit=crop',
    caption: 'Made to treasure',
  },
];
