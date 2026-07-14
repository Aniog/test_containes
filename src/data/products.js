// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'ear-cuff',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    shortDesc: 'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plating over brass, it catches light from every angle thanks to a hand-set crystal. Wear it solo for a quiet statement or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over brass. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the provided pouch. Clean with a soft dry cloth.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgId2: 'prod-vivid-aura-jewels-img2',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'pendant',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    shortDesc: 'A multicolor floral crystal pendant suspended from a delicate gold chain.',
    description:
      'Majestic Flora Nectar blooms at the collarbone — a cluster of multicolor crystals arranged as petals around a warm gold centre. The adjustable 40–45cm chain lets it sit perfectly above any neckline. A gifting favourite for its romantic, garden-fresh glow.',
    materials:
      '18K gold plating over brass. Multicolor cubic zirconia. Adjustable chain 40–45cm with extender.',
    care: 'Keep dry and away from perfumes. Store flat in the gift box. Polish gently with a microfibre cloth.',
    tones: ['Gold'],
    badge: 'New',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgId2: 'prod-majestic-flora-nectar-img2',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'huggie',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    shortDesc: 'Chunky gold dome huggie earrings with a polished, light-catching finish.',
    description:
      'The Golden Sphere huggies deliver bold presence in a comfortable, everyday silhouette. Their chunky dome is polished to a mirror shine, reflecting warm gold light. A secure hinged hoop keeps them snug all day — the ultimate everyday-luxe staple.',
    materials: '18K gold plating over brass. Hinged hoop closure. Hypoallergenic, nickel-free.',
    care: 'Wipe clean after wear. Avoid water and chemicals. Store in a dry pouch.',
    tones: ['Gold', 'Silver'],
    badge: 'Bestseller',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgId2: 'prod-golden-sphere-huggies-img2',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'drop',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 74,
    shortDesc: 'Textured gold filigree drop earrings with an artisanal, lace-like finish.',
    description:
      'Amber Lace is a study in texture — each drop is hand-finished with a filigree pattern that reads like fine lace. The warm gold catches low light beautifully, making these the pair you reach for from desk to dinner. Lightweight despite their statement scale.',
    materials: '18K gold plating over brass. Textured filigree finish. Lever-back closure.',
    care: 'Handle with care to preserve the filigree detail. Keep dry and store separately.',
    tones: ['Gold'],
    badge: null,
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgId2: 'prod-amber-lace-earrings-img2',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    type: 'set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 41,
    shortDesc: 'A gift-boxed earring and necklace set designed to be treasured together.',
    description:
      'The Royal Heirloom Set pairs a coordinating pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Designed as a complete look, the set balances presence and wearability — the kind of gift that becomes an heirloom. The perfect choice for milestones and anniversaries.',
    materials: '18K gold plating over brass. Cubic zirconia accents. Necklace 42cm + extender. Lever-back earrings.',
    care: 'Store in the gift box when not worn. Avoid moisture and perfume. Clean with a soft cloth.',
    tones: ['Gold'],
    badge: 'Gift Set',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgId2: 'prod-royal-heirloom-set-img2',
  },
  {
    id: 'lumen-thread-necklace',
    name: 'Lumen Thread Necklace',
    price: 46,
    category: 'Necklaces',
    type: 'chain',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 58,
    shortDesc: 'A whisper-thin gold chain that layers effortlessly or shines alone.',
    description:
      'Lumen Thread is the foundation of any layered look — a fine gold chain with a subtle shimmer that sits close to the skin. Wear it solo for understated elegance or stack it with pendants. Adjustable length for versatile styling.',
    materials: '18K gold plating over brass. Fine cable chain. Adjustable 40–45cm.',
    care: 'Avoid tangles by storing flat. Keep dry and away from chemicals.',
    tones: ['Gold', 'Silver'],
    badge: null,
    titleId: 'prod-lumen-thread-necklace-title',
    descId: 'prod-lumen-thread-necklace-desc',
    imgId: 'prod-lumen-thread-necklace-img',
    imgId2: 'prod-lumen-thread-necklace-img2',
  },
  {
    id: 'celeste-pavé-huggies',
    name: 'Celeste Pavé Huggies',
    price: 52,
    category: 'Huggies',
    type: 'huggie',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 112,
    shortDesc: 'Pavé-set crystal huggies that glimmer like a constellation at the lobe.',
    description:
      'Celeste Pavé lines the front of each huggie with a row of hand-set crystals, creating a continuous sparkle that frames the face. The hinged hoop is comfortable for all-day wear and secure enough to sleep in. A modern classic with quiet brilliance.',
    materials: '18K gold plating over brass. Pavé cubic zirconia. Hinged hoop closure.',
    care: 'Protect the pavé setting from knocks. Clean gently with a soft brush and dry cloth.',
    tones: ['Gold', 'Silver'],
    badge: null,
    titleId: 'prod-celeste-pave-huggies-title',
    descId: 'prod-celeste-pave-huggies-desc',
    imgId: 'prod-celeste-pave-huggies-img',
    imgId2: 'prod-celeste-pave-huggies-img2',
  },
  {
    id: 'solene-arc-earrings',
    name: 'Solene Arc Earrings',
    price: 48,
    category: 'Earrings',
    type: 'drop',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 66,
    shortDesc: 'A sweeping gold arc that traces the jawline with architectural grace.',
    description:
      'Solene Arc brings architectural elegance to the everyday. Its single sweeping curve follows the line of the jaw, catching light along its polished edge. Lightweight and modern, it pairs as easily with a white shirt as with evening wear.',
    materials: '18K gold plating over brass. Polished arc. Lever-back closure.',
    care: 'Keep dry. Store separately to avoid bending the arc.',
    tones: ['Gold'],
    badge: null,
    titleId: 'prod-solene-arc-earrings-title',
    descId: 'prod-solene-arc-earrings-desc',
    imgId: 'prod-solene-arc-earrings-img',
    imgId2: 'prod-solene-arc-earrings-img2',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Ear cuffs, drops & statement hoops',
    imgId: 'cat-earrings-img',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Pendants, chains & layered looks',
    imgId: 'cat-necklaces-img',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Polished & pavé everyday hoops',
    imgId: 'cat-huggies-img',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Stacked gold, every day',
    imgId: 'reel-1-img',
    captionId: 'reel-1-caption',
  },
  {
    id: 'reel-2',
    caption: 'The ear cuff that stays put',
    imgId: 'reel-2-img',
    captionId: 'reel-2-caption',
  },
  {
    id: 'reel-3',
    caption: 'Florals, but make it gold',
    imgId: 'reel-3-img',
    captionId: 'reel-3-caption',
  },
  {
    id: 'reel-4',
    caption: 'Huggies for the everyday',
    imgId: 'reel-4-img',
    captionId: 'reel-4-caption',
  },
  {
    id: 'reel-5',
    caption: 'Gift-boxed & ready',
    imgId: 'reel-5-img',
    captionId: 'reel-5-caption',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I get compliments every single time I wear the Vivid Aura cuff.',
  },
  {
    id: 't2',
    name: 'Maya T.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as an anniversary gift — she hasn’t taken it off. The packaging felt so special.',
  },
  {
    id: 't3',
    name: 'Sofia L.',
    rating: 5,
    text: 'Finally huggies that don’t irritate my ears. Hypoallergenic and they actually stay on. Obsessed.',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .concat(products.filter((p) => p.id !== id && p.category !== current.category))
    .slice(0, limit)
}
