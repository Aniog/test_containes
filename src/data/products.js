export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff with a delicate crystal accent. Designed to hug the ear without piercing, the Vivid Aura Jewels cuff catches light at every angle. Hand-finished with 18K gold plating over hypoallergenic brass.',
    details: [
      '18K gold-plated brass',
      'Cubic zirconia accent',
      'Non-pierced, adjustable fit',
      'Weight: 3g per cuff',
    ],
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch to maintain shine.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.',
    images: 3,
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviews: 89,
    description:
      'A multicolor floral crystal necklace inspired by vintage garden parties. Each petal is handset with pastel crystals on a fine 18K gold-plated chain. A statement piece that feels effortlessly feminine.',
    details: [
      '18K gold-plated chain',
      'Handset pastel crystals',
      'Chain length: 42cm + 5cm extender',
      'Lobster clasp closure',
    ],
    care: 'Wipe gently with a soft cloth after wear. Keep away from harsh chemicals and prolonged sunlight.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.',
    images: 3,
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviews: 215,
    description:
      'Chunky gold dome huggie earrings that deliver quiet impact. Their sculptural curve catches candlelight beautifully. Small enough for everyday, bold enough for evening.',
    details: [
      '18K gold-plated brass',
      'Hinged huggie closure',
      'Diameter: 14mm',
      'Weight: 5g per pair',
    ],
    care: 'Store flat in a jewelry pouch. Avoid sleeping or showering while wearing.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.',
    images: 3,
    related: ['amber-lace-earrings', 'vivid-aura-jewels'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.9,
    reviews: 156,
    description:
      'Textured gold filigree drop earrings with an artisanal, heirloom quality. Inspired by vintage lacework, each pair is cast and hand-polished for a satin-gold finish.',
    details: [
      '18K gold-plated brass',
      'Filigree texture, satin finish',
      'Drop length: 28mm',
      'Post and butterfly backing',
    ],
    care: 'Clean with a soft, dry cloth. Store hanging or flat to preserve shape.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.',
    images: 3,
    related: ['majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviews: 67,
    description:
      'A curated gift-boxed set featuring our bestselling earring and necklace pairing. Beautifully presented in a Velmora signature box with tissue and a handwritten gift note option.',
    details: [
      '18K gold-plated brass',
      'Includes necklace + earring pair',
      'Signature Velmora gift box',
      'Complimentary gift note',
    ],
    care: 'Keep pieces separated in the gift box to avoid scratching. Clean gently after each wear.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.',
    images: 3,
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    text: 'The most elegant packaging I have ever received. The earrings are even more beautiful in person.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Clara T.',
    text: 'I have sensitive ears and these are the first huggies I can wear all day without irritation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara K.',
    text: 'Bought the heirloom set for my sister. She cried. Truly special pieces.',
    rating: 5,
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday gold', handle: '@sophie.m' },
  { id: 2, caption: 'Date night ready', handle: '@clara.t' },
  { id: 3, caption: 'Minimal & chic', handle: '@amara.k' },
  { id: 4, caption: 'Stacked huggies', handle: '@lily.r' },
  { id: 5, caption: 'Gifted myself', handle: '@nina.v' },
];
