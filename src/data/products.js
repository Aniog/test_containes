export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural ear cuff with a single crystal accent that catches the light with every turn.',
    details: '18K gold-plated brass with a clear crystal accent. Hypoallergenic and nickel-free.',
    materialsAndCare: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    shippingAndReturns: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: {
      gold: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      ],
      silver: [
        'https://images.unsplash.com/photo-1599643478518-a86e5802f111?w=800&q=80',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      ],
    },
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace inspired by pressed botanicals and summer gardens.',
    details: '18K gold-plated chain with multicolor crystal floral pendant. Adjustable 16"-18" length.',
    materialsAndCare: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    shippingAndReturns: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: {
      gold: [
        'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      ],
      silver: [
        'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      ],
    },
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished finish and secure hinge closure.',
    details: '18K gold-plated brass. Hinge closure. Approximately 12mm diameter.',
    materialsAndCare: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    shippingAndReturns: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: {
      gold: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      ],
      silver: [
        'https://images.unsplash.com/photo-1599643478518-a86e5802f111?w=800&q=80',
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      ],
    },
    badge: null,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an organic, lace-like silhouette.',
    details: '18K gold-plated brass with intricate filigree detailing. Approximately 45mm drop length.',
    materialsAndCare: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    shippingAndReturns: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: {
      gold: [
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
        'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
      ],
      silver: [
        'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      ],
    },
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed earring and necklace set designed to be passed down.',
    details: '18K gold-plated brass set includes stud earrings and pendant necklace. Presented in a velvet gift box.',
    materialsAndCare: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft polishing cloth.',
    shippingAndReturns: 'Free worldwide shipping on orders over $75. 30-day hassle-free returns.',
    images: {
      gold: [
        'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
        'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
      ],
      silver: [
        'https://images.unsplash.com/photo-1599643478518-a86e5802f111?w=800&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      ],
    },
    badge: 'Limited',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'From delicate studs to statement drops.' },
  { id: 'necklaces', name: 'Necklaces', description: 'Layered, pendant, and chain styles.' },
  { id: 'huggies', name: 'Huggies', description: 'Close-fitting hoops for everyday wear.' },
];

export const testimonials = [
  { id: 1, name: 'Sophia M.', rating: 5, text: 'The quality is unreal for the price. I get compliments every time I wear the Golden Sphere Huggies.' },
  { id: 2, name: 'Emma L.', rating: 5, text: 'Velmora packaging feels so luxurious. The Royal Heirloom Set was the perfect gift for my best friend.' },
  { id: 3, name: 'Olivia R.', rating: 5, text: 'Finally, demi-fine jewelry that looks expensive but does not break the bank. Obsessed with the Amber Lace Earrings.' },
];

export const reels = [
  { id: 1, title: 'Golden Hour Try-On', handle: '@velmora' },
  { id: 2, title: 'Layering Necklaces 101', handle: '@velmora' },
  { id: 3, title: 'Office to Dinner', handle: '@velmora' },
  { id: 4, title: 'Gift Edit', handle: '@velmora' },
  { id: 5, title: 'New Arrivals', handle: '@velmora' },
];
