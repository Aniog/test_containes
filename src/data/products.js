// Seed product data for Velmora Fine Jewelry.
// Each product has two image slots (primary + hover) driven by the strk image system.
// imgId / hoverImgId are unique slot ids; titleId / descId are DOM ids referenced in queries.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    subcategory: 'Ear Cuff',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required. Effortless edge for the everyday.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, finished in luminous 18K gold plate over sterling silver. A hand-set crystal catches the light with every turn. Wear it solo for a quiet statement, or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel and lead free. Hand-set cubic zirconia crystal.',
    care: 'Store in the provided pouch away from moisture. Avoid contact with perfumes and lotions. Gently wipe with a soft cloth to restore shine.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-1a2b',
    hoverImgId: 'p-vivid-aura-2c3d',
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    subcategory: 'Pendant',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 203,
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a garden of light at the collarbone.',
    description:
      'The Majestic Flora Nectar necklace blooms with a cluster of multicolor crystals set in a hand-finished floral motif. The adjustable 16–18 inch chain lets it rest perfectly against the skin. A romantic heirloom piece for gifting and self-purchase alike.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia. Adjustable 16–18 inch chain with lobster clasp.',
    care: 'Store flat in the provided box. Keep away from water and cosmetics. Polish with a microfiber cloth.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-majestic-flora-1e4f',
    hoverImgId: 'p-majestic-flora-2g5h',
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    subcategory: 'Huggie Hoop',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 318,
    shortDescription:
      'Chunky gold dome huggie earrings with a smooth, sculpted finish. The everyday luxury you will never take off.',
    description:
      'The Golden Sphere Huggies reimagine the classic hoop with a bold, chunky dome silhouette. A secure hinged closure keeps them snug against the lobe. Lightweight enough for all-day wear, polished to a mirror finish.',
    materials:
      '18K gold plating over 925 sterling silver. Hinged snap closure. Hypoallergenic, nickel free.',
    care: 'Clean with a soft damp cloth. Store in a dry place. Avoid sleeping in to preserve the hinge.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-1i6j',
    hoverImgId: 'p-golden-sphere-2k7l',
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    subcategory: 'Drop',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 91,
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern. Old-world craft, modern movement.',
    description:
      'The Amber Lace earrings are a study in negative space — intricate filigree scrolls catch the light as they sway. Each pair is hand-finished to reveal the warm depth of the gold plate. An elegant drop for evenings and occasions.',
    materials:
      '18K gold plating over brass. Textured filigree openwork. Lever-back closure for security.',
    care: 'Handle with care to protect the filigree. Store in the provided pouch. Wipe gently to clean.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-amber-lace-1m8n',
    hoverImgId: 'p-amber-lace-2o9p',
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    subcategory: 'Gift Set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 74,
    shortDescription:
      'A gift-boxed earring and necklace set, designed to be worn together. The complete Velmora moment, ready to give.',
    description:
      'The Royal Heirloom Set pairs our signature floral pendant necklace with matching crystal drop earrings, presented in a keepsake gift box. Coordinated, considered, and ready to mark any occasion. The most-loved gift in the collection.',
    materials:
      '18K gold plating over brass and sterling silver. Cubic zirconia accents. Includes gift box, pouch, and care card.',
    care: 'Store each piece separately in the provided box. Avoid moisture and cosmetics. Polish with a soft cloth.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-royal-heirloom-1q0r',
    hoverImgId: 'p-royal-heirloom-2s1t',
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'Earrings',
    imgId: 'cat-earrings-a1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    description: 'Cuffs, drops & huggies',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'Necklaces',
    imgId: 'cat-necklaces-b2',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    description: 'Pendants & chains',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'Huggies',
    imgId: 'cat-huggies-c3',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    description: 'Everyday hoops',
  },
]

export const reels = [
  { id: 'reel-1', caption: 'Golden Sphere Huggies, all day.', imgId: 'reel-1-d4', titleId: 'reel-1-title' },
  { id: 'reel-2', caption: 'Stacked cuffs, golden hour.', imgId: 'reel-2-e5', titleId: 'reel-2-title' },
  { id: 'reel-3', caption: 'Flora Nectar at the collarbone.', imgId: 'reel-3-f6', titleId: 'reel-3-title' },
  { id: 'reel-4', caption: 'Amber Lace, evening light.', imgId: 'reel-4-g7', titleId: 'reel-4-title' },
  { id: 'reel-5', caption: 'The Heirloom set, unboxed.', imgId: 'reel-5-h8', titleId: 'reel-5-title' },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I have not taken my huggies off in months and they still shine.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift and the box alone made her cry. Beautiful, considered, premium.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet luxury without the markup. The Flora Nectar is now my signature necklace. Compliments daily.',
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const getRelated = (product, limit = 4) =>
  products.filter((p) => p.id !== product.id).slice(0, limit)

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
