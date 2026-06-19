export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
    ],
    shortDescription: 'A stunning gold ear cuff featuring a delicate crystal accent, perfect for everyday elegance.',
    details: [
      '18K gold-plated brass',
      'Cubic zirconia crystal accent',
      'Hypoallergenic',
      'Adjustable fit',
    ],
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    ],
    shortDescription: 'A breathtaking necklace featuring multicolor crystals arranged in a delicate floral pattern.',
    details: [
      '18K gold-plated chain',
      'Multicolor crystal stones',
      'Adjustable length 16-20 inches',
      'Lobster clasp closure',
    ],
    care: 'Store in the provided pouch when not wearing. Avoid swimming and showering. Polish with a jewelry cloth.',
    variants: ['Gold', 'Silver'],
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
    ],
    shortDescription: 'Bold and beautiful chunky dome huggie earrings that make a statement.',
    details: [
      '18K gold-plated brass',
      'Smooth polished finish',
      'Hinged closure',
      'Inner diameter: 12mm',
    ],
    care: 'Wipe with a soft cloth after wearing. Store separately to prevent scratching.',
    variants: ['Gold'],
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1629224316810-9d8805db2a80?w=600&h=800&fit=crop',
    ],
    shortDescription: 'Elegant drop earrings featuring intricate gold filigree work with a vintage-inspired aesthetic.',
    details: [
      '18K gold-plated brass',
      'Intricate filigree design',
      'Drop length: 35mm',
      'Lever-back closure',
    ],
    care: 'Keep away from moisture. Store in an airtight container. Clean carefully with a soft brush.',
    variants: ['Gold', 'Rose Gold'],
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviews: 78,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop',
    ],
    shortDescription: 'The perfect gift set featuring matching earrings and necklace in a luxurious gift box.',
    details: [
      '18K gold-plated set',
      'Includes stud earrings and pendant necklace',
      'Luxury gift box included',
      'Necklace length: 18 inches',
      'Stud diameter: 8mm',
    ],
    care: 'Store in gift box when not in use. Follow care instructions for each piece.',
    variants: ['Gold', 'Silver'],
    isSet: true,
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & ear cuffs',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Gold hoops & cuffs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Golden Sphere Huggies.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My wife absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but doesn\'t break the bank. Velmora is my new favorite!',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
    caption: 'Everyday elegance ✨',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop',
    caption: 'Gift ready ✨',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop',
    caption: 'Minimalist chic',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
    caption: 'Date night ready',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop',
    caption: 'Layered perfection',
  },
];
