// Seed product data for Velmora Fine Jewelry
// Each product has stable image IDs and text reference IDs for the stock image system.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    categoryId: 'earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    short: 'A sculptural gold ear cuff crowned with a single crystal accent — effortless, no piercing required.',
    description:
      'The Vivid Aura ear cuff is our most-loved everyday piece. Hand-finished in 18K gold plating over sterling silver, it curves gently around the ear and catches light from every angle. A hand-set crystal adds a quiet shimmer without ever feeling loud. No piercing needed — simply slide it on and go.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic. To care, avoid contact with perfumes and water; store in the pouch provided.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    imgId: 'p-vivid-aura-a1',
    img2Id: 'p-vivid-aura-b2',
    titleId: 't-vivid-aura',
    descId: 'd-vivid-aura',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    categoryId: 'necklaces',
    price: 68,
    rating: 4.9,
    reviews: 204,
    material: '18K Gold Plated',
    tones: ['Gold'],
    short: 'A multicolor floral crystal necklace that blooms along the collarbone — a statement made softly.',
    description:
      'Majestic Flora Nectar is a garden in miniature. Each petal is set with a different crystal hue, graduating from amber to rose, arranged along a delicate gold-plated chain. It rests just below the collarbone and moves with you — the kind of necklace that turns a simple top into an outfit.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia. Adjustable 16–18 inch chain with extender. Hypoallergenic and nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    imgId: 'p-majestic-flora-a1',
    img2Id: 'p-majestic-flora-b2',
    titleId: 't-majestic-flora',
    descId: 'd-majestic-flora',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    categoryId: 'huggies',
    price: 38,
    rating: 4.7,
    reviews: 318,
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    short: 'Chunky gold dome huggies with a polished, sculptural finish — the everyday earring you never take off.',
    description:
      'Golden Sphere Huggies are the foundation of any jewelry wardrobe. A chunky polished dome sits snug against the lobe, comfortable enough to sleep in and bold enough to be noticed. The hinged closure keeps them secure all day. Sold as a pair.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure. Hypoallergenic, nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    imgId: 'p-golden-sphere-a1',
    img2Id: 'p-golden-sphere-b2',
    titleId: 't-golden-sphere',
    descId: 'd-golden-sphere',
    bestseller: true,
    badge: 'Bestseller',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    categoryId: 'earrings',
    price: 54,
    rating: 4.8,
    reviews: 89,
    material: '18K Gold Plated',
    tones: ['Gold'],
    short: 'Textured gold filigree drop earrings — heirloom craftsmanship with a modern, weightless feel.',
    description:
      'Amber Lace is inspired by antique lacework, reimagined in warm gold. Each filigree drop is textured by hand to catch the light, falling just past the jawline. Despite their intricate look, they are remarkably light and comfortable for all-day wear.',
    materials:
      '18K gold plating over brass. Hand-textured filigree. Lever-back closure. Nickel-free and hypoallergenic.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked.',
    imgId: 'p-amber-lace-a1',
    img2Id: 'p-amber-lace-b2',
    titleId: 't-amber-lace',
    descId: 'd-amber-lace',
    bestseller: true,
    badge: 'New',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    categoryId: 'necklaces',
    price: 95,
    rating: 5.0,
    reviews: 47,
    material: '18K Gold Plated',
    tones: ['Gold'],
    short: 'A gift-boxed earring and necklace set — coordinated, considered, and ready to give.',
    description:
      'The Royal Heirloom Set pairs our signature filigree drops with a matching pendant necklace, presented in a keepsake gift box. Designed to be worn together or apart, it is the perfect gift for a milestone — or a well-earned treat for yourself.',
    materials:
      '18K gold plating over brass and sterling silver. Cubic zirconia accents. Includes earrings, necklace, and gift box. Hypoallergenic and nickel-free.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns for a full refund — no questions asked. Gift wrapping included.',
    imgId: 'p-royal-heirloom-a1',
    img2Id: 'p-royal-heirloom-b2',
    titleId: 't-royal-heirloom',
    descId: 'd-royal-heirloom',
    bestseller: true,
    badge: 'Gift Set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'From huggies to statement drops',
    imgId: 'cat-earrings-7f',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Layers that tell your story',
    imgId: 'cat-necklaces-8e',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Everyday essentials, elevated',
    imgId: 'cat-huggies-9d',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 'tm1',
    name: 'Elena R.',
    rating: 5,
    text: 'The Golden Sphere Huggies haven\u2019t left my ears in three months. They feel far more expensive than they were.',
  },
  {
    id: 'tm2',
    name: 'Sofia M.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the box alone made her cry. The pieces are stunning in person.',
  },
  {
    id: 'tm3',
    name: 'Priya K.',
    rating: 5,
    text: 'I get compliments every time I wear the Flora Nectar necklace. The colors are warm and never tacky.',
  },
]

export const reels = [
  {
    id: 'reel1',
    caption: 'Golden Sphere Huggies, every day',
    imgId: 'reel-1-a3',
    titleId: 'reel-1-title',
  },
  {
    id: 'reel2',
    caption: 'Stacking the Vivid Aura cuff',
    imgId: 'reel-2-b4',
    titleId: 'reel-2-title',
  },
  {
    id: 'reel3',
    caption: 'Flora Nectar, golden hour',
    imgId: 'reel-3-c5',
    titleId: 'reel-3-title',
  },
  {
    id: 'reel4',
    caption: 'Amber Lace for date night',
    imgId: 'reel-4-d6',
    titleId: 'reel-4-title',
  },
  {
    id: 'reel5',
    caption: 'The Heirloom Set, unboxed',
    imgId: 'reel-5-e7',
    titleId: 'reel-5-title',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.categoryId === current.categoryId)
    .concat(products.filter((p) => p.id !== id && p.categoryId !== current.categoryId))
    .slice(0, limit)
}
