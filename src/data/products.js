export const products = [
  {
    id: 'velmora-01',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff finished with a fine crystal glint for understated shine.',
    description:
      'Designed to slip on with ease, Vivid Aura Jewels frames the ear with polished gold and a quiet crystal accent. It brings an editorial finish to day-to-night dressing without feeling overdone.',
    materialsCare:
      '18K gold-plated brass with crystal detail. Keep dry, avoid fragrance contact, and store in the Velmora pouch after wear.',
    shippingReturns:
      'Ships within 1–2 business days. Complimentary worldwide shipping over $75 and 30-day returns on unworn pieces.',
    galleryPrompts: [
      'Close-up of a gold ear cuff with a single crystal accent on a model ear in warm studio light.',
      'Editorial flat lay of a crystal ear cuff on dark velvet with soft gold reflection.',
      'Side profile styling shot showing a minimal gold cuff layered with delicate studs.',
      'Gift-ready jewelry box with a refined gold cuff nestled in warm neutral tissue.',
    ],
  },
  {
    id: 'velmora-02',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    type: 'Crystal Necklace',
    price: 68,
    rating: 4.9,
    reviews: 184,
    shortDescription:
      'A floral crystal necklace that blends color and gold in a refined, occasion-ready silhouette.',
    description:
      'Majestic Flora Nectar layers luminous crystal petals along a delicate chain, balancing romance with a clean modern finish. It is the piece that lifts a simple neckline instantly.',
    materialsCare:
      '18K gold-plated brass with multicolor crystals. Wipe gently with a soft cloth and keep separate from abrasive surfaces.',
    shippingReturns:
      'Ships gift-boxed within 1–2 business days. Returns accepted within 30 days for unworn pieces in original packaging.',
    galleryPrompts: [
      'Warm-lit close-up of a floral crystal necklace resting at the collarbone on a model.',
      'Luxury flat lay of a floral crystal necklace on parchment silk with editorial shadow.',
      'Styled table scene with a gold crystal necklace beside perfume and a linen ribbon.',
      'Gift reveal moment featuring a floral necklace inside a premium jewelry box.',
    ],
  },
  {
    id: 'velmora-03',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    type: 'Dome Huggies',
    price: 38,
    rating: 4.7,
    reviews: 211,
    shortDescription:
      'Chunky dome huggies with a glossy gold finish for elevated everyday wear.',
    description:
      'Golden Sphere Huggies are made for repeat wear — bold enough to stand alone, refined enough to stack. Their rounded silhouette catches light softly and flatters every look.',
    materialsCare:
      '18K gold-plated brass with hypoallergenic posts. Remove before showering and polish gently with a microfiber cloth.',
    shippingReturns:
      'Dispatched within 48 hours. Eligible for 30-day returns and exchanges when unworn.',
    galleryPrompts: [
      'Pair of chunky gold dome huggie earrings photographed in warm editorial light.',
      'Model portrait featuring glossy gold huggies with slick hair and soft neutral styling.',
      'Close detail of dome huggies stacked with a fine chain necklace on a dark backdrop.',
      'Velmora branded box holding a pair of chunky gold huggies with champagne ribbon.',
    ],
  },
  {
    id: 'velmora-04',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    type: 'Filigree Drops',
    price: 54,
    rating: 4.8,
    reviews: 98,
    shortDescription:
      'Textured filigree drops with a vintage-inspired shape and light-catching movement.',
    description:
      'Amber Lace Earrings pair airy filigree texture with an elongated drop, creating a silhouette that feels storied and graceful. They bring softness and polish to occasion dressing.',
    materialsCare:
      '18K gold-plated brass. Handle with care around textured surfaces and store flat to preserve the finish.',
    shippingReturns:
      'Packaged in our signature gift box. Free worldwide shipping over $75 and 30-day returns.',
    galleryPrompts: [
      'Textured gold filigree drop earrings in warm museum-style lighting.',
      'Elegant model shot with filigree earrings and bare shoulders against a deep neutral backdrop.',
      'Detailed macro of lace-like gold earrings on folded silk fabric.',
      'Gift styling of ornate gold drop earrings with velvet box and handwritten card.',
    ],
  },
  {
    id: 'velmora-05',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5,
    reviews: 74,
    shortDescription:
      'A gift-boxed matching set curated for luminous everyday layering and effortless gifting.',
    description:
      'Royal Heirloom Set combines a refined necklace with coordinating earrings in one ready-to-gift presentation. It feels personal, polished, and easy to reach for long after the occasion.',
    materialsCare:
      '18K gold-plated brass with crystal accents. Store each piece in its pouch and avoid prolonged moisture exposure.',
    shippingReturns:
      'Signature gift packaging included. Orders ship in 1–2 business days with 30-day returns on unworn items.',
    galleryPrompts: [
      'Gift-boxed gold jewelry set with necklace and earrings arranged in a premium presentation box.',
      'Styled editorial still life of matching gold jewelry pieces with a warm ribbon and card.',
      'Model wearing a coordinating gold necklace and earrings set in quiet luxury styling.',
      'Close-up of a jewelry gift box opened to reveal a matching set on cream velvet.',
    ],
  },
]

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
export const materialFilters = ['18K Gold Plated']

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug)
}
