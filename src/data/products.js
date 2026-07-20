const svg = (w, h, c1, c2) =>
  'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs><rect fill="url(#g)" width="${w}" height="${h}"/></svg>`);

const img300 = (c1, c2) => svg(300, 400, c1, c2);
const img600 = (c1, c2) => svg(600, 800, c1, c2);

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description:
      'A luminous gold ear cuff adorned with a single faceted crystal accent. Designed to wrap elegantly around the ear, this piece catches light from every angle. Wear it solo for a modern statement or layer with studs for a curated look.',
    materials: '18K gold plated brass, Austrian crystal',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided velvet pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { tone: 'Gold', color: '#D4A843' },
      { tone: 'Silver', color: '#C0C0C0' },
    ],
    images: [img300('#D4C9B8', '#A88C6F'), img300('#C9BFB1', '#9B8568'), img600('#C4B499', '#8B7355')],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description:
      'A breathtaking floral necklace featuring multicolor crystal petals set in warm gold. Each bloom is hand-finished for a one-of-a-kind shimmer. Suspended on an adjustable chain, it sits perfectly at the collarbone.',
    materials: '18K gold plated brass, multicolor Austrian crystals',
    care: 'Avoid water and chemicals. Store flat in pouch. Polish gently with provided cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { tone: 'Gold', color: '#D4A843' },
      { tone: 'Silver', color: '#C0C0C0' },
    ],
    images: [img300('#DDD5C5', '#B8A88A'), img300('#D4C9B8', '#A89880'), img600('#C9BFB1', '#9B8568')],
    badge: null,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 203,
    description:
      'Chunky gold dome huggies that hug the earlobe with effortless elegance. The rounded silhouette is both bold and wearable — perfect for everyday polish. Snap closure ensures a secure, seamless fit.',
    materials: '18K gold plated stainless steel, hypoallergenic',
    care: 'Water-resistant but not waterproof. Remove before swimming or showering. Wipe clean with a dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { tone: 'Gold', color: '#D4A843' },
      { tone: 'Silver', color: '#C0C0C0' },
    ],
    images: [img300('#C4B499', '#9B8568'), img300('#B8A88A', '#8B7355'), img600('#D4C9B8', '#A88C6F')],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    description:
      'Textured gold filigree drops inspired by vintage lacework. These earrings sway softly with movement, revealing intricate detailing. Lightweight and comfortable for all-day wear, they transition beautifully from day to evening.',
    materials: '18K gold plated brass, hand-finished filigree',
    care: 'Delicate piece — handle with care. Avoid moisture. Store separately to prevent scratching.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { tone: 'Gold', color: '#D4A843' },
    ],
    images: [img300('#B8A88A', '#8B7355'), img300('#C4B499', '#A88C6F'), img600('#D4C9B8', '#9B8568')],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description:
      'A gift-boxed set pairing a delicate chain necklace with matching stud earrings. Both pieces feature a signature faceted gemstone in a classic bezel setting. Presented in a velvet-lined box, ready for gifting.',
    materials: '18K gold plated brass, faceted cubic zirconia',
    care: 'Store in the gift box when not worn. Avoid contact with water, perfume, and harsh chemicals.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { tone: 'Gold', color: '#D4A843' },
      { tone: 'Silver', color: '#C0C0C0' },
    ],
    images: [img300('#A89880', '#7A6450'), img300('#B8A88A', '#8B7355'), img600('#C4B499', '#9B8568')],
    badge: 'Gift Set',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Claire',
    initial: 'M',
    text: 'Absolutely stunning quality. The gold has a beautiful warm tone that looks far more expensive than it is. My go-to for gifts now.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia',
    initial: 'R',
    text: 'I wear my Golden Sphere Huggies every single day — no tarnishing, no irritation. Just effortless elegance.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Natalie',
    initial: 'K',
    text: 'The packaging alone feels like a luxury experience. I bought the Royal Heirloom Set for my sister and she cried. Will be back for myself.',
    rating: 5,
  },
];

export const ugcPosts = [
  {
    id: 1,
    caption: 'Everyday sparkle',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    caption: 'Golden hour details',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 3,
    caption: 'Layered elegance',
    product: 'Majestic Flora Nectar',
  },
  {
    id: 4,
    caption: 'Day to night',
    product: 'Amber Lace Earrings',
  },
  {
    id: 5,
    caption: 'Gift-ready',
    product: 'Royal Heirloom Set',
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug) || null;

export const getRelatedProducts = (product, count = 4) =>
  products.filter((p) => p.id !== product.id).slice(0, count);
