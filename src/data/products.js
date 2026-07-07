export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    rating: 4.8,
    reviews: 124,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural ear cuff that hugs the curve of your ear, accented with a single luminous crystal. Designed for effortless elegance — no piercing required.',
    materials: '18K gold plated over brass. Crystal accent. Hypoallergenic. Nickel-free.',
    images: {
      primary: 'https://images.unsplash.com/photo-1630018825809-35217a65354b?w=600&h=750&fit=crop&q=80',
      secondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop&q=80',
    },
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    bestseller: true,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    rating: 4.9,
    reviews: 89,
    category: 'necklaces',
    material: 'gold',
    description: 'A delicate pendant featuring hand-set multicolor crystals arranged in a blooming floral motif. Suspended from a fine chain that catches the light with every movement.',
    materials: '18K gold plated chain. Swarovski crystal elements. Adjustable 16-18" length.',
    images: {
      primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop&q=80',
      secondary: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop&q=80',
    },
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    bestseller: true,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 203,
    category: 'huggies',
    material: 'gold',
    description: 'Bold yet refined dome-shaped huggies that sit close to the earlobe. The polished gold surface reflects light beautifully — a modern classic for everyday luxury.',
    materials: '18K gold plated over surgical steel. Secure hinged closure. 12mm diameter.',
    images: {
      primary: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=750&fit=crop&q=80',
      secondary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop&q=80',
    },
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    bestseller: true,
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    rating: 4.6,
    reviews: 67,
    category: 'earrings',
    material: 'gold',
    description: 'Intricate filigree work creates a lace-like pattern in warm gold. These drop earrings move gracefully, catching light from every angle. Perfect for special occasions.',
    materials: '18K gold plated over brass. Lightweight filigree construction. French wire closure.',
    images: {
      primary: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f62d?w=600&h=750&fit=crop&q=80',
      secondary: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop&q=80',
    },
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    bestseller: true,
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 45,
    category: 'necklaces',
    material: 'gold',
    description: 'A curated pairing of matching earrings and necklace, presented in our signature velvet gift box. The ultimate expression of thoughtful luxury — for her or for yourself.',
    materials: '18K gold plated over brass. Hypoallergenic. Includes luxury velvet gift box.',
    images: {
      primary: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop&q=80',
      secondary: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=750&fit=crop&q=80',
    },
    variants: [
      { name: 'Gold', value: 'gold' },
      { name: 'Silver', value: 'silver' },
    ],
    bestseller: true,
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630018825809-35217a65354b?w=600&h=800&fit=crop&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&h=800&fit=crop&q=80' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my Golden Sphere Huggies every single day — they haven\'t tarnished at all.',
  },
  {
    id: 2,
    name: 'Emma L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it.',
  },
  {
    id: 3,
    name: 'Jessica R.',
    rating: 5,
    text: 'Finally found jewelry that feels luxurious without the luxury markup. The Amber Lace Earrings are stunning in person.',
  },
]

export const ugcPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&q=80', caption: 'Everyday elegance ✨' },
  { id: 2, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&q=80', caption: 'Stacked & styled 💫' },
  { id: 3, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop&q=80', caption: 'Golden hour glow 🌅' },
  { id: 4, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop&q=80', caption: 'Gift goals 🎁' },
  { id: 5, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=700&fit=crop&q=80', caption: 'Layered perfection 💎' },
  { id: 6, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=700&fit=crop&q=80', caption: 'Minimalist magic ✨' },
]
