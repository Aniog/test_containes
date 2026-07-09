const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 128,
    description:
      'A sculptural gold ear cuff with a radiant crystal accent. Designed to wrap the ear with effortless elegance — wear solo or stack for a curated look.',
    details: [
      '18K gold plated over brass',
      'Cubic zirconia crystal accent',
      'Cuff design — no piercing required',
      'Sold as a single piece',
      'Diameter: 12mm',
    ],
    materialsCare: [
      '18K gold plated over high-quality brass base',
      'Nickel-free and hypoallergenic',
      'Avoid contact with water, perfume, and lotions',
      'Store in the included velvet pouch',
      'Gently polish with a soft cloth',
    ],
    shippingReturns: [
      'Free worldwide shipping on all orders',
      '30-day hassle-free returns',
      'Orders ship within 1-2 business days',
      'Gift packaging included',
    ],
    images: [
      { id: 'vivid-1', ratio: '4x3', width: 800 },
      { id: 'vivid-2', ratio: '4x3', width: 800 },
      { id: 'vivid-3', ratio: '4x3', width: 800 },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
    inStock: true,
    bestseller: true,
    dateAdded: '2026-01-15',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.8,
    reviewCount: 96,
    description:
      'A vibrant floral-inspired necklace with multicolor crystal accents. The delicate chain and sculptural pendant create a statement that feels both romantic and modern.',
    details: [
      '18K gold plated over brass',
      'Multicolor crystal stones',
      'Adjustable chain: 40cm + 5cm extender',
      'Lobster clasp closure',
      'Pendant: 18mm x 22mm',
    ],
    materialsCare: [
      '18K gold plated over high-quality brass base',
      'Multicolor crystal stones',
      'Nickel-free and hypoallergenic',
      'Avoid contact with water, perfume, and lotions',
      'Store in the included velvet pouch',
    ],
    shippingReturns: [
      'Free worldwide shipping on all orders',
      '30-day hassle-free returns',
      'Orders ship within 1-2 business days',
      'Gift packaging included',
    ],
    images: [
      { id: 'flora-1', ratio: '4x3', width: 800 },
      { id: 'flora-2', ratio: '4x3', width: 800 },
      { id: 'flora-3', ratio: '4x3', width: 800 },
    ],
    variants: ['Gold Tone'],
    inStock: true,
    bestseller: true,
    dateAdded: '2026-02-20',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 203,
    description:
      'Chunky gold dome huggie earrings that hug the lobe with a plush, rounded profile. The ultimate everyday essential — polished and substantial.',
    details: [
      '18K gold plated over brass',
      'Dome profile with polished finish',
      'Hinge closure for easy wear',
      'Sold as a pair',
      'Diameter: 14mm, Width: 5mm',
    ],
    materialsCare: [
      '18K gold plated over high-quality brass base',
      'Nickel-free and hypoallergenic',
      'Avoid contact with water, perfume, and lotions',
      'Store in the included velvet pouch',
      'Gently polish with a soft cloth',
    ],
    shippingReturns: [
      'Free worldwide shipping on all orders',
      '30-day hassle-free returns',
      'Orders ship within 1-2 business days',
      'Gift packaging included',
    ],
    images: [
      { id: 'huggies-1', ratio: '4x3', width: 800 },
      { id: 'huggies-2', ratio: '4x3', width: 800 },
      { id: 'huggies-3', ratio: '4x3', width: 800 },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
    inStock: true,
    bestseller: true,
    dateAdded: '2026-03-01',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 74,
    description:
      'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet intricate, these earrings catch the light with every movement.',
    details: [
      '18K gold plated over brass',
      'Filigree openwork design',
      'French hook closure',
      'Sold as a pair',
      'Drop length: 35mm',
    ],
    materialsCare: [
      '18K gold plated over high-quality brass base',
      'Nickel-free and hypoallergenic',
      'Avoid contact with water, perfume, and lotions',
      'Store in the included velvet pouch',
      'Gently polish with a soft cloth',
    ],
    shippingReturns: [
      'Free worldwide shipping on all orders',
      '30-day hassle-free returns',
      'Orders ship within 1-2 business days',
      'Gift packaging included',
    ],
    images: [
      { id: 'amber-1', ratio: '4x3', width: 800 },
      { id: 'amber-2', ratio: '4x3', width: 800 },
      { id: 'amber-3', ratio: '4x3', width: 800 },
    ],
    variants: ['Gold Tone'],
    inStock: true,
    bestseller: true,
    dateAdded: '2026-03-15',
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 156,
    description:
      'A gift-boxed earring and necklace set designed to be treasured. The matching duo features a delicate pendant and coordinating studs — perfect for gifting or making a moment yours.',
    details: [
      '18K gold plated over brass',
      'Set includes necklace + matching stud earrings',
      'Presented in a signature Velmora gift box',
      'Necklace chain: 42cm + 5cm extender',
      'Stud diameter: 8mm, Pendant: 14mm',
    ],
    materialsCare: [
      '18K gold plated over high-quality brass base',
      'Nickel-free and hypoallergenic',
      'Avoid contact with water, perfume, and lotions',
      'Store in the included velvet pouch',
      'Gently polish with a soft cloth',
    ],
    shippingReturns: [
      'Free worldwide shipping on all orders',
      '30-day hassle-free returns',
      'Orders ship within 1-2 business days',
      'Gift packaging included',
    ],
    images: [
      { id: 'heirloom-1', ratio: '4x3', width: 800 },
      { id: 'heirloom-2', ratio: '4x3', width: 800 },
      { id: 'heirloom-3', ratio: '4x3', width: 800 },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
    inStock: true,
    bestseller: true,
    dateAdded: '2026-04-01',
  },
]

export default products

export const categories = ['earrings', 'necklaces', 'huggies']

export const categoryLabels = {
  earrings: 'Earrings',
  necklaces: 'Necklaces',
  huggies: 'Huggies',
}

export const testimonials = [
  {
    name: 'Olivia R.',
    text: 'The Golden Sphere Huggies are my everyday go-to. They feel substantial and look so much more expensive than they are. I get compliments constantly.',
    rating: 5,
  },
  {
    name: 'Amara K.',
    text: 'I bought the Royal Heirloom Set for my sister\'s wedding and she cried. The packaging alone is stunning — the jewelry even more so.',
    rating: 5,
  },
  {
    name: 'Sophie L.',
    text: 'Finally, demi-fine jewelry that doesn\'t feel like a compromise. The Vivid Aura cuff is so sculptural and unique. I\'m collecting every piece.',
    rating: 5,
  },
]

export const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour with the Sphere Huggies', productId: 'golden-sphere-huggies' },
  { id: 'ugc-2', caption: 'Date night in the Flora Nectar', productId: 'majestic-flora-nectar' },
  { id: 'ugc-3', caption: 'Everyday stack with the Aura Cuff', productId: 'vivid-aura-jewels' },
  { id: 'ugc-4', caption: 'Layered elegance — Heirloom Set', productId: 'royal-heirloom-set' },
  { id: 'ugc-5', caption: 'The Lace Earrings catch every light', productId: 'amber-lace-earrings' },
  { id: 'ugc-6', caption: 'Morning rituals in gold', productId: 'golden-sphere-huggies' },
]