// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent. A delicate, ethereal piece that wraps around your ear with graceful elegance.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 28,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace. Inspired by morning dew on blossoms, this necklace captures the essence of nature\'s beauty.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 42,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. A bold statement piece that hugs your lobe with luxurious warmth.',
    price: 38,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop'
    ],
    rating: 4,
    reviews: 56,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate craftsmanship meets modern elegance in these stunning drop earrings.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 19,
    variants: ['Gold', 'Silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special, or a luxurious treat for yourself.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop'
    ],
    rating: 5,
    reviews: 34,
    variants: ['Gold', 'Silver']
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I\'ve received so many compliments on my Golden Sphere Huggies.'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. This is my third purchase from Velmora!'
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Perfect for everyday luxury. The Amber Lace Earrings are my go-to for both work and evening events.'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop',
    caption: 'Everyday elegance ✨'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop',
    caption: 'My new favorite piece'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
    caption: 'Obsessed with this necklace'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop',
    caption: 'Gold season ☀️'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop',
    caption: 'Subtle sparkle'
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
    { name: 'Earrings', href: '/shop/earrings' },
    { name: 'Necklaces', href: '/shop/necklaces' },
    { name: 'Huggies', href: '/shop/huggies' }
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'Care Guide', href: '/care-guide' },
    { name: 'FAQs', href: '/faqs' }
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' }
  ]
};