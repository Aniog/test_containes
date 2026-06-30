// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
    ],
    description: 'A delicate gold ear cuff adorned with a shimmering crystal accent. This piece effortlessly elevates any look, from casual daytime elegance to evening glamour.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Hypoallergenic, Nickel-free. Store in a dry place. Clean with a soft cloth.',
    care: 'Avoid contact with water, perfume, and harsh chemicals. Remove before swimming or showering.',
    rating: 4.8,
    reviews: 124,
    variants: ['gold'],
    tags: ['bestseller', 'ear-cuff'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop',
    ],
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Delicate crystal flowers cascade along a fine gold chain, creating a piece that is both feminine and Statement-making.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold Plated, Glass Crystals, Hypoallergenic. Store separately to avoid scratching.',
    care: 'Clean gently with a soft, dry cloth. Avoid exposure to water and cosmetics.',
    rating: 4.9,
    reviews: 89,
    variants: ['gold'],
    tags: ['new', 'necklace', 'statement'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    images: [
      'https://images.unsplash.com/photo-1588444650733-d0da8b00a7ae?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
    ],
    description: 'Our bestselling chunky gold dome huggie earrings. The perfect everyday essential that adds just the right amount of shine without overwhelming your look.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated Stainless Steel, Hypoallergenic, Water-resistant.',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch.',
    rating: 4.7,
    reviews: 203,
    variants: ['gold'],
    tags: ['bestseller', 'huggies', 'everyday'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    ],
    description: 'Intricate textured gold filigree drop earrings that showcase artisanal craftsmanship. The delicate lace-like pattern catches the light beautifully, making these perfect for special occasions.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Hypoallergenic. Handle with care due to intricate design.',
    care: 'Store flat to maintain shape. Clean with a soft brush to reach intricate details.',
    rating: 4.6,
    reviews: 67,
    variants: ['gold'],
    tags: ['drop-earrings', 'special-occasion'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    ],
    description: 'The perfect gift, beautifully presented in a luxurious gift box. This set includes a pair of elegant stud earrings and a delicate matching necklace that can be worn together or separately.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K Gold Plated, Hypoallergenic, Comes in a premium gift box.',
    care: 'Store in the gift box when not wearing. Clean both pieces regularly.',
    rating: 4.9,
    reviews: 156,
    variants: ['gold'],
    tags: ['gift', 'set', 'bestseller'],
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'The everyday essential hoop',
    image: 'https://images.unsplash.com/photo-1588444650733-d0da8b00a7ae?w=800&h=800&fit=crop',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Purchased the Royal Heirloom Set as a gift for my mother. The presentation was gorgeous and she absolutely loved it.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Jessica K.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that does not irritate my sensitive ears. Beautiful craftsmanship and fast shipping!',
    product: 'Amber Lace Earrings',
  },
];

export const trustBadges = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export const ugcPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=600&fit=crop',
    caption: 'Everyday elegance ✨',
    handle: '@stylebyjane',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'My new favorite piece',
    handle: '@sophia.style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop',
    caption: 'Date night ready',
    handle: '@fashionwithfiona',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588444650733-d0da8b00a7ae?w=400&h=600&fit=crop',
    caption: 'Minimalist vibes',
    handle: '@modernluxe',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Gift perfection',
    handle: '@theluxelife',
  },
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getProductsByCategory = (category) => 
  products.filter(p => p.category === category);

export const getBestsellers = () => 
  products.filter(p => p.tags.includes('bestseller'));
