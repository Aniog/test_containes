const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    description: 'A luminous gold ear cuff with a delicate crystal accent that catches the light with every turn. Designed to be worn solo or stacked for a curated ear look.',
    details: 'Crafted from 18K gold-plated brass with a hypoallergenic finish. Features a single genuine Austrian crystal accent. Sold as a single piece — wear alone or mix with other cuffs.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora pouch. Gently polish with a soft cloth to maintain luster.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80', alt: 'Gold ear cuff with crystal' },
      { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', alt: 'Ear cuff detail' },
    ],
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    description: 'A show-stopping floral necklace featuring multicolor crystal petals set in warm gold. An heirloom-worthy piece that elevates any neckline.',
    details: '18K gold-plated brass with genuine Austrian crystal stones. Adjustable chain: 16"–18". Lobster clasp closure.',
    care: 'Avoid contact with water, perfumes, and lotions. Store flat in the included Velmora pouch. Gently polish with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'https://images.unsplash.com/photo-1599643478518-a86ab83b1e95?w=800&q=80', alt: 'Floral crystal necklace' },
      { src: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&q=80', alt: 'Necklace on model' },
    ],
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 215,
    description: 'Chunky gold dome huggies that make a statement without trying too hard. The perfect everyday hoop with a bold, sculptural silhouette.',
    details: '18K gold-plated brass. 14mm diameter. Snap closure. Sold as a pair. Hypoallergenic finish.',
    care: 'Avoid contact with water and perfumes. Store in the included Velmora pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'https://images.unsplash.com/photo-1633810542707-1d0a74696eac?w=800&q=80', alt: 'Gold dome huggies' },
      { src: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80', alt: 'Huggies on model' },
    ],
    variants: ['Gold', 'Silver'],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    description: 'Textured gold filigree drop earrings inspired by Art Nouveau lace patterns. Lightweight yet substantial — an instant conversation starter.',
    details: '18K gold-plated brass with intricate filigree detailing. French wire hook closure. Sold as a pair.',
    care: 'Avoid contact with water, perfumes, and lotions. Store hanging or in the included Velmora pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns on unworn items.',
    images: [
      { src: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=800&q=80', alt: 'Gold filigree drop earrings' },
      { src: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80', alt: 'Filigree earrings on model' },
    ],
    variants: ['Gold'],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 42,
    description: 'A beautifully gift-boxed earring and necklace set designed for the moments that matter. Features matching gold pendants on a delicate chain and stud earrings.',
    details: '18K gold-plated brass. Set includes a 16"–18" adjustable necklace and matching stud earrings. Gift box included.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the included Velmora gift box.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day returns on unworn, unopened items.',
    images: [
      { src: 'https://images.unsplash.com/photo-1609123827367-3a3facca5c7d?w=800&q=80', alt: 'Gift-boxed earring and necklace set' },
      { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', alt: 'Heirloom set detail' },
    ],
    variants: ['Gold'],
    bestseller: false,
  },
];

export default products;

export const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
export const materials = ['18K Gold Plated', 'Sterling Silver'];

export const testimonials = [
  { name: 'Sophia K.', text: 'Absolutely stunning quality. The gold finish is flawless and the pieces feel so substantial. I receive compliments every time I wear my Velmora earrings.', rating: 5 },
  { name: 'Olivia M.', text: 'I bought the Majestic Flora Nectar necklace for my sister\'s wedding and it was absolutely perfect. The packaging alone feels like a gift.', rating: 5 },
  { name: 'Isabella R.', text: 'Finally, demi-fine jewelry that looks and feels expensive without the guilt. The huggies have become my everyday signature piece.', rating: 5 },
];

export const ugcPosts = [
  { id: 'ugc1', username: '@sophiak', caption: 'Golden hour with my Vivid Aura cuff ✨' },
  { id: 'ugc2', username: '@oliviamay', caption: 'Sunday best featuring the Flora Nectar' },
  { id: 'ugc3', username: '@isabellastyle', caption: 'Stacked & loved. Huggies on repeat' },
  { id: 'ugc4', username: '@chloediary', caption: 'Date night glow with Amber Lace' },
  { id: 'ugc5', username: '@maia.jewels', caption: 'Heirloom set — obsessed is an understatement' },
  { id: 'ugc6', username: '@laura.daily', caption: 'Minimal moments. Golden Sphere forever' },
];
