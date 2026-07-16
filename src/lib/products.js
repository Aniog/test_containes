export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 127,
    description: 'A striking gold ear cuff adorned with a delicate crystal accent. Designed to catch the light with every movement, this piece adds effortless edge to any look.',
    details: 'Crafted from 18K gold-plated surgical steel with a hand-set cubic zirconia crystal. Hypoallergenic and tarnish-resistant.',
    care: 'Avoid contact with perfume and water. Store in the included pouch when not wearing.',
    materials: ['18K Gold Plated', 'Surgical Steel', 'Cubic Zirconia'],
    tones: ['gold', 'silver'],
    images: [
      'vivid-aura-jewels-1',
      'vivid-aura-jewels-2',
      'vivid-aura-jewels-3',
    ],
    searchTerms: 'gold ear cuff crystal accent jewelry',
    slug: 'vivid-aura-jewels',
    featured: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A multicolor floral crystal necklace inspired by blooming gardens. Each petal is hand-set with precision-cut crystals that shimmer in warm and cool tones.',
    details: 'Features an adjustable 16-18 inch chain with lobster clasp. 18K gold-plated brass with multi-colored crystal florals.',
    care: 'Clean gently with a soft cloth. Remove before swimming or bathing.',
    materials: ['18K Gold Plated', 'Brass', 'Precision-Cut Crystals'],
    tones: ['gold'],
    images: [
      'majestic-flora-nectar-1',
      'majestic-flora-nectar-2',
      'majestic-flora-nectar-3',
    ],
    searchTerms: 'multicolor floral crystal necklace gold jewelry',
    slug: 'majestic-flora-nectar',
    featured: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 214,
    description: 'Chunky gold dome huggie earrings that hug the earlobe perfectly. A modern classic with a sculptural silhouette that elevates everyday style.',
    details: 'Inner diameter 10mm. Hinged click closure for secure fit. 18K gold-plated sterling silver.',
    care: 'Polish with a jewelry cloth to maintain shine. Store separately to avoid scratches.',
    materials: ['18K Gold Plated', 'Sterling Silver'],
    tones: ['gold', 'silver'],
    images: [
      'golden-sphere-huggies-1',
      'golden-sphere-huggies-2',
      'golden-sphere-huggies-3',
    ],
    searchTerms: 'chunky gold dome huggie earrings',
    slug: 'golden-sphere-huggies',
    featured: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 76,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. The openwork design creates beautiful shadow play as they move.',
    details: 'Drop length 45mm. Post and butterfly back closure. 18K gold-plated brass with hand-finished filigree.',
    care: 'Handle with care due to delicate filigree. Clean with a dry soft cloth only.',
    materials: ['18K Gold Plated', 'Brass'],
    tones: ['gold'],
    images: [
      'amber-lace-earrings-1',
      'amber-lace-earrings-2',
      'amber-lace-earrings-3',
    ],
    searchTerms: 'textured gold filigree drop earrings lace',
    slug: 'amber-lace-earrings',
    featured: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A curated gift-boxed set featuring matching earrings and necklace. The perfect present or a luxurious treat for yourself. Arrives in our signature velvet box.',
    details: 'Set includes one pair of matching earrings and a 16-18 inch adjustable necklace. Gift-boxed with care card.',
    care: 'Follow individual piece care instructions. Velvet box included for storage.',
    materials: ['18K Gold Plated', 'Sterling Silver', 'Cubic Zirconia'],
    tones: ['gold', 'silver'],
    images: [
      'royal-heirloom-set-1',
      'royal-heirloom-set-2',
      'royal-heirloom-set-3',
    ],
    searchTerms: 'gift boxed earring necklace set gold jewelry',
    slug: 'royal-heirloom-set',
    featured: true,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies have become my everyday go-to. I get compliments constantly!',
    product: 'Golden Sphere Huggies',
  },
  {
    name: 'Emily R.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a gift for my sister and she absolutely loved it. The packaging alone is worth it — so luxurious.',
    product: 'Royal Heirloom Set',
  },
  {
    name: 'Jessica L.',
    rating: 5,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin. The Amber Lace Earrings are stunning and I can wear them all day.',
    product: 'Amber Lace Earrings',
  },
];

export const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', imageId: 'velmora-ugc-1' },
  { id: 'ugc-2', caption: 'Stack & layer', imageId: 'velmora-ugc-2' },
  { id: 'ugc-3', caption: 'Ear candy', imageId: 'velmora-ugc-3' },
  { id: 'ugc-4', caption: 'Date night ready', imageId: 'velmora-ugc-4' },
  { id: 'ugc-5', caption: 'Everyday elegance', imageId: 'velmora-ugc-5' },
  { id: 'ugc-6', caption: 'Gift unwrap', imageId: 'velmora-ugc-6' },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter(p => p.id !== currentId).slice(0, limit);
}

export function filterProducts({ category, priceRange, material, sort }) {
  let filtered = [...products];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (priceRange) {
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
  }

  if (material && material !== 'all') {
    filtered = filtered.filter(p => p.materials.some(m => m.toLowerCase().includes(material.toLowerCase())));
  }

  switch (sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      // Keep original order
      break;
  }

  return filtered;
}
