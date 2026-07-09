export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviews: 124,
    images: [
      { id: 'product-vivid-aura-1', hoverId: 'product-vivid-aura-1-hover', query: 'gold ear cuff crystal accent jewelry model' },
      { id: 'product-vivid-aura-2', query: 'gold ear cuff closeup detail luxury' },
    ],
    variants: [
      { id: 'gold', name: 'Gold', price: 42 },
      { id: 'silver', name: 'Silver', price: 42 },
    ],
    details: 'Elevate your everyday look with this stunning ear cuff. Crafted with precision and adorned with a delicate crystal accent, it catches the light beautifully.',
    materials: '18K gold plated over brass. Hypoallergenic. Crystal accent.',
    care: 'Avoid contact with water, perfume, and lotions. Store in a dry place. Clean with a soft cloth.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviews: 89,
    images: [
      { id: 'product-majestic-flora-1', hoverId: 'product-majestic-flora-1-hover', query: 'floral crystal necklace multicolor gold jewelry' },
      { id: 'product-majestic-flora-2', query: 'floral pendant necklace detail closeup' },
    ],
    variants: [
      { id: 'gold', name: 'Gold', price: 68 },
      { id: 'silver', name: 'Silver', price: 68 },
    ],
    details: 'A breathtaking floral pendant featuring multicolor crystals that dance in the light. The perfect statement piece for any occasion.',
    materials: '18K gold plated over brass. Multicolor Swarovski crystals. Adjustable chain 16-18 inches.',
    care: 'Store flat to prevent tangling. Avoid moisture and chemicals. Clean gently with a soft jewelry cloth.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviews: 156,
    images: [
      { id: 'product-golden-sphere-1', hoverId: 'product-golden-sphere-1-hover', query: 'gold dome huggie earrings chunky jewelry' },
      { id: 'product-golden-sphere-2', query: 'gold huggie earrings worn ear closeup' },
    ],
    variants: [
      { id: 'gold', name: 'Gold', price: 38 },
      { id: 'silver', name: 'Silver', price: 38 },
    ],
    details: 'These chunky dome huggies are the perfect everyday earring. Their substantial weight and polished finish make them feel luxurious yet effortless.',
    materials: '18K gold plated over brass. Hypoallergenic post back. 12mm diameter.',
    care: 'Keep away from water and perfume. Store in provided pouch. Polish with soft cloth.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.6,
    reviews: 73,
    images: [
      { id: 'product-amber-lace-1', hoverId: 'product-amber-lace-1-hover', query: 'gold filigree drop earrings textured lace jewelry' },
      { id: 'product-amber-lace-2', query: 'gold drop earrings detail filigree pattern' },
    ],
    variants: [
      { id: 'gold', name: 'Gold', price: 54 },
      { id: 'silver', name: 'Silver', price: 54 },
    ],
    details: 'Intricate filigree work creates a lace-like effect in these stunning drop earrings. They move beautifully and catch light from every angle.',
    materials: '18K gold plated over brass. Hypoallergenic. Drop length: 1.5 inches.',
    care: 'Handle with care due to delicate filigree. Store separately. Avoid moisture.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviews: 42,
    images: [
      { id: 'product-royal-heirloom-1', hoverId: 'product-royal-heirloom-1-hover', query: 'gold jewelry set necklace earrings gift box luxury' },
      { id: 'product-royal-heirloom-2', query: 'gold necklace and earring set flatlay' },
    ],
    variants: [
      { id: 'gold', name: 'Gold', price: 95 },
      { id: 'silver', name: 'Silver', price: 95 },
    ],
    details: 'The ultimate gift set. A matching necklace and earring pair presented in our signature velvet box. Perfect for special occasions or treating yourself.',
    materials: '18K gold plated over brass. Hypoallergenic. Necklace: 16-18 inch adjustable chain. Earrings: post back.',
    care: 'Store in provided velvet box. Keep pieces separate. Clean with soft cloth after each wear.',
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings', count: 2 },
  { id: 'necklaces', name: 'Necklaces', count: 2 },
  { id: 'huggies', name: 'Huggies', count: 1 },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. She absolutely loved it. The packaging is gorgeous.',
  },
  {
    id: 3,
    name: 'Emma R.',
    rating: 5,
    text: 'Finally found jewelry that looks expensive without the designer price tag. The filigree earrings are stunning.',
  },
]

export const ugcPosts = [
  { id: 1, caption: 'Everyday elegance ✨', query: 'woman wearing gold earrings natural light' },
  { id: 2, caption: 'Layered perfection', query: 'woman wearing gold necklace layered jewelry' },
  { id: 3, caption: 'Golden hour glow', query: 'woman gold jewelry sunset warm light' },
  { id: 4, caption: 'Stacked & styled', query: 'woman wearing multiple gold earrings styled' },
  { id: 5, caption: 'Minimal but mighty', query: 'woman wearing delicate gold jewelry minimal' },
  { id: 6, caption: 'Date night ready', query: 'woman wearing gold earrings necklace elegant' },
]
