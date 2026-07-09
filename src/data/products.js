export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff adorned with a single precision-cut crystal accent. Designed to be worn solo or stacked for a curated-ear moment.',
    details: [
      '18K gold plated over brass',
      'Cubic zirconia accent stone',
      'Cuff closure — no piercing required',
      'Sold as a single',
    ],
    materials: '18K gold-plated brass, cubic zirconia. Nickel-free and hypoallergenic.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: ['cuff-front', 'cuff-angle', 'cuff-model', 'cuff-detail'],
    featured: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 87,
    description:
      'A statement floral pendant necklace featuring multi-toned crystals set in warm gold plating. Suspended from a delicate cable chain with adjustable length.',
    details: [
      '18K gold plated over brass',
      'Multicolor crystal stones',
      'Adjustable 16–18" chain',
      'Lobster clasp closure',
    ],
    materials:
      '18K gold-plated brass, multicolor crystal stones. Nickel-free and hypoallergenic.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: ['flora-front', 'flora-angle', 'flora-model', 'flora-detail'],
    featured: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviews: 196,
    description:
      'Chunky dome-shaped huggie earrings with a high-polish finish. The perfect everyday essential — lightweight enough for all-day wear, bold enough to notice.',
    details: [
      '18K gold plated over brass',
      'Diameter: 14mm',
      'Hinged click-top closure',
      'Sold as a pair',
    ],
    materials: '18K gold-plated brass. Nickel-free and hypoallergenic.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: ['huggies-front', 'huggies-angle', 'huggies-model', 'huggies-detail'],
    featured: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 63,
    description:
      'Intricately detailed gold filigree drop earrings with a vintage-inspired lace pattern. Warm, textured, and surprisingly lightweight.',
    details: [
      '18K gold plated over brass',
      'Length: 32mm drop',
      'French wire hook closure',
      'Sold as a pair',
    ],
    materials: '18K gold-plated brass. Nickel-free and hypoallergenic.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: ['lace-front', 'lace-angle', 'lace-model', 'lace-detail'],
    featured: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviews: 42,
    description:
      'A curated gift-boxed duo: our signature crystal-accent pendant necklace paired with matching mini huggie earrings. Ready to gift — or to keep.',
    details: [
      'Necklace + earring set',
      '18K gold plated over brass',
      'Crystal accent details',
      'Arrives in Velmora gift box',
    ],
    materials: '18K gold-plated brass, cubic zirconia accents. Nickel-free and hypoallergenic.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days. 30-day returns.',
    images: ['heirloom-front', 'heirloom-angle', 'heirloom-model', 'heirloom-detail'],
    featured: true,
  },
]

export const categories = [
  { name: 'Earrings', slug: 'earrings', image: 'category-earrings' },
  { name: 'Necklaces', slug: 'necklaces', image: 'category-necklaces' },
  { name: 'Huggies', slug: 'huggies', image: 'category-huggies' },
]

export const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Absolutely stunning quality. The gold finish is flawless and I get compliments every time I wear my huggies.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    text: 'Packaging felt like unwrapping a gift from a luxury boutique. The earrings are even more beautiful in person.',
    rating: 5,
  },
  {
    name: 'Jasmine K.',
    text: 'I bought the Royal Heirloom Set for my sister\'s birthday — she cried. Worth every penny.',
    rating: 5,
  },
]

export const ugcItems = [
  { caption: 'Everyday stack moment', productRef: 'golden-sphere-huggies' },
  { caption: 'Date night glow', productRef: 'majestic-flora-nectar' },
  { caption: 'Curated ear party', productRef: 'vivid-aura-jewels' },
  { caption: 'Gift-ready elegance', productRef: 'royal-heirloom-set' },
  { caption: 'Afternoon light', productRef: 'amber-lace-earrings' },
]
