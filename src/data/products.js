// Seed product catalog for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'earring',
    tone: 'gold',
    rating: 4.8,
    reviews: 126,
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless edge for the unpierced ear.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plate over sterling silver. A hand-set crystal catches the light with every turn. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    badges: ['Bestseller'],
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-alt-b2',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'necklace',
    tone: 'gold',
    rating: 4.9,
    reviews: 203,
    shortDesc:
      'A multicolor floral crystal necklace that blooms along the collarbone — a garden of light, gold-set.',
    description:
      'Majestic Flora Nectar suspends a cascade of floral motifs, each petal cradling a crystal in soft multicolor hues. The adjustable gold chain lets it rest perfectly at the neckline, making it a versatile piece from day to evening.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with extender.',
    care: 'Keep dry and away from perfumes. Clean with a microfibre cloth. Store flat in its gift box.',
    badges: ['Bestseller', 'New'],
    imgId: 'prod-majestic-flora-c3',
    imgIdAlt: 'prod-majestic-flora-alt-d4',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    tone: 'gold',
    rating: 4.7,
    reviews: 318,
    shortDesc:
      'Chunky gold dome huggie earrings with a polished, sculptural silhouette — everyday gold, elevated.',
    description:
      'The Golden Sphere huggies reimagine the everyday hoop as a chunky polished dome. Their hinged closure hugs the lobe snugly for all-day comfort, while the high-shine gold finish makes them a wardrobe staple you will reach for again and again.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged huggie closure.',
    care: 'Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.',
    badges: ['Bestseller'],
    imgId: 'prod-golden-sphere-e5',
    imgIdAlt: 'prod-golden-sphere-alt-f6',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'earring',
    tone: 'gold',
    rating: 4.8,
    reviews: 91,
    shortDesc:
      'Textured gold filigree drop earrings — intricate lacework rendered in warm, glowing gold.',
    description:
      'Amber Lace drops are an ode to artisan filigree. Each earring is a lattice of textured gold that moves softly with the wearer, catching warm light through its openwork. Lightweight and quietly ornate, they transition from desk to dinner.',
    materials:
      '18K gold plating over brass. Textured filigree openwork. Lightweight lever-back closure.',
    care: 'Handle with care to preserve the filigree. Keep dry, store separately to avoid tangling.',
    badges: [],
    imgId: 'prod-amber-lace-g7',
    imgIdAlt: 'prod-amber-lace-alt-h8',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    type: 'set',
    tone: 'gold',
    rating: 5.0,
    reviews: 64,
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated gold elegance, ready to treasure or to give.',
    description:
      'The Royal Heirloom Set pairs a delicate gold pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Designed to be worn together or apart, it is the perfect gift for milestones, anniversaries, or a well-earned treat for yourself.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set crystal accents. Necklace 42cm with extender. Gift box included.',
    care: 'Store in the provided gift box. Avoid water and perfume. Polish with a soft cloth.',
    badges: ['Gift Set'],
    imgId: 'prod-royal-heirloom-i9',
    imgIdAlt: 'prod-royal-heirloom-alt-j0',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    desc: 'Statement drops, cuffs & everyday studs',
    imgId: 'cat-earrings-k1',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    desc: 'Pendants, chains & layered gold',
    imgId: 'cat-necklaces-l2',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'huggies',
    desc: 'Polished hoops that hug the lobe',
    imgId: 'cat-huggies-m3',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and the finish feels far more expensive than the price. I get compliments every time I wear the Flora necklace.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift and the box alone made it feel luxurious. My sister has not taken it off since.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'The Sphere huggies are my new everyday pair. Lightweight, hypoallergenic, and they have not tarnished after months.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Stacked gold, soft light',
    imgId: 'reel-1-n4',
    titleId: 'reel-title-1',
  },
  {
    id: 'r2',
    caption: 'The everyday huggie',
    imgId: 'reel-2-o5',
    titleId: 'reel-title-2',
  },
  {
    id: 'r3',
    caption: 'Flora in full bloom',
    imgId: 'reel-3-p6',
    titleId: 'reel-title-3',
  },
  {
    id: 'r4',
    caption: 'Filigree in motion',
    imgId: 'reel-4-q7',
    titleId: 'reel-title-4',
  },
  {
    id: 'r5',
    caption: 'Gifted, treasured',
    imgId: 'reel-5-r8',
    titleId: 'reel-title-5',
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
