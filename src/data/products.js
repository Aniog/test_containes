// Seed product catalogue for Velmora Fine Jewelry.
// Each product carries explicit image-slot ids (imgId, img2Id, gallery ids)
// and text-reference ids (titleId, descId) so the strk-img system can build
// warm, specific stock-image queries per item.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    shortDescription:
      'A sculptural gold ear cuff traced with a single crystal accent — effortless edge for the unpierced ear.',
    longDescription:
      'The Vivid Aura ear cuff is engineered to hug the cartilage without a piercing, finished in 18K gold plate over sterling silver. A hand-set crystal catches the light along its arc, lending a quiet shimmer that reads as intentional, never loud. Wear it solo or stack it with huggies for a curated ear.',
    rating: 4.8,
    reviewCount: 126,
    variants: ['Gold', 'Silver'],
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
    imgId: 'prod-vivid-aura-img-a1b2',
    img2Id: 'prod-vivid-aura-img-b3c4',
    galleryIds: [
      'prod-vivid-aura-gal-1',
      'prod-vivid-aura-gal-2',
      'prod-vivid-aura-gal-3',
      'prod-vivid-aura-gal-4',
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    shortDescription:
      'A multicolor floral crystal necklace — petals of light that rest just below the collarbone.',
    longDescription:
      'Majestic Flora Nectar suspends a bloom of multicolor crystals from a fine gold-plated chain, each petal faceted to scatter warm and cool light. The adjustable 16–18 inch length lets it sit at the collarbone or layer with finer chains. Hypoallergenic and tarnish-resistant for everyday wear.',
    rating: 4.9,
    reviewCount: 203,
    variants: ['Gold', 'Silver'],
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
    imgId: 'prod-majestic-flora-img-a1b2',
    img2Id: 'prod-majestic-flora-img-b3c4',
    galleryIds: [
      'prod-majestic-flora-gal-1',
      'prod-majestic-flora-gal-2',
      'prod-majestic-flora-gal-3',
      'prod-majestic-flora-gal-4',
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    shortDescription:
      'Chunky gold dome huggie earrings — a polished orb that hugs the lobe with quiet confidence.',
    longDescription:
      'The Golden Sphere huggies pair a bold, polished dome with a snug hinged hoop that sits flush to the lobe. Cast in 18K gold plate over sterling silver, the rounded form catches light from every angle while remaining light enough for all-day wear. A modern staple that elevates the everyday.',
    rating: 4.7,
    reviewCount: 318,
    variants: ['Gold', 'Silver'],
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
    imgId: 'prod-golden-sphere-img-a1b2',
    img2Id: 'prod-golden-sphere-img-b3c4',
    galleryIds: [
      'prod-golden-sphere-gal-1',
      'prod-golden-sphere-gal-2',
      'prod-golden-sphere-gal-3',
      'prod-golden-sphere-gal-4',
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    shortDescription:
      'Textured gold filigree drop earrings — openwork lace rendered in warm metal.',
    longDescription:
      'Amber Lace reimagines traditional filigree as a modern drop earring. The openwork panel is hand-finished in 18K gold plate, its textured surface diffusing light into a soft amber glow. Lightweight and hypoallergenic, it moves gently with the wearer for an understated evening finish.',
    rating: 4.8,
    reviewCount: 91,
    variants: ['Gold', 'Silver'],
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
    imgId: 'prod-amber-lace-img-a1b2',
    img2Id: 'prod-amber-lace-img-b3c4',
    galleryIds: [
      'prod-amber-lace-gal-1',
      'prod-amber-lace-gal-2',
      'prod-amber-lace-gal-3',
      'prod-amber-lace-gal-4',
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    shortDescription:
      'A gift-boxed earring and necklace set — coordinated heirloom elegance, ready to give.',
    longDescription:
      'The Royal Heirloom Set unites a delicate gold-plated necklace with matching drop earrings, presented in a signature Velmora gift box. Each piece is finished in 18K gold plate over sterling silver and engineered to be hypoallergenic and tarnish-resistant. A complete, considered gift for milestones and moments worth marking.',
    rating: 5.0,
    reviewCount: 74,
    variants: ['Gold', 'Silver'],
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
    imgId: 'prod-royal-heirloom-img-a1b2',
    img2Id: 'prod-royal-heirloom-img-b3c4',
    galleryIds: [
      'prod-royal-heirloom-gal-1',
      'prod-royal-heirloom-gal-2',
      'prod-royal-heirloom-gal-3',
      'prod-royal-heirloom-gal-4',
    ],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    tagline: 'Sculptural drops & cuffs',
    imgId: 'cat-earrings-img-7f8e',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tagline: 'Layered chains & pendants',
    imgId: 'cat-necklaces-img-9a0b',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tagline: 'Polished hoops that hug',
    imgId: 'cat-huggies-img-2c3d',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
]

export const reels = [
  {
    id: 'reel-ear',
    caption: 'The curated ear, stacked.',
    imgId: 'reel-ear-img-4e5f',
    titleId: 'reel-ear-title',
  },
  {
    id: 'reel-neck',
    caption: 'Layered at the collarbone.',
    imgId: 'reel-neck-img-6g7h',
    titleId: 'reel-neck-title',
  },
  {
    id: 'reel-gold',
    caption: 'Warm gold, soft light.',
    imgId: 'reel-gold-img-8i9j',
    titleId: 'reel-gold-title',
  },
  {
    id: 'reel-gift',
    caption: 'Boxed, ready to give.',
    imgId: 'reel-gift-img-0k1l',
    titleId: 'reel-gift-title',
  },
  {
    id: 'reel-detail',
    caption: 'Filigree, up close.',
    imgId: 'reel-detail-img-2m3n',
    titleId: 'reel-detail-title',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold plating is unreal for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Priya K.',
    rating: 5,
    text: 'Bought the Heirloom set as a gift and the box alone made her cry. Beautiful, considered, premium without the markup.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'I have sensitive ears and these are the first earrings I can wear all day. The Aura cuff is my new signature.',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  const current = getProductById(id)
  if (!current) return products.slice(0, limit)
  const sameCategory = products.filter(
    (p) => p.id !== id && p.category === current.category,
  )
  const others = products.filter(
    (p) => p.id !== id && p.category !== current.category,
  )
  return [...sameCategory, ...others].slice(0, limit)
}
