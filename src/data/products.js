export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 86,
    description:
      'A sculptural gold ear cuff finished with a crystal accent for everyday light-catching polish.',
    longDescription:
      'A luminous ear cuff designed for stacked styling without the commitment of a piercing. The softly rounded silhouette hugs the ear with a petite crystal accent that catches the light from every angle.',
    care: 'Keep dry, avoid perfume and lotions, and store in the included soft pouch between wears.',
    imgId: 'product-vivid-aura-primary-a91c2e',
    hoverImgId: 'product-vivid-aura-hover-f62b0d',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
    imageQuery: 'warm lit gold crystal ear cuff on model ear close up editorial jewelry',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 64,
    description:
      'A delicate floral crystal necklace with soft multicolor stones set on a fine gold chain.',
    longDescription:
      'Inspired by heirloom garden pieces, this fine gold chain carries a petite floral pendant with luminous crystal petals. It layers beautifully with simple chains or stands alone as a refined gift.',
    care: 'Polish gently with a dry cloth and place flat in its pouch to protect the crystal setting.',
    imgId: 'product-flora-necklace-primary-c14e8d',
    hoverImgId: 'product-flora-necklace-hover-b88a3f',
    titleId: 'product-flora-necklace-title',
    descId: 'product-flora-necklace-desc',
    imageQuery: 'multicolor floral crystal gold necklace on neck warm neutral editorial jewelry',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 112,
    description:
      'Chunky gold dome huggie earrings with a polished, softly rounded profile.',
    longDescription:
      'Our bestselling huggies bring quiet impact to daily dressing. The rounded dome shape is lightweight, comfortable, and polished enough for dinner plans.',
    care: 'Fasten after styling hair products and remove before swimming or sleeping.',
    imgId: 'product-sphere-huggies-primary-e70fb1',
    hoverImgId: 'product-sphere-huggies-hover-d13cc4',
    titleId: 'product-sphere-huggies-title',
    descId: 'product-sphere-huggies-desc',
    imageQuery: 'chunky gold dome huggie earrings on ear warm light luxury jewelry close up',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 51,
    description:
      'Textured gold filigree drop earrings with airy movement and a warm amber glow.',
    longDescription:
      'An ornate but restrained drop earring with lace-like texture and subtle movement. Designed to dress up a silk blouse, slip dress, or simple tee.',
    care: 'Store separately to preserve the delicate filigree texture and wipe clean after wear.',
    imgId: 'product-amber-lace-primary-a4d8e9',
    hoverImgId: 'product-amber-lace-hover-f75ab2',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
    imageQuery: 'textured gold filigree drop earrings warm amber editorial luxury jewelry',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 43,
    description:
      'A gift-boxed earring and necklace pairing created for effortless occasion dressing.',
    longDescription:
      'A complete demi-fine pairing presented in our signature gift box. The coordinated necklace and earrings make a polished gift for birthdays, bridesmaids, and meaningful self-purchase moments.',
    care: 'Return pieces to the gift box between wears and keep away from moisture for lasting shine.',
    imgId: 'product-heirloom-set-primary-b4a7c1',
    hoverImgId: 'product-heirloom-set-hover-c58f2a',
    titleId: 'product-heirloom-set-title',
    descId: 'product-heirloom-set-desc',
    imageQuery: 'gift boxed gold jewelry earring necklace set warm luxury packaging editorial',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Delicate drops, cuffs, and everyday glow.',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
    imgId: 'category-earrings-img-e31b7a',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layered chains and meaningful pendants.',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
    imgId: 'category-necklaces-img-a51df2',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Softly sculpted hoops for every day.',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
    imgId: 'category-huggies-img-c84be3',
  },
]

export const ugcItems = [
  {
    id: 'ugc-neck-stack',
    caption: 'Layered for late afternoon plans',
    titleId: 'ugc-neck-stack-title',
    imgId: 'ugc-neck-stack-img-d93c1a',
  },
  {
    id: 'ugc-gold-huggies',
    caption: 'The huggies she never takes off',
    titleId: 'ugc-gold-huggies-title',
    imgId: 'ugc-gold-huggies-img-a73f6b',
  },
  {
    id: 'ugc-gift-box',
    caption: 'A little box, a lasting ritual',
    titleId: 'ugc-gift-box-title',
    imgId: 'ugc-gift-box-img-f25b81',
  },
  {
    id: 'ugc-ear-cuff',
    caption: 'Crystal detail, quietly bright',
    titleId: 'ugc-ear-cuff-title',
    imgId: 'ugc-ear-cuff-img-b07d55',
  },
]

export const formatPrice = (price) => `$${price}`
