export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    description:
      "A single gold ear cuff with a luminous crystal accent. Minimal yet striking, designed to catch the light from every angle.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    isNew: true,
    bestseller: true,
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    description:
      "A delicate floral necklace with multicolor crystal blossoms. Each petal is hand-set to create a garden of color at your neckline.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    isNew: false,
    bestseller: true,
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    description:
      "Chunky gold dome huggie earrings with a polished sphere silhouette. A modern classic that transitions effortlessly from day to night.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.7,
    reviews: 206,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    ],
    isNew: false,
    bestseller: true,
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    description:
      "Textured gold filigree drop earrings with an intricate lace-like pattern. Light-catching and utterly feminine.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.6,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    isNew: true,
    bestseller: true,
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    description:
      "A gift-boxed set featuring a matching earring and necklace ensemble. Heirloom quality, designed to be treasured for years.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 5.0,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
    ],
    isNew: false,
    bestseller: true,
  },
  {
    id: "lunar-drop-earrings",
    name: "Lunar Drop Earrings",
    category: "earrings",
    price: 48,
    description:
      "Crescent-shaped gold drop earrings with a subtle hammered texture. Inspired by the quiet glow of moonlight.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.5,
    reviews: 53,
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    isNew: false,
    bestseller: false,
  },
  {
    id: "ivory-petal-necklace",
    name: "Ivory Petal Necklace",
    category: "necklaces",
    price: 72,
    description:
      "A sculptural gold chain with delicate petal-shaped links. Elegant and whisper-light against the skin.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.8,
    reviews: 78,
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    ],
    isNew: false,
    bestseller: false,
  },
  {
    id: "signet-huggies",
    name: "Signet Huggies",
    category: "huggies",
    price: 44,
    description:
      "Mini signet-style huggie earrings with a polished gold face. A subtle nod to archival jewelry design.",
    material: "18K Gold Plated",
    care: "Avoid contact with water, perfume, and lotions. Store in a dry place.",
    rating: 4.6,
    reviews: 91,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    ],
    isNew: true,
    bestseller: false,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getBestsellers = () => products.filter((p) => p.bestseller);

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit);

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
];

export const testimonials = [
  {
    name: "Clara M.",
    text: "The Majestic Flora Nectar necklace arrived in the most beautiful packaging. It looks even more stunning in person — I've received so many compliments.",
    rating: 5,
  },
  {
    name: "Sophie K.",
    text: "I bought the Golden Sphere Huggies as a treat for myself and I haven't taken them off. They're lightweight, elegant, and go with everything.",
    rating: 5,
  },
  {
    name: "Elena R.",
    text: "Velmora's quality is exceptional for the price point. The Royal Heirloom Set was the perfect gift for my sister's birthday. She was thrilled.",
    rating: 5,
  },
];