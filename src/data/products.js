// Seed product catalogue for Velmora Fine Jewelry
// Images use the strk-img tagging system; queries reference nearby text IDs.

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    subcategory: 'Ear Cuffs',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.',
    description:
      'The Vivid Aura ear cuff is our most-loved everyday statement. Hand-finished in 18K gold plating over sterling silver, it curves gently around the cartilage and catches light from every angle. A hand-set crystal adds a quiet shimmer without overwhelming. Wear it solo or stacked with huggies for a curated ear.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hand-set cubic zirconia crystal. To care: avoid contact with perfumes and water; store in the provided pouch; buff gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Orders ship within 1-2 business days and arrive in 3-7 days (express available at checkout). 30-day returns - no questions asked. Each piece arrives in a signature Velmora box.',
    images: [
      { imgId: 'vivid-aura-1', alt: 'Vivid Aura gold ear cuff with crystal accent' },
      { imgId: 'vivid-aura-2', alt: 'Vivid Aura ear cuff worn on ear' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    subcategory: 'Pendants',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 4.9,
    reviews: 84,
    badge: 'New',
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain - a garden in miniature, made to be treasured.',
    description:
      'Majestic Flora Nectar brings a bloom of color to the decolletage. Each petal is set with a multicolor crystal that shifts softly with the light, framed in warm gold plating. The fine chain sits gracefully at the collarbone, making it the perfect centerpiece for a layered look or a quiet solo statement.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Multicolor cubic zirconia crystals. Adjustable 40-45cm chain with extender. Store in pouch; avoid perfumes and water.',
    shipping:
      'Free worldwide shipping on all orders. Ships within 1-2 business days, arrives in 3-7 days. 30-day returns. Signature Velmora box included.',
    images: [
      { imgId: 'majestic-flora-1', alt: 'Majestic Flora multicolor crystal floral necklace' },
      { imgId: 'majestic-flora-2', alt: 'Majestic Flora necklace worn on neck' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Earrings',
    subcategory: 'Huggies',
    material: '18K Gold Plated',
    tones: ['Gold', 'Silver'],
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    shortDescription:
      'Chunky gold dome huggie earrings with a smooth, sculpted finish - the everyday gold you will never take off.',
    description:
      'Golden Sphere Huggies are the foundation of a curated ear. The chunky dome silhouette is polished to a warm, mirror-like glow, hugging the lobe closely for comfort that lasts all day. Secure hinged closure. Sold as a pair. The piece you reach for every morning.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Smooth polished dome. Hinged snap closure. Store in pouch; buff with soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Ships within 1-2 business days, arrives in 3-7 days. 30-day returns. Signature Velmora box included.',
    images: [
      { imgId: 'golden-sphere-1', alt: 'Golden Sphere chunky gold dome huggie earrings' },
      { imgId: 'golden-sphere-2', alt: 'Golden Sphere huggies worn on ear' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    subcategory: 'Drops',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 4.8,
    reviews: 67,
    badge: null,
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern - heirloom craftsmanship, modern weightlessness.',
    description:
      'Amber Lace reimagines traditional filigree for the modern wearer. The openwork gold pattern is featherlight yet richly textured, catching warm light as it moves. A refined drop that transitions seamlessly from desk to dinner, designed to frame the face with quiet elegance.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Textured filigree openwork. Lever-back closure. Store in pouch; avoid perfumes.',
    shipping:
      'Free worldwide shipping on all orders. Ships within 1-2 business days, arrives in 3-7 days. 30-day returns. Signature Velmora box included.',
    images: [
      { imgId: 'amber-lace-1', alt: 'Amber Lace textured gold filigree drop earrings' },
      { imgId: 'amber-lace-2', alt: 'Amber Lace earrings worn on ear' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    subcategory: 'Earring + Necklace',
    material: '18K Gold Plated',
    tones: ['Gold'],
    rating: 5.0,
    reviews: 41,
    badge: 'Gift Set',
    shortDescription:
      'A gift-boxed earring and necklace set in matching gold - the complete, considered gift for someone treasured.',
    description:
      'The Royal Heirloom Set pairs our signature gold drop earrings with a coordinating pendant necklace, presented in a keepsake Velmora gift box. Designed to be worn together or apart, the set offers a complete, polished look in one considered gesture. The gift that needs no wrapping.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set crystal accents. Adjustable 40-45cm chain. Lever-back earrings. Store in provided box; buff with soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Ships within 1-2 business days, arrives in 3-7 days. 30-day returns. Presented in a signature Velmora gift box.',
    images: [
      { imgId: 'royal-heirloom-1', alt: 'Royal Heirloom gold earring and necklace gift set' },
      { imgId: 'royal-heirloom-2', alt: 'Royal Heirloom set worn together' },
    ],
  },
]

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug)

export const getRelatedProducts = (slug, limit = 4) =>
  products.filter((p) => p.slug !== slug).slice(0, limit)

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Huggies, cuffs & drops',
    imgId: 'cat-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants & chains',
    imgId: 'cat-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday gold hoops',
    imgId: 'cat-huggies',
  },
]

export const testimonials = [
  {
    name: 'Eleanor M.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real - I have not taken my huggies off in months. Beautifully packaged too.',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Bought the Flora necklace as a gift and my mother cried. The crystals catch every bit of light. Worth every cent.',
  },
  {
    name: 'Camille R.',
    rating: 5,
    text: 'Quiet, elegant, and the quality is far beyond the price. This is now my go-to for gifting and treating myself.',
  },
]

export const reels = [
  { id: 'reel-1', caption: 'The everyday ear', imgId: 'reel-ear-1' },
  { id: 'reel-2', caption: 'Golden hour, golden hoops', imgId: 'reel-neck-1' },
  { id: 'reel-3', caption: 'Stacked & sculptural', imgId: 'reel-ear-2' },
  { id: 'reel-4', caption: 'A gift she will not forget', imgId: 'reel-neck-2' },
  { id: 'reel-5', caption: 'Filigree in motion', imgId: 'reel-ear-3' },
]
