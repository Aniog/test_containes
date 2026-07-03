export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    tones: ['Gold', 'Silver'],
    shortDesc: 'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.',
    description: 'The Vivid Aura ear cuff wraps the ear in warm gold, anchored by a hand-set crystal that catches light from every angle. Designed to be worn alone or stacked, it needs no piercing and adjusts gently to fit.',
    materials: '18K gold plating over brass. Hypoallergenic, nickel-free. Crystal accent. To care, avoid water, perfume, and lotion. Store in the provided pouch.',
    shipping: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns — no questions asked.',
    imgId: 'prod-vivid-aura-jewels-img-a1b2',
    imgIdAlt: 'prod-vivid-aura-jewels-img-alt-c3d4',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    tones: ['Gold'],
    shortDesc: 'A multicolor floral crystal necklace — petals of light that rest along the collarbone.',
    description: 'Majestic Flora Nectar is a pendant necklace featuring a floral cluster of multicolor crystals set in gold. The chain sits at collarbone length, making it a natural layering piece or a standalone statement.',
    materials: '18K gold plating over brass. Multicolor crystal accents. Adjustable 16-18 inch chain. Hypoallergenic, nickel-free.',
    shipping: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns — no questions asked.',
    imgId: 'prod-majestic-flora-nectar-img-d5e6',
    imgIdAlt: 'prod-majestic-flora-nectar-img-alt-f7g8',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    tones: ['Gold', 'Silver'],
    shortDesc: 'Chunky gold dome huggie earrings with a smooth, sculptural silhouette.',
    description: 'The Golden Sphere huggies are chunky dome earrings that hug the lobe closely. Their smooth polished surface reflects warm gold light, making them an everyday staple that transitions effortlessly from day to night.',
    materials: '18K gold plating over brass. Hinged huggie closure. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns — no questions asked.',
    imgId: 'prod-golden-sphere-huggies-img-h9i0',
    imgIdAlt: 'prod-golden-sphere-huggies-img-alt-j1k2',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 67,
    badge: null,
    tones: ['Gold'],
    shortDesc: 'Textured gold filigree drop earrings — lace-like detail that moves with you.',
    description: 'Amber Lace is a drop earring with intricate gold filigree that reads like woven lace. Lightweight and articulated, it sways gently with movement, casting warm shadows.',
    materials: '18K gold plating over brass. Textured filigree detail. Hypoallergenic, nickel-free. Sold as a pair.',
    shipping: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns — no questions asked.',
    imgId: 'prod-amber-lace-earrings-img-l3m4',
    imgIdAlt: 'prod-amber-lace-earrings-img-alt-o5p6',
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 41,
    badge: 'Gift Set',
    tones: ['Gold'],
    shortDesc: 'A gift-boxed earring and necklace set — coordinated elegance, ready to give.',
    description: 'The Royal Heirloom Set pairs a delicate gold pendant necklace with matching drop earrings, presented in signature Velmora gift packaging. A complete look, ready to gift or to treasure yourself.',
    materials: '18K gold plating over brass. Pendant necklace (18 inch) and matching drop earrings. Hypoallergenic, nickel-free. Arrives in gift box.',
    shipping: 'Free worldwide shipping on all orders. Ships within 1-2 business days. 30-day returns — no questions asked.',
    imgId: 'prod-royal-heirloom-set-img-q7r8',
    imgIdAlt: 'prod-royal-heirloom-set-img-alt-s9t0',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Cuffs, drops & statement pieces',
    imgId: 'cat-earrings-bg-u1v2',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants & chains that frame the collarbone',
    imgId: 'cat-necklaces-bg-w3x4',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday hoops that hug the lobe',
    imgId: 'cat-huggies-bg-y5z6',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  {
    id: 1,
    caption: 'Golden hour, golden spheres.',
    imgId: 'reel-1-img-a1b2',
    titleId: 'reel-1-title',
  },
  {
    id: 2,
    caption: 'Stacked and sculptural.',
    imgId: 'reel-2-img-c3d4',
    titleId: 'reel-2-title',
  },
  {
    id: 3,
    caption: 'Flora Nectar, caught in sunlight.',
    imgId: 'reel-3-img-e1f2',
    titleId: 'reel-3-title',
  },
  {
    id: 4,
    caption: 'Filigree that moves like lace.',
    imgId: 'reel-4-img-g3h4',
    titleId: 'reel-4-title',
  },
  {
    id: 5,
    caption: 'The everyday huggie.',
    imgId: 'reel-5-img-i5j6',
    titleId: 'reel-5-title',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'I wear my Golden Sphere huggies every single day. They have not tarnished and I get compliments constantly.',
  },
  {
    id: 2,
    name: 'Rachel K.',
    rating: 5,
    text: 'The Flora Nectar necklace is even more beautiful in person. The packaging felt like opening a real gift.',
  },
  {
    id: 3,
    name: 'Amara T.',
    rating: 5,
    text: 'Bought the Heirloom Set for my sister and she cried. Quality far exceeds the price point.',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug, count = 4) {
  const product = getProductBySlug(slug)
  if (!product) return products.slice(0, count)
  return products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === product.category ? -1 : 1))
    .slice(0, count)
}
