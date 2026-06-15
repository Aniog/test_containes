export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    description: 'A bold yet refined gold ear cuff adorned with a sparkling crystal accent. Designed to catch the light and turn heads — no piercing required for the cuff.',
    longDescription: 'Crafted from premium 18K gold-plated sterling silver, the Vivid Aura Jewels ear cuff brings effortless edge to any look. The crystal accent adds just the right amount of sparkle. Wear it solo for minimalist drama or stack with your favorite studs.',
    care: 'Store in the included pouch. Avoid contact with perfume and water. Gently wipe with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping. Delivered in 5-8 business days. 30-day hassle-free returns.',
    rating: 4.8,
    reviewCount: 127,
    variants: [
      { name: 'Gold', color: '#b8956a' },
      { name: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    description: 'A multicolor floral crystal necklace that blooms at the collarbone. A statement piece that feels like wearing a garden.',
    longDescription: 'Inspired by wildflower meadows, the Majestic Flora Nectar features hand-set multicolor crystals arranged in a delicate floral pattern. The 18K gold-plated chain sits beautifully at the collarbone, creating a luminous focal point for any neckline.',
    care: 'Clasp the necklace before storing to prevent tangling. Keep away from moisture and chemicals. Polish gently with the included cloth.',
    shipping: 'Free worldwide shipping. Delivered in 5-8 business days. 30-day hassle-free returns.',
    rating: 4.9,
    reviewCount: 89,
    variants: [
      { name: 'Gold', color: '#b8956a' },
      { name: 'Rose Gold', color: '#d4a574' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    description: 'Chunky gold dome huggie earrings that hug your earlobes with sculptural warmth. The perfect everyday statement.',
    longDescription: 'These dome-shaped huggies are our most-loved everyday earrings. The polished 18K gold-plated finish creates a liquid-metal effect that flatters every skin tone. The click-in closure ensures a secure, comfortable fit all day long.',
    care: 'Wipe gently after each wear. Store individually to prevent scratching. Remove before swimming or showering.',
    shipping: 'Free worldwide shipping. Delivered in 5-8 business days. 30-day hassle-free returns.',
    rating: 4.7,
    reviewCount: 214,
    variants: [
      { name: 'Gold', color: '#b8956a' },
      { name: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Most Loved',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    description: 'Textured gold filigree drop earrings that dance with every movement. Artisan-inspired elegance for day or evening.',
    longDescription: 'The Amber Lace Earrings feature intricate filigree work inspired by vintage lace patterns. Each pair is carefully crafted with 18K gold plating over sterling silver, creating a lightweight yet substantial feel. The drop silhouette elongates the neck beautifully.',
    care: 'Store flat in the provided jewelry box. Avoid pulling or bending the filigree. Clean with a dry soft brush.',
    shipping: 'Free worldwide shipping. Delivered in 5-8 business days. 30-day hassle-free returns.',
    rating: 4.6,
    reviewCount: 63,
    variants: [
      { name: 'Gold', color: '#b8956a' },
      { name: 'Rose Gold', color: '#d4a574' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    material: '18K Gold Plated',
    description: 'A luxurious gift-boxed set featuring coordinating earrings and necklace. The ultimate gesture of elegance.',
    longDescription: 'Presented in our signature velvet-lined gift box, the Royal Heirloom Set pairs our bestselling hoop earrings with a delicate chain necklace featuring a matching pendant. Perfect for gifting or treating yourself to a complete look. Both pieces are crafted from 18K gold-plated hypoallergenic sterling silver.',
    care: 'Each piece should be stored separately in the gift box compartments. Clean gently with the included polishing cloth.',
    shipping: 'Free worldwide shipping. Delivered in 5-8 business days. 30-day hassle-free returns.',
    rating: 5.0,
    reviewCount: 45,
    variants: [
      { name: 'Gold', color: '#b8956a' },
      { name: 'Silver', color: '#c0c0c0' },
    ],
    badge: 'Gift Set',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
]

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 49.99 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75.01, max: 9999 },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'I\'ve never received so many compliments on a piece of jewelry. The Golden Sphere Huggies are absolutely stunning — I haven\'t taken them off since they arrived.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Emily R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set for my best friend\'s birthday. The packaging alone made her tear up. The quality is incredible for this price point.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya K.',
    rating: 5,
    text: 'Finally, gold jewelry that doesn\'t tarnish after two weeks. I\'ve been wearing the Amber Lace earrings for months and they still look brand new.',
    product: 'Amber Lace Earrings',
  },
]

export const ugcItems = [
  { id: 1, caption: 'Golden hour glow' },
  { id: 2, caption: 'Stacked and stunning' },
  { id: 3, caption: 'Everyday elegance' },
  { id: 4, caption: 'Gift unwrapping' },
  { id: 5, caption: 'Ear candy' },
  { id: 6, caption: 'Neckline statement' },
]
