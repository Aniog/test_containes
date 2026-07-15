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
    description: 'A sculptural ear cuff that wraps elegantly around the ear, accented with a delicate crystal that catches the light with every movement. Designed for effortless, piercing-free glamour.',
    materials: '18K gold plated over brass. Crystal accent. Hypoallergenic. Nickel-free.',
    images: {
      primary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
      detail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    },
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
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
    description: 'A delicate pendant necklace featuring a cluster of multicolor crystals arranged in a floral motif. The chain drapes gracefully at the collarbone for an effortlessly feminine look.',
    materials: '18K gold plated chain. Multicolor cubic zirconia stones. Adjustable 16-18" chain length.',
    images: {
      primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
      detail: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    },
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: false },
    ],
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
    description: 'Substantial yet lightweight, these dome-shaped huggies sit close to the earlobe with a satisfying click closure. The polished gold finish gives them a luxurious weight that belies their everyday wearability.',
    materials: '18K gold plated over surgical steel. Hinged closure. 12mm diameter.',
    images: {
      primary: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
      detail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    },
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
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
    description: 'Intricate filigree work creates a lace-like effect in these statement drop earrings. The textured surface catches light beautifully, creating depth and movement with every turn of the head.',
    materials: '18K gold plated over brass. Lever-back closure. Drop length: 45mm.',
    images: {
      primary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
      detail: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
    },
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
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
    description: 'A curated pairing of matching drop earrings and pendant necklace, presented in our signature velvet gift box. The perfect expression of considered luxury for someone special — or yourself.',
    materials: '18K gold plated over brass. Matching set. Presented in velvet gift box with ribbon.',
    images: {
      primary: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      detail: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
    },
    variants: [
      { id: 'gold', name: 'Gold Tone', available: true },
      { id: 'silver', name: 'Silver Tone', available: true },
    ],
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
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all after three months.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely be ordering again.',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. The Vivid Aura ear cuff gets me compliments every time I wear it.',
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80' },
  { id: 2, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=400&q=80' },
  { id: 3, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80' },
  { id: 4, caption: 'Layered perfection', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, caption: 'Details matter', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80' },
  { id: 6, caption: 'Weekend ready', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=400&q=80' },
];
