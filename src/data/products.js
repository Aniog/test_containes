export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff featuring a shimmering crystal accent. This piece adds instant elegance to any look, day or evening.',
    details: [
      '18K gold plated',
      'Hypoallergenic stainless steel',
      'Crystal accent',
      'One size fits most',
    ],
    care: 'Store in a dry place. Avoid contact with water and perfumes. Clean gently with a soft cloth.',
    images: [
      { src: 'earring-cuff', alt: 'Vivid Aura Jewels ear cuff with crystal' },
      { src: 'earring-cuff-2', alt: 'Vivid Aura Jewels worn on ear' },
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of a spring garden. Each crystal catches the light beautifully, creating a mesmerizing sparkle.',
    details: [
      '18K gold plated chain',
      'Multicolor crystal floral pendant',
      'Adjustable length: 16-18 inches',
      'Lobster clasp closure',
    ],
    care: 'Store in the included jewelry pouch. Avoid swimming and showering. Clean crystals with a soft, dry cloth.',
    images: [
      { src: 'floral-necklace', alt: 'Majestic Flora Nectar crystal necklace' },
      { src: 'floral-necklace-2', alt: 'Majestic Flora Nectar pendant detail' },
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['gold'],
    bestseller: true,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, luxurious gold dome huggie earrings that hug your earlobe with effortless style. The perfect everyday statement piece.',
    details: [
      '18K gold plated',
      'Hypoallergenic',
      'Diameter: 12mm',
      'Click-through closure',
    ],
    care: 'Wipe with a soft cloth after wearing. Store separately to avoid scratches. Avoid contact with harsh chemicals.',
    images: [
      { src: 'sphere-huggies', alt: 'Golden Sphere Huggies dome earrings' },
      { src: 'sphere-huggies-2', alt: 'Golden Sphere Huggies styled' },
    ],
    rating: 4.7,
    reviews: 156,
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like detailing. These heirloom-quality pieces transition beautifully from day to evening.',
    details: [
      '18K gold plated',
      'Intricate filigree design',
      'Drop length: 35mm',
      'Lever-back closure',
    ],
    care: 'Store in the provided pouch. Clean with a jewelry polishing cloth. Keep away from moisture and perfumes.',
    images: [
      { src: 'lace-earrings', alt: 'Amber Lace Earrings filigree drops' },
      { src: 'lace-earrings-2', alt: 'Amber Lace Earrings detail' },
    ],
    rating: 4.9,
    reviews: 67,
    variants: ['gold'],
    bestseller: true,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'Our signature gift-boxed set featuring a matching pair of classic gold huggie earrings and a delicate chain necklace. The perfect bridal or anniversary gift.',
    details: [
      '18K gold plated',
      'Complete gift box included',
      'Huggies: 10mm diameter',
      'Necklace: 18 inches',
    ],
    care: 'Store in the included gift box. Clean pieces separately. Avoid swimming and contact with lotions.',
    images: [
      { src: 'heirloom-set', alt: 'Royal Heirloom Set gift box' },
      { src: 'heirloom-set-2', alt: 'Royal Heirloom Set styled' },
    ],
    rating: 5.0,
    reviews: 203,
    variants: ['gold'],
    bestseller: true,
    isGiftSet: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chains, pendants & collars' },
  { id: 'huggies', name: 'Huggies', description: 'Hoops that hug the ear' },
  { id: 'sets', name: 'Sets', description: 'Coordinated gift sets' },
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.bestseller);
export const getRelatedProducts = (productId, limit = 4) => 
  products.filter(p => p.id !== productId).slice(0, limit);
