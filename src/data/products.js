const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    subcategory: 'Ear Cuffs',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural ear cuff with a single luminous crystal accent, designed to catch the light with every movement. No piercing required.',
    details:
      '18K gold-plated brass with a single cubic zirconia accent. Adjustable fit for most ear sizes. Sold as a single.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: ['vivid-aura-1', 'vivid-aura-2', 'vivid-aura-3'],
    tags: ['bestseller', 'new'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    subcategory: 'Pendant',
    material: 'gold',
    rating: 5.0,
    reviewCount: 89,
    description:
      'A delicate floral pendant strung with multicolor crystal accents. A romantic statement piece inspired by nature in full bloom.',
    details:
      '18K gold-plated pendant on a 45cm chain with 5cm extender. Features hand-set crystals in rose, amber, and clear tones.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: ['majestic-flora-1', 'majestic-flora-2', 'majestic-flora-3'],
    tags: ['bestseller'],
    variants: ['Gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'earrings',
    subcategory: 'Huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 211,
    description:
      'Chunky domed huggies with a polished, mirror-like finish. An everyday essential that adds quiet dimension to your ear stack.',
    details:
      '18K gold-plated brass with a high-polish finish. 12mm diameter. Snap-back closure. Sold as a pair.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: ['golden-sphere-1', 'golden-sphere-2', 'golden-sphere-3'],
    tags: ['bestseller'],
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    subcategory: 'Drop',
    material: 'gold',
    rating: 4.9,
    reviewCount: 67,
    description:
      'Textured filigree drop earrings with a warm amber glow. The intricate lace-like metalwork is hand-finished for a vintage heirloom feel.',
    details:
      '18K gold-plated brass with an open filigree design. 3.5cm drop length. French hook closure. Sold as a pair.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided Velmora pouch. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: ['amber-lace-1', 'amber-lace-2', 'amber-lace-3'],
    tags: [],
    variants: ['Gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    subcategory: 'Gift Set',
    material: 'gold',
    rating: 5.0,
    reviewCount: 43,
    description:
      'A gift-boxed earring and necklace duo — the complete Velmora experience. A timeless set crafted for gifting and treasured for a lifetime.',
    details:
      '18K gold-plated necklace (45cm + 5cm extender) and matching stud earrings. Presented in a signature Velmora gift box with ribbon.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided Velmora gift box. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: ['royal-heirloom-1', 'royal-heirloom-2', 'royal-heirloom-3'],
    tags: ['bestseller', 'gift'],
    variants: ['Gold'],
  },
]

export default products

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', imgId: 'cat-earrings-a1b2c3' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', imgId: 'cat-necklaces-d4e5f6' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', imgId: 'cat-huggies-g7h8i9' },
]

export const testimonials = [
  {
    name: 'Catherine',
    initial: 'M.',
    text: 'The quality is exceptional — even more beautiful than the photos. The earrings feel weighty and luxurious. My new go-to brand for gifts.',
    rating: 5,
  },
  {
    name: 'Nicole',
    initial: 'R.',
    text: 'I bought the Golden Sphere Huggies for everyday wear and I am obsessed. They pair perfectly with everything. The gold tone is spot on.',
    rating: 5,
  },
  {
    name: 'Sophia',
    initial: 'L.',
    text: 'The packaging alone made me feel special before I even opened the box. The Royal Heirloom Set is stunning. Worth every penny.',
    rating: 5,
  },
]