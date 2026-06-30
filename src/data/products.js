export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff with a single crystal accent that catches the light with every movement. Designed to be worn solo or stacked for a bold, modern look.',
    materials: '18K gold-plated brass, cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfume, lotion, and water. Clean gently with a soft cloth.',
    images: ['ear-cuff-crystal-gold', 'ear-cuff-crystal-gold-alt'],
    hoverImage: 'ear-cuff-crystal-gold-alt',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate pendant necklace featuring hand-set multicolor floral crystals on a fine gold chain. A statement piece that feels light and wearable.',
    materials: '18K gold-plated sterling silver, hand-set multicolor crystals. Adjustable 16–18 inch chain.',
    care: 'Store flat to prevent tangling. Avoid exposure to water and chemicals. Polish with a jewelry cloth.',
    images: ['floral-crystal-necklace', 'floral-crystal-necklace-alt'],
    hoverImage: 'floral-crystal-necklace-alt',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky yet lightweight dome huggie earrings with a polished gold finish. The perfect everyday essential that transitions effortlessly from day to night.',
    materials: '18K gold-plated surgical steel. Hinge closure. Hypoallergenic and water-resistant.',
    care: 'Safe for occasional water exposure. Dry thoroughly after contact. Store in pouch when not worn.',
    images: ['dome-huggie-gold', 'dome-huggie-gold-alt'],
    hoverImage: 'dome-huggie-gold-alt',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 76,
    description: 'Intricate filigree drop earrings inspired by vintage lacework. Each curve is cast in warm gold for an heirloom feel at an accessible price.',
    materials: '18K gold-plated brass with textured filigree detailing. Butterfly backs included.',
    care: 'Handle with care to preserve delicate detailing. Store separately to avoid scratching.',
    images: ['filigree-drop-gold', 'filigree-drop-gold-alt'],
    hoverImage: 'filigree-drop-gold-alt',
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 52,
    description: 'A curated gift set featuring a pair of statement earrings and a matching pendant necklace, presented in our signature Velmora gift box.',
    materials: '18K gold-plated brass, cubic zirconia accents. Includes gift box, pouch, and care card.',
    care: 'Store in provided pouch. Avoid water and chemicals. Wipe clean with soft cloth after each wear.',
    images: ['gift-set-gold', 'gift-set-gold-alt'],
    hoverImage: 'gift-set-gold-alt',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

export const priceRanges = [
  { id: 'under-40', label: 'Under $40', min: 0, max: 40 },
  { id: '40-60', label: '$40 – $60', min: 40, max: 60 },
  { id: '60-100', label: '$60 – $100', min: 60, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

export const materials = [
  { id: 'gold', label: 'Gold Plated' },
  { id: 'silver', label: 'Silver Tone' },
];
