export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A sculptural ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement.',
    material: '18K gold plated over recycled brass',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop',
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A cascading floral pendant featuring multicolor crystals set in warm gold. A statement piece that speaks to nature\'s elegance.',
    material: '18K gold plated, Swarovski crystals',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['Gold', 'Rose Gold'],
    bestseller: true,
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings with a polished finish. Effortlessly chic for everyday wear.',
    material: '18K gold plated over sterling silver',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
    ],
    rating: 4.7,
    reviews: 203,
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Delicate yet commanding.',
    material: '18K gold plated, hand-finished',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop',
    ],
    rating: 4.6,
    reviews: 67,
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A gift-boxed earring and necklace set in matching gold tones. The perfect present for someone extraordinary.',
    material: '18K gold plated, luxury gift box included',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
    ],
    rating: 5.0,
    reviews: 45,
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Vivid Aura every day and get so many compliments.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift. The packaging was beautiful and my sister absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without breaking the bank. Velmora is now my go-to.',
  },
];

export const ugcPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop', caption: 'Everyday elegance ✨' },
  { id: 2, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop', caption: 'Stacked & styled' },
  { id: 3, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop', caption: 'Golden hour glow' },
  { id: 4, image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop', caption: 'Details matter' },
  { id: 5, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop', caption: 'Gift ready' },
];
