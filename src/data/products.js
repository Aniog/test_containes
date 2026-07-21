// Seed product data for Velmora Fine Jewelry.
// Images are wired through the strk-img system using stable imgId / titleId / descId
// references so the build-time plugin can resolve warm gold-jewelry photography.

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
    badge: 'Bestseller',
    shortDesc: 'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plate over brass, it catches the light through a hand-set crystal that reads as a quiet glint rather than a sparkle. Wear it solo for a minimalist line, or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over solid brass base. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal accent.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in the provided pouch. Clean gently with a soft dry cloth.',
    imgId: 'p-vivid-aura-7f2a',
    imgId2: 'p-vivid-aura-alt-3b9c',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'necklace',
    price: 68,
    rating: 4.9,
    reviews: 88,
    tone: 'gold',
    badge: 'New',
    shortDesc: 'A multicolor floral crystal necklace that blooms along the collarbone.',
    description:
      'Majestic Flora Nectar suspends a garland of micro-crystal petals along a fine gold chain, each flower set with a different warm stone. The result is a necklace that reads as jewelry from across the room and as a garden up close — equally at home over a silk blouse or a plain tee.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia crystals. Adjustable 16–18 inch chain with extender.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystal settings.',
    imgId: 'p-majestic-flora-2d4e',
    imgId2: 'p-majestic-flora-alt-8c1f',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie',
    price: 38,
    rating: 4.7,
    reviews: 214,
    tone: 'gold',
    badge: 'Bestseller',
    shortDesc: 'Chunky gold dome huggie earrings with a polished, architectural curve.',
    description:
      'The Golden Sphere huggies reimagine the everyday hoop as a smooth, weighty dome that sits flush to the lobe. The hinged closure clicks securely and lies flat, so they are comfortable enough to sleep in and substantial enough to wear alone as a signature.',
    materials:
      '18K gold plating over brass. Polished dome finish. Hinged snap closure. Sold as a pair.',
    care: 'Wipe clean with a soft cloth. Avoid water and chemicals to preserve the plating.',
    imgId: 'p-golden-sphere-9a3b',
    imgId2: 'p-golden-sphere-alt-5e7d',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'earring',
    price: 54,
    rating: 4.8,
    reviews: 67,
    tone: 'gold',
    badge: null,
    shortDesc: 'Textured gold filigree drop earrings with a featherweight, lace-like drape.',
    description:
      'Amber Lace translates traditional filigree into a modern drop earring. The openwork gold catches light from every angle while remaining almost weightless on the ear. A quiet statement piece that moves with you.',
    materials:
      '18K gold plating over brass. Textured filigree openwork. Lever-back closure for security.',
    care: 'Handle by the closure to protect the filigree. Store in a separate compartment to avoid tangling.',
    imgId: 'p-amber-lace-4f8c',
    imgId2: 'p-amber-lace-alt-1b6e',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 41,
    tone: 'gold',
    badge: 'Gift Set',
    shortDesc: 'A gift-boxed earring and necklace set designed to be treasured together.',
    description:
      'The Royal Heirloom Set pairs a delicate crystal-accented necklace with matching drop earrings, presented in a keepsake Velmora gift box. Coordinated in tone and proportion, the two pieces layer effortlessly or stand alone — a complete gift for a milestone, or a treat for yourself.',
    materials:
      '18K gold plating over brass. Cubic zirconia accents. Necklace 16–18 inch adjustable. Earrings with lever-back closure. Arrives in a signature gift box.',
    care: 'Store each piece in the provided pouches inside the gift box. Keep dry and away from perfumes.',
    imgId: 'p-royal-heirloom-6d2a',
    imgId2: 'p-royal-heirloom-alt-9f4b',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  { id: 'earring', label: 'Earrings', imgId: 'cat-earrings-3a7c', titleId: 'cat-title-earrings', descId: 'cat-desc-earrings' },
  { id: 'necklace', label: 'Necklaces', imgId: 'cat-necklaces-7b2e', titleId: 'cat-title-necklaces', descId: 'cat-desc-necklaces' },
  { id: 'huggie', label: 'Huggies', imgId: 'cat-huggies-5c9d', titleId: 'cat-title-huggies', descId: 'cat-desc-huggies' },
]

export const reels = [
  { id: 'reel-1', caption: 'Stacked huggies, golden hour', imgId: 'reel-1-a3f2', titleId: 'reel-1-title' },
  { id: 'reel-2', caption: 'The Vivid Aura, up close', imgId: 'reel-2-b7e1', titleId: 'reel-2-title' },
  { id: 'reel-3', caption: 'Flora Nectar on bare skin', imgId: 'reel-3-c4d8', titleId: 'reel-3-title' },
  { id: 'reel-4', caption: 'Amber Lace in motion', imgId: 'reel-4-d9a6', titleId: 'reel-4-title' },
  { id: 'reel-5', caption: 'A gift, unboxed', imgId: 'reel-5-e2b5', titleId: 'reel-5-title' },
]

export const testimonials = [
  { id: 't1', name: 'Sofia M.', rating: 5, text: 'The gold plating is unreal for the price. I get compliments every single time I wear the Flora Nectar necklace.' },
  { id: 't2', name: 'Priya K.', rating: 5, text: 'Bought the Heirloom Set as a gift and the box alone made her cry. Quality feels far beyond what I paid.' },
  { id: 't3', name: 'Elena R.', rating: 5, text: 'I sleep in the Sphere Huggies. They never irritate my sensitive ears and the hinge is still perfect months later.' },
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
      const aMatch = a.type === current.type ? 0 : 1
      const bMatch = b.type === current.type ? 0 : 1
      return aMatch - bMatch
    })
    .slice(0, limit)
}
