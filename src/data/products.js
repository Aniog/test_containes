export const seedProducts = [
  {
    id: 'vivid-aura',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'A striking gold ear cuff adorned with a single brilliant crystal accent. Designed to comfortably hug the curve of your ear without piercing.',
    category: 'Huggies',
    material: '18K Gold Plated',
    images: [
      { id: 'vivid-1', type: 'model', query: '[ear-cuff-model] [vivid-aura-title]' },
      { id: 'vivid-2', type: 'product', query: '[ear-cuff-product] [vivid-aura-title]' }
    ]
  },
  {
    id: 'majestic-flora',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'An enchanting necklace featuring a delicate multicolor floral arrangement of pavé crystals set in warm 18k gold vermeil.',
    category: 'Necklaces',
    material: '18K Gold Vermeil',
    images: [
      { id: 'flora-1', type: 'model', query: '[floral-necklace-model] [majestic-flora-title]' },
      { id: 'flora-2', type: 'product', query: '[floral-necklace-product] [majestic-flora-title]' }
    ]
  },
  {
    id: 'golden-sphere',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Our signature chunky dome huggie earrings. Solid, satisfying weight with a high-polish finish for everyday quiet luxury.',
    category: 'Huggies',
    material: '18K Gold Plated',
    images: [
      { id: 'sphere-1', type: 'model', query: '[chunky-huggie-model] [golden-sphere-title]' },
      { id: 'sphere-2', type: 'product', query: '[chunky-huggie-product] [golden-sphere-title]' }
    ]
  },
  {
    id: 'amber-lace',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Intricate gold filigree drop earrings with a vintage-inspired textured finish that catches the light beautifully.',
    category: 'Earrings',
    material: '18K Gold Plated',
    images: [
      { id: 'amber-1', type: 'model', query: '[gold-drop-earrings-model] [amber-lace-title]' },
      { id: 'amber-2', type: 'product', query: '[gold-drop-earrings-product] [amber-lace-title]' }
    ]
  },
  {
    id: 'royal-heirloom',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'The complete set. Features our best-selling texture chain necklace paired with matching statement stud earrings. Arrives in premium gift packaging.',
    category: 'Sets',
    material: '18K Gold Vermeil',
    images: [
      { id: 'royal-1', type: 'model', query: '[jewelry-set-model] [royal-heirloom-title]' },
      { id: 'royal-2', type: 'product', query: '[jewelry-set-box] [royal-heirloom-title]' }
    ]
  }
];