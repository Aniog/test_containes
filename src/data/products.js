export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Effortlessly elevates any look from day to evening.',
    materials: '18K Gold Plated, Hypoallergenic, Crystal Accent',
    care: 'Avoid contact with water and perfumes. Store in the provided pouch when not wearing.',
    variants: ['Gold Tone'],
    images: ['earring-cuff', 'earring-cuff-2'],
    imageIds: ['vivid-aura-1', 'vivid-aura-2'],
    rating: 4.8,
    reviews: 124,
    bestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal pendant necklace that captures light from every angle. The perfect statement piece.',
    materials: '18K Gold Plated, Multicolor Crystals, Adjustable Chain',
    care: 'Gently wipe with soft cloth. Avoid swimming and applying perfume directly.',
    variants: ['Gold Tone'],
    images: ['necklace-floral', 'necklace-floral-2'],
    imageIds: ['majestic-flora-1', 'majestic-flora-2'],
    rating: 4.9,
    reviews: 89,
    bestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings with a smooth, polished finish. Comfortable click-back closure.',
    materials: '18K Gold Plated, Hypoallergenic Post',
    care: 'Store separately to prevent scratching. Clean with jewelry polishing cloth.',
    variants: ['Gold Tone'],
    images: ['huggies-gold', 'huggies-gold-2'],
    imageIds: ['golden-sphere-1', 'golden-sphere-2'],
    rating: 4.7,
    reviews: 203,
    bestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    description: 'Elegant textured gold filigree drop earrings with intricate lace-like detailing. Timeless and sophisticated.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Keep dry and store in cool place. Avoid exposure to harsh chemicals.',
    variants: ['Gold Tone'],
    images: ['filigree-earrings', 'filigree-earrings-2'],
    imageIds: ['amber-lace-1', 'amber-lace-2'],
    rating: 4.9,
    reviews: 67,
    bestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for gifting or treating yourself.',
    materials: '18K Gold Plated, Gift Box Included, Hypoallergenic',
    care: 'Store in original box. Polish gently with jewelry cloth as needed.',
    variants: ['Gold Tone'],
    images: ['jewelry-set', 'jewelry-set-2'],
    imageIds: ['royal-heirloom-1', 'royal-heirloom-2'],
    rating: 5.0,
    reviews: 156,
    bestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'earrings-category',
    imageId: 'category-earrings'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and layers',
    image: 'necklaces-category',
    imageId: 'category-necklaces'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Timeless gold hoops',
    image: 'huggies-category',
    imageId: 'category-huggies'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning pieces. The quality exceeds expectations at this price point. I receive compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'These have become my everyday essentials. Elegant, comfortable, and the gold doesn\'t tarnish. Love Velmora!',
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my sister. The presentation was exquisite, and she adores it.',
  }
];

export const ugcPosts = [
  {
    id: 1,
    image: 'earring-worn',
    imageId: 'ugc-earring-1',
    caption: 'Everyday elegance'
  },
  {
    id: 2,
    image: 'necklace-worn',
    imageId: 'ugc-necklace-1',
    caption: 'Layered perfection'
  },
  {
    id: 3,
    image: 'huggies-worn',
    imageId: 'ugc-huggies-1',
    caption: 'Minimalist charm'
  },
  {
    id: 4,
    image: 'earring-worn-2',
    imageId: 'ugc-earring-2',
    caption: 'Subtle sparkle'
  },
  {
    id: 5,
    image: 'set-worn',
    imageId: 'ugc-set-1',
    caption: 'Evening glamour'
  },
  {
    id: 6,
    image: 'necklace-worn-2',
    imageId: 'ugc-necklace-2',
    caption: 'Natural beauty'
  }
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.bestseller);
