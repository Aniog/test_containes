// Seed product catalog for Velmora Fine Jewelry.
// Each product carries stable ids used to wire up the stock image system
// (data-strk-img) and DOM text references.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'earring',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'gold',
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.',
    description:
      'The Vivid Aura ear cuff is our love letter to everyday radiance. Hand-finished in 18K gold plating over sterling silver, its curved silhouette hugs the cartilage while a hand-set crystal catches the light with every turn. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided Velmora pouch. Gently wipe with a soft cloth to restore shine.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. Delivery in 3–7 business days. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-b2',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    tone: 'gold',
    shortDesc:
      'A multicolor floral crystal necklace that blooms along the collarbone — a garden of light for day or evening.',
    description:
      'Majestic Flora Nectar is a pendant necklace where tiny enamel-touched petals meet a constellation of multicolor crystals. Suspended from a delicate gold chain, it rests just below the collarbone — the kind of piece that turns a simple neckline into a moment.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with lobster clasp.',
    care: 'Keep dry and away from perfumes. Store flat in the Velmora box to protect the crystals. Polish with a microfibre cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. Delivery in 3–7 business days. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    badge: 'New',
    imgId: 'prod-majestic-flora-a1',
    imgIdAlt: 'prod-majestic-flora-b2',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'gold',
    shortDesc:
      'Chunky gold dome huggie earrings with a polished, mirror-bright finish — the everyday gold you never take off.',
    description:
      'Our Golden Sphere Huggies reimagine the classic huggie with a bold, chunky dome silhouette. The polished surface reflects light from every angle, making them substantial enough to wear alone yet comfortable enough to sleep in. A hinge closure keeps them secure all day.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure. Hypoallergenic.',
    care: 'Resistant to everyday wear. Wipe clean with a soft cloth. Store in the Velmora pouch when not worn.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. Delivery in 3–7 business days. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    badge: 'Bestseller',
    imgId: 'prod-golden-sphere-a1',
    imgIdAlt: 'prod-golden-sphere-b2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 91,
    tone: 'gold',
    shortDesc:
      'Textured gold filigree drop earrings with an artisanal, lace-like openwork — heirloom craft, modern weight.',
    description:
      'Amber Lace is a drop earring inspired by antique filigree. Each openwork panel is textured by hand to catch the light like woven gold thread. Lightweight despite their presence, they move gracefully and bring an editorial finish to both daywear and occasion dressing.',
    materials:
      '18K gold plating over brass. Hand-textured filigree openwork. Lever-back closure. Nickel-free.',
    care: 'Handle the filigree gently. Avoid water and cosmetics. Store in the Velmora box to preserve the texture.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. Delivery in 3–7 business days. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    badge: null,
    imgId: 'prod-amber-lace-a1',
    imgIdAlt: 'prod-amber-lace-b2',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: 'gold',
    shortDesc:
      'A gift-boxed earring and necklace set designed to be treasured — the complete Velmora moment, ready to give.',
    description:
      'The Royal Heirloom Set pairs our signature drop earrings with a matching pendant necklace, presented in a keepsake Velmora gift box. Coordinated in proportion and finish, the two pieces are made to be worn together — a complete, considered gift for someone treasured (including yourself).',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set crystals. Includes earrings, necklace and gift box.',
    care: 'Store each piece separately in the gift box to prevent tangling. Keep dry and polish with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. Delivery in 3–7 business days. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    badge: 'Gift Set',
    imgId: 'prod-royal-heirloom-a1',
    imgIdAlt: 'prod-royal-heirloom-b2',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    tagline: 'From cuffs to drops',
    imgId: 'cat-earrings-a1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    tagline: 'Pendants & chains',
    imgId: 'cat-necklaces-a1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    tagline: 'Everyday gold',
    imgId: 'cat-huggies-a1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The Golden Sphere Huggies haven\u2019t left my ears since they arrived. They feel far more expensive than they were.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the box alone made it feel luxurious. My mother was thrilled.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Beautiful packaging, fast shipping, and the gold tone is genuinely warm and rich. My new go-to for jewelry.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked huggies, golden hour',
    imgId: 'reel-r1-a1',
    titleId: 'reel-r1-title',
  },
  {
    id: 'r2',
    caption: 'The Vivid Aura cuff on the ear',
    imgId: 'reel-r2-a1',
    titleId: 'reel-r2-title',
  },
  {
    id: 'r3',
    caption: 'Majestic Flora, layered',
    imgId: 'reel-r3-a1',
    titleId: 'reel-r3-title',
  },
  {
    id: 'r4',
    caption: 'Amber Lace in motion',
    imgId: 'reel-r4-a1',
    titleId: 'reel-r4-title',
  },
  {
    id: 'r5',
    caption: 'A gift, unboxed',
    imgId: 'reel-r5-a1',
    titleId: 'reel-r5-title',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(slug, limit = 4) {
  return products.filter((p) => p.slug !== slug).slice(0, limit)
}
