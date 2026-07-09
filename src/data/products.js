// Seed product data for Velmora Fine Jewelry
// Each product has stable ids used for strk-img text references.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgId2: 'prod-vivid-aura-jewels-img2',
    price: 42,
    category: 'Earrings',
    subType: 'Ear Cuff',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.',
    description:
      'The Vivid Aura ear cuff is designed to catch the light from every angle. Hand-finished in 18K gold plating over brass, it curves gently around the cartilage and secures with a soft tension fit. A clear crystal accent adds a quiet sparkle meant for everyday wear.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free. Crystal accent. Wipe clean with the included microfibre cloth and store in the pouch provided.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgId2: 'prod-majestic-flora-nectar-img2',
    price: 68,
    category: 'Necklaces',
    subType: 'Pendant',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 203,
    shortDesc:
      'A multicolor floral crystal pendant suspended from a fine gold chain — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar brings a bouquet of multicolor crystals together in a delicate floral pendant. The fine gold-plated chain sits gracefully at the collarbone, making it a versatile piece that transitions from day to evening.',
    materials:
      '18K gold plating over brass. Multicolor crystal stones. Adjustable 40–45cm chain. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    tones: ['Gold', 'Silver'],
    badge: 'New',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgId2: 'prod-golden-sphere-huggies-img2',
    price: 38,
    category: 'Huggies',
    subType: 'Huggie Earrings',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    shortDesc:
      'Chunky gold dome huggies with a smooth, polished finish — the everyday earring you will never take off.',
    description:
      'Golden Sphere Huggies are the everyday essential reimagined. A chunky polished dome sits snug against the lobe, offering a confident gold presence in a comfortable, secure huggie silhouette.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged huggie closure. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgId2: 'prod-amber-lace-earrings-img2',
    price: 54,
    category: 'Earrings',
    subType: 'Drop Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 91,
    shortDesc:
      'Textured gold filigree drop earrings with an artisanal, lace-like finish — quiet drama for the evening.',
    description:
      'Amber Lace Earrings are a study in texture. Hand-worked gold filigree forms a lace-like drop that moves softly with the wearer. Lightweight and elegant, they bring quiet drama to any occasion.',
    materials:
      '18K gold plating over brass. Textured filigree detail. Lever-back closure. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    tones: ['Gold', 'Silver'],
    badge: null,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgId2: 'prod-royal-heirloom-set-img2',
    price: 95,
    category: 'Necklaces',
    subType: 'Gift Set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 64,
    shortDesc:
      'A gift-boxed earring and necklace set, designed to be treasured — the perfect present, beautifully presented.',
    description:
      'The Royal Heirloom Set pairs a coordinating necklace and earring duo in a signature Velmora gift box. Thoughtfully curated for gifting, it is a complete look ready to be unwrapped and worn.',
    materials:
      '18K gold plating over brass. Coordinating necklace and earrings. Presented in a signature Velmora gift box. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    tones: ['Gold', 'Silver'],
    badge: 'Gift Set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    imgId: 'cat-earrings-img',
    desc: 'From huggies to statement drops.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    imgId: 'cat-necklaces-img',
    desc: 'Delicate chains and pendant stories.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    imgId: 'cat-huggies-img',
    desc: 'Everyday gold, snug and polished.',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, all day.',
    titleId: 'reel-1-title',
    imgId: 'reel-1-img',
  },
  {
    id: 'reel-2',
    caption: 'Stacked cuffs, layered light.',
    titleId: 'reel-2-title',
    imgId: 'reel-2-img',
  },
  {
    id: 'reel-3',
    caption: 'Flora Nectar at golden hour.',
    titleId: 'reel-3-title',
    imgId: 'reel-3-img',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace for the evening.',
    titleId: 'reel-4-title',
    imgId: 'reel-4-img',
  },
  {
    id: 'reel-5',
    caption: 'The everyday gold edit.',
    titleId: 'reel-5-title',
    imgId: 'reel-5-img',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The quality is unreal for the price. My huggies have not tarnished after months of daily wear.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Flora Nectar as a gift and it arrived in the most beautiful packaging. She adored it.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet, elegant, and genuinely comfortable. This is now my go-to for everyday gold.',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
