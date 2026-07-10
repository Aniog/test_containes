// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    description: 'A delicate gold ear cuff featuring a sparkling crystal accent. This effortless piece adds instant elegance to any look, day or evening. The adjustable cuff fits comfortably on any ear and requires no piercing.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ],
    rating: 4.8,
    reviewCount: 124,
    materials: '18K gold-plated sterling silver base. Hypoallergenic and nickel-free. Crystals are ethically sourced.',
    care: 'Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Clean gently with a soft polishing cloth.',
    shipping: 'Free standard shipping on orders over $75. Express shipping available at checkout. 30-day returns accepted on unworn items.'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    description: 'A stunning multicolor floral crystal necklace that catches the light beautifully. The delicate chain features an array of colorful crystal blooms, creating a garden-inspired statement piece perfect for layering or wearing alone.',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    variants: [
      { name: 'Gold Chain', value: 'gold' },
      { name: 'Silver Chain', value: 'silver' }
    ],
    rating: 4.9,
    reviewCount: 89,
    materials: '18K gold-plated or rhodium-plated sterling silver chain. Multicolor crystal accents. Adjustable length 16-18 inches.',
    care: 'Store in the provided pouch when not wearing. Avoid water and harsh chemicals. Clean crystals gently with a soft, dry cloth.',
    shipping: 'Free standard shipping on orders over $75. Express shipping available at checkout. 30-day returns accepted on unworn items.'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    description: 'Our most popular huggie earring featuring a chunky gold dome design. These substantial yet lightweight hoops hug the ear comfortably and add the perfect amount of glamour to any outfit.',
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ],
    rating: 4.7,
    reviewCount: 256,
    materials: '18K gold-plated brass with enamel coating for durability. Hypoallergenic posts. Sold as a pair.',
    care: 'Wipe with a soft cloth after wearing. Store separately to avoid scratching. Avoid water and contact with beauty products.',
    shipping: 'Free standard shipping on orders over $75. Express shipping available at checkout. 30-day returns accepted on unworn items.'
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    description: 'Exquisite textured gold filigree drop earrings with intricate lace-like detailing. These heirloom-quality pieces feature hand-crafted openwork that creates beautiful light-catching patterns.',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' }
    ],
    rating: 4.9,
    reviewCount: 67,
    materials: '18K gold-plated sterling silver with detailed filigree work. Lightweight and comfortable for all-day wear. Hypoallergenic.',
    care: 'Store in the provided pouch to protect the delicate filigree. Avoid water and rough handling. Clean gently with a soft brush if needed.',
    shipping: 'Free standard shipping on orders over $75. Express shipping available at checkout. 30-day returns accepted on unworn items.'
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    description: 'Our signature gift-boxed set featuring a coordinating earring and necklace duo. The perfect gift for yourself or someone special. Both pieces feature the same elegant design language for a coordinated look.',
    category: 'sets',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' }
    ],
    rating: 5.0,
    reviewCount: 43,
    materials: '18K gold-plated or rhodium-plated set. The necklace is 18 inches with 2-inch extender. Earrings feature push-back closures. Arrives in a luxurious gift box.',
    care: 'Follow care instructions for each piece. Store in the provided gift box when not wearing. Avoid water and contact with beauty products.',
    shipping: 'Free standard shipping on orders over $75. Express shipping available at checkout. 30-day returns accepted on unworn items in original packaging.'
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality exceeded my expectations. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny!'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green. The Amber Lace Earrings are absolutely stunning and so well-made.'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'The Royal Heirloom Set was perfect for my anniversary. My husband was so happy with how it looked. Fast shipping too!'
  }
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop',
    caption: 'My daily essentials'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
    caption: 'Simply beautiful'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Layered perfection'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'Date night vibes'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop',
    caption: 'Gift ready ✨'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

export const formatPrice = (price) => `$${price.toFixed(0)}`;
