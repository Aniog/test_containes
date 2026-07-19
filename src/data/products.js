export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'An exquisite ear cuff adorned with a delicate crystal accent. Crafted in 18K gold plating over sterling silver, this piece catches light with every movement.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A multicolor floral crystal necklace that blooms with elegance. Each petal is hand-set with Swarovski crystals on an 18K gold plated chain.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings with a polished finish. These everyday essentials hug your earlobe with understated luxury.',
    rating: 4.7,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. Each pair is meticulously crafted to capture the romance of heirloom jewelry.',
    rating: 4.6,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    material: 'gold',
    description: 'A gift-boxed earring and necklace set designed for life\'s most precious moments. Presented in our signature velvet box with a handwritten card.',
    rating: 5.0,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop',
    ],
    variants: ['gold', 'silver'],
    badge: 'Gift Set',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. The packaging is absolutely beautiful.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. Velmora is my new go-to for everyday elegance.',
  },
];

export const ugcPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=700&fit=crop', caption: 'Stacked & styled' },
  { id: 3, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop', caption: 'Golden hour glow' },
  { id: 4, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=700&fit=crop', caption: 'Layered perfection' },
  { id: 5, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop', caption: 'Necklace dreams' },
  { id: 6, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop', caption: 'Gift of love' },
];
