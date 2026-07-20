// Product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff adorned with crystal accents. This piece effortlessly elevates any look from casual to extraordinary.',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in the provided pouch when not wearing.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    variants: ['Gold', 'Rose Gold'],
    isBestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring. Perfect for layering or wearing alone as a statement piece.',
    materials: '18K Gold Plated, Multicolor Crystals, Hypoallergenic',
    care: 'Avoid contact with water and harsh chemicals. Gently wipe with a soft cloth after wearing.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 89,
    variants: ['Gold', 'Silver'],
    isBestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that hug your earlobe perfectly. The quintessential everyday luxury piece.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Wipe with a soft cloth after each wear. Store separately to avoid scratches.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
    ],
    rating: 4.7,
    reviews: 156,
    variants: ['Gold', 'Rose Gold', 'Silver'],
    isBestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    description: 'Textured gold filigree drop earrings with intricate lace-like detailing. Each pair is a work of art.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Avoid moisture and perfumes. Store in the provided jewelry box.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    rating: 4.9,
    reviews: 67,
    variants: ['Gold'],
    isBestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    description: 'An exquisite gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special.',
    materials: '18K Gold Plated, Hypoallergenic, Comes in Luxury Gift Box',
    care: 'Follow care instructions for each piece. Gift box is included for safekeeping.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
    ],
    rating: 5.0,
    reviews: 42,
    variants: ['Gold', 'Rose Gold'],
    isBestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & ear cuffs',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Dome & embellished hoops',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Majestic Flora necklace.',
    product: 'Majestic Flora Nectar'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'The perfect everyday luxury. These huggies are so comfortable and the gold doesn\'t tarnish.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom set as a gift and it arrived beautifully packaged. My friend loved it!',
    product: 'Royal Heirloom Set'
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    caption: 'Golden hour glow'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Layered in luxury'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Effortlessly refined'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    caption: 'Subtle sparkle'
  }
];
