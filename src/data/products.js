export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    shortDescription: 'Gold ear cuff with crystal accent — a statement piece for the modern muse.',
    longDescription:
      'The Vivid Aura Jewels ear cuff wraps the ear in warm 18K gold plating, punctuated by a single faceted crystal that catches every flicker of light. Designed to be worn alone for understated elegance or stacked with your favourite huggies for a curated ear look. No piercing required — simply slide and secure.',
    materials: '18K gold-plated sterling silver, cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Store in the included pouch. Avoid contact with perfume and water. Gently polish with a soft cloth.',
    shipping: 'Free worldwide shipping. Delivered in 2–5 business days in a signature Velmora gift box.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      'ear-cuff-gold-crystal-jewelry-closeup',
      'gold-ear-cuff-woman-wearing-elegant',
    ],
    tags: ['bestseller', 'gift-worthy'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 87,
    shortDescription: 'Multicolor floral crystal necklace — a garden of light around your neck.',
    longDescription:
      'Inspired by blooming wildflowers at golden hour, the Majestic Flora Nectar necklace features hand-set multicolour crystals arranged in a delicate floral pendant. The 18K gold chain is adjustable from 16 to 20 inches, letting you layer it over a bare neckline or a favourite blouse.',
    materials: '18K gold-plated brass, assorted crystal stones. Nickel-free and hypoallergenic.',
    care: 'Clasp before storing. Wipe gently after wear. Keep away from moisture.',
    shipping: 'Free worldwide shipping. Arrives in 2–5 business days in a luxury Velmora box.',
    returns: '30-day returns accepted. Must be in original condition with tags.',
    images: [
      'floral-crystal-necklace-multicolor-gold',
      'gold-necklace-floral-pendant-model',
    ],
    tags: ['bestseller', 'new-arrival'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 203,
    shortDescription: 'Chunky gold dome huggie earrings — bold yet endlessly wearable.',
    longDescription:
      'The Golden Sphere Huggies are the everyday earrings you reach for without thinking. Their chunky dome silhouette feels substantial without weighing you down, and the warm 18K gold plating gives them that rich, buttery glow. Hinged click closure for easy on, easy off.',
    materials: '18K gold-plated stainless steel. Water-resistant, tarnish-resistant, and hypoallergenic.',
    care: 'These huggies are designed for daily wear. Clean with a damp cloth as needed.',
    shipping: 'Free worldwide shipping in 2–5 business days.',
    returns: '30-day hassle-free returns. No questions asked.',
    images: [
      'gold-dome-huggie-earrings-chunky',
      'gold-huggie-earrings-woman-ear-closeup',
    ],
    tags: ['bestseller'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviewCount: 91,
    shortDescription: 'Textured gold filigree drop earrings — vintage romance meets modern craft.',
    longDescription:
      'The Amber Lace Earrings are a love letter to old-world artisanship. Each pair is cast with intricate filigree patterns then finished with a warm satin gold patina. The lightweight drop design sways gently with movement, catching the light with every turn of your head.',
    materials: '18K gold-plated brass with satin finish. Nickel-free and hypoallergenic.',
    care: 'Store flat in the provided pouch. Avoid bending the delicate filigree.',
    shipping: 'Free worldwide shipping. Arrives gift-wrapped in 2–5 business days.',
    returns: '30-day returns on unworn items with original packaging.',
    images: [
      'gold-filigree-drop-earrings-filigree',
      'amber-gold-earrings-model-neck',
    ],
    tags: ['gift-worthy'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 56,
    shortDescription: 'Gift-boxed earring and necklace set — the ultimate token of love.',
    longDescription:
      'The Royal Heirloom Set pairs our bestselling stud earrings with a matching pendant necklace, presented in a keepsake Velmora gift box with a satin ribbon. It is the kind of gift that needs no wrapping — just a heartfelt card. Also perfect as a self-purchase to start your curated collection.',
    materials: '18K gold-plated sterling silver, cubic zirconia stones. Nickel-free and hypoallergenic.',
    care: 'Keep each piece in its designated compartment. Polish gently with the included cloth.',
    shipping: 'Free worldwide shipping in a premium gift box. 2–5 business days.',
    returns: '30-day returns accepted on complete, unworn sets.',
    images: [
      'jewelry-gift-set-gold-earrings-necklace-box',
      'gold-jewelry-set-earrings-necklace-model',
    ],
    tags: ['bestseller', 'gift-worthy', 'set'],
  },
];

export const categories = [
  { id: 'earrings', label: 'Earrings', description: 'Studs, drops & ear cuffs' },
  { id: 'necklaces', label: 'Necklaces', description: 'Pendants & chains' },
  { id: 'huggies', label: 'Huggies', description: 'Dome & hoop huggie earrings' },
];

export const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Sterling Silver' },
];

export const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
];
