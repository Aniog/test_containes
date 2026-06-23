export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 127,
    tag: 'BESTSELLER',
    description:
      'An ear cuff with crystal accent that wraps the ear in a shimmer of light. Wear solo for an editorial statement or stack with huggies for a curated look.',
    materials:
      '18K gold-plated brass · Crystal accent · Cuff closure · Sold as single',
    care: 'Remove before swimming or showering. Buff gently with a polishing cloth. Store separately to prevent scratching.',
    variants: ['Gold', 'Silver Tone'],
    images: {
      front: { hex: '#D4A853', label: 'VIVID AURA — FRONT' },
      side: { hex: '#C49A45', label: 'VIVID AURA — SIDE' },
      detail: { hex: '#BF8F3A', label: 'VIVID AURA — DETAIL' },
    },
    slug: 'vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    tag: null,
    description:
      'A multicolor floral crystal necklace with a delicate gold chain. Hand-set crystals bloom across the collarbone for an enchanting garden-party feel.',
    materials:
      '18K gold-plated brass · Multicolor crystal stones · Lobster clasp · Adjustable length 16"–18"',
    care: 'Avoid contact with perfumes and lotions. Clean with a dry, soft cloth. Store flat in a pouch.',
    variants: ['Gold', 'Silver Tone'],
    images: {
      front: { hex: '#C9A96E', label: 'FLORA NECTAR — FRONT' },
      side: { hex: '#B8945A', label: 'FLORA NECTAR — SIDE' },
      detail: { hex: '#A87D42', label: 'FLORA NECTAR — DETAIL' },
    },
    slug: 'majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    tag: 'BESTSELLER',
    description:
      'Chunky gold dome huggies that hug the earlobe with sculptural precision. Polished to a mirror finish — your new everyday signature.',
    materials:
      '18K gold-plated brass · High-polish finish · Snap closure · Sold as a pair',
    care: 'Remove before swimming or showering. Buff gently with a polishing cloth. Store separately to prevent scratching.',
    variants: ['Gold', 'Silver Tone'],
    images: {
      front: { hex: '#DFB347', label: 'SPHERE HUGGIES — FRONT' },
      side: { hex: '#CC9E32', label: 'SPHERE HUGGIES — SIDE' },
      detail: { hex: '#B88A20', label: 'SPHERE HUGGIES — DETAIL' },
    },
    slug: 'golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 64,
    tag: null,
    description:
      'Textured gold filigree drop earrings with an antique-inspired lace pattern. Lightweight yet substantial, they catch the light with every turn of the head.',
    materials:
      '18K gold-plated brass · Filigree texture · French wire hook · Sold as a pair',
    care: 'Delicate filigree — handle with care. Remove before sleeping. Clean with a dry, soft cloth.',
    variants: ['Gold'],
    images: {
      front: { hex: '#D4A853', label: 'AMBER LACE — FRONT' },
      side: { hex: '#C49A45', label: 'AMBER LACE — SIDE' },
      detail: { hex: '#BF8F3A', label: 'AMBER LACE — DETAIL' },
    },
    slug: 'amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 47,
    tag: 'GIFT READY',
    description:
      'A gift-boxed earring and necklace set that makes every occasion unforgettable. The matching duo comes wrapped in our signature velvet case — ready to be treasured.',
    materials:
      '18K gold-plated brass · Crystal accents · Gift box included · Set of 2 pieces',
    care: 'Remove before swimming or showering. Buff gently with a polishing cloth. Store in original box.',
    variants: ['Gold'],
    images: {
      front: { hex: '#E8C86A', label: 'HEIRLOOM SET — FRONT' },
      side: { hex: '#D4B050', label: 'HEIRLOOM SET — SIDE' },
      detail: { hex: '#C4A040', label: 'HEIRLOOM SET — DETAIL' },
    },
    slug: 'royal-heirloom-set',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
  { id: 'sets', name: 'Gift Sets', slug: 'sets' },
]

export const testimonials = [
  {
    name: 'Claire M.',
    text: 'The Golden Sphere Huggies are even more beautiful in person. They catch the light perfectly — I haven\'t taken them off since they arrived.',
    rating: 5,
  },
  {
    name: 'Sophia R.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The packaging alone made her cry. The jewelry is absolutely stunning.',
    rating: 5,
  },
  {
    name: 'Olivia K.',
    text: 'Finally — demi-fine jewelry that feels truly luxurious without the absurd markup. Velmora is my new go-to for gifting and self-treats.',
    rating: 5,
  },
]

export const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday stack ft. the Golden Spheres', hex: '#3D2E1F' },
  { id: 'ugc-2', caption: 'Flora Nectar in golden hour light', hex: '#5C3D2E' },
  { id: 'ugc-3', caption: 'Cuff season — Vivid Aura on repeat', hex: '#3A2A1A' },
  { id: 'ugc-4', caption: 'Date night with the Amber Lace drops', hex: '#4D3624' },
  { id: 'ugc-5', caption: 'Heirloom Set unboxing — gift ready', hex: '#2E1F14' },
  { id: 'ugc-6', caption: 'Mirror selfie, Huggies gleaming', hex: '#5A3826' },
]
