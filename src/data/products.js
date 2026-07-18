// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent. A stunning piece that adds elegance to any ensemble. Crafted with 18K gold plating for lasting beauty.",
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
    tags: ["bestseller", "new"],
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace. Each piece is handcrafted with attention to detail. Features delicate crystal accents on 18K gold plated chain.",
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
    tags: ["bestseller"],
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. Perfect for everyday wear or special occasions. Hypoallergenic and nickel-free.",
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
    tags: ["bestseller"],
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings. Intricate design inspired by vintage jewelry. Lightweight and comfortable for all-day wear.",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.6,
    reviews: 67,
    tags: [],
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special. Comes in our signature Velmora packaging.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Sets",
    material: "Gold",
    inStock: true,
    rating: 5.0,
    reviews: 43,
    tags: ["bestseller", "gift"],
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely beautiful jewelry. The quality is exceptional and I get compliments every time I wear it.",
    date: "2024-03-15",
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "I purchased the Royal Heirloom Set as a gift for my sister, and she hasn't taken it off since. Stunning quality.",
    date: "2024-02-28",
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "The Golden Sphere Huggies are my everyday go-to. Comfortable, beautiful, and the perfect size.",
    date: "2024-04-02",
  },
];

// UGC/Reel content
const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Morning light hits different ✨",
    author: "@sarahstyles",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Everyday elegance 💫",
    author: "@emilyj",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Gold details only 🌟",
    author: "@jessicat",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Treasure hunting 💎",
    author: "@avelinam",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Stacked & styled ✨",
    author: "@nicolew",
  },
];

export { products, testimonials, ugcContent };