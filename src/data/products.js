export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff with a single crystal accent. Designed to sit elegantly along the ear curve for a modern, editorial look.',
    details: '18K gold-plated brass · crystal accent · one size',
    care: 'Avoid contact with perfume, lotion, and water. Store in a dry place and clean with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f6a?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate necklace centered by a multicolor floral crystal pendant. Light-catching and romantic, perfect for layering or wearing alone.',
    details: '18K gold-plated brass · multicolor crystals · 16" chain with 2" extender',
    care: 'Remove before swimming or exercising. Wipe gently after wear and keep in a jewelry pouch.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a86e2dc20736?w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky gold dome huggie earrings with a smooth, polished finish. A quiet-luxury staple that elevates any outfit.',
    details: '18K gold-plated brass · polished dome · hinged closure',
    care: 'Store separately to avoid scratches. Clean with a microfiber cloth and mild soap if needed.',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by antique lace patterns. Lightweight and beautifully detailed.',
    details: '18K gold-plated brass · filigree detail · 1.2" drop length',
    care: 'Handle with care. Avoid pulling or bending delicate filigree work.',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'Popular',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: 'A gift-boxed set featuring matching earrings and a necklace. Timeless design meant to be passed down.',
    details: '18K gold-plated brass · gift box included · necklace 16" + 2" extender',
    care: 'Keep in original pouch when not worn. Polish gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    ],
    variants: ['gold', 'silver'],
    badge: 'Gift Ready',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'From delicate studs to statement drops.' },
  { id: 'necklaces', name: 'Necklaces', description: 'Layered, layered, layered.' },
  { id: 'huggies', name: 'Huggies', description: 'Close-to-skin luxury.' },
];

export const testimonials = [
  { id: 1, name: 'Sophia M.', text: 'The quality is unreal for the price. I get compliments every time I wear the Golden Sphere Huggies.', rating: 5 },
  { id: 2, name: 'Emma R.', text: 'Bought the Royal Heirloom Set for my sister and she cried. The packaging alone felt like a gift.', rating: 5 },
  { id: 3, name: 'Olivia T.', text: 'Finally jewelry that feels expensive but does not break the bank. The Amber Lace Earrings are my new everyday staple.', rating: 5 },
];

export const ugcItems = [
  { id: 1, handle: '@sophia.style', caption: 'My new everyday essential ✨' },
  { id: 2, handle: '@emma.looks', caption: 'Gift ready for her birthday 🎁' },
  { id: 3, handle: '@olivia.daily', caption: 'Layering season is here 🍂' },
  { id: 4, handle: '@maya.wears', caption: 'Quiet luxury at its finest' },
  { id: 5, handle: '@chloe.edit', caption: 'Date night ready 💛' },
];
