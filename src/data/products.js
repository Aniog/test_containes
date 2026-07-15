const placeholder = (label) =>
  `https://placehold.co/800x1000/F6F3EE/B8860B?text=${encodeURIComponent(label)}&font=playfair-display`;

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff with a sparkling crystal accent. Designed to sit gracefully along the ear curve for an elegant, modern look.',
    details: '18K gold-plated brass with crystal accent. Hypoallergenic. One size fits most.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    images: [
      placeholder('Vivid Aura Jewels'),
      placeholder('Vivid Aura Jewels 2'),
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace that captures the beauty of a blooming garden. The perfect statement piece for any occasion.',
    details: '18K gold-plated chain with multicolor crystal floral pendant. 16" chain with 2" extender.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    images: [
      placeholder('Majestic Flora Nectar'),
      placeholder('Majestic Flora Nectar 2'),
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings that make a bold yet refined statement. Perfect for everyday wear with a touch of luxury.',
    details: '18K gold-plated brass. Hinge closure. Approximately 0.75" diameter.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    images: [
      placeholder('Golden Sphere Huggies'),
      placeholder('Golden Sphere Huggies 2'),
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and beautifully intricate.',
    details: '18K gold-plated brass with filigree detailing. French wire closure. Approximately 1.5" length.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    images: [
      placeholder('Amber Lace Earrings'),
      placeholder('Amber Lace Earrings 2'),
    ],
    variants: ['gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earrings and necklace. Timeless design meant to be passed down through generations.',
    details: '18K gold-plated brass. Includes necklace and stud earrings. Presented in a velvet gift box.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    images: [
      placeholder('Royal Heirloom Set'),
      placeholder('Royal Heirloom Set 2'),
    ],
    variants: ['gold', 'silver'],
    bestseller: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: placeholder('Earrings') },
  { id: 'necklaces', name: 'Necklaces', image: placeholder('Necklaces') },
  { id: 'huggies', name: 'Huggies', image: placeholder('Huggies') },
];

export const testimonials = [
  { id: 1, name: 'Sarah M.', initial: 'S', text: 'The quality is absolutely stunning. I\'ve never received so many compliments on a piece of jewelry.', rating: 5 },
  { id: 2, name: 'Emily R.', initial: 'E', text: 'Beautiful packaging, fast shipping, and the necklace is even more gorgeous in person.', rating: 5 },
  { id: 3, name: 'Jessica L.', initial: 'J', text: 'I bought the huggies for myself and ended up gifting a set to my best friend. We both love them!', rating: 5 },
];
