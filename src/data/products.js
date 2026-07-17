const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    badge: 'Bestseller',
    description: 'A stunning gold ear cuff with a sparkling crystal accent. No piercing required — clips on effortlessly for an instant style upgrade.',
    details: 'This ear cuff features a luminous crystal stone set in a warm 18K gold-plated band. Adjustable fit for all ear sizes. The Vivid Aura Jewels cuff adds an editorial edge to any look, from casual daywear to evening elegance.',
    care: 'Avoid contact with water, perfume, and harsh chemicals. Store in the included pouch when not wearing. Gently wipe with a soft cloth to maintain shine.',
    shipping: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items ship within 1-2 business days.',
    variants: ['Gold', 'Silver'],
    rating: 4.8,
    reviewCount: 127,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    badge: 'New Arrival',
    description: 'A multicolor floral crystal necklace that captures the beauty of a blooming garden. Vibrant crystals set in warm gold.',
    details: 'Hand-set crystals in an intricate floral arrangement on a delicate 18K gold-plated chain. Adjustable 16-18 inch length with lobster clasp closure. Each crystal is carefully chosen for maximum brilliance.',
    care: 'Remove before showering or swimming. Store flat in the provided jewelry box. Clean gently with a dry microfiber cloth.',
    shipping: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items ship within 1-2 business days.',
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings that hug the earlobe perfectly. A modern essential for everyday luxury.',
    details: 'Polished dome design in 18K gold plating over surgical-grade stainless steel. 12mm diameter with secure click-close mechanism. Hypoallergenic and suitable for sensitive ears.',
    care: 'Wipe with a soft cloth after each wear. Avoid exposure to lotions and perfumes while wearing. Store in a dry place.',
    shipping: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items ship within 1-2 business days.',
    variants: ['Gold', 'Silver'],
    rating: 4.7,
    reviewCount: 203,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    badge: 'Editor\'s Pick',
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Romantic and refined.',
    details: 'Intricate filigree design crafted from 18K gold-plated brass. 2.5 inch drop length with French wire backing. Each pair features hand-finished lace-like detailing for an artisanal feel.',
    care: 'Keep away from moisture and chemicals. Polish gently with the included cloth. Store individually to prevent tangling.',
    shipping: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items ship within 1-2 business days.',
    variants: ['Gold', 'Silver'],
    rating: 4.6,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'earrings',
    badge: 'Gift Set',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect present for someone special — or yourself.',
    details: 'Set includes: one pair of gold teardrop earrings and a matching pendant necklace on an adjustable chain. Presented in a velvet-lined Velmora gift box with a handwritten note option. 18K gold-plated with cubic zirconia accents.',
    care: 'Remove before bathing. Store in the gift box provided. Clean with a dry soft cloth only.',
    shipping: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Items ship within 1-2 business days. Gift wrapping included.',
    variants: ['Gold', 'Silver'],
    rating: 4.9,
    reviewCount: 64,
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
    ],
  },
];

export const categories = [
  { slug: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop' },
  { slug: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop' },
  { slug: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&h=600&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all after 3 months.',
  },
  {
    id: 2,
    name: 'Jessica K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set for my sister\'s birthday. The packaging was beautiful and she loved it. Will definitely order again.',
  },
  {
    id: 3,
    name: 'Emily R.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that actually looks and feels expensive without the luxury markup. The Amber Lace Earrings are my new favorite.',
  },
];

export const ugcItems = [
  { id: 1, caption: 'Golden hour glow', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=600&fit=crop' },
  { id: 2, caption: 'Layered perfection', image: 'https://images.unsplash.com/photo-1611566945545-df99054cd70b?w=400&h=600&fit=crop' },
  { id: 3, caption: 'Everyday elegance', image: 'https://images.unsplash.com/photo-1602509380108-a47060db0a97?w=400&h=600&fit=crop' },
  { id: 4, caption: 'Gift of gold', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop' },
  { id: 5, caption: 'Statement piece', image: 'https://images.unsplash.com/photo-1604465831305-18d48dc39bd0?w=400&h=600&fit=crop' },
  { id: 6, caption: 'Crystal clear', image: 'https://images.unsplash.com/photo-1646703299875-98091b04e512?w=400&h=600&fit=crop' },
];

export default products;
