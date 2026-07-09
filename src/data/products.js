export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      'A sculptural gold ear cuff finished with a delicate crystal accent for everyday light-catching polish.',
    details:
      'Designed to slip on comfortably without a piercing, this cuff brings a refined flash to stacked earrings or a single minimalist look.',
    care:
      '18K gold plated over premium brass with crystal detailing. Keep dry, avoid perfume and lotions, and store in the included pouch.',
    imgId: 'product-vivid-aura-jewels-main-8f2a9c',
    hoverImgId: 'product-vivid-aura-jewels-hover-c41b72',
    titleId: 'product-vivid-aura-jewels-title',
    descId: 'product-vivid-aura-jewels-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Crystal Necklace',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    description:
      'A feminine floral crystal necklace with gentle color, made for soft knits, silk necklines, and gifting moments.',
    details:
      'A graceful gold chain frames a multicolor crystal flower pendant that feels heirloom-inspired yet easy to wear.',
    care:
      '18K gold plated chain with crystal pendant. Wipe with a soft cloth after wear and keep away from water.',
    imgId: 'product-majestic-flora-nectar-main-18d4ef',
    hoverImgId: 'product-majestic-flora-nectar-hover-5a91db',
    titleId: 'product-majestic-flora-nectar-title',
    descId: 'product-majestic-flora-nectar-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    material: '18K Gold Plated',
    price: 38,
    rating: 5,
    reviews: 212,
    description:
      'Chunky gold dome huggies with a rounded silhouette that adds quiet statement energy to daily styling.',
    details:
      'Lightweight despite their bold shape, these huggies hug close to the ear for polished morning-to-evening wear.',
    care:
      '18K gold plated over hypoallergenic posts. Store separately to protect the high-shine finish.',
    imgId: 'product-golden-sphere-huggies-main-92c7ae',
    hoverImgId: 'product-golden-sphere-huggies-hover-b2d816',
    titleId: 'product-golden-sphere-huggies-title',
    descId: 'product-golden-sphere-huggies-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviews: 84,
    description:
      'Textured gold filigree drop earrings with romantic movement and a warm, hand-finished glow.',
    details:
      'Fine openwork texture catches the light from every angle while remaining delicate enough for dinner, events, and everyday elegance.',
    care:
      'Gold vermeil finish with hypoallergenic hooks. Remove before showering, swimming, or sleeping.',
    imgId: 'product-amber-lace-earrings-main-0da7cf',
    hoverImgId: 'product-amber-lace-earrings-hover-e91a4b',
    titleId: 'product-amber-lace-earrings-title',
    descId: 'product-amber-lace-earrings-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    type: 'Earring + Necklace Set',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 151,
    description:
      'A gift-boxed earring and necklace pairing with refined shine, ready for birthdays, milestones, and self-celebration.',
    details:
      'Curated for effortless coordination, the set arrives in a keepsake box with a soft pouch and care card.',
    care:
      '18K gold plated demi-fine set. Polish gently and keep pieces separate when storing.',
    imgId: 'product-royal-heirloom-set-main-6fc41e',
    hoverImgId: 'product-royal-heirloom-set-hover-7eb289',
    titleId: 'product-royal-heirloom-set-title',
    descId: 'product-royal-heirloom-set-desc',
  },
]

export const categoryTiles = [
  {
    name: 'Earrings',
    subtitle: 'Light-catching essentials for every stack.',
    imgId: 'category-earrings-tile-5bd27a',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
  },
  {
    name: 'Necklaces',
    subtitle: 'Pendant stories in warm gold and crystal.',
    imgId: 'category-necklaces-tile-31b8cd',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
  },
  {
    name: 'Huggies',
    subtitle: 'Close-fit silhouettes with sculptural polish.',
    imgId: 'category-huggies-tile-a9e640',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
  },
]

export const ugcItems = [
  {
    id: 'ugc-ear-stack',
    caption: 'Sunday gold stack',
    imgId: 'ugc-ear-stack-card-4f87ad',
    titleId: 'ugc-ear-stack-title',
  },
  {
    id: 'ugc-neckline',
    caption: 'A necklace for silk nights',
    imgId: 'ugc-neckline-card-13ad91',
    titleId: 'ugc-neckline-title',
  },
  {
    id: 'ugc-huggies',
    caption: 'Huggies with a soft knit',
    imgId: 'ugc-huggies-card-72ce10',
    titleId: 'ugc-huggies-title',
  },
  {
    id: 'ugc-gifting',
    caption: 'Gift-ready glow',
    imgId: 'ugc-gifting-card-0fc39b',
    titleId: 'ugc-gifting-title',
  },
]

export const formatPrice = (price) => `$${price}`
