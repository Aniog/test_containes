export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: 'gold',
    price: 42,
    description:
      'A sculptural gold ear cuff with a radiant crystal accent. Effortlessly modern, designed to catch light from every angle.',
    details: {
      dimensions: '1.2" drop',
      closure: 'Hinge clip-on',
      material: '18K Gold Plated over Brass',
      stones: 'Swarovski crystal',
      care: 'Avoid water, lotions, and perfumes. Store in a dry pouch.',
    },
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&auto=format&fit=crop',
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'gold',
    price: 68,
    description:
      'A delicate floral pendant necklace featuring multicolor crystal blooms. Romantic, artful, and endlessly versatile.',
    details: {
      length: '16" + 2" extender',
      closure: 'Lobster clasp',
      material: '18K Gold Plated over Brass',
      stones: 'Multicolor cubic zirconia',
      care: 'Gently clean with a soft cloth. Keep away from harsh chemicals.',
    },
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop',
    ],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    material: 'gold',
    price: 38,
    description:
      'Chunky gold dome huggies with a polished finish. A modern essential that transitions from desk to dinner.',
    details: {
      diameter: '15mm hoops',
      closure: 'Hinge click',
      material: '18K Gold Plated over Brass',
      care: 'Remove before swimming or showering. Polish with a jewelry cloth.',
    },
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&auto=format&fit=crop',
    ],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'gold',
    price: 54,
    description:
      'Intricate gold filigree drop earrings with a warm amber glow. Heirloom-quality craftsmanship for the modern woman.',
    details: {
      length: '2.5" drop',
      closure: 'French wire',
      material: '18K Gold Plated over Brass',
      care: 'Store flat to preserve shape. Clean with a dry, soft cloth.',
    },
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop',
    ],
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    material: 'gold',
    price: 95,
    description:
      'A perfectly paired earring and necklace set in a keepsake gift box. The ultimate self-gift or sentimental present.',
    details: {
      set: '1 pair earrings + 1 necklace',
      material: '18K Gold Plated over Brass',
      packaging: 'Velvet-lined gift box',
      care: 'Keep pieces separate to avoid scratching. Wipe with a soft cloth.',
    },
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop',
    ],
    rating: 5.0,
    reviews: 42,
  },
];

export const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop' },
];

export const TESTIMONIALS = [
  {
    name: 'Sophia M.',
    rating: 5,
    text: 'The quality is stunning for the price. I receive compliments every time I wear my Vivid Aura ear cuff.',
  },
  {
    name: 'Elena R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for myself after a promotion. It arrived in the most beautiful packaging.',
  },
  {
    name: 'Claire D.',
    rating: 5,
    text: 'Finally, jewelry that doesn\'t tarnish after three wears. The Golden Sphere Huggies are my everyday staple.',
  },
];

export const UGC_ITEMS = [
  { id: 'ugc-1', caption: 'Daily staple', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop' },
  { id: 'ugc-2', caption: 'Gift for mom', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop' },
  { id: 'ugc-3', caption: 'Date night look', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&auto=format&fit=crop' },
  { id: 'ugc-4', caption: 'Office elegance', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop' },
  { id: 'ugc-5', caption: 'Weekend glow', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop' },
  { id: 'ugc-6', caption: 'Bridal prep', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&auto=format&fit=crop' },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(productId, limit = 4) {
  return PRODUCTS.filter((p) => p.id !== productId).slice(0, limit);
}