export const products = [
  {
    id: 'vivid-aura',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff set with a single brilliant crystal accent. Designed to be worn solo or stacked for a curated ear moment.',
    details: '18K gold-plated brass. Crystal accent: 3mm cubic zirconia. Designed for non-pierced and pierced ears alike. Each cuff measures 14mm in diameter. Sold as a single pair.',
    materials: '18K gold-plated over brass, cubic zirconia crystal. Nickel-free, hypoallergenic.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included velvet pouch. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on orders over $75. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    variants: [
      { name: 'Gold', value: 'gold', color: '#C8A96E' },
      { name: 'Silver', value: 'silver', color: '#C0C0C0' },
    ],
    images: ['vivid-aura-1', 'vivid-aura-2', 'vivid-aura-3'],
  },
  {
    id: 'majestic-flora',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate gold chain necklace featuring a hand-set floral pendant with multicolor crystal petals. A modern heirloom piece.',
    details: '18K gold-plated sterling silver chain. Pendant: 18mm x 18mm floral design with hand-set multicolor Swarovski crystals. Adjustable chain: 40cm + 5cm extender.',
    materials: '18K gold-plated sterling silver base, Swarovski crystals. Nickel-free, hypoallergenic.',
    care: 'Avoid contact with water, perfumes, and lotions. Store flat in the included velvet pouch. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on orders over $75. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    variants: [
      { name: 'Gold', value: 'gold', color: '#C8A96E' },
      { name: 'Silver', value: 'silver', color: '#C0C0C0' },
    ],
    images: ['majestic-flora-1', 'majestic-flora-2', 'majestic-flora-3'],
  },
  {
    id: 'golden-sphere',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 216,
    description: 'Chunky dome-shaped huggie earrings with a high-polish finish. The perfect everyday statement — lightweight and endlessly versatile.',
    details: '18K gold-plated brass. Domed huggie profile. Inner diameter: 10mm. Outer diameter: 14mm. Hinged clasp with secure snap closure. Sold as a pair.',
    materials: '18K gold-plated over brass. Nickel-free, hypoallergenic.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included velvet pouch. Wipe clean with a soft, dry cloth after each wear.',
    shipping: 'Free worldwide shipping on orders over $75. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    variants: [
      { name: 'Gold', value: 'gold', color: '#C8A96E' },
      { name: 'Silver', value: 'silver', color: '#C0C0C0' },
    ],
    images: ['golden-sphere-1', 'golden-sphere-2', 'golden-sphere-3'],
  },
  {
    id: 'amber-lace',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 67,
    description: 'Intricate filigree drop earrings inspired by vintage lace patterns. Light-catching texture with a warm amber-gold finish.',
    details: '18K gold-plated brass with antique finish detailing. Drop length: 35mm. Width: 18mm at widest point. French hook closure. Sold as a pair.',
    materials: '18K gold-plated over brass, antique gold finish. Nickel-free, hypoallergenic.',
    care: 'Avoid contact with water, perfumes, and lotions. Store hanging or flat in the included pouch. Clean gently with a dry, soft cloth. Do not polish aggressively on textured areas.',
    shipping: 'Free worldwide shipping on orders over $75. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    variants: [
      { name: 'Gold', value: 'gold', color: '#C8A96E' },
      { name: 'Silver', value: 'silver', color: '#C0C0C0' },
    ],
    images: ['amber-lace-1', 'amber-lace-2', 'amber-lace-3'],
  },
  {
    id: 'royal-heirloom',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 43,
    description: 'A gift-boxed matching set — crystal-accent stud earrings paired with a coordinating pendant necklace. Presented in our signature velvet box.',
    details: 'Set includes one pair of crystal stud earrings (6mm) and one matching pendant necklace (12mm pendant, 42cm chain + 5cm extender). 18K gold-plated. Gift box included.',
    materials: '18K gold-plated sterling silver base with cubic zirconia crystals. Nickel-free, hypoallergenic.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided gift box. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on orders over $75. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    returns: '30-day hassle-free returns. Items must be unworn with original packaging.',
    variants: [
      { name: 'Gold', value: 'gold', color: '#C8A96E' },
      { name: 'Silver', value: 'silver', color: '#C0C0C0' },
    ],
    images: ['royal-heirloom-1', 'royal-heirloom-2', 'royal-heirloom-3'],
  },
];

export const getProduct = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'category-earrings' },
  { id: 'necklaces', name: 'Necklaces', image: 'category-necklaces' },
  { id: 'huggies', name: 'Huggies', image: 'category-huggies' },
];

export const testimonials = [
  {
    name: 'Sophia L.',
    text: 'The quality is stunning — looks and feels far more expensive than it is. I wear my Golden Sphere Huggies every single day.',
    rating: 5,
  },
  {
    name: 'Emma R.',
    text: 'Ordered the Royal Heirloom Set as a bridesmaid gift and it was a hit. The presentation in the velvet box is absolutely beautiful.',
    rating: 5,
  },
  {
    name: 'Olivia M.',
    text: 'Finally, demi-fine jewelry that feels luxurious without the guilt. Shipping was fast and the packaging is gift-ready. Will be a repeat customer.',
    rating: 5,
  },
];

export const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', product: 'Vivid Aura Jewels' },
  { id: 'ugc-2', caption: 'Everyday elegance', product: 'Golden Sphere Huggies' },
  { id: 'ugc-3', caption: 'Stacked & styled', product: 'Amber Lace Earrings' },
  { id: 'ugc-4', caption: 'Date night glow', product: 'Majestic Flora Nectar' },
  { id: 'ugc-5', caption: 'Gift ready', product: 'Royal Heirloom Set' },
  { id: 'ugc-6', caption: 'Minimal moments', product: 'Golden Sphere Huggies' },
];
