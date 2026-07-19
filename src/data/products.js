export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a single sparkling crystal accent. Designed to sit gracefully along the ear curve for an elegant, modern look.',
    materials: '18K gold-plated brass, hypoallergenic crystal',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    images: [
      { id: 'vivid-aura-1', alt: 'Vivid Aura Jewels gold ear cuff with crystal accent' },
      { id: 'vivid-aura-2', alt: 'Vivid Aura Jewels alternate view' }
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
    relatedIds: ['golden-sphere-huggies', 'amber-lace-earrings']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace inspired by botanical gardens. Each petal is set with vibrant crystals that catch the light with every movement.',
    materials: '18K gold-plated brass, multicolor crystals, lobster clasp',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    images: [
      { id: 'majestic-flora-1', alt: 'Majestic Flora Nectar multicolor floral crystal necklace' },
      { id: 'majestic-flora-2', alt: 'Majestic Flora Nectar alternate view' }
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
    relatedIds: ['royal-heirloom-set', 'vivid-aura-jewels']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a smooth, polished finish. A timeless staple that adds subtle luxury to any outfit.',
    materials: '18K gold-plated brass, hypoallergenic posts',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    images: [
      { id: 'golden-sphere-1', alt: 'Golden Sphere Huggies chunky gold dome huggie earrings' },
      { id: 'golden-sphere-2', alt: 'Golden Sphere Huggies alternate view' }
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
    relatedIds: ['vivid-aura-jewels', 'amber-lace-earrings']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Lightweight and feminine, perfect for day-to-night wear.',
    materials: '18K gold-plated brass, hypoallergenic posts',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    images: [
      { id: 'amber-lace-1', alt: 'Amber Lace Earrings textured gold filigree drop earrings' },
      { id: 'amber-lace-2', alt: 'Amber Lace Earrings alternate view' }
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
    relatedIds: ['vivid-aura-jewels', 'golden-sphere-huggies']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earrings and a delicate necklace. The perfect present for a loved one—or yourself.',
    materials: '18K gold-plated brass, crystals, gift box included',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    images: [
      { id: 'royal-heirloom-1', alt: 'Royal Heirloom Set gift-boxed earring and necklace set' },
      { id: 'royal-heirloom-2', alt: 'Royal Heirloom Set alternate view' }
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
    relatedIds: ['majestic-flora-nectar', 'golden-sphere-huggies']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops, and statement pieces' },
  { id: 'necklaces', name: 'Necklaces', description: 'Delicate chains and bold pendants' },
  { id: 'huggies', name: 'Huggies', description: 'Close-fitting hoops for everyday elegance' }
];

export const testimonials = [
  { id: 1, name: 'Sophia M.', rating: 5, text: 'The quality is incredible for the price. I get compliments every time I wear the Golden Sphere Huggies.' },
  { id: 2, name: 'Emma R.', rating: 5, text: 'Bought the Royal Heirloom Set as a gift and it was beautifully packaged. Will definitely order again.' },
  { id: 3, name: 'Olivia K.', rating: 5, text: 'Finally jewelry that looks expensive but does not break the bank. The Amber Lace Earrings are my new favorite.' }
];

export const ugcItems = [
  { id: 'ugc-1', handle: '@sophia.style', title: 'Date night ready' },
  { id: 'ugc-2', handle: '@emma.looks', title: 'Office to dinner' },
  { id: 'ugc-3', handle: '@olivia.wears', title: 'Weekend brunch' },
  { id: 'ugc-4', handle: '@chloe.gems', title: 'Gift haul' },
  { id: 'ugc-5', handle: '@mia.jewels', title: 'New favorites' }
];
