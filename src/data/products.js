export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'vivid-aura-1', ratio: '4x3', width: 800 },
      { id: 'vivid-aura-2', ratio: '4x3', width: 800 },
      { id: 'vivid-aura-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', price: 42 },
      { id: 'silver', name: 'Silver Tone', price: 42 },
    ],
    details: {
      description: 'Elegant ear cuff featuring a delicate crystal accent that catches the light beautifully. Perfect for both everyday wear and special occasions.',
      materials: '18K gold plated brass, hypoallergenic, nickel-free. Crystal accent: cubic zirconia.',
      care: 'Avoid contact with water, perfume, and chemicals. Store in provided jewelry pouch. Clean gently with soft cloth.',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'majestic-flora-1', ratio: '4x3', width: 800 },
      { id: 'majestic-flora-2', ratio: '4x3', width: 800 },
      { id: 'majestic-flora-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', price: 68 },
      { id: 'silver', name: 'Silver Tone', price: 68 },
    ],
    details: {
      description: 'A stunning floral-inspired necklace adorned with multicolor crystals. Each petal is carefully crafted to create a harmonious bloom that rests gracefully on the collarbone.',
      materials: '18K gold plated brass, multicolor cubic zirconia crystals, adjustable chain 16-18 inches.',
      care: 'Store flat in jewelry box. Avoid moisture and direct sunlight. Clean with dry microfiber cloth.',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 156,
    images: [
      { id: 'golden-sphere-1', ratio: '4x3', width: 800 },
      { id: 'golden-sphere-2', ratio: '4x3', width: 800 },
      { id: 'golden-sphere-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', price: 38 },
      { id: 'silver', name: 'Silver Tone', price: 38 },
    ],
    details: {
      description: 'Modern huggie earrings with a distinctive dome silhouette. These chunky gold hoops sit close to the ear for a sleek, contemporary look.',
      materials: '18K gold plated brass, hypoallergenic post, 12mm diameter.',
      care: 'Keep away from perfumes and lotions. Store separately to prevent scratching. Polish with soft jewelry cloth.',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 73,
    images: [
      { id: 'amber-lace-1', ratio: '4x3', width: 800 },
      { id: 'amber-lace-2', ratio: '4x3', width: 800 },
      { id: 'amber-lace-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', price: 54 },
      { id: 'silver', name: 'Silver Tone', price: 54 },
    ],
    details: {
      description: 'Intricate filigree drop earrings inspired by vintage lacework. The textured gold surface creates beautiful light play and movement with every step.',
      materials: '18K gold plated brass, hypoallergenic hooks, 45mm drop length.',
      care: 'Handle by the hook to preserve filigree detail. Store hanging or flat. Avoid humidity.',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 42,
    images: [
      { id: 'royal-heirloom-1', ratio: '4x3', width: 800 },
      { id: 'royal-heirloom-2', ratio: '4x3', width: 800 },
      { id: 'royal-heirloom-3', ratio: '4x3', width: 800 },
    ],
    variants: [
      { id: 'gold', name: 'Gold Tone', price: 95 },
      { id: 'silver', name: 'Silver Tone', price: 95 },
    ],
    details: {
      description: 'A complete jewelry set presented in our signature gift box. Includes matching earrings and necklace with timeless design elements that complement any occasion.',
      materials: '18K gold plated brass, hypoallergenic, gift box included. Necklace: 18 inch chain. Earrings: stud style.',
      care: 'Store in provided gift box. Keep pieces separated. Clean both items with included polishing cloth.',
    },
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 2 },
  { id: 'huggies', name: 'Huggies', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Vivid Aura earrings get compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift. The packaging was beautiful and the jewelry exceeded expectations.',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without breaking the bank. The Golden Sphere Huggies are my daily go-to.',
  },
];
