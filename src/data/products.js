// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    description: 'A stunning gold ear cuff featuring a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime charm to evening elegance. The adjustable design ensures a comfortable, secure fit for all ear shapes.',
    shortDescription: 'Gold ear cuff with crystal accent',
    materials: '18K Gold-Plated Brass, Austrian Crystal, Hypoallergenic',
    care: 'Store in a cool, dry place. Avoid contact with water, perfume, and cosmetics. Clean gently with a soft cloth.',
    images: [
      {
        id: 'vivid-aura-1',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231A1A1A" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Vivid Aura Jewels ear cuff - front view'
      },
      {
        id: 'vivid-aura-2',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23252A25" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Vivid Aura Jewels ear cuff - angle view'
      }
    ],
    rating: 5,
    reviews: 128,
    isBestseller: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    description: 'A breathtaking multicolor floral crystal necklace that captures the essence of spring gardens. Each crystal is carefully selected for its clarity and brilliance, creating a piece that transitions seamlessly from day to evening wear.',
    shortDescription: 'Multicolor floral crystal necklace',
    materials: '18K Gold-Plated Brass, Multicolor Crystals, Adjustable Chain 16-18", Hypoallergenic',
    care: 'Store in the provided pouch when not wearing. Avoid swimming and showering. Polish gently with a jewelry cloth.',
    images: [
      {
        id: 'majestic-flora-1',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231A1A1A" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Majestic Flora Nectar necklace - front view'
      },
      {
        id: 'majestic-flora-2',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231F1F1F" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Majestic Flora Nectar necklace - detail view'
      }
    ],
    rating: 5,
    reviews: 89,
    isBestseller: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    description: 'Our signature chunky gold dome huggie earrings are a modern classic. The smooth, spherical design hugs the earlobe beautifully, creating a statement look that remains elegantly understated. Perfect for everyday luxury.',
    shortDescription: 'Chunky gold dome huggie earrings',
    materials: '18K Gold-Plated Stainless Steel, Inner Diameter 12mm, Hypoallergenic',
    care: 'Wipe with a soft cloth after each wear. Store separately to avoid scratching. Keep away from harsh chemicals.',
    images: [
      {
        id: 'golden-sphere-1',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231A1A1A" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Golden Sphere Huggies - front view'
      },
      {
        id: 'golden-sphere-2',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231D1D1D" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Golden Sphere Huggies - worn view'
      }
    ],
    rating: 5,
    reviews: 215,
    isBestseller: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    description: 'Exquisite textured gold filigree drop earrings inspired by vintage lace patterns. The intricate openwork design catches the light beautifully, creating an ethereal, feminine effect. A refined choice for special occasions.',
    shortDescription: 'Textured gold filigree drop earrings',
    materials: '18K Gold-Plated Brass, Oxidized Details, Length 45mm, Hypoallergenic',
    care: 'Store in a cool, dry place. Clean with a soft, dry cloth. Avoid contact with water and beauty products.',
    images: [
      {
        id: 'amber-lace-1',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231A1A1A" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Amber Lace Earrings - front view'
      },
      {
        id: 'amber-lace-2',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23202220" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Amber Lace Earrings - detail view'
      }
    ],
    rating: 5,
    reviews: 67,
    isBestseller: true,
    variants: ['gold', 'silver']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    description: 'Our most cherished gift set, featuring a matching pair of classic stud earrings and a delicate pendant necklace. Presented in an elegant gift box, this set makes a perfect present for yourself or someone special. The timeless design ensures years of wear.',
    shortDescription: 'Gift-boxed earring and necklace set',
    materials: '18K Gold-Plated Brass, AAA Quality Stones, Earrings 8mm, Necklace 18", Hypoallergenic',
    care: 'Store in the provided gift box. Clean with a soft cloth. Remove before swimming or applying beauty products.',
    images: [
      {
        id: 'royal-heirloom-1',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231A1A1A" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Royal Heirloom Set - gift box view'
      },
      {
        id: 'royal-heirloom-2',
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%231B1B1B" width="400" height="500"/%3E%3C/svg%3E',
        alt: 'Royal Heirloom Set - jewelry view'
      }
    ],
    rating: 5,
    reviews: 156,
    isBestseller: true,
    variants: ['gold', 'silver']
  }
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to statement drops',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"%3E%3Crect fill="%231A1A1A" width="600" height="600"/%3E%3C/svg%3E'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants, and layered looks',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"%3E%3Crect fill="%231A1A1A" width="600" height="600"/%3E%3C/svg%3E'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Modern hoops that embrace the ear',
    image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"%3E%3Crect fill="%231A1A1A" width="600" height="600"/%3E%3C/svg%3E'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'The quality exceeded my expectations. I receive compliments every time I wear my Golden Sphere Huggies.'
  },
  {
    id: 2,
    name: 'Sophie R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that feels luxurious without the luxury price tag. Velmora is my new obsession.'
  },
  {
    id: 3,
    name: 'Isabella C.',
    rating: 5,
    text: 'The Royal Heirloom Set was the perfect anniversary gift. My husband was so pleased with the presentation.'
  }
];

export const ugcItems = [
  { id: 1, caption: 'Wearing my favorite huggies ✨', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23222" width="300" height="533"/%3E%3C/svg%3E' },
  { id: 2, caption: 'Layered for days 💫', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23232" width="300" height="533"/%3E%3C/svg%3E' },
  { id: 3, caption: 'Statement earrings mood', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23242" width="300" height="533"/%3E%3C/svg%3E' },
  { id: 4, caption: 'Everyday elegance', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23252" width="300" height="533"/%3E%3C/svg%3E' },
  { id: 5, caption: 'Gift unwrapping moment 🎁', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23262" width="300" height="533"/%3E%3C/svg%3E' },
  { id: 6, caption: 'Golden hour glow ✨', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 533"%3E%3Crect fill="%23272" width="300" height="533"/%3E%3C/svg%3E' },
];

export const getProductById = (id) => products.find(p => p.id === id);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
