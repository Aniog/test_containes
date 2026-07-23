export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff with a luminous crystal accent. Designed to catch the light with every movement — no piercing required.',
    materials: '18K gold-plated brass, cubic zirconia crystal, nickel-free and hypoallergenic.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express 2–4 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    images: 3,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate multicolor floral crystal necklace that brings garden elegance to every neckline. Hand-set crystals on a fine cable chain.',
    materials: '18K gold-plated brass, hand-set glass crystals, lobster clasp closure.',
    care: 'Keep away from moisture and chemicals. Store flat to prevent tangling.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express 2–4 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    images: 3,
    variants: ['Gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 211,
    description:
      'Chunky gold dome huggie earrings with a smooth, mirror-polish finish. The perfect everyday statement in a petite silhouette.',
    materials: '18K gold-plated stainless steel, hinged huggie closure, water-resistant coating.',
    care: 'Safe for occasional water exposure. Dry thoroughly after contact with water.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express 2–4 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    images: 3,
    variants: ['Gold', 'Silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviewCount: 76,
    description:
      'Textured gold filigree drop earrings inspired by antique lacework. Lightweight and dramatic, they frame the face beautifully.',
    materials: '18K gold-plated brass, intricate filigree casting, shepherd hook closure.',
    care: 'Handle with care to preserve delicate filigree detail. Store in provided pouch.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days. Express 2–4 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    images: 3,
    variants: ['Gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 53,
    description:
      'A curated gift-boxed set featuring a matching pair of earrings and a delicate pendant necklace. Ready to give, unforgettable to receive.',
    materials: '18K gold-plated brass, cubic zirconia accents, premium gift box with ribbon.',
    care: 'Store in gift box when not in use. Avoid direct contact with perfumes and oils.',
    shipping: 'Free worldwide shipping. Standard delivery 5–10 business days. Express 2–4 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    images: 3,
    variants: ['Gold'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const categories = [
  { id: 'earrings', name: 'Earrings', imageQuery: 'gold earrings jewelry on model ear closeup warm light editorial' },
  { id: 'necklaces', name: 'Necklaces', imageQuery: 'gold necklace jewelry on neck closeup warm light editorial' },
  { id: 'huggies', name: 'Huggies', imageQuery: 'gold huggie earrings on ear closeup warm light editorial' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The quality exceeded my expectations. These pieces look like they cost three times the price. Already planning my next order.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging alone feels so luxurious.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chloe T.',
    text: 'I wear my Golden Sphere Huggies every single day. They are comfortable, tarnish-free, and go with everything.',
    rating: 5,
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday glow ✨', query: 'gold huggie earrings woman ear selfie warm' },
  { id: 2, caption: 'Layered & loved', query: 'gold layered necklaces woman neck closeup warm' },
  { id: 3, caption: 'Date night ready', query: 'gold drop earrings woman ear closeup evening warm' },
  { id: 4, caption: 'Minimal mood', query: 'gold stud earrings woman ear closeup minimal warm' },
  { id: 5, caption: 'Gifted to myself', query: 'gold jewelry gift box unboxing warm' },
  { id: 6, caption: 'Stacked up', query: 'gold ear cuff stacked earrings woman ear closeup warm' },
];
