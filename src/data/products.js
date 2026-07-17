// Seed product data for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes.
// Each product carries stable text-reference IDs so image queries resolve
// to nearby descriptive text in the DOM.

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
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless edge for the unpierced ear.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plating over sterling silver. A hand-set crystal catches the light with every turn. Wear it solo for a quiet statement or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with perfumes and water. Store in the provided pouch. Polish with a soft cloth.',
    titleId: 'prod-vivid-aura-jewels-title',
    descId: 'prod-vivid-aura-jewels-desc',
    imgId: 'prod-vivid-aura-jewels-img',
    imgId2: 'prod-vivid-aura-jewels-img2',
    gallery: [
      { imgId: 'gal-vivid-aura-1', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
      { imgId: 'gal-vivid-aura-2', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
      { imgId: 'gal-vivid-aura-3', titleId: 'prod-vivid-aura-jewels-title', descId: 'prod-vivid-aura-jewels-desc' },
    ],
    bestseller: true,
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
      'A multicolor floral crystal necklace that blooms along the collarbone — a garden of light, gilded in gold.',
    description:
      'Majestic Flora Nectar suspends a cascade of enamel-petaled blooms, each centred with a crystal in soft jewel tones. The adjustable 16–18 inch chain lets it rest perfectly at the neckline. A romantic heirloom piece for gifting and self-purchase alike.',
    materials:
      '18K gold plating over brass base. Cubic zirconia and enamel detailing. Lobster clasp with 2-inch extender.',
    care: 'Keep dry and away from cosmetics. Store flat in the gift box. Clean gently with a microfibre cloth.',
    titleId: 'prod-majestic-flora-nectar-title',
    descId: 'prod-majestic-flora-nectar-desc',
    imgId: 'prod-majestic-flora-nectar-img',
    imgId2: 'prod-majestic-flora-nectar-img2',
    gallery: [
      { imgId: 'gal-majestic-flora-1', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
      { imgId: 'gal-majestic-flora-2', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
      { imgId: 'gal-majestic-flora-3', titleId: 'prod-majestic-flora-nectar-title', descId: 'prod-majestic-flora-nectar-desc' },
    ],
    bestseller: true,
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
      'Chunky gold dome huggie earrings with a polished, sculptural silhouette — the everyday icon.',
    description:
      'Golden Sphere Huggies reimagine the classic huggie with a bold, chunky dome that catches light from every angle. A hinged closure keeps them secure and comfortable for all-day wear. The pair you will reach for every morning.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.',
    care: 'Remove before showering or swimming. Wipe clean with a soft cloth after each wear.',
    titleId: 'prod-golden-sphere-huggies-title',
    descId: 'prod-golden-sphere-huggies-desc',
    imgId: 'prod-golden-sphere-huggies-img',
    imgId2: 'prod-golden-sphere-huggies-img2',
    gallery: [
      { imgId: 'gal-golden-sphere-1', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
      { imgId: 'gal-golden-sphere-2', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
      { imgId: 'gal-golden-sphere-3', titleId: 'prod-golden-sphere-huggies-title', descId: 'prod-golden-sphere-huggies-desc' },
    ],
    bestseller: true,
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
      'Textured gold filigree drop earrings — intricate lacework rendered in warm metal, made to move.',
    description:
      'Amber Lace Earrings translate delicate filigree into a modern drop silhouette. The openwork catches light and air, swaying gently with movement. A refined finishing touch for both day and evening.',
    materials:
      '18K gold plating over brass. Textured filigree detailing. Lever-back closure for security.',
    care: 'Handle with care to preserve the filigree. Store separately to avoid tangling. Keep dry.',
    titleId: 'prod-amber-lace-earrings-title',
    descId: 'prod-amber-lace-earrings-desc',
    imgId: 'prod-amber-lace-earrings-img',
    imgId2: 'prod-amber-lace-earrings-img2',
    gallery: [
      { imgId: 'gal-amber-lace-1', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
      { imgId: 'gal-amber-lace-2', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
      { imgId: 'gal-amber-lace-3', titleId: 'prod-amber-lace-earrings-title', descId: 'prod-amber-lace-earrings-desc' },
    ],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: 'gold',
    shortDesc:
      'A gift-boxed earring and necklace set — coordinated elegance, ready to give and to treasure.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, presented in a signature Velmora gift box. Coordinated, considered, and ready to mark any occasion — from anniversaries to just-because.',
    materials:
      '18K gold plating over 925 sterling silver. Cubic zirconia accents. Includes gift box and polishing cloth.',
    care: 'Store in the gift box when not worn. Avoid moisture and perfumes. Polish with the included cloth.',
    titleId: 'prod-royal-heirloom-set-title',
    descId: 'prod-royal-heirloom-set-desc',
    imgId: 'prod-royal-heirloom-set-img',
    imgId2: 'prod-royal-heirloom-set-img2',
    gallery: [
      { imgId: 'gal-royal-heirloom-1', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
      { imgId: 'gal-royal-heirloom-2', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
      { imgId: 'gal-royal-heirloom-3', titleId: 'prod-royal-heirloom-set-title', descId: 'prod-royal-heirloom-set-desc' },
    ],
    bestseller: true,
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    label: 'Earrings',
    desc: 'Huggies, cuffs & drops',
    imgId: 'cat-earrings-img',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    label: 'Necklaces',
    desc: 'Pendants & chains',
    imgId: 'cat-necklaces-img',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    label: 'Huggies',
    desc: 'Everyday essentials',
    imgId: 'cat-huggies-img',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const testimonials = [
  {
    name: 'Elena M.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real. I have not taken the huggies off since they arrived.',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Gifted the Royal Heirloom Set to my mother and she cried. The box alone feels like a treasure.',
  },
  {
    name: 'Camille R.',
    rating: 5,
    text: 'Finally demi-fine that does not turn my skin green. The packaging is editorial and beautiful.',
  },
]

export const reels = [
  { id: 'reel-1', caption: 'Stacked huggies, golden hour', imgId: 'reel-1-img', titleId: 'reel-1-title' },
  { id: 'reel-2', caption: 'The ear cuff that changed my routine', imgId: 'reel-2-img', titleId: 'reel-2-title' },
  { id: 'reel-3', caption: 'Flora Nectar, styled three ways', imgId: 'reel-3-img', titleId: 'reel-3-title' },
  { id: 'reel-4', caption: 'Filigree that catches the light', imgId: 'reel-4-img', titleId: 'reel-4-title' },
  { id: 'reel-5', caption: 'Unboxing the Heirloom Set', imgId: 'reel-5-img', titleId: 'reel-5-title' },
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
