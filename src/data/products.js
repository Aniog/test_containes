// Seed product catalog for Velmora Fine Jewelry

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'ear cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDesc:
      'A sculptural gold ear cuff traced with a single crystal accent — no piercing required, made to catch the light.',
    description:
      'The Vivid Aura ear cuff is an everyday statement piece, designed to hug the cartilage with a gentle, secure fit. Hand-finished in 18K gold plating over sterling silver, it is set with a brilliant-cut crystal that catches the light from every angle. Wear it solo for a quiet gleam, or stack it with your favourite huggies.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Crystal accent.',
    care: 'Avoid contact with water, perfume and cosmetics. Store in the provided pouch. Clean gently with a soft cloth.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'vivid-aura-1', alt: 'Gold ear cuff with crystal accent on a dark surface' },
      { id: 'vivid-aura-2', alt: 'Gold ear cuff worn on the ear, warm editorial light' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'pendant necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    shortDesc:
      'A multicolor floral crystal pendant suspended from a fine gold chain — a garden in miniature, made to be layered.',
    description:
      'The Majestic Flora Nectar necklace blooms with a hand-set floral cluster of multicolor crystals, each petal catching a different warmth of light. Suspended from a delicate 18K gold-plated chain, it rests just below the collarbone — equally beautiful alone or layered with finer chains.',
    materials:
      '18K gold plating over 925 sterling silver chain. Multicolor crystal floral pendant. Hypoallergenic, nickel-free.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystal setting.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'majestic-flora-1', alt: 'Multicolor floral crystal necklace on warm neutral background' },
      { id: 'majestic-flora-2', alt: 'Floral crystal necklace worn on the neck, editorial' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDesc:
      'Chunky gold dome huggies with a smooth, sculpted finish — the everyday earring you will never take off.',
    description:
      'The Golden Sphere Huggies reimagine the classic huggie with a bold, chunky dome silhouette. Polished to a warm gold gleam, they sit close to the lobe for comfortable all-day wear. A secure hinged closure keeps them in place from morning to evening.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free, lead-free. Hinged snap closure.',
    care: 'Wipe clean with a soft cloth after each wear. Avoid water and chemicals to preserve the plating.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'golden-sphere-1', alt: 'Chunky gold dome huggie earrings on a dark surface' },
      { id: 'golden-sphere-2', alt: 'Gold dome huggies worn on the ear, warm light' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'drop earrings',
    price: 54,
    rating: 4.8,
    reviews: 91,
    shortDesc:
      'Textured gold filigree drop earrings with a lace-like openwork — heirloom craft, modern weightlessness.',
    description:
      'The Amber Lace earrings are an ode to traditional filigree, reworked into a light, modern drop. Each earring is hand-textured with an intricate openwork pattern that moves softly with the wearer. The warm gold finish glows against the skin without overwhelming it.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-textured filigree. Hypoallergenic, nickel-free.',
    care: 'Handle with care to protect the openwork. Store in the provided pouch and clean with a soft cloth.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'amber-lace-1', alt: 'Textured gold filigree drop earrings on neutral background' },
      { id: 'amber-lace-2', alt: 'Gold filigree drop earrings worn, editorial warm light' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    type: 'earring and necklace set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDesc:
      'A gift-boxed earring and necklace set, designed to be worn together or apart — the perfect present, ready to give.',
    description:
      'The Royal Heirloom Set pairs a coordinating necklace and earring duo in a signature Velmora gift box. The matching silhouette is inspired by vintage heirloom jewellery, reimagined in warm 18K gold plating. Whether gifted or kept, it is a set made to be treasured for years.',
    materials:
      '18K gold plating over 925 sterling silver. Coordinating necklace and earrings. Hypoallergenic, nickel-free. Gift boxed.',
    care: 'Store each piece separately in the gift box to prevent tangling. Keep dry and clean with a soft cloth.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'royal-heirloom-1', alt: 'Gold earring and necklace set in a gift box, warm tones' },
      { id: 'royal-heirloom-2', alt: 'Gold earring and necklace set worn together, editorial' },
    ],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Ear cuffs, drops and statement studs.',
    imgId: 'cat-earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Pendants, chains and layered essentials.',
    imgId: 'cat-necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Sculpted domes and everyday huggies.',
    imgId: 'cat-huggies',
  },
]

export const reels = [
  { id: 'reel-1', caption: 'Golden Sphere Huggies, all day.', imgId: 'reel-ear-1' },
  { id: 'reel-2', caption: 'Layered with Majestic Flora.', imgId: 'reel-neck-1' },
  { id: 'reel-3', caption: 'The Vivid Aura, up close.', imgId: 'reel-ear-2' },
  { id: 'reel-4', caption: 'Amber Lace in golden hour.', imgId: 'reel-ear-3' },
  { id: 'reel-5', caption: 'The Heirloom Set, unboxed.', imgId: 'reel-neck-2' },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and the quality feels far beyond the price. I have not taken the huggies off since they arrived.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Heirloom Set as a gift and it arrived in the most beautiful box. My mother was genuinely moved.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'Quiet, elegant, and the plating has held up beautifully. This is now my go-to for everyday gold.',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)
