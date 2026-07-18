export const categories = ['Earrings', 'Necklaces', 'Huggies']

export const materials = ['18K Gold Plated', 'Sterling Silver Tone', 'Crystal Detail']

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    subtitle: 'Gold ear cuff with crystal accent',
    rating: 4.8,
    reviews: 124,
    description:
      'A refined ear cuff designed to frame the ear with soft brilliance. Light-catching crystal detailing gives it an elegant finish for day-to-evening wear.',
    details:
      'Designed for pierced or non-pierced styling moments, this lightweight ear cuff layers beautifully with studs, huggies, or a minimal gold stack.',
    care: 'Keep dry, avoid perfumes and lotions, and store in the Velmora pouch between wears.',
    shipping: 'Complimentary worldwide shipping over $75. Returns accepted within 30 days.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'vivid-aura-jewels-1',
        alt: 'Vivid Aura Jewels close-up',
        titleId: 'vivid-aura-jewels-gallery-1-title',
        descId: 'vivid-aura-jewels-gallery-1-desc',
      },
      {
        id: 'vivid-aura-jewels-2',
        alt: 'Vivid Aura Jewels worn on ear',
        titleId: 'vivid-aura-jewels-gallery-2-title',
        descId: 'vivid-aura-jewels-gallery-2-desc',
      },
    ],
    relatedIds: ['golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Crystal Detail',
    subtitle: 'Multicolor floral crystal necklace',
    rating: 4.9,
    reviews: 201,
    description:
      'A soft statement necklace with floral crystal detailing and a warm gold finish. It brings color and polish to simple knits, silk shirts, and occasion looks.',
    details:
      'The silhouette sits gracefully at the collarbone, blending delicate sparkle with a quietly elevated profile made for gifting and self-purchase alike.',
    care: 'Wipe gently with a soft cloth and avoid direct contact with water or polishing chemicals.',
    shipping: 'Ships in our signature gift-ready box. Express delivery available at checkout later.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'majestic-flora-nectar-1',
        alt: 'Majestic Flora Nectar necklace detail',
        titleId: 'majestic-flora-nectar-gallery-1-title',
        descId: 'majestic-flora-nectar-gallery-1-desc',
      },
      {
        id: 'majestic-flora-nectar-2',
        alt: 'Majestic Flora Nectar on model',
        titleId: 'majestic-flora-nectar-gallery-2-title',
        descId: 'majestic-flora-nectar-gallery-2-desc',
      },
    ],
    relatedIds: ['royal-heirloom-set', 'amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    subtitle: 'Chunky gold dome huggie earrings',
    rating: 4.7,
    reviews: 187,
    description:
      'A softly rounded dome huggie with a sculptural profile that feels both modern and timeless. Easy enough for every day, polished enough for dinners out.',
    details:
      'The click-close silhouette hugs the lobe for a secure and comfortable fit while delivering a fuller gold look without visual heaviness.',
    care: 'Store separately to avoid scratching. Remove before showering, swimming, or working out.',
    shipping: 'Delivered in signature Velmora packaging with easy 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'golden-sphere-huggies-1',
        alt: 'Golden Sphere Huggies front angle',
        titleId: 'golden-sphere-huggies-gallery-1-title',
        descId: 'golden-sphere-huggies-gallery-1-desc',
      },
      {
        id: 'golden-sphere-huggies-2',
        alt: 'Golden Sphere Huggies worn close-up',
        titleId: 'golden-sphere-huggies-gallery-2-title',
        descId: 'golden-sphere-huggies-gallery-2-desc',
      },
    ],
    relatedIds: ['vivid-aura-jewels', 'amber-lace-earrings', 'royal-heirloom-set'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    subtitle: 'Textured gold filigree drop earrings',
    rating: 4.8,
    reviews: 96,
    description:
      'An airy filigree drop earring with intricate texture and graceful movement. The silhouette feels dress-ready while remaining lightweight and wearable.',
    details:
      'Inspired by heirloom lacework, the design adds old-world romance to tailored dressing, evening looks, and elevated gifting moments.',
    care: 'Clean only with a soft, dry cloth and keep away from humidity when storing.',
    shipping: 'Gift-ready packaging included. Free shipping thresholds apply automatically.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'amber-lace-earrings-1',
        alt: 'Amber Lace Earrings product image',
        titleId: 'amber-lace-earrings-gallery-1-title',
        descId: 'amber-lace-earrings-gallery-1-desc',
      },
      {
        id: 'amber-lace-earrings-2',
        alt: 'Amber Lace Earrings on model',
        titleId: 'amber-lace-earrings-gallery-2-title',
        descId: 'amber-lace-earrings-gallery-2-desc',
      },
    ],
    relatedIds: ['vivid-aura-jewels', 'golden-sphere-huggies', 'majestic-flora-nectar'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Necklaces',
    material: '18K Gold Plated',
    subtitle: 'Gift-boxed earring + necklace set',
    rating: 5,
    reviews: 72,
    description:
      'A coordinated gift-ready pairing of delicate necklace and matching earrings, presented in a keepsake box for birthdays, bridal moments, and self-gifting.',
    details:
      'The set layers refined sparkle with timeless gold tones, offering an effortless way to complete a look or present a polished gift.',
    care: 'Remove before sleeping and keep pieces in their individual pouch slots when not in use.',
    shipping: 'Includes signature gift box and complimentary 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    gallery: [
      {
        id: 'royal-heirloom-set-1',
        alt: 'Royal Heirloom Set gift box',
        titleId: 'royal-heirloom-set-gallery-1-title',
        descId: 'royal-heirloom-set-gallery-1-desc',
      },
      {
        id: 'royal-heirloom-set-2',
        alt: 'Royal Heirloom Set styled together',
        titleId: 'royal-heirloom-set-gallery-2-title',
        descId: 'royal-heirloom-set-gallery-2-desc',
      },
    ],
    relatedIds: ['majestic-flora-nectar', 'amber-lace-earrings', 'golden-sphere-huggies'],
  },
]

export const testimonials = [
  {
    id: 't-1',
    quote: 'The finish is beautiful in person and the packaging made it feel like a much more expensive purchase.',
    author: 'Amelia R.',
  },
  {
    id: 't-2',
    quote: 'I bought the huggies for everyday wear and now I want the necklace too. Elegant and easy.',
    author: 'Sofia M.',
  },
  {
    id: 't-3',
    quote: 'Perfect for gifting. The pieces feel polished, feminine, and incredibly wearable.',
    author: 'Claire T.',
  },
]

export const ugcMoments = [
  {
    id: 'ugc-1',
    title: 'Morning Light',
    subtitle: 'Soft stacks for everyday polish',
  },
  {
    id: 'ugc-2',
    title: 'Golden Hour',
    subtitle: 'Layers that glow against bare skin',
  },
  {
    id: 'ugc-3',
    title: 'After Dinner',
    subtitle: 'Quiet sparkle for evening plans',
  },
  {
    id: 'ugc-4',
    title: 'Gifted Well',
    subtitle: 'Keepsake moments wrapped beautifully',
  },
]

export const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Modern studs, cuffs, and drops with a warm gold finish.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and statement florals for effortless layering.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Rounded everyday silhouettes designed for comfort and shine.',
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(ids = []) {
  return ids
    .map((id) => getProductById(id))
    .filter(Boolean)
}
