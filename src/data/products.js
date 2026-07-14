export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    description: 'A sculptural gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece transitions effortlessly from day to evening.',
    material: '18K gold plated brass with cubic zirconia',
    details: [
      'Hypoallergenic — nickel and lead free',
      '18K gold plating over solid brass',
      'Single cubic zirconia accent stone',
      'Adjustable cuff design — no piercing required',
    ],
    variants: ['gold', 'silver'],
    rating: 4.8,
    reviews: 124,
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    description: 'A delicate chain necklace featuring hand-set multicolor floral crystals. Each stone is carefully placed to create a garden-inspired cascade of color.',
    material: '18K gold plated sterling silver with crystal stones',
    details: [
      'Hypoallergenic — nickel and lead free',
      '18K gold plating over 925 sterling silver',
      'Hand-set multicolor crystal stones',
      'Adjustable chain length: 16"–18"',
      'Lobster clasp closure',
    ],
    variants: ['gold', 'silver'],
    rating: 4.9,
    reviews: 89,
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    description: 'Chunky dome huggie earrings with a polished gold finish. Their bold silhouette makes a statement while remaining lightweight and comfortable for all-day wear.',
    material: '18K gold plated brass',
    details: [
      'Hypoallergenic — nickel and lead free',
      '18K gold plating over solid brass',
      'Hinged huggie closure',
      'Diameter: 15mm',
      'Weight: 3.2g per earring',
    ],
    variants: ['gold', 'silver'],
    rating: 4.7,
    reviews: 203,
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. The intricate metalwork creates beautiful shadow play against the skin.',
    material: '18K gold plated brass with amber crystal',
    details: [
      'Hypoallergenic — nickel and lead free',
      '18K gold plating over solid brass',
      'Intricate filigree metalwork',
      'Amber-toned crystal accent',
      'Drop length: 4.5cm',
      'Butterfly back closure',
    ],
    variants: ['gold', 'silver'],
    rating: 4.8,
    reviews: 67,
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    description: 'A curated gift set featuring a matching earring and necklace pair, presented in a luxe velvet box. The perfect gift for someone special — or yourself.',
    material: '18K gold plated sterling silver with crystal accents',
    details: [
      'Hypoallergenic — nickel and lead free',
      '18K gold plating over 925 sterling silver',
      'Includes: drop earrings + pendant necklace',
      'Presented in signature velvet gift box',
      'Necklace length: 16"–18" adjustable',
    ],
    variants: ['gold', 'silver'],
    rating: 5.0,
    reviews: 42,
    bestseller: true,
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 12 },
  { id: 'necklaces', name: 'Necklaces', count: 8 },
  { id: 'huggies', name: 'Huggies', count: 6 },
]

export const testimonials = [
  {
    id: 1,
    text: 'The quality is incredible for the price. I wear my Vivid Aura cuff every single day — it still looks brand new after months.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    id: 2,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely order again.',
    author: 'Rachel K.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. These pieces are hypoallergenic AND gorgeous. Obsessed with the Golden Sphere Huggies.',
    author: 'Emma L.',
    rating: 5,
  },
]

export const getProductById = (id) => products.find(p => p.id === id)

export const getProductsByCategory = (category) => 
  category === 'all' ? products : products.filter(p => p.category === category)

export const getRelatedProducts = (productId) => 
  products.filter(p => p.id !== productId).slice(0, 4)
