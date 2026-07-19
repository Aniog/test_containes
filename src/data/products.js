export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff with a single luminous crystal accent. Designed to hug the ear without piercing, it catches candlelight beautifully and layers effortlessly with your favorite studs.',
    materials: 'Brass base with 18k gold plating. Nickel-free and hypoallergenic. Adorned with a faceted cubic zirconia crystal.',
    care: 'Avoid contact with perfume, lotion, and water. Store in the included Velmora pouch and polish gently with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–7 business days. Express available at checkout.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    imgId: 'product-vivid-aura-jewels',
    titleId: 'product-title-vivid-aura-jewels',
    descId: 'product-desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate collar necklace blooming with multicolor floral crystals. Each petal is handset for a vintage-garden feel that elevates everything from a white tee to an evening slip dress.',
    materials: 'Brass base with 18k gold plating. Handset enamel and crystal blossoms. Lobster clasp with 2-inch extender.',
    care: 'Lay flat to store. Avoid moisture and direct sunlight for prolonged periods.',
    shipping: 'Complimentary gift box included. Free worldwide shipping on orders over $50.',
    returns: '30-day returns or exchanges. Gift recipients can exchange for store credit.',
    imgId: 'product-majestic-flora-nectar',
    titleId: 'product-title-majestic-flora-nectar',
    descId: 'product-desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold-plated',
    rating: 4.7,
    reviewCount: 215,
    description: 'Chunky dome huggies with a polished molten-gold finish. Substantial enough to make a statement, light enough for all-day wear.',
    materials: 'Brass base with thick 18k gold plating. Stainless steel post. Nickel-free and hypoallergenic.',
    care: 'Wipe after wear. Keep dry and store away from other jewelry to prevent scratches.',
    shipping: 'Ships within 1 business day. Free worldwide delivery on orders over $50.',
    returns: 'Full refund within 30 days if unworn.',
    imgId: 'product-golden-sphere-huggies',
    titleId: 'product-title-golden-sphere-huggies',
    descId: 'product-desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold-plated',
    rating: 4.9,
    reviewCount: 76,
    description: 'Textured gold filigree drops inspired by antique lace. The warm metallic weave moves gently, framing the face with soft golden light.',
    materials: 'Brass base with 18k gold plating. Intricate openwork detailing. Surgical steel posts.',
    care: 'Handle with care to preserve delicate filigree. Store flat in provided pouch.',
    shipping: 'Gift-ready packaging. Free shipping over $50.',
    returns: '30-day returns. Please retain original packaging.',
    imgId: 'product-amber-lace-earrings',
    titleId: 'product-title-amber-lace-earrings',
    descId: 'product-desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: '18k-gold-plated',
    rating: 5.0,
    reviewCount: 42,
    description: 'A curated gift set of coordinating earrings and necklace, presented in a signature Velmora box. The perfect ready-to-give treasure for birthdays, anniversaries, or just because.',
    materials: 'Brass base with 18k gold plating. Necklace and earring set with matching crystal accents. Includes Velmora gift box and care card.',
    care: 'Store in the included box. Avoid water and harsh chemicals.',
    shipping: 'Complimentary priority shipping. Arrives in a Velmora gift box with a handwritten note option at checkout.',
    returns: 'Gift sets may be returned within 30 days in original condition.',
    imgId: 'product-royal-heirloom-set',
    titleId: 'product-title-royal-heirloom-set',
    descId: 'product-desc-royal-heirloom-set',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(currentId, count = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, count);
}

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
];

export const materials = [
  { id: '18k-gold-plated', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
];
