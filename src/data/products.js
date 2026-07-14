// Seed product catalog for Velmora Fine Jewelry.
// Each product carries stable ids used to build data-strk-img query references
// and matching DOM text element ids at render time.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    type: 'ear cuff',
    material: '18K Gold Plated',
    tone: 'gold',
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.',
    longDesc:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, finished in 18K gold plating over sterling silver. A hand-set crystal catches the light with every turn. Wear it solo for a quiet statement, or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with water, perfume, and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.',
    imgId: 'prod-vivid-aura-a1',
    hoverImgId: 'prod-vivid-aura-b2',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    type: 'floral crystal necklace',
    material: '18K Gold Plated',
    tone: 'gold',
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    shortDesc:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a garden of light against the collarbone.',
    longDesc:
      'The Majestic Flora Nectar necklace blooms with a cluster of multicolor crystals set in a gold-plated floral motif. The adjustable 40–45cm chain lets you layer it close to the neck or let it rest lower. A romantic piece designed for gifting and self-purchase alike.',
    materials:
      '18K gold plating over 925 sterling silver. Multicolor cubic zirconia. Adjustable chain 40–45cm with extender.',
    care: 'Keep dry and away from perfumes. Store flat in the gift box. Polish with a microfiber cloth to restore shine.',
    imgId: 'prod-majestic-flora-a1',
    hoverImgId: 'prod-majestic-flora-b2',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    type: 'dome huggie earrings',
    material: '18K Gold Plated',
    tone: 'gold',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    shortDesc:
      'Chunky gold dome huggies that sit close to the lobe — everyday gold with a confident, sculptural presence.',
    longDesc:
      'The Golden Sphere Huggies reimagine the classic huggie with a polished dome silhouette that catches light from every angle. A secure hinged hoop keeps them comfortable for all-day wear. The everyday gold earring you will reach for again and again.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome. Hinged snap closure. Sold as a pair.',
    care: 'Remove before showering or swimming. Wipe clean with a soft cloth. Store in a dry place.',
    imgId: 'prod-golden-sphere-a1',
    hoverImgId: 'prod-golden-sphere-b2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    type: 'filigree drop earrings',
    material: '18K Gold Plated',
    tone: 'gold',
    rating: 4.8,
    reviews: 64,
    badge: null,
    shortDesc:
      'Textured gold filigree drop earrings — intricate lacework in warm gold that moves softly with you.',
    longDesc:
      'The Amber Lace Earrings are an ode to traditional filigree, reimagined in warm gold plating. Each drop is a lattice of fine goldwork that sways gently. Lightweight enough for hours of wear, ornate enough for the occasions that matter.',
    materials:
      '18K gold plating over 925 sterling silver. Textured filigree drop. Lever-back closure. Nickel-free.',
    care: 'Handle with care to preserve the filigree detail. Avoid water and chemicals. Store in the provided box.',
    imgId: 'prod-amber-lace-a1',
    hoverImgId: 'prod-amber-lace-b2',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    type: 'earring and necklace set',
    material: '18K Gold Plated',
    tone: 'gold',
    rating: 5.0,
    reviews: 41,
    badge: 'Gift Set',
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated gold pieces made for marking the moments worth remembering.',
    longDesc:
      'The Royal Heirloom Set pairs a refined gold pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Designed for gifting, the set arrives ready to mark an anniversary, a milestone, or a quiet celebration of self.',
    materials:
      '18K gold plating over 925 sterling silver. Coordinated pendant necklace and drop earrings. Signature gift box included.',
    care: 'Store each piece separately in the gift box. Keep dry. Clean with a soft polishing cloth.',
    imgId: 'prod-royal-heirloom-a1',
    hoverImgId: 'prod-royal-heirloom-b2',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Huggies, cuffs & drops in warm gold',
    imgId: 'cat-earrings-a1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Pendants & chains for every neckline',
    imgId: 'cat-necklaces-a1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Close-set hoops for everyday gold',
    imgId: 'cat-huggies-a1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, every day',
    imgId: 'reel-1-a1',
    titleId: 'reel-1-title',
  },
  {
    id: 'reel-2',
    caption: 'Stacked cuffs for golden hour',
    imgId: 'reel-2-a1',
    titleId: 'reel-2-title',
  },
  {
    id: 'reel-3',
    caption: 'Flora Nectar against the skin',
    imgId: 'reel-3-a1',
    titleId: 'reel-3-title',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace in soft motion',
    imgId: 'reel-4-a1',
    titleId: 'reel-4-title',
  },
  {
    id: 'reel-5',
    caption: 'The Heirloom, unboxed',
    imgId: 'reel-5-a1',
    titleId: 'reel-5-title',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I have worn my huggies every single day for months and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift and the presentation alone was worth it. My mother cried. The pieces feel far more expensive than they were.',
  },
  {
    id: 't3',
    name: 'Lena R.',
    rating: 5,
    text: 'Quiet, elegant, and so wearable. The Flora Nectar necklace has become my signature piece. Compliments every time I wear it.',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  return products
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? -1 : 0
      const bMatch = b.category === current.category ? -1 : 0
      return aMatch - bMatch
    })
    .slice(0, limit)
}
