export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    description: 'A sculptural ear cuff that hugs the curve of your ear, accented with a single luminous crystal. Designed for effortless elegance — no piercing required.',
    materials: '18K gold plated over brass. Hypoallergenic. Crystal accent.',
    images: [
      { id: 'vivid-aura-1', ratio: '3x4', width: '800' },
      { id: 'vivid-aura-2', ratio: '3x4', width: '800' },
      { id: 'vivid-aura-3', ratio: '3x4', width: '800' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    description: 'A delicate pendant featuring hand-set multicolor crystals arranged in a blooming floral motif. Suspended from a fine chain that catches the light with every movement.',
    materials: '18K gold plated over brass. Austrian crystals. Adjustable 16-18" chain.',
    images: [
      { id: 'majestic-flora-1', ratio: '3x4', width: '800' },
      { id: 'majestic-flora-2', ratio: '3x4', width: '800' },
      { id: 'majestic-flora-3', ratio: '3x4', width: '800' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: false },
    ],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 203,
    description: 'Bold yet refined dome-shaped huggies that sit close to the earlobe. The polished gold surface reflects light beautifully — a modern everyday essential.',
    materials: '18K gold plated over brass. Hypoallergenic post. Secure click closure.',
    images: [
      { id: 'golden-sphere-1', ratio: '3x4', width: '800' },
      { id: 'golden-sphere-2', ratio: '3x4', width: '800' },
      { id: 'golden-sphere-3', ratio: '3x4', width: '800' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 67,
    description: 'Intricate filigree work creates a lace-like pattern in warm gold. These drop earrings move gracefully, catching light from every angle. Perfect for special occasions.',
    materials: '18K gold plated over brass. Hypoallergenic. French wire closure.',
    images: [
      { id: 'amber-lace-1', ratio: '3x4', width: '800' },
      { id: 'amber-lace-2', ratio: '3x4', width: '800' },
      { id: 'amber-lace-3', ratio: '3x4', width: '800' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 45,
    description: 'A curated pairing of matching earrings and necklace, presented in our signature gift box. The ultimate expression of thoughtful luxury — for her or for yourself.',
    materials: '18K gold plated over brass. Hypoallergenic. Includes luxury gift box.',
    images: [
      { id: 'royal-heirloom-1', ratio: '3x4', width: '800' },
      { id: 'royal-heirloom-2', ratio: '3x4', width: '800' },
      { id: 'royal-heirloom-3', ratio: '3x4', width: '800' },
    ],
    variants: [
      { id: 'gold', label: 'Gold', available: true },
      { id: 'silver', label: 'Silver', available: true },
    ],
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', count: 2 },
  { id: 'necklaces', label: 'Necklaces', count: 2 },
  { id: 'huggies', label: 'Huggies', count: 1 },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my everyday go-to. They feel so luxurious but I forget I\'m wearing them. Absolutely love the quality.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she cried when she opened it. Will definitely order again.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'I\'ve been searching for affordable demi-fine jewelry that doesn\'t look cheap. Velmora is exactly that — elegant, well-made, and the gold tone is perfect.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance ✨', handle: '@sarah.style' },
  { id: 2, caption: 'Layered perfection', handle: '@emma.jewels' },
  { id: 3, caption: 'Golden hour glow', handle: '@jessica.r' },
  { id: 4, caption: 'Stacked & stunning', handle: '@mia.luxe' },
  { id: 5, caption: 'Date night ready', handle: '@olivia.gold' },
  { id: 6, caption: 'Minimal but mighty', handle: '@ava.chic' },
];
