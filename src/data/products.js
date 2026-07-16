const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviews: 124,
    description:
      'A striking crystal-accented ear cuff that wraps the ear in luminous elegance. Crafted from 18K gold-plated brass with a radiant micro-pavé crystal accent that catches light from every angle.',
    materials: '18K gold-plated brass, cubic zirconia crystals',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Delivered within 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { id: 'vivid-aura-gold', label: 'Gold', tone: 'gold' },
      { id: 'vivid-aura-silver', label: 'Silver', tone: 'silver' },
    ],
    images: [
      { id: 'vivid-aura-1', ratio: '4x3', width: 600 },
      { id: 'vivid-aura-2', ratio: '4x3', width: 600 },
      { id: 'vivid-aura-3', ratio: '4x3', width: 600 },
    ],
    thumbnailId: 'vivid-aura-thumb',
    hoverId: 'vivid-aura-hover',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviews: 89,
    description:
      'A breathtaking floral-inspired necklace featuring multicolor crystal petals set in a delicate gold chain. Each bloom is meticulously hand-set by artisans for a luminous, heirloom-quality finish.',
    materials: '18K gold-plated brass, multicolor Swarovski crystals',
    care: 'Keep away from moisture, cosmetics, and harsh chemicals. Clean with a dry soft cloth. Store flat in your Velmora pouch.',
    shipping: 'Free worldwide shipping on all orders. Delivered within 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { id: 'flora-gold', label: 'Gold', tone: 'gold' },
      { id: 'flora-silver', label: 'Silver', tone: 'silver' },
    ],
    images: [
      { id: 'flora-1', ratio: '4x3', width: 600 },
      { id: 'flora-2', ratio: '4x3', width: 600 },
      { id: 'flora-3', ratio: '4x3', width: 600 },
    ],
    thumbnailId: 'flora-thumb',
    hoverId: 'flora-hover',
    titleId: 'prod-flora-title',
    descId: 'prod-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviews: 201,
    description:
      'Chunky domed huggie earrings with a sculptural silhouette. These everyday staples deliver a bold, modern look while remaining effortlessly lightweight and comfortable for all-day wear.',
    materials: '18K gold-plated brass with polished finish',
    care: 'Remove before showering or swimming. Store separately to avoid scratches. Buff gently with a polishing cloth.',
    shipping: 'Free worldwide shipping on all orders. Delivered within 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { id: 'huggies-gold', label: 'Gold', tone: 'gold' },
      { id: 'huggies-silver', label: 'Silver', tone: 'silver' },
    ],
    images: [
      { id: 'huggies-1', ratio: '4x3', width: 600 },
      { id: 'huggies-2', ratio: '4x3', width: 600 },
      { id: 'huggies-3', ratio: '4x3', width: 600 },
    ],
    thumbnailId: 'huggies-thumb',
    hoverId: 'huggies-hover',
    titleId: 'prod-huggies-title',
    descId: 'prod-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    rating: 4.6,
    reviews: 67,
    description:
      'Textured gold filigree drop earrings with a vintage-inspired lacework pattern. Lightweight and dramatic, these earrings frame the face with warm, amber-kissed radiance.',
    materials: '18K gold-plated brass with textured filigree finish',
    care: 'Handle delicately. Avoid bending or dropping. Store in your Velmora pouch. Clean with a dry microfiber cloth.',
    shipping: 'Free worldwide shipping on all orders. Delivered within 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { id: 'amber-gold', label: 'Gold', tone: 'gold' },
      { id: 'amber-silver', label: 'Silver', tone: 'silver' },
    ],
    images: [
      { id: 'amber-1', ratio: '4x3', width: 600 },
      { id: 'amber-2', ratio: '4x3', width: 600 },
      { id: 'amber-3', ratio: '4x3', width: 600 },
    ],
    thumbnailId: 'amber-thumb',
    hoverId: 'amber-hover',
    titleId: 'prod-amber-title',
    descId: 'prod-amber-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    rating: 5.0,
    reviews: 43,
    description:
      'A beautifully gift-boxed earring and necklace set destined to become a treasured keepsake. Featuring matching crystal-studded pendants on a refined chain with coordinating drop earrings.',
    materials: '18K gold-plated brass, cubic zirconia crystals. Gift box included.',
    care: 'Store in the provided gift box. Keep away from moisture and direct sunlight. Polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Delivered within 5–10 business days. 30-day hassle-free returns.',
    variants: [
      { id: 'heirloom-gold', label: 'Gold', tone: 'gold' },
      { id: 'heirloom-silver', label: 'Silver', tone: 'silver' },
    ],
    images: [
      { id: 'heirloom-1', ratio: '4x3', width: 600 },
      { id: 'heirloom-2', ratio: '4x3', width: 600 },
      { id: 'heirloom-3', ratio: '4x3', width: 600 },
    ],
    thumbnailId: 'heirloom-thumb',
    hoverId: 'heirloom-hover',
    titleId: 'prod-heirloom-title',
    descId: 'prod-heirloom-desc',
  },
];

export { products };
export default products;

export const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

export const testimonials = [
  {
    name: 'Sophia L.',
    text: 'The quality is honestly stunning — I reach for my Golden Sphere Huggies every single day. They instantly elevate any outfit.',
    rating: 5,
  },
  {
    name: 'Claire M.',
    text: 'Ordered the Majestic Flora Nectar for a wedding and received so many compliments. The packaging alone feels like a gift.',
    rating: 5,
  },
  {
    name: 'Naomi R.',
    text: 'I was searching for demi-fine pieces that strike the balance between luxury and everyday wear. Velmora absolutely delivers.',
    rating: 5,
  },
];

export const ugcReels = [
  { id: 'ugc-1', caption: 'Golden hour glow ✨', productId: 'golden-sphere-huggies' },
  { id: 'ugc-2', caption: 'Weekend stack', productId: 'vivid-aura-jewels' },
  { id: 'ugc-3', caption: 'Date night details', productId: 'majestic-flora-nectar' },
  { id: 'ugc-4', caption: 'Everyday elegance', productId: 'amber-lace-earrings' },
  { id: 'ugc-5', caption: 'Gift ready', productId: 'royal-heirloom-set' },
];
