export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    description: "A delicate gold ear cuff with a luminous crystal accent. Effortlessly elegant for everyday wear or stacked styling.",
    category: "Earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&q=80",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    description: "A stunning multi-color floral crystal necklace. Each petal catches the light, creating a garden of color at your neckline.",
    category: "Necklaces",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611500185636-e9e4d0c1f26d?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a polished high-shine finish. A modern classic that transitions from desk to dinner.",
    category: "Huggies",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    description: "Intricately textured gold filigree drop earrings. Vintage-inspired lacework meets modern minimalism.",
    category: "Earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1611109325436-de8a8b8107fe?w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    ],
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    description: "A gift-boxed set featuring a matching earring and necklace ensemble. The ultimate gift of lasting elegance.",
    category: "Sets",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1515562141589-47a0b48a52b2?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    rating: 5.0,
    reviews: 42,
  },
];

export const allProducts = [
  ...products,
  {
    id: "twilight-drop-earrings",
    name: "Twilight Drop Earrings",
    price: 48,
    description: "Sleek gold drop earrings with a brushed texture. Minimal yet captivating.",
    category: "Earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1611597617096-0e1ad59ae11e?w=800&q=80",
      "https://images.unsplash.com/photo-1620635134064-b2a3c1503352?w=800&q=80",
    ],
    rating: 4.5,
    reviews: 56,
  },
  {
    id: "celestial-chain",
    name: "Celestial Chain",
    price: 72,
    description: "A delicate gold chain necklace with a tiny star charm. Subtle celestial beauty.",
    category: "Necklaces",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611500185636-e9e4d0c1f26d?w=800&q=80",
    ],
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "mini-pearl-huggies",
    name: "Mini Pearl Huggies",
    price: 44,
    description: "Classic huggie earrings with a single freshwater pearl. Timeless romance.",
    category: "Huggies",
    material: "silver",
    images: [
      "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    rating: 4.7,
    reviews: 118,
  },
  {
    id: "woven-gold-bangle",
    name: "Woven Gold Bangle",
    price: 82,
    description: "A handwoven gold bangle with intricate braided detailing. Artisanal craftsmanship.",
    category: "Sets",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141589-47a0b48a52b2?w=800&q=80",
    ],
    rating: 4.9,
    reviews: 34,
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=80" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80" },
];

export const testimonials = [
  {
    name: "Sarah M.",
    text: "I've never received so many compliments on a piece of jewelry. The quality is exceptional — it looks far more expensive than it is.",
    rating: 5,
  },
  {
    name: "Jessica K.",
    text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Absolutely stunning craftsmanship.",
    rating: 5,
  },
  {
    name: "Amanda R.",
    text: "The Golden Sphere Huggies are my new everyday staple. So comfortable I forget I'm wearing them, yet they catch the light beautifully.",
    rating: 5,
  },
];

export const ugcCards = [
  { id: 1, caption: "Golden hour with my favorite hoops", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=80" },
  { id: 2, caption: "Necklace stack dreams", image: "https://images.unsplash.com/photo-1611500185636-e9e4d0c1f26d?w=400&q=80" },
  { id: 3, caption: "Just added to my collection", image: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?w=400&q=80" },
  { id: 4, caption: "Everyday elegance", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
  { id: 5, caption: "Date night look complete", image: "https://images.unsplash.com/photo-1611109325436-de8a8b8107fe?w=400&q=80" },
  { id: 6, caption: "New favorite accessory", image: "https://images.unsplash.com/photo-1620635134064-b2a3c1503352?w=400&q=80" },
];