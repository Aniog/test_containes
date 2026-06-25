// Central product + content data for Velmora Fine Jewelry.
// Each product carries stable text-reference IDs (titleId/descId) used by
// the strk-img system so image queries resolve to the right DOM text nodes.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    categorySlug: 'earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    materials: ['18K Gold Plated'],
    shortDesc:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless shine, no piercing required.',
    description:
      'The Vivid Aura ear cuff is designed for the woman who collects light. Hand-finished in 18K gold plate over brass, its curved silhouette hugs the cartilage while a hand-set crystal catches every flicker. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materialsCare:
      '18K gold plated brass with a hand-set cubic zirconia crystal. Hypoallergenic, nickel and lead free. To keep its shine, avoid contact with water, perfume and lotion. Store in the pouch provided and polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'p-vivid-aura-1', titleId: 'vivid-aura-title', descId: 'vivid-aura-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-vivid-aura-2', titleId: 'vivid-aura-title', descId: 'vivid-aura-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-vivid-aura-3', titleId: 'vivid-aura-title', descId: 'vivid-aura-desc', ratio: '4x5', width: 800 },
    ],
    titleId: 'vivid-aura-title',
    descId: 'vivid-aura-desc',
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    categorySlug: 'necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 204,
    materials: ['18K Gold Plated'],
    shortDesc:
      'A multicolor floral crystal pendant suspended from a fine gold chain — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar blooms at the neckline. Each petal is set with a coloured crystal, graduating from amber to champagne, framed in 18K gold plate. The adjustable fine chain lets it rest perfectly above any neckline — a piece made for gifting and keeping.',
    materialsCare:
      '18K gold plated brass with multicolor cubic zirconia crystals. Hypoallergenic, nickel and lead free. Keep dry and away from perfumes. Clean with a soft, dry cloth and store separately to protect the stones.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    variants: ['Gold'],
    images: [
      { imgId: 'p-majestic-flora-1', titleId: 'majestic-flora-title', descId: 'majestic-flora-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-majestic-flora-2', titleId: 'majestic-flora-title', descId: 'majestic-flora-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-majestic-flora-3', titleId: 'majestic-flora-title', descId: 'majestic-flora-desc', ratio: '4x5', width: 800 },
    ],
    titleId: 'majestic-flora-title',
    descId: 'majestic-flora-desc',
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    categorySlug: 'huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    materials: ['18K Gold Plated'],
    shortDesc:
      'Chunky gold dome huggies with a polished, mirror finish — the everyday hoop reimagined.',
    description:
      'The Golden Sphere huggies are the hoop you will never take off. A chunky domed silhouette in 18K gold plate, polished to a mirror shine, with a secure hinged closure that hugs the lobe. Lightweight enough for all-day wear, bold enough to be noticed.',
    materialsCare:
      '18K gold plated brass with a hinged snap closure. Hypoallergenic, nickel and lead free. Wipe clean with a soft cloth after each wear and store in a dry place.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    variants: ['Gold', 'Silver'],
    images: [
      { imgId: 'p-golden-sphere-1', titleId: 'golden-sphere-title', descId: 'golden-sphere-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-golden-sphere-2', titleId: 'golden-sphere-title', descId: 'golden-sphere-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-golden-sphere-3', titleId: 'golden-sphere-title', descId: 'golden-sphere-desc', ratio: '4x5', width: 800 },
    ],
    titleId: 'golden-sphere-title',
    descId: 'golden-sphere-desc',
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    categorySlug: 'earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    materials: ['18K Gold Plated'],
    shortDesc:
      'Textured gold filigree drop earrings — intricate lacework rendered in warm metal.',
    description:
      'Amber Lace turns heirloom filigree into something modern. Each drop is hand-textured in 18K gold plate, the openwork catching light like fine lace. They move softly with the wearer, an understated elegance for day or evening.',
    materialsCare:
      '18K gold plated brass with a textured filigree finish and lever-back closure. Hypoallergenic, nickel and lead free. Handle gently to protect the openwork. Store flat in the pouch provided.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns — no questions asked.',
    variants: ['Gold'],
    images: [
      { imgId: 'p-amber-lace-1', titleId: 'amber-lace-title', descId: 'amber-lace-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-amber-lace-2', titleId: 'amber-lace-title', descId: 'amber-lace-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-amber-lace-3', titleId: 'amber-lace-title', descId: 'amber-lace-desc', ratio: '4x5', width: 800 },
    ],
    titleId: 'amber-lace-title',
    descId: 'amber-lace-desc',
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    categorySlug: 'necklaces',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    materials: ['18K Gold Plated'],
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated elegance, ready to give.',
    description:
      'The Royal Heirloom Set pairs a delicate crystal pendant necklace with matching drop earrings, both finished in 18K gold plate. Arriving in a signature Velmora gift box, it is the complete gesture — for a loved one, or for yourself.',
    materialsCare:
      '18K gold plated brass with cubic zirconia crystals. Hypoallergenic, nickel and lead free. Keep each piece dry and store in the gift box to preserve the finish.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days in a signature gift box. 30-day returns — no questions asked.',
    variants: ['Gold'],
    images: [
      { imgId: 'p-royal-heirloom-1', titleId: 'royal-heirloom-title', descId: 'royal-heirloom-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-royal-heirloom-2', titleId: 'royal-heirloom-title', descId: 'royal-heirloom-desc', ratio: '4x5', width: 800 },
      { imgId: 'p-royal-heirloom-3', titleId: 'royal-heirloom-title', descId: 'royal-heirloom-desc', ratio: '4x5', width: 800 },
    ],
    titleId: 'royal-heirloom-title',
    descId: 'royal-heirloom-desc',
    bestseller: true,
  },
]

export const categories = [
  {
    slug: 'earrings',
    name: 'Earrings',
    tagline: 'Statement drops, cuffs & studs',
    imgId: 'cat-earrings',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Statement drops, cuffs and studs in warm gold',
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    tagline: 'Pendants, chains & layers',
    imgId: 'cat-necklaces',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Pendants, chains and layered gold necklaces',
  },
  {
    slug: 'huggies',
    name: 'Huggies',
    tagline: 'Everyday hoops that hug the lobe',
    imgId: 'cat-huggies',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Everyday gold huggie hoops that hug the lobe',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere Huggies, styled for everyday',
    imgId: 'reel-1',
    titleId: 'reel-1-title',
  },
  {
    id: 'reel-2',
    caption: 'Layering the Majestic Flora Nectar',
    imgId: 'reel-2',
    titleId: 'reel-2-title',
  },
  {
    id: 'reel-3',
    caption: 'Vivid Aura cuff on the cartilage',
    imgId: 'reel-3',
    titleId: 'reel-3-title',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace drops for evening',
    imgId: 'reel-4',
    titleId: 'reel-4-title',
  },
  {
    id: 'reel-5',
    caption: 'The Royal Heirloom Set, unboxed',
    imgId: 'reel-5',
    titleId: 'reel-5-title',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I have worn my huggies every day for months and they still shine like new.',
  },
  {
    id: 't2',
    name: 'Sofia M.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the box alone made her cry. Beautiful, considered, premium without being loud.',
  },
  {
    id: 't3',
    name: 'Priya K.',
    rating: 5,
    text: 'I have sensitive ears and these are the first huggies that do not irritate me. Hypoallergenic and genuinely gorgeous.',
  },
]

export const trustBar = [
  { label: 'Free Worldwide Shipping' },
  { label: '30-Day Returns' },
  { label: '18K Gold Plated' },
  { label: 'Hypoallergenic' },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .concat(products.filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug))
    .slice(0, limit)
}

export function getBestsellers() {
  return products.filter((p) => p.bestseller)
}
