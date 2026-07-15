export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff illuminated by a single radiant crystal. Designed to sit comfortably along the ear without piercing, it catches candlelight and daylight with equal grace.',
    shortDescription: 'Gold ear cuff with crystal accent — effortless elegance, no piercing needed.',
    materials: '18k gold-plated brass, cubic zirconia crystal accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and water. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Express available at checkout.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    images: [
      { id: 'vivid-aura-1', alt: 'Vivid Aura Jewels gold ear cuff with crystal', ratio: '4x3', width: 800, query: 'gold ear cuff crystal jewelry luxury warm light' },
      { id: 'vivid-aura-2', alt: 'Vivid Aura Jewels ear cuff detail', ratio: '4x3', width: 800, query: 'gold ear cuff worn on ear fine jewelry editorial' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate garden rendered in miniature: hand-set crystals in soft petals of blush, amber, and ivory cluster along a fine gold chain. The Flora Nectar necklace is made for layered looks and remembered evenings.',
    shortDescription: 'Multicolor floral crystal necklace — wear a garden close to your heart.',
    materials: '18k gold-plated brass chain, hand-set enamel and cubic zirconia crystals. Length: 16–18 inches adjustable.',
    care: 'Keep dry and store flat. Avoid direct contact with cosmetics and perfume. Clean with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: false },
    ],
    images: [
      { id: 'flora-nectar-1', alt: 'Majestic Flora Nectar multicolor floral crystal necklace', ratio: '4x3', width: 800, query: 'floral crystal gold necklace demi fine jewelry editorial' },
      { id: 'flora-nectar-2', alt: 'Floral necklace on model', ratio: '4x3', width: 800, query: 'floral gold necklace worn woman elegant editorial warm' },
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky gold dome huggies with a polished, mirror-like finish. Small enough for everyday, bold enough to make the ordinary feel considered.',
    shortDescription: 'Chunky gold dome huggie earrings — polished everyday luxury.',
    materials: '18k gold-plated stainless steel, post-back closure. Water-resistant and tarnish-resistant.',
    care: 'Rinse with water after exposure to sweat. Dry thoroughly. Store separately to avoid scratches.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    images: [
      { id: 'sphere-huggies-1', alt: 'Golden Sphere Huggies chunky gold dome earrings', ratio: '4x3', width: 800, query: 'chunky gold dome huggie earrings close up luxury' },
      { id: 'sphere-huggies-2', alt: 'Golden Sphere Huggies on model', ratio: '4x3', width: 800, query: 'gold huggie earrings worn woman ear editorial warm' },
    ],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviewCount: 76,
    description: 'Textured gold filigree drops inspired by antique lace and sun-warmed amber. Light enough to wear all day, intricate enough to be noticed.',
    shortDescription: 'Textured gold filigree drop earrings — vintage romance, modern finish.',
    materials: '18k gold-plated brass, surgical steel posts. Lightweight hollow construction.',
    care: 'Avoid moisture and chemicals. Store hanging or flat in a dry place. Polish with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: true },
    ],
    images: [
      { id: 'amber-lace-1', alt: 'Amber Lace Earrings textured gold filigree drops', ratio: '4x3', width: 800, query: 'gold filigree drop earrings warm light luxury jewelry' },
      { id: 'amber-lace-2', alt: 'Amber Lace Earrings detail', ratio: '4x3', width: 800, query: 'textured gold drop earrings editorial jewelry close up' },
    ],
    badge: 'Limited',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviewCount: 54,
    description: 'A gift-boxed pairing of our signature huggies and a matching pendant necklace. Finished in warm 18k gold plate and presented in a soft-touch Velmora box, ready for gifting.',
    shortDescription: 'Gift-boxed earring + necklace set — the perfect present, already wrapped.',
    materials: '18k gold-plated brass and stainless steel. Includes Velmora gift box and care card.',
    care: 'Keep dry. Store in provided box. Avoid contact with perfumes, lotions, and household cleaners.',
    shipping: 'Free worldwide shipping. Standard delivery 5–8 business days. Gift wrapping available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    variants: [
      { id: 'gold', label: 'Gold', inStock: true },
      { id: 'silver', label: 'Silver', inStock: false },
    ],
    images: [
      { id: 'heirloom-set-1', alt: 'Royal Heirloom Set gold earring and necklace gift box', ratio: '4x3', width: 800, query: 'gold jewelry gift set necklace earrings luxury box warm' },
      { id: 'heirloom-set-2', alt: 'Royal Heirloom Set contents', ratio: '4x3', width: 800, query: 'gold huggie earrings pendant necklace gift set editorial' },
    ],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', imageQuery: 'gold earrings editorial jewelry warm light close up' },
  { id: 'necklaces', label: 'Necklaces', imageQuery: 'gold necklace pendant editorial jewelry warm light' },
  { id: 'huggies', label: 'Huggies', imageQuery: 'gold huggie earrings worn on ear editorial warm' },
];

export const testimonials = [
  { id: 't1', name: 'Sophia M.', rating: 5, text: 'The quality feels so much more expensive than the price. My new everyday earrings.' },
  { id: 't2', name: 'Emma L.', rating: 5, text: 'Bought the Heirloom Set as a birthday gift and she absolutely loved it. Beautiful packaging.' },
  { id: 't3', name: 'Olivia R.', rating: 5, text: 'Quiet luxury exactly as described. The huggies go with everything I own.' },
];

export const ugcReels = [
  { id: 'u1', caption: 'everyday gold ✨', query: 'woman wearing gold huggie earrings close up ear warm light' },
  { id: 'u2', caption: 'layered & loved', query: 'gold necklaces layered on woman editorial warm jewelry' },
  { id: 'u3', caption: 'no piercing needed', query: 'gold ear cuff worn woman close up editorial warm' },
  { id: 'u4', caption: 'gift ready', query: 'gold jewelry gift box unboxing warm luxury packaging' },
  { id: 'u5', caption: 'dinner date details', query: 'woman gold drop earrings evening warm light editorial' },
  { id: 'u6', caption: 'morning light', query: 'gold necklace on woman sunlight warm editorial jewelry' },
];

export const formatPrice = (price) => `$${price.toFixed(2)}`;

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
