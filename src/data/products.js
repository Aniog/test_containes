// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff featuring a sparkling crystal accent. The adjustable design wraps gracefully around the ear, creating an elegant ear-curtain effect perfect for both everyday wear and special occasions.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold Plated, Cubic Zirconia',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in the provided pouch when not wearing.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&h=600&fit=crop'
    ],
    variants: ['gold', 'silver'],
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal petal is carefully set to catch and reflect light, creating a mesmerizing sparkle with every movement.',
    shortDescription: 'Multicolor floral crystal statement necklace',
    materials: '18K Gold Plated, Multicolor Crystals',
    care: 'Gently wipe with a soft cloth after wear. Avoid exposure to water and chemicals.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop'
    ],
    variants: ['gold'],
    featured: true,
    bestseller: true
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, luxurious gold dome huggie earrings that hug close to the ear. The smooth, polished spheres add instant elegance to any outfit, from casual daytime looks to evening glamour.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold Plated, Surgical Steel Post',
    care: 'Keep dry and store separately to prevent scratching.',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop'
    ],
    variants: ['gold', 'silver'],
    featured: true,
    bestseller: true
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate openwork design creates delicate shadows and highlights, with a warm amber-hued drop as the focal point.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold Plated, Resin Drop',
    care: 'Handle with care. Avoid water and apply perfume before wearing.',
    rating: 4.6,
    reviews: 72,
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?w=600&h=600&fit=crop'
    ],
    variants: ['gold'],
    featured: true,
    bestseller: true
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching gold-plated earrings and necklace. The classic design with subtle pavé detailing makes this the perfect gift for yourself or a loved one.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold Plated, Cubic Zirconia Pavé',
    care: 'Store in the provided gift box. Clean gently with a polishing cloth.',
    rating: 5.0,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop'
    ],
    variants: ['gold'],
    featured: true,
    bestseller: true
  }
];

export const categories = [
  { id: 'all', name: 'All Jewelry', count: products.length },
  { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
  { id: 'huggies', name: 'Huggies', count: products.filter(p => p.category === 'huggies').length },
  { id: 'sets', name: 'Sets', count: products.filter(p => p.category === 'sets').length }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    review: 'The quality exceeded my expectations. These pieces look like they cost hundreds more. I receive compliments every time I wear them.',
    rating: 5,
    product: 'Royal Heirloom Set'
  },
  {
    id: 2,
    name: 'Sophie R.',
    review: 'Finally, affordable jewelry that doesn\'t look cheap. The Golden Sphere Huggies are my everyday staple now.',
    rating: 5,
    product: 'Golden Sphere Huggies'
  },
  {
    id: 3,
    name: 'Isabella T.',
    review: 'I bought the Majestic Flora Nectar for my birthday, and I\'ve worn it almost every day since. Beautiful craftsmanship.',
    rating: 5,
    product: 'Majestic Flora Nectar'
  }
];

export const ugcContent = [
  { id: 1, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=711&fit=crop', caption: 'Sunday brunch vibes' },
  { id: 2, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop', caption: 'Stacked and stunning' },
  { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop', caption: 'Ear party essential' },
  { id: 4, image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop', caption: 'Minimalist glamour' },
  { id: 5, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=711&fit=crop', caption: 'Gift-ready luxury' },
  { id: 6, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop', caption: 'Statement piece' }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductById = (id) => products.find(p => p.id === id);
export const getRelatedProducts = (product, limit = 4) => 
  products.filter(p => p.id !== product.id && (p.category === product.category || p.featured)).slice(0, limit);
export const getBestsellers = () => products.filter(p => p.bestseller);
