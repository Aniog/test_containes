export const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets']

const cdnBase =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_{width}/unsplashcom'

function cdnUrl(photoId, width = 1200) {
  return cdnBase.replace('{width}', width) + '/' + photoId
}

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description:
      'A sculptural gold ear cuff illuminated by a single crystal accent. Designed to sit comfortably along the ear without piercing, it catches light with every turn.',
    shortDescription:
      'Gold ear cuff with crystal accent — an effortless statement for stacked styling.',
    materials:
      '18k gold-plated brass, handset cubic zirconia. Nickel-free and hypoallergenic.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and water to preserve the gold finish.',
    variants: ['Gold Tone', 'Silver Tone'],
    images: 3,
    bestseller: true,
    image: cdnUrl('photo-1616565465442-6b234004e825'),
    hoverImage: cdnUrl('photo-1590166223826-12dee1677420'),
    galleryImages: [
      cdnUrl('photo-1616565465442-6b234004e825'),
      cdnUrl('photo-1590166223826-12dee1677420'),
      cdnUrl('photo-1582756825287-a250e1e432d9'),
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description:
      'A delicate pendant necklace featuring a multicolor floral crystal arrangement. The warm gold setting highlights every petal, creating a heirloom feel at an attainable price.',
    shortDescription:
      'Multicolor floral crystal necklace with an heirloom-inspired silhouette.',
    materials:
      '18k gold-plated chain, hand-set enamel and cubic zirconia petals. Adjustable 16–18 inch length.',
    care: 'Wipe gently with a soft cloth after wear. Store flat to prevent chain tangling.',
    variants: ['Gold Tone', 'Silver Tone'],
    images: 3,
    bestseller: true,
    image: cdnUrl('photo-1608485031508-8846ab1ebe4e'),
    hoverImage: cdnUrl('photo-1608485076760-dd4c0de286d3'),
    galleryImages: [
      cdnUrl('photo-1608485031508-8846ab1ebe4e'),
      cdnUrl('photo-1608485076760-dd4c0de286d3'),
      cdnUrl('photo-1632525230528-ec17c49bc168'),
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description:
      'Chunky gold dome huggies with a polished, mirror finish. Substantial enough to wear alone, refined enough to stack.',
    shortDescription:
      'Chunky gold dome huggie earrings with a polished mirror finish.',
    materials:
      '18k gold-plated brass with surgical steel posts. Lightweight and hypoallergenic.',
    care: 'Remove before showering or swimming. Polish with a microfiber cloth to maintain shine.',
    variants: ['Gold Tone', 'Silver Tone'],
    images: 3,
    bestseller: true,
    image: cdnUrl('photo-1661436074181-58b84d241131'),
    hoverImage: cdnUrl('photo-1671513511423-4ce382bc94d6'),
    galleryImages: [
      cdnUrl('photo-1661436074181-58b84d241131'),
      cdnUrl('photo-1671513511423-4ce382bc94d6'),
      cdnUrl('photo-1680886269108-d09c5f4d07ef'),
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.9,
    reviewCount: 72,
    description:
      'Textured gold filigree drop earrings inspired by vintage lace. Each curve is cast and finished by hand for an artisanal touch.',
    shortDescription:
      'Textured gold filigree drop earrings with vintage-inspired detail.',
    materials:
      '18k gold-plated brass with a hand-antiqued finish. Secure lever-back closure.',
    care: 'Keep away from moisture and chemicals. Store in the provided Velmora pouch.',
    variants: ['Gold Tone'],
    images: 3,
    bestseller: true,
    image: cdnUrl('photo-1595341589548-0c32d1d4a816'),
    hoverImage: cdnUrl('photo-1671513580040-a3e26d360669'),
    galleryImages: [
      cdnUrl('photo-1595341589548-0c32d1d4a816'),
      cdnUrl('photo-1671513580040-a3e26d360669'),
      cdnUrl('photo-1633555234454-71f397e08584'),
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviewCount: 47,
    description:
      'A curated gift set pairing our signature huggies with a matching pendant necklace, presented in a Velmora gift box ready for giving.',
    shortDescription:
      'Gift-boxed earring and necklace set — the perfect ready-to-give treasure.',
    materials:
      '18k gold-plated brass, cubic zirconia accents. Includes gift box, care card, and polishing cloth.',
    care: 'Store in the included gift box. Avoid exposure to water and beauty products.',
    variants: ['Gold Tone', 'Silver Tone'],
    images: 3,
    bestseller: true,
    image: cdnUrl('photo-1673162249860-16a150a0fb22'),
    hoverImage: cdnUrl('photo-1652650025353-35f8df6be1b1'),
    galleryImages: [
      cdnUrl('photo-1673162249860-16a150a0fb22'),
      cdnUrl('photo-1652650025353-35f8df6be1b1'),
      cdnUrl('photo-1626784215013-13322cb0e471'),
    ],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getRelatedProducts(currentId, limit = 4) {
  return products.filter((p) => p.id !== currentId).slice(0, limit)
}

export function formatPrice(price) {
  return `$${price}`
}
