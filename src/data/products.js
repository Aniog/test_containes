// Central product + content data for Velmora Fine Jewelry.
// Image ids are unique per slot; queries reference nearby text element ids.

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Sculpted gold, worn close to the skin.',
    desc: 'Huggies, cuffs and drops finished in 18K gold plate.',
    imgId: 'cat-earrings-a1b2c3',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Light-catching chains for every neckline.',
    desc: 'Pendants and floral pieces layered or worn alone.',
    imgId: 'cat-necklaces-d4e5f6',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Chunky domes that hug the lobe.',
    desc: 'Everyday gold huggies, hypoallergenic and secure.',
    imgId: 'cat-huggies-g7h8i9',
  },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.8,
    reviewsCount: 126,
    short: 'Gold ear cuff with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff wraps the cartilage in warm gold plate, anchored by a hand-set crystal that catches the light with every turn. Designed to be worn alone or stacked with huggies for a curated ear.',
    materials:
      '18K gold plating over brass base. Hand-set cubic zirconia crystal. Nickel-free and hypoallergenic. To care, avoid contact with perfumes and water; store in the provided pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    badge: 'Bestseller',
    imgId: 'p-vivid-aura-1',
    imgId2: 'p-vivid-aura-2',
    gallery: ['p-vivid-aura-g1', 'p-vivid-aura-g2', 'p-vivid-aura-g3', 'p-vivid-aura-g4'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 4.9,
    reviewsCount: 88,
    short: 'Multicolor floral crystal necklace on a fine gold chain.',
    description:
      'A garden in miniature. The Majestic Flora Nectar necklace suspends a floral cluster of multicolor crystals from a delicate gold chain, finished with an adjustable clasp for the perfect drop.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain. Nickel-free and hypoallergenic.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    badge: 'New',
    imgId: 'p-majestic-flora-1',
    imgId2: 'p-majestic-flora-2',
    gallery: ['p-majestic-flora-g1', 'p-majestic-flora-g2', 'p-majestic-flora-g3', 'p-majestic-flora-g4'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.7,
    reviewsCount: 214,
    short: 'Chunky gold dome huggie earrings with a secure click closure.',
    description:
      'The Golden Sphere huggies are our most-loved everyday pair — a polished gold dome that hugs the lobe with a satisfying click closure. Lightweight enough to forget you are wearing them.',
    materials:
      '18K gold plating over brass. Polished dome finish. Click-and-lock closure. Nickel-free and hypoallergenic. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    badge: 'Bestseller',
    imgId: 'p-golden-sphere-1',
    imgId2: 'p-golden-sphere-2',
    gallery: ['p-golden-sphere-g1', 'p-golden-sphere-g2', 'p-golden-sphere-g3', 'p-golden-sphere-g4'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 4.8,
    reviewsCount: 67,
    short: 'Textured gold filigree drop earrings with a warm amber glow.',
    description:
      'Inspired by antique lacework, the Amber Lace drops are hand-textured in gold filigree with a soft amber-toned finish. An elegant drop that moves gently with the wearer.',
    materials:
      '18K gold plating over brass with textured filigree. Amber-toned resin inlay. Gold-plated leverback closure. Nickel-free and hypoallergenic.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    imgId: 'p-amber-lace-1',
    imgId2: 'p-amber-lace-2',
    gallery: ['p-amber-lace-g1', 'p-amber-lace-g2', 'p-amber-lace-g3', 'p-amber-lace-g4'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 5.0,
    reviewsCount: 41,
    short: 'Gift-boxed earring and necklace set in matching gold filigree.',
    description:
      'A complete gifting moment. The Royal Heirloom Set pairs a filigree pendant necklace with matching drop earrings, presented in a signature Velmora gift box. The kind of set that becomes an heirloom.',
    materials:
      '18K gold plating over brass. Hand-textured filigree pendant and drops. Adjustable 42–47cm chain. Leverback earring closures. Nickel-free and hypoallergenic. Gift boxed.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging and gift box.',
    badge: 'Gift Set',
    imgId: 'p-royal-heirloom-1',
    imgId2: 'p-royal-heirloom-2',
    gallery: ['p-royal-heirloom-g1', 'p-royal-heirloom-g2', 'p-royal-heirloom-g3', 'p-royal-heirloom-g4'],
  },
  {
    id: 'lumen-thread-studs',
    name: 'Lumen Thread Studs',
    price: 34,
    category: 'earrings',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.6,
    reviewsCount: 152,
    short: 'Minimal gold bar studs for an effortless everyday ear.',
    description:
      'The Lumen Thread studs are a quiet luxury essential — a slim gold bar that sits flat against the lobe. Stack them with huggies for a curated look or wear them alone.',
    materials:
      '18K gold plating over brass. Slim bar profile. Gold-plated butterfly backs. Nickel-free and hypoallergenic. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    imgId: 'p-lumen-thread-1',
    imgId2: 'p-lumen-thread-2',
    gallery: ['p-lumen-thread-g1', 'p-lumen-thread-g2', 'p-lumen-thread-g3', 'p-lumen-thread-g4'],
  },
  {
    id: 'seraph-chain-necklace',
    name: 'Seraph Chain Necklace',
    price: 58,
    category: 'necklaces',
    material: '18K Gold Plated',
    tone: ['Gold'],
    rating: 4.9,
    reviewsCount: 73,
    short: 'Fine paperclip gold chain that layers beautifully.',
    description:
      'The Seraph is a fine paperclip chain in warm gold plate — the layering piece you reach for every morning. Wear it solo for a whisper of gold or stack with pendants.',
    materials:
      '18K gold plating over brass. Fine paperclip chain. Adjustable 40–45cm with extender. Lobster clasp. Nickel-free and hypoallergenic.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    imgId: 'p-seraph-chain-1',
    imgId2: 'p-seraph-chain-2',
    gallery: ['p-seraph-chain-g1', 'p-seraph-chain-g2', 'p-seraph-chain-g3', 'p-seraph-chain-g4'],
  },
  {
    id: 'celeste-crescent-huggies',
    name: 'Celeste Crescent Huggies',
    price: 44,
    category: 'huggies',
    material: '18K Gold Plated',
    tone: ['Gold', 'Silver'],
    rating: 4.7,
    reviewsCount: 98,
    short: 'Crescent-moon huggies with a subtle crystal edge.',
    description:
      'A crescent silhouette hugs the lobe with a fine row of crystals along the inner edge. The Celeste Crescent huggies are delicate with just enough shimmer for evening.',
    materials:
      '18K gold plating over brass. Pavé cubic zirconia along inner edge. Hinged click closure. Nickel-free and hypoallergenic. Sold as a pair.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    imgId: 'p-celeste-crescent-1',
    imgId2: 'p-celeste-crescent-2',
    gallery: ['p-celeste-crescent-g1', 'p-celeste-crescent-g2', 'p-celeste-crescent-g3', 'p-celeste-crescent-g4'],
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The Golden Sphere huggies have not left my ears in three months. They look far more expensive than they were.',
  },
  {
    id: 't2',
    name: 'Priya K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the box alone made her cry. Beautiful, warm gold.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'I have sensitive skin and these are the first gold pieces that have not irritated me. Quietly luxurious.',
  },
]

export const reels = [
  { id: 'r1', caption: 'Stacked huggies, golden hour', imgId: 'reel-1-aabb11' },
  { id: 'r2', caption: 'The Vivid Aura cuff on the cartilage', imgId: 'reel-2-bbcc22' },
  { id: 'r3', caption: 'Flora Nectar, layered chains', imgId: 'reel-3-ccdd33' },
  { id: 'r4', caption: 'Amber Lace drops in motion', imgId: 'reel-4-ddee44' },
  { id: 'r5', caption: 'Everyday gold, no effort', imgId: 'reel-5-eeff55' },
]

export const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const formatPrice = (n) => `$${n.toFixed(0)}`

export const getProduct = (id) => products.find((p) => p.id === id)

export const getRelated = (product, count = 4) =>
  products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, count)
