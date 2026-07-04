export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 126,
    description:
      'Warm gold jewelry with a single crystal accent, photographed on neutral silk for everyday radiance.',
    details:
      'Designed to hug the ear without piercing, this cuff brings a refined flash of crystal to soft knits, slip dresses, and every small ritual in between.',
    care: '18K gold plated brass with crystal. Keep dry, store separately, and polish gently with a soft cloth.',
    secondQuery: 'editorial gold ear cuff crystal detail on neutral silk',
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 94,
    description:
      'A delicate gold crystal necklace with soft floral sparkle, made for gifting and layering.',
    details:
      'A soft statement necklace made for gifting, layering, and catching candlelight at dinner.',
    care: '18K gold plated chain with floral crystal charm. Avoid perfume contact and store in the pouch provided.',
    secondQuery: 'floral crystal necklace on model warm light',
    badge: 'Gift Pick',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 211,
    description:
      'Chunky polished gold huggie earrings with a refined dome silhouette for daily wear.',
    details:
      'The pair you reach for daily: rounded, luminous, and comfortable from coffee to cocktails.',
    care: '18K gold plated stainless steel. Hypoallergenic posts. Wipe after wear to preserve the finish.',
    secondQuery: 'chunky gold huggie earrings worn on ear close up',
    badge: 'Most Loved',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 78,
    description:
      'Textured gold drop earrings with lace-like filigree movement and a warm amber glow.',
    details:
      'Lightweight drops with intricate texture for weddings, evenings, and elevated everyday wear.',
    care: '18K gold plated alloy. Remove before swimming, showering, or sleeping.',
    secondQuery: 'textured gold filigree drop earrings editorial still life',
    badge: 'New',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 52,
    description:
      'A gift-boxed gold earring and necklace set with luminous crystal details and keepsake appeal.',
    details:
      'A ready-to-give pairing for birthdays, bridesmaids, anniversaries, or a personal milestone.',
    care: '18K gold plated set with crystal accents. Store pieces separately in the keepsake box.',
    secondQuery: 'luxury jewelry gift box gold necklace earrings warm neutral',
    badge: 'Ready to Gift',
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    description: 'Light-catching pieces for every ritual.',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    description: 'Layered chains and delicate focal points.',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    description: 'Polished silhouettes made for daily wear.',
  },
]

export const formatPrice = (value) => `$${value}`
