export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 126,
    description: 'A sculptural gold ear cuff finished with a tiny crystal accent for everyday luminosity.',
    detail: 'Designed for the soft gleam of daily wear, this no-piercing ear cuff adds a refined crystal highlight to layered ear stacks.',
    care: '18K gold plated over brass with a crystal accent. Keep dry, avoid perfume, and store in the included pouch.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition.',
    imageMood: 'gold ear cuff with crystal accent worn on ear warm editorial close up',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 98,
    description: 'A delicate floral crystal necklace with soft color and an heirloom-inspired gold finish.',
    detail: 'A luminous pendant necklace that brings subtle color to silk shirts, slip dresses, and weekday rituals.',
    care: '18K gold plated chain with multicolor crystal setting. Clean gently with a soft cloth after wearing.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition.',
    imageMood: 'multicolor floral crystal gold necklace on neckline warm neutral background',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 142,
    description: 'Chunky gold dome huggies with a polished rounded profile and an effortless close fit.',
    detail: 'The pair that makes a white tee feel finished. Lightweight, rounded, and made to sit close to the lobe.',
    care: '18K gold plated over stainless steel. Hypoallergenic posts. Store separately to preserve the polish.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition.',
    imageMood: 'chunky gold dome huggie earrings worn on ear warm studio light',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 83,
    description: 'Textured gold filigree drop earrings that catch warm light with lace-like dimension.',
    detail: 'A romantic drop earring with refined movement, made for candlelit dinners and elevated gifting.',
    care: '18K gold plated filigree with secure backs. Avoid water and polish with a lint-free cloth.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition.',
    imageMood: 'textured gold filigree drop earrings editorial warm shadows',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5.0,
    reviews: 74,
    description: 'A gift-boxed earring and necklace set with a polished gold finish and timeless proportion.',
    detail: 'Ready to gift in a keepsake box, this set pairs a graceful necklace with matching earrings for instant polish.',
    care: '18K gold plated demi-fine set. Store in the gift box between wears and avoid cosmetics before contact.',
    shipping: 'Free worldwide shipping on every order. Returns are accepted within 30 days in unworn condition.',
    imageMood: 'gift boxed gold earring and necklace jewelry set elegant neutral background',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Light-catching drops, cuffs, and everyday signatures.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and heirloom-inspired pendants.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Close-fit gold silhouettes for daily wear.',
  },
]

export const ugcMoments = [
  {
    id: 'morning-stack',
    caption: 'The morning ear stack',
    note: 'Golden Sphere Huggies in soft daylight',
  },
  {
    id: 'date-night',
    caption: 'Dinner, silk, amber glow',
    note: 'Amber Lace Earrings with swept-back hair',
  },
  {
    id: 'gift-unboxing',
    caption: 'Wrapped to be remembered',
    note: 'Royal Heirloom Set unboxed at home',
  },
  {
    id: 'neckline-glow',
    caption: 'A little floral light',
    note: 'Majestic Flora Nectar layered at the collarbone',
  },
  {
    id: 'minimal-cuff',
    caption: 'No piercing, all polish',
    note: 'Vivid Aura Jewels worn solo',
  },
]

const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200"><rect width="900" height="1200" fill="#efe4d2"/><circle cx="450" cy="520" r="170" fill="none" stroke="#b8894a" stroke-width="18" opacity="0.42"/><circle cx="520" cy="590" r="110" fill="none" stroke="#8f6531" stroke-width="12" opacity="0.32"/><text x="450" y="760" text-anchor="middle" font-family="Georgia, serif" font-size="54" letter-spacing="14" fill="#2b211d" opacity="0.75">VELMORA</text></svg>`

export const placeholderSrc = `data:image/svg+xml,${encodeURIComponent(fallbackSvg)}`
