// Seed product data for Velmora Fine Jewelry
// Premium demi-fine gold jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviews: 127,
    description: 'A delicate gold ear cuff adorned with a shimmering crystal accent. This piece adds an ethereal glow to any look, perfect for both everyday elegance and special occasions.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K gold-plated sterling silver, cubic zirconia crystal',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        alt: 'Vivid Aura Jewels - Gold ear cuff with crystal'
      },
      {
        src: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
        alt: 'Vivid Aura Jewels - Worn on ear'
      }
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true }
    ],
    tags: ['bestseller', 'ear-cuff', 'crystal'],
    isBestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviews: 89,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring. Each crystal petal is carefully set to create a harmonious gradient of colors, making this piece a true statement of refined elegance.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K gold-plated brass, multicolor crystals',
    care: 'Store separately to avoid scratching. Avoid swimming and showering. Polish with a jewelry cloth to maintain shine.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
        alt: 'Majestic Flora Nectar - Multicolor floral necklace'
      },
      {
        src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
        alt: 'Majestic Flora Nectar - Worn'
      }
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true }
    ],
    tags: ['necklace', 'floral', 'crystal'],
    isBestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviews: 203,
    description: 'Our signature chunky gold dome huggie earrings. The perfect everyday essential that adds a touch of luxury to any outfit. Sold as a pair.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K gold-plated brass',
    care: 'Wipe with a soft cloth after wearing. Store in the provided pouch. Avoid exposure to water and harsh chemicals.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
        alt: 'Golden Sphere Huggies - Gold dome earrings'
      },
      {
        src: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
        alt: 'Golden Sphere Huggies - Worn'
      }
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true },
      { name: 'Silver', value: 'silver', inStock: true }
    ],
    tags: ['bestseller', 'huggies', 'everyday'],
    isBestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    rating: 4.9,
    reviews: 67,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These statement pieces showcase masterful craftsmanship and are destined to become heirloom treasures.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K gold-plated sterling silver',
    care: 'Store in the provided box to prevent tangling. Clean gently with a soft brush. Remove before swimming or exercising.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
        alt: 'Amber Lace Earrings - Gold filigree drops'
      },
      {
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        alt: 'Amber Lace Earrings - Detail'
      }
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true }
    ],
    tags: ['earrings', 'filigree', 'statement'],
    isBestseller: false
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    rating: 5.0,
    reviews: 45,
    description: 'The ultimate gift presentation: a beautifully boxed set containing our finest huggie earrings paired with a complementary pendant necklace. Perfect for meaningful gifting or treating yourself.',
    shortDescription: 'Gift-boxed earring + necklace set',
    materials: '18K gold-plated brass, cubic zirconia',
    care: 'Store pieces separately to prevent scratching. Clean with a soft cloth. Avoid contact with water and perfume.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. 30-day hassle-free returns.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
        alt: 'Royal Heirloom Set - Gift boxed jewelry set'
      },
      {
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
        alt: 'Royal Heirloom Set - Worn'
      }
    ],
    variants: [
      { name: 'Gold', value: 'gold', inStock: true }
    ],
    tags: ['set', 'gift', 'bestseller'],
    isBestseller: true
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer with ease, shine forever',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday elegance, endless comfort',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is absolutely stunning. I receive compliments every time I wear my Golden Sphere Huggies.',
    product: 'Golden Sphere Huggies'
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive but doesn\'t break the bank. Velmora is my new obsession.',
    product: 'Majestic Flora Nectar'
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My husband was so pleased with the presentation.',
    product: 'Royal Heirloom Set'
  }
];

export const ugcContent = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=711&fit=crop&q=80',
    caption: 'Weekend vibes ✨',
    author: '@stylebyalex'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop&q=80',
    caption: 'My new favorite pair',
    author: '@fashionforward'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop&q=80',
    caption: 'Layering season',
    author: '@jewelrylove'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=711&fit=crop&q=80',
    caption: 'Minimal and chic',
    author: '@thestylishste'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop&q=80',
    caption: 'Birthday sparkle',
    author: '@glamourlife'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=711&fit=crop&q=80',
    caption: 'Everyday luxury',
    author: '@elegantdaily'
  }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getRelatedProducts = (productId, limit = 4) => 
  products.filter(p => p.id !== productId).slice(0, limit);
