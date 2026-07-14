export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff crowned with a single luminous crystal. Designed to sit comfortably on the ear without piercing, it catches candlelight beautifully and layers effortlessly with studs or huggies.',
    materials: '18k gold-plated brass, cubic zirconia accent. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfumes, lotions, and water to preserve the gold finish. Gently polish with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Express available at checkout.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    tags: ['bestseller', 'new'],
    imageQuery: 'gold ear cuff crystal accent luxury demi fine jewelry on ear close up warm light',
    hoverQuery: 'gold ear cuff crystal detail dark background editorial jewelry photography',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate pendant necklace inspired by wildflower fields, set with multicolor crystals in a refined gold floral motif. The adjustable chain lets you wear it close to the collarbone or layered lower.',
    materials: '18k gold-plated brass, hand-set multicolor cubic zirconia. Chain length 16–18 in.',
    care: 'Keep dry and store flat. Remove before swimming or exercising.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns in original packaging.',
    tags: ['bestseller'],
    imageQuery: 'multicolor floral crystal pendant necklace gold chain editorial jewelry close up',
    hoverQuery: 'floral crystal gold necklace on model neckline warm neutral background',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 210,
    description: 'Chunky yet lightweight dome huggies that hug the lobe with a polished gold glow. The perfect everyday statement you never have to take off.',
    materials: '18k gold-plated stainless steel, hinged closure. Water-resistant and tarnish-resistant.',
    care: 'Safe for occasional water contact. Dry thoroughly and store in pouch when not worn.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns.',
    tags: ['bestseller', 'new'],
    imageQuery: 'chunky gold dome huggie earrings close up editorial jewelry photography warm light',
    hoverQuery: 'gold huggie earrings on ear lifestyle portrait warm neutral background',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 76,
    description: 'Textured gold filigree drops inspired by antique lace. These earrings move beautifully, catching light with every turn.',
    materials: '18k gold-plated brass, surgical-steel posts. Nickel-free.',
    care: 'Store hanging or flat. Avoid moisture and perfume.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days.',
    returns: '30-day hassle-free returns in original packaging.',
    tags: ['bestseller'],
    imageQuery: 'textured gold filigree drop earrings dark background editorial jewelry photography',
    hoverQuery: 'gold filigree drop earrings on model warm light portrait jewelry',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 52,
    description: 'A gift-ready pairing of statement earrings and a matching pendant necklace, presented in a Velmora keepsake box. Made for moments worth remembering.',
    materials: '18k gold-plated brass, cubic zirconia accents. Includes signature gift box and pouch.',
    care: 'Store in provided pouch. Remove before bathing or exercising.',
    shipping: 'Free worldwide shipping. Gift wrapping and handwritten note available at checkout.',
    returns: '30-day hassle-free returns. Gift packaging must be intact.',
    tags: ['bestseller', 'gift'],
    imageQuery: 'gold jewelry gift set necklace earrings velvet box luxury packaging warm light',
    hoverQuery: 'gold earring necklace jewelry set on model editorial portrait warm gold tones',
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings editorial jewelry on ear warm light' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold pendant necklace on model neckline editorial warm light' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings on ear close up editorial warm light' },
]

export const ugcReels = [
  { id: 'ugc-1', caption: 'Everyday gold', query: 'woman wearing gold huggie earrings close up lifestyle warm light' },
  { id: 'ugc-2', caption: 'Layered moments', query: 'gold layered necklaces on woman neckline lifestyle warm neutral' },
  { id: 'ugc-3', caption: 'Gift ready', query: 'gold jewelry gift box unboxing velvet luxury warm light' },
  { id: 'ugc-4', caption: 'Date night', query: 'woman gold drop earrings romantic warm light portrait jewelry' },
  { id: 'ugc-5', caption: 'Self treat', query: 'woman holding gold necklace pendant lifestyle warm aesthetic' },
]

export const testimonials = [
  { id: 't1', name: 'Amanda S.', rating: 5, text: 'The quality exceeded my expectations. I wear my huggies every single day and they still look brand new.' },
  { id: 't2', name: 'Priya K.', rating: 5, text: 'Bought the heirloom set as a birthday gift. The packaging alone made it feel so expensive and thoughtful.' },
  { id: 't3', name: 'Elena R.', rating: 5, text: 'Quiet luxury, exactly what I wanted. Already planning my next order.' },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}
