// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "Earrings",
    material: "Gold",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "Huggies",
    material: "Gold",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1630019852942-fd0ef8cef6c4?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-fd0ef8cef6c4?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    rating: 4.6,
    reviews: 92,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "Sets",
    material: "Gold",
    rating: 5.0,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true
  }
];

// UGC content for homepage
const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515372039744-b8c5d84b6ade?w=400&q=80",
    caption: "Perfect everyday elegance"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    caption: "Layered to perfection"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "My new favorite pair"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Golden hour glow"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1630019852942-fd0ef8cef6c4?w=400&q=80",
    caption: "Simple & stunning"
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely love my Vivid Aura ear cuff. The quality is incredible for the price point. I get compliments every time I wear it.",
    initial: "S"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "The Royal Heirloom Set was the perfect gift. Beautiful packaging and even more stunning in person. Will definitely be purchasing again.",
    initial: "E"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "Finally, demi-fine jewelry that doesn't tarnish! I've been wearing my Golden Sphere Huggies daily for months and they still look brand new.",
    initial: "J"
  }
];

export { products, ugcContent, testimonials };