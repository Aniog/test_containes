// Velmora Fine Jewelry - Seed Product Data

const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Vivid+Aura+Jewels",
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Vivid+Aura+Jewels+2"
    ],
    rating: 4.8,
    reviews: 124,
    bestseller: true,
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    images: [
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Majestic+Flora+Nectar",
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Majestic+Flora+Nectar+2"
    ],
    rating: 4.9,
    reviews: 89,
    bestseller: true,
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    images: [
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Golden+Sphere+Huggies",
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Golden+Sphere+Huggies+2"
    ],
    rating: 4.7,
    reviews: 156,
    bestseller: true,
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    images: [
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Amber+Lace+Earrings",
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Amber+Lace+Earrings+2"
    ],
    rating: 4.6,
    reviews: 98,
    bestseller: false,
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    images: [
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Royal+Heirloom+Set",
      "https://placehold.co/800x800/F5F0EB/1A1A1A?text=Royal+Heirloom+Set+2"
    ],
    rating: 5.0,
    reviews: 67,
    bestseller: true,
    inStock: true
  }
];

// UGC (User Generated Content) data for Instagram-style reel
const ugcPosts = [
  {
    id: 1,
    image: "https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+1",
    caption: "Everyday elegance",
    author: "@sarahj"
  },
  {
    id: 2,
    image: "https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+2",
    caption: "Stacked & styled",
    author: "@emilyr"
  },
  {
    id: 3,
    image: "https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+3",
    caption: "Golden hour glow",
    author: "@maria_k"
  },
  {
    id: 4,
    image: "https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+4",
    caption: "Minimal & chic",
    author: "@jess_l"
  },
  {
    id: 5,
    image: "https://placehold.co/400x500/F5F0EB/1A1A1A?text=Styled+5",
    caption: "Perfect gift",
    author: "@anna_m"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely love my Velmora pieces. The quality is exceptional and they've become my everyday staples.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "The perfect gift for myself. Elegant, timeless, and the gold tone is beautiful.",
    date: "2024-02-20"
  },
  {
    id: 3,
    name: "Maria",
    initial: "M",
    rating: 5,
    text: "Excellent customer service and fast shipping. The jewelry exceeds expectations!",
    date: "2024-03-10"
  }
];

export { products, ugcPosts, testimonials };
