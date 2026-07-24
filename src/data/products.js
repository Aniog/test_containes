export const CATEGORIES = ['Earrings', 'Necklaces', 'Huggies']

export const MATERIALS = ['18K Gold Plated', 'Sterling Silver Base', 'Crystal Accent']

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 214,
    badge: 'Bestseller',
    isNew: false,
    shortDescription:
      'A sculptural gold ear cuff traced with a single line of pavé crystal — no piercing required, endlessly wearable.',
    description:
      'The Vivid Aura Jewels cuff wraps the ear in polished 18K gold plating, finished with a hand-set crystal that catches candlelight beautifully. Designed to slip on comfortably and stay put from morning meetings to midnight dinners, it layers effortlessly with huggies or stands alone as a quiet statement.',
    materials:
      'Crafted from a recycled brass base with thick 18K gold plating and a hand-set cubic zirconia crystal. Hypoallergenic, nickel-free and tarnish-resistant. Wipe gently with a soft cloth after wear and store in your Velmora pouch away from moisture, perfume and lotions.',
    shipping:
      'Complimentary worldwide shipping on every order, dispatched within 1–2 business days in signature gift-ready packaging. Not quite right? Enjoy 30-day returns or exchanges, no questions asked.',
    imageAlt: 'Gold ear cuff with crystal accent on warm skin',
    hoverAlt: 'Close-up of gold ear cuff with crystal sparkle',
    cartThumbId: 'cart-thumb-vivid-aura-jewels',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 186,
    badge: 'Limited',
    isNew: true,
    shortDescription:
      'A garland of multicolor floral crystals suspended from a fine gold chain — a garden that never fades.',
    description:
      'Majestic Flora Nectar gathers hand-set floral crystals in honey, blush and champagne tones along a delicate 18K gold plated chain. Each stone is cut to bloom with light. Wear it at the collarbone for a soft editorial moment, or layer it beneath a plain pendant for depth.',
    materials:
      'Recycled brass base with 18K gold plating and hand-set multicolor crystals. Hypoallergenic and nickel-free. Avoid water and fragrance; polish gently with the enclosed cloth and store flat in your Velmora box.',
    shipping:
      'Complimentary worldwide shipping on every order, dispatched within 1–2 business days in signature gift-ready packaging. Not quite right? Enjoy 30-day returns or exchanges, no questions asked.',
    imageAlt: 'Multicolor floral crystal necklace on dark silk',
    hoverAlt: 'Model wearing floral crystal necklace',
    cartThumbId: 'cart-thumb-majestic-flora-nectar',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 342,
    badge: 'Bestseller',
    isNew: false,
    shortDescription:
      'Chunky dome huggies in molten-polished gold — the everyday pair you will never take off.',
    description:
      'Golden Sphere Huggies are our love letter to the everyday ear. A plump dome silhouette, polished to a mirror finish and hinged to hug the lobe. Feather-light on the ear, quietly bold in presence — the pair our community reaches for most, morning after morning.',
    materials:
      'Recycled brass base with a generous layer of 18K gold plating. Hypoallergenic posts, nickel-free. Tarnish-resistant with proper care — keep dry, wipe after wear and store in your Velmora pouch.',
    shipping:
      'Complimentary worldwide shipping on every order, dispatched within 1–2 business days in signature gift-ready packaging. Not quite right? Enjoy 30-day returns or exchanges, no questions asked.',
    imageAlt: 'Chunky gold dome huggie earrings still life',
    hoverAlt: 'Gold dome huggies worn on ear',
    cartThumbId: 'cart-thumb-golden-sphere-huggies',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 129,
    badge: null,
    isNew: true,
    shortDescription:
      'Textured filigree drops that fall like lace in gold — movement, shadow and warmth in every turn.',
    description:
      'Amber Lace Earrings are cut in an open filigree that lets light pass through, casting soft shadows against the skin. The textured 18K gold plated surface glows amber in evening light. Statement-making yet weightless, they move as you do.',
    materials:
      'Recycled brass base with textured 18K gold plating. Hypoallergenic, nickel-free ear wires. Keep away from water and perfume; store hanging or flat in your Velmora box to protect the filigree.',
    shipping:
      'Complimentary worldwide shipping on every order, dispatched within 1–2 business days in signature gift-ready packaging. Not quite right? Enjoy 30-day returns or exchanges, no questions asked.',
    imageAlt: 'Textured gold filigree drop earrings on warm neutral background',
    hoverAlt: 'Gold filigree drop earrings worn by model',
    cartThumbId: 'cart-thumb-amber-lace-earrings',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    rating: 5.0,
    reviews: 97,
    badge: 'Gift-Ready',
    isNew: false,
    shortDescription:
      'A matching earring and necklace duo in our signature gift box — the present that says everything.',
    description:
      'The Royal Heirloom Set pairs our most-loved crystal studs with a coordinating pendant necklace, presented in a ribboned Velmora keepsake box. Designed for gifting — anniversaries, bridesmaids, mothers, or the most important person: you.',
    materials:
      'Recycled brass base with 18K gold plating and hand-set crystals throughout. Hypoallergenic and nickel-free. Presented in a rigid keepsake gift box with care cloth included.',
    shipping:
      'Complimentary worldwide shipping on every order, dispatched within 1–2 business days in signature gift-ready packaging. Not quite right? Enjoy 30-day returns or exchanges, no questions asked.',
    imageAlt: 'Gold earring and necklace gift set in elegant box',
    hoverAlt: 'Heirloom jewelry set styled on silk ribbon',
    cartThumbId: 'cart-thumb-royal-heirloom-set',
  },
]

export const variants = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, count = 4) =>
  products.filter((p) => p.id !== id).slice(0, count)

export const ugcCards = [
  { id: 'reel-morning', caption: 'morning light, golden hour' },
  { id: 'reel-stacked', caption: 'stacked, never rushed' },
  { id: 'reel-neckline', caption: 'worn close to the skin' },
  { id: 'reel-heirloom', caption: 'small treasures, daily rituals' },
  { id: 'reel-evening', caption: 'evening plans, softened gold' },
  { id: 'reel-forever', caption: 'pieces you keep forever' },
]

export const testimonials = [
  {
    quote:
      'The huggies haven\u2019t left my ears since they arrived. They photograph like fine jewelry and feel like nothing at all.',
    name: 'Amelia R.',
    location: 'London',
  },
  {
    quote:
      'I bought the Heirloom Set for my sister\u2019s birthday and immediately ordered a second for myself. The packaging alone is a gift.',
    name: 'Priya S.',
    location: 'Toronto',
  },
  {
    quote:
      'Finally, demi-fine that actually lasts. Six months of daily wear and the gold still looks brand new.',
    name: 'Sofia M.',
    location: 'New York',
  },
]
