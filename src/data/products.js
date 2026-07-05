const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: 'gold',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      'An elevated ear cuff sculpted from 18K gold-plated brass, accented with a single radiant crystal. Designed for non-pierced and pierced wear, it brings instant edge to every look.',
    details:
      '18K gold-plated over brass. Crystal accent measures 4mm. Fits standard upper-ear placement. Sold as a single.',
    materials: '18K Gold-Plated Brass, Austrian Crystal',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=80',
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=200&q=80',
    ],
    variants: ['Gold', 'Silver'],
    tags: ['earrings', 'cuffs', 'crystal'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'gold',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      'A statement floral necklace featuring multicolor crystal petals suspended from a delicate gold chain. Light-catching and romantic — made for brunches, bridal showers, and evenings out.',
    details:
      '18K gold-plated brass chain with multicolor crystal floral pendant. Adjustable 16–18 inch chain. Lobster clasp.',
    materials: '18K Gold-Plated Brass, Mixed Crystals',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=200&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=200&q=80',
    ],
    variants: ['Gold', 'Rose Gold'],
    tags: ['necklaces', 'floral', 'crystal', 'statement'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    material: 'gold',
    price: 38,
    rating: 4.7,
    reviewCount: 201,
    description:
      'Chunky dome huggies with a dimensional spherical silhouette. These everyday essentials catch light from every angle — polished, substantial, and endlessly versatile.',
    details:
      '18K gold-plated brass. 12mm outer diameter. Hinged clasp closure. Sold as a pair.',
    materials: '18K Gold-Plated Brass',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80',
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=200&q=80',
    ],
    variants: ['Gold', 'Silver'],
    tags: ['earrings', 'huggies', 'everyday'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'gold',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description:
      'Textured gold filigree drops that cascade like antique lace. Inspired by vintage European craftsmanship, these earrings frame the face with warm, intricate detail.',
    details:
      '18K gold-plated brass with filigree texture. 38mm drop length. French wire hook closure. Sold as a pair.',
    materials: '18K Gold-Plated Brass',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=200&q=80',
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=200&q=80',
    ],
    variants: ['Gold'],
    tags: ['earrings', 'drop', 'filigree', 'statement'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    material: 'gold',
    price: 95,
    rating: 5.0,
    reviewCount: 43,
    description:
      'A gift-boxed duo: our signature crystal drop earrings paired with a matching pendant necklace. Designed for milestone moments — anniversaries, graduations, and every celebration in between.',
    details:
      '18K gold-plated brass. Set includes earrings (28mm drop) and pendant necklace (16–18 inch chain). Gift box included.',
    materials: '18K Gold-Plated Brass, Austrian Crystals',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=200&q=80',
    ],
    variants: ['Gold'],
    tags: ['sets', 'gift', 'crystal', 'earrings', 'necklaces'],
  },
  {
    id: 'ethereal-drop-necklace',
    name: 'Ethereal Drop Necklace',
    category: 'necklaces',
    material: 'gold',
    price: 48,
    rating: 4.5,
    reviewCount: 56,
    description:
      'A single teardrop crystal suspended from a fine gold chain. Minimal, luminous, and endlessly layerable — the piece you will never want to take off.',
    details:
      '18K gold-plated brass chain. Teardrop crystal 8mm. Adjustable 16–18 inch chain. Lobster clasp.',
    materials: '18K Gold-Plated Brass, Austrian Crystal',
    images: [
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=200&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&q=80',
    ],
    variants: ['Gold', 'Silver', 'Rose Gold'],
    tags: ['necklaces', 'minimal', 'crystal', 'layerable'],
  },
  {
    id: 'classic-chain-huggies',
    name: 'Classic Chain Huggies',
    category: 'earrings',
    material: 'silver',
    price: 35,
    rating: 4.4,
    reviewCount: 93,
    description:
      'Delicate chain-link huggies with a fluid drape. Light as air and designed for all-day wear — pair them with studs or wear solo for an understated gleam.',
    details:
      'Sterling silver over brass. 10mm outer diameter. Hinged clasp closure. Sold as a pair.',
    materials: 'Sterling Silver Over Brass',
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&q=80',
    ],
    variants: ['Silver', 'Gold'],
    tags: ['earrings', 'huggies', 'chain', 'everyday'],
  },
  {
    id: 'luminous-pearl-drop',
    name: 'Luminous Pearl Drop',
    category: 'necklaces',
    material: 'gold',
    price: 58,
    rating: 4.7,
    reviewCount: 72,
    description:
      'A luminous faux pearl framed by a crown of micro crystals on a fine gold chain. Bridal-adjacent, boardroom-ready — a piece that transitions beautifully.',
    details:
      '18K gold-plated brass chain. Faux pearl 10mm. Adjustable 16–18 inch chain. Lobster clasp.',
    materials: '18K Gold-Plated Brass, Faux Pearl, Micro Crystals',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    ],
    thumbnails: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&q=80',
    ],
    variants: ['Gold'],
    tags: ['necklaces', 'pearl', 'bridal', 'statement'],
  },
];

export default products;
