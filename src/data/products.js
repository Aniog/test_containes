// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk stock-image system via data-strk-img attributes in components,
// so here we only store text references used to build image queries.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'Gold',
    materials: '18K Gold Plated · Crystal Accent',
    short:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to night.',
    description:
      'The Vivid Aura ear cuff is shaped to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plate over sterling silver, it catches the light through a hand-set crystal that reads as a quiet glimmer rather than a sparkle. Wear it solo for a minimalist line, or stack it with huggies for a curated ear.',
    care: 'Avoid contact with perfumes and water. Store in the pouch provided. Clean with a soft, dry cloth.',
    badge: 'Bestseller',
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-b2',
    titleId: 'p-vivid-aura-title',
    descId: 'p-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 204,
    tone: 'Gold',
    materials: '18K Gold Plated · Multicolor Crystal',
    short:
      'A multicolor floral crystal pendant suspended from a fine gold chain — a wearable garden in warm, jewel tones.',
    description:
      'Majestic Flora Nectar centres on a hand-arranged floral motif set with multicolor crystals in amber, rose and sage. The delicate 45cm chain is adjustable, letting the pendant rest just below the collarbone. It is the kind of piece that turns a plain knit into a considered look.',
    care: 'Keep away from moisture and cosmetics. Polish gently with the included cloth. Store flat in its box.',
    badge: 'Bestseller',
    imgId: 'p-majestic-flora-a1',
    imgIdAlt: 'p-majestic-flora-b2',
    titleId: 'p-majestic-flora-title',
    descId: 'p-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'Gold',
    materials: '18K Gold Plated · Hypoallergenic',
    short:
      'Chunky gold dome huggies with a smooth, polished finish — the everyday earring you will never take off.',
    description:
      'Golden Sphere Huggies are the foundation of any jewellery wardrobe. The chunky dome silhouette gives presence without weight, and the hinged huggie closure sits flush to the lobe. Hypoallergenic and lightweight enough to sleep in.',
    care: 'Resilient for daily wear. Wipe clean occasionally. Avoid harsh cleaners.',
    badge: 'Bestseller',
    imgId: 'p-golden-sphere-a1',
    imgIdAlt: 'p-golden-sphere-b2',
    titleId: 'p-golden-sphere-title',
    descId: 'p-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 89,
    tone: 'Gold',
    materials: '18K Gold Plated · Textured Filigree',
    short:
      'Textured gold filigree drop earrings with an openwork lace pattern that moves softly with every turn.',
    description:
      'Amber Lace is inspired by antique lacework, reimagined in warm gold plate. The openwork drop is featherlight and sways gently, throwing delicate shadows. A romantic statement that still feels restrained enough for the office.',
    care: 'Handle by the post to preserve the filigree. Store separately to avoid tangling.',
    badge: 'New',
    imgId: 'p-amber-lace-a1',
    imgIdAlt: 'p-amber-lace-b2',
    titleId: 'p-amber-lace-title',
    descId: 'p-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 47,
    tone: 'Gold',
    materials: '18K Gold Plated · Crystal · Gift Boxed',
    short:
      'A gift-boxed earring and necklace set with matching crystal detailing — ready to give, ready to treasure.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with coordinating drop earrings, presented in a signature Velmora gift box. Designed to be worn together or apart, it is our most complete gifting piece — for someone you love, or for yourself.',
    care: 'Store each piece in its compartment. Keep dry and away from fragrance. Clean with a soft cloth.',
    badge: 'Gift Set',
    imgId: 'p-royal-heirloom-a1',
    imgIdAlt: 'p-royal-heirloom-b2',
    titleId: 'p-royal-heirloom-title',
    descId: 'p-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'Earrings',
    name: 'Earrings',
    desc: 'Huggies, cuffs & drops in warm gold.',
    imgId: 'cat-earrings-a1',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'Necklaces',
    name: 'Necklaces',
    desc: 'Pendants & chains for every neckline.',
    imgId: 'cat-necklaces-a1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'Huggies',
    name: 'Huggies',
    desc: 'Polished everyday huggie hoops.',
    imgId: 'cat-huggies-a1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  { id: 'r1', caption: 'Stacked huggies, golden hour.', imgId: 'reel-r1-a1', titleId: 'reel-r1-title' },
  { id: 'r2', caption: 'The Vivid Aura cuff, up close.', imgId: 'reel-r2-a1', titleId: 'reel-r2-title' },
  { id: 'r3', caption: 'Flora Nectar over a silk blouse.', imgId: 'reel-r3-a1', titleId: 'reel-r3-title' },
  { id: 'r4', caption: 'Amber Lace catching the light.', imgId: 'reel-r4-a1', titleId: 'reel-r4-title' },
  { id: 'r5', caption: 'A gift, unboxed.', imgId: 'reel-r5-a1', titleId: 'reel-r5-title' },
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
    text: 'Bought the Flora Nectar as a gift and ended up keeping it. The colours are warm and elegant, never gaudy.',
  },
  {
    id: 't3',
    name: 'Eleanor R.',
    rating: 5,
    text: 'Beautiful packaging, fast shipping, and the Amber Lace earrings get compliments every single time I wear them.',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
