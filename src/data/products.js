export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    description:
      'A stunning gold ear cuff adorned with a luminous crystal accent. Designed to catch the light from every angle, this piece brings effortless edge to any look — no piercing required.',
    details:
      'Crafted from 18K gold-plated surgical steel. Crystal detail set by hand. Hypoallergenic and tarnish-resistant. Suitable for sensitive skin.',
    care:
      'Store in the included pouch when not wearing. Avoid contact with water, perfume, and harsh chemicals. Clean gently with a soft cloth.',
    shipping:
      'Free worldwide shipping. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviewCount: 124,
    bestseller: true,
    imgQuery: 'gold ear cuff crystal accent jewelry on dark velvet background',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    description:
      'A multicolor floral crystal necklace inspired by the beauty of a blooming garden. Each petal-shaped crystal is carefully set to create a dazzling cascade of color and light.',
    details:
      '18K gold-plated brass chain with lobster clasp. Hand-set multicolor crystal floral stations. Adjustable length 16–18 inches. Nickel-free and hypoallergenic.',
    care:
      'Remove before showering or swimming. Wipe clean with a lint-free cloth after each wear. Store flat in the provided jewelry box.',
    shipping:
      'Free worldwide shipping. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 89,
    bestseller: true,
    imgQuery: 'multicolor floral crystal necklace gold chain jewelry on dark background',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    description:
      'Chunky gold dome huggie earrings that hug the earlobe with sculptural elegance. A modern classic that transitions seamlessly from day to night.',
    details:
      '18K gold-plated surgical steel with click-lock closure. Dome width: 12mm. Lightweight despite bold appearance. Hypoallergenic and suitable for daily wear.',
    care:
      'Wipe with a soft jewelry cloth after each wear. Avoid moisture and chemical exposure. Store individually to prevent scratching.',
    shipping:
      'Free worldwide shipping. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 203,
    bestseller: true,
    imgQuery: 'chunky gold dome huggie earrings on dark velvet background',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    description:
      'Textured gold filigree drop earrings inspired by delicate lacework. Each pair features intricate openwork that catches the light, creating a warm, amber glow with every movement.',
    details:
      '18K gold-plated brass with French wire hook. Filigree drop length: 45mm. Hand-finished texture. Lightweight and comfortable for all-day wear.',
    care:
      'Store in a dry place away from humidity. Clean with a soft dry cloth. Avoid contact with perfume, lotions, and water.',
    shipping:
      'Free worldwide shipping. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: ['Gold', 'Silver'],
    rating: 4.6,
    reviewCount: 67,
    bestseller: true,
    imgQuery: 'gold filigree lace drop earrings jewelry on dark background',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'earrings',
    material: '18K Gold Plated',
    description:
      'A curated gift-boxed set featuring coordinating earrings and necklace. The perfect present for someone special — or a well-deserved treat for yourself.',
    details:
      'Includes: 1x matching earring pair + 1x pendant necklace. 18K gold-plated surgical steel. Presented in a signature Velmora gift box with velvet lining. Hypoallergenic.',
    care:
      'Store pieces separately in the included gift box. Clean gently with a soft cloth. Avoid water, perfume, and chemical exposure.',
    shipping:
      'Free worldwide shipping. Delivered in 3–7 business days. 30-day hassle-free returns and exchanges.',
    variants: ['Gold', 'Silver'],
    rating: 5.0,
    reviewCount: 42,
    bestseller: true,
    imgQuery: 'luxury gold jewelry gift set earring necklace box on dark background',
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
];

export const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
