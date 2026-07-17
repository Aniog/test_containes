const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 127,
    description: 'An sculptural ear cuff handcrafted in 18K gold-plated brass with a luminous crystal accent. Designed to climb the ear for an editorial look that transitions effortlessly from day to evening.',
    details: '18K gold plated over brass. Features a single bezel-set cubic zirconia accent. Sold as a single cuff. Fits most ear sizes with gentle adjustment.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included velvet pouch. Wipe gently with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping on orders over $75. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%2330241c"/%3E%3Ccircle cx="300" cy="280" r="100" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="300" cy="280" r="30" fill="%23c2ab8d" opacity="0.6"/%3E%3Ctext x="300" y="450" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="20"%3EVivid Aura Jewels%3C/text%3E%3C/svg%3E', alt: 'Front view' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%235a4537"/%3E%3Ccircle cx="300" cy="280" r="100" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="280" cy="270" r="35" fill="%23c2ab8d" opacity="0.5"/%3E%3Ctext x="300" y="450" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="20"%3EDetail%3C/text%3E%3C/svg%3E', alt: 'Detail view' },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A statement floral pendant necklace featuring multicolor crystal accents set against warm 18K gold plating. Suspended on an adjustable chain for versatile layering.',
    details: '18K gold plated brass chain, 18" with 2" extender. Multicolor crystal stones in prong settings. Lobster clasp closure.',
    care: 'Keep away from moisture and chemicals. Store flat in the included pouch. Clean crystals with a dry microfiber cloth.',
    shipping: 'Free worldwide shipping on orders over $75. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%2330241c"/%3E%3Cpath d="M300 200 Q350 260 300 380 Q250 260 300 200" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="300" cy="280" r="8" fill="%23deb874"/%3E%3Ccircle cx="285" cy="310" r="6" fill="%23e9cf9e"/%3E%3Ccircle cx="315" cy="310" r="6" fill="%23e9cf9e"/%3E%3Ctext x="300" y="450" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EMajestic Flora Nectar%3C/text%3E%3C/svg%3E', alt: 'Front view' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%235a4537"/%3E%3Cpath d="M300 200 Q350 260 300 380 Q250 260 300 200" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="300" cy="280" r="8" fill="%23deb874"/%3E%3Ccircle cx="285" cy="310" r="6" fill="%23e9cf9e"/%3E%3Ccircle cx="315" cy="310" r="6" fill="%23e9cf9e"/%3E%3Ctext x="300" y="450" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EDetail%3C/text%3E%3C/svg%3E', alt: 'Worn view' },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky dome huggie earrings in high-polish 18K gold plate. A refined everyday staple with a satisfying hinge closure and subtle weight.',
    details: '18K gold plated over brass. 12mm outer diameter, 8mm inner diameter. Hinge closure with post. Sold as a pair.',
    care: 'Remove before swimming or showering. Polish with the included cloth. Store in the pouch to prevent scratches.',
    shipping: 'Free worldwide shipping on orders over $75. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%2330241c"/%3E%3Ccircle cx="280" cy="300" r="50" fill="none" stroke="%23deb874" stroke-width="8"/%3E%3Ccircle cx="320" cy="300" r="50" fill="none" stroke="%23deb874" stroke-width="8"/%3E%3Ctext x="300" y="420" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EGolden Sphere Huggies%3C/text%3E%3C/svg%3E', alt: 'Front view' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%235a4537"/%3E%3Ccircle cx="280" cy="300" r="50" fill="none" stroke="%23deb874" stroke-width="8"/%3E%3Ccircle cx="320" cy="300" r="50" fill="none" stroke="%23deb874" stroke-width="8"/%3E%3Ctext x="300" y="420" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EWorn view%3C/text%3E%3C/svg%3E', alt: 'Worn view' },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 64,
    description: 'Intricately textured gold filigree drop earrings with a warm amber-toned crystal. Lightweight yet substantial, these earrings catch light from every angle.',
    details: '18K gold plated brass filigree. Amber-toned cubic zirconia drops. French hook backs. 2.2" drop length.',
    care: 'Handle with care to preserve the filigree detail. Store hanging or flat. Avoid ultrasonic cleaners.',
    shipping: 'Free worldwide shipping on orders over $75. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%2330241c"/%3E%3Cpath d="M300 180 L280 240 Q300 260 300 300 Q300 260 320 240 Z" fill="none" stroke="%23deb874" stroke-width="2"/%3E%3Ccircle cx="300" cy="320" r="25" fill="%23d4a355" opacity="0.8"/%3E%3Ctext x="300" y="420" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EAmber Lace Earrings%3C/text%3E%3C/svg%3E', alt: 'Front view' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%235a4537"/%3E%3Cpath d="M300 180 L280 240 Q300 260 300 300 Q300 260 320 240 Z" fill="none" stroke="%23deb874" stroke-width="2"/%3E%3Ccircle cx="300" cy="320" r="25" fill="%23d4a355" opacity="0.8"/%3E%3Ctext x="300" y="420" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EDetail%3C/text%3E%3C/svg%3E', alt: 'Detail view' },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 41,
    description: 'A curated gift-boxed set pairing our signature crystal stud earrings with a matching pendant necklace. Presented in a velvet-lined box ready for gifting.',
    details: 'Includes one pair crystal stud earrings (6mm) and one crystal pendant necklace (18" chain). 18K gold plated brass. Ships in Velmora gift box.',
    care: 'Store each piece separately. Avoid contact with liquids. Clean crystals with a dry cloth.',
    shipping: 'Free worldwide shipping on orders over $75. Delivered in 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%2330241c"/%3E%3Crect x="180" y="180" width="240" height="280" rx="8" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="280" cy="300" r="20" fill="%23deb874" opacity="0.7"/%3E%3Ccircle cx="320" cy="300" r="20" fill="%23deb874" opacity="0.7"/%3E%3Ctext x="300" y="500" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3ERoyal Heirloom Set%3C/text%3E%3C/svg%3E', alt: 'Boxed set' },
      { src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"%3E%3Crect fill="%235a4537"/%3E%3Ccircle cx="280" cy="300" r="20" fill="%23deb874" opacity="0.7"/%3E%3Ccircle cx="320" cy="300" r="20" fill="%23deb874" opacity="0.7"/%3E%3Ctext x="300" y="420" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="18"%3EWorn view%3C/text%3E%3C/svg%3E', alt: 'Worn view' },
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
]

export default products

export const testimonials = [
  {
    name: 'Sophie M.',
    text: 'The quality is absolutely stunning — feels like pieces that should cost three times as much. I wear my Golden Sphere Huggies every single day.',
    rating: 5,
  },
  {
    name: 'Claire D.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The gift packaging was exquisite and she hasn\'t taken it off since.',
    rating: 5,
  },
  {
    name: 'Nina R.',
    text: 'Finally — demi-fine jewelry that actually feels luxurious. The weight, the finish, the details. Velmora is my go-to for gifting now.',
    rating: 5,
  },
]

export const ugcPosts = [
  { id: 'ugc1', caption: 'Golden hour with Golden Sphere Huggies ✨', productId: 'golden-sphere-huggies' },
  { id: 'ugc2', caption: 'Everyday stack — Majestic Flora never leaves my neck', productId: 'majestic-flora-nectar' },
  { id: 'ugc3', caption: 'Date night glow with Amber Lace', productId: 'amber-lace-earrings' },
  { id: 'ugc4', caption: 'Vivid Aura cuff — the perfect statement', productId: 'vivid-aura-jewels' },
  { id: 'ugc5', caption: 'Gifted the Heirloom Set to myself. No regrets.', productId: 'royal-heirloom-set' },
  { id: 'ugc6', caption: 'Huggies that go with literally everything', productId: 'golden-sphere-huggies' },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', description: 'From everyday studs to statement cuffs' },
  { id: 'necklaces', name: 'Necklaces', description: 'Pendants and chains for every layer' },
  { id: 'huggies', name: 'Huggies', description: 'The perfect hoop for every occasion' },
]
