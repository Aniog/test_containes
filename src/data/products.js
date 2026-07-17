export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff with a luminous crystal accent. Designed to catch the light from every angle, this piece adds an effortless edge to any look.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop',
    details: {
      material: '18K Gold Plated Brass',
      dimensions: '1.5cm diameter',
      closure: 'Hinge clip-on',
      care: 'Avoid contact with water, perfumes, and lotions. Store in a dry place.',
    },
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A stunning multicolor floral crystal necklace that captures the beauty of a blooming garden. Each petal is meticulously set with hand-selected crystals.',
    category: 'necklaces',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop',
    details: {
      material: '18K Gold Plated Brass, Crystal',
      dimensions: '45cm chain length, 3cm pendant',
      closure: 'Spring ring clasp',
      care: 'Gently wipe with a soft cloth. Store separately to avoid scratches.',
    },
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: 'Chunky gold dome huggie earrings with a polished finish. A modern essential that transitions seamlessly from day to night.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&auto=format&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&auto=format&fit=crop',
    details: {
      material: '18K Gold Plated Brass',
      dimensions: '1.2cm diameter',
      closure: 'Hinge click',
      care: 'Remove before swimming or showering. Polish with a jewelry cloth.',
    },
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Intricately textured gold filigree drop earrings with a warm amber glow. Artisanal craftsmanship meets timeless design.',
    category: 'earrings',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626784215013-13322cb0e471?w=800&auto=format&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1626784215013-13322cb0e471?w=800&auto=format&fit=crop',
    details: {
      material: '18K Gold Plated Brass, Resin',
      dimensions: '4cm drop',
      closure: 'French wire hook',
      care: 'Handle with care. Clean with a dry, soft cloth. Avoid bending.',
    },
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviewCount: 42,
    description: 'A gift-boxed earring and necklace set featuring intricate filigree and crystal details. Heirloom quality, presented in a velvet-lined keepsake box.',
    category: 'sets',
    material: 'gold',
    images: [
      'https://images.unsplash.com/photo-1722410180687-b05b50922362?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=800&auto=format&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=800&auto=format&fit=crop',
    details: {
      material: '18K Gold Plated Brass, Crystal',
      dimensions: 'Necklace: 45cm, Earrings: 2.5cm',
      closure: 'Spring ring clasp, French wire hooks',
      care: 'Store in the provided keepsake box. Clean with a soft, dry cloth.',
    },
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 3 },
  { id: 'necklaces', name: 'Necklaces', count: 1 },
  { id: 'huggies', name: 'Huggies', count: 1 },
  { id: 'sets', name: 'Sets', count: 1 },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality of the gold plating is astonishing. I have worn my Vivid Aura cuff daily for months and it still looks brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica K.',
    text: 'I received the Royal Heirloom Set as a gift and it came in the most beautiful packaging. Felt like unwrapping something truly special.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda R.',
    text: 'Finally, jewellery that doesn\'t turn my skin green! The Golden Sphere Huggies are my everyday go-to. Absolutely love them.',
    rating: 5,
  },
]

export const ugcReels = [
  { id: 1, handle: '@stylebyemma', text: 'obsessed with my new Velmora stack' },
  { id: 2, handle: '@jewelrydiaries', text: 'the perfect everyday huggie' },
  { id: 3, handle: '@golden.glow', text: 'gift wrapping these for my bestie' },
  { id: 4, handle: '@minimalistjewels', text: 'a touch of gold for any outfit' },
  { id: 5, handle: '@luminouslayers', text: 'Velmora never misses' },
  { id: 6, handle: '@dailydoseofgold', text: 'my new favorite ear cuff' },
]