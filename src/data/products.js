// Seed product data for Velmora Fine Jewelry
// Images are populated at runtime via the strk image system (data-strk-img).
// Each product has stable imgId / titleId / descId for image query interpolation.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'Ear Cuff',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 126,
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless statement, no piercing required.',
    description:
      'The Vivid Aura ear cuff is designed to curve along the cartilage with a comfortable, secure fit. Hand-finished in 18K gold plating over brass, it features a hand-set crystal that catches the light with every turn. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel and lead free. Crystal accent. To care, avoid contact with water, perfume and cosmetics. Store in the provided pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund — no questions asked.',
    bestseller: true,
    imgId: 'p-vivid-aura-7f2a',
    imgIdAlt: 'p-vivid-aura-alt-7f2a',
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
    gallery: [
      { imgId: 'p-vivid-aura-g1-7f2a', ratio: '4x5' },
      { imgId: 'p-vivid-aura-g2-7f2a', ratio: '4x5' },
      { imgId: 'p-vivid-aura-g3-7f2a', ratio: '4x5' },
      { imgId: 'p-vivid-aura-g4-7f2a', ratio: '4x5' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'Pendant Necklace',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.9,
    reviews: 203,
    shortDesc:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a garden in miniature.',
    description:
      'Majestic Flora Nectar brings a blooming garden to the collarbone. Each petal is set with a coloured crystal, arranged into a floral cluster that refracts light into soft prisms. The adjustable 40–45cm chain lets you layer it with other Velmora necklaces.',
    materials:
      '18K gold plating over brass. Multicolor crystal accents. Adjustable chain 40–45cm with extender. Hypoallergenic, nickel and lead free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    bestseller: true,
    imgId: 'p-majestic-flora-3b9c',
    imgIdAlt: 'p-majestic-flora-alt-3b9c',
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
    gallery: [
      { imgId: 'p-majestic-flora-g1-3b9c', ratio: '4x5' },
      { imgId: 'p-majestic-flora-g2-3b9c', ratio: '4x5' },
      { imgId: 'p-majestic-flora-g3-3b9c', ratio: '4x5' },
      { imgId: 'p-majestic-flora-g4-3b9c', ratio: '4x5' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'Huggie Earrings',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 318,
    shortDesc:
      'Chunky gold dome huggies with a smooth, polished finish — everyday luxury that hugs the lobe.',
    description:
      'Golden Sphere Huggies are the everyday staple you will reach for first. The chunky dome silhouette is polished to a warm mirror finish, sitting snug against the lobe. A secure hinged hoop keeps them comfortable from morning to night.',
    materials:
      '18K gold plating over brass. Polished dome. Hinged hoop closure. Hypoallergenic, nickel and lead free. Pair: 12mm diameter.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    bestseller: true,
    imgId: 'p-golden-sphere-1d6e',
    imgIdAlt: 'p-golden-sphere-alt-1d6e',
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
    gallery: [
      { imgId: 'p-golden-sphere-g1-1d6e', ratio: '4x5' },
      { imgId: 'p-golden-sphere-g2-1d6e', ratio: '4x5' },
      { imgId: 'p-golden-sphere-g3-1d6e', ratio: '4x5' },
      { imgId: 'p-golden-sphere-g4-1d6e', ratio: '4x5' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'Drop Earrings',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 91,
    shortDesc:
      'Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern weight.',
    description:
      'Amber Lace reimagines traditional filigree as a featherweight drop earring. The openwork gold pattern is textured by hand, catching warm light from every angle. Lightweight enough for all-day wear, elegant enough for the evening.',
    materials:
      '18K gold plating over brass. Hand-textured filigree. Lever-back closure. Hypoallergenic, nickel and lead free. Drop length: 38mm.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund.',
    bestseller: true,
    imgId: 'p-amber-lace-9c4f',
    imgIdAlt: 'p-amber-lace-alt-9c4f',
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
    gallery: [
      { imgId: 'p-amber-lace-g1-9c4f', ratio: '4x5' },
      { imgId: 'p-amber-lace-g2-9c4f', ratio: '4x5' },
      { imgId: 'p-amber-lace-g3-9c4f', ratio: '4x5' },
      { imgId: 'p-amber-lace-g4-9c4f', ratio: '4x5' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    type: 'Earring + Necklace Set',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 5.0,
    reviews: 64,
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated elegance, ready to give.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Designed to be worn together or apart, it is the effortless answer to gifting — for someone loved, or for yourself.',
    materials:
      '18K gold plating over brass. Crystal accents. Necklace 42cm with extender. Earrings lever-back. Hypoallergenic, nickel and lead free. Gift box included.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns for a full refund. Gift wrapping available at checkout.',
    bestseller: true,
    imgId: 'p-royal-heirloom-5a8b',
    imgIdAlt: 'p-royal-heirloom-alt-5a8b',
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
    gallery: [
      { imgId: 'p-royal-heirloom-g1-5a8b', ratio: '4x5' },
      { imgId: 'p-royal-heirloom-g2-5a8b', ratio: '4x5' },
      { imgId: 'p-royal-heirloom-g3-5a8b', ratio: '4x5' },
      { imgId: 'p-royal-heirloom-g4-5a8b', ratio: '4x5' },
    ],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Statement cuffs, drops and everyday studs.',
    imgId: 'cat-earrings-2e7d',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Pendants, chains and layered essentials.',
    imgId: 'cat-necklaces-4f1a',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Polished hoops that hug the lobe.',
    imgId: 'cat-huggies-8b3c',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  { id: 'reel-1', caption: 'Golden Sphere Huggies, everyday.', imgId: 'reel-1-a1b2', titleId: 'reel-1-title' },
  { id: 'reel-2', caption: 'Stacked cuffs, warm light.', imgId: 'reel-2-c3d4', titleId: 'reel-2-title' },
  { id: 'reel-3', caption: 'Flora Nectar on the collarbone.', imgId: 'reel-3-e5f6', titleId: 'reel-3-title' },
  { id: 'reel-4', caption: 'Amber Lace at golden hour.', imgId: 'reel-4-g7h8', titleId: 'reel-4-title' },
  { id: 'reel-5', caption: 'The Heirloom Set, unboxed.', imgId: 'reel-5-i9j0', titleId: 'reel-5-title' },
  { id: 'reel-6', caption: 'Layered gold, soft focus.', imgId: 'reel-6-k1l2', titleId: 'reel-6-title' },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is genuinely beautiful — it wears like fine jewelry, not costume. My huggies have not left my ears in weeks.',
  },
  {
    id: 't2',
    name: 'Maya T.',
    rating: 5,
    text: 'Bought the Heirloom Set as a gift and kept it for myself. The gift box alone feels luxurious. Will be back for the Flora Nectar.',
  },
  {
    id: 't3',
    name: 'Sofia L.',
    rating: 5,
    text: 'Lightweight, hypoallergenic, and the filigree detail is stunning. Shipping was fast and the packaging was impeccable.',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
