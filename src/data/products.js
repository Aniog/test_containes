export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: 'gold',
    price: 42,
    rating: 4.8,
    reviews: 124,
    description: 'A delicate gold ear cuff with a radiant crystal accent that catches the light with every movement. Effortlessly elegant for day or evening.',
    details: 'Handcrafted in 18K gold-plated brass with a genuine cubic zirconia crystal. The open cuff design fits most ear shapes comfortably.',
    materials: '18K Gold Plated Brass · Cubic Zirconia · Hypoallergenic · Nickel-Free',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth.',
    images: [
      { id: 'vivid-1', caption: 'Vivid Aura Jewels — Front View' },
      { id: 'vivid-2', caption: 'Vivid Aura Jewels — Detail' },
      { id: 'vivid-3', caption: 'Vivid Aura Jewels — On Model' },
    ],
    variants: ['Gold', 'Silver'],
    imgId: 'ear-cuff-gold-crystal-d3f4a1',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: 'gold',
    price: 68,
    rating: 4.9,
    reviews: 89,
    description: 'A multicolor floral crystal necklace that blooms with color. Each petal-like stone is hand-set in a warm gold setting.',
    details: 'Features hand-set multicolor crystals (amethyst, citrine, peridot) in an 18K gold-plated floral pendant. Adjustable chain from 16" to 18".',
    materials: '18K Gold Plated Brass · Multicolor Crystal · Adjustable Chain · Nickel-Free',
    care: 'Keep away from water and chemicals. Store flat or hung separately. Polish with a jewelry cloth as needed.',
    images: [
      { id: 'flora-1', caption: 'Majestic Flora Nectar — Front View' },
      { id: 'flora-2', caption: 'Majestic Flora Nectar — Detail' },
      { id: 'flora-3', caption: 'Majestic Flora Nectar — On Model' },
    ],
    variants: ['Gold', 'Silver'],
    imgId: 'floral-necklace-crystal-gold-e5g6b2',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    material: 'gold',
    price: 38,
    rating: 4.7,
    reviews: 203,
    description: 'Chunky gold dome huggie earrings with a polished sphere silhouette. A modern classic that transitions from desk to dinner.',
    details: 'Sculpted 18K gold-plated brass huggie with a hinged click closure. Each dome measures approximately 10mm in diameter.',
    materials: '18K Gold Plated Brass · Hypoallergenic · Hinged Click Closure · Nickel-Free',
    care: 'Remove before swimming, showering, or exercising. Store in a pouch to prevent scratching. Wipe clean with a dry cloth.',
    images: [
      { id: 'sphere-1', caption: 'Golden Sphere Huggies — Front View' },
      { id: 'sphere-2', caption: 'Golden Sphere Huggies — Detail' },
      { id: 'sphere-3', caption: 'Golden Sphere Huggies — On Model' },
    ],
    variants: ['Gold', 'Silver'],
    imgId: 'gold-dome-huggie-earrings-c7h8c3',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'gold',
    price: 54,
    rating: 4.6,
    reviews: 67,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Light-catching and effortlessly feminine.',
    details: 'Intricately textured 18K gold-plated brass drop earrings with filigree detailing. Fishhook closures. Approximately 1.5 inches in length.',
    materials: '18K Gold Plated Brass · Filigree Texture · Fishhook Backing · Nickel-Free',
    care: 'Handle with care to preserve the filigree detail. Avoid bending. Store flat in a lined jewelry box.',
    images: [
      { id: 'amber-1', caption: 'Amber Lace Earrings — Front View' },
      { id: 'amber-2', caption: 'Amber Lace Earrings — Detail' },
      { id: 'amber-3', caption: 'Amber Lace Earrings — On Model' },
    ],
    variants: ['Gold', 'Silver'],
    imgId: 'filigree-drop-earrings-gold-d9i0d4',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    material: 'gold',
    price: 95,
    rating: 5.0,
    reviews: 42,
    description: 'A gift-boxed earring and necklace set featuring matching gold motifs. The ultimate gift of lasting beauty.',
    details: 'Set includes a coordinating pair of stud earrings and a pendant necklace in 18K gold-plated brass. Presented in a velvet-lined gift box.',
    materials: '18K Gold Plated Brass · Velvet Gift Box · Hypoallergenic · Nickel-Free',
    care: 'Store both pieces in the included gift box. Clean with a soft, dry cloth. Avoid exposure to harsh chemicals.',
    images: [
      { id: 'heirloom-1', caption: 'Royal Heirloom Set — Boxed View' },
      { id: 'heirloom-2', caption: 'Royal Heirloom Set — Detail' },
      { id: 'heirloom-3', caption: 'Royal Heirloom Set — On Model' },
    ],
    variants: ['Gold', 'Silver'],
    imgId: 'gold-jewelry-set-gift-box-f1k2e5',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', imgId: 'gold-earrings-category-a1b2', count: 3 },
  { id: 'necklaces', name: 'Necklaces', imgId: 'gold-necklace-category-c3d4', count: 1 },
  { id: 'huggies', name: 'Huggies', imgId: 'gold-huggies-category-e5f6', count: 1 },
]

export const testimonials = [
  { id: 1, name: 'Sophie M.', rating: 5, text: 'I bought the Golden Sphere Huggies for my sister\'s birthday and she hasn\'t taken them off. The quality is stunning for the price — truly looks like real gold.' },
  { id: 2, name: 'Olivia K.', rating: 5, text: 'The Royal Heirloom Set arrived in the most beautiful packaging. I gave it to myself as a promotion gift and feel like a queen wearing it.' },
  { id: 3, name: 'Emma R.', rating: 5, text: 'Velmora is my new go-to for meaningful jewelry. The Majestic Flora necklace is delicate yet substantial. I\'ve received so many compliments.' },
]

export const getProductById = (id) => products.find(p => p.id === id)

export const getRelatedProducts = (id, limit = 4) => {
  const product = getProductById(id)
  if (!product) return []
  return products
    .filter(p => p.id !== id && (p.category === product.category || p.material === product.material))
    .slice(0, limit)
}