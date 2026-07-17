const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: 'Gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff with a single crystal accent that catches the light with every turn. Designed to be worn solo or stacked for a curated ear look.',
    materials: '18K gold-plated brass, cubic zirconia crystal',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included velvet pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23F0EBE3" width="600" height="600"/%3E%3Ccircle cx="300" cy="280" r="120" fill="%23C9A96E" opacity="0.6"/%3E%3Ccircle cx="300" cy="280" r="80" fill="%23B8944E" opacity="0.4"/%3E%3Ctext x="300" y="460" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EVivid Aura Jewels%3C/text%3E%3C/svg%3E', alt: 'Vivid Aura Jewels - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23E6DFD3" width="600" height="600"/%3E%3Ccircle cx="300" cy="280" r="120" fill="%23C9A96E" opacity="0.5"/%3E%3Ccircle cx="300" cy="280" r="60" fill="%23B8944E" opacity="0.3"/%3E%3Ctext x="300" y="460" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EVivid Aura Jewels - Detail%3C/text%3E%3C/svg%3E', alt: 'Vivid Aura Jewels - Detail' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate floral pendant necklace featuring multicolor crystal accents on a fine gold chain. The petals catch and scatter light, creating a soft, romantic glow against the skin.',
    materials: '18K gold-plated sterling silver, multicolor cubic zirconia crystals',
    care: 'Avoid contact with water, perfumes, and lotions. Store flat in the included velvet pouch. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23F0EBE3" width="600" height="600"/%3E%3Ccircle cx="300" cy="260" r="100" fill="%23D4A9A5" opacity="0.5"/%3E%3Ccircle cx="260" cy="230" r="30" fill="%23C9A96E" opacity="0.6"/%3E%3Ccircle cx="340" cy="230" r="30" fill="%23C9A96E" opacity="0.6"/%3E%3Ccircle cx="300" cy="280" r="30" fill="%23C9A96E" opacity="0.6"/%3E%3Ctext x="300" y="460" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EMajestic Flora Nectar%3C/text%3E%3C/svg%3E', alt: 'Majestic Flora Nectar - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23E6DFD3" width="600" height="600"/%3E%3Ccircle cx="300" cy="260" r="100" fill="%23D4A9A5" opacity="0.4"/%3E%3Ccircle cx="260" cy="230" r="30" fill="%23C9A96E" opacity="0.5"/%3E%3Ccircle cx="340" cy="230" r="30" fill="%23C9A96E" opacity="0.5"/%3E%3Ccircle cx="300" cy="280" r="30" fill="%23C9A96E" opacity="0.5"/%3E%3Ctext x="300" y="460" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EMajestic Flora Nectar - Detail%3C/text%3E%3C/svg%3E', alt: 'Majestic Flora Nectar - Detail' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: 'Gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a high-polish finish. The perfect everyday essential — substantial enough to wear alone, sleek enough to stack with other piercings.',
    materials: '18K gold-plated brass, hypoallergenic posts',
    care: 'Avoid contact with water and chemicals. Store in the included pouch. Polish gently with the included cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23F0EBE3" width="600" height="600"/%3E%3Ccircle cx="300" cy="300" r="140" fill="none" stroke="%23C9A96E" stroke-width="24"/%3E%3Ccircle cx="300" cy="300" r="140" fill="%23C9A96E" opacity="0.15"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EGolden Sphere Huggies%3C/text%3E%3C/svg%3E', alt: 'Golden Sphere Huggies - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23E6DFD3" width="600" height="600"/%3E%3Ccircle cx="300" cy="300" r="140" fill="none" stroke="%23C9A96E" stroke-width="24"/%3E%3Ccircle cx="300" cy="300" r="140" fill="%23C9A96E" opacity="0.1"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EGolden Sphere Huggies - Detail%3C/text%3E%3C/svg%3E', alt: 'Golden Sphere Huggies - Detail' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold',
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and airy, they move gracefully with every gesture and catch the light beautifully.',
    materials: '18K gold-plated brass, textured filigree finish',
    care: 'Avoid contact with water, perfumes, and lotions. Store hanging or flat in the included pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23F0EBE3" width="600" height="600"/%3E%3Cellipse cx="300" cy="280" rx="60" ry="140" fill="%23C9A96E" opacity="0.3"/%3E%3Cellipse cx="300" cy="280" rx="40" ry="120" fill="%23B8944E" opacity="0.2"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EAmber Lace Earrings%3C/text%3E%3C/svg%3E', alt: 'Amber Lace Earrings - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23E6DFD3" width="600" height="600"/%3E%3Cellipse cx="300" cy="280" rx="60" ry="140" fill="%23C9A96E" opacity="0.25"/%3E%3Cellipse cx="300" cy="280" rx="40" ry="120" fill="%23B8944E" opacity="0.15"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3EAmber Lace Earrings - Detail%3C/text%3E%3C/svg%3E', alt: 'Amber Lace Earrings - Detail' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: 'Gold',
    rating: 5.0,
    reviewCount: 42,
    description: 'A beautifully gift-boxed earring and necklace set designed to be passed down. Features matching crystal-accented studs and a pendant on a delicate chain. The ultimate gift for someone special.',
    materials: '18K gold-plated sterling silver, cubic zirconia crystals, gift box included',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included gift box. Clean gently with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23F0EBE3" width="600" height="600"/%3E%3Crect x="200" y="180" width="200" height="240" rx="8" fill="%23C9A96E" opacity="0.2" stroke="%23C9A96E" stroke-width="2"/%3E%3Ccircle cx="300" cy="260" r="40" fill="%23C9A96E" opacity="0.5"/%3E%3Ccircle cx="300" cy="340" r="30" fill="%23C9A96E" opacity="0.4"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3ERoyal Heirloom Set%3C/text%3E%3C/svg%3E', alt: 'Royal Heirloom Set - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%23E6DFD3" width="600" height="600"/%3E%3Crect x="200" y="180" width="200" height="240" rx="8" fill="%23C9A96E" opacity="0.15" stroke="%23C9A96E" stroke-width="2"/%3E%3Ccircle cx="300" cy="260" r="40" fill="%23C9A96E" opacity="0.4"/%3E%3Ccircle cx="300" cy="340" r="30" fill="%23C9A96E" opacity="0.3"/%3E%3Ctext x="300" y="480" text-anchor="middle" fill="%23A68A6B" font-family="serif" font-size="18"%3ERoyal Heirloom Set - Detail%3C/text%3E%3C/svg%3E', alt: 'Royal Heirloom Set - Detail' },
    ],
  },
];

export const testimonials = [
  { name: 'Sarah M.', text: 'Absolutely stunning quality. The gold finish is flawless and looks even more beautiful in person. I wear my huggies every single day.', rating: 5 },
  { name: 'Rachel K.', text: 'Ordered the Royal Heirloom Set for my sister\'s birthday — she cried. The packaging alone is gorgeous, and the jewelry is truly heirloom-worthy.', rating: 5 },
  { name: 'Jennifer L.', text: 'I\'ve been searching for demi-fine jewelry that feels luxurious without the luxury markup. Velmora delivers on every level. My new go-to.', rating: 5 },
];

export const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', product: 'Golden Sphere Huggies' },
  { id: 'ugc-2', caption: 'Stacked & styled', product: 'Vivid Aura Jewels' },
  { id: 'ugc-3', caption: 'Date night glow', product: 'Majestic Flora Nectar' },
  { id: 'ugc-4', caption: 'Minimal moment', product: 'Amber Lace Earrings' },
  { id: 'ugc-5', caption: 'Gift ready', product: 'Royal Heirloom Set' },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'Studs, drops & cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants & chains' },
  { id: 'huggies', name: 'Huggies', description: 'Everyday gold hoops' },
];

export default products;