export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    images: [
      { alt: 'Vivid Aura Jewels ear cuff front view', imgId: 'vivid-aura-1-a7b3' },
      { alt: 'Vivid Aura Jewels ear cuff side view', imgId: 'vivid-aura-2-c4d2' },
    ],
    variants: ['Gold', 'Silver'],
    details: 'A stunning ear cuff featuring a delicate crystal accent set in 18K gold plating. This piece wraps gracefully around the ear for an effortless, modern look.',
    care: 'Store in the provided pouch. Avoid contact with water, perfume, and lotions. Gently wipe with a soft cloth after each wear.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    images: [
      { alt: 'Majestic Flora Nectar necklace front view', imgId: 'majestic-flora-1-e5f6' },
      { alt: 'Majestic Flora Nectar necklace detail', imgId: 'majestic-flora-2-g7h8' },
    ],
    variants: ['Gold', 'Silver'],
    details: 'A breathtaking necklace featuring multicolor floral crystals set in 18K gold plating. Each petal catches the light beautifully, creating a garden of sparkle around your neckline.',
    care: 'Store in the provided jewelry box. Remove before swimming or exercising. Clean gently with a microfiber cloth.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    images: [
      { alt: 'Golden Sphere Huggies front view', imgId: 'golden-sphere-1-i9j0' },
      { alt: 'Golden Sphere Huggies on ear', imgId: 'golden-sphere-2-k1l2' },
    ],
    variants: ['Gold', 'Silver'],
    details: 'Chunky dome huggie earrings in 18K gold plating. These bold yet lightweight huggies sit snugly on the ear, making them perfect for everyday wear or stacking.',
    care: 'Store in the provided pouch. Avoid contact with water and chemicals. Wipe gently with a soft cloth.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 156,
    images: [
      { alt: 'Amber Lace Earrings front view', imgId: 'amber-lace-1-m3n4' },
      { alt: 'Amber Lace Earrings side view', imgId: 'amber-lace-2-o5p6' },
    ],
    variants: ['Gold', 'Silver'],
    details: 'Intricate filigree drop earrings with a textured gold finish. The delicate lace-like pattern catches light from every angle, creating an ethereal, romantic silhouette.',
    care: 'Store flat in the provided box. Handle with care to preserve the filigree detail. Avoid contact with perfumes and lotions.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 67,
    images: [
      { alt: 'Royal Heirloom Set complete view', imgId: 'royal-heirloom-1-q7r8' },
      { alt: 'Royal Heirloom Set gift box', imgId: 'royal-heirloom-2-s9t0' },
    ],
    variants: ['Gold', 'Silver'],
    details: 'A luxurious matching set featuring elegant drop earrings and a coordinating pendant necklace. Arrives in a premium gift box, making it the perfect present for someone special — or yourself.',
    care: 'Store each piece separately in the provided pouches. Avoid contact with water, perfume, and lotions. Polish gently with a soft cloth.',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Statement & everyday elegance',
    imgId: 'cat-earrings-u1v2',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layered & pendant styles',
    imgId: 'cat-necklaces-w3x4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Snug-fit & stackable',
    imgId: 'cat-huggies-y5z6',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they still look brand new after months.',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a gift and the presentation was stunning. My sister absolutely loved it. Will definitely be back for more.',
  },
  {
    id: 3,
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally, jewelry that looks luxurious without the luxury price tag. The Amber Lace Earrings get me compliments every time I wear them.',
  },
];

export const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2', titleId: 'ugc-title-1', descId: 'ugc-desc-1' },
  { id: 'ugc-2', caption: 'Stacked huggies', imgId: 'ugc-reel-2-c3d4', titleId: 'ugc-title-2', descId: 'ugc-desc-2' },
  { id: 'ugc-3', caption: 'Date night look', imgId: 'ugc-reel-3-e5f6', titleId: 'ugc-title-3', descId: 'ugc-desc-3' },
  { id: 'ugc-4', caption: 'Gift unboxing', imgId: 'ugc-reel-4-g7h8', titleId: 'ugc-title-4', descId: 'ugc-desc-4' },
  { id: 'ugc-5', caption: 'Layered necklaces', imgId: 'ugc-reel-5-i9j0', titleId: 'ugc-title-5', descId: 'ugc-desc-5' },
  { id: 'ugc-6', caption: 'Office to evening', imgId: 'ugc-reel-6-k1l2', titleId: 'ugc-title-6', descId: 'ugc-desc-6' },
];
