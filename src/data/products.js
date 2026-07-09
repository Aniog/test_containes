const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviews: 89,
    badge: "New Arrival",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviews: 156,
    badge: null,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    category: "Earrings",
    material: "Gold",
    rating: 4.9,
    reviews: 67,
    badge: "Limited Edition",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    imageHover: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 43,
    badge: "Gift Set",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ]
  }
];

const categories = [
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  { name: "Huggies", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80" }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely stunning piece. The quality is exceptional and it arrived beautifully packaged. Will definitely be purchasing again.",
    initial: "S"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "I receive compliments every time I wear my Velmora necklace. The gold tone is perfect and hasn't faded at all.",
    initial: "E"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "The perfect gift for myself. Elegant, timeless, and the customer service was outstanding. Highly recommend.",
    initial: "J"
  }
];

const ugcPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Golden hour glow" },
  { id: 2, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", caption: "Everyday elegance" },
  { id: 3, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Stacked & styled" },
  { id: 4, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "Minimalist vibes" },
  { id: 5, image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80", caption: "Gifted with love" },
  { id: 6, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", caption: "Timeless beauty" }
];

export { products, categories, testimonials, ugcPosts };
