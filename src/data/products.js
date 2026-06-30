export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A stunning gold ear cuff adorned with a brilliant crystal accent. Effortlessly chic, this piece adds a touch of sparkle to any look without the need for a piercing.',
    longDescription: 'The Vivid Aura Jewels ear cuff is a masterful blend of modern design and timeless elegance. Crafted from 18K gold-plated sterling silver, it features a hand-set Swarovski crystal that catches the light from every angle. Designed to be worn on the upper ear, it creates the illusion of multiple piercings with zero commitment.',
    care: 'Avoid contact with perfume, lotions, and water. Store in the provided jewelry pouch when not wearing. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns.',
    rating: 4.8,
    reviewCount: 127,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    images: [
      'vivid-aura-jewels-gold-ear-cuff-crystal',
      'vivid-aura-jewels-close-up-detail',
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A multicolor floral crystal necklace that captures the beauty of a blooming garden. Delicate, feminine, and utterly captivating.',
    longDescription: 'Inspired by the enchanting gardens of Provence, the Majestic Flora Nectar necklace features a cluster of hand-set multicolor crystals arranged in a floral motif. Each petal catches the light differently, creating a mesmerizing display of color. The adjustable chain allows you to wear it as a choker or a longer pendant.',
    care: 'Store flat in the jewelry box provided. Avoid exposure to moisture and chemicals. Polish gently with the included microfiber cloth.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns.',
    rating: 4.9,
    reviewCount: 89,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    images: [
      'majestic-flora-nectar-floral-crystal-necklace',
      'majestic-flora-nectar-on-model-neck',
    ],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings that hug the earlobe perfectly. A modern classic for everyday wear.',
    longDescription: 'The Golden Sphere Huggies are our take on the classic huggie earring, elevated with a bold dome silhouette. Cast in 18K gold-plated brass, these earrings feature a smooth, polished surface that reflects light beautifully. The click-lock closure ensures a secure, comfortable fit all day long.',
    care: 'Remove before swimming or showering. Store in a dry place away from direct sunlight. Clean with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns.',
    rating: 4.7,
    reviewCount: 203,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    images: [
      'golden-sphere-huggie-earrings-chunky-gold',
      'golden-sphere-huggies-worn-ear-detail',
    ],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Intricate, elegant, and unforgettable.',
    longDescription: 'The Amber Lace Earrings draw inspiration from antique lace textiles, translated into precious metal through a meticulous filigree technique. Each earring is hand-finished to create a lace-like texture that is both delicate and eye-catching. The lightweight design ensures comfortable wear from morning to midnight.',
    care: 'Handle with care due to delicate filigree work. Store individually in soft pouches. Avoid pulling or bending the filigree details.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns.',
    rating: 4.6,
    reviewCount: 156,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    images: [
      'amber-lace-filigree-drop-earrings-gold',
      'amber-lace-earrings-detail-texture',
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    material: 'gold',
    description: 'A gift-boxed earring and necklace set designed for life\'s most treasured moments. The ultimate luxury gift.',
    longDescription: 'The Royal Heirloom Set is our most luxurious offering, presented in a signature Velmora gift box with a velvet lining. The set includes a pair of crystal-stud earrings and a matching pendant necklace, both crafted in 18K gold-plated sterling silver. Each piece is designed to complement the other, creating a cohesive look that is perfect for special occasions.',
    care: 'Store in the provided gift box when not wearing. Avoid contact with water, perfume, and chemicals. Polish with the included cloth.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. 30-day hassle-free returns.',
    rating: 4.9,
    reviewCount: 74,
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    images: [
      'royal-heirloom-jewelry-set-gift-box',
      'royal-heirloom-set-necklace-earrings',
    ],
    badge: 'Gift Set',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
]

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
]

export const materials = [
  { id: 'gold', name: '18K Gold Plated' },
  { id: 'silver', name: 'Sterling Silver' },
  { id: 'rose-gold', name: 'Rose Gold' },
]
