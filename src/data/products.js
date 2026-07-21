// Seed product catalog for Velmora Fine Jewelry.
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless statement, no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, secure spring. Hand-finished in 18K gold plating over sterling silver, it catches the light with a hand-set crystal that reads as a quiet sparkle, never a shout. Wear it solo for a minimalist line or stack it with huggies for a curated ear.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with perfumes, lotions, and water. Store in the provided pouch. Clean gently with a soft dry cloth.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
    imgId: 'p-vivid-aura-a1',
    imgIdAlt: 'p-vivid-aura-a2',
    titleId: 'title-vivid-aura-jewels',
    descId: 'desc-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 88,
    shortDescription:
      'A multicolor floral crystal pendant suspended on a fine gold chain — a garden of light at the collarbone.',
    description:
      'Majestic Flora Nectar gathers hand-set crystals into a delicate floral cluster, each petal a different warm tone. The pendant floats from an adjustable 40–45cm gold chain, designed to rest just below the collarbone. A piece that moves from daytime linen to evening silk without effort.',
    materials:
      '18K gold plating over 925 sterling silver. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with 2cm extender.',
    care: 'Keep dry and away from cosmetics. Store flat in the provided box to protect the crystal cluster. Polish with a soft cloth.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
    imgId: 'p-majestic-flora-b1',
    imgIdAlt: 'p-majestic-flora-b2',
    titleId: 'title-majestic-flora-nectar',
    descId: 'desc-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 214,
    shortDescription:
      'Chunky gold dome huggies with a smooth, sculpted finish — the everyday earring you will never take off.',
    description:
      'Golden Sphere Huggies reimagine the classic hoop as a polished dome that sits flush against the lobe. The hinged closure clicks securely and lies flat for comfort day and night. Substantial enough to read as a statement, light enough to forget you are wearing them.',
    materials:
      '18K gold plating over 925 sterling silver. Polished dome finish. Hinged snap closure. Hypoallergenic.',
    care: 'Wipe clean after each wear. Avoid sleeping in them to preserve the hinge. Store in a dry pouch.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
    imgId: 'p-golden-sphere-c1',
    imgIdAlt: 'p-golden-sphere-c2',
    titleId: 'title-golden-sphere-huggies',
    descId: 'desc-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 67,
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern weight.',
    description:
      'Amber Lace is drawn from traditional filigree technique, each openwork panel hand-finished to catch light from every angle. The drop length is calibrated to frame the jawline, and the post back keeps them secure through long evenings. A quietly romantic piece with real presence.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-finished filigree. Post back with comfort clutch.',
    care: 'Handle by the post to avoid bending the filigree. Keep in a separate compartment to prevent tangling.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Bestseller',
    imgId: 'p-amber-lace-d1',
    imgIdAlt: 'p-amber-lace-d2',
    titleId: 'title-amber-lace-earrings',
    descId: 'desc-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 41,
    shortDescription:
      'A gift-boxed earring and necklace set, designed to be worn together or apart — the perfect present.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, both finished in warm gold and presented in a signature Velmora gift box. Coordinated proportions mean they read as one considered gesture, whether you are gifting a milestone or treating yourself.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Necklace 42cm with extender. Earrings 2.5cm drop. Gift box included.',
    care: 'Store each piece in its compartment. Keep dry. Clean with a soft cloth before returning to the box.',
    variants: ['Gold', 'Silver'],
    bestseller: true,
    badge: 'Gift Set',
    imgId: 'p-royal-heirloom-e1',
    imgIdAlt: 'p-royal-heirloom-e2',
    titleId: 'title-royal-heirloom-set',
    descId: 'desc-royal-heirloom-set',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'Earrings',
    imgId: 'cat-earrings-f1',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
    description: 'Cuffs, drops & huggies in warm gold.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'Necklaces',
    imgId: 'cat-necklaces-f2',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
    description: 'Pendants & chains for every neckline.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: 'Huggies',
    imgId: 'cat-huggies-f3',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
    description: 'Polished domes that hug the lobe.',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Elena R.',
    rating: 5,
    text: 'The gold plating is genuinely beautiful — it reads as fine jewelry, not costume. I have worn the huggies every day for two months and they still look new.',
  },
  {
    id: 't2',
    name: 'Sofia M.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and the presentation alone made me look like I had spent triple. My mother has not taken it off since.',
  },
  {
    id: 't3',
    name: 'Priya K.',
    rating: 5,
    text: 'I have sensitive ears and these are the first gold earrings that have not irritated me. The ear cuff stays put all day. Quietly luxurious.',
  },
]

export const reels = [
  { id: 'r1', imgId: 'reel-1-g1', caption: 'Stacked huggies, golden hour', titleId: 'reel-title-1' },
  { id: 'r2', imgId: 'reel-2-g2', caption: 'The Vivid Aura cuff, up close', titleId: 'reel-title-2' },
  { id: 'r3', imgId: 'reel-3-g3', caption: 'Flora Nectar on bare skin', titleId: 'reel-title-3' },
  { id: 'r4', imgId: 'reel-4-g4', caption: 'Amber Lace at dinner', titleId: 'reel-title-4' },
  { id: 'r5', imgId: 'reel-5-g5', caption: 'A curated ear, three pieces', titleId: 'reel-title-5' },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const getRelated = (product, limit = 4) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit)
