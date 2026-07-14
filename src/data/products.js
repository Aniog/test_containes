export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    description: 'A sculptural gold ear cuff that catches the light with every movement. Set with a single brilliant crystal accent for a subtle sparkle.',
    material: '18K Gold Plated, Crystal',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    description: 'A delicate necklace adorned with multicolor floral crystal pendants. Each petal catches the light, creating a garden of color at your neckline.',
    material: '18K Gold Plated, Multicolor Crystal',
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    description: 'Chunky gold dome huggie earrings with a polished finish. Lightweight enough for all-day wear, bold enough to make a statement.',
    material: '18K Gold Plated, Hypoallergenic',
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    description: 'Intricately textured gold filigree drop earrings that evoke vintage lace. Artfully crafted with warm, glowing undertones.',
    material: '18K Gold Plated, Filigree',
    category: 'earrings',
    images: [
      'https://picsum.photos/seed/velmora-amber/800/800',
      'https://picsum.photos/seed/velmora-amber-2/800/800',
    ],
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    description: 'A gift-boxed set featuring a matching pair of earrings and a pendant necklace. Housed in a velvet-lined keepsake box, ready for gifting.',
    material: '18K Gold Plated, Gift Boxed',
    category: 'sets',
    images: [
      'https://picsum.photos/seed/velmora-heirloom/800/800',
      'https://picsum.photos/seed/velmora-heirloom-2/800/800',
    ],
    rating: 5.0,
    reviews: 42,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80' },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is absolutely stunning. I\'ve received so many compliments on my Vivid Aura ear cuff — it looks far more expensive than it is.',
    rating: 5,
  },
  {
    name: 'Jessica K.',
    text: 'I bought the Royal Heirloom Set as a gift for my sister and ended up keeping it for myself. The packaging alone is worth it.',
    rating: 5,
  },
  {
    name: 'Amanda L.',
    text: 'Finally, gold jewelry that doesn\'t irritate my sensitive ears. I wear my Golden Sphere Huggies every single day.',
    rating: 5,
  },
];