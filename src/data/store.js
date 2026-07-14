export const trustPoints = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Statement studs, cuffs, and sculptural silhouettes for everyday polish.',
    imageId: 'category-earrings-velmora-a12f3',
    titleId: 'category-earrings-title',
    descId: 'category-earrings-desc',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layering chains and crystal accents designed to catch warm light.',
    imageId: 'category-necklaces-velmora-b49k1',
    titleId: 'category-necklaces-title',
    descId: 'category-necklaces-desc',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Rounded gold essentials with a refined demi-fine finish.',
    imageId: 'category-huggies-velmora-z91r4',
    titleId: 'category-huggies-title',
    descId: 'category-huggies-desc',
  },
]

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    shortDescription: 'A sculpted gold ear cuff finished with a clear crystal glint for effortless evening shine.',
    description: 'Vivid Aura Jewels is designed for the woman who wants a polished look without overthinking it. The curved ear cuff silhouette frames the ear with a soft glow, while a crystal accent adds just enough sparkle for dinner, events, and elevated everyday dressing.',
    materialsCare: '18K gold-plated brass with crystal accent. Store in the Velmora pouch and avoid direct contact with perfumes, lotions, and water to preserve its finish.',
    shippingReturns: 'Ships in 1–2 business days. Free worldwide shipping on qualifying orders and easy 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    imgId: 'product-vivid-aura-main-q82nd',
    hoverImgId: 'product-vivid-aura-hover-t57pq',
    titleId: 'product-vivid-aura-title',
    descId: 'product-vivid-aura-desc',
    gallery: [
      { id: 'vivid-aura-gallery-1', type: 'img', queryIds: ['product-vivid-aura-desc', 'product-vivid-aura-title'], ratio: '4x3', width: '900' },
      { id: 'vivid-aura-gallery-2', type: 'img', queryIds: ['product-vivid-aura-title', 'product-vivid-aura-desc'], ratio: '4x3', width: '900' },
      { id: 'vivid-aura-gallery-3', type: 'img', queryIds: ['product-vivid-aura-desc', 'product-vivid-aura-title'], ratio: '3x4', width: '900' },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.9,
    reviews: 184,
    badge: 'New Arrival',
    shortDescription: 'A delicate multicolor floral crystal necklace with luminous depth and gifting appeal.',
    description: 'Majestic Flora Nectar layers soft color and polished gold in a necklace that feels romantic but modern. It is the kind of piece that lifts a simple knit, silk slip, or crisp white shirt with understated elegance.',
    materialsCare: '18K gold-plated brass with multicolor crystal stones. Wipe gently after wear and store flat to prevent tangling or abrasion.',
    shippingReturns: 'Ships gift-ready in our signature box. Free delivery on select thresholds and 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    imgId: 'product-flora-main-k31sc',
    hoverImgId: 'product-flora-hover-p11fd',
    titleId: 'product-flora-title',
    descId: 'product-flora-desc',
    gallery: [
      { id: 'flora-gallery-1', type: 'img', queryIds: ['product-flora-desc', 'product-flora-title'], ratio: '4x3', width: '900' },
      { id: 'flora-gallery-2', type: 'img', queryIds: ['product-flora-title', 'product-flora-desc'], ratio: '4x3', width: '900' },
      { id: 'flora-gallery-3', type: 'img', queryIds: ['product-flora-desc', 'product-flora-title'], ratio: '3x4', width: '900' },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.7,
    reviews: 97,
    badge: 'Everyday Essential',
    shortDescription: 'Chunky dome huggies with a clean rounded profile and rich golden shine.',
    description: 'Golden Sphere Huggies brings a bold but minimal shape into your everyday rotation. The compact dome catches light beautifully and looks equally at home with tailoring, denim, and occasion dressing.',
    materialsCare: '18K gold-plated brass. Avoid sleeping, showering, or exercising in your jewelry to maintain the finish.',
    shippingReturns: 'Packed in a keepsake pouch with tracked shipping and an easy 30-day return window.',
    variants: ['Gold Tone', 'Silver Tone'],
    imgId: 'product-huggies-main-l44nm',
    hoverImgId: 'product-huggies-hover-j92qp',
    titleId: 'product-huggies-title',
    descId: 'product-huggies-desc',
    gallery: [
      { id: 'huggies-gallery-1', type: 'img', queryIds: ['product-huggies-desc', 'product-huggies-title'], ratio: '4x3', width: '900' },
      { id: 'huggies-gallery-2', type: 'img', queryIds: ['product-huggies-title', 'product-huggies-desc'], ratio: '4x3', width: '900' },
      { id: 'huggies-gallery-3', type: 'img', queryIds: ['product-huggies-desc', 'product-huggies-title'], ratio: '3x4', width: '900' },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.8,
    reviews: 143,
    badge: 'Gift Favorite',
    shortDescription: 'Textured filigree drop earrings with an heirloom-inspired lacework finish.',
    description: 'Amber Lace Earrings is a refined drop silhouette with textured detailing that feels delicate and expressive. It offers the look of a special vintage find in a versatile, lightweight form.',
    materialsCare: 'Gold vermeil over sterling silver. Polish with a soft cloth and store away from humidity and direct sunlight.',
    shippingReturns: 'Gift-ready packaging, tracked dispatch, and 30-day returns for peace of mind.',
    variants: ['Gold Tone', 'Silver Tone'],
    imgId: 'product-amber-main-e10rt',
    hoverImgId: 'product-amber-hover-r93sl',
    titleId: 'product-amber-title',
    descId: 'product-amber-desc',
    gallery: [
      { id: 'amber-gallery-1', type: 'img', queryIds: ['product-amber-desc', 'product-amber-title'], ratio: '4x3', width: '900' },
      { id: 'amber-gallery-2', type: 'img', queryIds: ['product-amber-title', 'product-amber-desc'], ratio: '4x3', width: '900' },
      { id: 'amber-gallery-3', type: 'img', queryIds: ['product-amber-desc', 'product-amber-title'], ratio: '3x4', width: '900' },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'necklaces',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 76,
    badge: 'Limited Gift Set',
    shortDescription: 'A gift-boxed earring and necklace pairing designed for effortless gifting.',
    description: 'Royal Heirloom Set pairs a polished necklace with matching earrings in one beautifully boxed set. It is designed for gifting moments that call for something special while still feeling wearable and modern.',
    materialsCare: '18K gold-plated brass. Keep pieces separate in the box insert and wipe with a dry cloth after wear.',
    shippingReturns: 'Includes signature gift box and note card. Ships quickly with 30-day returns.',
    variants: ['Gold Tone', 'Silver Tone'],
    imgId: 'product-heirloom-main-y73ft',
    hoverImgId: 'product-heirloom-hover-g28ab',
    titleId: 'product-heirloom-title',
    descId: 'product-heirloom-desc',
    gallery: [
      { id: 'heirloom-gallery-1', type: 'img', queryIds: ['product-heirloom-desc', 'product-heirloom-title'], ratio: '4x3', width: '900' },
      { id: 'heirloom-gallery-2', type: 'img', queryIds: ['product-heirloom-title', 'product-heirloom-desc'], ratio: '4x3', width: '900' },
      { id: 'heirloom-gallery-3', type: 'img', queryIds: ['product-heirloom-desc', 'product-heirloom-title'], ratio: '3x4', width: '900' },
    ],
  },
]

export const ugcMoments = [
  {
    id: 'ugc-1',
    caption: 'Layered for late dinners and city lights.',
    titleId: 'ugc-card-1-title',
    descId: 'ugc-card-1-desc',
    imageId: 'ugc-card-1-image',
  },
  {
    id: 'ugc-2',
    caption: 'Golden details, quietly noticed.',
    titleId: 'ugc-card-2-title',
    descId: 'ugc-card-2-desc',
    imageId: 'ugc-card-2-image',
  },
  {
    id: 'ugc-3',
    caption: 'The everyday huggie, elevated.',
    titleId: 'ugc-card-3-title',
    descId: 'ugc-card-3-desc',
    imageId: 'ugc-card-3-image',
  },
  {
    id: 'ugc-4',
    caption: 'Gifted with intention.',
    titleId: 'ugc-card-4-title',
    descId: 'ugc-card-4-desc',
    imageId: 'ugc-card-4-image',
  },
]

export const testimonials = [
  {
    id: 'review-1',
    quote: 'The finish feels much more luxurious than the price suggests. I wear my huggies almost every day.',
    name: 'Ava M.',
  },
  {
    id: 'review-2',
    quote: 'Beautiful packaging, fast shipping, and the necklace looked stunning in person. It felt gift-ready straight away.',
    name: 'Sofia L.',
  },
  {
    id: 'review-3',
    quote: 'Exactly the kind of understated gold jewelry I was looking for. Elegant, polished, and easy to style.',
    name: 'Chloe R.',
  },
]

export const journalEntries = [
  {
    id: 'journal-1',
    title: 'How to Layer Gold Jewelry for Day and Evening',
    excerpt: 'A modern guide to balancing texture, proportion, and shine with a quiet-luxury sensibility.',
  },
  {
    id: 'journal-2',
    title: 'Gift Notes: Pieces That Feel Special Without Feeling Overdone',
    excerpt: 'Thoughtful jewelry pairings for birthdays, bridal gifting, and self-celebration moments.',
  },
]

export const filters = {
  categories: ['Earrings', 'Necklaces', 'Huggies'],
  materials: ['18K Gold Plated', 'Gold Vermeil'],
  prices: [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-80', label: '$50–$80', min: 50, max: 80 },
    { id: '80-120', label: '$80–$120', min: 80, max: 120 },
  ],
}

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating-desc', label: 'Top Rated' },
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const getRelatedProducts = (product) =>
  products.filter((item) => item.id !== product.id).slice(0, 4)
