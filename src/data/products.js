// Seed product data for Velmora Fine Jewelry
// All products are demi-fine gold jewelry ($30-$120 price point)

const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    description: 'A delicate gold ear cuff accented with a sparkling crystal that catches the light with every turn. No piercing required — simply slide onto the ear for an instant touch of everyday luxury.',
    material: '18K Gold Plated Brass',
    hypoallergenic: true,
    images: [
      '/images/products/vivid-aura-1.jpg',
      '/images/products/vivid-aura-2.jpg',
    ],
    category: 'Earrings',
    bestseller: true,
    rating: 4.8,
    reviewCount: 124,
    variants: ['Gold'],
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    description: 'A multicolor floral crystal necklace that brings a garden of color to your neckline. Each crystal is hand-set in a gold-plated floral motif, perfect for adding a pop of color to any outfit.',
    material: '18K Gold Plated Brass with Crystals',
    hypoallergenic: true,
    images: [
      '/images/products/majestic-flora-1.jpg',
      '/images/products/majestic-flora-2.jpg',
    ],
    category: 'Necklaces',
    bestseller: true,
    rating: 4.9,
    reviewCount: 89,
    variants: ['Gold'],
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings that make a bold yet refined statement. The spherical texture catches the light beautifully, while the huggie closure ensures all-day comfort.',
    material: '18K Gold Plated Brass',
    hypoallergenic: true,
    images: [
      '/images/products/golden-sphere-1.jpg',
      '/images/products/golden-sphere-2.jpg',
    ],
    category: 'Huggies',
    bestseller: true,
    rating: 4.7,
    reviewCount: 156,
    variants: ['Gold'],
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    description: 'Textured gold filigree drop earrings inspired by the intricate patterns of lace. The amber-toned gold work creates a warm, vintage-inspired elegance that moves gracefully with you.',
    material: '18K Gold Plated Brass',
    hypoallergenic: true,
    images: [
      '/images/products/amber-lace-1.jpg',
      '/images/products/amber-lace-2.jpg',
    ],
    category: 'Earrings',
    bestseller: false,
    rating: 4.6,
    reviewCount: 67,
    variants: ['Gold'],
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    description: 'A gift-boxed set featuring a matching earring and necklace duo. The perfect gift for someone special — or a well-deserved treat for yourself. Timeless design that transcends seasons.',
    material: '18K Gold Plated Brass',
    hypoallergenic: true,
    images: [
      '/images/products/royal-heirloom-1.jpg',
      '/images/products/royal-heirloom-2.jpg',
    ],
    category: 'Sets',
    bestseller: true,
    rating: 5.0,
    reviewCount: 42,
    variants: ['Gold'],
  },
]

// UGC / Reel-style content for homepage
const ugcReels = [
  {
    id: 1,
    image: '/images/ugc/ugc-1.jpg',
    caption: 'Morning light & gold',
    author: '@sarahj',
  },
  {
    id: 2,
    image: '/images/ugc/ugc-2.jpg',
    caption: 'Everyday elegance',
    author: '@emilyrose',
  },
  {
    id: 3,
    image: '/images/ugc/ugc-3.jpg',
    caption: 'Layered & loved',
    author: '@jessicat',
  },
  {
    id: 4,
    image: '/images/ugc/ugc-4.jpg',
    caption: 'Gifted with love',
    author: '@maria_k',
  },
  {
    id: 5,
    image: '/images/ugc/ugc-5.jpg',
    caption: 'Golden hour glow',
    author: '@oliviad',
  },
  {
    id: 6,
    image: '/images/ugc/ugc-6.jpg',
    caption: 'Stacked to perfection',
    author: '@ninaf',
  },
]

// Testimonials for homepage
const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    initial: 'S',
    rating: 5,
    text: 'I never take them off. The quality is incredible for the price — they look just like my designer pieces.',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Emily',
    initial: 'E',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister and she hasn\'t stopped wearing it. Beautiful packaging too.',
    date: '2024-02-28',
  },
  {
    id: 3,
    name: 'Jessica',
    initial: 'J',
    rating: 5,
    text: 'Finally — jewelry that doesn\'t irritate my sensitive ears. The gold tone is warm and rich, not brassy at all.',
    date: '2024-04-02',
  },
]

// Category tiles for homepage
const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: '/images/categories/earrings.jpg',
    slug: 'earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: '/images/categories/necklaces.jpg',
    slug: 'necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: '/images/categories/huggies.jpg',
    slug: 'huggies',
  },
]

export { products, ugcReels, testimonials, categories }
