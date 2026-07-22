export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 127,
    category: 'earrings',
    material: '18k-gold-plated',
    tags: ['bestseller', 'new'],
    description: 'A sculptural gold ear cuff with a luminous crystal accent, designed to catch the light with every movement. No piercing required — simply slide onto the ear for an instant statement.',
    materials: '18K gold-plated brass. Hypoallergenic, nickel-free. Features a premium-grade cubic zirconia crystal accent.',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided velvet pouch when not in use. Clean gently with a soft, dry cloth.',
    images: [
      'ear-cuff-gold-crystal-jewelry',
      'gold-ear-cuff-closeup-jewelry',
      'gold-cuff-model-ear-jewelry',
    ],
    hoverImage: 'gold-ear-cuff-worn-jewelry',
    toneOptions: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 203,
    category: 'necklaces',
    material: '18k-gold-plated',
    tags: ['bestseller'],
    description: 'A delicate floral pendant necklace featuring multicolor crystals set in warm gold. Each petal is hand-polished to create a luminous, dew-kissed effect.',
    materials: '18K gold-plated brass with multicolor cubic zirconia crystals. Adjustable 16–18 inch chain. Nickel-free and hypoallergenic.',
    care: 'Wipe clean with a soft cloth after each wear. Keep away from moisture and store flat to prevent chain tangling.',
    images: [
      'floral-crystal-gold-necklace-jewelry',
      'multicolor-flower-necklace-jewelry',
      'gold-floral-pendant-necklace-model',
    ],
    hoverImage: 'floral-necklace-worn-model-jewelry',
    toneOptions: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 89,
    category: 'huggies',
    material: '18k-gold-plated',
    tags: ['bestseller'],
    description: 'Chunky yet lightweight dome huggie earrings with a mirror-polished finish. The perfect everyday earring that transitions effortlessly from desk to dinner.',
    materials: '18K gold-plated brass with surgical steel posts. Lightweight hollow construction. Nickel-free and hypoallergenic.',
    care: 'Remove before sleeping or swimming. Clean with a soft jewelry cloth to maintain the high-polish finish.',
    images: [
      'gold-dome-huggie-earrings-jewelry',
      'chunky-gold-huggies-closeup-jewelry',
      'gold-huggies-worn-ear-jewelry',
    ],
    hoverImage: 'gold-huggies-model-ear-jewelry',
    toneOptions: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 156,
    category: 'earrings',
    material: '18k-gold-plated',
    tags: ['bestseller', 'new'],
    description: 'Intricate filigree drop earrings inspired by vintage lace patterns. The textured gold surface creates beautiful shadow and light play with every turn of the head.',
    materials: '18K gold-plated brass with intricate filigree detailing. Secure butterfly backs. Nickel-free and hypoallergenic.',
    care: 'Handle with care to preserve the delicate filigree work. Store separately to avoid scratching. Polish gently with a dry cloth.',
    images: [
      'gold-filigree-drop-earrings-jewelry',
      'textured-gold-lace-earrings-jewelry',
      'gold-drop-earrings-model-jewelry',
    ],
    hoverImage: 'gold-filigree-earrings-worn-jewelry',
    toneOptions: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    originalPrice: 118,
    rating: 5.0,
    reviewCount: 74,
    category: 'sets',
    material: '18k-gold-plated',
    tags: ['bestseller', 'gift'],
    description: 'An exquisite gift-boxed set featuring a matching pair of earrings and a pendant necklace. Presented in our signature Velmora gift box — ready to give, or to keep.',
    materials: '18K gold-plated brass. Set includes one pair of earrings and one necklace. Comes in a Velmora velvet-lined gift box with ribbon.',
    care: 'Store pieces separately in the provided compartments to prevent scratching. Clean with a soft cloth and avoid exposure to water.',
    images: [
      'gold-jewelry-gift-set-box-jewelry',
      'gold-earring-necklace-set-jewelry',
      'luxury-jewelry-gift-box-gold',
    ],
    hoverImage: 'gold-jewelry-set-worn-model-jewelry',
    toneOptions: ['gold'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) => {
  const product = getProductById(id);
  if (!product) return [];
  return products
    .filter((p) => p.id !== id && p.category === product.category)
    .slice(0, limit);
};

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Statement studs, drops, and cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants, chains, and layers' },
  { id: 'huggies', name: 'Huggies', description: 'Everyday hoops and huggies' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    rating: 5,
    text: 'The quality exceeded my expectations. These pieces look far more expensive than they are. I\'ve received compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister and she was absolutely thrilled. The packaging alone feels so luxurious.',
  },
  {
    id: 3,
    name: 'Jessica M.',
    rating: 5,
    text: 'I have sensitive ears and usually can\'t wear fashion jewelry. Velmora\'s pieces are genuinely hypoallergenic — no irritation at all.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'My everyday stack ✨', handle: '@amandaj' },
  { id: 2, caption: 'Date night essentials', handle: '@sophie_l' },
  { id: 3, caption: 'Gifted myself something pretty', handle: '@michaela' },
  { id: 4, caption: 'These huggies go with everything', handle: '@tanya.r' },
  { id: 5, caption: 'Gold obsession continues', handle: '@clara_b' },
  { id: 6, caption: 'Minimal but never boring', handle: '@lily.james' },
];