// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura',
    description: 'An elegant gold ear cuff featuring a delicate crystal accent. This piece adds a touch of sparkle to any look, perfect for both everyday elegance and special occasions.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 127,
    variants: ['Gold', 'Silver'],
    inStock: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of blooming flowers. Each crystal is carefully selected for its vibrant hue and brilliant sparkle.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    ],
    rating: 4.8,
    reviews: 89,
    variants: ['Gold', 'Rose Gold'],
    inStock: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere',
    description: 'Chunky gold dome huggie earrings that make a bold statement. These substantial yet lightweight hoops hug your earlobe for comfortable, all-day wear.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    inStock: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace',
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These heirloom-quality pieces showcase masterful craftsmanship.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=600&h=800&fit=crop'
    ],
    rating: 4.7,
    reviews: 64,
    variants: ['Gold'],
    inStock: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Presented in an elegant velvet box, perfect for gifting or treating yourself.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop'
    ],
    rating: 4.9,
    reviews: 156,
    variants: ['Gold', 'Rose Gold'],
    inStock: true
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible. I wear my Golden Sphere Huggies every single day.',
    initials: 'S'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.',
    initials: 'E'
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Perfect for gifting. The Royal Heirloom Set was absolutely loved.',
    initials: 'J'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=600&fit=crop',
    caption: 'My everyday staple'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=400&h=600&fit=crop',
    caption: 'Obsessed with these'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=600&fit=crop',
    caption: 'Gold goddess'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&h=600&fit=crop',
    caption: 'Timeless pieces'
  }
];

export const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' }
];

export const footerLinks = {
  shop: [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' }
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Care Guide', href: '/care' },
    { name: 'FAQs', href: '/faqs' }
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' }
  ]
};

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];