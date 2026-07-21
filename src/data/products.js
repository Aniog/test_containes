export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    description: 'A luminous gold ear cuff adorned with a genuine crystal accent. Sculpted to catch the light from every angle, this piece adds an effortless yet striking dimension to any ear stack.',
    materials: '18K gold plated over brass · Cubic zirconia crystal · Hypoallergenic posts',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch. Gently polish with a dry cloth.',
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: 'vivid-aura-1', alt: 'Vivid Aura Jewels gold ear cuff with crystal accent' },
      { id: 'vivid-aura-2', alt: 'Vivid Aura Jewels ear cuff worn on model' },
      { id: 'vivid-aura-3', alt: 'Vivid Aura Jewels close-up detail' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: false,
    isBestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    description: 'A captivating multicolor floral crystal necklace that blooms against the skin. Each petal is hand-set with precision, creating a garden of color suspended in gold.',
    materials: '18K gold plated over brass · Multicolor crystal petals · Adjustable chain (16"-18") · Lobster clasp',
    care: 'Avoid contact with water, perfumes, and lotions. Store flat in a soft pouch. Gently polish with a dry cloth.',
    rating: 4.9,
    reviewCount: 89,
    images: [
      { id: 'flora-nectar-1', alt: 'Majestic Flora Nectar multicolor floral crystal necklace' },
      { id: 'flora-nectar-2', alt: 'Majestic Flora Nectar necklace worn on model' },
      { id: 'flora-nectar-3', alt: 'Majestic Flora Nectar close-up of crystals' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    isNew: true,
    isBestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    price: 38,
    description: 'Chunky gold dome huggie earrings that make a quiet statement. The polished spherical silhouette is both modern and timeless, perfect for everyday elegance.',
    materials: '18K gold plated over brass · Hinge closure · Hypoallergenic · 12mm diameter',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch. Gently polish with a dry cloth.',
    rating: 4.7,
    reviewCount: 203,
    images: [
      { id: 'sphere-huggies-1', alt: 'Golden Sphere Huggies chunky gold dome earrings' },
      { id: 'sphere-huggies-2', alt: 'Golden Sphere Huggies worn on model ear' },
      { id: 'sphere-huggies-3', alt: 'Golden Sphere Huggies close-up detail' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: false,
    isBestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    description: 'Intricate textured gold filigree drop earrings that evoke vintage lace. Light as air yet rich in detail, these earrings catch every ray of light.',
    materials: '18K gold plated over brass · Filigree design · Hypoallergenic hooks · 2" drop length',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch. Gently polish with a dry cloth.',
    rating: 4.6,
    reviewCount: 67,
    images: [
      { id: 'amber-lace-1', alt: 'Amber Lace Earrings textured gold filigree drop earrings' },
      { id: 'amber-lace-2', alt: 'Amber Lace Earrings worn on model' },
      { id: 'amber-lace-3', alt: 'Amber Lace Earrings close-up of filigree detail' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: false,
    isBestseller: false,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    description: 'A gift-boxed set featuring a matching earring and necklace combination. The perfect present for life\'s most cherished moments, presented in a velvet-lined keepsake box.',
    materials: '18K gold plated over brass · Set includes 1 necklace (16"-18" adjustable) + 1 pair earrings · Velvet gift box',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided gift box. Gently polish with a dry cloth.',
    rating: 5.0,
    reviewCount: 42,
    images: [
      { id: 'royal-heirloom-1', alt: 'Royal Heirloom Set gift-boxed earring and necklace set' },
      { id: 'royal-heirloom-2', alt: 'Royal Heirloom Set open box with jewelry' },
      { id: 'royal-heirloom-3', alt: 'Royal Heirloom Set necklace detail' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Rose Gold', value: 'rose-gold' },
    ],
    isNew: true,
    isBestseller: true,
  },
  {
    id: 'celestial-hoops',
    name: 'Celestial Hoops',
    category: 'earrings',
    price: 36,
    description: 'Delicate celestial-inspired hoop earrings with a subtle star motif. Lightweight and comfortable for all-day wear.',
    materials: '18K gold plated over brass · Hypoallergenic · Click-lock closure · 15mm diameter',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch.',
    rating: 4.5,
    reviewCount: 56,
    images: [
      { id: 'celestial-hoops-1', alt: 'Celestial Hoops delicate gold hoop earrings' },
      { id: 'celestial-hoops-2', alt: 'Celestial Hoops worn on model' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: true,
    isBestseller: false,
  },
  {
    id: 'artisan-chain-necklace',
    name: 'Artisan Chain Necklace',
    category: 'necklaces',
    price: 58,
    description: 'A meticulously crafted chain necklace with a minimalist pendant. The perfect everyday layer.',
    materials: '18K gold plated over brass · Adjustable 16"-18" · Lobster clasp',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch.',
    rating: 4.7,
    reviewCount: 98,
    images: [
      { id: 'artisan-chain-1', alt: 'Artisan Chain Necklace gold chain with pendant' },
      { id: 'artisan-chain-2', alt: 'Artisan Chain Necklace layered on model' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: false,
    isBestseller: false,
  },
  {
    id: 'moonstone-huggies',
    name: 'Moonstone Huggies',
    category: 'earrings',
    price: 44,
    description: 'Huggie earrings set with luminous moonstone cabochons. The ethereal glow of moonstone against warm gold creates an enchanting everyday treasure.',
    materials: '18K gold plated over brass · Genuine moonstone · Hinge closure · Hypoallergenic',
    care: 'Avoid contact with water, perfumes, and lotions. Store in a soft pouch. Gently polish with a dry cloth.',
    rating: 4.8,
    reviewCount: 134,
    images: [
      { id: 'moonstone-huggies-1', alt: 'Moonstone Huggies gold earrings with moonstone' },
      { id: 'moonstone-huggies-2', alt: 'Moonstone Huggies worn on model' },
    ],
    variants: [
      { name: 'Gold Tone', value: 'gold' },
      { name: 'Silver Tone', value: 'silver' },
    ],
    isNew: false,
    isBestseller: false,
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', description: 'From huggies to drops, find your perfect pair' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', description: 'Chains, pendants, and statement pieces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', description: 'Our signature huggie earrings collection' },
];

export const testimonials = [
  { name: 'Sophia M.', rating: 5, text: 'The quality is absolutely stunning. I receive compliments every time I wear my Vivid Aura ear cuff. It looks far more expensive than it is.' },
  { name: 'Emma L.', rating: 5, text: 'Bought the Royal Heirloom Set as a wedding gift and ended up keeping one for myself. The packaging is exquisite.' },
  { name: 'Olivia K.', rating: 5, text: 'Finally, jewelry that doesn\'t turn my ears green. I wear my Golden Sphere Huggies daily and they still look brand new.' },
];

export const ugcReels = [
  { id: 'ugc-1', caption: 'Golden hour with my favorite hoops ✨' },
  { id: 'ugc-2', caption: 'Layer love — necklace stacking inspo' },
  { id: 'ugc-3', caption: 'New addition to the collection 🥹' },
  { id: 'ugc-4', caption: 'Huggies are my new obsession' },
  { id: 'ugc-5', caption: 'Gift wrapping myself this beauty' },
  { id: 'ugc-6', caption: 'Gold on gold on gold ✨' },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getBestsellers = () => products.filter((p) => p.isBestseller);

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter((p) => p.category === category);
};