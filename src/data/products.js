export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    shortDescription:
      'A crystal-tipped ear cuff designed to frame the ear with soft light and a modern gold curve.',
    description:
      'An effortless statement for everyday dressing, this open ear cuff curves gently around the ear with a single crystal accent for a quietly radiant finish.',
    materials:
      '18K gold plated brass, cubic zirconia crystal, nickel-free posts, and a polished high-shine finish.',
    shipping:
      'Ships within 1–2 business days with complimentary worldwide delivery over $75 and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    titleId: 'product-vivid-aura-jewels-title',
    descId: 'product-vivid-aura-jewels-desc',
    imageIds: {
      primary: 'velmora-vivid-aura-primary-8f2a9c',
      secondary: 'velmora-vivid-aura-secondary-2be61d',
      gallery: [
        'velmora-vivid-aura-gallery-1-3cf2b1',
        'velmora-vivid-aura-gallery-2-932fe1',
        'velmora-vivid-aura-gallery-3-a1b905',
      ],
    },
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Gold-Plated Sterling Silver',
    price: 68,
    rating: 4.8,
    reviewCount: 94,
    shortDescription:
      'A floral crystal necklace with jewel-toned sparkle, perfect for gifting or elevating a simple knit.',
    description:
      'Inspired by heirloom botanicals, this pendant necklace layers multicolor crystals across a delicate gold chain for a refined touch of color.',
    materials:
      'Gold-plated sterling silver, handset cubic zirconia stones, adjustable chain, and hypoallergenic clasp.',
    shipping:
      'Arrives in a signature Velmora keepsake box with tracked shipping and complimentary gift-ready wrapping.',
    variants: ['Gold Tone', 'Silver Tone'],
    titleId: 'product-majestic-flora-nectar-title',
    descId: 'product-majestic-flora-nectar-desc',
    imageIds: {
      primary: 'velmora-majestic-flora-primary-61ae20',
      secondary: 'velmora-majestic-flora-secondary-b49231',
      gallery: [
        'velmora-majestic-flora-gallery-1-cb4d20',
        'velmora-majestic-flora-gallery-2-1e39cf',
        'velmora-majestic-flora-gallery-3-2f901b',
      ],
    },
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 173,
    shortDescription:
      'Chunky dome huggies with a sculpted silhouette that makes even a white tee feel considered.',
    description:
      'Designed to sit close to the lobe, these dome huggies deliver polished volume without weight, making them ideal for all-day wear.',
    materials:
      '18K gold plated brass, click-close hinge, nickel-free finish, and lightweight hollow construction.',
    shipping:
      'Includes tracked worldwide shipping options, easy exchanges, and complimentary polishing cloth with every order.',
    variants: ['Gold Tone', 'Silver Tone'],
    titleId: 'product-golden-sphere-huggies-title',
    descId: 'product-golden-sphere-huggies-desc',
    imageIds: {
      primary: 'velmora-golden-sphere-primary-3cf993',
      secondary: 'velmora-golden-sphere-secondary-86ab3a',
      gallery: [
        'velmora-golden-sphere-gallery-1-0c1da3',
        'velmora-golden-sphere-gallery-2-df672e',
        'velmora-golden-sphere-gallery-3-c54aa2',
      ],
    },
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold-Plated Brass',
    price: 54,
    rating: 4.7,
    reviewCount: 86,
    shortDescription:
      'Textured drop earrings with delicate filigree work and a warm, antique-inspired glow.',
    description:
      'Fine openwork detailing and gentle movement give these drop earrings an artisanal feel while remaining light enough for day-to-night styling.',
    materials:
      'Gold-plated brass, textured filigree detailing, butterfly fastening, and hypoallergenic finishing.',
    shipping:
      'Carefully packed in a soft pouch and keepsake box with 30-day returns and easy gifting notes.',
    variants: ['Gold Tone', 'Silver Tone'],
    titleId: 'product-amber-lace-earrings-title',
    descId: 'product-amber-lace-earrings-desc',
    imageIds: {
      primary: 'velmora-amber-lace-primary-2a510a',
      secondary: 'velmora-amber-lace-secondary-9fb2c7',
      gallery: [
        'velmora-amber-lace-gallery-1-f5a32e',
        'velmora-amber-lace-gallery-2-8451cb',
        'velmora-amber-lace-gallery-3-b30c66',
      ],
    },
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviewCount: 57,
    shortDescription:
      'A gift-boxed pairing of necklace and earrings curated for instant occasion dressing.',
    description:
      'Presented in a signature keepsake box, this matching set combines soft sparkle and polished gold tones for an effortlessly luxurious gift.',
    materials:
      '18K gold plated brass, matching crystal accents, signature Velmora gift box, and reusable storage pouch.',
    shipping:
      'Complimentary gift-ready packaging, handwritten note option, and express delivery available at checkout.',
    variants: ['Gold Tone', 'Silver Tone'],
    titleId: 'product-royal-heirloom-set-title',
    descId: 'product-royal-heirloom-set-desc',
    imageIds: {
      primary: 'velmora-royal-heirloom-primary-c7e631',
      secondary: 'velmora-royal-heirloom-secondary-4ef77c',
      gallery: [
        'velmora-royal-heirloom-gallery-1-9802b3',
        'velmora-royal-heirloom-gallery-2-110ac0',
        'velmora-royal-heirloom-gallery-3-a74ff2',
      ],
    },
  },
]

export const categories = [
  {
    name: 'Earrings',
    description: 'From sculptural cuffs to textured drops with soft shine.',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imageId: 'velmora-category-earrings-1b923e',
  },
  {
    name: 'Necklaces',
    description: 'Layering pieces and delicate pendants for everyday polish.',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imageId: 'velmora-category-necklaces-42a11e',
  },
  {
    name: 'Huggies',
    description: 'Close-fitting silhouettes with a refined statement feel.',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imageId: 'velmora-category-huggies-7be920',
  },
]

export const ugcMoments = [
  {
    id: 'ugc-quiet-stacking',
    caption: 'Quiet stacking for coffee dates and silk shirts.',
    captionId: 'ugc-quiet-stacking-caption',
    imageId: 'velmora-ugc-quiet-stacking-1d20aa',
  },
  {
    id: 'ugc-golden-evening',
    caption: 'Golden light, sleek huggies, and an evening out.',
    captionId: 'ugc-golden-evening-caption',
    imageId: 'velmora-ugc-golden-evening-68fd21',
  },
  {
    id: 'ugc-soft-layering',
    caption: 'Soft layering that feels polished without trying too hard.',
    captionId: 'ugc-soft-layering-caption',
    imageId: 'velmora-ugc-soft-layering-324eac',
  },
  {
    id: 'ugc-gifting-moment',
    caption: 'A gifting moment worth keeping on your vanity.',
    captionId: 'ugc-gifting-moment-caption',
    imageId: 'velmora-ugc-gifting-moment-9d4f1c',
  },
]

export const testimonials = [
  {
    name: 'Avery M.',
    review:
      'The finish looks far more expensive than the price point. I wear my huggies almost every day.',
  },
  {
    name: 'Sofia R.',
    review:
      'Beautiful gift packaging, fast delivery, and the necklace sits perfectly. It felt special from the first unboxing.',
  },
  {
    name: 'Claire T.',
    review:
      'Exactly the kind of quiet luxury pieces I was looking for — polished, feminine, and easy to style.',
  },
]

export const footerLinks = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Wholesale', 'Privacy'],
}

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug) =>
  products.filter((product) => product.slug !== slug).slice(0, 4)
