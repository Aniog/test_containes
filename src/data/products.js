const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: 'A luminous gold ear cuff elevated by a single faceted crystal accent. Designed to wrap the ear with effortless elegance — worn alone or stacked for a curated moment.',
    materials: '18K gold-plated brass, cubic zirconia crystal',
    care: 'Avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%23231f1a\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'80\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1.5\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'50\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EEar Cuff%3C/text%3E%3C/svg%3E', alt: 'Vivid Aura Jewels - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%231f1b16\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'90\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Ccircle cx=\'280\' cy=\'290\' r=\'15\' fill=\'%23E0CD8E\' opacity=\'0.6\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3ECrystal Detail%3C/text%3E%3C/svg%3E', alt: 'Vivid Aura Jewels - Detail' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description: 'A cascade of multicolor crystal florets suspended on a delicate gold chain. Each flower catches the light with a different hue — a necklace that feels like a secret garden.',
    materials: '18K gold-plated brass, multicolor Austrian crystals',
    care: 'Avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%23231f1a\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'6\' fill=\'%23C8A45C\'/%3E%3Ccircle cx=\'270\' cy=\'340\' r=\'5\' fill=\'%23E0CD8E\'/%3E%3Ccircle cx=\'330\' cy=\'340\' r=\'5\' fill=\'%23E0CD8E\'/%3E%3Ccircle cx=\'250\' cy=\'380\' r=\'4\' fill=\'%23C8A45C\'/%3E%3Ccircle cx=\'350\' cy=\'380\' r=\'4\' fill=\'%23C8A45C\'/%3E%3Cline x1=\'300\' y1=\'300\' x2=\'270\' y2=\'340\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Cline x1=\'300\' y1=\'300\' x2=\'330\' y2=\'340\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Cline x1=\'270\' y1=\'340\' x2=\'250\' y2=\'380\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Cline x1=\'330\' y1=\'340\' x2=\'350\' y2=\'380\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EFloral Necklace%3C/text%3E%3C/svg%3E', alt: 'Majestic Flora Nectar - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%231f1b16\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'320\' r=\'7\' fill=\'%23C8A45C\'/%3E%3Ccircle cx=\'260\' cy=\'365\' r=\'5\' fill=\'%23E0CD8E\'/%3E%3Ccircle cx=\'340\' cy=\'365\' r=\'5\' fill=\'%23E0CD8E\'/%3E%3Ccircle cx=\'300\' cy=\'410\' r=\'6\' fill=\'%23C8A45C\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'450\'%3ECrystal Detail%3C/text%3E%3C/svg%3E', alt: 'Majestic Flora Nectar - Detail' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 203,
    description: 'Chunky domed huggies with a sculptural sphere profile. Polished to a mirror finish, these earrings catch and reflect light with every movement. The everyday essential, elevated.',
    materials: '18K gold-plated brass, high-polish finish',
    care: 'Avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%23231f1a\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'55\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'4\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'48\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EHuggies%3C/text%3E%3C/svg%3E', alt: 'Golden Sphere Huggies - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%231f1b16\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'60\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'3\'/%3E%3Ccircle cx=\'300\' cy=\'300\' r=\'50\' fill=\'%23C8A45C\' opacity=\'0.15\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EWorn View%3C/text%3E%3C/svg%3E', alt: 'Golden Sphere Huggies - Angle' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 67,
    description: 'Intricate gold filigree drops with a textured lace pattern. These earrings capture the romance of vintage craftsmanship with a modern, lightweight feel for all-day wear.',
    materials: '18K gold-plated brass, filigree detail',
    care: 'Avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    variants: ['Gold'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%23231f1a\' width=\'600\' height=\'750\'/%3E%3Cpath d=\'M300 200 L280 250 L290 300 L280 350 L300 400\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1.5\'/%3E%3Cpath d=\'M300 200 L320 250 L310 300 L320 350 L300 400\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ccircle cx=\'290\' cy=\'300\' r=\'3\' fill=\'%23C8A45C\'/%3E%3Ccircle cx=\'310\' cy=\'300\' r=\'3\' fill=\'%23C8A45C\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EFiligree Drop%3C/text%3E%3C/svg%3E', alt: 'Amber Lace Earrings - Front' },
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%231f1b16\' width=\'600\' height=\'750\'/%3E%3Cpath d=\'M300 200 L275 270 L300 340 L325 270 Z\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Cpath d=\'M290 230 L280 330 L300 390 L320 330 L310 230 Z\' fill=\'%23C8A45C\' opacity=\'0.1\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3ELace Detail%3C/text%3E%3C/svg%3E', alt: 'Amber Lace Earrings - Detail' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description: 'A gift-boxed duo: our signature crystal-accented earrings paired with a matching pendant necklace. Presented in a velvet-lined box — ready to give, and unforgettable to receive.',
    materials: '18K gold-plated brass, cubic zirconia crystals, velvet gift box included',
    care: 'Avoid contact with water, perfume, and lotions. Store in the included Velmora pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days.',
    variants: ['Gold', 'Silver'],
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%23231f1a\' width=\'600\' height=\'750\'/%3E%3Crect x=\'200\' y=\'230\' width=\'200\' height=\'150\' rx=\'10\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1.5\'/%3E%3Ccircle cx=\'260\' cy=\'305\' r=\'15\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ccircle cx=\'340\' cy=\'305\' r=\'15\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ccircle cx=\'300\' cy=\'340\' r=\'20\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'12\' text-anchor=\'middle\' x=\'300\' y=\'190\'%3EGift Boxed%3C/text%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3EEarring + Necklace Set%3C/text%3E%3C/svg%3E', alt: 'Royal Heirloom Set - Gift Box' },
      { src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 600 750\'%3E%3Crect fill=\'%231f1b16\' width=\'600\' height=\'750\'/%3E%3Ccircle cx=\'250\' cy=\'280\' r=\'12\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Ccircle cx=\'350\' cy=\'280\' r=\'12\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Ccircle cx=\'300\' cy=\'360\' r=\'18\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Cline x1=\'300\' y1=\'342\' x2=\'300\' y2=\'250\' stroke=\'%23C8A45C\' stroke-width=\'0.5\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'14\' text-anchor=\'middle\' x=\'300\' y=\'430\'%3ESet Detail%3C/text%3E%3C/svg%3E', alt: 'Royal Heirloom Set - Detail' },
    ],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 500\'%3E%3Crect fill=\'%23231f1a\' width=\'400\' height=\'500\'/%3E%3Ccircle cx=\'200\' cy=\'200\' r=\'30\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'2\'/%3E%3Ccircle cx=\'200\' cy=\'200\' r=\'20\' fill=\'%23C8A45C\' opacity=\'0.2\'/%3E%3Cline x1=\'200\' y1=\'170\' x2=\'200\' y2=\'140\' stroke=\'%23C8A45C\' stroke-width=\'1\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'16\' text-anchor=\'middle\' x=\'200\' y=\'270\'%3EEarrings%3C/text%3E%3C/svg%3E' },
  { id: 'necklaces', name: 'Necklaces', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 500\'%3E%3Crect fill=\'%23231f1a\' width=\'400\' height=\'500\'/%3E%3Cpath d=\'M200 140 Q200 200 185 260 Q170 320 200 380\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1.5\'/%3E%3Ccircle cx=\'200\' cy=\'140\' r=\'8\' fill=\'none\' stroke=\'%23E0CD8E\' stroke-width=\'1\'/%3E%3Ccircle cx=\'200\' cy=\'380\' r=\'15\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'1.5\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'16\' text-anchor=\'middle\' x=\'200\' y=\'440\'%3ENecklaces%3C/text%3E%3C/svg%3E' },
  { id: 'huggies', name: 'Huggies', image: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 500\'%3E%3Crect fill=\'%23231f1a\' width=\'400\' height=\'500\'/%3E%3Ccircle cx=\'200\' cy=\'220\' r=\'45\' fill=\'none\' stroke=\'%23C8A45C\' stroke-width=\'3\'/%3E%3Ccircle cx=\'200\' cy=\'220\' r=\'35\' fill=\'%23C8A45C\' opacity=\'0.15\'/%3E%3Ctext fill=\'%23C8A45C\' font-family=\'serif\' font-size=\'16\' text-anchor=\'middle\' x=\'200\' y=\'310\'%3EHuggies%3C/text%3E%3C/svg%3E' },
];

export const testimonials = [
  { name: 'Sarah M.', text: 'Absolutely stunning. The quality far exceeded my expectations — these pieces feel like they belong in a high-end boutique. I get compliments every time I wear them.', rating: 5 },
  { name: 'Rachel K.', text: 'I ordered the Royal Heirloom Set for my sister\'s wedding. The packaging alone made her cry. The jewelry is exquisite — weighty, luminous, and beautifully crafted.', rating: 5 },
  { name: 'Emma T.', text: 'Finally, demi-fine jewelry that doesn\'t compromise. The gold finish is warm and rich, and the pieces are comfortable enough for everyday wear. My new go-to brand.', rating: 5 },
];

export default products;