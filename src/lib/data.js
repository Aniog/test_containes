export const productsData = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'Gold ear cuff with crystal accent.',
    longDescription: 'Embrace a touch of modern brilliance with the Vivid Aura Jewels. This delicate gold ear cuff is accented with a sparkling crystal, easily elevating any look. Designed for both comfort and standout style.',
    rating: 4.8,
    reviews: 24,
    materials: '18K Gold Plated Brass, Cubic Zirconia',
    images: [
      { id: 'img-1-1', query: '[vivid-aura-jewels-name] worn ear cuff' },
      { id: 'img-1-2', query: '[vivid-aura-jewels-name] gold ear cuff isolated' }
    ]
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'Multicolor floral crystal necklace.',
    longDescription: 'The Majestic Flora Nectar necklace features a beautiful arrangement of multicolor crystals shaped like delicate florals, set on a bright gold chain. A colorful statement piece for any occasion.',
    rating: 4.9,
    reviews: 45,
    materials: '18K Gold Plated Brass, Assorted Crystals',
    images: [
      { id: 'img-2-1', query: '[majestic-flora-nectar-name] necklace model neck' },
      { id: 'img-2-2', query: '[majestic-flora-nectar-name] floral crystal necklace' }
    ]
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    description: 'Chunky gold dome huggie earrings.',
    longDescription: 'Our Golden Sphere Huggies offer a bold yet seamless look with their chunky dome design. Ideal for stacking or wearing solo, bringing a warm, classic glow to your ears.',
    rating: 5.0,
    reviews: 89,
    materials: '18K Gold Plated Stainless Steel',
    images: [
      { id: 'img-3-1', query: '[golden-sphere-huggies-name] chunky gold dome' },
      { id: 'img-3-2', query: '[golden-sphere-huggies-name] gold huggie earrings' }
    ]
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Textured gold filigree drop earrings.',
    longDescription: 'Evoking the romance of heirloom pieces, the Amber Lace Earrings feature intricate textured gold filigree. They dangle gracefully, catching the perfect amount of light.',
    rating: 4.7,
    reviews: 18,
    materials: '18K Gold Plated Brass',
    images: [
      { id: 'img-4-1', query: '[amber-lace-earrings-name] filigree drop earrings model' },
      { id: 'img-4-2', query: '[amber-lace-earrings-name] textured gold earrings' }
    ]
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Gifts',
    description: 'Gift-boxed earring + necklace set.',
    longDescription: 'The ultimate luxury pairing. The Royal Heirloom Set includes our signature matching necklace and earrings, arriving in a beautiful velvet-lined box. The perfect gift for someone special.',
    rating: 5.0,
    reviews: 32,
    materials: '18K Gold Plated Vermeil',
    images: [
      { id: 'img-5-1', query: '[royal-heirloom-set-name] jewelry set box' },
      { id: 'img-5-2', query: '[royal-heirloom-set-name] necklace earring combo' }
    ]
  }
];

export const getBestsellers = () => productsData;
export const getProductById = (id) => productsData.find(p => p.id === id);
