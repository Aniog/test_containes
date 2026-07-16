export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.7,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff with a luminous crystal accent. Designed to catch light from every angle, this piece adds an ethereal glow to any look.',
    materials:
      '18K gold-plated brass, cubic zirconia crystal. Hypoallergenic, nickel-free.',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided pouch to maintain brilliance.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day return window. Items must be unworn with original packaging.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    variant: 'gold',
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate necklace adorned with multicolor floral crystals. Each petal is hand-set to create a garden of color against warm gold.',
    materials:
      '18K gold-plated brass, multicolor cubic zirconia crystals. Adjustable chain 16–18 inches.',
    care: 'Gently wipe with a soft cloth after wear. Keep away from harsh chemicals.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day return window. Items must be unworn with original packaging.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    variant: 'gold',
    variants: ['gold', 'silver'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    price: 38,
    rating: 4.8,
    reviewCount: 203,
    description:
      'Chunky gold dome huggie earrings with a polished spherical silhouette. Lightweight yet substantial — the perfect everyday statement.',
    materials:
      '18K gold-plated brass. Hypoallergenic posts, nickel-free. Hoop diameter 12mm.',
    care: 'Remove before swimming or showering. Store in a dry place away from sunlight.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day return window. Items must be unworn with original packaging.',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    variant: 'gold',
    variants: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description:
      'Intricate gold filigree drop earrings with a warm amber-hued crystal center. Lace-like detailing makes these heirloom-quality.',
    materials:
      '18K gold-plated brass, warm amber cubic zirconia. Lever-back closure for secure wear.',
    care: 'Handle with care — the filigree is delicate. Store flat in the jewelry box.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day return window. Items must be unworn with original packaging.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    variant: 'gold',
    variants: ['gold', 'silver'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description:
      'A gift-boxed set featuring matching earrings and a pendant necklace. The ultimate gift for someone treasured — or a well-deserved treat for yourself.',
    materials:
      '18K gold-plated brass, cubic zirconia crystals. Necklace chain 18 inches. Earrings measure 10mm.',
    care: 'Keep both pieces in the lined gift box. Clean occasionally with a gentle jewelry cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5–10 business days.',
    returns: '30-day return window. Items must be unworn with original packaging.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    variant: 'gold',
    variants: ['gold', 'silver'],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings', count: 3 },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', slug: 'huggies', count: 1 },
  { id: 'sets', name: 'Gift Sets', slug: 'sets', count: 1 },
]

export const testimonials = [
  { name: 'Sophie M.', rating: 5, text: 'The quality is incredible for the price. I get compliments every time I wear my Golden Sphere Huggies.' },
  { name: 'Elena R.', rating: 5, text: 'Bought the Royal Heirloom Set as a gift for my sister. She hasn\'t taken it off since. Absolutely stunning.' },
  { name: 'Claire T.', rating: 5, text: 'Velmora has become my go-to for everyday luxury. The Majestic Flora Necklace is pure art.' },
]

export const ugcReels = [
  {
    id: 'ugc-1',
    caption: 'Golden hour with my favorite huggies ✨',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80',
  },
  {
    id: 'ugc-2',
    caption: 'Necklace stack — @velmora always delivers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
  },
  {
    id: 'ugc-3',
    caption: 'Ear cuff magic 💫',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  },
  {
    id: 'ugc-4',
    caption: 'Gifted the Royal Set — she said yes 💍',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
  },
  {
    id: 'ugc-5',
    caption: 'Daily staple: Amber Lace drops',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
  },
]