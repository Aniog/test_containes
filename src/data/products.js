export const products = [
  { id: 'vivid-aura-jewels', slug: 'vivid-aura-jewels', name: 'Vivid Aura Jewels', price: 42, category: 'Earrings', material: '18K Gold Plated', description: 'A sculptural gold ear cuff finished with a single crystal accent for a luminous everyday stack.', care: 'Keep dry, store separately, and polish gently with a soft jewelry cloth after wear.', rating: 4.9, reviews: 128, variants: ['Gold', 'Silver'], images: ['Crystal gold ear cuff on model ear', 'Gold ear cuff crystal detail on warm stone'] },
  { id: 'majestic-flora-nectar', slug: 'majestic-flora-nectar', name: 'Majestic Flora Nectar', price: 68, category: 'Necklaces', material: '18K Gold Plated', description: 'A delicate floral crystal necklace with soft color and refined sparkle for gifting or ceremony.', care: 'Avoid fragrance and lotion, then store in the included pouch to protect the crystal setting.', rating: 4.8, reviews: 96, variants: ['Gold', 'Silver'], images: ['Multicolor floral crystal gold necklace on neck', 'Floral crystal necklace on silk editorial flatlay'] },
  { id: 'golden-sphere-huggies', slug: 'golden-sphere-huggies', name: 'Golden Sphere Huggies', price: 38, category: 'Huggies', material: '18K Gold Plated', description: 'Chunky dome huggies with a polished golden curve that catches light from every angle.', care: 'Remove before swimming or showering and wipe clean with a dry microfiber cloth.', rating: 4.9, reviews: 183, variants: ['Gold', 'Silver'], images: ['Chunky gold dome huggie earrings worn on ear', 'Polished gold dome huggies on dark velvet'] },
  { id: 'amber-lace-earrings', slug: 'amber-lace-earrings', name: 'Amber Lace Earrings', price: 54, category: 'Earrings', material: '18K Gold Plated', description: 'Textured filigree drop earrings with warm amber dimension and heirloom-inspired detail.', care: 'Store flat, keep away from humidity, and clean textured areas with a soft dry brush.', rating: 4.7, reviews: 74, variants: ['Gold', 'Silver'], images: ['Textured gold filigree drop earrings on model', 'Amber gold lace earrings close up on linen'] },
  { id: 'royal-heirloom-set', slug: 'royal-heirloom-set', name: 'Royal Heirloom Set', price: 95, category: 'Sets', material: '18K Gold Plated', description: 'A gift-boxed earring and necklace pairing designed for birthdays, bridesmaids, and keepsake moments.', care: 'Return each piece to the gift box between wears to preserve its polished finish.', rating: 5.0, reviews: 61, variants: ['Gold', 'Silver'], images: ['Gift boxed gold earring and necklace set', 'Elegant gold jewelry set on neutral silk'] },
]

export const categories = [
  { id: 'earrings', label: 'Earrings', description: 'Light-catching drops, cuffs, and everyday accents.' },
  { id: 'necklaces', label: 'Necklaces', description: 'Layered chains and crystal pendants made personal.' },
  { id: 'huggies', label: 'Huggies', description: 'Sculptural hoops for an effortless ear stack.' },
]

export const ugcStories = [
  { id: 'morning-glow', caption: 'Morning gold, softly layered' },
  { id: 'stacked-ear', caption: 'The everyday ear stack' },
  { id: 'gift-ready', caption: 'Wrapped for the moment' },
  { id: 'dinner-light', caption: 'A glint after dark' },
  { id: 'quiet-ritual', caption: 'Your five-minute ritual' },
]

export const testimonials = [
  { id: 'claire', name: 'Claire M.', text: 'The huggies look expensive without feeling precious. I wear them almost every day.' },
  { id: 'nina', name: 'Nina R.', text: 'Beautiful packaging, warm gold tone, and the necklace made the perfect gift.' },
  { id: 'amaya', name: 'Amaya L.', text: 'Subtle sparkle, no irritation, and the pieces layer so naturally together.' },
]

export const formatPrice = (price) => `$${price}`
export const getProductBySlug = (slug) => products.find((product) => product.slug === slug)
