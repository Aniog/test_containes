/**
 * Seed product data for Velmora Fine Jewelry.
 * Images use the stock image system via data-strk-img attributes.
 */

export const products = [
  {
    id: 'vivid-aura-ear-cuff',
    slug: 'vivid-aura-ear-cuff',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    metal: 'gold',
    description:
      'A striking gold ear cuff adorned with a prong-set crystal accent. No piercing required — slips on effortlessly for instant edge.',
    details:
      'Handcrafted from 18K gold-plated sterling silver. CZ crystal setting. Nickel-free. Suitable for sensitive skin.',
    care: 'Avoid contact with perfume and water. Store in the included pouch to maintain shine.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express 2–3 business days available at checkout.',
    rating: 4.8,
    reviewCount: 127,
    variants: ['Gold', 'Silver'],
    imgId: 'velmora-vivid-aura-main',
    imgAlt: 'Vivid Aura crystal ear cuff',
    heroRatio: '3x4',
    thumbRatio: '1x1',
    searchQuery: 'gold ear cuff crystal jewelry product photo on dark velvet',
  },
  {
    id: 'majestic-flora-necklace',
    slug: 'majestic-flora-necklace',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    metal: 'gold',
    description:
      'A delicate chain suspends a cluster of multicolor floral crystals — a piece that catches light and turns heads.',
    details:
      '18K gold-plated brass chain, 16" + 2" extender. Hand-set floral CZ crystals. Lobster clasp closure.',
    care: 'Wipe gently with a soft cloth after wearing. Avoid submerging in water.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express 2–3 business days available at checkout.',
    rating: 4.9,
    reviewCount: 84,
    variants: ['Gold', 'Silver'],
    imgId: 'velmora-flora-nectar-main',
    imgAlt: 'Majestic Flora crystal necklace',
    heroRatio: '3x4',
    thumbRatio: '1x1',
    searchQuery: 'gold necklace multicolor floral crystal jewelry closeup',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    metal: 'gold',
    description:
      'Chunky dome huggie earrings in warm 18K gold. The perfect everyday statement — bold but never overdone.',
    details:
      '18K gold-plated sterling silver. 12mm inner diameter. Hinged click closure. Nickel-free.',
    care: 'Store individually to avoid scratching. Polish with a dry jewelry cloth.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express 2–3 business days available at checkout.',
    rating: 4.7,
    reviewCount: 203,
    variants: ['Gold', 'Silver'],
    imgId: 'velmora-sphere-huggies-main',
    imgAlt: 'Golden Sphere chunky huggie earrings',
    heroRatio: '3x4',
    thumbRatio: '1x1',
    searchQuery: 'gold chunky dome huggie earrings jewelry product on dark surface',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    metal: 'gold',
    description:
      'Textured filigree drops that dangle and catch the light with every movement. Inspired by Art Deco elegance.',
    details:
      '18K gold-plated brass with antique finish. 2.5" drop length. Fishhook closure with comfort back.',
    care: 'Keep away from moisture. Buff gently to restore lustre.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express 2–3 business days available at checkout.',
    rating: 4.6,
    reviewCount: 91,
    variants: ['Gold', 'Silver'],
    imgId: 'velmora-amber-lace-main',
    imgAlt: 'Amber Lace filigree drop earrings',
    heroRatio: '3x4',
    thumbRatio: '1x1',
    searchQuery: 'gold filigree drop earrings art deco jewelry on neutral background',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    metal: 'gold',
    description:
      'A curated gift set: our bestselling huggie earrings paired with a matching pendant necklace. Arrives in our signature velvet box.',
    details:
      '18K gold-plated sterling silver. Set includes: Golden Sphere Huggies + 16" pendant chain. Gift-boxed with care card.',
    care: 'Each piece: avoid water, perfume, and chemicals. Wipe after wear.',
    shipping:
      'Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express 2–3 business days available at checkout.',
    rating: 5.0,
    reviewCount: 42,
    variants: ['Gold', 'Silver'],
    imgId: 'velmora-royal-heirloom-main',
    imgAlt: 'Royal Heirloom earring and necklace gift set',
    heroRatio: '3x4',
    thumbRatio: '1x1',
    searchQuery: 'gold jewelry gift set earrings necklace velvet box luxury',
  },
];

export const categories = [
  { id: 'earrings',  label: 'Earrings',  imgId: 'velmora-cat-earrings'  },
  { id: 'necklaces', label: 'Necklaces', imgId: 'velmora-cat-necklaces' },
  { id: 'huggies',   label: 'Huggies',   imgId: 'velmora-cat-huggies'   },
];

export const getProductsByCategory = (cat) =>
  products.filter((p) => p.category === cat);

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (slug, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit);

export const formatPrice = (n) =>
  `$${n.toFixed(0)}`;

export const starArray = (rating) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return { full, half, empty };
};
