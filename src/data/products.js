const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    description: 'A luminous gold ear cuff accented with a single pear-cut crystal. Designed to catch the light from every angle, this piece transitions effortlessly from desk to dinner.',
    material: '18K Gold Plated',
    care: 'Avoid contact with water, lotions, and perfumes. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'va-1', url: '', alt: 'Vivid Aura Jewels ear cuff front view' },
      { id: 'va-2', url: '', alt: 'Vivid Aura Jewels ear cuff side view' },
      { id: 'va-3', url: '', alt: 'Vivid Aura Jewels ear cuff detail view' },
    ],
    rating: 4.8,
    reviews: 24,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace. Each hand-set petal catches the light, creating a garden of color against the skin. Finished with a delicate gold chain.',
    material: '18K Gold Plated',
    care: 'Avoid contact with water, lotions, and perfumes. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'mf-1', url: '', alt: 'Majestic Flora Nectar necklace front view' },
      { id: 'mf-2', url: '', alt: 'Majestic Flora Nectar necklace detail view' },
      { id: 'mf-3', url: '', alt: 'Majestic Flora Nectar necklace on model' },
    ],
    rating: 4.9,
    reviews: 31,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    description: 'Chunky yet elegant gold dome huggie earrings. The sculptural sphere catches light beautifully while the hinged back ensures all-day comfort. A modern classic.',
    material: '18K Gold Plated',
    care: 'Avoid contact with water, lotions, and perfumes. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'gs-1', url: '', alt: 'Golden Sphere Huggies front view' },
      { id: 'gs-2', url: '', alt: 'Golden Sphere Huggies side view' },
      { id: 'gs-3', url: '', alt: 'Golden Sphere Huggies detail view' },
    ],
    rating: 4.7,
    reviews: 18,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    description: 'Intricately textured gold filigree drop earrings that evoke heirloom craftsmanship. The open lacework design makes them surprisingly lightweight for their presence.',
    material: '18K Gold Plated',
    care: 'Avoid contact with water, lotions, and perfumes. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'al-1', url: '', alt: 'Amber Lace Earrings front view' },
      { id: 'al-2', url: '', alt: 'Amber Lace Earrings detail view' },
      { id: 'al-3', url: '', alt: 'Amber Lace Earrings on model' },
    ],
    rating: 4.6,
    reviews: 15,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    description: 'A gift-boxed set featuring matching earrings and necklace in our signature gold finish. The perfect gift — or a well-deserved treat for yourself. Presented in a velvet pouch.',
    material: '18K Gold Plated',
    care: 'Avoid contact with water, lotions, and perfumes. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'rh-1', url: '', alt: 'Royal Heirloom Set boxed view' },
      { id: 'rh-2', url: '', alt: 'Royal Heirloom Set necklace detail' },
      { id: 'rh-3', url: '', alt: 'Royal Heirloom Set earrings detail' },
    ],
    rating: 5.0,
    reviews: 42,
    variants: ['Gold', 'Silver'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: '', count: 2 },
  { id: 'necklaces', name: 'Necklaces', image: '', count: 1 },
  { id: 'huggies', name: 'Huggies', image: '', count: 1 },
];

export const testimonials = [
  { name: 'Sophie M.', text: 'Absolutely in love with my Royal Heirloom Set. The quality is stunning — looks like it cost ten times more.', rating: 5 },
  { name: 'Emma K.', text: 'The Golden Sphere Huggies haven\'t left my ears since they arrived. So comfortable I forget I\'m wearing them.', rating: 5 },
  { name: 'Claire R.', text: 'Bought the Majestic Flora Nectar as a gift and ended up ordering one for myself. The crystal work is exquisite.', rating: 5 },
];

export default products;