// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: '1',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. This piece adds an effortless touch of elegance to any look, whether dressed up or casual. The adjustable cuff fits comfortably on any ear.',
    shortDescription: 'Gold ear cuff with crystal accent',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    rating: 4.8,
    reviewCount: 124,
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and set in 18K gold-plated sterling silver. The perfect statement piece for special occasions.',
    shortDescription: 'Multicolor floral crystal necklace',
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: [
      { name: 'Gold Chain', value: 'gold' },
      { name: 'Silver Chain', value: 'silver' },
    ],
    rating: 4.9,
    reviewCount: 89,
    isBestseller: true,
  },
  {
    id: '3',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    description: 'Chunky, bold, and beautifully crafted. These dome huggie earrings make a statement without being overwhelming. The smooth golden spheres catch the light perfectly, adding warmth to your look. Huggie style for comfortable, secure wear.',
    shortDescription: 'Chunky gold dome huggie earrings',
    category: 'huggies',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1587827774283-7c63ad1768a6?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    rating: 4.7,
    reviewCount: 203,
    isBestseller: true,
  },
  {
    id: '4',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. Each pair is meticulously crafted with intricate detailing that catches and reflects light beautifully. These elegant drops add a touch of refined glamour to any ensemble.',
    shortDescription: 'Textured gold filigree drop earrings',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Antique Gold', value: 'antique' },
    ],
    rating: 4.9,
    reviewCount: 67,
    isBestseller: true,
  },
  {
    id: '5',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    description: 'The ultimate gift set presented in a luxurious keepsake box. This curated collection includes a pair of classic gold drop earrings and a delicate pendant necklace, designed to be worn together or separately. Perfect for special occasions or as an unforgettable gift.',
    shortDescription: 'Gift-boxed earring + necklace set',
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599459183200-59c3a0e770be?w=800&q=80',
    ],
    variants: [
      { name: 'Classic Gold', value: 'gold' },
      { name: 'Diamond Accent', value: 'diamond' },
    ],
    rating: 5.0,
    reviewCount: 156,
    isBestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops, and ear cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants, chains, and statement pieces' },
  { id: 'huggies', name: 'Huggies', description: 'Comfortable everyday hoops' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning pieces. The quality exceeded my expectations and the packaging was so luxurious. I\'ve received so many compliments!',
    product: 'Royal Heirloom Set',
  },
  {
    id: '2',
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that looks expensive but doesn\'t break the bank. The Golden Sphere Huggies are my daily go-to.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: '3',
    name: 'Jessica L.',
    rating: 5,
    text: 'The customer service was exceptional and shipping was fast. My necklace arrived beautifully packaged - perfect for gifting.',
    product: 'Majestic Flora Nectar',
  },
];

export const ugcImages = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop&q=80',
    caption: 'My everyday essentials ✨',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop&q=80',
    caption: 'Date night ready 💫',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=711&fit=crop&q=80',
    caption: 'Layered perfection',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=711&fit=crop&q=80',
    caption: 'Birthday treat for myself 🎂',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ee?w=400&h=711&fit=crop&q=80',
    caption: 'Wedding guest ready',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop&q=80',
    caption: 'Minimalist vibes',
  },
];

export const brandStory = {
  image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
  title: 'Crafted with Intention',
  subtitle: 'Our Story',
  text: 'Velmora was born from a simple belief: every woman deserves jewelry that makes her feel special, without the inaccessible price tags. We work directly with skilled artisans who share our commitment to quality and ethical practices. Each piece is designed to become a treasured part of your story - whether it marks a milestone or simply adds joy to your everyday.',
  link: 'Discover Our Journey',
};

export const trustBadges = [
  { icon: 'truck', text: 'Free Worldwide Shipping' },
  { icon: 'refresh', text: '30-Day Returns' },
  { icon: 'gem', text: '18K Gold Plated' },
  { icon: 'shield', text: 'Hypoallergenic' },
];
