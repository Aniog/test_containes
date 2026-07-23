export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff illuminated by a single hand-set crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight with every turn.',
    materials: '18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfume, lotion, and water. Store in the provided pouch and polish gently with a soft cloth.',
    imageId: 'velmora-product-vivid-aura-jewels',
    imageQuery: 'gold ear cuff crystal accent on dark background',
    hoverQuery: 'gold ear cuff worn on ear editorial close up',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate pendant necklace blooming with multicolor floral crystals. A romantic statement that layers beautifully or stands alone against bare skin.',
    materials: '18k gold-plated stainless steel, hand-painted enamel petals, glass crystals. Lead and nickel free.',
    care: 'Wipe clean after wear. Keep dry and store flat to protect the chain and delicate petals.',
    imageId: 'velmora-product-majestic-flora-nectar',
    imageQuery: 'multicolor floral crystal gold necklace on neutral background',
    hoverQuery: 'floral crystal gold necklace on model neckline editorial',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 215,
    description: 'Chunky dome huggies with a polished molten-gold finish. Substantial enough to elevate a white tee, refined enough for evening.',
    materials: '18k gold-plated brass with surgical steel posts. Hypoallergenic and lightweight.',
    care: 'Remove before showering or swimming. Clean with a dry jewelry cloth to maintain luster.',
    imageId: 'velmora-product-golden-sphere-huggies',
    imageQuery: 'chunky gold dome huggie earrings on dark background',
    hoverQuery: 'gold dome huggie earrings worn on ear close up',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-vermeil',
    rating: 4.9,
    reviewCount: 76,
    description: 'Textured filigree drops inspired by antique Venetian lace. Each curve is cast to catch light like folded silk.',
    materials: 'Gold vermeil over sterling silver. Hand-textured finish.',
    care: 'Store in a cool, dry place. Avoid abrasive surfaces. Buff lightly with a microfiber cloth.',
    imageId: 'velmora-product-amber-lace-earrings',
    imageQuery: 'textured gold filigree drop earrings on neutral background',
    hoverQuery: 'gold filigree drop earrings worn editorial portrait',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed pairing of stud earrings and a matching pendant necklace. The kind of set that becomes an instant heirloom.',
    materials: '18k gold-plated brass, cubic zirconia stones. Presented in a Velmora gift box.',
    care: 'Keep pieces separated in the gift box. Avoid moisture and harsh chemicals.',
    imageId: 'velmora-product-royal-heirloom-set',
    imageQuery: 'gold jewelry gift set necklace earrings in luxury box',
    hoverQuery: 'gold jewelry gift set on marble editorial flatlay',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Claire M.',
    text: 'The packaging alone felt like a gift. I have worn the huggies every day for two months and they still look brand new.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya K.',
    text: 'Quiet luxury at an accessible price. The ear cuff is my most complimented piece — and it is surprisingly comfortable.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Emma S.',
    text: 'I bought the heirloom set for my sister and ended up ordering one for myself. Truly timeless.',
    rating: 5,
  },
];

export const ugcReels = [
  {
    id: 'ugc-1',
    caption: 'everyday gold',
    imageId: 'velmora-ugc-1',
    query: 'woman wearing gold huggie earrings close up video still',
  },
  {
    id: 'ugc-2',
    caption: 'layered neutrals',
    imageId: 'velmora-ugc-2',
    query: 'gold layered necklaces on model editorial warm light',
  },
  {
    id: 'ugc-3',
    caption: 'gifting moment',
    imageId: 'velmora-ugc-3',
    query: 'hands opening luxury jewelry gift box gold earrings',
  },
  {
    id: 'ugc-4',
    caption: 'evening glow',
    imageId: 'velmora-ugc-4',
    query: 'woman gold ear cuff crystal candlelight portrait',
  },
  {
    id: 'ugc-5',
    caption: 'soft focus',
    imageId: 'velmora-ugc-5',
    query: 'gold drop earrings soft editorial portrait warm tones',
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', imageId: 'velmora-cat-earrings', query: 'gold earrings collection editorial on dark background' },
  { id: 'necklaces', label: 'Necklaces', imageId: 'velmora-cat-necklaces', query: 'gold necklaces collection editorial flatlay warm' },
  { id: 'huggies', label: 'Huggies', imageId: 'velmora-cat-huggies', query: 'gold huggie earrings collection close up editorial' },
];

export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id) => products.filter((p) => p.id !== id).slice(0, 4);