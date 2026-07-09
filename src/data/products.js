export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1470241312339-42c5c36589fc',
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. Designed to catch the light and frame the ear with effortless elegance.',
    material: '18K gold plated brass with cubic zirconia crystal',
    rating: 4.8,
    reviews: 124,
    variants: ['gold', 'silver'],
    tags: ['bestseller'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1565645289095-a5d91c9f9e0f',
    description: 'A multicolor floral crystal necklace that brings garden-inspired beauty to any neckline. Each crystal is hand-set for maximum sparkle.',
    material: '18K gold plated sterling silver with multicolor crystals',
    rating: 4.9,
    reviews: 89,
    variants: ['gold', 'silver'],
    tags: ['bestseller', 'new'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1617493255060-2745a8c22ebf',
    description: 'Chunky gold dome huggie earrings with a satisfying weight and mirror-polished finish. The perfect everyday luxury.',
    material: '18K gold plated brass, hypoallergenic posts',
    rating: 4.7,
    reviews: 203,
    variants: ['gold', 'silver'],
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1502723804370-fa1d97a9774e',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet statement-making.',
    material: '18K gold plated brass with intricate filigree detailing',
    rating: 4.6,
    reviews: 67,
    variants: ['gold', 'silver'],
    tags: ['bestseller'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    image: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1641284356881-0f9a340f8a70',
    description: 'A gift-boxed earring and necklace set featuring coordinated designs. The perfect present for someone special — or yourself.',
    material: '18K gold plated sterling silver, presented in luxury gift box',
    rating: 5.0,
    reviews: 42,
    variants: ['gold', 'silver'],
    tags: ['bestseller', 'gift'],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Statement pieces for every occasion' },
  { id: 'necklaces', name: 'Necklaces', description: 'Elegant chains and pendants' },
  { id: 'huggies', name: 'Huggies', description: 'Everyday luxury, close to the ear' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality is incredible for the price. I wear my Velmora pieces every single day and they still look brand new after months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She was absolutely thrilled. The packaging alone feels so luxurious.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica L.',
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. Beautiful, hypoallergenic, and arrives so quickly. Obsessed.',
    rating: 5,
  },
]

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return products
  return products.filter(p => p.category === category)
}
