const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff adorned with a single luminous crystal. Designed to be worn solo or stacked — an effortless statement for day-to-night.',
    details:
      '18K gold-plated brass with clear crystal accent. Hinged cuff back for secure fit. Sold as a single.',
    materials: '18K gold-plated brass, cubic zirconia crystal.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns.',
    images: [
      { id: 'va-1', ratio: '3x4', width: 600, query: '[vivid-aura-desc] [vivid-aura-name] gold ear cuff crystal' },
      { id: 'va-2', ratio: '3x4', width: 600, query: '[vivid-aura-desc] [vivid-aura-name] ear cuff model' },
      { id: 'va-3', ratio: '3x4', width: 600, query: '[vivid-aura-desc] [vivid-aura-name] ear cuff detail' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 87,
    description:
      'A cascading floral necklace set with multicolor crystal stones. Vintage-inspired romance meets modern refinement.',
    details:
      '18K gold-plated brass with multicolor Austrian crystals. Adjustable chain 16–18 inches. Lobster clasp.',
    materials: '18K gold-plated brass, Austrian crystals.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns.',
    images: [
      { id: 'mfn-1', ratio: '3x4', width: 600, query: '[majestic-flora-desc] [majestic-flora-name] floral crystal necklace' },
      { id: 'mfn-2', ratio: '3x4', width: 600, query: '[majestic-flora-desc] [majestic-flora-name] necklace model' },
      { id: 'mfn-3', ratio: '3x4', width: 600, query: '[majestic-flora-desc] [majestic-flora-name] necklace detail' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description:
      'Chunky gold dome huggie earrings with a softly rounded profile. The everyday essential that goes with everything.',
    details:
      '18K gold-plated brass. 12mm diameter. Snap closure. Sold as a pair.',
    materials: '18K gold-plated brass.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns.',
    images: [
      { id: 'gsh-1', ratio: '3x4', width: 600, query: '[golden-sphere-desc] [golden-sphere-name] chunky gold dome huggie earrings' },
      { id: 'gsh-2', ratio: '3x4', width: 600, query: '[golden-sphere-desc] [golden-sphere-name] huggies model' },
      { id: 'gsh-3', ratio: '3x4', width: 600, query: '[golden-sphere-desc] [golden-sphere-name] huggie detail' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 56,
    description:
      'Textured gold filigree drop earrings with an intricate openwork pattern. Lightweight yet dramatic — designed to catch the light.',
    details:
      '18K gold-plated brass with filigree detailing. French hook back. 4.5cm drop length.',
    materials: '18K gold-plated brass.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns.',
    images: [
      { id: 'ale-1', ratio: '3x4', width: 600, query: '[amber-lace-desc] [amber-lace-name] textured gold filigree drop earrings' },
      { id: 'ale-2', ratio: '3x4', width: 600, query: '[amber-lace-desc] [amber-lace-name] filigree earrings model' },
      { id: 'ale-3', ratio: '3x4', width: 600, query: '[amber-lace-desc] [amber-lace-name] earring detail' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 42,
    description:
      'A gift-boxed earring and necklace set worthy of passing down. Richly detailed with a classic silhouette, presented in our signature velvet box.',
    details:
      '18K gold-plated brass. Set includes matching necklace (18 inch chain) and drop earrings. Gift-boxed in Velmora signature packaging.',
    materials: '18K gold-plated brass, Austrian crystals.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently wipe with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns.',
    images: [
      { id: 'rhs-1', ratio: '3x4', width: 600, query: '[royal-heirloom-desc] [royal-heirloom-name] gold earring necklace gift set' },
      { id: 'rhs-2', ratio: '3x4', width: 600, query: '[royal-heirloom-desc] [royal-heirloom-name] jewelry set model' },
      { id: 'rhs-3', ratio: '3x4', width: 600, query: '[royal-heirloom-desc] [royal-heirloom-name] gift box detail' },
    ],
  },
];

export default products;
