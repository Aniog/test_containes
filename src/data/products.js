// Seed catalogue for Velmora Fine Jewelry.
// Image search strings are tuned to return warm, editorial, gold-jewelry-on-dark
// stock photography. Each product has a primary + secondary image so the card
// hover swap works out of the box.

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
]

export const materials = [
  { id: '18k-gold', label: '18K Gold Plated' },
  { id: 'sterling-silver', label: 'Sterling Silver' },
  { id: 'crystal', label: 'Crystal' },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    subtitle: 'Crystal ear cuff',
    price: 42,
    category: 'earrings',
    material: '18k-gold',
    toneOptions: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    defaultTone: 'gold',
    rating: 4.9,
    reviewCount: 128,
    badges: ['Bestseller'],
    imgId: 'prod-vivid-aura-1',
    imgIdHover: 'prod-vivid-aura-2',
    imgQuery: 'gold crystal ear cuff jewelry dark background editorial',
    imgQueryHover: 'gold crystal ear cuff worn on ear warm light',
    description:
      'A whisper of light along the lobe. The Vivid Aura ear cuff is hand-set with a single faceted crystal that catches the sun and a brushed 18K gold-plated band that sits softly against the skin. No piercing required.',
    details: [
      '18K gold-plated brass, hypoallergenic',
      'Single faceted crystal centerpiece',
      'No piercing required; adjustable fit',
      'Sold as a single cuff',
    ],
    materials:
      'Crafted in brass with a thick 18K gold plating for a warm, lasting finish. Lead-free, nickel-free, and hypoallergenic — comfortable for daily wear. Crystal is hand-set.',
    care: [
      'Avoid contact with perfume, lotion, and water',
      'Remove before showering or sleeping',
      'Store in the velvet pouch provided',
      'Wipe gently with a soft, dry cloth',
    ],
    shipping:
      'Free worldwide shipping on orders over $80. Standard delivery 4–7 business days. 30-day returns, no questions asked.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    subtitle: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'crystal',
    toneOptions: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    defaultTone: 'gold',
    rating: 4.8,
    reviewCount: 96,
    badges: ['New'],
    imgId: 'prod-flora-1',
    imgIdHover: 'prod-flora-2',
    imgQuery: 'floral crystal necklace gold multicolor gemstone',
    imgQueryHover: 'floral crystal necklace worn model close up',
    description:
      'A garden you can wear close. The Majestic Flora pendant is composed of seven hand-set crystals in soft botanical tones — sage, rose, and amber — suspended from a delicate 18K gold-plated chain.',
    details: [
      '18K gold-plated chain, 40cm + 5cm extender',
      'Seven hand-set crystals in botanical tones',
      'Lobster clasp closure',
      'Velvet pouch and care card included',
    ],
    materials:
      'Pendant is set with responsibly sourced crystals over a brass base. Chain is 18K gold-plated brass, hypoallergenic and tarnish-resistant.',
    care: [
      'Apply perfume before putting on jewelry',
      'Remove before swimming or exercising',
      'Store flat to keep chain smooth',
      'Wipe gently with the included polishing cloth',
    ],
    shipping:
      'Free worldwide shipping on orders over $80. Standard delivery 4–7 business days. 30-day returns, no questions asked.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    subtitle: 'Chunky gold dome huggies',
    price: 38,
    category: 'huggies',
    material: '18k-gold',
    toneOptions: [
      { id: 'gold', label: 'Gold' },
      { id: 'silver', label: 'Silver' },
    ],
    defaultTone: 'gold',
    rating: 4.9,
    reviewCount: 214,
    badges: ['Bestseller'],
    imgId: 'prod-huggies-1',
    imgIdHover: 'prod-huggies-2',
    imgQuery: 'chunky gold dome huggie hoop earrings',
    imgQueryHover: 'gold huggie earrings worn on ear warm light',
    description:
      'A study in soft geometry. The Golden Sphere huggies feature a generous, hand-polished dome on a slim 18K gold-plated hoop — substantial without weight, and endlessly wearable.',
    details: [
      '18K gold-plated brass, hypoallergenic',
      'Inner diameter: 9mm',
      'Hinged snap-post closure',
      'Sold as a pair',
    ],
    materials:
      'Crafted from a solid brass core with a thick 18K gold plating that holds its warmth over time. Lead-free and nickel-free.',
    care: [
      'Avoid contact with water and perfume',
      'Remove before sleeping or showering',
      'Store in the velvet pouch provided',
      'Polish gently with a soft, dry cloth',
    ],
    shipping:
      'Free worldwide shipping on orders over $80. Standard delivery 4–7 business days. 30-day returns, no questions asked.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    subtitle: 'Textured gold filigree drops',
    price: 54,
    category: 'earrings',
    material: '18k-gold',
    toneOptions: [
      { id: 'gold', label: 'Gold' },
    ],
    defaultTone: 'gold',
    rating: 4.7,
    reviewCount: 72,
    badges: [],
    imgId: 'prod-amber-1',
    imgIdHover: 'prod-amber-2',
    imgQuery: 'gold filigree drop earrings vintage lace texture',
    imgQueryHover: 'gold lace drop earrings worn on model ear',
    description:
      'Cast from a single length of lace. The Amber Lace drops are sculpted in soft filigree with a brushed gold finish, catching the light like heirloom embroidery.',
    details: [
      '18K gold-plated brass, hypoallergenic',
      'Length: 38mm',
      'Post-and-butterfly closure',
      'Sold as a pair',
    ],
    materials:
      'Solid brass base, cast in fine filigree, then plated in 18K gold with a soft brushed finish. Hypoallergenic and tarnish-resistant.',
    care: [
      'Keep dry; remove before showering or swimming',
      'Avoid direct contact with perfume',
      'Store flat in the velvet pouch provided',
      'Polish gently with the included cloth',
    ],
    shipping:
      'Free worldwide shipping on orders over $80. Standard delivery 4–7 business days. 30-day returns, no questions asked.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    subtitle: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'sets',
    material: '18k-gold',
    toneOptions: [
      { id: 'gold', label: 'Gold' },
    ],
    defaultTone: 'gold',
    rating: 5.0,
    reviewCount: 41,
    badges: ['Gifts'],
    imgId: 'prod-set-1',
    imgIdHover: 'prod-set-2',
    imgQuery: 'gold jewelry gift box set earrings necklace',
    imgQueryHover: 'gold jewelry set on cream paper editorial',
    description:
      'A pair, a pendant, a keepsake box. The Royal Heirloom Set pairs the Golden Sphere huggies with a delicate pendant on a fine chain — presented in our signature linen-wrapped box.',
    details: [
      'Includes Golden Sphere Huggies and matching pendant necklace',
      '18K gold-plated brass throughout',
      'Pendant chain: 40cm + 5cm extender',
      'Linen-wrapped gift box and care card',
    ],
    materials:
      'Crafted in brass with a thick 18K gold plating. Hypoallergenic, lead-free, and nickel-free. Designed to wear together — or forever, separately.',
    care: [
      'Apply perfume before putting on jewelry',
      'Remove before showering or sleeping',
      'Store in the linen box provided',
      'Polish gently with the included cloth',
    ],
    shipping:
      'Free worldwide shipping on orders over $80. Standard delivery 4–7 business days. 30-day returns, no questions asked.',
  },
]

// UGC-style reel cards (vertical 9:16 thumbnails) for the homepage reel row.
export const reelCards = [
  {
    id: 'reel-1',
    imgId: 'reel-1-img',
    imgQuery: 'gold earrings worn on ear close up warm light',
    caption: 'The Golden Sphere',
    handle: '@velmora',
  },
  {
    id: 'reel-2',
    imgId: 'reel-2-img',
    imgQuery: 'gold crystal necklace worn model close up',
    caption: 'Flora, in color',
    handle: '@velmora',
  },
  {
    id: 'reel-3',
    imgId: 'reel-3-img',
    imgQuery: 'gold ear cuff worn editorial close up',
    caption: 'A whisper of light',
    handle: '@velmora',
  },
  {
    id: 'reel-4',
    imgId: 'reel-4-img',
    imgQuery: 'gold filigree earrings on ear warm portrait',
    caption: 'Heirloom in lace',
    handle: '@velmora',
  },
  {
    id: 'reel-5',
    imgId: 'reel-5-img',
    imgQuery: 'gold jewelry styled on linen warm light',
    caption: 'On the table',
    handle: '@velmora',
  },
  {
    id: 'reel-6',
    imgId: 'reel-6-img',
    imgQuery: 'gold huggie earrings worn on ear portrait',
    caption: 'Everyday ritual',
    handle: '@velmora',
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'cat-earrings',
    imgQuery: 'gold earrings editorial dark background studio',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'cat-necklaces',
    imgQuery: 'gold crystal necklace editorial dark background',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'cat-huggies',
    imgQuery: 'gold hoop huggie earrings editorial dark background',
  },
]

export const testimonials = [
  {
    id: 't-1',
    name: 'Amelia R.',
    rating: 5,
    quote:
      'I wear the Golden Sphere huggies almost every day — they feel like a small, steady luxury. The weight is just right, and the gold has not dulled at all.',
  },
  {
    id: 't-2',
    name: 'Priya S.',
    rating: 5,
    quote:
      'Bought the Royal Heirloom set for my sister. The box, the cloth, the weight of it — every detail felt considered. She has not taken them off.',
  },
  {
    id: 't-3',
    name: 'Nora K.',
    rating: 5,
    quote:
      'I have sensitive ears and these do not bother me at all. The Vivid Aura cuff is the piece I get asked about the most.',
  },
]

export function findProductById(id) {
  return products.find((p) => p.id === id) || null
}
