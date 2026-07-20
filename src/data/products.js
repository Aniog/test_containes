export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    tone: ['gold', 'silver'],
    material: '18K gold plated brass, cubic zirconia',
    description: 'A sculptural ear cuff finished in warm 18K gold plate and set with a single luminous crystal. Designed to hug the ear without a piercing, it catches candlelight with every turn.',
    details: ['Cuff opening: 4mm', 'Crystal: 3mm round cubic zirconia', 'Nickel-free and hypoallergenic', 'Avoid contact with perfume and water'],
    imageIds: {
      gold: 'vivid-aura-gold',
      silver: 'vivid-aura-silver',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 86,
    tone: ['gold'],
    material: '18K gold plated brass, enamel and crystal petals',
    description: 'A delicate bouquet of hand-painted floral charms suspended from a fine gold chain. Each petal is tinted in soft enamel and centered with a crystal dewdrop.',
    details: ['Chain length: 40cm + 5cm extender', 'Pendant drop: 2.5cm', 'Lobster clasp closure', 'Store flat to protect enamel finish'],
    imageIds: {
      gold: 'majestic-flora-gold',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 211,
    tone: ['gold', 'silver'],
    material: '18K gold plated stainless steel',
    description: 'Chunky dome huggies with a mirror-polished finish that feel modern and wearable. The compact silhouette makes them ideal for stacking or wearing solo.',
    details: ['Diameter: 12mm', 'Width: 6mm', 'Hinge closure', 'Water-resistant plating'],
    imageIds: {
      gold: 'golden-sphere-gold',
      silver: 'golden-sphere-silver',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 73,
    tone: ['gold'],
    material: '18K gold plated brass with filigree detail',
    description: 'Textured filigree drops inspired by vintage lace, light enough for all-day wear. Their warm gold patina and intricate surface catch light like old-world metalwork.',
    details: ['Length: 4.5cm', 'Width: 2cm', 'Fish-hook closure with silicon stopper', 'Intended for pierced ears'],
    imageIds: {
      gold: 'amber-lace-gold',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    tone: ['gold'],
    material: '18K gold plated brass, cubic zirconia, velvet-lined gift box',
    description: 'A ready-to-gift pairing of crystal studs and a matching pendant necklace, presented in a velvet-lined box. Designed for birthdays, anniversaries, and just-because moments.',
    details: ['Stud size: 6mm', 'Necklace chain: 42cm + 5cm extender', 'Includes polishing cloth', 'Gift box dimensions: 9cm x 9cm'],
    imageIds: {
      gold: 'royal-heirloom-gold',
    },
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on ear' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace on neck' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings' },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (id) => {
  const current = getProductById(id);
  if (!current) return [];
  return products.filter((p) => p.id !== id && p.category === current.category).slice(0, 4);
};
