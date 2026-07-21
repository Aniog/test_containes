// Elegant warm gold-tone SVG placeholder with subtle grain effect
const img = (hue) =>
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><defs><radialGradient id="g" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#f5e6d3"/><stop offset="50%" stop-color="#d4a853"/><stop offset="100%" stop-color="#1a1a1a"/></radialGradient></defs><rect width="600" height="800" fill="url(#g)"/></svg>`
  );

const products = [
  {
    id: 'vivid-aura',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: 'An elevated everyday essential. This sculptural ear cuff wraps the ear in 18K gold-plated brass, punctuated by a single faceted crystal that catches light with every turn of the head.',
    materials: '18K gold-plated brass, Austrian crystal',
    care: 'Avoid contact with water and perfume. Store in the provided velvet pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [img('a'), img('b'), img('c')],
    isBestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description: 'Inspired by wildflower meadows at golden hour. A cascade of multi-toned crystal petals arranged along a delicate 18K gold-plated chain. Each bloom is hand-set for an organic, one-of-a-kind shimmer.',
    materials: '18K gold-plated brass, multicolor crystals',
    care: 'Avoid contact with water and perfume. Store flat in the provided velvet pouch. Clean crystals with a dry microfiber cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [img('d'), img('e'), img('f')],
    isBestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'golden-sphere',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 203,
    description: 'The perfect everyday huggie, reimagined. Chunky domed spheres in warm 18K gold-plating create a bold yet wearable silhouette. Designed to be worn solo or stacked for a curated ear look.',
    materials: '18K gold-plated brass',
    care: 'Avoid contact with water and perfume. Store in the provided velvet pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [img('g'), img('h'), img('i')],
    isBestseller: true,
    badge: null,
  },
  {
    id: 'amber-lace',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    description: 'Vintage romance meets modern craftsmanship. Intricate gold filigree drops cascade in a lace-like pattern, catching the light with every movement. Lightweight enough for all-day wear, striking enough for evening.',
    materials: '18K gold-plated brass, textured filigree finish',
    care: 'Avoid contact with water and perfume. Store in the provided velvet pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [img('j'), img('k'), img('l')],
    isBestseller: true,
    badge: null,
  },
  {
    id: 'royal-heirloom',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description: 'The ultimate gifting piece. A coordinated duo of our signature earrings and pendant necklace, presented in a velvet-lined gift box with a handwritten-style note card. An instant heirloom.',
    materials: '18K gold-plated brass, crystal accents, gift box included',
    care: 'Avoid contact with water and perfume. Store in the provided gift box. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [img('m'), img('n'), img('o')],
    isBestseller: true,
    badge: 'Gift Set',
  },
];

export const bestsellers = products.filter(p => p.isBestseller);

export default products;
