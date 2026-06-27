export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 128,
    description: 'A sculptural gold ear cuff finished with a single crystal accent for a polished, no-piercing statement.',
    details: 'Designed for everyday radiance, this lightweight cuff slips comfortably onto the ear and layers beautifully with studs and huggies.',
    care: '18K gold plated brass with crystal accent. Keep dry, avoid perfume and lotions, and store separately in the Velmora pouch.',
    imagePrompt: 'gold crystal ear cuff close up warm studio light',
    secondPrompt: 'gold ear cuff worn on model ear warm editorial jewelry',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 94,
    description: 'A delicate floral crystal necklace with soft multicolor stones, made to glow against silk, linen, or bare skin.',
    details: 'A refined chain and petite floral pendant create a feminine centerpiece that feels sentimental without feeling ornate.',
    care: '18K gold plated stainless steel with crystal details. Wipe after wear and keep away from saltwater and chlorine.',
    imagePrompt: 'multicolor floral crystal gold necklace on neutral silk',
    secondPrompt: 'delicate gold floral crystal necklace worn on neck',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 5,
    reviews: 176,
    description: 'Chunky gold dome huggie earrings with a rounded silhouette that catches the light from every angle.',
    details: 'A modern demi-fine essential with a secure hinge closure and softly rounded profile for day-to-night wear.',
    care: '18K gold plated brass. Remove before showering or exercising and polish gently with a soft dry cloth.',
    imagePrompt: 'chunky gold dome huggie earrings warm beige background',
    secondPrompt: 'gold huggie earrings worn on ear close up editorial',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviews: 81,
    description: 'Textured filigree drop earrings with a luminous amber-gold finish and heirloom-inspired movement.',
    details: 'Intricate lace-like metalwork adds depth while the slim drop silhouette keeps the pair lightweight and graceful.',
    care: 'Gold vermeil over sterling silver. Store in a dry pouch and clean gently with a non-abrasive polishing cloth.',
    imagePrompt: 'textured gold filigree drop earrings warm dark background',
    secondPrompt: 'gold filigree drop earrings worn by woman editorial portrait',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 4.9,
    reviews: 67,
    description: 'A gift-boxed earring and necklace set curated for milestone moments, bridal weekends, and considered self-gifting.',
    details: 'Presented in a signature keepsake box with two complementary gold pieces chosen for effortless layering.',
    care: '18K gold plated mixed-metal set. Keep pieces separate between wears and avoid direct contact with cosmetics.',
    imagePrompt: 'luxury gift boxed gold earring necklace set warm editorial',
    secondPrompt: 'gold jewelry gift set necklace earrings close up velvet box',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Light-catching silhouettes for everyday polish.',
    imagePrompt: 'gold earrings on warm neutral silk editorial',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layered chains and quiet statement pendants.',
    imagePrompt: 'delicate gold necklace on model neck warm light',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Rounded hoops made for effortless stacking.',
    imagePrompt: 'gold huggie hoop earrings close up on ear',
  },
]

export const ugcItems = [
  { id: 'mirror-gold', caption: 'A quiet gleam for morning light', prompt: 'woman wearing gold necklace mirror selfie warm luxury' },
  { id: 'stacked-ear', caption: 'Stacked huggies, softly undone', prompt: 'stacked gold huggie earrings on ear closeup' },
  { id: 'silk-evening', caption: 'A floral pendant after dusk', prompt: 'gold floral crystal necklace worn with silk dress' },
  { id: 'gift-box', caption: 'Unboxed for the moments that matter', prompt: 'hands opening luxury gold jewelry gift box' },
  { id: 'cafe-cuff', caption: 'Ear cuff, espresso, afternoon plans', prompt: 'gold crystal ear cuff lifestyle cafe editorial' },
]

export const testimonials = [
  {
    name: 'Maya R.',
    quote: 'The Golden Sphere Huggies feel substantial without being heavy. They look far more expensive than they are.',
  },
  {
    name: 'Elena V.',
    quote: 'Beautiful packaging and such a warm gold tone. I bought one as a gift and came back for myself.',
  },
  {
    name: 'Priya S.',
    quote: 'I wear my necklace three times a week. It layers perfectly and still looks new.',
  },
]

export const formatPrice = (price) => `$${price}`
