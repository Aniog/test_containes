const products = [
  {
    id: 1,
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 42,
    description: 'A sculptural gold ear cuff with a luminous crystal accent. Designed to catch light from every angle — an everyday essential with an editorial edge.',
    material: '18K Gold Plated over Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 68,
    description: 'A delicate floral crystal necklace with multicolor stones. Each petal is hand-set — a whisper of vintage romance for modern styling.',
    material: '18K Gold Plated over Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141589-5e7f1158bb6e?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 3,
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 38,
    description: 'Chunky gold dome huggies with a high-polish finish. Substantial yet lightweight — the perfect balance of modern and timeless.',
    material: '18K Gold Plated over Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c8ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-b9412eac67ba?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 4,
    name: 'Amber Lace Earrings',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 54,
    description: 'Intricate gold filigree drop earrings with a warm amber glow. Artisan-crafted for those who love detail — lightweight and graceful.',
    material: '18K Gold Plated over Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1655456185679-b60e19dc2bed?w=800&q=80',
      'https://images.unsplash.com/photo-1589647363589-5f05044ab48b?w=800&q=80',
    ],
    rating: 4.6,
    reviews: 56,
  },
  {
    id: 5,
    name: 'Royal Heirloom Set',
    category: 'sets',
    categoryLabel: 'Sets',
    price: 95,
    description: 'A gift-boxed set featuring a matching earring and necklace. Heirloom-quality design at an accessible price — the ultimate luxury gift.',
    material: '18K Gold Plated over Brass',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 42,
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c8ab60908?w=600&q=80' },
  { id: 'necklaces', label: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', label: 'Huggies', image: 'https://images.unsplash.com/photo-1611652022419-b9412eac67ba?w=600&q=80' },
]

export const testimonials = [
  {
    name: 'Sophia M.',
    text: 'The quality is incredible for the price. My Vivid Aura ear cuff has not tarnished after months of wear. Truly demi-fine.',
    rating: 5,
  },
  {
    name: 'Emma R.',
    text: 'I bought the Royal Heirloom Set as a gift and ended up keeping it for myself. The packaging alone feels like a luxury boutique.',
    rating: 5,
  },
  {
    name: 'Olivia K.',
    text: 'Finally, jewelry that does not turn my ears green. I wear my Golden Sphere Huggies every single day.',
    rating: 5,
  },
]

export const ugcContent = [
  { id: 1, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
  { id: 2, caption: 'Stacked and styled', image: 'https://images.unsplash.com/photo-1611652022419-b9412eac67ba?w=400&q=80' },
  { id: 3, caption: 'Everyday luxury', image: 'https://images.unsplash.com/photo-1589647363589-5f05044ab48b?w=400&q=80' },
  { id: 4, caption: 'Minimal gold moments', image: 'https://images.unsplash.com/photo-1535632066927-ab7c8ab60908?w=400&q=80' },
  { id: 5, caption: 'Gift ready', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80' },
  { id: 6, caption: 'Designed to last', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80' },
]

export default products