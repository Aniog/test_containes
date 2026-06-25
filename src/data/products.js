// Seed product catalog for Velmora Fine Jewelry.

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    categorySlug: 'earrings',
    price: 42,
    description:
      'A sculpted gold ear cuff lit by a single, brilliant crystal. Wraps the ear with quiet confidence — no piercing required.',
    rating: 4.9,
    reviews: 128,
    material: 'gold',
    materials: ['18K Gold Plated Brass', 'Cubic Zirconia'],
    tones: ['Gold', 'Silver'],
    bestseller: true,
    isNew: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    categorySlug: 'necklaces',
    price: 68,
    description:
      'A delicate chain blooming with hand-set multicolor crystals, arranged as a wreath of tiny florals. An heirloom in the making.',
    rating: 5.0,
    reviews: 86,
    material: 'gold',
    materials: ['18K Gold Plated', 'Hand-set Crystal'],
    tones: ['Gold'],
    bestseller: true,
    isNew: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    categorySlug: 'huggies',
    price: 38,
    description:
      'Sculptural dome huggies with the easy weight of fine jewelry. Polished by hand for that warm, honeyed glow.',
    rating: 4.8,
    reviews: 214,
    material: 'gold',
    materials: ['18K Gold Plated Brass'],
    tones: ['Gold', 'Silver'],
    bestseller: true,
    isNew: false,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    categorySlug: 'earrings',
    price: 54,
    description:
      'Filigree drops with the texture of antique lace. Featherlight on the ear, with movement that catches every light.',
    rating: 4.9,
    reviews: 97,
    material: 'gold',
    materials: ['18K Gold Plated'],
    tones: ['Gold'],
    bestseller: true,
    isNew: false,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    categorySlug: 'necklaces',
    price: 95,
    description:
      'The pair we reach for again and again — a matched earring and necklace set, gift-boxed in cream and ribbon-tied.',
    rating: 5.0,
    reviews: 64,
    material: 'gold',
    materials: ['18K Gold Plated', 'Gift Box Included'],
    tones: ['Gold'],
    bestseller: true,
    isNew: true,
  },
  {
    id: 'celestine-drop-necklace',
    name: 'Celestine Drop Necklace',
    category: 'Necklaces',
    categorySlug: 'necklaces',
    price: 58,
    description:
      'A single pear-cut crystal suspended from a whisper-thin gold chain. Quiet, weightless, unmistakable.',
    rating: 4.9,
    reviews: 71,
    material: 'gold',
    materials: ['18K Gold Plated', 'Cubic Zirconia'],
    tones: ['Gold', 'Silver'],
    bestseller: false,
    isNew: false,
  },
  {
    id: 'olive-twist-huggies',
    name: 'Olive Twist Huggies',
    category: 'Huggies',
    categorySlug: 'huggies',
    price: 44,
    description:
      'Twisted-rope huggies in a soft olive-gold tone — substantial but never heavy.',
    rating: 4.7,
    reviews: 53,
    material: 'gold',
    materials: ['18K Gold Plated'],
    tones: ['Gold'],
    bestseller: false,
    isNew: true,
  },
  {
    id: 'soleil-pearl-studs',
    name: 'Soleil Pearl Studs',
    category: 'Earrings',
    categorySlug: 'earrings',
    price: 36,
    description:
      'A freshwater pearl set against a brushed gold disc. The everyday stud, refined.',
    rating: 4.8,
    reviews: 142,
    material: 'gold',
    materials: ['18K Gold Plated', 'Freshwater Pearl'],
    tones: ['Gold'],
    bestseller: false,
    isNew: false,
  },
];

export const CATEGORIES = [
  {
    slug: 'earrings',
    name: 'Earrings',
    blurb: 'Studs, drops, and sculptural pieces, designed to layer or stand alone.',
  },
  {
    slug: 'necklaces',
    name: 'Necklaces',
    blurb: 'Featherweight chains, pendants, and statement strands in 18K gold.',
  },
  {
    slug: 'huggies',
    name: 'Huggies',
    blurb: 'The everyday hoop, reconsidered — sculptural, warm, never-take-off.',
  },
];

export const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

export const relatedProducts = (id, n = 4) =>
  PRODUCTS.filter((p) => p.id !== id).slice(0, n);

export const TESTIMONIALS = [
  {
    quote:
      'My Velmora huggies have not left my ears for three months. Still gleaming, still gorgeous.',
    name: 'Amelia R.',
  },
  {
    quote:
      'I bought the Royal Heirloom Set for my mother and she actually teared up. The packaging alone is art.',
    name: 'Priya S.',
  },
  {
    quote:
      'Finally — fine-looking jewelry that does not destroy my sensitive skin or my budget.',
    name: 'Hannah K.',
  },
];

export const UGC_REELS = [
  { id: 'r1', caption: 'Layered for golden hour.' },
  { id: 'r2', caption: 'The cuff she never takes off.' },
  { id: 'r3', caption: 'Florals, on a chain.' },
  { id: 'r4', caption: 'A weight that feels like nothing.' },
  { id: 'r5', caption: 'Gifted, kept forever.' },
  { id: 'r6', caption: 'Morning to evening, never noticed.' },
];

export const formatPrice = (n) => `$${n.toFixed(0)}`;
