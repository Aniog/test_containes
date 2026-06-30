export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    description: 'A sculptural gold ear cuff adorned with delicate crystal accents that catch the light with every movement. Designed for effortless elegance — no piercing required.',
    care: '18K gold-plated brass. Avoid contact with water, perfumes, and lotions. Store in a dry pouch. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express available at checkout.',
    rating: 4.8,
    reviews: 124,
    images: 3,
    tone: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    description: 'A statement necklace featuring hand-set multicolor floral crystals suspended on a fine gold chain. The perfect centerpiece for any ensemble.',
    care: '18K gold-plated brass with glass crystals. Avoid moisture and harsh chemicals. Store flat to prevent tangling.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express available at checkout.',
    rating: 4.9,
    reviews: 89,
    images: 3,
    tone: ['gold'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    description: 'Chunky dome huggie earrings with a polished mirror finish. Bold yet wearable, these huggies transition seamlessly from day to night.',
    care: '18K gold-plated surgical steel posts. Hypoallergenic and nickel-free. Wipe clean after wear.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express available at checkout.',
    rating: 4.7,
    reviews: 203,
    images: 3,
    tone: ['gold', 'silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    description: 'Intricate filigree drop earrings inspired by vintage lace patterns. Lightweight and full of movement, they frame the face beautifully.',
    care: '18K gold-plated brass. Handle with care to protect delicate filigree. Store in provided pouch.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-10 business days. Express available at checkout.',
    rating: 4.6,
    reviews: 67,
    images: 3,
    tone: ['gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    description: 'A curated gift set featuring our signature earrings paired with a matching necklace, presented in a luxe Velmora gift box. The ultimate self-gift or surprise for someone special.',
    care: '18K gold-plated brass. Includes care card and polishing cloth. Store pieces separately to prevent scratching.',
    shipping: 'Complimentary express worldwide shipping. Arrives in a signature gift box within 3-5 business days.',
    rating: 5.0,
    reviews: 45,
    images: 3,
    tone: ['gold'],
    bestseller: true,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'The quality exceeded my expectations. These pieces look far more expensive than they are — I get compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Rachel K.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Amara T.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that does not irritate my sensitive skin. The huggies are my everyday go-to now.',
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday luxury' },
  { id: 2, caption: 'Gift-worthy moments' },
  { id: 3, caption: 'Stacked & styled' },
  { id: 4, caption: 'Date night glow' },
  { id: 5, caption: 'Morning coffee chic' },
  { id: 6, caption: 'Weekend brunch' },
];

export const categoryTiles = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug, limit = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, limit);
}

export function getBestsellers() {
  return products.filter((p) => p.bestseller);
}
