export const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 86,
    description:
      'A sculptural gold ear cuff finished with a quiet crystal glint for everyday luminosity.',
    detail:
      'Designed for effortless styling, this no-piercing cuff sits comfortably along the ear and adds a refined point of light to both minimal and layered looks.',
    imgId: 'product-vivid-aura-main-a19c7d',
    hoverImgId: 'product-vivid-aura-hover-b28d6e',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
    gallery: ['product-vivid-aura-gallery-1', 'product-vivid-aura-gallery-2', 'product-vivid-aura-gallery-3'],
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Crystal Details',
    price: 68,
    rating: 4.8,
    reviews: 74,
    description:
      'A floral crystal necklace with subtle color, made to frame the collarbone with warmth.',
    detail:
      'Delicate multicolor stones are arranged in a soft botanical silhouette, bringing a romantic accent to silk, knitwear, and evening layers.',
    imgId: 'product-majestic-flora-main-c37f9a',
    hoverImgId: 'product-majestic-flora-hover-d41a8b',
    titleId: 'product-majestic-flora-title',
    descId: 'product-majestic-flora-desc',
    gallery: ['product-majestic-flora-gallery-1', 'product-majestic-flora-gallery-2', 'product-majestic-flora-gallery-3'],
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 112,
    description:
      'Chunky dome huggies with a polished rounded profile and a comfortable everyday clasp.',
    detail:
      'A quietly bold essential, these huggies bring dimension to simple styling without feeling heavy or overworked.',
    imgId: 'product-golden-sphere-main-e58b2c',
    hoverImgId: 'product-golden-sphere-hover-f69d3e',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
    gallery: ['product-golden-sphere-gallery-1', 'product-golden-sphere-gallery-2', 'product-golden-sphere-gallery-3'],
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Textured Gold',
    price: 54,
    rating: 4.7,
    reviews: 63,
    description:
      'Textured filigree drop earrings with a lace-like gold finish and graceful movement.',
    detail:
      'Fine openwork texture gives these earrings a vintage-inspired softness, perfect for gifting and elevated everyday dressing.',
    imgId: 'product-amber-lace-main-g72e1f',
    hoverImgId: 'product-amber-lace-hover-h83f2a',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
    gallery: ['product-amber-lace-gallery-1', 'product-amber-lace-gallery-2', 'product-amber-lace-gallery-3'],
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: 'Gift Boxed Set',
    price: 95,
    rating: 5,
    reviews: 51,
    description:
      'A gift-boxed earring and necklace set with heirloom-inspired polish and modern ease.',
    detail:
      'Created for memorable gifting, this coordinated set arrives ready to wear with refined details that feel personal rather than precious.',
    imgId: 'product-royal-heirloom-main-i94c5b',
    hoverImgId: 'product-royal-heirloom-hover-j05d6c',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
    gallery: ['product-royal-heirloom-gallery-1', 'product-royal-heirloom-gallery-2', 'product-royal-heirloom-gallery-3'],
  },
]

export const categories = [
  {
    name: 'Earrings',
    slug: 'earrings',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imageId: 'category-earrings-image-k16f3a',
    description: 'Polished drops, cuffs, and sculptural everyday pairs.',
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imageId: 'category-necklaces-image-l27a4b',
    description: 'Collarbone-framing chains and crystal pendants.',
  },
  {
    name: 'Huggies',
    slug: 'huggies',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imageId: 'category-huggies-image-m38b5c',
    description: 'Close-fit gold hoops made for daily stacking.',
  },
]

export const ugcCards = [
  {
    id: 'ugc-ear-stack',
    caption: 'Morning light, softly stacked.',
    titleId: 'ugc-ear-stack-title',
    imageId: 'ugc-ear-stack-image-n49c6d',
  },
  {
    id: 'ugc-gold-necklace',
    caption: 'A quiet glint at the neckline.',
    titleId: 'ugc-gold-necklace-title',
    imageId: 'ugc-gold-necklace-image-o50d7e',
  },
  {
    id: 'ugc-huggies',
    caption: 'Huggies for every hour.',
    titleId: 'ugc-huggies-title',
    imageId: 'ugc-huggies-image-p61e8f',
  },
  {
    id: 'ugc-gifting',
    caption: 'Wrapped to feel personal.',
    titleId: 'ugc-gifting-title',
    imageId: 'ugc-gifting-image-q72f9a',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)
