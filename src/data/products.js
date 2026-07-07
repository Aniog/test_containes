export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    category: 'earrings',
    material: 'gold',
    badge: 'Bestseller',
    description: 'A sculptural gold ear cuff illuminated by a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches candlelight and compliments alike.',
    materials: '18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in the provided pouch and polish gently with a soft cloth.',
    images: [
      { id: 'vivid-aura-1', query: 'gold ear cuff crystal accent jewelry on ear warm light', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-2', query: 'delicate gold ear cuff jewelry product photography dark background', ratio: '3x4', width: 800 },
      { id: 'vivid-aura-3', query: 'gold ear cuff worn on model ear close up editorial jewelry', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    category: 'necklaces',
    material: 'gold',
    badge: 'New',
    description: 'A garden of hand-set crystals in soft pastels bloom along a delicate gold chain. The Flora Nectar necklace is our love letter to summer evenings and bare collarbones.',
    materials: '18k gold-plated brass, multi-color cubic zirconia crystals. Adjustable 16–18 inch chain.',
    care: 'Store flat to prevent tangling. Clean with a soft, dry cloth after wear.',
    images: [
      { id: 'flora-nectar-1', query: 'multicolor floral crystal gold necklace on model neck jewelry editorial', ratio: '3x4', width: 800 },
      { id: 'flora-nectar-2', query: 'colorful crystal flower necklace gold chain product photography', ratio: '3x4', width: 800 },
      { id: 'flora-nectar-3', query: 'delicate gold floral necklace close up jewelry warm tones', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 215,
    category: 'huggies',
    material: 'gold',
    badge: 'Bestseller',
    description: 'Chunky yet lightweight, these dome huggies hug the lobe with a polished golden glow. The everyday statement you will never want to take off.',
    materials: '18k gold-plated brass with sterling silver posts. Hinge closure.',
    care: 'Remove before showering or swimming. Wipe clean and store separately.',
    images: [
      { id: 'sphere-huggies-1', query: 'chunky gold dome huggie earrings worn on ear jewelry editorial', ratio: '3x4', width: 800 },
      { id: 'sphere-huggies-2', query: 'gold huggie hoop earrings product photography dark background', ratio: '3x4', width: 800 },
      { id: 'sphere-huggies-3', query: 'chunky gold huggie earrings close up warm light', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 76,
    category: 'earrings',
    material: 'gold',
    description: 'Intricate filigree drops inspired by vintage lace and sun-warmed amber. These earrings move beautifully, framing the face with old-world romance.',
    materials: '18k gold-plated brass with textured filigree detail. Lightweight drop design.',
    care: 'Handle with care to protect delicate detailing. Store in a soft pouch.',
    images: [
      { id: 'amber-lace-1', query: 'gold filigree drop earrings on model ear warm editorial jewelry', ratio: '3x4', width: 800 },
      { id: 'amber-lace-2', query: 'textured gold drop earrings product photography luxury jewelry', ratio: '3x4', width: 800 },
      { id: 'amber-lace-3', query: 'gold lace filigree earrings close up warm light', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 52,
    category: 'sets',
    material: 'gold',
    badge: 'Gift Set',
    description: 'A curated pairing of pendant necklace and matching huggies, presented in our signature gift box. Designed for birthdays, anniversaries, and just-because moments.',
    materials: '18k gold-plated brass necklace and huggie earrings. Includes Velmora gift box and care card.',
    care: 'Keep pieces dry and store in the gift box between wears.',
    images: [
      { id: 'heirloom-set-1', query: 'gold jewelry gift set necklace earrings in luxury box editorial', ratio: '3x4', width: 800 },
      { id: 'heirloom-set-2', query: 'gold pendant necklace and huggie earrings product photography', ratio: '3x4', width: 800 },
      { id: 'heirloom-set-3', query: 'elegant gold jewelry set worn on model warm light editorial', ratio: '3x4', width: 800 },
    ],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry editorial warm light' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry editorial on neck warm light' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings jewelry editorial' },
]

export const ugcPosts = [
  { id: 'ugc-1', caption: 'Everyday gold', query: 'gold huggie earrings worn on ear close up selfie warm light' },
  { id: 'ugc-2', caption: 'Layered moments', query: 'gold necklaces layered on neck close up jewelry selfie' },
  { id: 'ugc-3', caption: 'Soft glow', query: 'gold ear cuff crystal worn on ear jewelry selfie warm' },
  { id: 'ugc-4', caption: 'Gift to self', query: 'woman holding gold jewelry gift box elegant' },
  { id: 'ugc-5', caption: 'Evening light', query: 'gold drop earrings worn on ear sunset warm light jewelry' },
  { id: 'ugc-6', caption: 'Minimal luxe', query: 'minimal gold hoop earrings worn editorial jewelry' },
]

export const testimonials = [
  { id: 1, name: 'Eleanor M.', text: 'The quality is exceptional for the price. My huggies have become my everyday signature.', rating: 5 },
  { id: 2, name: 'Sophia L.', text: 'Beautiful packaging and even more beautiful pieces. Gifting has never been easier.', rating: 5 },
  { id: 3, name: 'Amara K.', text: 'Quiet luxury exactly as described. The ear cuff gets compliments every time I wear it.', rating: 5 },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}
