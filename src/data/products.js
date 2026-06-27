export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'A striking gold ear cuff with delicate crystal accents. No piercing required. Slides comfortably and securely on the cartilage.',
    materials: '18k gold over sterling silver, cubic zirconia.',
    isBestseller: true,
    variants: ['Gold', 'Silver'],
    imgId: 'vivid-aura-1',
    imgSearch: 'gold ear cuff crystal accent jewelry worn'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'A botanical-inspired pendant featuring a cluster of multicolor crystal "flowers" on a delicate adjustable chain.',
    materials: '18k gold plate, assorted premium crystals.',
    isBestseller: true,
    variants: ['Multicolor'],
    imgId: 'majestic-flora-1',
    imgSearch: 'multicolor floral crystal pendant necklace gold chain close up'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    description: 'Chunky, lightweight gold dome huggie earrings. A modern essential for everyday wear that catches the light beautifully.',
    materials: '14k gold plated brass, hollow core for lightweight wear.',
    isBestseller: true,
    variants: ['Gold', 'Silver'],
    imgId: 'golden-sphere-1',
    imgSearch: 'chunky gold dome huggie earrings simple elegant'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Intricate, textured gold filigree drop earrings with a vintage appeal. Sophisticated movement and shine.',
    materials: '18k gold vermeil.',
    isBestseller: true,
    variants: ['Gold'],
    imgId: 'amber-lace-1',
    imgSearch: 'textured gold filigree drop earrings vintage style'
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    description: 'A thoughtfully curated gift set featuring our signature heirloom chain necklace and matching celestial drop earrings. Arrives in a premium velvet box.',
    materials: '18k gold vermeil, authentic freshwater pearls.',
    isBestseller: true,
    variants: ['Gold'],
    imgId: 'royal-heirloom-1',
    imgSearch: 'gift boxed gold necklace and earring set velvet box'
  },
  {
    id: 'luna-pearl-drops',
    name: 'Luna Pearl Drops',
    price: 62,
    category: 'Earrings',
    description: 'Organic baroque pearls suspended from slender gold hoops.',
    materials: '18k gold plate, baroque freshwater pearls.',
    isBestseller: false,
    variants: ['Gold'],
    imgId: 'luna-pearl-1',
    imgSearch: 'baroque pearl drop earrings gold hoop'
  },
  {
    id: 'celestial-chain',
    name: 'Celestial Chain',
    price: 48,
    category: 'Necklaces',
    description: 'A delicate layering chain with scattered starburst engravings.',
    materials: '14k solid gold plate.',
    isBestseller: false,
    variants: ['Gold', 'Silver'],
    imgId: 'celestial-chain-1',
    imgSearch: 'delicate gold layering necklace starburst'
  },
  {
    id: 'pave-mini-huggies',
    name: 'Pavé Mini Huggies',
    price: 45,
    category: 'Huggies',
    description: 'Snug-fitting hoops lined with continuous micropavé crystals.',
    materials: '18k gold plate, cubic zirconia.',
    isBestseller: false,
    variants: ['Gold', 'Silver'],
    imgId: 'pave-mini-1',
    imgSearch: 'pave crystal gold mini huggie earrings secure continuous'
  }
];

export const getProducts = () => products;
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getProductById = (id) => products.find(p => p.id === id);
