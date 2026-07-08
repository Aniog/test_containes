// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    isBestseller: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Necklaces",
    material: "Gold",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    isBestseller: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Huggies",
    material: "Gold",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.6,
    reviews: 92,
    isBestseller: false
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Sets",
    material: "Gold",
    inStock: true,
    rating: 5.0,
    reviews: 67,
    isBestseller: true
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah",
    initial: "S",
    rating: 5,
    text: "Absolutely stunning pieces. The quality is exceptional and I get compliments every time I wear them.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Emily",
    initial: "E",
    rating: 5,
    text: "Perfect for gifting! Bought the Royal Heirloom Set for my sister's birthday and she loved it.",
    date: "2024-02-20"
  },
  {
    id: 3,
    name: "Michael",
    initial: "M",
    rating: 5,
    text: "Bought the Golden Sphere Huggies for my wife. The packaging was beautiful and the earrings are gorgeous.",
    date: "2024-03-10"
  }
];

// Categories
const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" }
];

export { products, testimonials, categories };