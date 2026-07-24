export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A striking gold ear cuff adorned with a brilliant crystal accent. This contemporary piece adds a touch of luxury to any look without requiring a piercing. Handcrafted with 18K gold plating for lasting radiance.',
    shortDescription: 'Gold ear cuff with crystal accent',
    details: '• 18K gold plated brass\n• Cubic zirconia crystal\n• Adjustable fit\n• Nickel-free & hypoallergenic',
    care: 'Store in the included jewelry pouch. Avoid contact with perfumes and water. Clean gently with a soft cloth.',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    featured: true,
    variants: [
      { id: 'gold', name: 'Gold', color: '#C9A96E' },
      { id: 'silver', name: 'Silver', color: '#C0C0C0' }
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of a blooming garden. Each crystal is carefully set by hand, creating a cascade of vibrant colors that catch the light beautifully.',
    shortDescription: 'Multicolor floral crystal necklace',
    details: '• 18K gold plated chain\n• Multi-color cubic zirconia crystals\n• Adjustable 16-18" chain length\n• Lobster clasp closure',
    care: 'Lay flat when storing. Avoid pulling or stretching the chain. Remove before showering or swimming.',
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    featured: true,
    variants: [
      { id: 'gold', name: 'Gold', color: '#C9A96E' },
      { id: 'silver', name: 'Silver', color: '#C0C0C0' }
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings that make a bold statement. Their smooth, rounded silhouette hugs the earlobe perfectly, offering a modern take on classic gold hoops.',
    shortDescription: 'Chunky gold dome huggie earrings',
    details: '• 18K gold plated stainless steel\n• Hinged closure for easy wear\n• Diameter: 15mm\n• Hypoallergenic',
    care: 'Wipe clean with a soft cloth after each wear. Store in a dry place away from direct sunlight.',
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    featured: true,
    variants: [
      { id: 'gold', name: 'Gold', color: '#C9A96E' },
      { id: 'silver', name: 'Silver', color: '#C0C0C0' }
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Each intricate detail is meticulously crafted, creating a piece that is both delicate and eye-catching.',
    shortDescription: 'Textured gold filigree drop earrings',
    details: '• 18K gold plated brass\n• Filigree pattern detail\n• Drop length: 2.5 inches\n• Post back closure',
    care: 'Store hanging or in individual compartments to prevent tangling. Avoid contact with moisture.',
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    featured: true,
    variants: [
      { id: 'gold', name: 'Gold', color: '#C9A96E' },
      { id: 'silver', name: 'Silver', color: '#C0C0C0' }
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect present for someone special — or a well-deserved treat for yourself. Presented in our signature Velmora gift box.',
    shortDescription: 'Gift-boxed earring + necklace set',
    details: '• 18K gold plated brass\n• Matching earrings & necklace\n• Gift box included\n• Certificate of authenticity',
    care: 'Keep pieces separate in the gift box to prevent scratching. Polish with the included cloth.',
    rating: 5.0,
    reviewCount: 67,
    inStock: true,
    featured: true,
    variants: [
      { id: 'gold', name: 'Gold', color: '#C9A96E' },
      { id: 'silver', name: 'Silver', color: '#C0C0C0' }
    ]
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'From studs to statement drops' },
  { id: 'necklaces', name: 'Necklaces', description: 'Chains, pendants & layered looks' },
  { id: 'huggies', name: 'Huggies', description: 'Bold hoops that hug the ear' },
  { id: 'sets', name: 'Gift Sets', description: 'Curated collections for gifting' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday go-to. They look so much more expensive than they are!',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set for my sister\'s birthday and she absolutely loved it. The packaging is beautiful and the jewelry is stunning.',
    product: 'Royal Heirloom Set'
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'I\'ve been wearing my Amber Lace Earrings non-stop. They\'re lightweight, comfortable, and I get compliments every time I wear them.',
    product: 'Amber Lace Earrings'
  }
];

export const ugcItems = [
  { id: 1, caption: 'Golden hour glow', product: 'Golden Sphere Huggies' },
  { id: 2, caption: 'Everyday elegance', product: 'Vivid Aura Jewels' },
  { id: 3, caption: 'Statement pieces', product: 'Majestic Flora Nectar' },
  { id: 4, caption: 'Gift-worthy sets', product: 'Royal Heirloom Set' },
  { id: 5, caption: 'Vintage inspired', product: 'Amber Lace Earrings' },
  { id: 6, caption: 'Layered luxury', product: 'Golden Sphere Huggies' }
];
