const placeholder = (w, h, text, bg = '1E1A17', fg = 'CBAF87') =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}`;

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    material: '18k-gold-plated',
    description:
      'A sculptural gold ear cuff with a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight beautifully and layers effortlessly with studs or huggies.',
    materials:
      'Brass base with 18K gold plating. Crystal accent. Nickel-free and hypoallergenic. Avoid contact with perfumes, lotions, and water to preserve the finish. Store in the provided pouch.',
    images: [
      placeholder(800, 1000, 'Gold Ear Cuff'),
      placeholder(800, 1000, 'Crystal Accent', '2A2420', 'E8DCC8'),
    ],
    tone: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    material: '18k-gold-plated',
    description:
      'A delicate necklace blooming with multicolor floral crystals. The soft gradient of stones feels both vintage and fresh — a piece that turns a simple white shirt into an outfit.',
    materials:
      'Brass base with 18K gold plating. Hand-set glass crystals. Adjustable 16–18 inch chain. Clean gently with a soft, dry cloth.',
    images: [
      placeholder(800, 1000, 'Floral Crystal Necklace'),
      placeholder(800, 1000, 'Crystal Detail', '2A2420', 'E8DCC8'),
    ],
    tone: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviews: 210,
    material: '18k-gold-plated',
    description:
      'Chunky dome huggies with a polished, molten-gold finish. Lightweight enough for all-day wear, bold enough to become your signature pair.',
    materials:
      'Brass base with 18K gold plating. Hinge closure. Diameter: 12mm. Nickel-free and hypoallergenic. Store flat to maintain shape.',
    images: [
      placeholder(800, 1000, 'Gold Dome Huggies'),
      placeholder(800, 1000, 'Huggie Detail', '2A2420', 'E8DCC8'),
    ],
    tone: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviews: 76,
    material: '18k-gold-plated',
    description:
      'Textured filigree drops inspired by antique lace. The warm gold surface catches light in endless tiny facets, creating a soft glow around the face.',
    materials:
      'Brass base with 18K gold plating. Shepherds hook closure. Length: 45mm. Nickel-free. Keep away from moisture and store in a dry place.',
    images: [
      placeholder(800, 1000, 'Filigree Drop Earrings'),
      placeholder(800, 1000, 'Texture Close Up', '2A2420', 'E8DCC8'),
    ],
    tone: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviews: 52,
    material: '18k-gold-plated',
    description:
      'A gift-boxed pairing of petite stud earrings and a matching pendant necklace. Curated for easy gifting or as the foundation of a minimal, luminous jewelry wardrobe.',
    materials:
      'Brass base with 18K gold plating. Includes Velmora gift box and care card. Nickel-free and hypoallergenic. Wipe clean with a soft cloth.',
    images: [
      placeholder(800, 1000, 'Gift Boxed Set'),
      placeholder(800, 1000, 'Set Detail', '2A2420', 'E8DCC8'),
    ],
    tone: ['gold', 'silver'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);
