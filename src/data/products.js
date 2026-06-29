export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    badge: 'Bestseller',
    description:
      'A sculptural gold ear cuff finished with a single crystal accent for a refined glint without the need for piercing.',
    details:
      'Designed for effortless stacking, this polished cuff hugs the ear with a comfortable open silhouette and a luminous crystal detail.',
    care:
      '18K gold plated brass with crystal accent. Nickel-safe and hypoallergenic. Keep away from water, fragrance, and lotions; polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.',
    imgId: 'product-vivid-aura-main-9b21c7',
    hoverImgId: 'product-vivid-aura-hover-e7a418',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 5,
    reviews: 94,
    badge: 'Gift Pick',
    description:
      'A delicate floral crystal necklace with soft multicolor stones that catch warm light beautifully.',
    details:
      'A feminine pendant necklace inspired by vintage botanical motifs, made for gifting and everyday self-adornment.',
    care:
      '18K gold plated chain with multicolor crystal stones. Store separately in its pouch and avoid abrasive surfaces.',
    shipping:
      'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.',
    imgId: 'product-flora-necklace-main-a6f3d2',
    hoverImgId: 'product-flora-necklace-hover-c3e7b9',
    titleId: 'product-flora-necklace-title',
    descId: 'product-flora-necklace-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.8,
    reviews: 172,
    badge: 'Low Stock',
    description:
      'Chunky gold dome huggie earrings with a rounded silhouette that feels modern, polished, and wearable.',
    details:
      'These everyday huggies balance a bold dome profile with lightweight comfort for a seamless day-to-evening finish.',
    care:
      '18K gold plated brass with a high-polish finish. Hypoallergenic posts. Wipe after wear and store dry.',
    shipping:
      'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.',
    imgId: 'product-golden-sphere-main-f2b8e1',
    hoverImgId: 'product-golden-sphere-hover-d5a934',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.9,
    reviews: 87,
    badge: 'New',
    description:
      'Textured gold filigree drop earrings with an airy lace-like pattern and elegant movement.',
    details:
      'A romantic drop shape with intricate texture, crafted to frame the face with golden warmth and subtle drama.',
    care:
      '18K gold plated brass. Lightweight and hypoallergenic. Avoid moisture and keep in the included pouch between wears.',
    shipping:
      'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.',
    imgId: 'product-amber-lace-main-b47e19',
    hoverImgId: 'product-amber-lace-hover-a9c562',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 63,
    badge: 'Ready to Gift',
    description:
      'A gift-boxed gold jewelry set with coordinated earrings and a necklace for a personal, polished gifting moment.',
    details:
      'Presented in Velmora gift packaging, this coordinated gold set brings together luminous jewelry details for an instantly complete look.',
    care:
      '18K gold plated demi-fine set. Hypoallergenic and nickel-safe. Store pieces separately and clean with a dry polishing cloth.',
    shipping:
      'Free worldwide shipping on all orders. Returns are accepted within 30 days in original condition and packaging.',
    imgId: 'product-heirloom-set-main-c8d5a1',
    hoverImgId: 'product-heirloom-set-hover-e1f693',
    titleId: 'product-heirloom-set-title',
    descId: 'product-heirloom-set-desc',
  },
]

export const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

export const formatPrice = (price) => `$${price}`

export const getProductById = (id) => products.find((product) => product.id === id)
