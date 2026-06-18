// Seed product catalog for Velmora Fine Jewelry
// Each product references stock images via the strk-img tag system at render time.

export const PRODUCTS = [
  {
    id: 'vivid-aura-ear-cuff',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    rating: 4.9,
    reviews: 312,
    category: 'earrings',
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    description:
      'A weightless ear cuff sculpted from polished demi-fine gold and finished with a single faceted crystal. Wear it solo for an editorial detail or stack alongside your favourite studs.',
    materials:
      'Hypoallergenic brass core, 18K gold plating, hand-set crystal accent. Nickel-free.',
    care:
      'Store in the included pouch. Wipe gently with a soft cloth. Avoid contact with perfume, lotion, and water.',
    shipping:
      'Free worldwide shipping over $60. Express options at checkout. 30-day easy returns.',
    images: [
      { id: 'vivid-aura-img-1', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-img-2', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    rating: 4.8,
    reviews: 218,
    category: 'necklaces',
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    description:
      'An heirloom-feeling pendant garlanded with hand-painted enamel petals and pavé crystals. The 18″ chain sits beautifully under a silk blouse or open collar.',
    materials:
      '18K gold plated brass, enamel petals, pavé crystal centre. Lobster clasp closure.',
    care:
      'Remove before bathing or sleeping. Polish with the included microfibre cloth.',
    shipping:
      'Free worldwide shipping over $60. Gift wrapping available. 30-day returns.',
    images: [
      { id: 'flora-nectar-img-1', ratio: '3x4', width: 800 },
      { id: 'flora-nectar-img-2', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    rating: 4.9,
    reviews: 487,
    category: 'huggies',
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    description:
      'Sculptural dome huggies with a smooth, mirror-bright finish. Substantial in weight, weightless on the ear — the everyday hoop, refined.',
    materials:
      '18K gold plated brass, hinged closure, hypoallergenic posts.',
    care:
      'Wipe with a soft cloth after wear. Keep dry and away from chemicals.',
    shipping:
      'Free worldwide shipping over $60. Express options at checkout. 30-day returns.',
    images: [
      { id: 'sphere-huggies-img-1', ratio: '3x4', width: 800 },
      { id: 'sphere-huggies-img-2', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    rating: 4.7,
    reviews: 164,
    category: 'earrings',
    material: '18K Gold Plated',
    variants: ['Gold'],
    bestseller: true,
    description:
      'Filigree drop earrings inspired by antique lace, hand-finished with a warm, brushed champagne gold. Light enough for daily wear, intricate enough for evenings out.',
    materials:
      '18K gold plated brass, butterfly back closure, nickel-free.',
    care:
      'Avoid pulling on the filigree. Store flat in the included pouch.',
    shipping:
      'Free worldwide shipping over $60. Gift wrapping available. 30-day returns.',
    images: [
      { id: 'amber-lace-img-1', ratio: '3x4', width: 800 },
      { id: 'amber-lace-img-2', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    rating: 5.0,
    reviews: 92,
    category: 'necklaces',
    material: '18K Gold Plated',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    description:
      'A considered pairing of our most-loved pendant and matching drops, presented in a signature linen-lined gift box. The thoughtful gesture, ready to give.',
    materials:
      'Two-piece set in 18K gold plated brass. Crystal accents. Linen gift box included.',
    care:
      'Store each piece in the lined compartments. Polish gently before wear.',
    shipping:
      'Free worldwide shipping. Complimentary gift wrap for sets. 30-day returns.',
    images: [
      { id: 'heirloom-set-img-1', ratio: '3x4', width: 800 },
      { id: 'heirloom-set-img-2', ratio: '3x4', width: 800 },
    ],
  },
];

export const CATEGORIES = [
  {
    id: 'earrings',
    label: 'Earrings',
    blurb: 'Studs, drops, and editorial statement pairs.',
    imgId: 'category-earrings-tile',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    blurb: 'Pendants, layering chains and heirloom pieces.',
    imgId: 'category-necklaces-tile',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    blurb: 'Everyday hoops in modern, refined silhouettes.',
    imgId: 'category-huggies-tile',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Eloise R.',
    text:
      'The huggies feel substantial without weighing my ears down. I wear them every single day and have had so many compliments.',
  },
  {
    id: 't2',
    name: 'Marisa K.',
    text:
      'I bought the heirloom set as a gift for my sister and ended up ordering one for myself. The packaging alone felt special.',
  },
  {
    id: 't3',
    name: 'Sasha L.',
    text:
      'Genuinely the most flattering gold tone I have found at this price. It looks like jewelry I would have inherited.',
  },
];

export const REELS = [
  { id: 'reel-1', caption: 'Layering, slow Sunday', imgId: 'reel-layering-sunday' },
  { id: 'reel-2', caption: 'Dinner light on gold', imgId: 'reel-dinner-light' },
  { id: 'reel-3', caption: 'Studio close-up', imgId: 'reel-studio-closeup' },
  { id: 'reel-4', caption: 'Linen + champagne', imgId: 'reel-linen-champagne' },
  { id: 'reel-5', caption: 'On the neckline', imgId: 'reel-neckline' },
  { id: 'reel-6', caption: 'Morning ritual', imgId: 'reel-morning-ritual' },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
export const getRelated = (id, limit = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, limit);
