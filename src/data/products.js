export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Designed to sit elegantly along the ear curve for a modern, sculptural look.',
    details: '18K gold-plated brass with crystal accent. Hypoallergenic. One size fits most.',
    images: [
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace inspired by botanical gardens. Each petal is set with vibrant crystals that catch light from every angle.',
    details: '18K gold-plated brass with multicolor crystals. 16" chain with 2" extender. Lobster clasp.',
    images: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished finish. A modern staple that adds instant warmth to any outfit.',
    details: '18K gold-plated brass. Hinge closure. 0.6" diameter.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight and feminine, perfect for day-to-night wear.',
    details: '18K gold-plated brass with hand-textured finish. 1.2" drop length. Fish hook backs.',
    images: [
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earrings and a necklace. Timeless design meant to be passed down.',
    details: '18K gold-plated brass with crystal accents. Includes luxury gift box. Necklace 16" + 2" extender. Earrings 0.5" drop.',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80' },
];

export const testimonials = [
  { id: 1, name: 'Sophia M.', rating: 5, text: 'The quality is unreal for the price. I get compliments every time I wear the Golden Sphere Huggies.' },
  { id: 2, name: 'Emma R.', rating: 5, text: 'Bought the Royal Heirloom Set for my sister\'s birthday. The packaging alone made it feel like a luxury gift.' },
  { id: 3, name: 'Olivia K.', rating: 5, text: 'Finally jewelry that doesn\'t irritate my sensitive ears. The Amber Lace Earrings are my new everyday staple.' },
];

export const ugcItems = [
  { id: 1, handle: '@sophia.style', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80', caption: 'Golden hour essentials' },
  { id: 2, handle: '@emma.jewelry', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80', caption: 'Huggie season' },
  { id: 3, handle: '@olivia.wears', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80', caption: 'Layered looks' },
  { id: 4, handle: '@lily.gold', image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80', caption: 'Dainty details' },
  { id: 5, handle: '@chloe.daily', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80', caption: 'Gift ready' },
];
