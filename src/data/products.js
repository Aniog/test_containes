export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural gold ear cuff adorned with a luminous crystal accent. Designed to sit elegantly along the ear without piercing, this piece catches light with every movement — an effortless statement of modern refinement.',
    care: '18K gold plated over sterling silver base. Nickel-free and hypoallergenic. Avoid contact with perfumes, lotions, and water to preserve the gold finish. Store in the provided pouch when not in use.',
    rating: 4.8,
    reviews: 124,
    images: ['ear-cuff-gold-1', 'ear-cuff-gold-2'],
    variant: 'gold',
    tags: ['bestseller', 'new'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    description: 'A delicate necklace featuring multicolor floral crystal blooms on a fine gold chain. Each petal is handset for a radiant, garden-inspired silhouette that transitions seamlessly from day to evening.',
    care: '18K gold plated brass with hand-set glass crystals. Wipe gently with a soft cloth after wear. Do not submerge in water. Handle with care to protect delicate crystal settings.',
    rating: 4.9,
    reviews: 89,
    images: ['necklace-floral-1', 'necklace-floral-2'],
    variant: 'gold',
    tags: ['bestseller'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky gold dome huggie earrings with a satisfying weight and mirror-polish finish. The rounded silhouette hugs the lobe for a contemporary, sculptural look that pairs with everything.',
    care: '18K gold plated stainless steel. Highly resistant to tarnishing. Avoid harsh chemicals and prolonged water exposure. Clean with a jewelry cloth to maintain the high-shine finish.',
    rating: 4.7,
    reviews: 211,
    images: ['huggies-dome-1', 'huggies-dome-2'],
    variant: 'gold',
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drop earrings inspired by vintage lacework. The intricate pattern creates beautiful shadow and depth, while the lightweight construction ensures all-day comfort.',
    care: '18K gold plated alloy with textured finish. Hypoallergenic posts. Store flat to preserve shape. Avoid bending or pressing the delicate filigree. Clean gently with a dry soft cloth.',
    rating: 4.6,
    reviews: 76,
    images: ['earrings-lace-1', 'earrings-lace-2'],
    variant: 'gold',
    tags: ['new'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    description: 'A curated gift set featuring a pair of signature earrings and a matching pendant necklace, presented in our signature Velmora gift box. The perfect gesture for someone treasured.',
    care: '18K gold plated sterling silver. Includes gift box, pouch, and care card. Each piece should be stored separately to prevent scratching. Follow standard gold-plated jewelry care guidelines.',
    rating: 5.0,
    reviews: 53,
    images: ['set-heirloom-1', 'set-heirloom-2'],
    variant: 'gold',
    tags: ['bestseller', 'gift'],
  },
];

export const testimonials = [
  { name: 'Sarah M.', text: 'The quality exceeded my expectations. I have sensitive ears and these are the first earrings I can wear all day without irritation.', rating: 5 },
  { name: 'Emily R.', text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so luxurious.', rating: 5 },
  { name: 'Jessica L.', text: 'Quiet luxury at an accessible price. The gold plating has held up beautifully after months of regular wear.', rating: 5 },
];

export const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday gold essentials' },
  { id: 'ugc-2', caption: 'Layered and lovely' },
  { id: 'ugc-3', caption: 'My new favorites' },
  { id: 'ugc-4', caption: 'Gift to myself' },
  { id: 'ugc-5', caption: 'Golden hour vibes' },
  { id: 'ugc-6', caption: 'Minimal but magical' },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit);
}

export function getBestsellers() {
  return products.filter((p) => p.tags.includes('bestseller'));
}
