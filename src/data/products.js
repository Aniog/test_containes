export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff adorned with a single crystal accent. Designed to sit comfortably on the ear without piercing, the Vivid Aura Jewels cuff catches light from every angle.',
    materialsCare:
      '18K gold-plated brass with cubic zirconia accent. Nickel-free and hypoallergenic. To maintain shine, avoid contact with perfume, lotion, and water. Store in the provided pouch.',
    shippingReturns:
      'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns — unworn items in original packaging.',
    images: ['hero-cuff', 'cuff-detail', 'cuff-worn'],
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 89,
    description:
      'A delicate collar necklace featuring multicolor floral crystals arranged in an asymmetrical bloom. The Majestic Flora Nectar adds a whisper of color to every outfit.',
    materialsCare:
      '18K gold-plated brass chain with hand-set crystal flowers. Length: 40cm + 5cm extender. Wipe gently with a soft cloth after wear.',
    shippingReturns:
      'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns — unworn items in original packaging.',
    images: ['flora-necklace', 'flora-detail', 'flora-worn'],
    related: ['royal-heirloom-set', 'amber-lace-earrings'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    rating: 4.7,
    reviews: 203,
    description:
      'Chunky dome huggie earrings with a polished mirror finish. The Golden Sphere Huggies are bold yet lightweight — the perfect everyday statement.',
    materialsCare:
      '18K gold-plated brass with surgical steel posts. Hypoallergenic and nickel-free. Avoid moisture and store flat to preserve shape.',
    shippingReturns:
      'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns — unworn items in original packaging.',
    images: ['huggies-dome', 'huggies-detail', 'huggies-worn'],
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    rating: 4.9,
    reviews: 156,
    description:
      'Textured gold filigree drop earrings inspired by vintage lace patterns. The Amber Lace Earrings sway gently with movement, catching candlelight beautifully.',
    materialsCare:
      '18K gold-plated brass with intricate openwork. Surgical steel hooks. Lightweight and comfortable for all-day wear. Store in a dry place.',
    shippingReturns:
      'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns — unworn items in original packaging.',
    images: ['lace-drop', 'lace-detail', 'lace-worn'],
    related: ['majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    rating: 5.0,
    reviews: 67,
    description:
      'A curated gift set featuring a pair of signature stud earrings and a matching pendant necklace, presented in a Velmora embossed box. The Royal Heirloom Set is ready to give — or keep.',
    materialsCare:
      '18K gold-plated brass with cubic zirconia. Includes Velmora gift box and polishing cloth. Nickel-free and hypoallergenic.',
    shippingReturns:
      'Free worldwide shipping on all orders over $50. Orders ship within 1–2 business days. 30-day hassle-free returns — unworn items in original packaging.',
    images: ['set-box', 'set-detail', 'set-worn'],
    related: ['golden-sphere-huggies', 'vivid-aura-jewels'],
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', imageTag: 'gold earrings on dark background' },
  { id: 'necklaces', label: 'Necklaces', imageTag: 'gold necklace on neutral background' },
  { id: 'huggies', label: 'Huggies', imageTag: 'gold huggie earrings close up' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. These pieces look far more expensive than they are — I get compliments every time I wear them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica T.',
    text: 'Bought the Royal Heirloom Set as a birthday gift. The packaging alone made it feel so special. She absolutely loved it.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'Finally, demi-fine jewelry that does not turn my ears green. I have worn the huggies daily for three months and they still look brand new.',
    rating: 5,
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday luxury ✨', tag: 'gold ear cuff on model ear' },
  { id: 2, caption: 'Date night essentials', tag: 'gold necklace on model neck' },
  { id: 3, caption: 'Stacked & styled', tag: 'multiple gold earrings on ear' },
  { id: 4, caption: 'Self-gift season', tag: 'gold jewelry flatlay on marble' },
  { id: 5, caption: 'Minimal but make it bold', tag: 'gold huggie earrings close up' },
  { id: 6, caption: 'Velmora vibes', tag: 'gold drop earrings on model' },
];
