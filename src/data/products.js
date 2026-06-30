import { createEditorialArtwork, createJewelryArtwork } from './productArtwork.js'

export const products = [
  {
    id: 'vivid-aura-jewels',
    artwork: createJewelryArtwork('cuff', 'Vivid Aura Jewels', { hideCaption: true }),
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      'A sculptural gold ear cuff finished with a precise crystal accent for a polished, no-piercing statement.',
    details:
      'Designed to hug the curve of the ear with a light, secure feel. Wear solo for a minimal flash or stack with huggies for evening dimension.',
    care:
      '18K gold plated brass with crystal detail. Hypoallergenic posts where applicable. Keep dry, avoid perfume, and store in the included pouch.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tags: ['Bestseller', 'Gift Ready'],
    imageId: 'product-vivid-aura-primary-a91c2f',
    hoverImageId: 'product-vivid-aura-hover-b48e10',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    artwork: createJewelryArtwork('necklace', 'Majestic Flora Nectar', { hideCaption: true }),
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 96,
    description:
      'A delicate floral crystal necklace with subtle color and an adjustable chain for everyday radiance.',
    details:
      'Inspired by heirloom garden pieces, this pendant brings a quiet shimmer to silk, linen, and bare skin.',
    care:
      '18K gold plated brass with glass crystal. Wipe gently after wear and store separately to protect the stones.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tags: ['New Classic'],
    imageId: 'product-majestic-flora-primary-c20f7a',
    hoverImageId: 'product-majestic-flora-hover-d18a31',
    titleId: 'product-majestic-flora-title',
    descId: 'product-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    artwork: createJewelryArtwork('huggies', 'Golden Sphere Huggies', { hideCaption: true }),
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 5,
    reviews: 174,
    description:
      'Chunky gold dome huggies with a smooth rounded silhouette and comfortable day-to-night closure.',
    details:
      'A small but confident hoop with a softened dome profile, made to frame the face with warm shine.',
    care:
      '18K gold plated brass with hypoallergenic stainless steel posts. Keep away from water and lotions.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tags: ['Bestseller'],
    imageId: 'product-golden-sphere-primary-e80d2b',
    hoverImageId: 'product-golden-sphere-hover-f74c19',
    titleId: 'product-golden-sphere-title',
    descId: 'product-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    artwork: createJewelryArtwork('filigree', 'Amber Lace Earrings', { hideCaption: true }),
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Filigree',
    price: 54,
    rating: 4.7,
    reviews: 81,
    description:
      'Textured gold filigree drop earrings with airy movement and an amber-toned glow.',
    details:
      'The lacework catches light without feeling ornate, creating a refined drop earring for dinner plans and celebrations.',
    care:
      'Gold plated filigree with hypoallergenic posts. Clean with a dry soft cloth and store flat.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tags: ['Occasion'],
    imageId: 'product-amber-lace-primary-g63b12',
    hoverImageId: 'product-amber-lace-hover-h03e45',
    titleId: 'product-amber-lace-title',
    descId: 'product-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    artwork: createJewelryArtwork('set', 'Royal Heirloom Set', { hideCaption: true }),
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 112,
    description:
      'A gift-boxed earring and necklace set made for birthdays, bridesmaids, and meaningful self-gifting.',
    details:
      'Two luminous signatures in one keepsake box: balanced, easy to wear, and designed to feel personal.',
    care:
      '18K gold plated brass with crystal details. Store in the presentation box between wears.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days in original condition.',
    tags: ['Gift Pick'],
    imageId: 'product-royal-heirloom-primary-i92d64',
    hoverImageId: 'product-royal-heirloom-hover-j39b87',
    titleId: 'product-royal-heirloom-title',
    descId: 'product-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    subtitle: 'Sculptural cuffs, drops, and polished everyday shine.',
    artwork: createJewelryArtwork('filigree', 'Earrings', { hideCaption: true }),
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    subtitle: 'Delicate pendants and layered light for the neckline.',
    artwork: createJewelryArtwork('necklace', 'Necklaces', { hideCaption: true }),
  },
  {
    id: 'huggies',
    label: 'Huggies',
    subtitle: 'Close-fitting gold hoops with a warm modern profile.',
    artwork: createJewelryArtwork('huggies', 'Huggies', { hideCaption: true }),
  },
]

export const ugcCards = [
  {
    id: 'morning-gold',
    caption: 'Morning gold, barely there glow.',
    artwork: createEditorialArtwork('ear', 'Morning gold jewelry on ear'),
  },
  {
    id: 'date-night-stack',
    caption: 'The little stack that changes everything.',
    artwork: createEditorialArtwork('stack', 'Stacked gold earrings'),
  },
  {
    id: 'soft-neckline',
    caption: 'A quiet glimmer at the collarbone.',
    artwork: createEditorialArtwork('neckline', 'Gold necklace at neckline'),
  },
  {
    id: 'gift-unboxing',
    caption: 'Wrapped for the moment she opens it.',
    artwork: createEditorialArtwork('box', 'Gift boxed jewelry set'),
  },
  {
    id: 'weekend-huggies',
    caption: 'Huggies for errands, dinner, everything.',
    artwork: createEditorialArtwork('ear', 'Gold huggie earrings on ear'),
  },
]

export const testimonials = [
  {
    quote: 'The packaging felt like a boutique gift, and the huggies look far more expensive than they are.',
    author: 'Maya R.',
  },
  {
    quote: 'I wear my necklace almost daily. It layers beautifully and still feels delicate.',
    author: 'Claire T.',
  },
  {
    quote: 'Warm gold, comfortable posts, and just enough sparkle for work or dinner.',
    author: 'Arielle M.',
  },
]
